const csvToJson = require('csvtojson');
const fs = require('fs');
const ipl = require('./ipl.js');

csvToJson().fromFile('./src/data/matches.csv')
    .then(matches => {

            csvToJson().fromFile('./src/data/deliveries.csv')
                .then(deliveries => {
                
                        iplFunctions(matches, deliveries);
                   
                    });


    });

function iplFunctions(matches, deliveries) {

    ipl.matchesPerYear(matches);
    ipl.matchesWonPerTeamPerYear(matches);
    ipl.extraRunsPerTeam2016(matches, deliveries);
    ipl.top10EconomicalBowlers(matches, deliveries);
    ipl.timesTeamWonTossAndMatch(matches);
    ipl.mostPlayerOfMatchAwardsPerSeason(matches);
    ipl.bestBowlerInSuperOvers(deliveries);

}




