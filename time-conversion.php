<!DOCTYPE html>
<html lang="en">

<?php 
    $title = 'Time Conversion';
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
                    $common = [
                        "cens"=>"Century",
                        "years"=>"Year",
                        "months"=>"Month",
                        "weeks"=>"Week",
                        "days"=>"Day",
                        "hours"=>"Hour",
                        "minutes"=>"Minute",
                        "seconds"=>"Second",
                        ];
                    showchoice('IS units','cmu',$common);
                ?>	
                <script type="text/javascript" src="js/time-converter.js"></script>
            </div>
        <div class="col-sm-2"></div>    
    </div>

<?php include ('footer.php');?> 
</body>
</html>