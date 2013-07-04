
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

a = COLOR([0,255/255,255/255])(a)


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

b=COLOR([52/255,58/255,144/255])(tot)

b=STRUCT([a,b])


























//--------------------------------------------------FIOCCO-------------------------------------


var lrosa =0.05;

var domain = PROD1x1([INTERVALS(1)(16),INTERVALS(1)(16)]);
var domain2 = DOMAIN([[0,1],[0,1]])([20,30]);



var c0 = BEZIER(S0)([[1.93, 4.63,-0.05], [0.53, 5.29,-0.05], [1.29, 5.71,-0.05], [1.45, 4.91,-0.05]]);
var c1 = BEZIER(S0)([[1.93, 4.63,-0.05], [0.01, 5.09,-0.05], [1.62, 5.95,-0.05], [1.57, 4.84,-0.05]]);


var out = MAP(BEZIER(S1)([c0,c1]))(domain);



var c0p = BEZIER(S0)([[1.93, 4.63,0.05-lrosa], [0.53, 5.29,0.05-lrosa], [1.29, 5.71,0.05-lrosa], [1.45, 4.91,0.05-lrosa]]);
var c1p = BEZIER(S0)([[1.93, 4.63,0.05-lrosa], [0.01, 5.09,0.05-lrosa], [1.62, 5.95,0.05-lrosa], [1.57, 4.84,0.05-lrosa]]);


var outp = MAP(BEZIER(S1)([c0p,c1p]))(domain);


var lat0 = MAP(BEZIER(S1)([c0,c0p]))(domain2);

var lat1 = MAP(BEZIER(S1)([c1,c1p]))(domain2);

//var lat2 = MAP(BEZIER(S1)([c2,c2p]))(domain2);


var tot = STRUCT([lat0,lat1, out, outp])

//var tot = STRUCT([ out, outp])

//tot = T([0,1,2])([-5,-5,0])(tot);


tot=COLOR([52/255,58/255,144/255])(tot)



tot2=R([1,2])(PI)(tot);

tot2=T([0,1,2])([0,9.8,0])(tot2);

tot3= STRUCT([tot, tot2])



tot3=R([0,2])(PI)(tot3);


tot3=R([1,2])(PI/2)(tot3);

tot3=T([0,1,2])([3,3.5,-5])(tot3);


tot3=R([0,1])(PI/15)(tot3);

tot3=T([0,1,2])([1.2,-0.85,-0.8])(tot3);

tot4=STRUCT([tot3, b])
DRAW(tot4)










































