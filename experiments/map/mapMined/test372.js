





var callbackArguments = [];
var argument1 = function (t) {
 callbackArguments.push(arguments) 

    return t.id;
};
var argument2 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument3 = function (serData1) {
 callbackArguments.push(arguments) 

    var group = catData;
    group && serData1 && (group = group.child(serData1.key));
    var value = group ? group.dimensions(valDim.name).value(visibleKeyArgs) : null;
    return {
        data: serData1,
        group: group,
        value: value,
        isNull: null == value,
        catInfo: catInfo
    };
};
var argument4 = 460;
var argument5 = function (elem) {
 callbackArguments.push(arguments) 

    return elem.selected;
};
var argument6 = r_0;
var argument7 = null;
var base_0 = ["dD",969,"H","`","1+","b",":<C$aJO"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["dD",969,"H","`","1+","b",":<C$aJO"]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test372.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)