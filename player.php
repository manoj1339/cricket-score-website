<?php
  include_once "includes/functions.php";

  if(isset($_GET['q']))
  {

    $pid = $_GET['q'];
    $pid = user_input($pid);

    $file_url = file_get_contents("http://cricapi.com/api/playerStats?apikey=lUesDuSn2GRDcyAPuEvGL47zTd63&pid=" . $pid);
    $file_array = json_decode($file_url, true);

  }
  else {
    header('location: index.php');
  }

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="cricket, scores, cricket scores, score, googly, player, players, statistics, matches, upcoming, cricket live,  ind vs eng, ind vs pak, asia cup, world cup">
  <meta name="keywords" content="domestic, ind vs aus,cricket, scores, cricket scores, score, googly, player, players, statistics, matches, upcoming, cricket live,  ind vs eng, ind vs pak, asia cup, world cup">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title><?php echo $file_array['name']; ?></title>
  <link rel="shortcut icon" href="css/images/googly.png" />

  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="css/stylesheets/night_bootstrap.css" />
  <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="css/stylesheets/animate.css">

  <link rel="stylesheet" href="css/stylesheets/headerNav.css">
  <link rel="stylesheet" href="css/stylesheets/player.css">

</head>

<body>

  <!-- Header -->
  <header>

    <h1 id="type"></h1>
    <nav class="container">
      <a class="logo animated rubberBand" href="index.php"><img src="css/images/logo.png" alt="googly"></a>
      <i id="toggleBtn" class="fa fa-bars" aria-hidden="true"></i>

      <ul id="navBar" data-mode="close" class="animated fadeInDownBig">
        <li><a href="index.php">Home</a></li>
        <li><a href="matches.php">Matches</a></li>
        <li><a href="players.php">Players</a></li>
        <li><a href="live.php">Live</a></li>
      </ul>


    </nav>
  </header>


  <div class="container" id="wrapper">
    <div class="player-card">
      <div class="player-image">
        <img src=<?php echo $file_array['imageURL']; ?> alt="player-img" />
        <div class="play-style" id="firstLabel"><?php echo $file_array['name']; ?></div>
        <div class="play-style" id="secondLabel"><?php echo $file_array['country']; ?></div>
      </div>
      <div class="player-info">
        <ul>
          <li><span class="key">Name :</span>  <span class="value"><?php echo $file_array['name']; ?></span></li>
          <li><span class="key">Nationality :</span> <span class="value"><?php echo $file_array['country']; ?></span></li>
          <li><span class="key">Playing Role :</span> <span class="value"><?php echo $file_array['playingRole']; ?></span></li>
          <li><span class="key">Birth :</span> <span class="value"><?php echo $file_array['born']; ?></span></li>
        </ul>
      </div>
    </div>

    <div class="player-stats">
      <div class="statsBtn activeBtn">Batting</div>
      <div class="statsBtn">Bowling</div>
      <div class="stats" id="batting"  style="display:block;">
          <?php
            foreach($file_array['data']['batting'] as $type => $value)
            {
              echo "<div class='table-responsive'><table class='table table-bordered'><tr>
                <th colspan=13>$type</th>
                   </tr>";

              echo "<tr class='headings'>
                      <td>Matches</td>
                      <td>Innings</td>
                      <td>NotOut</td>
                      <td>Runs</td>
                      <td>Average</td>
                      <td>Best</td>
                      <td>Strike Rate</td>
                      <td>100</td>
                      <td>50</td>
                      <td>Fours</td>
                      <td>Sixes</td>
                      <td>Catches</td>
                      <td>stumping</td>
                         </tr>";

              echo "<tr class='data'>
                 <td>". $value['Mat'] ."</td>
                 <td>". $value['Inns'] ."</td>
                 <td>". $value['NO'] ."</td>
                 <td>". $value['Runs'] ."</td>
                 <td>". $value['Ave'] ."</td>
                 <td>". $value['HS'] ."</td>
                 <td>". $value['SR'] ."</td>
                 <td>". $value[100] ."</td>
                 <td>". $value[50] ."</td>
                 <td>". $value['4s'] ."</td>
                 <td>". $value['6s'] ."</td>
                 <td>". $value['Ct'] ."</td>
                 <td>". $value['St'] ."</td>
                    </tr>";

              echo "</table></div>";
            }
          ?>
      </div>

      <div class="stats" id="bowling">
        <?php
          foreach($file_array['data']['bowling'] as $type => $value)
          {
            echo "<div class='table-responsive'><table class='table table-bordered'><tr>
              <th colspan=13>$type</th>
                 </tr>";

            echo "<tr class='headings'>
                    <td>Matches</td>
                    <td>Innings</td>
                    <td>Balls</td>
                    <td>Runs</td>
                    <td>wickets</td>
                    <td>Best Inng</td>
                    <td>Best Match</td>
                    <td>Average</td>
                    <td>Econ</td>
                    <td>Strike Rate</td>
                    <td>4 wkt</td>
                    <td>5 wkt</td>
                    <td>10 wkt</td>
                       </tr>";

            echo "<tr class='data'>
               <td>". $value['Mat'] ."</td>
               <td>". $value['Inns'] ."</td>
               <td>". $value['Balls'] ."</td>
               <td>". $value['Runs'] ."</td>
               <td>". $value['Wkts'] ."</td>
               <td>". $value['BBI'] ."</td>
               <td>". $value['BBM'] ."</td>
               <td>". $value['Ave'] ."</td>
               <td>". $value['Econ'] ."</td>
               <td>". $value['SR'] ."</td>
               <td>". $value['4w'] ."</td>
               <td>". $value['5w'] ."</td>
               <td>". $value[10] ."</td>
                  </tr>";

            echo "</table></div>";
          }
        ?>
      </div>
    </div>
  </div>


  <footer>
    <h4>
      <i class="fa fa-copyright" aria-hidden="true"></i> Googly
    </h4>
    <h6>All Rights Reserved</h6>
  </footer>


<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
  $(document).ready(function(){
    /* nav bar hide and show on mobile*/
    $("#toggleBtn").click(function() {
      $("#navBar").toggleClass("current");
    });
    /* nav bar hide and show ends here */

    // for player stats change between batting and bowling
    $('.statsBtn').click(function(){
      var text = $(this).html();
      $('.statsBtn').removeClass('activeBtn');
      $(this).addClass('activeBtn');

      if(text == 'Batting')
      {
        $('#batting').css('display', 'block');
        $('#bowling').css('display', 'none');
      }
      else {
        $('#bowling').css('display', 'block');
        $('#batting').css('display', 'none');
      }

    });
  });
</script>
</body>
</html>
