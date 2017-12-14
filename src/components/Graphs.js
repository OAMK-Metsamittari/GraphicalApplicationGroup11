import React, { Component } from 'react';
const ReactHighcharts = require('react-highcharts');
const HighchartsMore = require('highcharts-more')(ReactHighcharts.Highcharts);

class Graphs extends Component {

    render () {

        console.log("Graphs updated");

        let processedTodoTypes = [];
        
        this.props.regionsLevels.forEach(element => {
            let todoIndex = processedTodoTypes.findIndex(todoType => todoType.name === element.type);
            if(todoIndex === -1)
            {
                processedTodoTypes.push({
                    name: element.type,
                    y: 1
                });
            }
            else
            {
                processedTodoTypes[todoIndex].y++;
            }
        });
        console.log("processedTodoTypes: " + processedTodoTypes);

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
                    data: processedTodoTypes // data: processedTodoTypes // [8, 7, 6, 5, 4, 3, 2, 1]
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
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec'
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
                series: [{
                    name: 'Tokyo',
                    data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
            
                }, {
                    name: 'New York',
                    data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
            
                }, {
                    name: 'London',
                    data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
            
                }, {
                    name: 'Berlin',
                    data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
            
                }]
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