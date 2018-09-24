





var callbackArguments = [];
var argument1 = function (hash, r) {
 callbackArguments.push(arguments) 

    if (r instanceof tree.Rule && r.variable === true) {
        hash[r.name] = r;
    }
    return hash;
};
var argument2 = [82,460];
var argument3 = function (sum, suite) {
 callbackArguments.push(arguments) 

    return sum + suite.total();
};
var argument4 = r_0;
var argument5 = true;
var argument6 = function (p, v) {
 callbackArguments.push(arguments) 

    return { sighting: p.sighting - 1 };
};
var argument7 = r_2;
var argument8 = function (acc, key) {
 callbackArguments.push(arguments) 

    acc[key] = options[key];
    return acc;
};
var base_0 = ["-<V","L:",";u]R","H6I","z"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["-<V","L:",";u]R","H6I","z"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["-<V","L:",";u]R","H6I","z"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["-<V","L:",";u]R","H6I","z"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test757.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)