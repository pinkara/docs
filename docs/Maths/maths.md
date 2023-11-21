## <span style="color: rgb(200,108,128);">Aires (formule)</span>
- Carré : $A=c^2$  
  
![Alt text](quadrado.png)

<hr>
- Rectangle : $A=L\times l$

![Alt text](retangulo.png)
<hr>
- Triangle : $A=\frac{b\times h}{2}$

![Alt text](triangulo.png)
<hr>
- Losange : $A=\frac{D \times d}{2}$

![Alt text](losango.png)
<hr>
- Trapèze : $A=\frac{B+b}{2} \times h$
  
![Alt text](trapezio.png)

<hr>

- Polygone régulier : $A=\frac{P}{2}\times a$

![Alt text](pregular.png)

??? note annotate "l'apothème (1)"

    $a=\frac{c}{2\tan(\frac{180}{n})}$      

    n= nombre de côté

    On peut également exprimer la longueur "a" de l'apothème d'un poligone régulier de n côtés en fonction de la mesure du rayon du cercle circonscrit au polygone : $a={r\cos(\frac{180}{n})}$ 

1.  ![Alt text](download.png)

<hr>
- Cercle : $A=\pi r^2$
<br>
<br>
$P=2\pi r$

![Alt text](circulo.png)
<hr>

- Cône (aire latérale) : $A=\pi r \times g$

![Alt text](cone.png)
<hr>

- Sphère : $A= 4\pi r^2$

![Alt text](esfera.png)

##<span style="color: rgb(200,108,128);">Volume et surface (formule)</span>

<span style="color: rgb(200,108,128);">la surface d'un solide est l'aire du patron de celui-ci</span>

- Cube : <br>
$V=c^3$<br>
  $S=6c^2$

![Alt text](cubo.png)

<hr>

- Parallélépipède : <br>
$V=L\times l \times h$ <br>
$S=(2 \times L \times l)+(2 \times L \times h)+(2 \times l \times h)$

![Alt text](paralelipipedo.png)

<hr>

- prisme régulier : <br>
$V=Ab \times h$ <br>
Ab = Aire de la base <br>

![Alt text](prisma.png)
<hr>
- cylindre :<br>
$V=\pi r^2 \times h$ <br>
$S=2\pi r^2 + 2\pi r \times h$

![Alt text](cilindro.png)
<hr>

- Cône (ou pyramide) : <br> <span style="color: rgb(200,108,128);"> le sommet des (pyramides/cônes) sont appellés "apex".</span> <br>
  <br>
$V= \frac{1}{3} Ab \times h$ <br>
<br>
Ab = aire de la base

??? info "Pourquoi c'est $\frac{1}{3} Ab \times h$"

    Volume du cône <br>

    ![Alt text](c%C3%B4ne.image.svg)<br>
    <br>
    $\triangle ABM ~ \triangle AON$ (triangles similaires)<br>
    <br>
    **Si on dit que x = AB, h = AO, k = BM et r = ON :** <br>
    <br>
    $\frac{x}{h}=\frac{k}{r}$ <br>
    <br> $k=\frac{rx}{h}$ <br>
    <br> **Le Volume du Cône = Somme des Volumes de toutes les plaques** <br>
    <br> 
    $$\begin{align}
    {\int dv} & = \int_{0}^{h} \pi k^2 dx \\[2ex]
    {v} & = \pi \int_{0}^{h} (\frac{rx}{h})^2 dx \\[2ex]
    {v} & = \pi \frac{r^2}{h^2} \int_{0}^{h} x^2 dx \\[2ex]    
    {v} & = \frac{\pi r^2}{h^2} \times \frac{1}{3} \left( h^3-0 \right) \\[2ex]
    {v} & = \frac{1}{3} \pi r^2 h
    \end{align}$$

![Alt text](cone-2.png)

<hr>

- sphère : <br>
$V=\frac{4}{3}\pi r^3$<br>
<br>
??? info "Pourquoi c'est $\frac{4}{3}\pi r^3$"


    ![Alt text](Volumedelasphere.png)<br>
    <br>
    La méthode d'Archimède (redécouverte dans le palimpseste portant son nom) consiste à **découper la boule en disques minces**, donc des cylindres, dont on ajoute le volume (assimilé au produit de leur surface par leur épaisseur). En langage moderne, cela revient à **calculer la limite d'une somme de Riemann, et donc à calculer une intégrale définie. **Si l'on considère la variable h allant de **–R** à **R**, **le cylindre correspondant à la hauteur h et d'épaisseur infinitésimale dh a pour rayon rh vérifiant**, d'après le théorème de Pythagore rh2 + h2 = R2 ; comme le volume de ce cylindre est π rh2 dh, on obtient comme volume de la boule :<br>
    <br>


  
    $$\begin{align}
    {V} & = \int_{-r}^{r} \pi(r^2-h^2) \mathrm{d}h \\[2ex]
    & = \left[ \pi(hr^2-\tfrac{1}{3}h^3) \right]_{-r}^{r} \\[2ex]
    & = \pi \left(r^3-\tfrac{1}{3}r^3 \right) - \pi \left(-r^3-\tfrac{1}{3}r^3 \right) \\[2ex]
    & = \tfrac{2}{3} \pi r^3 + \tfrac{2}{3} \pi r^3 \\[2ex]
    {V} & = \tfrac{4}{3} \pi r^3
    \end{align}$$


![Alt text](esfera-1.png)
<hr>

## <span style="color: rgb(200,108,128);">fonctions et équations</span>
<hr>
**définition :**
  Une fonction est un procédé qui permet d'associer à un élément d'un ensemble de départ, un élément unique d'un ensemble d'arrivée. **Voici quelques exemples :**<br>
<br>
![Alt text](16390586815553_p1c8-1.png)
<br>

- $f(x)=0.5x+2$
<br>

- $f(x)=-x+5$
<br>
<br>
  ![Alt text](1200px-FuncionLineal03.svg.png)
<br>
<hr>
Il y a plusieurs fonction en maths :<br>
<br>
<br>
  - fonction exponentielle<br>
  - fonction logarithmique<br>
  - fonctions périodiques<br>
  - fonctions trigonométriques<br>
  etc...<br>

<hr>
<span style="color: rgb(111, 204, 71);">_**Fontion affine**_</span>

une fonction affine est une fonction obtenue par addition et multiplication de la variable par des constantes. Elle peut donc s'écrire sous la forme :<br>
<br>
$f(x)=ax+b$<br>
<br>
a = le coefficient directeur<br>
b= l'ordonnée à l'origine
<br>
<hr>
<span style="color: rgb(111, 204, 71);">_**fonction linéaire**_</span>

Une fonction linéaire est une fonction qui à tout nombre x associe le nombre <span style="color: rgb(200,108,128);">a</span>x, où <span style="color: rgb(200,108,128);">a</span> est un nombre fixé. On note :<br>
<br>
$f(x)=ax$<br>
<br>
<hr>





  









    
