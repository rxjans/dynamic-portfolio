import { useEffect, useState, useContext } from "react";
import { aTagClick, fatchData } from "../utilits";
import BlogPopUp from "./popup/BlogPopUp";
import UserContext from "../userContext/userContext";

const News = () => {
  const data1 = useContext(UserContext);
  const [educationData, setEducationData] = useState([]);
  const [workData, setWorkData] = useState([]);
  const [popupData, setPopupData] = useState([]);
  const [popup, setPopup] = useState(false);
  const [active, setActive] = useState('Work');

  useEffect(()=>{
    setEducationData(data1?.timeline?.filter(item => item.forEducation));
    setWorkData(data1?.timeline?.filter(item => !item.forEducation)); //filtering data based on forEducation property.
},[data1])

  useEffect(async () => {
  aTagClick();
  }, [workData]);

  return (
    <div className="dizme_tm_section" id="blog">
      <BlogPopUp open={popup} data={popupData} close={() => setPopup(false)} />
      <div className="dizme_tm_news">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>My Timeline</span>
            <h3>{`Work Experience and Achievements`}</h3>
          </div>
          <div className=" ctr wow fadeInUp ">
              <a onClick={()=>setActive('Work')} className={`btn c-pointer ${active === 'Work' && 'active'}`}>
                Work Experience
              </a>
              <a onClick={()=>setActive('Edu')} className={`btn c-pointer ${active === 'Edu' && 'active'}`}>
                Education
              </a>
          </div>
          <div className="news_list">

          {
            active === 'Work' ? 
            (<ul>
              {workData &&
                workData.map((timeline, i) => (
                  <li className="wow fadeInUp" data-wow-duration="1s" key={i}>
                    <div className="list_inner">
                      <div className="image">
                        <img src="https://www.careeraddict.com/uploads/article/59897/career-developm-work-experience-benefits.jpg?v=12345" alt="image" />
                        <div
                          className="main"
                          data-img-url="https://www.careeraddict.com/uploads/article/59897/career-developm-work-experience-benefits.jpg?v=12345"
                          style={{
                            backgroundImage: `url("https://www.careeraddict.com/uploads/article/59897/career-developm-work-experience-benefits.jpg?v=12345")`,
                          }}
                        />
                        <div className="date">
                          <h3>{workData && new Date(timeline.startDate).toLocaleDateString()}</h3>
                          <span>to {workData && new Date(timeline.endDate).getUTCFullYear()}</span>
                        </div>
                        <a
                          className="dizme_tm_full_link"
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setPopupData(timeline);
                            setPopup(true);
                          }}
                        />
                      </div>
                      <div className="details">
                        <span className="category">
                          <a href="#">{timeline.company_name}</a>
                        </span>
                        <h3 className="title">
                          <a href="#">{timeline.jobTitle}</a>
                        </h3>
                      </div>
                      <div className="news_hidden_details">
                        <div className="news_popup_informations">
                          <div className="text">
                            {workData && data1.bulletPoints &&
                              workData?.bulletPoints.map((timeline, i) => (
                                <p key={i}>{timeline.bulletPoints}</p>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>)
            :
            (<ul>
              {educationData &&
                educationData.map((timeline, i) => (
                  <li className="wow fadeInUp" data-wow-duration="1s" key={i}>
                    <div className="list_inner">
                      <div className="image">
                        <img src="https://cdn.elearningindustry.com/wp-content/uploads/2022/02/shutterstock_1112381495.jpg?v=123" alt="image" />
                        <div
                          className="main"
                          data-img-url="https://cdn.elearningindustry.com/wp-content/uploads/2022/02/shutterstock_1112381495.jpg?v=123"
                          style={{
                            backgroundImage: `url("https://cdn.elearningindustry.com/wp-content/uploads/2022/02/shutterstock_1112381495.jpg?v=123")`,
                          }}
                        />
                        <div className="date">
                          <h3>{educationData && new Date(timeline.startDate).toLocaleDateString()}</h3>
                          <span>to {educationData && new Date(timeline.endDate).getUTCFullYear()}</span>
                        </div>
                        <a
                          className="dizme_tm_full_link"
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setPopupData(timeline);
                            setPopup(true);
                          }}
                        />
                      </div>
                      <div className="details">
                        <span className="category">
                          <a href="#">{timeline.company_name}</a>
                        </span>
                        <h3 className="title">
                          <a href="#">{timeline.jobTitle}</a>
                        </h3>
                      </div>
                      <div className="news_hidden_details">
                        <div className="news_popup_informations">
                          <div className="text">
                            {educationData && educationData?.bulletPoints &&
                              educationData.bulletPoints.map((timeline, i) => (
                                <p key={i}>{timeline.bulletPoints}</p>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>)
          }
            
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/news/1.png" alt="image" />
        </div>
        <div className="brush_2 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/news/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default News;
