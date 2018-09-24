





var callbackArguments = [];
var argument1 = function (val, i) {
 callbackArguments.push(arguments) 

    return val.fn.apply(settings.oInstance, args);
};
var argument2 = {"655":""};
var argument3 = null;
var argument4 = function (p) {
 callbackArguments.push(arguments) 

    return p.trim();
};
var argument5 = null;
var argument6 = function (item) {
 callbackArguments.push(arguments) 

    var tooltipOptions = item.series.tooltipOptions;
    return (tooltipOptions.pointFormatter || item.point.tooltipFormatter).call(item.point, tooltipOptions.pointFormat);
};
var argument7 = 627;
var argument8 = false;
var argument9 = function (originalUserId) {
 callbackArguments.push(arguments) 

    if (idMappings['users'][currentBatch][originalUserId]) {
        return idMappings['users'][currentBatch][originalUserId].generatedId;
    } else {
        console.log('    Warning: Could not map discussions membership for user "%s"', originalUserId);
        return originalUserId;
    }
};
var base_0 = ["gP",823,"m}h","h",100,"gy)",655,"s"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["gP",823,"m}h","h",100,"gy)",655,"s"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["gP",823,"m}h","h",100,"gy)",655,"s"]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["gP",823,"m}h","h",100,"gy)",655,"s"]
var r_3= undefined
try {
r_3 = base_3.map(argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test922.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)