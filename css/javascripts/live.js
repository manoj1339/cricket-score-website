$(document).ready(function(){

        /* nav bar hide and show on mobile*/
        $("#toggleBtn").click(function() {
          $("#navBar").toggleClass("current");
        });
        /* nav bar hide and show ends here */


      // Ajax call to get all live matches
        $.ajax({

          url: 'http://cricapi.com/api/matches?apikey=lUesDuSn2GRDcyAPuEvGL47zTd63',
          method: 'get',

          success:function(response){

            var count = 0;
            for(var i=0; i<Object.keys(response.matches).length; i++)
            {
              var d = new Date(response['matches'][i]['dateTimeGMT']);
              var date = d.toDateString();
              var time = d.toLocaleTimeString();

              var matchStarted = response['matches'][i]['matchStarted'];
              var toss_winner_team = response['matches'][i]['toss_winner_team'];
              var winner_team = response['matches'][i]['winner_team'];
              var team1 =  response['matches'][i]['team-1'];
              var team2 = response['matches'][i]['team-2'];



              if(matchStarted == true && winner_team == undefined && toss_winner_team != "no toss")
              {
                var teamOne = response['matches'][i]['team-1'];
                var teamTwo = response['matches'][i]['team-2'];

                var teamOneLogo = teamOne.replace(/\s/g, '').toLowerCase();
                var teamTwoLogo = teamTwo.replace(/\s/g, '').toLowerCase();

                    var show;
                    if(winner_team == undefined || winner_team =="")
                    {
                      show = 'Live';
                    }
                    else {
                      show == winner_team;
                    }

                    count++;
                    $('#results').append(`
                      <div class="col-md-6 col-lg-4 animated">
                        <div class="score_card">
                          <div class="card_image">
                            <img src="css/logo/`+teamOneLogo+`.png" alt="team_Logo"  onerror="this.onerror=null; this.src='css/logo/default.png'" />
                            <div class="team_name">`+response['matches'][i]['team-1']+`</div>
                          </div>
                          <div class="vs">VS</div>
                          <div class="card_image">
                            <img src="css/logo/`+teamTwoLogo+`.png" alt="team_Logo" onerror="this.onerror=null; this.src='css/logo/default.png'"  />
                            <div class="team_name">`+response['matches'][i]['team-2']+`</div>
                          </div>
                          <div class="winner"><span class="text-warning">`+show+`</span><br/>
                            <span>`+response['matches'][i]['type']+`</span><br/>
                            <span onclick="MatchDetail('`+response['matches'][i]['unique_id']+`')" class="btn btn-primary">Match Details</span>
                          </div>

                        </div>
                      </div>
                      `);
              }

            }

              $("#noOfResults").html(count);
              if(count == 0){
                $("#results").html("<h2>No Live match yet</h2>");
              }
          }//success function ends here



        });

}); // document.ready ends here

// Function To open single match details
function MatchDetail(pid){
  var win = window.open("match_details.php?q=" + pid, '_blank');
  win.focus();
}
