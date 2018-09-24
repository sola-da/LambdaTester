





var callbackArguments = [];
var argument1 = function (dep, index) {
 callbackArguments.push(arguments) 

    return depMap[dep] = $__0[index];
};
var argument2 = null;
var argument3 = true;
var argument4 = function (el) {
 callbackArguments.push(arguments) 

    if (el.tagName && (el.hasAttribute('tab-heading') || el.hasAttribute('data-tab-heading') || el.tagName.toLowerCase() == 'tab-heading' || el.tagName.toLowerCase() == 'data-tab-heading')) {
        heading = el;
    } else {
        contents.push(el);
    }
};
var argument5 = function (side) {
 callbackArguments.push(arguments) 

    self[side] = value;
};
var argument6 = function (obj) {
 callbackArguments.push(arguments) 

    var node = obj.item.node;
    var position = dojo.position(node, true);
    var y = position.y + position.h / 2;
    obj.y = y;
};
var base_0 = ["V","IU2&Cx0X","c","K","F@","2","I","f","K"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["V","IU2&Cx0X","c","K","F@","2","I","f","K"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["V","IU2&Cx0X","c","K","F@","2","I","f","K"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["V","IU2&Cx0X","c","K","F@","2","I","f","K"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test276.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)