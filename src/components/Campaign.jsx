import React from "react";
import "../style.css";
const Aboutus = () => {
  return (
    <div>
      <img src={require("/Users/subbu/weforyou/src/images/campaign1.png")} />
      <center>
        <h2 className="c0">Support Our Cause</h2>
      </center>
      <ul className="c2">
        
        <p>
          Join hands to provide healthcare support at doorstep to
          underprivileged communities through Smile Foundation’s Health Cannot
          Wait initiative. We aim to provide primary healthcare services to the
          most vulnerable children and families living in remote rural areas and
          urban slums. Our interventions include:
        </p>
        <li>
          Smile on Wheels mobile healthcare units equipped with world class
          medical facilities and pathological lab services and a team of
          experienced medical professionals
        </li>
        <li>
          Free of cost services including OPD, counseling, tests and medicines.
        </li>
        <li>
          Multi-specialty health camps that address specific needs of target
          communities
        </li>
        <li>
          Awareness camps to promote health seeking behavior among high-risk
          communities.
        </li>
        <li>
          Referrals to nearby public and private health centres for secondary
          and tertiary care.
        </li>
        <li>
          Maternal and child healthcare services including ANC, PNC,
          distribution of fortified nutrition and supplements, and counseling on
          institutional delivery, healthy eating and infant care.
        </li>
        <li>
          Telemedicine centres that connect patients from remote rural hamlets
          to doctors from the nearest urban clinics through technology.
        </li>
        <center>
          <p className="c1">
            "YOUR CONTRIBUTIONS ARE ELIGIBLE FOR UPTO 50% TAX BENEFIT UNDER
            SECTION 80G AS We Are For You FOUNDATION IS REGISTERED AS NON PROFIT
            ORGANIZATION" PAN: AACTS7973G | 80G NUMBER: AACTS7973GF20210
          </p>
        </center>
      </ul>
    </div>
  );
};

export default Aboutus;
