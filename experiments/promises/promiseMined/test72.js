/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = p2;
var argument2 = function (exist) {
 callbackArguments.push(arguments) 

    if (!exist)
        return {};
    return self.render.render({ path: configPath });
};
var argument3 = {"157":5.976182138529715e+307,"6.535366459651043e+307":1.7976931348623157e+308," ":">","-^":"K","FuR":"df","1.6084703744001822e+308":823};
var argument4 = function (err) {
 callbackArguments.push(arguments) 

    throw err;
};
var argument5 = function () {
 callbackArguments.push(arguments) 

    ui.enableAnimations();
};
var argument6 = true;
var argument7 = p2;
var argument8 = function (newContext) {
 callbackArguments.push(arguments) 

    setContext(newContext);
    return newContext;
};
var argument9 = null;
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.then(argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.then(argument5,argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.then(argument7,argument8,argument9)
}
catch(e) {
r_3= e.message
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test72.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)