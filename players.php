
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
  <link rel="stylesheet" href="css/stylesheets/players.css">

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
        <li><a href="players.php" class="active">Players</a></li>
        <li><a href="live.php">Live</a></li>
      </ul>


    </nav>
  </header>


  <div class="container" id="wrapper">

    <div class="row">
      <div class="player_search">
        <i class="fa fa-search" aria-hidden="true"></i>
        <input id="player_search" type="text" name="match_search" placeholder="Type player & Hit Enter ">
      </div>
    </div>

    <section>
      <div class="row list-group" id="results"></div>
    </section>

  </div>

  <footer>
    <h4>
      <i class="fa fa-copyright" aria-hidden="true"></i> Googly
    </h4>
    <h6>All Rights Reserved</h6>
  </footer>


<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script type="text/javascript" src="css/javascripts/matches.js"></script>
<script>
  $(document).ready(function(){
    var minus = $('footer')[0].clientHeight + $('header')[0].clientHeight;
    var min = $(window).height()-minus;
    $('#wrapper').css('min-height', min+'px');

    $('#player_search').on('keypress', function(){
      var value = $(this).val();
      var value = value.replace(/[^a-z]\s/gi, '');
      var value = value.toLowerCase();

      $.ajax({
         url: "http://cricapi.com/api/playerFinder?apikey=lUesDuSn2GRDcyAPuEvGL47zTd63&name=" + value,
         method: 'get',
         success: function(response){

           var output = '';

           $.each(response['data'], function(key, value){
             output += `<a href="player.php?q=`+value['pid']+`" class="list-group-item list-group-item-action">`+value['name']+`</a>`;
           });// each end
           $('#results').html(output);


         }// success end
      });//ajax end
    });
});
</script>
</body>
</html>
