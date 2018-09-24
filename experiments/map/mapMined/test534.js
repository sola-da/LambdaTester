





var callbackArguments = [];
var argument1 = function (cName) {
 callbackArguments.push(arguments) 

    var sName = nc.clientPropertyNameToServer(cName, parent);
    var testName = nc.serverPropertyNameToClient(sName, parent);
    if (cName !== testName) {
        throw new Error('NamingConvention for this client property name does not roundtrip properly:' + cName + '-->' + testName);
    }
    return sName;
};
var argument2 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument3 = false;
var argument4 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var argument5 = {"59":1.4222511071076676e+308,"126":"]","403":"V","714":"","1.4508715229753978e+308":"","1.558371262070275e+308":-100,"":"Kc","7.152180681931094e+307":"s'$","<":""};
var argument6 = null;
var argument7 = function (e) {
 callbackArguments.push(arguments) 

    return e.toCSS();
};
var base_0 = [460,0,100,595,25,0]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,0,100,595,25,0]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,0,100,595,25,0]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,0,100,595,25,0]
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
require("fs").writeFileSync("./experiments/map/mapMined/test534.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)