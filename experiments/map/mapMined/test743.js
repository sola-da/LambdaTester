





var callbackArguments = [];
var argument1 = function (path) {
 callbackArguments.push(arguments) 

    return 'assets/' + path;
};
var argument2 = 6.005486792778312e+307;
var argument3 = null;
var argument4 = function () {
 callbackArguments.push(arguments) 

    return this.contentDocument || a.call(this.childNodes);
};
var argument5 = function (i, elem) {
 callbackArguments.push(arguments) 

    var val = jQuery(this).val();
    return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val, i) {
        return {
            name: elem.name,
            value: val.replace(rCRLF, '\r\n')
        };
    }) : {
        name: elem.name,
        value: val.replace(rCRLF, '\r\n')
    };
};
var argument6 = null;
var argument7 = true;
var argument8 = function (log) {
 callbackArguments.push(arguments) 

    var indents = '\t' + Array(log.reactID.split('.[').length).join('  ');
    var delta = _microTime(log.timing.delta);
    var bloat = _microTime(log.timing.timeToLog);
    return log.index + indents + log.name + ' (' + delta + 'ms)' + ' [' + bloat + 'ms]';
};
var argument9 = "";
var base_0 = [">","v8|","y","8","R","x"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [">","v8|","y","8","R","x"]
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
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test743.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)