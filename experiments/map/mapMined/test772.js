





var callbackArguments = [];
var argument1 = function (val, i) {
 callbackArguments.push(arguments) 

    return {
        name: elem.name,
        value: val
    };
};
var argument2 = {"":1.7976931348623157e+308};
var argument3 = function (val, key) {
 callbackArguments.push(arguments) 

    return {
        name: key,
        value: val
    };
};
var argument4 = r_1;
var argument5 = function (version) {
 callbackArguments.push(arguments) 

    return version == info.current ? chalk.yellow(version) : version;
};
var argument6 = "Sb";
var argument7 = r_2;
var argument8 = function (k) {
 callbackArguments.push(arguments) 

    return k + '=' + params[k];
};
var argument9 = null;
var base_0 = [893,25,100,607,823,969,157,59,843,627]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,25,100,607,823,969,157,59,843,627]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,25,100,607,823,969,157,59,843,627]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,25,100,607,823,969,157,59,843,627]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test772.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)