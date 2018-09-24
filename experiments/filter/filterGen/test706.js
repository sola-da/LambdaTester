





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[157] = ["0>Dr","E","x"]
argument2 = ["?","e"]
argument2[3] = null
return a/b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['filter'] = {"460":1.7119967604570232e+308,"618":969,"AG":"","":1.7976931348623157e+308,"5.787688711954549e+307":4.3885681475201975e+307,"2.503292143386772e+307":1.2315095882800473e+308,"7.836890751896982e+307":714,"6.276069128833895e+307":5.673569750883785e+307}
base_1[0][4] = {"49":"Jsp4","":"'x","8.960680068327401e+307":893,"7.543406487649633e+307":1.294790067016568e+307,"3.99513414084346e+307":7.907688119405143e+307,"cO":"","]K":9.624051682326797e+306}
return a+b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][1] = false
argument4['C'] = ""
argument5[4] = [-1,607,783,122,893,403]
return a*b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['wIs'] = false
base_3[5] = ""
return a*b-c
};
var argument5 = null;
var base_0 = ["8S"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["8S"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["8S"]
var r_2= undefined
try {
r_2 = base_2.filter(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["8S"]
var r_3= undefined
try {
r_3 = base_3.filter(argument4,argument5)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test706.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)