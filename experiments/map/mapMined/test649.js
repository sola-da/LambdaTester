





var callbackArguments = [];
var argument1 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument2 = false;
var argument3 = ["+",100,"i",595,"r",969,714,126,">","l"];
var argument4 = function (log) {
 callbackArguments.push(arguments) 

    var indents = '\t' + Array(log.reactID.split('.[').length).join('  ');
    var delta = _microTime(log.timing.delta);
    var bloat = _microTime(log.timing.timeToLog);
    return log.index + indents + log.name + ' (' + delta + 'ms)' + ' [' + bloat + 'ms]';
};
var argument5 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var argument6 = false;
var argument7 = {"1":"_IQ8","100":122,"!":"","f":1.2327534357635355e+308,"1.1073416810345524e+308":"","1.1314923760512652e+308":1.5474898023762937e+308,"":"lLT"};
var argument8 = function (n) {
 callbackArguments.push(arguments) 

    return dojox.fx.addClass(n, cssClass, args);
};
var base_0 = [122,655,893,126,893,595,705]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,655,893,126,893,595,705]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test649.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)