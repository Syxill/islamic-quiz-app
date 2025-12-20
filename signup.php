<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = $_POST['username'];
    $pass = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (username, password) VALUES ('$user', '$pass')";
    
    if (mysqli_query($conn, $sql)) {
        echo "Registration successful! <a href='login.html'>Login here</a>";
    } else {
        echo "Error: " . mysqli_error($conn);
    }
}
?>


