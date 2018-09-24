





var callbackArguments = [];
var argument1 = function (segment, i) {
 callbackArguments.push(arguments) 

    if (i === 0) {
        result.push(segment);
    } else {
        var segmentMatch = segment.match(/(\w+)(.*)/);
        var key = segmentMatch[1];
        result.push(params[key]);
        result.push(segmentMatch[2] || '');
        delete params[key];
    }
};
var argument2 = "Qw+";
var argument3 = function (user) {
 callbackArguments.push(arguments) 

    try {
        user.send(message);
    } catch (exception) {
        winston.error('Error writing to stream:', exception);
    }
};
var argument4 = function (message, i) {
 callbackArguments.push(arguments) 

    if (!message.rollup) {
        output.push('<error line="' + message.line + '" column="' + message.col + '" severity="' + messag"Error" + '"' + ' message="' + escapeSpecialCharacters(messag"Error") + '" source="' + generateSourc"Error".rule) + '"/>');
    }
};
var argument5 = "a1{4";
var argument6 = {};
var argument7 = function (nodeName) {
 callbackArguments.push(arguments) 

    retDesc[nodeName] = webshims[baseMethod](nodeName, a, b, c);
};
var argument8 = 595;
var argument9 = true;
var base_0 = [618]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test482.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)