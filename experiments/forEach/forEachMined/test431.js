





var callbackArguments = [];
var argument1 = function (o) {
 callbackArguments.push(arguments) 

    var obj = {
            'id': o,
            'text': vars.format.value(o)
        };
    data.push(obj);
};
var argument2 = function (key) {
 callbackArguments.push(arguments) 

    traverse[key] = function (obj) {
        var args = [].slice.call(arguments, 1);
        var t = new Traverse(obj);
        return t[key].apply(t, args);
    };
};
var argument3 = false;
var argument4 = null;
var argument5 = function (t) {
 callbackArguments.push(arguments) 

    J(this, t);
};
var argument6 = function (pick) {
 callbackArguments.push(arguments) 

    pick.dependants = pick.dependants.map(function (dependant) {
        var release = dependant.pkgMeta._release;
        return dependant.endpoint.name + (release ? '#' + release : '');
    }).join(', ');
};
var argument7 = "[";
var base_0 = [823,242,969,969,823,595,627]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,242,969,969,823,595,627]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,242,969,969,823,595,627]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,242,969,969,823,595,627]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test431.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)