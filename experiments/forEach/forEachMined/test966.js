





var callbackArguments = [];
var argument1 = function (n) {
 callbackArguments.push(arguments) 

    addExtension(exts[n], n);
};
var argument2 = true;
var argument3 = function (groupScene) {
 callbackArguments.push(arguments) 

    groupScene.childNodes.forEach(layoutItem, this);
};
var argument4 = function (element) {
 callbackArguments.push(arguments) 

    _remove(element.target, gesture.defaultEvent);
    array.forEach(gesture.subEvents, function (type) {
        _remove(element.target, gesture.defaultEvent + '.' + type);
    }, this);
};
var argument5 = function (c) {
 callbackArguments.push(arguments) 

    var method = c.method;
    delete c.method;
    changesObject[method] = c;
};
var base_0 = ["b","C0","sl","gF","lk0"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["b","C0","sl","gF","lk0"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["b","C0","sl","gF","lk0"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["b","C0","sl","gF","lk0"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test966.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)