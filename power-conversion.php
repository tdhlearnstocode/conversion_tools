<!DOCTYPE html>
<html lang="en">

<?php 
    $title = 'Power Conversion';
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
                    $isarr = [
                        "watts"=>"Watt (W)",
                        "voltamperes"=>"Volt Ampere (VA)",           
                        ];
                    showchoice('International System (SI)','ispower',$isarr);
                    $commonarr =[
                        "cals"=>"Calories per houre (Cal/h)",
                        "hps"=>"Horsepower metric (hp)",
                        "hpes"=>"Horsepower electric (hp)",
                        "hpms"=>"Horsepower mechanical (hp)",
                        "hpbs"=>"Horsepower boiler (hp G/s)",           
                        "joules"=>"Joule per second (j/s)",
                    ];
                    showchoice('Common units','commonpower',$commonarr);
                ?>	
                
                <script type="text/javascript" src="js/power-converter.js"></script>
            </div>
            <div class="col-sm-2"></div>
        </div>  
    </div>  
    
    <?php include ('footer.php');?> 
</body>
</html>
