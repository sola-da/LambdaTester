





var callbackArguments = [];
var argument1 = function (val) {
 callbackArguments.push(arguments) 

    var token = val[0];
    var value = val[1];
    if (token && value)
        token.first = value;
    else if (token && token.first && !value)
        warning('W080', token.first, token.first.value);
};
var argument2 = function (key) {
 callbackArguments.push(arguments) 

    spec[key] = compileType(env, type.fields[key]);
};
var argument3 = function (categScene) {
 callbackArguments.push(arguments) 

    totalHeight += categScene.vars.link.labelHeight;
};
var argument4 = null;
var argument5 = r_2;
var argument6 = function (name) {
 callbackArguments.push(arguments) 

    angmods[name] = file;
};
var argument7 = null;
var base_0 = ["j","D","@I","vL","gb","R","j}","w"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["j","D","@I","vL","gb","R","j}","w"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["j","D","@I","vL","gb","R","j}","w"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["j","D","@I","vL","gb","R","j}","w"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test913.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)