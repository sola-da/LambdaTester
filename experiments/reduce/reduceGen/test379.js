





var callbackArguments = [];
var argument1 = false;
var argument2 = null;
var argument3 = "";
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.359136872727139e+308] = 242
return a+b*c+d
};
var argument5 = ["q",49,705,"[",783,"g","Z",618,"|]&"];
var argument6 = true;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[126] = null
argument5['Cb'] = null
return a-b+c*d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[7] = ["=9",":","D","=","<uF","@"]
base_2['length'] = ["9","S1xMz","n","H","^","5$hV"]
argument9['Cb'] = true
return a+b*c/d
};
var argument10 = r_0;
var argument11 = {"j":82,"1.1673360128075213e+308":"","1.3655648718876226e+308":"","":"u","^1Qq+":627,"a":"8q?"};
var argument12 = false;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = [100,403,59,82]
base_3[6] = 7.807679838938019e+307
argument12[627] = null
return a-b+c-d
};
var base_0 = [783,100,242,403,655,49,969,242,714,460]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,100,242,403,655,49,969,242,714,460]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,100,242,403,655,49,969,242,714,460]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,100,242,403,655,49,969,242,714,460]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test379.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)