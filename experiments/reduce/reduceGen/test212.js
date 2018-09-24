





var callbackArguments = [];
var argument1 = [823];
var argument2 = null;
var argument3 = {"126":1.7976931348623157e+308,"1.5105685600660775e+308":"QH,Ol","5e-324":"","6.35085648319999e+307":460,"8.880969439139402e+306":1.3757273966533937e+308,"8$j":655};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = ["d",";"]
base_0[7] = {"t":1.5718622338506945e+308,"Ckm":"","":"","-":"G","8.214465922481534e+307":"o"}
argument2[213] = null
return a/b/c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1] = ""
base_1[3] = ""
return a+b+c/d
};
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = false
argument7[9] = null
base_2[2][0] = 4.496336563428118e+307
return a+b-c-d
};
var argument8 = false;
var argument9 = false;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[627] = {"":"P","6.515740536210786e+307":714,"-100":2.775804637196954e+307,"n":1.1780757106344372e+308,"3.268328023075883e+307":783,"-":""}
return a/b/c-d
};
var argument11 = r_1;
var argument12 = r_2;
var base_0 = [783,157,460,783,242,893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,157,460,783,242,893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,157,460,783,242,893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,157,460,783,242,893]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test212.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)