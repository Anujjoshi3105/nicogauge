# 🚭 NicoGauge – NeuroMarketing Addiction Monitoring Platform

**NicoGauge** is a digital platform designed to evaluate cigarette addiction levels and understand the influence of neuromarketing stimuli. Built using **Next.js**, it collects user input through an intelligent form-based interface and generates a **NeuroMarketing Index** to help users make informed lifestyle decisions.

## [Live Demo](https://nicogauge.vercel.app)

![nicogauge](https://github.com/user-attachments/assets/aed3a3bb-caa0-4e25-8602-741b2463c5e3)

---

## 🧠 Project Objective

NicoGauge leverages the principles of **neuromarketing** and behavioral analysis to:
- Quantify addiction intensity using structured form inputs
- Identify triggers and responses to cigarette marketing stimuli
- Deliver a **personalized score/report** based on user behavior
- Encourage self-awareness and conscious habit tracking

---

## 🛠️ Tech Stack

| Technology     | Description                                  |
|----------------|----------------------------------------------|
| **Next.js**    | Frontend framework with SSR & routing        |
| **Tailwind CSS** | Utility-first CSS for responsive UI       |
| **React Hook Form** | Form management and validation         |
| **Framer Motion** | Smooth animations for user transitions    |
| **LocalStorage**  | Store user results locally (optional)     |

---

## 📋 Features

- 📊 **Dynamic Form System**: Collects behavioral data and self-assessments
- 🧪 **Neuromarketing Index Calculator**: Computes results using defined criteria
- 💡 **Insightful Feedback**: Users receive tailored messages based on their scores
- 📱 **Responsive UI**: Fully functional across devices
- 🔐 **Privacy Respectful**: No external data collection or login required

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/nicogauge.git
cd nicogauge
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
# Visit http://localhost:3000
```

---

## 🧪 Scoring Logic (Example)

The user's responses are processed against a scoring rubric:

* Questions are weighted based on behavioral impact
* Categories include: frequency, craving triggers, emotional response, marketing influence
* Final result is shown as:

  * **Low Dependency**
  * **Moderate Dependency**
  * **High Dependency**

> This model can be extended with ML scoring or API integration in the future.

---

## 📁 Folder Structure

```
nicogauge/
├── pages/
│   ├── index.tsx         # Landing page
│   ├── form.tsx          # Questionnaire input
│   └── result.tsx        # Result and index display
├── components/           # Form elements, navbar, layout
├── styles/               # Tailwind config and global styles
├── lib/                  # Scoring logic or utils
└── public/               # Assets and icons
```

---

## 🔐 Privacy & Data

NicoGauge is designed to be a **private-by-design** tool:

* No login or user tracking
* All data remains in the browser (can optionally be saved via LocalStorage)

---

## 📄 License

This project is open-source and intended for academic and awareness purposes.
For research extensions or integration inquiries, contact the developer.

---

## ✨ Developed By

[Anuj Joshi](https://github.com/Anujjoshi3105) – Passionate about combining neuroscience, technology, and social impact.
