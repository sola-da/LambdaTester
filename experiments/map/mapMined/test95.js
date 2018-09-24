





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return $$.query(domain, children);
};
var argument2 = function (c) {
 callbackArguments.push(arguments) 

    return parseInt(c, 16);
};
var argument3 = null;
var argument4 = null;
var argument5 = function (a) {
 callbackArguments.push(arguments) 

    return parseExpr(a, tokens, newContext);
};
var argument6 = false;
var argument7 = false;
var argument8 = function (i) {
 callbackArguments.push(arguments) 

    return 'a' + i;
};
var argument9 = null;
var argument10 = "";
var base_0 = ["N",5e-324,893,"Fd","-","z",655,"h"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["N",5e-324,893,"Fd","-","z",655,"h"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["N",5e-324,893,"Fd","-","z",655,"h"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["N",5e-324,893,"Fd","-","z",655,"h"]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test95.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)