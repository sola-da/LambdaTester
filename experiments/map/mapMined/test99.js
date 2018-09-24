





var callbackArguments = [];
var argument1 = function (v) {
 callbackArguments.push(arguments) 

    var obj;
    if (v.ok) {
        return v;
    } else if (v.error && v.error === 'conflict') {
        obj = errors.REV_CONFLICT;
        obj.id = v.id;
        return obj;
    } else if (v.missing) {
        obj = errors.MISSING_DOC;
        obj.missing = v.missing;
        return obj;
    }
};
var argument2 = function (path) {
 callbackArguments.push(arguments) 

    return '.tmp/public/' + path;
};
var argument3 = false;
var argument4 = false;
var argument5 = function (index, element) {
 callbackArguments.push(arguments) 

    return Array.prototype.slice.call(element.parentNode.children).filter(function (child) {
        return child !== element;
    });
};
var argument6 = 823;
var argument7 = function (n, i) {
 callbackArguments.push(arguments) 

    var j = 0, $this = n.first(), attrOrdataL = $this.attr('href') !== undefined ? 'attr' : 'data';
    if (attrOrdataL === 'data') {
        hashs2[j] = $this[attrOrdataL]('href');
        j++;
    }
};
var argument8 = {"8":"","126":"D","157":"","1.4746670112090103e+308":4.915245076762977e+307,"":627,"h":"","3.1604300089476386e+305":"","Z":"&A0","6.944627473330144e+307":""};
var argument9 = null;
var base_0 = [0,100,49,783,59]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,100,49,783,59]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,100,49,783,59]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/map/mapMined/test99.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)