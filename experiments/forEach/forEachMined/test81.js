





var callbackArguments = [];
var argument1 = function (name) {
 callbackArguments.push(arguments) 

    set[name] = true;
};
var argument2 = false;
var argument3 = function (fn) {
 callbackArguments.push(arguments) 

    nodeNameCache[name].each(fn);
};
var argument4 = function (type) {
 callbackArguments.push(arguments) 

    var typeAxes = this.axesByType[type];
    typeAxes && def.query(typeAxes).reverse().each(function (axis) {
        this._createAxisPanel(axis);
    }, this);
};
var argument5 = function (item) {
 callbackArguments.push(arguments) 

    var height = (items.length + (item.submenu ? item.submenu.length : 0)) * 24;
    me.maxHeight = Math.max(me.maxHeight, height);
};
var argument6 = r_0;
var argument7 = [157,893,157,82,242,655];
var base_0 = [1.7976931348623157e+308,-1,618,893,705,823,403]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,-1,618,893,705,823,403]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,-1,618,893,705,823,403]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,-1,618,893,705,823,403]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test81.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)