





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['HMm'] = [627,0,100,25,627,969]
argument2[0] = null
argument1 = ["ek"," ","m","D",595]
return a-b*c-d
};
var argument2 = r_0;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[59] = false
base_1[0][0] = 2.3312429685171156e+307
base_1[1][0] = [627,893,618,82]
return a+b/c-d
};
var argument4 = false;
var argument5 = ["JEu>","+","ZdYg"];
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[403] = {"1":"o)7","5":82,"HK":"","sO":"","V6$":"o","":"N*UnL?","3.541446500941433e+307":1.2601675940401183e+308,"2.081150887565671e+307":"qm,","1.6661675246002691e+308":"af4mW"}
base_2['length'] = {"^xnD>Q":49,"o":2.2543280495771635e+306,"T=":1.135348464717201e+308}
return a-b*c-d
};
var argument7 = "";
var argument8 = r_0;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[5] = null
argument9['Cb'] = true
return a/b/c*d
};
var argument10 = false;
var argument11 = r_0;
var base_0 = ["4",242,"iU,LK",":","gQ",607,"<","#","S?2",213]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["4",242,"iU,LK",":","gQ",607,"<","#","S?2",213]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["4",242,"iU,LK",":","gQ",607,"<","#","S?2",213]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["4",242,"iU,LK",":","gQ",607,"<","#","S?2",213]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test648.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)