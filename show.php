<?php
function showchoice($title,$form,$var){
    echo <<<EOT
    <div id ="group">
        <div id ="header">
            <h3>$title</h3>
        </div>
        <div id = "content">
        <form name = "$form">
            <table>
EOT;
    foreach ($var as $key => $value) {              
        echo <<<EOT
            <tr>
                <td style = "padding-right: 30px;">$value   </td>
                <td><textarea class="form-control" id = "inputId" name="$key" rows="1" cols="30" tabindex="1" placeholder="0" ></textarea></td>
            </tr>
EOT;
    }
    echo '</table></form></div></div>';  
};

?>