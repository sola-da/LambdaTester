/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = p2;
var argument2 = function (map) {
 callbackArguments.push(arguments) 

    if (!_this.gMarkerManager) {
        _this.gMarkerManager = new MarkerManager(map);
    }
    new MarkerParentModel(scope, element, attrs, map, _this.$timeout, _this.gMarkerManager, doFit);
    scope.deferred.resolve();
    if (scope.control != null) {
        return scope.control.getGMarkers = _this.gMarkerManager.getGMarkers;
    }
};
var argument3 = function (response) {
 callbackArguments.push(arguments) 

    console.log(response);
    if (response.isSuccessStatusCode) {
        return parse.save_object('update', {
            channels: {
                __op: 'AddUnique',
                objects: ['c' + yak_id + 'c']
            },
            objectId: object_id
        });
    }
};
var argument4 = 1.4910242907273701e+308;
var argument5 = "[";
var argument6 = function (doc) {
 callbackArguments.push(arguments) 

    doc._rev.should.equal('1-b1', 'Correct revision wins');
    return db.info();
};
var argument7 = false;
var argument8 = p1;
var argument9 = function listenForRequests() {
 callbackArguments.push(arguments) 

    casper.on('resource.requested', handleSettingsRequest);
};
var argument10 = {"157":"giT","403":"","893":"`>#I","":627};
var argument11 = p1;
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.then(argument3,argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.then(argument6,argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.then(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test855.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)