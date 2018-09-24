





var callbackArguments = [];
var argument1 = function (a) {
 callbackArguments.push(arguments) 

    if (a.parent != null) {
        throw new Error('The complexObject is already attached. Either clone it or remove it from its current owner');
    }
    setAspect(a, complexArray);
};
var argument2 = null;
var argument3 = "";
var argument4 = function (m) {
 callbackArguments.push(arguments) 

    vars[m] = d3plus.object.merge(vars[m] || {}, initStyle[m]);
    d3plus.method.init(vars, vars[m], m);
    vars.self[m] = d3plus.method.function(m, vars);
};
var argument5 = 49;
var argument6 = function (v) {
 callbackArguments.push(arguments) 

    function f() {
        console.error('write', v);
        socket.write(v);
    }
    assert.throws(f, TypeError);
};
var argument7 = null;
var argument8 = r_2;
var argument9 = function (stmt, i) {
 callbackArguments.push(arguments) 

    if (!(stmt instanceof AST_EmptyStatement)) {
        output.indent();
        stmt.print(output);
        if (!(i == last && is_toplevel)) {
            output.newline();
            if (is_toplevel)
                output.newline();
        }
    }
};
var argument10 = r_1;
var base_0 = ["2","H",59,"4r","n7^uwda","MC","=<ir"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["2","H",59,"4r","n7^uwda","MC","=<ir"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["2","H",59,"4r","n7^uwda","MC","=<ir"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["2","H",59,"4r","n7^uwda","MC","=<ir"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test627.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)