---
title: >-
  AST1440: Polarization, Faraday Rotation, Plasma Refraction, and Scintillation
  — RL §2.4, §§8.1–8.2, and Problem 8.3
description: >-
  A detailed guide to the polarization ellipse and Stokes parameters,
  cold-plasma dispersion, circular birefringence and Faraday rotation in a
  magnetized plasma, RM and DM, plasma refraction and scintillation, with the
  full solution to Problem 8.3 and an appendix on unit systems.
date: '2026-10-01'
tags:
  - AST1440
  - Polarization
  - Faraday rotation
  - Plasma
  - Scintillation
  - Exercises
order: 7
draft: false
sourceHash: a87a17a2c8f8ea025507a1387b8ac9408b416cf0aea6b2861d2642b85bc1808e
translation: AI-assisted English translation
---

# AST1440: Polarization, Faraday Rotation, Plasma Refraction, and Scintillation — RL §2.4, §§8.1–8.2, and Problem 8.3

> Course: AST1440 — Radiation; this session covers polarization, Faraday rotation, radiation bending, and scintillation.  
> Textbook: Rybicki & Lightman, *Radiative Processes in Astrophysics* (RL), §2.4, printed pp. 62–68; §8.1, printed pp. 224–228; §8.2, printed pp. 229–231; Problem 8.3, printed p. 236.  
> Compiled: October 1, 2026.  
> These notes integrate the assigned reading with every follow-up question from discussion, ordered by physical dependency: the polarization ellipse and the Stokes parameters, why the position angle becomes $2\chi$ in the $Q-U$ plane, the criteria for complete and partial polarization, cold-plasma dispersion, how a magnetic field makes left- and right-handed circular polarization distinct eigenmodes, what $k_R$ and $k_L$ mean, a step-by-step derivation of the Faraday rotation formula, the physical meaning of RM and DM and the $0.812/1.232$ coefficients, Faraday depth and RM synthesis, the classical electron radius, the plasma phase screen and the bending angle, scattering and scintillation, and the $\Delta\nu_{\rm d}\tau_{\rm sc}$ relation. Problem 8.3 is presented with a step-by-step derivation followed by an assignment-ready English solution.

## Contents

