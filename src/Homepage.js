import React from "react";
import "./homepage.css";
import { Link } from "react-router-dom";
import Navbarh from "./Navbarh";
import StudentReviews from "./StudentReviews";
import "./homepage1.png";
import Footer from "./footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./homepage2.png";
import "./homepage3.png";
import "./odilo_cabify_mockup 1.png";
import "./Vector 10.png";
import "./Ellipse 2 (15).png";
import "./Ellipse 3 (1).png";
import "./Ellipse 4 (2).png";
import "./Ellipse 5 (2).png";
const HomePage = () => {
  return (
    <div className="container">
      <Navbarh />

      <div className="homepage">
        {" "}
        <div className="mt-5 row1">
          <div className="col-md-6 div1">
            <h1 className="h2h">
              Boost up your skills with a new way of learning
            </h1>
            <div className="div2">
              <Link to="/">
                {" "}
                <button className="coursebutton">Course Enrollment</button>
              </Link>
              <Link to="/signup">
                {" "}
                <button className="getbutton">Get Started</button>
              </Link>
            </div>
          </div>
          <div className="col-md-6 row">
            <div className="col-md-6">
              <img src="./homepage1.png" className="img-fluid" alt=""></img>
            </div>
            <div className="col-sm-6 mt-4">
              <img
                src="./homepage2.png"
                alt=""
                className="img-fluid img2"
              ></img>
              <div class="col-sm-6 container-fluid">
                <img
                  src="Images/Frame 26.png"
                  alt=""
                  class="img-fluid mb-5 mt-3 image"
                />

                <span class="igspan">
                  <span>
                    {" "}
                    <p class="footerp">Students</p>
                  </span>
                  <span>
                    <img src="./Ellipse 2 (15).png" alt="" width="35px" />
                  </span>
                  <span>
                    <img src="./Ellipse 3 (1).png" alt="" width="35px" />
                  </span>
                  <span>
                    <img src="./Ellipse 4 (2).png" alt="" width="35px" />
                  </span>
                  <span>
                    <img src="./Ellipse 5 (2).png" alt="" width="35px" />
                  </span>
                  <span>
                    {" "}
                    <p class="footerp1">+24</p>
                  </span>
                </span>
              </div>
            </div>
            <div className="col-md-12">
              <img src="./homepage3.png" alt="" className="img-fluid"></img>
              <div className="input-group mb-3 message-input input-grouph ">
                <span className="input-group-text bg-white">
                  <i className="fa fa-video-camera"></i>
                </span>
                <input
                  type="text"
                  className="form-control bg-white"
                  placeholder="LiveChat"
                  aria-label="LiveChat"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="row2 col-md-5 text-center">
          <h2 className="h1h">
            <span className="find">Find </span>a course to learn
          </h2>
          <p className="hp1">
            Lorem ipsum dolor sit amet consectetur adipiscing elit libero, porta
            tempus tincidunt quam netus hac in dictumst habitant, ullamcorper
            sollicitudin mollis integer sociosqu mi molestie. Nisi hendrerit
            natoque dui blandit vivamus volutpat arcu, per enim class lacinia
            tortor vestibulum facilisi quisque.
          </p>
          <div class=" mt-5">
            <div class="search-bar">
              <i class="fa fa-search "></i>
              <input type="text" placeholder="Product Design" />
            </div>
          </div>
          <div className="divv1">
            <p class="footerp">Students</p>
            <span class="imgspan">
              <span>
                <img src="./Ellipse 2 (15).png" alt="" width="35px" />
              </span>
              <span>
                <img src="./Ellipse 3 (1).png" alt="" width="35px" />
              </span>
              <span>
                <img src="./Ellipse 4 (2).png" alt="" width="35px" />
              </span>
              <span>
                <img src="./Ellipse 5 (2).png" alt="" width="35px" />
              </span>
              <span>
                {" "}
                <p class="footerp1">+24</p>
              </span>
            </span>
          </div>
        </div>
        <div className="col-md-5 row3 text-center ">
          {" "}
          <h4 className="h1h">
            Complete a course get <span className="find">Certificate</span>
          </h4>
          <p className="hp1">
            Lorem ipsum dolor sit amet consectetur adipiscing elit libero, porta
            tempus tincidunt quam netus hac in dictumst habitant, ullamcorper
            sollicitudin mollis integer sociosqu mi molestie. Nisi hendrerit
            natoque dui blandit vivamus volutpat arcu, per enim class lacinia
            tortor vestibulum facilisi quisque.
          </p>
          <div class="color">
            <p class="cert">Certificate of completion</p>
            <p class="who">Prepared for</p>
            <div class="yellow"></div>
            <div class="blue"></div>
            <div class="blue"></div>
            <div class="blue"></div>
            <div class="short"></div>
            <img src="./Vector 10.png" alt="" class="img-fluid " />
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-md-5 row3 text-center ">
          {" "}
          <h4 className="h1h">
            Complete a course get <span className="find">Certificate</span>
          </h4>
          <p className="hp1">
            Lorem ipsum dolor sit amet consectetur adipiscing elit libero, porta
            tempus tincidunt quam netus hac in dictumst habitant, ullamcorper
            sollicitudin mollis integer sociosqu mi molestie. Nisi hendrerit
            natoque dui blandit vivamus volutpat arcu, per enim class lacinia
            tortor vestibulum facilisi quisque.
          </p>
          <div class="color">
            <p class="cert">Certificate of completion</p>
            <p class="who">Prepared for</p>
            <div class="yellow"></div>
            <div class="blue"></div>
            <div class="blue"></div>
            <div class="blue"></div>
            <div class="short"></div>
            <img src="./Vector 10.png" alt="" class="img-fluid " />
          </div>
        </div>
        <div className="row2 col-md-5 text-center">
          <h2 className="h1h">
            <span className="find">Monitor </span>Your Progress
          </h2>
          <p className="hp1">
            Lorem ipsum dolor sit amet consectetur adipiscing elit libero, porta
            tempus tincidunt quam netus hac in dictumst habitant, ullamcorper
            sollicitudin mollis integer sociosqu mi molestie. Nisi hendrerit
            natoque dui blandit vivamus volutpat arcu, per enim class lacinia
            tortor vestibulum facilisi quisque.
          </p>
          <div class=" mt-5">
            <div class="search-bar">
              <i class="fa fa-search "></i>
              <input type="text" placeholder="Product Design" />
            </div>
          </div>
          <div className="divv1">
            <p class="footerp">Students</p>
            <span class="imgspan">
              <span>
                <img src="./Ellipse 2 (15).png" alt="" width="35px" />
              </span>
              <span>
                <img src="./Ellipse 3 (1).png" alt="" width="35px" />
              </span>
              <span>
                <img src="./Ellipse 4 (2).png" alt="" width="35px" />
              </span>
              <span>
                <img src="./Ellipse 5 (2).png" alt="" width="35px" />
              </span>
              <span>
                {" "}
                <p class="footerp1">+24</p>
              </span>
            </span>
          </div>
        </div>
      </div>
      <Link to="/signup" className="coursebuttonn text-center pt-2 mt-2">
        {" "}
        Apply To Attend ITJA
      </Link>
      <div className="row row4">
        <div class="col-sm-7">
          <h6 className="h6h">New Course Alert!</h6>
          <p class="fifth-divp">
            Lorem ipsum dolor sit amet consectetur adipiscing elit vitae ad,
            pellentesque fames congue faucibus ornare dictum sapien imperdiet,
            ullamcorper porta montes maecenas donec nisi consequat sociosqu.
            Justo dictumst tincidunt nullam ultrices potenti purus nostra
            congue, at ornare gravida morbi sollicitudin turpis magnis volutpat,
            maecenas iaculis arcu duis fringilla eros libero. Eros condimentum
            torquent sem non mus varius, mi aenean suscipit metus morbi neque,
            curabitur libero ac interdum litora.
          </p>
          <p class="fifth-divp">
            Est sociosqu nam laoreet mauris hac iaculis dictum tellus, eget
            malesuada volutpat cum lectus curabitur cubilia ultrices platea,
            turpis morbi sem per libero dapibus facilisis. Aenean auctor
            fermentum odio primis mattis iaculis, integer egestas erat at morbi
            vel velit, molestie quam magna cursus gravida. Morbi dignissim class
            cursus enim himenaeos quis iaculis pulvinar ad, taciti purus diam
            ligula porta hac et semper mollis, montes pretium ac lacus nostra
            elementum fames felis.
          </p>
          <Link to="">
            <button className="coursebutton"> Take the course</button>
          </Link>
        </div>
        <div class="col-sm-5">
          <img src="./odilo_cabify_mockup 1.png" alt="" class="img-fluid" />
        </div>
      </div>
      <div className="ourstudents">
        {" "}
        <h4 className="h4h">
          Our <span className="find">students</span> have a lot to say!
        </h4>
        <StudentReviews />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
