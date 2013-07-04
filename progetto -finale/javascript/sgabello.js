//schienale=DISK(0.67)(50)

//schienale=EXTRUDE([0.02])(schienale)


//---------------------------------------------


toro=TORUS_SURFACE([0.5,6])([40,60])

toro=SCALE([0,1,2])([0.13,0.13,0.13])(toro);

//toro=STRUCT([toro,schienale])




//--------------------

var domain = DOMAIN([[0,1],[0,2*PI]])([40,40]);

var profile = BEZIER(S0)([[3.78-3.78,0, 3.46], [4.35-3.78,0, 3.46], [4.45-3.78,0, 3.58], [4.64-3.78,0, 3.7]]);


var mapping = ROTATIONAL_SURFACE(profile);
var surface = MAP(mapping)(domain);

surface=T([0,1,2])([0,0,-3.7])(surface)

surface=COLOR([0,0,0])(surface)


a=STRUCT([toro,surface])

a=S([0,1,2])([6,6,6])(a)


a=R([0,2])(PI)(a)

a=T([0,1,2])([0,0,-1.44])(a)

a=COLOR([0,0,0])(a)

//DRAW(a)











//gambe------------------------------------------

//gamba1
gambe=DISK(1)(60)

gamba1=EXTRUDE([6])(gambe)


//gamba2

gamba2=DISK(0.8)(60)

gamba2=EXTRUDE([8])(gamba2)

gamba2=T([0,1,2])([0,0,5])(gamba2)





gambefin=STRUCT([gamba1,gamba2])

//DRAW(gambefin)



//dettaglio

dettaglio=DISK(0.2)(60)

dettaglio1=EXTRUDE([1.5])(dettaglio)

dettaglio2=R([1,2])(PI/2)(dettaglio1)

dettaglio2=T([0,1,2])([0,0,0.75])(dettaglio2)

dettagli=STRUCT([dettaglio1,dettaglio2])

dettagli=T([0,1,2])([0,1.8,0])(dettagli)

dettagli=R([0,1])(PI)(dettagli)


dettagli=R([0,2])(PI/2)(dettagli)

dettagli=T([0,1,2])([-0.8,0,5])(dettagli)

//DRAW(dettagli)






//base

base=CUBOID([7,6,0.3])

base=T([0,1,2])([-4,-3.3,13])(base)

DRAW(STRUCT([gambefin,base,a,dettagli]))









