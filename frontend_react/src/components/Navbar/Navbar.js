import React, { useState } from 'react'
import './Navbar.scss'
import {HiMenuAlt4,HiX} from 'react-icons/hi'
import {images} from '../../constants/index'
import {motion} from 'framer-motion'
const elements_navbar=['home','work','about','skills','testimonials']
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='app__navbar'>
      <div className='app__logo'>
        <img  src={images.logo_bachir_ahmed} alt="logo"/>
      </div>
      <ul className='app__links'>
        {elements_navbar.map(element=>(
          <li className='app__flex p-text' key={`link-${element}`} >

            <div />
            <a href={`#${element}`}>{element}</a>

          </li>
        ))}
      </ul>
      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={()=>setToggle(true)}/>
      
      {toggle && (
        <motion.div whileInView={{x:[100,0]}} transition={{duration:0.85,ease:'easeOut'}}>
                  <HiX onClick={()=>setToggle(false)}/>
                  <ul>
                    {elements_navbar.map(element=>(
                      <li  key={element} >
                        <a onClick={()=>setToggle(false)} href={`#${element}`}>{element}</a>
                      </li>
                    ))}
                  </ul>
        </motion.div>
      )}
      </div>
    </nav>
  )
}

export default Navbar