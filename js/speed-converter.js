
var tags = {
    'kmph' : document.metric.kmphs,
    'mps' : document.metric.mpss,      
    'ftps' : document.brus.ftpss,
    'inps' : document.brus.inpss,
    'mph' : document.brus.mphs,
    'knot' : document.other.knots,
    'mach' : document.other.machs,
}
var units = {
    'kmph':[1, 1],
    'mps':[5,18],
    'ftps':[5e4,254*12*18],//(1e4/254*12)*(5/18),//0.9113444152814232
    'inps':[5e4,254*18],//(1e4,254)*(5/18), // 10.936132983377078
    'mph':[5e7,254*63360*18],//(1e7/254/63360)*(5/18),
    'knot' :[0.5399568,1],
    'mach' :[0.985,1e5],
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