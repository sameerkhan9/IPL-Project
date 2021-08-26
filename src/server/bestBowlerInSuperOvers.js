const fs = require('fs');

function bestBowlerInSuperOvers(deliveries) {

    let bowlersStats = {};

    for (let index = 0; index < deliveries.length; index++) {

        if (deliveries[index]['is_super_over'] == '1') {

            if (bowlersStats[deliveries[index]['bowler']] == undefined) {

                bowlersStats[deliveries[index]['bowler']] = { balls: 1, runs: parseInt(deliveries[index]['total_runs']) }


            } else {

                bowlersStats[deliveries[index]['bowler']]["balls"] += 1;
                bowlersStats[deliveries[index]['bowler']]["runs"] += parseInt(deliveries[index]['total_runs']);

            }
        }
    }

    let economyOfEachBowler = {};

    for (const bowler in bowlersStats) {

        economyOfEachBowler[bowler] = (bowlersStats[bowler]["runs"] * 6 / bowlersStats[bowler]["balls"]);

    }

    const economyOfEachBowlerEntries = Object.entries(economyOfEachBowler);


    function compare(a, b) {

        return a[1] - b[1];
    }

    economyOfEachBowlerEntries.sort(compare);



    fs.writeFile('./src/public/output/bestBowlerInSuperOvers.json', JSON.stringify(economyOfEachBowlerEntries[0], null, 4), 'utf-8', (error) => {
        if (error) {
            console.log(error);
        }
    })

}



module.exports = bestBowlerInSuperOvers;