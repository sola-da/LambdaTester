





var callbackArguments = [];
var argument1 = function (commandObj, idx, arr) {
 callbackArguments.push(arguments) 

    return commandObj.dialog;
};
var argument2 = null;
var argument3 = null;
var argument4 = function (n, i) {
 callbackArguments.push(arguments) 

    var $this = n.first(), attrOrdataL = $this.attr('href') !== undefined ? 'attr' : 'data';
    if (attrOrdataL !== 'data') {
        hashs1[i] = $this[attrOrdataL]('href');
        i++;
    } else if (attrOrdataL === 'data') {
        hashs2[j] = $this[attrOrdataL]('href');
        j++;
    }
};
var argument5 = null;
var argument6 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument7 = null;
var argument8 = "";
var argument9 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var base_0 = [893,-100]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,-100]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,-100]
var r_3= undefined
try {
r_3 = base_3.map(argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test50.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)