





var callbackArguments = [];
var argument1 = function (animation) {
 callbackArguments.push(arguments) 

    animation.fn && animations.push(animation);
};
var argument2 = null;
var argument3 = true;
var argument4 = function (n) {
 callbackArguments.push(arguments) 

    self.attachButtonBehavior(n, self.firstBtnClass, self.firstFunc);
};
var argument5 = null;
var argument6 = function (defaultValue, key) {
 callbackArguments.push(arguments) 

    if (angular.isUndefined(scope[key]) || scope[key] === null) {
        return opts[key] = defaultValue;
    } else {
        return opts[key] = scope[key];
    }
};
var argument7 = function (field) {
 callbackArguments.push(arguments) 

    if (field != 'Id' && obj[field] !== orig[field])
        diff[field] = obj[field];
};
var argument8 = r_2;
var argument9 = true;
var base_0 = ["H","Y","6"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["H","Y","6"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["H","Y","6"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["H","Y","6"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test769.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)