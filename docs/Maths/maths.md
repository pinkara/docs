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
### <span style="color: rgb(111, 204, 71);">_**Fontion affine**_</span>

une fonction affine est une fonction obtenue par addition et multiplication de la variable par des constantes. Elle peut donc s'écrire sous la forme :<br>
<br>
$f(x)=ax+b$<br>
<br>
a = le coefficient directeur<br>
b= l'ordonnée à l'origine
<br>
<hr>
### <span style="color: rgb(111, 204, 71);">_**fonction linéaire**_</span>

Une fonction linéaire est une fonction qui à tout nombre x associe le nombre <span style="color: rgb(200,108,128);">a</span>x, où <span style="color: rgb(200,108,128);">a</span> est un nombre fixé. On note :<br>
<br>
$f(x)=ax$<br>
<br>
<hr>
### <span style="color: rgb(111, 204, 71);">_**fonctions trigonométriques**_</span>

les fonctions trigonométriques permettent de relier les longueurs des côtés d'un triangle en fonction de la mesure des angles aux sommets. Plus généralement, ces fonctions sont importantes pour étudier les triangles et les polygones, les cercles (on les appelle alors fonctions circulaires) et modéliser des phénomènes périodiques.<br>
<br>
<hr>
**Comme fonctions trigonométriques, il y a :**<br>
<br>
- **(cos)** = cosinus<br>
- **(sin)** = sinus<br>
- **(tan)** = tangente ( à ne pas se tromper à la **tangente** en géométrie )<br>
- **(cot)** = cotangente<br>
- **(csc)** = cosécante<br>
- **(sec)** = sécante<br>
- et **d'autre**
??? question "Comment retenir ?"

    ![Alt text](trigo_mn%C3%A9mo.svg)
    <hr>
    ![Alt text](trigo_mn%C3%A9mo3.svg)
 
??? tip "Toutes les valeurs des fonctions trigonométriques d'un angle θ peuvent être représentées géométriquement."

    ![Alt text](Circle-trig6.svg.png)


??? tip "tableau des propriétés des fonctions trigonométriques"

    ![Alt text](chrome_E9ggsg3jgC.png)

**Représentations graphiques :**

**Sin :**<br>
![Alt text](Sinus.svg.png)

<hr>
**Cos :** <br>
![Alt text](Cosinus.svg.png)
<hr>
**Tan :**<br>
![Alt text](Tangente.svg.png)
<br>
**Animation monctrant la relation entre le cercle unité et les fonctions sinus et cosinus.**<br>
![Alt text](Circle_cos_sin.gif)
  
![Alt text](chrome_J3zUlqV5rI.gif)
<hr>

**identités trigonométriques :**

$\cos ^2 \theta + \sin ^2 \theta = 1$<br>
<br>
$\tan ^2 \theta + 1 = \frac{1}{\cos ^2 \theta }$<br>
<br>
$\cot ^2 \theta + 1 = \frac{1}{\sin ^2 \theta }$<br>
<br>
![Alt text](chrome_4f3o6MxtEJ.png)
<br>
<hr>
<br>
### <span style="color: rgb(111, 204, 71);">_**fonction du second degré**_</span>

Une fonction du second degré ou fonction quadratique est une fonction numérique définie par :<br><br>
$f(x) = ax^2+bx+c$<br><br>
où $a$, $b$ et $c$ sont des nombres réels qui ne dépendent pas de la variable $x$, avec $a \neq 0$
<hr>
**Ex : **$f(x) = x^2 - x -2$<br><br>
![Alt text](Polynomialdeg2.svg.png)<br>
<br>
on appelle **"discriminant"** la notion algébrique intervenant dans la résolution d’une équation du second degré, plus connue sous le nom de delta (Δ).
Le discriminant de f est le nombre réel Δ défini par : <br><br>
$\Delta = b^2 - 4 ⁢ac$ .<br><br>
??? attention "représentation graphique"

    ![Alt text](equasecondd.jpg)

<hr>
 **$\Delta > 0$**   <br><br>Si le discriminant est strictement **positif**, l'équation admet **deux solutions** conjuguées $x_1$ et $x_2$, qui s'écrivent :

$x_1, x_2 = \frac{-b\pm \sqrt{\Delta}}{2a} \in \Bbb R$

