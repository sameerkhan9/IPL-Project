const fs = require('fs');

function matchesWonPerTeamPerYear(matches) {
    const matchesWon = {};
    
    for (let i = 0; i < matches.length; i++) {

        if (matches[i].result == 'normal') {

            if (matchesWon[matches[i].winner] == undefined) {

                matchesWon[matches[i].winner] = {};
                matchesWon[matches[i].winner][matches[i].season] = 1;

            }
            else if (matchesWon[matches[i].winner][matches[i].season] == undefined) {

                matchesWon[matches[i].winner][matches[i].season] = 1;

            }
            else {
                matchesWon[matches[i].winner][matches[i].season] += 1;
            }

        }

    }
    
    fs.writeFile('./src/public/output/matchesWonPerTeamPerYear.json', JSON.stringify(matchesWon, null, 4), 'utf-8', (err) => {
        if (err) {
            console.log(err);
        }
    });
}

module.exports = matchesWonPerTeamPerYear;