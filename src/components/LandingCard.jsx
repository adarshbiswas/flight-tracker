import React from 'react'

const LandingCard = (props) => {
  return (
    <div className='landing_card flex flex-col items-center text-center w-[400px] '>
    {props.icon}
    <h1 className='text-xl'>{props.title}</h1>
    <p>{props.desc}</p>
    </div>
  )
}

export default LandingCard