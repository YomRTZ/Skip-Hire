# Skip Hire Web App
Welcome to the Skip Hire Application!

## Project Overview
A modular and maintainable **React** application built with **Clean Architecture** principles, styled using **Tailwind CSS**, and structured for scalability and clarity. This project demonstrates the use of feature-based layout, reusable components, and efficient state management.

---

## Key Features

- **Clean Architecture**  
  Modular and maintainable structure organized by features, promoting scalability and ease of development.

- **Tailwind CSS**  
  Utility-first CSS framework for rapidly building custom, responsive user interfaces.

- **Reusable Components**  
  Shared and feature-specific UI components designed for easy reuse and clarity.

- **React Router**  
  Client-side routing implemented via `react-router-dom` for seamless navigation between pages.

- **Context API**  
  Efficient global state management through React's Context API.

- **Separation of Concerns**  
  Clear division of responsibilities between business logic (domain), data, and presentation (UI) layers.

- **Custom Font Integration**  
  Fonts such as Inter/Sanse-serif are integrated globally through Tailwind CSS configuration for consistent typography.

---

## Folder Structure
The project is divided into key directories to keep everything organized and manageable. Here’s a high-level look at the main sections:
- **src/** -- Root application component and layout  
- **assets/** -- Static assets like images  
- **context/ModalContex.jsx** — React Context providers for global state - **context/ModalContex.jsx** for global modal provider   
- **data/** -- Mock or static data sources - **data/skipHireJsonData.jsx** json skip hire data
- **domain/** -- This folder holds the core business logic of the application, following a **separation of concerns** approach. This means different parts of the code have specific roles, making it easier to update or expand the app. It includes:
    - **domain/modals/SkipModel.jsx** -- This file defines how skip hire data (like size, price, and rules) is structured and processed. It creates a blueprint for each skip, ensuring all details are handled consistently and ready for use in the app.
    - **domain/services/skipService.jsx** -- This file manages the business rules for working with skip data. It pulls information from a data source, organizes it using the `SkipModel`, and prepares it for display, acting as a key link between the data and the user interface. 
- **features/** -- Feature-based UI components and pages  
- **commons/** -- Generic reusable components for appling reusablity for card, HamburgerMenu and Modal 
- **routes/** -- Application routing setup  
---
## How It Works

The application starts with skip data stored in a JSON file, which is then processed by the `domain/` components. The `SkipModel` organizes this data into a usable format, while the `skipService` applies necessary logic to make it available for the app. This setup ensures users see accurate prices and availability details seamlessly.
## Getting Started

1. Clone the repository:  
   `git clone https://github.com/YomRTZ/Skip-Hire.git`

2. Install dependencies:  
   `npm install`

3. Run the development server:  
   `npm run dev`

4. Open `http://localhost:5173` in your browser.

---

## Tailwind CSS Setup

Tailwind CSS is configured with PostCSS and includes the Inter font family for typography. Styling follows a utility-first approach for rapid UI development.

---
