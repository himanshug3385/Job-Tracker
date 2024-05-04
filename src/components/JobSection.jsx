import React,{useState} from "react";
import JobCard from "./JobCard";

const JobSection = ({ jobs }) => {
    const [filters, setFilters] = useState({
      minExperience: '',
      companyName: '',
      location: '',
      remote: false,
      techStack: '',
      role: '',
      minBasePay: ''
    });
  
    const handleFilterChange = (filterName, value) => {
      setFilters(prevFilters => ({
        ...prevFilters,
        [filterName]: value
      }));
    };
  
    const filteredJobs = jobs.filter(job => {
      return (
        (!filters.minExperience || job.minExp >= filters.minExperience) &&
        (!filters.companyName || job.companyName?.toLowerCase().includes(filters.companyName.toLowerCase())) &&
        (!filters.location || job.location?.toLowerCase().includes(filters.location?.toLowerCase())) &&
        (!filters.remote || job?.remote === "Remote") &&
        (!filters.techStack || job.jobRole?.toLowerCase().includes(filters.techStack?.toLowerCase())) &&
        (!filters.role || job.jobRole?.toLowerCase().includes(filters.role.toLowerCase())) &&
        (!filters.minBasePay || job.minJdSalary >= filters.minBasePay)
      );
    });
  return (
    
    <div className="wrapper">
       <h1 style={{color:"black"}}>Job Section</h1>
      <div className="filter">
      <input type="text" placeholder="Min Experience" value={filters.minExperience} onChange={e => handleFilterChange('minExperience', e.target.value)} />
      <input type="text" placeholder="Company Name" value={filters.companyName} onChange={e => handleFilterChange('companyName', e.target.value)} />
      <input type="text" placeholder="Location" value={filters.location} onChange={e => handleFilterChange('location', e.target.value)} />
      <label style={{margin:"4px"}}>
        <input type="checkbox" checked={filters.remote} onChange={e => handleFilterChange('remote', e.target.checked)} />
        Remote
      </label>
      <input type="text" placeholder="Tech Stack" value={filters.techStack} onChange={e => handleFilterChange('techStack', e.target.value)} />
      <input type="text" placeholder="Role" value={filters.role} onChange={e => handleFilterChange('role', e.target.value)} />
      <input type="text" placeholder="Min Base Pay" value={filters.minBasePay} onChange={e => handleFilterChange('minBasePay', e.target.value)} />
      </div>
      <div className="container">
        <div className="grid grid-three-column">
          {filteredJobs.map((curVal, id) => {
            return <JobCard key={id} myData={curVal} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default JobSection;