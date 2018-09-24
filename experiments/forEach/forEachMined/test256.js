





var callbackArguments = [];
var argument1 = function (ele) {
 callbackArguments.push(arguments) 

    if (!options.hasOwnProperty(ele)) {
        var err = errMsg.INVALID_ARGS + ': ' + ele + ' is must';
        throw new Error(err);
    }
};
var argument2 = r_0;
var argument3 = "";
var argument4 = function (t) {
 callbackArguments.push(arguments) 

    if (s)
        t = t.cloneNode(!0);
    else if (!o)
        return n(t).remove();
    o.insertBefore(t, a), f && Q(t, function (t) {
        null == t.nodeName || 'SCRIPT' !== t.nodeName.toUpperCase() || t.message && 'text/javascript' !== t.message || t.src || window.eval.call(window, t.innerHTML);
    });
};
var argument5 = function (p) {
 callbackArguments.push(arguments) 

    var curr = path.join(dir, p);
    var stat = fs.statSync(curr);
    if (stat.isDirectory()) {
        _rmDir(curr);
    } else {
        try {
            fs.unlinkSync(curr);
        } catch (e) {
            if (e.code === 'EPERM') {
                fs.chmodSync(curr, '0666');
                fs.unlinkSync(curr);
            } else {
                throw e;
            }
        }
    }
};
var argument6 = {"u":126,"":",{x!","2G":1.3038263301892557e+308,"l":1.5879717380597334e+308,"1.1361589939477603e+308":"["};
var argument7 = function (eventName) {
 callbackArguments.push(arguments) 

    object._addEvent(eventName);
};
var argument8 = false;
var argument9 = 705;
var base_0 = ["&0","JK","N","v0","R","-&","9"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["&0","JK","N","v0","R","-&","9"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["&0","JK","N","v0","R","-&","9"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["&0","JK","N","v0","R","-&","9"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test256.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)