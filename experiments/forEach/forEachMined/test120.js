





var callbackArguments = [];
var argument1 = function (scene) {
 callbackArguments.push(arguments) 

    var linkVar = scene.vars.link, halfLabelHeight = linkVar.labelHeight / 2;
    y += halfLabelHeight;
    linkVar.targetY = y;
    y += halfLabelHeight + labelSpacing;
};
var argument2 = false;
var argument3 = function (res) {
 callbackArguments.push(arguments) 

    imports_built.push(res.build(nesting, async));
};
var argument4 = r_1;
var argument5 = function (hookName) {
 callbackArguments.push(arguments) 

    exports[hookName] = LoaderHooks[hookName];
};
var argument6 = true;
var argument7 = function (p) {
 callbackArguments.push(arguments) 

    self.on(method, p, route);
};
var base_0 = [122,893,403,"Eo(",893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,893,403,"Eo(",893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,893,403,"Eo(",893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,893,403,"Eo(",893]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test120.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)