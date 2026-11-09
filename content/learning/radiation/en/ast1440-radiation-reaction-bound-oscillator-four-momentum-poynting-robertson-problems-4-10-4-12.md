---
title: "AST1440 Radiation Reaction, Bound Oscillators, Four-Momentum, and the Poynting–Robertson Effect: RL §§3.5–3.6 and Problems 4.10–4.12"
description: "A systematic derivation of Abraham–Lorentz radiation reaction, damping and Lorentz line profiles of bound oscillators, driven-oscillator scattering, four-momentum, recoil, and complete solutions to Problems 4.10–4.12."
date: "2026-11-09"
tags: ["AST1440","Radiation reaction","Bound oscillator","Four-momentum","Poynting-Robertson effect","Exercises"]
order: 17
draft: false
translation: "AI-assisted English translation"
sourceHash: "00d03534703464cd81cb143265527c9aba2cb3b2330727e07a25a80f4f184e3b"
---

# AST1440 Radiation Reaction, Bound Oscillators, Four-Momentum, and the Poynting–Robertson Effect: RL §§3.5–3.6 and Problems 4.10–4.12

> Course: AST1440 - Radiation.  
> Textbook: Rybicki & Lightman, *Radiative Processes in Astrophysics* (hereafter RL), §3.5 (printed pp. 93–96), §3.6 (printed pp. 96–102), and Problems 4.10–4.12 (printed pp. 152–153).  
> Compiled on November 9, 2026.  
> This note collects the main questions from the assigned reading and discussion. It derives the radiation-reaction force from energy balance, explains why runaway solutions are unphysical, reduces the third-order equation to ordinary damping, and shows why the mechanical energy and radiated power decay as $e^{-\Gamma t}$. It also derives the Lorentz profile by Fourier transformation, obtains the scattering cross section of a driven bound oscillator, reviews four-momentum and recoil, and solves every part of Problems 4.10–4.12.

## Table of Contents

