# 🚀 Pathshala PWA: Education Without Limits

**Pathshala (School)** is a next-generation, intelligent learning ecosystem designed to bridge the digital education gap in India. It prioritizes **connectivity-resilience** and **affordability** by leveraging a Progressive Web App (PWA) architecture, enabling students in low-connectivity rural and urban areas to learn, adapt, and assess themselves completely offline.

---

## ✨ Key Features & Innovations

Pathshala's innovation lies in its hybrid online/offline feature set:

| Feature                          | What it Solves                                                | Technical Implementation Highlight                                                                             |
| -------------------------------- | ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **Truly Offline-First Learning** | Ensures uninterrupted study in zero-connectivity environments | **Service Workers** cache lessons; **PouchDB Sync** manages data consistency between offline and cloud storage |
| **Offline AI Adaptive Learning** | Avoids repetition and overly difficult material               | **On-device TensorFlow Lite** model adjusts quiz difficulty dynamically without needing internet               |
| **ZeroNet Quiz Mode**            | Enables real-time assessment in remote classrooms             | **WebRTC DataChannels** build a local P2P mesh requiring no external network                                   |
| **AI Study Companion**           | Provides instant summaries, notes & predicted questions       | **Cloud-based Gemini Agent** generates personalized learning assistance via backend API                        |
| **Multilingual & Voice Support** | Helps students with low literacy or regional languages        | **Web Speech API (TTS)** + **Google Translate Widget**                                                         |
| **WhatsApp Learning Bot**        | Makes learning accessible on basic phones / 2G networks       | **Twilio Sandbox + Flask Webhook** handles doubts via WhatsApp                                                 |
| **Smart Sync & Dashboard**       | Helps teachers track student progress automatically           | **Firebase Firestore** syncs progress once connectivity is restored                                            |

---

## 💻 Technical Stack

Pathshala uses a fully open-source, hybrid architecture for affordability and resilience.

### **1. Frontend (Client-Side Intelligence)**

The frontend is a **Progressive Web App (PWA)** enabling installation, offline performance, and high speed.

* **Core Stack:** HTML + Vanilla JavaScript
* **Styling:** Tailwind CSS (compiled locally) + Bootstrap 5
* **Offline Engine:** Service Workers, IndexedDB, PouchDB Sync
* **P2P Layer:** WebRTC DataChannels
* **Voice Engine:** Web Speech API (Text-to-Speech)

### **2. Backend & Cloud Infrastructure**

The backend handles authentication, cloud sync, and the AI-powered features.

* **Authentication:** Firebase Authentication (with Google Sign-In)
* **Database:** Firebase Firestore (NoSQL cloud sync)
* **API Server:** Python (Flask) handling Twilio Webhooks + Gemini AI endpoints
* **AI Engine:** Google Gemini API (via Flask)
* **Messaging:** Twilio Sandbox for WhatsApp-based Q&A

---

## 🛠️ Project Structure

```
Pathshala/
├── Frontend/
│   ├── index.html        (Home Page)
│   ├── login.html        (Google Login)
│   ├── lessons.html      (Protected Lessons Page)
│   ├── css/              (Tailwind CSS)
│   ├── js/
│   │   └── main.js       (PWA Logic, Auth, WebRTC, Features)
│   └── public/           (manifest.json, icons)
├── service-worker.js     (Root-level Service Worker)
├── Backend/
│   └── app.py            (Flask Backend: Twilio + Gemini Webhooks)
└── firebase-admin-key.json (Firebase Admin SDK Credentials)
```

---

## 🚀 Getting Started (Local Development)

### **1. Clone the Repository**

```bash
git clone [Repository URL]
cd Pathshala
```

---

### **2. Frontend Setup (Team Member 1)**

* Confirm all files exist in the `Frontend/` folder
* Install Tailwind build tools:

```bash
npm install -D tailwindcss postcss autoprefixer
```

* Build Tailwind CSS:

```bash
npx tailwindcss -i ./Frontend/css/tailwind.css -o ./Frontend/css/tailwind.css --watch
```

* Start a local dev server (inside `Frontend/`):

```bash
python3 -m http.server 5500
```

---

### **3. Backend Setup (Team Member 2)**

* Install Python dependencies:

```bash
pip install Flask firebase-admin google-genai twilio
```

* Set required environment variables:

  * Firebase Admin Credentials
  * Gemini API Key
  * Twilio WhatsApp Sandbox credentials

* Run the backend:

```bash
python Backend/app.py
```

---

## 🤝 Contribution & Team Members

This project was built during **[Void Hack]** by:

* **[Shubhranshu Sahu]** — Google Gemini AI Integration, Twilio WhatsApp Bot, Server Logic, Deployment & Testing
* **[Muskan Jhakrod]** — Firebase Admin, Firestore Sync Layer, Python Flask APIs, Authentication Pipeline
* **[Purvi Parashar]** — PWA Architecture, UI/UX Design, Tailwind/Bootstrap Styling, Service Worker Integration
* **[Riya Sajnani]** — Frontend Logic, IndexedDB + PouchDB Sync, WebRTC Quiz Mode, Voice & Multilingual Features
