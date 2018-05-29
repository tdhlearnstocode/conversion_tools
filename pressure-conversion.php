<!DOCTYPE html>
<html lang="en">

<?php 
    $title = 'Pressure Conversion';
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
                    $arr = [
                        "pascals"=>"Pascals (Pa - N/m^2)",
                        "bars"=>"Bars (bar- dyn/cm^2)",
                        "techatmospheres"=>"Technical atmosphere (at - kp/cm^2)",
                        "atmospheres"=>"Atmosphere (atm)",
                        "torrs"=>"Torr (torr - 1mmHg)",
                        "poundpressures"=>"Pound/inch^2 (psi)",
                        ];
                    showchoice('International System (SI)','pform',$arr);
                ?>	
                <script type="text/javascript" src="js/pressure-converter.js"></script>
            </div>
        <div class="col-sm-2"></div>    
    </div>  

<?php include ('footer.php');?> 
</body>
</html>
