import { useState } from "react"
import Swal from 'sweetalert2'
import "./Login.css"
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"
import Header from "../../Header/Header"
import { useUsers } from "../../hooks/queries/useUsersQuery"
function Login(){
    const [userName , setUserName] = useState("")
    const [password , setPassword] = useState("")
    const [message , setMessage] = useState("")
    const navigate = useNavigate()
    const {data: users , isLoading} = useUsers()

    const submitHandler = (e) => {
        e.preventDefault()
        setMessage("")
        let isEmpty = false
        if(!(userName && password)){
            setMessage("لطفا همه فیلد هارا پر کنید!")
            isEmpty = true
        }
        if(isEmpty) return;
        

        if (isLoading) {
            Swal.fire("لطفا صبر کنید", "در حال بررسی اطلاعات...", "info");
            return;
        }
        const admin = users?.find(user => user.role === "admin")
        const isAdmin = admin?.username === userName && admin?.password === password
        const isUser = users?.find(user => user.username === userName && user.password === password)
        if(isAdmin){
            Cookies.set("userName" , "admin")
            Cookies.set("name" , `${userName}`)
            sessionStorage.setItem("userName" , `${userName}`)
            navigate("/panel")
        } 
        else if(isUser){
            Cookies.set("userName" , "user")
            Cookies.set("name" , `${userName}`)
            sessionStorage.setItem("userName" , `${userName}`)
            navigate("/panel")  
        } 
        else {
            Swal.fire("خطا", "نام کاربری یا رمز عبور اشتباه است", "error");
        }
    }



    return(
        <>
        <Header />
        <div className="login-page">
            <div className="form">
                <form className="login-form" onSubmit={ submitHandler }>
                <input onChange={ (e) => setUserName(e.target.value)} type="text" placeholder="username" />
                <input onChange={ (e) => setPassword(e.target.value)} type="password" placeholder="password" />
                <button type="submit">login</button>
                </form>
                {message && <h4 className="text-center text-danger mt-3">{message}</h4>}
            </div>
        </div>
        </>
    )
}
export default Login