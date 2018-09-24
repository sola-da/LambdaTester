





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return $(this).attr('tabIndex') === 0;
};
var argument2 = function (d) {
 callbackArguments.push(arguments) 

    return edge[vars.edges.target][vars.id.value] === d[vars.id.value];
};
var argument3 = function (match) {
 callbackArguments.push(arguments) 

    return previousMatches.indexOf(match) !== -1;
};
var argument4 = r_0;
var argument5 = {"1.1970007654248764e+308":5.349925144616473e+307};
var argument6 = function (item) {
 callbackArguments.push(arguments) 

    return item['cols'];
};
var base_0 = ["t2i","Z|","Xz[-","EQ)O","#-","JL","FMB"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["t2i","Z|","Xz[-","EQ)O","#-","JL","FMB"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["t2i","Z|","Xz[-","EQ)O","#-","JL","FMB"]
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["t2i","Z|","Xz[-","EQ)O","#-","JL","FMB"]
var r_3= undefined
try {
r_3 = base_3.filter(argument6)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test360.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)