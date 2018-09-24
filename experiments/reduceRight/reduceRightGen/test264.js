





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = 783
argument1[1] = ["tf!",59,213,-1]
return a+b+c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['^N'] = 122
argument3['{S'] = ""
base_1[4][3] = false
return a/b/c/d
};
var argument3 = 126;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['y'] = [82,460,-1,627,242]
base_2[1][2] = true
return a/b/c+d
};
var argument5 = {"2":969,"25":969,"":3.4029230545155165e+307,"7?'":"","6'":1.2888861637169617e+308,"3.6984635575052295e+307":"B","w":4.1956382481429786e+307,"W":""};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[126] = "L"
argument6[0] = {"":"","%nT":8.420886759100241e+307," $%%":"u","1.5760183675978635e+308":3.733924320095298e+307,"@":823,"1.118827279977006e+308":"","UWm(":"6_","3.805391123024174e+307":823}
return a/b/c/d
};
var base_0 = [49,-1,49,595,893,25,823,-100]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,-1,49,595,893,25,823,-100]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,-1,49,595,893,25,823,-100]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,-1,49,595,893,25,823,-100]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test264.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)