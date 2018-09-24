





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    return x.copyForViewSlot();
};
var argument2 = false;
var argument3 = function (item) {
 callbackArguments.push(arguments) 

    return unwrapOriginalValues(item, metadataStore, transformFn);
};
var argument4 = function (user) {
 callbackArguments.push(arguments) 

    return '' + user.id;
};
var argument5 = 122;
var argument6 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var argument7 = [843,49,705,100,49];
var argument8 = {"":126};
var base_0 = [122,49,460,1.7976931348623157e+308,25,607,823,1.7976931348623157e+308,595]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,49,460,1.7976931348623157e+308,25,607,823,1.7976931348623157e+308,595]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,49,460,1.7976931348623157e+308,25,607,823,1.7976931348623157e+308,595]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test205.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)