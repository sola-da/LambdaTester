/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (files) {
 callbackArguments.push(arguments) 

    var funcs = [];
    _.each(files, function (file) {
        if (ignoreFolders.indexOf(file) === -1) {
            funcs.push(Q.nfcall(infoStat, repoPath + '/' + file));
        }
    });
    return funcs;
};
var argument2 = "V9I";
var argument3 = {"6.575304068046198e+307":460};
var argument4 = function (err) {
 callbackArguments.push(arguments) 

    /permission/i.test(err.message).should.be.true;
};
var argument5 = 1.7735018270099604e+306;
var argument6 = p1;
var argument7 = p1;
var argument8 = function (username) {
 callbackArguments.push(arguments) 

    $scope.$emit('signedIn');
    $location.path('/user/' + username);
};
var argument9 = null;
var argument10 = function (locals) {
 callbackArguments.push(arguments) 

    if (next == $route.current) {
        if (next) {
            next.locals = locals;
            copy(next.params, $routeParams);
        }
        $rootScope.$broadcast('$routeChangeSuccess', next, last);
    }
};
var argument11 = true;
var argument12 = "";
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.catch(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.then(argument7,argument8,argument9)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
var r_3= undefined
try {
r_3 = base_3.then(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test883.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)