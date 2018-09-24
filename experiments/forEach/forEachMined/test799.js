





var callbackArguments = [];
var argument1 = function (el, i) {
 callbackArguments.push(arguments) 

    if (matchesSelector && matchesSelector.call(el, ':focus'))
        index = i;
};
var argument2 = {"":618,"4.462397186278306e+307":49,"R9":"^?"};
var argument3 = r_0;
var argument4 = function (f, i) {
 callbackArguments.push(arguments) 

    this._addRow(i + 1, this.getFileType(f.name), f.name, f.size);
};
var argument5 = function (child) {
 callbackArguments.push(arguments) 

    child.expand(recurse);
};
var argument6 = true;
var argument7 = null;
var argument8 = function (handler) {
 callbackArguments.push(arguments) 

    handler.func.apply(null, args);
};
var argument9 = false;
var argument10 = null;
var base_0 = ["vi8","j2","xM]Ha*","?","]"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["vi8","j2","xM]Ha*","?","]"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["vi8","j2","xM]Ha*","?","]"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["vi8","j2","xM]Ha*","?","]"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test799.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)