import React from "react";

const Favo = () => {
  return (
    <>
      <div>
        <div className="row" style={{ margin: "0" }}>
          <div
            className="col s12"
            style={{ marginTop: "30px", marginBottom: "30px" }}
          >
            <div className="col s12 m6 l3">
              <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                  <Link>
                    <img
                      alt="card image"
                      style={{ width: "100%", height: 555 }}
                    ></img>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Favo;
