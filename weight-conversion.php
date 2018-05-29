<!DOCTYPE html>
<html lang="en">
    
<?php 
    $title = 'Weight Conversion';
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
                        "grams"=>"Grams (Gs)",
                        "pounds"=>"Pounds (Lbs)",
                        "ounces"=>"Ounce (Oz)",
                        "stones"=>"Stone (St)",
                        "troyounces"=>"Troy Ounces (Oz)",
                        "grains"=>"Grains",
                        "quintals"=>"Quintals",
                        "usquintals"=>"US Quintals",
                        "frenchquintals"=>"French Quintals",
                        "carats"=>"Carats",
                        "longtons"=>"Long Tons",
                        "shorttons"=>"Short Tons",
                        "imperialtons"=>"Imperial Tons",
                        "drams"=>"Drams (Dr)",
                        "tolas"=>"Tolas",
                        "slugs"=>"Slugs",
                        ];
                    showchoice('International System (SI)','weight',$arr);
                ?>	
                <script type="text/javascript" src="js/weight-converter.js"></script>
            </div>
            <div class="col-sm-2"></div>
        </div>
    </div> 

<?php include ('footer.php');?> 
</body>
</html>