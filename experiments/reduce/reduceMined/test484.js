





var callbackArguments = [];
var argument1 = function (a, branch) {
 callbackArguments.push(arguments) 

    return a.concat(branch.body);
};
var argument2 = "Qw+";
var argument3 = function (obj, item) {
 callbackArguments.push(arguments) 

    obj[item] = 1;
    return obj;
};
var argument4 = function (result, child, idx) {
 callbackArguments.push(arguments) 

    var name = child.getKey(idx);
    result[name] = child;
    return result;
};
var argument5 = "a1{4";
var argument6 = {};
var argument7 = function (model, val, i) {
 callbackArguments.push(arguments) 

    model[headers[i]] = val;
    return model;
};
var argument8 = 595;
var argument9 = true;
var base_0 = [618]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test484.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)