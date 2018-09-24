





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = false
argument3['(R'] = {"49":">","":705}
return a/b+c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = 969
argument3[2] = 607
argument3[0] = 6.050761458251497e+307
return a*b+c-d
};
var argument3 = {"59":893,"q":1.2805993752913708e+308,"":"ew","1.517162699949936e+307":"df","=+":1.697001506959197e+308,"4.617960641851043e+307":"Tz`2","2.8796967088322086e+307":"u"};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['18{'] = ["FB&ps",126]
argument6[90] = null
return a*b-c/d
};
var argument5 = false;
var argument6 = r_0;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = 3.759037198881126e+307
base_3[2][0] = [82,1.7976931348623157e+308,655,403,-1,-100]
return a-b+c+d
};
var base_0 = ["l!}zL","JIo2MfU!O8Xs06","#","{`1?","<","af","h"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["l!}zL","JIo2MfU!O8Xs06","#","{`1?","<","af","h"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["l!}zL","JIo2MfU!O8Xs06","#","{`1?","<","af","h"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["l!}zL","JIo2MfU!O8Xs06","#","{`1?","<","af","h"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument5,argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test998.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)