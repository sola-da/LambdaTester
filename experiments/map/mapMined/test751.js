





var callbackArguments = [];
var argument1 = function (result) {
 callbackArguments.push(arguments) 

    return Highlight.allFold(result.text, [query]);
};
var argument2 = {"157":"@I","627":1.7746225295711332e+308,")=":"l","":"","%0":1.4347598453002828e+308,"1.7733798282174068e+308":"x"};
var argument3 = function (dependant) {
 callbackArguments.push(arguments) 

    var release = dependant.pkgMeta._release;
    return dependant.endpoint.name + (release ? '#' + release : '');
};
var argument4 = function (id) {
 callbackArguments.push(arguments) 

    return attributes.as().find(id);
};
var argument5 = {"0":"","1.3156402747240127e+307":1.1509796447271616e+307,"":"","(t":"","3.375493780022009e+307":1.7976931348623157e+308};
var argument6 = r_0;
var argument7 = function (value) {
 callbackArguments.push(arguments) 

    if (value instanceof BigNumber) {
        asBigNumber = true;
        value = value.toNumber();
    }
    if (!isNumber(value) || !isInteger(value) || value < 0) {
        throw new Error('Parameters in function eye must be positive integers');
    }
    return value;
};
var base_0 = [823,157,705,714,403]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,157,705,714,403]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,157,705,714,403]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,157,705,714,403]
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
require("fs").writeFileSync("./experiments/map/mapMined/test751.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)