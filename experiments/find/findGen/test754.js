





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['!j'] = false
return a-b*c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['AA@'] = {"0":126,"157":"","460":"","":1.3161800488686953e+308,"1.4883576294512946e+308":5e-324,"1.0864813212685533e+308":"","6.061521366910084e+306":""}
argument3 = null
argument4[126] = {"100":"9N","823":"","-1":"","|":0}
return a-b-c
};
var argument4 = r_0;
var argument5 = r_1;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[4] = null
argument8['W'] = {"1":"o)7","5":82,"HK":"","sO":"","V6$":"o","":"N*UnL?","3.541446500941433e+307":1.2601675940401183e+308,"2.081150887565671e+307":"qm,","1.6661675246002691e+308":"af4mW"}
return a/b-c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3.377960715099946e+307] = ")H"
return a+b/c
};
var argument8 = {"100":1.0699646008176538e+308};
var base_0 = ["4",242,"iU,LK",":","gQ",607,"<","#","S?2",213]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["4",242,"iU,LK",":","gQ",607,"<","#","S?2",213]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["4",242,"iU,LK",":","gQ",607,"<","#","S?2",213]
var r_2= undefined
try {
r_2 = base_2.find(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["4",242,"iU,LK",":","gQ",607,"<","#","S?2",213]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test754.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)