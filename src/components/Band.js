import React from "react";
import styles from "./Band.module.css";

function Band({ band, handleClick }) {
  return (
    <div>
      <div className="card mt-3">
        <div className="card-header">
          <h1>{band.name}</h1>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <img src={band.img_url} alt="" className={styles.mainThumb} />
            </div>
            <div className="col-6 ">
              <p>{band.info.slice(0, 200)}...</p>
            </div>
            <div className="card-footer">
              <button
                onClick={() => {
                  handleClick(band);
                }}
                className="btn btn-info float-right"
              >
                See more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Band;
