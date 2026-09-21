---
title: >-
  Loss Cones: From Orbital Geometry to Diffusion, Stellar Cusps, and Disk
  Dissipation
description: >-
  A systematic derivation of loss-cone geometry, angular-momentum diffusion,
  capture fluxes, stellar cusps, and dissipative star–disk interactions.
tags:
  - Dynamics
  - Loss cone
  - Stellar dynamics
order: 1
sourceHash: b8504da02df8a817daf9cc1e9942c2a81d98d74097644b680e2da7efdf48369a
translation: AI-assisted English translation
---

# Loss Cones: From Orbital Geometry to Diffusion, Stellar Cusps, and Disk Dissipation

> Following the handwritten notes in *loss cone.pdf*, this article standardizes notation, supplies intermediate steps, and distinguishes exact identities, controlled approximations, and model assumptions. The main setting is a black-hole-dominated Kepler potential, single-mass stars, and nonresonant two-body relaxation. The final sections extend the treatment to two-dimensional energy–angular-momentum evolution and dissipation during disk crossings.

The central question is: **Which orbits lead to removal by the central object, how do stars diffuse onto those orbits, and how do removal and replenishment together alter the stellar distribution?**

The derivation proceeds as follows:

$$
\text{Orbital geometry}
\longrightarrow \mathcal R_{\rm lc}
\longrightarrow (A_{\mathcal R},B_{\mathcal R\mathcal R})
\longrightarrow \text{Angular-momentum diffusion}
\longrightarrow \mathcal F_{\rm lc}
\longrightarrow \overline N(\mathcal E,t)
\longrightarrow n(r,t).
$$

Two related but distinct evolutionary processes are involved: energy relaxation sets the distribution across semimajor axes, whereas angular-momentum relaxation determines how many stars at a given energy enter the loss cone.

Reading guide:

- **Sections 1–3: Background and variables.** From Kepler orbits to loss-cone geometry, then the connections among cusp density, energy distribution, and semimajor-axis distribution.
- **Sections 4–5: Core derivation.** From random velocity kicks to the angular-momentum Fokker–Planck equation, logarithmic distribution, and empty-loss-cone flux.
- **Sections 6–8: Finite periods and capture rates.** Understand $q$, the effective boundary, normalization, and the dependence of capture rate on semimajor axis.
- **Section 9: Sampling and density reconstruction.** Convert analytic distributions into orbital samples and comparable spatial densities.
- **Sections 10–13: Time evolution.** Treat the sloping two-dimensional boundary, one-dimensional sink closure, disk-induced drift, and dissipation-rate scalings.
- **Sections 14–16: Implementation and consistency.** Clarify conservation, boundary handling, and conceptual distinctions required by the notes.

## 1. Notation, distribution functions, and applicability

### 1.1 Use positive binding energy consistently

Let the black hole have mass $M_\bullet$ and each star have mass and radius $m_\star,R_\star$. Neglecting the stellar self-gravity contribution to the orbital potential,

$$
\Phi(r)=-\frac{GM_\bullet}{r},\qquad
\psi(r)\equiv-\Phi(r)=\frac{GM_\bullet}{r}.
$$

The specific mechanical energy $E$ is negative; define positive specific binding energy by

$$
E=\frac{v^2}{2}+\Phi=-\frac{GM_\bullet}{2a},
\qquad
\boxed{\mathcal E\equiv-E=\psi-\frac{v^2}{2}=\frac{GM_\bullet}{2a}>0.}
\tag{1}
$$

Thus, decreasing $a$ means increasing $\mathcal E$. All subsequent energy fluxes are positive toward increasing $\mathcal E$. If $E<0$ is used instead, the signs of derivatives, drifts, and fluxes must all be transformed consistently.

Write specific angular momentum as $J=|\boldsymbol r\times\boldsymbol v|$, corresponding to $L$ in the handwritten notes. Circular orbits at the same energy satisfy

$$
J_c^2(\mathcal E)=GM_\bullet a=\frac{(GM_\bullet)^2}{2\mathcal E}.
$$

Introduce dimensionless angular momentum

$$
\boxed{\mathcal R\equiv\frac{J^2}{J_c^2}=1-e^2,\qquad 0\leq\mathcal R\leq1.}
\tag{2}
$$

Use $r$ for spatial radius, $a$ for semimajor axis, and $\mathcal R$ for the angular-momentum variable, rather than denoting all three by $R$.

In a Kepler potential the radial period equals the orbital period and is independent of $\mathcal R$:

$$
\boxed{P(\mathcal E)=2\pi\sqrt{\frac{a^3}{GM_\bullet}}
=\frac{2\pi GM_\bullet}{(2\mathcal E)^{3/2}}.}
\tag{3}
$$

### 1.2 $f$, $N$, and $\overline N$ are different quantities

Use a number phase-space distribution function $f$ such that

$$
dN_\star=f(\boldsymbol r,\boldsymbol v,t)\,d^3r\,d^3v.
$$

For a spherical, orbit-phase-averaged description,

$$
\boxed{
N(\mathcal E,\mathcal R,t)
=\mathcal J(\mathcal E,\mathcal R)f(\mathcal E,\mathcal R,t),
\qquad
\mathcal J=4\pi^2P J_c^2.
}
\tag{4}
$$

where $N\,d\mathcal E\,d\mathcal R$ is the number of stars in that orbital interval. Thus:

| Quantity | Definition / meaning |
|---|---|
| $f$ | Number of stars per unit six-dimensional phase-space volume |
| $N(\mathcal E,\mathcal R)$ | Number of stars per unit $d\mathcal E\,d\mathcal R$ |
| $\overline N_{\rm out}(\mathcal E)$ | Number of stars outside the loss cone per unit $d\mathcal E$ |
| $\mathcal F_{\rm lc}(\mathcal E)$ | Number removed per unit time per unit $d\mathcal E$, defined as positive |
| $n(r)$ | Number of stars per unit spatial volume |

In particular, throughout this article we define

$$
\boxed{
\overline N_{\rm out}(\mathcal E,t)
=\int_{\mathcal R_{\rm lc}(\mathcal E)}^1N(\mathcal E,\mathcal R,t)\,d\mathcal R.
}
\tag{5}
$$

This is an angular-momentum integral, not an average divided by the interval length. When introducing an effective boundary below, its lower integration limit must not be arbitrarily changed to $\mathcal R_0$.

## 2. Deriving the loss-cone boundary from the periapsis condition

### 2.1 Spatial removal scale

Compare the black hole's tidal acceleration with stellar self-gravity to obtain the tidal-disruption scale:

$$
\frac{GM_\bullet R_\star}{r_t^3}\sim\frac{Gm_\star}{R_\star^2}
\quad\Longrightarrow\quad
r_t\sim R_\star\left(\frac{M_\bullet}{m_\star}\right)^{1/3}.
$$

The precise coefficient depends on stellar structure and the disruption criterion. Denoting an effective direct-capture scale by $r_{\rm cap}$, a Newtonian orbital model can use

$$
r_{\rm lc}=\max(r_t,r_{\rm cap}).
$$

For strongly relativistic capture, use an appropriate critical angular momentum $J_{\rm cap}$ directly, rather than inserting the event-horizon radius into a Newtonian formula. An artificial periapsis cutoff can use the same mathematical boundary, but is not automatically a physical tidal-disruption scale.

### 2.2 Critical angular momentum

An orbit grazing the removal sphere satisfies $r_p=r_{\rm lc}$ and $v_r=0$ at periapsis, hence

$$
-\mathcal E=\frac{J_{\rm lc}^2}{2r_{\rm lc}^2}-\frac{GM_\bullet}{r_{\rm lc}},
$$

giving

$$
\boxed{
J_{\rm lc}^2=2GM_\bullet r_{\rm lc}-2\mathcal E r_{\rm lc}^2
=GM_\bullet\left(2r_{\rm lc}-\frac{r_{\rm lc}^2}{a}\right).
}
\tag{6}
$$

When $a\gg r_{\rm lc}$, the second term is relatively small, so

$$
J_{\rm lc}^2\simeq2GM_\bullet r_{\rm lc}.
$$

Alternatively, starting directly from $r_p=a(1-e)$ gives

$$
e_{\rm lc}=1-\frac{r_{\rm lc}}a,
$$

$$
\boxed{
\mathcal R_{\rm lc}(a)
=1-e_{\rm lc}^2
=2\frac{r_{\rm lc}}a-\left(\frac{r_{\rm lc}}a\right)^2
\simeq\frac{2r_{\rm lc}}a.
}
\tag{7}
$$

