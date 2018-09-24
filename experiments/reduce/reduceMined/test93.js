





var callbackArguments = [];
var argument1 = function (err, results) {
 callbackArguments.push(arguments) 

    callback.apply(that, [err].concat(results));
};
var argument2 = false;
var argument3 = function (acc, join) {
 callbackArguments.push(arguments) 

    acc.push(makePunc(punc, join), join);
    return acc;
};
var argument4 = null;
var argument5 = {"460":"1","(":9.498495708341228e+306};
var argument6 = function (count, op) {
 callbackArguments.push(arguments) 

    if (op.value != null) {
        count += op.value.length;
    }
    return count;
};
var argument7 = null;
var argument8 = false;
var argument9 = function (m, item) {
 callbackArguments.push(arguments) 

    var itemName = item.path.split('/').slice(-1)[0] + (item.is_dir ? '/' : '');
    if (item.is_dir) {
        m[itemName] = revCache.get(path + itemName);
    } else {
        m[itemName] = item.rev;
    }
    return m;
};
var argument10 = r_3;
var base_0 = [126,49,655,5e-324,969,843,823,157,-100]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,49,655,5e-324,969,843,823,157,-100]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,49,655,5e-324,969,843,823,157,-100]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,49,655,5e-324,969,843,823,157,-100]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test93.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)