import React from 'react'
import './MyWork.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import arrow_icon from "../../assets/arrow_icon.svg"
import mywork_data from '../../assets/mywork_data'
// import { Link } from 'react-router-dom'
const MyWork = () => {
  return (
    <div id='mywork' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Projects </h1>
        <img src={theme_pattern} alt="" />
      </div>
    {/* ------------------------ changed from down ------------------------------------- */}
      {/* <div className="mywork-container">
        {mywork_data.map((work,index)=>{
          return <img key={index} src={work.w_img} alt="" />
        })}
      </div> */}
    {/* -----------------------------new code changed --------------- */}

    <div className="mywork-container">
        { mywork_data.map((work,index) =>{
          return <div key={index} className="mywork-format">
            <h4 className='number'>{work.w_no}</h4>
            <h3>{work.w_name}</h3>
            <img key={index} src={work.w_img} alt="" />
            <p className="desc">{work.w_desc}</p>
            
            {/* {work.w_link && ( */}
              <a href={work.w_link} target="_blank" rel="noopener noreferrer" className="projects-readmore"> 
                <p>Try Link</p>
                {/* <img src={arrow_icon} alt="" /> */}
              </a>
             {/* )}   */}
          </div>
        })}
      </div>
      <a href="https://github.com/Harshit-Rastogi-01" target='_blank'>
      <div className="mywork-showmore">
        <p><span>Get Directed to </span> GITHUB Profile</p>
        <img src={arrow_icon} alt="" />
      </div>
      </a>
      
    </div>
  )
}

export default MyWork
