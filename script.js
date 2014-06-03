$(function(){
	// Everytime a key is pressed in the #search input do the function
    $('#search').keyup(function(){

    	// searchTerm variable is stored as the value of #search
        var searchTerm = $(this).val();

        // Empty the #result ul as the search elements will differ
        $results = $('#results').empty();

        // Log the search term in the console
        console.log(searchTerm)

        // If the search term exists
        if (searchTerm>'') {

        	// Get the JSON file along with the search term, Call the function
        	// The data variable in the function is the echo json_encode($results) from the results.php
        	// This outputs and array which is outputted by the following JS
            $.getJSON('/results.php?','search='+searchTerm,function(data) {

            	console.log(data);

            	// Checking that there's an entry in an array, if there's nothing in the array it'll be false.
                if (data[0]) {

                	// The for loop is used to create a loop.
                	// set variable, keep going while i < data
                	// The [i] is making use of the variable in the loop which continuously increases
                    for(var i=0;i<data.length;i++) {

                    	//Append the results to the page
                        $results.append('<li>' + 
                        '<img src="' +data[i].picture + '" />' + '<h2>' + data[i].name + '</h2>' +
                        '<p>' + data[i].phone +  '</p>' + 
                        '<p>' + '<a href="mailto:' + data[i].email + '">' + data[i].email + '</a>' +  '</p>' + 
                        '</li>');
                    }
                } 

                // If nothing matches then output no results
                else {
                	$results.append('<li>No results</li>');
                }

            });
        }

        // If there is no search term, or we go back to beginning then No results are shown
        else {

        	$results.append('<li>No results</li>');

        }

    });
});