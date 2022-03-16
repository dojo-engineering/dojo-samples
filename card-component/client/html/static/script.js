// POST
fetch('/checkout', {

    // Declare what type of data we're sending
    headers: {
        'Content-Type': 'application/json'
    },
    // Specify the method
    method: 'POST',
    mode: 'no-cors',

    // A JSON payload
    body: JSON.stringify({
        "greeting": ""
    })
})
    .then(response => response.json())
    .then(function (data) {
        const config = {
            paymentDetails: {
                //amount: data.amount,
                //currencyCode: data.currencyCode,
                paymentToken: data.paymentToken,  //connecteToken
            },
            containerId: "demo-payment",
            fontCss: ['https://fonts.googleapis.com/css?family=Do+Hyeon'],
            styles: {
                base: {},
            }
        }

        // intialising connection
        const connectE = new Connect.ConnectE(config, displayErrorsCallback);

        // sending payment on button click and processing the response
        const btnTestPay = document.getElementById("testPay");

        btnTestPay.onclick = () =>{
            btnTestPay.innerText = 'loading';
            btnTestPay.setAttribute("disabled", "true");
            connectE.executePayment()
                .then(function(data) {
                    document.getElementById("demo-payment").hidden = true;
                    btnTestPay.remove();
                    document.getElementById("demo-result").hidden = false;
                    document.getElementById("status-code").innerText = data.statusCode;
                    document.getElementById("auth-code").innerText = data.authCode;
                }).catch(function(data) {
                        console.log('Payment Request failed: ' + data);
                        btnTestPay.innerText = 'Pay';
                        btnTestPay.removeAttribute("disabled");
                        if (typeof data === 'string') {
                            document.getElementById("errors").innerText = data;
                        }
                        if (data && data.message) {
                            document.getElementById("errors").innerText = data.message;
                        }
                    }
                );
            };

        // handling errors
        function displayErrorsCallback(errors) {
            const errorsDiv = document.getElementById('errors');
            errorsDiv.innerHTML = '';
            if (errors && errors.length) {
                const list = document.createElement("ul");
                for (const error of errors) {
                    const item = document.createElement("li");
                    item.innerText = error.message;
                    list.appendChild(item);
                }
                errorsDiv.appendChild(list);
            }
        }
    });