





var callbackArguments = [];
var argument1 = function (p) {
 callbackArguments.push(arguments) 

    o['_' + p] = syncLogHook;
};
var argument2 = null;
var argument3 = {"i@":""};
var argument4 = function (r) {
 callbackArguments.push(arguments) 

    if (m[parent] == r[parent]) {
        m.d3plus.merged.push(r);
    }
};
var argument5 = function (letter) {
 callbackArguments.push(arguments) 

    expect(XRegExp('\\P{L}').test(letter)).toBe(false);
    expect(XRegExp('\\P{Letter}').test(letter)).toBe(false);
    expect(XRegExp('\\PL').test(letter)).toBe(false);
    expect(XRegExp('\\p{^L}').test(letter)).toBe(false);
    expect(XRegExp('\\p{^Letter}').test(letter)).toBe(false);
};
var argument6 = r_2;
var argument7 = function (y) {
 callbackArguments.push(arguments) 

    if (typeof y === 'function') {
        vars.data.time.values.forEach(function (t) {
            if (y(t.getTime()))
                years.push(t.getTime());
        });
    } else if (y.constructor === Date) {
        years.push(new Date(y).getTime());
    } else {
        var d = new Date(y.toString());
        if (d !== 'Invalid Date') {
            d.setTime(d.getTime() + d.getTimezoneOffset() * 60 * 1000);
            years.push(d.getTime());
        }
    }
};
var base_0 = ["|","^h%",-1,"{$"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["|","^h%",-1,"{$"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["|","^h%",-1,"{$"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["|","^h%",-1,"{$"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test421.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)