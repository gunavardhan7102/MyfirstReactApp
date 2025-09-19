import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navSection'>
        <ul>
        <Link to='firstpage'>
            <li>FirstPage</li>
            </Link>
            <Link to='/secondpage'>
              <li>SecondPage</li>
              </Link>
              <Link to='thirdpage'>
                <li>ThirdPage</li>
                </Link>
                <Link to='fourthpage'>
                  <li>FourthPage</li>
                  </Link>
        </ul>
    </div>
  )
}

export default Navbar