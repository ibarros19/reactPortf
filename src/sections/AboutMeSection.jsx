import logo from "../pics/PROFILE.png";

export default function AboutMe () {
    return (
        <section
          className="section row my-3"
          id="about">
          <div className="col-md-6">
            <h2 className="h5 fw-600 pb-5 opacity-50">
              ABOUT ME
            </h2>
            <h3 className="display-5 fw-600 text-primary pb-3">
              <span>Hello there! 👋 Welcome to Ivi's portfolio!</span>
              </h3>
            <div className="aboutme">
            <p>
            
            She's an enthusiastic full-time coding class student at the University of Arizona, with five certificates in web technology and design. She is looking for a job where she can provide the best possible service and gain meaningful experiences. Displays excellent customer service skills and is passionate about web designing and the technology behind it.
            </p>
            </div>
          </div>
          <div className="col-md-6 text-end">
            <img
              src={logo}
              alt="logo"
              className="img-fluid profilepic"
            />
          </div>
        </section>
    )
}