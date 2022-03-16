const config = {
    paymentDetails: {
        paymentToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjE4YTA3NmUwNzI0ZGRjYjhjYjc2MTBiOGNjZjYwMjc2N2JmNmFkNGYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJzdXBlcnBheS1ncmFwaHFsQGZpcmVmbHktZGV2LTIwMTguaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzdWIiOiJzdXBlcnBheS1ncmFwaHFsQGZpcmVmbHktZGV2LTIwMTguaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJhdWQiOiJhcGkuZG9qby5kZXYiLCJleHAiOjE2NDM4OTQ2NTgsImlhdCI6MTY0Mzg5MTA1OH0.OMDlTxOhdaacw5R-Vg_fwb-eXVgPlJcgGR0aFYx_dVi11fo-nSpgfmi98j7I00_LSPVWNrKnHp3VLerCJCv1YrUfyS8_iJpBnrISHxuaPXsu0jNNesQ4cpB26d9ecjO3kBnU9rudu2w8bj9CPCXcSV3lketWEy7eGIGNJNBvGGfDK--ko6e3aWVZ4hHhZPoU5AD49hQrFW_Rd1IFxkLQRhn1Qi9HvxBgX25pBdHr6djDkQIKjkFnhVWISK9jUg7u_SFUmYYGMKY49rzd3F3T-ZcvOKM7_7yS3Ap7kFGQKM0918g0u2TGSGt2zjEGd9OTMPju-auAEB6PApkhTzQjqQ",  //connecteToken
    },
containerId: "demo-payment",
    fontCss: ['https://fonts.googleapis.com/css?family=Do+Hyeon'],
    styles: {}
}

const wallet = new Connect.Wallet(config, displayErrorsCallback);
const btnTestPay = document.getElementById("testPay");

btnTestPay.onclick = () =>{
   btnTestPay.innerText = 'loading';
   btnTestPay.setAttribute("disabled", "true");
   wallet.executePayment()
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

function paymentComplete(response) {
    document.getElementById('demo-payment-wallet').hidden = true;
    document.getElementById('demo-result').hidden = false;
    document.getElementById('status-code').innerText = response.statusCode;
    document.getElementById('auth-code').innerText = response.authCode;
    document.getElementById('message').innerText = response.message;
}

function displayErrorsCallback(errors) {
   const errorsDiv = document.getElementById('errors');
   errorsDiv.innerHTML = '';
   if (errors && errors.length) {
       const list = document.createElement("ul");
       for (const error of errors){
           const item = document.createElement("li");
           item.innerText = error.message;
           list.appendChild(item);
       }
       errorsDiv.appendChild(list);
   }
}