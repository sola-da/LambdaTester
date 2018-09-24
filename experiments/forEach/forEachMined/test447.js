





var callbackArguments = [];
var argument1 = function (field) {
 callbackArguments.push(arguments) 

    if (field.isFile === true) {
        multipartDetected = true;
        return false;
    }
};
var argument2 = function (t) {
 callbackArguments.push(arguments) 

    t.values.forEach(function (v, i) {
        v.x = generateTargetX(x[i], t.id, i);
    });
    c3.data.xs[t.id] = x;
};
var argument3 = null;
var argument4 = function (v, ix) {
 callbackArguments.push(arguments) 

    var r = fn(v, ix);
    if (r != null || includeNull) {
        result[ix] = r;
    }
};
var argument5 = {"618":""};
var argument6 = function (st) {
 callbackArguments.push(arguments) 

    st._addPropertyCore(new DataProperty(newProp));
};
var base_0 = ["K","6<n","Y0f9","B"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["K","6<n","Y0f9","B"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["K","6<n","Y0f9","B"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["K","6<n","Y0f9","B"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test447.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)