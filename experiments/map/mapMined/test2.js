





var callbackArguments = [];
var argument1 = function (p, i) {
 callbackArguments.push(arguments) 

    return [
        i,
        Math.abs(p - median) / mad
    ];
};
var argument2 = true;
var argument3 = function (r) {
 callbackArguments.push(arguments) 

    var failText = 'OOM';
    if (r.data.timeout)
        failText = 'T/O';
    return [
        path.basename(r.file),
        r.data.mem != null ? r.data.time : failText,
        r.data.mem != null ? r.data.mem.toFixed(2) : failText
    ];
};
var argument4 = null;
var argument5 = function (x) {
 callbackArguments.push(arguments) 

    return x.shift();
};
var argument6 = 1.4621824369651073e+308;
var argument7 = function (val) {
 callbackArguments.push(arguments) 

    return {
        name: elem.name,
        value: val.replace(rCRLF, '\r\n')
    };
};
var base_0 = [5e-324,-1,823,0,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,-1,823,0,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,-1,823,0,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,-1,823,0,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test2.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)