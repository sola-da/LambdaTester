





var callbackArguments = [];
var argument1 = function (obj, style) {
 callbackArguments.push(arguments) 

    style = style.split(':').map(function (a) {
        return a.trim();
    });
    obj[style[0]] = style[1];
    return obj;
};
var argument2 = true;
var argument3 = function (sum, suite) {
 callbackArguments.push(arguments) 

    return sum + suite.total();
};
var argument4 = "_m";
var argument5 = function (acc, join) {
 callbackArguments.push(arguments) 

    acc.push(makePunc(punc, join), join);
    return acc;
};
var argument6 = function (prev, current, i, arr) {
 callbackArguments.push(arguments) 

    return doMerge(prev, current, true).tree;
};
var argument7 = true;
var base_0 = [893,"H",":8",1.7976931348623157e+308,242,126]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,"H",":8",1.7976931348623157e+308,242,126]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,"H",":8",1.7976931348623157e+308,242,126]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,"H",":8",1.7976931348623157e+308,242,126]
var r_3= undefined
try {
r_3 = base_3.reduce(argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test395.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)