





var callbackArguments = [];
var argument1 = function (haystack) {
 callbackArguments.push(arguments) 

    return contains(haystack, needle);
};
var argument2 = function (es) {
 callbackArguments.push(arguments) 

    return e.entityAspect.entityState === es;
};
var argument3 = function (def) {
 callbackArguments.push(arguments) 

    return def.message === 'Parameter';
};
var argument4 = 403;
var argument5 = "";
var argument6 = function (v) {
 callbackArguments.push(arguments) 

    return v2(v);
};
var argument7 = null;
var base_0 = [705,-1,0,460,618,627,0,823]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,-1,0,460,618,627,0,823]
var r_1= undefined
try {
r_1 = base_1.some(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,-1,0,460,618,627,0,823]
var r_2= undefined
try {
r_2 = base_2.some(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,-1,0,460,618,627,0,823]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someMined/test801.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)