





var callbackArguments = [];
var argument1 = function (v, i) {
 callbackArguments.push(arguments) 

    if (getAxisId(id) === getAxisId(baseId) && ys[baseId] && !(hasNegativeValue && +v > 0)) {
        ys[baseId][i] += +v;
    }
};
var argument2 = null;
var argument3 = null;
var argument4 = function (n, i) {
 callbackArguments.push(arguments) 

    if (i <= vars.depth.value && !d[n]) {
        d[n] = d3plus.util.uniques(d.values, n).filter(function (unique) {
            return unique && unique != 'undefined';
        })[0];
    }
};
var argument5 = function (i) {
 callbackArguments.push(arguments) 

    obj.dependencies[i] = '*';
};
var argument6 = function (key, value) {
 callbackArguments.push(arguments) 

    value.key = key;
    value.closed = /-closed$/.test(key);
};
var base_0 = ["E2","H","=","V)Go","O","[a","M"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["E2","H","=","V)Go","O","[a","M"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["E2","H","=","V)Go","O","[a","M"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["E2","H","=","V)Go","O","[a","M"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test667.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)