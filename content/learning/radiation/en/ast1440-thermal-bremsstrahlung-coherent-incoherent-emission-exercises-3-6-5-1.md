---
title: "AST1440 Thermal Bremsstrahlung, Coherent and Incoherent Emission: RL §§5.1–5.3 and Problems 3.6, 5.1"
description: "A systematic derivation of single electron–ion encounters, the Gaunt factor, Maxwellian averaging, thermal free–free emission and absorption, optically thin and thick transfer, and complete solutions to Problems 3.6 and 5.1."
date: "2026-10-19"
tags: ["AST1440","Thermal bremsstrahlung","Free-free emission","Coherence","Radiative transfer","Exercises"]
order: 13
draft: false
sourceHash: 8a1cffd327d68391363008bd0bf791f0b470574e67288db1044721782041197a
translation: "AI-assisted English translation"
---

# AST1440 Thermal Bremsstrahlung, Coherent and Incoherent Emission: RL §§5.1–5.3 and Problems 3.6, 5.1

> Course: AST1440 — Radiation.  
> Textbook: Rybicki & Lightman, *Radiative Processes in Astrophysics* (RL), §5.1 (print pp. 156–159), §5.2 (print pp. 159–162), §5.3 (print pp. 162–163); Problems 3.6 (print pp. 104–105) and 5.1 (print p. 165).  
> Supplementary background: RL §§4.1, 4.2, and 4.6; AstroBaki, *Thermal Bremsstrahlung*.  
> Compiled: October 19, 2026.  
> This note follows the physical dependencies developed in this week's preview discussion: a single electron–ion encounter, the Fourier spectrum of a collision pulse, integration over impact parameter, the Gaunt factor, Maxwellian thermal averaging, free–free emission and absorption, Kirchhoff's law, optically thin and thick limits, and complete solutions to the two assigned problems.

## Contents