The exact expression in equation (7) applies for $a\geq r_{\rm lc}$. If $a<r_{\rm lc}$, every orbit has periapsis inside the removal radius and the usual surviving angular-momentum interval does not exist; the expression must not be extrapolated into that regime.

Loss-cone orbits satisfy

$$
\boxed{\mathcal R<\mathcal R_{\rm lc}\quad\Longleftrightarrow\quad r_p<r_{\rm lc}.}
$$

The right-hand side is a periapsis condition, not the instantaneous spatial-position condition $r<r_{\rm lc}$. A star at large radius may already be on a loss-cone orbit.

### 2.3 The cone in velocity space

At position $r$, let velocity make angle $\theta$ with the radial direction. Then

$$
J=rv\sin\theta.
$$

For small angles,

$$
\theta_{\rm lc}^2\simeq\frac{J_{\rm lc}^2}{r^2v^2}.
$$

In the black-hole-dominated region, taking $v^2\sim GM_\bullet/r$ gives $\theta_{\rm lc}^2\sim r_{\rm lc}/r$. This is only a scaling; the coefficient depends on the velocity adopted. The low-angular-momentum region is conical in velocity space, hence the name loss cone.

## 3. Stellar cusps, energy distributions, and semimajor-axis distributions

This section constructs the background stellar reservoir for the loss-cone calculation. Specifying $n(r)$ alone does not yet specify $N(\mathcal E,\mathcal R)$.

### 3.1 Deriving $n(r)$ from $f(\mathcal E)\propto\mathcal E^p$

First consider an isotropic background

$$
f(\mathcal E)=f_0\mathcal E^p,\qquad p>-1.
$$

Integrating over velocities:

$$
n(r)=4\pi\int_0^{\sqrt{2\psi}}
f_0\left(\psi-\frac{v^2}{2}\right)^p v^2\,dv.
$$

With $x=v^2/(2\psi)$,

$$
v^2dv=\sqrt2\,\psi^{3/2}x^{1/2}dx.
$$

hence

$$
n(r)=4\pi\sqrt2 f_0\psi^{p+3/2}
\int_0^1x^{1/2}(1-x)^pdx
=4\pi\sqrt2 f_0 B\left(\frac32,p+1\right)\psi^{p+3/2}.
$$

Since $\psi\propto r^{-1}$,

$$
\boxed{n(r)\propto r^{-\gamma},\qquad \gamma=p+\frac32.}
\tag{8}
$$

it follows that $p=1/4$ corresponds to

$$
\boxed{f(\mathcal E)\propto\mathcal E^{1/4},\qquad n(r)\propto r^{-7/4}.}
\tag{9}
$$

This requires a Kepler potential, isotropy, and a sufficiently broad power-law range. Finite inner and outer cutoffs modify the density profile near the boundaries.

### 3.2 Why does a relaxed background have exponent $7/4$?

Begin with a scaling argument. The two-body relaxation time satisfies

$$
t_r\sim\frac{v^3}{G^2m_\star^2 n\ln\Lambda}.
$$

For $v\propto r^{-1/2}$ and $n\propto r^{-\gamma}$,

$$
t_r\propto r^{\gamma-3/2}.
$$

The number of stars per logarithmic radius interval is $dN_\star/d\ln r\propto nr^3$, and the binding-energy scale per star is $GM_\bullet m_\star/r$. If the relaxation-mediated energy flow is approximately radius-independent,

$$
\dot E_{\rm heat}\sim
\frac{(nr^3)(GM_\bullet m_\star/r)}{t_r}
\propto r^{7/2-2\gamma}.
$$

setting the exponent to zero gives $\gamma=7/4$.

This physically explains the exponent but does not replace the full steady energy-space Fokker–Planck solution. Nor does it require a large number flux: cusp energy transport, approximately zero number flux in energy space, and finite capture flux in angular-momentum space can coexist under suitable approximations.

### 3.3 From energy distribution to semimajor-axis distribution

For isotropy, $N$ at fixed $\mathcal E$ is independent of $\mathcal R$. In a Kepler potential, equations (3) and (4) imply

$$
\mathcal J(\mathcal E)
=\sqrt2\pi^3(GM_\bullet)^3\mathcal E^{-5/2}.
$$

Integrating over the full angular-momentum interval,

$$
\frac{dN_\star}{d\mathcal E}=\mathcal J f
\propto\mathcal E^{p-5/2}.
$$

using $\mathcal E=GM_\bullet/(2a)$ and the absolute Jacobian

$$
\left|\frac{d\mathcal E}{da}\right|=\frac{GM_\bullet}{2a^2},
$$

gives

$$
\boxed{
\frac{dN_\star}{da}
=\frac{dN_\star}{d\mathcal E}\left|\frac{d\mathcal E}{da}\right|
\propto a^{1/2-p}.
}
\tag{10}
$$

Thus, for $p=1/4$,

$$
\boxed{\frac{dN_\star}{da}\propto a^{1/4},\qquad
\frac{dN_\star}{d\ln a}\propto a^{5/4}.}
$$

Although $4\pi r^2n(r)\propto r^{1/4}$ has the same exponent, it counts stars in spatial shells. Setting $r=a$ is no substitute for the orbital phase-space derivation. The normalizations and boundary effects generally differ.

### 3.4 The thermal eccentricity distribution

An isotropic distribution at fixed energy satisfies $p(\mathcal R\mid a)=1$. Since $\mathcal R=1-e^2$,

$$
p(e\mid a)\,de=p(\mathcal R\mid a)|d\mathcal R|,
\qquad
\boxed{p(e\mid a)=2e,\quad0\leq e<1.}
\tag{11}
$$

A thermal eccentricity distribution is therefore uniform in $e^2$ or $\mathcal R$, not in $e$. Introducing a loss cone further changes the eccentricity distribution of surviving stars.

## 4. From random scattering to the Fokker–Planck equation

### 4.1 How a second-order expansion produces drift and diffusion

Temporarily fix energy, and let $w(y\mid\mathcal R)$ be the transition probability density for an angular-momentum increment $y=\Delta\mathcal R$ during a short time $\Delta t$. Number conservation gives

$$
N(\mathcal R,t+\Delta t)
=\int N(\mathcal R-y,t)w(y\mid\mathcal R-y)\,dy.
$$

Expand the product about $\mathcal R$:

$$
N(\mathcal R-y)w(y\mid\mathcal R-y)
=Nw-y\,\partial_{\mathcal R}(Nw)
+\frac{y^2}{2}\partial_{\mathcal R}^2(Nw)+\cdots.
$$

Integrating over $y$ and using $\int w\,dy=1$ gives

$$
\frac{N(t+\Delta t)-N(t)}{\Delta t}
=-\partial_{\mathcal R}\left(N\frac{\langle\Delta\mathcal R\rangle}{\Delta t}\right)
+\frac12\partial_{\mathcal R}^2
\left(N\frac{\langle(\Delta\mathcal R)^2\rangle}{\Delta t}\right)+\cdots.
$$

Under weak-scattering, Markov, and diffusion approximations, define the moments per unit time

$$
A_{\mathcal R}=\lim_{\Delta t\to0}\frac{\langle\Delta\mathcal R\rangle}{\Delta t},
\qquad
B_{\mathcal R\mathcal R}=\lim_{\Delta t\to0}
\frac{\langle(\Delta\mathcal R)^2\rangle}{\Delta t},
$$

to obtain

$$
\boxed{
\frac{\partial N}{\partial t}
=-\frac{\partial}{\partial\mathcal R}(A_{\mathcal R}N)
+\frac12\frac{\partial^2}{\partial\mathcal R^2}(B_{\mathcal R\mathcal R}N).
}
\tag{12}
$$

Drift here is the first-moment term. It can arise from the geometry of a variable transformation and need not signify an external dissipative force.

### 4.2 The first moment at low angular momentum

For local scattering at fixed $r$, let $\boldsymbol v_t$ be the two-dimensional velocity tangential to the radial direction. Temporarily neglect the effect of energy changes on $J_c$:

$$
\mathcal R=\frac{r^2v_t^2}{J_c^2},
$$

$$
\Delta\mathcal R
=\frac{r^2}{J_c^2}
\left(2\boldsymbol v_t\cdot\Delta\boldsymbol v_t+|\Delta\boldsymbol v_t|^2\right).
$$

At leading order in $\mathcal R\ll1$, tangential kicks are approximately isotropic. Define

