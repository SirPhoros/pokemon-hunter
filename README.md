# Pokemon Hunter

Pokemon Hunter is a project developed as part of a technical exercise for an interview with [Thirst](https://thirst.io/). The project demonstrates the use of GraphQL, Firebase Database, and Firebase Authentication. It's built using React, Vite, and Node.js.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Pokemon Hunter is a web application that allows users to discover and collect Pokemon. It leverages GraphQL to fetch Pokemon data, Firebase Database for storage, and Firebase Authentication for user management. This project serves as a showcase of how to integrate these technologies into a React application.

Written by [Cristóbal G. Torrubia](https://github.com/SirPhoros). Latest version 1.0.0 (01 Sept 2023).

## Features

- **Pokemon Collection**: Users can collect and view their own Pokemon collection.
- **Pokemon Discovery**: Discover new Pokemon and add them to your collection.
- **User Authentication**: Secure user authentication using Firebase Authentication.
- **GraphQL Integration**: Query and retrieve Pokemon data efficiently using GraphQL.

## Technologies

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that enhances the development experience for web projects.
- **JavaScript**: The primary programming language used for the project.
- **Node.js**: JavaScript runtime for server-side development.
- **GraphQL**: A query language for APIs that enables efficient data fetching.
- **Firebase**: Provides a scalable backend infrastructure, including Realtime Database and Authentication.

## Getting Started

To get started with Pokemon Hunter, follow these steps:

### Prerequisites

- Node.js: Make sure you have Node.js installed on your system.
- Firebase Account: Create a Firebase account and set up a project to obtain Firebase configuration.

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/SirPhoros/pokemon-hunter.git
    ```

2.  Navigate to the project directory:

    ```bash
    cd pokemon-hunter
    ```

3.  Install node:

    ```bash
    $ npm install
    ```

> Node minimum version should be: [Node.js v19.7.0](https://nodejs.org/en/download/).

4.  Create a Firebase project and configure Firebase Authentication and Database.

5.  You can change and add your Firebase configuration:

        const firebaseConfig = {
        apiKey: your-api-key,
        authDomain: your-auth-domain,
        projectId: your-project-id,
        storageBucket: your-storage-bucket,
        messagingSenderId: your-messaging-sender-id,
        appId: your-app-id,}

> In a normal situation, this should be done in a .env file

5.  Start the development server:

    ```bash
    npm run dev
    ```

After doing that, in your console a similar message should display:

```
 VITE v4.4.9  ready in 311 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

Now you can click on the link provided, or browse in your browser [http://localhost:5173/](http://localhost:5173/). Depending on your port availability, it may vary. Please, check your console for more information.

6.  Open your browser and access the app at: http://localhost:5173/

## Usage

1. **Register/Login:**

   - Register for a new account with your email and password.
   - Log in to your existing account.

2. **Explore Pokémon:**

   - Discover various Pokémon species in the catalog.
   - View Pokémon names and images

3. **Add to Your Collection:**

   - Select Pokémon from the catalog to add them to your collection.

4. **Manage Your Pokémon Collection:**
   - Access your Pokémon collection in the "My Collection" section.
   - Optionally mark Pokémon as "shiny" if you've captured them in their shiny form.
   - Edit and update your collection, including marking Pokémon as "shiny".

Enjoy your Pokémon collection and the hunt for rare and shiny Pokémon!

## Future of the App

In the future, we plan to enhance the Pokémon Collection Web App with the following features and improvements:

- **User Profiles:** Customize your profile with avatars and personalization options.
- **Leaderboards:** Compete with other collectors and showcase your achievements.
- **Social Sharing:** Share your Pokémon collection milestones with friends and fellow trainers.
- **Enhanced Catalog:** Continuously update the Pokémon catalog with new species and details.
- **Multiplatform Support:** Extend the app to mobile devices for on-the-go Pokémon collecting.
- **More Pokémon detals:** Extend the details provided by the users by means of different APIs

Stay tuned for these exciting updates and improvements as we strive to make your Pokémon collection experience even better!

## Contributing

Contributions to **Pokemon Hunter** are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the project repository.
2. Create a new branch for your feature or bug fix.
3. Implement your changes and commit them to your branch.
4. Push your changes to your forked repository.
5. Submit a pull request to the original repository.

## License

This project is licensed under the MIT License. See the [LICENSE](https://opensource.org/license/mit/) file for more details.

---

The following link will take you to the creators github & LinkedIn profile:

GitHub: [https://github.com/SirPhoros](https://github.com/SirPhoros)<br />
LinkedIn: [Cristóbal Gutiérrez Torrubia](https://www.linkedin.com/in/cgtorrubia/)

---

Copyright (c) 2023 - [Cristóbal Gutiérrez Torrubia](https://www.linkedin.com/in/cgtorrubia/)
