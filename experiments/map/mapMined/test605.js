





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return domain.alphabet[_.random(0, domain.alphabet.length - 1)];
};
var argument2 = r_0;
var argument3 = function (v, i) {
 callbackArguments.push(arguments) 

    var border = parseInt(v, 10) || 0, padding = parseInt(p[i], 10) || 0;
    return border + padding;
};
var argument4 = function (word) {
 callbackArguments.push(arguments) 

    return word.charAt(0).toUpperCase() + word.substring(1);
};
var argument5 = 1.6245225621869017e+308;
var argument6 = true;
var argument7 = function (pt) {
 callbackArguments.push(arguments) 

    return [
        pt.latitude,
        pt.longitude
    ];
};
var argument8 = null;
var argument9 = null;
var base_0 = [100,82]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,82]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,82]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,82]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test605.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)