<?php
session_start();
$style = '';
$jscript ='';
$title='Home';

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<style>

	</style>
</head>

<body>
	<div>
		<h2>unit conversion tools</h2>
	</div>
	<div>
		<div id="conversion" class="tabcontent">  	
			<span onclick="this.parentElement.style.display='none'" class="topright">x</span>
			<div>
				<h3>Basic</h3>
				<ul>
					<li><a href="weight-conversion.php">Weight conversion</a></li>
					<li><a href="volume-conversion.php">Volume conversion</a></li>
					<li><a href="length-conversion.php">Length conversion</a></li>
					<li><a href="area-conversion.php">Area conversion</a></li>
					<li><a href="speed-conversion.php">Speed conversion</a></li>
					<li><a href="temperature-conversion.php">Temperature conversion</a></li>
				</ul>
			</div>
			
			<div>
				<h3>Enginerring</h3>
				<ul>
					<li><a href="time-conversion.php">Time conversion</a></li>
					<li><a href="acceleration-conversion.php">Acceleration conversion</a></li>
					<li><a href="force-conversion.php">Force conversion</a></li>
					<li><a href="power-conversion.php">Power conversion</a></li>
					<li><a href="energy-conversion.php">Energy conversion</a></li>
					<li><a href="pressure-conversion.php">Pressure conversion</a></li>
					<li><a href="torque-conversion.php">Torque conversion</a></li>
				</ul>
			</div>
			
			<div>
				<h3>Computer</h3>
				<ul>
					<li><a href="text-conversion.html">hex-bin-dec-ascii Conversion</a></li>
				</ul>
			</div>
			
		</div>
	</div>
    
</body>

</html>