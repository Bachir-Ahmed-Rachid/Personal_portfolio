import React, { useEffect, useState } from 'react'
import './Skills.scss'
import{motion} from 'framer-motion'
import {client, urlFor} from '../../client'
import {Tooltip} from 'react-tooltip';
import { AppWrap, MotionWrap } from '../../Wrapper'
const Skills = () => {
  const [skills, setSkills] = useState([])
  const [experiences, setExperiences] = useState([])

  useEffect(() => {
    const skillsQuery='*[_type =="skills"]'
    const experiencesQuery='*[_type =="experiences"]'

    client.fetch(skillsQuery)
          .then((data)=>{
            setSkills(data)
          })


    client.fetch(experiencesQuery)
          .then((data)=>{
            setExperiences(data)
          })

  }, [])
  return (
    <>
      <h2 className='head-text'>Skills and Experience</h2>
      <div className='app__skills-container'>
          <motion.div className='app__skills-list'>
            {skills?.map((skill,index)=>(
              <motion.div
                  key={skill.name}
                  whileInView={{opacity:[0,1]}}
                  transition={{duration:0.5}}
                  className='app__skills-item app__flex'>

                <div className='app__flex' style={{backgroundColor:skill.bgColor}}>
                    <img src={urlFor(skill.icon)} alt={skill.name}/>
                </div>
                <p className='p-text'>{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className='app__skills-exp'>

                {experiences?.map(experience=>(
                  <motion.div
                  className='ap__skills-exp-item'
                  key={experience.year}>
                    <div className='app__skills-exp-year'>
                        <p className='bold-text'>{experience.year}</p>
                    </div>
                       
                    <motion.div className='app__skills-exp-works'>
                        {experience?.works?.map(work=>( 
                              <>
                                <motion.div
                                  key={work.name}
                                  whileInView={{opacity:[0,1]}}
                                  transition={{duration:0.5}}
                                  className='app__skills-exp-work'
                                  data-tip
                                  data-for={work.name}
                                    >
                                      <h4 className='bold-text'>{work.name}</h4>
                                      <p className='p-text'>{work.company}</p>

                                  </motion.div>
                                    <Tooltip
                                        id={work.name}
                                        effect="solid"
                                        arrowColor="#fff"
                                        className="skills-tooltip">
                                        {work.desc}
                                  </Tooltip>
                              </>
                            
                            ))}
                    </motion.div>
                       
                  </motion.div>
                ))}
          </motion.div>


      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills,'app__skills'),
  'skills',
  'app__whitebg')