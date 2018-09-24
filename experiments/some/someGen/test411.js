





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['Y'] = 1.6790814221158959e+308
argument2[1] = {"893":"","2.4349864312646964e+307":"N!zj9","l":627,"Y":3.897803012036932e+307}
base_0[1] = ["Q","<j","UT","Ok","0","`A)","x","v","P"]
return a+b+c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][8] = {"":"","-1":618,"RUa3=B,":"t","fR8":1.7707145539440148e+307,"P":783,"Hg$_&{":122,"1.3613893644589698e+308":"h","r":"<8"}
base_1[5][0] = 1.110371238561344e+308
argument4[2] = {"595":"njqQ","qY":"V","":"I3","w":"","7.338699653683536e+307":25,"1.5820007726743511e+308":4.339576529010606e+307,"3.949132274673575e+307":1.7510883752534083e+308}
return a+b/c
};
var argument4 = false;
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][3] = {"403":6.506486406432285e+306,"460":5.870007448830008e+307,"655":823,"893":"","":"","I":1.3279959198054731e+308,"O":-100}
argument7['5L'] = null
base_2[1][2] = {"":"KU",";":"w","UY":"p^HY#H","'>":823,"2.947014935337902e+307":49,"p2":705,"q":"QRc"}
return a+b+c
};
var argument7 = "";
var argument8 = 1.6967923413284566e+308;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1] = 8.477957899998895e+307
base_3[4][7] = false
argument10['j'] = {"49":"fn","+":"7"}
return a/b/c
};
var base_0 = ["U","%","x","`","h","d","*+5l3","u","7pg4"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["U","%","x","`","h","d","*+5l3","u","7pg4"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["U","%","x","`","h","d","*+5l3","u","7pg4"]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["U","%","x","`","h","d","*+5l3","u","7pg4"]
var r_3= undefined
try {
r_3 = base_3.some(argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test411.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)