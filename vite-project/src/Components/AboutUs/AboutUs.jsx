import React, { useEffect, useState, useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";
import BuidlingPic from '../../Pictures/yam-mission-bg-img.jpg'
import LabourPic from '../../Pictures/man-service-img.png'
const AboutUs = () => {
  const imageRef = useRef(null);
  const [count, setCount] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    sqft: 0,
  });
  const [startCounting, setStartCounting] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const top = imageRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.8) {
          setIsVisible(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const checkVisibility = () => {
    const section = document.getElementById("stats-section");
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setStartCounting(true);
      }
    }
  };



  // Function to check if section is in viewport
  useEffect(() => {
    // Run check on mount in case the section is already visible
    checkVisibility();

    // Add event listener
    window.addEventListener("scroll", checkVisibility);

    return () => window.removeEventListener("scroll", checkVisibility);
  }, []);

  // Function to animate numbers when visible
  useEffect(() => {
    if (!startCounting) return;

    const interval = setInterval(() => {
      setCount((prev) => ({
        projects: prev.projects < 200 ? prev.projects + 5 : 200,
        clients: prev.clients < 50 ? prev.clients + 2 : 50,
        experience: prev.experience < 40 ? prev.experience + 1 : 40,
        sqft: prev.sqft < 10000 ? prev.sqft + 250 : 10000,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, [startCounting]);
  return (
         <div className="container-fluid mt-5 ">
          <div className="row">
            <div className="col-md-4">
              <img src={LabourPic} alt="LabourPic" />
            </div>
            <div className="col-md-8 ">
              <h1 className="UpperCaseLetters">Kingcrete: who we are?</h1>
              <p style={{color:' #6f6c6c'}}>Kingcrete was established in 1976, and since its inception has undertaken projects in all major fields of civil engineering and allied electrical works. The founder of the firm, Major (R) Nawaz A. Minhas is a civil engineer by profession, and has to his credit hundreds of projects all over the country.</p>
              <div className="row" style={{color:' #6f6c6c'}}>
                <div className="col-md-6">
                  <p>Kingcrete is registered with the Pakistan Engineering Council (PEC) and holds the CA (no limit) license. The company is capable of handlings projects related to buildings, flexible/rigid pavements, runways, roads and bridges, rehabilitation of bridges, marine works and pipeline works. By virtue of its design cell and rich experience of its engineers, the company can also deliver projects on turnkey basis.</p>
                </div>
                <div className="col-md-6">
                  <p>The company comprises of a team of skilled engineers whose individual experience reflects the capability and potential of the organization. Kingcrete has a wide range of construction equipment such as transit mixers, batching plants, concrete pumps, tower cranes, loaders, excavators etc. Any specialized equipment not available with the company which is required for a project is either taken on rent basis or acquired.</p>
                </div>
                <div className="col-md-6">
                  <p>Kingcrete has had the privilege of completing the Navy Heights buildings in Karachi; these towers stand eighteen (18) storeys high and were completed in a record time. Other significant building projects to its credit are the Mall of Lahore in Cantt, DHA O/A Levels School in Karachi, ICI Office Buildings in Karachi, Naval Headquarters in Islamabad, Safari Villas in Bahria Town Rawalpindi and rehabilitation of Pearl Continental Hotels in Karachi, Rawalpindi and Lahore.</p>
                </div>
                <div className="col-md-6">
                  <p>We are proud to say that Kingcrete has an excellent reputation in the armed forces, government and private sectors. Kingcrete was also the seventh (7th) highest tax payer in Pakistan for the year 2013.</p>
                  <p>Our consolidated turnover for the last 5 years is in excess of PKR 10 billion. We have completed all projects assigned to us to the utmost satisfaction of the customer.</p>
               
                </div>
              </div>
            </div>
          </div>
          <div className="row g-0 d-flex">
      <div className="col-md-4 d-flex align-items-stretch">
        <div className="left-mission p-4 w-100">
          <h5 className="UpperCaseLetters">Always working towards</h5>
          <h3 className="UpperCaseLetters">our mission</h3>
          <h6 className="UpperCaseLetters">“BUILDING FOR A BETTER TOMORROW”</h6>
          <h6 className="pt-3">
            We believe in excelling with our expertise, quality, hard work and a strong commitment to exceed our customers’ expectation, always!
          </h6>
          <h6 className="pt-3">
            We believe in highest work standards and go above and beyond to ensure utmost customer satisfaction.
          </h6>
        </div>
      </div>
    
      <div className="col-md-4 d-flex align-items-stretch position-relative">
        <div className="w-100 d-flex justify-content-center align-items-center">
          <img src={BuidlingPic} alt="Building" className="img-fluid w-100 h-100 object-fit-cover " />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
    
    {/* Grid Text Content */}
    <div className="position-absolute top-50 start-50 translate-middle w-100 px-3 text-white" id="stats-section">
            <div className="container">
              <div className="row text-center text-uppercase textSizesmall">
                <div className="col-md-3 d-flex flex-column align-items-center ">
                  <h5>{count.projects}+</h5>
                  <h6 className="textSizesmall">Projects</h6>
                </div>
                <div className="col-md-3 d-flex flex-column align-items-center">
                  <h5>{count.clients}+</h5>
                  <h6 className="textSizesmall">Clients</h6>
                </div>
                <div className="col-md-3 d-flex flex-column align-items-center">
                  <h5>{count.experience}+</h5>
                  <h6 className="textSizesmall">Years of Experience</h6>
                </div>
                <div className="col-md-3 d-flex flex-column align-items-center">
                  <h5>{count.sqft}+</h5>
                  <h6 className="textSizesmall">Delivered SQ.FT</h6>
                </div>
              </div>
            </div>
          </div>
    
        </div>
        
      </div>
    
      <div className="col-md-4 d-flex align-items-stretch">
        <div className="left-mission p-4 w-100">
          <h5 className="UpperCaseLetters">Subscribe to</h5>
          <h3 className="UpperCaseLetters">our newsletter</h3>
          <h6 className="pt-4 keepleft">
            Keep up to date with our newsletter, containing all the latest happenings at Kingcrete, useful information for our valued clients & employees.
          </h6>
          <div className="email-input-container">
            <div className="input-wrapper">
              <input type="email" placeholder="Your E-mail Address" className="email-input" />
              <div className="underline"></div>
            </div>
            <button className="send-button">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </div>
    
            <div className="mt-5 text-center">
              <h1 className="UpperCaseLetters">our valuable works</h1>
              <div className="separator_area">
                <div className="separatorhome3auto1"></div>
                <div className="separatorhome3auto"></div>
              </div>
              <p className="color_paragraph">
                Our portfolio is indicative of our vision and dedication to produce
                iconic land marks, which embody innovation, safety, functionality,
                durability and aesthetics. We believe in creating dynamic and
                extraordinary solutions to help our clients achieve the optimum
                results for their business goals. In addition to that, we strive to
                create an environment of sustained economic growth by developing
                local skills as we progress.
              </p>
              <p className="color_paragraph">
                The company is capable of handling projects related to buildings,
                flexible/rigid pavements, runways, roads and bridges, rehabilitation
                of bridges, marine works and pipeline works. We have an extensive
                portfolio displaying our work in multiple projects of different
                scales.
              </p>
            </div>
            <div className="container mt-4">
  <div 
    className="d-flex justify-content-center align-items-center UpperCaseLetters text-white py-3 px-3 gap-3 customTextSize overflow-auto"
    style={{ background: '#0099ff', whiteSpace: 'nowrap' }}
  >
    <p className="mb-0 flex-shrink-0 first-last">All Projects</p>
    <p className="mb-0 flex-shrink-0">Contracting</p>
    <p className="mb-0 flex-shrink-0">Management</p>
    <p className="mb-0 flex-shrink-0">Development</p>
    <p className="mb-0 flex-shrink-0 first-last">Construction</p>
  </div>
  <div class="card-group gap-3 mt-5">
  <div class="card">
    <img src={BuidlingPic} class="card-img-top" alt="..."/>
  </div>
  <div class="card">
    <img src={BuidlingPic} class="card-img-top" alt="..."/>
  </div>

  <div class="card">
    <img src={BuidlingPic} className="card-img-top" alt="..."/>
  </div>
  <div class="card">
    <img src={BuidlingPic} class="card-img-top" alt="..."/>
  </div>
</div>
<div class="card-group gap-3 mt-5">
  <div class="card">
    <img src={BuidlingPic} class="card-img-top" alt="..."/>
  </div>
  <div class="card">
    <img src={BuidlingPic} class="card-img-top" alt="..."/>
  </div>

  <div class="card">
    <img src={BuidlingPic} className="card-img-top" alt="..."/>
  </div>
  <div class="card">
    <img src={BuidlingPic} class="card-img-top" alt="..."/>
  </div>
</div>

</div>


          </div>
  )
}

export default AboutUs