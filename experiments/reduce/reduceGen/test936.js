





var callbackArguments = [];
var argument1 = r_0;
var argument2 = {"":242,"1.2707564352885386e+308":1.7447720557293004e+308,"5.188525221620343e+307":4.30944449418878e+307};
var argument3 = "";
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[';N'] = ["A",969,-100,"-k[;a"]
return a-b+c-d
};
var argument5 = 705;
var argument6 = null;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[6] = [82,157]
return a*b-c+d
};
var argument9 = ["CWUG","IM_",122,714,"B",969];
var argument10 = null;
var argument11 = "S|p";
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[';N'] = 823
return a/b-c/d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument15['HMm'] = {"82":655,"823":"","1.5253174084371415e+308":"","4.310456311344085e+307":"0$","3.103375747424961e+307":"","7.113889920575566e+307":"","":823}
base_3[2] = {"1.0865444413064592e+307":"%)J","":"H","8.351225095721076e+307":">i","1.7976931348623157e+308":8.848093306364097e+307,"1.7786735938844281e+308":1.552191103180716e+308}
argument14[';N'] = [242,460,242]
return a*b-c-d
};
var base_0 = ["f","+","i","S","c","Va","[8","t"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["f","+","i","S","c","Va","[8","t"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["f","+","i","S","c","Va","[8","t"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["f","+","i","S","c","Va","[8","t"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test936.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)