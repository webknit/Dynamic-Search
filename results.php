<?php

// This pulls the search term we used in the JS
// $.getJSON('/results.php?','search='+searchTerm
$search = $_GET['search'];

// Get the file where the JSON is
$filename = $_SERVER['DOCUMENT_ROOT'] .'/test.json';

// Reads entire file into a string
$data = file_get_contents($filename);

// Decodes a JSON string
$json = json_decode($data);

// Create an array
$results = array();

// Is search exists, otherwise it will be false.
if ($search) {

	// The foreach construct provides an easy way to loop over arrays, foreach works only on arrays and objects.
    foreach($json as $item) {

    	// stripos — Find the position of the first occurrence of a case-insensitive substring in a string
    	// ('The string to search in.'->'name of field','search term we passed on') is exactly equal to
    	// stripos($item->name,$search) > -1 would return a value if over 0 so it could be anywhere in the name
    	// stripos($item->name,$search) === 0 is only the first letter
        if ( stripos($item->name,$search) > -1 ) {

        	// array_push — Push one or more elements onto the end of array
        	// So this get the array we created previously and add the $item to the end of it
            array_push($results, $item);
        }
    }
}

// This outputs the results array which contains the items
// json_encode — Returns the JSON representation of a value
echo json_encode($results);

?>
