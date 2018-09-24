





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = ["&=39b","=",595,"J",-1,",p2",607,403]
argument3[1] = null
argument2[0] = {"126":7.400050049824716e+307,"823":9.433826785560028e+307,"5*%{b":59}
return a/b/c+d
};
var argument2 = ["v","{","(",969,"&Ft",607,705,"!Y",969];
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[655] = "`G"
return a*b+c+d
};
var argument5 = ["@","V","Y","+WC","|g",-100,49,460,"5X"];
var argument6 = r_1;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[4] = ["P","t-%","W"]
base_2[3] = null
argument9[126] = 1.2496973710082215e+308
return a-b/c-d
};
var argument8 = {"82":100,"o":"1SMu"};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2][2.819898637310108e+307] = null
base_3[4][1.7976931348623157e+308] = [-100,783,-100,242,714,25,82,25]
argument10[7] = ""
return a*b-c+d
};
var argument10 = null;
var base_0 = ["F","@"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["F","@"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["F","@"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["F","@"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test635.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)