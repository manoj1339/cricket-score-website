$(document).ready(function() {

      /* nav bar hide and show on mobile*/
      $("#toggleBtn").click(function() {
        $("#navBar").toggleClass("current");
      });
      /* nav bar hide and show ends here */

      // Explore button
      $('#explore').on('click', function(){
        $('html, body').animate({
                   scrollTop: $("#matches_section").offset().top
               }, 500);
      });


      /* Ajax request to get Three matches card */

      $.ajax({

          url: 'http://cricapi.com/api/matches?apikey=lUesDuSn2GRDcyAPuEvGL47zTd63',
          method: 'get',

        }).done(function(response){

          var count = 0;
          for(var i=0; i<Object.keys(response.matches).length; i++)
          {

            if((response['matches'][i]['type'] =="ODI" || response['matches'][i]['type'] =="Twenty20" || response['matches'][i]['type'] =="T20I" || response['matches'][i]['type'] =="Test")
            && response['matches'][i]['winner_team'] != undefined)
            {
              count++;

              var teamOne = response['matches'][i]['team-1'];
              var teamTwo = response['matches'][i]['team-2'];

              var teamOneLogo = teamOne.replace(/\s/g, '').toLowerCase();
              var teamTwoLogo = teamTwo.replace(/\s/g, '').toLowerCase();



                $('#results').append(`
                  <div class="col-md-6 col-lg-4">
                    <div class="score_card">
                      <div class="card_image">
                        <img src="css/logo/`+teamOneLogo+`.png" alt="team_Logo" onerror="this.onerror=null; this.src='css/logo/default.png'"  />
                        <div class="team_name">`+response['matches'][i]['team-1']+`</div>
                      </div>
                      <div class="vs">VS</div>
                      <div class="card_image">
                        <img src="css/logo/`+teamTwoLogo+`.png" alt="team_Logo" onerror="this.onerror=null; this.src='css/logo/default.png'"  />
                        <div class="team_name">`+response['matches'][i]['team-2']+`</div>
                      </div>
                      <div class="winner"><i class="fa fa-trophy fa-1x" aria-hidden="true"></i>  <span class="text-warning">`+response['matches'][i]['winner_team']+`</span><br/>
                        <span>`+response['matches'][i]['type']+`</span><br/>
                        <span onclick="MatchDetail('`+response['matches'][i]['unique_id']+`')" class="btn btn-primary">Match Details</span>
                      </div>

                    </div>
                  </div>
                  `);

             // To display only three matches card we use following if statement
              if(count > 2)
              {
                break;
              }

            }
          }
        }); // ajax request ends here


        // ajax request to get live matches
        $.ajax({

            url: 'http://cricapi.com/api/matches?apikey=lUesDuSn2GRDcyAPuEvGL47zTd63',
            method: 'get',

          }).done(function(response){

            var count = 0;
            for(var i=0; i<Object.keys(response.matches).length; i++)
            {

              if(response['matches'][i]['matchStarted'] == true && response['matches'][i]['winner_team'] == undefined && response['matches'][i]['toss_winner_team'] != 'no toss')
              {
                count++;

                var teamOne = response['matches'][i]['team-1'];
                var teamTwo = response['matches'][i]['team-2'];

                var teamOneLogo = teamOne.replace(/\s/g, '').toLowerCase();
                var teamTwoLogo = teamTwo.replace(/\s/g, '').toLowerCase();


                  $('#live').append(`
                    <div class="col-md-6 col-lg-4">
                      <div class="score_card">
                        <div class="card_image">
                          <img src="css/logo/`+teamOneLogo+`.png" alt="team_Logo" onerror="this.onerror=null; this.src='css/logo/default.png'"  />
                          <div class="team_name">`+response['matches'][i]['team-1']+`</div>
                        </div>
                        <div class="vs">VS</div>
                        <div class="card_image">
                          <img src="css/logo/`+teamTwoLogo+`.png" alt="team_Logo" onerror="this.onerror=null; this.src='css/logo/default.png'"  />
                          <div class="team_name">`+response['matches'][i]['team-2']+`</div>
                        </div>
                        <div class="winner">
                          <span>`+response['matches'][i]['type']+`</span><br/>
                          <span onclick="MatchDetail('`+response['matches'][i]['unique_id']+`')" class="btn btn-primary">Match Details</span>
                        </div>

                      </div>
                    </div>
                    `);

               // To display only three live matches card we use following if statement
                if(count > 2)
                {
                  break;
                }

              }

            }

            if(count == 0)
            {
              $('#live').append(`<h4 style="text-align:center;width:100%">No Live Matches</h4>`);
              $('#live').next('.btn-info').on('click', function(e){
                e.preventDefault();
              });
            }

          }); // ajax request ends here




});// document ready function closure end


// Function To open single match details
function MatchDetail(pid){
  var win = window.open("match_details.php?q=" + pid, '_blank');
  win.focus();
}
