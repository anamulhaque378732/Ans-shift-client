# 📦 Ans Shift - Parcel Delivery Management System (Frontend Client)

![React](https://img.shields.io/badge/React-v19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-v5.x-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-Auth-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Leaflet](https://img.shields.io/badge/Leaflet-Maps-199900?style=for-the-badge&logo=leaflet&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-Data_Viz-22B5BF?style=for-the-badge)

Welcome to the frontend web application of **Ans Shift**, a modern and feature-rich parcel delivery management system. Built with cutting-edge frontend technologies including **React 19**, **Tailwind v4**, **TanStack Query**, **Leaflet Maps**, and **Recharts**, this platform ensures a fast, interactive, and seamless experience for Customers, Riders, and Admins.

🌐 **Live Website:** [https://ans-shift.web.app/](https://ans-shift.web.app/)  
💻 **Client Repository:** [GitHub Frontend Repo](https://lnkd.in/gQqxnKNn)  
💻 **Server Repository:** [GitHub Backend Repo](https://lnkd.in/gtvCPS4j)

---

## 🎨 Key Features & User Dashboards

### 🙋‍♂️ Customer Portal
- **Parcel Booking & Forms:** Interactive form validation powered by **React Hook Form** for smooth parcel booking.
- **Dynamic Cost Calculation:** Automatic shipping fee calculation based on parcel weight and destination.
- **Interactive Tracking & Maps:** Real-time parcel delivery tracking powered by **React Leaflet** maps.
- **Secure Payment Integration:** Integrated payment UI with Stripe and instant receipt verification.

### 🛵 Delivery Rider Dashboard
- **Task Management:** Real-time access to assigned parcels fetched seamlessly via **TanStack Query**.
- **Delivery Workflow:** Quick actions to accept, mark as picked up, or mark as delivered.
- **Location Insights:** Integrated map routes for pickup and drop-off destinations.

### 👑 Admin Management Dashboard
- **Visual Analytics & Charts:** Comprehensive data visualization using **Recharts** for tracking deliveries, overall revenue, and user metrics.
- **Smart Assignment UI:** Assign pending parcels to active riders with interactive modals.
- **Rider Application Approval:** Review incoming rider applications, approve or delete candidates instantly with **SweetAlert2** feedback.
- **User Management:** Manage permissions, user accounts, and system roles.

---

## 🛠️ Tech Stack & Key Dependencies

- **Core Framework:** React v19.x (with Vite & React Router v7)
- **Styling & UI:** Tailwind CSS v4, React Icons, Swiper, React Responsive Carousel
- **State & Data Fetching:** TanStack React Query v5 & Axios
- **Form Handling:** React Hook Form
- **Authentication:** Firebase Auth v12
- **Maps & Geolocation:** Leaflet & React Leaflet
- **Data Visualization & Charts:** Recharts
- **Popups & Alerts:** SweetAlert2

---

## ⚙️ Environment Variables Setup

Create a `.env.local` file in the root directory of your project and configure the following variables:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id

# Payment Key
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# Backend API Endpoint
VITE_API_URL=http://localhost:5000
