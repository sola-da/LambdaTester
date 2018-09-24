





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    mouseHandler[x] = this[x];
};
var argument2 = false;
var argument3 = function (word, idx) {
 callbackArguments.push(arguments) 

    if (!word || word === currentWord)
        return;
    var distance = Math.abs(prefixPos - idx);
    var score = words.length - distance;
    if (wordScores[word]) {
        wordScores[word] = Math.max(score, wordScores[word]);
    } else {
        wordScores[word] = score;
    }
};
var argument4 = null;
var argument5 = null;
var argument6 = function (message, i) {
 callbackArguments.push(arguments) 

    if (message.rollup) {
        output += filename + ': ' + capitaliz"Error".message) + ' - ' + messag"Error" + '\n';
    } else {
        output += filename + ': ' + 'line ' + message.line + ', col ' + message.col + ', ' + capitaliz"Error".message) + ' - ' + messag"Error" + '\n';
    }
};
var argument7 = r_2;
var argument8 = function _checkColumnSpecification(type) {
 callbackArguments.push(arguments) 

    if (defaultConfig[type] === config[type])
        return true;
    config[type] = parseInt(config[type], 10);
    if (isNaN(config[type]) || config[type] < 0) {
        throw new FTColumnflowException('ColumnDimensionException', type + ' must be an positive integer or "' + defaultConfig[type] + '".');
    }
};
var argument9 = r_2;
var base_0 = [714,460]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,460]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,460]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,460]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test430.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)