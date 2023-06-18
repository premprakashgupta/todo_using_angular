# Angular Todo App with NgRx and Firebase

This is a simple Todo application built with Angular, NgRx, and Firebase. The application allows you to create new todo boxes, add items to each todo box, and delete them as needed. It utilizes the NgRx library for state management and integrates with Firebase for the backend database.

## Features

- Create new todo boxes
- Add items to each todo box
- Delete todo boxes and their associated items
- Real-time synchronization with Firebase
- Seamless state management with NgRx

## Prerequisites

Before running the application, make sure you have the following prerequisites installed on your system:

- Node.js (version 12 or above)
- Angular CLI (version 12 or above)
- Firebase account and project setup

## Getting Started

Follow the steps below to set up and run the Angular Todo App:

1. Clone the repository to your local machine:

   ```shell
   git clone https://github.com/your-username/todo.git
   ```

2. Navigate to the project directory:

   ```shell
   cd todo
   ```

3. Install the project dependencies:

   ```shell
   npm install
   ```

4. Configure Firebase credentials:

   - Rename the `src/environments/environment.ts.example` file to `src/environments/environment.ts`.
   - Open the `src/environments/environment.ts` file and replace the Firebase configuration placeholders with your own Firebase project credentials.

5. Start the development server:

   ```shell
   ng serve
   ```

6. Open your browser and navigate to `http://localhost:4200` to access the Angular Todo App.

## Project Structure

The project structure follows Angular's recommended best practices and the NgRx recommended pattern for state management. The main directories and files of the project are as follows:

- `src/app/components`: Contains the Angular components used in the application.
- `src/app/models`: Defines the data models used in the application, such as `Todo` and `TodoItem`.
- `src/app/actions`: Defines the NgRx actions for state management, including actions for creating, deleting, and updating todos and todo items.
- `src/app/reducers`: Implements the NgRx reducers that handle the state changes based on dispatched actions.
- `src/app/effects`: Implements NgRx effects that handle asynchronous operations, such as fetching data from Firebase or updating the database.
- `src/app/services`: Provides services for interacting with Firebase, including functions for creating, deleting, and updating todos and todo items.
- `src/app/state`: Contains the main NgRx store setup, including the initial state and selectors for accessing the state data.
- `src/app/app.module.ts`: The root module of the Angular application, where the NgRx store, effects, and other dependencies are registered.

## Firebase Integration

The Angular Todo App integrates with Firebase as the backend database. It uses Firebase Firestore to store and sync the todos and todo items in real-time. The Firebase integration is handled through the `TodoService` and related functions in the `src/app/services/todo.service.ts` file.

## NgRx State Management

To manage the application state, the Angular Todo App utilizes the NgRx library. NgRx provides a reactive approach to state management, allowing for predictable and scalable application state handling. The state management implementation consists of actions, reducers, effects, and selectors.

- Actions: Defined in the `src/app/actions` directory, actions represent the various events or operations that can be dispatched to modify the state. Actions include creating, deleting, and updating todos and todo items.
- Reducers: Implemented in the `src/app/reducers` directory, reducers define how the state is modified in response to dispatched actions. Each reducer handles a specific action and updates the state accordingly

.

- Effects: Located in the `src/app/effects` directory, effects handle side effects, such as asynchronous operations, API calls, and interaction with external services. Effects listen to specific actions and perform the necessary operations.
- Selectors: Defined in the `src/app/state` directory, selectors provide convenient functions to retrieve data from the state. Selectors allow components to access the state in a structured and efficient manner.

The combination of NgRx and Firebase provides a powerful solution for managing the application state and ensuring real-time synchronization with the backend.

## Contributing

If you'd like to contribute to the Angular Todo App, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch for your feature or bug fix.
3. Make the necessary changes in your branch.
4. Test your changes to ensure they work as expected.
5. Submit a pull request to the main repository.

## License

This project is licensed under the MIT License. You can find more details in the `LICENSE` file.

## Acknowledgements

This project was inspired by various Angular and NgRx tutorials and resources available online. Special thanks to the Angular and NgRx communities for their valuable contributions.

## Contact

For any inquiries or suggestions, please feel free to contact us at [your-email@example.com](mailto:your-email@example.com).

We hope you enjoy using the Angular Todo App!
