





var callbackArguments = [];
var argument1 = function (memo, val) {
 callbackArguments.push(arguments) 

    return memo ? memo[val] : undefined;
};
var argument2 = true;
var argument3 = false;
var argument4 = function (sum, value) {
 callbackArguments.push(arguments) 

    return sum + value;
};
var argument5 = 1.1146871239474459e+308;
var argument6 = null;
var argument7 = function (err, results) {
 callbackArguments.push(arguments) 

    callback.apply(that, [err].concat(results));
};
var argument8 = r_1;
var argument9 = null;
var argument10 = function (count, op) {
 callbackArguments.push(arguments) 

    return count + op.getLength();
};
var base_0 = [0,460,100,843,49,157,126,25,618]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,460,100,843,49,157,126,25,618]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,460,100,843,49,157,126,25,618]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,460,100,843,49,157,126,25,618]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test936.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)