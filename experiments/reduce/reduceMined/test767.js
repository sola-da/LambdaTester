





var callbackArguments = [];
var argument1 = function (x, y) {
 callbackArguments.push(arguments) 

    return x && y;
};
var argument2 = false;
var argument3 = ["g","r"];
var argument4 = function (memo, el, i) {
 callbackArguments.push(arguments) 

    if (0 == i || (isSorted === true ? _.last(memo) != el : !_.include(memo, el)))
        memo.push(el);
    return memo;
};
var argument5 = {"403":"Y","":783,";m":"","8.863624987688443e+307":1.1256572151750166e+308,"L?":1.0525060036565042e+308};
var argument6 = null;
var argument7 = function (promise, hook) {
 callbackArguments.push(arguments) 

    return promise ? promise.then(hook) : hook();
};
var argument8 = function (m, item) {
 callbackArguments.push(arguments) 

    var itemName = item.path.split('/').slice(-1)[0] + (item.is_dir ? '/' : '');
    if (item.is_dir) {
        m[itemName] = revCache.get(path + itemName);
    } else {
        m[itemName] = item.rev;
    }
    return m;
};
var argument9 = r_0;
var argument10 = r_1;
var base_0 = ["t^","C","17k","k","O","65","`&pI%xK"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["t^","C","17k","k","O","65","`&pI%xK"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["t^","C","17k","k","O","65","`&pI%xK"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["t^","C","17k","k","O","65","`&pI%xK"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test767.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)