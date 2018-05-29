<!DOCTYPE html>
<html lang="en">


<?php 
    $title = 'Speed Conversion';
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
                        "kmphs"=>"Kilometer per hour (Km/h)",
                        "mpss"=>"Meter per second(m/s)",
                        ];
                    showchoice('IS units','metric',$metric);
                    $brus = [
                        "ftpss"=>"Foot per second (ft/s)",
                        "inpss"=>"Inch per second (in/s)",
                        "mphs"=>"Mile per hour(mph)",
                    ];
                    showchoice('BR and US units','brus',$brus);
                    $other = [
                        "knots"=>"Knot",
                        "machs"=>"Mach",
                        ];
                    showchoice('Other units','other',$other);
                ?>	
                <script type="text/javascript" src="js/speed-converter.js"></script>
            </div>
            <div class="col-sm-2"></div>    
        </div>

<?php include ('footer.php');?> 
</body>
</html>  