





var callbackArguments = [];
var argument1 = function (letter) {
 callbackArguments.push(arguments) 

    expect(XRegExp('\\P{L}').test(letter)).toBe(false);
    expect(XRegExp('\\P{Letter}').test(letter)).toBe(false);
    expect(XRegExp('\\PL').test(letter)).toBe(false);
    expect(XRegExp('\\p{^L}').test(letter)).toBe(false);
    expect(XRegExp('\\p{^Letter}').test(letter)).toBe(false);
};
var argument2 = 595;
var argument3 = null;
var argument4 = function (key) {
 callbackArguments.push(arguments) 

    counter--;
    if (counter === 0)
        template = template.concat(key, '</ul>');
    else
        template = template.concat(key);
};
var argument5 = null;
var argument6 = ["Mm@LS","P","-"];
var argument7 = function (item, name) {
 callbackArguments.push(arguments) 

    strings[key] = strings[key].replace(new RegExp('{' + name + '}', 'g'), additionalGlobals[name]);
};
var argument8 = function (cookie) {
 callbackArguments.push(arguments) 

    _this.write(cookie, null, 0);
};
var argument9 = null;
var argument10 = "G";
var base_0 = ["I"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["I"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["I"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["I"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test989.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)