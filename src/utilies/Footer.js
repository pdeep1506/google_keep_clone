import React from 'react'

const Footer = () => {
  const todaydata = new Date();
  const year = todaydata.getFullYear()
  return (
    <footer>
    <p>Copyright © {year}</p></footer>
  )
}

export default Footer