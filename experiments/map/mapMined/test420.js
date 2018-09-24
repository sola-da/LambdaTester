





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return vars.format.value(d, vars.x.value);
};
var argument2 = function (x, i) {
 callbackArguments.push(arguments) 

    return [
        'param' + i,
        x
    ];
};
var argument3 = function (idef) {
 callbackArguments.push(arguments) 

    return findMissingTest(idef);
};
var argument4 = function (row) {
 callbackArguments.push(arguments) 

    return row.doc.dbname;
};
var argument5 = r_3;
var argument6 = false;
var base_0 = ["=",82,403,607,969,"@4zZ","Bn)","^2"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["=",82,403,607,969,"@4zZ","Bn)","^2"]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["=",82,403,607,969,"@4zZ","Bn)","^2"]
var r_3= undefined
try {
r_3 = base_3.map(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test420.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)