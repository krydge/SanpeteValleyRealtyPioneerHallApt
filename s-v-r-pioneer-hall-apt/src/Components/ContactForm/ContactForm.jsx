import { useState } from "react";
function ContactForm() {
  const [formData, setFormData] = useState({ "ContactName": "", "Email": "", "Message": "" })
  const [readyTosend, setReady] = useState(false);
  const handleChange = (event) => {
    checkState()
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
    if (!formData.ContactName === "" && !formData.Email === "" && !formData.Message === "")
      setReady(true)
    else
      setReady(false)
  }
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>First and Last Name</label>
        <input type="text" id="contactName" name="ContactName" placeholder="Your Name" value={formData.ContactName} onChange={handleChange}></input>
        <label>Email Address</label>
        <input type="text" id="contactName" name="Email" placeholder="Your Email Address" value={formData.Email} onChange={handleChange}></input>
        <label>Your Message</label>
        <textarea id="contactName" name="Message" placeholder="Your Name" value={formData.Message} onChange={handleChange}></textarea>
        {!readyTosend && <button type="submit" disabled={true}>Submit</button>}
        {readyTosend && <a href={`mailto:tammy@sanpetevalleyrealty ?subject=${formData.ContactName}&body=${formData.Message}`}>Submit</a>}
      </form>
    </div>
  )
}

export default ContactForm;