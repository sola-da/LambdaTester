





var callbackArguments = [];
var argument1 = function (n) {
 callbackArguments.push(arguments) 

    return dijit.byNode(n);
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var argument3 = [-100,82,122,823,25,705];
var argument4 = {"":1.1870127296525503e+308,"RqDE":"SY"};
var argument5 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var argument6 = function (originalUserId) {
 callbackArguments.push(arguments) 

    if (idMappings['groups'][currentBatch][originalUserId]) {
        return idMappings['groups'][currentBatch][originalUserId].generatedId;
    } else {
        console.log('    Warning: Could not map discussions membership for group "%s"', originalUserId);
        return originalUserId;
    }
};
var base_0 = [893,0,655,403,403]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,0,655,403,403]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,0,655,403,403]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,0,655,403,403]
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test995.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)