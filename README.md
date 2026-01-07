# Visit Brussels - Tourism Promotion Website

## Project Overview

**Visit Brussels** is a modern, responsive web application built with **React** and **Vite**, designed to promote the city of Brussels by showcasing its landmarks, culture, and attractions. The website combines multimedia content, interactive maps, and user-friendly navigation to offer an engaging experience for tourists.

---

## Page Structure (Wireframe)

- **Header:**  
  - Fixed at the top, includes logo, navigation links, and shopping cart button.  
  - Works for desktop and mobile layouts with a responsive menu.  

- **Home Page:**  
  - Hero section with edited background image.  
  - Background audio clip plays automatically for ambiance.  
  - Highlights of the city presented in card format.  

- **Map Page:**  
  - Full-screen interactive map using **React Leaflet**.  
  - Markers for all landmarks with clickable popups linking to detailed pages.  

- **Place Detail Pages (`/place/:slug`):**  
  - Title, description, coordinates.  
  - Embedded video showcasing the monument.  
  - Gallery of images.  
  - Optional additional information cards.  
  - Small interactive map showing the monument location.  

- **Cart Page:**  
  - Displays selected landmarks as “products.”  
  - Users can add or remove landmarks.  
  - Button to download an **itinerary PDF** including images and descriptions.

---

## Features & Multimedia Elements

- **Interactive Map:**  
  - All landmarks are plotted with markers.  
  - Clickable tooltips navigate to monument detail pages.  

- **Multimedia Content:**  
  - **Background audio** on home page (`audio-clip.mp3`) for immersive experience.  
  - **Hero image** edited for visual appeal.  
  - **Embedded YouTube videos** on monument pages.  
  - **Image galleries** for each landmark.  

- **Shopping Cart / Itinerary:**  
  - Add monuments to a cart.  
  - Download a well-formatted PDF itinerary with images and descriptions.  

- **Responsive Design:**  
  - Fully functional on mobile, tablet, and desktop.  
  - Mobile menu with toggle button.  

---

## Development Process

1. **Planning & Wireframing:**  
   - Designed the layout and page structure.  
   - Defined routes: Home, Map, Place Detail, Cart.  

2. **Setup:**  
   - Initialized project with **Vite + React**.  
   - Installed dependencies: `react-router-dom`, `react-leaflet`, `jspdf`, `lucide-react`.  

3. **Feature Implementation:**  
   - Header and navigation components.  
   - Home highlights and multimedia elements.  
   - Map with markers and popups using Leaflet.  
   - Place detail pages with videos and image galleries.  
   - Cart system using React context.  
   - PDF generation for itineraries.  

4. **Deployment:**  
   - Configured `vite.config.js` for GitHub Pages subpath.  
   - Used `HashRouter` for React Router to prevent 404s on refresh.  
   - Deployed site on GitHub Pages at `https://nilis24.github.io/tourism-promotion-website/#/`.  

---

## Run Locally

1. **Clone the repository:**

```bash
git clone https://github.com/nilis24/tourism-promotion-website.git
cd tourism-promotion-website
````

2. **Install dependencies:**

```bash
npm install
```

3. **Start the development server:**

```bash
npm run dev
```

4. **Open in browser:**
   Visit [http://localhost:5173](http://localhost:5173) to see the website locally.

5. **Build for production:**

```bash
npm run build
```

6. **Preview production build locally:**

```bash
npm run preview
```

---

## Technologies Used

* React 18
* Vite
* React Router DOM
* React Leaflet
* Lucide React (icons)
* jsPDF (PDF generation)
* Tailwind CSS
* GitHub Pages for deployment
