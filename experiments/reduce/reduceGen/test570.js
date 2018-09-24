





var callbackArguments = [];
var argument1 = {"242":"","403":7.277156459343193e+307,"893":"","i":"","-5d":"]","1.538264567128409e+307":8.637094701481999e+307};
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.1277822633002616e+308] = {"":4.815311382848398e+307,"6.617592065833792e+307":"","-":1.2121137804714424e+308,"9.222683400122794e+307":"","1.1153949992398023e+308":5.446137652261456e+307,"1.1604959279427071e+308":607,"li2":8.529917561063037e+307,"W":"","#5":969}
base_0[1][0] = ""
argument3[595] = 1.4881248801749155e+307
return a*b-c+d
};
var argument5 = null;
var argument6 = true;
var argument7 = r_0;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = "`9+"
return a*b/c+d
};
var argument9 = false;
var argument10 = 8.470496891903362e+307;
var argument11 = "";
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[3] = null
base_2[0] = {"":5.519987428387748e+307,"2Cg4":"g","1.0441638183854008e+308":"","-100":"}","9.600503738745492e+307":"di"}
base_2[7] = 4.768101495341567e+307
return a-b/c+d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument15[6.35085648319999e+307] = {"&":126,"":783}
argument13[4] = {"":"B","7.398171754369429e+307":"","!+c":9.36687896682396e+307,"1.4467132036151181e+308":"","iiH":""}
return a/b-c*d
};
var argument14 = true;
var base_0 = [595,82,460]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,82,460]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,82,460]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,82,460]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test570.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)