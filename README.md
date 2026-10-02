# Trace

<p align="center">
  <strong>Short links. Clear insights.</strong>
</p>

<p align="center">
  A full-stack URL shortening platform built with Node.js, Express.js, MongoDB and EJS.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-20+-111827?style=for-the-badge&logo=node.js&logoColor=63D39B" />
  <img src="https://img.shields.io/badge/Express.js-Backend-111827?style=for-the-badge&logo=express&logoColor=F5F7F6" />
  <img src="https://img.shields.io/badge/MongoDB-Database-111827?style=for-the-badge&logo=mongodb&logoColor=63D39B" />
  <img src="https://img.shields.io/badge/EJS-Templates-111827?style=for-the-badge&logo=ejs&logoColor=63D39B" />
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#architecture">Architecture</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#api-reference">API</a> •
  <a href="#roadmap">Roadmap</a>
</p>

---

## Overview

**Trace** is a full-stack URL shortener designed around a simple idea:

> Short links should be easy to create, easy to manage, and useful to track.

Users can register, authenticate, create short URLs, access their personal dashboard, and track visits to their generated links.

Unlike a basic URL shortener, Trace associates every generated link with its creator and records visit activity for each redirect.

---

## ✨ Features

### 🔗 URL Shortening

- Generate unique short URLs
- Redirect short URLs to their original destination
- Store links in MongoDB
- Record visit timestamps
- Copy generated links directly from the UI

### 🔐 Authentication

- User registration
- User login
- JWT-based authentication
- Cookie-based token storage
- Logout functionality
- Protected application routes

### 🛡️ Role-Based Authorization

Trace includes role-based access control for protected operations.

Protected routes verify the authenticated user's role before allowing access to restricted functionality.

### 👤 User-Specific Links

Every generated URL is associated with its creator through:

```text
CHIRAG
