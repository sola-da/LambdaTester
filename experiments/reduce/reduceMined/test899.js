





var callbackArguments = [];
var argument1 = function (prev, el) {
 callbackArguments.push(arguments) 

    return make_node(AST_Binary, el[0], {
        operator: '+',
        left: prev,
        right: el[0]
    });
};
var argument2 = null;
var argument3 = true;
var argument4 = function (transformEndLength, op) {
 callbackArguments.push(arguments) 

    return transformEndLength + op.getLength();
};
var argument5 = function (a, b) {
 callbackArguments.push(arguments) 

    return a * b;
};
var argument6 = function (a, b) {
 callbackArguments.push(arguments) 

    return a + b.value;
};
var base_0 = [403,"5am",655,705,"ELr^","wZ"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,"5am",655,705,"ELr^","wZ"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,"5am",655,705,"ELr^","wZ"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,"5am",655,705,"ELr^","wZ"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument6)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test899.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)