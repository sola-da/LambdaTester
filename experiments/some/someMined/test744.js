





var callbackArguments = [];
var argument1 = function (pathRe) {
 callbackArguments.push(arguments) 

    return pathRe.test(path);
};
var argument2 = function (co) {
 callbackArguments.push(arguments) 

    return coHasOriginalValues(co);
};
var argument3 = "";
var argument4 = false;
var argument5 = function (p) {
 callbackArguments.push(arguments) 

    try {
        var dom = new ActiveXObject(p);
        dom.async = false;
        dom.loadXML(xhr.responseText);
        result = dom;
    } catch (e) {
        return false;
    }
    return true;
};
var argument6 = "";
var argument7 = null;
var argument8 = function (el) {
 callbackArguments.push(arguments) 

    return el.num === 2 && el.char === 'B';
};
var base_0 = ["5",")","u",")","x","JnBlw"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["5",")","u",")","x","JnBlw"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["5",")","u",")","x","JnBlw"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["5",")","u",")","x","JnBlw"]
var r_3= undefined
try {
r_3 = base_3.some(argument8)
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
require("fs").writeFileSync("./experiments/some/someMined/test744.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)