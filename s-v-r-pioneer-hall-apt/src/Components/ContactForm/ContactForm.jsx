import { useState } from "react";

const inputStyle = {
  width: '100%',
  padding: '12px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxSizing: 'border-box',
  marginTop: '6px',
  marginBottom: '16px',
  resize: 'vertical'
}

const textAreaStyle = {
  width: '100%',
  padding: '12px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxSizing: 'border-box',
  marginTop: '6px',
  marginBottom: '16px',
  resize: 'vertical',
  minHeight:'12vh'
}

const submitButtonNotValid = {
  backgroundColor: '#7D8491',
  color: '#F4783B',
  padding: '12px 20px',
  border: 'none',
  borderRadius: '4px',
  width: '10vw'
}
const submitButtonValid = {
  backgroundColor: '#003668',
  color: '#F4783B',
  padding: '12px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  textDecoration: 'none',
  width: '10vw',
  fontWeight: 'bold'

}
const labelStyle = {
  fontWeight: 'bold'
}
const formStyle = {
  width: "80%",
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: 'auto',
  marginTop:'2vh'
}

function ContactForm() {
  const [formData, setFormData] = useState({ "ContactName": "", "Email": "", "Message": "", "Phone": "" })
  const [readyTosend, setReady] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData(values => ({ ...values, [name]: value }))
    checkState()
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(<a href={`mailto:tammy@sanpetevalleyrealty ?subject=${formData.ContactName}&body=${formData.Message}`}>Send Email</a>)
  }
  function checkState() {
    if (formData.ContactName === "")
      setReady(false)
    if (formData.Email === "")
      setReady(false)
    if (formData.Message === "")
      setReady(false)
    if (formData.ContactName !== "" && formData.Email !== "" && formData.Message !== "")
      setReady(true)

  }
  return (
    <form onSubmit={(e) => handleSubmit(e)} style={formStyle}>

      <label style={labelStyle}>First and Last Name</label>
      <input type="text" id="contactName" name="ContactName" placeholder="Your Name" value={formData.ContactName} onChange={handleChange} style={inputStyle}></input>

      <label style={labelStyle}>Phone Number</label>
      <input type="text" id="contactPhone" name="Phone" placeholder="Your Phone Number" value={formData.Phone} onChange={handleChange} style={inputStyle}></input>

      <label style={labelStyle}>Email Address</label>
      <input type="text" id="contactName" name="Email" placeholder="Your Email Address" value={formData.Email} onChange={handleChange} style={inputStyle}></input>

      <label style={labelStyle}>Your Message</label>
      <textarea id="contactName" name="Message" placeholder="Your Message" value={formData.Message} onChange={handleChange} style={textAreaStyle}></textarea>

      <div style={{margin:'2vh'}}>
        {!readyTosend && <a style={submitButtonNotValid}>Submit</a>}
        {readyTosend && <a href={`mailto:tammy@sanpetevalleyrealty ?subject=${formData.ContactName}&body=From: ${formData.ContactName}%0d%0aPhone Number: ${formData.Phone}%0d%0a${formData.Message} `} style={submitButtonValid}>Submit</a>}
      </div>

    </form>
  )
}

export default ContactForm;