import { useEffect, useState } from "react";
import { fatchData } from "../utilits";
const Partners = ({ dark }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async()=>{
      try {
        const res = await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");
        const data = await res.json();
        if(res.ok){
          setData(data.user.social_handles);
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
}, []);
  
  const headingStyle = {
    textAlign: 'center', // Align text in the center
    marginBottom: '40px'
  };
  return (
    <div className="dizme_tm_section">
    <h2 style={headingStyle}> Connect with Me!</h2>
      <div className="dizme_tm_partners">
        <div className="container">
          <div className="partners_inner">
            <ul>
              {data &&
                data.map((img, i) => (
                  <li
                    className="wow fadeIn"
                    data-wow-duration="1s"
                    key={i}
                    data-wow-delay={`0.${i + 1 * 2}s`}
                  >
                    <div className="list_inner">
                      <img
                        src={img.image.url}
                        alt="image"
                      />
                      <a className="dizme_tm_full_link" a="" href={img.url} />
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/partners/1.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Partners;