$$
B_{v_t}\equiv\lim_{\Delta t\to0}
\frac{\langle|\Delta\boldsymbol v_t|^2\rangle}{\Delta t}.
$$

Neglecting higher-order systematic tangential drift, the linear term averages to zero, so

$$
\boxed{A_{\mathcal R}^{\rm local}\simeq\frac{r^2}{J_c^2}B_{v_t}.}
\tag{13}
$$

Even if $\langle\Delta\boldsymbol v_t\rangle=0$, the squared variable $v_t^2$ has a positive mean increment. This is why the first-order drift cannot simply be deleted.

### 4.3 The second moment and the crucial factor of two

In calculating $(\Delta\mathcal R)^2$, retain only terms whose averages are $O(\Delta t)$:

$$
B_{\mathcal R\mathcal R}^{\rm local}
\simeq\frac{4r^4}{J_c^4}
\lim_{\Delta t\to0}
\frac{\langle(\boldsymbol v_t\cdot\Delta\boldsymbol v_t)^2\rangle}{\Delta t}.
$$

Two-dimensional tangential isotropy makes the variance along either tangential axis half the total variance, so

$$
\langle(\boldsymbol v_t\cdot\Delta\boldsymbol v_t)^2\rangle
=\frac{v_t^2}{2}\langle|\Delta\boldsymbol v_t|^2\rangle.
$$

Substituting $r^2v_t^2/J_c^2=\mathcal R$ gives

$$
\boxed{
B_{\mathcal R\mathcal R}^{\rm local}
\simeq2\mathcal R\frac{r^2}{J_c^2}B_{v_t}
=2\mathcal R A_{\mathcal R}^{\rm local}.
}
\tag{14}
$$

These are leading-order, small-$\mathcal R$ results in a fixed-energy reduction. A full coordinate transformation including energy changes produces additional drift and cross-diffusion terms that cannot be inferred directly from equations (13) and (14).

### 4.4 Orbit averaging and $D(\mathcal E)$

Orbit averaging weights each radius by the time spent there:

$$
\langle X\rangle_{\rm orb}
=\frac1P\oint X\,dt
=\frac2P\int_{r_p}^{r_a}\frac{X(r)}{|v_r|}\,dr.
$$

Define

$$
\boxed{
D(\mathcal E)
\equiv\lim_{\mathcal R\to0}\frac{B_{\mathcal R\mathcal R}^{\rm orb}}{2\mathcal R}
=\lim_{\mathcal R\to0}\frac{2}{P J_c^2}
\int_{r_p}^{r_a}\frac{r^2 B_{v_t}}{|v_r|}\,dr.
}
\tag{15}
$$

Then

$$
A_{\mathcal R}^{\rm orb}\simeq D,\qquad
B_{\mathcal R\mathcal R}^{\rm orb}\simeq2D\mathcal R.
$$

$D$ has dimensions of inverse time and typically satisfies $D\sim t_r^{-1}$; the coefficient depends on orbit averaging and the background distribution.

### 4.5 How drift combines with diffusion

Substitute into equation (12). At fixed energy, $D$ is independent of $\mathcal R$:

$$
\begin{aligned}
\partial_tN
&=-D\partial_{\mathcal R}N
+D\partial_{\mathcal R}^2(\mathcal R N)\\
&=-D\partial_{\mathcal R}N
+D\left(2\partial_{\mathcal R}N+\mathcal R\partial_{\mathcal R}^2N\right)\\
&=D\partial_{\mathcal R}\left(\mathcal R\partial_{\mathcal R}N\right).
\end{aligned}
$$

Therefore

$$
\boxed{\partial_tN=D(\mathcal E)\partial_{\mathcal R}
\left(\mathcal R\partial_{\mathcal R}N\right).}
\tag{16}
$$

Drift has not disappeared: it is included in this conservative form. Deleting the first moment directly would instead introduce an erroneous $D\partial_{\mathcal R}N$.

## 5. Flux, the empty loss cone, and the logarithmic steady state

### 5.1 Fix the flux sign convention first

Write the continuity equation as

$$
\partial_tN=-\partial_{\mathcal R}F_{\mathcal R},
\qquad
\boxed{F_{\mathcal R}=-D\mathcal R\partial_{\mathcal R}N.}
\tag{17}
$$

If $N$ increases with $\mathcal R$, then $F_{\mathcal R}<0$: stars flow toward lower angular momentum. Define the positive loss rate

$$
\boxed{\mathcal F_{\rm lc}=-F_{\mathcal R}(\mathcal R_{\rm lc})>0.}
\tag{18}
$$

### 5.2 The absorbing boundary of an empty loss cone

If stars entering the loss cone reach periapsis and are removed before being scattered out, approximate the boundary by

$$
N(\mathcal R_{\rm lc})=0.
$$

The quasi-steady angular-momentum distribution satisfies

$$
\partial_{\mathcal R}(\mathcal R\partial_{\mathcal R}N)=0,
$$

Successive integrations give

$$
\mathcal R\partial_{\mathcal R}N=C,\qquad
N=C\ln\mathcal R+B.
$$

The absorbing boundary implies $B=-C\ln\mathcal R_{\rm lc}$, hence

$$
N=C\ln\frac{\mathcal R}{\mathcal R_{\rm lc}}.
$$

Normalize using equation (5):

$$
\begin{aligned}
\overline N_{\rm out}
&=C\int_{\mathcal R_{\rm lc}}^1\ln\frac{\mathcal R}{\mathcal R_{\rm lc}}\,d\mathcal R\\
&=C\left[\mathcal R\ln\frac{\mathcal R}{\mathcal R_{\rm lc}}-\mathcal R\right]_{\mathcal R_{\rm lc}}^1\\
&=C\left[\ln\frac1{\mathcal R_{\rm lc}}-1+\mathcal R_{\rm lc}\right].
\end{aligned}
$$

Thus

$$
\boxed{
N(\mathcal R\mid\mathcal E)
=\frac{\overline N_{\rm out}\ln(\mathcal R/\mathcal R_{\rm lc})}
{\ln(1/\mathcal R_{\rm lc})-1+\mathcal R_{\rm lc}}.
}
\tag{19}
$$

This normalization is exact within the adopted logarithmic model. Extending the small-$\mathcal R$ diffusion coefficient all the way to $\mathcal R=1$ remains an approximation.

### 5.3 Empty-loss-cone flux

Since $\partial_{\mathcal R}N=C/\mathcal R$,

$$
\boxed{
\mathcal F_{\rm lc}=DC
=\frac{D\overline N_{\rm out}}
{\ln(1/\mathcal R_{\rm lc})-1+\mathcal R_{\rm lc}}
\simeq\frac{D\overline N_{\rm out}}{\ln(1/\mathcal R_{\rm lc})}.
}
\tag{20}
$$

The last expression requires $\ln(1/\mathcal R_{\rm lc})\gg1$. It means that in one relaxation time, only a fraction of order $1/\ln(1/\mathcal R_{\rm lc})$ of the stars in the energy layer enters the loss cone.

### 5.4 A steady state needs replenishment, or must be interpreted locally as quasi-steady

Equation (19) has a nonzero constant inward flux, requiring replenishment at large angular momentum. In a closed system with $F_{\mathcal R}(1)=0$, no source, and $\partial_tN=0$, constant flux must instead be zero. Together with the absorbing boundary, this leaves only the zero solution.

Distinguish a true steady state maintained by an external stellar reservoir from a local quasi-steady state whose low-angular-momentum shape is nearly logarithmic while total number slowly decreases. A strict nonzero-flux steady state is incompatible with a closed reflecting boundary.

## 6. Empty versus full loss cones: timescales and $q$

### 6.1 Angular momentum can change faster than energy relaxes

Given $B_{\mathcal R\mathcal R}=2D\mathcal R$, the time for $\mathcal R$ to change by its own order of magnitude is approximately

$$
t_{\mathcal R}\sim\frac{\mathcal R^2}{B_{\mathcal R\mathcal R}}
\sim\frac{\mathcal R}{D}\sim\mathcal R t_r,
$$

Definition-dependent order-unity coefficients are omitted. At the loss-cone edge,

$$
t_{\mathcal R,\rm lc}\sim\frac{\mathcal R_{\rm lc}}D\ll t_r.
$$

This explains why the low-angular-momentum distribution may already be quasi-steady even when the energy distribution has not fully relaxed.

### 6.2 Definition and physical meaning

Define

