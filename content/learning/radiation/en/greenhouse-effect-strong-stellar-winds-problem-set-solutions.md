---
title: "The Greenhouse Effect and Strong Stellar Winds: Detailed Problem-Set Solutions"
description: "Complete solutions on the greenhouse effect and Wolf–Rayet winds, including grey-atmosphere optical depths, free–free radiation, mass-loss scaling, clumping bias, effective emitting radius, and line profiles."
date: "2026-10-14"
tags: ["AST1440","Greenhouse effect","Grey atmosphere","Wolf-Rayet stars","Free-free radiation","Problem set"]
order: 10
draft: false
sourceHash: a92b37c0c7d461f01c1c8d09481053c6dac83efd912539dd12bbde9ce116326a
translation: "AI-assisted English translation"
---

# The Greenhouse Effect and Strong Stellar Winds: Detailed Problem-Set Solutions

## I. Overview of the Required Concepts

### 1. The Greenhouse Effect and a Grey Atmosphere

- Radiative equilibrium: at equilibrium, the total power absorbed by a system equals the total power it radiates outward.
- Albedo $A$: the fraction of incident radiation that is reflected, so the absorbed fraction is $1-A$.
- The Stefan–Boltzmann law:
  $$
  F=\sigma T^4.
  $$
- A planet intercepts sunlight over its cross-sectional area $\pi R^2$, but emits thermal radiation over its entire surface area $4\pi R^2$.
- One-layer greenhouse model: the atmosphere is opaque to infrared radiation from the ground and emits one equal share upward and another downward.
- Grey atmosphere: the opacity is approximated as frequency independent, $\kappa_\nu\simeq \kappa$, so the atmosphere can be described by a single infrared optical depth $\tau$.
- Two-stream approximation: the full angular distribution of the radiation field is reduced to one upward and one downward radiative stream.
- Wien’s-law intuition: as temperature rises, the thermal-emission peak moves to shorter wavelengths,
  $$
  \lambda_{\rm peak}\propto \frac{1}{T}.
  $$
- Limits of extrapolation: at sufficiently high temperature, assumptions such as fixed grey opacity, fixed composition, and pure radiative equilibrium can fail.

### 2. Wolf–Rayet Winds and Free–Free Radiation

- Mass conservation in a steady, spherically symmetric stellar wind:
  $$
  \rho(r)=\frac{\dot M}{4\pi r^2 v_w}.
  $$
- For fixed composition and ionization state:
  $$
  n_e\propto \rho,\qquad n_i\propto \rho.
  $$
- Free–free absorption for $h\nu/kT\ll1$:
  $$
  \alpha_\nu^{\rm ff}\propto n_e n_i T^{-3/2}\nu^{-2}.
  $$
- Because $n_e n_i\propto \rho^2$, in the stellar wind
  $$
  \alpha_\nu\propto r^{-4}.
  $$
- Optical depth:
  $$
  \tau_\nu=\int \alpha_\nu\,ds.
  $$
- Thermal-emission source function:
  $$
  S_\nu=B_\nu(T).
  $$
- Rayleigh–Jeans approximation:
  $$
  B_\nu(T)\propto \nu^2T.
  $$
- Relation between specific intensity and flux for a distant unresolved source:
  $$
  F_\nu=\int I_\nu\,d\Omega
  =\frac{2\pi}{d^2}\int_0^\infty I_\nu(p)\,p\,dp.
  $$
- Formal radiative-transfer solution with no incident background and a constant source function:
  $$
  I_\nu=B_\nu(1-e^{-\tau}).
  $$
- The key average for a clumped wind:
  $$
  \langle \rho^2\rangle>\langle\rho\rangle^2.
  $$
- In line formation, a narrow line profile can be approximated by a delta function, with the Doppler condition selecting isovelocity surfaces.

## II. Full Problem Statement

### 1. The Greenhouse Effect and Global Warming

One of the major concerns of our time is global warming. Here we make highly simplified estimates of the greenhouse effect to develop order-of-magnitude intuition. On average, Earth must emit as much flux as it receives from the Sun. Its actual surface temperature is nevertheless higher than this estimate because the atmosphere is optically thin to the incoming, primarily optical sunlight—at least to the part not reflected by ice and clouds—but optically thick to the primarily infrared radiation emitted by Earth into space.

1. Show that without an atmosphere, Earth’s equilibrium temperature is
   $$
   T_p\simeq255\,{\rm K}.
   $$
   How does this compare with Earth’s actual mean surface temperature?

