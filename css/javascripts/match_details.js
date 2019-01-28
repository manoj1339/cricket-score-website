$(document).ready(function(){
  /* nav bar hide and show on mobile*/
  $("#toggleBtn").click(function() {
    $("#navBar").toggleClass("current");
  });
  /* nav bar hide and show ends here */
  getData();
});

function getData()
{
  var match = $('#wrapper').data('match');

  $.ajax({
    url: 'http://cricapi.com/api/cricketScore?apikey=lUesDuSn2GRDcyAPuEvGL47zTd63&unique_id='+ match,
    method: 'get',
    success: function(data)
    {
      var teamOne = data['team-1'];
      var teamTwo = data['team-2'];

      var teamOneLogo = teamOne.replace(/\s/g, '').toLowerCase();
      var teamTwoLogo = teamTwo.replace(/\s/g, '').toLowerCase();

      $('#match-header').html(`
        <div class="match-info">
          <div>
            <img src="css/logo/`+teamOneLogo+`.png" alt="mi" />
            <span>`+data['team-1']+`</span>
          </div>
          <h6>Vs</h6>
          <div>
            <img src="css/logo/`+teamTwoLogo+`.png" alt="csk" />
            <span>`+data['team-2']+`</span>
          </div>
        </div>
        `);
    }
  });// first ajax end

  $.ajax({
    url: 'http://cricapi.com/api/fantasySummary?apikey=lUesDuSn2GRDcyAPuEvGL47zTd63&unique_id='+ match,
    method: 'get',
    success: function(response)
    {

      $('#match-header').append(`
        <h5><span class="text-warning">`+response['type']+`</span></h5>
        <h5>Toss : <span class="text-success">`+response['data']['toss_winner_team']+`</span></h5>
        <h5><i class="fa fa-trophy fa-1x" aria-hidden="true"></i>  <span class="text-info">`+response['data']['winner_team']+`</span></h5>

        `);


      var output = ``;
      $.each(response['data']['batting'], function(index, innings){
        //batting first

        // Each function only to get overs
        var overs = 0;
        $.each(response['data']['bowling'][index]['scores'], function(key, value){
          overs += parseFloat(value['O']);
        });


        output += `<div class="table-responsive"><table class="table table-striped" style="margin-top:50px">`;

        output += `
                  <thead class="battingHead">
                    <tr>
                      <th colspan=6 style="background:#c9a819">` +response['data']['batting'][index]['title']+ `</th>
                    </tr>
                    <tr>
                      <th style="width:40%">Batsman</th>
                      <th>R</th>
                      <th>B</th>
                      <th>4s</th>
                      <th>6s</th>
                      <th>SR</th>
                    </tr>
                  </thead>
                  `;

        var totalScore = 0;
        var wickets = 0;

        $.each(response['data']['batting'][index]['scores'], function(key, value){


          if(value['dismissal'] != 'not out')
          {
            wickets += 1;
          }

          if(value['batsman'] == 'Extras')
          {
            var parts = value['detail'].split(" ");
            totalScore = totalScore + parseInt(parts[0]);

            output +=`
              <tr>
                <td colspan=1>`+value['batsman']+`</td>
                <td colspan=5>`+value['detail']+`</td>
              </tr>`;
          }
          else
          {
            totalScore = totalScore + value['R'];
            output += `
              <tr>
                <td style="width:40%"><a href="player.php?q=` +value['pid']+ `">` +value['batsman']+ `</a><br/>
                   <span style="font-size:12px;font-style:italic;">`+value['dismissal-info']+`</span>
                </td>
                <td>`+value['R']+`</td>
                <td>`+value['B']+`</td>
                <td>`+value['4s']+`</td>
                <td>`+value['6s']+`</td>
                <td>`+value['SR']+`</td>
              </tr>
              `;
          }

        });//each function ends



        output += `
          <tr>
            <td colspan=1>Total</td>
            <td colspan=5>` +totalScore+ ` / ` +(wickets-1)+ ` (`+overs+`)</td>
          </tr>`;

        output += `</table></div>`;


        //bowling first
        output += `<div class="table-responsive"><table class="table table-striped">

                   <thead class="bowlingHead">
                     <tr>
                       <th colspan=7 style="background:#0b0808">`+response['data']['bowling'][index]['title']+`</th>
                     </tr>
                     <tr>
                       <th style="width:60%">Bowler</th>
                       <th>O</th>
                       <th>M</th>
                       <th>R</th>
                       <th>W</th>
                       <th>Econ</th>
                     </tr>
                   </thead>`;

        $.each(response['data']['bowling'][index]['scores'], function(key, value){
          output += `
            <tr>
              <td style="width:60%"><a href="player.php?q=` +value['pid']+ `">` +value['bowler']+ `</a></td>
              <td>`+value['O']+`</td>
              <td>`+value['M']+`</td>
              <td>`+value['R']+`</td>
              <td>`+value['W']+`</td>
              <td>`+value['Econ']+`</td>
            </tr>
            `;

        });//each function ends

        output += `</table></div>`;

        $('#wrapper').html(output);

      });// looping for ODI and test match each end

    }//success ends

  });//ajax ends

}