$$
\boxed{q(\mathcal E)\equiv\frac{P(\mathcal E)D(\mathcal E)}{\mathcal R_{\rm lc}(\mathcal E)}.}
\tag{21}
$$

Near the boundary, the variance accumulated over one period is

$$
\langle(\delta\mathcal R)^2\rangle_P
\simeq2D\mathcal R_{\rm lc}P=2q\mathcal R_{\rm lc}^2.
$$

Thus, $q$ measures diffusion over one orbital period relative to the loss-cone width, with the scaling

$$
q\sim\left(\frac{\delta J}{J_{\rm lc}}\right)^2
\sim\frac{P}{t_{\mathcal R,\rm lc}}.
$$

| Regime | Physical picture | Boundary treatment |
|---|---|---|
| $q\ll1$ | Small diffusion per period; entrants are usually removed first | Approximately $N(\mathcal R_{\rm lc})=0$ |
| $q\gg1$ | Repeated boundary crossings in one period; rapid angular-momentum replenishment | Requires a finite-period boundary layer |

A full loss cone does not mean that the black hole continuously swallows all stars; it means that low-angular-momentum occupancy is close to the undepleted distribution.

### 6.3 Full-loss-cone rate and finite-interval normalization

If the isotropic distribution at fixed energy is $N_{\rm iso}$, the loss cone contains $N_{\rm iso}\mathcal R_{\rm lc}\,d\mathcal E$ stars. Removing them once per period gives

$$
\mathcal F_{\rm full}\simeq\frac{N_{\rm iso}\mathcal R_{\rm lc}}P.
$$

Since $\overline N_{\rm out}=N_{\rm iso}(1-\mathcal R_{\rm lc})$, normalization by the population outside the cone gives

$$
\boxed{
\mathcal F_{\rm full}\simeq
\frac{\overline N_{\rm out}}P
\frac{\mathcal R_{\rm lc}}{1-\mathcal R_{\rm lc}}
\simeq\frac{\overline N_{\rm out}\mathcal R_{\rm lc}}P.
}
\tag{22}
$$

The last expression uses the narrow-loss-cone approximation. Since $\mathcal R=J^2/J_c^2$ is already a squared angular momentum, the fraction inside is $\mathcal R_{\rm lc}$ and must not be squared again.

## 7. Effective boundary and a unified flux formula

### 7.1 $\mathcal R_0$ is the extrapolated zero of the outer solution

Finite-period effects allow $N(\mathcal R_{\rm lc})>0$. A common matching method retains the logarithmic exterior form and writes

$$
N(\mathcal R)=C\ln\frac{\mathcal R}{\mathcal R_0},
\qquad
\mathcal R_0<\mathcal R_{\rm lc}.
$$

Define

$$
\alpha(q)\equiv\ln\frac{\mathcal R_{\rm lc}}{\mathcal R_0},
\qquad
\boxed{\mathcal R_0=\mathcal R_{\rm lc}e^{-\alpha(q)}.}
\tag{23}
$$

$\mathcal R_0$ is not a new physical capture radius, nor does it make the logarithmic outer solution the true distribution throughout the cone.

The boundary-layer expression used in the notes is

$$
\boxed{
\alpha(q)=\frac q{\xi(q)},\qquad
\xi(q)=1-4\sum_{m=1}^{\infty}\frac{e^{-j_{0,m}^2q/4}}{j_{0,m}^2},
}
\tag{24}
$$

