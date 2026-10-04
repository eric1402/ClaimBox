# 📦 ClaimBox

### Your Purchases. Always With You.

ClaimBox is a modern purchase and warranty management platform designed to help users organize their purchases, invoices, warranty information, and important documents in one secure and easy-to-access place.

Instead of searching through emails, WhatsApp chats, galleries, or physical receipts, users can keep all their purchase-related information organized inside ClaimBox.

---

## 🚀 Overview

Buying a product is easy, but keeping track of its invoice, warranty, purchase date, price, and related documents can become difficult over time.

ClaimBox solves this problem by providing a centralized platform where users can:

- Add and organize purchases
- Store product information
- Track warranty periods
- Store invoices and warranty documents
- Monitor active and expiring warranties
- Quickly access purchase information
- Manage all purchase records from one dashboard

The goal is to make warranty and purchase management simple, organized, and accessible.

---

## 🎯 Problem Statement

After purchasing products, users often face difficulties such as:

- Losing invoices or receipts
- Forgetting purchase dates
- Forgetting warranty expiry dates
- Keeping warranty cards in different places
- Searching through emails or WhatsApp conversations
- Not knowing whether a product is still under warranty
- Difficulty accessing purchase information when making a warranty claim

ClaimBox provides a centralized solution for managing this information.

---

## 💡 Proposed Solution

ClaimBox provides a single platform where users can store and manage their purchase-related information.

For every purchase, users can maintain:

- Product details
- Brand
- Category
- Purchase price
- Purchase date
- Seller/store
- Warranty information
- Warranty start date
- Warranty expiry date
- Invoice
- Warranty card
- Other related documents

The dashboard provides a quick overview of all purchases and warranty statuses.

---

## ✨ Key Features

### 🔐 User Authentication

Users can create and manage their own ClaimBox account.

Features include:

- User registration
- User login
- Secure password storage
- Authentication using JWT
- Protected user data
- User profile management

---

### 📊 Smart Dashboard

The dashboard provides an overview of the user's purchases.

It can display:

- Total Purchases
- Active Warranties
- Expiring Soon
- Expired Warranties
- Recent Purchases
- Warranty Alerts

Example:

```text
Total Purchases       12
Active Warranties      8
Expiring Soon          2
Expired                2
```

### 🛍️ Purchase Management

Users can add and manage their purchases.

Each purchase can contain:

- Product name
- Brand
- Category
- Price
- Purchase date
- Seller/store
- Warranty information
- Documents

Users can:

- Add purchases
- View purchases
- Edit purchases
- Delete purchases
- Search purchases
- Filter purchases

### 🛡️ Warranty Tracking

ClaimBox allows users to track the warranty period of their products.

Warranty statuses include:

- 🟢 Active — The product is currently covered by warranty.
- 🟠 Expiring Soon — The warranty is approaching its expiry date.
- 🔴 Expired — The warranty period has ended.

Example:

```text
Sony WH-CH520

Warranty Status:
Expiring Soon

Warranty Ends:
15 March 2027

Remaining:
18 Days
```

### 📄 Invoice & Document Storage

Users can associate important documents with their purchases.

Supported document types can include:

- Invoice
- Receipt
- Warranty Card
- Bill
- Product Documents
- Other purchase-related files

Documents remain associated with their respective purchases for easy access.

### 🔎 Search & Filtering

Users can quickly find purchases using search and filtering.

Possible search fields:

- Product name
- Brand
- Category
- Seller

Possible filters:

- Active warranty
- Expiring warranty
- Expired warranty
- Purchase category

### 🔔 Warranty Alerts

ClaimBox highlights warranties that are approaching their expiry date.

For example:

```text
⚠ Warranty Expiring Soon

Sony WH-CH520
Warranty expires in 18 days
```

This helps users avoid missing important warranty periods.

### 👤 User Profile

Users can manage their personal account information.

Profile information may include:

- Name
- Email
- Profile image
- Account information

