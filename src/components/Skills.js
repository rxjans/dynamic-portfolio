import { useEffect, useState, useContext } from "react";
import { activeSkillProgress, fatchData } from "../utilits";
import {motion} from 'framer-motion';
import { fadeIn } from '../components/variants';
import UserContext from "../userContext/userContext";

const Skills = ({ dark }) => {
  const data1 = useContext(UserContext);
  const data = data1?.skills?.filter(item => item.enabled)?.sort((a,b)=> a.sequence - b.sequence);
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  }, []);

  setTimeout(() => {
    let VanillaTilt = require("vanilla-tilt");
    VanillaTilt.init(document.querySelectorAll(".tilt-effect"), {
      maxTilt: 6,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      speed: 500,
      transition: true,
    });
    setVisible(true);
  }, 1000);
  



  return (
    <div className="dizme_tm_section">
        <div className="dizme_tm_skills">
          <div className="container">
            <div id="wrapperall" className="wrapper">
              <div className="left">
                <div
                  className="dizme_tm_main_title wow fadeInUp"
                  data-wow-duration="1s"
                  data-align="left"
                >
                  <span>Live the Life as you want</span>
                  <h2>I develop 3D visuals, user interfaces and web applications</h2>
                  <p>
                    Most common methods for designing websites that work well on
                    desktop is responsive and adaptive design
                  </p>
                </div>
                <div
                  className="dodo_progress fadeInUp wow"
                  data-wow-duration="1s"
                >
                  <div className="over ">
                    {data &&
                        data?.filter(item => item.enabled).map((skill, i) => {
                          let color;
                          if (skill.percentage < 71) {
                            color = '#f7a334';
                          } else if (skill.percentage < 80) {
                            color = '#f79234';
                          } else if (skill.percentage < 90) {
                            // Interpolate the color between dark orange and light orange
                            color = "#f77834";
                          }else if (skill.percentage < 95) {
                            // Interpolate the color between dark orange and light orange
                            color = "#f75b34";
                          }else {
                            // Skill percentage is 90 or above, use light orange
                            color = '#f75023';
                          } return(
                        <div
                          className="container progress_inner skillsInner___"
                          data-value={skill.percentage}
                          data-color={color}
                          key={i}
                        >
                          <span>
                            <span className="label">{skill.name}</span>
                            <span className="number">{skill.percentage}%</span>
                          </span>
                          <div className="background">
                            <div className="bar">
                              <div className="bar_in" />
                            </div>
                          </div>
                        </div>
                      )})}
                  </div>
                </div>
              </div>
              <div
               className="right hidden1 tilt-effect">
                <div className="boxx">
                  <div className="contentt">
                    <img className="" src={data1?.about?.avatar?.url} alt="image" />  
                    <h2>{data1?.about?.name}<br></br><span>{data1?.about?.title}</span></h2>
                    <a href="#">Hire Me</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};
export default Skills;
