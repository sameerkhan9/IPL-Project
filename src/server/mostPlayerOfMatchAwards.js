const fs = require('fs');

function mostPlayerOfMatchAwardsPerSeason(matches) {

    const playerOfMatchAwardsPerSeason = {};

    for (let index = 0; index < matches.length; index++) {

        if (playerOfMatchAwardsPerSeason[matches[index]["season"]] == undefined) {

            playerOfMatchAwardsPerSeason[matches[index]["season"]] = {};

            playerOfMatchAwardsPerSeason[matches[index]["season"]][matches[index]["player_of_match"]] = 1;

        }
        else if (playerOfMatchAwardsPerSeason[matches[index]["season"]][matches[index]["player_of_match"]] == undefined) {
            playerOfMatchAwardsPerSeason[matches[index]["season"]][matches[index]["player_of_match"]] = 1;
        }
        else {
            playerOfMatchAwardsPerSeason[matches[index]["season"]][matches[index]["player_of_match"]] += 1;
        }

    }

    const mostPlayerOfMatchAwardsPerSeason = {};

    for (const season in playerOfMatchAwardsPerSeason) {

        const playersEachSeason = Object.entries(playerOfMatchAwardsPerSeason[season]);


        function compare(a, b) {

            return b[1] - a[1];
        }

        playersEachSeason.sort(compare);

        let playerHavingSameNoOfAwards;

        for (let index = 1; index < playersEachSeason.length; index++) {

            if (playersEachSeason[index][1] < playersEachSeason[index - 1][1]) {

                playerHavingSameNoOfAwards = index;
                break;
            }
        }

        mostPlayerOfMatchAwardsPerSeason[season] = {};

        for (let index = 0; index < playerHavingSameNoOfAwards; index++) {

            mostPlayerOfMatchAwardsPerSeason[season][playersEachSeason[index][0]] =
                playersEachSeason[index][1];


        }


    }



    fs.writeFile('./src/public/output/mostPlayerOfMatchAwardsPerSeason.json', JSON.stringify(mostPlayerOfMatchAwardsPerSeason, null, 4), 'utf-8', (error) => {
        if (error) {
            console.log(error);
        }
    });

}


module.exports = mostPlayerOfMatchAwardsPerSeason;
