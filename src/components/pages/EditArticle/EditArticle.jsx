import { useEffect, useState } from "react"
import "./EditArticle.css"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useEdditArticle } from "../../hooks/mutations/useArticleMutations"
import { useArticle } from "../../hooks/queries/useArticleQueries"
function EditArticle(){
    const { blogId } = useParams()
    const [border , setBorder] = useState({
        title: "1px solid gray",
        info: "1px solid gray",
        writer: "1px solid gray",
        category: "1px solid gray",
        image: "1px solid gray",
        time: "1px solid gray"
    })
    const [formData , setFormData] = useState({title: "", info: "", writer: "", category: "", image: "", time: ""})
    const [message , setMessage] = useState("")
    const {mutate: editArticle , isSuccess , isError , isPending} = useEdditArticle()
    const {data: article } = useArticle(blogId)

    // نمایش دیتا های مقاله در فرم ویرایش
    useEffect(() => {
        if (article) {
            setFormData({
                title: article.title,
                info: article.info,
                writer: article.writer,
                category: article.category,
                image: article.image,
                time: article.time
            });
        }
    }, [article , blogId]);


    // مدیریت تغییرات در فرم
    const changeHandler =  (e) => {
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


    // مدیریت درخواست ویرایش مقاله
    const editRequest = (e) => {
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

        editArticle({ id: blogId, data: formData });
    }


    return(
        <section className="edit-article">
            <form action="">
                <div>
                    <label htmlFor="">عنوان مقاله</label>
                    <input type="text" name="title"  style={{border:`${border.title}`}} value={formData.title || ""} onChange={changeHandler} />
                </div>

                <div>
                    <label htmlFor="">توضیح کوتاه</label>
                    <input type="text" name="info" style={{border:`${border.info}`}} value={formData.info || ""} onChange={changeHandler} />
                </div>

                <div>
                    <label htmlFor="">نویسنده مقاله</label>
                    <input type="text" name="writer" style={{border:`${border.writer}`}} value={formData.writer || ""} onChange={changeHandler} />
                </div>

                <div>
                    <label htmlFor="">موضوع مقاله</label>
                    <input type="text" name="category" style={{border:`${border.category}`}} value={formData.category || ""} onChange={changeHandler} />
                </div> 


                <div>
                    <label htmlFor="">عکس مقاله</label>
                    <input type="text" name="image" style={{border:`${border.image}`}} value={formData.image || ""} onChange={changeHandler} />
                </div>

                <div>
                    <label htmlFor="">مدت زمان خواندن</label>
                    <input type="text" name="time" style={{border:`${border.time}`}} value={formData.time || ""} onChange={changeHandler} />
                </div>


                <button type="submit" onClick={editRequest} disabled={isPending} >
                    {isPending ? "در حال ویرایش..." : "ویرایش"}
                </button>
            </form>
            {message && <h4 className="text-center text-danger mt-3">{message}</h4>}
            {isError && <h4 className="text-center text-danger mt-3">خطایی رخ داده لطفا دوباره تلاش کنید!</h4>}
            {isSuccess && <h4 className="text-center text-success mt-3">مقاله با موفقیت ویرایش شد!</h4> }
        </section>
    )
}
export default EditArticle