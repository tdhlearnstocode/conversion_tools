
var tags = {
    'nm' : document.mtor.nms,
    'dm' : document.mtor.dms,
    'kgfm' : document.mtor.kgfms,       
    'pff' : document.brustor.pffs,
    'pfi' : document.brustor.pfis,
    'ofi' : document.brustor.ofis,
    'stff' : document.brustor.stffs,
    'ltff' : document.brustor.ltffs,
}
var units = {
    'nm':[1,1],
    'dm':[1e5,1],
    'kgfm':[1,9.80665],
    'pff':[0.7376,1],
    'pfi':[8.851,1],
    'ofi':[141.6,1],
    'stff':[1,2712],
    'ltff':[1,3037],
}
function update(element,uname){    
    for (let key in units) {
        if ( tags.hasOwnProperty(key) ) {   
            if (key !== uname){
                tags[key].value = Math.round(1e10*element * ( units[key][0]*units[uname][1] ) / ( units[key][1]*units[uname][0] ))/1e10;
            }         
        }
    }
}
// event handler...
function convertUnit(val,mul=1,name){  
    if (val.lenght === 0) { return; };
    if (val === '') { return; };
    if (isNaN(val)) {
        return ;
    } else {
        val = parseFloat(val);
        val = val*mul;
        update(val,name);
    }
}
//event listenner...

for (let key in tags) {
    if (tags.hasOwnProperty(key)) {
        tags[key].addEventListener('input', ()=>{convertUnit( tags[key].value, 1, key)},);
    }
}    

