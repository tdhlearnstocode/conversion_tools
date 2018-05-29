
var tags = {
    'skm' : document.ma.skms,
    'hec': document.ma.hecs,
    'sm' : document.ma.sms,
    'smm' : document.ma.smms,       
    'syard' : document.brusa.syards,
    'sfoot' : document.brusa.sfoots,
    'sinch' : document.brusa.sinchs,
    'smile' : document.brusa.smiles,
}
/*
var units = {
    'skm':[1,1],
    'hec':[1e2,1],
    'sm':[1e6,1],
    'smm':[1e12,1],
    'syard':1e14/(254*36)/(254*36),
    'sfoot':1e14/(254*12)/(254*12),
    'sinch':1e14/(254*254),
    'smile':1e14/(254*63360)/(254*63360),
}
*/
var units = {
    'skm':[1,1],
    'hec':[1e2,1],
    'sm':[1e6,1],
    'smm':[1e12,1],
    'syard':[1e14,83612736],// 254*254*36*36
    'sfoot':[1e14,9290304],//254*254*12*12
    'sinch':[1e14,64516],//254*254
    'smile':[1e14,258998811033600],//254*254*63360*63360
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