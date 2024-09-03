import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div>
      <footer>
        <p className='text'>&copy; 2024 Large</p>
        <p><a href="#top" onClick={scrollToTop}>Back to Top</a></p>
      </footer>
    </div>
  )
}

function scrollToTop(event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default Footer
