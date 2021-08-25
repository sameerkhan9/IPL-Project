const fs = require('fs');

function matchesWonPerTeamPerYear(matches) {
    
    const matchesWonPerTeamPerYear = {};
    
    for (let index = 0; index < matches.length; index++) {

        if (matches[index].result == 'normal') {

            if (matchesWonPerTeamPerYear[matches[index].winner] == undefined) {

                matchesWonPerTeamPerYear[matches[index].winner] = {};
                matchesWonPerTeamPerYear[matches[index].winner][matches[index].season] = 1;

            }
            else if (matchesWonPerTeamPerYear[matches[index].winner][matches[index].season] == undefined) {

                matchesWonPerTeamPerYear[matches[index].winner][matches[index].season] = 1;

            }
            else {
                matchesWonPerTeamPerYear[matches[index].winner][matches[index].season] += 1;
            }

        }

    }
    
    fs.writeFile('./src/public/output/matchesWonPerTeamPerYearPerTeamPerYear.json', JSON.stringify(matchesWonPerTeamPerYear, null, 4), 'utf-8', (error) => {
        if (error) {
            console.log(error);
        }
    });
}

module.exports = matchesWonPerTeamPerYear;