





var callbackArguments = [];
var argument1 = [":","e",")g","MN","R","T"];
var argument2 = null;
var argument3 = ")";
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][4] = ""
argument3[1.3938918493123786e+308] = {"`":"","+l":9.80609499889386e+307,"1.5364257362395878e+308":"<","":1.6564906074726103e+308,"1.057554402091974e+308":"","[5]:Z":8.153295688697705e+306,"yU":8.25958033952004e+306}
return a+b-c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = {"242":1.7699913131683138e+308,"460":""}
argument6 = null
return a/b*c-d
};
var argument6 = r_0;
var argument7 = true;
var argument8 = {};
var argument9 = true;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[595] = 1.5304701720676003e+308
argument8[213] = true
argument8[3] = 5.643001423282263e+307
return a+b-c/d
};
var argument11 = 8.712101662176456e+307;
var argument12 = "T";
var argument13 = [-1,157];
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13['HMm'] = 5.624548504289151e+307
argument13[4] = false
argument12[1] = true
return a*b*c/d
};
var base_0 = [-100,893,-100,969,82,122,403,242,-100]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,893,-100,969,82,122,403,242,-100]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,893,-100,969,82,122,403,242,-100]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,893,-100,969,82,122,403,242,-100]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test660.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)