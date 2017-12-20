import React, { Component } from 'react';
const ReactHighcharts = require('react-highcharts');
const HighchartsMore = require('highcharts-more')(ReactHighcharts.Highcharts);

class Graphs extends Component {

    render () {

        console.log("Graphs updated");

        var printedData = []

        this.props.valuesA.forEach(function(element) {
            printedData.push(element)
        });

        console.log("printedData: " + printedData);
        console.log("valuesA: " + [this.props.valuesA]);

        if (this.props.graph === 1) //chart
        {
            const config = {
                chart: {
                    polar: true
                },
            
                title: {
                    text: 'Pohjois-Pohjanmaa 2026 (- 2030)'
                },
            
                pane: {
                    startAngle: 0,
                    endAngle: 360
                },
            
                xAxis: {
                    tickInterval: 45,
                    min: 0,
                    max: 360,
                    labels: {
                        formatter: function () {
                            return this.value + '°';
                        }
                    }
                },
            
                yAxis: {
                    min: 0
                },
            
                plotOptions: {
                    series: {
                        pointStart: 0,
                        pointInterval: 45
                    },
                    column: {
                        pointPadding: 0,
                        groupPadding: 0
                    }
                },
            
                series: [{
                    type: 'column',
                    name: 'Column',
                    data: printedData // data: processedTodoTypes // [8, 7, 6, 5, 4, 3, 2, 1]
                }]
            };

            return (
                <div>
                    <ReactHighcharts config = {config}></ReactHighcharts>
                </div>
            )
        }
        if (this.props.graph === 2)//column
        {
            const config = {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Monthly Average Rainfall'
                },
                subtitle: {
                    text: 'Source: WorldClimate.com'
                },
                xAxis: {
                    categories: [
                        'id',
                        'Feb'                   
                    ],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Rainfall (mm)'
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
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
                series: []
            };

            return (
                <div>
                    <ReactHighcharts config = {config}></ReactHighcharts>
                </div>
            )
        }
        if (this.props.graph === 3)//table
        {
            const config = {
                
            };

            return (
                <div>
                    <ReactHighcharts config = {config}></ReactHighcharts>
                </div>
            )
        }
    }
}

export default Graphs