





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    return x.value || x;
};
var argument2 = 4.563340862023984e+307;
var argument3 = function (v) {
 callbackArguments.push(arguments) 

    v.sentence = v.name + ' is also a ' + result.name;
    return v;
};
var argument4 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var argument5 = true;
var argument6 = false;
var argument7 = function (cName) {
 callbackArguments.push(arguments) 

    var sName = nc.clientPropertyNameToServer(cName, parent);
    var testName = nc.serverPropertyNameToClient(sName, parent);
    if (cName !== testName) {
        throw new Error('NamingConvention for this client property name does not roundtrip properly:' + cName + '-->' + testName);
    }
    return sName;
};
var argument8 = null;
var argument9 = ["T","<","J","9z","c","`"];
var base_0 = [893]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test648.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)