//scarpe tacco e fiori--------------------------

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

a = COLOR([188/255,143/255,143/255])(a)


//----------------------------------------------------------------------------------------------------
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

b=STRUCT([a,b])





//DRAW(b)

var rotated = ROTATE([1,2])(PI/2)(b);

var suola = T([0,1,2])([-4.9,-1,-4.5])(rotated);

//var suola = COLOR([61/255,43/255,31/255])(rotated);


//-------------------------------------------var rotated = COLOR([61/255,43/255,31/255])(rotated);

//DRAW(suola);










//TACCO----------------------------------------------------------------------------------------------------------------------------------------------


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

//tallone-------------------------------------------------------------------------------------------------------------


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

q=STRUCT([a,rotated1,suola])

q = T([0,1,2])([-0.05,-0.07,0.18])(q);


DRAW(q)//-------------------------------------------------------------------------------------------------------------------------------------------














//ROSA==========================================================================================================================================







//CENTRO


var lrosa = 0.05;

var domain = PROD1x1([INTERVALS(1)(50),INTERVALS(1)(50)]);
var domain2 = DOMAIN([[0,1],[0,1]])([50,50]);



var c0 = BEZIER(S0)([[3.2, 3.08,0], [1.4, 4,0.7], [4.4, 4,0.7], [4.45, 3.21,0]]);
var c1 = BEZIER(S0)([[1.73, 2.66,0], [2.88, 2.49,1.5], [3.74, 2.67,1.5], [4.18, 2.77,0]]);
var c2 = BEZIER(S0)([[2.42, 1.63,0], [2.68, 1.43,1.5], [3.18, 1.37,1.5], [3.52, 1.7,0]]);
var c3 = BEZIER(S0)([[2.2, 2.13,0], [2.75, 1.88,0], [3.19, 1.9,0], [3.71, 2.23,0]]);


var out = MAP(BEZIER(S1)([c0,c1,c2,c3]))(domain);



var c0p = BEZIER(S0)([[3.2, 3.08,0-lrosa], [1.4, 4,0.7-lrosa-0.1], [4.4, 4,0.7-lrosa-0.1], [4.45, 3.21,0-lrosa]]);
var c1p = BEZIER(S0)([[1.73, 2.66,0-lrosa], [2.88, 2.49,1.5-lrosa], [3.74, 2.67,1.5-lrosa], [4.18, 2.77,0-lrosa]]);
var c2p = BEZIER(S0)([[2.42, 1.63,0-lrosa], [2.68, 1.43,1.5-lrosa], [3.18, 1.37,1.5-lrosa], [3.52, 1.7,0-lrosa]]);
var c3p = BEZIER(S0)([[2.2, 2.13,0-lrosa], [2.75, 1.88,0-lrosa], [3.19, 1.9,0-lrosa], [3.71, 2.23,0-lrosa]]);



var outp = MAP(BEZIER(S1)([c0p,c1p,c2p,c3p]))(domain);


var lat0 = MAP(BEZIER(S1)([c0,c0p]))(domain2);

var tot = STRUCT([lat0, out, outp])

//DRAW(tot);




var tot1 = ROTATE([1,2])(PI)(tot);
tot1 = ROTATE([0,1])(PI/2.2)(tot1);
tot1 = ROTATE([0,2])(PI/3.5)(tot1);
tot1 = T([0,2])([1.32,2.5])(tot1);



tot2= STRUCT ([tot,tot1])
//tot2 = ROTATE([0,2])(-PI/5)(tot2);
tot2 = T([0,1,2])([-2,-2,-2])(tot2);
tot2 = R([1,2])(-PI/4)(tot2)
tot2 = R([0,2])(-PI/4)(tot2)

tot2centro= COLOR([0,0.2,1,1])(tot2)
//DRAW(tot2centro);



//-------------------------------------------------------------------------------------------------------------------------------------

//PETALI ESTERNI


var lrosaf = 0.25;

var domain = PROD1x1([INTERVALS(1)(16),INTERVALS(1)(50)]);
var domain2 = DOMAIN([[0,1],[0,1]])([50,50]);

