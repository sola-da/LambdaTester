





var callbackArguments = [];
var argument1 = function (cat) {
 callbackArguments.push(arguments) 

    var item2 = {}, elements = cat.split('__');
    item2.id = cat;
    item2.name = elements[0];
    item2.unit = elements.length > 1 ? elements[1] : '';
    return item2;
};
var argument2 = function (g) {
 callbackArguments.push(arguments) 

    return _this.scope.markerModels[g.key].model;
};
var argument3 = r_1;
var argument4 = null;
var argument5 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument6 = function (n) {
 callbackArguments.push(arguments) 

    return dojox.fx.toggleClass(n, cssClass, force, args);
};
var argument7 = null;
var base_0 = ["$","=","u","U","M","J2","P","]","M"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["$","=","u","U","M","J2","P","]","M"]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/map/mapMined/test592.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)