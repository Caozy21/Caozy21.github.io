---
title: >-
  AST1440: Einstein Coefficients and Absorption and Emission Lines — RL §1.6 and
  Problems 1.7–1.9
description: >-
  A detailed guide to two-level atoms, Einstein coefficients, absorption and
  emission lines, isothermal transfer, P Cygni profiles, and Problems 1.7–1.9.
date: '2026-09-21'
tags:
  - AST1440
  - Einstein coefficients
  - Spectral lines
  - Exercises
order: 4
draft: false
sourceHash: a968b9f39dc536969c6105a999659e3b21f40dfb66c4b169a32429bd5ba3bfa0
translation: AI-assisted English translation
---

> Course: AST1440 — Radiation; this session covers Absorption and Emission Lines.  
> Textbook: Rybicki & Lightman, *Radiative Processes in Astrophysics* (RL), §1.6, printed pp. 27–33; Problems 1.7–1.9, printed pp. 47–49.  
> Compiled: September 21, 2026.  
> These notes organize the textbook and discussion according to their physical dependencies. Follow-up questions are integrated into the relevant concepts: why transition rates contain $\bar J$, where the stimulated-emission correction comes from, why $j_\nu=\alpha_\nu B_\nu$, how to derive the isothermal transfer solution, how spectral lines are defined relative to a continuum, and why a radial stellar wind produces a P Cygni profile. Each problem includes a detailed derivation followed by an assignment-ready English solution.

## Contents

