





var callbackArguments = [];
var argument1 = function (pair) {
 callbackArguments.push(arguments) 

    fun(pair[0], pair[1]);
};
var argument2 = function (registration) {
 callbackArguments.push(arguments) 

    if (registration.observer === observer)
        registration.removeTransientObservers();
};
var argument3 = {"-1":"!Q","":1.1286026536380947e+307,"[":"#I{g"};
var argument4 = function (animation) {
 callbackArguments.push(arguments) 

    animation.fn && animations.push(animation);
};
var argument5 = function (listener) {
 callbackArguments.push(arguments) 

    try {
        listener();
    } catch (e) {
        FBTrace.sysout('SelectionController.selectionChanged; EXCEPTION ' + e, e);
        FBTestApp.FBTest.exception('SelectionController', e);
    }
};
var argument6 = ["A","a-7(",242,"+m",100,242,"^","hEky"];
var base_0 = ["&L8;","|_",460,969,"W"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["&L8;","|_",460,969,"W"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["&L8;","|_",460,969,"W"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["&L8;","|_",460,969,"W"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test886.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)