





var callbackArguments = [];
var argument1 = function (value) {
 callbackArguments.push(arguments) 

    total = Math.max(parseFloat(value) || 0, total);
};
var argument2 = null;
var argument3 = function (file) {
 callbackArguments.push(arguments) 

    var code = options.fromString ? file : rjsFile.readFile(file, 'utf8');
    sourcesContent[file] = code;
    toplevel = parse(code, {
        filename: options.fromString ? name : file,
        toplevel: toplevel
    });
};
var argument4 = null;
var argument5 = null;
var argument6 = function (rule) {
 callbackArguments.push(arguments) 

    if (rule !== self) {
        for (var j = 0; j < rule.selectors.length; j++) {
            if (match = selector.match(rule.selectors[j])) {
                if (selector.elements.length > 1) {
                    Array.prototype.push.apply(rules, rule.find(new tree.Selector(selector.elements.slice(1)), self));
                } else {
                    rules.push(rule);
                }
                break;
            }
        }
    }
};
var argument7 = null;
var argument8 = r_1;
var argument9 = function (fn) {
 callbackArguments.push(arguments) 

    data = fn(data, headers);
};
var argument10 = null;
var argument11 = r_1;
var base_0 = [823,823,25,1.7976931348623157e+308,82,25,403,705,25,618]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,823,25,1.7976931348623157e+308,82,25,403,705,25,618]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,823,25,1.7976931348623157e+308,82,25,403,705,25,618]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,823,25,1.7976931348623157e+308,82,25,403,705,25,618]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test852.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)