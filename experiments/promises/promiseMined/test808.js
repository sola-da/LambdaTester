/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (response) {
 callbackArguments.push(arguments) 

    $scope.posting = false;
    $scope.error = response.data.errorMessage;
};
var argument2 = 1.0049408542734015e+308;
var argument3 = p1;
var argument4 = function (response) {
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
var argument5 = ["eE","<T<F","D","S%","11","?","&9z"];
var argument6 = "";
var argument7 = [893];
var argument8 = function (consoleLog) {
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
var argument9 = p1;
var argument10 = function (_tasks) {
 callbackArguments.push(arguments) 

    expect(_tasks).to.have.length(self.tasks.length - 1);
    return self.user.removeTasks([
        self.tasks[1],
        self.tasks[2]
    ]).then(function () {
        return self.user.getTasks().then(function (_tasks) {
            expect(_tasks).to.have.length(self.tasks.length - 3);
        });
    });
};
var argument11 = null;
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.then(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
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
r_3 = base_3.then(argument10,argument11)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test808.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)