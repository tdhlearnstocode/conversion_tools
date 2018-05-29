<!DOCTYPE html>
<html lang="en">

<?php 
    $title = 'Length Conversion';
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
                        "kms"=>"Kilometer (Km)",
                        "ms"=>"Meter (m)",
                        "mms"=>"Milimeter (mm)",
                        ];
                    showchoice('IS units','mlen',$metric);
                    $brus = [
                        "yards"=>"Yard (yd)",
                        "foots"=>"Foot (ft)",
                        "inchs"=>"Inch (in)",
                        "miles"=>"Mile (mi)",
                    ];
                    showchoice('BR and US units','bruslen',$brus);
                ?>	
                <script type="text/javascript" src="js/length-converter.js"></script>
            </div>
            <div class="col-sm-2"></div>    
        </div>  

<?php include ('footer.php');?> 
</body>
</html>