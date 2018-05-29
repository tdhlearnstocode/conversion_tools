
	/**
	function hex2a(hexx){
		let hex = hexx.toString();
		let str = '';
		let hexlen = hex.length;
		for (let i = 0; i < hexlen; i += 2)
		  str += String.fromCharCode(parseInt(hex.substr(i,2), 16));
		return str;
	}
	**/
	function a2hex(str){
		let arr = [];
		let strlen = str.length;
		for (let i = 0; i < strlen; i ++) {
			let hex = str.charCodeAt(i).toString(16);
			arr.push(hex);
		}
		return arr.join('');
	}

	//document.write(hex2a('61') +'\n');
	document.write(a2hex('Đức') +'\n');

	/**

* Convert From/To Binary/Decimal/Hexadecimal in JavaScript
* https://gist.github.com/faisalman
*
* Copyright 2012-2015, Faisalman <fyzlman@gmail.com>
* Licensed under The MIT License
* http://www.opensource.org/licenses/mit-license
*/


(function(){
    var ConvertBase = function (num) {
        return {
            from : function (baseFrom) {
                return {
                    to : function (baseTo) {
                        return parseInt(num, baseFrom).toString(baseTo);
                    }
                };
            }
        };
    };       
    // binary to hexadecimal
    ConvertBase.bin2hex = function (num) {
        return ConvertBase(num).from(2).to(16);
    };
	// hexadecimal to binary
    ConvertBase.hex2bin = function (num) {
        return ConvertBase(num).from(16).to(2);
    };

	// binary to decimal
		ConvertBase.bin2dec = function (num) {
			return ConvertBase(num).from(2).to(10);
		};
    // decimal to binary
    ConvertBase.dec2bin = function (num) {
        return ConvertBase(num).from(10).to(2);
    };
   
    // decimal to hexadecimal
    ConvertBase.dec2hex = function (num) {
        return ConvertBase(num).from(10).to(16);
    };
    // hexadecimal to decimal
    ConvertBase.hex2dec = function (num) {
        return ConvertBase(num).from(16).to(10);
    };   

    this.ConvertBase = ConvertBase;

})(this);

/*
* Usage example:
* ConvertBase.bin2dec('111'); // '7'
* ConvertBase.dec2bin('22'); // '10110'

* ConvertBase.dec2hex('42'); // '2a'
* ConvertBase.hex2bin('f8'); // '11111000'

*/
document.write(ConvertBase.bin2dec('11110') +'\n'); // '11111000'


const convert = {
  bin2dec : s => parseInt(s, 2).toString(10),
  bin2hex : s => parseInt(s, 2).toString(16),
  dec2bin : s => parseInt(s, 10).toString(2),
  dec2hex : s => parseInt(s, 10).toString(16),
  hex2bin : s => parseInt(s, 16).toString(2),
  hex2dec : s => parseInt(s, 16).toString(10)
};

document.write(convert.bin2dec('111') +'\n'); // '7'
document.write(convert.dec2hex('42') +'\n');  // '2a'
document.write(convert.hex2bin('f8') +'\n');  // '11111000'
document.write(convert.dec2bin('22') +'\n');  // '10110'


