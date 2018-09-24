





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"¸o\u001a«ry":"A","XbÀÕ":"Á","\u000f×":1,"ß>\n\u0007\u0017Ö":false,"Ø":false,"þ;":46,"":48,"\u0004ÚÃ:":-41}; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return {"N\u0016Í":0,"¬ÙýSÈHt":3.9448051921736553,"¸ACÎi":5,"x(\u0004ô7":true,"\u0013ú§£²":true,"Êy":true,"Åù":[null,false],"Æ®\u0019":"Ì\u0005º"}; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 2.906951856849793; };
var argument4 = 3.589324981946776e+307;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument6 = {"0":"","59":"","607":"x","1.320882434916278e+308":"u","":"U","1.3902410217656567e+308":82};
var argument7 = true;
var base_0 = [618,823,607,655,969,705,595,607]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,823,607,655,969,705,595,607]
var r_1= undefined
try {
r_1 = base_1.some(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,823,607,655,969,705,595,607]
var r_2= undefined
try {
r_2 = base_2.some(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,823,607,655,969,705,595,607]
var r_3= undefined
try {
r_3 = base_3.some(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someQC/test866.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)