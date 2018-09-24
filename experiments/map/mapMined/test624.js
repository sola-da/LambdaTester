





var callbackArguments = [];
var argument1 = function (sName) {
 callbackArguments.push(arguments) 

    var cName = nc.serverPropertyNameToClient(sName, parent);
    var testName = nc.clientPropertyNameToServer(cName, parent);
    if (sName !== testName) {
        throw new Error('NamingConvention for this server property name does not roundtrip properly:' + sName + '-->' + testName);
    }
    return cName;
};
var argument2 = function (t) {
 callbackArguments.push(arguments) 

    return t.height;
};
var argument3 = {"7":"GF","403":2.692319671688838e+306,"B":8.046318577065499e+307};
var argument4 = true;
var argument5 = function (value, index, list) {
 callbackArguments.push(arguments) 

    return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
    };
};
var argument6 = null;
var argument7 = function () {
 callbackArguments.push(arguments) 

    var elements = jQuery.prop(this, 'elements');
    return elements ? jQuery.makeArray(elements) : this;
};
var argument8 = null;
var argument9 = false;
var base_0 = ["W","zs<VK","z","L","o<","S","m","|"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["W","zs<VK","z","L","o<","S","m","|"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["W","zs<VK","z","L","o<","S","m","|"]
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
require("fs").writeFileSync("./experiments/map/mapMined/test624.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)