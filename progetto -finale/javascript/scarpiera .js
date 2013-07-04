//basi

a=CUBOID([9,7,0.1])
a=T([0,1,2])([0,0,-1.5])(a)

//sportelli

b=CUBOID([3,7,0.1])
b1=CUBOID([3,7,0.1])
b1=T([0,1,2])([6,0,0])(b1)
sportelli=STRUCT([b,b1])

//lati

bl1=CUBOID([9.1,1.6,0.1])
bl1=R([1,2])(PI/2)(bl1)
bl1=T([0,1,2])([0,0,-1.5])(bl1)

bl2=T([0,1,2])([0,7,0])(bl1)

lati=STRUCT([bl1,bl2])

//sopra e sotto

ss1=CUBOID([7,1.6,0.1])
ss1=R([0,1])(PI/2)(ss1)
ss1=R([0,2])(PI/2)(ss1)
ss1=T([0,1,2])([0,0,-1.5])(ss1)

ss2=T([0,1,2])([9,0,0])(ss1)
soprasotto=STRUCT([ss1,ss2])

//sbarre

c=DISK(0.1)(32)
sbarre=EXTRUDE([7])(c)
sbarre=R([1,2])(PI/2)(sbarre)
sbarre=T([0,1,2])([4,7,0])(sbarre)

//sportello obliquo

obli=CUBOID([3,7,0.1])
obli=R([0,2])(PI/4)(obli)
obli=T([0,1,2])([3,0,1.5])(obli)


scarpiera=STRUCT([a,sportelli,lati,sbarre,soprasotto,obli])



scarpiera = COLOR([61/255,43/255,31/255])(scarpiera);


//DRAW(scarpiera)



//......................................................







































var lrosa =2;

var domain = PROD1x1([INTERVALS(1)(16),INTERVALS(1)(16)]);
var domain2 = DOMAIN([[0,1],[0,1]])([20,30]);



var c0 = BEZIER(S0)([[1.74, 2.25,-1], [1.44, 2.78,-1], [2.44, 3.02,-1], [2.43, 3.09,-1]]);
var c1 = BEZIER(S0)([[2.43, 2.27,0], [2.59, 2.75,0], [2.48, 2.69,0], [2.7, 3.04,0]]);
var c2 = BEZIER(S0)([[3.08, 2.38,0], [3.17, 2.76,0], [3.31, 2.73,0], [3.09, 3.24,0]]);
var c3 = BEZIER(S0)([[3.48, 2.52,0], [3.49, 2.78,0], [3.66, 2.93,0.2], [3.59, 4.44,0]]);
var c4 = BEZIER(S0)([[3.75, 2.83,0], [3.85, 3.23,0], [4.05, 3.65,0.2], [3.88, 5.1,0]]);
var c5 = BEZIER(S0)([[3.92, 3.04,0], [3.85, 3.23,0], [4.25, 3.85,0], [4.17, 5.69,0]]);
var c6 = BEZIER(S0)([[4.84, 4.79,-1], [5.16, 5.32,-1], [4.2, 5.73,-1], [4.11, 5.76,-1]]);


var out = MAP(BEZIER(S1)([c0,c1,c2,c3,c4,c5,c6]))(domain);

var c0p = BEZIER(S0)([[1.74, 2.25,1-lrosa], [1.44, 2.78,1-lrosa], [2.44, 3.02,1-lrosa], [2.43, 3.09,1-lrosa]]);
var c1p = BEZIER(S0)([[2.43, 2.27,0-lrosa], [2.59, 2.75,0-lrosa], [2.48, 2.69,0-lrosa], [2.7, 3.04,0-lrosa]]);
var c2p = BEZIER(S0)([[3.08, 2.38,0-lrosa], [3.17, 2.76,0-lrosa], [3.31, 2.73,0-lrosa], [3.09, 3.24,0-lrosa]]);
var c3p = BEZIER(S0)([[3.48, 2.52,0-lrosa], [3.49, 2.78,0-lrosa], [3.66, 2.93,0-lrosa], [3.59, 4.44,0-lrosa]]);
var c4p = BEZIER(S0)([[3.75, 2.83,0-lrosa], [3.85, 3.23,0-lrosa], [4.05, 3.65,0-lrosa], [3.88, 5.1,0-lrosa]]);
var c5p = BEZIER(S0)([[3.92, 3.04,0-lrosa], [3.85, 3.23,0-lrosa], [4.25, 3.85,0-lrosa], [4.17, 5.69,0-lrosa]]);
var c6p = BEZIER(S0)([[4.84, 4.79,1-lrosa], [5.16, 5.32,1-lrosa], [4.2, 5.73,1-lrosa], [4.11, 5.76,1-lrosa]]);


