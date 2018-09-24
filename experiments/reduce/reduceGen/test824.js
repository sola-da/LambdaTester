





var callbackArguments = [];
var argument1 = null;
var argument2 = false;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = {"J":"{"}
argument3[6] = -1
return a-b+c-d
};
var argument5 = null;
var argument6 = "";
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['s'] = {"783":595,"aV":0,"":"5HX","mN":1.7038280910772671e+308,"a":9.638184402490301e+307,"K,;8":"","Y":1.0767313962722832e+308}
argument5[893] = {"":655}
return a/b-c-d
};
var argument9 = {"607":"G2","1.1713068339225184e+308":"c7","":"T","4.1718081094278144e+307":843,"2.0413536949815705e+307":595};
var argument10 = null;
var argument11 = r_1;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][3] = null
return a+b/c*d
};
var argument13 = [783,"rc!O",893,783,"79",")",607];
var argument14 = r_1;
var argument15 = null;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13['Cb'] = {"100":"","460":"8","p":",w","1.6811251835787694e+307":"(","1.559675359079609e+308":25,"1.6413460517090655e+308":1.0110980664784955e+308,"1.3463686479513442e+308":"-","9.642977733891336e+307":7.092005658226656e+306}
argument14[1.1532786076532189e+308] = ["NE]*FB<",-1,157,"C",460,783,-100,"Y",618]
argument15[6] = false
return a-b-c-d
};
var base_0 = ["T","j",126]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["T","j",126]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["T","j",126]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["T","j",126]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test824.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)