





var callbackArguments = [];
var argument1 = function (sequence) {
 callbackArguments.push(arguments) 

    return sequence.hasErrorHandler();
};
var argument2 = function (co) {
 callbackArguments.push(arguments) 

    return coHasOriginalValues(co);
};
var argument3 = true;
var argument4 = function () {
 callbackArguments.push(arguments) 

    return true;
};
var argument5 = true;
var argument6 = function (v) {
 callbackArguments.push(arguments) 

    if (v instanceof Error) {
        cancel();
        x.errback(v);
        return true;
    }
    return false;
};
var base_0 = [627,25,893,655]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,25,893,655]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,25,893,655]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,25,893,655]
var r_3= undefined
try {
r_3 = base_3.some(argument6)
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
require("fs").writeFileSync("./experiments/some/someMined/test455.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)