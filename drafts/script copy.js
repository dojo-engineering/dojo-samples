const payConfig = {
    paymentDetails: {
        amount: "100",
        currencyCode: "826",
        paymentToken: "Uk9x5Crbo7zPaKAHs5bRYVaTnicMjCaQGu9MsiMwIiC8cYN3qCNhR8OcMMvCBANUZK0pxXkOZkDDWy4JDTkWGTF9xVhbGdG1lGBLP4r83GxGDGKmoOI1YBpZJiK2tkDTEWzq",  //connecteToken
    },
    containerId: "demo-payment",
    fontCss: ['https://fonts.googleapis.com/css?family=Do+Hyeon'],
    styles: {
        base: {
            default: {
                '-webkit-appearance':'none',
                '-moz-appearance':'none',
                appearance:'none',
                color: "black",
                backgroundColor: '#fff',
                textDecoration: "none",
                fontFamily: "'Roboto', sans-serif",
                boxSizing: "border-box",
                boxShadow: 'none',
                fontSize: '16px',
                height: '48px',
                padding: "12px 16px",
                borderRadius: '4px',
                borderColor: '#D9D9D9',
                lineHeight: '1.5',
                margin: '0',
                borderWidth:'1px',
                transition:'border-color 0.2s cubic-bezier(0.35, 0, 0.25, 1)'
            },
            focus: {
                borderColor: '#00857D',
                borderWidth: '2px',
                outline:'0',
                boxShadow: 0
            },
            error: {
                borderColor: "#B0151F"
            },
            valid: {
            },
            label: {
                display: 'block',
                fontSize: '16px',
                lineHeight: '24px',
                marginBottom:'4px',
                color: 'rgba(0,0,0,0.87)',
                fontFamily: 'Roboto, sans-serif'
            }
        },
        validationText: {
            fontSize: '14px',
            lineHeight: '20px',
            fontFamily: 'Roboto, sans-serif'
        },
        validationIcon: {
            width: '15px',
            height: '20px',
            marginRight: '10px',
            verticalAlign: 'bottom'
        }
    },
    form: {
        display: 'grid',
        'grid-template-rows': '108px 108px 108px',
        'grid-template-columns': '1fr 24px 1fr'
    },
    cardName: {
        container: {
            'grid-row': '1',
            'grid-column': '1/4'
        }
    },
    cv2: {
        container: {
            'grid-row': '3',
            'grid-column': '3'
        },
        default: {
            borderRadius: '4px'
        }
    },
    expiryDate: {
        container: {
            'grid-row': '3',
            'grid-column': '1'
        },
        default: {
            borderRadius: '4px'
        }
    },

    cardNumber: {
        container: {
            'grid-row': '2',
            'grid-column': '1/4'
        },
        default: {
            borderRadius: '4px'
        }
    },
    cardIcon: {
        display: 'none'
    }
}

const connectE = new Connect.ConnectE(payConfig, displayErrors);
const btnTestPay = document.getElementById("testPay");

btnTestPay.onclick = () => {
    btnTestPay.innerText = 'loading';
    btnTestPay.setAttribute("disabled", "true");
    connectE.executePayment()
        .then(function (data) {
            document.getElementById("demo-payment").hidden = true;
            btnTestPay.remove();
            document.getElementById("demo-result").hidden = false;
            document.getElementById("status-code").innerText = data.statusCode;
            document.getElementById("auth-code").innerText = data.authCode;
        }).catch(function (data) {
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
function displayErrors(errors) {
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