





var callbackArguments = [];
var argument1 = function (viewDBName) {
 callbackArguments.push(arguments) 

    return !viewsToStatus[viewDBName];
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    return isObject(selector) ? $.contains(this, selector) : $(this).find(selector).size();
};
var argument3 = function () {
 callbackArguments.push(arguments) 

    return t.data(this, 'ui-droppable').options.scope === n;
};
var argument4 = true;
var argument5 = function (attachment) {
 callbackArguments.push(arguments) 

    return !_.isUndefined(attachment.id);
};
var argument6 = [213,618,627,705,157,893,-1];
var argument7 = ["w","G","]","PRw","15","?I_A"];
var base_0 = [0,403]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,403]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,403]
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,403]
var r_3= undefined
try {
r_3 = base_3.filter(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test949.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)