<hr>
 **$\Delta = 0$**   <br><br>Si le discriminant est **égal à 0**, l'équation admet **une solution** $x_1$ qui s'écrit :

$x_1 = \frac{-b}{2a} \in \Bbb R$

<hr>
 **$\Delta < 0$**   <br><br>Si le discriminant est strictement **négatif**, l'équation admet **deux solutions** conjuguées $x_1$ et $x_2$, qui s'écrivent :

$x_1, x_2 = \frac{-b\pm i \sqrt{|\Delta|}}{2a} \in \Bbb C$
<br>
<hr>
<br>
### <span style="color: rgb(111, 204, 71);">_**Fonction cubique **_</span>

Une fonction cubique est une fonction de la forme :

$f(x) = ax^3 + bx^2 + cx + d$<br><br>
avec $a \neq 0$<br>
<br>
La formule quadratique avec discriminant réduit :

On considère ici une fonction cubique $f$ définie par $f(x) = ax^3 + bx^2 + cx + d$ dont les coefficients, ainsi que la variable $x$, sont réels.

Les points critiques de $f$ sont les abscisses des points du graphe où la pente de la tangente est nulle, c'est-à-dire les $x$ en lesquels la dérivée de $f$ s'annule :
<br><br>
${\displaystyle 3ax^{2}+2bx+c=0}$.<br><br>
Les solutions de cette équation sont données, en utilisant la formule quadratique avec discriminant réduit :
<br><br>
${\displaystyle x_{\text{critique}}={\frac {-b\pm {\sqrt {\Delta _{0}}}}{3a}}}$.<br>
avec<br>
${\displaystyle \Delta _{0}=b^{2}-3ac}$.<br>
<br>
Le signe de Δ0 détermine le nombre de points critiques et d'extrema locaux de $f$ :<br>
<br><br>
si **$\Delta > 0$** alors $f$ a un maximum local et un minimum local ;<br><br>
si **$\Delta = 0$**, alors le point d'inflexion est le seul point critique ;<br><br>
si **$\Delta < 0$**, alors $f$ n'a pas de point critique.<br><br>
<br>
<hr>

## <span style="color: rgb(200,108,128);">Calculs indiens</span>

## <span style="color: rgb(200,108,128);">Symboles mathématiques ( avec écriture LaTeX )</span>

??? abstract "<span style="color: rgb(111, 204, 71);">_**Ensembles de nombres**_</span>"

    | Symbole      | Description                          | MathJax                          |
    | :---------- | :----------------------------------- | :----------------------------------- |
    | $\Bbb A$       | Nombre algébrique  | `\Bbb A`  |
    | $\Bbb C$      | Nombre complexe | `\Bbb C`  |
    | $\Bbb H$    | Quaternion | `\Bbb H`  |
    | $\Bbb N$    | Entier naturel | `\Bbb N`  |
    | $\Bbb O$    | Octonion | `\Bbb O`  |
    | $\Bbb Q$    | Nombre rationnel | `\Bbb Q`  |
    | $\Bbb R$    | Nombre réel | `\Bbb R`  |
    | $\Bbb S$    | Sédénion | `\Bbb S`  |
    | $\Bbb Z$    | Entier relatif | `\Bbb Z`  |

