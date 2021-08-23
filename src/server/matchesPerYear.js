const fs = require('fs');

function matchesPerYear(matches) {
    const noOfMatches = {};
    for (let i = 0; i < matches.length; i++) {
        if (noOfMatches[matches[i].season] == undefined) {
            noOfMatches[matches[i].season] = 1;
        }
        else {
            noOfMatches[matches[i].season] += 1;
        }
    }

    fs.writeFile('./src/public/output/matchesPerYear.json', JSON.stringify(noOfMatches, null, 4), 'utf-8', (err) => {
        if (err) {
            console.log(err);
        }
    });
}

module.exports = matchesPerYear;