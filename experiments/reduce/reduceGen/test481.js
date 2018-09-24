





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = 460
argument2[0] = true
argument1['Cb'] = [-100,783,-1,618,595]
return a/b*c/d
};
var argument2 = "";
var argument3 = true;
var argument4 = false;
var argument5 = {"59":1.0934752738584236e+308,"403":8.621265013455e+307,"1.2404490045235933e+308":969,"1.5963785914538266e+308":4.25637444458747e+307,"4.2392204934268733e+307":"1J","":655,"1.7882486675581215e+308":"","1.7469389638233738e+308":1.0750765928299672e+308};
var argument6 = {"655":82,"4.880445164064345e+307":"","1.601378298187788e+308":"","5.78929315124308e+307":"I","1.6065055838394928e+308":5.052820257060625e+307};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[9.331954948603684e+307] = ["S","z","4","?c","U","^M","4","F"]
argument4[2] = false
argument4[8] = 9.183547541560118e+307
return a*b-c+d
};
var argument8 = [460,82,"pREJ","Wk#*&",100];
var argument9 = r_0;
var argument10 = null;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[9.331954948603684e+307] = "dv'D"
argument8['Cb'] = 122
return a*b/c+d
};
var argument12 = {"82":242,"627":")","<":"","|z":1.7643358997041896e+308,"":714,"3.55046197565411e+307":-100,"9.20717177753163e+307":403,"6.90689467611007e+307":6.955879582067482e+306};
var argument13 = r_0;
var argument14 = r_3;
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = null
base_3[5] = "E"
argument13[0] = {"9":"","122":627,"595":2.842419955744942e+305,"705":1.2300866082677301e+308,"823":1.5537308027777035e+308,"":"?","5h}":"","1.2942029353441755e+308":"f<,"}
return a/b-c*d
};
var base_0 = [0,"yAS|","9",122]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,"yAS|","9",122]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,"yAS|","9",122]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,"yAS|","9",122]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test481.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)