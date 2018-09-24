





var callbackArguments = [];
var argument1 = function (t) {
 callbackArguments.push(arguments) 

    if (__data_types[t.id] === type) {
        has = true;
    }
    if (!(t.id in __data_types) && type === 'line') {
        has = true;
    }
};
var argument2 = function (node) {
 callbackArguments.push(arguments) 

    parent.insertBefore(node, index.nextSibling);
    index = node;
};
var argument3 = function (cancelFn) {
 callbackArguments.push(arguments) 

    (cancelFn || noop)(true);
};
var argument4 = [-1,157,100,25,0,607,213,1.7976931348623157e+308];
var argument5 = function (v, ix) {
 callbackArguments.push(arguments) 

    var r = fn(v, ix);
    if (r != null || includeNull) {
        result[ix] = r;
    }
};
var argument6 = {"893":3.6642119533505707e+307,"d":"","Ov":655,"1.5229082987936669e+308":"","4.3267806068490537e+307":5e-324,"6.931414536955372e+307":""};
var base_0 = ["o:","H","`8","+,g","5b|"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["o:","H","`8","+,g","5b|"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["o:","H","`8","+,g","5b|"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["o:","H","`8","+,g","5b|"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test91.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)