var outp = MAP(BEZIER(S1)([c0p,c1p,c2p,c3p,c4p,c5p,c6p]))(domain);

var lat0 = MAP(BEZIER(S1)([c0,c1]))(domain2);

var tot = STRUCT([ out, outp])

a=tot


//------------------------------------------------------








var lrosa =2;

var domain = PROD1x1([INTERVALS(1)(16),INTERVALS(1)(16)]);
var domain2 = DOMAIN([[0,1],[0,1]])([20,30]);

var c1 = BEZIER(S0)([[1.74, 2.25,-1], [2.43, 2.27,0],[3.08, 2.38,0], [3.48, 2.52,0],[3.75, 2.83,0],[3.92, 3.04,0],[4.84, 4.79,-1]]);
var c2 = BEZIER(S0)([[1.74, 2.25,-1], [2.43, 2.27,0],[3.08, 2.38,0], [3.48, 2.52,0],[3.75, 2.83,0],[3.92, 3.04,0],[4.84, 4.79,-1]]);


var out = MAP(BEZIER(S1)([c1,c2]))(domain);



var c1p = BEZIER(S0)([[1.74, 2.25,1-lrosa], [2.43, 2.27,0-lrosa],[3.08, 2.38,0-lrosa], [3.48, 2.52,0-lrosa],[3.75, 2.83,0-lrosa],[3.92, 3.04,0-lrosa],[4.84, 4.79,1-lrosa]])

var c2p = BEZIER(S0)([[1.74, 2.25,1-lrosa], [2.43, 2.27,0-lrosa],[3.08, 2.38,0-lrosa], [3.48, 2.52,0-lrosa],[3.75, 2.83,0-lrosa],[3.92, 3.04,0-lrosa],[4.84, 4.79,1-lrosa]]);



var outp = MAP(BEZIER(S1)([c1p,c2p]))(domain);


var lat0 = MAP(BEZIER(S1)([c1,c1p]))(domain2);

//var lat1 = MAP(BEZIER(S1)([c1,c1p]))(domain2);

var lat2 = MAP(BEZIER(S1)([c2,c2p]))(domain2);


//var tot = STRUCT([lat0,lat1,lat2, out, outp])

var tot = STRUCT([ out, lat2,outp])

//tot = T([0,1,2])([-5.5,-5,0])(tot);


b=STRUCT([a,tot])

//DRAW(b)

var rotated = ROTATE([1,2])(PI/2)(b);

var rotated = T([0,1,2])([-4.9,-1,-4.5])(rotated);

var rotated = COLOR([61/255,43/255,31/255])(rotated);


var soletta = COLOR([61/255,43/255,31/255])(rotated);

//DRAW(rotated);

//TACCO---------------


var domain = DOMAIN([[0,1],[0,2*PI]])([20,20]);
var profile = BEZIER(S0)([[4.73-4.73,0, 4.79], [4.94-4.73,0, 4.44], [4.73-4.73,0, 3.43], [5.11-4.73,0, 2.45]]);
var mapping = ROTATIONAL_SURFACE(profile);
var surface = MAP(mapping)(domain);
var surface = T([2])([-2.2])(surface);
var coloredModel1 = COLOR([61/255,43/255,31/255])(surface);


//tacchetto------------------------------------


var model = DISK(0.03)(32);
var extruded = EXTRUDE([0.09])(model);


var coloredModel = COLOR([188/255,143/255,143/255])(extruded);
var coloredModel = T([2])([2.5])(coloredModel);

c=STRUCT([coloredModel,coloredModel1])


var rotated = ROTATE([0,2])(PI)(c);

var rotated = SCALE([0,1,2])([0.8,0.8,0.95])(rotated);

rotated1 = T([0,1,2])([-0.07,0.08,0])(rotated);


//DRAW(rotated1);

//tallone-----------------------------------------


var lrosa =0.25;

var domain = PROD1x1([INTERVALS(1)(16),INTERVALS(1)(16)]);
var domain2 = DOMAIN([[0,1],[0,1]])([20,30]);



var c0 = BEZIER(S0)([[2.64, 4.5,-0.1], [2.66, 4.53,0], [2.64, 4.71,0], [2.74, 4.82,-0.1]]);
var c1 = BEZIER(S0)([[2.75, 4.49,-0.1], [2.75, 4.52,0.1], [2.74, 4.65,0.1], [2.74, 4.82,-0.1]]);
var c2 = BEZIER(S0)([[2.9, 4.51,-0.1], [2.78, 4.53,0], [2.9, 4.62,0], [2.74, 4.82,-0.1]]);




var out = MAP(BEZIER(S1)([c0,c1,c2]))(domain);


