import React from 'react';
import ContactCard from './ContactCard';
import contactsData from './contactsData';
import '../App.css';

function MainContent() {
  const contactComponents = contactsData.map(contact => <ContactCard 
    key={contact.id}
    name={contact.name}
    about={contact.about}
    quali1={contact.quali1}
    quali2={contact.quali2}
    quali3={contact.quali3}
    />);
  
  return (
    <div className="App">
      {contactComponents}
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learning React
      </a>
    </div>  
  );
}

export default MainContent;