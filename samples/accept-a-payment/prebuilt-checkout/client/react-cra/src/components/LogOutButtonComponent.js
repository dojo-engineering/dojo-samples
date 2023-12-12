import "./LogOutButtonComponent.css";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LogOutButtonComponent = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    function onClick() {
        logout();
        navigate("/");
    }

    return (
    <>
        <button className="logout" id="testPay" onClick={onClick}>
            Logout
        </button>
    </>);
};

export default LogOutButtonComponent;