





var callbackArguments = [];
var argument1 = function (path) {
 callbackArguments.push(arguments) 

    return path + '-suffix';
};
var argument2 = function (r) {
 callbackArguments.push(arguments) 

    if (r.makeImportant) {
        return r.makeImportant();
    } else {
        return r;
    }
};
var argument3 = null;
var argument4 = r_0;
var argument5 = function (key) {
 callbackArguments.push(arguments) 

    return createPredicateFromKeyValue(key, obj[key]);
};
var argument6 = function (obc) {
 callbackArguments.push(arguments) 

    return obc.getComparer(entityType);
};
var argument7 = r_0;
var base_0 = [823,157,213,25,-1]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test604.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)