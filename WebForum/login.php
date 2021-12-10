<?php # DISPLAY COMPLETE LOGIN PAGE.

# Set page title and display header section.
$page_title = 'Login';
include('includes/header.html');

# Display any error messages if present.
if (isset($errors) && !empty($errors)) {
  echo '<p id="err_msg">Oops! There was a problem:<br>';
  foreach ($errors as $msg) {
    echo " - $msg<br>";
  }
  echo 'Please try again or <a href="register.php">Register</a></p>';
}
?>

<!-- Display body section. -->
<a href="../index.html" id="back_button">
  <img src="../assets/back_button.jpg" id="back_button_image">
</a>
<h2>Login</h2>
<form action="login_action.php" method="post">
  <p>User Name: <input type="text" name="user_name" value="test_account1"> </p>
  <p>Password: <input type="password" name="pass" value="test_account1"></p>
  <p><input type="submit" value="Login"></p>
</form>



<?php

# Create navigation links.
echo '<p><a href="register.php">Registration</a></p>';


# Display footer section.
include('includes/footer.html');

?>