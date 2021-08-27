const fs = require('fs');

function strikeRatePerSeason(matches, deliveries) {

    const idAndSesaon = {};

    for (let index = 0; index < matches.length; index++) {

        idAndSesaon[matches[index]["id"]] = matches[index]["season"];
    }

    const strikeRateOfBatsmen = {};

    for (let index = 0; index < deliveries.length; index++) {

        let season = idAndSesaon[deliveries[index]["match_id"]];

        if (strikeRateOfBatsmen[deliveries[index]["batsman"]] == undefined) {

            strikeRateOfBatsmen[deliveries[index]["batsman"]] = {};
            strikeRateOfBatsmen[deliveries[index]["batsman"]][season] = {};

            strikeRateOfBatsmen[deliveries[index]["batsman"]][season]['runs'] = parseInt(deliveries[index]["batsman_runs"]);

            if (deliveries[index]["wide_runs"] == "0" && deliveries[index]["wide_runs"] == "0") {

                strikeRateOfBatsmen[deliveries[index]["batsman"]][season]['balls'] = 1;
            }
            else {

                strikeRateOfBatsmen[deliveries[index]["batsman"]][season]['balls'] = 0;
            }

        }
        else if (strikeRateOfBatsmen[deliveries[index]["batsman"]][season] == undefined) {

            strikeRateOfBatsmen[deliveries[index]["batsman"]][season] = {};

            strikeRateOfBatsmen[deliveries[index]["batsman"]][season]['runs'] = parseInt(deliveries[index]["batsman_runs"]);

            if (deliveries[index]["wide_runs"] == "0" && deliveries[index]["wide_runs"] == "0") {

                strikeRateOfBatsmen[deliveries[index]["batsman"]][season]['balls'] = 1;
            }
            else {

                strikeRateOfBatsmen[deliveries[index]["batsman"]][season]['balls'] = 0;
            }

        }
        else {

            strikeRateOfBatsmen[deliveries[index]["batsman"]][season]['runs'] += parseInt(deliveries[index]["batsman_runs"]);

            if (deliveries[index]["wide_runs"] == "0" && deliveries[index]["wide_runs"] == "0") {

                strikeRateOfBatsmen[deliveries[index]["batsman"]][season]['balls'] += 1;
            }

        }
    }


    for (const batsman in strikeRateOfBatsmen) {

        let batsmanInfo = strikeRateOfBatsmen[batsman];


        for (const year in batsmanInfo) {

            strikeRateOfBatsmen[batsman][year]["strike rate"] = (strikeRateOfBatsmen[batsman][year]['runs'] / strikeRateOfBatsmen[batsman][year]['balls'] * 100).toPrecision(3);
            strikeRateOfBatsmen[batsman][year] = strikeRateOfBatsmen[batsman][year]["strike rate"];

        }


    }

    fs.writeFile('./src/public/output/strikeRatePerSeason.json', JSON.stringify(strikeRateOfBatsmen, null, 4), 'utf-8', (error) => {
        if (error) {
            console.log(error);
        }
    });



}

module.exports = strikeRatePerSeason;