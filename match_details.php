
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="cricket, scores, cricket scores, score, googly, player, players, statistics, matches, upcoming, cricket live,  ind vs eng, ind vs pak, asia cup, world cup">
  <meta name="keywords" content="domestic, ind vs aus,cricket, scores, cricket scores, score, googly, player, players, statistics, matches, upcoming, cricket live,  ind vs eng, ind vs pak, asia cup, world cup">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Googly | Match Summary</title>
  <link rel="shortcut icon" href="css/images/googly.png" />

  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="css/stylesheets/night_bootstrap.css" />
  <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="css/stylesheets/animate.css">

  <link rel="stylesheet" href="css/stylesheets/headerNav.css">
  <link rel="stylesheet" href="css/stylesheets/base.css">

</head>

<body>

  <!-- Header -->
  <header>

    <nav class="container">
      <a class="logo animated rubberBand" href="index.php"><img src="css/images/logo.png" alt="googly"></a>
      <i id="toggleBtn" class="fa fa-bars" aria-hidden="true"></i>

      <ul id="navBar" data-mode="close" class="animated fadeInDownBig">
        <li><a href="index.php">Home</a></li>
        <li><a href="matches.php">Matches</a></li>
        <li><a href="players.php">Players</a></li>
        <li><a class="active" href="live.php">Live</a></li>
      </ul>


    </nav>
  </header>




  <div class="container">
    <div id="match-header"></div>
    <div id="wrapper" data-match='<?php echo $_GET['q']; ?>'></div>
  </div>


  <footer>
    <h4>
      <i class="fa fa-copyright" aria-hidden="true"></i> Googly
    </h4>
    <h6>All Rights Reserved</h6>
  </footer>


<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script type="text/javascript" src="css/javascripts/match_details.js"></script>
<script>
  $(document).ready(function(){
        var minus = $('footer')[0].clientHeight + $('header')[0].clientHeight;
        var min = $(window).height()-minus;
        $('#wrapper').css('min-height', min+'px');
        console.log($('footer')[0].clientHeight);
  });
</script>
</body>
</html>
