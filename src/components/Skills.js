import { useEffect, useState, useContext } from "react";
import { activeSkillProgress, fatchData } from "../utilits";
import UserContext from "../userContext/userContext";
const Skills = ({ dark }) => {
  const data = useContext(UserContext);
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  }, []);

  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_skills">
        <div className="container">
          <div className="wrapper">
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
                className="dodo_progress wow fadeInUp"
                data-wow-duration="1s"
              >
                {data &&
                  data?.skills?.filter(item => item.enabled).map((skill, i) => (
                    <div
                      className="progress_inner skillsInner___"
                      data-value={skill.percentage}
                      data-color="rgb(247, 80, 35)"
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
                  ))}
              </div>
            </div>
            <div className="right hidden1">
              <div className="image-container1">
                <img className="" src={data?.about?.avatar?.url} alt="image" />  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
