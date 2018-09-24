





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][4] = [655,82,-1,82,82,714,126,242,0,403]
base_0[0][4] = ""
return a*b-c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[403] = {}
argument3[4] = ["pl","Wo,V",","]
argument2[8] = [705,-1,"%5",25]
return a/b+c/d
};
var argument3 = true;
var argument4 = r_1;
var argument5 = {"213":1.204856549282193e+308,"460":705,"655":"","<":1.3252101086516941e+308,"":0,"3.8049271796226706e+307":"u"};
var argument6 = true;
var argument7 = [655,"Jy#"];
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[9] = {"714":"WS","":"","9.484355338120178e+307":"","7.866957047939404e+307":"","-1":"T","1.3316249150486186e+308":"u","O1":1.5973128857557001e+308,"5.525545345907505e+307":"","0?cf<":1.386007913996676e+308}
return a-b-c/d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = null
base_3[5] = false
argument10[25] = true
return a*b*c-d
};
var argument10 = {"242":3.6085117641773053e+307,"460":843,"lS":"x)","CS":"","":100,"1.2586046630485439e+308":82,"1.2872014662156226e+308":2.2545404983711396e+307,"%R":4.0858474286082526e+307,"2.487495937779755e+307":403,"8.568431765833078e+307":"n"};
var base_0 = [823,49,157,843,460]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,49,157,843,460]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,49,157,843,460]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,49,157,843,460]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test616.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)