





var callbackArguments = [];
var argument1 = function (leaf) {
 callbackArguments.push(arguments) 

    return leaf.rev;
};
var argument2 = function (n, i) {
 callbackArguments.push(arguments) 

    var $thisLi = columnsObj.filter('.' + columnClassPref + n), sumx = 0;
    $thisLi.each(function () {
        var datax = +$(this).attr('data-x');
        sumx = parseInt(datax === 0 || !datax ? 1 : datax) > sumx ? parseInt(datax === 0 || !datax ? 1 : datax) : sumx;
    });
    $this.children().append('<li class="x' + sumx + '" data-column="' + n + '" data-x="' + sumx + '"><ul></ul></li>');
    $this.find('[data-column="' + n + '"]').children().append($thisLi.clone());
};
var argument3 = function (elem) {
 callbackArguments.push(arguments) 

    return [
        elem.nextSibling,
        elem.parentNode
    ];
};
var argument4 = function () {
 callbackArguments.push(arguments) 

    var offsetParent = this.offsetParent || document.body;
    while (offsetParent && (!rroot.test(offsetParent.nodeName) && jQuery.css(offsetParent, 'position') === 'static')) {
        offsetParent = offsetParent.offsetParent;
    }
    return offsetParent;
};
var base_0 = [122,"4o","^",627,"8y2"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,"4o","^",627,"8y2"]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,"4o","^",627,"8y2"]
var r_2= undefined
try {
r_2 = base_2.map(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,"4o","^",627,"8y2"]
var r_3= undefined
try {
r_3 = base_3.map(argument4)
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
require("fs").writeFileSync("./experiments/map/mapMined/test197.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)