1. [Preparation Requirements and the Logical Road Map](#1-preparation-requirements-and-the-logical-road-map)
2. [Notation, Unit Systems, Complex-Exponential Convention, and Assumptions](#2-notation-unit-systems-complex-exponential-convention-and-assumptions)
3. [RL §2.4: The Polarization Ellipse and the Stokes Parameters](#3-rl-24-the-polarization-ellipse-and-the-stokes-parameters)
4. [Why $2\chi$ Appears, and the Criteria for Complete and Partial Polarization](#4-why-2chi-appears-and-the-criteria-for-complete-and-partial-polarization)
5. [RL §8.1: Dispersion in a Cold, Isotropic Plasma](#5-rl-81-dispersion-in-a-cold-isotropic-plasma)
6. [From an Isotropic to a Magnetized Plasma](#6-from-an-isotropic-to-a-magnetized-plasma)
7. [$k_R$, $k_L$, Phase Accumulation, and the Rotation of Linear Polarization](#7-k_r-k_l-phase-accumulation-and-the-rotation-of-linear-polarization)
8. [RL §8.2: The Complete Derivation of the Faraday Rotation Formula](#8-rl-82-the-complete-derivation-of-the-faraday-rotation-formula)
9. [RM, DM, and the Line-of-Sight Mean Magnetic Field](#9-rm-dm-and-the-line-of-sight-mean-magnetic-field)
10. [Extensions of Faraday Rotation: Depolarization, Faraday Depth, and RM Synthesis](#10-extensions-of-faraday-rotation-depolarization-faraday-depth-and-rm-synthesis)
11. [Plasma Refraction: Classical Electron Radius, Phase Screen, and Bending Angle](#11-plasma-refraction-classical-electron-radius-phase-screen-and-bending-angle)
12. [Scattering, Pulse Broadening, and Scintillation](#12-scattering-pulse-broadening-and-scintillation)
13. [Problem 8.3: Finding the Mean Magnetic Field from Dispersion and Faraday Rotation](#13-problem-83-finding-the-mean-magnetic-field-from-dispersion-and-faraday-rotation)
14. [English assignment-ready solution](#14-english-assignment-ready-solution)
15. [Review Checklist, Dimensional Checks, Limiting Checks, and Common Confusions](#15-review-checklist-dimensional-checks-limiting-checks-and-common-confusions)
16. [References and Citations](#16-references-and-citations)
17. [Appendix: SI versus Gaussian-cgs Units and Representative Formulas](#17-appendix-si-versus-gaussian-cgs-units-and-representative-formulas)

---

## 1. Preparation Requirements and the Logical Road Map

### 1.1 Scope of the Reading

The assigned material falls into three layers:

1. RL §2.4 establishes the language of polarization: linear, circular, and elliptical polarization and the Stokes parameters.
2. RL §8.2 treats circular birefringence and Faraday rotation for a wave propagating along a background magnetic field.
3. RL Problem 8.3 combines the pulse dispersion of §8.1 with the Faraday rotation of §8.2 to obtain the electron-density-weighted line-of-sight magnetic field.

The instructor will also discuss two extensions that this section of the textbook does not develop in full:

- observational extensions of Faraday rotation, including RM, depolarization, Faraday depth, and RM synthesis;
- refraction, scattering, multipath propagation, and scintillation caused by electron-density inhomogeneities.

Since Problem 8.3 uses the dispersive arrival-time formula of §8.1 directly, these notes derive §8.1 in full rather than quoting that formula as an unexplained result.

### 1.2 The Overall Chain of Causation

This session can be compressed into three interconnected threads.

The first is the description of polarization:

$$
\boxed{
E_x,E_y\text{ amplitudes and phase difference}
\longrightarrow
\text{polarization ellipse}
\longrightarrow
(I,Q,U,V)
}.
$$

The second is propagation through a magnetized plasma:

$$
\boxed{
\mathbf B_0\neq0
\longrightarrow
\text{electron gyration}
\longrightarrow
\epsilon_R\neq\epsilon_L
\longrightarrow
k_R\neq k_L
\longrightarrow
\text{Faraday rotation}
}.
$$

The third is electron-density structure:

$$
\boxed{
n_e(\mathbf r)\text{ inhomogeneity}
\longrightarrow
\text{phase gradients}
\longrightarrow
\text{refraction and multipath propagation}
\longrightarrow
\text{scattering/scintillation}
}.
$$

### 1.3 The Most Important Results of This Lesson

Cold, unmagnetized plasma:

$$
\boxed{
\epsilon(\omega)=1-\frac{\omega_p^2}{\omega^2},
\qquad
\omega^2=\omega_p^2+c^2k^2
}.
$$

Faraday rotation:

$$
\boxed{
\Delta\chi
=
\frac{2\pi e^3}{m_e^2c^2\omega^2}
\int n_eB_\parallel\,ds
=\mathrm{RM}\,\lambda^2
}.
$$

Plasma phase and bending:

$$
\boxed{
\delta\phi=-r_e\lambda N_e,
\qquad
\boldsymbol\alpha
\simeq
-\frac{r_e\lambda^2}{2\pi}\nabla_\perp N_e
}.
$$

Multipath delay and the diffractive scintillation bandwidth:

$$
\boxed{
\Delta\nu_{\rm d}\tau_{\rm sc}
\sim\frac{1}{2\pi}
}.
$$

---

## 2. Notation, Unit Systems, Complex-Exponential Convention, and Assumptions

### 2.1 Table of Symbols

| Symbol | Meaning | Comment |
|---|---|---|
| $\mathbf E,\mathbf B$ | Electric and magnetic fields | The RL text uses Gaussian-cgs |
| $\mathbf k,k$ | Wave vector and its magnitude | $k=2\pi/\lambda_{\rm medium}$ |
| $\omega,\nu$ | Angular frequency and ordinary frequency | $\omega=2\pi\nu$ |
| $n_e$ | Free-electron number density | Not to be confused with the refractive index |
| $n_r$ | Refractive index | In a cold plasma, $n_r=ck/\omega$ |
| $\omega_p$ | Electron plasma frequency | $\omega_p^2=4\pi n_e e^2/m_e$, cgs |
| $\omega_B$ | Electron gyrofrequency | $eB/(m_ec)$, cgs |
| $I,Q,U,V$ | Stokes parameters | $I$ is the total intensity, $Q,U$ are linear polarization, $V$ is circular polarization |
| $\chi$ | Linear-polarization position angle | $\chi\equiv\chi+\pi$ |
| $P$ | Complex linear polarization | $P=Q+iU$ |
| $\mathrm{DM}$ | dispersion measure | $\int n_e ds$ |
| $\mathrm{RM}$ | rotation measure | $d\chi/d\lambda^2$ |
| $\phi$ | Faraday depth | Integral of $n_eB_\parallel$ from an emitting location to the observer |
| $N_e$ | Electron column density | $\int n_e ds$; the same physical quantity as DM, though the units may be written differently |
| $r_e$ | Classical electron radius | $e^2/(m_ec^2)$, cgs |
| $\boldsymbol\alpha$ | Plasma refraction bending angle | Small-angle, thin-phase-screen approximation |
| $\tau_{\rm sc}$ | Pulse scattering time | Characteristic time of the multipath delay |
| $\Delta\nu_{\rm d}$ | Decorrelation bandwidth of diffractive scintillation | Approximately the Fourier conjugate of $\tau_{\rm sc}$ |

### 2.2 Complex-Exponential and Polarization Conventions

Throughout, the plane-wave convention of the textbook is used:

$$
\boxed{
e^{i(\mathbf k\cdot\mathbf r-\omega t)}
}.
$$

Hence

$$
\nabla\rightarrow i\mathbf k,
\qquad
\frac{\partial}{\partial t}\rightarrow-i\omega.
$$

The "left/right" labels of circular polarization change with the viewing direction, the sign in the time exponential, and the astronomical versus engineering convention. These notes emphasize the conclusion that does not depend on naming: the two circular eigenmodes of opposite handedness have different wavenumbers. The sign of the rotation angle must be consistent with whichever convention is adopted.

### 2.3 Gaussian-cgs versus SI

The plasma derivations in RL use Gaussian-cgs:

$$
\omega_p^2=\frac{4\pi n_e e^2}{m_e},
\qquad
\omega_B=\frac{eB}{m_ec}.
$$

In SI the same quantities read

$$
\omega_p^2=\frac{n_e e^2}{m_e\epsilon_0},
\qquad
\omega_B=\frac{eB}{m_e}.
$$

cgs charge and magnetic-field units must not be mixed with SI formulas.

The numerical conversion for magnetic flux density is

$$
\boxed{
1\,\mathrm T=10^4\,\mathrm G,
\qquad
1\,\mathrm G=10^{-4}\,\mathrm T
}.
$$

Hence

$$
1\,\mu\mathrm G=10^{-10}\,\mathrm T=0.1\,\mathrm{nT}.
$$

In SI,

$$
\omega_B
=1.7588\times10^{11}B(\mathrm T)\ \mathrm{rad\,s^{-1}},
$$

and in cgs,

$$
\omega_B
=1.7588\times10^7B(\mathrm G)\ \mathrm{rad\,s^{-1}}.
$$

The two agree exactly under $1\,\mathrm T=10^4\,\mathrm G$.

Magnetic energy density must likewise be used consistently within one unit system:

$$
u_B=\frac{B^2}{2\mu_0}
\quad\text{(SI)},
\qquad
u_B=\frac{B^2}{8\pi}
\quad\text{(Gaussian-cgs)}.
$$

### 2.4 Main Approximations

- Cold, collisionless, nonrelativistic electrons; ions are approximately stationary at the frequencies considered.
- Section 8.1 has no background magnetic field and is therefore locally isotropic.
- The basic derivation in §8.2 takes the propagation direction along the background magnetic field and assumes $\omega\gg\omega_p,\omega_B$.
- The simple $\lambda^2$ law of Faraday rotation applies first of all to an external, non-emitting Faraday screen.
- The refraction formulas use the high-frequency, small-deflection, geometric-optics, and thin-phase-screen approximations.
- The $2\pi\Delta\nu_{\rm d}\tau_{\rm sc}\sim1$ coefficient for scintillation depends on the scattering tail and on the definition of bandwidth; the inverse relation is more general than the exact coefficient.

---

## 3. RL §2.4: The Polarization Ellipse and the Stokes Parameters

### 3.1 The Two Transverse Electric-Field Components

Let the wave propagate along $z$. The electric field lies in the $x-y$ plane:

$$
E_x=\mathcal E_x\cos(\omega t-\phi_x),
\qquad
E_y=\mathcal E_y\cos(\omega t-\phi_y).
$$

The polarization state is fixed by three independent pieces of information:

1. the amplitude $\mathcal E_x$ along $x$;
2. the amplitude $\mathcal E_y$ along $y$;
3. the phase difference $\delta=\phi_x-\phi_y$.

In general the tip of the electric-field vector traces an ellipse in time, so the general polarization state is elliptical.

### 3.2 Three Important Cases

Linear polarization:

$$
\delta=0\ \text{or}\ \pi.
$$

The two components are in phase or exactly out of phase, and the field oscillates back and forth along one fixed line.

Circular polarization:

$$
\mathcal E_x=\mathcal E_y,
\qquad
\delta=\pm\frac{\pi}{2}.
$$

The magnitude of the field is fixed and its direction rotates uniformly.

Elliptical polarization: apart from the degenerate cases above, the field tip traces an ellipse.

### 3.3 Stokes parameters

For quasi-monochromatic or narrowband radiation, the RL definitions can be written as

$$
I=\langle |E_x|^2\rangle+\langle |E_y|^2\rangle,
$$

$$
Q=\langle |E_x|^2\rangle-\langle |E_y|^2\rangle,
$$

$$
U=\langle E_xE_y^*\rangle+\langle E_yE_x^*\rangle,
$$

$$
V=\frac{1}{i}
\left[
\langle E_xE_y^*\rangle-\langle E_yE_x^*\rangle
\right].
$$

Physically:

- $I$ is the total intensity;
- $Q$ compares linear polarization along $x$ and $y$;
- $U$ compares linear polarization along $+45^\circ$ and $-45^\circ$;
- $V$ describes circular polarization, its sign depending on the handedness convention.

Define the linearly polarized intensity

$$
L=\sqrt{Q^2+U^2}.
$$

The polarization position angle is

$$
\boxed{
\chi=\frac12\operatorname{atan2}(U,Q)
}.
$$

Using $\operatorname{atan2}$ rather than a plain $\arctan(U/Q)$ preserves the information about which quadrant $Q,U$ lie in.

### 3.4 Complex Linear Polarization

Define

$$
\boxed{
P\equiv Q+iU
}.
$$

Because

$$
Q=L\cos2\chi,
\qquad
U=L\sin2\chi,
$$

we have

$$
\boxed{
P=Le^{2i\chi}
}.
$$

This form puts the linearly polarized intensity into the modulus and the position angle into the complex phase, and it is the most convenient language for understanding Faraday rotation, depolarization, and RM synthesis.

---

## 4. Why $2\chi$ Appears, and the Criteria for Complete and Partial Polarization

### 4.1 The Polarization Direction Is an Axis Without an Arrow

Linear polarization can be written as

$$
\mathbf E(t)
=E_0\cos\omega t\,
\hat{\mathbf e}_\chi,
$$

where

$$
\hat{\mathbf e}_\chi
=\cos\chi\,\hat{\mathbf x}
+\sin\chi\,\hat{\mathbf y}.
$$

Increasing the position angle by $\pi$ gives

$$
\hat{\mathbf e}_{\chi+\pi}
=-\hat{\mathbf e}_\chi.
$$

so

$$
\mathbf E'(t)
=-E_0\cos\omega t\,\hat{\mathbf e}_\chi
=E_0\cos(\omega t+\pi)\hat{\mathbf e}_\chi.
$$

This merely shifts the oscillation phase by half a period, and the field still oscillates along the same line. Hence

$$
\boxed{
\chi\equiv\chi+\pi
}.
$$

### 4.2 Why $2\chi$ Must Appear in $Q,U$

For linear polarization,

$$
E_x=E_0\cos\chi\cos\omega t,
\qquad
E_y=E_0\sin\chi\cos\omega t.
$$

so

$$
Q
=\langle E_x^2\rangle-\langle E_y^2\rangle
\propto
\cos^2\chi-\sin^2\chi
=\cos2\chi,
$$

while

$$
U
=2\langle E_xE_y\rangle
\propto
2\cos\chi\sin\chi
=\sin2\chi.
$$

Therefore

$$
Q=L\cos2\chi,
\qquad
U=L\sin2\chi.
$$

As the true polarization axis turns from $0^\circ$ to $180^\circ$, the $(Q,U)$ vector turns from $0^\circ$ to $360^\circ$ in the Stokes plane and returns to the same point. This guarantees that $\chi$ and $\chi+180^\circ$ represent the same physical state.

### 4.3 Why Complete Polarization Satisfies an Equality

Let the two components have amplitudes $a,b$ and phase difference $\delta$. For a fixed polarization ellipse,

$$
I=a^2+b^2,
$$

$$
Q=a^2-b^2,
$$

$$
U=2ab\cos\delta,
\qquad
V=2ab\sin\delta.
$$

Therefore

$$
\begin{aligned}
Q^2+U^2+V^2
&=(a^2-b^2)^2
+4a^2b^2(\cos^2\delta+\sin^2\delta)\\
&=(a^2-b^2)^2+4a^2b^2\\
&=(a^2+b^2)^2\\
&=I^2.
\end{aligned}
$$

so for complete polarization

$$
\boxed{
I^2=Q^2+U^2+V^2
}.
$$

Complete polarization is not the same as complete linear polarization. Complete circular polarization has $Q=U=0$ and $|V|=I$, and it satisfies the same equality.

### 4.4 Why Partial Polarization Gives an Inequality

Define

$$
A=\langle|E_x|^2\rangle,
\qquad
B=\langle|E_y|^2\rangle,
\qquad
C=\langle E_xE_y^*\rangle.
$$

Then

$$
I=A+B,
\qquad
Q=A-B,
$$

$$
U=2\operatorname{Re}C,
\qquad
V=2\operatorname{Im}C.
$$

so

$$
Q^2+U^2+V^2=(A-B)^2+4|C|^2,
$$

while

$$
I^2=(A+B)^2=(A-B)^2+4AB.
$$

Subtracting the two:

$$
I^2-(Q^2+U^2+V^2)
=4(AB-|C|^2).
$$

The Cauchy–Schwarz inequality gives

$$
|C|^2
\le
\langle|E_x|^2\rangle
\langle|E_y|^2\rangle
=AB.
$$

Hence

$$
\boxed{
I^2\ge Q^2+U^2+V^2
}.
$$

Equality holds if and only if the two field components keep a fixed complex ratio at all times, that is, the amplitude ratio and the phase difference do not change with time; this is exactly the condition for a single, fixed polarization ellipse.

### 4.5 Degree of Polarization

The total degree of polarization is defined as

$$
\boxed{
p=\frac{\sqrt{Q^2+U^2+V^2}}{I}
}.
$$

The inequality above immediately gives

$$
0\le p\le1.
$$

- $p=1$: complete polarization;
- $0<p<1$: partial polarization;
- $p=0$: completely unpolarized, $Q=U=V=0$.

Two mutually incoherent, orthogonal linear polarizations of equal intensity are each completely polarized, yet when added their $Q,U,V$ can cancel entirely. "Partial polarization" is therefore a statistical property defined by the observing time, frequency, and spatial resolution.

---

## 5. RL §8.1: Dispersion in a Cold, Isotropic Plasma

### 5.1 The Model and the Electron Response

Section 8.1 assumes no external background magnetic field and neglects ion motion, collisions, pressure, and thermal motion. The electrons obey

$$
m_e\frac{d\mathbf v}{dt}=-e\mathbf E.
$$

Using $e^{i(\mathbf k\cdot\mathbf r-\omega t)}$:

$$
-i\omega m_e\mathbf v=-e\mathbf E,
$$

so

$$
\mathbf v=-\frac{ie}{m_e\omega}\mathbf E.
$$

The current density is

$$
\mathbf j=-n_e e\mathbf v
=\frac{in_e e^2}{m_e\omega}\mathbf E
\equiv\sigma(\omega)\mathbf E.
$$

Here $\sigma$ is purely imaginary, meaning that the electron velocity lags the field by $90^\circ$. Over one cycle the electron first takes energy from the field and then returns it; the ideal collisionless model has no net resistive heating.

### 5.2 The Dielectric Constant

Folding the current into the Ampère–Maxwell equation, one can define

$$
\epsilon(\omega)
=1-\frac{4\pi\sigma}{i\omega}.
$$

Substituting $\sigma$:

$$
\epsilon(\omega)
=1-\frac{4\pi n_e e^2}{m_e\omega^2}.
$$

Defining

$$
\boxed{
\omega_p^2=\frac{4\pi n_e e^2}{m_e}
},
$$

we obtain

$$
\boxed{
\epsilon(\omega)=1-\frac{\omega_p^2}{\omega^2}
}.
$$

Because the electron equation of motion singles out no spatial direction, $\mathbf v$ is always parallel to $\mathbf E$ and the dielectric tensor is

$$
\epsilon_{ij}=\epsilon\,\delta_{ij}.
$$

The medium is therefore isotropic, and two mutually perpendicular transverse linear polarizations propagate identically.

### 5.3 The Dispersion Relation and the Cutoff

A transverse electromagnetic wave satisfies

$$
c^2k^2=\epsilon\omega^2.
$$

Substituting the dielectric constant:

$$
c^2k^2
=\omega^2-\omega_p^2.
$$

Hence

$$
\boxed{
\omega^2=\omega_p^2+c^2k^2
}.
$$

When $\omega>\omega_p$, $k$ is real and the wave propagates.  
When $\omega<\omega_p$, $k=i\kappa$ is imaginary, the amplitude decays as $e^{-\kappa z}$, and only an evanescent field forms. $\omega_p$ is therefore the cutoff angular frequency.

### 5.4 Phase Velocity and Group Velocity

The refractive index is

$$
n_r=\frac{ck}{\omega}
=\sqrt{1-\frac{\omega_p^2}{\omega^2}}<1.
$$

Phase velocity:

$$
\boxed{
v_{\rm ph}=\frac{\omega}{k}=\frac{c}{n_r}>c
}.
$$

Group velocity:

$$
v_g=\frac{d\omega}{dk}.
$$

Differentiating $\omega^2=\omega_p^2+c^2k^2$:

$$
2\omega\frac{d\omega}{dk}=2c^2k,
$$

so

$$
\boxed{
v_g
=c\sqrt{1-\frac{\omega_p^2}{\omega^2}}<c
}.
$$

The two satisfy

$$
v_{\rm ph}v_g=c^2.
$$

A phase velocity larger than $c$ carries no independent information; the pulse envelope, the energy, and any modulation travel at the group velocity.

### 5.5 Pulse Arrival Time and DM

The arrival time of a broadband pulsar signal is

$$
t_p(\omega)=\int_0^d\frac{ds}{v_g}.
$$

For $\omega\gg\omega_p$,

$$
\frac{1}{v_g}
=\frac{1}{c}
\left(1-\frac{\omega_p^2}{\omega^2}\right)^{-1/2}
\simeq
\frac{1}{c}
\left(1+\frac{\omega_p^2}{2\omega^2}\right).
$$

Therefore

$$
t_p
\simeq
\frac{d}{c}
+\frac{1}{2c\omega^2}
\int_0^d\omega_p^2\,ds.
$$

Substituting $\omega_p^2=4\pi n_e e^2/m_e$:

$$
\boxed{
t_p
\simeq
\frac{d}{c}
+\frac{2\pi e^2}{m_ec\omega^2}
\int_0^d n_e\,ds
}.
$$

Define

$$
\boxed{
\mathrm{DM}=\int_0^d n_e\,ds
}.
$$

The extra delay then satisfies

$$
\boxed{
\Delta t_{\rm DM}\propto\mathrm{DM}\,\nu^{-2}
}.
$$

Differentiating with respect to $\omega$:

$$
\boxed{
\frac{dt_p}{d\omega}
=
-\frac{4\pi e^2}{m_ec\omega^3}
\int n_e\,ds
}.
$$

The minus sign means that higher frequencies arrive earlier. Its units are

$$
\left[\frac{dt_p}{d\omega}\right]
=\frac{\mathrm s}{\mathrm{s^{-1}}}
=\mathrm{s^2}.
$$

### 5.6 Dispersion, Dissipation, and Refraction Must Not Be Conflated

- Dispersion: $v_g$ varies with frequency, so different frequencies of a broadband pulse arrive at different times.
- Dissipation: the medium absorbs energy irreversibly, which requires a dissipative part of the dielectric constant or conductivity.
- Refraction: the refractive index varies in space, bending the direction of propagation.

An ideal uniform cold plasma can be dispersive without being dissipative, and uniformity by itself produces no transverse deflection.

---

## 6. From an Isotropic to a Magnetized Plasma

### 6.1 Why the Two Polarizations Are Equivalent Without a Magnetic Field

With no background magnetic field,

$$
m_e\dot{\mathbf v}=-e\mathbf E.
$$

the electron response can be written as

$$
\mathbf v=C(\omega)\mathbf E,
$$

where $C(\omega)$ is a scalar. The equation keeps its form after a rotation of the axes, and the medium singles out no direction. Hence

$$
\epsilon_{ij}=\epsilon\delta_{ij},
$$

and all transverse polarizations share the same

$$
k=\frac{\omega}{c}\sqrt\epsilon.
$$

### 6.2 A Background Magnetic Field Supplies a Preferred Direction

With a background magnetic field, the equation of motion becomes

$$
m_e\frac{d\mathbf v}{dt}
=-e\mathbf E
-\frac{e}{c}\mathbf v\times\mathbf B_0.
$$

Setting

$$
\mathbf B_0=B_0\hat{\mathbf z},
$$

the transverse components satisfy

$$
-i\omega m_ev_x
=-eE_x-\frac{eB_0}{c}v_y,
$$

$$
-i\omega m_ev_y
=-eE_y+\frac{eB_0}{c}v_x.
$$

Now the $x,y$ motions are coupled and the dielectric response is no longer a scalar. Through $\mathbf v\times\mathbf B_0$ the magnetic field distinguishes between senses of rotation.

### 6.3 Why Circular Polarizations Are the Eigenmodes

Define

$$
E_\pm=E_x\pm iE_y,
\qquad
v_\pm=v_x\pm iv_y.
$$

These two combinations represent circular polarizations of opposite handedness. The previously coupled $x,y$ equations decouple in the circular basis, and the denominators become

$$
\omega-\omega_B,
\qquad
\omega+\omega_B,
$$

where

$$
\boxed{
\omega_B=\frac{eB_0}{m_ec}
}
$$

is the electron gyrofrequency in cgs units.

The two circular modes therefore see different dielectric constants:

$$
\boxed{
\epsilon_{R,L}
=1-
\frac{\omega_p^2}
{\omega(\omega\mp\omega_B)}
}.
$$

One circular field rotates closer to the natural gyration sense of the electrons and the other against it, so the electrons respond differently to the two. This phenomenon is called circular birefringence.

---

## 7. $k_R$, $k_L$, Phase Accumulation, and the Rotation of Linear Polarization

### 7.1 What $k_R$ and $k_L$ Are

The right- and left-handed circular eigenmodes can be written as

$$
\mathbf E_R
=\mathbf E_{R,0}e^{i(k_Rz-\omega t)},
$$

$$
\mathbf E_L
=\mathbf E_{L,0}e^{i(k_Lz-\omega t)}.
$$

$k_R$ and $k_L$ are the wavenumbers of the two modes, that is, how much the phase changes per unit propagation distance:

$$
k=\frac{2\pi}{\lambda_{\rm medium}}.
$$

They are fixed by the respective dielectric constants:

$$
\boxed{
k_{R,L}
=\frac{\omega}{c}\sqrt{\epsilon_{R,L}}
=\frac{\omega}{c}n_{R,L}
}.
$$

At an interface the frequency is fixed by the source and by time-translation symmetry, so the two modes share the same $\omega$ but may have different $k$, different wavelengths inside the medium, and different phase velocities:

$$
v_{{\rm ph},R}=\frac{\omega}{k_R},
\qquad
v_{{\rm ph},L}=\frac{\omega}{k_L}.
$$

### 7.2 Why the Propagation Phase Is $\int k\,ds$

The phase of a plane wave is

$$
\Phi(z,t)=kz-\omega t+\Phi_0.
$$

Comparing two positions at a fixed time, the phase difference produced by a propagation distance $d$ is

$$
\Delta\Phi=kd.
$$

Hence

$$
k=\frac{d\phi}{ds},
\qquad
d\phi=k\,ds.
$$

When the medium is inhomogeneous, $k=k(s)$, and dividing the path into many short segments and summing gives

$$
\phi\simeq\sum_i k_i\Delta s_i
\longrightarrow
\boxed{
\phi=\int k(s)\,ds
}.
$$

The three-dimensional form is

$$
d\phi=\mathbf k\cdot d\mathbf r.
$$

Only along a ray, where $\mathbf k\parallel d\mathbf r$, does this reduce to $k\,ds$.

Hence

$$
\phi_R=\int k_R\,ds,
\qquad
\phi_L=\int k_L\,ds.
$$

When the two modes are compared at the same time and place, their common $-\omega t$ term cancels and only the phase difference from propagation remains:

$$
\phi_R-\phi_L
=\int(k_R-k_L)\,ds.
$$

### 7.3 Why Linear Polarization Rotates

Linear polarization can be decomposed into two opposite circular polarizations of equal amplitude:

$$
\text{linear}=R+L.
$$

If their phases are suitable at the start, the combined field oscillates along a fixed line. After propagation, $k_R\neq k_L$ changes their relative phase. Recombining them still gives linear polarization, but with a rotated polarization axis.

Geometrically, the rotation of the linear position angle is half the relative phase difference of the circular modes:

$$
\boxed{
\Delta\chi
=\frac12(\phi_R-\phi_L)
=\frac12\int(k_R-k_L)\,ds
}.
$$

The factor $1/2$ and $P=Le^{2i\chi}$ are the same statement: when the true position angle changes by $\Delta\chi$, the phase of the complex linear polarization in the $Q-U$ plane changes by $2\Delta\chi$.

---

## 8. RL §8.2: The Complete Derivation of the Faraday Rotation Formula

### 8.1 From the Dielectric Constant to the Wavenumbers

Start from

$$
\epsilon_{R,L}
=1-
\frac{\omega_p^2}
{\omega(\omega\mp\omega_B)}
$$

First use $\omega\gg\omega_B$:

$$
\frac{1}{\omega(\omega\mp\omega_B)}
=\frac{1}{\omega^2}
\frac{1}{1\mp\omega_B/\omega}
\simeq
\frac{1}{\omega^2}
\left(1\pm\frac{\omega_B}{\omega}\right).
$$

so

$$
\epsilon_{R,L}
\simeq
1-
\frac{\omega_p^2}{\omega^2}
\left(1\pm\frac{\omega_B}{\omega}\right).
$$

Then with

$$
\sqrt{1-x}\simeq1-\frac{x}{2},
\qquad |x|\ll1,
$$

we obtain

$$
k_{R,L}
\simeq
\frac{\omega}{c}
\left[
1-
\frac{\omega_p^2}{2\omega^2}
\left(1\mp\frac{\omega_B}{\omega}\right)
\right],
$$

where the upper and lower signs follow the RL conventions for handedness and for a positive angle. Interchanging the names of the two circular polarizations flips the sign of the final rotation angle but not its magnitude.

### 8.2 Computing the Difference of the Two Wavenumbers

On subtraction, the common terms independent of the magnetic field cancel:

$$
\begin{aligned}
k_R-k_L
&=\frac{\omega}{c}
\frac{\omega_p^2}{2\omega^2}
\left[
\left(1+\frac{\omega_B}{\omega}\right)
-
\left(1-\frac{\omega_B}{\omega}\right)
\right]\\
&=\frac{\omega}{c}
\frac{\omega_p^2}{2\omega^2}
\frac{2\omega_B}{\omega}\\
&=\boxed{
\frac{\omega_p^2\omega_B}{c\omega^2}
}.
\end{aligned}
$$

This result shows that circular birefringence requires both free electrons and a magnetic field:

$$
k_R-k_L\propto\omega_p^2\omega_B
\propto n_eB_\parallel.
$$

### 8.3 Obtaining the Faraday Rotation Angle

Substituting into

$$
\Delta\chi
=\frac12\int(k_R-k_L)\,ds
$$

gives

$$
\Delta\chi
=\frac{1}{2c\omega^2}
\int\omega_p^2\omega_B\,ds.
$$

In cgs units,

$$
\omega_p^2=\frac{4\pi n_e e^2}{m_e},
\qquad
\omega_B=\frac{eB_\parallel}{m_ec}.
$$

and multiplying the two:

$$
\omega_p^2\omega_B
=\frac{4\pi n_e e^3B_\parallel}{m_e^2c}.
$$

so

$$
\begin{aligned}
\Delta\chi
&=\frac{1}{2c\omega^2}
\int
\frac{4\pi n_e e^3B_\parallel}{m_e^2c}\,ds\\
&=\boxed{
\frac{2\pi e^3}{m_e^2c^2\omega^2}
\int n_eB_\parallel\,ds
}.
\end{aligned}
$$

The $2\pi$ comes from the $4\pi$ in the plasma frequency together with the $1/2$ in the linear-polarization rotation angle.

### 8.4 Why It Is a $\lambda^2$ Law

Using

$$
\omega=\frac{2\pi c}{\lambda},
\qquad
\frac{1}{\omega^2}=\frac{\lambda^2}{4\pi^2c^2},
$$

we obtain

$$
\boxed{
\Delta\chi
=\frac{e^3\lambda^2}{2\pi m_e^2c^4}
\int n_eB_\parallel\,ds
}.
$$

Hence

$$
\boxed{
\chi(\lambda^2)=\chi_0+\mathrm{RM}\lambda^2
}.
$$

The rotation is largest at low frequencies and long wavelengths; doubling the wavelength quadruples the rotation angle.

### 8.5 What Faraday Rotation Is and Is Not

Faraday rotation is the rotation of the linear-polarization axis caused by circular birefringence in a magnetized plasma. It is not:

- a bending of the propagation direction of the whole beam;
- the medium mechanically "rotating away" the intensity;
- an effect that must appear whenever a magnetic field is present.

The basic formula requires both

$$
n_e\neq0,
\qquad
B_\parallel\neq0.
$$

An ideal, uniform, dissipationless Faraday screen can rotate the position angle without changing the total intensity $I$. The drop in polarization degree seen in real observations usually comes from averaging different amounts of rotation across a bandwidth, a beam, or a line of sight, not from the absorption of a single ideal mode.

---

## 9. RM, DM, and the Line-of-Sight Mean Magnetic Field

### 9.1 The Observational Definition and Physical Meaning of RM

From

$$
\chi(\lambda^2)=\chi_0+\mathrm{RM}\lambda^2
$$

it follows that

$$
\boxed{
\mathrm{RM}=\frac{d\chi}{d\lambda^2}
}.
$$

RM is the slope of the position angle against wavelength squared. In the customary astronomical units:

$$
\boxed{
\mathrm{RM}
=0.812
\int
n_e(\mathrm{cm^{-3}})
B_\parallel(\mu\mathrm G)
\,dl(\mathrm{pc})
}
$$

with units of $\mathrm{rad\,m^{-2}}$.

RM therefore measures the free-electron-density-weighted, signed line-of-sight integral of the magnetic field, not the electron density alone or the field strength alone.

### 9.2 The Sign of RM and Field Reversals

$B_\parallel$ is signed, so RM is signed as well. Whether "positive" corresponds to a field toward or away from the observer depends on the polarization and line-of-sight conventions, but as long as the convention is consistent the sign records the mean line-of-sight field direction.

If the field reverses along the path, positive and negative contributions cancel:

$$
\int n_eB_\parallel\,dl
=\sum_i\int_i n_eB_\parallel\,dl.
$$

A small RM therefore need not mean a weak field; it may also mean repeated field reversals.

### 9.3 Combining with DM

DM is

$$
\boxed{
\mathrm{DM}
=\int n_e(\mathrm{cm^{-3}})\,dl(\mathrm{pc})
}
$$

with units of $\mathrm{pc\,cm^{-3}}$.

Define the electron-density-weighted mean line-of-sight field:

$$
\langle B_\parallel\rangle_{n_e}
\equiv
\frac{\int n_eB_\parallel\,dl}
{\int n_e\,dl}.
$$

Using RM and DM:

$$
\langle B_\parallel\rangle_{n_e}
=\frac{1}{0.812}
\frac{\mathrm{RM}}{\mathrm{DM}}\,\mu\mathrm G.
$$

Because

$$
\frac{1}{0.812}=1.2315\simeq1.232,
$$

we have

$$
\boxed{
\langle B_\parallel\rangle_{n_e}
\simeq
1.232
\frac{\mathrm{RM}}{\mathrm{DM}}\,\mu\mathrm G
}.
$$

$1.232$ is not a new physical constant, only the reciprocal of $0.812$ in these astronomical units.

### 9.4 Where the $0.812$ Unit Conversion Comes From

The cgs form is

$$
\mathrm{RM}
=\frac{e^3}{2\pi m_e^2c^4}
\int n_eB_\parallel\,dl,
$$

where the original units are $\mathrm{cm^{-3}}$ for $n_e$, G for $B$, cm for $dl$, and cm for $\lambda$. The combination of fundamental constants is

$$
\frac{e^3}{2\pi m_e^2c^4}
=2.6312\times10^{-17}
$$

the corresponding cgs numerical factor. Converting to m for $\lambda$, $\mu\mathrm G$ for $B$, and pc for the path length:

$$
\lambda_{\rm cm}^2=10^4\lambda_{\rm m}^2,
$$

$$
1\,\mu\mathrm G=10^{-6}\,\mathrm G,
$$

$$
1\,\mathrm{pc}=3.08568\times10^{18}\,\mathrm{cm}.
$$

Hence

$$
\begin{aligned}
C_{\rm astro}
&=(2.6312\times10^{-17})
(10^4)(10^{-6})(3.08568\times10^{18})\\
&=0.8119\simeq0.812.
\end{aligned}
$$

---

## 10. Extensions of Faraday Rotation: Depolarization, Faraday Depth, and RM Synthesis

### 10.1 A Simple External Screen

If all the polarized radiation is produced by a background source and then passes through a non-emitting foreground magnetized plasma screen, then

$$
P(\lambda^2)
=P_0e^{2i\mathrm{RM}\lambda^2}.
$$

The polarized intensity $|P|$ is unchanged and the position angle satisfies $\chi=\chi_0+\mathrm{RM}\lambda^2$ exactly.

### 10.2 Three Common Kinds of Depolarization

**Bandwidth depolarization:** a single frequency channel covers a finite range of $\lambda^2$. If the position angle varies strongly within the channel, averaging $Q,U$ causes cancellation.

**Beam depolarization:** a telescope beam contains several unresolved RMs. Polarization vectors from different regions point in different directions, so $|P|$ drops after spatial averaging.

**Differential/internal Faraday rotation:** emission and rotation occur in the same region. Radiation from different depths experiences different amounts of rotation, which cancels when summed along the line of sight.

### 10.3 Faraday depth

The Faraday depth from the observer to a position $s$ along the path is defined as

$$
\boxed{
\phi(s)
=0.812
\int_0^s
n_e(\mathrm{cm^{-3}})
B_\parallel(\mu\mathrm G)
\,dl(\mathrm{pc})
}
$$

with units of $\mathrm{rad\,m^{-2}}$.

For a simple external screen the observed RM can be identified with a single Faraday depth. If there is emission along the line of sight, field reversals, or several components, a single observed slope need not equal any unique physical depth.

### 10.4 Deriving the Basic Equation of RM Synthesis

The complex linear polarization is

$$
P=Q+iU=Le^{2i\chi}.
$$

A small contribution of intrinsic complex polarization located at Faraday depth $\phi$ is written as

$$
dP_0=F(\phi)\,d\phi.
$$

By the time it reaches the observer, its actual position angle has rotated by

$$
\Delta\chi=\phi\lambda^2.
$$

Since the phase of the complex linear polarization is $2\chi$, this contribution becomes

$$
dP(\lambda^2)
=F(\phi)e^{2i\phi\lambda^2}\,d\phi.
$$

Adding the complex polarization vectors from all Faraday depths:

$$
\boxed{
P(\lambda^2)
=\int_{-\infty}^{\infty}
F(\phi)e^{2i\phi\lambda^2}\,d\phi
}.
$$

$F(\phi)$ is the Faraday dispersion function, containing the polarized intensity and intrinsic position angle per unit Faraday depth.

For a single foreground screen,

$$
F(\phi)=P_0\delta(\phi-\phi_0),
$$

so

$$
P(\lambda^2)=P_0e^{2i\phi_0\lambda^2},
$$

which recovers the simple $\lambda^2$ law.

This integral has the form of a Fourier transform. RM synthesis uses $Q(\lambda^2),U(\lambda^2)$ measured at many frequencies to recover $F(\phi)$. Real observations cover only a limited, discrete set of positive $\lambda^2$, so the reconstruction has finite Faraday-depth resolution and sidelobes and cannot be treated as a perfect inversion.

---

## 11. Plasma Refraction: Classical Electron Radius, Phase Screen, and Bending Angle

### 11.1 Why the Refractive Index Varies with Electron Density

The refractive index of a cold, unmagnetized plasma is

$$
n_r
=\sqrt{1-\frac{\omega_p^2}{\omega^2}}
\simeq
1-\frac{\omega_p^2}{2\omega^2}.
$$

Because

$$
\omega_p^2\propto n_e,
$$

a higher electron density makes $n_r$ smaller. If the electron density varies only along the propagation direction, it mainly changes the phase and the group delay; if the electron column density varies transversely, different parts of the wavefront accumulate different phases, the wavefront tilts, and refraction results.

### 11.2 The Classical Electron Radius

In Gaussian-cgs units it is defined as

$$
\boxed{
r_e=\frac{e^2}{m_ec^2}
}.
$$

In SI the same length is written as

$$
\boxed{
r_e=\frac{e^2}{4\pi\epsilon_0m_ec^2}
}.
$$

Its value is

$$
\boxed{
r_e=2.81794\times10^{-15}\,\mathrm m
=2.81794\times10^{-13}\,\mathrm{cm}
}.
$$

It can be understood by equating the electrostatic energy scale with the electron rest-mass energy:

$$
\frac{e^2}{4\pi\epsilon_0r_e}=m_ec^2.
$$

$r_e$ is not a measured geometric radius of the electron but the classical electromagnetic interaction length formed from the charge, the mass, and the speed of light. The Thomson cross section is also given by it:

$$
\boxed{
\sigma_T=\frac{8\pi}{3}r_e^2
}.
$$

### 11.3 The Phase Imposed by the Plasma

Relative to vacuum, the extra phase accumulated along the path is

$$
\delta\phi
=\int(k-k_0)\,ds,
$$

where

$$
k=\frac{n_r\omega}{c},
\qquad
k_0=\frac{\omega}{c}.
$$

Hence

$$
\delta\phi
=\frac{\omega}{c}
\int(n_r-1)\,ds.
$$

Using the high-frequency expansion:

$$
\delta\phi
=-\frac{1}{2c\omega}
\int\omega_p^2\,ds.
$$

Substituting $\omega_p^2=4\pi n_e e^2/m_e$ and defining the electron column density

$$
N_e=\int n_e\,ds,
$$

and then using $\lambda=2\pi c/\omega$, we obtain

$$
\begin{aligned}
\delta\phi
&=-\frac{2\pi e^2}{m_ec\omega}N_e\\
&=-\frac{e^2}{m_ec^2}\lambda N_e\\
&=\boxed{-r_e\lambda N_e}.
\end{aligned}
$$

A negative phase means that the phase velocity exceeds the vacuum speed of light; it does not mean that the pulse or the information arrives early. The group velocity is still less than $c$ and the group delay is positive.

### 11.4 Why a Phase Gradient Produces Deflection

A general wave field is written as

$$
E(\mathbf r)\propto e^{i\Phi(\mathbf r)}.
$$

and the local wave vector is

$$
\boxed{
\mathbf k=\nabla\Phi
}.
$$

If the wave originally propagates along $z$, then after crossing a thin plasma screen

$$
\Phi(\mathbf r)
=k_0z+\delta\phi(\mathbf x_\perp).
$$

so the transverse wave vector is

$$
\mathbf k_\perp
=\nabla_\perp\delta\phi.
$$

At small angles,

$$
\boldsymbol\alpha
\simeq
\frac{\mathbf k_\perp}{k_0}
=\frac{1}{k_0}\nabla_\perp\delta\phi.
$$

Because

$$
k_0=\frac{2\pi}{\lambda},
$$

and

$$
\delta\phi=-r_e\lambda N_e,
$$

we obtain

$$
\boxed{
\boldsymbol\alpha
\simeq
-\frac{r_e\lambda^2}{2\pi}
\nabla_\perp N_e
}.
$$

The two factors of $\lambda$ have different origins: one comes from the plasma phase $\delta\phi\propto\lambda$ and the other from $1/k_0=\lambda/(2\pi)$.

### 11.5 The Meaning of the Minus Sign

A high electron density lowers the refractive index. Rays bend toward regions of higher refractive index, so an electron overdensity usually pushes rays away from its center and acts as a diverging plasma lens, whereas an electron underdensity can focus them.

For a centrally overdense structure, outside the center

$$
\nabla_\perp N_e
$$

points toward the dense center, while

$$
-\nabla_\perp N_e
$$

points outward, giving exactly the diverging direction.

### 11.6 Consistency with the Geometric-Optics Ray Equation

The ray equation is

$$
\frac{d}{ds}(n_r\hat{\mathbf s})=\nabla n_r.
$$

At small angles with $n_r\simeq1$, the transverse component gives

$$
\boldsymbol\alpha
\simeq
\int\nabla_\perp n_r\,ds.
$$

and

$$
n_r-1
\simeq
-\frac{r_e\lambda^2}{2\pi}n_e.
$$

so

$$
\boldsymbol\alpha
\simeq
-\frac{r_e\lambda^2}{2\pi}
\nabla_\perp\int n_e\,ds,
$$

which is the same as the phase-screen derivation.

---

## 12. Scattering, Pulse Broadening, and Scintillation

### 12.1 From Refraction to Multipath Propagation

A real interstellar plasma contains random electron-density fluctuations on many scales. Different transverse positions give different phases and bending angles, so waves from a single point source can reach the observer along many paths.

Different paths have different:

- geometric lengths;
- plasma group delays;
- arrival directions;
- phases.

The consequences are:

- angular broadening: the image of a point source is scattered to a finite angular size;
- pulse broadening: a short pulse acquires a late-arriving scattering tail;
- interference: several coherent paths form a bright-and-dark pattern in frequency and in space;
- scintillation: as the observer or the medium moves through that pattern, the intensity varies with time and frequency.

### 12.2 Distinguishing Dispersion, Scattering, and Scintillation

| Phenomenon | Required structure in the medium | Main observational signature |
|---|---|---|
| Dispersion | Mean free-electron column density | Arrival time varies as $\nu^{-2}$ |
| Refraction | Organized transverse $N_e$ gradients | Change in propagation direction, image position, or magnification |
| Scattering | Random small-scale density fluctuations | Multipath propagation, angular broadening, and pulse tails |
| Scintillation | Multipath interference or large-scale focusing/defocusing | Intensity varies with time and frequency |
| Faraday rotation | $n_e$ with a signed $B_\parallel$ | Position angle rotates as $\lambda^2$ |

A uniform plasma can produce dispersion, but uniformity alone produces no transverse scattering.

### 12.3 Diffractive versus Refractive Scintillation

**Diffractive interstellar scintillation (DISS)** usually arises from smaller-scale phase structure:

- it varies more rapidly;
- its correlation bandwidth in frequency is narrower;
- it is directly related to strong multipath interference, pulse broadening, and angular broadening.

**Refractive interstellar scintillation (RISS)** usually arises from larger-scale structure:

- it varies more slowly;
- it is broadband;
- it resembles large-scale focusing, defocusing, and image wander.

The two are not separate media but the behavior of the same turbulent density field on different spatial scales.

### 12.4 Frequency Interference Between Two Paths

Let the extra time difference between two paths be $\tau$. The total electric field can be written as

$$
E(\nu)=A_1+A_2e^{-2\pi i\nu\tau}.
$$

The interference term in the intensity varies as

$$
\cos(2\pi\nu\tau+\phi_0)
$$

Changing the frequency by $\Delta\nu$ changes the relative phase by

$$
\Delta(\Delta\phi)
=2\pi\Delta\nu\tau.
$$

When

$$
2\pi\Delta\nu\tau\sim1
$$

the interference changes appreciably. A longer time delay therefore gives finer spectral structure.

### 12.5 The Exponential Scattering Tail and the Decorrelation Bandwidth

The commonly used pulse-broadening function is a one-sided exponential:

$$
P(\tau)
=\frac{1}{\tau_{\rm sc}}
e^{-\tau/\tau_{\rm sc}},
\qquad \tau\ge0.
$$

Between two frequencies separated by $\Delta\nu$, the field correlation function is the Fourier transform of the delay distribution:

$$
C_E(\Delta\nu)
=\int_0^\infty
P(\tau)e^{-2\pi i\Delta\nu\tau}\,d\tau.
$$

Substituting the exponential distribution:

$$
\begin{aligned}
C_E(\Delta\nu)
&=\frac{1}{\tau_{\rm sc}}
\int_0^\infty
e^{-[1/\tau_{\rm sc}+2\pi i\Delta\nu]\tau}\,d\tau\\
&=\frac{1}{1+2\pi i\Delta\nu\tau_{\rm sc}}.
\end{aligned}
$$

The corresponding intensity correlation has the approximate shape

$$
|C_E(\Delta\nu)|^2
=\frac{1}
{1+(2\pi\Delta\nu\tau_{\rm sc})^2}.
$$

Defining the full width at half maximum as $\Delta\nu_{\rm d}$, that is, letting the correlation fall to $1/2$:

$$
2\pi\Delta\nu_{\rm d}\tau_{\rm sc}=1.
$$

Hence

$$
\boxed{
\Delta\nu_{\rm d}
=\frac{1}{2\pi\tau_{\rm sc}}
}.
$$

More generally one writes

$$
2\pi\Delta\nu_{\rm d}\tau_{\rm sc}=C_1,
$$

where $C_1$ is a constant of order unity depending on the scattering geometry, the delay distribution, and the definition of bandwidth. The most robust conclusion is

$$
\boxed{
\Delta\nu_{\rm d}\propto\tau_{\rm sc}^{-1}
}.
$$

### 12.6 Typical Frequency Trends

Since the plasma phase scales as $|\delta\phi|\propto\lambda$ and the bending angle as $|\alpha|\propto\lambda^2$, scattering is usually stronger at low frequencies. For ideal Kolmogorov turbulence and a common thin-screen geometry, a frequently used approximation is

$$
\tau_{\rm sc}\propto\nu^{-4.4},
\qquad
\Delta\nu_{\rm d}\propto\nu^{4.4}.
$$

The exponents change with the turbulence spectrum, the inner and outer scales, the screen location, anisotropy, and multiple-screen structure, so $4.4$ must not be taken as a strict law for every line of sight.

---

## 13. Problem 8.3: Finding the Mean Magnetic Field from Dispersion and Faraday Rotation

### 13.1 Quantities Given in the Problem

For a pulsed polarized source, the magnitudes of the derivatives of the arrival time and of the Faraday rotation with respect to angular frequency are

$$
\left|\frac{dt_p}{d\omega}\right|
=1.1\times10^{-5}\,\mathrm{s^2},
$$

$$
\left|\frac{d\Delta\chi}{d\omega}\right|
=1.9\times10^{-4}\,\mathrm s.
$$

The measurements are made near $\omega=10^8\,\mathrm{s^{-1}}$ and the source distance is unknown. The problem asks for

$$
\langle B_\parallel\rangle
=\frac{\int n_eB_\parallel ds}
{\int n_e ds}.
$$

### 13.2 The Dispersion Derivative

Section 8.1 gives

$$
t_p
\simeq
\frac{d}{c}
+\frac{2\pi e^2}{m_ec\omega^2}
\int n_e\,ds.
$$

Hence

$$
\boxed{
\frac{dt_p}{d\omega}
=-\frac{4\pi e^2}{m_ec\omega^3}
\int n_e\,ds
}.
$$

### 13.3 The Faraday Rotation Derivative

Section 8.2 gives

$$
\Delta\chi
=\frac{2\pi e^3}{m_e^2c^2\omega^2}
\int n_eB_\parallel\,ds.
$$

Differentiating with respect to $\omega$:

$$
\boxed{
\frac{d\Delta\chi}{d\omega}
=-\frac{4\pi e^3}{m_e^2c^2\omega^3}
\int n_eB_\parallel\,ds
}.
$$

### 13.4 Dividing the Two Expressions

$$
\frac{d\Delta\chi/d\omega}
{dt_p/d\omega}
=
\frac{e}{m_ec}
\frac{\int n_eB_\parallel ds}
{\int n_e ds}.
$$

so

$$
\boxed{
\langle B_\parallel\rangle
=\frac{m_ec}{e}
\frac{d\Delta\chi/d\omega}
{dt_p/d\omega}
}.
$$

The unknown distance, the electron column density, and the common $\omega^{-3}$ all cancel. The problem quotes $\omega=10^8\,\mathrm{s^{-1}}$, but the final ratio does not require that frequency to be substituted explicitly.

### 13.5 Numerical Evaluation

The ratio of the derivatives is

$$
\frac{1.9\times10^{-4}\,\mathrm s}
{1.1\times10^{-5}\,\mathrm{s^2}}
=17.27\,\mathrm{s^{-1}}.
$$

In cgs units,

$$
\frac{e}{m_ec}
=1.7588\times10^7
\,\mathrm{s^{-1}\,G^{-1}}.
$$

Therefore

$$
\begin{aligned}
\langle B_\parallel\rangle
&=\frac{17.27}
{1.7588\times10^7}\,\mathrm G\\
&=9.82\times10^{-7}\,\mathrm G\\
&=0.982\,\mu\mathrm G.
\end{aligned}
$$

so

$$
\boxed{
\langle B_\parallel\rangle
\simeq1.0\,\mu\mathrm G
}.
$$

### 13.6 Remarks on Signs and a Dimensional Check

In theory both the dispersive delay and, for a given field direction, the Faraday angle decrease as $\omega$ increases, so the derivatives carry minus signs. The positive values quoted in the problem should be read as magnitudes, or as following an unstated direction convention. The final sign of the mean field depends on using consistent conventions for $B_\parallel$, for circular polarization, and for the position angle.

The units of the ratio of derivatives are

$$
\frac{\mathrm s}{\mathrm{s^2}}=\mathrm{s^{-1}},
$$

which are exactly the units of a gyrofrequency, because

$$
\frac{e\langle B_\parallel\rangle}{m_ec}
$$

is the electron gyrofrequency corresponding to the mean field.

---

## 14. English assignment-ready solution

### Problem 8.3

For a cold, unmagnetized plasma, the pulse arrival time is

$$
t_p\simeq \frac{d}{c}
+\frac{2\pi e^2}{m_ec\omega^2}
\int n_e\,ds.
$$

Therefore,

$$
\frac{dt_p}{d\omega}
=-\frac{4\pi e^2}{m_ec\omega^3}
\int n_e\,ds.
$$

For Faraday rotation in a cold magnetized plasma,

$$
\Delta\chi
=\frac{2\pi e^3}{m_e^2c^2\omega^2}
\int n_eB_\parallel\,ds,
$$

and hence

$$
\frac{d\Delta\chi}{d\omega}
=-\frac{4\pi e^3}{m_e^2c^2\omega^3}
\int n_eB_\parallel\,ds.
$$

Taking the ratio eliminates the unknown electron column density, source distance, and observing frequency:

$$
\frac{d\Delta\chi/d\omega}{dt_p/d\omega}
=\frac{e}{m_ec}
\frac{\int n_eB_\parallel\,ds}
{\int n_e\,ds}
=\frac{e}{m_ec}\langle B_\parallel\rangle.
$$

Thus,

$$
\langle B_\parallel\rangle
=\frac{m_ec}{e}
\frac{d\Delta\chi/d\omega}{dt_p/d\omega}.
$$

Using the magnitudes of the measured derivatives,

$$
\frac{1.9\times10^{-4}\,\mathrm s}
{1.1\times10^{-5}\,\mathrm{s^2}}
=17.27\,\mathrm{s^{-1}}.
$$

Since

$$
\frac{e}{m_ec}
=1.7588\times10^7
\,\mathrm{s^{-1}\,G^{-1}},
$$

we find

$$
\langle B_\parallel\rangle
=\frac{17.27}{1.7588\times10^7}\,\mathrm G
=9.82\times10^{-7}\,\mathrm G.
$$

Therefore,

$$
\boxed{
\langle B_\parallel\rangle\simeq1.0\,\mu\mathrm G
}.
$$

The sign of the inferred field depends on the adopted conventions for the line-of-sight direction, circular polarization, and polarization position angle. The quoted positive derivatives are therefore most naturally interpreted as magnitudes.

---

## 15. Review Checklist, Dimensional Checks, Limiting Checks, and Common Confusions

### 15.1 Derivations You Should Be Able to Reproduce

1. Identifying linear, circular, and elliptical polarization from the amplitudes and phase difference of $E_x,E_y$.
2. Explaining from $Q=L\cos2\chi$ and $U=L\sin2\chi$ why the Stokes plane uses $2\chi$.
3. Proving from the Stokes definitions that $I^2=Q^2+U^2+V^2$ for complete polarization.
4. Proving with Cauchy–Schwarz that $I^2\ge Q^2+U^2+V^2$ in general.
5. Obtaining $\epsilon=1-\omega_p^2/\omega^2$ from the electron equation of motion.
6. Obtaining $\omega^2=\omega_p^2+c^2k^2$ from Maxwell's equations.
7. Obtaining $v_{\rm ph}$, $v_g$, and $dt_p/d\omega$ from the dispersion relation.
8. Obtaining $k_R-k_L$ and the Faraday rotation formula by expanding $\epsilon_{R,L}$.
9. Obtaining the plasma bending angle from $\delta\phi=-r_e\lambda N_e$.
10. Obtaining $\Delta\nu_{\rm d}\sim(2\pi\tau_{\rm sc})^{-1}$ from the Fourier transform of the delay distribution.
11. Completing Problem 8.3 with the ratio of the dispersion and Faraday derivatives.

### 15.2 Core Results Worth Memorizing

Polarization:

$$
P=Q+iU=Le^{2i\chi},
\qquad
p=\frac{\sqrt{Q^2+U^2+V^2}}{I}.
$$

Cold plasma:

$$
\omega_p^2=\frac{4\pi n_e e^2}{m_e},
\qquad
\omega^2=\omega_p^2+c^2k^2.
$$

Dispersive delay:

$$
\Delta t_{\rm DM}\propto\mathrm{DM}\,\nu^{-2}.
$$

Faraday rotation:

$$
\Delta\chi=\mathrm{RM}\lambda^2,
\qquad
\mathrm{RM}\propto\int n_eB_\parallel\,dl.
$$

Mean field from RM/DM:

$$
\langle B_\parallel\rangle_{n_e}
\simeq
1.232\frac{\mathrm{RM}}{\mathrm{DM}}\,\mu\mathrm G.
$$

Plasma phase and refraction:

$$
\delta\phi=-r_e\lambda N_e,
\qquad
\boldsymbol\alpha
\simeq
-\frac{r_e\lambda^2}{2\pi}\nabla_\perp N_e.
$$

Time-frequency duality in scattering:

$$
\Delta\nu_{\rm d}\tau_{\rm sc}\sim\frac{1}{2\pi}.
$$

### 15.3 Dimensional Checks

Wavenumber:

$$
[k]=\mathrm{length}^{-1},
\qquad
[k\,ds]=1.
$$

so $\int kds$ can serve as the phase in an exponential.

Dispersion derivative:

$$
\left[\frac{dt_p}{d\omega}\right]
=\mathrm{s^2}.
$$

Faraday derivative:

$$
\left[\frac{d\Delta\chi}{d\omega}\right]
=\mathrm s,
$$

since radians are dimensionless.

The ratio of derivatives in Problem 8.3:

$$
\left[
\frac{d\Delta\chi/d\omega}{dt_p/d\omega}
\right]
=\mathrm{s^{-1}},
$$

consistent with the gyrofrequency dimensions of $eB/(m_ec)$.

Bending angle: if $r_e,\lambda$ are in units of length and $N_e$ is in $\mathrm{length}^{-2}$, then

$$
[r_e\lambda^2\nabla_\perp N_e]=1,
$$

consistent with an angle being dimensionless.

### 15.4 Limiting Checks

- $n_e\rightarrow0$: $\omega_p\rightarrow0$, recovering the vacuum relation $\omega=ck$; DM, RM, refraction, and scattering all vanish.
- $B_\parallel\rightarrow0$: $k_R=k_L$, Faraday rotation vanishes, but ordinary plasma dispersion remains.
- $\omega\rightarrow\infty$: $n_r\rightarrow1$, and the group delay, Faraday rotation, and plasma deflection all tend to zero.
- Constant transverse $N_e$: $\nabla_\perp N_e=0$, so there is a phase and a group delay but no net refractive deflection.
- $\tau_{\rm sc}\rightarrow0$: the multipath delay disappears and $\Delta\nu_{\rm d}$ becomes very wide.
- A single Faraday depth: $F(\phi)$ is a delta function and the strict relation $\chi=\chi_0+\phi\lambda^2$ is recovered.

### 15.5 The Easiest Points to Confuse

1. $n_e$ is the electron number density, $n_r$ is the refractive index.
2. $k_R,k_L$ are the wavenumbers of the two circular eigenmodes at one frequency, not the frequencies of two different sources.
3. Faraday rotation turns the polarization axis; it is not a bending of the ray path.
4. DM measures $\int n_e dl$; RM measures $\int n_eB_\parallel dl$.
5. A small RM may come from a weak field, or from cancellation by field reversals.
6. $v_{\rm ph}>c$ does not mean faster-than-light information; the group velocity is still less than $c$.
7. The phase can run ahead of vacuum, yet the group delay of the pulse is still positive.
8. Dispersion is not absorption; the dielectric constant of an ideal cold plasma is real.
9. Refraction is not scattering; a smooth gradient gives organized deflection, while random fluctuations give multipath propagation.
10. $r_e$ is a classical interaction scale, not a measured geometric size of the electron.
11. $1.232$ is $1/0.812$, not an independent fundamental constant.
12. The cgs relation $\omega_B=eB/(m_ec)$ cannot be used after simply replacing $B$ with a value in tesla.

### 15.6 Self-Test Questions

1. Why does the linear position angle have a period of $180^\circ$ while $(Q,U)$ needs $360^\circ$ to go around once?
2. Does a completely circularly polarized wave satisfy $I^2=Q^2+U^2+V^2$?
3. Why does every transverse polarization share the same dispersion relation in an unmagnetized plasma?
4. Why does a background magnetic field make circular rather than arbitrary linear polarizations the eigenmodes?
5. Why does Faraday rotation measure only $B_\parallel$?
6. Why does Problem 8.3 not require the distance to the pulsar?
7. Why is a plasma lens formed by an electron overdensity usually diverging?
8. Why does a longer scattering tail correspond to a narrower scintillation bandwidth?
9. Under what conditions can an observed RM be identified directly with a single Faraday depth?
10. How can the unit system tell you whether a gyrofrequency formula is missing $c$ or $\epsilon_0$?

---

## 16. References and Citations

1. G. B. Rybicki and A. P. Lightman, *Radiative Processes in Astrophysics*, §2.4, “Polarization and Stokes Parameters,” printed pp. 62–68.
2. Rybicki and Lightman, §8.1, “Dispersion in Cold, Isotropic Plasma,” printed pp. 224–228.
3. Rybicki and Lightman, §8.2, “Propagation Along a Magnetic Field; Faraday Rotation,” printed pp. 229–231.
4. Rybicki and Lightman, Problem 8.3, printed p. 236.
5. The AstroBaki supplementary topics listed in the assigned reading: *Polarization*, *Stokes parameters*, and *Faraday rotation*.

The $\Delta\nu_{\rm d}$–$\tau_{\rm sc}$ relation used here adopts the basic model of a one-sided exponential scattering tail and a half-power correlation width; the actual numerical coefficient depends on the scattering geometry, the turbulence spectrum, and the observational definitions. The RM synthesis section is an observational extension of §8.2 and should not be mistaken for an inversion method already developed in full in RL §8.2 itself.

---

## 17. Appendix: SI versus Gaussian-cgs Units and Representative Formulas

### 17.1 Rules of Use

SI and Gaussian-cgs define electromagnetic quantities with different dimensions. A conversion must carry the whole formula along with the charge, the fields, and the constants; one cannot merely replace G with T while keeping the cgs $e$, $4\pi$, or $1/c$.

The most frequently used conversion for magnetic flux density is

$$
\boxed{
1\,\mathrm T=10^4\,\mathrm G,
\qquad
1\,\mathrm G=10^{-4}\,\mathrm T
}.
$$

and further

$$
1\,\mu\mathrm G=10^{-10}\,\mathrm T=0.1\,\mathrm{nT},
$$

$$
1\,\mathrm{nT}=10\,\mu\mathrm G.
$$

### 17.2 Basic Differences for Charge, Electric Field, and Magnetic Field

| Quantity | SI | Gaussian-cgs |
|---|---|---|
| Length | m | cm |
| Mass | kg | g |
| Charge | C | statC (esu) |
| Electric field | $\mathrm{V\,m^{-1}}$ | statV cm$^{-1}$ |
| Magnetic flux density $B$ | tesla (T) | gauss (G) |
| Magnetic field strength $H$ | $\mathrm{A\,m^{-1}}$ | oersted (Oe) |
| Magnetic flux | weber (Wb) | maxwell (Mx) |

Magnetic flux conversion:

$$
1\,\mathrm{Wb}=10^8\,\mathrm{Mx}.
$$

Magnetic field strength conversion:

$$
1\,\mathrm{Oe}
=\frac{1000}{4\pi}\,\mathrm{A\,m^{-1}}
\simeq79.577\,\mathrm{A\,m^{-1}}.
$$

In vacuum, SI uses

$$
B=\mu_0H,
$$

In Gaussian-cgs, $B$ and $H$ have the same dimensions, and in vacuum $1\,\mathrm G$ corresponds numerically to $1\,\mathrm{Oe}$. Inside a medium one must still distinguish the magnetization and the constitutive relation.

### 17.3 Coulomb Force and Lorentz Force

SI:

$$
\boxed{
F=\frac{1}{4\pi\epsilon_0}
\frac{q_1q_2}{r^2}
},
$$

$$
\boxed{
\mathbf F=q(\mathbf E+\mathbf v\times\mathbf B)
}.
$$

Gaussian-cgs:

$$
\boxed{
F=\frac{q_1q_2}{r^2}
},
$$

$$
\boxed{
\mathbf F=q
\left(
\mathbf E+\frac{\mathbf v}{c}\times\mathbf B
\right)
}.
$$

The cgs magnetic force term carries a $1/c$; the SI one does not. At the same time the two systems use different units for charge and magnetic field, so single factors cannot be compared in isolation.

### 17.4 Maxwell's Equations in Vacuum

**SI:**

$$
\nabla\cdot\mathbf E=\frac{\rho}{\epsilon_0},
\qquad
\nabla\cdot\mathbf B=0,
$$

$$
\nabla\times\mathbf E
=-\frac{\partial\mathbf B}{\partial t},
$$

$$
\nabla\times\mathbf B
=\mu_0\mathbf J
+\mu_0\epsilon_0
\frac{\partial\mathbf E}{\partial t}.
$$

Because

$$
\mu_0\epsilon_0=\frac{1}{c^2},
$$

the last term can also be written as $c^{-2}\partial_t\mathbf E$.

**Gaussian-cgs:**

$$
\nabla\cdot\mathbf E=4\pi\rho,
\qquad
\nabla\cdot\mathbf B=0,
$$

$$
\nabla\times\mathbf E
=-\frac{1}{c}
\frac{\partial\mathbf B}{\partial t},
$$

$$
\nabla\times\mathbf B
=\frac{4\pi}{c}\mathbf J
+\frac{1}{c}
\frac{\partial\mathbf E}{\partial t}.
$$

### 17.5 Plane-Wave Relations in Vacuum

SI plane wave in vacuum:

$$
\boxed{
E=cB
}.
$$

Gaussian-cgs plane wave in vacuum:

$$
\boxed{
E=B
}.
$$

The equality here compares the numerical values within each unit system. It does not mean that the physical electric and magnetic fields carry identical SI units.

### 17.6 Plasma Frequency and Gyrofrequency

Electron plasma frequency:

$$
\boxed{
\omega_p^2
=\frac{n_e e^2}{m_e\epsilon_0}
}
\quad\text{(SI)},
$$

$$
\boxed{
\omega_p^2
=\frac{4\pi n_e e^2}{m_e}
}
\quad\text{(Gaussian-cgs)}.
$$

Electron gyrofrequency:

$$
\boxed{
\omega_B=\frac{eB}{m_e}
}
\quad\text{(SI)},
$$

$$
\boxed{
\omega_B=\frac{eB}{m_ec}
}
\quad\text{(Gaussian-cgs)}.
$$

Numerical forms:

$$
\omega_B
=1.7588\times10^{11}B(\mathrm T)
\ \mathrm{rad\,s^{-1}},
$$

$$
\omega_B
=1.7588\times10^7B(\mathrm G)
\ \mathrm{rad\,s^{-1}}.
$$

### 17.7 Classical Electron Radius and Thomson Cross Section

SI:

$$
\boxed{
r_e
=\frac{e^2}{4\pi\epsilon_0m_ec^2}
}.
$$

Gaussian-cgs:

$$
\boxed{
r_e
=\frac{e^2}{m_ec^2}
}.
$$

Both unit systems give the same length:

$$
r_e=2.81794\times10^{-15}\,\mathrm m.
$$

Expressed through $r_e$, the Thomson cross section has the same form in both systems:

$$
\boxed{
\sigma_T=\frac{8\pi}{3}r_e^2
}.
$$

### 17.8 Electromagnetic Energy Density and the Poynting Vector

SI:

$$
\boxed{
u
=\frac{\epsilon_0E^2}{2}
+\frac{B^2}{2\mu_0}
},
$$

$$
\boxed{
\mathbf S
=\frac{1}{\mu_0}\mathbf E\times\mathbf B
}.
$$

Gaussian-cgs:

$$
\boxed{
u=\frac{E^2+B^2}{8\pi}
},
$$

$$
\boxed{
\mathbf S
=\frac{c}{4\pi}\mathbf E\times\mathbf B
}.
$$

The magnetic energy density alone is

$$
u_B=\frac{B^2}{2\mu_0}
\quad\text{(SI)},
$$

$$
u_B=\frac{B^2}{8\pi}
\quad\text{(Gaussian-cgs)}.
$$

### 17.9 Larmor power

The Larmor radiated power of a nonrelativistic charged particle:

$$
\boxed{
P
=\frac{q^2a^2}{6\pi\epsilon_0c^3}
}
\quad\text{(SI)},
$$

$$
\boxed{
P
=\frac{2q^2a^2}{3c^3}
}
\quad\text{(Gaussian-cgs)}.
$$

### 17.10 Faraday rotation

SI:

$$
\boxed{
\Delta\chi
=\frac{e^3\lambda^2}
{8\pi^2\epsilon_0m_e^2c^3}
\int n_eB_\parallel\,dl
}.
$$

Gaussian-cgs:

$$
\boxed{
\Delta\chi
=\frac{e^3\lambda^2}
{2\pi m_e^2c^4}
\int n_eB_\parallel\,dl
}.
$$

After converting to the common practical astronomical units, both give

$$
\boxed{
\mathrm{RM}
=0.812
\int
n_e(\mathrm{cm^{-3}})
B_\parallel(\mu\mathrm G)
\,dl(\mathrm{pc})
\ \mathrm{rad\,m^{-2}}
}.
$$

### 17.11 Final Checking Rules

When you meet an electromagnetic formula, check first:

1. Is $B$ in T or in G?
2. Is $e$ in C or in statC?
3. Does the formula contain $\epsilon_0,\mu_0$, or $4\pi,c$?
4. Does the Lorentz magnetic force carry a $1/c$?
5. Does the vacuum plane wave use $E=cB$ or $E=B$?
6. Is the denominator of the energy density $2\mu_0$ or $8\pi$?

Whenever one formula contains both an SI $\epsilon_0$ and an unconverted cgs gauss, or both an SI charge and the cgs $1/c$ Lorentz force, the unit systems have been mixed.
