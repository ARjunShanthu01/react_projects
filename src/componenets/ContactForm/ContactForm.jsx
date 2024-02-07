import { useState } from 'react';
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import Button from '../Button/Button';
import styles from './Contactform.module.css'


const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const onSubmit = (event) => {
        event.preventDefault();

        setName(event.target[0].value)
        setEmail(event.target[1].value)
        setMessage(event.target[2].value)

        console.log("name", event.target[0].value);
        console.log("email", event.target[1].value);
        console.log("mesaage", event.target[2].value);
    }

    return (
        <>
            <section className={styles.container}>
                <div className={styles.contact_form}>
                    <div className={styles.top_btn}>
                        <Button text="VIA CALL" icon={<MdCall fontSize='20px' />} href="tel:+1234567890"></Button>
                        <Button isOutline={true} text="VIA EMAIL FORM" icon={<FaEnvelope fontSize='20px' />} href="mailto:example@example.com"></Button>
                    </div>
                    <p style={{ textAlign: 'center;' }}>Or Simply fill the Form</p>

                    <form onSubmit={onSubmit}>
                        <div className={styles.form_control}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id='name' name='name' />
                        </div>

                        <div className={styles.form_control}>
                            <label htmlFor="email">Email</label>
                            <input type='email' id='email' name='email' />
                        </div>

                        <div className={styles.form_control}>
                            <label htmlFor="tel">Message</label>
                            <textarea name="message" id="" cols="30" rows="3"></textarea>
                        </div>
                        <div style={
                            { display: "flex", justifyContent: "end" }
                        }>
                            <Button text="SUBMIT "></Button>
                        </div>
                    </form>
                    

                    <div className={styles.result_box}>
                        <h3>Result :</h3>
                        Name : {name}<br />
                        Email :  {email}<br />
                        Message : {message}
                    </div>
                </div>
                <div className={styles.contact_img}>
                    <img src="./images/contact-us-image.jpg" alt="contact img" />
                </div>
            </section>
        </>
    )
}

export default ContactForm
