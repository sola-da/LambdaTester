





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['wIs'] = {"595":1.5294361640997913e+308,"843":"","6.287554225059552e+307":"J","":"P$t","1.7636411527935262e+308":5.560174755919345e+307,"tW":"","nUrV":"C","5.674783352713519e+304":"^","1.5296484061981783e+308":")","%p":""}
argument2[1.9097830510613482e+307] = [403,"M",49,"N","O",0]
base_0[1][1] = false
return a/b-c
};
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['1SHF1'] = {"{P":8.014750493669057e+307,"":7.776810294033004e+307,"2.847402065381845e+307":"^Hv4","7.067217239634034e+307":1.315085551899745e+306,"1.2069953128675315e+308":"M","?":1.108767699144405e+308,"1.6004113958436689e+308":""}
return a*b*c
};
var argument5 = ["|","VHNp","c","%j"];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = {"1.7976931348623157e+308":"1r","":"","H":"`"}
argument6 = {"460":843,"655":"","893":893}
argument7[8.748669805137695e+307] = [122,-100,122,5e-324,893,126,783]
return a+b+c
};
var argument7 = true;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[157] = {"126":"6hf","705":"","7.163303404594796e+307":1.158983744250011e+308,"":"","mu":"CPMm"}
argument10[49] = ["53j","gHAf",59,126,607]
return a*b*c
};
var argument9 = ")";
var argument10 = null;
var base_0 = ["c<_","iM","P","3","NfHt1","4"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["c<_","iM","P","3","NfHt1","4"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["c<_","iM","P","3","NfHt1","4"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["c<_","iM","P","3","NfHt1","4"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test669.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)