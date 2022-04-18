
import { useState } from "react";
const Form = () =>{

    const [formData, setformData] = useState({
        username : "",
        age : "",
    })

    const handleChange = (e) =>{
        // object destructuring
        const { id, value } = e.target
        console.log('value:', value)
        console.log('id:', id)
        
        console.log('formData:', formData)
        setformData({
            ...formData,

            [id] : value,
        })
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('formData:', formData)
        fetch("http:localhost:8080/user",{
            method : "POST",
            headers : {

            },
            body : JSON.stringify(formData),
        })
    }

    console.log('formData:', formData)
    return (
        <form action="" onSubmit={handleSubmit}>
            <input onChange = {handleChange} placeholder = "enter username" type="text" id = "username" />
            <input onChange = {handleChange} placeholder = "enter age" type="text" id = "age"/>
            <input onChange = {handleChange} placeholder = "enter email" type="text" id = "email"/>
            <input type="submit" value="submit" />
        </form>
    )
}
export { Form }