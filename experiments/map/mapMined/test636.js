





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    return item.reduce(function (model, val, i) {
        model[headers[i]] = val;
        return model;
    }, {});
};
var argument2 = {};
var argument3 = null;
var argument4 = function (row) {
 callbackArguments.push(arguments) 

    return row.doc;
};
var argument5 = true;
var argument6 = null;
var argument7 = function (v, i) {
 callbackArguments.push(arguments) 

    return {
        x: ht(i + rsegment.index + 1) + offsets.l,
        y: dim.height - offsets.b - vt(v),
        data: v
    };
};
var argument8 = null;
var argument9 = [49,893,460,607,627,126,705,705,157];
var argument10 = function (v, i) {
 callbackArguments.push(arguments) 

    return {
        x: ht(i + rsegment.index + 1) + offsets.l,
        y: dim.height - offsets.b - vt(v),
        data: v
    };
};
var argument11 = [213,783,893,82];
var argument12 = null;
var base_0 = [627,25,-1,460,157,460,1.7976931348623157e+308,655]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,25,-1,460,157,460,1.7976931348623157e+308,655]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,25,-1,460,157,460,1.7976931348623157e+308,655]
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,25,-1,460,157,460,1.7976931348623157e+308,655]
var r_3= undefined
try {
r_3 = base_3.map(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/map/mapMined/test636.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)