# Angular Directives

This Repository contains Self written angular js directive to achive
common functional problems. 

## Entry Key Event

This directive listen to enter key press event and 
call angular function. 

### File Name 
enterKeyEvent.js

### Usage
```
<input type="text" enter-event="someFunction()"> 
```

## High Chart Directive

This directive will enable High Chart to your angular application.

### File Names
* highBarChart.js (Bar Charts)
* highPieCharts.js (Pie Charts)

### Usage
HTML
```
<high-bar-chart options="chartOptions">Yield Curve</high-bar-chart>
<high-pie-chart options="chartOptions">Yield Curve</high-bar-chart>
```
Angular JS
```
$rootScope.chartOptions = {
                chart: {
                    type: 'spline'
                },
                title: {
                    text: 'Yield Curve'
                },
                xAxis: {
                    categories: []
                },

                yAxis: {
                    title: {
                        text: 'Yield'
                    }
                },

                series: [{
                    name: "Yield",
                    data: []
                }]
            };
```
## Number Formatter

This Directive format the real time number according to Angular 'number' 
 Filter. 

### File Name 
numberFormatter.js

### Usage
```
<input ng-model="xxxx" type='text' numfmt/> 
```
## Short Number Formatter

There is a custom filter added to this Repo. Refer Filter description 
to find the usage. This directive add that perticular filter to text
input when typing. 

### File Name 
shortNumberFormatter.js

### Usage
```
<input ng-model="xxxx" type='text' shortfmt /> 
```

## Short Number Formatter Filter

This filter will convert the characters to long number. This will help
to add long numbers easily. This filter created to use with Short
Number Formatter. 
* 1k/1K -> 1000
* 1m/1M -> 1000000
* 1b/1B -> 1000000000
* 1t/1T -> 1000000000000

### File Name 
shortNumberInput.js

