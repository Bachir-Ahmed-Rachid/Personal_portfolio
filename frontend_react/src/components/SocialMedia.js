import React from 'react'
import { AiFillGithub,AiFillLinkedin,AiFillFacebook   } from 'react-icons/ai';

const SocialMedia = () => {
  return(
    <div className='app__social'>
        <div>
            <AiFillGithub/>
        </div>
        <div>
            <AiFillLinkedin/>
        </div>
        <div>
            <AiFillFacebook/>
        </div>
    </div>
  )
}

export default SocialMedia