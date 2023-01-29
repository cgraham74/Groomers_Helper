import React from 'react';
import PetCard from '../Pet/PetCardComponent';
import Client from './Client';
import './ClientCardStyle.css'


const ClientContactCardComponent = () => {
const {name, phone, email, contactPreference, pets} = Client;
  return (
  <div className='client-container'>
      <h4>Client Details</h4>
      <p>Name: {name}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Contact Preference: {contactPreference}</p>
      <h5>Pets</h5>
      <ul id='client-pet'>
        {pets.map(pet => (
          <li key={pet.id} className='client-petlist'>
            <PetCard {...pet}/>
          </li>
        ))}
      </ul>
  </div>
 );
 };
export default ClientContactCardComponent;