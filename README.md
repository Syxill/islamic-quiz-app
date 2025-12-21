
---

# 📖 Project Documentation: Islamic Knowledge Quiz

**A Full-Stack Web Application**

---

## 👨‍💻 Project Developers

1. **Syed Kumail Haider Zaidi** — COSC231122107
2. **Huzaifa Inam**  — COSC231122120 
3. **Muhammad Sharjeel** — COSC231122155

---

## 1️⃣ Project Overview

The **Islamic Knowledge Quiz** is a dynamic full-stack web application designed to provide an interactive and secure educational platform. Unlike a static website, this system includes a secure authentication mechanism, requiring users to register and log in before accessing content.

The application balances a modern, responsive user interface with backend security and data persistence, making it a robust example of a modern web tool suitable for real-world deployment.

---

## 2️⃣ Project Objectives

* **User Security:** Implement a login and signup system to uniquely identify users.
* **Content Protection:** Use PHP sessions to ensure only authenticated users can access quiz pages. (Users cannot access the quiz without logging in)
* **Interactive Learning:** Provide instant feedback (correct answers turn green/wrong answers turn red) using JavaScript.
* **Responsive Design:** Ensure compatibility with desktop, tablet, and mobile devices using Bootstrap 5.
* **Data Persistence:** Store user credentials permanently in a MySQL database.
* **Logout Functionality:** Securely destroys the session and logs the user out.


---

## 3️⃣ Technology Stack

| Layer | Technology | Purpose |
| --- | --- | --- |
| **Frontend** | HTML5 | Page structure and content. |
| **Styling** | CSS3 | Custom UI and glassmorphism effects. |
| **UI Framework** | Bootstrap 5 | Responsive layout, buttons, and progress bars. |
| **Client Logic** | JavaScript | Quiz logic, real-time feedback, and progress tracking. |
| **Backend** | PHP 8.2 | User authentication, session management, and DB queries. |
| **Database** | MySQL (MariaDB) | Persistent storage for user accounts. |
| **Local Server** | XAMPP | Apache server and MySQL management. |

---

## 4️⃣ System Architecture & Data Flow

The application utilizes a **3-Tier Client-Server Architecture**:

1. **User Request:** User enters credentials into the HTML/CSS frontend.
2. **Server Processing:** PHP validates the input and communicates with the MySQL database.
3. **Authentication:** If credentials match, a `$_SESSION` variable is created to track the user.
4. **Authorization:** The `index.php` page verifies the session before allowing access.
5. **Interactivity:** JavaScript handles quiz state (questions, score, progress) locally without page reloads.

## 4️⃣ System Architecture & Data Flow
The application utilizes a 3-Tier Client-Server Architecture:

1. **User Request (Presentation Layer):** The user enters credentials into the HTML/CSS frontend. The browser sends this data to the server using an HTTP POST request.

2. **Server Processing (Application Layer):** PHP receives the data, validates the input, and initiates a connection to the MySQL database.

3. **Authentication (Data Layer):** The server executes a SQL query to check if the credentials match. If they match, a $_SESSION variable is created on the server to "remember" the user.

4. **Authorization:** When the user tries to access index.php, the PHP "Gatekeeper" script verifies the session. If the session exists, the page is served; otherwise, the user is redirected to the login page.

**Interactivity:** Once the quiz loads, JavaScript takes over. It manages the quiz state (questions, score, progress) locally within the browser, providing a smooth experience without further page reloads.

---

## 5️⃣ Project Folder Structure

```text
islamic_quiz/  
│
├── images/                # Assets folder
│   ├── islamicquiz.jpg    # Main logo for the quiz
│   
│
├── db.php                 # Centralized Database connection
│
├── signup.html            # User registration interface
├── signup.php             # User registration logic (Backend)
│
├── login.html             # User login interface
├── login.php              # User login processing logic (Backend)
│
├── index.php              # Main quiz dashboard (Session protected)
├── logout.php             # Session destruction & redirect
│
├── script.js              # JavaScript Quiz engine (The "Brain")
│
├── style.css              # Main quiz page styling
├── style_auth.css         # Login/Signup page styling
│
└── README.md              # Project documentation


```

---

## 6️⃣ Database Design

The system connects to a relational database named **`quiz_db`**.

### **Table: `users**`

| Column | Type | Description |
| --- | --- | --- |
| **id** | INT | Primary key (Auto-increment). |
| **username** | VARCHAR | Unique identifier for each user. |
| **password** | VARCHAR | User password (stored as plain text for this version). |

---

## 7️⃣ Key Backend Logic

### **🔐 Session Gatekeeper (`index.php`)**

This script ensures that the quiz page is not publicly accessible. If no session exists, the user is redirected to the login page.

```php
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit();
}

```

### **🗄️ Database Connection (`db.php`)**

A centralized file to maintain the bridge between the application and the MySQL server.

```php
$conn = mysqli_connect("localhost", "root", "", "quiz_db");

```

---

## 8️⃣ How to Run the Project

1. **Install XAMPP:** Ensure the XAMPP environment is installed on your PC.
2. **Move Folder:** Copy the `islamic_quiz` folder to `C:\xampp\htdocs\`.
3. **Start Services:** Open XAMPP Control Panel and start **Apache** and **MySQL**.
4. **Setup Database:** * Open `http://localhost/phpmyadmin`.
* Create a database named `quiz_db`.
* Import the provided SQL file or create the `users` table manually.
5. **Launch:** Open your browser and go to: `http://localhost/islamic_quiz/index.php`.

---

## 9️⃣ Conclusion
The Islamic Knowledge Quiz Web Application successfully demonstrates the integration of:
Secure authentication using PHP sessions
Interactive quiz logic using JavaScript
Responsive UI using Bootstrap
Persistent data storage using MySQL



