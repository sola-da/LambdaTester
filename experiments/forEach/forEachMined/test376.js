





var callbackArguments = [];
var argument1 = function (id) {
 callbackArguments.push(arguments) 

    __data_classes[id] = args.classes[id];
};
var argument2 = false;
var argument3 = function (kv) {
 callbackArguments.push(arguments) 

    var offset = kv.indexOf('=');
    if (offset === -1) {
        return;
    }
    params[decodeURIComponent(kv.substring(0, offset))] = decodeURIComponent(kv.substring(offset + 1));
};
var argument4 = [595,607,705];
var argument5 = false;
var argument6 = function (n) {
 callbackArguments.push(arguments) 

    self.attachButtonBehavior(n, self.firstBtnClass, self.firstFunc);
};
var argument7 = function (handler) {
 callbackArguments.push(arguments) 

    handler.apply(this, args);
};
var argument8 = false;
var argument9 = r_0;
var base_0 = ["e","O","&O@","i-"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["e","O","&O@","i-"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["e","O","&O@","i-"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["e","O","&O@","i-"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test376.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)