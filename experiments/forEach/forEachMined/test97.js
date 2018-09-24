





var callbackArguments = [];
var argument1 = function (val, key) {
 callbackArguments.push(arguments) 

    delete angular.element.fragments[key];
};
var argument2 = ["$","4","E"];
var argument3 = {"0":"",")":"","=":9.757258245623753e+307};
var argument4 = function (item) {
 callbackArguments.push(arguments) 

    console.log('  ', item.file, ':', item.line);
};
var argument5 = null;
var argument6 = null;
var argument7 = function (scene) {
 callbackArguments.push(arguments) 

    null == scene.x && (scene.x = scene.y = scene.dx = scene.dy = 0);
};
var argument8 = null;
var argument9 = function (obj) {
 callbackArguments.push(arguments) 

    if (obj !== dst && _.isObject(obj)) {
        for (var key in obj) {
            if (!_defineAccessor(dst, obj, key)) {
                dst[key] = _deepClone(obj[key], _extendWithGetSet);
            }
        }
    }
};
var argument10 = r_3;
var base_0 = ["C",-1,"H-Bh%hr","M","_z4t)","|",213,"-",157]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["C",-1,"H-Bh%hr","M","_z4t)","|",213,"-",157]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["C",-1,"H-Bh%hr","M","_z4t)","|",213,"-",157]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["C",-1,"H-Bh%hr","M","_z4t)","|",213,"-",157]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test97.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)