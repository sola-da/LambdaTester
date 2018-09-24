





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d.units;
};
var argument2 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument3 = "";
var argument4 = function (element) {
 callbackArguments.push(arguments) 

    return element[method].apply(element, args);
};
var argument5 = {"49":"","783":49,"7.467685393779657e+307":893,"":6.729347192392119e+307,"5aK":"(MR","7.89160833416256e+306":1.7304599927084855e+308,"1.5570740932118301e+308":0,"Bt":"","4.712146541256184e+307":"ah"};
var argument6 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var base_0 = [714,-100,49]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
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
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test903.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)