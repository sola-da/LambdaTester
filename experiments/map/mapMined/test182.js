





var callbackArguments = [];
var argument1 = function (tab) {
 callbackArguments.push(arguments) 

    return lis.index(tab);
};
var argument2 = null;
var argument3 = false;
var argument4 = function (originalGroupId) {
 callbackArguments.push(arguments) 

    return idMappings['groups'][currentBatch][originalGroupId].generatedId;
};
var argument5 = function () {
 callbackArguments.push(arguments) 

    var elem = this;
    while (elem.firstElementChild) {
        elem = elem.firstElementChild;
    }
    return elem;
};
var argument6 = {"82":"","1.410569720575278e+308":"v:iY ","":""};
var argument7 = function (item) {
 callbackArguments.push(arguments) 

    return unwrapOriginalValues(item, metadataStore, transformFn);
};
var argument8 = false;
var base_0 = [893,242,714,122,460,242,595]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,242,714,122,460,242,595]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,242,714,122,460,242,595]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test182.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)