---

## 🧭 Application Flow

```text
Landing Page
      ↓
Login / Register
      ↓
Dashboard
      ↓
Add Purchase
      ↓
Purchase Details
      ↓
Warranty Information
      ↓
Upload Documents
      ↓
Save Purchase
      ↓
Track Warranty
      ↓
Access Information When Needed
```

## 🖥️ Frontend Pages

The frontend contains the following major pages:

- **Landing Page** — Introduces ClaimBox and its main benefits.
- **Login** — Allows existing users to access their account.
- **Register** — Allows new users to create an account.
- **Dashboard** — Provides an overview of purchases and warranties.
- **Purchases** — Displays all stored purchases.
- **Purchase Details** — Shows complete information about a specific purchase.
- **Warranties** — Displays warranty-related information and statuses.
- **Documents** — Provides access to uploaded purchase documents.
- **Profile** — Allows users to manage their account information.
- **Settings** — Contains application and account preferences.

## 🎨 UI / UX Design

ClaimBox follows a premium modern SaaS design system.

Design Principles:

- Minimal
- Clean
- Premium
- Responsive
- User-focused
- High readability
- Strong visual hierarchy

Color Direction:

The interface uses a combination of:

- Deep Black
- White
- Off-white
- Warm Gold
- Subtle Neutral tones

Gold is primarily used as an accent color.

## 📱 Responsive Design

ClaimBox is designed to work across different screen sizes.

Supported layouts include:

- Desktop
- Laptop
- Tablet
- Mobile

The interface adapts by changing:

- Navigation
- Grid layouts
- Dashboard cards
- Product sections
- Forms
- Content spacing

## 🏗️ Technology Stack

### Frontend

- React.js
- Vite
- JavaScript
- Tailwind CSS
- React Router
- Lucide React / Icon Library
- CSS Animations

### Backend

The backend architecture is designed using:

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- dotenv
- CORS
- Multer / Cloud Storage integration for documents

## 🧠 Backend Architecture

ClaimBox follows a modular backend architecture.

```text
backend/
│
├── config/
│   └── database.js
│
├── controllers/
│   ├── authController.js
│   ├── purchaseController.js
│   ├── warrantyController.js
│   ├── documentController.js
│   └── userController.js
│
├── models/
│   ├── User.js
│   ├── Purchase.js
│   └── Document.js
│
├── routes/
│   ├── authRoutes.js
│   ├── purchaseRoutes.js
│   ├── warrantyRoutes.js
│   ├── documentRoutes.js
│   └── userRoutes.js
│
├── middleware/
│   ├── authMiddleware.js
│   ├── uploadMiddleware.js
│   └── errorMiddleware.js
│
├── services/
│   ├── warrantyService.js
│   └── documentService.js
│
├── utils/
│   └── generateToken.js
│
├── .env
├── server.js
└── package.json
```

## 🗄️ Database Design

ClaimBox uses MongoDB as the primary database.

### User Collection

```text
User
├── _id
├── name
├── email
├── password
├── profileImage
├── createdAt
└── updatedAt
```

### Purchase Collection

```text
Purchase
├── _id
├── userId
├── productName
├── brand
├── category
├── price
├── purchaseDate
├── seller
├── warrantyStart
├── warrantyEnd
├── warrantyStatus
├── documents
├── createdAt
└── updatedAt
```

### Document Collection

```text
Document
├── _id
├── userId
├── purchaseId
├── fileName
├── fileType
├── fileUrl
├── documentType
├── uploadedAt
└── updatedAt
```

## 🔗 Database Relationships

A user can have multiple purchases.

```text
User
 │
 ├── Purchase
 │      ├── Document
 │      ├── Document
 │      └── Warranty Information
 │
 ├── Purchase
 │      ├── Document
 │      └── Warranty Information
 │
 └── Purchase
```

Relationship:

```text
User 1 ──────── * Purchase

Purchase 1 ──────── * Document
```

