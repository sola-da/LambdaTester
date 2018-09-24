





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][5e-324] = 1.108972527878347e+308
argument2['j'] = null
return a/b*c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = 705
base_1[1] = 4.024151708932104e+307
argument5['f!BO'] = [0,595,"s8",618,893,"qJ",969,"M"]
return a*b/c
};
var argument5 = false;
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[0] = ["!",122,893,"vQ?","U*","b`rFEv"]
return a/b*c
};
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[0] = {"893":"","":100,"Y":"M","!h":969,"D1":"","q|":2.7464366819492874e+307,"1.76981098731735e+308":""}
argument10['5L'] = ["B]",100,618]
return a/b/c
};
var argument10 = {"242":8.186014678037549e+307,"595":"(1","843":705,"2.666868613506383e+307":714,"1.7976931348623157e+308":"Q","7.081588958053765e+307":"","1.1758681997596795e+308":""};
var base_0 = [")","E)",82,1.7976931348623157e+308,"]",783,"mb3","|w","%"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [")","E)",82,1.7976931348623157e+308,"]",783,"mb3","|w","%"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [")","E)",82,1.7976931348623157e+308,"]",783,"mb3","|w","%"]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [")","E)",82,1.7976931348623157e+308,"]",783,"mb3","|w","%"]
var r_3= undefined
try {
r_3 = base_3.some(argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someGen/test275.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)