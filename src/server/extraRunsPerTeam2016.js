const fs = require('fs');

function extraRunsPerTeam2016(matches, deliveries) {

    function matchId2016() {
        const idsYear2016 = new Set();

        for (let index = 0; index < matches.length; index++) {

            if (matches[index].season == '2016') {
                idsYear2016.add(matches[index]["id"]);
            }
        }
        return idsYear2016;
    }
    const idsYear2016 = matchId2016();

    const extraRuns = {};

    for (let index = 0; index < deliveries.length; index++) {

        if (idsYear2016.has(deliveries[index]["match_id"])) {

            if (extraRuns[deliveries[index]["bowling_team"]] == undefined) {
                extraRuns[deliveries[index]["bowling_team"]] = deliveries[index]["extra_runs"];

            }
            else {

                extraRuns[deliveries[index]["bowling_team"]] = parseInt(deliveries[index]["extra_runs"]) + parseInt(extraRuns[deliveries[index]["bowling_team"]]);

            }

        }
    }

    fs.writeFile('./src/public/output/extraRunsPerTeam2016.json', JSON.stringify(extraRuns, null, 4), 'utf-8', (error) => {
        if (error) {
            console.log(error);
        }
    });

}

module.exports = extraRunsPerTeam2016;