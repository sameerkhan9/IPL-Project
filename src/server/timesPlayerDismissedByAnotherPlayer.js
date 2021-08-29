const fs = require('fs');

function timesPlayerDismissedByAnotherPlayer(deliveries) {
    const timesPlayerDismissedByAnotherPlayer = {};

    deliveries.forEach(delivery => {
        if (delivery["dismissal_kind"] != "" && delivery["dismissal_kind"] != "retired hurt" && delivery["dismissal_kind"] != "run out" && delivery["dismissal_kind"] != "obstructing the field") {
            if (timesPlayerDismissedByAnotherPlayer[delivery["player_dismissed"]] == undefined) {
                timesPlayerDismissedByAnotherPlayer[delivery["player_dismissed"]] = {};
                timesPlayerDismissedByAnotherPlayer[delivery["player_dismissed"]][delivery["bowler"]] = 1;
            }
            else if (timesPlayerDismissedByAnotherPlayer[delivery["player_dismissed"]][delivery["bowler"]] == undefined) {
                timesPlayerDismissedByAnotherPlayer[delivery["player_dismissed"]][delivery["bowler"]] = 1;
            }
            else {
                timesPlayerDismissedByAnotherPlayer[delivery["player_dismissed"]][delivery["bowler"]] += 1;
            }
        }
    });

    let maxDismissals = -1;
    let playerMaxDismissed = {};

    for (const batsman in timesPlayerDismissedByAnotherPlayer) {
        const batsmanInfo = timesPlayerDismissedByAnotherPlayer[batsman];
        for (const bowler in batsmanInfo) {
            if (batsmanInfo[bowler] > maxDismissals) {
                maxDismissals = batsmanInfo[bowler];

                playerMaxDismissed = {};
                playerMaxDismissed[batsman] = {};

                playerMaxDismissed[batsman][bowler] = batsmanInfo[bowler];
            }
        }
    }

    fs.writeFile('./src/public/output/timesPlayerDismissedByAnotherPlayer.json', JSON.stringify(playerMaxDismissed, null, 4), 'utf-8', (error) => {
        if (error) {
            console.log(error);
        }
    });

}


module.exports = timesPlayerDismissedByAnotherPlayer;