where $j_{0,m}$ is the $m$th positive zero of $J_0$. This special-function relation comes from an orbital-phase-resolved boundary-layer problem, not from the orbit-averaged equation (16) alone; it is used here as matching input. Compare [equation (28) in Merritt's review](https://arxiv.org/pdf/1307.3268).

### 7.2 Why does $\sqrt q$ appear in the small-$q$ limit?

For $q\to0$, many Bessel modes are required. Since the large-order spacing of $j_{0,m}$ is approximately $\pi$, differentiation of equation (24) gives

$$
\xi'(q)=\sum_{m=1}^{\infty}e^{-j_{0,m}^2q/4}
\simeq\frac1\pi\int_0^\infty e^{-x^2q/4}dx
=\frac1{\sqrt{\pi q}}.
$$

Together with $\xi(0)=0$,

$$
\xi(q)\simeq\frac2{\sqrt\pi}\sqrt q,
\qquad
\alpha(q)\simeq\frac{\sqrt\pi}{2}\sqrt q.
$$

therefore

$$
q\ll1:\quad\mathcal R_0\to\mathcal R_{\rm lc};
\qquad
q\gg1:\quad\xi\to1,\quad\alpha\to q,\quad
\mathcal R_0\simeq\mathcal R_{\rm lc}e^{-q}.
$$

Numerically, store $\alpha$ and $\ln\mathcal R_0=\ln\mathcal R_{\rm lc}-\alpha$ directly at large $q$ to avoid underflow from a tiny exponential. At small $q$, use an asymptotic expression or enough modes to prevent cancellation errors in the $1-$ series.

### 7.3 Keep the physical lower integration limit unchanged

Continue to define the number outside the cone by equation (5). Then

$$
\begin{aligned}
\overline N_{\rm out}
&=C\int_{\mathcal R_{\rm lc}}^1\ln\frac{\mathcal R}{\mathcal R_0}\,d\mathcal R\\
&=C\left[\ln\frac1{\mathcal R_0}-1
-\mathcal R_{\rm lc}\ln\frac{\mathcal R_{\rm lc}}{\mathcal R_0}
+\mathcal R_{\rm lc}\right].
\end{aligned}
$$

Writing

$$
\boxed{
Z(\mathcal E)
=\ln\frac1{\mathcal R_{\rm lc}}-1+\mathcal R_{\rm lc}
+(1-\mathcal R_{\rm lc})\alpha(q).
}
\tag{25}
$$

the distribution normalized outside the cone is

$$
\boxed{
N(\mathcal E,\mathcal R)
=\frac{\overline N_{\rm out}}Z
\left[\ln\frac{\mathcal R}{\mathcal R_{\rm lc}}+\alpha\right],
\quad\mathcal R_{\rm lc}\leq\mathcal R\leq1.
}
\tag{26}
$$

The denominator would be $\ln(1/\mathcal R_0)-1+\mathcal R_0$ only if normalization were redefined over the mathematical interval $[\mathcal R_0,1]$. That differs from equation (5): one cannot mechanically replace every $\mathcal R_{\rm lc}$ with $\mathcal R_0$.

### 7.4 Flux and depletion time

The logarithmic solution has $\mathcal F_{\rm lc}=DC$, so

$$
\boxed{
\mathcal F_{\rm lc}=\frac{D\overline N_{\rm out}}Z,
\qquad
t_{\rm loss}\equiv\frac{\overline N_{\rm out}}{\mathcal F_{\rm lc}}=\frac ZD.
}
\tag{27}
$$

This combines boundary-layer matching with a logarithmic exterior approximation. Retaining finite-interval terms in $Z$ does not extend the overall model beyond its small-loss-cone regime.

The boundary value is

$$
N(\mathcal R_{\rm lc})=\frac{\overline N_{\rm out}\alpha}Z.
$$

Using $D=q\mathcal R_{\rm lc}/P$ and $\alpha=q/\xi$, rewrite it as

$$
\boxed{
\mathcal F_{\rm lc}
=\frac{\xi(q)\mathcal R_{\rm lc}}P N(\mathcal R_{\rm lc}).
}
\tag{28}
$$

The equivalent Robin boundary condition is

$$
\boxed{
N(\mathcal R_{\rm lc})
=\alpha\mathcal R_{\rm lc}
\left.\partial_{\mathcal R}N\right|_{\rm lc}.
}
\tag{29}
$$

### 7.5 Two distinct transition conditions

For a narrow loss cone, retaining only leading terms,

$$
Z\simeq\ln(1/\mathcal R_{\rm lc})+\frac q{\xi(q)}.
$$

relative to the full-cone rate in equation (22),

$$
\boxed{
\frac{\mathcal F_{\rm lc}}{\mathcal F_{\rm full}}
\simeq\frac{q}{\ln(1/\mathcal R_{\rm lc})+q/\xi(q)}.
}
\tag{30}
$$

Thus, $q\sim1$ means that diffusion can cross the loss cone in one period, whereas approaching the full-loss-cone capture rate generally requires $q\gtrsim\ln(1/\mathcal R_{\rm lc})$. These conditions differ when the logarithm is large.

Also, $N(\mathcal R_{\rm lc})/\overline N_{\rm out}=\alpha/Z$ is a boundary distribution value divided by an angular-momentum integral, not the fraction of stars inside the cone. That fraction requires integrating the true interior distribution.

## 8. Semimajor-axis scalings of relaxation and capture flux

### 8.1 Origin of the Coulomb logarithm

Weak gravitational scattering in the impulse approximation gives

$$
\delta v\sim\frac{Gm_\star}{bv},
\qquad
d\Gamma\sim2\pi b\,db\,nv.
$$

hence

$$
\frac{d\langle(\delta v)^2\rangle}{dt}
\sim\int(\delta v)^2d\Gamma
\sim\frac{G^2m_\star^2n}{v}\int_{b_{\min}}^{b_{\max}}\frac{db}{b}.
$$

define

$$
\ln\Lambda=\ln\frac{b_{\max}}{b_{\min}},\qquad
t_r\sim\frac{v^2}{d\langle(\delta v)^2\rangle/dt}
\sim\frac{v^3}{G^2m_\star^2n\ln\Lambda}.
$$

If $b_{\max}\sim r$, $b_{\min}\sim Gm_\star/v^2$, and $v^2\sim GM_\bullet/r$, then $\Lambda\sim M_\bullet/m_\star$. This is an order-of-magnitude estimate, not a universally exact constant prescription.

### 8.2 $q(a)$ in an $7/4$ cusp

In a single-mass scaling regime without boundary effects,

$$
n\propto r^{-7/4}
\quad\Longrightarrow\quad
t_r\propto r^{1/4}.
$$

If orbit averaging preserves the same scaling, $D(a)\propto a^{-1/4}$. Combining this with $P\propto a^{3/2}$ and $\mathcal R_{\rm lc}\simeq2r_{\rm lc}/a$,

$$
\boxed{q(a)\propto a^{9/4}.}
\tag{31}
$$

Small semimajor axes thus tend toward the empty-loss-cone regime; larger ones more easily reach rapid replenishment. This scaling fails near $a\sim r_{\rm lc}$, outside a Kepler potential, or when the background is substantially depleted.

### 8.3 Which semimajor axes contribute the most captures?

To compare event rates per logarithmic semimajor-axis interval, write

$$
\frac{d\dot N_{\rm lc}}{d\ln a}
=a\left|\frac{d\mathcal E}{da}\right|\mathcal F_{\rm lc}
=\mathcal E\mathcal F_{\rm lc}.
$$

For a background not yet substantially depleted, $dN_\star/d\ln a\propto a^{5/4}$. Hence

$$
\left.\frac{d\dot N_{\rm lc}}{d\ln a}\right|_{\rm empty}
\sim\frac{D}{\ln(1/\mathcal R_{\rm lc})}\frac{dN_\star}{d\ln a}
\propto\frac a{\ln[a/(2r_{\rm lc})]},
$$

$$
\left.\frac{d\dot N_{\rm lc}}{d\ln a}\right|_{\rm full}
\sim\frac{\mathcal R_{\rm lc}}P\frac{dN_\star}{d\ln a}
\propto a^{-5/4}.
$$

Between the asymptotic regimes, flux is often largest near the transition. Its peak also depends on boundaries, background normalization, and the actual diffusion coefficients; $q=1$ alone does not locate it precisely.

## 9. From theoretical distributions to orbital sampling and spatial density

### 9.1 Three angular-momentum samples represent different models

At fixed $a$, write $b=\mathcal R_{\rm lc}(a)$. Three common conditional distributions are

$$
p_{\rm iso}(\mathcal R\mid a)=1,\qquad0\leq\mathcal R\leq1;
$$

$$
p_{\rm cut}(\mathcal R\mid a)=\frac1{1-b},\qquad b\leq\mathcal R\leq1;
$$

$$
\boxed{
p_{\rm log}(\mathcal R\mid a)
=\frac{\ln(\mathcal R/b)+\alpha}{Z},\qquad b\leq\mathcal R\leq1.
}
\tag{32}
$$

They represent an original isotropic sample, an isotropic sample conditioned on surviving orbits, and a quasi-steady exterior sample shaped by diffusive replenishment. A hard cutoff does not include logarithmic depletion near the boundary.

The Jacobian gives

$$
p(e\mid a)=2e\,p(1-e^2\mid a),\qquad
0\leq e\leq1-r_{\rm lc}/a.
$$

Deleting loss-cone stars from an original sample also multiplies $dN_\star/da$ by the surviving fraction. Resampling at each $a$ until a fixed number is reached preserves the original energy-layer population. These answer different questions, so the normalization must be stated in advance.

### 9.2 Cumulative distributions for direct sampling

If $dN_\star/da\propto a^{1/4}$, set $u\sim U(0,1)$ within $[a_{\min},a_{\max}]$; then

$$
\boxed{
a=\left[a_{\min}^{5/4}+u(a_{\max}^{5/4}-a_{\min}^{5/4})\right]^{4/5}.
}
\tag{33}
$$

The logarithmic angular-momentum distribution has CDF

$$
\boxed{
G(\mathcal R)
=\frac{\mathcal R\ln(\mathcal R/b)-\mathcal R+b
+\alpha(\mathcal R-b)}Z.
}
\tag{34}
$$

It satisfies $G(b)=0$ and $G(1)=1$ and is monotonic. Solve $G(\mathcal R)=u$ by bisection; the expression using $\alpha$ avoids explicitly evaluating $\mathcal R_0$.

### 9.3 Orbital phases must be sampled uniformly in time

For a spatial snapshot, draw mean anomaly $M\sim U(0,2\pi)$, then solve Kepler's equation

$$
M=u_e-e\sin u_e,\qquad r=a(1-e\cos u_e),
$$

where $u_e$ is eccentric anomaly. Neither true anomaly nor spatial radius should be uniform, because stars spend more time near apoapsis.

Equivalently, the time probability for an orbit within $dr$ is

$$
\boxed{
p(r\mid a,e)\,dr=\frac{2\,dr}{P|v_r|},\qquad
v_r^2=2\left(\frac{GM_\bullet}{r}-\mathcal E\right)-\frac{J^2}{r^2}.
}
\tag{35}
$$

Its support is $a(1-e)\leq r\leq a(1+e)$.

### 9.4 Reconstructing $n(r)$ from $N$

In the spherically averaged sense,

$$
\boxed{
n(r,t)=\frac1{4\pi r^2}
\int d\mathcal E\int d\mathcal R\,
N(\mathcal E,\mathcal R,t)
\frac{2}{P|v_r|}\,\boldsymbol1_{\{r_p\leq r\leq r_a\}}.
}
\tag{36}
$$

A highly eccentric orbit contributes at many spatial radii. Local depletion in $\overline N(\mathcal E,t)$ therefore does not create a one-to-one cutoff at the same location in $n(r,t)$. Before interpreting a density curve, identify whether the energy-layer population, conditional angular-momentum distribution, or orbital-phase sampling has changed.

## 10. The full two-dimensional equation and energy-dependent boundary

### 10.1 Conservative form of the two-dimensional Fokker–Planck equation

Let $x_i=(\mathcal E,\mathcal R)$ and define $A_i=\langle\Delta x_i\rangle/\Delta t$ and $B_{ij}=\langle\Delta x_i\Delta x_j\rangle/\Delta t$. The full equation is

$$
\partial_tN=-\sum_i\partial_i(A_iN)
+\frac12\sum_{i,j}\partial_i\partial_j(B_{ij}N)
=-\partial_{\mathcal E}F_{\mathcal E}-\partial_{\mathcal R}F_{\mathcal R}.
\tag{37}
$$

where

$$
F_i=A_iN-\frac12\sum_j\partial_j(B_{ij}N).
$$

Using $N=\mathcal Jf$, this can also be written as

$$
\boxed{
F_i=-\sum_j\mathscr D_{ij}\partial_jf-\mathscr D_i f,
}
\tag{38}
$$

where

$$
\mathscr D_{ij}=\frac12\mathcal J B_{ij},\qquad
\mathscr D_i=\frac12\sum_j\partial_j(\mathcal J B_{ij})-\mathcal J A_i.
$$

Here $\mathscr D_{ij}$ denotes flux-form coefficients, $B_{ij}$ denotes second moments per unit time, and $D(\mathcal E)$ in Section 4 is a reduced angular-momentum diffusion rate. Do not interchange them. The second-moment definition implies $\mathscr D_{\mathcal E\mathcal R}=\mathscr D_{\mathcal R\mathcal E}$.

### 10.2 The Leibniz term in angular-momentum integration

Write $b(\mathcal E)=\mathcal R_{\rm lc}(\mathcal E)$ and let

$$
\overline F_{\mathcal E}=\int_{b(\mathcal E)}^1F_{\mathcal E}\,d\mathcal R.
$$

Integrate equation (37) over the physical surviving interval, assuming no explicit time dependence in the boundary:

$$
\partial_t\overline N_{\rm out}
=-\int_b^1\partial_{\mathcal E}F_{\mathcal E}\,d\mathcal R
-F_{\mathcal R}(1)+F_{\mathcal R}(b).
$$

The Leibniz rule gives

$$
\partial_{\mathcal E}\overline F_{\mathcal E}
=\int_b^1\partial_{\mathcal E}F_{\mathcal E}\,d\mathcal R
-b'F_{\mathcal E}(b).
$$

Thus, if there is no outflow at the circular-orbit end, $F_{\mathcal R}(1)=0$, then

$$
\boxed{
\partial_t\overline N_{\rm out}
=-\partial_{\mathcal E}\overline F_{\mathcal E}
-\mathcal S_{\rm lc},
\qquad
\mathcal S_{\rm lc}=b'F_{\mathcal E}(b)-F_{\mathcal R}(b).
}
\tag{39}
$$

The total loss rate through the sloping boundary is $\mathcal S_{\rm lc}$. Keeping only $-F_{\mathcal R}(b)$ omits crossings caused by energy drift or diffusion. If $b=b(\mathcal E,t)$, also add $-N(b)\partial_tb$ to the evolution equation's right-hand side.

### 10.3 Boundary slope

Equation (7), together with $a=GM_\bullet/(2\mathcal E)$, gives

$$
b(\mathcal E)
=\frac{4\mathcal E r_{\rm lc}}{GM_\bullet}
-\frac{4\mathcal E^2r_{\rm lc}^2}{(GM_\bullet)^2},
$$

$$
\boxed{
b'(\mathcal E)=\frac{4r_{\rm lc}}{GM_\bullet}
\left(1-\frac{2\mathcal E r_{\rm lc}}{GM_\bullet}\right)
=\frac{4r_{\rm lc}}{GM_\bullet}\left(1-\frac{r_{\rm lc}}a\right).
}
\tag{40}
$$

### 10.4 Effective normal diffusion coefficient at an absorbing boundary

For a strictly absorbing boundary $f(\mathcal E,b(\mathcal E),t)=0$, differentiating along it gives

$$
\boxed{
\left.\partial_{\mathcal E}f\right|_b
=-b'\left.\partial_{\mathcal R}f\right|_b.
}
\tag{41}
$$

At the boundary, $\mathscr D_i f$ vanishes. Substituting equation (41) into equations (38) and (39) yields

$$
\boxed{
\mathcal S_{\rm lc}
=K_\perp\left.\partial_{\mathcal R}f\right|_b,
}
\tag{42}
$$

$$
\boxed{
K_\perp
=\left[
\mathscr D_{\mathcal R\mathcal R}
-b'(\mathscr D_{\mathcal E\mathcal R}+\mathscr D_{\mathcal R\mathcal E})
+(b')^2\mathscr D_{\mathcal E\mathcal E}
\right]_b.
}
\tag{43}
$$

For a symmetric diffusion matrix, the middle term is $-2b'\mathscr D_{\mathcal E\mathcal R}$. This combination is a covariance quadratic form in the direction crossing the boundary; a physical positive-semidefinite diffusion matrix therefore ensures $K_\perp\geq0$.

Equation (41) holds only at the absorbing boundary, not throughout the $\mathcal R$ interval without further assumptions. At a finite-$q$ Robin boundary, $f(b)$ is generally nonzero, so these absorbing-boundary simplifications cannot be reused directly.

## 11. Obtaining the sink in a one-dimensional energy equation

### 11.1 The simplest quasi-steady closure

If the angular-momentum distribution adjusts rapidly to changes in the energy-layer population, and energy–angular-momentum coupling is negligible, equation (27) gives

$$
\boxed{
\partial_t\overline N_{\rm out}
=-\partial_{\mathcal E}\overline F_{\mathcal E}
-\frac{\overline N_{\rm out}}{t_{\rm loss}(\mathcal E)},
\qquad t_{\rm loss}=Z/D.
}
\tag{44}
$$

This is a closure model: $t_{\rm loss}$ is not an arbitrary lifetime but an effective depletion time derived from angular-momentum diffusion, orbital period, and boundary matching.

Neglecting energy flux and holding $t_{\rm loss}$ fixed gives

$$
\overline N_{\rm out}(\mathcal E,t)
=\overline N_{\rm out}(\mathcal E,0)e^{-t/t_{\rm loss}(\mathcal E)}.
$$

This exponential applies only to the closure with fixed background coefficients and no energy-space replenishment. If the stars themselves supply the scattering background, changing density feeds back on $D$, preventing a simple fixed-timescale exponential.

### 11.2 Conditions for the integral depletion time in the notes

If a one-dimensional reduced problem satisfies

$$
\mathcal F=k(\mathcal R)\partial_{\mathcal R}f,
\qquad f(b)=0,
$$

and $\mathcal F$ is approximately constant across the interval, then

$$
f(\mathcal R)=\mathcal F\int_b^{\mathcal R}\frac{d\mathcal R'}{k(\mathcal R')}.
$$

Substituting $\overline N_{\rm out}=\int_b^1\mathcal Jf\,d\mathcal R$ gives

$$
\boxed{
T=\int_b^1\mathcal J(\mathcal E,\mathcal R)
\left[\int_b^{\mathcal R}\frac{d\mathcal R'}{k(\mathcal E,\mathcal R')}\right]d\mathcal R,
\qquad
\mathcal F=\frac{\overline N_{\rm out}}T.
}
\tag{45}
$$

