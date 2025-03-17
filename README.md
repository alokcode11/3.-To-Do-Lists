# Todo List Application

A simple, user-friendly task management application built with React that allows users to add, edit, delete, and mark tasks as completed.

## Features

- ✅ Add new tasks
- ✏️ Edit existing tasks
- 🗑️ Delete tasks
- ✓ Mark tasks as completed
- 💾 Persistent storage (tasks are saved to localStorage)
- 📱 Responsive design for mobile and desktop

## Project Structure

```
todo-list-app/
├── src/
│   ├── components/
│   │   ├── header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   ├── todolist/
│   │   │   ├── TodoList.jsx
│   │   │   └── TodoList.css
│   │   └── todoitem/
│   │       ├── TodoItem.jsx
│   │       └── TodoItem.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/alokcode11/3.-To-Do-Lists.git
   
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

1. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Building for Production

To create a production build:

```bash
npm run build
```

The build files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## How to Use

1. **Adding a Task**: Type your task in the input field at the top and click "Add" or press Enter.
2. **Editing a Task**: Click the "Edit" button on a task, make your changes, and click "Save" or press Enter.
3. **Completing a Task**: Click the checkbox next to a task to mark it as completed.
4. **Deleting a Task**: Click the "Delete" button to remove a task.

## Implementation Details

This application was built using:

- React (with functional components)
- React Hooks (useState, useEffect)
- CSS for styling
- localStorage for data persistence

## Requirements Met

1. ✅ Created a React Application using Vite
2. ✅ Implemented all required components (App, Header, TodoList, TodoItem)
3. ✅ Used state to manage the list of to-do items
4. ✅ Passed necessary state and functions as props
5. ✅ Rendered to-do items dynamically using the map function
6. ✅ Ensured each to-do item has a unique key
7. ✅ Implemented event handling for:
   - Adding new to-do items
   - Marking to-do items as completed
   - Deleting to-do items
   - Editing existing to-do items
8. ✅ Styled the application to be user-friendly and visually appealing

