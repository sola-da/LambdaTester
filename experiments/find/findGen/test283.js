





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = null
base_0[5] = ""
base_0[5] = [59,893,893,705,705,893,969,714]
return a*b/c
};
var argument2 = null;
var argument3 = 783;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2] = ""
base_1[1] = [403,100,460,783,595,49,-100,460,783,0]
argument6[5] = false
return a-b-c
};
var argument5 = {"0":"9F","618":403,"627":"_pSU","W":6.898650054992507e+307,"":25,"3.6226386676019403e+307":25,"1.9748596750721438e+306":82};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[242] = {"595":9.139057567989832e+307,"627":"L",",!6-":"","[":"","5.595827722795552e+307":607,"1.27674565497246e+308":2.619321211313229e+307,"M[Da":"","3.4443448915200356e+307":403}
argument7[0] = 1.2280905904444578e+308
return a*b/c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[4] = {"213":59,"403":"","y":3.508664071842788e+305,"4.761730747971375e+307":"a","":893,"Br":1.701536779103388e+308,"(g":893,"5.217165744370757e+307":1.2385300815981474e+308}
argument9[460] = {"607":100,"qazM":"Tcy?5^","l":25,"":1.0456506386145557e+307,"*d`":49}
argument8[1.399309004356655e+308] = ["(Y!?J"]
return a-b*c
};
var argument8 = null;
var base_0 = ["3","<","^","]<2F","A|","d","p","Q","q"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["3","<","^","]<2F","A|","d","p","Q","q"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["3","<","^","]<2F","A|","d","p","Q","q"]
var r_2= undefined
try {
r_2 = base_2.find(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["3","<","^","]<2F","A|","d","p","Q","q"]
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
require("fs").writeFileSync("./experiments/find/findGen/test283.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)