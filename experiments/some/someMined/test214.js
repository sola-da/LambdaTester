





var callbackArguments = [];
var argument1 = function (v, i) {
 callbackArguments.push(arguments) 

    if (!(v instanceof Deferred)) {
        cancel(i);
        x.callback(v);
        return true;
    }
    return false;
};
var argument2 = r_0;
var argument3 = function (sequence) {
 callbackArguments.push(arguments) 

    return sequence.hasErrorHandler();
};
var argument4 = function (match) {
 callbackArguments.push(arguments) 

    return match.route.props.ignoreScrollBehavior;
};
var argument5 = "";
var argument6 = "F";
var argument7 = function (cp) {
 callbackArguments.push(arguments) 

    return cpHasOriginalValues(co, cp);
};
var argument8 = null;
var base_0 = ["fuw","z","|J","-","[",":olfp","fN","e*1{","8"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["fuw","z","|J","-","[",":olfp","fN","e*1{","8"]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["fuw","z","|J","-","[",":olfp","fN","e*1{","8"]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["fuw","z","|J","-","[",":olfp","fN","e*1{","8"]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someMined/test214.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)