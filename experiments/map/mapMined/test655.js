





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    return x * OIMO.INV_SCALE;
};
var argument2 = true;
var argument3 = function (node) {
 callbackArguments.push(arguments) 

    if ((node = node.parentNode) && node !== document && ancestors.indexOf(node) < 0) {
        ancestors.push(node);
        return node;
    }
};
var argument4 = function (v) {
 callbackArguments.push(arguments) 

    return dataType.parse(v, typeof v);
};
var argument5 = [823,157,969,627,618];
var argument6 = function (item) {
 callbackArguments.push(arguments) 

    var tooltipOptions = item.series.tooltipOptions;
    return (tooltipOptions.pointFormatter || item.point.tooltipFormatter).call(item.point, tooltipOptions.pointFormat);
};
var argument7 = null;
var argument8 = null;
var base_0 = ["nS","=","1+lPsqW","ZBh","j%","=r_","Dn","5X","W["]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["nS","=","1+lPsqW","ZBh","j%","=r_","Dn","5X","W["]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/map/mapMined/test655.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)