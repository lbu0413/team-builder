import React, { useState } from 'react';

const membersList = [
    {name: 'Paul', email: 'paul@paul.com'},
    {name: 'Leon', email: 'leon@leon.com'},
    {name: 'Levi', email: 'levi@levi.com'},
]

const initialFormValues = {
    name : '',
    email : '',
}

function Form(props){
    const { values, update, submit } = props;
    const [members, setMembers] = useState(membersList);
    const [formValues, setFormValues] = useState(initialFormValues);

    const onChange = evt => {
        const {name, value} = evt.target;
        setFormValues({...formValues, [name]: value});
    }



    return (
        
        
        <form>
            <label>name

            <input 
            type="text" 
            placeholder="enter your name" 
            name="name"
            value={formValues.name}
            onChange={onChange}/>
            </label>
            <br></br>

            <label>email
            <input 
            type="email" 
            placeholder="enter your email"
            name="email"
            value={formValues.email}/>
            </label>
            <br></br>

            <label>role
            <select 
            name="role"
            value={formValues.role}
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