var c0 = BEZIER(S0)([[0.06, 3.4,-1], [0.28, 3.94,-0.8], [0.97, 2.36,-1.1], [2.12, 2.56,-1.1]]);

var c1 = BEZIER(S0)([[0.18, 4.15,-2], [0.87, 4.52,0.8], [1.44, 2.9,-1.1], [2.43, 2.94,-0.5]]);

var c2 = BEZIER(S0)([[0.4, 4.71,-1], [1.22, 4.85,0.8], [1.96, 3.36,-1.1], [2.62, 3.11,-0.5]]);

var c3 = BEZIER(S0)([[1.2, 4.87,-1], [2.04, 4.64,-0.8], [2.73, 3.4,-1.1], [2.77, 3.27,-0.5]]);

var out = MAP(BEZIER(S1)([c0,c1,c2,c3]))(domain);

//DRAW(out);


var c0p = BEZIER(S0)([[0.06, 3.4,-1-0.01], [0.28, 3.94,-0.8-lrosaf], [0.97, 2.36,-1.1-lrosaf], [2.12, 2.56,-1.1-0.03]]);

var c1p = BEZIER(S0)([[0.18, 4.15,-2-0.01], [0.87, 4.52,0.8-lrosaf], [1.44, 2.9,-1.1-lrosaf], [2.43, 2.94,-0.5-0.03]]);

var c2p = BEZIER(S0)([[0.4, 4.71,-1-0.01], [1.22, 4.85,0.8-lrosaf], [1.96, 3.36,-1.1-lrosaf], [2.62, 3.11,-0.5-0.03]]);

var c3p = BEZIER(S0)([[1.2, 4.87,-1-0.01], [2.04, 4.64,-0.8-lrosaf], [2.73, 3.4,-1.1-lrosaf], [2.77, 3.27,-0.5-0.03]]);

var outp = MAP(BEZIER(S1)([c0p,c1p,c2p,c3p]))(domain);



var lateral0 = BEZIER(S1)([c0,c0p]);
var lateral3 = BEZIER(S1)([c3,c3p]);


var fuse0 = MAP(lateral0)(domain2);
var fuse3 = MAP(lateral3)(domain2);


var tot = STRUCT([fuse0,fuse3, out, outp])



var tot1 = ROTATE([1,2])(PI/2)(tot);
tot1 = ROTATE([0,2])(-PI/2)(tot);
tot1 = T([0,1,2])([0.9,-3,-3])(tot1);

tot1=SCALE([0,1,2])([0.85,1.4,0.9])(tot1);

tot1 = ROTATE([1,2])(PI/6)(tot1);
tot1 = ROTATE([0,1])(PI/9)(tot1);
tot1 = ROTATE([0,1])(-PI/3)(tot1);

//secondopetalo----------------------------------------
tot2 = ROTATE([1,2])(PI/3)(tot1);
tot2 = T([0,1,2])([0.1,-0.8,0.8])(tot2);


//terzopetalo---------------------------------------------


var lrosaf = 0.25;

var domain = PROD1x1([INTERVALS(1)(16),INTERVALS(1)(50)]);
var domain2 = DOMAIN([[0,1],[0,1]])([50,50]);

var c0a = BEZIER(S0)([[0.06, 3.4,-1], [0.28, 3.94,-0.8], [0.97, 2.36,-1.1], [2.12, 2.56,2]]);

var c1a = BEZIER(S0)([[0.18, 4.15,-2], [0.87, 4.52,0.8], [1.44, 2.9,-1.1], [2.43, 2.94,0.5]]);

var c2a = BEZIER(S0)([[0.4, 4.71,-1], [1.22, 4.85,0.8], [1.96, 3.36,-1.1], [2.62, 3.11,0.5]]);

var c3a = BEZIER(S0)([[1.2, 4.87,-1], [2.04, 4.64,-0.8], [2.73, 3.4,-1.1], [2.77, 3.27,0.5]]);

var outa = MAP(BEZIER(S1)([c0a,c1a,c2a,c3a]))(domain);

//DRAW(outa);


