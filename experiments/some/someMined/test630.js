





var callbackArguments = [];
var argument1 = function (prop) {
 callbackArguments.push(arguments) 

    nextValue = nextValue.getProperty(prop);
    return nextValue == null;
};
var argument2 = true;
var argument3 = function cb_some(r) {
 callbackArguments.push(arguments) 

    return deepEqual(r, rule);
};
var argument4 = 1.0298554608631395e+308;
var argument5 = function (v, i) {
 callbackArguments.push(arguments) 

    if (!(v instanceof Deferred)) {
        cancel(i);
        x.callback(v);
        return true;
    }
    return false;
};
var argument6 = [969,1.7976931348623157e+308,893,5e-324,595,25,403,893,969];
var argument7 = function (t) {
 callbackArguments.push(arguments) 

    return typeof t === 'object';
};
var base_0 = [783,-1]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,-1]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,-1]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,-1]
var r_3= undefined
try {
r_3 = base_3.some(argument7)
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
require("fs").writeFileSync("./experiments/some/someMined/test630.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)