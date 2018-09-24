





var callbackArguments = [];
var argument1 = function (value) {
 callbackArguments.push(arguments) 

    return value[key];
};
var argument2 = function (x, i) {
 callbackArguments.push(arguments) 

    var result = selector.call(thisArg, x, i, source);
    isPromise(result) && (result = observableFromPromise(result));
    (Array.isArray(result) || isIterable(result)) && (result = observableFrom(result));
    return result;
};
var argument3 = function (obj) {
 callbackArguments.push(arguments) 

    find_keys(obj, 0, {});
    return obj;
};
var argument4 = {"157":49,"843":8.169398405854508e+307,"1.71037330275688e+308":783,"":0,"u":843,"Ps":"","2.0870938106815564e+307":8.975672805051279e+307};
var argument5 = function (ban) {
 callbackArguments.push(arguments) 

    ban.TimeOfBanString = new Date(ban.TimeOfBan * 1000).toString();
    return ban;
};
var base_0 = [655,823,627]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,823,627]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,823,627]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,823,627]
var r_3= undefined
try {
r_3 = base_3.map(argument5)
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
require("fs").writeFileSync("./experiments/map/mapMined/test970.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)