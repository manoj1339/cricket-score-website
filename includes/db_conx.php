<?php

   $connect = mysqli_connect('sql103.epizy.com', 'epiz_23246704', 'IZHp0713m', 'epiz_23246704_googly');

   if(!$connect)
   {
     echo 'Database connection unsuccessful : '. mysqli_connect_error();
   }

?>
