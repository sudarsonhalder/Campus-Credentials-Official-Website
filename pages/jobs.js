import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineEnvironment, AiOutlineCalendar } from 'react-icons/ai'; // Importing the close icon from React Icons

const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobs, setJobs] = useState([]); // Initialize with an empty array
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('/jobs.json'); // Adjust the path if necessary
        if (!response.ok) {
          throw new Error('Failed to fetch jobs data.');
        }
        const jobsData = await response.json();
        const randomizedJobs = [...jobsData].sort(() => Math.random() - 0.5);
        setJobs(randomizedJobs);
        setFilteredJobs(randomizedJobs);
      } catch (error) {
        console.error("Error fetching jobs data:", error);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    applySearch(); // Apply search whenever searchQuery changes
  }, [searchQuery]);

  const applySearch = () => {
    if (!searchQuery.trim()) {
      setFilteredJobs(jobs); // Reset to all jobs if the search query is empty
      return;
    }

    const filtered = jobs.filter((job) =>
      job.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.organization?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredJobs(filtered);
    setCurrentPage(1); // Reset to the first page after search
  };

  const formatEmploymentType = (type) => {
    const formattedType = type.replace('_', ' ').toLowerCase();
    return formattedType.charAt(0).toUpperCase() + formattedType.slice(1);
  };

  const normalizeString = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // Normalize and remove diacritical marks
  };

  const formatAddress = (address) => {
    const addressParts = address.split(', ');
    return addressParts[addressParts.length - 1]; // Return only the last part (main address)
  };

  const getLogoUrl = (job) => {
    try {
      const url = new URL(job.linkedin_org_url || job.organization_url || '');
      return `https://logo.clearbit.com/${url.hostname.replace('www.', '')}`;
    } catch {
      return 'https://logo.clearbit.com/linkedin.com';
    }
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(currentPage - 2, 1);
    let endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(endPage - maxPagesToShow + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => paginate(i)}
          className={`px-4 py-2 rounded ${
            currentPage === i
              ? 'bg-red-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {i}
        </button>
      );
    }

    if (startPage > 1) {
      pageNumbers.unshift(<span key="dots-start" className="px-2">...</span>);
    }

    if (endPage < totalPages) {
      pageNumbers.push(<span key="dots-end" className="px-2">...</span>);
    }

    return pageNumbers;
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> {/* Adjusted padding for mobile/tablet */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 mb-6">
        <h1 className="text-3xl font-bold mb-6 md:mb-0">Active Jobs Applications</h1>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search jobs..."
            className="border p-2 rounded w-48 md:w-64 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {filteredJobs.length === 0 ? (
        <p className="text-gray-500 text-center">No job listings available.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentJobs.map((job) => (
              <div
                key={job.id}
                className="animate-fade-in flex flex-col items-start border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer bg-white relative"
                onClick={() => setSelectedJob(job)} // Open the modal when the card is clicked
              >
                <div className="w-20 h-20 bg-gray-100 flex items-center justify-center overflow-hidden rounded-lg mb-4">
                  <img
                    src={getLogoUrl(job)}
                    alt={job.organization || 'Company Logo'}
                    className="object-contain w-full h-full"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://logo.clearbit.com/linkedin.com';
                    }}
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{job.title || 'Job Title'}</h2>
                  <p className="text-gray-500">
                    {job.organization || 'Organization'} | {formatEmploymentType(job.employment_type?.[0]) || 'N/A'}
                  </p>

                  {/* Location and Date Posted */}
                  <div className="flex items-left justify-start space-x-4 text-sm text-gray-500 mt-2">
                    <div className="flex items-center">
                      <AiOutlineEnvironment size={16} />
                      <p className="ml-2">{normalizeString(job.locations_derived?.join(', ') || 'Location Not Available')}</p>
                    </div>
                    <div className="flex items-center">
                      <AiOutlineCalendar size={16} />
                      <p className="ml-2">{job.date_posted ? new Date(job.date_posted).toDateString() : 'Date Not Available'}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-8 space-x-2">
            <button
              onClick={() => paginate(currentPage - 1)}
              className={`px-4 py-2 rounded ${
                currentPage === 1
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {renderPageNumbers()}
            <button
              onClick={() => paginate(currentPage + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === totalPages
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
      {/* Job Details Modal */}
      {selectedJob && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4"
          onClick={() => setSelectedJob(null)} // Close modal when clicked outside
        >
          <div
            className="bg-white p-6 rounded-lg max-w-3xl w-full max-h-[80vh] overflow-y-auto shadow-lg relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {/* Apply Button */}
            <button
              className="absolute top-4 right-4 border-2 border-blue-500 text-white bg-blue-500 px-4 py-2 rounded"
              onClick={() => window.open(selectedJob.url, "_blank")}
            >
              Apply
            </button>

            {/* Visit Company Page Button */}
            <a
              href={selectedJob.linkedin_org_url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-24 text-blue-500 border-2 border-blue-500 bg-white px-4 py-2 rounded hover:bg-blue-500 hover:text-white hover:border-blue-500 mr-2"
            >
              Visit Company Page
            </a>

            {/* Company Logo and Title */}
            <div className="flex items-center mb-4">
              <div className="w-20 h-20 bg-gray-100 flex items-center justify-center overflow-hidden rounded-lg mr-4">
                <img
                  src={selectedJob.organization_logo}
                  alt={selectedJob.organization || 'Company Logo'}
                  className="object-contain w-full h-full"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://logo.clearbit.com/linkedin.com';
                  }}
                />
              </div>
              <h2 className="text-2xl font-bold break-words max-w-[300px]">{selectedJob.title || 'Job Title'}</h2> {/* Job Title Word Break */}
            </div>

            {/* Organization Info */}
            <p className="text-gray-500 mb-4">
              {selectedJob.organization || 'Organization'} | {formatEmploymentType(selectedJob.employment_type?.[0]) || 'N/A'}
            </p>

            {/* Location and Date Posted */}
            <div className="flex items-left justify-start space-x-4 text-sm text-gray-500 mt-2">
              <div className="flex items-center">
                <AiOutlineEnvironment size={16} />
                <p className="ml-2">
                  <a
                    href={`https://www.google.com/maps?q=${selectedJob.linkedin_org_headquarters}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {selectedJob.linkedin_org_headquarters ? formatAddress(selectedJob.linkedin_org_headquarters) : 'Location Not Available'}
                  </a>
                </p>
              </div>
              <div className="flex items-center">
                <AiOutlineCalendar size={16} />
                <p className="ml-2">{selectedJob.date_posted ? new Date(selectedJob.date_posted).toDateString() : 'Date Not Available'}</p>
              </div>
            </div>

            {/* About the Recruiter Section */}
            {selectedJob.recruiter_name && (
              <div className="border-t border-gray-300 mt-6 pt-4">
                <h3 className="text-lg font-semibold mb-2">About the Recruiter</h3>
                <div className="flex items-center">
                  <p className="mr-2 text-sm text-gray-600">Name:</p>
                  <a
                    href={selectedJob.recruiter_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {selectedJob.recruiter_name || 'N/A'}
                  </a>
                </div>
                {/* Only show title if available */}
                {selectedJob.recruiter_title && (
                  <p className="text-sm text-gray-600">Title: {selectedJob.recruiter_title}</p>
                )}
              </div>
            )}

            {/* Company Details Section */}
            <div className="border-t border-gray-300 mt-6 pt-4">
              <h3 className="text-xl font-semibold mb-2">Company Details</h3>

              {/* Display Company Info */}
              <div className="text-base text-gray-600 mb-2"> {/* Increased font size here */}
                {selectedJob.linkedin_org_size && <p><strong>Size:</strong> {selectedJob.linkedin_org_size}</p>}
                {selectedJob.linkedin_org_industry && <p><strong>Industry:</strong> {selectedJob.linkedin_org_industry}</p>}
                {selectedJob.linkedin_org_headquarters && <p><strong>Headquarters:</strong> {selectedJob.linkedin_org_headquarters}</p>}
                {selectedJob.linkedin_org_foundeddate && <p><strong>Founded:</strong> {selectedJob.linkedin_org_foundeddate}</p>}
                {selectedJob.linkedin_org_employees && <p><strong>Employees:</strong> {selectedJob.linkedin_org_employees}</p>}
                {selectedJob.linkedin_org_followers && <p><strong>Followers:</strong> {selectedJob.linkedin_org_followers}</p>}
              </div>

              {/* Display "Keywords" Heading */}
              {selectedJob.linkedin_org_specialties && selectedJob.linkedin_org_specialties.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold mb-2">Keywords</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedJob.linkedin_org_specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {specialty.toLowerCase()} {/* Ensure tags are in lowercase */}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Visit Company Page Button */}
              {/* The Visit Company Page button is now positioned beside Apply */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Jobs;
