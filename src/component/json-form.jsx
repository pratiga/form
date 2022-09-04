/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState} from 'react';
import Axios from 'axios';
const data = {
    "form":{
        "sections":[
            {
                "order":1,
                "section_title":"Basic Information",
                "fields":[
                    {
                        "id":"1",
                        "name":"name",
                        "label":"Name",
                        "required":true,
                        "data_type":"Integer",
                        "html_element": "textbox"
                    },
                    {
                        "id":"2",
                        "name":"email",
                        "label":"Email",
                        "hidden":false,
                        "required":true,
                        "data_type":"String",
                        "html_element": "email"
                    },
                    {
                        "id":"3",
                        "name":"phone",
                        "label":"Phone",
                        "required":true,
                        "data_type":"number",
                        "html_element": "textbox"
                    },
                    {
                        "id":"4",
                        "name":"age",
                        "label":"Age",
                        "hidden":false,
                        "required":true,
                        "options":[],
                        "data_type":"number",
                        "html_element": "number" 
                    },
                    {
                        "id":"5",
                        "name":"photo",
                        "label":"Photo",
                        "required": false,
                        "options":[],
                        "hidden":false,
                        "data_type":"Image",
                        "html_element": "file"
                    }
                    
                ]
            }
        ]
    }
}

 const json = () => {
     const url = ""
   const [user, setUser] = useState({
       id:"",name:"", email:"", phone:"", age:"", photo:""
   });
   
    let name,value;
    const handleInputs = (e) => {
        console.log(e);
        name= e.target.Name;
        value= e.target.value;
        
        // eslint-disable-next-line no-undef
        setUser({...user, [name]:value})
    }
    
    function submit(e) {
        e.preventDefault();
        Axios.post(url,{
            name:user.name,
            email:user.email,
            phone:user.phone,
            age:user.age,
            photo:user.photo 
        })
        .then(res => {
            console.log(res.user)
        })
    }
   
   
  return (
    <div className='container'>
      <form  onSubmit={(e) => submit(e)} className='form-outer'>
        {
            data.form.sections.map(formData => {
                 //console.log("formData",formData)
                return(
                    <div>
                        <h1>{formData.section_title}</h1>
                        {
                            formData.fields.map(inputData => {
                                 //console.log("inputData", inputData)
                                return(
                                    <div key={inputData.id}>
                                        <label>{inputData.label}</label>
                                        <input type={inputData.html_element} 
                                        Name={inputData.name}
                                        required={inputData.required}
                                         datatype={inputData.data_type}
                                         onChange={handleInputs}
                                         value={user.Name}
                                         />
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            })
        }
        <button type='onSubmit'>Submit</button>
      </form>
    </div>
  )
}


export default json