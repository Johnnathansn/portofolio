

$(document).ready( function() {


    // form submit event
    $("#form1").on("submit", (e) =>
    {
        e.preventDefault();

        $.ajax({
            type : 'POST',
            url : "api/form.php",
            data : $("#form1").serialize(), //form fields
            dataType : 'JSON',
            encode : true,
            success: function (response, status, xhr) {
                console.log(response);
            },
            error: function (xhr, status, error) {
                console.log(xhr.responseText);
            }
        });


    });

    // organize and calculate information collected
    function statistic( objArray ) {

        let sums = {};
        let total = [];

        sums["c"] = rank(objArray,"c");
        sums["b"] = rank(objArray,"b");

        $.each(sums ,(index, value)=>{
            let question = index;
            let tempArr = [];

            // sum count of occurences of answers in a total per question
            $.each(value, (index, value)=> {
                tempArr["total"] = (tempArr["total"] || 0) + value.count;
                tempArr[value.value] = value.count;
            })

            for (var property in tempArr) {
                if (tempArr.hasOwnProperty(property)) {
                    if (property != "total") {
                        tempArr[property+"P"] = (tempArr[property] / tempArr["total"]) *360;
                    }
                }
            }
            total[question] = tempArr;
        });

        return total;

    }

    // search and find occurences of a "prop"
    function rank(items, prop) {

        var results = {};

        for(var i=0,len=items.length;i<len;i++) {
            var value = items[i][prop];
            var count = (results[value] || 0) + 1;
            results[value] = count;
        }

        var ranked = [];
        for(var key in results) {
            if(results.hasOwnProperty(key)) {
              ranked.push({value:key, count:results[key]});
            }
        }
        //sort by count descending
        return ranked.sort(function(a, b) { return b.count - a.count; });
    }



    // load chart function
    let loadPieChart = function()  {

        //update chart to the new values of votes
        function updateChart( arrayValues ) {
            let angles = [];

            for(var key in arrayValues) {
                let arr1 = arrayValues[key];
                angles[key] = [];
                for(var x in arr1) {

                    if(x.slice(-1) == "P" ) {
                        angles[key][x] = arr1[x];
                    } else if (x != "total") {
                        angles[key][x] = x;
                    }
                }
            }

            let newChartAngles = [];
            let labels = [];

            for(var key in angles) {
                let x = angles[key];

                //get angles from each question
                let sum = 0;
                let tempArr = [];
                let count = 0;
                labels[key] = [];

                for(var index in x){

                    if(!(index.slice(-1) == "P") ) {
                        labels[key].push(index);
                    } else if(sum < 360 && count < 3) {
                        sum += x[index];
                        tempArr.push(x[index]);
                        count++;
                    }
                }
                newChartAngles.push(tempArr);

            }

            // refresh canvas
            piechart(
                "piechart1",
                ["red", "yellow", "green"],
                newChartAngles[0],
                labels["c"]
            );

            piechart(
                "piechart2",
                ["red", "yellow", "green"],
                newChartAngles[1],
                labels["b"]
            );
        }

        // timer for updating the chart
        (function worker() {
            $.ajax({
                url: "api/form.php?r=1",
                //data: "".
                success: function(data) {

                    let stats = statistic(JSON.parse((data || 0)));
                    updateChart(stats);
                },
                complete: function() {
                    // Schedule the next request when the current one's complete
                    setTimeout(worker, 3000);
                }
            });
        })();

    };
    loadJS("lib/piechart.js", loadPieChart, document.head);

    // finished loading, present view
    $("body").css("visibility", "visible");



});
