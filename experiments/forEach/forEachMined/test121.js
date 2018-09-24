





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    if (!key.match(/^\d+$/)) {
        output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    }
};
var argument2 = function (key) {
 callbackArguments.push(arguments) 

    delete self.remote[key];
};
var argument3 = null;
var argument4 = null;
var argument5 = function (x) {
 callbackArguments.push(arguments) 

    if (typeof x == 'string')
        this.exec(x, editor);
    else
        this.exec(x[0], editor, x[1]);
};
var argument6 = function (completer) {
 callbackArguments.push(arguments) 

    if (completer.identifierRegexps) {
        completer.identifierRegexps.forEach(function (identifierRegex) {
            if (!prefix && identifierRegex)
                prefix = util.retrievePrecedingIdentifier(line, pos.column, identifierRegex);
        });
    }
};
var argument7 = r_2;
var argument8 = "V";
var base_0 = [25,122]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,122]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,122]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,122]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test121.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)