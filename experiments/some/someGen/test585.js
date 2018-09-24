





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['_W'] = [655,0,714,969,460,460,607,157,25]
argument3[893] = {"0":2.0094049309215682e+307,"213":1.4459897717970557e+308,"627":4.381608580050782e+307,"714":6.436951350430323e+307,"893":"","969":"","7.536628706356207e+307":7.828299445206948e+307,"3.8120994004749416e+307":823,"":""}
base_0[9] = {"213":"","[":213,"":1.0163501847266972e+308,"':2'e":1.0858734928224115e+308,"r":714,":":"","1.2566326977853592e+308":""}
return a-b/c
};
var argument2 = {"607":823,"":1.0400754899661033e+308,"-O":"","1.4984466323823388e+308":242,"?":1.0053193775551365e+307};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[2.249941463060761e+307] = {"42":"","59":0,"157":"xX","213":"","893":843,"":1.3280825941871563e+308}
argument4[0] = {"X9":"","-100":893,"":8.368249213789613e+307,"7.917732903859001e+307":""}
argument5[1.0727847755854773e+308] = [122,157,969,242,403,783]
return a+b/c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['Y'] = {"59":783,"969":"I","4.693023185392685e+307":1.7976931348623157e+308,"":"fc"}
base_2[1][2] = {"242":"","7.409321026783806e+307":"#F","":"[ES!M","d":"2;"}
return a/b*c
};
var argument6 = {"627":"","655":5.473476919467388e+307,"x-3V":6.468505220719751e+307,"9.484533795057188e+307":"","1.0237407685918637e+308":2.3621360007810896e+307,"":9.727772990737494e+307,"z":3.1056342423287e+307};
var argument7 = r_1;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[893] = true
return a*b/c
};
var base_0 = ["ySjr",100,213]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["ySjr",100,213]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["ySjr",100,213]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["ySjr",100,213]
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
require("fs").writeFileSync("./experiments/some/someGen/test585.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)