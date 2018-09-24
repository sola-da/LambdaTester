





var callbackArguments = [];
var argument1 = function (child) {
 callbackArguments.push(arguments) 

    child.updateDom(options);
};
var argument2 = null;
var argument3 = -1;
var argument4 = function (callback, event) {
 callbackArguments.push(arguments) 

    if (timelineEvents.indexOf(String(event)) >= 0) {
        timeline.on(event, callback);
    }
};
var argument5 = function (descProp) {
 callbackArguments.push(arguments) 

    if (desc[descProp]) {
        desc['_sup' + descProp] = getSup(descProp, oldDesc);
    }
};
var argument6 = function (kind) {
 callbackArguments.push(arguments) 

    for (var i = 0, L = kindScope[kind]; L > i; i++) {
        var info = this._itemInfos[index], dimName = this._userIndexesToSingleDim[index];
        void 0 === dimName && (dimName = '');
        out.push(' ' + index + '    | ' + kind + '    | ' + (info.message ? 'number' : 'string') + ' | ' + def.string.padRight(info.name || '', maxName) + ' | ' + def.string.padRight(info.label || '', maxLabel) + ' | ' + dimName);
        index++;
    }
};
var argument7 = r_0;
var argument8 = true;
var base_0 = ["j`7","E",213,"?BV"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["j`7","E",213,"?BV"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["j`7","E",213,"?BV"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["j`7","E",213,"?BV"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test781.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)