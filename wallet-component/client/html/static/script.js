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
            containerId: 'demo-payment-wallet',
            paymentDetails: {
                paymentToken: data.paymentToken,  //connecteToken
            },
            buttonConfig: {
                color: 'black',
                type: 'plain'
            },
            emailRequired: true,
            billingAddressRequired: false,
            shippingAddressRequired: false
        }

        const wallet = new Dojo.WalletPayment(config, displayErrors, paymentComplete);

        function paymentComplete(response) {
            document.getElementById('demo-payment-wallet').hidden = true;
            document.getElementById('demo-result').hidden = false;
            document.getElementById('status-code').innerText = response.statusCode;
            document.getElementById('auth-code').innerText = response.authCode;
            document.getElementById('message').innerText = response.message;
        }
        
        function displayErrors(errors) {
            const errorsDiv = document.getElementById('errors');
            errorsDiv.innerHTML = '';
        
            if (errors && errors.length) {
                const list = document.createElement('ul');
                for (const error of errors){
                    const item = document.createElement('li');
                    item.innerText = error.message;
                    list.appendChild(item);
                }
                errorsDiv.appendChild(list);
            }
        }
    });