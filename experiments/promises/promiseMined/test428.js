/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (consoleLog) {
 callbackArguments.push(arguments) 

    render.sendPage(res, 500, 'An error has occurred', {
        template: 'error-500',
        templateDir: templateDir,
        vars: {
            message: errorText,
            detail: detail,
            console: consoleLog
        }
    });
};
var argument2 = r_0;
var argument3 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, []);
    } finally {
        tearDown();
    }
};
var argument4 = function (data) {
 callbackArguments.push(arguments) 

    if ($scope.currentFolder.id == null && $scope.currentFolder.foldersInside.length == 0) {
        $scope.currentFolder.name = null;
        alertify.alert('It looks like you dont have any folders. You can create one using the "New Folder" button in the top right of the page.');
    }
};
var argument5 = r_1;
var argument6 = function (error) {
 callbackArguments.push(arguments) 

    done();
};
var argument7 = r_0;
var argument8 = "=s";
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1)
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
r_2 = base_2.then(argument4,argument5)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.catch(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test428.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)