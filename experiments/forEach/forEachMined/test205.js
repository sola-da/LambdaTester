





var callbackArguments = [];
var argument1 = function (value, key) {
 callbackArguments.push(arguments) 

    ctrlLocals[key] = tplAndVars[resolveIter++];
};
var argument2 = function (r) {
 callbackArguments.push(arguments) 

    if (!window[r])
        missing.push('"' + r + '"');
};
var argument3 = [-100];
var argument4 = function (middleware) {
 callbackArguments.push(arguments) 

    middleware.call(client.instance, client.remote, client);
};
var argument5 = r_0;
var argument6 = function (np) {
 callbackArguments.push(arguments) 

    if (np.isScalar) {
        mergeRelatedEntityCore(mc, node, np);
    } else {
        mergeRelatedEntitiesCore(mc, node, np);
    }
};
var base_0 = [25,"P",595,969,"Nn",122]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,"P",595,969,"Nn",122]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,"P",595,969,"Nn",122]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,"P",595,969,"Nn",122]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test205.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)