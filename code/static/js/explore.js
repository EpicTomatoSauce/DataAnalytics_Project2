function map(){
    Highcharts.getJSON("/raw_data_grouped", function (data) {
        console.log(data);
        Highcharts.mapChart('map', {
            chart: {
                borderWidth: 1,
                map: 'custom/world'
            },
​
            title: {
                text: 'World Distilleries'
            },
​
            // subtitle: {
            //     text: 'subtitle test'
            // },
​
            legend: {
                enabled: false
            },
​
            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },
​
            series: [{
                name: 'Countries',
                color: '#E0E0E0',
                enableMouseTracking: false
            }, {
                type: 'mapbubble',
                name: 'No. of Distilleries',
                joinBy: ['name', 'Country'],
                data: data,
                minSize: 4,
                maxSize: '12%',
                tooltip: {
                    pointFormat: '{point.Country}: {point.z}'
                }
            }]
        });
    }); 
}
​
map();