## 🔐 Authentication Architecture

ClaimBox uses JWT-based authentication.

Authentication flow:

```text
Register
   ↓
Password Hash using bcrypt
   ↓
Store User in MongoDB
   ↓
Login
   ↓
Verify Password
   ↓
Generate JWT
   ↓
Send Token
   ↓
Access Protected Routes
```

Passwords are never stored as plain text.

## 🔌 API Structure

### Authentication APIs

- Register — `POST /api/auth/register`
- Login — `POST /api/auth/login`
- Current User — `GET /api/auth/me`

### 🛍️ Purchase APIs

- Get All Purchases — `GET /api/purchases`
- Get Single Purchase — `GET /api/purchases/:id`
- Create Purchase — `POST /api/purchases`
- Update Purchase — `PUT /api/purchases/:id`
- Delete Purchase — `DELETE /api/purchases/:id`

### 🛡️ Warranty APIs

- Get Active Warranties — `GET /api/warranties/active`
- Get Expiring Warranties — `GET /api/warranties/expiring`
- Get Expired Warranties — `GET /api/warranties/expired`

### 📄 Document APIs

- Upload Document — `POST /api/documents`
- Get Purchase Documents — `GET /api/documents/purchase/:purchaseId`
- Delete Document — `DELETE /api/documents/:id`

## ⚙️ Warranty Status Logic

Warranty status can be calculated using the warranty expiry date.

Example:

```text
Current Date
     ↓
Compare with Warranty End Date
     ↓
 ┌───────────────┐
 │               │
Active       Expired
 │
 ↓
Check remaining days
 │
 ├── More than 30 days → Active
 │
 └── 30 days or less → Expiring Soon
```

Example:

```text
Warranty End:
20 December 2026

Current Date:
5 December 2026

Remaining:
15 Days

Status:
Expiring Soon
```

## 📂 Suggested Project Structure

```text
ClaimBox/
│
├── frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── data/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   │
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
├── README.md
└── .gitignore
```

## 🔄 Complete System Architecture

```text
                    CLAIMBOX
                       │
             ┌─────────┴─────────┐
             │                   │
          FRONTEND             BACKEND
             │                   │
          React.js            Node.js
             │                   │
          Vite              Express.js
             │                   │
       React Router          REST API
             │                   │
             └──────────┬────────┘
                        │
                    Mongoose
                        │
                    MongoDB
                        │
                Purchase Data
                User Data
                Documents
```

## 🧑‍💻 User Journey

- **Step 1 — Register:** User creates a ClaimBox account.
- **Step 2 — Login:** User securely logs into their account.
- **Step 3 — Dashboard:** User sees an overview of their purchases and warranty statuses.
- **Step 4 — Add Purchase:** User enters product and purchase information.
- **Step 5 — Add Warranty:** User adds warranty start and expiry dates.
- **Step 6 — Upload Invoice:** User uploads the invoice or warranty document.
- **Step 7 — Track:** ClaimBox displays the warranty status.
- **Step 8 — Access:** When the user needs a warranty claim, all important information is available in one place.

## 🔒 Security Considerations

ClaimBox is designed with basic application security practices.

- Password hashing using bcrypt
- JWT authentication
- Protected API routes
- User-specific purchase access
- Environment variables for sensitive configuration
- Input validation
- CORS configuration
- Secure document handling

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/eric1402/ClaimBox.git
cd ClaimBox
```

### 💻 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on the Vite development server.

### ⚙️ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start backend:

```bash
npm run dev
```

## 🔗 Environment Variables

Example:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/claimbox
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
```

Never commit `.env` files to GitHub.

## 🧪 Testing

The application should be tested for:

**Authentication**

- User registration
- User login
- Invalid credentials
- Protected routes

**Purchases**

- Add purchase
- Edit purchase
- Delete purchase
- View purchase
- Search purchase

**Warranty**

- Active warranty
- Expiring warranty
- Expired warranty

