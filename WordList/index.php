
  <?
include ( 'includes/header.html' ) ;
require ('connect_db.php');
  $q = 'SELECT * FROM words';
  $r = mysqli_query($dbc,$q);
  if($r){
    echo '<h1>Task List</h1>';
    echo '<form action="delete_words.php" method="post">';
    while($row=mysqli_fetch_array($r, MYSQLI_NUM)){

      echo '<div class="item"><input type="radio" name="delete_word" value="'.$row[1].'"><span class="item_text">'.$row[1].'</span></div>';
      echo '<br/>';

    }
    mysqli_free_result($r);

    echo '<br/>';
    echo '<input type="submit" value="Delete Selected Task">';
    echo '</form>';

  }else{
    echo '<p>'.mysqli_error($dbc).'</p>';
  }
  mysqli_close($dbc);
  ?>
<br/>

<br/>

  <h2>Add your task</h2>

<form action="add_words.php" method="post">
  <input type="text" name="add_word">
  <br/>
  <input type="submit" value="Enter">
</form>

<?
include ( 'includes/footer.html' ) ;
?>