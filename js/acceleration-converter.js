var tags = {
        'kmpss' : document.macc.kmpsss,
        'mepss' : document.macc.mepsss,
        'mipss' : document.brusacc.mipsss,       
        'fpss' : document.brusacc.fpsss,
        'ipss' : document.brusacc.ipsss,
        'earth' : document.ffa.earths,
    }
var units = {
    'kmpss':[1,1],
    'mepss':[1e3,1],
    'mipss':[0.6214,1],
    'fpss':[3281,1],
    'ipss':[39370,1],
    'earth':[102,1],
}
function update(element,uname){    
    for (let key in units) {
        if ( tags.hasOwnProperty(key) ) {   
            if (key !== uname){
                tags[key].value = Math.round(1e10*element * ( units[key][0]*units[uname][1] ) / ( units[key][1]*units[uname][0] ))/1e10;;
            }         
        }
    }
}
// event handler...
function convertUnit(val,name){ 
    if (val.lenght === 0) { return; };
    if (val === '') { return; };
    if (isNaN(val)) {
        return ;
    } else {       
        val = parseFloat(val);      
        update(val,name);
    }
}
//event listenner...
for (let key in tags) {
    tags[key].addEventListener('input', ()=>{convertUnit( tags[key].value, key)},);
}  