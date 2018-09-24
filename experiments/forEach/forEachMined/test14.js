





var callbackArguments = [];
var argument1 = function (view) {
 callbackArguments.push(arguments) 

    var idx = view.contentIndex;
    if (indexes.contains(idx)) {
        ok(true, 'should find childView for contentIndex %@ (nowShowing=%@)'.fmt(idx, set));
    } else {
        ok(false, 'should NOT find childView for contentIndex %@ (nowShowing=%@)'.fmt(idx, set));
    }
    indexes.remove(idx);
};
var argument2 = {"3.3590918844603183e+307":"","":403,"5.451945056109718e+307":157};
var argument3 = true;
var argument4 = function (message, i) {
 callbackArguments.push(arguments) 

    output = output + '\n\n' + shortFilename;
    if (message.rollup) {
        output += '\n' + (i + 1) + ': ' + messag"Error";
        output += '\n' + messag"Error";
    } else {
        output += '\n' + (i + 1) + ': ' + messag"Error" + ' at line ' + message.line + ', col ' + message.col;
        output += '\n' + messag"Error";
        output += '\n' + message.evidence;
    }
};
var argument5 = function (type) {
 callbackArguments.push(arguments) 

    var features = [];
    features.push(type.valueTypeName);
    type.isComparable && features.push('comparable');
    type.isDiscrete || features.push('continuous');
    type.isHidden && features.push('hidden');
    out.push('  ' + type.name + ' (' + features.join(', ') + ')');
};
var argument6 = true;
var argument7 = true;
var argument8 = function (fun, index) {
 callbackArguments.push(arguments) 

    if (typeof fun !== 'function') {
        throw new Error('asyncGroup got non-function: ' + fun);
    }
    var _result = fun();
    if (_result && _result.then && typeof _result.then === 'function') {
        _result.then(function (result) {
            finishOne(result, index);
        }, failOne);
    } else {
        finishOne(_result, index);
    }
};
var argument9 = r_2;
var argument10 = true;
var base_0 = [-100,126,460]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,126,460]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,126,460]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,126,460]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test14.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)