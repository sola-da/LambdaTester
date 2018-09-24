





var callbackArguments = [];
var argument1 = function (asserterName) {
 callbackArguments.push(arguments) 

    if (!excludeNames.test(asserterName)) {
        var pd = Object.getOwnPropertyDescriptor(ctx, asserterName);
        Object.defineProperty(assert, asserterName, pd);
    }
};
var argument2 = {"5e-324":5.821860869131808e+307,"3N":100,"2.2466033016731323e+307":"","5.828554866408248e+307":8.620047289678011e+307};
var argument3 = "";
var argument4 = function (e) {
 callbackArguments.push(arguments) 

    if (placed.indexOf(e) < 0) {
        if (!a[''])
            a[''] = [];
        a[''].push(e);
    }
};
var argument5 = null;
var argument6 = "";
var argument7 = function (np) {
 callbackArguments.push(arguments) 

    tryResolveNp(np, metadataStore);
};
var argument8 = function (p) {
 callbackArguments.push(arguments) 

    result.push('bezierCurveTo', p);
};
var argument9 = null;
var argument10 = {"213":705,"595":1.2729609262523522e+308,"3.2311664216433236e+307":5.460237404550339e+306,"X":122};
var base_0 = [1.7976931348623157e+308,242]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,242]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,242]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,242]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test318.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)