/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (response) {
 callbackArguments.push(arguments) 

    if (response.status === 422 && response.data && _this.parseModelErrors) {
        _this.clearModelErrors();
        _this.addModelErrors(_this.parseModelErrors(response.data));
    }
    return $q.reject(response);
};
var argument2 = 893;
var argument3 = [618,893,100,655,969,49,460,1.7976931348623157e+308];
var argument4 = function (reason) {
 callbackArguments.push(arguments) 

    if (results.hasOwnProperty(key))
        return;
    deferred.reject(reason);
};
var argument5 = false;
var argument6 = function (profile) {
 callbackArguments.push(arguments) 

    if (successCallback) {
        successCallback(profile, idToken, accessToken, state, refreshToken);
    }
};
var argument7 = null;
var argument8 = [618,893];
var argument9 = function () {
 callbackArguments.push(arguments) 

    var keyPrefix = self._dbInfo.keyPrefix;
    var keyPrefixLength = keyPrefix.length;
    var length = localStorage.length;
    for (var i = 0; i < length; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        if (value) {
            value = serializer.deserialize(value);
        }
        value = iterator(value, key.substring(keyPrefixLength), i + 1);
        if (value !== void 0) {
            return value;
        }
    }
};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2)
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
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.then(argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.then(argument8,argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test411.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)