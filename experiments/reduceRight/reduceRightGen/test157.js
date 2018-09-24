





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['{S'] = null
return a+b+c/d
};
var argument2 = "q?";
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['w'] = [-1,122,100,823,403,82,627,0]
base_1[8] = 5.797867410308297e+307
return a/b-c/d
};
var argument4 = [705,"|xU",")"];
var argument5 = "]x";
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = {"25":"","157":"*","":"V!","0,":618,"ygU":3.498663056023864e+307,"9D":5.915156583291739e+307,"1.051416698101429e+308":1.0317356797835498e+308}
base_2[6][2] = 5.616967400950016e+307
return a+b*c/d
};
var argument7 = null;
var argument8 = true;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[2] = ["`h-",403,59,"XaE","G"]
argument9[1] = {"49":"0","122":"8#","5.632144848054355e+307":"","fvtg9uFR":""," ":100,"1.6369345784495156e+308":783,"":"N"}
return a-b*c*d
};
var argument10 = 157;
var argument11 = true;
var base_0 = [-100,100,"2",49,"d",242,"oP3h","6"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,100,"2",49,"d",242,"oP3h","6"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,100,"2",49,"d",242,"oP3h","6"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,100,"2",49,"d",242,"oP3h","6"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test157.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)