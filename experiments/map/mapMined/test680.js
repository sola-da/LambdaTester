





var callbackArguments = [];
var argument1 = function (v, i) {
 callbackArguments.push(arguments) 

    return v == null ? i > 2 ? 1 : 0 : v;
};
var argument2 = {"627":1.2919816358535927e+308,"N":"","hJO<m:":1.5661057543339627e+308,"5.630136372762921e+307":705,"":9.913324905943402e+307,"1o":"","I":82};
var argument3 = function (a) {
 callbackArguments.push(arguments) 

    return a.eval(env);
};
var argument4 = [618,607,783,595,49,126];
var argument5 = r_1;
var argument6 = function (result) {
 callbackArguments.push(arguments) 

    return Highlight.allFold(result.text, queryWords);
};
var argument7 = r_2;
var argument8 = function (c) {
 callbackArguments.push(arguments) 

    return c.name;
};
var base_0 = [969,705,705,655,607]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,705,705,655,607]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,705,705,655,607]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test680.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)