2. As a very crude approximation, model the atmosphere as a single opaque layer of uniform temperature. It receives heat from the ground at temperature $T_g$ and radiates equal amounts of energy downward to the ground and upward to space. Find $T_g$.

3. Now treat the atmosphere as grey. The two-stream approximation gives
   $$
   T^4=T_p^4\left[1+\frac{3}{4}\left(\tau-\frac{2}{3}\right)\right].
   $$
   You do not need to derive this expression; a qualitative understanding is sufficient.

   - What is $\tau$ for Earth?
   - What would $\tau$ be for Venus?
   - Can the surface temperature be made arbitrarily high? If not, which assumption fails?
   - Earth’s surface temperature has risen by about $1.5^\circ{\rm C}$ since preindustrial times. Can $\mathrm{CO_2}$ be the dominant source of opacity? If not, what is the dominant source likely to be?

### 2. Wolf–Rayet Stellar Winds

In hot stellar winds, free–free absorption is the dominant continuum opacity. Its dependencies are discussed in RL §5.3. For this problem set, use the fact that Wolf–Rayet stars are hot, about $20000\,{\rm K}$, while the radiation of interest is in the near-infrared at wavelengths of a few microns, so
$$
h\nu/kT\ll1.
$$

1. Show that for a stellar wind with mass-loss rate $\dot M$ and constant wind speed $v_w$, the radius at which the radial optical depth from that radius to infinity equals unity obeys
   $$
   R_1\propto \nu^{-2/3}\left(\frac{\dot M}{v_w}\right)^{2/3}T^{-1/2}.
   $$

2. How does the flux $F_\nu$ received at Earth scale? In principle, as pointed out by Wright & Barlow (1975), if the constants are known one can estimate $\dot M$ from $F_\nu$, the distance, and the wind speed. How would you estimate the wind speed? Can you obtain a result that is insensitive to $T$? If the stellar wind is clumped—that is, if there are substantial density fluctuations about the mean—would this estimate of $\dot M$ be too high, correct, or too low?

3. Calculate $F_\nu$ by integrating the radiative-transfer equation, continuing to assume thermal emission. It is most convenient to use $R_1$ as the unit of length. Ignore occultation by the star itself, meaning assume
   $$
   R_1\gg R_{\rm WR}.
   $$
   You may use the integral
   $$
   \int_0^\infty y\left(1-\exp(-1/y^3)\right)dy
   =
   -\frac{1}{3}\Gamma\left(-\frac{2}{3}\right)
   =
   \frac{1}{2}\Gamma\left(\frac{1}{3}\right)
   \simeq1.34.
   $$
   Define an effective radius $R_{\rm eff}$ by
   $$
   \left(\frac{R_{\rm eff}}{d}\right)^2\pi B_\nu=F_\nu.
   $$
   Find $R_{\rm eff}$ in units of $R_1$. What value of $\tau$ does this correspond to?

4. Hillier et al. (1983) showed that line profiles can be calculated by using the fact that the line absorption coefficient, like free–free absorption, scales as $n^2$. This is expected for a recombination process because it depends on the product of electron and ion densities, just as free–free emission does. Integrate the radiative-transfer equation again, writing
   $$
   \alpha_{\rm line}(\nu)=\alpha_0(n)\phi(\nu-\nu_0),
   $$
   and use the fact that the width of $\phi(\Delta\nu)$ is much smaller than $v_w/c$. Find the observed line profile. Does it lie between the completely optically thin and completely optically thick cases discussed in class? Does it depend on the relative line strength? For definiteness, define the relative strength as
   $$
   \tau_{\rm line}(v=0)/\tau_{\rm cont}.
   $$

## III. Solutions

### 1.1 Earth’s Equilibrium Temperature Without an Atmosphere

The solar power absorbed by Earth is
$$
P_{\rm abs}=(1-A)F_\odot\pi R_\oplus^2.
$$

Without an atmosphere, Earth approximately radiates as a blackbody over its entire surface:
$$
P_{\rm emit}=4\pi R_\oplus^2\sigma T_p^4.
$$

Radiative equilibrium requires
$$
(1-A)F_\odot\pi R_\oplus^2=4\pi R_\oplus^2\sigma T_p^4.
$$

Therefore
$$
T_p=\left[\frac{(1-A)F_\odot}{4\sigma}\right]^{1/4}.
$$