var c0pa = BEZIER(S0)([[0.06, 3.4,-1-0.01], [0.28, 3.94,-0.8-lrosaf], [0.97, 2.36,-1.1-lrosaf], [2.12, 2.56,2-0.03]]);

var c1pa = BEZIER(S0)([[0.18, 4.15,-2-0.01], [0.87, 4.52,0.8-lrosaf], [1.44, 2.9,-1.1-lrosaf], [2.43, 2.94,0.5-0.03]]);

var c2pa = BEZIER(S0)([[0.4, 4.71,-1-0.01], [1.22, 4.85,0.8-lrosaf], [1.96, 3.36,-1.1-lrosaf], [2.62, 3.11,0.5-0.03]]);

var c3pa = BEZIER(S0)([[1.2, 4.87,-1-0.01], [2.04, 4.64,-0.8-lrosaf], [2.73, 3.4,-1.1-lrosaf], [2.77, 3.27,0.5-0.03]]);

var outpa = MAP(BEZIER(S1)([c0pa,c1pa,c2pa,c3pa]))(domain);



var lateral0a = BEZIER(S1)([c0a,c0pa]);
var lateral3a = BEZIER(S1)([c3a,c3pa]);


var fuse0a = MAP(lateral0a)(domain2);
var fuse3a = MAP(lateral3a)(domain2);


var tota = STRUCT([fuse0a,fuse3a, outa, outpa])



var tot1a = ROTATE([1,2])(PI/2)(tota);
tot1a = ROTATE([0,2])(-PI/2)(tota);
tot1a = T([0,1,2])([0.9,-3,-3])(tot1a);

tot1a=SCALE([0,1,2])([0.85,1.4,0.9])(tot1a);

tot1a = ROTATE([1,2])(PI/6)(tot1a);
tot1a = ROTATE([0,1])(PI/9)(tot1a);
tot1a = ROTATE([0,1])(-PI/3)(tot1a);


tot2a = ROTATE([1,2])(PI/3)(tot1a);
tot2a = T([0,1,2])([0.1,-0.8,0.8])(tot2a);

tot3a = ROTATE([0,1])(PI*1.1)(tot2a)
tot3a = ROTATE([1,2])(-PI/9)(tot3a);
tot3a = ROTATE([1,2])(PI/3)(tot3a);
tot3a = ROTATE([1,2])(-PI/3)(tot3a);
tot3a= ROTATE([1,2])(-PI/3)(tot3a);
tot3a = ROTATE([0,2])(PI/3)(tot3a);
tot3a = ROTATE([0,1])(-PI/3)(tot3a);
tot3a = ROTATE([1,2])(PI/9)(tot3a);

tot3a = T([0,1,2])([1.2,-1,-1])(tot3a);
tot3a = ROTATE([1,2])(PI/9)(tot3a);




tot20= STRUCT ([tot1,tot2,tot3a])

tot20a=ROTATE([1,2])(PI)(tot20);

tot20a = T([0,1,2])([-1,-1,-1])(tot20a);

tot20a=ROTATE([0,1])(-PI/17)(tot20);

tot20a=ROTATE([1,2])(-PI/4)(tot20);


tot20b= STRUCT ([tot20,tot20a])



tot20n= ROTATE([1,2])(PI/2)(tot20b); 



tot20q= STRUCT ([tot20b,tot20n])

tot20q= COLOR([0,0,1,1])(tot20q)


terzopetalo=STRUCT([tot20b,tot20n, tot2centro])

//-----------------------------------------------------

terzopetalo=COLOR([188/255,143/255,143/255])(terzopetalo)

terzopetalo=SCALE([0,1,2])([0.3,0.3,0.3])(terzopetalo);


terzopetalo= ROTATE([0,1])(PI/2)(terzopetalo); 


terzopetalo = T([0,1,2])([-0.5,-0.26,1])(terzopetalo);


terzopetalo= ROTATE([0,1])(-PI/5)(terzopetalo);


terzopetalo= ROTATE([0,2])(-PI/9)(terzopetalo);

DRAW(terzopetalo);































