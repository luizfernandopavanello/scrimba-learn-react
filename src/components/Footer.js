import React from 'react'
import '../App.css';

function Footer() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay

  if (hours < 12) {
    timeOfDay = 'Good Morning'
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'Good Afternoon'
  } else {
    timeOfDay = 'Good Night'
  }

  return (
    <div className="App-footer">
      <h5>{timeOfDay}</h5>
      <footer>2021</footer>
    </div>
  )
}

export default Footer;