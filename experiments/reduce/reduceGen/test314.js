





var callbackArguments = [];
var argument1 = [82,157,-100,-100,714,157,157,122];
var argument2 = "H?4q";
var argument3 = ["o","v","j","|<0C","%Z"];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = ["w","S`i;","cm","1","V%","(","]"]
argument2[1.1277822633002616e+308] = "Bh@"
argument2[3] = [",","gdO","5","e","6x","qV","A","v","{vp"]
return a-b-c-d
};
var argument5 = 213;
var argument6 = null;
var argument7 = r_1;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2.1869172855352885e+307] = "<#cs"
base_1['length'] = 1.2787195425980023e+308
return a+b*c+d
};
var argument9 = ["_","34E",",&"];
var argument10 = null;
var argument11 = r_1;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['s'] = 1.185684669418034e+308
base_2[8] = null
return a+b+c+d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][0] = [460,618,"G","Ep",122,"2}","h"]
argument15[5] = "d"
return a/b*c/d
};
var argument14 = 1.2046055140497295e+308;
var argument15 = {};
var base_0 = [783,157,714]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,157,714]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,157,714]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,157,714]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test314.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)