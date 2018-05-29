<!DOCTYPE html>
<html lang="en">

<?php 
    $title = 'Area Conversion';
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
                    $metric = [
                        "skms"=>"Square Kilometer (km²)",
                        "hecs"=>"Hectare",
                        "sms"=>"Square Meter (m²)",
                        "smms"=>"Milimeter (mm²)",
                        ];
                    showchoice('IS units','ma',$metric);
                    $brus = [
                        "syards"=>"Square Yard (yd²)",
                        "sfoots"=>"Square Foot (ft²)",
                        "sinchs"=>"Square Inch (in²)",
                        "smiles"=>"Square Mile (mi²)",
                    ];
                    showchoice('BR and US units','brusa',$brus);
                ?>	
                <script type="text/javascript" src="js/area-converter.js"></script>
            </div>
        <div class="col-sm-2"></div>    
    </div>  

<?php include ('footer.php');?> 
</body>
</html>