





var callbackArguments = [];
var argument1 = function (text) {
 callbackArguments.push(arguments) 

    var len = pv.Text.measureWidth(text, font);
    len > max && (max = len);
    return len;
};
var argument2 = null;
var argument3 = "2'ge";
var argument4 = function (field) {
 callbackArguments.push(arguments) 

    return {
        field: field.id,
        width: field.get('width'),
        value: doc.getFieldValue(field)
    };
};
var argument5 = true;
var argument6 = function (color) {
 callbackArguments.push(arguments) 

    return {
        text: color,
        color: color
    };
};
var argument7 = function (k) {
 callbackArguments.push(arguments) 

    return _this.remove(k);
};
var argument8 = null;
var base_0 = [213,783,705,-1]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,783,705,-1]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,783,705,-1]
var r_2= undefined
try {
r_2 = base_2.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test713.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)