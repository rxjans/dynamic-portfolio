const DetailsPopup = ({ open, close, data }) => {
  return (
    <div className={`dizme_tm_modalbox ${open ? "opened" : ""}`}>
      <div className="box_inner">
        <div className="close">
          <a href="#" onClick={(e) => {e.preventDefault(); close()}}>
            <i className="icon-cancel" />
          </a>
        </div>
        <div className="description_wrap">
          <div className="popup_details">
            <div className="top_image">
              <img src={data?.image?.url} alt="image" />
              <div
                className="main"
                data-img-url={data?.image?.url}
                style={{ backgroundImage: `url(${data?.image?.url})` }}
              />
            </div>
            <div className="portfolio_main_title">
              <h3>{data?.title}</h3>
              <span>
                <a href="#">Details</a>
              </span>
              <div />
            </div>
            <div className="main_details">
              <div className="textbox">
                <p>
                  {data?.description !== '' ? data?.description : "No Description available"}
                </p>
                <p>
                  {data?.liveurl !== '' ? (
                    <>
                      Checkout the live preview here:{" "}
                      <a href={data?.liveurl} >
                        {data?.liveurl}
                      </a>{" "}
                    </>
                  ) : (
                    "No live preview available"
                  )}
                </p>
                <p>
                  {data?.githuburl !== '' ? (
                    <>
                      Checkout the Github Repo:{" "}
                      <a href={data?.githuburl} >
                        {data?.githuburl}
                      </a>{" "}
                    </>
                  ) : (
                    "No Github Repo available"
                  )}
              </p>
              </div>
              <div className="detailbox">
                <ul>
                  <li>
                    <span className="first">Client</span>
                    <span>Personal</span>
                  </li>
                  <li>
                    <span className="first">Tech Stack</span>
                    <span>
                      <span>{data?.techStack ? data.techStack : "Unavailable"}</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailsPopup;
