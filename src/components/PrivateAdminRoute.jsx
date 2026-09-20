import {Navigate} from "react-router-dom"
import Cookies from "js-cookie"
function PrivateAdminRoute({children}) {

    const isLogin = () => {
        const userName = Cookies.get("userName");
        if(userName === "admin") return true;
        else return false;
    }
    return(
        <>
        {isLogin() ? children : <Navigate to="/login" />}
        </>
    )
}
export default PrivateAdminRoute