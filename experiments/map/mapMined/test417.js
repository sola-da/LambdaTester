





var callbackArguments = [];
var argument1 = function (k) {
 callbackArguments.push(arguments) 

    return _this.remove(k);
};
var argument2 = true;
var argument3 = null;
var argument4 = function (x) {
 callbackArguments.push(arguments) 

    if (x == '\n')
        return x + indentString;
    if (typeof x == 'string')
        return x.replace(/\t/g, tabString);
    return x;
};
var argument5 = true;
var argument6 = [893,126,100,403,705];
var argument7 = function (val) {
 callbackArguments.push(arguments) 

    return {
        name: elem.name,
        value: val.replace(rCRLF, '\r\n')
    };
};
var argument8 = function (d) {
 callbackArguments.push(arguments) 

    return {
        x: d.x,
        value: d.value,
        id: d.id
    };
};
var base_0 = ["e","S","S]+;",969]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["e","S","S]+;",969]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["e","S","S]+;",969]
var r_2= undefined
try {
r_2 = base_2.map(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["e","S","S]+;",969]
var r_3= undefined
try {
r_3 = base_3.map(argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test417.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)