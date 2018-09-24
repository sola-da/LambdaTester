





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = 3.0419445421915035e+307
return a*b-c
};
var argument2 = "s=P_qL";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][1] = {"25":"8","82":213,"?":"D","&":" ;5q I","8.075817511952372e+307":1.655055312033454e+306,"":893}
argument5[460] = {"655":"%6","893":4.925882031110649e+307,"":25,"k":"0","1.0918965343168219e+308":595,"1.191473441078405e+307":"","XYP":"TGND","bzmvvx":"ZGO","t":""}
return a+b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2] = null
base_2[0][2] = {"893":"h","":655,"{9MuZ":"+","HGoqoZ`s#":"pN+","^a":""}
return a-b-c
};
var argument5 = null;
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['='] = ["5","N-gz","kH","61(","2"]
argument9[3] = 3.8494415422921574e+307
return a+b+c
};
var argument8 = {"714":"","1.1235773174630201e+308":1.670819778207268e+308,"":""};
var argument9 = r_2;
var base_0 = [-100,893,627,"e(d",122,126,"R","i"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,893,627,"e(d",122,126,"R","i"]
var r_1= undefined
try {
r_1 = base_1.find(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,893,627,"e(d",122,126,"R","i"]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,893,627,"e(d",122,126,"R","i"]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test501.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)