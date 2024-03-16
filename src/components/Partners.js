import { useEffect, useState, useContext } from "react";
import { fatchData } from "../utilits";
import UserContext from "../userContext/userContext";
const Partners = ({ dark }) => {
  const [data, setData] = useState([]);
  const data1 = useContext(UserContext);
  useEffect(() => {
    setData(data1?.social_handles?.filter(item=> item.enabled)) //filtering handles based on enabled property from the api.
}, [data1]);
  
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
                      <a className="dizme_tm_full_link" href={img.url} />
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
