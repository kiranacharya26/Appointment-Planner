import React, { useState } from 'react'
import ContactForm from '../../components/contactForm/ContactForm'
import TitleList from '../../components/tileList/TileList'

export const ContactsPage = ({ contacts, addContacts }) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [duplicate, setDuplicate] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!duplicate) {
      addContacts(name, phone, email)
      setName('')
      setPhone('')
      setEmail('')
    }
  }
  useEffect(() => {
    const duplicateName = () => {
      const find = contacts.find((contact) => contact.name === name)
      if (!find === undefined) {
        return true
      }
      return false
    }
    if (duplicateName()) {
      setDuplicate(true)
    } else {
      setDuplicate(false)
    }
  }, [name, duplicate, contacts])

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name
          setName
          phone
          setPhone
          email
          setEmail
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TitleList title={contacts} />
      </section>
    </div>
  )
}
