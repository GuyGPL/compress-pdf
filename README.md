## Start Project

The frontend of the application is developed using Next.js, featuring a responsive design presentation.

## Below is the structure of the frontend directory:

-   **app:** This folder contains the Next.js application. It uses the `layout` and `pages` directory to handle routing.
-   **contexts** Contains context management to efficiently manage and share state across application
-   **components:** Contains reusable React components used across the application.
-   **constants** Contains hard code for ui propose or url of png
-   **enums:** Contains enums used throughout the application.
-   **hooks:** Contains custom hooks used for processing data and call service.
-   **service:** Contains files to call APIs to the backend.
-   **styles** Contains theme setting and mui component override
-   **types:** Contains DTO types used in the frontend

### Setting up Project

2. Run `yarn install` or `npm install` to install dependencies.
3. After installation, you can run the service locally using `yarn dev`.
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Libraries/Packages Used

-   **Tanstack Query**: Simplifies data fetching, caching, synchronizing, and updating server state in React applications.
-   **Axios**: Facilitates HTTP requests with promise-based functionality and automatic JSON data transformations.
-   **MUI**: Offers a comprehensive and customizable set of UI components, adhering to Google's Material Design guidelines.