var c0p = BEZIER(S0)([[2.64, 4.5,0.1-lrosa], [2.66, 4.53,0-lrosa], [2.64, 4.71,0-lrosa], [2.74, 4.82,0.1-lrosa]]);
var c1p = BEZIER(S0)([[2.75, 4.49,0.1-lrosa], [2.75, 4.52,-0.1-lrosa], [2.74, 4.65,-0.1-lrosa], [2.74, 4.82,0.1-lrosa]]);
var c2p = BEZIER(S0)([[2.9, 4.51,0.1-lrosa], [2.78, 4.53,0-lrosa], [2.9, 4.62,0-lrosa], [2.74, 4.82,0.1-lrosa]]);



var outp = MAP(BEZIER(S1)([c0p,c1p,c2p]))(domain);

var lat0 = MAP(BEZIER(S1)([c0,c0p]))(domain2);

var lat1 = MAP(BEZIER(S1)([c2,c2p]))(domain2);

var tot = STRUCT([ out, outp, lat0, lat1])

a=tot

a = T([0,1,2])([-3,-4,0])(a);

var a = SCALE([0,1,2])([2.6,2.6,2.6])(a);

var a = ROTATE([1,2])(PI/2)(a);

var a = ROTATE([0,1])(PI)(a);

a = T([0,1,2])([-0.7,0.4,-1.6])(a);

var a = COLOR([61/255,43/255,31/255])(a);

q=STRUCT([a,rotated1])

scarpa = T([0,1,2])([-0.05,-0.07,0.18])(q);

scarpa1=STRUCT([scarpa,soletta])

//////////////////////////////////////////////////////////////////////

scarpasosia=T([0,1,2])([0,2,0])(scarpa1);

scarpa1=STRUCT([scarpa1,scarpasosia])

scarpa1 = ROTATE([0,2])(-PI/3)(scarpa1);


scarpa1 = T([0,1,2])([9.4,1.4,0.9])(scarpa1);

scarpa1 = SCALE([0,1,2])([0.4,0.4,0.4])(scarpa1);


scarpemarroni=STRUCT([scarpa1,scarpiera])


//------------------------BALLERINE



var lrosa =2;

var domain = PROD1x1([INTERVALS(1)(16),INTERVALS(1)(16)]);
var domain2 = DOMAIN([[0,1],[0,1]])([20,30]);



var c0 = BEZIER(S0)([[1.74, 2.25,-1], [1.44, 2.78,-1], [2.44, 3.02,-1], [2.43, 3.09,-1]]);
var c1 = BEZIER(S0)([[2.43, 2.27,0], [2.59, 2.75,0], [2.48, 2.69,0], [2.7, 3.04,0]]);
var c2 = BEZIER(S0)([[3.08, 2.38,0], [3.17, 2.76,0], [3.31, 2.73,0], [3.09, 3.24,0]]);
var c3 = BEZIER(S0)([[3.48, 2.52,0], [3.49, 2.78,0], [3.66, 2.93,0.2], [3.59, 4.44,0]]);
var c4 = BEZIER(S0)([[3.75, 2.83,0], [3.85, 3.23,0], [4.05, 3.65,0.2], [3.88, 5.1,0]]);
var c5 = BEZIER(S0)([[3.92, 3.04,0], [3.85, 3.23,0], [4.25, 3.85,0], [4.17, 5.69,0]]);
var c6 = BEZIER(S0)([[4.84, 4.79,-1], [5.16, 5.32,-1], [4.2, 5.73,-1], [4.11, 5.76,-1]]);


var out = MAP(BEZIER(S1)([c0,c1,c2,c3,c4,c5,c6]))(domain);

var c0p = BEZIER(S0)([[1.74, 2.25,1-lrosa], [1.44, 2.78,1-lrosa], [2.44, 3.02,1-lrosa], [2.43, 3.09,1-lrosa]]);
var c1p = BEZIER(S0)([[2.43, 2.27,0-lrosa], [2.59, 2.75,0-lrosa], [2.48, 2.69,0-lrosa], [2.7, 3.04,0-lrosa]]);
var c2p = BEZIER(S0)([[3.08, 2.38,0-lrosa], [3.17, 2.76,0-lrosa], [3.31, 2.73,0-lrosa], [3.09, 3.24,0-lrosa]]);
var c3p = BEZIER(S0)([[3.48, 2.52,0-lrosa], [3.49, 2.78,0-lrosa], [3.66, 2.93,0-lrosa], [3.59, 4.44,0-lrosa]]);
var c4p = BEZIER(S0)([[3.75, 2.83,0-lrosa], [3.85, 3.23,0-lrosa], [4.05, 3.65,0-lrosa], [3.88, 5.1,0-lrosa]]);
var c5p = BEZIER(S0)([[3.92, 3.04,0-lrosa], [3.85, 3.23,0-lrosa], [4.25, 3.85,0-lrosa], [4.17, 5.69,0-lrosa]]);
var c6p = BEZIER(S0)([[4.84, 4.79,1-lrosa], [5.16, 5.32,1-lrosa], [4.2, 5.73,1-lrosa], [4.11, 5.76,1-lrosa]]);


