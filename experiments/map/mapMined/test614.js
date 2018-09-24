





var callbackArguments = [];
var argument1 = function (value) {
 callbackArguments.push(arguments) 

    return value * 2;
};
var argument2 = 1.0928754331357602e+308;
var argument3 = function (result) {
 callbackArguments.push(arguments) 

    var raw = Y.merge(result.raw), desc = raw.description || '';
    desc = Node.create('<div>' + desc + '</div>').get('text');
    if (desc.length > 65) {
        desc = Y.Escape.html(desc.substr(0, 65)) + ' &hellip;';
    } else {
        desc = Y.Escape.html(desc);
    }
    raw['class'] || (raw['class'] = '');
    raw.description = desc;
    raw.name = result.highlighted;
    return Lang.sub(this.RESULT_TEMPLATE, raw);
};
var argument4 = null;
var argument5 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var argument6 = null;
var argument7 = function (val) {
 callbackArguments.push(arguments) 

    return {
        name: elem.name,
        value: val.replace(rCRLF, '\r\n')
    };
};
var argument8 = false;
var argument9 = null;
var base_0 = ["-"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["-"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["-"]
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
require("fs").writeFileSync("./experiments/map/mapMined/test614.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)