





var callbackArguments = [];
var argument1 = function (value, key) {
 callbackArguments.push(arguments) 

    var stop = iter(CS.PackageAndVersion.fromString(key), value);
    return stop;
};
var argument2 = {"157":"@I","627":1.7746225295711332e+308,")=":"l","":"","%0":1.4347598453002828e+308,"1.7733798282174068e+308":"x"};
var argument3 = function (doc) {
 callbackArguments.push(arguments) 

    return doc.a === 42;
};
var argument4 = function (plugin) {
 callbackArguments.push(arguments) 

    return plugin.prototype.name === name;
};
var argument5 = {"0":"","1.3156402747240127e+307":1.1509796447271616e+307,"":"","(t":"","3.375493780022009e+307":1.7976931348623157e+308};
var argument6 = r_0;
var argument7 = function (err, docs) {
 callbackArguments.push(arguments) 

    assert.isNull(err);
    docs.length.should.equal(0);
    return cb();
};
var base_0 = [823,157,705,714,403]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,157,705,714,403]
var r_1= undefined
try {
r_1 = base_1.find(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,157,705,714,403]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,157,705,714,403]
var r_3= undefined
try {
r_3 = base_3.find(argument7)
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
require("fs").writeFileSync("./experiments/find/findMined/test705.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)