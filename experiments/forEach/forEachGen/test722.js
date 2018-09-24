





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[9] = ["Q",969]
argument1['1SHF1'] = [714,618,"4","r",607]
base_0[1] = null
return a/b-c
};
var argument2 = {"893":7.543406487649633e+307,"1.2421645642809447e+308":49,"Jsp4":"","":"","1.294790067016568e+307":"","1.1564778704604463e+308":3.99513414084346e+307,"7.907688119405143e+307":"cO","'x":"]K","9.624051682326797e+306":100,"N":7.673806602777071e+307};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = {"82":607,"126":"","242":595,"@":"","Q":"","9.985183455646902e+307":"u%","":783,"2.488642544068132e+307":""}
base_1[0][823] = ["O","N","h",",H4","[","td","`","-*",";","0J"]
return a*b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['?'] = ""
return a+b/c
};
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.7976931348623157e+308] = null
return a+b+c
};
var base_0 = [618,969,403,157,49,122,823,25,618]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,969,403,157,49,122,823,25,618]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,969,403,157,49,122,823,25,618]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,969,403,157,49,122,823,25,618]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test722.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)