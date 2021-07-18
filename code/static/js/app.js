let _ = window._;
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
    // d3.select #selDataset in HTML then iterate through data and append Country to the dropdown.
    var dropdown = d3.select('#selDataset');
    d3.json('/raw_data').then((data) => {
        data.forEach((country) => {
            dropdown.append('option').text(country).property('value', country.Country);
            // console.log(country.Country);
        })
        // For the initialisation demographic table, use index 11 which is Australia. Not too few / many data points.
        var sampleCountry = data[11].Country;
        console.log(sampleCountry);
        buildList(sampleCountry);
    })
}

function buildList(sampleCountry) {
    d3.json('/raw_data').then((data) => {
        // empty array to store each dictionary which is matched by the if statement below
        var list_distilleries = [];
        data.forEach((distillery) => {
            if (distillery.Country === sampleCountry) {
                // append to array
                list_distilleries.push(distillery);
                }
        })
        // successfully appended each dictionary to the list_distilleries
        console.log(list_distilleries);
        getData(list_distilleries);
    })
}

function getData(list_distilleries) {
    // create empty arrays to store the result of each component of the dictionary for the purpose of plots
    var dist_name = [];
    var dist_avg_rating = [];
    var dist_votes = [];
    var dist_whiskies = [];

    list_distilleries.forEach((distillery) => {
        dist_name.push(distillery.Name);
        dist_avg_rating.push(distillery.avg_rating);
        dist_votes.push(distillery.num_votes);
        dist_whiskies.push(distillery.num_whiskies);
    })
    // determine other characteristics of data
    // number of distilleries:
    dist_num = dist_name.length;
    // Investigate use of Lodash in conjunction to require.js
    // const _ = requirejs("lodash")
    var sum_votes = _.sum(dist_votes);
    var sum_whiskies = _.sum(dist_whiskies);

    console.log(dist_name);
    console.log(dist_avg_rating);
    console.log(dist_votes);
    console.log(dist_whiskies);
    console.log(dist_num);
    console.log(sum_votes);
    console.log(sum_whiskies);

    results = {
        distillery_name: dist_name,
        number_distilleries: dist_num,
        total_votes: sum_votes,
        number_whiskies: sum_whiskies,
        distillery_avg_rating: dist_avg_rating,
        distillery_votes: dist_votes,
        distillery_num_whiskies: dist_whiskies
    }

    // charting elements
    // barChart(results);
    // bubbleChart(results);
    // demographicTable(results);
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



