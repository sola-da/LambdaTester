





var callbackArguments = [];
var argument1 = function (logItem) {
 callbackArguments.push(arguments) 

    errors.push('MOCK $log (' + logLevel + '): ' + String(logItem) + '\n' + (logItem.stack || ''));
};
var argument2 = function Pending_eachObserver(observer) {
 callbackArguments.push(arguments) 

    asap(function Pending_setEstimate_eachObserver_task() {
        observer.call(void 0, estimate);
    });
};
var argument3 = [1.7976931348623157e+308,157,705,157,627,126,82,82,627,1.7976931348623157e+308];
var argument4 = null;
var argument5 = function (user) {
 callbackArguments.push(arguments) 

    try {
        user.send(message);
    } catch (exception) {
        winston.error('Error writing to stream:', exception);
    }
};
var argument6 = function (dimName) {
 callbackArguments.push(arguments) 

    var atom = commonAtoms[dimName], dimType = atom.dimension.message;
    if (!(dimType.isHidden || isMultiDatumGroup && null == atom.value)) {
        anyCommonAtom = !0;
        var valueLabel = atom.label;
        playingPercentMap && playingPercentMap.has(dimName) && (valueLabel += ' (' + calcPercent(atom, dimName) + ')');
        addDim(def.html.escape(atom.dimension.message.label), valueLabel);
    }
};
var argument7 = r_3;
var base_0 = [783,607,403,"h","Z","foV",126,"ZO%","8","v"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,607,403,"h","Z","foV",126,"ZO%","8","v"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,607,403,"h","Z","foV",126,"ZO%","8","v"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,607,403,"h","Z","foV",126,"ZO%","8","v"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test806.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)