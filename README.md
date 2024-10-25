# UsePopcorn Project

## Overview

Welcome to the UsePopcorn project! This project is built using React and focuses on creating a seamless and enjoyable user experience for managing and viewing movie data.

## Key Principles

### Logical Separation

All components are logically separated to ensure clarity and maintainability. Each component is responsible for a specific part of the application, making the codebase easier to navigate and understand.

### Reusability

Components are designed with reusability in mind. By creating modular and reusable components, we reduce redundancy and improve the efficiency of the development process.

### Responsibility

Each component adheres to the Single Responsibility Principle (SRP). This means that every component has a single responsibility, making it easier to manage, test, and debug.

### Complexity Management

We manage complexity by breaking down large components into smaller, more manageable pieces. This approach helps in maintaining a clean and organized codebase, ensuring that each component is easy to understand and work with.

### Component Categories

- Stateless components / Presentation components
- Stateful components
- Structural components

### Prop Drilling

Prop drilling refers to the process of passing data from a parent component to a deeply nested child component through multiple layers of intermediate components. While this approach can be straightforward for small applications, it can become cumbersome and difficult to manage as the application grows. To mitigate the issues associated with prop drilling, consider using state management libraries like Redux or Context API to provide a more efficient way to share data across components.

- also we can solve with Component Composition

### Passing Element as props

- explicity passing a component as a prop

### Props as API

- good balance of using props in a component

## Getting Started

To get started with the UsePopcorn project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/mohamedkbx/usepopcorn.git
   ```
2. Install dependencies:
   ```bash
   cd usepopcorn
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Contributing

We welcome contributions from the community. If you have any suggestions or improvements, please feel free to submit a pull request.
