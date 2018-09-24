





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.3599216339661573e+308] = [59,893,0,893]
base_0[0][2] = 4.918764587867755e+307
argument2[1] = {"25":"b","":"","1.5858714572025583e+308":"_","E":5.158167929352815e+307,"-1":"p","-S&:);=PS7J":"(","1.6617816347249792e+307":-1}
return a/b-c
};
var argument2 = [595];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = null
base_1[0][1] = {"126":"3","157":823,"403":893,"I":"H","":"","<":"[b*x","fNxSY":9.43650989222674e+307,",>)":"","Nbl2":1.4953737194540045e+308}
return a*b*c
};
var argument4 = 49;
var argument5 = r_1;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][2] = "<|1"
argument7[3] = 823
base_2[6] = 1.1634614072946052e+308
return a-b+c
};
var argument7 = {"403":""};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[403] = {}
argument9[4.960033715165713e+307] = null
argument10[5] = null
return a+b+c
};
var argument9 = ["n","Vg7","j","E","$d","P>A"];
var base_0 = [843,969,627,25,1.7976931348623157e+308,49,783,403]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,969,627,25,1.7976931348623157e+308,49,783,403]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,969,627,25,1.7976931348623157e+308,49,783,403]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,969,627,25,1.7976931348623157e+308,49,783,403]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test791.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)