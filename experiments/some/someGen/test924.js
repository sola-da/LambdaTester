





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4][8] = 25
base_0[2][5] = {"1.2699999080359944e+308":"","H":2.4424343575449073e+307,"":"@m9<"}
return a*b/c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['f'] = {"213":25,"wpt":"S71a"}
argument5[122] = 1.1430121554813126e+308
return a/b+c
};
var argument4 = false;
var argument5 = 2.930245954917527e+306;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][2] = 6.884933396975681e+307
return a/b/c
};
var argument7 = r_1;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2][5] = null
argument9[4] = null
base_3[5][1] = {"403":"","1.7976931348623157e+308":"1","":"_","1.2245804065868134e+308":1.6125401021723595e+308,"1.6059380021281525e+308":1.1191297343714261e+308,"1.7960242061467857e+308":8.507813803289103e+307,"3.326386079205909e+306":705,"-q":122,"7.00981346146076e+307":" "}
return a+b-c
};
var base_0 = ["Uw","W<QzH#On",":9","-S",">","4!"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Uw","W<QzH#On",":9","-S",">","4!"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Uw","W<QzH#On",":9","-S",">","4!"]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Uw","W<QzH#On",":9","-S",">","4!"]
var r_3= undefined
try {
r_3 = base_3.some(argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test924.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)