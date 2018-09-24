





var callbackArguments = [];
var argument1 = function (d, i) {
 callbackArguments.push(arguments) 

    d.date = moment(d.sighted, 'YYYYMMDD').toDate();
};
var argument2 = {"":1.7629056187810389e+307};
var argument3 = null;
var argument4 = function (obj) {
 callbackArguments.push(arguments) 

    if (obj !== dst) {
        forEach(obj, function (value, key) {
            dst[key] = value;
        });
    }
};
var argument5 = function (x) {
 callbackArguments.push(arguments) 

    acc.push(this.node);
};
var argument6 = false;
var argument7 = function (m) {
 callbackArguments.push(arguments) 

    vars[m] = d3plus.object.merge(vars[m] || {}, initStyle[m]);
    d3plus.method.init(vars, vars[m], m);
    vars.self[m] = d3plus.method.function(m, vars);
};
var argument8 = [714,126,5e-324,823,460,403,823];
var argument9 = true;
var base_0 = [705,"B",25,"|ol"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,"B",25,"|ol"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,"B",25,"|ol"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,"B",25,"|ol"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test622.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)