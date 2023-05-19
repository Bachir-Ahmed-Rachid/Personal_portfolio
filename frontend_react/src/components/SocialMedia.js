import React from 'react'
import { AiFillGithub,AiFillLinkedin,AiFillFacebook   } from 'react-icons/ai';
const SocialMedia = () => {

  return(
    <div className='app__social'>
        
          <a href='https://github.com/Bachir-Ahmed-Rachid' target="_blank" rel="noopener noreferrer">
             <div>
              <AiFillGithub />
            </div>
          </a>
        
        
          <a href='https://www.linkedin.com/in/bachir-ahmed-rachid-a53726209/' target="_blank" rel="noopener noreferrer">

            <div>
              <AiFillLinkedin/>
            </div>

          </a>
        <div>
        <a href='https://www.facebook.com/ahmed.rachid.96155/' target="_blank" rel="noopener noreferrer">
          <div>
            <AiFillFacebook/>
          </div>
        </a>
        </div>
    </div>
  )
}

export default SocialMedia