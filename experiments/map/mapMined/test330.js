





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var argument2 = {"25":843,"595":-100,"":893,"8.87662732879263e+307":"0j_3Nvx)","&[{":843,"6.926289308130139e+307":618,"-1":"ot"};
var argument3 = true;
var argument4 = function (c) {
 callbackArguments.push(arguments) 

    return clamp(Math.round(c), 255);
};
var argument5 = true;
var argument6 = [460,823,-100,122,893];
var argument7 = function (instr) {
 callbackArguments.push(arguments) 

    return instr.flatten();
};
var argument8 = function (expr) {
 callbackArguments.push(arguments) 

    return expr.visit(context);
};
var argument9 = r_3;
var argument10 = "-";
var base_0 = [714,823,618,403,157,783]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,823,618,403,157,783]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,823,618,403,157,783]
var r_2= undefined
try {
r_2 = base_2.map(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,823,618,403,157,783]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test330.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)