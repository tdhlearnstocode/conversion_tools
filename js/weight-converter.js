var tags = {
    'gram' : document.weight.grams,
    'ounce' : document.weight.ounces,
    'pound' : document.weight.pounds,
    'stone' : document.weight.stones,
    'grain' : document.weight.grains,
    'quintal' : document.weight.quintals,
    'usquintal' : document.weight.usquintals,
    'frenchquintal' : document.weight.frenchquintals,
    'troyounce' : document.weight.troyounces,
    'carat' : document.weight.carats,
    'longton' : document.weight.longtons,
    'shortton' : document.weight.shorttons,
    'imperialton' : document.weight.imperialtons,
    'dram' : document.weight.drams,
    'tola' : document.weight.tolas,
    'slug' : document.weight.slugs,
}
var units = {
    'gram':[1,1],
    'ounce':[0.03527,1],
    'pound':[0.002205,1],
    'troyounce':[0.03215075,1],
    'stone':[0.1575,1e3],
    'grain':[15.4323584,1],
    'quintal':[1,1e5],
    'usquintal':[0.2205,1e4],
    'frenchquintal':[0.671,1e5],
    'carat':[5,1],
    'longton':[9.8421,1e7],
    'imperialton':[9.8421,1e7],
    'shortton':[0.11,1e5],
    'dram':[0.56438339,1],
    'tola':[0.8573532,1],
    'slug':[0.6852,1e4],
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
for (let key in tags) {
    if (tags.hasOwnProperty(key)) {
        tags[key].addEventListener('input', ()=>{convertUnit( tags[key].value, key)},);
    }
}