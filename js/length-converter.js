
var tags = {
    'km' : document.mlen.kms,
    'm' : document.mlen.ms,
    'mm' : document.mlen.mms,       
    'yard' : document.bruslen.yards,
    'foot' : document.bruslen.foots,
    'inch' : document.bruslen.inchs,
    'mile' : document.bruslen.miles,
}
var units = {
    'km':[1, 1],
    'm':[1e3, 1],
    'mm':[1e6, 1],
    'yard':[1e7, 254*36],
    'foot':[1e7, 254*12],
    'inch':[1e7, 254],
    'mile':[1e7, 254*63360],
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