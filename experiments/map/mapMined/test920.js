





var callbackArguments = [];
var argument1 = function (arg) {
 callbackArguments.push(arguments) 

    argType = type(arg);
    return argType == 'object' || argType == 'array' || arg == null ? arg : zepto.fragment(arg);
};
var argument2 = function (s) {
 callbackArguments.push(arguments) 

    if (s.count === 0) {
        throw new Error('The input sequence was empty');
    }
    return s.sum / s.count;
};
var argument3 = function (n) {
 callbackArguments.push(arguments) 

    return dojox.fx.addClass(n, cssClass, args);
};
var argument4 = null;
var argument5 = function (m) {
 callbackArguments.push(arguments) 

    return format(new Date(m));
};
var argument6 = {"1.3501478214930876e+308":6.577302108571356e+307};
var argument7 = r_3;
var base_0 = [49,607,627,969,0,122,-100,618,242]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,607,627,969,0,122,-100,618,242]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test920.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)