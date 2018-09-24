





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['y'] = 7.580461363430057e+307
argument3['!j'] = {"122":"N","126":"","893":"G;69)(","":"FU","1.4978684925856085e+308":1.9175934654802166e+307,")":"PY([d$","1.4921332470824259e+308":"T>xD(#"}
return a/b*c/d
};
var argument2 = ["V5","!","Q","E","xn","X","N","6LA",":?","cI8v"];
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.4250811791542279e+308] = null
argument5[783] = [783,25]
return a+b*c*d
};
var argument4 = {"`":-100,"1.2491244606658903e+308":"aQ"};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[5] = 1.6134365594306669e+308
argument7[2] = 0
base_2[2][2] = {"403":"","7.031238556480931e+307":"","E":403,"2.567473432954809e+307":"|","|":""}
return a*b-c*d
};
var argument6 = true;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[655] = null
return a-b+c*d
};
var argument9 = true;
var argument10 = {"59":49,"595":1.6215674135925764e+308,"":"","-1":122,"6.068523341904435e+307":""};
var base_0 = [783]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test908.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)