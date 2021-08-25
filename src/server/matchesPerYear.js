const fs = require('fs');

function matchesPerYear(matches) {

    const matchesPerYear = {};

    for (let index = 0; index < matches.length; index++) {

        if (matchesPerYear[matches[index].season] == undefined) {
            matchesPerYear[matches[index].season] = 1;
        }
        else {
            matchesPerYear[matches[index].season] += 1;
        }

    }

       fs.writeFile('./src/public/output/matchesPerYear.json', JSON.stringify(matchesPerYear, null, 4), 'utf-8', (error) => {
        if (error) {
            console.log(error);
        }
    });
}

module.exports = matchesPerYear;