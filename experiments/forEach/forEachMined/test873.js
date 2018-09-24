





var callbackArguments = [];
var argument1 = function (name) {
 callbackArguments.push(arguments) 

    try {
        gl = gl || this.view.getContext(name, this.options);
    } catch (e) {
    }
};
var argument2 = {"655":""};
var argument3 = null;
var argument4 = function (file) {
 callbackArguments.push(arguments) 

    debug('file %s', file);
    fs.watchFile(file, options, function (curr, prev) {
        if (prev.mtime < curr.mtime)
            fn(file);
    });
};
var argument5 = null;
var argument6 = function (e) {
 callbackArguments.push(arguments) 

    tmp.push(e);
};
var argument7 = 627;
var argument8 = false;
var argument9 = function (x, callback) {
 callbackArguments.push(arguments) 

    iterator(x, function (v) {
        if (v) {
            main_callback(true);
            main_callback = function () {
            };
        }
        callback();
    });
};
var base_0 = ["gP",823,"m}h","h",100,"gy)",655,"s"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["gP",823,"m}h","h",100,"gy)",655,"s"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["gP",823,"m}h","h",100,"gy)",655,"s"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["gP",823,"m}h","h",100,"gy)",655,"s"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test873.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)