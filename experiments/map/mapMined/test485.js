





var callbackArguments = [];
var argument1 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var argument2 = function (watcher) {
 callbackArguments.push(arguments) 

    return watcher.callback(event, info);
};
var argument3 = {"25":7.587978857339504e+307,"q4#Ns":"","":"","bSf":"C","ss":3.7829128828161406e+307};
var argument4 = function (r) {
 callbackArguments.push(arguments) 

    r.objectId = r._id;
    _.omit(r, '_id');
    return r;
};
var argument5 = function (n, i) {
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
var base_0 = [783,213,969,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,213,969,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,213,969,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.map(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,213,969,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.map(argument5)
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
require("fs").writeFileSync("./experiments/map/mapMined/test485.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)