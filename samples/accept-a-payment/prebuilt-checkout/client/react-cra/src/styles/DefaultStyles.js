const rowHeight = '80px';

export default {
    base: {
        default: {
            '-webkit-appearance': 'none',
            '-moz-appearance': 'none',
            appearance: 'none',
            color: 'black',
            backgroundColor: '#fff',
            textDecoration: 'none',
            fontFamily: 'Roboto, sans-serif',
            boxSizing: 'border-box',
            boxShadow: 'none',
            fontSize: '16px',
            height: '48px',
            padding: '12px 16px',
            borderRadius: '4px',
            borderColor: 'black',
            lineHeight: '1.5',
            margin: '0',
            borderWidth: '1px',
            transition: 'border-color 0.5s cubic-bezier(0.35, 0, 0.25, 1)'
        },
        focus: {
            borderColor: 'black',
            borderWidth: '2px',
            outline: '0',
            boxShadow: 0
        },
        error: {
            borderColor: '#b0151f',
            borderWidth: '2px',
        },
        valid: {},
        label: {
            display: 'block',
            fontSize: '16px',
            lineHeight: '24px',
            marginBottom: '4px',
            color: 'rgba(0, 0, 0, 0.87)',
            fontFamily: 'Roboto, sans-serif'
        },
        validationText: {
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '400',
            marginTop: '4px',
            fontFamily: 'Roboto, sans-serif'
        },
        validationIcon: {
            width: '16px',
            height: '18px',
            marginTop: '1px',
            marginRight: '8px',
            verticalAlign: 'top'
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
        bottom: '45px',
        height: '20px'
    }
};
