<!DOCTYPE html>
<html lang="en">

<?php 
    $title = 'Force Conversion';
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
                        "newtons"=>"Newton (N - kg*m/s^2)",
                        "poundforces"=>"Pound force (lbf- g*1lb)",
                        "dynes"=>"Dyne (dyn - g*cm/s^2)",
                        "kilogramforces"=>"Kilogram force (kG - kp - g*1kg)",
                        "poundals"=>"Poundal (pdl - lb*ft/s^2)",
                        ];

                    showchoice('IS units','forceform',$arr);
                ?>	
                <script type="text/javascript" src="js/force-converter.js"></script>
            </div>
        <div class="col-sm-2"></div>
    </div> 

<?php include ('footer.php');?> 
</body>
</html>