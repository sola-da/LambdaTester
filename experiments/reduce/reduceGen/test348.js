





var callbackArguments = [];
var argument1 = "";
var argument2 = null;
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['*c'] = {"82":"","705":82,"(":"",">":1.7976931348623157e+308,"1.5123437245372272e+308":"p","":"G"}
return a+b+c+d
};
var argument5 = r_0;
var argument6 = null;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[25] = {"460":655,"607":"","618":"","":823,"1.1045337170220023e+308":627,"5.602305854037741e+307":242,"X`":"Y","-Vt":""}
return a/b-c+d
};
var argument9 = false;
var argument10 = {"0":5.827792903397461e+307,"":"[","h":1.4794037712942584e+308,":(":1.5198801044896707e+308};
var argument11 = {"1.2223466590438952e+308":"","q!Y":8.142116820073286e+307,"2.5767464912706133e+307":157};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[90] = true
argument10[627] = null
return a+b-c/d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument15[595] = ["n","Gi]]w"]
argument13 = null
argument14[213] = [49,126,213,126,460,242]
return a-b/c*d
};
var argument14 = {"607":"","2n":"S+B","":"92#","1.40453473125225e+308":"","-":"C)gYK86F^x","h":1.7253119223001852e+308,"5.572587062912953e+307":1.077874979461432e+308,"*B?":"","2.086168060567968e+307":"C)"};
var base_0 = [122,893,157,843]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,893,157,843]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,893,157,843]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,893,157,843]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test348.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)