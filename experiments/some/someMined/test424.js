





var callbackArguments = [];
var argument1 = function (feature) {
 callbackArguments.push(arguments) 

    return feature.name === cachingLayer;
};
var argument2 = function (colObj) {
 callbackArguments.push(arguments) 

    return !!colObj.name.match(/\.col2$/);
};
var argument3 = [969,607,783,969,"P","%N","3>"];
var argument4 = function (item) {
 callbackArguments.push(arguments) 

    return typeof item == 'number' || item && !item.hasOwnProperty('x');
};
var argument5 = function (key) {
 callbackArguments.push(arguments) 

    var m = /(traceur@[^\/]*\/)/.exec(key);
    if (m) {
        $__0.testingPrefix_ = m[1];
        return true;
    }
};
var base_0 = [126,157,100,403,607]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,157,100,403,607]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,157,100,403,607]
var r_2= undefined
try {
r_2 = base_2.some(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,157,100,403,607]
var r_3= undefined
try {
r_3 = base_3.some(argument5)
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
require("fs").writeFileSync("./experiments/some/someMined/test424.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)