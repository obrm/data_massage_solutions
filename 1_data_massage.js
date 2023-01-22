/*
  This array of objects contains three main objects representing three different people, each of which includes properties such as `id`, `name`, `age`, `address`, `hobbies`, and `jobs`. The `address` property is an object with properties such as `street`, `city`, `state`, and `zip`, and the `hobbies` and `jobs` properties are arrays. The `jobs` property is an array of objects, each of which includes properties such as `company`, `position`, `startDate`, `endDate`, and `responsibilities`.
*/

const data = [
  {
    id: 1,
    name: "John Smith",
    age: 30,
    address:
    {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001"
    },
    hobbies: ["reading", "hiking", "traveling"],
    jobs: [
      {
        company: "Acme Inc.",
        position: "Developer",
        startDate: "2020-01-01",
        endDate: "2022-12-31",
        responsibilities: ["Developing web applications", "Debugging code", "Writing documentation"]
      },
      {
        company: "Beta Corp.",
        position: "Senior Developer",
        startDate: "2022-01-01",
        endDate: null,
        responsibilities: ["Leading a team of developers", "Mentoring junior developers", "Improving codebase"]
      }
    ]
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 25,
    address: {
      street: "456 Park Ave",
      city: "Los Angeles",
      state: "CA",
      zip: "90001"
    },
    hobbies: ["cooking", "gardening", "yoga"],
    jobs: [
      {
        company: "Gamma LLC.",
        position: "QA Engineer",
        startDate: "2019-01-01",
        endDate: "2021-12-31",
        responsibilities: ["Testing web applications", "Creating test cases", "Providing feedback"]
      },
      {
        company: "Delta Inc.",
        position: "Senior QA Engineer",
        startDate: "2022-01-01",
        endDate: null,
        responsibilities: ["Leading a team of QA engineers", "Developing automation tests", "Improving quality processes"]
      }
    ]
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 35,
    address: {
      street: "789 Elm St",
      city: "Chicago",
      state: "IL",
      zip: "60001"
    },
    hobbies: ["fishing", "camping", "surfing"],
    jobs: [
      {
        company: "Epsilon Inc.",
        position: "Data Analyst",
        startDate: "2018-01-01",
        endDate: "2020-12-31",
        responsibilities: ["Analyzing data", "Creating reports", "Providing insights"]
      },
      {
        company: "Zeta Corp.",
        position: "Senior Data Analyst",
        startDate: "2021-01-01",
        endDate: null,
        responsibilities: ["Leading a team of data analysts", "Developing machine learning models", "Improving data processes"]
      }
    ]
  }
];

// Question 1: Extract a list of all the people's names from the data.
// Solution:

// The map method is used to iterate through the data array and extract the value of the name property for each person object.
const names = data.map(person => person.name);

// The resulting array, "names", contains the names of all the people in the data.
console.log(names);



// Question 2: Get all the job positions for all the people.
// Solution:
// The map method is used to iterate through the data array and extract the jobs array for each person object.
const jobPositions = data.map(person => person.jobs
  // Then, another map method is used to iterate through the jobs array and extract the position property for each job object.
  .map(job => job.position)).flat();

  // The resulting array of arrays, "jobPositions", is then flattened using the flat method to return a single array containing all the job titles.
console.log("jobPositions", jobPositions);


// Question 3: Find the average age of the people.

// The reduce method is used to iterate through the data array and add the value of the age property for each person object to an accumulator.
// The accumulator is then divided by the length of the data array to calculate the average age of the people.
const averageAge = data.reduce((acc, person) => acc + person.age, 0) / data.length;
console.log(averageAge);


// Question 4: Get all the unique cities where the people live.
// Solution:

// The map method is used to iterate through the data array and extract the city property from the address object for each person object.
// A new Set is created containing the cities, which automatically removes any duplicates.
// Then, the spread operator is used to convert the set back to an array, "uniqueCities", containing the unique cities.
const uniqueCities = [...new Set(data.map(person => person.address.city))];
console.log(uniqueCities);


// Question 5: Extract a list of all the people's hobbies in alphabetical order.
// Solution:

// The map method is used to iterate through the data array and extract the hobbies array for each person object.
const hobbies = data.map(person => person.hobbies)
// Then, the flat method is used to flatten the array of arrays into a single array.
  .flat()
  // The sort method is used to sort the hobbies alphabetically
  .sort();
console.log(hobbies);


// Question 6: Get the total number of years of experience for all the people in the data.
// Solution:

// The map method is used to iterate through the data array and extract the jobs array for each person object.
const totalExperience = data.map(person => person.jobs
  // Then, the reduce method is used to iterate through the jobs array and calculate the number of years of experience for each job.
  .reduce((acc, job) => {
  // If the job has an end date, it calculates the number of years between end date and start date.
  if (job.endDate) {
    return acc + (new Date(job.endDate).getFullYear() - new Date(job.startDate).getFullYear());
  }
  // If the job has no end date, it calculates the number of years between current date and start date.
  return acc + (new Date().getFullYear() - new Date(job.startDate).getFullYear());
}, 0))
// The resulting array of numbers is then reduced again to find the total number of experience for all the people in the data.
  .reduce((acc, years) => acc + years);

console.log(totalExperience);


// Question 7: Extract all the names of the people who live in California and have a job as a "Senior QA Engineer" and have "cooking" as a hobby, and sort them alphabetically:
// The first filter method checks if the person's state is "CA" and if they have a job as a "Senior QA Engineer" and endDate is null and hobbies includes cooking
const californiaSeniorQAEngineers = data.filter(person => person.address.state === "CA" &&
  person.jobs.find(job => job.position === "Senior QA Engineer" && job.endDate === null) &&
  person.hobbies.includes("cooking"))
  // The map method extracts the name of each person that meets the criteria from the filter method
  .map(person => person.name)
  // The sort method sorts the names alphabetically
  .sort();
