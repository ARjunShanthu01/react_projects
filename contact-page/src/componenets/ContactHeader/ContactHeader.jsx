import styles from './Contactheader.module.css'


const ContactHeader = () => {
  return (
    <div className={`${styles.contact_header_section} container`}>
      <h1>Get in touch with us</h1>
      <p>We value your feedback and suggestions as they help us improve our products and services. If you have any thoughts or ideas you'd like to share with us, please don't hesitate to reach out. Your input is invaluable to us, and we appreciate the opportunity to better serve you.
      </p>
    </div>
  )
}

export default ContactHeader
