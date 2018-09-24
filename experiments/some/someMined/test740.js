





var callbackArguments = [];
var argument1 = function (match) {
 callbackArguments.push(arguments) 

    return match.route.props.ignoreScrollBehavior;
};
var argument2 = null;
var argument3 = function (v) {
 callbackArguments.push(arguments) 

    if (v instanceof Error) {
        cancel();
        x.errback(v);
        return true;
    }
    return false;
};
var argument4 = null;
var argument5 = function (match) {
 callbackArguments.push(arguments) 

    return match.route.props.ignoreScrollBehavior;
};
var argument6 = {"82":1.6676953628332133e+308,"100":1.2204409718012848e+308,"126":"@4X","157":157,"607":"","969":1.6523855654197865e+308,"":1.3491157320744734e+308,"q0":"","6.823935105045055e+307":"","1.672786168326013e+308":""};
var argument7 = function (el) {
 callbackArguments.push(arguments) 

    return el.num === 3 && el.char === 'C';
};
var base_0 = ["hN","M","Q:","w",">","DU$","9"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["hN","M","Q:","w",">","DU$","9"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["hN","M","Q:","w",">","DU$","9"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["hN","M","Q:","w",">","DU$","9"]
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
require("fs").writeFileSync("./experiments/some/someMined/test740.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)