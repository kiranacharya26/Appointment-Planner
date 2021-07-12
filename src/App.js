import React, { useState } from 'react'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'

import { AppointmentsPage } from './containers/appointmentsPage/AppointmentsPage'
import { ContactsPage } from './containers/contactsPage/ContactsPage'

function App() {
  const [contacts, setContacts] = useState([])
  const [appointments, setAppointments] = useState([])
  /*
  Define state variables for 
  contacts and appointments 
  */

  const ROUTES = {
    CONTACTS: '/contacts',
    APPOINTMENTS: '/appointments',
  }

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContact = (name, phone, email) => {
    setContacts({
      name,
      phone,
      email,
    })
  }
  const addAppointment = (name, phone, email, contact) => {
    setContacts({
      name,
      phone,
      email,
      contact,
    })
  }
  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName='active'>
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName='active'>
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path='/'>
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS} addContact={addContact}>
            <ContactsPage />
          </Route>
          <Route path={ROUTES.APPOINTMENTS} addAppointment={addAppointment}>
            <AppointmentsPage />
          </Route>
        </Switch>
      </main>
    </>
  )
}

export default App
