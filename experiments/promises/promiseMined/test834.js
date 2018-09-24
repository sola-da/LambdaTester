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
var argument2 = function (error) {
 callbackArguments.push(arguments) 

    done();
};
var argument3 = null;
var argument4 = [49,893,460,607,627,126,705,705,157];
var argument5 = {"213":618,"595":627,"k":403,";":-100,"6.331187141634995e+307":8.483957830220849e+307,"1.3216576995900928e+308":618,"R":705,"2.8934618432865473e+307":4.546263839282809e+307};
var argument6 = function (url) {
 callbackArguments.push(arguments) 

    if (url.match('login') || url.match('register')) {
        browser.get('#/login');
        $('.auth-form-container #login_username').sendKeys(username);
        $('.auth-form-container #login_password').sendKeys(password);
        $('#loginBtn').click().then(function () {
            helpers.waitForNavigation('#/balance');
        });
    }
};
var argument7 = p1;
var argument8 = function (newTypeSpec) {
 callbackArguments.push(arguments) 

    resolveTypeExt(newTypeSpec).then(function (reply) {
        promise.resolve(reply);
    }, function (ex) {
        promise.reject(ex);
    });
};
var argument9 = r_3;
var argument10 = r_2;
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
r_1 = base_1.catch(argument2,argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.then(argument5,argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.then(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test834.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)