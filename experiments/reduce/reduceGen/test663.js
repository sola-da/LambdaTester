





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = null
argument2[627] = false
base_0 = 2.944761488531906e+307
return a-b/c*d
};
var argument2 = true;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = {"0":1.7976931348623157e+308,"157":1.7976931348623157e+308,"714":"","893":"yC&","1.4868693313115482e+308":"","8.919963785872028e+307":1.183895266631e+308,"5.201142534041882e+307":3.416069596249025e+307,"1.6787613381910634e+308":"","9.56649819231392e+307":"O","":627}
argument3['Cb'] = ""
return a-b-c/d
};
var argument4 = {"0":783,"1.539013017934425e+306":25,"6.535600982704818e+307":783,"1.3107131183454087e+308":""};
var argument5 = 1.0214564964850574e+307;
var argument6 = r_2;
var argument7 = r_0;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][1] = 122
argument6[627][126] = null
base_2[2] = [969,"4i{ZI",126,25,"[",100,"Z"]
return a/b-c+d
};
var argument9 = null;
var argument10 = {"0":"","122":"-=W8","126":714,"2.2113204324846106e+307":"I","6.170859824603625e+307":"","1.7031037497782945e+308":"","$3":157,"":""};
var argument11 = r_1;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[7] = {"2":126,"":3.675493973012683e+307,"KYJ":618,"1.104942524798031e+308":"","f":1.503335849166185e+308}
argument9['s'] = false
argument11[1.3938918493123786e+308] = null
return a*b/c-d
};
var base_0 = [49,"J"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,"J"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,"J"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,"J"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test663.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)