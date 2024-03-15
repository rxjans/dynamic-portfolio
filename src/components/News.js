import { useEffect, useState } from "react";
import { aTagClick, fatchData } from "../utilits";
import BlogPopUp from "./popup/BlogPopUp";
const News = () => {
  const [data, setData] = useState([]);
  const [popupData, setPopupData] = useState([]);
  const [popup, setPopup] = useState(false);
  useEffect(async () => {
    const fetchData = async()=>{
      try {
        const res = await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");
        const data = await res.json();
        if(res.ok){
          setData(data.user.timeline);
        }
        if(!res.ok){
          console.log(data.success);
        }
      } 
     catch (error) {
        console.log(error);   
      }
  }
  fetchData();
  aTagClick();
  }, []);
  return (
    <div className="dizme_tm_section" id="blog">
      <BlogPopUp open={popup} data={popupData} close={() => setPopup(false)} />
      <div className="dizme_tm_news">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>My Timeline</span>
            <h3>{`Work History and Achievements`}</h3>
          </div>
          <div className="news_list">
            <ul>
              {data &&
                data.map((timeline, i) => (
                  <li className="wow fadeInUp" data-wow-duration="1s" key={i}>
                    <div className="list_inner">
                      <div className="image">
                        <img src="https://www.careeraddict.com/uploads/article/62364/work-experience.png" alt="image" />
                        <div
                          className="main"
                          data-img-url="https://www.careeraddict.com/uploads/article/62364/work-experience.png  "
                          style={{
                            backgroundImage: `url(${blog && blog.img})`,
                          }}
                        />
                        <div className="date">
                          <h3>{data && new Date(timeline.startDate).toLocaleDateString()}</h3>
                          <span>to {data && new Date(timeline.endDate).getUTCFullYear()}</span>
                        </div>
                        <a
                          className="dizme_tm_full_link"
                          href="#"
                          onClick={() => {
                            setPopupData(data && timeline);
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
                            {data && data.bulletPoints &&
                              data.bulletPoints.map((timeline, i) => (
                                <p key={i}>{timeline.bulletPoints}</p>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
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
