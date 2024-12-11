# Deskthing-Template

## Overview

This template provides a starting point for creating an app for the DeskThingServer application. It includes a basic project structure and configuration to help you get started quickly.

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

## Getting Started

1. Initialize this repository:
   
   ```sh
   npm create deskthing@latest
   ```
   

2. Follow the setup and step into your app:
   

3. Start the development server:
   
   npm run dev
   

## Project Structure

```
YourAppRoot/
├── public/
|   ├── manifest.json // Your app info
|   └── icons
|      └── yourapp.svg // Your app icon, shows up on the client
├── server/
|   └── index.ts // The main file of the backend
├── src/
|   ├── App.tsx // React client UI
|   ├── index.css
|   └── main.tsx
└── index.html
```

## Available Scripts

- `npm run dev`: Starts the vite development server
- `npm run build`: Builds the app into /dist where you can zip the files and load them into the DeskThingServer

## Customizing the Template

You can customize this template by:
- modifying the React frontend in src/
- modifying the backend template in server/
- changing your app information in public/manifest.json

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

# How to use

I have made a [wiki](https://github.com/RandomDebugGuy/DeskThing-apps-wiki/)! Go check it out to see how to get started!
