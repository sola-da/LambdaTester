





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    if (typeof x[0] != 'string')
        x[0] = x[0].name;
    if (!x[1])
        x = x[0];
    return x;
};
var argument2 = null;
var argument3 = true;
var argument4 = function (value) {
 callbackArguments.push(arguments) 

    var re = /^\[(\d+)\]$/, mArr = re.exec(value);
    if (mArr)
        return { i: parseFloat(mArr[1]) };
    else
        return { p: value.replace(/\\([.\[\]])/g, '$1') };
};
var argument5 = null;
var argument6 = function (bit, i) {
 callbackArguments.push(arguments) 

    if (bit.call) {
        return 'value[' + i + '].call(this, property)';
    } else {
        return bit;
    }
};
var argument7 = "";
var argument8 = null;
var argument9 = function (touch) {
 callbackArguments.push(arguments) 

    var point = d3_mousePoint(container, touch);
    point.identifier = touch.identifier;
    return point;
};
var argument10 = r_0;
var base_0 = [0,82,823,627]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,82,823,627]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,82,823,627]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,82,823,627]
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test931.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)