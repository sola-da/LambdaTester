





var callbackArguments = [];
var argument1 = function (target) {
 callbackArguments.push(arguments) 

    if (/\.js$/.test(target))
        pbjs.targets[target.substring(0, target.lastIndexOf('.'))] = require(__dirname + '/pbjs/targets/' + target);
};
var argument2 = null;
var argument3 = function (file) {
 callbackArguments.push(arguments) 

    files.push(file);
};
var argument4 = function _(key, value) {
 callbackArguments.push(arguments) 

    f(key);
};
var argument5 = null;
var argument6 = function (fn) {
 callbackArguments.push(arguments) 

    if (!fn.only || (fn.only = 'prop' && type == 'prop') || fn.only == 'attr' && type != 'prop') {
        fn.call(elem, value, boolValue, isVal ? 'val' : curType, type);
    }
};
var argument7 = false;
var argument8 = {"":126,"H":1.4414222184291631e+308,"9.234748031560332e+307":""};
var base_0 = ["&oZ","p","2HrK","#","_[",",fX`#+^","*"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["&oZ","p","2HrK","#","_[",",fX`#+^","*"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["&oZ","p","2HrK","#","_[",",fX`#+^","*"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["&oZ","p","2HrK","#","_[",",fX`#+^","*"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test250.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)