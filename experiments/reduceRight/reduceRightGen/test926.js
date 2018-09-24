





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = false
argument2[9.624051682326797e+306] = ":"
argument2[122] = null
return a-b/c/d
};
var argument2 = true;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.4250811791542279e+308] = ["f"]
return a/b*c*d
};
var argument5 = 5.673459984442684e+307;
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[4] = 5.824473639771854e+306
argument8[-1] = [714,"u","(No=",-1,595,"Q","Zh","S","y^("]
argument8['PK4'] = {"59":893,"783":4.1569468048436797e+307,"1.3152204690422036e+308":"{","":"vv","1kZ":969,"1.3586360497419151e+308":59,"9.750563610343018e+307":607}
return a+b-c-d
};
var argument8 = true;
var argument9 = {"157":"","607":"Q","2.9452731129682657e+307":"W3","y":"","i!,6y":"","4.496738909644872e+307":""};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[1.5887552427096746e+308] = -100
return a+b-c+d
};
var argument11 = "'";
var base_0 = ["YK","4","(t6"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["YK","4","(t6"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["YK","4","(t6"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["YK","4","(t6"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test926.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)