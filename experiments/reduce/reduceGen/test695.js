





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[2.1280896016417002e+307] = ""
argument3[403] = [893,893,82,627,893,595,823]
base_0[3] = ""
return a+b+c+d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['s'] = [213,893,618]
return a/b+c/d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[655] = ["J","K","x","Z","DW","Rq","8#","WY"]
argument6[59] = null
argument6[7.889879335222838e+307] = [823,403,82,705,49,"F8",618,122,627]
return a/b+c/d
};
var argument5 = {"":8.64790377413761e+307,"1.2466020054755513e+306":""};
var argument6 = r_0;
var argument7 = [618,122,82,-1,1.7976931348623157e+308,595,823];
var argument8 = r_3;
var argument9 = false;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3] = ""
argument8[213] = {"":403,"-1":"","zF":"q44"}
return a/b*c+d
};
var base_0 = [82,82,157,213,607]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,82,157,213,607]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,82,157,213,607]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,82,157,213,607]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test695.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)