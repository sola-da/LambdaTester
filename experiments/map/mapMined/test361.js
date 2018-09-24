





var callbackArguments = [];
var argument1 = function (line) {
 callbackArguments.push(arguments) 

    return _.clone(line.delta.ops);
};
var argument2 = function (x) {
 callbackArguments.push(arguments) 

    return x.shift();
};
var argument3 = function foo(v) {
 callbackArguments.push(arguments) 

    setTimeout(function () {
        throw new Error(v);
    }, 10);
};
var argument4 = ["H*D,","h","Y","^","zw"];
var argument5 = r_1;
var base_0 = [823,59,122,126,655,-1,403,100]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,59,122,126,655,-1,403,100]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,59,122,126,655,-1,403,100]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
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
require("fs").writeFileSync("./experiments/map/mapMined/test361.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2]),"returnObjects":serialize([r_0,r_1,r_2]),"callbackArgs":callbackArguments}))
},300)