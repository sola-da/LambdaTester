





var callbackArguments = [];
var argument1 = function (node, index) {
 callbackArguments.push(arguments) 

    node = Y.one(node);
    context = context || node;
    return fn.call(context, node, index, instance);
};
var argument2 = null;
var argument3 = [595,0];
var argument4 = function (value, index, list) {
 callbackArguments.push(arguments) 

    if (predicate(value, index, list)) {
        result = value;
        return true;
    }
};
var argument5 = null;
var argument6 = function (ban) {
 callbackArguments.push(arguments) 

    return ban.mask === mask;
};
var argument7 = null;
var argument8 = r_0;
var argument9 = function (a) {
 callbackArguments.push(arguments) 

    i++;
    arr.push(a + 3);
    return i > 3;
};
var argument10 = r_0;
var argument11 = true;
var base_0 = [783,655,655,893,714,893,403,618,607]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,655,655,893,714,893,403,618,607]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,655,655,893,714,893,403,618,607]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,655,655,893,714,893,403,618,607]
var r_3= undefined
try {
r_3 = base_3.some(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/some/someMined/test808.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)