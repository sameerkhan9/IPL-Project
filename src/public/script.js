function extraRunsPerTeam() {
    fetch("./output/extraRunsPerTeam2016.json")
        .then(response => response.json())
        .then((data) => {
            const keys = Object.keys(data);
            const values = Object.values(data);

            Highcharts.chart('container1', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Extra Runs Per Team'
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    categories: [...keys],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Runs'
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:f} </b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: [{
                    name: '',
                    data: [...values]

                }
                ]
            });
        })
}
extraRunsPerTeam();

function timesTeamWonTossAndMatch() {
    fetch("./output/timesTeamWonTossAndMatch.json")
        .then(response => response.json())
        .then((data) => {
            const chartData = [];

            for (const key in data) {
                chartData.push([key, data[key]]);
            }
            const entries = Object.entries(data);

            Highcharts.chart('container2', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Times Team Won Toss And Match'
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    type: 'category',
                    labels: {
                        rotation: -45,
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Matches'
                    }
                },
                legend: {
                    enabled: false
                },
                tooltip: {
                    pointFormat: 'Matches : <b>{point.y:f} </b>'
                },
                series: [{
                    name: 'Mactches',
                    data: entries,
                    dataLabels: {
                        enabled: true,
                        rotation: -90,
                        color: '#FFFFFF',
                        align: 'right',
                        format: '{point.y:f}',
                        y: 10,
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                }]
            });
        })
}
timesTeamWonTossAndMatch();

function matchesPerYear() {
    fetch("./output/matchesPerYear.json")
        .then(response => response.json())
        .then((data) => {
            const dataArray = [];

            for (const key in data) {
                dataArray.push({
                    name: key,
                    y: data[key]
                });
            }

            Highcharts.chart('container3', {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                title: {
                    text: 'IPL Matches Per Year'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                accessibility: {
                    point: {
                        valueSuffix: '%'
                    }
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                        }
                    }
                },
                series: [{
                    name: 'Matches',
                    colorByPoint: true,
                    data: [...dataArray]
                }]
            });

        })
}
matchesPerYear();

function top10EconomicalBowlers() {
    fetch("./output/top10EconomicalBowlers.json")
        .then(response => response.json())
        .then((data) => {
            const keys = [];
            const values = [];

            for (let index = 0; index < data.length; index++) {
                keys.push(data[index][0]);
                values.push(parseFloat(data[index][1]));

            }
            Highcharts.chart('container4', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Top Economical Bowlers'
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    categories: [...keys],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Economy'
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: [{
                    name: '',
                    data: [...values]

                }
                ]
            });
        })
}
top10EconomicalBowlers();

function matchesWonPerTeamPerYear() {
    fetch("./output/matchesWonPerTeamPerYear.json")
        .then(response => response.json())
        .then((data) => {
            const keys = Object.keys(data);
            const values = Object.values(data);

            const years = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'];
            const dataArray = [];

            for (let yearsIndex = 0; yearsIndex < years.length; yearsIndex++) {
                const yearData = [];

                for (let valuesIndex = 0; valuesIndex < values.length; valuesIndex++) {
                    if (values[valuesIndex][years[yearsIndex]] == undefined) {
                        yearData.push(0);
                    }
                    else {
                        yearData.push(values[valuesIndex][years[yearsIndex]]);
                    }

                }
                dataArray.push({
                    name: years[yearsIndex],
                    data: [...yearData]

                });
            }

            Highcharts.chart('container5', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Matches Won Per Team Per Year'
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    categories: [...keys],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Matches'
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:f} </b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: [...dataArray]
            });



        })
}
matchesWonPerTeamPerYear();

function mostPlayerOfMatchAwardsPerSeason() {
    fetch("./output/mostPlayerOfMatchAwardsPerSeason.json")
        .then(response => response.json())
        .then((data) => {
            const keys = Object.keys(data);
            const values = Object.values(data);
            let namesOfPlayers = values.map(value => {
                return Object.keys(value);
            })
            namesOfPlayers = namesOfPlayers.flat();

            const series = [];

            for (const year in data) {
                const noOfAwardsPerYear = keys.map((value) => {
                    if (value == year) {
                        return (Object.values(data[year]));
                    }
                    else {
                        return 0;
                    }
                });

                series.push({
                    name: year,
                    data: noOfAwardsPerYear.flat()
                })

            }

            Highcharts.chart('container6', {
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'No of Player of Match Awards'
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    categories: [...namesOfPlayers],
                    title: {
                        text: null
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Awards',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                tooltip: {
                    valueSuffix: ' matches'
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: false
                        }
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    x: -40,
                    y: 80,
                    floating: true,
                    borderWidth: 1,
                    backgroundColor:
                        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
                    shadow: true
                },
                credits: {
                    enabled: false
                },
                series: [...series]
            })
        })
}
mostPlayerOfMatchAwardsPerSeason();

function bestBowlerInSuperOvers() {
    fetch("./output/bestBowlerInSuperOvers.json")
        .then(response => response.json())
        .then((data) => {
            Highcharts.chart('container7', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Best Bowler In Super Overs'
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    categories: [data[0]],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Runs'
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:f} </b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: [{
                    name: '',
                    data: [data[1]]

                }
                ]
            });
        })
}
bestBowlerInSuperOvers();

function timesPlayerDismissedByAnotherPlayer() {
    fetch("./output/timesPlayerDismissedByAnotherPlayer.json")
        .then(response => response.json())
        .then((data) => {
            const batsman = Object.keys(data);
            const values = Object.values(data);
            const bowler = Object.keys(values[0]);
            const timesDismissed = Object.values(values[0]);

            Highcharts.chart('container8', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Highest number of times a player dismissed by another player'
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    categories: [...batsman],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Dismissals'
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:f} times</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: [{
                    name: bowler,
                    data: [...timesDismissed]

                }]
            });
        })
}
timesPlayerDismissedByAnotherPlayer();