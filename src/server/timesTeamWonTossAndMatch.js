const fs = require('fs');

function timesTeamWonTossAndMatch(matches) {

    const timesTeamWonTossAndMatch = {};

    for (let index = 0; index < matches.length; index++) {

        if (matches[index]["toss_winner"] === matches[index]["winner"]) {

            if (timesTeamWonTossAndMatch[matches[index]["winner"]] == undefined) {

                timesTeamWonTossAndMatch[matches[index]["winner"]] = 1

            }
            else {

                timesTeamWonTossAndMatch[matches[index]["winner"]] += 1

            }

        }

        fs.writeFile('./src/public/output/timesTeamWonTossAndMatch.json', JSON.stringify(timesTeamWonTossAndMatch, null, 4), 'utf-8', (error) => {
            if (error) {
                console.log(error);
            }
        });

    }
}

module.exports = timesTeamWonTossAndMatch;
