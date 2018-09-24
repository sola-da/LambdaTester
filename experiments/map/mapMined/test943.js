





var callbackArguments = [];
var argument1 = function (docId) {
 callbackArguments.push(arguments) 

    return getDocsToPersist(docId, view, docIdsToEmits);
};
var argument2 = function (elem) {
 callbackArguments.push(arguments) 

    return elem.selected;
};
var argument3 = null;
var argument4 = "%";
var argument5 = function (e) {
 callbackArguments.push(arguments) 

    return t = D(e), 'object' == t || 'array' == t || null == e ? e : C.fragment(e);
};
var argument6 = "?7;";
var argument7 = function (p) {
 callbackArguments.push(arguments) 

    var t = p.trim();
    if (t && splits.indexOf(t) < 0 && t.indexOf(attrName) < 0) {
        p = t.replace(/([^:]*)(:*)(.*)/, '$1' + attrName + '$2$3');
    }
    return p;
};
var argument8 = null;
var base_0 = [",","g","6]R"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [",","g","6]R"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [",","g","6]R"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [",","g","6]R"]
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
require("fs").writeFileSync("./experiments/map/mapMined/test943.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)