function OnDelSelChange() {
    var i = document.calcform.delsel.selectedIndex;
    var c = "";
    if (i == 1) c = " ";
    if (i == 2) c = ",";
    if (i == 3) c = ",0x";
    if (i == 4) c = ",0b";
    document.calcform.del.value = c;
    if (i == 5) document.calcform.del.focus();
    ConvertASCII();
}
function OnDelInput() {
    document.calcform.delsel.selectedIndex = 5;
    ConvertASCII();
}
function ClearDelBtn() {
    document.calcform.del.value = "";
    document.calcform.delsel.selectedIndex = 0;
    ConvertASCII();
}
function UpdateData(x, src) {
    var txt = hex = dec = bin = '';
    var c, h, d, b;
    var del = document.calcform.del.value;
    for (var i = 0; i < x.length; i++) {
        h = x[i].toString(16);
        d = x[i].toString(10);
        b = x[i].toString(2);
        if (h.length == 1) h = '0' + h;
        if (b.length < 8) b = '0'.repeat(8 - b.length) + b;
        if (d < 256) txt += String.fromCharCode(x[i]);
        hex += h.toUpperCase();
        dec += d;
        bin += b;
        if (i < x.length - 1) {
            hex += del;
            dec += del;
            bin += del;
        }
    }
    var base64 = window.btoa(unescape(encodeURIComponent(txt)));
    if (src != 1) document.calcform.txt.value = txt;
    if (src != 2) document.calcform.hex.value = hex;
    if (src != 3) document.calcform.bin.value = bin;
    if (src != 4) document.calcform.dec.value = dec;
    if (src != 5) document.calcform.base64.value = base64;
    document.calcform.len.value = x.length;
    UpdateChecksum();
}
function ConvertASCII() {
    var x = [];
    var txt = document.calcform.txt.value;
    if (txt.length == 0) return;
    for (i = 0; i < txt.length; i++) {
        x[i] = txt.charCodeAt(i);
    }
    UpdateData(x, 1);
}
function ConvertHex() {
    var x = [];
    var hex = document.calcform.hex.value;
    if (hex.length == 0) return;
    hex = hex.match(/[0-9A-Fa-f]{1,2}/g);
    for (i = 0; i < hex.length; i++) {
        x[i] = parseInt(hex[i], 16);
    }
    UpdateData(x, 2);
}
function ConvertBinary() {
    var x = [];
    var bin = document.calcform.bin.value;
    if (bin.length == 0) return;
    bin = bin.match(/[0-1]{1,8}/g);
    if (!bin) return;
    for (i = 0; i < bin.length; i++) {
        x[i] = parseInt(bin[i], 2);
    }
    UpdateData(x, 3);
}
function ConvertDecimal() {
    var x = [];
    var dec = document.calcform.dec.value;
    if (dec.length == 0) return;
    dec = dec.match(/[0-9]{1,3}/g);
    if (!dec) return;
    for (i = 0; i < dec.length; i++) {
        x[i] = parseInt(dec[i], 10);
    }
    UpdateData(x, 4);
}
function ConvertBase64() {
    var x = [];
    var txt = document.calcform.base64.value;
    if (txt.length == 0) return;
    txt = decodeURIComponent(escape(window.atob(txt)));
    for (i = 0; i < txt.length; i++) {
        x[i] = txt.charCodeAt(i);
    }
    UpdateData(x, 5);
}
function UpdateChecksum() {
    var ibits = document.calcform.csbits.selectedIndex;
    var itype = document.calcform.cstype.selectedIndex;
    //var ibits = document.getElementById("csbits").selectedIndex;
    //var itype = document.getElementById("cstype").selectedIndex;
    //alert(i1+" "+i2);
    var dec = document.calcform.dec.value;
    var x = [];
    if (dec.length == 0) return;
    dec = dec.match(/[0-9]{1,3}/g);
    if (!dec) return;
    var sum = 0;
    var xor = 0;
    for (i = 0; i < dec.length; i++) {
        x[i] = parseInt(dec[i], 10);
        sum += x[i];
        xor ^= x[i];
    }
    if (itype == 2) sum = xor;
    var size = 0;
    var range = 0;
    if (ibits == 0) { range = 256; size = 2; }
    if (ibits == 1) { range = 65536; size = 4; }
    if (ibits == 2) { range = 4294967296; size = 8; }
    sum %= range;
    //sum%=Math.pow(2,size);
    if (itype == 1) sum = range - sum;;
    sum = sum.toString(16).toUpperCase();
    sum = "000000000" + sum;
    sum = sum.substr(sum.length - size);
    document.calcform.sum.value = sum;
}
function OnSelect() {
    document.calcform.hex.select();
}
