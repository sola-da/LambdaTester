





var callbackArguments = [];
var argument1 = function (n, i) {
 callbackArguments.push(arguments) 

    if (i > depth && a[n])
        delete a[n];
};
var argument2 = true;
var argument3 = function (cssClass) {
 callbackArguments.push(arguments) 

    element.className = trim((' ' + element.className + ' ').replace(/[\n\t]/g, ' ').replace(' ' + trim(cssClass) + ' ', ' '));
};
var argument4 = null;
var argument5 = function (component) {
 callbackArguments.push(arguments) 

    _setHue(component, 100 - 100 * component.count / info.max);
};
var argument6 = 1.4621824369651073e+308;
var argument7 = function (name) {
 callbackArguments.push(arguments) 

    set[name] = true;
};
var base_0 = [5e-324,-1,823,0,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,-1,823,0,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,-1,823,0,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,-1,823,0,1.7976931348623157e+308]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test2.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)