var tags = {
    'watt' : document.ispower.watts,
    "voltampere": document.ispower.voltamperes,
    'cal' : document.commonpower.cals,
    'hp' : document.commonpower.hps,  
    "hpm" : document.commonpower.hpms,         
    'hpb' : document.commonpower.hpbs,
    'hpe' : document.commonpower.hpes,
    'joule' : document.commonpower.joules,
}
var units = {
    'watt':[1,1],
    'voltampere':[1,1],
    'cal':[4299,5],
    'hp':[1,735.5],
    'hpm' :[1,746],
    'hpb':[1,9808],
    'hpe':[1,746],
    'joule': [1,1],
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
function exchangeUnit(start,end,mul=1){ 
    if (start.lenght === 0) { return; };   
    if (start === '') { return; };   
    if (isNaN(start)) {   
        return;
    } else {
        end.value = parseFloat(start)*mul;
    }
}

//event listenner...
for (let key in tags) {
    if (tags.hasOwnProperty(key)) {
        tags[key].addEventListener('input', ()=>{convertUnit( tags[key].value, 1, key)},);
    }
}