var outp = MAP(BEZIER(S1)([c0p,c1p,c2p,c3p,c4p,c5p,c6p]))(domain);

var lat0 = MAP(BEZIER(S1)([c0,c1]))(domain2);

var tot = STRUCT([ out, outp])

a=tot

a = COLOR([61/255,43/255,31/255])(a)


//------------------------------------
var lrosa =2;

var domain = PROD1x1([INTERVALS(1)(16),INTERVALS(1)(16)]);
var domain2 = DOMAIN([[0,1],[0,1]])([20,30]);

var c1 = BEZIER(S0)([[1.74, 2.25,-1], [2.43, 2.27,0],[3.08, 2.38,0], [3.48, 2.52,0],[3.75, 2.83,0],[3.92, 3.04,0],[4.84, 4.79,-1]]);
var c2 = BEZIER(S0)([[1.74, 2.25,-1], [2.43, 2.27,0],[3.08, 2.38,0], [3.48, 2.52,0],[3.75, 2.83,0],[3.92, 3.04,0],[4.84, 4.79,-1]]);


var out = MAP(BEZIER(S1)([c1,c2]))(domain);



var c1p = BEZIER(S0)([[1.74, 2.25,1-lrosa], [2.43, 2.27,0-lrosa],[3.08, 2.38,0-lrosa], [3.48, 2.52,0-lrosa],[3.75, 2.83,0-lrosa],[3.92, 3.04,0-lrosa],[4.84, 4.79,1-lrosa]])

var c2p = BEZIER(S0)([[1.74, 2.25,1-lrosa], [2.43, 2.27,0-lrosa],[3.08, 2.38,0-lrosa], [3.48, 2.52,0-lrosa],[3.75, 2.83,0-lrosa],[3.92, 3.04,0-lrosa],[4.84, 4.79,1-lrosa]]);



var outp = MAP(BEZIER(S1)([c1p,c2p]))(domain);


var lat0 = MAP(BEZIER(S1)([c1,c1p]))(domain2);

//var lat1 = MAP(BEZIER(S1)([c1,c1p]))(domain2);

var lat2 = MAP(BEZIER(S1)([c2,c2p]))(domain2);


//var tot = STRUCT([lat0,lat1,lat2, out, outp])

var tot = STRUCT([ out, lat2,outp])

//tot = T([0,1,2])([-5.5,-5,0])(tot);

b=COLOR([61/255,43/255,31/255])(tot)

ballerine=STRUCT([a,b])


ballerine = SCALE([0,1,2])([0.5,0.5,0.5])(ballerine);


ballerine = T([0,1,2])([2,0,0])(ballerine);



ballerine = ROTATE([1,2])(PI/3)(ballerine);


ballerine = ROTATE([0,2])(-PI/3)(ballerine);



ballerine = T([0,1,2])([3,2,-4.1])(ballerine);



ballerine1 = T([0,1,2])([0,1.15,0])(ballerine);



finale=STRUCT([scarpemarroni,ballerine,ballerine1])


//DRAW(finale)




//----------------MANIGLIA----------------

// annulus sector (settore di corona circolare)

function annulus_sector (alpha, r, R) {
  var domain = DOMAIN([[0,alpha],[r,R]])([36,1]);
  var mapping = function (v) {
    var a = v[0];
    var r = v[1];
    
    return [r*COS(a), r*SIN(a)];
  }
  var model = MAP(mapping)(domain);
  return model;
}



sett=annulus_sector(PI, 1.4, 1.5)

maniglia=EXTRUDE([0.2])(sett);







//----------------MANIGLIA1----------------

maniglia1= T([0,1,2])([0,1.15,0])(maniglia);

maniglia1 = SCALE([0,1,2])([0.5,0.5,0.5])(maniglia1);

maniglia1 = ROTATE([0,2])(PI/2)(maniglia1);


maniglia1 = ROTATE([1,2])(PI/2)(maniglia1);


maniglia1= T([0,1,2])([1.5,3.5,-0.5])(maniglia1);

//----------MANIGLIA2

maniglia2=T([0,1,2])([5.6,0,0])(maniglia1);


//----------MANIGLIA3


maniglia3=ROTATE([0,2])(PI/6)(maniglia2);

maniglia3=T([0,1,2])([-2,0,3.8])(maniglia3);



maniglie=STRUCT([maniglia1,maniglia2,maniglia3])



maniglie=STRUCT([maniglie,finale])

DRAW(maniglie)






















