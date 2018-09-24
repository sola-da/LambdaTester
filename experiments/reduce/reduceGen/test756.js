





var callbackArguments = [];
var argument1 = true;
var argument2 = 783;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = {"157":1.055742945364405e+308,"":7.719271060447591e+307}
argument3[0] = {"3":7.391690194748001e+307,"705":242,"969":1.2369633375377587e+308,"0*&":"","":"|","7.807084192351288e+306":9.710196893877117e+307}
argument2[7] = {"714":"'<$3","":-1,"w^`":627,"1.6477408797811984e+308":"%"}
return a-b*c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = ["O@1","X","5aeiE","tM","$","=O","R","5","l","`+"]
argument6[0] = false
return a+b*c-d
};
var argument6 = r_1;
var argument7 = null;
var argument8 = true;
var argument9 = null;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = {"460":1.4289238322489734e+308,"595":82,"":"o0","1.3225923747295144e+308":6.741004815369359e+307}
return a/b-c-d
};
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[627][126] = true
return a-b-c+d
};
var base_0 = [49,5e-324,122,627,969,595,705]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,5e-324,122,627,969,595,705]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,5e-324,122,627,969,595,705]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,5e-324,122,627,969,595,705]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test756.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)