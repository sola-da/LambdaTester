





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4][6] = 4.1411527937275945e+307
base_0[3] = false
return a*b+c
};
var argument2 = [893,122,-100,460];
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['wIs'] = {"0":"]`","49":893,"":"+","F":"uu","Cl":"{Vfuh2"}
return a/b*c
};
var argument5 = true;
var argument6 = "]'8&:q";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4] = "M}"
argument8[1] = [0,618,59,242]
argument8['7q('] = null
return a*b/c
};
var argument8 = r_1;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['am'] = null
argument10['?'] = [5e-324,-1,1.7976931348623157e+308,-100,-1,242,49]
return a+b*c
};
var argument10 = {"126":126,"242":"","":5.652814269461208e+307,"yj(-@q":25,"4.850826653000977e+307":";*n","3.3706930978900593e+307":"(","3.3948789804746386e+307":" }","9.542828162311762e+307":893};
var argument11 = r_1;
var base_0 = ["x!","|Q","b("]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["x!","|Q","b("]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["x!","|Q","b("]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["x!","|Q","b("]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test928.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)