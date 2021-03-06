import React from 'react'
import styled from 'styled-components'
import logo from 'assets/images/cover.png'
import logo1 from 'assets/images/cover2.png'
import logo2 from 'assets/images/cover3.png'
const Brand = () => {
  return (
    <Link href="https://mr-wii.com/">
      <Image
        src={logo}
        alt="Mr Wii"
        onMouseOver={e => (e.currentTarget.src = logo1)}
        onMouseOut={e => (e.currentTarget.src = logo2)}
      />
    </Link>
  )
}

export default Brand

const Link = styled.a`
  width: 10%;
  height: auto;
  margin: auto 0;
  @media only screen and (max-width: 600px) {
    height: auto;
    width: 35%;
  }
`

const Image = styled.img`
  width: 100%;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`
