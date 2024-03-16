import Isotope from "isotope-layout";
import { useEffect, useRef, useState, useContext } from "react";
import { dataImage, portfolioHover } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";
import UserContext from "../userContext/userContext";
import WOW from "wowjs";

const Portfolio = () => {
  const data1 = useContext(UserContext);
  const [data, setData] = useState([]);


  useEffect(()=>{
      setData(data1?.projects?.filter(item => item.enabled)); //filtering data based on enabled property.
  },[data1])

  useEffect(() => {
      dataImage();
      portfolioHover();
  },[data]);


  // Isotope
  const isotope = useRef();
  const [techStackFilter, setTechStackFilter] = useState("*"); //using techStack filter instead of filter keys.
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item",
          //  layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
    return () => isotope.current.destroy();
  }, []);

  useEffect(() => {
    if (isotope.current) {
      techStackFilter === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${techStackFilter}` });
    }
  }, [techStackFilter]);

  const handleTechStackFilterChange = (stack) => () => {
    setTechStackFilter(stack);
  };

  const activeBtn = (value) => (value === techStackFilter ? "current" : ""); 

  // Popup
  const [popup, setPopup] = useState(false);
  const [popupData, setPopupData] = useState();

  
  return (
    <div className="dizme_tm_section" id="portfolio">
      <DetailsPopup open={popup} data={popupData} close={() => setPopup(false)} />
      <div className="dizme_tm_portfolio">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Portfolio</span>
            <h3>My Amazing Works</h3>
            <p>
              Most common methods for designing websites that work well on
              desktop is responsive and adaptive design
            </p>
          </div>
          <div className="portfolio_filter">
        <ul>
          <li>
            <a
              className={`c-pointer ${activeBtn("*")}`}
              onClick={handleTechStackFilterChange("*")}
            >
              All
            </a>
          </li>
          <li>
            <a
              className={`c-pointer ${activeBtn("Reactjs")}`}
              onClick={handleTechStackFilterChange("Reactjs")}
            >
              React
            </a>
          </li>
          <li>
            <a
              className={`c-pointer ${activeBtn("Nextjs")}`}
              onClick={handleTechStackFilterChange("Nextjs")}
            >
              Next
            </a>
          </li>
          <li>
            <a
              className={`c-pointer ${activeBtn("Mern")}`}
              onClick={handleTechStackFilterChange("Mern")}
            >
              MERN
            </a>
          </li>
          <li>
            <a
              className={`c-pointer ${activeBtn("CSS")}`}
              onClick={handleTechStackFilterChange("CSS")}
            >
              CSS
            </a>
          </li>
        </ul>
      </div>
          <div className="dizme_tm_portfolio_titles" />
          <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
            <ul className="gallery_zoom grid">
              {
                data && data?.map((data, i)=>{
                  return(<li key={i} className={`${data?.techStack} grid-item`} onClick={() => {setPopup(true); setPopupData(data)}}>
                    <div className="inner">
                      <div
                        className="entry dizme_tm_portfolio_animation_wrap"
                        data-title={data?.title}
                        data-category={data?.techStack}
                      >
                          <img src={data?.image?.url} alt="image" />
                          <div
                            className="main"
                            data-img-url={data?.image?.url}
                          />
                      </div>
                      <div className="mobile_title">
                        <h3>{data?.title}</h3>
                        <span>{data?.techStack}</span>
                      </div>
                    </div>
                  </li>)
                })
              }
            </ul>
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/portfolio/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/portfolio/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
