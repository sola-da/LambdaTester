





var callbackArguments = [];
var argument1 = function (i) {
 callbackArguments.push(arguments) 

    ret.push.apply(ret, i);
};
var argument2 = 1.3590392733014913e+308;
var argument3 = function (value) {
 callbackArguments.push(arguments) 

    if (value)
        list.push(trim(value));
};
var argument4 = function (e) {
 callbackArguments.push(arguments) 

    if (placed.indexOf(e) < 0) {
        if (!a[''])
            a[''] = [];
        a[''].push(e);
    }
};
var argument5 = true;
var argument6 = function (obj) {
 callbackArguments.push(arguments) 

    var node = obj.item.node;
    var position = dojo.position(node, true);
    var y = position.y + position.h / 2;
    obj.y = y;
};
var argument7 = r_2;
var argument8 = null;
var base_0 = ["*,","c"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["*,","c"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["*,","c"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["*,","c"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test315.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)