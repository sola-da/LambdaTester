





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['U+WQ'] = 1.7612347977519691e+308
argument2[3.0481490052276395e+306] = {"":"","7.658871226278411e+307":"M#M","'6":6.189253730613382e+307,"6.422490234595088e+307":"X-M","Z":1.1014282312943739e+308,"w":"0p","=":705,"5e-324":122,"K":5.966609253380553e+307,"v*":""}
base_0[0][1] = 1.790722372817299e+308
return a/b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1] = null
return a-b-c
};
var argument3 = {"0":"+w","9.88065591142423e+307":"HP","U8R":"GI","1.163540177469678e+307":157,"":1.431341290314559e+308,"2.809770966311633e+307":"","5e-324":"","1.7976931348623157e+308":969,"5.554737320035566e+307":""};
var argument4 = r_1;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[7] = [82,823,213,-100,213,595,893]
return a*b+c
};
var argument6 = r_1;
var argument7 = 1.1003954861909541e+308;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[8] = {"8":1.2990130922987188e+308,"403":126,"595":627,"823":"","7.394347880713446e+307":9.928820969773253e+307,"1.3157686163008465e+308":"e","9.384122219458179e+307":"^","":5.782340446867427e+307,"a":6.447718668315338e+307}
return a+b/c
};
var base_0 = ["`","7","Lqk"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["`","7","Lqk"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["`","7","Lqk"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["`","7","Lqk"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test711.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)