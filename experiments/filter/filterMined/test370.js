





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d3.select(this).node().classList[1] !== liClass;
};
var argument2 = ["6","<"];
var argument3 = function (event) {
 callbackArguments.push(arguments) 

    return event.pid === processId && event.name === event_name && typeof event.args !== 'undefined' && typeof event.args.data !== 'undefined';
};
var argument4 = function () {
 callbackArguments.push(arguments) 

    var t = this;
    return r.some.call(i, function (e) {
        return n.contains(e, t);
    });
};
var argument5 = false;
var argument6 = false;
var argument7 = function () {
 callbackArguments.push(arguments) 

    var conn = this.getAttributeNS(se_ns, 'connector');
    if (conn == conn_str || conn == alt_str)
        return true;
};
var argument8 = false;
var argument9 = false;
var base_0 = [" ","0","8B+P","n","gFZfEi","M"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [" ","0","8B+P","n","gFZfEi","M"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [" ","0","8B+P","n","gFZfEi","M"]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [" ","0","8B+P","n","gFZfEi","M"]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test370.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)