import React from 'react'

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form on onSubmit={handleSubmit}>
      <input
        type='text'
        name='name'
        value={name}
        required
        placeholder='Please enter a name'
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='tel'
        name='phone'
        value={phone}
        required
        pattern='[[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}]'
        placeholder='Please enter phone number'
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type='email'
        name='email'
        value={email}
        required
        placeholder='Please enter an email'
        onChange={(e) => setEmail(e.target.value)}
      />
      <input type='submit' />
    </form>
  )
}
