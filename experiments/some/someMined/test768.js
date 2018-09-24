





var callbackArguments = [];
var argument1 = function (module) {
 callbackArguments.push(arguments) 

    return ngDeps.modules[module].indexOf(dependency) > -1;
};
var argument2 = {"618":"","-1":893,"1.46423611865254e+308":"","":714};
var argument3 = r_0;
var argument4 = function cb_some(pair) {
 callbackArguments.push(arguments) 

    return pair[0] === 'Framework' && pair[1] === 'express';
};
var argument5 = r_0;
var argument6 = "32";
var argument7 = function (p) {
 callbackArguments.push(arguments) 

    var principalType = p.message || undefined;
    var principalId = p.id || undefined;
    return principalType === RoleMapping.ROLE && principalId === role;
};
var argument8 = 655;
var argument9 = [126,403,403,122,783,25,823,59,714];
var argument10 = function (context) {
 callbackArguments.push(arguments) 

    return context.fn(context, self.v);
};
var base_0 = ["a*","i+b#",")f","[","{^"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["a*","i+b#",")f","[","{^"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["a*","i+b#",")f","[","{^"]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["a*","i+b#",")f","[","{^"]
var r_3= undefined
try {
r_3 = base_3.some(argument10)
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
require("fs").writeFileSync("./experiments/some/someMined/test768.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)