





var callbackArguments = [];
var argument1 = function (v) {
 callbackArguments.push(arguments) 

    v.index = i++;
};
var argument2 = function (node) {
 callbackArguments.push(arguments) 

    newP.appendChild(node);
};
var argument3 = r_0;
var argument4 = null;
var argument5 = function (n) {
 callbackArguments.push(arguments) 

    var arr = [];
    columns.forEach(function (c) {
        arr.push(fetchValue(vars, n, c));
    });
    csv_to_return.push(arr);
};
var argument6 = function (k, v) {
 callbackArguments.push(arguments) 

    _r[k] = _r.objects[k];
};
var argument7 = null;
var base_0 = [783,49,82,157,-100,969]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,49,82,157,-100,969]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,49,82,157,-100,969]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,49,82,157,-100,969]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test589.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)