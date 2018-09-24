





var callbackArguments = [];
var argument1 = function (sum, value) {
 callbackArguments.push(arguments) 

    return sum + value;
};
var argument2 = function (prev, curr) {
 callbackArguments.push(arguments) 

    return prev + curr;
};
var argument3 = function (length, op) {
 callbackArguments.push(arguments) 

    return length + op.getLength();
};
var argument4 = "fOsz";
var argument5 = function (memo, value) {
 callbackArguments.push(arguments) 

    if (_.isArray(value))
        return memo.concat(_.flatten(value));
    memo.push(value);
    return memo;
};
var argument6 = r_3;
var base_0 = ["@:","r|?0","-","D ","N","u","79"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["@:","r|?0","-","D ","N","u","79"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["@:","r|?0","-","D ","N","u","79"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["@:","r|?0","-","D ","N","u","79"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument5,argument6)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test385.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)