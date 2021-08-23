const fs = require('fs');

function top10EconomicalBowlers(matches, deliveries) {

    function match_id2015() {
        const idsYear2015 = new Set();

        for (let i = 0; i < matches.length; i++) {


            if (matches[i].season == '2015') {
                idsYear2015.add(matches[i]["id"]);
            }
        }
        return idsYear2015;
    }
    const idsYear2015 = match_id2015();

    const bowlersStats = {};

    for (let i = 0; i < deliveries.length; i++) {
        if (idsYear2015.has(deliveries[i]["match_id"])) {

            if (bowlersStats[deliveries[i].bowler] == undefined) {
                bowlersStats[deliveries[i].bowler] = {};
                if (deliveries[i]["noball_runs"] == "0" && deliveries[i]["noball_runs"] == "0") {
                    bowlersStats[deliveries[i].bowler]["bowls"] = 1;
                }
                bowlersStats[deliveries[i].bowler]["runs"] = parseInt(deliveries[i]["wide_runs"]) + parseInt(deliveries[i]["noball_runs"]) + parseInt(deliveries[i]["batsman_runs"]);

            }
            else {
                if (deliveries[i]["noball_runs"] == "0" && deliveries[i]["noball_runs"] == "0") {
                    bowlersStats[deliveries[i].bowler]["bowls"] += 1;
                }
                bowlersStats[deliveries[i].bowler]["runs"] += parseInt(deliveries[i]["wide_runs"]) + parseInt(deliveries[i]["noball_runs"]) + parseInt(deliveries[i]["batsman_runs"]);
            }

        }
    }

    // calculating economy of all the bowlers

    for (let bowler in bowlersStats) {

        bowlersStats[bowler]["economy"] = (bowlersStats[bowler]["runs"] * 6 / bowlersStats[bowler]["bowls"]).toPrecision(3);

    }

    const bowlersArray = (Object.entries(bowlersStats));

    function compare(a, b) {

        return a[1]["economy"] - b[1]["economy"];
    }

    bowlersArray.sort(compare);

    const top10Bowlers = [];

    for (let index = 0; index < 10; index++) {

        top10Bowlers.push([bowlersArray[index][0], bowlersArray[index][1]["economy"]]);
    }



    fs.writeFile('./src/public/output/top10EconomicalBowlers.json', JSON.stringify(top10Bowlers, null, 4), 'utf-8', (err) => {
        if (err) {
            console.log(err);
        }
    });

}

module.exports = top10EconomicalBowlers;