1. [The Logical Thread of This Lesson](#1-the-logical-thread-of-this-lesson)
2. [Notation, Assumptions, and Minimum Background](#2-notation-assumptions-and-minimum-background)
3. [A Two-Level Atom and the Three Einstein Processes](#3-a-two-level-atom-and-the-three-einstein-processes)
4. [How Thermal Equilibrium Determines the Einstein-Coefficient Relations](#4-how-thermal-equilibrium-determines-the-einstein-coefficient-relations)
5. [From Transition Rates to Emission and Net Absorption Coefficients](#5-from-transition-rates-to-emission-and-net-absorption-coefficients)
6. [LTE, Kirchhoff's Law, and the Isothermal Transfer Solution](#6-lte-kirchhoffs-law-and-the-isothermal-transfer-solution)
7. [Problem 1.8: A Uniform Spherical Thermal-Emission Cloud](#7-problem-18-a-uniform-spherical-thermal-emission-cloud)
8. [Problem 1.9: A Hot Star with a Narrow-Line Absorbing Shell](#8-problem-19-a-hot-star-with-a-narrow-line-absorbing-shell)
9. [Extension of 1.9: A Cold Radially Outflowing Stellar Wind](#9-extension-of-19-a-cold-radially-outflowing-stellar-wind)
10. [Problem 1.7: Why Stimulated Emission Is Essential](#10-problem-17-why-stimulated-emission-is-essential)
11. [English assignment-ready solutions](#11-english-assignment-ready-solutions)
12. [Review Checklist and Common Confusions](#12-review-checklist-and-common-confusions)
13. [Resources and References](#13-resources-and-references)

---


## 1. The Logical Thread of This Lesson

This section is not about memorizing three isolated coefficients. It answers a complete physical question: how do microscopic atomic transitions determine the absorption and emission lines we observe?

1. A two-level atom can undergo absorption, spontaneous emission, and stimulated emission.
2. Thermal equilibrium requires equal numbers of upward and downward transitions, while the radiation field must simultaneously follow a Planck spectrum.
3. Comparing these two conditions yields the relations among the Einstein coefficients.
4. Including the photon energy, angular distribution, and line profile for each transition gives $j_\nu$ and $\alpha_\nu$.
5. Boltzmann level populations in LTE reduce the source function to $B_\nu(T)$.
6. Whether an observed line is in absorption or emission is not determined simply by whether the gas emits. It is determined by comparing the gas source function with the background intensity behind it.
7. If the gas moves, lines from different locations appear at different observed frequencies through Doppler shifts. A radial outflow therefore produces the characteristic P Cygni profile.

The two most important diagnostic equations are

$$
\boxed{
I_{\nu,\rm out}
=I_{\nu,\rm in}e^{-\tau_\nu}
+S_\nu(1-e^{-\tau_\nu})
}
$$

and

$$
\boxed{
I_{\nu,\rm out}-I_{\nu,\rm in}
=(S_\nu-I_{\nu,\rm in})(1-e^{-\tau_\nu})
}.
$$

The first equation shows how background light and the medium's own radiation combine; the second directly determines whether a line is enhanced or suppressed relative to the background.


## 2. Notation, Assumptions, and Minimum Background

### 2.1 Notation

| Symbol | Meaning | Notes |
|---|---|---|
| $E_1,E_2$ | Lower- and upper-level energies | $E_2-E_1=h\nu_0$ |
| $g_1,g_2$ | Statistical weights of the levels | Number of microscopic states in the corresponding level |
| $n_1,n_2$ | Number densities of atoms in the two levels | Units of $\mathrm{cm^{-3}}$ |
| $A_{21}$ | Spontaneous-emission coefficient | Probability per unit time that an atom in the upper level undergoes a spontaneous transition |
| $B_{12}$ | Einstein absorption coefficient | Absorption rate is $B_{12}\bar J$ |
| $B_{21}$ | Einstein stimulated-emission coefficient | Stimulated-emission rate is $B_{21}\bar J$ |
| $\phi(\nu)$ | Line-profile function | $\int_0^\infty\phi(\nu)d\nu=1$ |
| $I_\nu$ | Specific intensity | Retains directional information |
| $J_\nu$ | Mean intensity | $J_\nu=(4\pi)^{-1}\int I_\nu d\Omega$ |
| $\bar J$ | Line-profile-weighted mean intensity | $\bar J=\int J_\nu\phi(\nu)d\nu$ |
| $j_\nu$ | Emission coefficient | Energy emitted per unit volume, time, frequency, and solid angle |
| $\alpha_\nu$ | Net absorption coefficient | Includes the negative absorption contribution from stimulated emission in these notes |
| $S_\nu$ | Source function | $S_\nu=j_\nu/\alpha_\nu$ |
| $\tau_\nu$ | Optical depth | $d\tau_\nu=\alpha_\nu ds$ |
| $B_\nu(T)$ | Planck function | Blackbody specific intensity and the LTE thermal source function |

RL defines $B_{12}$ and $B_{21}$ relative to the mean intensity $J_\nu$. Some texts instead use the energy density $u_\nu$. Because isotropic radiation satisfies $u_\nu=4\pi J_\nu/c$, the $B$ coefficients in the two conventions differ by the corresponding $4\pi/c$ conversion and cannot be compared numerically across conventions without adjustment.

### 2.2 Principal Assumptions Used Here

- The basic model in §1.6 has only two discrete energy levels, with line center satisfying $E_2-E_1=h\nu_0$.
- Spontaneous emission is isotropic and uses the same normalized line profile $\phi(\nu)$ as absorption.
- Writing $S_\nu=B_\nu(T)$ assumes that matter is in LTE; it does not automatically imply that the actual radiation field is blackbody.
- The cloud in Problem 1.8 is uniform, isothermal, and spherically symmetric, with external background and scattering neglected.
- The shell in Problem 1.9 emits thermally; it is opaque near $\nu_0$ and approximately transparent at the nearby frequency $\nu_1$.
- The wind extension determines only the qualitative profile. Exact peak height, trough depth, and asymmetry still depend on the velocity law, optical depth, source function, and occultation.


## 3. A Two-Level Atom and the Three Einstein Processes

### 3.1 Absorption

An atom in level 1 absorbs a photon of energy $h\nu_0$ and transitions to level 2:

$$
1+\gamma\longrightarrow2.
$$

The absorption rate per atom in the lower level is defined as

$$
\boxed{R_{12}=B_{12}\bar J}.
$$

Absorption requires an incident photon, so the absorption rate vanishes when $\bar J=0$.

### 3.2 Spontaneous Emission

An excited atom can transition to the lower level and release a photon even without external radiation:

$$
2\longrightarrow1+\gamma.
$$

The spontaneous transition rate per atom in the upper level is defined as

$$
\boxed{R_{21}^{\rm sp}=A_{21}}.
$$

The coefficient $A_{21}$ is not multiplied by $\bar J$ because this process does not require a real incident photon. In a fuller quantum-electrodynamic description, spontaneous emission arises from coupling between the atom and the vacuum modes of the quantized electromagnetic field.

### 3.3 Stimulated Emission

An incident photon induces an atom in the upper level to transition downward, adding another photon in the same photon mode:

$$
2+\gamma\longrightarrow1+2\gamma.
$$

The stimulated-emission rate per atom in the upper level is

$$
\boxed{R_{21}^{\rm stim}=B_{21}\bar J}.
$$

It requires an existing radiation field and is therefore also proportional to $\bar J$. The stimulated photon enters the same mode as the inducing photon: it has the same frequency, propagation direction, and polarization, with a coherent phase relation.

### 3.4 Why Use $\bar J$?

A spectral line is not an exact delta function. The atomic response is described by the line profile $\phi(\nu)$, so the atom samples a weighted average across the line:

$$
\boxed{
\bar J=\int_0^\infty J_\nu\phi(\nu)d\nu
}.
$$

Only if $J_\nu$ varies slowly across the narrow line width may one approximate

$$
\bar J\simeq J_{\nu_0}.
$$

Thus $B_{12}$ and $B_{21}$ do not themselves contain $\bar J$. The atomic properties are the $B$ coefficients; the actual transition rates are $B\bar J$.


## 4. How Thermal Equilibrium Determines the Einstein-Coefficient Relations

### 4.1 Detailed Balance of Transitions

In thermal equilibrium, the numbers of upward and downward transitions per unit volume and time must be equal:

$$
n_1B_{12}\bar J
=n_2A_{21}+n_2B_{21}\bar J.
$$

Solving for the radiation intensity gives:

$$
\bar J
=\frac{A_{21}}
{(n_1/n_2)B_{12}-B_{21}}.
$$

### 4.2 Introducing Boltzmann Level Populations

In thermal equilibrium,

$$
\frac{n_2}{n_1}
=\frac{g_2}{g_1}e^{-h\nu_0/kT},
$$

Equivalently,

$$
\frac{n_1}{n_2}
=\frac{g_1}{g_2}e^{h\nu_0/kT}.
$$

Therefore

$$
\bar J
=\frac{A_{21}/B_{21}}
{\left(g_1B_{12}/g_2B_{21}\right)e^{h\nu_0/kT}-1}.
$$

### 4.3 Term-by-Term Comparison with the Planck Spectrum

Thermal-equilibrium radiation must satisfy

$$
B_{\nu_0}(T)
=\frac{2h\nu_0^3/c^2}{e^{h\nu_0/kT}-1}.
$$

Requiring the preceding $\bar J$ to equal the Planck function at every temperature gives

$$
\boxed{g_1B_{12}=g_2B_{21}}
$$

and

$$
\boxed{
A_{21}=\frac{2h\nu_0^3}{c^2}B_{21}
}.
$$

These relations are derived from an equilibrium state, but they connect microscopic atomic coefficients and therefore remain valid when the actual atomic populations are out of equilibrium. Outside LTE, $n_1/n_2$ changes; these coefficient relations do not.


## 5. From Transition Rates to Emission and Net Absorption Coefficients

### 5.1 Spontaneous Emission Gives $j_\nu$

The number of spontaneous transitions per unit volume and time is $n_2A_{21}$. Each transition releases energy $h\nu_0$. For isotropic radiation, the total energy is distributed over $4\pi$ steradians and over frequency according to $\phi(\nu)$. Therefore

$$
\boxed{
j_\nu
=\frac{h\nu_0}{4\pi}n_2A_{21}\phi(\nu)
}.
$$

### 5.2 Absorption and Stimulated Emission Must Be Subtracted

True absorption removes photons from the specified beam:

$$
\alpha_\nu^{\rm abs}
=\frac{h\nu_0}{4\pi}n_1B_{12}\phi(\nu).
$$

Stimulated emission adds photons along the existing beam and is likewise proportional to $I_\nu$, so it is most conveniently written as negative absorption in the transfer equation:

$$
\alpha_\nu^{\rm stim}
=-\frac{h\nu_0}{4\pi}n_2B_{21}\phi(\nu).
$$

The net absorption coefficient is

$$
\frac{dI_\nu}{ds}=-\alpha_\nu I_\nu+j_\nu
$$

The net absorption coefficient is

$$
\boxed{
\alpha_\nu
=\frac{h\nu_0}{4\pi}
(n_1B_{12}-n_2B_{21})\phi(\nu)
}.
$$

### 5.3 The Stimulated-Emission Correction in LTE

Combining Boltzmann populations and the Einstein relations in LTE gives:

$$
\begin{aligned}
n_2B_{21}
&=n_1\frac{g_2}{g_1}e^{-h\nu_0/kT}
\frac{g_1}{g_2}B_{12}\\
&=n_1B_{12}e^{-h\nu_0/kT}.
\end{aligned}
$$

Therefore

$$
\boxed{
\alpha_\nu
=\frac{h\nu_0}{4\pi}n_1B_{12}
\left(1-e^{-h\nu_0/kT}\right)\phi(\nu)
}.
$$

where

$$
\underbrace{1}_{\text{true absorption}}
-\underbrace{e^{-h\nu_0/kT}}_{\text{relative contribution of stimulated emission}}
$$

is the net-absorption correction.

If $h\nu_0\gg kT$, the upper-level population is small, the correction factor approaches unity, and stimulated emission is unimportant. If $h\nu_0\ll kT$, then

$$
1-e^{-h\nu_0/kT}\simeq\frac{h\nu_0}{kT},
$$

absorption and stimulated emission nearly cancel, making the net absorption much smaller than the uncorrected absorption.

### 5.4 Non-LTE and Masers

Outside LTE, $n_2/n_1$ cannot be replaced by a Boltzmann factor; the general expression must be retained. If

$$
\frac{n_2}{g_2}>\frac{n_1}{g_1},
$$

then

$$
n_2B_{21}>n_1B_{12},\qquad \alpha_\nu<0.
$$

the beam is exponentially amplified rather than attenuated, corresponding to a population inversion and a maser or laser.


## 6. LTE, Kirchhoff's Law, and the Isothermal Transfer Solution

### 6.1 Why Does Thermal Radiation Satisfy $j_\nu=\alpha_\nu B_\nu$?

Place matter at temperature $T$ in a blackbody cavity at the same temperature. The equilibrium radiation is

$$
I_\nu=B_\nu(T),
$$

and cannot continue changing along a ray:

$$
\frac{dI_\nu}{ds}=0.
$$

Substitution into the transfer equation gives:

$$
0=-\alpha_\nu B_\nu(T)+j_\nu,
$$

Therefore

$$
\boxed{j_\nu=\alpha_\nu B_\nu(T)},
\qquad
\boxed{S_\nu=B_\nu(T)}.
$$

Microscopically, substituting the $j_\nu$ and $\alpha_\nu$ expressions from §5 and the LTE populations into $S_\nu=j_\nu/\alpha_\nu$ yields the same Planck function.

This equality describes the local ratio of emission to absorption by matter. It does not mean that the actual radiation must satisfy $I_\nu=B_\nu$; the actual $I_\nu$ also depends on optical depth and incident boundary radiation.

### 6.2 How Is the Isothermal Transfer Solution Derived?

Taking the direction of ray propagation as positive, define

$$
d\tau_\nu=\alpha_\nu ds.
$$

If the source function is constant along the path, the transfer equation is

$$
\frac{dI_\nu}{d\tau_\nu}+I_\nu=S_\nu.
$$

Multiply by the integrating factor $e^{\tau_\nu}$:

$$
\frac{d}{d\tau_\nu}
\left(I_\nu e^{\tau_\nu}\right)
=S_\nu e^{\tau_\nu}.
$$

Integrating from the medium entrance $\tau_\nu=0$ to the exit $\tau_\nu=\tau$ gives:

$$
I_\nu(\tau)e^\tau-I_\nu(0)
=S_\nu(e^\tau-1).
$$

Therefore

$$
\boxed{
I_{\nu,\rm out}
=I_{\nu,\rm in}e^{-\tau_\nu}
+S_\nu(1-e^{-\tau_\nu})
}.
$$

The two terms are the attenuated background and the portion of the medium's own radiation that escapes. In an isothermal LTE medium, $S_\nu=B_\nu(T)$.

### 6.3 Why Is the Optically Thin Limit a Path Integral While the Optically Thick Limit Approaches the Source Function?

With no background,

$$
I_\nu=S_\nu(1-e^{-\tau_\nu}).
$$

In the optically thin limit,

$$
1-e^{-\tau_\nu}\simeq\tau_\nu,
$$

so

$$
I_\nu\simeq S_\nu\tau_\nu
=\frac{j_\nu}{\alpha_\nu}\alpha_\nu\ell
=j_\nu\ell.
$$

Emission from individual path elements is hardly reabsorbed and can be added directly. In the optically thick limit, $e^{-\tau_\nu}\to0$, so

$$
I_\nu\to S_\nu.
$$

We see only radiation from within roughly one optical depth of the surface.


## 7. Problem 1.8: A Uniform Spherical Thermal-Emission Cloud

### 7.1 Geometry and the Meaning of $P(\nu)$

A uniform spherical cloud of radius $R$ lies at distance $d\gg R$ from Earth. The given $P(\nu)$ is the emitted power per unit volume and frequency, integrated over all directions. Therefore

$$
\boxed{j_\nu=\frac{P(\nu)}{4\pi}}.
$$

A line of sight at projected distance $b$ from the center traverses a chord of length

$$
\boxed{
\ell(b)=2\sqrt{R^2-b^2}
},\qquad 0\le b<R.
$$

If $b\ge R$, the line of sight does not cross the cloud.

Thermal emission satisfies $j_\nu=\alpha_\nu B_\nu(T)$, so

$$
\alpha_\nu=\frac{P(\nu)}{4\pi B_\nu(T)},
$$

and the line-of-sight optical depth through a uniform cloud is

$$
\tau_\nu(b)
=2\alpha_\nu\sqrt{R^2-b^2}.
$$

With no background, the full solution is

$$
\boxed{
I_\nu(b)
=B_\nu(T)
\left[1-e^{-\tau_\nu(b)}\right]
}.
$$

### 7.2 (a) Brightness Distribution of an Optically Thin Cloud

In the optically thin limit, integrate directly along the chord:

$$
I_\nu(b)
=\int j_\nu ds
=\frac{P(\nu)}{4\pi}\,2\sqrt{R^2-b^2}.
$$

Thus

$$
\boxed{
I_\nu(b)
=\frac{P(\nu)}{2\pi}\sqrt{R^2-b^2}
},\qquad b<R.
$$

The central line of sight is longest, so the center is brightest; the chord length and intensity approach zero at the limb. No $d^{-2}$ appears because specific intensity is conserved in vacuum propagation. Increasing distance reduces the source's angular area instead.

### 7.3 (b) Effective Temperature

Define the frequency-integrated volume emissivity

$$
P_{\rm bol}=\int_0^\infty P(\nu)d\nu.
$$

The total luminosity of the optically thin cloud is its volume multiplied by the volume emissivity:

$$
L=\frac{4\pi R^3}{3}P_{\rm bol}.
$$

The effective temperature is defined by the total luminosity of a blackbody of the same radius:

$$
L=4\pi R^2\sigma_{\rm SB}T_{\rm eff}^4.
$$

Therefore

$$
\boxed{
T_{\rm eff}
=\left[
\frac{R}{3\sigma_{\rm SB}}
\int_0^\infty P(\nu)d\nu
\right]^{1/4}
}.
$$

This assumes that the frequencies contributing most of the emission are optically thin. At every frequency, an isothermal thin cloud with no background is dimmer than a blackbody surface at the same temperature, so typically $T_{\rm eff}<T$.

### 7.4 (c) Total Spectral Flux Received at Earth

The cloud's spectral luminosity is

$$
L_\nu=\frac{4\pi R^3}{3}P(\nu).
$$

Therefore the spectral flux density at Earth is

$$
\boxed{
f_\nu
=\frac{L_\nu}{4\pi d^2}
=\frac{P(\nu)R^3}{3d^2}
}.
$$

The same result follows by integrating the sky image:

$$
f_\nu
=\int I_\nu d\Omega
=\frac{2\pi}{d^2}
\int_0^R I_\nu(b)b\,db,
$$

Substituting $I_\nu(b)$ from §7.2 yields the same expression.

### 7.5 (d) Brightness Temperature and Gas Temperature

Brightness temperature is defined by

$$
B_\nu(T_b)=I_\nu
$$

Because, without background,

$$
I_\nu=B_\nu(T)(1-e^{-\tau_\nu})<B_\nu(T),
$$

and because $B_\nu$ increases monotonically with temperature at fixed frequency,

$$
\boxed{T_b<T}.
$$

Only in the Rayleigh–Jeans limit is the Planck function proportional to temperature. There an optically thin cloud satisfies

$$
\boxed{T_b\simeq\tau_\nu T}.
$$

At a general frequency one must invert $B_\nu(T_b)=I_\nu$; one cannot simply write $T_b=\tau_\nu T$.

### 7.6 (e) An Optically Thick Cloud

If most lines of sight satisfy $\tau_\nu\gg1$ at the relevant frequencies, then

$$
I_\nu(b)\simeq B_\nu(T).
$$

The angular area of an ideal blackbody disk is $\pi R^2/d^2$, so

$$
\boxed{
f_\nu
=\pi B_\nu(T)\frac{R^2}{d^2}
}.
$$

If the bands contributing most of the bolometric radiation are also optically thick, then

$$
\boxed{T_{\rm eff}=T},
\qquad
\boxed{T_b=T}.
$$

Strictly, a sphere with finite absorption coefficient has a very short chord at its outermost limb and remains thin there; a uniform blackbody disk is the limiting description. Optical thickness in a single spectral line is not sufficient by itself to infer $T_{\rm eff}=T$ for the entire bolometric spectrum.


## 8. Problem 1.9: A Hot Star with a Narrow-Line Absorbing Shell

### 8.1 Geometry and Two Frequencies

The central opaque sphere is a blackbody at temperature $T_c$, and the outer shell has temperature $T_s$. The shell has a large absorption coefficient at line center $\nu_0$ and is approximately transparent at a nearby continuum frequency $\nu_1$.

- Ray A starts at the stellar surface and then crosses the foreground shell.
- Ray B does not intersect the stellar disk and passes only through the shell.

The problem also assumes that the Planck function changes little between $\nu_0$ and $\nu_1$:

$$
B_{\nu_0}(T_c)\simeq B_{\nu_1}(T_c),
\qquad
B_{\nu_0}(T_s)\simeq B_{\nu_1}(T_s).
$$

### 8.2 Complete Expression for Ray A

The star supplies incident intensity

$$
I_{\nu,\rm in}=B_\nu(T_c),
$$

while the LTE shell source function is

$$
S_\nu=B_\nu(T_s).
$$

Therefore

$$
\boxed{
I_{\nu,A}
=B_\nu(T_c)e^{-\tau_{\nu,A}}
+B_\nu(T_s)(1-e^{-\tau_{\nu,A}})
}.
$$

The first term is stellar light transmitted through the shell; the second is the shell's own thermal emission added back into the beam. Equivalently,

$$
I_{\nu,A}
=B_\nu(T_s)
+[B_\nu(T_c)-B_\nu(T_s)]e^{-\tau_{\nu,A}}.
$$

When transparent, we see the star; when very thick, we see the shell source function.

### 8.3 Why Can $I_{\nu_0}$ and $I_{\nu_1}$ Determine the Line Type?

At $\nu_1$, $\tau_{\nu_1,A}\simeq0$, so

$$
I_{\nu_1,A}\simeq B_{\nu_1}(T_c).
$$

Define the line's change relative to the neighboring continuum:

$$
\Delta I_A=I_{\nu_0,A}-I_{\nu_1,A}.
$$

Without approximation,

$$
\begin{aligned}
\Delta I_A={}&
B_{\nu_0}(T_c)e^{-\tau_{\nu_0,A}}
+B_{\nu_0}(T_s)(1-e^{-\tau_{\nu_0,A}})\\
&-B_{\nu_1}(T_c).
\end{aligned}
$$

Using the local-continuum approximation supplied by the problem,

$$
B_{\nu_1}(T_c)\simeq B_{\nu_0}(T_c),
$$

we obtain

$$
\boxed{
\Delta I_A
\simeq
[B_{\nu_0}(T_s)-B_{\nu_0}(T_c)]
(1-e^{-\tau_{\nu_0,A}})
}.
$$

Thus the essential comparison is not between two arbitrary frequencies, but between line center and the local continuum extrapolated to line center:

$$
\Delta I_{\rm line}
=I_{\nu_0}-I_{\nu_0,\rm cont}.
$$

If $\Delta I_{\rm line}>0$, the spectrum lies above the continuum at line center and the feature is an emission line; if $\Delta I_{\rm line}<0$, it lies below the continuum and is an absorption line. If $\nu_1$ is far from line center, $I_{\nu_1}$ cannot be used directly as the line-center continuum; the continuum slope must first be fitted.

### 8.4 When $T_s<T_c$

At fixed frequency, the Planck function increases monotonically with temperature, so

$$
B_{\nu_0}(T_s)<B_{\nu_0}(T_c).
$$

For ray A,

$$
\Delta I_A<0,
$$

The line therefore appears in absorption.

For ray B, there is no star behind the shell, so take $I_{\nu,\rm in}\simeq0$:

$$
I_{\nu,B}
=B_\nu(T_s)(1-e^{-\tau_{\nu,B}}).
$$

Off the line, $I_{\nu_1,B}\simeq0$; at line center, $I_{\nu_0,B}>0$. Ray B therefore shows an emission line.

A cold shell is not non-emitting. In front of a bright stellar background it is dimmer and produces absorption; in front of a dark sky it is brighter and produces emission.

### 8.5 When $T_s>T_c$

In this case

$$
B_{\nu_0}(T_s)>B_{\nu_0}(T_c).
$$

Ray A lies above the stellar continuum at line center and becomes an emission line; ray B also emits against the dark background. Therefore

| Condition | A: in front of the stellar disk | B: outside the stellar disk |
|---|---|---|
| $T_s<T_c$ | Absorption line | Emission line |
| $T_s=T_c$ | No line contrast | Emission line |
| $T_s>T_c$ | Emission line | Emission line |

The unified diagnostic is

$$
\boxed{
I_{\nu,\rm out}-I_{\nu,\rm in}
=(S_\nu-I_{\nu,\rm in})(1-e^{-\tau_\nu})
}.
$$


## 9. Extension of 1.9: A Cold Radially Outflowing Stellar Wind

### 9.1 Establishing the Doppler Sign Convention

Let $\hat{\boldsymbol n}$ point from the star toward the observer, and define

$$
v_\parallel=\boldsymbol v\cdot\hat{\boldsymbol n}>0
$$

to denote gas moving toward the observer. In front of the star, both the radial outflow and the photons propagate along $\hat{\boldsymbol n}$.

Transforming from the observer frame to the gas frame gives the frequency

$$
\nu'=\gamma\nu(1-\beta),
\qquad
\beta=\frac{v_\parallel}{c}.
$$

For a nonrelativistic wind,

$$
\boxed{
\nu'\simeq\nu\left(1-\frac{v_\parallel}{c}\right)
}.
$$

The gas and photons move in the same direction, so the gas is chasing the photons and measures a lower frequency.

### 9.2 Why Does the Foreground Wind Absorb Blueshifted Photons?

Resonant absorption requires the frequency in the gas frame to equal the atomic line frequency:

$$
\nu'=\nu_0.
$$

Therefore

$$
\nu
=\frac{\nu_0}{\gamma(1-\beta)}
=\nu_0\sqrt{\frac{1+\beta}{1-\beta}}
\simeq\nu_0(1+\beta).
$$

The absorbed observer-frame frequency satisfies

$$
\boxed{\nu_{\rm abs}>\nu_0},
\qquad
\boxed{\lambda_{\rm abs}<\lambda_0}.
$$

This is blueshifted absorption. Although the wind is moving away from the star, the foreground wind moves toward the observer. Moving away from the star must not be confused with moving away from the observer.

Under the alternate astronomical convention in which positive radial velocity means motion away from the observer, the velocity sign reverses but the blueshift conclusion is unchanged.

### 9.3 Why Does Wind Outside the Stellar Disk Appear in Emission?

Along lines of sight through the wind in front of the stellar disk, the background is the bright star:

$$
I_{\nu,\rm in}\simeq I_{\nu,\star}>S_\nu.
$$

The in-line output is therefore below the continuum, producing absorption.

Along lines of sight outside the stellar disk, the background is approximately dark sky:

$$
I_{\nu,\rm in}\simeq0.
$$

As long as the wind has nonzero thermal emission or scatters stellar light into the line of sight, $S_\nu>0$, and

$$
I_{\nu,\rm out}=S_\nu(1-e^{-\tau_\nu})>0.
$$

It therefore appears in emission relative to the nearly zero local background. Absorption can only remove background photons that already exist; without a bright background, the intensity cannot be driven below zero.

### 9.4 Which Frequencies Receive Contributions from Different Regions?

- The near-side wind moves toward us and contributes blueshifted emission.
- The transverse wind has nearly zero line-of-sight velocity and contributes emission near the rest-frame line center.
- The far-side wind moves away from us and contributes redshifted emission.
- Only the near-side wind projected against the stellar disk can absorb the bright stellar continuum, so conspicuous absorption appears only on the blue side.

Conceptually, the observed flux of the entire unresolved system can be written

$$
F_\nu
=F_{\nu,\rm cont}
-F_{\nu,\rm removed}
+F_{\nu,\rm wind}.
$$

The wind emission spans both positive and negative line-of-sight velocities, while absorption by the foreground wind suppresses the blue side. The total profile therefore usually shows

$$
\boxed{
\text{blueshifted absorption trough}+\text{broad emission component}
}
$$

This is a P Cygni profile. In the composite profile, the emission peak is usually most prominent near line center or on the red side, but it should not be interpreted as emission coming only from the rear hemisphere.

### 9.5 What Does This Conclusion Depend On?

The problem robustly predicts the characteristic P Cygni morphology, but a cold wind alone does not determine the exact curve. The profile is modified by:

- the radial wind-velocity law and terminal velocity;
- the line optical depth and ion populations;
- the separate contributions of thermal emission, collisional excitation, recombination, and resonance scattering;
- occultation of the far-side wind by the star;
- whether the wind is spherical, steady, and unresolved.

In the extreme model of purely destructive absorption, where the wind almost never re-emits or scatters absorbed photons within the line, the emission component can be weak and only blueshifted absorption remains. Classical P Cygni emission usually comes from resonance scattering and may also include true line emission.


## 10. Problem 1.7: Why Stimulated Emission Is Essential

### 10.1 (a) Neglecting Stimulated Emission Gives Only the Wien Spectrum

If absorption and spontaneous emission are incorrectly retained as the only processes, the equilibrium condition is

$$
n_1B_{12}\bar J=n_2A_{21}.
$$

Using the Boltzmann distribution:

$$
\bar J
=\frac{n_2}{n_1}\frac{A_{21}}{B_{12}}
=\frac{g_2A_{21}}{g_1B_{12}}e^{-h\nu_0/kT}.
$$

Choosing the temperature-independent coefficient relation

$$
\frac{g_2A_{21}}{g_1B_{12}}
=\frac{2h\nu_0^3}{c^2},
$$

then gives

$$
\boxed{
\bar J
=\frac{2h\nu_0^3}{c^2}e^{-h\nu_0/kT}
},
$$

This is the Wien spectrum, not the full Planck spectrum

$$
B_{\nu_0}(T)
=\frac{2h\nu_0^3/c^2}{e^{h\nu_0/kT}-1}.
$$

Temperature-independent atomic coefficients cannot create the $-1$ term in the denominator from nothing; that term comes from stimulated emission. Only when $h\nu_0\gg kT$ is stimulated emission weak and the Planck spectrum approaches the Wien spectrum.

### 10.2 (b) If the Radiation Particles Were Fermions

The problem gives the equilibrium intensity

$$
I_\nu^{\rm FD}
=\frac{2h\nu^3/c^2}{e^{h\nu/kT}+1}.
$$

Occupation of an existing final state enhances boson emission by a factor $1+f$; for fermions, occupation of the final state prevents another identical particle from entering, giving a factor $1-f$. If Pauli blocking is written as a positive coefficient $B_{21}$ times the radiation intensity, the downward transition rate has the form

$$
A_{21}-B_{21}\bar J
$$

Detailed balance is

$$
n_1B_{12}\bar J
=n_2(A_{21}-B_{21}\bar J).
$$

Solving gives

$$
\bar J
=\frac{A_{21}/B_{21}}
{(g_1B_{12}/g_2B_{21})e^{h\nu_0/kT}+1}.
$$

Comparison with the Fermi–Dirac spectrum yields coefficient relations of the same form:

$$
\boxed{g_1B_{12}=g_2B_{21}},
\qquad
\boxed{A_{21}=\frac{2h\nu_0^3}{c^2}B_{21}}.
$$

The difference is the physical interpretation and sign of $B_{21}\bar J$. For photons, it describes stimulated emission that increases the downward transition rate. For fermions, it describes Pauli blocking by an occupied final state and subtracts from the spontaneous-emission rate.


## 11. English assignment-ready solutions

### 11.1 Problem 1.8

Let $P(\nu)$ be the emitted power per unit volume and frequency, integrated over all directions. The isotropic emission coefficient is therefore

$$
j_\nu=\frac{P(\nu)}{4\pi}.
$$

For a ray with impact parameter $b<R$, the path length through the spherical cloud is

$$
\ell(b)=2\sqrt{R^2-b^2}.
$$

**(a) Optically thin cloud.** The observed specific intensity is

$$
\boxed{
I_\nu(b)=\int j_\nu ds
=\frac{P(\nu)}{2\pi}\sqrt{R^2-b^2}
},
$$

for $b<R$, and it is zero for $b\ge R$. The intensity does not contain an inverse-square factor because specific intensity is conserved during propagation through empty space.

**(b) Effective temperature.** Define

$$
P_{\rm bol}=\int_0^\infty P(\nu)d\nu.
$$

The luminosity of the optically thin cloud is

$$
L=\frac{4\pi R^3}{3}P_{\rm bol}.
$$

Equating this to $4\pi R^2\sigma_{\rm SB}T_{\rm eff}^4$ gives

$$
\boxed{
T_{\rm eff}
=\left[
\frac{R}{3\sigma_{\rm SB}}
\int_0^\infty P(\nu)d\nu
\right]^{1/4}
}.
$$

**(c) Flux density at Earth.** The monochromatic luminosity is

$$
L_\nu=\frac{4\pi R^3}{3}P(\nu),
$$

and hence

$$
\boxed{
f_\nu=\frac{L_\nu}{4\pi d^2}
=\frac{P(\nu)R^3}{3d^2}
}.
$$

**(d) Brightness temperature.** For thermal emission,

$$
I_\nu=B_\nu(T)(1-e^{-\tau_\nu})<B_\nu(T).
$$

Since $B_\nu(T_b)=I_\nu$, it follows that

$$
\boxed{T_b<T}.
$$

In the Rayleigh–Jeans and optically thin limits, $T_b\simeq\tau_\nu T$.

**(e) Optically thick cloud.** In the blackbody limit,

$$
\boxed{I_\nu(b)\simeq B_\nu(T)},
\qquad
\boxed{T_b=T},
\qquad
\boxed{T_{\rm eff}=T},
$$

and the flux density measured at Earth is

$$
\boxed{
f_\nu=\pi B_\nu(T)\frac{R^2}{d^2}
}.
$$

The statement $T_{\rm eff}=T$ assumes that the cloud is optically thick over the frequencies that dominate its bolometric luminosity.

### 11.2 Problem 1.9

For a ray passing through an isothermal shell, the formal solution is

$$
I_{\nu,\rm out}
=I_{\nu,\rm in}e^{-\tau_\nu}
+B_\nu(T_s)(1-e^{-\tau_\nu}).
$$

Along ray A, the incident intensity is the central blackbody intensity, $I_{\nu,\rm in}=B_\nu(T_c)$, so

$$
I_{\nu,A}
=B_\nu(T_c)e^{-\tau_{\nu,A}}
+B_\nu(T_s)(1-e^{-\tau_{\nu,A}}).
$$

At the continuum frequency $\nu_1$, the shell is transparent and

$$
I_{\nu_1,A}\simeq B_{\nu_1}(T_c).
$$

Using the stated approximation that the Planck function changes negligibly between $\nu_0$ and $\nu_1$,

$$
I_{\nu_0,A}-I_{\nu_1,A}
\simeq
[B_{\nu_0}(T_s)-B_{\nu_0}(T_c)]
(1-e^{-\tau_{\nu_0,A}}).
$$

Along ray B there is no bright central background, so

$$
I_{\nu,B}=B_\nu(T_s)(1-e^{-\tau_{\nu,B}}).
$$

Therefore, if $T_s<T_c$, ray A shows an absorption line while ray B shows an emission line. If $T_s>T_c$, both rays show an emission line. The general criterion is that a line is in emission when $S_\nu>I_{\nu,\rm in}$ and in absorption when $S_\nu<I_{\nu,\rm in}$.

### 11.3 Wind extension to Problem 1.9

A cooler, radially expanding wind is expected to produce a P Cygni profile: blueshifted absorption superposed on a broad emission component. Gas in front of the stellar disk moves toward the observer and absorbs the stellar continuum at blueshifted frequencies. In the nonrelativistic limit, the resonance condition is

$$
\nu_0\simeq\nu\left(1-\frac{v_\parallel}{c}\right),
$$

so the absorbed observer-frame frequency is

$$
\nu\simeq\nu_0\left(1+\frac{v_\parallel}{c}\right)>\nu_0.
$$

Wind material outside the projected stellar disk contributes line emission over a range of projected velocities: the near side is blueshifted, the transverse regions lie near line center, and the far side is redshifted. Only the near-side wind projected against the stellar disk can remove the bright stellar continuum, so the absorption is preferentially blueshifted. The detailed profile depends on the wind velocity law, line optical depth, source function, and occultation by the star.

### 11.4 Problem 1.7

**(a)** If stimulated emission is omitted, detailed balance gives

$$
n_1B_{12}\bar J=n_2A_{21}.
$$

Using the Boltzmann population ratio,

$$
\bar J
=\frac{g_2A_{21}}{g_1B_{12}}e^{-h\nu_0/kT}.
$$

Choosing

$$
\frac{g_2A_{21}}{g_1B_{12}}
=\frac{2h\nu_0^3}{c^2}
$$

produces the Wien spectrum,

$$
\bar J
=\frac{2h\nu_0^3}{c^2}e^{-h\nu_0/kT},
$$

but no temperature-independent relation among the remaining coefficients can reproduce the $-1$ in the Planck denominator. Stimulated emission is therefore required for the full Planck spectrum.

**(b)** For a Fermi–Dirac radiation field, occupation of the final neutrino state suppresses emission. Writing the downward rate as $A_{21}-B_{21}\bar J$, detailed balance gives

$$
n_1B_{12}\bar J
=n_2(A_{21}-B_{21}\bar J).
$$

Comparison with

$$
I_\nu^{\rm FD}
=\frac{2h\nu^3/c^2}{e^{h\nu/kT}+1}
$$

then yields

$$
\boxed{g_1B_{12}=g_2B_{21}},
\qquad
\boxed{A_{21}=\frac{2h\nu_0^3}{c^2}B_{21}}.
$$

The algebraic relations have the same form as in the photon case, but the $B_{21}\bar J$ term represents Pauli blocking rather than stimulated emission and therefore enters with the opposite sign.


## 12. Review Checklist and Common Confusions

### 12.1 Derivations to Complete Independently

1. Derive the following from detailed balance and the Planck spectrum:

   $$
   g_1B_{12}=g_2B_{21},
   \qquad
   A_{21}=\frac{2h\nu_0^3}{c^2}B_{21}.
   $$

2. Derive the following from transition rates:

   $$
   j_\nu=\frac{h\nu_0}{4\pi}n_2A_{21}\phi(\nu),
   $$

   $$
   \alpha_\nu
   =\frac{h\nu_0}{4\pi}
   (n_1B_{12}-n_2B_{21})\phi(\nu).
   $$

3. Use LTE populations to derive the stimulated-emission correction

   $$
   1-e^{-h\nu_0/kT}.
   $$

4. Derive the constant-source-function solution from the transfer equation

   $$
   I_{\rm out}=I_{\rm in}e^{-\tau}+S(1-e^{-\tau}).
   $$

5. Use the chord length $2\sqrt{R^2-b^2}$ to derive the brightness distribution of a spherical cloud.
6. Use $S-I_{\rm in}$ to decide whether a spectral line is in absorption or emission.
7. Use the resonance condition in the moving gas frame to derive blueshifted absorption.

### 12.2 Core Results Worth Memorizing

- The coefficient $A_{21}$ is independent of any existing radiation field; $B_{12}\bar J$ and $B_{21}\bar J$ require incident photons.
- LTE gives $S_\nu=B_\nu(T)$; only optical thickness makes the actual $I_\nu$ approach $B_\nu(T)$.
- Emission and absorption lines must be defined relative to the local continuum.
- Cold gas can produce absorption in front of a bright star and still produce emission against a dark sky.
- The characteristic signature of a spherical radial outflow is a P Cygni profile: blueshifted absorption plus broad emission.

### 12.3 The Most Common Confusions

| Misleading statement | Correct interpretation |
|---|---|
| “The $B$ coefficient contains $\bar J$” | $B$ is an atomic coefficient; $B\bar J$ is the actual transition rate |
| “The absorption coefficient counts only absorption” | RL's net $\alpha_\nu$ already subtracts stimulated emission |
| “LTE means blackbody radiation” | LTE gives the local source function; $I_\nu$ also depends on optical depth and boundary conditions |
| “A cold shell cannot emit” | A cold shell still has $S_\nu>0$; whether it produces an emission line depends on the background |
| “A large absorption coefficient always produces an absorption line” | If $S_\nu>I_{\nu,\rm in}$, large optical depth instead makes the line appear in emission |
| “Comparing any $I_{\nu_0}$ and $I_{\nu_1}$ determines the line type” | Compare line center with the local continuum extrapolated to line center |
| “The wind moves away from the star, so it must be redshifted” | Although the near-side wind moves away from the star, it moves toward the observer and produces blueshifted absorption |
| “P Cygni emission comes only from the far-side wind” | The entire wind emits; different locations map to the blue side, line center, and red side according to line-of-sight velocity |


## 13. Resources and References

1. G. B. Rybicki & A. P. Lightman, *Radiative Processes in Astrophysics*, §1.6 and Problems 1.7–1.9, print pp. 27–33 and 47–49. Project file: `Rybicki and Lightman - 2004 - Radiative processes in astrophysics.pdf`.
2. J. Puls, *Stellar Winds*, section on P Cygni line formation: [stellar_winds.pdf](https://homepages.usm.uni-muenchen.de/puls/lessons/hotwindsprakt/stellar_winds.pdf).
3. These notes follow the notation established in the project's two preceding sets of notes: *AST1440: Radiative Transfer Fundamentals and Problems 1.1–1.4* and *AST1440: Thermal Radiation and Observations — Lecture Notes and Problems 1.3, 1.5, and 1.6*.
