





var callbackArguments = [];
var argument1 = function (k) {
 callbackArguments.push(arguments) 

    self[k] = 0;
};
var argument2 = function (itemData) {
 callbackArguments.push(arguments) 

    var itemScene = groupScene.createItem({ source: itemData }), itemValue = axis.domainItemValue(itemData);
    itemScene.color = colorScale(itemValue);
};
var argument3 = function (value) {
 callbackArguments.push(arguments) 

    output.push(value);
};
var argument4 = null;
var argument5 = {"M":"","<]e":"U","1.4267930555683396e+308":9.845725765113732e+307};
var argument6 = function (catData1) {
 callbackArguments.push(arguments) 

    createSeriesCategoryScene.call(me, serScene, catData1, serData1);
};
var argument7 = "JtvB";
var argument8 = null;
var base_0 = [1.7976931348623157e+308,595,893,122,823,403,-1,618]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,595,893,122,823,403,-1,618]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,595,893,122,823,403,-1,618]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,595,893,122,823,403,-1,618]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test192.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)