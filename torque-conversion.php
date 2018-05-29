<!DOCTYPE html>
<html lang="en">

<?php 
    $title = 'Torque Conversion';
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
                        "nms"=>"Newton meter (Nm)",
                        "dms"=>"Dyne meter",
                        "kgfms"=>"Kilogram-force meter (kG*m)",
                        ];
                    showchoice('IS units','mtor',$metric);
                    $brus = [
                        "pffs"=>"Pound-force foot (lbsf*ft)",
                        "pfis"=>"Pound-force in (lbsf*in)",
                        "ofis"=>"Ounce-force inch (ozf*in)",
                        "stffs"=>"Short ton-force foot",
                        "ltffs"=>"long ton-force foot",
                    ];
                    showchoice('BR and US units','brustor',$brus);
                ?>	
                <script type="text/javascript" src="js/torque-converter.js"></script>
            </div>
        <div class="col-sm-2"></div>    
    </div>

<?php include ('footer.php');?> 
</body>
</html>  