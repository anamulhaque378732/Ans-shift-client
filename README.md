 # 📦 Ans Shift - Parcel Delivery Management System (Frontend Client)

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-Authentication-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Stripe](https://img.shields.io/badge/Stripe-Payment_UI-6772E5?style=for-the-badge&logo=stripe&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

Welcome to the frontend user interface of **Ans Shift**, a modern, interactive, and responsive web portal for end-to-end parcel delivery services. Designed with a seamless user experience for Customers, Delivery Riders, and System Administrators.

🌐 **Live Website:** [https://ans-shift.web.app/](https://ans-shift.web.app/)  
💻 **Client Repository:** [GitHub Frontend Repo](https://lnkd.in/gQqxnKNn)  
💻 **Server Repository:** [GitHub Backend Repo](https://lnkd.in/gtvCPS4j)

---

## 🎨 Key Features & User Dashboards

### 🙋‍♂️ Customer Experience
- **Interactive Booking Form:** Easy parcel booking specifying parcel type, weight, receiver information, and delivery locations.
- **Dynamic Cost Calculator:** Instant shipping price estimation based on parcel parameters.
- **Real-Time Tracking & History:** Detailed overview of booked parcels, live status updates, and tracking timelines.
- **Seamless Checkout:** Integrated **Stripe Card Payment** interface for quick and secure transactions.

### 🛵 Delivery Rider Portal
- **Delivery Dashboard:** Dedicated panel for active delivery personnel.
- **Order Pickup & Fulfillment:** View assigned parcels, accept delivery tasks, update delivery status (`Picked Up`, `Delivered`).
- **Performance Overview:** Track completed deliveries and earnings/stats.

### 👑 Admin Control Panel
- **Comprehensive Analytics:** Single-page dashboard summarizing total bookings, total revenue, active riders, and pending deliveries.
- **Parcel Assignment UI:** Intuitive interface to assign unassigned parcels to nearby active riders.
- **Rider Applications Management:** Review incoming rider registration requests—approve or reject candidates with a single click.
- **User Role Management:** Promote users, manage account permissions, and oversee platform activity.

---

## 🛠️ Tech Stack & Libraries

- **Core Library:** React.js
- **Styling & UI:** Tailwind CSS, React Icons / Lucide Icons
- **Authentication:** Firebase Auth (Google Sign-In & Email/Password)
- **Payment Processing:** Stripe Elements (`@stripe/react-stripe-js`)
- **HTTP Client:** Axios / Fetch API
- **Notifications & Alerts:** SweetAlert2 / React Hot Toast
- **State & Routing:** React Router DOM

---

## ⚙️ Environment Variables Setup

Create a `.env.local` file in the root directory of your frontend project and add your Firebase and API configuration keys:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id

# Stripe Payment Key
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# Backend API URL
VITE_API_URL=http://localhost:5000
