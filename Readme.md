# Portfolio Website with Dynamic Content
This project is a dynamic portfolio website built using Next.js. The main feature of this project is the dynamic fetching of content from an external API to populate the portfolio section.


## Features
Fetches data from an external API to dynamically populate the portfolio section.
Responsive design for optimal viewing across devices.

## Technologies Used
Next.js: A JavaScript library for building user interfaces.
External API: Fetches data from an external API to dynamically populate sections.

## Installation
Follow these steps to set up the project:

Clone the repository:

- git clone https://github.com/your-username/your-project.git

## Navigate to the project directory:

- cd your-project

## Install dependencies:

- npm install / npm i

## Access live preview
- Here are the links:
GitHub Repo: https://github.com/rxjans/dynamic-portfolio
Vercel Link: https://dynamic-portfolio-steel.vercel.app

## Usage
Start the development server:

- npm run dev

- Open the browser, navigate to http://localhost:3000 to view the website.

## Contribution Information:

* API Integration: Utilized a single API call and implemented efficient data sharing using the Context API.

* Data Utilization: Ensured comprehensive utilization of all API fields, including the "enabled" field.

* Enhanced UI: Implemented the "forEducation" field to distinguish between education and experience sections for improved clarity.

* Error Handling: Thoroughly handled potential errors, including redirecting to an error page for non-200 status codes.
  
* Section Visibility: Implemented a feature to hide sections when data is unavailable, enhancing the UI's cleanliness. Mostly error regarding isotope were addressed while errorHandling.

* URL Options: Added options to display live or GitHub URLs in the project section for user convenience. by default, "no preview available" or "No github repo to show" was declared. Also added dynamic fetching of description.

* Tech Stack Filtering: Enhanced the projects section by filtering projects based on specified tech stack fields. Rendered components using map function to address dynamic rendering incase of projects being added to the API. 

* External Stylesheet Loading: Additionally, resolved the issue of loading Google stylesheet externally through the app.js component. 

* Dynamic Filters in Projects Section: I have implemented dynamic filters based on API data in the projects section to ensure a more interactive experience overall.

* Integration of API Data: Instead of directly copying and pasting data, I have integrated real-time information fetched from the API. 

* About Avatar Display: I have made sure to display the About avatar appropriately in all sections where it is necessary, maintaining visual consistency and enhancing the overall user experience.

* Avoiding Too Many States: I revisited the codebase and optimized the components to minimize the usage of unnecessary states, ensuring better performance and cleaner code.

* Showing Preloader Based on API Calls: Preloader components have been integrated into the application to provide visual feedback during API calls, enhancing the user experience.

* Displaying User Image in Skills Section: The user image has been successfully incorporated into the skills section, improving visual consistency across the application.

* Testimonials Section Enhancements: Small images are now displayed on the left and right sides of the testimonials section, and functionality has been added to utilize testimonial images in those areas, enhancing the overall design and user engagement.

* Filters Based on Tech Stacks in Projects Section: I've implemented dynamic filters based on tech stacks in the projects section, allowing users to easily navigate and filter projects based on their interests. Additionally, I filtered the data based on sequence of the API Structure.

* Skills Bar Colors: Implemented color-coded skills bars to indicate proficiency levels.
  
* Avatar Integration: Experimented with integrating avatars into the skills section.

* Sequence-Based Organization: Arranged skills based on the sequence attribute in the API for logical presentation.

These updates aim to improve functionality and visual appeal.
