





var callbackArguments = [];
var argument1 = function (i) {
 callbackArguments.push(arguments) 

    return start + step * i;
};
var argument2 = null;
var argument3 = true;
var argument4 = function (v) {
 callbackArguments.push(arguments) 

    v.sentence = v.name + ' is also a ' + result.name;
    return v;
};
var argument5 = function (sName) {
 callbackArguments.push(arguments) 

    var cName = nc.serverPropertyNameToClient(sName, parent);
    var testName = nc.clientPropertyNameToServer(cName, parent);
    if (sName !== testName) {
        throw new Error('NamingConvention for this server property name does not roundtrip properly:' + sName + '-->' + testName);
    }
    return cName;
};
var argument6 = function () {
 callbackArguments.push(arguments) 

    var elem = this;
    while (elem.firstChild && elem.firstChild.nodeType === 1) {
        elem = elem.firstChild;
    }
    return elem;
};
var argument7 = null;
var base_0 = [823,"E<!G"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,"E<!G"]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,"E<!G"]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,"E<!G"]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test329.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)