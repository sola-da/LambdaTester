





var callbackArguments = [];
var argument1 = function (state) {
 callbackArguments.push(arguments) 

    if (message.state !== state) {
        return false;
    }
    var stateCase = Background.badgeStates[state];
    chrome.browserAction.setPopup({ popup: stateCase.popup === false ? '' : 'now-playing/popup.html' });
    self.setBadge(stateCase.text, stateCase.color || '');
    return true;
};
var argument2 = function (isCustomAttributeFn) {
 callbackArguments.push(arguments) 

    return isCustomAttributeFn.call(null, attributeName);
};
var argument3 = null;
var argument4 = [242,-100,618,25,627,403];
var argument5 = function (enumType) {
 callbackArguments.push(arguments) 

    return enumType.attributes.some(function (attr) {
        return attr.name === 'Name' && attr.value === baseTypeName;
    });
};
var argument6 = r_2;
var argument7 = {"607":7.197865767111184e+307,"":"","1.529623292814841e+308":6.016848451460084e+307};
var argument8 = function () {
 callbackArguments.push(arguments) 

    return true;
};
var argument9 = null;
var argument10 = true;
var base_0 = [607,213,823,627,705]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,213,823,627,705]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,213,823,627,705]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,213,823,627,705]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someMined/test397.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)