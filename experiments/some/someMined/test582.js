





var callbackArguments = [];
var argument1 = function (cp) {
 callbackArguments.push(arguments) 

    return cpHasOriginalValues(co, cp);
};
var argument2 = ["twf","7hd","In","p","geUE","F","M","Sg"];
var argument3 = function (route) {
 callbackArguments.push(arguments) 

    return route.props.name === routeName;
};
var argument4 = null;
var argument5 = null;
var argument6 = function (def) {
 callbackArguments.push(arguments) 

    return def.message === 'Parameter';
};
var argument7 = 3.6985111301903724e+307;
var argument8 = function (v) {
 callbackArguments.push(arguments) 

    return v2(v);
};
var base_0 = [705,893,"F_",655,"&5l","O?",242,627,893]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,893,"F_",655,"&5l","O?",242,627,893]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,893,"F_",655,"&5l","O?",242,627,893]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,893,"F_",655,"&5l","O?",242,627,893]
var r_3= undefined
try {
r_3 = base_3.some(argument8)
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
require("fs").writeFileSync("./experiments/some/someMined/test582.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)