import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import {client, urlFor} from '../../client'
import { AppWrap } from '../../Wrapper'
import './Work.scss'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
const work_items=['Algorithms','React','Django','NodeJs','All']
const Work = () => {
  const [active, setActive] = useState('All')
  const [animateCard, setAnimateCard] = useState({y:0,opacity:1})
  const [works, setWorks] = useState([])
  const [filterWorks, setFilterWorks] = useState([])
  const handleClick=(element)=>{
    setActive(element)
    setAnimateCard({y:100,opacity:0})
    setTimeout(() => {
      setAnimateCard({y:0,opacity:1})
      if(element==='All'){
        setFilterWorks(works)
      }else{
        setFilterWorks(works.filter(work=>work.tags.includes(element)))        
      }
    }, 500);
  }

  useEffect(() => {
    const query='*[_type =="works"]'
    client.fetch(query)
          .then((data)=>{
            setWorks(data)
            setFilterWorks(data)
          })
  }, [])
  

  return (
    <>
    <h2 className='head-text'>My <span>Portfolio</span>Section</h2>
    <div className='app__work-filter'>
        {work_items.map((element,index)=>(
          <div 
          key={`${index}`}
          className={`app__work-filter-item  app__flex p-text ${element===active?'item-active':''}`}
          onClick={()=>handleClick(element)}
          >
            {element}
          </div>
        ))}
    </div>
    <motion.div
        animate={animateCard}
        transition={{duration:0.5,delayChildren:0.5}}
        className='app__work-portfolio'>
        {filterWorks.map((element,index)=>( 
          <div  key={`${element}-${index}`} className='app__work-item app__flex'>
            <div className='app__work-img  app__flex'>
              <img src={urlFor(element.imgUrl)} alt={`${element.name}`}/>
              <motion.div
                whileHover={{opacity:[0,1]}}
                transition={{duration:0.5,ease:'easeInOut'}}
                className='app__work-hover app__flex'
                >
                  <a href={element.projectLink} target='_blank' >
                    <motion.div
                    whileInView={{scale:[0,1]}}
                    whileHover={{scale:[1,0.9]}}
                    transition={{duration:0.25}}
                    className='app__flex'
                    >
                        <AiFillEye/>
                    </motion.div>
                  </a>

                  <a href={element.codeLink} target='_blank' >
                    <motion.div
                    whileInView={{scale:[0,1]}}
                    whileHover={{scale:[1,0.9]}}
                    transition={{duration:0.25}}
                    className='app__flex'
                    >
                        <AiFillGithub/>
                    </motion.div>
                  </a>
              </motion.div>
            </div>
            <div className='app__work-content app__flex'>
                <h4 className='bold-text'>{element.title}</h4>
                <p className='p-text' style={{marginTop:10}}>{element.description}</p>
                <div className='app__work-tag app__flex'>
                  <p className='p-text'>{element.tags[0]}</p>
                </div>
            </div>
          </div>
        ))}
    </motion.div>
    </>

  )
}

export default AppWrap(Work,'work')