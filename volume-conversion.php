<!DOCTYPE html>
<html lang="en">

<?php 
    $title = 'Volume Conversion';
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
                    $metricV = [
                        'ckms'=>'cubic kilometer (km³)',
                        'cms'=>'cubic meter (m³)',
                        'cdms'=>'cubic decimeter (dm³)',
                        'ccms'=>'cubic centimeter (cc)',
                        'cmms'=>'cubic millimeter (mm³)',
                        'hls'=>'hectoliter (hl)',
                        'decals'=>'decaliter',
                        'ls'=>'liter (l)',
                        'decils'=>'deciliter (dl)',
                        'cls'=>'centiliter (cl)',
                        'mls'=>'milliliter (ml)',
                        'micls'=>'microliter (µl)',
                        ];             
                    showchoice('Metric Volume','metric',$metricV);
                    $usliquid = [
                        'acrefts'=>'Acre foot',
                        'bps'=>'Barrel (petroleum)',
                        'bbs'=>'Barrel (beer)',
                        'gals'=>'Gallon (gal)',
                        'qts'=>'Quart (qt)',
                        'pts'=>'Pint (pt)',
                        'gills'=>'Gill',
                        'flozs'=>'Fluid ounce (oz)',
                        'fldrams'=>'Fluid dram',
                        'minims'=>'Minim',
                    ];
                    showchoice('US Liquid','brus',$usliquid);
                ?>   
                <script type="text/javascript" src="js/volume-converter.js"></script>
            </div>
        <div class="col-sm-2"></div>    
    </div>  

<?php include ('footer.php');?> 
</body>
</html>