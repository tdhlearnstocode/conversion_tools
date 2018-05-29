var tags = {
    'joule' : document.ise.joules,
    'cal' : document.cme.cals,
    'ws' : document.cme.wss,           
    'ev' : document.cme.evs,
    'hph' : document.cme.hphs, 
    'latm' : document.cme.latms, 
    'mkg' : document.cme.mkgs, 
    'scc' : document.cme.sccs, 
    'btu' : document.bre.btus, 
    'ftp' : document.bre.ftps,
    'gatm' : document.bre.gatms,
    'scf' : document.bre.scfs,
    'kgtnt' : document.tnte.kgtnts,
}
var units = {
    'joule':[1,1],
    'cal':[0.2388,1],
    'ws':[1,1],
    'ev':[6.24e18,1],
    'hph':[1e10,3725],
    'latm':[9869,1e6],
    'scc':[9869,1e3],//9869e-3
    'mkg':[1026,1e4],//1026e-4
    'btu':[9478,1e7],//9478e-7
    'ftp':[0.7376,1],
    'gatm':[2607,1e6],
    'scf':[3485,1e7],
    'kgtnt':[2168,1e13],
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