





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.1277822633002616e+308] = "M"
return a/b-c/d
};
var argument2 = null;
var argument3 = {"49":"|bx^","":"","4.068169820917815e+306":5.472990149757309e+307,"_a":655,"1.7816157984989429e+308":607,"585sDn":213,"2.560014275756536e+307":"","1.7462139699964306e+308":460};
var argument4 = null;
var argument5 = true;
var argument6 = true;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[9.331954948603684e+307] = 3.3327666986085554e+307
base_1[3] = {"242":59,"403":"","?":""}
argument5[-1] = 1.6500589432113777e+308
return a/b+c/d
};
var argument8 = {"xB":-1};
var argument9 = ["0","d1","h =","Rd",714,"s"];
var argument10 = null;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[460] = 126
argument10[25] = {"714":"Uus<z","n":607,"6.724895639628218e+307":714,"3.9712747779842656e+307":5e-324,"l":100,"":""}
return a/b*c+d
};
var argument12 = null;
var argument13 = null;
var argument14 = null;
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[4] = 8.015185099348378e+306
return a/b*c+d
};
var base_0 = [618,"M"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,"M"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,"M"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,"M"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test622.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)