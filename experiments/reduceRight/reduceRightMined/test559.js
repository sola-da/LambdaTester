





var callbackArguments = [];
var argument1 = function (a, b) {
 callbackArguments.push(arguments) 

    if (a)
        visited[a] = true;
    if (b)
        visited[b] = true;
    return 0;
};
var argument2 = ["C",969,969,"W",705,"d"];
var argument3 = false;
var argument4 = function (a, b) {
 callbackArguments.push(arguments) 

    if (a)
        visited[a] = true;
    if (b)
        visited[b] = true;
    return 0;
};
var argument5 = {"126":8.297594623376435e+306,"823":1.4628787348757736e+308,"1.7976931348623157e+308":1.226759470994924e+308,"7.403466418228132e+307":"&","1.314704173379894e+308":"","hy^":"","":25,"1.6019169037820345e+308":"Ar","2.4704675934438263e+307":2.752184137538193e+307,"3.567637315423533e+307":""};
var argument6 = function (a, b) {
 callbackArguments.push(arguments) 

    return (a || '').toString() + (b || '').toString();
};
var argument7 = [157,1.7976931348623157e+308,1.7976931348623157e+308,0,893,126,-100,783,59];
var argument8 = r_2;
var argument9 = function (a, b) {
 callbackArguments.push(arguments) 

    return a + b;
};
var argument10 = "";
var base_0 = [607,"-",893,"E"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,"-",893,"E"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,"-",893,"E"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,"-",893,"E"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightMined/test559.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)