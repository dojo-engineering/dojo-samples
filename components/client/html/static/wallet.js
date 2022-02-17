const config = {
    containerId: 'demo-payment-wallet',
    paymentDetails: {
        amount: '100',
        currencyCode: '826',
        countryCode: 'GB',
        paymentToken: 'Uk9x5Crbo7zPaKAHs5bRYVaTnicMjCaQGu9MsiMwIiC8cYN3qCNhR8OcMMvCBANUZK0pxXkOZkDDWy4JDTkWGTF9xVhbGdG1lGBLP4r83GxGDGKmoOI1YBpZJiK2tkDTEWzq'
    },
    buttonConfig: {
        color: 'black',
        type: 'plain'
    },
    emailRequired: true,
    billingAddressRequired: false,
    shippingAddressRequired: false
}

const wallet = new Connect.Wallet(config, displayErrors, paymentComplete);


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