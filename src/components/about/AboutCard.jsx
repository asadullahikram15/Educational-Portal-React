import React from "react";
import { homeAbout } from "../../dummyData";
import Heading from "../common/heading/Heading";
import AWrapper from "./AWrapper";
import  "./About.css";

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">

               {/* left row */}
          <div className="left row">
            <img src="../images/about.webp" alt="" />
          </div>

          {/* right row */}
          <div className="right row">
            <Heading
              subtitle="LEARN ANYTHING"
              title="Benefits About online Learning"
            />
            <div className="items">
              {homeAbout.map((val,index) => (
                <div key={index} className="item flexSB">
                    <div className="img">
                        <img src={val.cover} alt=''/>
                    </div>
                    <div className="text">
                        <h2>{val.title}</h2>
                        <p>{val.desc}</p>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AWrapper/>
    </>
  );
};

export default AboutCard;
