





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][4] = null
base_0[9] = 823
return a*b*c
};
var argument2 = {"4":"","59":2.5175129962984936e+307,"893":"'i","6.635500126601379e+307":7.449915336269174e+307,"":"","1.7976931348623157e+308":5.348127530625511e+307,"?":4.835256638599211e+307,"1.9934891090188545e+307":893,"`!":403};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[5] = null
base_1[1] = 100
return a+b-c
};
var argument5 = false;
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = {"126":"","J":9.51427155256739e+307,"H":"","2.7364938486572965e+307":"","2.624518757434797e+307":3.019233712083943e+307,"":1.2405086764925561e+308,"?NE":"","1.634012382773645e+308":9.76034060619332e+307,"YP":"","1.2024557613506655e+308":969}
argument8 = [783]
return a/b+c
};
var argument8 = true;
var argument9 = r_0;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][2] = null
base_3[0] = [122,82,59,618,595,627,59]
return a*b/c
};
var argument11 = r_3;
var base_0 = ["Ps","Y","|"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Ps","Y","|"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Ps","Y","|"]
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument10,argument11)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test16.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)