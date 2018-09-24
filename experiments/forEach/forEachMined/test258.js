





var callbackArguments = [];
var argument1 = function (info, index) {
 callbackArguments.push(arguments) 

    maxName = Math.max(maxName, (info.name || '').length);
    maxLabel = Math.max(maxLabel, (info.label || '').length);
    var dimName = this._userIndexesToSingleDim[index];
    dimName && (maxDim = Math.max(maxDim, dimName.length));
};
var argument2 = true;
var argument3 = function (value, key) {
 callbackArguments.push(arguments) 

    value.dispose();
};
var argument4 = r_0;
var argument5 = "J";
var argument6 = function (klass, i) {
 callbackArguments.push(arguments) 

    if (klass && klass.length > 0) {
        className += (i > 0 ? ' ' : '') + klass + suffix;
    }
};
var argument7 = true;
var argument8 = function (key) {
 callbackArguments.push(arguments) 

    spec[key] = compileType(env, type.fields[key]);
};
var base_0 = ["%",0,82,"7u-","6","a"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["%",0,82,"7u-","6","a"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["%",0,82,"7u-","6","a"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["%",0,82,"7u-","6","a"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test258.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)