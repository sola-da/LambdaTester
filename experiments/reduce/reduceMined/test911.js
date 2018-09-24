





var callbackArguments = [];
var argument1 = function (acc, join) {
 callbackArguments.push(arguments) 

    acc.push(makePunc(punc, _.first(join)));
    Array.prototype.push.apply(acc, join);
    return acc;
};
var argument2 = {"823":"X-","":"","`":"","7.955415878634281e+306":403};
var argument3 = ["HM","7N",126,"!`rIn9KP",0,"Z","z*:","wc",893,"e"];
var argument4 = function (previous, current) {
 callbackArguments.push(arguments) 

    return current < previous ? current : previous;
};
var argument5 = r_0;
var argument6 = function (promise, hook) {
 callbackArguments.push(arguments) 

    return promise ? promise.then(hook) : hook();
};
var argument7 = function (previousValue, currentValue) {
 callbackArguments.push(arguments) 

    return previousValue + currentValue;
};
var argument8 = ["+","Y",",","x",843,"!","(",893];
var base_0 = [25,893,843]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,893,843]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,893,843]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,893,843]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test911.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)