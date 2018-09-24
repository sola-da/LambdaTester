





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[6] = {"655":"","705":823,"1.5264358166238074e+308":"","<,@":"","tG":607,"":2.6670601966402863e+307,",zi|":""}
base_0[1] = null
return a/b-c
};
var argument2 = null;
var argument3 = 5.408921643883805e+307;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3] = false
argument6[2] = {"y":"","5.227178396149932e+307":"-","}I#v|w":"E","":7.310302606739072e+307}
argument6[1.7847438319683965e+308] = {"49":1.6086441365323402e+308,"":783,"h":4.570136471378747e+307,"1.6443127033886245e+308":"","@":"","6.48528762064302e+307":7.140432168154923e+307,"3.484129509754996e+307":"",";{":"e"}
return a/b/c
};
var argument5 = false;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = null
argument9[3] = false
return a*b*c
};
var argument8 = "M";
var argument9 = null;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3] = {"82":5.452312816647337e+307,"460":4.860824284440036e+306,"$":"","":157,"1.675106134669796e+307":1.498383096069384e+308,"O":"",">*LN":"","1.0129002939356324e+308":618}
argument12[6] = {"655":157,"705":157,"":0,"1.7657330694133932e+308":"JmA","1.7976931348623157e+308":9.651049154294674e+307,"5.129521366080711e+307":1.5264041932246965e+308,"1.3192851796456936e+308":"","W p":""}
return a/b/c
};
var argument11 = {"0":893,"5":618,"":82,"Y":"","5e-324":"","1.5544694252765613e+308":59,"2.59438365595762e+307":1.6690663327986369e+308,":c":"","?":5.853125859834072e+306,"1.1552610037919661e+308":1.4132826198143067e+308};
var argument12 = null;
var base_0 = [5e-324,655,595]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,655,595]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,655,595]
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,655,595]
var r_3= undefined
try {
r_3 = base_3.filter(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test486.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)