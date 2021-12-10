<?php # DISPLAY COMPLETE LOGGED OUT PAGE.

# Access session.
session_start();

# Redirect if not logged in.
if (!isset($_SESSION['user_id'])) {
  $url = 'http://' . $_SERVER['HTTP_HOST'] . dirname($_SERVER['PHP_SELF']) . '/login.php';
  header("Location: $url");
  exit();
}

# Set page title and display header section.
$page_title = 'Goodbye';
include('includes/header.html');

# Clear existing variables.
$_SESSION = array();

# Destroy the session.
session_destroy();

# Display body section.
echo '<a href="../index.html" id="back_button">
<img src="../assets/back_button.jpg" id="back_button_image">
</a>';
echo '<h2>Goodbye!</h2><p>You are now logged out.</p><p><a href="login.php">Login</a></p>';

# Display footer section.
include('includes/footer.html');
