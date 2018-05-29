
<head>
	<meta charset="utf-8">
	<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">	
	<meta content="weight converter." name="weight convert,">
	<meta http-equiv="description" content="<?php echo $page_description?>" />
	<meta name="keywords" content="<?php echo $page_keywords?>">
	<meta name="dcterms.created" content="<<?php echo date("F j, Y, g:i a e T P") ?>" >
	<meta name="author" content="TDH">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<style>
		body {
		    font-size: 100%;
			font-family: "Arial",Sans-serif;
			background:  #578CA9;
		}
	</style>
	<?php 
		$myurl = 'http://'.$_SERVER['HTTP_HOST'].'/webtools';
		echo $style;
		echo $jscript;
	?>
    <title><?php echo $title;?></title>
</head>
