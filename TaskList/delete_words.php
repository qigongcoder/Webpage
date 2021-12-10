  <?php

  include('includes/header.html');

  if (empty($_POST['delete_word'])) {
    echo '<p class="feedback">Please select an item to delete</p>';
  } else {

    echo '<p class="feedback">Your task : ' . $_POST['delete_word'] . '</p>';

    $q = 'DELETE FROM words WHERE word="' . $_POST['delete_word'] . '";';

    require('connect_db.php');
    $r = mysqli_query($dbc, $q);

    if ($r) {
      echo '<p class="feedback">has been removed from the list</p>';
    } else {
      echo '<p class="feedback">' . mysqli_error($dbc) . '</p>';
    }
    mysqli_close($dbc);
  }

  ?>

  <br />
  <br />

  <a href="index.php"><button>Click here to return to task list</button></a>

  <?
  include('includes/footer.html');
  ?>