





var callbackArguments = [];
var argument1 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var argument2 = null;
var argument3 = function (item) {
 callbackArguments.push(arguments) 

    return item[methodName].apply(item, args);
};
var argument4 = function (opt) {
 callbackArguments.push(arguments) 

    return document.id(opt).get('value');
};
var argument5 = {"0":100,"714":403,"823":714,"0`G":-1,"kSn":"C","G":49,"N6":"","4.582045439809377e+307":"m"};
var argument6 = function (id) {
 callbackArguments.push(arguments) 

    customApi._getRevisionTree(id, function (err, rev_tree) {
        if (err && err.name === 'not_found' && err.message === 'missing') {
            missing[id] = { missing: req[id] };
        } else if (err) {
            return call(callback, err);
        } else {
            processDoc(id, rev_tree);
        }
        if (++count === ids.length) {
            return call(callback, null, missing);
        }
    });
};
var base_0 = ["-gVG","Dlq","*","g2j","()uW5","AXL","@","I-"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["-gVG","Dlq","*","g2j","()uW5","AXL","@","I-"]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["-gVG","Dlq","*","g2j","()uW5","AXL","@","I-"]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["-gVG","Dlq","*","g2j","()uW5","AXL","@","I-"]
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test985.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)