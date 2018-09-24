





var callbackArguments = [];
var argument1 = "?";
var argument2 = r_0;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['18{'] = true
argument2[2] = [618,893,49]
return a+b+c+d
};
var argument5 = false;
var argument6 = r_0;
var argument7 = r_0;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][1] = [714,59,213,460,-1,714,403,823,705]
return a/b-c-d
};
var argument9 = ["e","J0","d","L;)kw0F","|3tw<","Q","y","f@TQI","1+"];
var argument10 = "q`";
var argument11 = {"714":1.646665648162613e+308,"893":"3","Xot,":122,"8.380182554323404e+305":893,"1.593199381553529e+308":714,"":"","W":"wL1","1.7976931348623157e+308":823,"<":"8"};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = false
argument9[0] = {"595":705,"k)w":"","":"A","(n":460,"1.4479382796205063e+308":5e-324,"ar^":""}
return a-b*c/d
};
var argument13 = null;
var argument14 = ["v","]","*","i","C","Q*+","I","P",")S_$(","ngtK1"];
var argument15 = r_3;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = false
argument14[403] = {"969":3.6220631198785426e+307,":Z":25,"Jv":"R","9.34265559659802e+307":"myI","1.7976931348623157e+308":5e-324,"8.739594698791065e+307":607,"xc":"%P_s:"}
argument14[213] = false
return a+b*c/d
};
var base_0 = [";Z"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [";Z"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [";Z"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [";Z"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test666.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)