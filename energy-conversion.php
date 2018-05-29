<!DOCTYPE html>
<html lang="en">

<?php 
    $title = 'Energy Conversion';
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
            <div class="col-sm-3"></div>
            <div class="col-sm-6">
                <?php
                    include ('show.php');
                    $isUnit = [
                        "joules"=>"Joule (J)",         
                        ];
                    showchoice('International System (SI)','ise',$isUnit);
                    $commonUnit =[
                        "cals"=>"Calories per houre (Cal/h)",
                        "wss"=>"Walt second (eV)",
                        "evs"=>"Eectric volt (hp)",
                        "hphs"=>"Horsepower hour (hp*h)",
                        "latms"=>"Liter-Atmosphere latm)",           
                        "mkgs"=>"metre kilogram (mkg)",
                        "sccs"=>"cubic centimeter of atmosphere (scc)",
                    ];
                    showchoice('Common units','cme',$commonUnit);
                    $brUnit =[
                        "btus"=>"British Thermal Unit (BTU)",
                        "ftps"=>"Foot-pound (ft*lbs)",
                        "gatms"=>"gallon-atmosphere",
                        "scfs"=>"Cubic foot of atmosphere (scf)",
                    ];
                    showchoice('British and American units','bre',$brUnit);
                    $tntUnit =[
                        "kgtnts"=>"kilogram of TNT",
                    ];
                    showchoice('Other Units','tnte',$tntUnit);
                ?>	
                <script type="text/javascript" src="js/energy-converter.js"></script>
            </div>
            <div class="col-sm-3"></div>     
         </div>
    </div>
    
    <?php include ('footer.php');?> 
</body>
</html>
