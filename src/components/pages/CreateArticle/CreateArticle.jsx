import Header from "../../Header/Header"
import Footer from "../../Footer/Footer"
import "./CreateArticle.css"
import { useState } from "react"
import axios from "axios"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useCreateArticle } from "../../hooks/mutations/useArticleMutations"

function CreateArticle(){
    const [message , setMessage] = useState("")
    const [formData , setFormData] = useState({title: "", info: "", writer: "", category: "", image: "", time: ""})
    const [border , setBorder] = useState({
        title: "1px solid gray",
        info: "1px solid gray",
        writer: "1px solid gray",
        category: "1px solid gray",
        image: "1px solid gray",
        time: "1px solid gray"
    })
    const {mutate: createArticle , isSuccess , isError , isPending} = useCreateArticle()
    
    const changeHandler = (e) => {
        const {name , value} = e.target
        if(value.trim() === ""){
            setBorder({
                ...border,
                [name]: "2px solid red"
            })
        }
        else{
            setBorder({
                ...border,
                [name] : "1px solid gray"
            })
        }
        setFormData({
            ...formData,
            [name] : value
        })
    }





    const sendPost = (e) => {
        e.preventDefault()
        setMessage("")
        const newBorders = { ...border }
        let hasEmptyField = false

        Object.entries(formData).forEach( ([key , value]) => {
            if(value.toString().trim() === ""){
                newBorders[key] = "2px solid red"
                hasEmptyField = true;
            }
            else{
                newBorders[key] = "1px solid gray"
            }
        })
        setBorder(newBorders)
 
        if(hasEmptyField){
            setMessage("لطفا همه فیلد ها را پر کنید!")
            return;
        }
        createArticle(formData , {
            onSuccess: () => {
                setFormData({title: "", info: "", writer: "", category: "", image: "", time: ""})
            }
        })
    }
    return (
        <>
        <Header />
        <section className="create-article">
            <form action="">
                <div>
                    <label htmlFor="">عنوان مقاله</label>
                    <input type="text" value={formData.title} name="title" style={{border:`${border.title}`}} onChange={changeHandler} />
                </div>

                <div>
                    <label htmlFor="">توضیح کوتاه</label>
                    <input type="text" value={formData.info} name="info" style={{border:`${border.info}`}} onChange={changeHandler} />
                </div>

                <div>
                    <label htmlFor="">نویسنده مقاله</label>
                    <input type="text" value={formData.writer} name="writer"style={{border:`${border.writer}`}} onChange={changeHandler} />
                </div>

                <div>
                    <label htmlFor="">موضوع مقاله</label>
                    <input type="text" value={formData.category} name="category" style={{border:`${border.category}`}} onChange={changeHandler} />
                </div>


                <div>
                    <label htmlFor="">عکس مقاله</label>
                    <input type="text" value={formData.image} name="image" style={{border:`${border.image}`}} onChange={changeHandler} />
                </div>

                <div>
                    <label htmlFor="">مدت زمان خواندن</label>
                    <input type="text" value={formData.time} name="time" style={{border:`${border.time}`}} onChange={changeHandler} />
                </div>


                <button onClick={sendPost} disabled={isPending}>
                    {isPending ? "در حال ارسال" : "ساخت مقاله"}
                </button>
            </form>
            {message && <h4 className="text-center text-danger mt-3">{message}</h4>}
            {isError && <h4 className="text-center text-danger mt-3">خطا در سرور: {mutation.error.message}</h4>}
            {isSuccess && <h4 className="text-center text-success mt-3">مقاله با موفقیت اضافه شد!</h4>}
        </section>
        <Footer />
        </>
    )
}
export default CreateArticle