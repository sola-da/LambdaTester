





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = 5e-324
base_0[0][3] = "B?"
return a+b*c-d
};
var argument2 = r_0;
var argument3 = 6.410862105669922e+307;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['K'] = true
argument5[8.108492555774111e+307] = true
return a-b-c/d
};
var argument5 = null;
var argument6 = {"0":242,"618":823,"705":595,"783":-1,"5.498348142009287e+307":"","7.629209009105075e+307":82,"1.376295570018034e+308":"3z","8.799210948830685e+307":655,"":"","F":""};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = null
return a/b*c*d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['8('] = ["F!s","::","48"]
argument10[-1] = {"100":460,"ocDl":1.3881685601891148e+308,"4P":"3","Z":5.316497641447669e+307,"=":3.038842169452053e+307,"":1.6739701291696447e+308,"vx":"","4.229481820374542e+307":4.642918864640885e+307}
return a*b*c+d
};
var argument9 = false;
var base_0 = [5e-324,5e-324,823]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,5e-324,823]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,5e-324,823]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,5e-324,823]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test788.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)