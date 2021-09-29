<?php # PROCESS LOGIN ATTEMPT.

# Function to check user name and password. 
function validate( $dbc, $un = '', $pwd = '')
{

  # Initialize errors array.
  $errors = array() ; 

  # Check user name field.
  if ( empty( $un ) ) 
  { $errors[] = 'Enter your user name.' ; } 
  else  { $un = mysqli_real_escape_string( $dbc, trim( $un ) ) ; }

  # Check password field.
  if ( empty( $pwd ) ) 
  { $errors[] = 'Enter your password.' ; } 
  else { $p = mysqli_real_escape_string( $dbc, trim( $pwd ) ) ; }

  # On success retrieve user_id, user_name from 'users' database.
  if ( empty( $errors ) ) 
  {

    $q = "SELECT user_id, user_name FROM users WHERE user_name='$un' AND pass=SHA2('$p',256)";

    $r = mysqli_query ( $dbc, $q ) ;
    if ( @mysqli_num_rows( $r ) == 1 ) 
    {
      $row = mysqli_fetch_array ( $r, MYSQLI_ASSOC ) ;
      return array( true, $row ) ; 
    }
    # Or on failure set error message.
    else { $errors[] = 'User name and password not found.' ; }
  }
  # On failure retrieve error message/s.
  return array( false, $errors ) ; 
}


# Check form submitted.
if ( $_SERVER[ 'REQUEST_METHOD' ] == 'POST' )
{
  # Open database connection.
  require('connect_db.php');

  # Check login.
  list ( $check, $data ) = validate ( $dbc, $_POST[ 'user_name' ], $_POST[ 'pass' ] ) ;

  # On success set session data and display logged in page.
  if ( $check )  
  {
    echo'<p>in start session</p>';
    # Access session.
    session_start();
    $_SESSION[ 'user_id' ] = $data[ 'user_id' ] ;
    $_SESSION[ 'user_name' ] = $data[ 'user_name' ] ;
      $url = 'http://'.$_SERVER[ 'HTTP_HOST' ].dirname( $_SERVER[ 'PHP_SELF' ]).'/web_forum/forum.php';
      header( "Location: $url" ) ; 
      exit() ;
  }
  # Or on failure set errors.
  else { $errors = $data; } 

  # Close database connection.
  mysqli_close( $dbc ) ; 
}

# Continue to display login page on failure.
include ( 'login.php' ) ;

?>