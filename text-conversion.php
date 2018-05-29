<?php 
$title = 'ASCII text,Hex,Binary,Decimal,Base64 converter';
$page_description ='ASCII to hexadecimal,binary,decimal text converter';
$page_keywords ='';
include ('head-conversion.php'); 
?>
   <div class="container">
        <div class="row">
            <div class="col-sm-3"></div>
            <div class="col-sm-6">
            <h1>ASCII,Hex,Binary,Decimal,Base64 converter</h1>
				<p>Enter <a href="ascii-table.htm">ASCII text</a> or hex/binary/decimal numbers:</p>
				<form name="calcform">
					<table class="calc">
						<tbody>
							<tr>
								<td>Number delimiter</td>
							</tr>
							<tr>
								<td>
									<select name="delsel" onchange="OnDelSelChange()">
										<option>None</option>
										<option selected="selected">Space</option>
										<option>Comma</option>
										<option>,0x</option>
										<option>,0b</option>
										<option>User defined</option>
									</select>
									<input value=" " name="del" oninput="OnDelInput()" type="text">
									<button type="button" title="Clear" class="btn" tabindex="4" onclick="ClearDelBtn()">reset</button>
								</td>
							</tr>
							<tr>
								<td>ASCII text</td>
							</tr>
							<tr>
								<td><textarea name="txt" rows="4" cols="60" tabindex="1" class="intext" placeholder="ABC ..." oninput="ConvertASCII()"autofocus=""></textarea></td>
							</tr>
							<tr>
								<td>Hex</td>
							</tr>
							<tr>
								<td><textarea name="hex" rows="4" cols="60" class="intext" tabindex="2" placeholder="41 42 43 ..." oninput="ConvertHex()"></textarea></td>
							</tr>
							<tr>
								<td>Binary</td>
							</tr>
							<tr>
								<td><textarea name="bin" rows="4" cols="60" class="intext" tabindex="3" placeholder="01000001 01000010 01000011 ..." oninput="ConvertBinary()"></textarea></td>
							</tr>
							<tr>
								<td>Decimal</td>
							</tr>
							<tr>
								<td><textarea name="dec" rows="4" cols="60" class="intext" tabindex="4" placeholder="65 66 67 ..." oninput="ConvertDecimal()"></textarea></td>
							</tr>
							<tr>
								<td>Base64</td>
							</tr>
							<tr>
								<td><textarea name="base64" rows="4" cols="60" class="intext" tabindex="5" placeholder="QUJD ..." oninput="ConvertBase64()"></textarea></td>
							</tr>
							<tr>
								<td>Length</td>
							</tr>
							<tr>
								<td><input name="len" class="outtext" readonly="readonly" type="text"> chars/bytes</td>
							</tr>
							<tr>
								<td>Checksum</td>
							</tr>
							<tr>
								<td>
									<select id="csbits" name="csbits" onchange="UpdateChecksum()">
										<option selected="selected">8-bit</option>
										<option>16-bit</option>
										<option>32-bit</option>
									</select>
									<select id="cstype" name="cstype" onchange="UpdateChecksum()">
										<option selected="selected">Sum</option>
										<option>2's complement</option>
										<option>Xor</option>
									</select>
									<input id="sum" name="sum" class="outtext" readonly="readonly" type="text">
								</td>
							</tr>
							<tr>
								<td>&nbsp;</td>
							</tr>
							<tr>
								<td><button type="reset" title="Reset" class="btn" tabindex="6">Reset</button></td>
							</tr>
						</tbody>
					</table>
				</form>
                <script type="text/javascript" src="js/text-converter.js"></script>
            </div>
            <div class="col-sm-3"></div>
        </div>
    </div>

<?php include ('footer.php');  ?>  
