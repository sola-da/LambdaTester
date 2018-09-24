





var callbackArguments = [];
var argument1 = null;
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[-1] = {"0":6.434431874589216e+307,"59":"","607":5.243365456804691e+307,"783":"sdQ","":6.993106583207501e+307,"1.610414152334363e+308":"CC","3.7134454897479576e+307":"","-xC":1.8985717479067235e+307,"1.0728367402163146e+308":1.374492974838101e+308}
base_0[3] = true
argument3[59] = false
return a-b+c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['Cb'] = false
return a-b/c/d
};
var argument6 = null;
var argument7 = null;
var argument8 = 595;
var argument9 = null;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = ["7","-?","f","]M","5","k","A"]
argument8[7] = [714,403]
argument8[7.463432409233234e+307] = -1
return a+b/c+d
};
var argument11 = r_1;
var argument12 = r_3;
var argument13 = ",";
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[59] = "4H"
base_3[3] = [969,242,-100,618,242,49,627]
argument12[1.1277822633002616e+308] = "28'"
return a*b/c/d
};
var base_0 = ["[?t","|","t+","r","6","?","DBR|6"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["[?t","|","t+","r","6","?","DBR|6"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["[?t","|","t+","r","6","?","DBR|6"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["[?t","|","t+","r","6","?","DBR|6"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test492.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)