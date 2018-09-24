





var callbackArguments = [];
var argument1 = function (i, cur) {
 callbackArguments.push(arguments) 

    while (cur && cur.ownerDocument && cur !== context) {
        if (pos ? pos.index(cur) > -1 : jQuery(cur).is(selectors)) {
            return cur;
        }
        cur = cur.parentNode;
    }
    return null;
};
var argument2 = r_0;
var argument3 = r_0;
var argument4 = function () {
 callbackArguments.push(arguments) 

    var offsetParent = this.offsetParent || docElem;
    while (offsetParent && (!jQuery.nodeName(offsetParent, 'html') && jQuery.css(offsetParent, 'position') === 'static')) {
        offsetParent = offsetParent.offsetParent;
    }
    return offsetParent || docElem;
};
var argument5 = false;
var argument6 = null;
var argument7 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var argument8 = function (depName) {
 callbackArguments.push(arguments) 

    return {
        depName: depName,
        value: data[depName]
    };
};
var argument9 = false;
var argument10 = r_0;
var base_0 = [25,122,82,655,655,122]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,122,82,655,655,122]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,122,82,655,655,122]
var r_2= undefined
try {
r_2 = base_2.map(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test560.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)