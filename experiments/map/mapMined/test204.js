





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return vars.format.value(d, vars.x.value);
};
var argument2 = null;
var argument3 = function (item) {
 callbackArguments.push(arguments) 

    var tooltipOptions = item.series.tooltipOptions;
    return (tooltipOptions.pointFormatter || item.point.tooltipFormatter).call(item.point, tooltipOptions.pointFormat);
};
var argument4 = null;
var argument5 = function (v) {
 callbackArguments.push(arguments) 

    return {
        object: topic,
        property: { id: v.property },
        subject: v,
        direction: 'incoming'
    };
};
var argument6 = function (member) {
 callbackArguments.push(arguments) 

    return member && member.jquery ? $.makeArray(member) : member && member.length ? drag.flatten(member) : member;
};
var argument7 = r_1;
var argument8 = r_1;
var base_0 = [705,122,595,823,1.7976931348623157e+308,714,126,595]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,122,595,823,1.7976931348623157e+308,714,126,595]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,122,595,823,1.7976931348623157e+308,714,126,595]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,122,595,823,1.7976931348623157e+308,714,126,595]
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
require("fs").writeFileSync("./experiments/map/mapMined/test204.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)