





var callbackArguments = [];
var argument1 = function (value, key) {
 callbackArguments.push(arguments) 

    aNames.push(key);
};
var argument2 = null;
var argument3 = function (model) {
 callbackArguments.push(arguments) 

    return model.toJSON(options);
};
var argument4 = function (user) {
 callbackArguments.push(arguments) 

    return '' + user.id;
};
var argument5 = function (x) {
 callbackArguments.push(arguments) 

    return { rev: x.rev };
};
var argument6 = "FK]";
var argument7 = 82;
var base_0 = [607,"y",122,705,-1,"G"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,"y",122,705,-1,"G"]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,"y",122,705,-1,"G"]
var r_2= undefined
try {
r_2 = base_2.map(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test310.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)