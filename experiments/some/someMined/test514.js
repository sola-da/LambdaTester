





var callbackArguments = [];
var argument1 = function cb_some(r) {
 callbackArguments.push(arguments) 

    return deepEqual(r, rule);
};
var argument2 = {"213":49,"403":2.208461208739234e+307,",pI":1.027126184208907e+308,"":705,"|":"","T":"G","1.8120180085002136e+307":1.4506877547765539e+308,"Q{":7.361484079423645e+307};
var argument3 = r_0;
var argument4 = function (item) {
 callbackArguments.push(arguments) 

    return start >= item.start && end <= item.end;
};
var argument5 = 7.911549049446629e+307;
var argument6 = r_1;
var argument7 = function (scope) {
 callbackArguments.push(arguments) 

    var snippets = snippetMap[scope];
    if (snippets)
        snippet = snippets[name];
    return !!snippet;
};
var argument8 = true;
var argument9 = "";
var argument10 = function (route) {
 callbackArguments.push(arguments) 

    return route.props.name === routeName;
};
var argument11 = r_0;
var argument12 = 607;
var base_0 = ["a",126,100,"D"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["a",126,100,"D"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["a",126,100,"D"]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["a",126,100,"D"]
var r_3= undefined
try {
r_3 = base_3.some(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/some/someMined/test514.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)