function map(){
    Highcharts.getJSON("/raw_data_grouped", function (data) {
        console.log(data);
        Highcharts.mapChart('map', {
            chart: {
                borderWidth: 1,
                map: 'custom/world'
            },
            colors: [
                'rgba(255,0,0,0.5)',
                'rgba(255,128,0,0.5)',
                'rgba(255,255,0,0.5)',
                'rgba(0,255,0,0.5)',
                'rgba(0,0,255,0.5)'],
            title: {
                text: 'World Distilleries',
                style: {
                    color: 'black',
                    fontWeight: 'bold'
                }
            },
            subtitle: {
                text: 'Mapping the number of distilleries per country'
            },
            legend: {
                enabled: true,
                title: {
                    text: 'Number of Distilleries'
                },
                align: 'middle',
                verticalAlign: 'top',
                floating: true,
                layout: 'vertical',
                valueDecimals: 0
            },
            colorAxis: {
                dataClasses: [{
                    to: 20
                } , {
                    from: 20,
                    to: 40
                } , {
                    from: 40,
                    to: 60
                } , {
                    from: 60,
                    to: 80
                } , {
                    from: 80              
                }]
            },
            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },
            series: [{
                name: 'Countries',
                color: '#E0E0E0',
                enableMouseTracking: false
            }, {
                type: 'mapbubble',
                name: '<b>No. of Distilleries</b>',
                joinBy: ['name', 'Country'],
                data: data,
                minSize: 4,
                maxSize: '12%',
                tooltip: {
                    pointFormat: '<b>{point.Country}: </b> {point.z}'
                }
            }]
        });
    }); 
}
map();