Using
$$
A\simeq0.30,\qquad F_\odot\simeq1361\,{\rm W\,m^{-2}},
$$
gives
$$
T_p\simeq255\,{\rm K}.
$$

Earth’s actual mean surface temperature is approximately
$$
T_{\rm surf}\simeq288\,{\rm K},
$$
which is higher than the no-atmosphere equilibrium temperature by about
$$
288-255\simeq33\,{\rm K}.
$$

This is the greenhouse warming in the simplified model.

### 1.2 A Single Opaque Atmospheric Layer

Let the atmospheric temperature be $T_a$ and the ground temperature be $T_g$. The flux emitted to space by the entire Earth–atmosphere system must still equal the absorbed solar flux:
$$
\sigma T_a^4=\sigma T_p^4.
$$

The single atmospheric layer emits the same amount upward and downward, so its total emission is
$$
2\sigma T_a^4.
$$

The atmosphere absorbs from the ground
$$
\sigma T_g^4.
$$

Atmospheric energy balance gives
$$
\sigma T_g^4=2\sigma T_a^4.
$$

Because $T_a=T_p$,
$$
T_g^4=2T_p^4,
$$
or
$$
T_g=2^{1/4}T_p.
$$

Taking $T_p\simeq255\,{\rm K}$ gives
$$
T_g\simeq303\,{\rm K}.
$$

### 1.3 A Grey Atmosphere

The problem gives
$$
T^4=T_p^4\left[1+\frac{3}{4}\left(\tau-\frac{2}{3}\right)\right].
$$

which can be rearranged as
$$
\left(\frac{T}{T_p}\right)^4
=
\frac{1}{2}+\frac{3}{4}\tau.
$$

Therefore
$$
\tau=
\frac{4}{3}\left[\left(\frac{T}{T_p}\right)^4-\frac{1}{2}\right].
$$

#### Earth’s $\tau$

Using
$$
T_{\oplus}\simeq288\,{\rm K},\qquad T_p\simeq255\,{\rm K},
$$
gives
$$
\tau_\oplus
=
\frac{4}{3}\left[\left(\frac{288}{255}\right)^4-\frac{1}{2}\right]
\simeq1.5.
$$

Thus Earth’s effective infrared optical depth in this grey-atmosphere model is approximately
$$
\tau_\oplus\simeq1.5.
$$

#### Venus’s $\tau$

The no-atmosphere effective temperature of Venus is set by its absorbed solar radiation:
$$
T_{p,V}
=
\left[
\frac{(1-A_V)F_{\odot,V}}{4\sigma}
\right]^{1/4}.
$$

Using
$$
F_{\odot,V}=F_{\odot,\oplus}\left(\frac{1\,{\rm AU}}{0.723\,{\rm AU}}\right)^2,
$$
and taking
$$
A_V\simeq0.75,
$$
gives
$$
T_{p,V}\simeq232\,{\rm K}.
$$

Take the surface temperature of Venus to be
$$
T_{V,\rm surf}\simeq735\,{\rm K}.
$$

Then
$$
\tau_V
=
\frac{4}{3}\left[\left(\frac{735}{231.6}\right)^4-\frac{1}{2}\right]
\simeq1.35\times10^2.
$$

that is,
$$
\tau_V\simeq135.
$$

In this simplified model, the atmosphere of Venus is therefore extremely optically thick to infrared radiation.

#### Can the Surface Temperature Become Arbitrarily High?

Taken literally, the formula gives, as $\tau\to\infty$,
$$
T^4\propto\tau,
$$
which appears to allow the surface temperature to grow without bound.

This is only a mathematical extrapolation. In reality, as the temperature rises, Wien’s law shifts the thermal-emission peak to shorter wavelengths:
$$
\lambda_{\rm peak}\propto\frac{1}{T}.
$$

The atmospheric absorption at different wavelengths can then no longer be described by one grey opacity. In other words, the assumptions of a grey atmosphere, fixed effective optical depth, and fixed opacity fail. At still higher temperatures, changes in atmospheric composition, molecular dissociation, ionization, convection, and chemical processes also invalidate this simple model.

This formula therefore cannot physically drive the surface temperature arbitrarily high; the grey-atmosphere and fixed-opacity assumptions fail first.

#### Is $\mathrm{CO_2}$ the Dominant Source of Opacity?

The preindustrial temperature was approximately
$$
T_{\rm pre}\simeq286.5\,{\rm K},
$$
and the present temperature is approximately
$$
T_{\rm now}\simeq288\,{\rm K}.
$$

