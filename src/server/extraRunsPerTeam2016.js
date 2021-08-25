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

    const extraRuns = {};

    for (let i = 0; i < deliveries.length; i++) {
        if (idsYear2016.has(deliveries[i]["match_id"])) {

            if (extraRuns[deliveries[i]["bowling_team"]] == undefined) {
                extraRuns[deliveries[i]["bowling_team"]] = deliveries[i]["extra_runs"];

            }
            else {

                extraRuns[deliveries[i]["bowling_team"]] = parseInt(deliveries[i]["extra_runs"]) + parseInt(extraRuns[deliveries[i]["bowling_team"]]);

            }

        }
    }

    fs.writeFileSync('./src/public/output/extraRunsPerTeam2016.json', JSON.stringify(extraRuns,null,4), 'utf-8', (err)=> {
        if(err) {
            console.log(err);
        }
    });

}

module.exports = extraRunsPerTeam2016;