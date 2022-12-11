

// import React from 'react'
// const ContactForm = () => {
//   const [formStatus, setFormStatus] = React.useState('Send')
//   const onSubmit = (e) => {
//     e.preventDefault()
//     setFormStatus('Submitting...')
//     const { message } = e.target.elements
//     let conFom = {
//       message: message.value,
//     }
//     console.log(conFom)
//   }
//   return (
//     <div className="container mt-5">
//       <form onSubmit={onSubmit}>
//         <div className="mb-3">
//           <label className="form-label" htmlFor="message">
//             Message
//           </label>
//           <textarea className="form-control" id="message" required />
//         </div>
//         <button className="btn btn-danger" type="submit">
//           {formStatus}
//         </button>
//       </form>
//     </div>
//   )
// }
// export default ContactForm







import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
  


    async function createMessage(event) {
        event.preventDefault();

        const newMessage = {
            // key/name: value from state
            title: title,
            content: content,
         
        };

        const response = await fetch("https://quotes-api.talomensomhed.dk/wp-json/wp/v2/messages?_embed", {
            method: "POST",
            body: JSON.stringify(newMessage)
        });
        if (response.ok) {
            navigate("/");
        }
    }

    return (
        <section className="page">
            <h1>Create New User</h1>
            <form onSubmit={createMessage}>
                <input type="text" value={title} placeholder="Type a title" onChange={e => setTitle(e.target.value)} />
                <input type="text" value={content} placeholder="Type a name" onChange={e => setContent(e.target.value)} />
                <button>Save</button>
            </form>
        </section>
    );
}
