var tags = {
    'cen' : document.cmu.cens,
    'year' : document.cmu.years,    
    'month' : document.cmu.months,
    'week' : document.cmu.weeks,
    'day' : document.cmu.days,
    'hour' : document.cmu.hours,
    'minute': document.cmu.minutes,
    'second': document.cmu.seconds,
}
var units = {
    'cen':[1,1],
    'year':[100,1],
    'month':[1200,1],
    'week':[52.1428571*100,1],
    'day':[365.25636*100,1],
    'hour':[365.25636*24*100,1],
    'minute':[365.25636*24*60*100,1],
    'second':[365.25636*24*60*60*100,1],
};
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