For fixed-energy, small-angular-momentum diffusion in a Kepler potential, $\mathcal J$ is independent of $\mathcal R$ and $k=\mathcal JD\mathcal R$, hence

$$
T=\frac1D\int_b^1\ln(\mathcal R/b)\,d\mathcal R
=\frac{\ln(1/b)-1+b}{D},
$$

in agreement with the empty-loss-cone result.

Introducing the sloping-boundary coordinate $u=\mathcal R-b(\mathcal E)$ gives the corresponding normal flux

$$
F_u=F_{\mathcal R}-b'F_{\mathcal E}.
$$

Only with further assumptions neglecting along-boundary gradients and drift can a similar one-dimensional resistance integral be constructed from the normal diffusion coefficient. **A derivative relation at the boundary alone does not establish a one-dimensional closure across the whole domain.** Retain the two-dimensional equation for strong energy coupling, strong dissipation, or transient evolution.

## 12. Dissipation during stellar disk crossings: from impulses to orbital drift

A disk introduces directionality. We first estimate a single crossing locally, then show how it enters the orbital evolution equation.

### 12.1 Crossing impulse and swept-up column density

Let gas velocity be $\boldsymbol v_g$ and stellar velocity relative to the gas be $\boldsymbol v_{\rm rel}=\boldsymbol v-\boldsymbol v_g$. In a geometric-cross-section drag model,

$$
\boldsymbol F_{\rm drag}
=-C_D A_{\rm eff}\rho_d v_{\rm rel}\boldsymbol v_{\rm rel}.
$$

where $C_D$ is dimensionless and $A_{\rm eff}\simeq\pi R_\star^2$ is one possible choice. Significant gravitational focusing or gaseous wakes require modifications.

If velocity and disk structure change little during a crossing, with vertical crossing speed $v_z$, then

$$
\int\rho_d\,dt\simeq\frac\Sigma{|v_z|}.
$$

Therefore

$$
\boxed{
\Delta\boldsymbol v\simeq-\lambda\boldsymbol v_{\rm rel},\qquad
\lambda=C_D\frac{A_{\rm eff}\Sigma}{m_\star}
\frac{v_{\rm rel}}{|v_z|}.
}
\tag{46}
$$

This requires $\lambda\ll1$, a crossing time shorter than the period, and a well-defined geometry with two discrete crossings. For nearly coplanar embedded orbits, the formal divergence as $|v_z|\to0$ signals approximation failure, not infinite physical drag.

### 12.2 From impulse to energy and angular-momentum changes

Position is approximately fixed during the impulse, so

