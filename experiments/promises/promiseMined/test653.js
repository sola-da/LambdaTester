/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (err) {
 callbackArguments.push(arguments) 

    errors.logAndThrowError(err, 'Error exporting data', '');
};
var argument2 = 627;
var argument3 = function (result8) {
 callbackArguments.push(arguments) 

    expect(result8).to.equal(true, 'The drop down menu should be visible after key presses');
};
var argument4 = r_0;
var argument5 = function (farm) {
 callbackArguments.push(arguments) 

    if (angular.isDefined(farm.latitude) && angular.isDefined(farm.longitude)) {
        var marketCoord = {
                latitude: 43.074703,
                longitude: -76.167891
            };
        var farmCoord = {
                latitude: farm.latitude,
                longitude: farm.longitude
            };
        angular.extend($scope, {
            mapCenter: marketCoord,
            mapMarkers: [farmCoord]
        });
    }
};
var argument6 = false;
var argument7 = function Promise_spread_fulfilled(array) {
 callbackArguments.push(arguments) 

    return fulfilled.apply(void 0, array);
};
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.then(argument2,argument3)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.then(argument4,argument5,argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.then(argument7)
}
catch(e) {
r_3= e.message
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test653.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)