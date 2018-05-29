var tags = {
    'ckm': document.metric.ckms,
    'cm':document.metric.cms,
    'cdm':document.metric.cdms,
    'ccm':document.metric.ccms,
    'cmm':document.metric.cmms,
    'hl':document.metric.hls,
    'decal':document.metric.decals,
    'l':document.metric.ls,
    'decil':document.metric.decils,
    'cl':document.metric.cls,
    'ml':document.metric.mls,
    'micl':document.metric.micls,

    'acreft':document.brus.acrefts,
    'bp':document.brus.bps,
    'bb':document.brus.bbs,
    'gal':document.brus.gals,
    'qt':document.brus.qts,
    'pt':document.brus.pts,
    'gill':document.brus.gills,
    'floz':document.brus.flozs,
    'fldram':document.brus.fldrams,
    'minim':document.brus.minims,
}
var units = {
    'ckm': [1,1],
    'cm':[1e9,1],
    'cdm':[1e12,1],
    'ccm':[1e15,1],
    'cmm':[1e21,1],
    'hl':[1e10,1],
    'decal':[1e11,1],
    'l':[1e12,1],
    'decil':[1e13,1],
    'cl':[1e14,1],
    'ml':[1e15,1],
    'micl':[1e21,1],
    'acreft':[810700,1],
    'bp':[6290e6,1],
    'bb':[8522e6,1],
    'gal':[2642e8,1],
    'qt':[1057e9,1],
    'pt':[2113e9,1],
    'gill':[8454e9,1],
    'floz':[3381e10,1],
    'fldram':[2705e11,1],
    'minim':[1623e13,1],

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
