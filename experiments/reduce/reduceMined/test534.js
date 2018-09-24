





var callbackArguments = [];
var argument1 = function (systems, name) {
 callbackArguments.push(arguments) 

    systems[name] = list[name].system;
    return systems;
};
var argument2 = "";
var argument3 = function (count, p) {
 callbackArguments.push(arguments) 

    if (!p.name || p.name && !p.value) {
        return count + 1;
    } else {
        return count;
    }
};
var argument4 = function (err, results) {
 callbackArguments.push(arguments) 

    callback.apply(that, [err].concat(results));
};
var argument5 = r_2;
var argument6 = 1.4385304017131742e+308;
var argument7 = function (length, delta) {
 callbackArguments.push(arguments) 

    return length + delta.getLength();
};
var argument8 = 460;
var argument9 = "i|";
var base_0 = [242,100,618,213,0,403,607,1.7976931348623157e+308,823,783]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,100,618,213,0,403,607,1.7976931348623157e+308,823,783]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,100,618,213,0,403,607,1.7976931348623157e+308,823,783]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,100,618,213,0,403,607,1.7976931348623157e+308,823,783]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test534.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)