**Documents**

- Upload document
- View document
- Delete document

**UI**

- Desktop responsiveness
- Tablet responsiveness
- Mobile responsiveness
- Navigation
- Forms
- Buttons

## 🌐 Future Scope

ClaimBox can be expanded with additional features in future versions.

### 🤖 Smart Invoice Scanner

Automatically extract:

- Product name
- Price
- Purchase date
- Seller
- Invoice number

from uploaded invoices.

### 🔔 Advanced Notifications

Users can receive:

- Email notifications
- Push notifications
- Warranty expiry reminders

### 👨‍👩‍👧 Family Sharing

Allow users to manage purchases for family members.

Example:

- My Purchases
- Father's Purchases
- Mother's Purchases
- Brother's Purchases

### ☁️ Cloud Document Storage

Securely store invoices and warranty cards using cloud storage.

### 📈 Purchase Analytics

Display insights such as:

- Total spending
- Spending by category
- Monthly purchases
- Most purchased brands
- Warranty coverage

### 🧾 Warranty Claim Assistance

Provide users with:

- Required documents
- Warranty information
- Purchase details
- Claim preparation checklist

## 🎯 Project Objectives

The main objectives of ClaimBox are:

- To provide centralized purchase management.
- To reduce the risk of losing invoices and warranty documents.
- To help users track warranty expiry dates.
- To provide quick access to purchase information.
- To simplify warranty claim preparation.
- To provide a clean and user-friendly interface.
- To maintain secure and organized user data.

## 🌟 Advantages

- Simple and easy to use
- Centralized purchase management
- Easy warranty tracking
- Organized document storage
- Reduces time spent searching for invoices
- Premium and responsive interface
- Secure authentication
- Scalable architecture
- Suitable for personal use
- Can be expanded into a larger SaaS platform

## 👥 Target Users

ClaimBox can be useful for:

- Students
- Working professionals
- Families
- Freelancers
- Small businesses
- Gadget users
- Online shoppers
- Anyone purchasing products with warranties

## 🧩 Core Modules

```text
ClaimBox
│
├── Authentication
│
├── Dashboard
│
├── Purchase Management
│
├── Warranty Management
│
├── Document Management
│
├── Search & Filtering
│
├── Alerts
│
├── Profile Management
│
└── Settings
```

## 📌 Current Development Status

### Frontend

- [x] Landing Page
- [x] Responsive UI
- [x] Navigation
- [x] Premium UI Design
- [x] Login UI
- [x] Register UI
- [x] Dashboard UI
- [x] Purchase Interface
- [x] Warranty Interface
- [x] Document Interface
- [x] Profile Interface
- [x] Settings Interface

### Backend

- [ ] Node.js setup
- [ ] Express API
- [ ] MongoDB connection
- [ ] User authentication
- [ ] Purchase APIs
- [ ] Warranty APIs
- [ ] Document upload APIs
- [ ] Frontend integration
- [ ] API testing

## 🔮 Version Roadmap

### Version 1.0

- Authentication
- Purchase management
- Warranty tracking
- Document storage
- Dashboard

### Version 2.0

- Warranty reminders
- Email notifications
- Purchase analytics
- Family accounts

### Version 3.0

- Smart invoice scanning
- Advanced analytics
- Automated claim assistance
- Cloud storage improvements

## 📜 License

This project is developed for educational and demonstration purposes.

A suitable open-source license can be added to the repository based on the project's distribution requirements.

## 👨‍💻 Project

**ClaimBox**

Tagline: *Your Purchases. Always With You.*

Built With: React • Vite • Node.js • Express.js • MongoDB • Mongoose • JWT • bcrypt

## ⭐ Why ClaimBox?

ClaimBox focuses on a simple but common problem:

We remember what we bought, but we often forget where we kept the proof of purchase and when the warranty expires.

ClaimBox brings all of that information together in one organized place.

ClaimBox — Your Purchases. Always With You.
