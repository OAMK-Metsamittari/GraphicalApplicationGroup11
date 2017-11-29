import React, { Component } from 'react';
const ReactHighcharts = require('react-highcharts');

class Graphs extends Component {
    render () {

        //Here we get the data for the tables, charts, whatever.
        let processedTodoTypes = [];
        this.props.items.forEach(element => {
            let todoIndex = processedTodoTypes.findIndex(todoType => todoType.name === element.type);
            if(todoIndex == -1)
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
                data: [8, 7, 6, 5, 4, 3, 2, 1] //data: processedTodoTypes
            }]
        };

        return (
            <div>
                <ReactHighcharts config = {config}></ReactHighcharts>
            </div>
        )
    }
}

export default Graphs