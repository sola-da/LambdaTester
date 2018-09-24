





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = {"100":"","3.3975345694287683e+307":-100,"o6":1.4008323944072824e+308,"J":"F"}
base_0[5][0] = 4.2107185523668686e+307
argument2['5L'] = 7.457943286185502e+307
return a/b*c
};
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[5] = ""
argument5[2] = {"242":"L","705":""}
base_1[6] = null
return a/b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3] = {"783":"T@Cm","e3Zr":"%","":607,"8.314598607816497e+307":100,"-1":"","r":783,"1.271369049344234e+308":2.2331309544755858e+306,"1.3704253580666622e+308":893}
argument7[1] = "#9m+"
return a*b/c
};
var argument6 = null;
var argument7 = {"783":100};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = 823
base_3[1]['{X'] = ""
return a-b+c
};
var argument9 = false;
var base_0 = [1.7976931348623157e+308,157,893,893,627,82,893,893,49]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,157,893,893,627,82,893,893,49]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,157,893,893,627,82,893,893,49]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,157,893,893,627,82,893,893,49]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test217.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)