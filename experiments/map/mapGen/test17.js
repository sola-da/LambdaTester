





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = {"2.292609950184363e+307":"p","8.958963738956737e+307":"W2","7.066112567540466e+307":"","8S;g":618,"":823}
base_0[3][2] = false
return a+b+c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = null
base_1[8] = 823
return a*b*c
};
var argument4 = {"4":"","59":2.5175129962984936e+307,"893":"'i","6.635500126601379e+307":7.449915336269174e+307,"":"","1.7976931348623157e+308":5.348127530625511e+307,"?":4.835256638599211e+307,"1.9934891090188545e+307":893,"`!":403};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = null
base_2 = 100
return a+b-c
};
var argument7 = false;
var argument8 = true;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = {"126":"","J":9.51427155256739e+307,"H":"","2.7364938486572965e+307":"","2.624518757434797e+307":3.019233712083943e+307,"":1.2405086764925561e+308,"?NE":"","1.634012382773645e+308":9.76034060619332e+307,"YP":"","1.2024557613506655e+308":969}
base_3['length'] = [783]
return a/b+c
};
var argument10 = true;
var argument11 = r_1;
var base_0 = [82,"d4","2bb","`HP",157,"G0","u"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,"d4","2bb","`HP",157,"G0","u"]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,"d4","2bb","`HP",157,"G0","u"]
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/map/mapGen/test17.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)