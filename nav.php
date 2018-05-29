<style>

</style>
<nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>                        
        </button>
        <a class="navbar-brand" href="<?php echo $myurl; ?>">QuickTools</a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav">
                <li>
                    <a href="<?php echo $myurl; ?>">Home</a>
                </li>
                <li class="dropdown">
                <?php
                    echo <<<EOT
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">Conversion <span class="caret"></span></a>                  
                    <ul class="dropdown-menu multi-column columns-3">
                        <div class="row">
                            <div class="col-sm-4">
                                <ul class="multi-column-dropdown">
                                    <li><h4>Basic<h4> </li>
                                    <li><a href="$myurl/weight-conversion.php">Weight</a></li>
                                    <li><a href="$myurl/volume-conversion.php">Volume</a></li>
                                    <li><a href="$myurl/length-conversion.php">Length</a></li>
                                    <li><a href="$myurl/speed-conversion.php">Speed</a></li>
                                    <li class="divider"></li>
                                    <li><a href="$myurl/area-conversion.php">Area</a></li>
                                    
                                    <li class="divider"></li>
                                    <li><a href="$myurl/temperature-conversion.php">Temperature</a></li>
                                </ul>
                            </div>

                            <div class="col-sm-4">
                                <ul class="multi-column-dropdown">
                                    <li><h4>Enginerring<h4> </li>
                                    <li><a href="$myurl/time-conversion.php">Time</a></li>
                                    <li><a href="$myurl/acceleration-conversion.php">Acceleration</a></li>
                                    <li><a href="$myurl/force-conversion.php">Force</a></li>
                                    <li class="divider"></li>
                                    <li><a href="$myurl/power-conversion.php">Power</a></li>
                                    <li class="divider"></li>
                                    <li><a href="$myurl/energy-conversion.php">Energy</a></li>
                                    <li><a href="$myurl/pressure-conversion.php">Pressure</a></li>
                                    <li><a href="$myurl/torque-conversion.php">Torque</a></li>
                                </ul>
                            </div>

                        </div>
                    </ul>
EOT;
                ?>
                </li>
            </ul>
        </div>
    </div>
</nav>