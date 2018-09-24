





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = null
argument2[3] = true
argument3[6] = null
return a+b+c+d
};
var argument2 = {"49":893,"IG2":"V{","":"Z","1.1203531918829646e+308":"j`","2.1165319756951748e+307":"SuK","1.053507986191477e+308":"","6.897587217681285e+307":1.6191410568910906e+308,"^N":0,"5e-324":"2","1.3652990924833588e+308":"q"};
var argument3 = [595,157,-1,403,627,-1,0];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[8.575765443877852e+307] = false
argument6[3] = {"213":59,"595":"","893":"6","":"T","j(":""}
return a+b/c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = 157
return a*b/c+d
};
var argument6 = 1.5787967612147078e+308;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = ["0+","A"]
argument9[0] = {"213":"","618":714,"1.1850590874489097e+308":"<k","r`":8.624482879827024e+307,"3.8350415936058995e+307":1.6804708052941125e+308,"":">E","ma":9.425166395606674e+307,"d":6.092443021696181e+307,"W_":"","'p":627}
return a*b/c/d
};
var base_0 = [59,59,607,783,59,25,-100]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,59,607,783,59,25,-100]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,59,607,783,59,25,-100]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,59,607,783,59,25,-100]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test176.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)