





var callbackArguments = [];
var argument1 = true;
var argument2 = null;
var argument3 = [1.7976931348623157e+308,213,242,783,1.7976931348623157e+308,49,595,705];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[0] = 122
argument3[2] = 1.6436805141340222e+307
return a*b-c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = {"7":"ybL_L","100":157,"157":1.5394854833754454e+308,")CV`":8.724482701350751e+306,"1.7036453728338571e+308":"4l","E6iyK":"[%q","5.71178064163152e+307":893,"K:7QM":595,"6.927466584652212e+307":"f"}
return a/b*c+d
};
var argument6 = 242;
var argument7 = r_1;
var argument8 = false;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][0] = ["To","n","M,","b$","K9"]
argument8[25] = [460,-1,607,100]
argument7[25] = ";>{"
return a+b-c-d
};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[9] = false
argument10[1] = ""
return a*b+c/d
};
var base_0 = [49,157,25,157,893,59,242,460,1.7976931348623157e+308,969]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,157,25,157,893,59,242,460,1.7976931348623157e+308,969]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,157,25,157,893,59,242,460,1.7976931348623157e+308,969]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,157,25,157,893,59,242,460,1.7976931348623157e+308,969]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test881.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)