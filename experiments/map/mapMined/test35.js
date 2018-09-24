





var callbackArguments = [];
var argument1 = function (val, i) {
 callbackArguments.push(arguments) 

    return {
        name: elem.name,
        value: val
    };
};
var argument2 = "";
var argument3 = function (text) {
 callbackArguments.push(arguments) 

    var len = pv.Text.measureWidth(text, font);
    len > max && (max = len);
    return len;
};
var argument4 = null;
var argument5 = {"714":""};
var argument6 = function (colpos) {
 callbackArguments.push(arguments) 

    var i, newpos = colpos;
    for (i = 0; i < rmindx.length; i++) {
        if (colpos > rmindx[i]) {
            newpos--;
        }
    }
    return newpos;
};
var argument7 = false;
var argument8 = null;
var argument9 = function (s) {
 callbackArguments.push(arguments) 

    return s ? s.replace('.', '').toLowerCase() : s;
};
var argument10 = {"49":"","5e-324":"]","1.7832016257449701e+308":"Lk","`":"6","2.397542913680057e+307":"YA"};
var base_0 = [82,-100,-1,714,-1,126,242,1.7976931348623157e+308,49,213]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,-100,-1,714,-1,126,242,1.7976931348623157e+308,49,213]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,-100,-1,714,-1,126,242,1.7976931348623157e+308,49,213]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,-100,-1,714,-1,126,242,1.7976931348623157e+308,49,213]
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
require("fs").writeFileSync("./experiments/map/mapMined/test35.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)