





var callbackArguments = [];
var argument1 = function (params, paramName) {
 callbackArguments.push(arguments) 

    params[paramName] = rootParams[paramName];
    return params;
};
var argument2 = false;
var argument3 = null;
var argument4 = function (acc, x) {
 callbackArguments.push(arguments) 

    if (acc === null) {
        return [
            x,
            opts,
            []
        ];
    } else {
        return [
            x,
            { status: 'missing' },
            [acc]
        ];
    }
};
var argument5 = [1.7976931348623157e+308,655];
var argument6 = function (a, b) {
 callbackArguments.push(arguments) 

    return a * b;
};
var argument7 = function (acc, join) {
 callbackArguments.push(arguments) 

    acc.push(makePunc(punc, join), join);
    return acc;
};
var argument8 = null;
var argument9 = false;
var base_0 = [122,969,"o",969]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,969,"o",969]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,969,"o",969]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test358.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)