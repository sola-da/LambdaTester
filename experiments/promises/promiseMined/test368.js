/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (map) {
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
var argument2 = null;
var argument3 = function () {
 callbackArguments.push(arguments) 

    var a1 = new wd.TouchAction().tap({
            x: 100,
            y: 200
        });
    var a2 = new wd.TouchAction().tap({
            x: 50,
            y: 25
        });
    var ma = new wd.MultiAction(el).add(a1, a2);
    return ma.perform();
};
var argument4 = p1;
var argument5 = function (lastSeqDoc) {
 callbackArguments.push(arguments) 

    view.seq = lastSeqDoc ? lastSeqDoc.seq : 0;
    if (!temporary) {
        sourceDB._cachedViews = sourceDB._cachedViews || {};
        sourceDB._cachedViews[viewSignature] = view;
        view.db.on('destroyed', function () {
            delete sourceDB._cachedViews[viewSignature];
        });
    }
    return view;
};
var argument6 = false;
var argument7 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var argument8 = {"242":242,"vG":1.2424486663838628e+308,"y":2.1285963186512492e+307,"":"[","6.051330745622199e+307":59};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.then(argument3)
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
r_3 = base_3.catch(argument7,argument8)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test368.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)