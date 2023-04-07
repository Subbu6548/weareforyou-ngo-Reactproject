import React from "react";

import "../style.css";
const Work = () => {
  return (
    <div>
      <img src={require("/Users/subbu/weforyou/src/images/health.png")} />
      <section className="work">
        <center>
          <h2>WHY HEALTHCARE</h2>
        </center>
        It is well recognized that improvement in health status of population is
        both an important means of sustaining economic and social development as
        well as an end in itself. While India has made rapid strides in the
        health sector since independence, data from NFHS-5 indicates that access
        to healthcare still remains a challenge. Nearly 72% of the population in
        India still lives in rural areas and has access to about 25% of the
        healthcare infrastructure. Urban slum dwellers, on the other hand,
        suffer from adverse health conditions owing to mainly two reasons –first
        the lack of awareness; and second the unwillingness to lose a day’s wage
        in order to reach the nearest medical facility. The sheer vastness and
        geo-spatial diversity of the country also make it difficult to meet the
        healthcare needs of the entire population. With the pandemic further
        highlighting the need to strengthen the healthcare system, it has become
        imperative to shift focus on last mile delivery to rural areas,
        universal health coverage, public health, and preventive healthcare.
      </section>
      <section className="work2">
        <h2>What We DO</h2>
        <p>
          Foundation started its health programme with a view to provide
          healthcare to all irrespective of location and socio-economic
          standards, nonetheless, with a special focus on urban poor and
          underserved villagers. Keeping the health of children, women, and
          other vulnerable populations in mind, mobile health clinics were
          started which could reach out to people in the far-flung areas and
          informal settlements of the cities where people lack awareness about
          basic healthcare. These people are mostly daily wagers and have no
          time to go for even free-of-cost health check-ups in government
          hospitals We Are For You Foundations healthcare programme aims at
          taking healthcare at the doorsteps of people and also encourages
          health awareness and contemporary healthcare-seeking behaviour among
          underprivileged people. It is done through campaigns, health camps
          organised at regular intervals, and providing health screening,
          medical care, and medicines through mobile health clinics. With
          telemedicine services becoming bliss for people living in remote
          areas, Smile Foundation has integrated the telemedicine model with the
          mobile healthcare programme. Dedicated telemedicine centre and
          e-health clinics have been set up where patients from remote rural
          areas can avail tele-consultation facilities with paramedics, lab
          facilities and medicines being available at the centre.
        </p>
      </section>
      
      <section className="work3">
        <center>
          <video
            src={require("/Users/subbu/weforyou/src/videos/video1.mp4")}
            controls
           
            poster={require("/Users/subbu/weforyou/src/images/11.jpg")}
          ></video>

          <video
            src={require("/Users/subbu/weforyou/src/videos/video2.mp4")}
            controls
            
            poster={require("/Users/subbu/weforyou/src/images/10.jpg")}
          ></video>
        </center>
      </section>
    </div>
  );
};

export default Work;
