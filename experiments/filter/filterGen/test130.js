





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4][2] = null
base_0[6] = null
base_0[3][1.3434821406183095e+308] = "glLw?IV%V"
return a-b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3.0481490052276395e+306] = [783,893,5e-324,59,705,403,82,82,1.7976931348623157e+308,595]
return a/b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.1679954109349114e+308] = false
argument5[4] = [823,1.7976931348623157e+308,893,655,607,618,49,1.7976931348623157e+308]
return a*b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = {"969":705,"1.0894435191447907e+308":7.471712409319735e+307,"P":"","{":3.2768122113772786e+307,"7.199462034830367e+307":460,"1.3382251933623215e+308":"GA"}
base_3[1]['!cck7Mm'] = true
return a-b-c
};
var argument5 = true;
var argument6 = r_1;
var base_0 = [0,100,627,"#",627,"cR","l"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,100,627,"#",627,"cR","l"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,100,627,"#",627,"cR","l"]
var r_2= undefined
try {
r_2 = base_2.filter(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,100,627,"#",627,"cR","l"]
var r_3= undefined
try {
r_3 = base_3.filter(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test130.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)