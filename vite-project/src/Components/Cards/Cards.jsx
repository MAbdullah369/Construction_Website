import React from 'react'
import YellowBuilding from "../../Pictures/yellow-long-building.jpg";
import ViewBuilding from "../../Pictures/view-building.jpg";
import LahoreBuilding from "../../Pictures/lahore-building.jpg";
import RayaBuilding from "../../Pictures/Raya-Building.jpg";
import GoldenBuilding from "../../Pictures/golden-building.jpg";
import HorizontalBuilding from "../../Pictures/horizontal-building.jpg";
import IslamabadBuilding from "../../Pictures/Islamabad-building.jpg";
import KarachiBuilding from "../../Pictures/KarachiBuilding.jpg";
const Cards = () => {
  return (
    <>
           <div
          className="d-flex justify-content-center align-items-center UpperCaseLetters text-white py-3 px-3 gap-3 customTextSize overflow-auto"
          style={{ background: "#0099ff", whiteSpace: "nowrap" }}
        >
          <p className="mb-0 flex-shrink-0 first-last">All Projects</p>
          <p className="mb-0 flex-shrink-0">Contracting</p>
          <p className="mb-0 flex-shrink-0">Management</p>
          <p className="mb-0 flex-shrink-0">Development</p>
          <p className="mb-0 flex-shrink-0 first-last">Construction</p>
        </div>
         <div className="card-group gap-3 mt-5">
                  <div className="card building-card">
                    <img src={YellowBuilding} alt="Bahria Icon" />
                    <div className="card-overlay">
                      <h6>Bahria Icon</h6>
                      <p>Karachi</p>
                      <button className="view-more">VIEW MORE</button>
                    </div>
                  </div>
        
                  <div className="card building-card">
                    <img
                      src={ViewBuilding}
                      className="card-img-top"
                      alt="View Building"
                    />
                    <div className="card-overlay">
                      <h6>Mall of Lahore</h6>
                      <p>Lahore</p>
                      <button className="view-more">VIEW MORE</button>
                    </div>
                  </div>
        
                  <div className="card building-card">
                    <img
                      src={LahoreBuilding}
                      className="card-img-top"
                      alt="Lahore Building"
                    />
                    <div className="card-overlay">
                      <h6>Navy Heights</h6>
                      <p>Karachi</p>
                      <button className="view-more">VIEW MORE</button>
                    </div>
                  </div>
        
                  <div className="card building-card">
                    <img
                      src={RayaBuilding}
                      className="card-img-top"
                      alt="Raya Building"
                    />
                    <div className="card-overlay">
                      <h6>Askari Tower</h6>
                      <p>Lahore</p>
                      <button className="view-more">VIEW MORE</button>
                    </div>
                  </div>
                </div>
                <div class="card-group gap-3 mt-5">
                  <div class="card building-card">
                    <img src={GoldenBuilding} class="card-img-top" alt="..." />
                    <div className="card-overlay">
                      <h6>Pearl Continental</h6>
                      <p>Lahore</p>
                      <button className="view-more">VIEW MORE</button>
                    </div>
                  </div>
                  <div class="card building-card">
                    <img src={HorizontalBuilding} class="card-img-top" alt="..." />
                    <div className="card-overlay">
                      <h6>Pearl Continental</h6>
                      <p>Muzaffarabad</p>
                      <button className="view-more">VIEW MORE</button>
                    </div>
                  </div>
        
                  <div class="card building-card">
                    <img src={IslamabadBuilding} className="card-img-top" alt="..." />
                    <div className="card-overlay">
                      <h6>Gulf Heights</h6>
                      <p>Rawalpindi</p>
                      <button className="view-more">VIEW MORE</button>
                    </div>
                  </div>
                  <div class="card building-card">
                    <img src={KarachiBuilding} class="card-img-top" alt="..." />
                    <div className="card-overlay">
                      <h6>Serena Hotel</h6>
                      <p>Muzaffarabad</p>
                      <button className="view-more">VIEW MORE</button>
                    </div>
                  </div>
                </div>
    </>
  )
}

export default Cards