$$
\Delta E=\boldsymbol v\cdot\Delta\boldsymbol v
+\frac12|\Delta\boldsymbol v|^2,
\qquad
\Delta\mathcal E=-\Delta E,
$$

$$
\Delta\boldsymbol J=\boldsymbol r\times\Delta\boldsymbol v.
$$

To first order,

$$
\Delta\mathcal E\simeq
\lambda\,\boldsymbol v\cdot(\boldsymbol v-\boldsymbol v_g).
$$

Drag dissipates kinetic energy relative to the gas, but the star's own orbital-energy change also depends on gas motion. Thus $\Delta\mathcal E>0$ should not be imposed a priori for every encounter geometry.

Orbit-averaged drift follows by summing the crossings in one period:

$$
\dot{\mathcal E}_{d}=\frac1P\sum_k\Delta\mathcal E_k,
\qquad
\dot{\boldsymbol J}_{d}=\frac1P\sum_k\Delta\boldsymbol J_k.
$$

Since $\mathcal E\propto a^{-1}$,

$$
\boxed{\dot{\mathcal E}_{d}=-\mathcal E\frac{\dot a_d}{a}.}
\tag{47}
$$

and since $\mathcal R=J^2/(GM_\bullet a)$,

$$
\boxed{
\dot{\mathcal R}_{d}
=\mathcal R\left(\frac{1}{J^2}\frac{d(J^2)}{dt}\bigg|_d-\frac{\dot a_d}{a}\right)
=\mathcal R\left(2\frac{\dot J_d}{J}-\frac{\dot a_d}{a}\right),
}
\tag{48}
$$

Here $\dot J_d$ is the rate of change of angular-momentum magnitude, whereas $d(J^2)/dt$ is the derivative of angular momentum squared. The vector form can also be used directly:

$$
\dot{\mathcal R}_{d}
=\frac{2\boldsymbol J\cdot\dot{\boldsymbol J}_d}{GM_\bullet a}
-\mathcal R\frac{\dot a_d}{a}.
$$

Thus, dissipation need not transport stars only toward lower angular momentum. Both $a$ and $J$ change: eccentricity may decrease or, in particular geometries, increase.

### 12.3 The combined relaxation and disk-drift equation

Deterministic disk effects enter as advective fluxes:

$$
\boxed{
\partial_tN
=-\partial_{\mathcal E}
\left(F_{\mathcal E}^{\rm rel}+\dot{\mathcal E}_{d}N\right)
-\partial_{\mathcal R}
\left(F_{\mathcal R}^{\rm rel}+\dot{\mathcal R}_{d}N\right)
-S_{\rm remove}.
}
\tag{49}
$$

With neither boundary outflow nor $S_{\rm remove}$, disk drift itself conserves total stellar number and only redistributes orbits.

Two-dimensional $(\mathcal E,\mathcal R)$ does not fully describe disk effects: impulses also depend on orbital inclination, node locations, and periapsis orientation. These variables must be evolved explicitly, or an averaging prescription must be specified and tested. The reconstructed $n(r)$ is then generally only a spherical average.

### 12.4 Why $2f_v/P$ is not directly a stellar death rate

Let $f_v=|\Delta v|/v$ denote the fractional velocity change per crossing. For two crossings per period,

$$
t_v^{-1}\sim\frac{2f_v}{P}
$$

is an order-of-magnitude velocity-change rate, not a probability rate for removing stars.

If the model tracks only the spherical population not yet captured by the disk, one may separately introduce

$$
S_{\rm remove}=\frac{N}{t_{\rm cap,d}},
$$

However, $t_{\rm cap,d}$ must follow from an explicit capture criterion and orbital evolution. Estimating it as $P/(2f_v)$ is an additional prescription, not an automatic consequence of impulse mechanics. Evolving disk drift explicitly while adding a sink for the same dissipation also requires avoiding double removal.

## 13. Self-gravity-regulated disks: checking dissipation-rate scalings

### 13.1 Deriving $\Sigma$ and $\rho_d$ from $Q$

Let disk cylindrical radius be $\varpi$, with $\Omega^2=GM_\bullet/\varpi^3$ and $h=H/\varpi$. In the thin-disk approximation,

$$
Q=\frac{c_s\Omega}{\pi G\Sigma},\qquad c_s=H\Omega.
$$

Therefore

$$
\boxed{
\Sigma=\frac{H\Omega^2}{\pi GQ}
=\frac{hM_\bullet}{\pi Q\varpi^2},
\qquad
\rho_d\simeq\frac\Sigma{2H}
=\frac{M_\bullet}{2\pi Q\varpi^3}.
}
\tag{50}
$$

Here $\rho_d\simeq\Sigma/(2H)$ uses a simple vertical-thickness estimate; actual vertical structure changes order-unity coefficients.

### 13.2 Radial dependence of velocity impulses and dissipation time

For $A_{\rm eff}=\pi R_\star^2$ and order-unity geometric velocity ratios, equation (46) gives

$$
\boxed{
f_v\sim\frac{C_Dh}{Q}\frac{M_\bullet}{m_\star}
\left(\frac{R_\star}{\varpi}\right)^2
\times\text{geometric factor}.
}
\tag{51}
$$

With $h,Q$, stellar parameters, and geometric factors fixed, and $a$ representing the crossing-radius scale,

$$
f_v\propto a^{-2},\qquad P\propto a^{3/2}.
$$

the velocity-dissipation rate per unit time therefore satisfies

$$
\boxed{t_v^{-1}\sim\frac{2f_v}P\propto a^{-7/2},\qquad t_v\propto a^{7/2}.}
\tag{52}
$$

Remembering only the per-crossing impulse exponent while omitting division by $P$ gives the wrong time-rate scaling. For eccentric orbits, calculate each impulse at its actual crossing radius; $a$ is not a quantitative substitute.

### 13.3 A steady $\alpha_{\rm SS}$ disk and $h(\varpi)$

Use $\alpha_{\rm SS}$ for the viscosity parameter, distinct from $\alpha(q)$ in Section 7. Far from the inner boundary and neglecting its correction,

$$
\dot M=3\pi\nu\Sigma,\qquad
\nu=\alpha_{\rm SS}c_sH=\alpha_{\rm SS}H^2\Omega.
$$

Substituting equation (50),

$$
\dot M=\frac{3\alpha_{\rm SS}H^3\Omega^3}{GQ}
=\frac{3\alpha_{\rm SS}h^3M_\bullet\Omega}{Q}.
$$

therefore

$$
\boxed{
Q=\frac{3\alpha_{\rm SS}h^3M_\bullet\Omega}{\dot M},
\qquad
h=\left(\frac{Q\dot M}{3\alpha_{\rm SS}M_\bullet\Omega}\right)^{1/3}.
}
\tag{53}
$$

If $Q,\dot M,\alpha_{\rm SS}$ is approximately constant in the self-gravity-regulated region, then $h\propto\varpi^{1/2}$. Equation (51) becomes $f_v\propto\varpi^{-3/2}$, corresponding to $t_v^{-1}\propto a^{-3}$; the constant-$h$ model's $a^{-7/2}$ must not be retained.

One continuous piecewise model specifies $h_{\rm in}(\varpi)$ in the inner region, obtains $Q_{\rm in}$ from equation (53), and matches to an outer region with $Q=Q_{\rm sg}$ at $Q_{\rm in}(\varpi_{\rm sg})=Q_{\rm sg}$. Changing the inner and outer viscosity parameters requires rechecking continuity of $h$ and $\Sigma$ at the join.

If effective temperature is estimated from local viscous radiation,

$$
\sigma_{\rm SB}T_{\rm eff}^4
=\frac{3GM_\bullet\dot M}{8\pi\varpi^3}
\left(1-\sqrt{\frac{\varpi_{\rm in}}\varpi}\right).
$$

$T_{\rm eff}$ is not the midplane temperature that directly sets $c_s$. Inferring disk thickness from it requires radiative-transfer and vertical-structure models.

### 13.4 Competition with relaxation

In a constant-$h,Q$ scaling model, $t_v\propto a^{7/2}$, while an undepleted cusp has $t_r\propto a^{1/4}$, so

$$
\frac{t_v}{t_r}\propto a^{13/4}.
$$

Disk effects may grow rapidly relative to two-body relaxation in the inner region. To determine depletion, compare transport or capture times for the same degree of freedom: energy drift versus energy replenishment, and angular-momentum or inclination changes versus their corresponding relaxation. Comparing a velocity-change time with $t_r$ only gives an initial indication.

## 14. Numerical implementation: consistent equations, boundaries, and conservation

