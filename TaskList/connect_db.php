<?
$dbc = mysqli_connect
  ('localhost','nick','thisnick','web_db')
OR DIE
  (mysqli_connect_error());
  mysqli_set_charset($dbc,'utf8');
?>

