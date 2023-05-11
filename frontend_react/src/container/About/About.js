import React, { useEffect, useState } from 'react'
import './About.scss'
import { motion} from 'framer-motion'
import {client, urlFor} from '../../client'
import { AppWrap, MotionWrap } from '../../Wrapper'
const About = () => {
  const [abouts, setAbouts] = useState([])
  useEffect(() => {
    console.log('you are in about')

    const query='*[_type =="abouts"]'
    client.fetch(query).then((data)=>setAbouts(data))
      }, [])

  return (
    <>
      <h2 className='head-text'>
      <span>Building </span>digital solutions to real-world <span>problems </span>is my <span>passion</span>.
      </h2>
      <div className='app__profiles'>
        {abouts.map((about,index)=>(
          <motion.div
          whileInView={{opacity:1}}
          whileHover={{scale:1.1}}
          transition={{duration:0.5,type:'tween'}}
          className='app__profiles-items'
          key={about.title+index}
          >
            <img src={urlFor(about.imgUrl)}  alt='about  title'/>
            <h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
            <p className='p-text' style={{marginTop:10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About,'app__about'),
  'about',
  "app__whitebg"
  )