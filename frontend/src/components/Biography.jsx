import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <h1><b><>Biography</></b></h1>
          <h3>Who We Are</h3>
          <p>
            ZeeCare Medical Institute has established itself as a pioneer in the field of healthcare management, combining advanced medical practices with state-of-the-art management systems to deliver exceptional patient care. Founded with the mission to provide accessible, high-quality healthcare, ZeeCare utilizes cutting-edge technology to streamline its operations, ensuring efficiency and effectiveness in all aspects of its services. The healthcare management system at ZeeCare is designed to optimize the entire healthcare delivery process—from patient admission to discharge—by incorporating digital records, real-time data analysis, and integrated communication between departments.
          </p>
          <p>We are all in 2024!</p>
          <p>
            At the heart of ZeeCare's management approach is the commitment to patient-centered care. The system is built to support both the clinical and administrative functions, offering healthcare professionals easy access to patient data, treatment histories, and diagnostic results, ensuring that every decision is informed and timely. Moreover, the management system supports the hospital's strategic goals by enhancing resource allocation, reducing operational costs, and improving overall healthcare outcomes. ZeeCare Medical Institute is continuously evolving, adopting the latest in healthcare technology and management practices to meet the growing demands of modern healthcare while maintaining its foundational principles of compassion, excellence, and patient satisfaction.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
