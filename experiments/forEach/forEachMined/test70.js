





var callbackArguments = [];
var argument1 = function (stmt) {
 callbackArguments.push(arguments) 

    output.indent();
    stmt.print(output);
    output.newline();
};
var argument2 = null;
var argument3 = true;
var argument4 = function (eventHandler, type) {
 callbackArguments.push(arguments) 

    removeEventListenerFn(element, type, eventHandler);
    delete events[type];
};
var argument5 = [655,100,403,705,49];
var argument6 = "*";
var argument7 = function (co) {
 callbackArguments.push(arguments) 

    that.push(co);
};
var argument8 = function (p) {
 callbackArguments.push(arguments) 

    var curr = path.join(dir, p);
    var stat = fs.statSync(curr);
    if (stat.isDirectory()) {
        _rmDir(curr);
    } else {
        try {
            fs.unlinkSync(curr);
        } catch (e) {
            if (e.code === 'EPERM') {
                fs.chmodSync(curr, '0666');
                fs.unlinkSync(curr);
            } else {
                throw e;
            }
        }
    }
};
var argument9 = false;
var base_0 = ["_","8","!","v"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["_","8","!","v"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["_","8","!","v"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["_","8","!","v"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test70.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)