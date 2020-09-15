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

function Form(){
    const [members, setMembers] = useState(membersList);
    const [formValues, setFormValues] = useState(initialFormValues);

    const onChange = evt => {
        const {name, value} = evt.target;
        setFormValues({...formValues, [name]: value});
    }
    const onSubmit = evt => {
        evt.preventDefault();
        const newMember = {
            name: formValues.name.trim(),
            email: formValues.email.trim(),
            role: formValues.role
        }
        setMembers([...members, newMember]);
        setFormValues(initialFormValues);
    }



    return (
       
        <form onSubmit={onSubmit}>
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
            onChange={onChange}
            value={formValues.email}/>
            </label>
            <br></br>

            <label>role
            <select 
            name="role"
            value={formValues.role}
            onChange={onChange}
            >
                <option>--select your role--</option>
                <option value="F.Engineer">frontend engeineer</option>
                <option value="B.Engineer">backend engineer</option>
                <option value="Designer">designer</option>
            </select>
            </label>
            <br></br>
            <button>Submit</button>
            
        </form>
        
    )
}




export default Form;