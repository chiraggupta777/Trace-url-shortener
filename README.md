# Trace

<p align="center">
  <strong>Short links. Clear insights.</strong>
</p>

<p align="center">
  A full-stack URL shortener with authentication, click tracking and analytics.
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Inter&weight=600&size=22&duration=3000&pause=1000&color=63D39B&center=true&vCenter=true&width=600&lines=Create.+Share.+Track.;Short+links.+Clear+insights." alt="Typing animation" />
</p>

<p align="center">
  <a href="https://trace-url-shortener.onrender.com">🚀 Live Demo</a> •
  <a href="https://github.com/chiraggupta777/Trace-url-shortener">GitHub</a>
</p>

---

## ✨ Features

- 🔗 Create unique short URLs
- 📊 Track visits and click counts
- 🔐 JWT-based authentication
- 🛡️ Role-based authorization
- 📈 Personal analytics dashboard
- ☁️ MongoDB Atlas + Render deployment

---

## 🛠️ Tech Stack

**Backend:** Node.js, Express.js  
**Database:** MongoDB, Mongoose  
**Frontend:** EJS  
**Authentication:** JWT, Cookies  
**Deployment:** Render, MongoDB Atlas

---

## 🏗️ Architecture

```text
User
  ↓
Express
  ↓
Middleware
  ↓
Controllers
  ↓
Mongoose
  ↓
MongoDB Atlas
```

### URL Flow

```text
Long URL
   ↓
Generate Short ID
   ↓
Store in MongoDB
   ↓
Short URL
   ↓
Track Visit
   ↓
Redirect
```

---

## 📁 Project Structure

```text
Trace/
├── controllers/
├── middleware/
├── models/
├── routes/
├── service/
├── views/
├── connections.js
├── index.js
└── package.json
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/chiraggupta777/Trace-url-shortener.git
cd Trace-url-shortener
npm install
```

Create a `.env` file:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

Run the application:

```bash
node index.js
```

---

## 🔮 Future Integrations

- 🔒 Password hashing with bcrypt
- ⏱️ Link expiration
- 🔗 Custom short URL aliases
- 🗑️ Link management and deletion
- 📊 Advanced analytics
- 📱 Device and referrer tracking
- ⚡ Rate limiting
- 📷 QR code generation
- 🧪 Automated testing

---

## 🌐 Live Demo

**https://trace-url-shortener.onrender.com**

---

## 👨‍💻 Author

**Chirag Gupta**

[GitHub](https://github.com/chiraggupta777)

<p align="center">
  <strong>Trace — Short links. Clear insights.</strong>
</p>
