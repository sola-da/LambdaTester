





var callbackArguments = [];
var argument1 = function (param) {
 callbackArguments.push(arguments) 

    return new CSSString(param);
};
var argument2 = "lT";
var argument3 = false;
var argument4 = function (side) {
 callbackArguments.push(arguments) 

    return (paddings[side] || 0).toFixed(0);
};
var argument5 = null;
var argument6 = r_1;
var argument7 = function (model) {
 callbackArguments.push(arguments) 

    return model.serialize(options);
};
var argument8 = 4.373907142014289e+307;
var argument9 = function (expr) {
 callbackArguments.push(arguments) 

    return expr.visit(context);
};
var argument10 = null;
var base_0 = [655,714,157,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,714,157,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,714,157,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,714,157,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test409.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)