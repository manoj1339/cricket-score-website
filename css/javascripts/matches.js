$(document).ready(function(){

      /* nav bar hide and show on mobile*/
      $("#toggleBtn").click(function() {
        $("#navBar").toggleClass("current");
      });
      /* nav bar hide and show ends here */

      // Ajax call to filter results from input Fields
      $('#match_search').on('change', function(){

        var abc = $(this).val();
        var words = abc.replace(/[^a-z\s]/gi, '');
        words = words.replace(" vs ", ' ');
        words = words.replace(" v ", ' ');
        words = words.replace(" versus ", ' ');
        var value = words.toLowerCase();
      
        $("#results").empty();

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
              var team1 = response['matches'][i]['team-1'];
              var team2 = response['matches'][i]['team-2'];

              var all = team1.toLowerCase() + " " + team2.toLowerCase() +" "+ team2.toLowerCase() + " " + team1.toLowerCase();
              var pos = all.indexOf(value);

              if(response['matches'][i]['matchStarted'] == false)
              {
                if(pos > -1)
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
                          <img src="css/logo/`+teamOneLogo+`.png" alt="team_logo" onerror="this.onerror=null; this.src='css/logo/default.png'"  />
                          <div class="team_name">`+response['matches'][i]['team-1']+`</div>
                        </div>
                        <div class="vs">VS</div>
                        <div class="card_image">
                          <img src="css/logo/`+teamTwoLogo+`.png" alt="team_Logo" onerror="this.onerror=null; this.src='css/logo/default.png'"  />
                          <div class="team_name">`+response['matches'][i]['team-2']+`</div>
                        </div>
                        <div class="winner">
                          <span>`+response['matches'][i]['type']+`</span><br/>
                          <i class="fa fa-calendar fa-1x" aria-hidden="true"></i>  <span class="text-warning">`+date+`</span><br/>
                          <span data-id="`+response['matches'][i]['unique_id']+`"><i class="fa fa-clock-o fa-1x" aria-hidden="true"></i>  <span class="text-success">`+time+`</span></span>
                        </div>

                      </div>
                    </div>
                    `);
                }

              }
              if(response['matches'][i]['matchStarted'] == true)
              {
                  if(pos > -1)
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
                          <div class="winner"><i class="fa fa-trophy fa-1x" aria-hidden="true"></i> <span class="text-warning">`+response['matches'][i]['winner_team']+`</span><br/>
                            <span>`+response['matches'][i]['type']+`</span><br/>
                            <span onclick="MatchDetail('`+response['matches'][i]['unique_id']+`')" class="btn btn-primary">Match Details</span>
                          </div>

                        </div>
                      </div>
                      `);
                  }
              }

            }

              $("#noOfResults").html(count);
          }//success function ends here



        });// ajax end

      });// keyup input event ends here

}); // document.ready ends here

// Function To open single match details
function MatchDetail(pid){
  var win = window.open("match_details.php?q=" + pid, '_blank');
  win.focus();
}
