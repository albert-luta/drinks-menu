# Drinks Menu

A list of available drinks for my friends.

## Installation

Installs all the necessary packages needed to run the app.

```bash
npm i
```

## Running the app in development mode

Runs the app in development mode - watch files for changes and activates HMR.

```bash
npm run dev
```

## Running the app in production mode

Builds the app (in `./dist`) and runs it in production mode.

```bash
npm run build && npm run preview
```

## Linting

Already baked into git hooks and github actions - rarely used - only if you want to check something manually.

All linting scripts (except for [Types](#types)) have 2 variants:

- `<script-name>` - checks for problems and tries to auto-fix in place (changes the files)
- `<script-name>:check` - only checks and reports problems

### Format

Checks for format inconsistencies - Prettier errors.

```bash
npm run format
npm run format:check
```

### Eslint

Checks for possible bugs or bad practices in TypeScript files.

```bash
npm run lint
npm run lint:check
```

### Stylelint

Checks for possible bugs or bad practices in css files.

```bash
npm run stylelint
npm run stylelint:check
```

### Types

Checks for type inconsistencies - TypeScript errors.

```bash
npm run types:check
```
