import React from "react";

const JobCard = ({ myData }) => {
  const { jdLink,maxJdSalary, minJdSalary,SalaryCurrencyCode, minExp, maxExp, logoUrl,companyName, jobDetailsFromCompany, location, jobRole } = myData;
  return (
    <div className="card">
      <div className="card-content">
        <div className="post-date">
          <p>Posted {Math.floor(Math.random() * (10)) + 1} days ago</p>
        </div>
        <div class="company-details">
          <img
            src={logoUrl}
            className="card-id"
          />
          <div class="company-info">
            <h3>{companyName}</h3>
            <h4>{jobRole}</h4>
            <h5>{location}</h5>
          </div>
        </div>
        <div>
          <p>Estimated Salary: {minJdSalary!=null?minJdSalary:"NA"}-{maxJdSalary!=null?maxJdSalary:"NA"} {SalaryCurrencyCode} LPA ✅</p>
          <h3>About Company:</h3> 
          <h4>About us</h4>
          <p>
            {jobDetailsFromCompany.substr(0, 150)}
          </p>
          <div className="viewjob">
          <a href={jdLink} target="blank" >View Job</a>
            </div> 
          <h4>Experience: {minExp}-{maxExp}</h4>
          <div className="btns">
          <button onClick={() => {window.open({jdLink}, '_blank');}}>⚡Easy Apply</button>
          <button onClick={() => {window.open({jdLink}, '_blank');}}>Unlock referral asks</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
