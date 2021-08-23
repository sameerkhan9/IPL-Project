const fs = require('fs');
function extraRunsPerTeam2016(matches, deliveries) {

    function match_id2016() {
        const idsYear2016 = new Set();

        for (let i = 0; i < matches.length; i++) {


            if (matches[i].season == '2016') {
                idsYear2016.add(matches[i]["id"]);
            }
        }
        return idsYear2016;
    }
    const idsYear2016 = match_id2016();

    const result = {};
    for (let i = 0; i < deliveries.length; i++) {
        if (idsYear2016.has(deliveries[i]["match_id"])) {

            if (result[deliveries[i]["bowling_team"]] == undefined) {
                result[deliveries[i]["bowling_team"]] = deliveries[i]["extra_runs"];

            }
            else {

                result[deliveries[i]["bowling_team"]] = parseInt(deliveries[i]["extra_runs"]) + parseInt(result[deliveries[i]["bowling_team"]]);

            }

        }
    }
    fs.writeFileSync('./src/public/output/extraRunsPerTeam2016.json', JSON.stringify(result,null,4), 'utf-8', (err)=> {
        if(err) {
            console.log(err);
        }
    });

}

module.exports = extraRunsPerTeam2016;