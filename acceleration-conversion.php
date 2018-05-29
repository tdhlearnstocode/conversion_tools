<!DOCTYPE html>
<html lang="en">

<?php 
    $title = 'Acceleration Conversion';
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
                        "kmpsss"=>"Kilometer per second squared (km/s²)",
                        "mepsss"=>"meter per second squared (m/s²)",
                        ];
                    showchoice('IS units','macc',$metric);
                    $brus = [
                        "mipsss"=>"Mile per second squared",
                        "fpsss"=>"Foot per second squared (ft/s²)",
                        "ipsss"=>"Inch per second squared (in/s²)",
                    ];
                    showchoice('BR and US units','brusacc',$brus);
                    $ffa = [
                        "earths"=>"Standard acceleration of free fall on Earth",
                    ];
                    showchoice('Free Fall Acceleration','ffa',$ffa);
                ?>	
                <script type="text/javascript" src="js/acceleration-converter.js"></script>
                </div>
                <div class="col-sm-2"></div>    
            </div> 

<?php include ('footer.php');?> 
</body>
</html>
