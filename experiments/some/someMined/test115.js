





var callbackArguments = [];
var argument1 = function cb_some(pair) {
 callbackArguments.push(arguments) 

    return pair[0] === 'Framework' && pair[1] === 'express';
};
var argument2 = 1.172564573726222e+308;
var argument3 = null;
var argument4 = function (route) {
 callbackArguments.push(arguments) 

    return route.props.name === routeName;
};
var argument5 = r_1;
var argument6 = function (ban) {
 callbackArguments.push(arguments) 

    return ban.mask === mask;
};
var argument7 = "w";
var argument8 = function (enumType) {
 callbackArguments.push(arguments) 

    return enumType.attributes.some(function (attr) {
        return attr.name === 'Name' && attr.value === baseTypeName;
    });
};
var argument9 = r_2;
var argument10 = r_2;
var base_0 = ["kn","&",">","d","I","S","4<"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["kn","&",">","d","I","S","4<"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["kn","&",">","d","I","S","4<"]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["kn","&",">","d","I","S","4<"]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someMined/test115.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)