### 14.1 Finite-volume update

On a $(\mathcal E_i,\mathcal R_j)$ grid, if $N_{ij}$ is the cell-averaged coordinate-space number density, then

$$
\frac{dN_{ij}}{dt}
=-\frac{F_{\mathcal E,i+1/2,j}-F_{\mathcal E,i-1/2,j}}{\Delta\mathcal E_i}
-\frac{F_{\mathcal R,i,j+1/2}-F_{\mathcal R,i,j-1/2}}{\Delta\mathcal R_j}
-S_{ij}.
\tag{54}
$$

Use the upwind state for disk-drift fluxes. For example, at an energy interface,

$$
F_{\mathcal E}^{d}=\dot{\mathcal E}_{d}
\begin{cases}
N_{\rm left},&\dot{\mathcal E}_{d}>0,\\
N_{\rm right},&\dot{\mathcal E}_{d}<0.
\end{cases}
$$

Note that $\dot{\mathcal E}>0$ means more tightly bound orbits, or smaller $a$. Changing the grid to $a$ or $\ln a$ requires consistent transformations of directions, cell volumes, and the distribution-function Jacobian.

### 14.2 The advection CFL condition alone is insufficient

A common explicit advection restriction is

$$
\Delta t\lesssim C_{\rm CFL}
\min\left(\frac{\Delta\mathcal E}{|\dot{\mathcal E}_{d}|},
\frac{\Delta\mathcal R}{|\dot{\mathcal R}_{d}|}\right).
$$

A combined multidimensional update must account for total outflow in both directions. Explicit diffusion also requires a restriction of the form

$$
\Delta t\lesssim C_{\rm diff}
\min\left(\frac{\Delta\mathcal E^2}{B_{\mathcal E\mathcal E}},
\frac{\Delta\mathcal R^2}{B_{\mathcal R\mathcal R}}
\right)
$$

with numerical constants and cross-diffusion constraints determined by the discretization. An explicit sink must not remove more stars in one step than a cell contains.

### 14.3 Use one consistent loss-cone removal mechanism

Possible descriptions are:

1. **Two-dimensional exterior domain:** remove stars through an absorbing or finite-period matched boundary, counting flux through the physical boundary.
2. **Domain including the cone:** remove stars inside it through a mechanism compatible with orbital phase or period, with diffusive replenishment.
3. **One-dimensional energy closure:** do not resolve angular momentum explicitly; use $\overline N_{\rm out}/t_{\rm loss}$ as a sink.

Applying both a two-dimensional absorbing flux and a whole-energy-layer sink for the same loss double-counts removal. A sloping boundary requires the normal flux in equation (39), not only accumulated angular-momentum-direction flux on a rectangular grid.

### 14.4 Physically meaningful checks

| Check | Required result |
|---|---|
| Orbital boundary | $1-e^2$ calculated from $e=1-r_{\rm lc}/a$ agrees with equation (7) |
| Angular-momentum normalization | Equation (32) integrates to unity over the physical surviving interval |
| Empty loss cone | As $q\to0$, $N(b)\to0$ and the flux approaches equation (20) |
| Full loss cone | As $q\to\infty$, the exterior distribution becomes uniform and the flux approaches equation (22) |
| Pure disk drift without absorption | Total stellar number is conserved without outer-boundary outflow |
| Total two-dimensional conservation | Stellar-number change equals net boundary flux plus volume sources and sinks |
| Reference cusp | Recover $n\propto r^{-7/4}$ in a scaling interval far from sampling cutoffs |
| Coordinate transformation | $dN/da=(dN/d\mathcal E)|d\mathcal E/da|$, with unchanged integrated total number |
| Diffusion matrix | Symmetric, positive semidefinite, and yielding nonnegative $K_\perp$ |

An inner density decline only shows that some orbits contribute less to that spatial region. Attributing it to the loss cone, disk capture, or energy migration requires checking each process's flux, total number, and boundary budget.

## 15. Essential distinctions in interpreting the notes

| Easily confused notation or interpretation | Treatment adopted here |
|---|---|
| $E$ alternately denotes negative mechanical energy and positive binding energy | Use $\mathcal E=-E>0$ throughout |
| $R$ denotes both spatial radius and an angular-momentum variable | Use $r$ or $\varpi$ for space and $\mathcal R$ for angular momentum |
| Directly treating $\rho(r)4\pi r^2dr$ as the semimajor-axis distribution | Derive $dN/da$ from $f$, phase-space volume, and the energy Jacobian |
| Assuming zero-mean velocity kicks imply no drift | A squared variable has a nonzero first moment, as shown in equation (13) |
| Treating $\mathcal R<\mathcal R_{\rm lc}$ as equivalent to the instantaneous condition $r<r_{\rm lc}$ | It means periapsis enters the removal region |
| Substituting an effective zero while retaining the original normalization definition | Keep the physical integration limit and rederive $Z$ in equation (25) |
| Interpreting $N(b)/\overline N_{\rm out}$ as the fraction of stars inside the cone | It is only a boundary-value-to-integral ratio; the interior fraction requires a separate integral |
| Assuming $q\sim1$ means the flux has fully reached the full-cone value | Flux saturation also depends on $\ln(1/b)$ |
| Combining a strict logarithmic steady state with a closed reflecting outer boundary | Specify external replenishment or adopt a local quasi-steady interpretation |
| Ignoring the energy dependence of the lower limit when integrating the two-dimensional FP equation | Retain $b'F_{\mathcal E}$ and calculate the boundary-normal flux |
| Using the absorbing-boundary derivative relation to eliminate energy gradients everywhere | Use it only at the boundary; an interior closure needs additional assumptions |
| Turning disk-crossing velocity damping directly into a stellar-number sink | Treat it first as orbital drift; add a sink only for explicit removal from the tracked population |
| Interpreting differences between static samples as time evolution | Distinguish conditional-distribution changes, reduced stellar number, and time evolution |

## 16. Connecting all the formulas

Given $M_\bullet,m_\star,r_{\rm lc}$ and background $f$, calculate $\mathcal R_{\rm lc}$ from orbital geometry, $D$ from two-body scattering and orbit averaging, then $q=PD/\mathcal R_{\rm lc}$. Boundary matching gives $\alpha(q)$, exterior normalization gives $Z$, and finally

$$
\boxed{
\mathcal F_{\rm lc}(\mathcal E,t)
=\frac{D(\mathcal E,t)}{Z(\mathcal E,t)}\overline N_{\rm out}(\mathcal E,t).
}
$$

This can enter a one-dimensional energy equation or serve as a limiting check on a two-dimensional calculation. With disk dissipation, first compute $\dot{\mathcal E}_d$, $\dot{\mathcal R}_d$, and any necessary inclination evolution from actual crossing impulses, then evolve the distribution together with relaxation fluxes. Finally, weight by orbital residence times to convert $N(\mathcal E,\mathcal R,t)$ into spatial density.

The cusp background supplies the stellar reservoir; relaxation transports energy and angular momentum; the loss cone defines central absorption; and disk dissipation adds directed orbital evolution. Each has its own variables, timescales, and conservation relations. Making these connections explicit allows a consistent account of central-density maintenance, depletion, or rebuilding.

## Appendix: Correspondence with the original notes and references

The main derivations come from *loss cone.pdf*, reordered by physical dependency. Exploratory sketches and parameter experiments in those notes are not treated as verified results.

| Original PDF pages | Location here |
|---|---|
| 1–2、5–9 | Sections 1–2 and 4–7: orbital boundaries, random scattering, angular-momentum diffusion, and loss flux |
| 3–4 | Sections 3 and 9: cusp background, thermal eccentricities, hard-cutoff and logarithmic sampling |
| 10–12 | Sections 3, 6–8, and 11: normalization, timescales, $q$, and relaxation coefficients |
| 13–15 | Sections 10–11: two-dimensional flux, sloping boundary, and conditions for one-dimensional closure |
| 16–19 | Sections 12–13: disk-crossing dissipation, self-gravitating disk structure, and radial scalings |
| 20–21 | Sections 12 and 14–15: disk drift, finite-volume schemes, and diagnostics |
| 22 | Blank pages |

External check for the special-function boundary matching: David Merritt, *Loss Cone Dynamics* (2013), §2.2, especially equation (28). [Full paper](https://arxiv.org/pdf/1307.3268). Physical-interval normalization, Jacobians, boundary-normal flux, and dissipation-rate scalings are derived explicitly above, subject to the stated definitions and assumptions.
