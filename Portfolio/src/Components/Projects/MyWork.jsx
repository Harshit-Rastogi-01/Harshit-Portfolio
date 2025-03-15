import React from 'react'
import './MyWork.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import arrow_icon from "../../assets/arrow_icon.svg"
import mywork_data from '../../assets/mywork_data'
import { Link } from 'react-router-dom'
const MyWork = () => {
  return (
    <div id='mywork' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work,index)=>{
          return <img key={index} src={work.w_img} alt="" />
        })}
      </div>
      <a href="https://github.com/Harshit-Rastogi-01" target='_blank'>
      <div className="mywork-showmore">
        <p>Get Directed to GITHUB Profile</p>
        <img src={arrow_icon} alt="" />
      </div>
      </a>
      
    </div>
  )
}

export default MyWork
