import { useState } from 'react'
import axios from 'axios'
import "../styles/Contact.css"


function Contact() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")

  const handleSubmit= (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/contact/submit",{
      fullName:name,
      emailId:email,
      phoneNumber:phone
    })
  }
  return (
    <div className='main'>
      <div className='first'>
      <form onSubmit={handleSubmit}>
      <h1>Contact Form</h1>
      <h4>Please fill all entries.</h4>
        <p>Full Name</p>
        <input className = "name" 
        type="text"
        placeholder="Full name"
        onChange={(e) => {setName(e.target.value)}}
        />
        <p>Email Id</p>
        <input className = "email" 
        type="email"
        placeholder="Email Id"
        onChange={(e) => {setEmail(e.target.value)}}
        />
        <p>Phone Number</p>
        <input className = "phone" 
        type="tel"
        placeholder="Phone Number"
        onChange={(e) => {setPhone(e.target.value)}}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default Contact