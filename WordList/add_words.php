  <?php

include ( 'includes/header.html' ) ;

echo '<p class="feedback">Your task : '.$_POST['add_word'].'</p>';

    $q='INSERT INTO words VALUES(null,"'.$_POST['add_word'].'");';

    require ('connect_db.php');
    $r = mysqli_query($dbc,$q);

    if($r){
      echo'<p class="feedback">has been added to the list</p>';
    }else{
      echo '<p class="feedback">'.mysqli_error($dbc).'</p>';
    }

    mysqli_close($dbc);

  ?>

  <br/>
  <br/>

  <a href="index.php"><button>Click here to return to task list</button></a>
<?
  include ( 'includes/footer.html' ) ;
?>
  