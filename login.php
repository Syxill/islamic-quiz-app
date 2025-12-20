<?php
include 'db.php';
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = $_POST['username'];
    $pass = $_POST['password'];

    $sql = "SELECT * FROM users WHERE username = '$user'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);

    if ($row && password_verify($pass, $row['password'])) {
        $_SESSION['username'] = $user;
        header("Location: index.php"); // Change this to your quiz file name
        exit();
    } else {
        echo "Invalid login! <a href='login.html'>Try again</a>";
    }
}
?>