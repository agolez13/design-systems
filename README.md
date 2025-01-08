# Design Systems

A monorepo project built with TypeScript for type safety and scalability, React for building dynamic user interfaces, SCSS for modular and maintainable styling, and Storybook for developing, testing, and documenting UI components in isolation.

# Building

(The process of converting source code (e.g., TypeScript, JSX, SCSS) into production-ready files (e.g., JavaScript, CSS) that can be executed or deployed.)

yarn build - entire monorepo
yarn workspace @your-scope/buttons build - for each component

# Testing

(The process of verifying the functionality and correctness of code by running automated tests to ensure it behaves as expected.)

yarn test - entire monorepo
yarn workspace @your-scope/buttons test - for each component

# Linting

(The process of analyzing code for potential errors, stylistic inconsistencies, and deviations from coding standards to improve quality and maintainability.)

yarn lint - entire monorepo
yarn workspace @your-scope/buttons lint - for each component

Running prettier manually
[yarn prettier --write .]

# Typechecking

(The process of verifying that variables, functions, and expressions in code adhere to specified type rules, ensuring type safety and reducing runtime errors.)

yarn typecheck - entire monorepo
yarn workspace @your-scope/buttons typecheck - for each component
