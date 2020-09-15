import React, { useState } from 'react';


const initialFormValues = {
    name : '',
    email : '',
    role : '', 
}

function Form(props){
    const { values, update, submit } = props;
    const [members, setMembers] = useState([]);
    const [formValues, setFormValues] = useState(initialFormValues);

    const onChange = evt => {
        const {name, value} = evt.target;
    }



    return (
        <form>
            <label>name

            <input 
            type="text" 
            placeholder="enter your name" 
            name="name"
            value={values.name}
            onChange={onChange}/>
            </label>
            <br></br>

            <label>email
            <input 
            type="email" 
            placeholder="enter your email"
            name="email"
            value={values.email}/>
            </label>
            <br></br>

            <label>role
            <select 
            name="role"
            value={values.role}
            onChange={onChange}>
                <option>--select your role--</option>
                <option>frontend engeineer</option>
                <option>backend engineer</option>
                <option>designer</option>
            </select>
            </label>
            <br></br>
            <button>Submit</button>
            
        </form>
    )
}




export default Form;