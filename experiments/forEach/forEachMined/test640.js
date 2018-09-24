





var callbackArguments = [];
var argument1 = function (b) {
 callbackArguments.push(arguments) 

    elems.push(addBanRow(b, first));
};
var argument2 = [714,"I*6=o","1y1",823,")O",607,122];
var argument3 = 3.0319195229737497e+307;
var argument4 = function (node) {
 callbackArguments.push(arguments) 

    var registrations = registrationsTable.get(node);
    for (var i = 0; i < registrations.length; i++) {
        var registration = registrations[i];
        if (registration.observer === this) {
            registration.removeListeners();
            registrations.splice(i, 1);
            break;
        }
    }
};
var argument5 = null;
var argument6 = {"783":893,"":"","1.5251153960460016e+308":1.6005409529284827e+308,"9.911628866658162e+306":""};
var argument7 = function (key2, node2) {
 callbackArguments.push(arguments) 

    ForceVectorUtils.fcBiRepulsor(node1, node2, that.repulsionStrength * (1 + node1.degree) * (1 + node2.degree));
};
var argument8 = r_2;
var argument9 = false;
var argument10 = function (val, i) {
 callbackArguments.push(arguments) 

    style += (i > 0 ? ',' : '') + (index * staggerDelay + parseInt(val, 10)) + 's';
};
var argument11 = 59;
var argument12 = "";
var base_0 = [")","E)",82,1.7976931348623157e+308,"]",783,"mb3","|w","%"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [")","E)",82,1.7976931348623157e+308,"]",783,"mb3","|w","%"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [")","E)",82,1.7976931348623157e+308,"]",783,"mb3","|w","%"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [")","E)",82,1.7976931348623157e+308,"]",783,"mb3","|w","%"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test640.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)