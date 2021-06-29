import React from 'react';

function ContactCard(props) {
  return(
    <div className='App'>
      <h1>{props.name}</h1>
      <h4>{props.about}</h4>
      <ul>
        <li>{props.quali1}</li>
        <li>{props.quali2}</li>
        <li>{props.quali3}</li>
      </ul>
    </div> 
  )
}

export default ContactCard;