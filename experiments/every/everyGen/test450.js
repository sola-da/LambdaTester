





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = ["{","}2ma,x","fPrp","Q","1xa","1","|0","R<u"]
return a/b+c
};
var argument2 = "G";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][2] = false
return a/b/c
};
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2.4183178393969103e+306] = {"kH#":"!^kUd#"}
base_2[0][0] = 3.893943125133307e+307
return a+b-c
};
var argument6 = {"7.787956869966303e+307":""};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = [627,122,100,607]
argument8[403] = {"":157,"1.4388680220768613e+308":"Im","1.7122244422834152e+308":1.686037013002218e+306,"1.3983463902322075e+308":1.4367102067455845e+308,"t":122,">u":-1,"ur":"T"}
argument8[4] = {"655":1.1644418337246368e+308}
return a+b+c
};
var argument8 = 7.502081981462524e+307;
var argument9 = null;
var base_0 = [403,100,403,59,82,100,0,618]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,100,403,59,82,100,0,618]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,100,403,59,82,100,0,618]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,100,403,59,82,100,0,618]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test450.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)