





var callbackArguments = [];
var argument1 = function (name) {
 callbackArguments.push(arguments) 

    filtered[name] = values[name];
};
var argument2 = false;
var argument3 = null;
var argument4 = function (onWrite) {
 callbackArguments.push(arguments) 

    var c = onWrite.apply(resp, args);
    if (c !== undefined)
        args[0] = c;
};
var argument5 = r_1;
var argument6 = function (annotation) {
 callbackArguments.push(arguments) 

    self.tracer.record([[
            t,
            [annotation]
        ]]);
    test.equal(self.sent_traces.length, 0);
};
var argument7 = null;
var argument8 = function (r) {
 callbackArguments.push(arguments) 

    if (!window[r])
        missing.push('"' + r + '"');
};
var argument9 = r_3;
var argument10 = null;
var base_0 = [-1,627,823,213,783,100,607,893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,627,823,213,783,100,607,893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,627,823,213,783,100,607,893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,627,823,213,783,100,607,893]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test285.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)