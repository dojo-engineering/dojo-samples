import ClipLoader from "react-spinners/ClipLoader";

const PayButtonComponent = ({amountInMinorUnit, ready, enabled, onClick}) => {

    return (
    <>
        { ready ? 
            <button className="checkout" id="testPay" onClick={onClick} disabled={!enabled}>
                Pay £{amountInMinorUnit / 100}
            </button> : <ClipLoader color="black" /> }
    </>);
};

export default PayButtonComponent;