





var callbackArguments = [];
var argument1 = function (col) {
 callbackArguments.push(arguments) 

    return generateHashMap(col);
};
var argument2 = function (i) {
 callbackArguments.push(arguments) 

    return 'b' + i + '=this._stride' + i;
};
var argument3 = function (value) {
 callbackArguments.push(arguments) 

    return value * 2;
};
var argument4 = r_2;
var argument5 = function (value) {
 callbackArguments.push(arguments) 

    var item = {};
    item.value = value;
    item.selected = item.value == selectedValue;
    return item;
};
var argument6 = null;
var base_0 = [783,655]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,655]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,655]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,655]
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test517.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)