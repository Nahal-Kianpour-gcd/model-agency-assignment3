# Modeling Agency Management System – Frontend Client-Side Application

weniste link on render -> 
https://your-render-link-here

## Project Overview

For this assignment, we developed the client-side user interface of our Modeling Agency Management System using React.js and Tailwind CSS.

The frontend allows users to browse models, view model profiles, register, log in, and manage model profiles through interactive pages and forms.

This builds on our Assignment 1 proposal and Assignment 2 backend implementation. In this assignment, we focused on implementing the visual side of the application and creating interactive client-side functionality that will later connect to our backend.


## Functionality Implemented

### Public User Features

* Browse Models page
* Search models by keyword
* Filter models by category
* Filter models by location
* View individual Model Profile page

### Authentication UI

* Register page
* Login page
* Form validation
* User feedback messages

### Agency-side Model Management

* Add Model page
* Edit Model page
* Client-side validation
* Navigation between pages

### Shared Layout / Navigation

* Shared Navbar
* Shared Footer
* Routing between pages using React Router

### Responsive Design / Styling

* Tailwind CSS styling
* Responsive layouts for different screen sizes
* Consistent design system based on Assignment 1


## Technologies Used

* React.js
* React Router DOM
* Tailwind CSS
* JavaScript
* Vite


## How to Run the Project

1. Install dependencies:
- npm install

2. cd client
3. Run the development server:
- npm run dev

4. Open in browser:
- http://localhost:5173



## Pages Implemented

### Public Pages

* `/` → Home page
* `/models` → Browse Models
* `/models/:id` → Model Profile

### Authentication Pages

* `/login` → Login page
* `/register` → Register page

### Agency-side Pages

* `/agency/models` → Model List Dashboard
* `/agency/models/add` → Add Model
* `/agency/models/edit/:id` → Edit Model


## Contribution of Each Team Member – Assignment 3

### Nahal Kianpour

I worked mainly on the core client-side experience and overall integration of the frontend system.

I implemented the main user journey of the website, including the Home page, Browse Models page, and Model Profile page. I also implemented the search bar and filtering functionality by category and location so users can easily browse available models.

I connected the routes in App.jsx and integrated the shared navigation bar and footer across the pages for a consistent layout. I also worked on improving the overall styling and user experience to match our Assignment 1 design system.

In addition, I deployed the frontend project and managed the GitHub repository for sharing the latest version with the team.

### Thanh Phuong Hoang

I worked on the agency-side model management functionality.

I implemented the Add Model page and Edit Model page based on the Assignment 1 wireframes. These pages allow agency users to create and edit model profiles through forms.

I also added client-side validation to make sure required fields are filled correctly and that fields such as age and height accept valid numeric input.

### Trinity Kendi

I worked on the authentication system user interface.

I implemented the Login page and Register page, including form inputs, validation, and user feedback messages.

These pages provide the entry point for users to access the system.

### Keyla Paguaga Jarquin
I worked on improving the overall user interface and functionality of the application. 
I made sure the UI is consistent across all pages and improved the responsive layout so it works well on different devices. 
I also ensured smooth navigation by setting up proper routing between pages. In addition, I added client-side validation to forms, included clear code comments, and helped prepare and deploy the frontend on Render. -Sorry for sending like that -

---

## Work Completed

* Home page implemented
* Browse Models page implemented
* Model Profile page implemented
* Search and filtering functionality implemented
* Add Model page implemented
* Edit Model page implemented
* Login page implemented
* Register page implemented
* Shared Navbar and Footer implemented
* Responsive styling improvements added
* Routing between pages implemented
* Frontend deployed online


## Changes from Assignment 1

We kept the main planned features from Assignment 1 and started implementing the frontend step by step.

We first created the main public browsing flow, then implemented authentication pages, and finally added the agency-side CRUD interface pages.

This allowed us to test each section individually before integrating everything together.


## Notes

* No real API calls are currently made, as required in the brief
* Mock data is currently used
* Backend integration will be added in the next iteration


## References

* https://react.dev/
* https://reactrouter.com/
* https://tailwindcss.com/
* https://vitejs.dev/