console.log(californiaSeniorQAEngineers);


// Question 8: Extract all the responsibilities of the people who live in Chicago and are currently employed as "Senior Data Analysts":

// The first filter method checks if the person's city is "Chicago" and if they are currently employed as a "Senior Data Analyst"
const nySeniorDataAnalystResponsibilities = data.filter(person => person.address.city === "Chicago" &&
  person.jobs.find(job => job.position === "Senior Data Analyst" && job.endDate === null))
  // The map method extracts the job object that matches the criteria from the filter method
  .map(person => person.jobs.filter(job => job.position === "Senior Data Analyst" && job.endDate === null)
  // The second map method extracts the responsibilities array from the job object
    .map(job => job.responsibilities))
    // The flat method flattens the array of arrays into a single array of responsibilities
  .flat();

console.log(nySeniorDataAnalystResponsibilities);



// Question 9: Extract all the people who have "hiking" as a hobby and create a new field "job_experience" which is the sum of the number of months they have worked in each job:

// The filter method checks if the person has "hiking" as a hobby
const hikingJobExperienceData = data.filter(person => person.hobbies.includes("hiking"))
// The map method extracts the relevant data for each person that meets the criteria from the filter method: name and creates a new field "job_experience" which is the sum of the number of months the person has worked in each job,
  .map(person => {
    // by using the reduce method to iterate over the jobs array and calculate the difference between start and end date.
    const jobExperienceInMonths = person.jobs.reduce((total, job) => {
      const start = new Date(job.startDate);
      const end = job.endDate ? new Date(job.endDate) : new Date();
      return total + (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    }, 0);
    return {
      name: person.name,
      job_experience: jobExperienceInMonths
    };
  });
console.log(hikingJobExperienceData);



// Question 10: Extract all the people who have "surfing" as a hobby and create a new field "job_titles" which is an array of all the positions the person has held and another new field "current_job" which is the current job if they have one or "Not currently employed" if they do not:

// The filter method checks if the person has "surfing" as a hobby
const surfingJobTitleData = data.filter(person => person.hobbies.includes("surfing"))
// The map method extracts the relevant data for each person that meets the criteria from the filter method: name and a new field "job_titles" which is an array of all the positions the person has held and another new field "current_job" which is the current job if they have one or "Not currently employed" if they do not.
  .map(person => {
    const jobTitles = person.jobs.map(job => job.position);
    const currentJob = person.jobs.find(job => job.endDate === null) ? person.jobs.find(job => job.endDate ===
      null).position : "Not currently employed";
    return {
      name: person.name,
      job_titles: jobTitles,
      current_job: currentJob
    };
  });
console.log(surfingJobTitleData);



// Question 11: Extract all the people who have "traveling" as a hobby, and create a new field "most_recent_job" which is an object containing the company, position, and start date of their most recent job:

// The filter method checks if the person has "traveling" as a hobby
const travelingMostRecentJobData = data.filter(person => person.hobbies.includes("traveling"))
// The map method extracts the relevant data for each person that meets the criteria from the filter method: name and creates a new field "most_recent_job" which is an object containing the company, position, and start date of their most recent job
.map(person => {
    // We use the sort method to sort the jobs array by start date in descending order and getting the first element of the array.
    const mostRecentJob = person.jobs.sort((a, b) => new Date(b.startDate) - new Date(a.startDate))[0];
    return {
      name: person.name,
      most_recent_job: {
        company: mostRecentJob.company,
        position: mostRecentJob.position,
        start_date: mostRecentJob.startDate
      }
    };
  });
console.log(travelingMostRecentJobData);


// Question 12: Extract all the people who have "yoga" as a hobby, and create a new field "job_history" which is an array of objects containing the company, position, start date, and end date of all the jobs they have held:

// 1. The filter method checks if the person has "yoga" as a hobby
const yogaJobHistoryData = data.filter(person => person.hobbies.includes("yoga"))
  // 3. by iterating over the jobs array and mapping each job object to a new object containing the relevant fields.
  .map(person => {
    const jobHistory = person.jobs.map(job => {
      return {
        company: job.company,
        position: job.position,
        start_date: job.startDate,
        end_date: job.endDate
      };
    });
  // 2. The map method extracts the relevant data for each person that meets the criteria from the filter method: name and creates a new field "job_history" which is an array of objects containing the company, position, start date, and end date of all the jobs they have held,
    return {
      name: person.name,
      job_history: jobHistory
    };
  });
console.log(yogaJobHistoryData);


// Question 13: Extract all the people who have "fishing" as a hobby, and create a new field "job_duration" which is an array of the number of months they have worked in each job:

// 1. The filter method checks if the person has "fishing" as a hobby
const fishingJobDurationData = data.filter(person => person.hobbies.includes("fishing"))
  .map(person => {
    // 3. another map method that produces an array of the number of months they have worked in each job, by iterating over the jobs array and mapping each job object to the number of months they have worked in that job by calculating the difference between start and end date.
    const jobDurationInMonths = person.jobs.map(job => {
      const start = new Date(job.startDate);
      const end = job.endDate ? new Date(job.endDate) : new Date();
      return (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    });
  // 2. The map method extracts the relevant data for each person that meets the criteria from the filter method: name and creates a new field "job_duration" which is a result of
    return {
      name: person.name,
      job_duration: jobDurationInMonths
    };
  });
console.log(fishingJobDurationData);
