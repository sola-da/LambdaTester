





var callbackArguments = [];
var argument1 = function (path) {
 callbackArguments.push(arguments) 

    if (parts.indexOf(path) !== -1)
        return;
    bad = true;
};
var argument2 = function (obj) {
 callbackArguments.push(arguments) 

    if (obj !== dst) {
        forEach(obj, function (value, key) {
            dst[key] = value;
        });
    }
};
var argument3 = function (node) {
 callbackArguments.push(arguments) 

    node.innerHTML = content;
};
var argument4 = function (child) {
 callbackArguments.push(arguments) 

    arr.push(child.getValue());
};
var argument5 = {"595":82,"618":"","":"","?x":1.2940164662496843e+308,")":49,"k]":"","7.543800883871523e+307":8.743279081115751e+307};
var argument6 = null;
var base_0 = [460,213,122]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,213,122]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,213,122]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,213,122]
var r_3= undefined
try {
r_3 = base_3.forEach(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test152.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)