





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = {"122":">","213":"","V":618,"1.337940329802611e+308":1.6103729250220087e+308,"8.715645799279068e+307":893,"":618,"1.7976931348623157e+308":"xxrG"}
base_0[8] = true
return a/b/c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][8] = 1.5554311124012206e+308
base_1[4][7] = ["2Q",100]
base_1[5][0] = 607
return a-b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['f'] = {"82":"","100":49,"":"","1.683595441324784e+308":""}
return a-b/c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4][8] = 1.4889304738913841e+308
return a/b+c
};
var base_0 = ["fl",893,618,-1,126,"3",157]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["fl",893,618,-1,126,"3",157]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["fl",893,618,-1,126,"3",157]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["fl",893,618,-1,126,"3",157]
var r_3= undefined
try {
r_3 = base_3.some(argument6)
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
require("fs").writeFileSync("./experiments/some/someGen/test758.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)