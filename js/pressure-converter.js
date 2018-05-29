var tags = {
    'pascal' : document.pform.pascals,
    'bar' : document.pform.bars,
    'atmosphere' : document.pform.atmospheres,       
    'torr' : document.pform.torrs,
    'techatmosphere' : document.pform.techatmospheres,
    'poundpressure' : document.pform.poundpressures,
}
var units = {
    'pascal':[1,1],
    'bar':[1,1e5],
    'atmosphere':[9.8692,1e6],
    'torr':[7.05006,1e3],
    'techatmosphere':[1.0197,1e5],
    'poundpressure':[1.45,1e4],
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
    if (! isNaN(val)) {
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
