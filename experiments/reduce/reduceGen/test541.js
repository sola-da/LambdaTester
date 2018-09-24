





var callbackArguments = [];
var argument1 = null;
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.359136872727139e+308] = {"5":"","242":893,"ux":49,"Y}":6.523786381253935e+307,"":1.5954208663252643e+308,"-1":8.693701969873401e+307,"j3":7.807497631516857e+307,"1.0896871624628953e+306":"IY4","-100":""}
return a/b*c/d
};
var argument5 = -100;
var argument6 = {"}iC":"","{t":"p"};
var argument7 = [705,25,1.7976931348623157e+308,122,122,126,59,969];
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[25] = {"":25}
argument7[59] = null
return a+b*c*d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11['18{'] = 893
base_2[1][0] = {"6":"nt>ByG5*%{b","59":126,"q":"","":1.2181754551682213e+308,"-1":"B10","2.7110439702805693e+307":"","P":"j(","7.400050049824716e+307":823,"9.433826785560028e+307":1.526137832892745e+308}
argument10[1.1277822633002616e+308] = {"25":"","607":"","627":1.5812987799998234e+308,"969":"","":"","-1":"8","5e-324":"","-100":8.496233802760334e+307}
return a+b-c/d
};
var argument10 = false;
var argument11 = {"25":"","403":9.551201184087097e+307,"607":1.6663513455686005e+308,"":3.304040477387534e+307,"1.3948486707246231e+308":"C","d":"","1.6916543591147302e+308":"","P":"","=bW":"tu","4.1762271289568356e+307":"o"};
var argument12 = true;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[5] = {"82":100,"242":"","705":1.787966802870228e+308,"6.934007707685621e+307":"","":"","6.402328448006295e+307":-1,"9.871020928450042e+307":5.783343908278352e+307,"5.592244591188479e+307":"","TQ":"t"}
base_3 = [595,"M",59,595,"-]"]
return a-b*c+d
};
var base_0 = ["FU","{","?le*-Uy6","a","Vl[",",f","X>","M","Pv"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["FU","{","?le*-Uy6","a","Vl[",",f","X>","M","Pv"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["FU","{","?le*-Uy6","a","Vl[",",f","X>","M","Pv"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["FU","{","?le*-Uy6","a","Vl[",",f","X>","M","Pv"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test541.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)