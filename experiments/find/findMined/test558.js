





var callbackArguments = [];
var argument1 = function (item, idx) {
 callbackArguments.push(arguments) 

    return idx === 0;
};
var argument2 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === doc2._id;
};
var argument3 = true;
var argument4 = 3.4507431227112974e+306;
var argument5 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === id3;
};
var argument6 = function (frame) {
 callbackArguments.push(arguments) 

    var v = frame.variable(name);
    if (v) {
        return v.value.eval(env);
    }
};
var argument7 = true;
var base_0 = [1.7976931348623157e+308,49,100,213,403,618,157,595,595]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,49,100,213,403,618,157,595,595]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,49,100,213,403,618,157,595,595]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,49,100,213,403,618,157,595,595]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7)
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
require("fs").writeFileSync("./experiments/find/findMined/test558.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)