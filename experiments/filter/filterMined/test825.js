





var callbackArguments = [];
var argument1 = function (c) {
 callbackArguments.push(arguments) 

    return c[vars.edges.source][vars.id.value] != vars.focus.value[0] && c[vars.edges.target][vars.id.value] != vars.focus.value[0];
};
var argument2 = function (edge) {
 callbackArguments.push(arguments) 

    return _isBlankNodeIri(edge.s);
};
var argument3 = r_1;
var argument4 = true;
var argument5 = function (unique) {
 callbackArguments.push(arguments) 

    return unique && unique != 'undefined';
};
var argument6 = {"242":"","8.177410280856212e+307":"","":1.0762403503083373e+308,"9.563675686700742e+306":783,"1.0823732459095954e+308":-100,"1.23857659196499e+308":1.5302129470841668e+308,"[-":823,"2.062256334422249e+307":1.074888251828434e+308};
var argument7 = function (file) {
 callbackArguments.push(arguments) 

    return /\.json$/.test(file);
};
var argument8 = r_0;
var argument9 = null;
var base_0 = [595,100,607,82,122]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,100,607,82,122]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,100,607,82,122]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,100,607,82,122]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test825.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)