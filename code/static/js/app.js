// Create a function to build and generate plots
// ----------------------------------------------
function loadData() {
    d3.json("/raw_data_list").then((dataSet) => {
        // console.log(dataSet)

        $(document).ready(function() {
            $('#rawData').DataTable( {
                data: dataSet,
                columns: [
                    { title: "Index" },
                    { title: "Name" },
                    { title: "Country" },
                    { title: "No. Whiskies" },
                    { title: "No. Votes" },
                    { title: "Rating" }
                ]
            });
        });
})

}

loadData()

// create initialisation function
// function init() {
//     var dropdown = d3.select('#selDataset');
//     d3.json('/raw_data').then((data) => {
//         var countries = data.Country;
//         console.log(countries);
//         countries.forEach((country) => {
//             dropdown.append('option').text(country).property('value',country.Country);

//         var sampleCountry = data.Country[0];
//         // dataretrieval(sampleCountry);
//     })
//         });
// }

function init() {
    var dropdown = d3.select('#selDataset');
    d3.json('/raw_data').then((data) => {
        data.forEach((country) => {
            dropdown.append('option').text(country).property('value', country.Country);
            // console.log(country.Country);
        })
        var sampleCountry = data[11].Country;
        console.log(sampleCountry);
        buildList(sampleCountry);
    })
}

function buildList(sampleCountry) {
    d3.json('/raw_data').then((data) => {
        var list_distilleries = [];
        data.forEach((distillery) => {
            if (distillery.Country === sampleCountry) {
                list_distilleries.push(distillery);
                // var distillery_array = distillery
                // console.log(distillery_array);
                // var dist_names = distillery.Name;
                // var dist_avg_rating = distillery.avg_rating;
                // var dist_votes = distillery.num_votes;
                // var dist_whiskies = distillery.num_whiskies;
                // console.log(dist_names);
                // console.log(dist_avg_rating);
                // console.log(dist_votes);
                // console.log(dist_whiskies);
                }
        })
        // successfully appended each dictionary to the list_distilleries
        console.log(list_distilleries);
        getData(list_distilleries);
    })
}

function getData(list_distilleries) {
    var dist_name = [];
    var dist_avg_rating = [];
    var dist_votes = [];
    var dist_whiskies = [];
    // console.log(dist_name);
}

init();


// // bubble chart
// function bubblechart() {
//     d3.json("/raw_data").then((bubbleData) => {
//         bubbleData.forEach((country) => {
//             var dist_name = country.Name;
//             var dist_country = country.Country;
//             var dist_avg_rating = country.avg_rating;
//             var dist_num_votes = country.num_votes;
//             var dist_num_whiskies = country.num_whiskies;
//             // console.log(dist_name)
//             // console.log(dist_country)
//             // console.log(dist_avg_rating)
//             // console.log(dist_num_votes)
//             // console.log(dist_num_whiskies)
//         })
//     })
// }

// bubblechart();