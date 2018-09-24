





var callbackArguments = [];
var argument1 = function (row) {
 callbackArguments.push(arguments) 

    if (row.doc && !row.deleted && row.value.rev.slice(0, 2) === '1-' && (!row.doc._attachments || Object.keys(row.doc._attachments).length === 0)) {
        result.docs_read++;
        currentBatch.pendingRevs++;
        currentBatch.docs.push(row.doc);
        delete currentBatch.diffs[row.id];
    }
};
var argument2 = null;
var argument3 = function (listener) {
 callbackArguments.push(arguments) 

    return google.maps.event.removeListener(listener);
};
var argument4 = function (s) {
 callbackArguments.push(arguments) 

    aq.queue(function (lock) {
        console.log('Copying `chan_' + name + '_library`');
        queryNew('INSERT INTO `chan_' + name + '_library` VALUES ?', [s], function () {
            lock.release();
        });
    });
};
var argument5 = function (marker) {
 callbackArguments.push(arguments) 

    marker.isAdded = false;
    if (opt_hide) {
        marker.setMap(null);
    }
};
var argument6 = true;
var argument7 = true;
var base_0 = ["mk","Fk+]d","9","c","<","V",",A","II","vwX","wX"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["mk","Fk+]d","9","c","<","V",",A","II","vwX","wX"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["mk","Fk+]d","9","c","<","V",",A","II","vwX","wX"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["mk","Fk+]d","9","c","<","V",",A","II","vwX","wX"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6,argument7)
}
catch(e) {
r_3= "Error"
}
function serialize(array){
return array.map(function(a){
if (a === null || a == undefined) return a;
var name = a.constructor.name;
if (name==='Object' || name=='Boolean'|| name=='Array'||name=='Number'||name=='String')
return JSON.stringify(a);
return name;
 });
}
setTimeout(function(){
require("fs").writeFileSync("./experiments/forEach/forEachMined/test320.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)