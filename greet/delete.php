<?
   session_start();

   @extract($_GET); 
   @extract($_POST); 
   @extract($_SESSION);

   include "../lib/dbconn.php";

   $sql = "delete from greet where num = $num";
   mysql_query($sql, $connect);

   mysql_close();

   echo "
	   <script>
         location.href = 'list.php?page=<?=$page?>&scale=<?=$scale?>'; 
         // page, scale 같이 넘겨줌
	   </script>
	";
?>

