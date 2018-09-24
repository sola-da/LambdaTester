





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    return context.propertyPathFn(item.propertyPath) + (item.isDesc ? ' desc' : '');
};
var argument2 = 607;
var argument3 = function (cat) {
 callbackArguments.push(arguments) 

    var item2 = {}, elements = cat.split('__');
    item2.id = cat;
    item2.name = elements[0];
    item2.unit = elements.length > 1 ? elements[1] : '';
    return item2;
};
var argument4 = 5.89764159693238e+307;
var argument5 = function (v) {
 callbackArguments.push(arguments) 

    return scale.invert((v - b) * j / k + a);
};
var argument6 = "!";
var argument7 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var argument8 = ["w","-_<","|","u[J"];
var argument9 = r_3;
var base_0 = [607,49,843,242]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,49,843,242]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,49,843,242]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,49,843,242]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test559.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)