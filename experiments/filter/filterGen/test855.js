





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = 100
base_0[0] = null
return a-b/c
};
var argument2 = {"969":"]","1.2056541692961793e+308":122,"1t":8.490886150538898e+307,"9.70990529840371e+307":"e8","":122,"qtq":"t","#69A":"t7","T":157};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = 49
argument5[618] = null
return a-b*c
};
var argument4 = true;
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[9] = null
base_2[1]['!cck7Mm'] = null
return a/b-c
};
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[126] = {"100":"3Vp[x","403":"","607":"w","$":"","":"","6.599446016037579e+307":1.540583050652593e+308,"d;#7":"","1.2584487447689396e+308":-1}
argument9[-100] = [655,705,"=)",705,"Nr","O:}",969,5e-324,"N&"]
return a-b+c
};
var argument9 = {"122":"","1.6554578508988482e+308":""};
var base_0 = [893,157,242,-100,0,0,25,213,126,607]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,157,242,-100,0,0,25,213,126,607]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,157,242,-100,0,0,25,213,126,607]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test855.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)