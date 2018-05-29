
var tags = {
    'cel' : document.temp.cels,
    'fah' : document.temp.fahs,
    'kel' : document.temp.kels,       
    're' : document.temp.res,
    'pla' : document.temp.plas,
}

function convertUnit(value,key){
    value = parseFloat(value)
    switch (key) {
        case 'cel':
            tags['fah'].value = (1.8*value) +32;
            tags['kel'].value = value + 273.15;
            tags['re'].value = 0.8*value;
            tags['pla'].value = value*1.9279e-30;
            break;
        case 'fah':
            tags['cel'].value = (value-32) / 1.8 ;
            tags['kel'].value = (value-32) / 1.8 +273.15;
            tags['re'].value = 0.8*tags['cel'].value;
            tags['pla'].value = value * 1.806e-30;
            break;
        case 'kel':
            tags['cel'].value = value -273.15;
            tags['fah'].value = (1.8 * (value -273.15) ) +32;
            tags['re'].value = 0.8*(value -273.15);
            tags['pla'].value = 7.058e-33 *value;
            break;
        case 're':
            tags['cel'].value = 1.25*value;
            tags['fah'].value = (1.8 * 1.25 * value) +32;
            tags['kel'].value = 1.25*value +273.15;
            tags['pla'].value = value*1.937e-30;
            break;
        case 'pla':
            tags['cel'].value = value*1.417e+32;
            tags['fah'].value = value * 2.55e32;
            tags['kel'].value = value * 1.417e32;
            tags['re'].value = value * 1.133e+32;
            break;
    }
}

for (let key in tags) {
    if (tags.hasOwnProperty(key)) {
        tags[key].addEventListener('input', ()=>{convertUnit( tags[key].value,key)},);
    }
}    
