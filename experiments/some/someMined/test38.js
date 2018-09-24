





var callbackArguments = [];
var argument1 = function (element) {
 callbackArguments.push(arguments) 

    if (currentModel.location === element.location) {
        return true;
    } else if (element.checked) {
        changeIndex++;
    }
    return false;
};
var argument2 = [460,627,25,122,655,-100];
var argument3 = function (hint) {
 callbackArguments.push(arguments) 

    return splitUrl[0].indexOf(hint) > -1;
};
var argument4 = function cb_some(pair) {
 callbackArguments.push(arguments) 

    return pair[0] === 'Framework' && pair[1] === 'express';
};
var argument5 = {"213":1.7976931348623157e+308,"460":1.142579146076573e+308,"1.2488183658680197e+308":"","=":1.611621919728253e+308};
var argument6 = null;
var argument7 = function (context) {
 callbackArguments.push(arguments) 

    return context.fn(context, self.v);
};
var argument8 = true;
var argument9 = r_0;
var base_0 = ["7","u","<#",">h","b",714]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["7","u","<#",">h","b",714]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["7","u","<#",">h","b",714]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["7","u","<#",">h","b",714]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someMined/test38.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)