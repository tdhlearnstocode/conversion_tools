<!DOCTYPE html>
<html lang="en">

<?php 
    $title = 'Temperature Conversion';
    $page_description ='';
    $page_keywords ='';
    $jscript ='';
	$style ='';
    include ('head.php'); 
?>
<body> 
    <?php include ('nav.php');?>     
    <div class="container">
        <div class="row">
            <div class="col-sm-2"></div>
            <div class="col-sm-8">
                <?php
                    include ('show.php');
                    $basic = [
                        "cels"=>"degrees Celsius (°C)",
                        "fahs"=>"degrees Fahrenheit (°F)",
                        "kels"=>"Kelvin (°K)",
                        "res"=>"degrees Reaumur (°Re)",
                        "plas"=>"Planck temperature (Θ)",
                        ];
                    showchoice('IS units','temp',$basic);
                ?>	
                <script type="text/javascript" src="js/temperature-converter.js"></script>
            </div>
        <div class="col-sm-2"></div>    
    </div>  

<?php include ('footer.php');?> 
</body>
</html>  