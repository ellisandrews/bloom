import React from 'react'
import { Container } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons'


const AboutContainer = () => {
  return (
    <Container id="about-container" className="border-black rounded my-2">
      <h3 className="py-3">About</h3>
      <p>GitHub Repository: <a href="https://github.com/ellisandrews/bloom">github.com/ellisandrews/bloom</a></p>
      <p>Created by Ellis Andrews. Connect with me!</p>
      <div id="social-icons" className="my-3">
        <span>
          <SocialIcon className="mx-1" url="https://github.com/ellisandrews"/>
          <SocialIcon className="mx-1" url="https://www.linkedin.com/in/ellis-andrews/"/>
          <SocialIcon className="mx-1" url="https://medium.com/@ellisandrews1"/>
        </span>
      </div>
    </Container>
  )
}


export default AboutContainer
