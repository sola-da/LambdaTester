





var callbackArguments = [];
var argument1 = function (pp) {
 callbackArguments.push(arguments) 

    return context.propertyPathFn(pp);
};
var argument2 = 1.3590392733014913e+308;
var argument3 = function (param) {
 callbackArguments.push(arguments) 

    return param ? decodeURIComponent(param) : null;
};
var argument4 = function (c) {
 callbackArguments.push(arguments) 

    return superscript[c];
};
var argument5 = true;
var argument6 = function (p) {
 callbackArguments.push(arguments) 

    if (p) {
        return p;
    }
};
var argument7 = r_2;
var argument8 = null;
var base_0 = ["*,","c"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["*,","c"]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test332.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)