1. [Logical Road Map and Core Results](#1-logical-road-map-and-core-results)
2. [Symbols, Unit System, and Approximations](#2-symbols-unit-system-and-approximations)
3. [Fourier Preparation: Pulse Duration, Spectral Width, and a Flat Low-Frequency Spectrum](#3-fourier-preparation-pulse-duration-spectral-width-and-a-flat-low-frequency-spectrum)
4. [RL §5.1: A Single Electron–Ion Encounter](#4-rl-51-a-single-electronion-encounter)
5. [From Velocity Impulse to the Spectrum of One Encounter](#5-from-velocity-impulse-to-the-spectrum-of-one-encounter)
6. [From One Encounter to the Emissivity of Monoenergetic Electrons](#6-from-one-encounter-to-the-emissivity-of-monoenergetic-electrons)
7. [$b_{\min}$, $b_{\max}$, and the Gaunt Factor](#7-b_min-b_max-and-the-gaunt-factor)
8. [RL §5.2: Maxwellian Averaging and Thermal Bremsstrahlung](#8-rl-52-maxwellian-averaging-and-thermal-bremsstrahlung)
9. [RL §5.3: Free–Free Absorption and Kirchhoff's Law](#9-rl-53-freefree-absorption-and-kirchhoffs-law)
10. [Optically Thin and Thick Transfer and Net Cooling](#10-optically-thin-and-thick-transfer-and-net-cooling)
11. [Special-Relativity Preparation: RL §§4.1, 4.2, and 4.6](#11-special-relativity-preparation-rl-41-42-and-46)
12. [Problem 3.6: Coherent and Incoherent Emission](#12-problem-36-coherent-and-incoherent-emission)
13. [Problem 5.1: Collapse of an Isothermal Ionized-Hydrogen Sphere](#13-problem-51-collapse-of-an-isothermal-ionized-hydrogen-sphere)
14. [English assignment-ready solutions](#14-english-assignment-ready-solutions)
15. [Dimensions, Limits, and Common Confusions](#15-dimensions-limits-and-common-confusions)
16. [Review Checklist and Core Equations](#16-review-checklist-and-core-equations)
17. [References](#17-references)

---


## 1. Logical Road Map and Core Results

The term **bremsstrahlung** is also known as **free–free emission**. The electron is free both before and after radiating; the radiation is produced by its acceleration in the ion's Coulomb field.

The logical chain for this week is

$$
\boxed{
\text{one electron--ion encounter}
\longrightarrow
\text{continuous spectrum of an acceleration pulse}
\longrightarrow
\text{monoenergetic electron population}
\longrightarrow
\text{Maxwellian thermal average}
\longrightarrow
j_\nu^{\rm ff},\ \alpha_\nu^{\rm ff}
\longrightarrow
\text{optically thin/thick object}
}.
$$

An electron of speed $v$ passes a heavy ion of charge $Ze$ with impact parameter $b$. The characteristic collision duration is

$$
\boxed{\tau\sim\frac{b}{v}}.
$$

In the small-angle limit, the electron's transverse velocity change is

$$
\boxed{
|\Delta v_\perp|=\frac{2Ze^2}{m_ebv}
}.
$$

In the low-frequency limit $\omega\tau=\omega b/v\ll1$, the spectrum of a single encounter is

$$
\boxed{
\frac{dW(b)}{d\omega}
=
\frac{2e^2}{3\pi c^3}|\Delta\mathbf v|^2
=
\frac{8Z^2e^6}{3\pi c^3m_e^2v^2b^2}
}.
$$

Integrating over all electron–ion encounters per unit volume and time, and over impact parameter, gives the angular-frequency volume emissivity of a monoenergetic electron population:

$$
\boxed{
\epsilon_\omega^{\rm ff}
=
\frac{16\pi e^6}{3\sqrt3\,c^3m_e^2v}
Z^2n_en_i g_{\rm ff}(v,\omega)
}.
$$

After averaging over a Maxwellian electron-speed distribution, the thermal-bremsstrahlung volume emissivity per unit frequency is

$$
\boxed{
\epsilon_\nu^{\rm ff}
=
6.8\times10^{-38}
Z^2n_en_iT^{-1/2}
e^{-h\nu/kT}\bar g_{\rm ff}
}
$$

in ${\rm erg\,s^{-1}\,cm^{-3}\,Hz^{-1}}$. This emissivity is integrated over all directions; the emission coefficient per unit solid angle is

$$
j_\nu^{\rm ff}=\frac{\epsilon_\nu^{\rm ff}}{4\pi}.
$$

The frequency-integrated total emissivity is

$$
\boxed{
\epsilon^{\rm ff}
=
1.4\times10^{-27}
T^{1/2}Z^2n_en_i\bar g_B
}
$$

in ${\rm erg\,s^{-1}\,cm^{-3}}$.

The thermal free–free absorption coefficient follows from Kirchhoff's law:

$$
\boxed{
\alpha_\nu^{\rm ff}
=
3.7\times10^8
T^{-1/2}Z^2n_en_i\nu^{-3}
\left(1-e^{-h\nu/kT}\right)
\bar g_{\rm ff}
}
$$

in ${\rm cm^{-1}}$. In the Rayleigh–Jeans limit $h\nu\ll kT$,

$$
\boxed{
\alpha_\nu^{\rm ff}
\simeq
0.018\,
T^{-3/2}Z^2n_en_i\nu^{-2}\bar g_{\rm ff}
}.
$$

---


## 2. Symbols, Unit System, and Approximations

### 2.1 Symbol Table

| Symbol | Meaning | Notes |
|---|---|---|
| $e$ | Positive elementary charge | The electron charge is $-e$ |
| $Ze$ | Ion charge | $Z$ is the charge number |
| $m_e,m_p$ | Electron and proton masses | The ion in fully ionized hydrogen is a proton |
| $v$ | Initial speed of one electron | RL §5.1 first holds $v$ fixed |
| $b$ | Impact parameter | Closest distance from the ion to the unperturbed straight path |
| $\tau$ | Duration of one encounter | $\tau\sim b/v$ |
| $\omega,\nu$ | Angular and ordinary frequencies | $\omega=2\pi\nu$ |
| $n_e,n_i$ | Electron and ion number densities | Usually expressed in ${\rm cm^{-3}}$ in cgs |
| $g_{\rm ff}$ | Monoenergetic free–free Gaunt factor | Dimensionless; varies slowly with $v,\omega$ |
| $\bar g_{\rm ff}$ | Maxwellian-averaged Gaunt factor | Depends on $T,\nu$ |
| $\bar g_B$ | Frequency-averaged Gaunt factor | Used for the bolometric emissivity |
| $\epsilon_\nu$ | Angle-integrated volume emissivity | ${\rm erg\,s^{-1}\,cm^{-3}\,Hz^{-1}}$ |
| $j_\nu$ | Emission coefficient per unit solid angle | $\epsilon_\nu=4\pi j_\nu$ |
| $\alpha_\nu$ | Net absorption coefficient | Includes the stimulated-emission correction |
| $S_\nu$ | source function | $S_\nu=j_\nu/\alpha_\nu$ |
| $B_\nu(T)$ | Planck function | LTE thermal source function |

### 2.2 Gaussian-cgs Units

RL uses Gaussian-cgs in this chapter. The Coulomb force and Larmor power are, respectively,

$$
F=\frac{|q_1q_2|}{r^2},
\qquad
P=\frac{2q^2a^2}{3c^3}.
$$

In SI, $e^2$ in the Coulomb interaction must be replaced by

$$
\frac{e^2}{4\pi\epsilon_0}.
$$

The numerical coefficients $6.8\times10^{-38}$ and $3.7\times10^8$ assume

$$
n_e,n_i\ [{\rm cm^{-3}}],\quad
T\ [{\rm K}],\quad
\nu\ [{\rm Hz}].
$$

### 2.3 Main Approximations

- The electrons are nonrelativistic: $v\ll c$, with typical thermal energy $kT\ll m_ec^2$.
- The ions are much heavier than the electrons and are initially treated as stationary during an encounter.
- In small-angle scattering, the acceleration is evaluated along the unperturbed straight-line trajectory.
- The plasma is dilute and nondegenerate, and the electrons obey a Maxwell–Boltzmann distribution.
- Thermal emission is approximately isotropic, so $\epsilon_\nu=4\pi j_\nu$.
- The Gaunt factor incorporates corrections from exact trajectories, quantum mechanics, and asymptotic approximations.
- The Kirchhoff relation is used for thermal free–free emission and absorption that satisfy detailed balance.

---


## 3. Fourier Preparation: Pulse Duration, Spectral Width, and a Flat Low-Frequency Spectrum

### 3.1 Why Does a Nonperiodic Encounter Produce a Continuous Spectrum?

Bremsstrahlung is controlled by acceleration, so the quantity that must be Fourier decomposed is $\mathbf a(t)$. One electron–ion encounter produces an acceleration pulse of finite duration, not an infinitely repeated periodic signal.

A strictly periodic signal can be written as a Fourier series:

$$
a(t)=\sum_n a_ne^{-in\omega_0t},
$$

It therefore has power only at the discrete frequencies $n\omega_0$. The Fourier transform of an isolated pulse is instead a continuous function:

$$
\widetilde{\mathbf a}(\omega)
=
\int_{-\infty}^{+\infty}
\mathbf a(t)e^{i\omega t}\,dt.
$$

A single encounter therefore produces a continuous spectrum. If a periodic signal lasts only a finite time, its ideal spectral lines are also broadened by an amount of order the inverse observing duration.

### 3.2 Why Are the Two Limits Set by $\omega\tau$?

The encounter lasts for a time $\tau$. Across the pulse, the Fourier phase changes by an amount of order

$$
\Delta\phi\sim\omega\tau.
$$

If $\omega\tau\ll1$, then

$$
e^{i\omega t}\simeq1,
$$

Contributions from different time slices add almost in phase:

$$
\widetilde{\mathbf a}(\omega)
\simeq
\int\mathbf a(t)dt
=
\Delta\mathbf v.
$$

If $\omega\tau\gg1$, the exponential factor winds through many phases during one encounter. Contributions at different times then cancel in the complex plane, and $|\widetilde{\mathbf a}(\omega)|$ decreases rapidly.

The dividing frequency is therefore

$$
\boxed{
\omega_c\tau\sim1,
\qquad
\omega_c\sim\frac1\tau
}.
$$

### 3.3 Why Does a Shorter Pulse Have a Broader Spectrum?

For a pulse spectrum that begins at $\omega=0$ and does not fall until near $\omega_c$, the frequency range with appreciable power is approximately

$$
0\lesssim\omega\lesssim\omega_c.
$$

Thus

$$
\Delta\omega\sim\omega_c\sim\frac1\tau.
$$

A shorter pulse varies more rapidly in time, so higher-frequency Fourier components are needed to construct that rapid variation.

“Spectrally broad” describes the range along the horizontal axis with appreciable power; “large amplitude” describes the height at a particular frequency. They are not the same concept.

### 3.4 Why Is the Low-Frequency Spectrum Approximately Flat?

When $\omega\tau\ll1$,

$$
\widetilde{\mathbf a}(\omega)simeq\Delta\mathbf v,
$$

which has no explicit dependence on $\omega$. Because

$$
\frac{dW}{d\omega}
\propto
|\widetilde{\mathbf a}(\omega)|^2,
$$

we obtain

$$
\frac{dW}{d\omega}\simeq\text{constant}.
$$

Plotting $dW/d\omega$ against $\omega$ therefore gives an approximately horizontal line, hence the name flat low-frequency spectrum. “Flat” here refers specifically to the plotted spectral density; a plot of $\nu dW/d\nu$ is not flat.

### 3.5 Why Can the Spectrum Extend to $\omega\rightarrow0$?

In the zero-frequency limit,

$$
\widetilde{\mathbf a}(0)
=
\int\mathbf a(t)dt
=
\Delta\mathbf v.
$$

The electron's velocity direction changes after scattering, so $\Delta\mathbf v\neq0$. Therefore

$$
\lim_{\omega\to0}\frac{dW}{d\omega}
$$

is finite. Exact $\omega=0$ does not mean that a zero-energy photon is emitted; it describes the limiting spectral density at arbitrarily low but nonzero frequency. At low frequencies a real plasma is also limited by the plasma cutoff and free–free self-absorption.

---


## 4. RL §5.1: A Single Electron–Ion Encounter

### 4.1 Geometric Setup

Place the ion at the origin. Let the electron initially travel along the $x$ direction and pass its point of closest approach, $y=b$, at $t=0$. Its unperturbed straight-line trajectory is

$$
\mathbf r(t)=vt\,\hat{\mathbf x}+b\,\hat{\mathbf y}.
$$

The electron–ion separation is

$$
\boxed{
R(t)=\sqrt{b^2+v^2t^2}
}.
$$

The ion has charge $+Ze$ and the electron has charge $-e$. The attractive force on the electron is

$$
\mathbf F(t)
=
-Ze^2
\frac{vt\,\hat{\mathbf x}+b\,\hat{\mathbf y}}
{(b^2+v^2t^2)^{3/2}}.
$$

Therefore

$$
\mathbf a(t)
=
-\frac{Ze^2}{m_e}
\frac{vt\,\hat{\mathbf x}+b\,\hat{\mathbf y}}
{(b^2+v^2t^2)^{3/2}}.
$$

### 4.2 Why Does the Parallel Acceleration Cancel?

The component parallel to the initial velocity is

$$
a_x(t)
=
-\frac{Ze^2}{m_e}
\frac{vt}{(b^2+v^2t^2)^{3/2}}.
$$

This is an odd function: $a_x(-t)=-a_x(t)$. The electron is pulled forward while approaching the ion and backward while leaving it; in the straight-line approximation the two contributions cancel:

$$
\Delta v_x=\int_{-\infty}^{+\infty}a_x(t)dt=0.
$$

### 4.3 Why Does the Transverse Acceleration Accumulate?

The transverse component is

$$
a_y(t)
=
-\frac{Ze^2}{m_e}
\frac{b}{(b^2+v^2t^2)^{3/2}}.
$$

This is an even function. Both before and after closest approach, the ion pulls the electron toward the origin, so the transverse effects accumulate in the same direction.

The transverse velocity change is

$$
\Delta v_y
=
-\frac{Ze^2b}{m_e}
\int_{-\infty}^{+\infty}
\frac{dt}{(b^2+v^2t^2)^{3/2}}.
$$

Let

$$
u=\frac{vt}{b},
\qquad
dt=\frac{b}{v}du,
$$

Then

$$
\Delta v_y
=
-\frac{Ze^2}{m_ebv}
\int_{-\infty}^{+\infty}
\frac{du}{(1+u^2)^{3/2}}.
$$

Because

$$
\frac{d}{du}
\left(\frac{u}{\sqrt{1+u^2}}\right)
=
\frac{1}{(1+u^2)^{3/2}},
$$

the integral is

$$
\left[
\frac{u}{\sqrt{1+u^2}}
\right]_{-\infty}^{+\infty}
=1-(-1)=2.
$$

Finally,

$$
\boxed{
\Delta v_y=-\frac{2Ze^2}{m_ebv},
\qquad
|\Delta v_\perp|=\frac{2Ze^2}{m_ebv}
}.
$$

### 4.4 Why Are Slower Electrons Deflected More Strongly?

At fixed $b$, the characteristic acceleration near closest approach is

$$
a_{\rm typ}\sim\frac{Ze^2}{m_eb^2},
$$

and the interaction time is

$$
\tau\sim\frac{b}{v}.
$$

Therefore

$$
\Delta v_\perp\sim a_{\rm typ}\tau
\sim\frac{Ze^2}{m_ebv}.
$$

The small deflection angle satisfies

$$
\theta\simeq\frac{|\Delta v_\perp|}{v}
=
\frac{2Ze^2}{m_ebv^2}.
$$

A slower electron both feels the force for longer and has a smaller initial forward speed, so the deflection angle grows as $v^{-2}$.

### 4.5 Condition for the Straight-Line Approximation

We require

$$
|\Delta v_\perp|\ll v,
$$

or

$$
\frac{2Ze^2}{m_ebv^2}\ll1.
$$

If $b$ is too small or $v$ too low, the electron undergoes large-angle scattering and the straight-line approximation fails. Exact Rutherford scattering obeys

$$
\tan\frac{\Theta}{2}
=
\frac{Ze^2}{m_ebv^2},
$$

whose small-angle limit agrees with the expression above.

---


## 5. From Velocity Impulse to the Spectrum of One Encounter

### 5.1 Electric Dipole Moment and Fourier Convention

Treating the heavy ion as fixed at the origin, the time-dependent dipole moment of the electron–ion system is

$$
\mathbf d(t)=-e\mathbf r(t).
$$

Therefore

$$
\ddot{\mathbf d}(t)=-e\mathbf a(t).
$$

RL uses the convention

$$
\ddot{\mathbf d}(\omega)
=
\frac{1}{2\pi}
\int_{-\infty}^{+\infty}
\ddot{\mathbf d}(t)e^{i\omega t}dt.
$$

Parseval's theorem and the dipole-radiation power

$$
P(t)=\frac{2|\ddot{\mathbf d}(t)|^2}{3c^3}
$$

give the positive-frequency energy spectrum

$$
\boxed{
\frac{dW}{d\omega}
=
\frac{8\pi}{3c^3}
|\ddot{\mathbf d}(\omega)|^2
}.
$$

### 5.2 Low-Frequency Limit

If

$$
\omega\tau
=
\frac{\omega b}{v}
\ll1,
$$

then $e^{i\omega t}\simeq1$, so

$$
\ddot{\mathbf d}(\omega)
\simeq
-\frac{e}{2\pi}
\int\mathbf a(t)dt
=
-\frac{e}{2\pi}\Delta\mathbf v.
$$

Substitution into the spectral formula gives

$$
\frac{dW}{d\omega}
=
\frac{8\pi}{3c^3}
\frac{e^2}{4\pi^2}
|\Delta\mathbf v|^2
=
\boxed{
\frac{2e^2}{3\pi c^3}|\Delta\mathbf v|^2
}.
$$

Substituting also

$$
|\Delta\mathbf v|simeq|\Delta v_\perp|
=
\frac{2Ze^2}{m_ebv},
$$

gives

$$
\boxed{
\frac{dW(b)}{d\omega}
=
\frac{8Z^2e^6}
{3\pi c^3m_e^2v^2b^2},
\qquad
\frac{\omega b}{v}\ll1
}.
$$

### 5.3 Why Does the High-Frequency Spectrum Decline?

For a given $b$, the encounter lasts $\tau\sim b/v$. When

$$
\omega\gg\frac{v}{b},
$$

the Fourier phase oscillates many times during the encounter and the integral cancels. RL represents this behavior by the asymptotic step approximation

$$
\frac{dW(b)}{d\omega}simeq
\begin{cases}
\displaystyle
\frac{8Z^2e^6}{3\pi c^3m_e^2v^2b^2},
&b\ll v/\omega,\\[2mm]
0,&b\gg v/\omega.
\end{cases}
$$

The true spectrum falls smoothly rather than as a strict step; the exact calculation and the Gaunt factor correct this difference.

---


## 6. From One Encounter to the Emissivity of Monoenergetic Electrons

### 6.1 Number of Encounters per Unit Volume and Time

In a time $dt$, one electron travels a distance $vdt$. Trajectories with impact parameter between $b$ and $b+db$ span the area

$$
dA=2\pi bdb.
$$

The swept volume is

$$
dV_{\rm sweep}=vdt\,2\pi bdb.
$$

For ion number density $n_i$, the corresponding encounter rate per electron is

$$
d\Gamma=n_iv\,2\pi bdb.
$$

Multiplying by the electron number density $n_e$, the number of encounters per unit volume and time is

$$
\boxed{
\frac{dN_{\rm coll}}{dVdt}
=
n_en_iv\,2\pi bdb
}.
$$

### 6.2 Multiply by the Spectrum of One Encounter

$$
d\epsilon_\omega^{\rm ff}
=
\left(n_en_iv\,2\pi bdb\right)
\frac{dW(b)}{d\omega}.
$$

Substituting the single-encounter result gives

$$
d\epsilon_\omega^{\rm ff}
=
n_en_iv\,2\pi bdb
\frac{8Z^2e^6}
{3\pi c^3m_e^2v^2b^2}.
$$

which simplifies to

$$
\boxed{
d\epsilon_\omega^{\rm ff}
=
\frac{16Z^2e^6}{3c^3m_e^2v}
n_en_i\frac{db}{b}
}.
$$

Therefore

$$
\epsilon_\omega^{\rm ff}
=
\frac{16Z^2e^6}{3c^3m_e^2v}
n_en_i
\int_{b_{\min}}^{b_{\max}}\frac{db}{b}.
$$

The integral gives

$$
\boxed{
\epsilon_\omega^{\rm ff}
=
\frac{16Z^2e^6}{3c^3m_e^2v}
n_en_i
\ln\left(\frac{b_{\max}}{b_{\min}}\right)
}.
$$

### 6.3 Why Does Every Logarithmic Interval Contribute Equally?

The radiation from one encounter decreases as $b^{-2}$, but the number of encounters in an annulus grows as $bdb$:

$$
\frac{dW}{d\omega}\times2\pi bdb
\propto
\frac{1}{b^2}bdb
=
\frac{db}{b}
=
d\ln b.
$$

Equal-width logarithmic intervals such as $[b,10b]$ and $[10b,100b]$ therefore contribute approximately equally. This is also why the lower and upper cutoffs enter only logarithmically.

---


## 7. $b_{\min}$, $b_{\max}$, and the Gaunt Factor

### 7.1 Maximum Impact Parameter

At a fixed observing frequency $\omega$, we require

$$
\omega\frac{b}{v}\lesssim1.
$$

Hence

$$
\boxed{
b_{\max}\sim\frac{v}{\omega}
}.
$$

More distant encounters vary too slowly, so their Fourier contributions at that frequency cancel in phase.

### 7.2 Classical Minimum Scale

The small-angle approximation fails when $\Delta v_\perp\sim v$. In order of magnitude,

$$
b_{\min,\rm cl}\sim\frac{Ze^2}{m_ev^2}.
$$

RL's particular asymptotic matching defines this scale with an $O(1)$ numerical factor; such a constant has little effect inside the logarithm.

### 7.3 Quantum Minimum Scale

The electron de Broglie wavelength is of order

$$
\lambda_{\rm dB}\sim\frac{\hbar}{m_ev}.
$$

When $b$ is comparable to this wavelength, a classical definite trajectory no longer applies, so

$$
b_{\min,\rm qm}\sim\frac{\hbar}{m_ev}.
$$

### 7.4 Gaunt factor

In the simple logarithmic approximation, define

$$
g_{\rm ff}(v,\omega)
\simeq
\frac{\sqrt3}{\pi}
\ln\left(\frac{b_{\max}}{b_{\min}}\right).
$$

that is,

$$
\ln\left(\frac{b_{\max}}{b_{\min}}\right)
=
\frac{\pi}{\sqrt3}g_{\rm ff}.
$$

Substitution into the result of §6 gives

$$
\boxed{
\epsilon_\omega^{\rm ff}
=
\frac{16\pi e^6}{3\sqrt3\,c^3m_e^2v}
Z^2n_en_i g_{\rm ff}(v,\omega)
}.
$$

The Gaunt factor is not an additional emission mechanism. It is a dimensionless correction from the classical approximation to the exact quantum result and retains a slow dependence on frequency and temperature.

---


## 8. RL §5.2: Maxwellian Averaging and Thermal Bremsstrahlung

### 8.1 Maxwellian Speed Distribution

The three-dimensional velocity distribution of thermal electrons is

$$
f(\mathbf v)d^3v
=
\left(\frac{m_e}{2\pi kT}\right)^{3/2}
e^{-m_ev^2/2kT}d^3v.
$$

For an isotropic distribution, $d^3v=4\pi v^2dv$, so the speed distribution is

$$
P(v)dv
=
4\pi
\left(\frac{m_e}{2\pi kT}\right)^{3/2}
v^2e^{-m_ev^2/2kT}dv.
$$

### 8.2 Why Is the Lower Integration Limit Nonzero?

Producing a single photon of frequency $\nu$ requires energy $h\nu$. Neglecting recoil of the heavy ion, energy conservation requires

$$
\frac12m_ev^2\ge h\nu.
$$

Therefore

$$
\boxed{
v_{\min}=\sqrt{\frac{2h\nu}{m_e}}
}.
$$

This is a quantum restriction arising from photon discreteness. With angular frequency one should write $\hbar\omega$, since $h\nu=\hbar\omega$.

### 8.3 How Does the Exponential Cutoff Arise?

The principal speed dependence of the monoenergetic emissivity is $1/v$. The thermal average therefore contains

$$
\int_{v_{\min}}^\infty
\frac1vP(v)dv
\propto
\int_{v_{\min}}^\infty
v e^{-m_ev^2/2kT}dv.
$$

Let $A=m_e/(2kT)$:

$$
\int_{v_{\min}}^\infty ve^{-Av^2}dv
=
\frac{1}{2A}e^{-Av_{\min}^2}
=
\frac{kT}{m_e}e^{-h\nu/kT}.
$$

Thus the high-frequency exponential factor is

$$
\boxed{e^{-h\nu/kT}}.
$$

Physically, a high-energy photon requires an electron from the high-energy tail of the Maxwell distribution. The thermal cutoff frequency is of order

$$
\boxed{\nu_{\rm th}\sim\frac{kT}{h}}.
$$

### 8.4 Where Does $T^{-1/2}$ Come From?

Combining the Maxwell normalization with the speed integral gives

$$
\left(\frac{m_e}{kT}\right)^{3/2}
\frac{kT}{m_e}
\propto
T^{-1/2}.
$$

Equivalently, the characteristic thermal speed is

$$
v_{\rm th}\sim\sqrt{\frac{kT}{m_e}}
$$

while the monoenergetic emissivity varies as $1/v$, so

$$
\epsilon_\nu^{\rm ff}\propto v_{\rm th}^{-1}\propto T^{-1/2}
$$

provided the low frequency $h\nu\ll kT$ is held fixed, making the exponential factor approximately unity.

### 8.5 Complete Spectral Emissivity

In symbolic form,

$$
\epsilon_\nu^{\rm ff}
=
\frac{2^5\pi e^6}{3m_ec^3}
\left(\frac{2\pi}{3km_e}\right)^{1/2}
T^{-1/2}Z^2n_en_i
e^{-h\nu/kT}\bar g_{\rm ff}.
$$

Substituting the Gaussian-cgs constants gives

$$
\boxed{
\epsilon_\nu^{\rm ff}
=
6.8\times10^{-38}
Z^2n_en_iT^{-1/2}
e^{-h\nu/kT}\bar g_{\rm ff}
}.
$$

The numerical coefficient is not merely a unit conversion; it contains $e,m_e,c,k,\pi$, the Maxwell normalization, and the conversion $d\omega=2\pi d\nu$.

### 8.6 Why Do Fixed Low-Frequency and Total Power Have Opposite Temperature Dependences?

At fixed low frequency $h\nu\ll kT$,

$$
\epsilon_\nu^{\rm ff}\propto T^{-1/2}.
$$

But the spectral width extends to $\nu_{\rm th}\sim kT/h\propto T$. Therefore, approximately,

$$
\epsilon^{\rm ff}
=
\int\epsilon_\nu^{\rm ff}d\nu
\sim
T^{-1/2}\times T
=
T^{1/2}.
$$

Exact frequency integration gives

$$
\boxed{
\epsilon^{\rm ff}
=
1.4\times10^{-27}
T^{1/2}Z^2n_en_i\bar g_B
}.
$$

The decline of the fixed-low-frequency spectral density does not contradict the increase in bolometric luminosity: a hotter plasma spreads its radiation over a wider range extending to higher frequencies.

---


## 9. RL §5.3: Free–Free Absorption and Kirchhoff's Law

### 9.1 Conditions for Applying Kirchhoff's Law

In strict thermodynamic equilibrium,

$$
I_\nu=B_\nu(T),
\qquad
\frac{dI_\nu}{ds}=0.
$$

Substituting into the radiative-transfer equation

$$
\frac{dI_\nu}{ds}=j_\nu-\alpha_\nu I_\nu
$$

gives

$$
\boxed{
j_\nu=\alpha_\nu B_\nu(T),
\qquad
S_\nu=\frac{j_\nu}{\alpha_\nu}=B_\nu(T)
}.
$$

In astrophysics this relation may be applied locally under LTE. For a free–free process, the essential conditions are:

- The electrons have an approximately Maxwellian thermal distribution.
- Emission and inverse bremsstrahlung satisfy detailed balance.
- $\alpha_\nu$ is the net absorption coefficient after subtracting stimulated emission.
- The matter can be described by a local temperature $T$.

The Kirchhoff relation does not require the medium to be optically thick. Optical depth determines whether the actual $I_\nu$ approaches $B_\nu$, not whether $S_\nu=B_\nu$ holds.

For nonthermal electrons, non-LTE level populations, external radiative pumping, population inversion, or the treatment of scattering as true absorption, one cannot directly use the simple relation $j_\nu=\alpha_\nu B_\nu$.

### 9.2 Deriving the Absorption Coefficient from the Emissivity

The relation between the angle-integrated emissivity and the emission coefficient is

$$
j_\nu^{\rm ff}
=
\frac{\epsilon_\nu^{\rm ff}}{4\pi}
=
\frac{6.8\times10^{-38}}{4\pi}
T^{-1/2}Z^2n_en_i
e^{-h\nu/kT}\bar g_{\rm ff}.
$$

The Planck function is

$$
B_\nu(T)
=
\frac{2h\nu^3}{c^2}
\frac{1}{e^{h\nu/kT}-1}.
$$

Therefore

$$
\alpha_\nu^{\rm ff}
=
\frac{j_\nu^{\rm ff}}{B_\nu(T)}.
$$

Letting $x=h\nu/kT$ and substituting gives

$$
\alpha_\nu^{\rm ff}
=
\frac{6.8\times10^{-38}c^2}{8\pi h}
T^{-1/2}Z^2n_en_i\nu^{-3}
e^{-x}(e^x-1)\bar g_{\rm ff}.
$$

Because

$$
e^{-x}(e^x-1)=1-e^{-x},
$$

and

$$
\frac{6.8\times10^{-38}c^2}{8\pi h}
\simeq3.7\times10^8,
$$

we obtain

$$
\boxed{
\alpha_\nu^{\rm ff}
=
3.7\times10^8
T^{-1/2}Z^2n_en_i\nu^{-3}
\left(1-e^{-h\nu/kT}\right)
\bar g_{\rm ff}
}.
$$

### 9.3 Low-Frequency Limit

When $h\nu\ll kT$,

$$
1-e^{-h\nu/kT}
\simeq
\frac{h\nu}{kT}.
$$

and therefore

$$
\alpha_\nu^{\rm ff}
\simeq
3.7\times10^8\frac{h}{k}
T^{-3/2}Z^2n_en_i\nu^{-2}\bar g_{\rm ff}.
$$

Using

$$
3.7\times10^8\frac{h}{k}\simeq0.018,
$$

we obtain

$$
\boxed{
\alpha_\nu^{\rm ff}
\simeq
0.018\,
T^{-3/2}Z^2n_en_i\nu^{-2}\bar g_{\rm ff}
}.
$$

Free–free absorption is strong at low frequencies, so a thermal plasma usually becomes optically thick first at low frequency.

### 9.4 Why Is Scattering Different?

Here the Kirchhoff relation connects true thermal emission with true absorption. If there is also a coherent isotropic scattering coefficient $\sigma_\nu$, the total source function is

$$
S_\nu
=
\frac{\alpha_\nu B_\nu+\sigma_\nu J_\nu}
{\alpha_\nu+\sigma_\nu}.
$$

Scattering only redistributes radiation in direction or frequency; in general one cannot write $j_\nu^{\rm scat}=\sigma_\nu B_\nu$.

---


## 10. Optically Thin and Thick Transfer and Net Cooling

### 10.1 Can $\epsilon^{\rm ff}$ Be Used Only in Optically Thin Media?

No. $\epsilon^{\rm ff}$ describes the free–free radiation produced locally per unit volume and time; it can be calculated in both optically thin and thick media.

What holds only in the optically thin limit is

$$
\boxed{
L_{\rm escape}\simeq\int_V\epsilon^{\rm ff}dV
}.
$$

which assumes that nearly all produced photons escape.

### 10.2 Formal Solution for a Uniform Isothermal Medium

With no incident background and $S_\nu=B_\nu(T)$,

$$
\boxed{
I_\nu
=
B_\nu(T)(1-e^{-\tau_\nu})
}.
$$

In the optically thin limit,

$$
I_\nu\simeq B_\nu\tau_\nu=j_\nu L,
$$

so volume emissivity can be added directly.

In the optically thick limit,

$$
I_\nu\simeq B_\nu(T),
$$

Emission continues in the interior, but most photons are reabsorbed; the escaping radiation is controlled by layers near $\tau_\nu\sim1$.

### 10.3 Local Net Cooling Rate

The local net radiative cooling rate of the gas is

$$
q_{\rm net}
=
4\pi\int_0^\infty
\left(j_\nu-\alpha_\nu J_\nu\right)d\nu.
$$

For an optically thin medium with weak external radiation, $J_\nu\simeq0$:

$$
q_{\rm net}\simeq4\pi\int j_\nu d\nu
=
\epsilon^{\rm ff}.
$$

In an optically thick medium near LTE, $J_\nu\simeq B_\nu=S_\nu$:

$$
j_\nu-\alpha_\nu J_\nu
\simeq
\alpha_\nu(B_\nu-J_\nu)
\simeq0.
$$

Thus $\epsilon^{\rm ff}$ is not the net cooling rate in an optically thick interior; energy is transported mainly by radiative diffusion to the surface and then escapes.

---


## 11. Special-Relativity Preparation: RL §§4.1, 4.2, and 4.6

This week's §§5.1–5.3 results are primarily nonrelativistic; the following background is needed for relativistic bremsstrahlung in the next section.

### 11.1 Lorentz Factor and Coordinate Transformation

$$
\beta=\frac{v}{c},
\qquad
\gamma=\frac{1}{\sqrt{1-\beta^2}}.
$$

A Lorentz boost along the $x$ direction is

$$
x'=\gamma(x-vt),
\qquad
t'=\gamma\left(t-\frac{vx}{c^2}\right).
$$

The $vx/c^2$ term in $t'$ shows that simultaneity depends on the reference frame.

### 11.2 Four-Vectors

$$
x^\mu=(ct,\mathbf x),
\qquad
p^\mu=\left(\frac{E}{c},\mathbf p\right).
$$

The energy–momentum invariant is

$$
\boxed{E^2-p^2c^2=m^2c^4}.
$$

### 11.3 Field of a Uniformly Moving Charge

In the charge rest frame there is only a Coulomb electric field. After transformation to the laboratory frame:

- The transverse electric field is enhanced.
- The longitudinal electric field is reduced.
- A magnetic field appears.
- In Gaussian-cgs, $\mathbf B=\boldsymbol\beta\times\mathbf E$.

The field of a high-speed charge is compressed into a narrow angular region perpendicular to the direction of motion. In RL §5.4, the fast ion's field is interpreted in the electron rest frame as a brief electromagnetic pulse, and a scattering picture is then used to treat relativistic bremsstrahlung.

---


## 12. Problem 3.6: Coherent and Incoherent Emission

### 12.1 Problem Setup

There are $N$ radiating particles. Each produces an electric-field pulse of the same shape $E_0(t)$, arriving at time $t_i$:

$$
E(t)=\sum_{i=1}^{N}E_0(t-t_i).
$$

Adopt the RL Fourier convention

$$
\widehat E(\omega)
=
\frac{1}{2\pi}\int_{-\infty}^{+\infty}
E(t)e^{i\omega t}dt.
$$

### 12.2 (a) A Time Shift Corresponds to a Frequency-Domain Phase

For the $i$th pulse, let $u=t-t_i$, so that $t=u+t_i$:

$$
\begin{aligned}
\widehat E_i(\omega)
&=
\frac{1}{2\pi}\int E_0(t-t_i)e^{i\omega t}dt\\
&=
e^{i\omega t_i}
\frac{1}{2\pi}\int E_0(u)e^{i\omega u}du\\
&=
e^{i\omega t_i}\widehat E_0(\omega).
\end{aligned}
$$

Using linearity gives

$$
\boxed{
\widehat E(\omega)
=
\widehat E_0(\omega)
\sum_{i=1}^{N}e^{i\omega t_i}
}.
$$

The phase factor has unit modulus, so a time shift does not change the spectral intensity of an individual pulse.

### 12.3 (b) Random-Phase Average

$$
\begin{aligned}
\left|\sum_i e^{i\omega t_i}\right|^2
&=
\left(\sum_i e^{i\omega t_i}\right)
\left(\sum_j e^{-i\omega t_j}\right)\\
&=
\sum_i\sum_j e^{i\omega(t_i-t_j)}\\
&=
N+\sum_{i\ne j}e^{i\omega(t_i-t_j)}.
\end{aligned}
$$

The $N$ diagonal terms with $i=j$ all equal unity. For independent random arrival times, $\phi_{ij}=\omega(t_i-t_j)$ is a random phase,

$$
\left\langle e^{i\phi_{ij}}\right\rangle
=
\langle\cos\phi_{ij}\rangle
+i\langle\sin\phi_{ij}\rangle
=0.
$$

Therefore

$$
\boxed{
\left\langle
\left|\sum_i e^{i\omega t_i}\right|^2
\right\rangle
=N
}.
$$

$1/\sqrt2$ is the RMS of $\cos\phi$ or $\sin\phi$, not its mean; the mean of a uniformly random phase is zero.

### 12.4 (c) Incoherent Spectrum

$$
\boxed{
\left\langle|\widehat E(\omega)|^2\right\rangle
=
N|\widehat E_0(\omega)|^2
}.
$$

Therefore

$$
\boxed{
\left\langle\frac{dW}{d\omega}\right\rangle
=
N\frac{dW_0}{d\omega}
}.
$$

The result does not require the pulses to be separated in time; the essential condition is that the cross-term phases be random.

### 12.5 (d) Coherent Limit

If all particles lie within a region much smaller than the wavelength and emit simultaneously, both propagation and emission phase differences can be neglected:

$$
t_i\simeq t_0.
$$

Then

$$
\widehat E(\omega)
=
N e^{i\omega t_0}\widehat E_0(\omega).
$$

Therefore

$$
\boxed{
|\widehat E(\omega)|^2
=
N^2|\widehat E_0(\omega)|^2
}
$$

and

$$
\boxed{
\frac{dW}{d\omega}
=
N^2\frac{dW_0}{d\omega}
}.
$$

In the incoherent case intensities add, giving $N$. In the coherent case electric-field amplitudes first add to $N$ times one amplitude and are then squared, giving $N^2$.

---


## 13. Problem 5.1: Collapse of an Isothermal Ionized-Hydrogen Sphere

### 13.1 Problem Setup and Number Density

A fully ionized hydrogen sphere maintains:

- Constant total mass $M_0$.
- A uniform density that changes with time.
- A constant isothermal temperature $T_0$.
- A radius $R(t)$ that decreases during collapse.

The sphere's volume is

$$
V(t)=\frac{4\pi}{3}R(t)^3.
$$

Its mass density is

$$
\rho(t)=\frac{M_0}{V(t)}
=
\frac{3M_0}{4\pi R(t)^3}.
$$

In fully ionized hydrogen, neglecting the electron mass,

$$
\boxed{
n_e(t)=n_i(t)
=
\frac{\rho(t)}{m_p}
=
\frac{3M_0}{4\pi m_pR(t)^3}
}.
$$

“Uniform density” means that the density is spatially uniform throughout the sphere at a given time; it does not mean that the density is constant in time.

### 13.2 (a) Optically Thin Phase

Fully ionized hydrogen has $Z=1$. The frequency-integrated free–free volume emissivity is

$$
\epsilon^{\rm ff}
=
C_{\rm ff}\bar g_B T_0^{1/2}n_en_i,
\qquad
C_{\rm ff}=1.4\times10^{-27}.
$$

In the optically thin regime, nearly all photons escape:

$$
L_{\rm thin}=\epsilon^{\rm ff}V.
$$

Substitute $n_e=n_i=3M_0/(4\pi m_pR^3)$ and $V=4\pi R^3/3$:

$$
\begin{aligned}
L_{\rm thin}(t)
&=
C_{\rm ff}\bar g_BT_0^{1/2}
\left(\frac{3M_0}{4\pi m_pR^3}\right)^2
\frac{4\pi R^3}{3}\\
&=
\boxed{
\frac{3C_{\rm ff}\bar g_B}{4\pi m_p^2}
\frac{M_0^2T_0^{1/2}}{R(t)^3}
}.
\end{aligned}
$$

Therefore

$$
\boxed{
L_{\rm thin}\propto M_0^2T_0^{1/2}R^{-3}
}.
$$

During collapse, $n_en_i\propto R^{-6}$ while the volume shrinks only as $R^3$, so the total luminosity increases as $R^{-3}$.

### 13.3 (b) Optically Thick Phase

When the frequencies carrying most of the energy are optically thick and the radiation is nearly thermalized, the surface flux is

$$
F=\sigma_{\rm SB}T_0^4.
$$

The sphere has surface area $4\pi R^2$, so

$$
\boxed{
L_{\rm thick}(t)
=
4\pi R(t)^2\sigma_{\rm SB}T_0^4
}.
$$

At fixed $T_0$,

$$
\boxed{L_{\rm thick}\propto R^2}.
$$

Continued collapse reduces the radiating surface area, so the luminosity decreases. The problem does not specify a dynamical equation for $R(t)$; retaining $R(t)$ therefore gives the requested time dependence.

### 13.4 (c) Transition Time $t_1$

Estimate the transition by continuously matching the optically thin and thick limits, setting

$$
L_{\rm thin}(t_1)
\simeq
L_{\rm thick}(t_1).
$$

Let $R_1=R(t_1)$:

$$
\frac{3C_{\rm ff}\bar g_B}{4\pi m_p^2}
\frac{M_0^2T_0^{1/2}}{R_1^3}
=
4\pi R_1^2\sigma_{\rm SB}T_0^4.
$$

Therefore

$$
\boxed{
[R(t_1)]^5
=
\frac{3C_{\rm ff}\bar g_B}
{16\pi^2m_p^2\sigma_{\rm SB}}
M_0^2T_0^{-7/2}
}.
$$

Equivalently,

$$
\boxed{
R(t_1)
=
\left[
\frac{3C_{\rm ff}\bar g_B}
{16\pi^2m_p^2\sigma_{\rm SB}}
M_0^2T_0^{-7/2}
\right]^{1/5}
}.
$$

This gives

$$
R_1\propto
\bar g_B^{1/5}M_0^{2/5}T_0^{-7/10}.
$$

Strictly, $\alpha_\nu^{\rm ff}$ varies with frequency, so different frequencies reach $\tau_\nu\sim1$ at different radii. The expression above is an order-of-magnitude match for the transition in bolometric luminosity, not a statement that every frequency becomes optically thick simultaneously.

### 13.5 (d) Qualitative Luminosity Curve

As $R(t)$ decreases,

$$
L(t)\simeq
\begin{cases}
\displaystyle
\frac{3C_{\rm ff}\bar g_B}{4\pi m_p^2}
M_0^2T_0^{1/2}R(t)^{-3},
&\text{optically thin},\\[3mm]
\displaystyle
4\pi\sigma_{\rm SB}T_0^4R(t)^2,
&\text{optically thick}.
\end{cases}
$$

The luminosity first rises during collapse, reaches a maximum near the optically thin-to-thick transition, and then declines. The true transition is smooth; the slope as a function of time depends on the unspecified $R(t)$.

The problem explicitly assumes that the temperature remains $T_0$. A real collapsing gas generally heats after becoming optically thick because cooling is impeded, but that physics lies outside this model.

---


## 14. English assignment-ready solutions

### 14.1 Problem 3.6: incoherent and coherent emission

Let

$$
E(t)=\sum_{i=1}^{N}E_0(t-t_i),
$$

and adopt the Fourier convention

$$
\widehat E(\omega)=\frac{1}{2\pi}
\int_{-\infty}^{\infty}E(t)e^{i\omega t}dt.
$$

For each pulse, the substitution $u=t-t_i$ gives

$$
\widehat E_i(\omega)
=e^{i\omega t_i}\widehat E_0(\omega).
$$

Therefore,

$$
\boxed{
\widehat E(\omega)
=\widehat E_0(\omega)
\sum_{i=1}^{N}e^{i\omega t_i}
}.
$$

The squared phase sum is

$$
\begin{aligned}
\left|\sum_{i=1}^{N}e^{i\omega t_i}\right|^2
&=\sum_{i=1}^{N}\sum_{j=1}^{N}
e^{i\omega(t_i-t_j)}\\
&=N+\sum_{i\ne j}e^{i\omega(t_i-t_j)}.
\end{aligned}
$$

For independent random arrival times, the cross terms have random phases and vanish upon averaging:

$$
\left\langle e^{i\omega(t_i-t_j)}\right\rangle=0,
\qquad i\ne j.
$$

Hence,

$$
\boxed{
\left\langle|\widehat E(\omega)|^2\right\rangle
=N|\widehat E_0(\omega)|^2
},
$$

and the measured spectrum is $N$ times that of one pulse. This result does not require the pulses to be temporally separated; it requires their relative phases to be random.

If all particles occupy a region much smaller than a wavelength and emit simultaneously, their phases are equal. Setting $t_i=t_0$ gives

$$
\widehat E(\omega)
=Ne^{i\omega t_0}\widehat E_0(\omega),
$$

so

$$
\boxed{
|\widehat E(\omega)|^2
=N^2|\widehat E_0(\omega)|^2
}.
$$

Thus incoherent intensities scale as $N$, whereas coherent electric-field amplitudes add before squaring and produce the $N^2$ scaling.

### 14.2 Problem 5.1: an isothermally collapsing ionized hydrogen sphere

For a uniform sphere of mass $M_0$ and radius $R(t)$,

$$
V=\frac{4\pi}{3}R^3,
\qquad
n_e=n_i=\frac{3M_0}{4\pi m_pR^3}.
$$

For ionized hydrogen, $Z=1$, and the frequency-integrated free-free emissivity is

$$
\epsilon^{\rm ff}
=C_{\rm ff}\bar g_BT_0^{1/2}n_en_i,
\qquad
C_{\rm ff}=1.4\times10^{-27}
$$

in cgs units. While the sphere is optically thin, all locally emitted radiation escapes, so

$$
\begin{aligned}
L_{\rm thin}(t)
&=\epsilon^{\rm ff}V\\
&=\boxed{
\frac{3C_{\rm ff}\bar g_B}{4\pi m_p^2}
\frac{M_0^2T_0^{1/2}}{R(t)^3}
}.
\end{aligned}
$$

Once the sphere is optically thick and its emergent radiation is thermalized, its luminosity is the blackbody surface luminosity,

$$
\boxed{
L_{\rm thick}(t)
=4\pi R(t)^2\sigma_{\rm SB}T_0^4
}.
$$

An estimate of the transition time $t_1$ follows by matching the optically thin and thick limits. With $R_1=R(t_1)$,

$$
\frac{3C_{\rm ff}\bar g_B}{4\pi m_p^2}
\frac{M_0^2T_0^{1/2}}{R_1^3}
=4\pi R_1^2\sigma_{\rm SB}T_0^4,
$$

or

$$
\boxed{
[R(t_1)]^5
=
\frac{3C_{\rm ff}\bar g_B}
{16\pi^2m_p^2\sigma_{\rm SB}}
M_0^2T_0^{-7/2}
}.
$$

As the sphere contracts, the optically thin luminosity rises as $R^{-3}$. Near the transition it reaches a maximum. In the optically thick regime, the fixed-temperature blackbody luminosity falls as $R^2$. The exact shape as a function of time depends on the unspecified collapse law $R(t)$, and the transition is smooth because the free-free optical depth depends on frequency.

---


## 15. Dimensions, Limits, and Common Confusions

### 15.1 Dimensions of the Single-Encounter Spectrum

In Gaussian-cgs, $[e^2]={\rm erg\,cm}$, so

$$
\left[
\frac{e^2}{c^3}|\Delta v|^2
\right]
=
{\rm erg\,s}
=
\left[\frac{dW}{d\omega}\right].
$$

### 15.2 $j_\nu$, $\epsilon_\nu$, and $L_\nu$

$$
\epsilon_\nu=4\pi j_\nu
$$

holds only for isotropic emission. $j_\nu$ is per unit solid angle, while $\epsilon_\nu$ has already been integrated over $4\pi$; in the optically thin limit, integrating it over volume gives $L_\nu$.

### 15.3 $S_\nu=B_\nu$ Does Not Imply $I_\nu=B_\nu$

An LTE thermal process gives

$$
S_\nu=\frac{j_\nu}{\alpha_\nu}=B_\nu.
$$

The actual intensity is still

$$
I_\nu
=
I_{\nu,0}e^{-\tau_\nu}
+B_\nu(1-e^{-\tau_\nu}).
$$

It approaches $B_\nu$ only when $\tau_\nu\gg1$.

### 15.4 The Vertical Axis Must Be Specified for a “Flat Spectrum”

The low-frequency flatness refers to

$$
\frac{dW}{d\omega}\simeq\text{constant}
$$

or equivalently $dW/d\nu\simeq\text{constant}$. Because $dW/d\lambda$ contains the Jacobian of the variable transformation, the spectrum is not flat when wavelength is used on the horizontal axis.

### 15.5 Coherent $N^2$ Versus Incoherent $N$

The incoherent case does not lack cross terms; rather, the cross terms cancel in an ensemble or time average. In the coherent case all cross terms remain:

$$
N^2=N+N(N-1).
$$

### 15.6 Validity Checks

- $v\ll c$: otherwise the relativistic corrections of RL §5.4 are required.
- $h\nu\lesssim kT$: low-frequency approximation; for $h\nu\gg kT$ there is an exponential cutoff.
- $\tau_\nu\ll1$: only then does $L\simeq\epsilon V$.
- $\tau_\nu\gg1$ and LTE: then the emergent intensity approaches $B_\nu$.
- $g_{\rm ff}\sim O(1)$ but is not strictly constant; precision calculations should retain its frequency and temperature dependence.

---


## 16. Review Checklist and Core Equations

### 16.1 You Should Be Able to Explain Independently

- Why a slower electron is deflected more strongly at the same $b$.
- Why a single nonperiodic encounter produces a continuous spectrum.
- Why the low-frequency spectrum is flat when $\omega\tau\ll1$.
- Why a short pulse corresponds to a broad spectrum rather than a lower frequency.
- Why the impact-parameter integral gives $\ln(b_{\max}/b_{\min})$.
- Why the high-frequency thermal spectrum contains $e^{-h\nu/kT}$.
- Why $\epsilon_\nu\propto T^{-1/2}$ at fixed low frequency while the bolometric $\epsilon\propto T^{1/2}$.
- The local LTE conditions for Kirchhoff's law and the distinction between $S_\nu=B_\nu$ and $I_\nu=B_\nu$.
- Why $\epsilon^{\rm ff}$ remains a local emissivity in an optically thick region but is no longer the net cooling rate.
- Why incoherent power scales as $N$ and coherent power as $N^2$.

### 16.2 Equations Worth Memorizing

$$
\tau\sim\frac{b}{v},
\qquad
\omega_c\sim\frac{v}{b}.
$$

$$
|\Delta v_\perp|
=
\frac{2Ze^2}{m_ebv}.
$$

$$
\frac{dW(b)}{d\omega}
=
\frac{8Z^2e^6}
{3\pi c^3m_e^2v^2b^2},
\qquad
\omega b/v\ll1.
$$

$$
\epsilon_\nu^{\rm ff}
=
6.8\times10^{-38}
Z^2n_en_iT^{-1/2}
e^{-h\nu/kT}\bar g_{\rm ff}.
$$

$$
\epsilon^{\rm ff}
=
1.4\times10^{-27}
T^{1/2}Z^2n_en_i\bar g_B.
$$

$$
\alpha_\nu^{\rm ff}
=
3.7\times10^8
T^{-1/2}Z^2n_en_i\nu^{-3}
(1-e^{-h\nu/kT})\bar g_{\rm ff}.
$$

$$
\alpha_\nu^{\rm ff}
\simeq
0.018T^{-3/2}Z^2n_en_i\nu^{-2}\bar g_{\rm ff},
\qquad h\nu\ll kT.
$$

$$
I_\nu
=
I_{\nu,0}e^{-\tau_\nu}
+S_\nu(1-e^{-\tau_\nu}).
$$

$$
\left\langle|\widehat E|^2\right\rangle_{\rm incoh}
=N|\widehat E_0|^2,
\qquad
|\widehat E|^2_{\rm coh}
=N^2|\widehat E_0|^2.
$$

### 16.3 Shortest Physical Summary

$$
\boxed{
\text{Coulomb acceleration pulse}
\rightarrow
\text{continuous flat low-frequency spectrum}
\rightarrow
\text{integration over }b\text{ gives a logarithm}
\rightarrow
\text{Maxwellian average gives }T^{-1/2}e^{-h\nu/kT}
}.
$$

$$
\boxed{
j_\nu^{\rm ff},\alpha_\nu^{\rm ff}
\rightarrow
S_\nu=B_\nu
\rightarrow
\tau_\nu\ll1\text{ probes volume emission,}
\tau_\nu\gg1\text{ probes surface thermal radiation}
}.
$$

---


## 17. References

1. Rybicki, G. B. & Lightman, A. P., *Radiative Processes in Astrophysics*, Chapter 3, Problem 3.6; Chapter 4, §§4.1, 4.2, 4.6; Chapter 5, §§5.1–5.3 and Problem 5.1.
2. AstroBaki, [Thermal Bremsstrahlung](https://casper.astro.berkeley.edu/astrobaki/index.php/Thermal_Bremsstrahlung).
3. AST1440 — Radiation course reading notes, non-relativistic bremsstrahlung week.