1. [Overview and logical structure](#1-overview-and-logical-structure)
2. [Notation, unit system, and domain of validity](#2-notation-unit-system-and-domain-of-validity)
3. [RL §3.5：radiation reaction](#3-rl-35-radiation-reaction)
4. [Runaway solutions and the limitations of the classical point-charge model](#4-runaway-solutions-and-the-limitations-of-the-classical-point-charge-model)
5. [RL §3.6: an undriven harmonically bound particle](#5-rl-36-an-undriven-harmonically-bound-particle)
6. [Complete Fourier derivation of the Lorentz profile](#6-complete-fourier-derivation-of-the-lorentz-profile)
7. [Driven oscillator and scattering cross section](#7-driven-oscillator-and-scattering-cross-section)
8. [Four-momentum, invariant mass, and recoil](#8-four-momentum-invariant-mass-and-recoil)
9. [Problem 4.10: isotropic emission and momentum conservation](#9-problem-410-isotropic-emission-and-momentum-conservation)
10. [Problem 4.11: photon absorption, recoil, and increased rest mass](#10-problem-411-photon-absorption-recoil-and-increased-rest-mass)
11. [Problem 4.12: the Poynting–Robertson effect](#11-problem-412-the-poyntingrobertson-effect)
12. [Common points of confusion and consistency checks](#12-common-points-of-confusion-and-consistency-checks)
13. [Core formulas at a glance](#13-core-formulas-at-a-glance)
14. [References](#14-references)

---

## 1. Overview and logical structure

Sections 3.5 and 3.6 describe how an accelerated charge responds to its own radiation.
$$
\boxed{
\text{radiation from an accelerated charge}
\longrightarrow
\text{loss of mechanical energy}
\longrightarrow
\text{radiation reaction}
\longrightarrow
\text{damped oscillation and finite linewidth}
}.
$$
Problems 4.10–4.12 examine radiation emission and absorption from an energy–momentum perspective.
$$
\boxed{
\text{4.10: radiation emission}
\longrightarrow
\text{4.11: radiation absorption}
\longrightarrow
\text{4.12: absorption followed by emission}
}.
$$
Both parts rely on the same physical principles.

1. Radiation carries energy and momentum.
2. Internal energy contributes to rest mass.
3. A change in momentum does not necessarily imply a change in velocity because it can instead arise from a change in rest mass.
4. An oscillation with a finite lifetime cannot be exactly monochromatic and therefore has a finite linewidth.

---

## 2. Notation, unit system, and domain of validity

### 2.1 Main symbols

| Symbol | Meaning |
|---|---|
| $e$ | magnitude of the charge; the electron charge is $-e$ |
| $m$ | particle rest mass |
| $\mathbf v$ | three-velocity |
| $\mathbf a=\dot{\mathbf v}$ | three-acceleration |
| $\dot{\mathbf a}$ | jerk, time derivative of acceleration |
| $\tau$ | characteristic radiation-reaction time |
| $\omega_0$ | natural angular frequency of the bound oscillator |
| $\Gamma$ | radiative damping rate and FWHM of the Lorentz profile |
| $\sigma_T$ | total Thomson scattering cross section |
| $P^\mu$ | four-momentum |
| $W'$ | total radiation energy emitted in the particle rest frame |
| $h\nu$ | single-photon energy |
| $l$ | Orbital angular momentum of dust about a star |

### 2.2 Gaussian cgs units

RL uses Gaussian cgs units. The nonrelativistic Larmor formula is
$$
\boxed{
P_{\rm rad}=\frac{2e^2}{3c^3}a^2
}.
$$
The time-averaged Poynting flux of a plane wave in vacuum is
$$
\boxed{
\langle S\rangle=\frac{cE_0^2}{8\pi}
},
$$
where $E_0$ is the peak electric-field amplitude. SI expressions contain $\epsilon_0$ and cannot be mixed directly with these cgs formulas.

### 2.3 Domain of validity of the radiation-reaction approximation

Define
$$
\boxed{
\tau\equiv\frac{2e^2}{3mc^3}
}.
$$
For an electron, $\tau\sim10^{-23}\ {\rm s}$. The classical radiation-reaction equation should be used only when
$$
\boxed{
t_{\rm motion}\gg\tau
}.
$$
It is therefore an effective long-timescale approximation in the weak-self-interaction regime, not an exact fundamental equation for arbitrarily short-timescale motion.

---

## 3. RL §3.5: radiation reaction

### 3.1 Why radiation reaction is required

An accelerated charge radiates energy at the rate
$$
P_{\rm rad}=\frac{2e^2}{3c^3}a^2
$$
This energy must come from the particle's mechanical energy, work done by an external force, or energy temporarily stored in the nearby electromagnetic field. The equation of motion must therefore contain a self-force.

A complete derivation from the self-field of a point charge is complicated. RL instead uses averaged energy conservation to determine the form and coefficient of the leading-order self-force.

### 3.2 Deriving the Abraham–Lorentz force by integration by parts

Let
$$
C\equiv\frac{2e^2}{3c^3}.
$$
Consider a local self-force proportional to the jerk.
$$
\mathbf F_{\rm rad}=C\dot{\mathbf a}.
$$
The work done between $t_1$ and $t_2$ is
$$
\int_{t_1}^{t_2}\mathbf F_{\rm rad}\cdot\mathbf v\,dt
=C\int_{t_1}^{t_2}\dot{\mathbf a}\cdot\mathbf v\,dt.
$$
Since
$$
\frac{d}{dt}(\mathbf a\cdot\mathbf v)
=\dot{\mathbf a}\cdot\mathbf v+a^2,
$$
it follows that
$$
\dot{\mathbf a}\cdot\mathbf v
=\frac{d}{dt}(\mathbf a\cdot\mathbf v)-a^2.
$$
Substitution and integration give
$$
\begin{aligned}
\int_{t_1}^{t_2}\mathbf F_{\rm rad}\cdot\mathbf v\,dt
&=C[\mathbf a\cdot\mathbf v]_{t_1}^{t_2}
-C\int_{t_1}^{t_2}a^2dt.
\end{aligned}
$$
For a complete cycle, or whenever the initial and final states satisfy
$$
(\mathbf a\cdot\mathbf v)_{t_2}
=(\mathbf a\cdot\mathbf v)_{t_1},
$$
the boundary term vanishes and
$$
\int\mathbf F_{\rm rad}\cdot\mathbf v\,dt
=-\int P_{\rm rad}dt.
$$
Therefore,
$$
\boxed{
\mathbf F_{\rm rad}
=\frac{2e^2}{3c^3}\dot{\mathbf a}
=m\tau\dot{\mathbf a}
}.
$$
This is the nonrelativistic Abraham–Lorentz force.

### 3.3 Why the force is not simple $-\mathbf v$ friction

If one instead imposes at every instant
$$
-\mathbf F_{\rm rad}\cdot\mathbf v=P_{\rm rad},
$$
this condition implicitly selects a special frame in which $\mathbf v$ is measured. The correct instantaneous relation is
$$
\mathbf F_{\rm rad}\cdot\mathbf v
=\frac{d}{dt}(m\tau\mathbf a\cdot\mathbf v)-P_{\rm rad}.
$$
Define the Schott energy by
$$
E_{\rm Schott}\equiv-m\tau\mathbf a\cdot\mathbf v,
$$
The energy balance can then be written as
$$
\boxed{
P_{\rm ext}
=\frac{d}{dt}(K+E_{\rm Schott})+P_{\rm rad}
}.
$$
At a given instant, part of the radiated energy can come from the near-zone electromagnetic field rather than entirely from the particle's mechanical energy. Averaging over a complete cycle removes the Schott boundary term, so the mean mechanical-energy loss equals the total radiated energy.

### 3.4 Equation of motion with an external force

Newton's second law is
$$
m\mathbf a=\mathbf F_{\rm ext}+m\tau\dot{\mathbf a},
$$
or equivalently
$$
\boxed{
m(\mathbf a-\tau\dot{\mathbf a})=\mathbf F_{\rm ext}
}.
$$
Because the position enters through a third time derivative, this equation admits additional mathematical solutions that do not occur in an ordinary second-order equation of motion.

---

## 4. Runaway solutions and the limitations of the classical point-charge model

When $\mathbf F_{\rm ext}=0$, the equation of motion becomes
$$
\mathbf a-\tau\dot{\mathbf a}=0,
$$
it follows that
$$
\dot{\mathbf a}=\frac{\mathbf a}{\tau}.
$$
The equation admits
$$
\boxed{
\mathbf a(t)=\mathbf a_0e^{t/\tau}
}
$$
This is a runaway solution in which the acceleration grows exponentially even without an external force.

This solution should not be interpreted as the behavior of a real electron. Its variation timescale is precisely $\tau$, whereas the derivation requires $t_{\rm motion}\gg\tau$. The runaway mode extrapolates a long-timescale effective equation into the ultrashort regime where that approximation fails.

Imposing the future boundary condition
$$
\mathbf a(t)\rightarrow0\qquad(t\rightarrow\infty),
$$
one can exclude the exponentially growing term, but the resulting solution exhibits pre-acceleration over a timescale of order $\tau$. Together, these pathologies show that the classical point-charge model is incomplete at sufficiently short times and small scales.

---

## 5. RL §3.6: an undriven harmonically bound particle

### 5.1 Deriving the third-order equation of motion

The restoring force is
$$
F_{\rm spring}=-kx=-m\omega_0^2x,
$$
The radiative reaction force is
$$
F_{\rm rad}=m\tau\dddot x.
$$
When there is no external driving force, Newton's second law gives
$$
m\ddot x=-m\omega_0^2x+m\tau\dddot x.
$$
Rearranging gives
$$
\boxed{
\ddot x-\tau\dddot x+\omega_0^2x=0
}.
$$
The minus sign in front of the third derivative appears when the self-force is moved to the left-hand side. The self-force itself remains $+m\tau\dddot x$.

### 5.2 Reducing the third derivative to ordinary damping

Assume weak radiative damping.
$$
\omega_0\tau\ll1.
$$
At zeroth order the motion is approximately simple harmonic, so
$$
\ddot x\simeq-\omega_0^2x.
$$
Differentiating once more gives
$$
\dddot x\simeq-\omega_0^2\dot x.
$$
Substituting this result into the original equation gives
$$
\ddot x+\omega_0^2\tau\dot x+\omega_0^2x=0.
$$
Define
$$
\boxed{
\Gamma\equiv\omega_0^2\tau
},
$$
which yields the standard weakly damped oscillator equation
$$
\boxed{
\ddot x+\Gamma\dot x+\omega_0^2x=0
}.
$$
The replacement $\dddot x\simeq-\omega_0^2\dot x$ is perturbative rather than an exact identity.

### 5.3 Weak damping solution

For $\Gamma\ll\omega_0$, the solution is
$$
x(t)=x_0e^{-\Gamma t/2}\cos(\omega_dt+\phi),
$$
where
$$
\omega_d=\sqrt{\omega_0^2-\frac{\Gamma^2}{4}}
\simeq\omega_0.
$$
The amplitude envelope is therefore
$$
\boxed{
A(t)=A_0e^{-\Gamma t/2}
}.
$$
### 5.4 Why the energy decays as $e^{-\Gamma t}$

Under weak damping, $A(t)$ changes negligibly over one cycle.
$$
x\simeq A(t)\cos\omega_0t,
\qquad
\dot x\simeq-\omega_0A(t)\sin\omega_0t.
$$
The mechanical energy is therefore approximately
$$
\begin{aligned}
E_{\rm mech}
&=\frac12m\dot x^2+\frac12m\omega_0^2x^2\\
&\simeq\frac12m\omega_0^2A^2(t).
\end{aligned}
$$
Since $A^2(t)=A_0^2e^{-\Gamma t}$,
$$
\boxed{
E_{\rm mech}(t)=E_0e^{-\Gamma t}
}.
$$
The cycle-averaged Larmor power is
$$
\begin{aligned}
\langle P_{\rm rad}\rangle
&=m\tau\langle a^2\rangle\\
&\simeq\frac12m\tau\omega_0^4A^2(t)\\
&=\Gamma E_{\rm mech}(t).
\end{aligned}
$$
Therefore,
$$
\boxed{
\frac{dE_{\rm mech}}{dt}=-\Gamma E_{\rm mech}
},
$$
in agreement with $E_{\rm mech}=E_0e^{-\Gamma t}$. The instantaneous radiated power also contains rapid $\cos^2\omega_0t$ oscillations, while its envelope and cycle average decay exponentially.

---

## 6. Complete Fourier derivation of the Lorentz profile

### 6.1 What is a Lorentz profile?

A normalized Lorentz profile is
$$
\boxed{
L(\omega)
=\frac{1}{\pi}
\frac{\gamma_L}{(\omega-\omega_0)^2+\gamma_L^2}
}.
$$
where $\gamma_L$ is the half width at half maximum. For radiation damping in this problem,
$$
\gamma_L=\frac{\Gamma}{2},
$$
Therefore,

$$
\boxed{
L(\omega)
=\frac{\Gamma/2\pi}
{(\omega-\omega_0)^2+(\Gamma/2)^2}
}.
$$
It satisfies
$$
\int_{-\infty}^{\infty}L(\omega)d\omega=1.
$$
The half-maximum points occur at $\omega_0\pm\Gamma/2$, so
$$
\boxed{\mathrm{FWHM}=\Gamma}.
$$
### 6.2 Fourier transform of a damped oscillation

Consider the damped oscillation
$$
x(t)=x_0e^{-\Gamma t/2}\cos\omega_0t,
\qquad t\geq0.
$$
RL's Fourier convention is
$$
\begin{aligned}
x(t)&=\int_{-\infty}^{\infty}\widetilde x(\omega)e^{-i\omega t}d\omega,\\
\widetilde x(\omega)
&=\frac{1}{2\pi}\int_{-\infty}^{\infty}x(t)e^{i\omega t}dt.
\end{aligned}
$$
Thus,
$$
\begin{aligned}
\widetilde x(\omega)
&=\frac{x_0}{2\pi}\int_0^\infty
e^{-\Gamma t/2}\cos\omega_0t\,e^{i\omega t}dt\\
&=\frac{x_0}{4\pi}
\left[
\frac{1}{\Gamma/2-i(\omega+\omega_0)}
+\frac{1}{\Gamma/2-i(\omega-\omega_0)}
\right].
\end{aligned}
$$
Near the positive-frequency peak $\omega\simeq\omega_0$, the second term dominates.
$$
\widetilde x(\omega)
\simeq
\frac{x_0}{4\pi}
\frac{1}{\Gamma/2-i(\omega-\omega_0)}.
$$
Therefore,
$$
\boxed{
|\widetilde x(\omega)|^2
\simeq
\left(\frac{x_0}{4\pi}\right)^2
\frac{1}{(\omega-\omega_0)^2+(\Gamma/2)^2}
}.
$$
Thus
$$
\boxed{
\text{exponential decay in the time domain}
\quad\Longleftrightarrow\quad
\text{a Lorentz profile in the frequency domain}
}.
$$
### 6.3 Radiation-energy spectrum from the displacement spectrum

The Larmor formula and Parseval's theorem give the positive-frequency radiation spectrum
$$
\boxed{
\frac{dW}{d\omega}
=\frac{8\pi e^2}{3c^3}\omega^4
|\widetilde x(\omega)|^2
}.
$$
Across a narrow resonance centered on $\omega\simeq\omega_0$, the slowly varying factor can be approximated as $\omega^4\simeq\omega_0^4$. Substituting $|\widetilde x|^2$ and using
$$
\Gamma=\omega_0^2\tau
=\frac{2e^2\omega_0^2}{3mc^3},
$$
gives
$$
\boxed{
\frac{dW}{d\omega}
=
\left(\frac12m\omega_0^2x_0^2\right)
\frac{\Gamma/2\pi}
{(\omega-\omega_0)^2+(\Gamma/2)^2}
}.
$$
The first factor is the initial mechanical energy, while the second is the normalized line profile. The area under the line therefore equals the initial mechanical energy.
$$
\int_0^\infty\frac{dW}{d\omega}d\omega
\simeq\frac12m\omega_0^2x_0^2.
$$
### 6.4 Lifetime and linewidth

Because the energy decays as $e^{-\Gamma t}$, its lifetime is
$$
t_{\rm life}=\frac{1}{\Gamma}.
$$
The Lorentz profile has FWHM $\Delta\omega=\Gamma$, so
$$
\boxed{
\Delta\omega_{\rm FWHM}\,t_{\rm life}=1
}.
$$
In terms of the ordinary frequency $\nu=\omega/(2\pi)$,
$$
\boxed{
\Delta\nu_{\rm FWHM}
=\frac{1}{2\pi t_{\rm life}}
}.
$$
A shorter-lived wave train contains fewer cycles and therefore has a less sharply defined frequency, which produces a broader spectral line.

---

## 7. Driven oscillator and scattering cross section

### 7.1 Driven equation of motion

The incident electric field is
$$
E(t)=E_0\cos\omega t.
$$
The equation of motion is
$$
\boxed{
\ddot x-\tau\dddot x+\omega_0^2x
=\frac{eE_0}{m}\cos\omega t
}.
$$
Adopt the steady-state solution
$$
x(t)=\operatorname{Re}(Xe^{-i\omega t}).
$$
Substitution gives
$$
(\omega_0^2-\omega^2-i\tau\omega^3)X
=\frac{eE_0}{m},
$$
Therefore,

$$
\boxed{
X=\frac{eE_0/m}
{\omega_0^2-\omega^2-i\tau\omega^3}
}.
$$
Its modulus squared is
$$
\boxed{
|X|^2
=\frac{e^2E_0^2/m^2}
{(\omega^2-\omega_0^2)^2+(\tau\omega^3)^2}
}.
$$
The first term in the denominator describes detuning, while the second describes radiation damping.

### 7.2 Deriving the cross section from the radiated power

The acceleration amplitude is $\omega^2|X|$, so
$$
\langle a^2\rangle=\frac12\omega^4|X|^2.
$$
The average radiated power is
$$
\langle P_{\rm rad}\rangle
=\frac{e^2\omega^4}{3c^3}|X|^2.
$$
The scattering cross section is
$$
\sigma(\omega)
\equiv
\frac{\langle P_{\rm rad}\rangle}{\langle S\rangle}.
$$
Using $\langle S\rangle=cE_0^2/(8\pi)$ gives
$$
\sigma(\omega)
=\frac{8\pi e^4}{3m^2c^4}
\frac{\omega^4}
{(\omega^2-\omega_0^2)^2+(\omega^3\tau)^2}.
$$
Recognizing that
$$
\sigma_T=\frac{8\pi e^4}{3m^2c^4},
$$
we obtain
$$
\boxed{
\sigma(\omega)
=\sigma_T
\frac{\omega^4}
{(\omega^2-\omega_0^2)^2+(\omega^3\tau)^2}
}.
$$
### 7.3 Three frequency regimes

#### Low-frequency regime: $\omega\ll\omega_0$
$$
\boxed{
\sigma(\omega)
\simeq\sigma_T\left(\frac{\omega}{\omega_0}\right)^4
}.
$$
This is Rayleigh scattering. Its strong frequency dependence preferentially scatters blue light and explains both the blue sky and red sunsets.

#### Resonance: $\omega\simeq\omega_0$

Near resonance, $\omega^2-\omega_0^2\simeq2\omega_0(\omega-\omega_0)$. The cross section then has a Lorentz profile with width $\Gamma=\omega_0^2\tau$.

#### High-frequency regime within the classical domain: $\omega_0\ll\omega\ll1/\tau$
$$
\boxed{
\sigma(\omega)\rightarrow\sigma_T
}.
$$
At sufficiently high driving frequency, the binding force becomes unimportant and the particle behaves almost as if it were free. The classical radiation-reaction approximation itself fails once $\omega\tau\gtrsim1$.

### 7.4 Connection to atomic spectral lines

Real atoms require quantum mechanics, but the frequency-integrated cross section of a quantum transition is often written in the form suggested by a classical oscillator.
$$
\int\sigma(\nu)d\nu
=\frac{\pi e^2}{mc}f_{nn'},
$$
where $f_{nn'}$ is the oscillator strength. A single classical oscillator corresponds to $f=1$, which explains why the classical result remains useful when discussing atomic transitions.

---

## 8. Four-momentum, invariant mass, and recoil

### 8.1 Definition of four-momentum

Four-momentum combines energy and three-momentum into a four-vector.
$$
\boxed{
P^\mu
=\left(\frac{E}{c},\mathbf p\right)
=\left(\gamma mc,\gamma m\mathbf v\right)
}.
$$
where
$$
E=\gamma mc^2,
\qquad
\mathbf p=\gamma m\mathbf v.
$$
Using the metric $(+,-,-,-)$, the square of the four momentum is
$$
\begin{aligned}
P^\mu P_\mu
&=\frac{E^2}{c^2}-p_x^2-p_y^2-p_z^2\\
&=m^2c^2.
\end{aligned}
$$
Therefore,
$$
\boxed{
E^2=p^2c^2+m^2c^4
}.
$$
For a photon, $m=0$ and therefore $E=pc$.

### 8.2 Determining velocity from energy and momentum

For a single particle with mass,
$$
\frac{\mathbf p}{E}
=\frac{\gamma m\mathbf v}{\gamma mc^2}
=\frac{\mathbf v}{c^2}.
$$
Therefore,

$$
\boxed{
\mathbf v=\frac{\mathbf p c^2}{E}
}.
$$
### 8.3 Total four-momentum and the rest mass of a system

A system composed of multiple particles has
$$
P_{\rm tot}^\mu=\sum_iP_i^\mu.
$$
The invariant mass $M$ of the system is defined as
$$
\boxed{
M^2c^4=E_{\rm tot}^2-p_{\rm tot}^2c^2
}.
$$
$M$ need not equal the sum of the particle rest masses because it also includes the kinetic, internal, radiation, and binding energies of the system.

### 8.4 Lorentz transformation of four-momentum

If $K'$ moves relative to $K$ in the direction of $+x$ and we transition from $K'$ to $K$, then
$$
\boxed{
\begin{aligned}
E&=\gamma(E'+vp_x'),\\
p_x&=\gamma\left(p_x'+\frac{vE'}{c^2}\right).
\end{aligned}
}
$$
Energy and momentum mix under a Lorentz boost. A system can therefore have nonzero momentum in $K$ even when its total momentum vanishes in $K'$.

### 8.5 Recoil

Recoil is the motion required by momentum conservation after an object absorbs or emits photons.

- During photon emission, the object generally recoils opposite to the photon momentum.
- During photon absorption, the object gains momentum along the photon direction.

Nonrelativistic recoil energy is
$$
E_{\rm recoil}=\frac{p_{\rm recoil}^2}{2m}.
$$
The photon energy does not necessarily become internal energy. Part of it can appear as center-of-mass recoil kinetic energy.

---

## 9. Problem 4.10: isotropic emission and momentum conservation

### 9.1 Problem statement and tasks

A particle of rest mass $m$ moves with velocity $v$ in frame $K$. Frame $K'$ is the particle rest frame. In $K'$, the particle releases internal energy $W'$ as isotropic radiation.

- (a) Explain why there is no net recoil in $K'$.
- (b) Calculate the total radiation momentum measured in $K$.
- (c) Determine whether the particle decelerates after the radiation carries forward momentum, and explain how momentum is conserved.

The key point is that a decrease in momentum need not imply a decrease in speed. It can instead reflect a decrease in rest mass.

### 9.2 Part (a): no net recoil in the rest frame

In $K'$, photon momenta in opposite directions cancel.
$$
\mathbf p'_{\rm rad}=0.
$$
The total four-momentum of the radiation field is therefore
$$
\boxed{
P_{\rm rad}^{\prime\mu}
=\left(\frac{W'}{c},0,0,0\right)
}.
$$
The particle experiences no recoil and remains at rest in $K'$ after emission. Its loss of internal energy reduces its rest mass to
$$
\boxed{
m_f=m-\frac{W'}{c^2}
}.
$$
### 9.3 Part (b): boosting to $K$

Boost the radiant four momentum from $K'$ to $K$:
$$
\begin{aligned}
E_{\rm rad}
&=\gamma(E'_{\rm rad}+vp'_{\rm rad,x})
=\gamma W',\\
p_{\rm rad,x}
&=\gamma\left(p'_{\rm rad,x}+\frac{vE'_{\rm rad}}{c^2}\right)
=\boxed{\frac{\gamma vW'}{c^2}}.
\end{aligned}
$$
Although the total radiation momentum vanishes in $K'$, it has a net forward momentum in $K$ because the boost mixes energy into the momentum component.

### 9.4 Part (c): the particle does not slow down and momentum remains conserved

The particle momentum before emission is
$$
p_i=\gamma mv.
$$
The velocity remains $v$ after emission, while the rest mass becomes $m_f$.
$$
p_f=\gamma m_fv.
$$
The momentum lost by the particle is
$$
\begin{aligned}
p_i-p_f
&=\gamma(m-m_f)v\\
&=\frac{\gamma vW'}{c^2}\\
&=p_{\rm rad}.
\end{aligned}
$$
Therefore,

$$
\boxed{
p_i=p_f+p_{\rm rad}
}.
$$
The particle does not slow down. Its momentum decreases entirely because its rest mass decreases.

---

## 10. Problem 4.11: photon absorption, recoil, and increased rest mass

### 10.1 Problem statement and tasks

A particle of rest mass $m$ is initially at rest and absorbs a photon of energy $h\nu$. After absorption, its rest mass becomes $m'$ and its velocity becomes $v'$.

- (a) Derive the stated expression for $m/m'$ directly from energy–momentum conservation rather than solving for $v'$ first.
- (b) Transform an initially moving particle to its rest frame and use the Doppler-shifted frequency $\nu'$.

The photon energy does not all become rest-mass energy because the absorbing particle must carry the photon momentum and therefore acquires recoil kinetic energy.

### 10.2 (a) Conservation of energy and momentum

The total energy and momentum before absorption are
$$
E_i=mc^2+h\nu,
\qquad
p_i=\frac{h\nu}{c}.
$$
After absorption, there is only one particle with a mass of $m'$, so
$$
E_f^2-p_f^2c^2=m'^2c^4.
$$
Four-momentum conservation gives
$$
\begin{aligned}
m'^2c^4
&=(mc^2+h\nu)^2-(h\nu)^2\\
&=m^2c^4+2mc^2h\nu.
\end{aligned}
$$
Therefore,
$$
m'^2=m^2\left(1+\frac{2h\nu}{mc^2}\right),
$$
Finally,
$$
\boxed{
\frac{m}{m'}
=\left(1+\frac{2h\nu}{mc^2}\right)^{-1/2}
}.
$$
The velocity after absorption can also be obtained from $\mathbf v=\mathbf pc^2/E$:
$$
\boxed{
v'=\frac{h\nu\,c}{mc^2+h\nu}
}.
$$
### 10.3 Why not $m'=m+h\nu/c^2$?

If all the photon energy is included in the rest mass, the recoil kinetic energy is ignored. The exact energy relation is
$$
E_f^2=p_f^2c^2+m'^2c^4
$$
rather than a linear addition of photon energy to the rest-mass energy.

For $h\nu\ll mc^2$, expansion gives
$$
m'-m\simeq\frac{h\nu}{c^2}
-\frac{(h\nu)^2}{2mc^4}+\cdots.
$$
The second term is the recoil correction to the increase in rest mass.

### 10.4 Part (b): an initially moving particle

If the particle moves at velocity $v$ in the laboratory frame and the angle between the photon propagation direction and the particle velocity is $\theta$, the photon frequency measured in the initial rest frame of the particle is
$$
\boxed{
\nu'=\gamma\nu(1-\beta\cos\theta)
}.
$$
Applying part (a) directly in the rest frame gives
$$
\boxed{
\frac{m}{m'}
=\left(1+\frac{2h\nu'}{mc^2}\right)^{-1/2}
}.
$$
$m$ and $m'$ are invariant masses and do not depend on the frame, whereas the photon frequency does.

---

## 11. Problem 4.12: the Poynting–Robertson effect

### 11.1 Problem statement and tasks

A dust grain orbits a star with velocity $v$. It absorbs stellar photons that propagate radially outward and, after heating, reradiates the excess energy isotropically in its own rest frame.

- (a) Prove that absorbing radial photons does not change the angular momentum of the dust about the star.
- (b) Show that isotropic reradiation leaves the grain velocity unchanged but reduces its angular momentum through the loss of rest mass, and derive $l/l_0$.
- (c) Expand to first order for $v\ll c$ and $h\nu\ll mc^2$, and find the angular-momentum change $\Delta l$ per photon.
- (d) Convert the angular-momentum loss per photon into continuous rates $dl/dt$ and $dr/dt$, then calculate the inspiral time from a circular orbit at $1\ {\rm AU}$ to the Sun.

This problem combines the absorption process in Problem 4.11 with the isotropic emission process in Problem 4.10.

### 11.2 (a) The angular momentum is unchanged when radial photons are absorbed

The angular momentum of the dust relative to the star is
$$
\mathbf l=\mathbf r\times\mathbf p.
$$
Stellar photons propagate radially, so
$$
\mathbf p_\gamma\parallel\mathbf r,
$$
Therefore,
$$
\mathbf r\times\mathbf p_\gamma=0.
$$
After absorption,
$$
\mathbf p_{\rm after}
=\mathbf p_{\rm before}+\mathbf p_\gamma,
$$
Therefore,

$$
\boxed{
\mathbf l_{\rm after}=\mathbf l_{\rm before}
}.
$$
Absorption changes the energy and radial momentum but does not directly change the tangential angular momentum.

### 11.3 (b) Re-radiation reduces rest mass and angular momentum

Let the cold dust grain have rest mass $m$ before absorption and rest mass $m'$ after absorption. Reradiation is isotropic in the grain rest frame, so it causes no recoil and leaves the four-velocity $U^\mu$ unchanged.

Since
$$
P^\mu=mU^\mu,
$$
When reradiation reduces the rest mass from $m'$ to $m$, the three-momentum decreases by the same factor.
$$
\frac{p_{\rm after}}{p_{\rm before}}
=\frac{m}{m'}.
$$
The grain position is unchanged during the instantaneous reradiation event, so its angular momentum satisfies
$$
\boxed{
\frac{l}{l_0}=\frac{m}{m'}
}.
$$
Using the absorption result from Problem 4.11 gives
$$
\boxed{
l
=l_0
\left(1+\frac{2h\nu'}{mc^2}\right)^{-1/2}
}.
$$
Here $\nu'$ is the incident-photon frequency measured in the initial rest frame of the grain. Reradiation does not change the instantaneous magnitude or direction of the grain velocity, but its momentum and angular momentum decrease because the rest mass $m$ in $p=\gamma mv$ decreases.

### 11.4 Part (c): nonrelativistic, low-photon-energy expansion

For a circular orbit, the grain velocity is tangential while the stellar photons propagate radially, so the angle between them is $90^\circ$.
$$
\nu'=\gamma\nu\simeq\nu
$$
to lowest order. We then expand
$$
\left(1+\frac{2h\nu}{mc^2}\right)^{-1/2}
$$
to first order using
$$
(1+x)^{-1/2}\simeq1-\frac{x}{2}.
$$
Thus,
$$
l\simeq l_0\left(1-\frac{h\nu}{mc^2}\right),
$$
Each absorbed photon therefore produces
$$
\boxed{
\Delta l
\equiv l-l_0
=-\frac{l_0h\nu}{mc^2}
}.
$$
Although the grain orbit is nonrelativistic, $v\ll c$, this effect arises from an order-$1/c^2$ correction and is therefore relativistic in origin.

### 11.5 Part (d): from angular-momentum loss to the inspiral time

Let $\dot N$ be the photon absorption rate. Part (c) gives
$$
\frac{dl}{dt}
=\dot N\Delta l
=-\frac{l}{mc^2}\dot Nh\nu.
$$
Define the absorbed power by
$$
P_{\rm abs}=\dot Nh\nu,
$$
Therefore
$$
\boxed{
\frac{1}{l}\frac{dl}{dt}
=-\frac{P_{\rm abs}}{mc^2}
}.
$$
The solar radiative flux at radius $r$ is
$$
F(r)=\frac{L_\odot}{4\pi r^2}.
$$
For an absorption cross section $\sigma$, the absorbed power is
$$
P_{\rm abs}
=\sigma F(r)
=\frac{\sigma L_\odot}{4\pi r^2}.
$$
The angular momentum of the circular orbit is
$$
l=mvr=m\sqrt{GM_\odot r}.
$$
Therefore,
$$
\frac{1}{l}\frac{dl}{dt}
=\frac{1}{2r}\frac{dr}{dt}.
$$
Substituting the angular-momentum loss rate gives
$$
\frac{1}{2r}\frac{dr}{dt}
=-\frac{\sigma L_\odot}{4\pi mc^2r^2},
$$
which gives
$$
\boxed{
\frac{dr}{dt}
=-\frac{\sigma L_\odot}{2\pi mc^2r}
}.
$$
Integrating from $r_0$ to $0$ gives
$$
\boxed{
t_{\rm PR}
=\frac{\pi mc^2r_0^2}{\sigma L_\odot}
}.
$$
Using
$$
\begin{aligned}
m&=10^{-11}\ {\rm g},
&\sigma&=10^{-8}\ {\rm cm^2},\\
r_0&=1\ {\rm AU}=1.496\times10^{13}\ {\rm cm},
&L_\odot&=3.83\times10^{33}\ {\rm erg\,s^{-1}}.
\end{aligned}
$$
gives
$$
t_{\rm PR}\simeq1.65\times10^{11}\ {\rm s}
\simeq\boxed{5.2\times10^3\ {\rm yr}}.
$$
This idealized result assumes that the orbit remains circular throughout the inspiral. Real dust grains are also affected by radiation pressure, sublimation, collisions, and orbital eccentricity.

---

## 12. Common points of confusion and consistency checks

### 12.1 Why $\mathbf F_{\rm rad}=+m\tau\dot{\mathbf a}$ can produce damping

For approximately harmonic motion,
$$
\dddot x\simeq-\omega_0^2\dot x,
$$
Therefore,

$$
F_{\rm rad}\simeq-m\tau\omega_0^2\dot x,
$$
which points opposite to the velocity.

### 12.2 The factors of two in amplitude, energy, and linewidth
$$
\begin{aligned}
A(t)&\propto e^{-\Gamma t/2},\\
E(t)&\propto e^{-\Gamma t},\\
\mathrm{HWHM}&=\frac{\Gamma}{2},
&\mathrm{FWHM}&=\Gamma.
\end{aligned}
$$
### 12.3 A Lorentz profile is not a Lorentz transformation

A Lorentz profile is a spectral line shape, whereas a Lorentz transformation relates spacetime coordinates between inertial frames. They share only the name Lorentz.

### 12.4 A decrease in momentum need not imply a decrease in velocity
$$
p=\gamma mv.
$$
If $v$ remains fixed while $m$ decreases, then $p$ also decreases. Problems 4.10 and 4.12 both test this distinction.

### 12.5 Invariant mass of one photon and of a multiphoton system

For a single photon,
$$
P_\gamma^2=0.
$$
A collection of photons propagating in different directions can nevertheless have a nonzero system invariant mass. In the frame where its total momentum vanishes and its total energy is $W'$,
$$
M_{\rm rad}=\frac{W'}{c^2}.
$$
This does not imply that an individual photon has a rest mass.

### 12.6 Absorption and emission in Problem 4.12 must be treated separately

- Absorption of radial photons increases the radial momentum and rest mass without increasing the angular momentum.
- Isotropic reradiation leaves the instantaneous velocity unchanged but reduces the angular momentum through the loss of rest mass.

### 12.7 Limiting checks

- $\tau\rightarrow0$ removes radiation reaction and recovers the ordinary bound oscillator.
- $\Gamma\rightarrow0$ gives an infinite lifetime and collapses the Lorentz profile to a monochromatic peak.
- $\omega\ll\omega_0$ gives $\sigma\propto\omega^4$, the Rayleigh limit.
- $\omega_0\ll\omega\ll1/\tau$ gives $\sigma\rightarrow\sigma_T$.
- $h\nu/(mc^2)\rightarrow0$ removes the absorption-induced corrections to the rest mass and angular momentum.
- $W'\rightarrow0$ makes the radiation energy and momentum in Problem 4.10 vanish.

---

## 13. Core formulas at a glance

### Radiation reaction

$$
\tau=\frac{2e^2}{3mc^3},
\qquad
\mathbf F_{\rm rad}=m\tau\dot{\mathbf a},
\qquad
m(\mathbf a-\tau\dot{\mathbf a})=\mathbf F_{\rm ext}.
$$
### Undriven bound oscillator
$$
\begin{gathered}
\ddot x-\tau\dddot x+\omega_0^2x=0,\\
\ddot x+\Gamma\dot x+\omega_0^2x=0,
\qquad
\Gamma=\omega_0^2\tau,\\
x(t)\simeq x_0e^{-\Gamma t/2}\cos\omega_0t.
\end{gathered}
$$

### Lorentz profile

$$
L(\omega)
=\frac{\Gamma/2\pi}
{(\omega-\omega_0)^2+(\Gamma/2)^2},
\qquad
\mathrm{FWHM}=\Gamma,
\qquad
t_{\rm life}=\Gamma^{-1}.
$$

### Driven oscillator scattering

$$
\sigma(\omega)
=\sigma_T
\frac{\omega^4}
{(\omega^2-\omega_0^2)^2+(\omega^3\tau)^2}.
$$
### Four-momentum
$$
P^\mu=\left(\frac Ec,\mathbf p\right),
\qquad
P^2=m^2c^2,
\qquad
E^2=p^2c^2+m^2c^4,
\qquad
\mathbf v=\frac{\mathbf pc^2}{E}.
$$

### Problem 4.10

$$
E_{\rm rad}=\gamma W',
\qquad
p_{\rm rad}=\frac{\gamma vW'}{c^2}.
$$

### Problem 4.11

$$
\frac{m}{m'}
=\left(1+\frac{2h\nu}{mc^2}\right)^{-1/2},
\qquad
v'=\frac{h\nu\,c}{mc^2+h\nu}.
$$

### Problem 4.12

$$
\Delta l=-\frac{l_0h\nu}{mc^2},
\qquad
t_{\rm PR}=\frac{\pi mc^2r_0^2}{\sigma L_\odot}.
$$

---

## 14. References

1. Rybicki, G. B., & Lightman, A. P., *Radiative Processes in Astrophysics*, §§3.5–3.6 and Problems 4.10–4.12.
2. RL Fig. 3.8. An undriven bound oscillator damped by radiation reaction, with a Lorentz power spectrum of FWHM $\Gamma$.
3. RL Fig. 3.9. The scattering cross section of a driven bound oscillator in the Rayleigh, resonance, and Thomson regimes.

