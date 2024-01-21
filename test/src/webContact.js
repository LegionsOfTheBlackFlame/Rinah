import { useState, useEffect } from "react"

export default function WebContact() {
    const [userMessageData, setUserMessageData] = useState({
        msg_title: '',
        msg_body: '',
        msg_sender_email: ''
    })

    const handleFormChange = (e) => {
        const {name, value} = e.target;
        setUserMessageData({...userMessageData, [name]: value});
        console.log('Input value changing. The affected input: ', name, "Updated value: ", value);
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting form: ", e);
        console.log("Values being submitted: ", userMessageData);

        try {

            const response = await fetch('http://localhost:3001/post/user-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userMessageData),
            });

            if (response.ok) {
                console.log("Message submitted.");
            } else {
                console.error('Form submission failed');
              }

        } catch (error) {
            console.error('Error submitting form:', error);
        }
    }

    return(
        <div className="sect">

            <form 
            id="ContactForm"
            className="contact-form"
            onSubmit={handleFormSubmit}>
                <input
                type="text"
                name="msg_title"
                className="inputs msg-title-input"
                onChange={handleFormChange}
                value={userMessageData.MessageTitle}
                placeholder="Title"/>

                <input 
                type="email"
                name="msg_sender_email"
                className="inputs msg-email-input"
                onChange={handleFormChange}
                value={userMessageData.SenderEmail}
                placeholder="example@gmail.com"/>

                <textarea
                type="textbox"
                name="msg_body"
                className="inputs msg-text-input"
                onChange={handleFormChange}
                value={userMessageData.MessageBody}
                rows="5" cols="50"
                placeholder="Your message to us..."/>

                <button type="submit" className="button msg-submit-button"> Send! </button>
            </form>

        </div>
    )
}