??? abstract "<span style="color: rgb(111, 204, 71);">_**Intervalles**_</span>"

    | Symbole      | Usage                          | MathJax                          |
    | :---------- | :----------------------------------- | :----------------------------------- |
    | [ ]       | [a,b]  |   |
    | ] [      |]a,b[ |   |
    | ( )    | (a,b) | `[ ]`  |
    |  [ [   | [a,b[ | `( )`  |
    |  [ )   | [a,b) |  |
    |  ] ]   | ]a,b] |  |
    |   ( ]  | (a,b] |   |

??? abstract "<span style="color: rgb(111, 204, 71);">_**Constantes mathématiques**_</span>"

    | Symbole      | Description                          | MathJax                          |
    | :---------- | :----------------------------------- | :----------------------------------- |
    | $\pi$       | pi  | `\pi`  |
    | $\mathrm{e}$      | e | `\mathrm{e}`  |
    | $\phi$    | nombre d'or | `\phi`  |
    | $\varPhi$    | nombre d'or | `\varPhi`  |
    | $\mathrm{i}$    | Unité imaginaire | `\mathrm{i}`  |
    | $\gamma$    | constante d'Euler | `\gamma`  |
    | $\epsilon$    | Permittivité du vide | `\epsilon`  |
    | $\varepsilon$    | Nombre dual | `\varepsilon`  |
    | $\theta$    | Constante de Mills | `\theta`  |
    | $\vartheta$    | Constante de Mills | `\vartheta`  |
    | $\sigma$    | Constante de récurrence quadratique de Somos | `\sigma`  |
    | $\varsigma$    | Constante de récurrence quadratique de Somos | `\varsigma`  |
    | $\kappa$    | Constante gravitationnelle d'Einstein | `\kappa`  |
    | $\lambda$    | Constante de Prouhet-Thue-Morse | `\lambda`  |
    | $\mu$    | Constante de Ramanujan-Soldner | `\mu`  |
    | $\tau$    | Constante de Prouhet-Thue-Morse | `\tau`  |


??? abstract "<span style="color: rgb(111, 204, 71);">_**Nombres complexes**_</span>"

    | Symbole      | Usage                          | Description                          | MathJax                          |
    | :---------- | :----------------------------------- | :----------------------------------- | :----------------------------------- |
    | $\Im$       | $\Im (2+i) = 1$ | nombre complexe  | `\Im`  |
    | $\operatorname{Im}$      | $\operatorname{Im} (2+i) = 1$  | nombre complexe | `\operatorname{Im}`  |
    | $\Re$    | $\Re (2+i) = 1$  | nombre complexe | `\Re`  |
    | $\operatorname{Re}$    | $\operatorname{Re} (2+i) = 1$  | nombre complexe | `\operatorname{Re}`  |
    | $\bar{}$    | $\bar{z}$  | Conjugué | `\bar{}`  |
    | $\bar{\bar{}}$    | $\bar{\bar{z}}$  | Conjugué | `\bar{\bar{}}`  |
    | $\overline{}$    | $\overline{z}$  | Conjugué | `\overline{}`  |
    | $\overline{\overline{}}$    | $\overline{\overline{z}}$  | Conjugué | `\overline{\overline{}}`  |
    | ${}^\ast$    | ${z}^\ast$  | Conjugué | `{}^\ast`  |
    | $\vert      \vert$    | $\vert z \vert$  | Valeur absolue | `\vert`  |
    | $\arg$    | $\arg (z)$  | Coordonnées polaires | `\arg`  |

??? abstract "<span style="color: rgb(111, 204, 71);">_**Opérations arithmétiques élémentaires**_</span>"

    | Symbole      | Usage                          | Description                          | MathJax                          |
    | :---------- | :----------------------------------- | :----------------------------------- | :----------------------------------- |
    | $+$       | $a+b$ | Addition  | `+`  |
    | $-$      | $a-b$  | Soustraction | `-`  |
    | $\cdot$    | $a \cdot b$  | Multiplication | `\cdot`  |
    | $\times$    | $a \times b$  | Multiplication | `\times`  |
    | $\colon$    | $a \colon b$  | Division | `\colon`  |
    | $/$    | $a / b$  | Division | `/`  |
    | $\frac{}{}$    | $\frac{a}{b}$  | Division | `\frac{}{}`  |
    | $\tfrac{}{}$    | $\tfrac{a}{b}$  | Division (**t**extstyle) | `\tfrac{}{}`  |
    | $\dfrac{}{}$    | $\dfrac{a}{b}$  | Division (**d**isplaystyle) | `\dfrac{}{}`  |
    | $\cfrac{}{}$    | $a+\cfrac{1}{a+\cfrac{1}{a+\cdots\vphantom{\cfrac{1}{1}}}}$  | Division (Fraction continue) | `\cfrac{}{}`  |
    | $^{-1}$    | $a^{-1}$  | Inverse | `^{-1}`  |
    | $-$    | $-a$  | Opposé | `-`  |
    | $\pm$    | $\pm a$  | Signe plus ou moins | `\pm`  |
    | $\mp$    | $\mp a$  | Signe plus ou moins | `\mp`  |


