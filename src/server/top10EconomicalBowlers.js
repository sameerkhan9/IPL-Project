const fs = require('fs');

function top10EconomicalBowlers(matches, deliveries) {

    function matchId2015() {

        const idsYear2015 = new Set();

        for (let index = 0; index < matches.length; index++) {


            if (matches[index].season == '2015') {
                idsYear2015.add(matches[index]["id"]);
            }

        }
        return idsYear2015;
    }
    const idsYear2015 = matchId2015();

    const bowlersStats = {};

    for (let index = 0; index < deliveries.length; index++) {

        if (idsYear2015.has(deliveries[index]["match_id"])) {

            if (bowlersStats[deliveries[index].bowler] == undefined) {

                bowlersStats[deliveries[index].bowler] = {};

                if (deliveries[index]["noball_runs"] == "0" && deliveries[index]["noball_runs"] == "0") {

                    bowlersStats[deliveries[index].bowler]["bowls"] = 1;

                }
                bowlersStats[deliveries[index].bowler]["runs"] = parseInt(deliveries[index]["wide_runs"]) + parseInt(deliveries[index]["noball_runs"]) + parseInt(deliveries[index]["batsman_runs"]);


            }
            else {

                if (deliveries[index]["noball_runs"] == "0" && deliveries[index]["noball_runs"] == "0") {
                    bowlersStats[deliveries[index].bowler]["bowls"] += 1;
                }
                bowlersStats[deliveries[index].bowler]["runs"] += parseInt(deliveries[index]["wide_runs"]) + parseInt(deliveries[index]["noball_runs"]) + parseInt(deliveries[index]["batsman_runs"]);

            }

        }
    }


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



    fs.writeFile('./src/public/output/top10EconomicalBowlers.json', JSON.stringify(top10Bowlers, null, 4), 'utf-8', (error) => {
        if (error) {
            console.log(error);
        }
    });

}

module.exports = top10EconomicalBowlers;

