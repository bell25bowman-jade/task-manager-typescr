I set the NavBar cup with conditional renders based on if your logged in. ifAuthenticated it shows all the links to dashboard,, create task, profile, login page, and a log out button.

ProtectedRoute checks with Auth0 for authenticated users and redirecting the unautherized users.

TaskCard recieves props and objects for when a task needs deleting, it also returns header, description, the status, and gives the link to the details to edit or delete the task.

TaskForm this renders the task, decides when the form should reset. The inner components holds values. Submitting checks for an empty title.

TaskContext keeps track of all the tasks in state and give the child components a way to add, remove, or edit without having to prop drill.

TaskContextValues describes the shape of the data the context will hold, later it provides a real value.

UseTask this hooks is need if the provider is missing it throws an error.

CreateTask a simple task form using useState to manage form inputs and a custom useTask hook to add a new task.

Dashboard give an array of profile, all task, create task, and a title. Each item in the array has link

EditTask the components uses route id to look up the task to update the title and/or description and returns the value to the target.

Login this is the page that directs you to Auth0 to login or sign up.

Profile this checks to see if user is authenticated, if they are it showsthe users picture, name, and email.

TaskDetails validates the task ID if not found it gives an error. If the task is validated it displays the title, description, and status.

/services/auth.tsx defines an Auth0 user shape for the app. the name, email, and picture are optional.

/types/task.tsx this is the blueprint that says each task must have these pieces of information.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
