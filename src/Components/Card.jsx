import React from 'react'
import { ArrowIcon } from '../assets/Svgs'

const Card = (props) => {
    const activeClass = "bg-[#1D77FF] text-white"
    const inActiveClass = "bg-[#F2F2F2]"
  return (
    <div 
      className={`p-[18px] flex justify-between items-center rounded-[8px] cursor-pointer ${props.isActive ? activeClass : inActiveClass}`}
      onClick={props.onClick}
    >
      <span>{props.title}</span>
      <ArrowIcon className={props.isActive ? "text-white": ""}/>
    </div>
  )
}

export default Card
