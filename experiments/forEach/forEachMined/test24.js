





var callbackArguments = [];
var argument1 = function (r) {
 callbackArguments.push(arguments) 

    sel.substractPoint(r.cursor);
};
var argument2 = null;
var argument3 = null;
var argument4 = function (entity) {
 callbackArguments.push(arguments) 

    that._linkRelatedEntities(entity);
};
var argument5 = null;
var argument6 = null;
var argument7 = function (key) {
 callbackArguments.push(arguments) 

    this.setOption(key, optList[key]);
};
var argument8 = function (item) {
 callbackArguments.push(arguments) 

    appObj[property](item, value[item]);
};
var argument9 = null;
var base_0 = [242,783,122,823,242,893,460,607,25,893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,783,122,823,242,893,460,607,25,893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,783,122,823,242,893,460,607,25,893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,783,122,823,242,893,460,607,25,893]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test24.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)