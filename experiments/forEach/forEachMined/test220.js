





var callbackArguments = [];
var argument1 = function (node) {
 callbackArguments.push(arguments) 

    node.graphics.removeAll(node.userData.rulelines);
    node.userData.rulelines = [];
    createRule.call(this, node);
};
var argument2 = function (item) {
 callbackArguments.push(arguments) 

    $(item).appendTo($('#userlist'));
};
var argument3 = true;
var argument4 = function (pStr) {
 callbackArguments.push(arguments) 

    var pArr = pStr.split(';');
    var ll = latLngCoder.decode(pArr[0]);
    var iconUrl = pArr[1];
    var text = decodeURIComponent(pArr[2]);
    var place = new L.Marker(new L.LatLng(ll.lat, ll.lng), { draggable: false });
    place.setIcon(new MarkerIcon({ iconUrl: icons.urlPrefix + iconUrl }));
    place.bindPopup(text);
    map.addLayer(place);
};
var argument5 = r_0;
var argument6 = 7.702227684025988e+307;
var argument7 = function (def) {
 callbackArguments.push(arguments) 

    if (def.value && def.value instanceof AST_Lambda) {
        a.push(make_injector(def.value, def.name));
    }
};
var argument8 = 82;
var argument9 = {"705":"","-100":"",")":823,"":"$","F,":8.989679916413544e+307};
var base_0 = ["|H","j",843,"L","7","11",1.7976931348623157e+308,"T",82]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["|H","j",843,"L","7","11",1.7976931348623157e+308,"T",82]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["|H","j",843,"L","7","11",1.7976931348623157e+308,"T",82]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["|H","j",843,"L","7","11",1.7976931348623157e+308,"T",82]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test220.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)