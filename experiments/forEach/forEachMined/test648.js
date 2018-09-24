





var callbackArguments = [];
var argument1 = function (ctInst) {
 callbackArguments.push(arguments) 

    cp.dataType._initializeInstance(ctInst);
};
var argument2 = false;
var argument3 = function (n, i) {
 callbackArguments.push(arguments) 

    if (i < vars.depth.value) {
        grouped_data.key(function (d) {
            return fetchValue(vars, d.d3plus, n);
        });
    }
};
var argument4 = function (v) {
 callbackArguments.push(arguments) 

    function f() {
        console.error('write', v);
        socket.write(v);
    }
    assert.throws(f, TypeError);
};
var argument5 = false;
var argument6 = r_2;
var argument7 = function (m) {
 callbackArguments.push(arguments) 

    m.setMap(null);
};
var base_0 = [893,"MBA"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,"MBA"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,"MBA"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,"MBA"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test648.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)