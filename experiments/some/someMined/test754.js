





var callbackArguments = [];
var argument1 = function (obj, index) {
 callbackArguments.push(arguments) 

    this.a[index] = obj;
    numberOfRuns += 1;
    if (numberOfRuns == 3) {
        return true;
    }
    return false;
};
var argument2 = function (context) {
 callbackArguments.push(arguments) 

    return context.fn(context, self.v);
};
var argument3 = function (isCustomAttributeFn) {
 callbackArguments.push(arguments) 

    return isCustomAttributeFn.call(null, attributeName);
};
var argument4 = null;
var argument5 = function (p) {
 callbackArguments.push(arguments) 

    var principalType = p.message || undefined;
    var principalId = p.id || undefined;
    return principalType === RoleMapping.ROLE && principalId === role;
};
var argument6 = false;
var base_0 = [1.7976931348623157e+308,607,618,595,595,157,783,403]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,607,618,595,595,157,783,403]
var r_1= undefined
try {
r_1 = base_1.some(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,607,618,595,595,157,783,403]
var r_2= undefined
try {
r_2 = base_2.some(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,607,618,595,595,157,783,403]
var r_3= undefined
try {
r_3 = base_3.some(argument5,argument6)
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
require("fs").writeFileSync("./experiments/some/someMined/test754.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)