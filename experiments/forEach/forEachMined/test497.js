





var callbackArguments = [];
var argument1 = function (method) {
 callbackArguments.push(arguments) 

    $httpBackend[prefix + method] = function (url, headers) {
        return $httpBackend[prefix](method, url, undefined, headers);
    };
};
var argument2 = null;
var argument3 = function (cookie) {
 callbackArguments.push(arguments) 

    data[cookie] = _this.read(cookie);
};
var argument4 = null;
var argument5 = function (date) {
 callbackArguments.push(arguments) 

    model.compareThings(date, stuff).should.equal(-1);
    model.compareThings(stuff, date).should.equal(1);
};
var argument6 = 3.8862213395255336e+307;
var argument7 = function (rect) {
 callbackArguments.push(arguments) 

    context.fillRect(rect.x, rect.y, rect.width, rect.height);
};
var argument8 = true;
var argument9 = 1.2471727220350603e+308;
var base_0 = [213,1.7976931348623157e+308,-100,403,82,126,618,705,618]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,1.7976931348623157e+308,-100,403,82,126,618,705,618]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,1.7976931348623157e+308,-100,403,82,126,618,705,618]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,1.7976931348623157e+308,-100,403,82,126,618,705,618]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test497.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)