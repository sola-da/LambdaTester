





var callbackArguments = [];
var argument1 = null;
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][3] = false
argument2[25] = [-1,1.7976931348623157e+308,126,122,100,783,122,242]
argument3['HMm'] = ["b","}",-1,82,49]
return a*b/c-d
};
var argument5 = r_1;
var argument6 = {"607":"","618":"","Jh":5e-324,"":6.758898784394509e+307,"N":"","1.612812046173122e+308":969,"1.3452170284813272e+308":"","2.862606145118772e+307":""};
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['s'] = null
argument7[655] = ""
return a*b+c+d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[7.463432409233234e+307] = null
return a*b*c/d
};
var argument10 = false;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[5] = {"126":"V","213":893,"823":403,"7.73194812365835e+307":"*","y@2":"","":"","8.523867779985269e+307":"R","1.7615058512342342e+308":""}
return a/b+c*d
};
var argument12 = r_3;
var argument13 = "";
var base_0 = [618,49,893,0,126,969,460,705,618]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,49,893,0,126,969,460,705,618]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,49,893,0,126,969,460,705,618]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,49,893,0,126,969,460,705,618]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test718.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)