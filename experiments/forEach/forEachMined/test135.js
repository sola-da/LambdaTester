





var callbackArguments = [];
var argument1 = function (ch) {
 callbackArguments.push(arguments) 

    frequency[ch] = 0;
};
var argument2 = {"k)kw":-1,"":403,"b`9i":0};
var argument3 = r_0;
var argument4 = function (fn) {
 callbackArguments.push(arguments) 

    if (!fn.only || (fn.only = 'prop' && type == 'prop') || fn.only == 'attr' && type != 'prop') {
        fn.call(elem, value, boolValue, isVal ? 'val' : curType, type);
    }
};
var argument5 = 1.2282002707597983e+308;
var argument6 = ["J","U","t"];
var argument7 = function (d) {
 callbackArguments.push(arguments) 

    years.push(new Date(d));
};
var argument8 = [714,843,460,893,1.7976931348623157e+308,823,25,893,627];
var argument9 = 627;
var argument10 = function (elt) {
 callbackArguments.push(arguments) 

    var centroid = elt.geo_info.centroid;
    var lat = parseFloat(centroid[0]);
    var lng = parseFloat(centroid[1]);
    var url = 'http://stormy-mountain-3909.herokuapp.com/detroit/parcel?lat=' + lat + '&lng=' + lng;
    console.log(url);
    apiGet(url).done(function (data) {
        console.log(data);
    });
};
var base_0 = [122,655,403]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,655,403]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,655,403]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,655,403]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test135.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)