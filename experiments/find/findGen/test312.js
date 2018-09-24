





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[6] = 655
return a/b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = false
argument4[5] = true
argument4[783] = ""
return a-b-c
};
var argument3 = true;
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[4.953791384496108e+307] = {"9.683900124236383e+307":"_","":6.35428768183268e+307,"9.96842080721159e+307":1.2072437537049576e+308,"sJRZP":"","1.6143053919081664e+307":""}
argument6[4] = {"460":403,"":843,"O":"","5.914937728853188e+307":"","2.6718385407358996e+306":2.3158965996707675e+306,"1.2312780485094562e+308":8.562411280551776e+307,"#*":"","5.791894313200377e+307":"W"}
argument7[0] = null
return a-b/c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[5] = false
argument8['AA@'] = false
return a-b/c
};
var base_0 = ["qa",714,783,403,"#b",82,-1]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["qa",714,783,403,"#b",82,-1]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["qa",714,783,403,"#b",82,-1]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["qa",714,783,403,"#b",82,-1]
var r_3= undefined
try {
r_3 = base_3.find(argument6)
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
require("fs").writeFileSync("./experiments/find/findGen/test312.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)