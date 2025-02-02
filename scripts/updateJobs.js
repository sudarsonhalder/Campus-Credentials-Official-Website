// scripts/updateJobs.js

import axios from 'axios';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Destructure environment variables
const { RAPIDAPI_KEY, RAPIDAPI_HOST } = process.env;

// Validate API credentials
if (!RAPIDAPI_KEY || !RAPIDAPI_HOST) {
  console.error('Error: Missing RAPIDAPI_KEY or RAPIDAPI_HOST in environment variables.');
  process.exit(1);
}

// Expanded list of job roles (ensure no problematic characters)
const jobRoles = [
  // Tech Job Roles
  'Data Analytics',
  'Data Engineer',
  'Data Scientist',
  'Software Developer',
  'Software Engineer',
  'Web Developer',
  'Full Stack Developer',
  'Frontend Developer',
  'Backend Developer',
  'AI Engineer',
  'Machine Learning Engineer',
  'Deep Learning Engineer',
  'Android Developer',
  'iOS Developer',
  'Mobile App Developer',
  'DevOps Engineer',
  'Cloud Engineer',
  'Systems Administrator',
  'Network Engineer',
  'Cybersecurity Analyst',
  'Information Security Manager',
  'UI-UX Designer', // Changed from "UI/UX Designer" to avoid '/'
  'Graphic Designer',
  'Product Manager',
  'Project Manager',
  'QA Engineer',
  'Quality Assurance Tester',
  'Business Intelligence Analyst',
  'Database Administrator',
  'IT Support Specialist',
  'Technical Support Engineer',
  'Blockchain Developer',
  'Game Developer',
  'Embedded Systems Engineer',
  'Firmware Engineer',
  'Robotics Engineer',
  'Automation Engineer',
  'Site Reliability Engineer',
  'Technical Writer',
  'SEO Specialist',
  'Digital Marketing Specialist',
  'IT Consultant',
  'Solutions Architect',
  'Enterprise Architect',
  'Data Architect',
  'Big Data Engineer',
  'Bioinformatics Specialist',
  'Computational Scientist',

  // Non-Tech Job Roles
  'Data Entry',
  'Customer Service Representative',
  'Sales Associate',
  'Marketing Manager',
  'Human Resources Specialist',
  'Recruiter',
  'Administrative Assistant',
  'Office Manager',
  'Financial Analyst',
];

// Function to construct the advanced_title_filter
const constructAdvancedTitleFilter = (roles) => {
  // Enclose multi-word titles in single quotes and join with |
  return `(${roles.map(role => `'${role}'`).join(' | ')})`;
};

// Function to URL encode query parameters
const encodeQueryParams = (params) => {
  return Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');
};

// Function to build the API URL
const buildApiUrl = (offset = 0, limit = 100) => {
  const advancedTitleFilter = constructAdvancedTitleFilter(jobRoles);
  
  // URL encode the advanced_title_filter
  const encodedAdvancedTitleFilter = encodeURIComponent(advancedTitleFilter);
  
  const params = {
    advanced_title_filter: advancedTitleFilter, // Will be URL encoded below
    location_filter: '"India"',
    type_filter: 'FULL_TIME,PART_TIME,INTERNSHIP', // Ensure no trailing commas
    limit: limit,
    offset: offset,
  };
  
  const queryString = encodeQueryParams(params);
  return `https://${RAPIDAPI_HOST}/active-jb-7d?${queryString}`;
};

// Function to fetch jobs
const fetchJobs = async (url) => {
  try {
    const response = await axios.get(url, {
      headers: {
        'x-rapidapi-host': RAPIDAPI_HOST,
        'x-rapidapi-key': RAPIDAPI_KEY,
      },
    });
    
    console.log(`Response Status for ${url}:`, response.status);
    console.log(`Response Data for ${url}:`, JSON.stringify(response.data, null, 2)); // Log full response for debugging
    
    // Adjust based on the actual structure of the API response
    if (Array.isArray(response.data)) {
      return response.data;
    } else if (response.data && Array.isArray(response.data.jobs)) {
      return response.data.jobs;
    } else {
      console.warn(`Unexpected response format for URL: ${url}`);
      console.log('Response Data:', response.data); // Log the actual response data for debugging
      return [];
    }
  } catch (error) {
    if (error.response) {
      // The request was made, and the server responded with a status code outside 2xx
      console.error(`Error fetching jobs from ${url}:`, JSON.stringify(error.response.data, null, 2));
    } else if (error.request) {
      // The request was made, but no response was received
      console.error(`No response received from ${url}:`, error.request);
    } else {
      // Something happened in setting up the request
      console.error(`Error in request setup for ${url}:`, error.message);
    }
    return [];
  }
};

// Main function to fetch and save jobs
const main = async () => {
  const dataDir = path.join(process.cwd(), 'data');
  const filePath = path.join(dataDir, 'jobs.json');

  // Ensure the 'data' directory exists
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  // Initialize an empty array to hold all jobs
  let allJobs = [];

  // Define offsets for two requests
  const offsets = [0, 100];
  const limit = 100;

  for (const offset of offsets) {
    const url = buildApiUrl(offset, limit);
    console.log(`\nFetching jobs with offset ${offset}...`);
    const jobs = await fetchJobs(url);
    if (jobs.length > 0) {
      allJobs = allJobs.concat(jobs);
      console.log(`Fetched ${jobs.length} jobs with offset ${offset}.`);
    } else {
      console.warn(`No jobs fetched with offset ${offset}.`);
    }
  }

  // Save the combined jobs to jobs.json
  try {
    fs.writeFileSync(filePath, JSON.stringify(allJobs, null, 2));
    console.log(`\nTotal jobs fetched and saved: ${allJobs.length}`);
  } catch (writeError) {
    console.error('Error writing to jobs.json:', writeError.message);
  }
};

// Execute the main function
main();
