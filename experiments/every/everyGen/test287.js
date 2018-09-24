





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = [82,-100,618,1.7976931348623157e+308,25,157,969,49]
argument2[403] = 1.4006906153398338e+308
return a-b*c
};
var argument2 = r_0;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = 1.774849627133602e+308
base_1[1][6] = ["%Q","E","L#lM","S","Nu+O","ef","q","lkTS","+}@"]
return a*b*c
};
var argument5 = {};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = {"843":6.878714512786711e+307,"":"","-":"m","5.695295555446905e+307":"","6.208772486543545e+307":"Q&t","eD":705,"j":49,"<":"[%iI","6.1370721033645e+307":"gG"}
argument7[1.3599216339661573e+308] = {"126":"","893":"1A","5.612989101964893e+307":"","1.0357045404929113e+308":"",",":"Ct#","":595,"1.4877952019393346e+308":"","6.551498071970738e+307":""}
return a+b*c
};
var argument7 = true;
var argument8 = 969;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1.3599216339661573e+308] = {"100":"Jgf","595":"'aG[m<","627":-1,"714":"","":7.864413010347535e+307,"2.7677770634562574e+307":"","V%r":5.320894320500706e+307,"]":213,"7.402644319272757e+307":""}
argument11 = null
return a-b*c
};
var argument10 = {"122":1.7976931348623157e+308,"1.7976931348623157e+308":"qY","":"nO!,L","V":9.978589151697563e+307,"3.344812273598892e+307":"4p","2.9197741504866186e+307":"","f":714,"(,":595};
var argument11 = 1.2626952611822854e+307;
var base_0 = [655,843,-100,0,969]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,843,-100,0,969]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,843,-100,0,969]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,843,-100,0,969]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/every/everyGen/test287.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)