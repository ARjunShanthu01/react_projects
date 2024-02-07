import './App.css'
import Navbar from './componenets/Navbar/Navbar'
import ContactHeader from './componenets/ContactHeader/ContactHeader'
import ContactForm from './componenets/Contactform/ContactForm'

function App() {

  return (
    <>
      <Navbar />
      <main className='main_container'>
        <ContactHeader />
        <ContactForm />
      </main>
    </>
  )
}

export default App


