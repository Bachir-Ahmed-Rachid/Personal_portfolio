import React from 'react'

const NavigationDots = ({active}) => {
const elements_navbar=['home','about','work','skills','testimonials']

  return (
    <div className='app__navigation'>
         {elements_navbar.map((element,index)=>(
            <a 
            key={`${index}-${element}`} 
            className='app__navigation-dot'
            style={active===element?{backgroundColor:'#313BAC'}:{}}
            href={`#${element}`}>
                
            </a>
        ))}
    </div> 
  )
}

export default NavigationDots