Inverting the same expression gives
$$
\tau_{\rm pre}
=
\frac{4}{3}\left[\left(\frac{286.5}{255}\right)^4-\frac{1}{2}\right]
\simeq1.46,
$$
whereas
$$
\tau_{\rm now}\simeq1.50.
$$

Thus the modern warming of $1.5\,{\rm K}$ corresponds to a change in effective optical depth of only
$$
\Delta\tau\simeq0.04.
$$

This is much smaller than Earth’s total effective infrared optical depth,
$$
\tau\sim1.5.
$$

Thus $\mathrm{CO_2}$ can be an important driver of modern warming, but it cannot be the dominant contributor to Earth’s total infrared opacity. Water vapor is more likely the dominant infrared opacity source, and clouds are also important.

### 2.1 Scaling of $R_1$

For $h\nu/kT\ll1$, the free–free absorption coefficient obeys
$$
\alpha_\nu^{\rm ff}
\propto
n_e n_i T^{-3/2}\nu^{-2}.
$$

For fixed composition and ionization state,
$$
n_e\propto\rho,\qquad n_i\propto\rho,
$$
so
$$
\alpha_\nu^{\rm ff}\propto\rho^2T^{-3/2}\nu^{-2}.
$$

A steady, spherically symmetric wind with constant speed satisfies
$$
\rho(r)=\frac{\dot M}{4\pi r^2v_w}.
$$

Therefore
$$
\rho^2\propto
\left(\frac{\dot M}{v_w}\right)^2r^{-4}.
$$

and hence
$$
\alpha_\nu^{\rm ff}
\propto
\left(\frac{\dot M}{v_w}\right)^2
T^{-3/2}\nu^{-2}r^{-4}.
$$

