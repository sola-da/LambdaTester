





var callbackArguments = [];
var argument1 = true;
var argument2 = {"655":"","823":"mE","d":655,"":7.73698595380458e+307};
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[6] = {"595":"1","r":"_","7.834440755150452e+307":714,"1.5577962568677367e+308":1.3203768011573773e+308,"1.9860640562773796e+307":"r","1.3342495530629092e+308":"l3","":1.147207936769395e+308}
base_0[2] = true
argument2[8] = false
return a+b+c+d
};
var argument5 = r_1;
var argument6 = true;
var argument7 = {"49":"","1.484908287893284e+308":"(","J":823,"9.550685885932856e+307":"","":893,"1.7976931348623157e+308":655,"8.036292453195761e+307":157,"1.6016610942657392e+308":"","1.5880164863222442e+308":213};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['HMm'] = {"893":"m","":893,"tMy":607,"{C":"1","9.632861452994182e+307":"","6.280053690702227e+307":-1}
argument5[0] = null
argument6[403] = {"82":"","1.5193814731682672e+308":"","1.7075874768576262e+308":"}e","a":6.799890687612428e+307}
return a/b-c+d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[4] = {"0":1.7483987454527168e+308,"":"Bh","+tR":618,"1.54266913667802e+308":157,"7.468546992744779e+307":655,"1.7419296892480724e+308":"jN","8.053322747331194e+307":714}
return a/b-c/d
};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[7.999889602676851e+307] = ""
argument12[0] = {"100":"U?ga","242":1.0059740830884667e+308,"627":8.235570718507495e+307,"f@d":"d","":5e-324,"Va{qt":5.5994154343437034e+306,"wS":25,"2.596774090791562e+307":"!","A":"2"}
argument10['A'] = ""
return a+b*c/d
};
var argument11 = 1.6327880132097837e+308;
var argument12 = ["Z","ua","I","K",")L=","]","aWn","J","SF?","ZJnO"];
var base_0 = [460,1.7976931348623157e+308,627,100,-100,460]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,1.7976931348623157e+308,627,100,-100,460]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,1.7976931348623157e+308,627,100,-100,460]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,1.7976931348623157e+308,627,100,-100,460]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test997.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)