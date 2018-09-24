





var callbackArguments = [];
var argument1 = {"893":"G","l#f'":1.247729050197252e+308,"S":"_D","":1.1149108688494655e+307,"A":126,"1.3204291805483147e+308":403,"4.160152190790814e+307":1.389398368488773e+308,"[V":"","H":1.7976931348623157e+308};
var argument2 = {"122":59,"460":"^gH","^":"","9.345453072913508e+307":714,"1.687517339980792e+308":1.517922320985097e+308,"F)Yb)vlc":"BX","4.1020034484871404e+307":893,"":5.814633243787031e+307};
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['l&'] = null
return a-b/c-d
};
var argument5 = {"":"","q;":655};
var argument6 = null;
var argument7 = r_0;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = [823,82,655,823,969,0,705]
argument7['*c'] = null
return a*b+c/d
};
var argument9 = {"0":"","49":705,"126":2.0754401710997942e+307,"403":1.2490605937381335e+308,"|v":"","":"","#":"a","1.2089145559791246e+308":"","1.3824755840103616e+308":843,"7.999889602676851e+307":25};
var argument10 = false;
var argument11 = false;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[9] = 969
argument10 = "M_%:VPb"
argument11[5] = [460,126]
return a+b-c/d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = null
base_3[3] = null
return a-b-c*d
};
var argument14 = [655,893,783,783,705,-1,783,1.7976931348623157e+308,893,403];
var base_0 = [627,-1,595,49,122,893,627,126,25,49]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,-1,595,49,122,893,627,126,25,49]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,-1,595,49,122,893,627,126,25,49]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,-1,595,49,122,893,627,126,25,49]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test847.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)