The radial optical depth is
$$
\tau_\nu(r)=\int_r^\infty \alpha_\nu^{\rm ff}(r')\,dr'.
$$

Because
$$
\int_r^\infty r'^{-4}\,dr'\propto r^{-3},
$$
we obtain
$$
\tau_\nu(r)\propto
\left(\frac{\dot M}{v_w}\right)^2
T^{-3/2}\nu^{-2}r^{-3}.
$$

By definition, $R_1$ satisfies $\tau_\nu(R_1)=1$, so
$$
1\propto
\left(\frac{\dot M}{v_w}\right)^2
T^{-3/2}\nu^{-2}R_1^{-3}.
$$

Solving gives
$$
R_1^3
\propto
\left(\frac{\dot M}{v_w}\right)^2
T^{-3/2}\nu^{-2}.
$$

Therefore
$$
R_1
\propto
\nu^{-2/3}
\left(\frac{\dot M}{v_w}\right)^{2/3}
T^{-1/2}.
$$

This is the requested result.

### 2.2 Scaling of $F_\nu$, Temperature Cancellation, and Clumping

To order of magnitude, $R_1$ is the effective emitting radius of the near-infrared continuum. The surface brightness of the optically thick region is approximately
$$
B_\nu(T).
$$

The observed flux therefore scales as
$$
F_\nu\propto B_\nu(T)\frac{R_1^2}{d^2}.
$$

In the Rayleigh–Jeans limit,
$$
B_\nu(T)\propto\nu^2T.
$$

and
$$
R_1^2
\propto
\nu^{-4/3}
\left(\frac{\dot M}{v_w}\right)^{4/3}
T^{-1}.
$$

Therefore
$$
F_\nu
\propto
\nu^2T
\cdot
\nu^{-4/3}
\left(\frac{\dot M}{v_w}\right)^{4/3}
T^{-1}
d^{-2}.
$$

Collecting the factors gives
$$
F_\nu
\propto
\nu^{2/3}
\left(\frac{\dot M}{v_w}\right)^{4/3}
d^{-2}.
$$

The temperature factor $T$ cancels. Thus, in principle, if the distance $d$, wind speed $v_w$, and constants are known, $\dot M$ can be estimated from $F_\nu$. The wind speed is usually estimated from line widths, the terminal velocity, or a P Cygni profile.

If the wind is clumped, free–free absorption and emission depend on
$$
\rho^2.
$$

With density fluctuations,
$$
\langle\rho^2\rangle>\langle\rho\rangle^2.
$$

At the same true $\dot M$, a clumped wind therefore produces stronger free–free opacity and emission than a smooth wind, leading to larger $R_1$ and $F_\nu$.

If this enhanced $F_\nu$ is interpreted with a smooth-wind model, the enhancement is mistaken for a larger mean density. The mass-loss rate inferred from the smooth model therefore overestimates the true value:
$$
\dot M_{\rm inferred,smooth}>\dot M_{\rm true}.
$$

### 2.3 Integrating the Radiative-Transfer Equation for $F_\nu$ and $R_{\rm eff}$

Using the definition of $R_1$, write the continuum absorption coefficient as
$$
\alpha_\nu(r)=Cr^{-4}.
$$

The radial optical depth is
$$
1=\int_{R_1}^\infty Cr^{-4}\,dr
=\frac{C}{3R_1^3}.
$$

Therefore
$$
C=3R_1^3,
$$
that is,
$$
\alpha_\nu(r)=3R_1^3r^{-4}.
$$

For a ray with impact parameter $p$,
$$
r^2=p^2+z^2.
$$

the line-of-sight optical depth is
$$
\tau(p)=\int_{-\infty}^{+\infty}\alpha_\nu(r)\,dz.
$$

By symmetry,
$$
\tau(p)
=
2\int_p^\infty
\alpha_\nu(r)\frac{r\,dr}{\sqrt{r^2-p^2}}.
$$

Substituting $\alpha_\nu(r)=3R_1^3r^{-4}$ gives
$$
\tau(p)
=
6R_1^3
\int_p^\infty
\frac{dr}{r^3\sqrt{r^2-p^2}}.
$$

With $r=p\sec u$,
$$
\int_p^\infty
\frac{dr}{r^3\sqrt{r^2-p^2}}
=
\frac{\pi}{4p^3}.
$$

Therefore
$$
\tau(p)=\frac{3\pi}{2}\left(\frac{R_1}{p}\right)^3.
$$

The radiative-transfer equation gives
$$
I_\nu(p)=B_\nu\left(1-e^{-\tau(p)}\right).
$$

The flux observed at large distance is
$$
F_\nu
=
\frac{2\pi}{d^2}
\int_0^\infty I_\nu(p)\,p\,dp.
$$

Substituting $I_\nu(p)$,
$$
F_\nu
=
\frac{2\pi B_\nu}{d^2}
\int_0^\infty
p\left[
1-\exp\left(
-\frac{3\pi}{2}\frac{R_1^3}{p^3}
\right)
\right]dp.
$$

Let
$$
y=
\frac{p}{R_1(3\pi/2)^{1/3}},
$$
Then
$$
p\,dp
=
R_1^2\left(\frac{3\pi}{2}\right)^{2/3}y\,dy.
$$

Therefore
$$
F_\nu
=
\frac{2\pi B_\nu R_1^2}{d^2}
\left(\frac{3\pi}{2}\right)^{2/3}
\int_0^\infty y(1-e^{-1/y^3})\,dy.
$$

The problem gives
$$
\int_0^\infty y(1-e^{-1/y^3})\,dy\simeq1.34.
$$

so
$$
F_\nu
=
\frac{2\pi B_\nu R_1^2}{d^2}
\left(\frac{3\pi}{2}\right)^{2/3}
(1.34).
$$

Define
$$
\left(\frac{R_{\rm eff}}{d}\right)^2\pi B_\nu=F_\nu.
$$

Therefore
$$
R_{\rm eff}^2
=
2(1.34)
\left(\frac{3\pi}{2}\right)^{2/3}
R_1^2.
$$

and hence
$$
R_{\rm eff}
=
\left[
2(1.34)
\left(\frac{3\pi}{2}\right)^{2/3}
\right]^{1/2}R_1.
$$

Numerically,
$$
R_{\rm eff}\simeq2.74R_1.
$$

If $\tau$ here denotes the line-of-sight optical depth at $p=R_{\rm eff}$, then
$$
\tau_{\rm los}(R_{\rm eff})
=
\frac{3\pi}{2}
\left(\frac{R_1}{R_{\rm eff}}\right)^3
\simeq0.23.
$$

The corresponding radial optical depth is
$$
\tau_{\rm rad}(R_{\rm eff})
=
\left(\frac{R_1}{R_{\rm eff}}\right)^3
\simeq0.049.
$$

### 2.4 Line Profile

Write the line absorption coefficient as
$$
\alpha_{\rm line}(\nu)
=
\alpha_0(n)\phi(\nu-\nu_0),
$$
where
$$
\alpha_0(n)\propto n^2\propto r^{-4}.
$$

Because the line-profile function is very narrow, it can be approximated by a delta function. The matching condition between observed velocity $v$ and line-of-sight velocity $v_{\rm los}$ selects locations satisfying
$$
v=v_{\rm los}
$$
along the ray.

In a constant-speed, spherically symmetric wind,
$$
v_{\rm los}=v_w\frac{z}{r},
\qquad
r^2=p^2+z^2.
$$

Define
$$
u=\frac{v}{v_w}.
$$

For a ray with impact parameter $p$, the line optical depth is
$$
\tau_{\rm line}(p,v)
=
\int C_{\rm line}r^{-4}
\delta\left(v-v_w\frac{z}{r}\right)dz.
$$

Using
$$
\int g(z)\delta[f(z)]\,dz
=
\sum_i\frac{g(z_i)}{|f'(z_i)|},
$$
where $f(z_i)=0$. Here
$$
f(z)=v-v_w\frac{z}{\sqrt{p^2+z^2}}.
$$

The root satisfies
$$
u=\frac{z}{\sqrt{p^2+z^2}},
$$
so
$$
z_i=\frac{up}{\sqrt{1-u^2}},
\qquad
r_i=\frac{p}{\sqrt{1-u^2}}.
$$

The derivative is
$$
f'(z)
=
-v_w\frac{p^2}{(p^2+z^2)^{3/2}}
=
-v_w\frac{p^2}{r^3}.
$$

Therefore
$$
\tau_{\rm line}(p,v)
=
\frac{C_{\rm line}r_i^{-4}}{v_wp^2/r_i^3}
=
\frac{C_{\rm line}}{v_wp^2r_i}.
$$

Substituting $r_i$ gives
$$
\tau_{\rm line}(p,v)
\propto
p^{-3}\sqrt{1-\frac{v^2}{v_w^2}},
\qquad |v|<v_w.
$$

For $|v|\ge v_w$, there is no matching projected wind velocity, so the line contributes nothing.

Because the continuum line-of-sight optical depth also obeys
$$
\tau_{\rm cont}(p)\propto p^{-3},
$$
define the relative line strength
$$
\eta
=
\frac{\tau_{\rm line}(v=0)}{\tau_{\rm cont}}.
$$

Then
$$
\tau_{\rm line}(p,v)
=
\eta\,\tau_{\rm cont}(p)
\sqrt{1-\frac{v^2}{v_w^2}},
\qquad |v|<v_w.
$$

The total optical depth is
$$
\tau_{\rm total}(p,v)
=
\tau_{\rm cont}(p)+\tau_{\rm line}(p,v).
$$

Therefore
$$
\tau_{\rm total}(p,v)
=
\tau_{\rm cont}(p)
\left[
1+\eta\sqrt{1-\frac{v^2}{v_w^2}}
\right].
$$

The integral structure in part 3 shows that if
$$
\tau(p)\propto A p^{-3},
$$
then
$$
F_\nu\propto A^{2/3}.
$$

Thus the total flux across the line is
$$
F_\nu(v)
=
F_{\rm cont}
\left[
1+\eta\sqrt{1-\frac{v^2}{v_w^2}}
\right]^{2/3},
\qquad |v|<v_w.
$$

For $|v|\ge v_w$,
$$
F_\nu(v)=F_{\rm cont}.
$$

where
$$
F_{\rm cont}
=
\frac{2\pi B_\nu R_1^2}{d^2}
\left(\frac{3\pi}{2}\right)^{2/3}
(1.34).
$$

For $\eta=1$,
$$
F_\nu(v)
=
F_{\rm cont}
\left[
1+\sqrt{1-\frac{v^2}{v_w^2}}
\right]^{2/3}.
$$

For the continuum-subtracted line profile alone,
$$
\Delta F_\nu(v)
=
F_{\rm cont}
\left\{
\left[
1+\eta\sqrt{1-\frac{v^2}{v_w^2}}
\right]^{2/3}
-1
\right\}.
$$

This is an emission line: it peaks at $v=0$ and returns to the continuum at $|v|=v_w$.

In the weak-line limit $\eta\ll1$,
$$
\Delta F_\nu(v)
\simeq
\frac{2}{3}\eta F_{\rm cont}
\sqrt{1-\frac{v^2}{v_w^2}}.
$$

In the strong-line limit $\eta\gg1$, the line profile approximately obeys
$$
F_\nu(v)\propto
\left(1-\frac{v^2}{v_w^2}\right)^{1/3}.
$$

It therefore does lie between the completely optically thin and completely optically thick cases, and in general it depends on the relative line strength $\eta$.

