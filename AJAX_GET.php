<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>jQuery get() Demo</title>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script>
$(document).ready(function(){
    //$("button").click(function()
    //{
        $.get("date-time.php", function(data)
        {
            // Display the returned data in browser
            $("#result").html(data);
        });
    //});
});
</script>
</head>
<body>
    <div id="result">
        <!-- <h2>Content of the result DIV box will be replaced by the server date and time</h2> -->
        <center>
            <h2>Date and Time Loaded.</h2>
        </center>
    </div>
    <!-- <button type="button">Load Date and Time</button> -->
</body>
</html>
