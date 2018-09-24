





var callbackArguments = [];
var argument1 = function (attr) {
 callbackArguments.push(arguments) 

    return attr.name === 'Name' && attr.value === baseTypeName;
};
var argument2 = {"0":1.1205405808250292e+307,"25":"I]b","618":"Zl3","705":"[","4.80127363011958e+307":"F","":1.6916266954532082e+308,"4.3452667270098835e+307":"","C":"7"};
var argument3 = null;
var argument4 = function (t) {
 callbackArguments.push(arguments) 

    return typeof t === 'object';
};
var argument5 = null;
var argument6 = true;
var argument7 = function (state) {
 callbackArguments.push(arguments) 

    if (message.state !== state) {
        return false;
    }
    var stateCase = Background.badgeStates[state];
    chrome.browserAction.setPopup({ popup: stateCase.popup === false ? '' : 'now-playing/popup.html' });
    self.setBadge(stateCase.text, stateCase.color || '');
    return true;
};
var argument8 = function (a) {
 callbackArguments.push(arguments) 

    i++;
    arr.push(a + 3);
    return i > 3;
};
var argument9 = true;
var argument10 = {"":""};
var base_0 = ["N6","d9m","-","]","U","S","@","2m"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["N6","d9m","-","]","U","S","@","2m"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["N6","d9m","-","]","U","S","@","2m"]
var r_2= undefined
try {
r_2 = base_2.some(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["N6","d9m","-","]","U","S","@","2m"]
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
require("fs").writeFileSync("./experiments/some/someMined/test935.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)