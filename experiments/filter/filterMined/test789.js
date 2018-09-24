





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    return !x.next;
};
var argument2 = true;
var argument3 = function (value) {
 callbackArguments.push(arguments) 

    return !_.contains(rest, value);
};
var argument4 = function (id) {
 callbackArguments.push(arguments) 

    var missing = currentBatch.diffs[id].missing;
    return missing.length === 1 && missing[0].slice(0, 2) === '1-';
};
var argument5 = r_2;
var argument6 = 2.805713293545061e+307;
var argument7 = function (d) {
 callbackArguments.push(arguments) 

    return d.depth == 0;
};
var base_0 = [157,-1]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,-1]
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,-1]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test789.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)