





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[893] = {"242":1.1306714338177148e+308,"Y":"ww"}
return a+b*c+d
};
var argument2 = "";
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.359136872727139e+308] = false
argument6[5] = null
return a-b+c-d
};
var argument5 = null;
var argument6 = true;
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[213] = null
argument5['s'] = {"4":"","122":")?e","783":4.4582880105124206e+307,"823":"#sQ","1.744142815507628e+308":"","<yL){":100}
argument7[6.35085648319999e+307] = null
return a/b*c/d
};
var argument9 = [595,460,823,59,126,25,126,157,783,969];
var argument10 = {"714":"K","893":"","-100":"","":0,"4f":"_","1.7976931348623157e+308":"","V)M":1.7683651654642645e+308};
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[';N'] = {"607":"","627":59,"1.724193021864219e+308":403,"2.636007108095324e+307":618,",A,c":893,"1.7936062906347802e+308":""}
argument11[1.3938918493123786e+308] = null
argument10[7.463432409233234e+307] = true
return a-b+c-d
};
var base_0 = ["3`","J"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["3`","J"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["3`","J"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["3`","J"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test745.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)