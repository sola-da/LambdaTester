





var callbackArguments = [];
var argument1 = function (v) {
 callbackArguments.push(arguments) 

    function f() {
        console.error('write', v);
        socket.write(v);
    }
    assert.throws(f, TypeError);
};
var argument2 = false;
var argument3 = null;
var argument4 = function (child) {
 callbackArguments.push(arguments) 

    table.insertBefore(child.getDom(), append);
    child.showChilds();
};
var argument5 = false;
var argument6 = r_1;
var argument7 = function (listener) {
 callbackArguments.push(arguments) 

    return google.maps.event.removeListener(listener);
};
var argument8 = null;
var argument9 = null;
var argument10 = function (result) {
 callbackArguments.push(arguments) 

    file = result.file;
    error = result.error;
    str += file + ': line ' + error.line + ', col ' + error.character + ', ' + error.reason + '\n';
};
var base_0 = [460,59,59]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,59,59]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,59,59]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,59,59]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test412.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)