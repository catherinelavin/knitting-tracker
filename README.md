# Knitting Tracker

StitchTrack is a web application designed to help knitters organise their yarn stash and manage knitting projects. The current version focuses on yarn inventory management, with project tracking features planned for future development.

## Live Demo
https://knitting-tracker-53y1lcqx1-cmarielavin-3945s-projects.vercel.app/

## Features

### Completed

* User authentication with Clerk
* Yarn stash management
  * Add yarn details
  * Edit yarn details
  * Delete yarns
  * View personal yarn collection

### In Progress

* Dashboard improvements
* UI enhancements

### Planned features

* Project management and progress tracking
* Pattern management
* Yarn usage tracking across projects
* Project notes and photos
* Statistics and analytics

## Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS

### Backend

* Next.js Server Components and API Routes

### Authentication

* Clerk Authentication

### Database

* PostgreSQL
* Prisma ORM

## Installation

1. Clone the repository

```bash
git clone <repository-url>
cd knitting-tracker
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env.local` file and add the required environment variables

```env
DATABASE_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

4. Run database migrations

```bash
npx prisma migrate dev
```

5. Start the development server

```bash
npm run dev
```

6. Open the application at:

```
http://localhost:3000
```

## Future Improvements

* Project photos
* Yarn purchase tracking
* Progress charts and analytics
* Mobile responsive enhancements
* Social sharing features
* Search and filtering options

## Challenges and Skills Developed
### Challenges
One of the main challenges was learning how the Next.js App Router works and understanding the differences between server and client components. Managing authentication with Clerk and ensuring that user data was properly protected also required careful implementation.
Designing the database schema for yarn management was another challenge, I needed to structure the data in a way that would support future features such as project tracking and yarn usage without requiring major changes later.
Building a responsive and intuitive user interface was also an important consideration. Creating forms, navigation, and layouts that were both functional and easy to use helped improve my frontend development skills.

### Skills Developed
Through this project, I gained practical experience with:
* Building full-stack applications using Next.js and TypeScript
* Implementing user authentication with Clerk
* Designing and querying databases using Prisma
* Managing application state and user-specific data
* Creating reusable React components
* Structuring a larger project and organising files effectively
* Deploying applications using Vercel
* Debugging and troubleshooting issues across the frontend and backend
This project helped me become more confident working independently with modern web development tools and gave me a better understanding of how full-stack applications are built and deployed.

## Author

Catherine Lavin

Created as a software development project to help knitters organise their projects and yarn collections in a single platform.

