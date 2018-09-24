





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    return resp.items.indexOf(item.data) !== -1;
};
var argument2 = null;
var argument3 = function (x) {
 callbackArguments.push(arguments) 

    return i & ret.KEY_MODS[x];
};
var argument4 = "";
var argument5 = function (json) {
 callbackArguments.push(arguments) 

    return !json.github.full_name.indexOf(query);
};
var argument6 = false;
var argument7 = null;
var argument8 = function (e) {
 callbackArguments.push(arguments) 

    e.entityAspect.isBeingSaved = true;
    return e.entityAspect.entityState.isModified() && e.entityType.concurrencyProperties.length > 0;
};
var argument9 = 655;
var argument10 = {"":""};
var base_0 = [59,618,655,59,82,49]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,618,655,59,82,49]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,618,655,59,82,49]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,618,655,59,82,49]
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test893.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)