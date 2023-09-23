# Airbnb Clone

Welcome to the Airbnb Clone project! This project aims to replicate some of the core functionalities of Airbnb, allowing users to create listings, favorite listings, make reservations, and more. It also incorporates user authentication and third-party authentication features.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

This project is built using the following technologies and dependencies:

- [Next.js](https://nextjs.org/) - A React framework for building server-rendered applications.
- [NextAuth.js](https://next-auth.js.org/) - For user authentication, including third-party authentication.
- [Prisma](https://prisma.io/) - A modern database object relational mapping toolkit for TypeScript and Node.js.
- [Redux Toolkit](https://redux-toolkit.js.org/) - For state management.
- [Leaflet](https://leafletjs.com/) - An open-source JavaScript library for interactive maps.
- [React Date Range](https://github.com/Adphorus/react-date-range) - A date range picker for React.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.
- [Cloudinary](https://cloudinary.com/) - For image and video management.
- [Axios](https://axios-http.com/) - A promise-based HTTP client for making API requests.
- [React Hook Form](https://react-hook-form.com/) - For form management.
- [React Leaflet](https://react-leaflet.js.org/) - React components for Leaflet maps.
- [React Icons](https://react-icons.github.io/react-icons/) - A set of customizable SVG icons for React.
- And more (see `package.json` for a full list).

## Features

This Airbnb Clone project includes the following features:

- User authentication with email and password.
- Third-party authentication using providers like Google, Facebook, etc. (NextAuth.js).
- User profile management.
- Creating, editing, and deleting property listings.
- Searching for properties based on various filters.
- Favoriting properties.
- Making reservations for properties.
- Viewing and managing reservations as a host.
- Viewing trip history.
- Interactive maps for property locations.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/iandcf/airbnb-clone.git
   ```

2. Install project dependencies:

   ```bash
   cd airbnb-clone
   npm install
   ```

3. Set up environment variables:

   - Create a `.env.local` file in the root directory.
   - Add environment variables like database connection strings, Cloudinary credentials, and authentication providers. Refer to `.env.example` for guidance.

4. Set up your database using Prisma:

   ```bash
   npx prisma migrate dev
   ```

5. Run the development server:

   ```bash
   npm run dev
   ```

6. Open your browser and access the application at `http://localhost:3000`.

## Usage

- Register a user account or sign in.
- Create property listings with details and images.
- Search and filter properties based on your preferences.
- Favorite properties to view them later.
- Make reservations for properties.
- As a host, manage reservations and view trip history.

Feel free to explore and test the application's features!

## Contributing

Contributions to this project are welcome! If you find any issues or want to add new features, please follow these steps:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Create a pull request with a clear description of your changes.
