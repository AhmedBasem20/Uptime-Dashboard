# Uptime Dashboard

A service monitoring dashboard built with Next.js and Tailwind CSS. It displays the status of various servers over the last 90, 60, or 30 days, depending on the screen size.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AhmedBasem20/Uptime-Dashboard.git
   cd Uptime-Dashboard
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000` to view the application.

## Overview

### Implementation

- **Next.js**: Used for server-side rendering and routing.
- **Tailwind CSS**: Utilized for styling with utility-first classes.
- **React Hooks**: Custom hooks (`useServerData`, `useResponsiveHistory`) manage state and logic.

### Design Choices

- **Responsive Design**: The application adjusts the number of days displayed based on screen size:
  - Large screens (≥1024px): 90 days
  - Medium screens (≥768px): 60 days
  - Small screens (<768px): 30 days

- **Component Structure**: The application is divided into logical and presentational components:
  - **Logical Components**: Handle data fetching and state management.
  - **Presentational Components**: Focus on UI rendering.

- **Separation of Concerns**: Utilities and constants are separated into their own files for better maintainability.

- **Dynamic Data**: Server status history is generated dynamically to simulate real-world data.

## Folder Structure

- **/app**: Contains the main application files.
  - **/components**: UI components.
  - **/hooks**: Custom React hooks.
  - **/utils**: Utility functions and constants.
  - **/styles**: Global styles.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
