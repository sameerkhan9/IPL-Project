const fs = require('fs');

function matchesWonPerTeamPerYear(matches) {
    const result = {};
    for (let i = 0; i < matches.length; i++) {

        if (matches[i].result == 'normal') {

            if (result[matches[i].winner] == undefined) {

                result[matches[i].winner] = {};
                result[matches[i].winner][matches[i].season] = 1;

            }
            else if (result[matches[i].winner][matches[i].season] == undefined) {

                result[matches[i].winner][matches[i].season] = 1;

            }
            else {
                result[matches[i].winner][matches[i].season] += 1;
            }

        }

    }
    
    fs.writeFile('./src/public/output/matchesWonPerTeamPerYear.json', JSON.stringify(result, null, 4), 'utf-8', (err) => {
        if (err) {
            console.log(err);
        }
    });
}

module.exports = matchesWonPerTeamPerYear;