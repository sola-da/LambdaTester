





var callbackArguments = [];
var argument1 = function (a) {
 callbackArguments.push(arguments) 

    return parseExpr(a, tokens, newContext);
};
var argument2 = function (x) {
 callbackArguments.push(arguments) 

    if (typeof x[0] != 'string')
        x[0] = x[0].name;
    if (!x[1])
        x = x[0];
    return x;
};
var argument3 = 460;
var argument4 = {"0":"WPG","82":"","213":4.21486649171757e+307,"":"nZ p","4.507252229605276e+307":"RY","Tk":"","U":"MLx{","9.876632004293613e+307":595,"5.024524815253774e+306":"{"};
var argument5 = function (r) {
 callbackArguments.push(arguments) 

    return [
        r.id,
        r.title,
        r.seconds,
        r.message
    ];
};
var argument6 = function () {
 callbackArguments.push(arguments) 

    return '?';
};
var argument7 = true;
var argument8 = r_1;
var base_0 = ["as","&","a=I",893,"TN"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["as","&","a=I",893,"TN"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["as","&","a=I",893,"TN"]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test865.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)