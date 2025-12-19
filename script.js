const questionBank = {
  pillars: [
    {
      question: "How many pillars are there in Islam?",
      options: ["4", "5", "6", "7"],
      correct: 1,
      explanation: "Islam is built upon five pillars."
    },
    {
      question: "Which pillar is the declaration of faith?",
      options: ["Salah", "Zakat", "Shahada", "Hajj"],
      correct: 2,
      explanation: "Shahada is the declaration of faith in Islam."
    },
    {
      question: "How many daily prayers are obligatory?",
      options: ["3", "4", "5", "6"],
      correct: 2,
      explanation: "Five daily prayers are compulsory for Muslims."
    },
    {
      question: "Which pillar involves fasting?",
      options: ["Zakat", "Hajj", "Sawm", "Salah"],
      correct: 2,
      explanation: "Sawm means fasting during the month of Ramadan."
    },
    {
      question: "In which month do Muslims fast?",
      options: ["Rajab", "Shaban", "Ramadan", "Muharram"],
      correct: 2,
      explanation: "Fasting is observed in the month of Ramadan."
    },
    {
      question: "Which pillar involves giving charity?",
      options: ["Salah", "Zakat", "Sawm", "Hajj"],
      correct: 1,
      explanation: "Zakat is mandatory charity for eligible Muslims."
    },
    {
      question: "Which pillar is performed once in a lifetime (if able)?",
      options: ["Salah", "Zakat", "Hajj", "Sawm"],
      correct: 2,
      explanation: "Hajj is performed once in a lifetime if physically and financially able."
    }
  ],

  prophets: [
    {
      question: "Who was the first prophet in Islam?",
      options: ["Nuh (AS)", "Ibrahim (AS)", "Adam (AS)", "Muhammad ﷺ"],
      correct: 2,
      explanation: "Adam (AS) was the first prophet and first human."
    },
    {
      question: "Who is the last prophet of Islam?",
      options: ["Isa (AS)", "Musa (AS)", "Muhammad ﷺ", "Ibrahim (AS)"],
      correct: 2,
      explanation: "Prophet Muhammad ﷺ is the final messenger of Allah."
    },
    {
      question: "Which prophet built the Kaaba?",
      options: ["Adam (AS)", "Ibrahim (AS)", "Nuh (AS)", "Musa (AS)"],
      correct: 1,
      explanation: "Prophet Ibrahim (AS), with his son Ismail (AS), built the Kaaba."
    },
    {
      question: "Which prophet was swallowed by a fish?",
      options: ["Yusuf (AS)", "Yunus (AS)", "Ayyub (AS)", "Saleh (AS)"],
      correct: 1,
      explanation: "Prophet Yunus (AS) was swallowed by a large fish."
    },
    {
      question: "Which prophet could interpret dreams?",
      options: ["Yaqub (AS)", "Yusuf (AS)", "Dawood (AS)", "Sulaiman (AS)"],
      correct: 1,
      explanation: "Prophet Yusuf (AS) was known for interpreting dreams."
    },
    {
      question: "Which prophet spoke as a baby?",
      options: ["Isa (AS)", "Musa (AS)", "Nuh (AS)", "Ibrahim (AS)"],
      correct: 0,
      explanation: "Prophet Isa (AS) spoke while still in the cradle."
    },
    {
      question: "Which prophet controlled the jinn?",
      options: ["Dawood (AS)", "Musa (AS)", "Sulaiman (AS)", "Isa (AS)"],
      correct: 2,
      explanation: "Prophet Sulaiman (AS) was given control over jinn."
    }
  ],

  quran: [
    {
      question: "How many Surahs are in the Quran?",
      options: ["112", "113", "114", "115"],
      correct: 2,
      explanation: "The Quran contains 114 Surahs."
    },
    {
      question: "Which is the first Surah of the Quran?",
      options: ["Al-Baqarah", "Al-Fatiha", "Al-Ikhlas", "An-Nas"],
      correct: 1,
      explanation: "Al-Fatiha is the opening Surah of the Quran."
    },
    {
      question: "Which is the longest Surah in the Quran?",
      options: ["Al-Imran", "Al-Baqarah", "An-Nisa", "Al-Ma'idah"],
      correct: 1,
      explanation: "Surah Al-Baqarah is the longest Surah."
    },
    {
      question: "Which is the shortest Surah?",
      options: ["Al-Kawthar", "Al-Ikhlas", "Al-Falaq", "An-Nas"],
      correct: 0,
      explanation: "Surah Al-Kawthar is the shortest Surah."
    },
    {
      question: "In which month was the Quran revealed?",
      options: ["Rajab", "Shaban", "Ramadan", "Muharram"],
      correct: 2,
      explanation: "The Quran was revealed in the month of Ramadan."
    },
    {
      question: "How many Juz are there in the Quran?",
      options: ["28", "29", "30", "31"],
      correct: 2,
      explanation: "The Quran is divided into 30 Juz."
    },
    {
      question: "Which angel brought revelation to Prophet Muhammad ﷺ?",
      options: ["Israfil", "Mikail", "Jibreel", "Izrael"],
      correct: 2,
      explanation: "Angel Jibreel (AS) brought the Quran to the Prophet ﷺ."
    }
  ]
};

