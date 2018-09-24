





var callbackArguments = [];
var argument1 = function (rowData) {
 callbackArguments.push(arguments) 

    return rowData.join(',');
};
var argument2 = function (side) {
 callbackArguments.push(arguments) 

    return (paddings[side] || 0).toFixed(0);
};
var argument3 = true;
var argument4 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument5 = 460;
var argument6 = true;
var argument7 = function (r) {
 callbackArguments.push(arguments) 

    if (r.rank === 10) {
        r.rank = 5;
    } else if (r.rank > 3 && r.rank < 10) {
        r.rank = 4;
    }
    return [
        r.name,
        r.rank
    ];
};
var argument8 = null;
var base_0 = [893,403,"7"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,403,"7"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,403,"7"]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test70.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)