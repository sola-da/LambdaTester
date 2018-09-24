





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.3599216339661573e+308] = [0,5e-324,783,607]
base_0[1][2] = [969,82,893,783,823,82]
argument3[2] = 1.7288817459355237e+308
return a/b-c
};
var argument2 = "C";
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[6] = true
argument5[1.3599216339661573e+308] = true
base_1[7] = null
return a*b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][4] = ""
base_2[1][2] = {"":"","1.2322122167646311e+308":"","^+BBp":49,"pD5":9.228565005707999e+307}
base_2[1][4] = {"595":9.139057567989832e+307,"627":"L",",!6-":"","[":"","5.595827722795552e+307":607,"1.27674565497246e+308":2.619321211313229e+307,"M[Da":"","3.4443448915200356e+307":403}
return a-b/c
};
var argument6 = 1.2280905904444578e+308;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4.960033715165713e+307] = {"213":59,"403":"","y":3.508664071842788e+305,"4.761730747971375e+307":"a","":893,"Br":1.701536779103388e+308,"(g":893,"5.217165744370757e+307":1.2385300815981474e+308}
argument8[122] = {"607":100,"qazM":"Tcy?5^","l":25,"":1.0456506386145557e+307,"*d`":49}
argument9[2] = ["(Y!?J"]
return a-b*c
};
var argument8 = null;
var base_0 = ["1BYA|","d","p","Q","q","r`","-S`"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["1BYA|","d","p","Q","q","r`","-S`"]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["1BYA|","d","p","Q","q","r`","-S`"]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["1BYA|","d","p","Q","q","r`","-S`"]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test300.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)