/* ==========================================
   QUIZ STATE MANAGEMENT
   ========================================== */
let currentQuestionIndex = 0;
let score = 0;
let selectedCategory = "";

/**
 * Starts the quiz for a specific category
 * Fulfills Task 4.2: UI Navigation
 */
function startQuiz(category) {
  if (!questionBank[category]) {
      console.error("Category not found:", category);
      return;
  }

  selectedCategory = category;
  currentQuestionIndex = 0;
  score = 0;

  // Screen Switching Logic
  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("resultScreen").style.display = "none";
  
  const quizScreen = document.getElementById("quizScreen");
  quizScreen.style.display = "block";
  quizScreen.style.opacity = "1"; 
  
  document.getElementById("loading").style.display = "none"; 

  // Reset UI elements for a fresh start
  document.getElementById("options").innerHTML = "";
  document.getElementById("explanation").style.display = "none";
  document.getElementById("nextBtn").style.display = "none";

  displayQuestion();
  updateProgress();
}

/**
 * Renders the current question and option buttons
 * Uses Bootstrap Button Groups logic
 */
function displayQuestion() {
  const question = questionBank[selectedCategory][currentQuestionIndex];
  document.getElementById("questionText").innerText = question.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  question.options.forEach((option, index) => {
    const btn = document.createElement("button");
    // Bootstrap class for full-width buttons
    btn.className = "btn btn-outline-primary w-100 mb-2 py-2 fw-semibold";
    btn.innerText = option;
    btn.onclick = () => selectAnswer(index);
    optionsDiv.appendChild(btn);
  });

  updateProgress();
}

/**
 * Validates the answer and provides instant feedback
 * Uses Bootstrap Alerts for feedback 
 */
function selectAnswer(selectedIndex) {
  const question = questionBank[selectedCategory][currentQuestionIndex];
  const optionsButtons = document.getElementById("options").children;
  const explanationDiv = document.getElementById("explanation");

  // Disable buttons so user can't click twice
  for (let btn of optionsButtons) btn.disabled = true;

  // Visual Feedback Logic
  if (selectedIndex === question.correct) {
    score++;
    optionsButtons[selectedIndex].classList.replace("btn-outline-primary", "btn-success");
    explanationDiv.className = "alert alert-success mt-3"; // Green alert
  } else {
    optionsButtons[selectedIndex].classList.replace("btn-outline-primary", "btn-danger");
    optionsButtons[question.correct].classList.replace("btn-outline-primary", "btn-success");
    explanationDiv.className = "alert alert-danger mt-3"; // Red alert
  }

  // Display Explanation and Next Button
  explanationDiv.style.display = "block";
  explanationDiv.innerHTML = `<strong>Explanation:</strong> ${question.explanation}`;
  document.getElementById("nextBtn").style.display = "inline-block";

  updateProgress();
}

