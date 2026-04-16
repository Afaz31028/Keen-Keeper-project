# 👥 Keen Keeper Project

## 📌 Project Overview
Keen Keeper is a modern React-based web application designed to help users maintain and track their friendships through structured interaction logs. It allows users to view friend profiles, track communication history (Call, Text, Video), and analyze interaction patterns through visual analytics.

The goal of this project is to encourage meaningful relationships by helping users stay consistent with their social connections.

---

## 🚀 Live Demo


---

## 🛠️ Technologies Used

- React.js
- React Router DOM
- Context API (State Management)
- Tailwind CSS / CSS3
- Recharts (Data Visualization)
- React Icons
- React Toastify (Notifications)

---

## ✨ Key Features

### 👥 1. Friend Management System
- Displays a list of friends from a structured JSON file
- Each friend card shows:
  - Profile picture
  - Name
  - Contact status
  - Tags
  - Days since last contact
- Responsive 4-column grid layout (desktop)

---

### 👤 2. Friend Detail Dashboard
- Detailed view of each friend
- Includes:
  - Profile info (name, email, bio, tags)
  - Relationship status indicators
  - Action buttons (Snooze, Archive, Delete UI)
- Quick interaction tools:
  - 📞 Call
  - 💬 Text
  - 🎥 Video

Each interaction automatically:
- Adds a timeline entry
- Shows a toast notification

---

### 📊 3. Friendship Analytics
- Dedicated Stats page
- Pie chart visualization using **Recharts**
- Shows distribution of:
  - Calls
  - Texts
  - Video calls

---

### 📜 4. Interaction Timeline
- Logs all user interactions in real-time
- Each entry includes:
  - Date of interaction
  - Type icon (Call/Text/Video)
  - Title (e.g., “Call with John Doe”)
- Filter system:
  - View Call only
  - View Text only
  - View Video only

---

### 🎨 5. Modern UI/UX Design
- Fully responsive (mobile, tablet, desktop)
- Clean layout inspired by Figma design
- Active navigation highlighting
- Loading animations during data fetch
- Custom 404 page for invalid routes

---

### 📱 Responsive Design

- FriendSync is fully responsive and optimized for:
    - 📱 Mobile devices
    - 📟 Tablets
    - 💻 Desktop screens


----

### 🔥 Future Improvements
- Real backend integration (Firebase / Node.js)
- Authentication system (Login/Signup)
- Friend reminders & notifications
- Dark mode support
- Advanced analytics dashboard
