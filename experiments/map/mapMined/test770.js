





var callbackArguments = [];
var argument1 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    var offsetParent = this.offsetParent || docElem;
    while (offsetParent && (!jQuery.nodeName(offsetParent, 'html') && jQuery.css(offsetParent, 'position') === 'static')) {
        offsetParent = offsetParent.offsetParent;
    }
    return offsetParent || docElem;
};
var argument3 = false;
var argument4 = [655,607,-100,460,1.7976931348623157e+308,893,1.7976931348623157e+308,823];
var argument5 = function (e) {
 callbackArguments.push(arguments) 

    return e ? e[2] : null;
};
var argument6 = function (log) {
 callbackArguments.push(arguments) 

    var indents = '\t' + Array(log.reactID.split('.[').length).join('  ');
    var delta = _microTime(log.timing.delta);
    var bloat = _microTime(log.timing.timeToLog);
    return log.index + indents + log.name + ' (' + delta + 'ms)' + ' [' + bloat + 'ms]';
};
var argument7 = 1.7976931348623157e+308;
var argument8 = "D";
var base_0 = ["W",823,"4",49,714,122,"oQ","=","T","X{"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["W",823,"4",49,714,122,"oQ","=","T","X{"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["W",823,"4",49,714,122,"oQ","=","T","X{"]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/map/mapMined/test770.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)