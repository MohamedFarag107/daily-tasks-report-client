
# Daily Task Report - Frontend

Daily Task Report - Track and Manage Your Productivity


## Author

- [Mohamed Farag](https://github.com/MohamedFarag107)


## Demo

- [Live Demo](http://mfarag.me)


## Features

- Employee Management

  - Create Employee: Allows the creation of a new employee through a user-friendly form.
  - Update Employee: Enables updating an existing employee's details via an intuitive interface.
  - Delete Employee: Facilitates the deletion of an employee by ID with confirmation prompts.
  - View Employee: Retrieves and displays a single employee's details by their ID.
  - List Employees: Fetches and displays a list of all employees with optional pagination and filtering.

- Task Management

  - Create Task: Allows the creation of a new task through a simple form.
  - Update Task: Enables updating an existing task's details via an easy-to-use interface.
  - Delete Task: Facilitates the deletion of a task by ID with confirmation prompts.
  - View Task: Retrieves and displays a single task's details by its ID.
  - List Tasks: Fetches and displays a list of all tasks with optional pagination and filtering.
  - Daily Task Summary: Provides a summary of tasks for each employee on a daily basis.

- Validation

  - Input validation is performed on the client-side to ensure data integrity and correctness.

- Error Handling

  - User-friendly error messages and notifications for better user experience.

- Environment Configuration

  - Configurable via environment variables for different environments (development and production).

- State Management

  - Uses Redux for state management to handle complex state logic.

- Styling

  - Use shadcn/ui for styling components and pages.

- API Integration

  - Integrates with the backend API to fetch and manipulate data using Rtk  Query.

- Responsive Design

  - Fully responsive design to ensure usability across different devices.


# How To Get Started

<!-- pre requirement -->

## Pre Requirement

### Install Dependencies

```bash
yarn
```

### Create `.env.development` for development and `.env.production` for production in the root project folder with the following content:

```bash
VITE_APP_URL="http://localhost:3001"
```

### Run Development

```bash
yarn dev
```

### Build for Production

```bash
yarn build
```

### Serve Production Build

```bash
yarn preview
```
