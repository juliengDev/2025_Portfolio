import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="4" md="6" sm="12" className="mb-4">
     <div className="d-flex flex-column align-items-center pb-5 text-center" >
        <img className=" bg-white mb-3 w-50" src={data.companylogo} alt="" />
        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>

      </div>
    </Col>
  );
}

export default ExperienceCard;