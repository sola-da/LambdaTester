





var callbackArguments = [];
var argument1 = function (v, i) {
 callbackArguments.push(arguments) 

    return (1 - a) * blend[i] + a * v;
};
var argument2 = "kT";
var argument3 = function (c) {
 callbackArguments.push(arguments) 

    return Math.round(c);
};
var argument4 = r_1;
var argument5 = function (model) {
 callbackArguments.push(arguments) 

    return model.get(attr);
};
var argument6 = true;
var argument7 = function (file) {
 callbackArguments.push(arguments) 

    file = new File(me.getRuid(), file);
    file._refer = opts.container;
    return file;
};
var base_0 = [25]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25]
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test938.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)