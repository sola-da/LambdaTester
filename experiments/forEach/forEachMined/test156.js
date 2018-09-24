





var callbackArguments = [];
var argument1 = function (value) {
 callbackArguments.push(arguments) 

    var td = document.createElement('td');
    td.textContent = value || '';
    tr.appendChild(td);
};
var argument2 = [242,595,242,-100,607,627,595];
var argument3 = function (state) {
 callbackArguments.push(arguments) 

    list.push(state.self);
};
var argument4 = r_1;
var argument5 = 1.132128035583757e+308;
var argument6 = function (categScene) {
 callbackArguments.push(arguments) 

    startAngle = categScene.layoutI(layoutInfo, startAngle);
    (categScene.vars.link.dir > 0 ? rightScenes : leftScenes).push(categScene);
};
var argument7 = function (desc) {
 callbackArguments.push(arguments) 

    var bundle = dojo.i18n.getLocalization(desc.pkg, desc.name, locale);
    buddhist = dojo.mixin(buddhist, bundle);
};
var argument8 = ["Wo4",843,"pY"];
var base_0 = [82,0,969,49,595,607,783,126,595]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,0,969,49,595,607,783,126,595]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,0,969,49,595,607,783,126,595]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,0,969,49,595,607,783,126,595]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test156.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)