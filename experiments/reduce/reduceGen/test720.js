





var callbackArguments = [];
var argument1 = "L&";
var argument2 = null;
var argument3 = 607;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1['s'] = -100
base_0[3][1] = 2.555352608786513e+307
argument1['Cb'] = null
return a-b+c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][9.12287810829114e+307] = 595
return a-b+c-d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = {"1.65306743741874e+308":"9d|","1.542487672599051e+305":"","1.0749065749668166e+308":"vG","5.676240955338565e+307":"K","aC&D5pg":"","":25,"1.3280182157926125e+308":"p3G^","2.0688702175418401e+307":59}
argument7[7] = 627
argument6[893] = 5.92682756183613e+307
return a/b-c+d
};
var argument7 = r_2;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][3] = {}
argument10[1.359136872727139e+308] = null
return a+b+c-d
};
var base_0 = [403,607,49,843,126,49,607,0,705]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,607,49,843,126,49,607,0,705]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,607,49,843,126,49,607,0,705]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,607,49,843,126,49,607,0,705]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test720.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)