/**
 * Transition logic to next question with a loading spinner
 */
function nextQuestion() {
  const quizScreen = document.getElementById("quizScreen");
  const loading = document.getElementById("loading");

  quizScreen.style.opacity = 0; // Fade out effect
  loading.style.display = "block";

  setTimeout(() => {
    currentQuestionIndex++;

    if (currentQuestionIndex < questionBank[selectedCategory].length) {
      displayQuestion();
      quizScreen.style.opacity = 1; // Fade in effect
    } else {
      endQuiz();
    }

    loading.style.display = "none";
    document.getElementById("explanation").style.display = "none";
    document.getElementById("nextBtn").style.display = "none";
  }, 500); // Half-second delay for professional feel
}

/* ==========================================
    RESULTS & SUMMARY
   ========================================== */
function endQuiz() {
  document.getElementById("quizScreen").style.display = "none";
  document.getElementById("resultScreen").style.display = "block";

  const totalQuestions = questionBank[selectedCategory].length;
  const percentage = Math.round((score / totalQuestions) * 100);

  document.getElementById("finalScore").innerText = `Final Score: ${score} / ${totalQuestions}`;
  document.getElementById("percentageScore").innerText = `Total Accuracy: ${percentage}%`;

  // Build the Answers Summary list
  const summaryDiv = document.getElementById("answerSummary");
  summaryDiv.innerHTML = "<h5 class='border-bottom pb-2'>Answers Summary:</h5>";
  
  questionBank[selectedCategory].forEach((q, index) => {
    const div = document.createElement("div");
    div.className = "mb-3 small";
    div.innerHTML = `<strong>Q${index + 1}:</strong> ${q.question}<br>` + 
                    `<span class="text-success fw-bold">Correct Answer: ${q.options[q.correct]}</span>`;
    summaryDiv.appendChild(div);
  });

  // Save High Score to LocalStorage
  saveHighScore(score, selectedCategory);
  
  // Update High Score Display
  const highScores = loadHighScores();
  let highScoreHTML = "<hr><h6>Category Personal Bests:</h6><ul class='list-unstyled'>";
  for (const cat in highScores) {
    highScoreHTML += `<li><span class="badge bg-primary me-2">${cat.toUpperCase()}</span> <strong>${highScores[cat]} / 7</strong></li>`;
  }
  highScoreHTML += "</ul>";
  document.getElementById("highScoresText").innerHTML = highScoreHTML;
}

/* ==========================================
   LOCAL STORAGE DATA HANDLERS
   ========================================== */
function saveHighScore(score, category) {
  const highScores = JSON.parse(localStorage.getItem("islamicQuizHighScores")) || {};
  // Only save if current score is higher than the one stored
  if (!highScores[category] || score > highScores[category]) {
    highScores[category] = score;
    localStorage.setItem("islamicQuizHighScores", JSON.stringify(highScores));
  }
}

function loadHighScores() {
  return JSON.parse(localStorage.getItem("islamicQuizHighScores")) || {};
}

/* ==========================================
   NAVIGATION & PROGRESS
   ========================================== */
function updateProgress() {
  if (!selectedCategory) return;
  const total = questionBank[selectedCategory].length;
  const current = currentQuestionIndex + 1;
  const percent = Math.round((current / total) * 100);

  document.getElementById("progressText").innerText = `Question ${current} of ${total}`;
  document.getElementById("progressPercent").innerText = percent + "%";
  document.getElementById("progressBar").style.width = percent + "%";
}

function resetQuiz() {
  startQuiz(selectedCategory); // Reuse startQuiz to reset everything
}

function showCategorySelection() {
  document.getElementById("resultScreen").style.display = "none";
  document.getElementById("quizScreen").style.display = "none";
  document.getElementById("welcomeScreen").style.display = "block";
  document.getElementById("answerSummary").innerHTML = "";
  selectedCategory = "";
}

