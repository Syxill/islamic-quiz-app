
# 🌙 Islamic Knowledge Quiz App

A responsive, interactive web application built to test knowledge on the Pillars of Islam, Prophets, and the Holy Quran. Developed as part of a structured web development assignment.

---

## 🚀 Live Demo
View the live project here: [INSERT YOUR GITHUB PAGES LINK HERE]

---

## 📋 Project Overview
- **Technologies:** HTML5, CSS3, Bootstrap 5, JavaScript (Vanilla)
- **Architecture:** Single Page Application (SPA) logic
- **Storage:** LocalStorage for persistent user data

---

## ✨ Key Features

### 1. Quiz Engine
- **Dynamic Categories:** Supports three question banks: Pillars, Prophets, and Quran.
- **State Management:** Tracks scores, question progress, and user selections dynamically via JavaScript.
- **Retry & Category Selection:** Users can retry the same quiz or switch categories easily.

### 2. UI/UX & Interactivity
- **Progress Tracking:** Real-time Bootstrap progress bar with completion percentage.
- **Visual Feedback:** Color-coded buttons (Green/Red) and Bootstrap Alerts provide instant explanations for each answer.
- **Responsive Design:** Works seamlessly on mobile, tablet, and desktop devices using the Bootstrap grid system.
- **Loading Transitions:** Smooth fade-in/out animations between questions with spinner feedback.

### 3. Data Persistence
- **High Scores:** Uses `localStorage` to save the user's personal best for each category.
- **Data Integrity:** Ensures only a higher score overwrites the previous record.
- **Results Summary:** Post-quiz breakdown showing all correct answers and explanations.

---

## 🛠️ Implementation Details

### Core JavaScript Functions
- `startQuiz(category)`: Resets state and initializes the selected question bank.
- `displayQuestion()`: Renders questions and answer options dynamically.
- `selectAnswer(index)`: Validates answers, updates score, and triggers UI feedback.
- `nextQuestion()`: Handles navigation to the next question with a smooth transition.
- `resetQuiz()`: Allows retrying the current quiz without reloading the page.
- `showCategorySelection()`: Displays the category selection screen.
- `saveHighScore(score, category)`: Saves high scores in `localStorage`.
- `loadHighScores()`: Retrieves high scores from `localStorage`.

### Bootstrap Components Used
- **Cards:** For quiz interface containers.
- **Progress Bar:** Tracks question completion visually.
- **Alerts:** Shows correct/incorrect feedback with explanations.
- **Spinners:** Indicates loading state during transitions.
- **Buttons:** Full-width buttons for options and navigation.

---

## 🧪 Testing & Validation
- **Device Testing:** Verified responsive layouts on iPhone SE, iPad Air, and Desktop.
- **Storage Testing:** Confirmed high scores remain after browser restart.
- **Edge Case Testing:** Ensured "Next Question" button is disabled until an answer is selected.
- **Category Testing:** Switching categories displays correct questions and resets progress.

---

## 📂 Project Structure
```text
islamic-quiz-app/
│
├── index.html       # Main HTML structure
├── style.css        # Custom styling and animations
├── script.js        # Quiz logic, state management, localStorage handling
├── images/          # Logo, favicon, and other images
└── README.md        # Project documentation
