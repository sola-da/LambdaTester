





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = ["p?|","fo","l",";2","(k=zv","F","J","4","Nq:"];
var argument3 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument4 = 59;
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return {"\u001cgöË":0,"×\u001cPe8":-0.763405586610711,"òý\u0012":0,"IVç\u0011\u00024Ç":-8.152542248753,"ÂTL3ª":true,"q\ró·ò]²`":4.938999604910677,"\u000e'õJ\u000fq7\f¦":24.609056407294972,"":{"¿\u000e\bì":false,"÷²":false,"Í":13.901087662490639,"ø+\bxä":[],"\nUa\u0003³¡Ç":false,"84'ñÐJ\u0014Ü":29.759355531413796}}; };
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = [403,403,893,607,59]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,403,893,607,59]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,403,893,607,59]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test613.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)