import Header from "../../Header/Header"
import Footer from "../../Footer/Footer"
import Cookies from "js-cookie"
import { useEffect } from "react"
import Swal from "sweetalert2"

function Panel(){
    const role = Cookies.get("userName")
    const nameuser = Cookies.get("name")
    useEffect(() => {
    // دریافت نام کاربر از کوکی
        const userName = sessionStorage.getItem("userName");
        if (userName) {
        Swal.fire({
            title: `خوش آمدید! 👋`,
            text:  `${userName} به پنل کاربری خوش آمدی`,
            icon: "success",
            timer: 3000, // بعد از ۳ ثانیه خودش بسته می‌شود
            timerProgressBar: true, // نمایش نوار پیشرفت زمان
            showConfirmButton: false, // حذف دکمه OK برای زیبایی بیشتر
            toast: true, // نمایش به صورت Toast (در گوشه صفحه) یا حذف این خط برای حالت بزرگ
            // position: "top-end", // قرارگیری در گوشه بالا سمت راست
        });
        }
        sessionStorage.removeItem("userName")
    }, [role]);

    return (
        <>
        <Header />
        <section>  
            <h2 className="text-center">
                {role === "admin" ? "پنل کاربری ادمین" : `پنل کاربری ${nameuser}` }
            </h2>
        </section>
        <Footer />
        </>
    )
}
export default Panel