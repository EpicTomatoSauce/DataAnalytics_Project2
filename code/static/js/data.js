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
