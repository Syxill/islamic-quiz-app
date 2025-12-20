<?php
session_start();
session_destroy(); // Clears the "memory" of the user
header("Location: login.html"); // Sends them back to the start
exit();
?>