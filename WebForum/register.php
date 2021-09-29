<?php # DISPLAY COMPLETE REGISTRATION PAGE.

# Set page title and display header section.
$page_title = 'Register' ;
include ( 'includes/header.html' ) ;

# Check form submitted.
if ( $_SERVER[ 'REQUEST_METHOD' ] == 'POST' )
{
  # Connect to the database.
  require('connect_db.php');
  
  # Initialize an error array.
  $errors = array();

  # Check for a first name.
  if ( empty( $_POST[ 'user_name' ] ) )
  { $errors[] = 'Enter your user name.' ; }
  else
  { $un = mysqli_real_escape_string( $dbc, trim( $_POST[ 'user_name' ] ) ) ; }


  # Check for a password and matching input passwords.
  if ( !empty($_POST[ 'pass1' ] ) )
  {
    if ( $_POST[ 'pass1' ] != $_POST[ 'pass2' ] )
    { $errors[] = 'Passwords do not match.' ; }
    else
    { $p = mysqli_real_escape_string( $dbc, trim( $_POST[ 'pass1' ] ) ) ; }
  }
  else { $errors[] = 'Enter your password.' ; }

# Check if user_name address already registered.
  if ( empty( $errors ) )
    {
    $q = "SELECT user_id FROM users WHERE user_name='$un'" ;
    $r = @mysqli_query ( $dbc, $q ) ;
    if ( mysqli_num_rows( $r ) != 0 ) $errors[] = 'User name is already registered. <a href="login.php">Login</a>' ;
  }

  
  # On success register user inserting into 'users' database table.
  if ( empty( $errors ) ) 
  {
    $q = "INSERT INTO users (user_name, pass, reg_date) VALUES ('$un', SHA2('$p',256), NOW() )";
    $r = @mysqli_query ( $dbc, $q ) ;
    if ($r)
    { echo '<h2>Registered!</h2><p>You are now registered.</p><p><a href="login.php">Login</a></p>'; }
  
    # Close database connection.
    mysqli_close($dbc); 

    # Display footer section and quit script:
    include ('includes/footer.html'); 
    exit();
  }
  # Or report errors.
  else 
  {
    echo '<h1>Error!</h1><p id="err_msg">The following error(s) occurred:<br>' ;
    foreach ( $errors as $msg )
    { echo " - $msg<br>" ; }
    echo 'Please try again.</p>';
    # Close database connection.
    mysqli_close( $dbc );
  }  
}
?>

<!-- Display body section with sticky form. -->
<h2>Register</h2>
<form action="register.php" method="post">
<p>First Name: <input type="text" name="user_name" size="20" value="<?php if (isset($_POST['user_name'])) echo $_POST['user_name']; ?>"> 
<p>Password: <input type="password" name="pass1" size="20" value="<?php if (isset($_POST['pass1'])) echo $_POST['pass1']; ?>" >
Confirm Password: <input type="password" name="pass2" size="20" value="<?php if (isset($_POST['pass2'])) echo $_POST['pass2']; ?>"></p>
<p><input type="submit" value="Register"></p>
</form>

<?php 

# Create navigation links.
echo '<p><a href="login.php">Login</a></p>';


# Display footer section.
include ( 'includes/footer.html' ) ; 

?>
