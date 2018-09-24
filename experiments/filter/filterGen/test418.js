





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = {"49":607,"893":"U","969":"","'":"",",":"","":"","6.655174650376322e+307":460,"Z+I":9.096647568490514e+307}
return a/b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = {"126":"","893":"e","":"","C*E":"","1.4883412502943596e+305":8.226770423825147e+307,"3.4076976588205317e+307":5e-324,"(":1.5095825966396552e+308,"-100":1.4941420913680117e+308}
argument3[714] = {"100":705,"m@LS":618}
return a/b-c
};
var argument3 = 893;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['jo'] = null
base_2['filter'] = {"59":"B(:","595":"<,","4.322137494485838e+307":1.6193494939289956e+308,"1.1533627603519955e+308":1.323978735126642e+308,"1.5095523775324306e+308":1.397142247012402e+308,"":"","{nn":"","1.1207829086460726e+308":823,"2.167086487142913e+306":1.7976931348623157e+308,"nO":213}
return a-b+c
};
var argument5 = [126,0,714];
var argument6 = r_1;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[5] = true
argument8[0] = null
return a-b*c
};
var argument8 = ["{","sf","B","1"];
var base_0 = ["a","p",",","w?","b","*5","$r","|","U"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["a","p",",","w?","b","*5","$r","|","U"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["a","p",",","w?","b","*5","$r","|","U"]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test418.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)