<?php
  include_once "includes/functions.php";

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Cricket, Scores, googly, Player Statistics, Players info, statistics, matches, upcoming, cricket live,  ind vs eng, ind vs pak, asia cup, world cup">
  <meta name="keywords" content="domestic, ind vs aus,cricket, scores, cricket scores, score, googly, player, players, statistics, matches, upcoming, cricket live,  ind vs eng, ind vs pak, asia cup, world cup">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Googly | Players Statistics</title>
  <link rel="shortcut icon" href="css/images/googly.png" />

  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="css/stylesheets/night_bootstrap.css" />
  <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="css/stylesheets/animate.css">

  <link rel="stylesheet" href="css/stylesheets/headerNav.css">
  <link rel="stylesheet" href="css/stylesheets/base.css">
  <style>
    #hero-section{
        margin-top: 50px;
    }
    @media screen and (max-width: 750px){
        #hero-section{
            margin-top: -10px;
        }
    }
  </style>
</head>

<body>

  <!-- Header -->
  <header>

    <h1 id="type"></h1>
    <nav class="container">
      <a class="logo animated rubberBand" href="index.php"><img src="css/images/logo.png" alt="googly"></a>
      <i id="toggleBtn" class="fa fa-bars" aria-hidden="true"></i>

      <ul id="navBar" data-mode="close" class="animated fadeInDownBig">
        <li><a href="index.php" class="active">Home</a></li>
        <li><a href="matches.php">Matches</a></li>
        <li><a href="players.php">Players</a></li>
        <li><a href="live.php">Live</a></li>
      </ul>


    </nav>
  </header>


  <div class="container" id="wrapper">

    <div id="hero-section">
        <div class="row">
            <div class="col-md-6">
                <h1  style="margin-top: 50px;">
                One Destination for <br/>
                Your all <span style="color:#c9a819;font-weight:bold;">CRICKET</span> needs !
                </h1>
                <p>
                Get Live matches score <br/>
                Upcoming matches schedule <br/>
                Players statistics and Many More !<br/>
                </p>
                <button id="explore" class="btn btn-danger">Explore</button>
            </div>
            <div class="col-md-6" style="text-align:center;">
                <img src="css/images/virat.png" alt="Virat Kohli" />
            </div>
        </div>
    </div>

    <div id="matches_section" style="margin-top: 50px;">
        <h1>Matches results</h1>
        <div class="row" id="results">
        
        </div>
    </div>

    <div id="live_section" style="margin-top:50px;margin-bottom:50px;">
        <h1>Live matches</h1>
        <div class="row" id="live">
        
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
<script type="text/javascript" src="css/javascripts/script.js"></script>
<script>
$(document).ready(function(){
    var minus = $('footer')[0].clientHeight + $('header')[0].clientHeight;
    var min = $(window).height()-minus;
    $('#wrapper').css('min-height', min+'px');
});
</script>
</body>
</html>
