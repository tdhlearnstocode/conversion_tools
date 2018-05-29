
var tags = {
        'newton' : document.forceform.newtons,
        'kilogramforce' : document.forceform.kilogramforces,
        'poundforce' : document.forceform.poundforces,       
        'dyne' : document.forceform.dynes,
        'poundal' : document.forceform.poundals,
    }
var units = {
    'newton': [1,1],
    'kilogramforce':[0.10197,1],
    'poundforce':[0.22481,1],
    'dyne':[100000,1],
    'poundal':[7.2330,1],
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
