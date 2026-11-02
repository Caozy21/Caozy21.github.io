---
title: "AST1440 Synchrotron Radiation, Critical Frequency, and Power-Law Spectra: RL §§6.1–6.3 and Problems 6.1, 6.2"
description: "A systematic derivation of relativistic electron gyration, synchrotron power and critical frequency, the single-electron spectrum, power-law electron populations, synchrotron cooling, and adiabatic compression, with complete solutions to Problems 6.1 and 6.2."
date: "2026-11-02"
tags: ["AST1440","Synchrotron radiation","Critical frequency","Power-law spectrum","Radiative cooling","Exercises"]
order: 15
draft: false
sourceHash: 052d10ed1f1b31856da19751f8f4b380cfc9f43337a05e3adc59fd02f3568ed2
translation: "AI-assisted English translation"
---

# AST1440 Synchrotron Radiation, Critical Frequency, and Power-Law Spectra: RL §§6.1–6.3 and Problems 6.1, 6.2

> Course: AST1440 — Radiation.  
> Textbook: Rybicki & Lightman, *Radiative Processes in Astrophysics* (RL), §6.1 (print pp. 167–169), §6.2 (print pp. 169–173), §6.3 (print pp. 173–175); Problems 6.1 and 6.2 (print p. 192).  
> Supplementary material: Bradt, Chapter 8; AstroBaki, *Introduction to Synchrotron Radiation and Relativistic Beaming* and *Synchrotron Radiation*.  
> Compiled: November 2, 2026.  
> This note returns every question from the preview discussion to its physical context: the origins of three frequencies, why a magnetic field radiates without doing work, relativistic beaming and arrival-time compression, what is “critical” about the critical frequency, normalization of the single-electron spectrum, the variable transformation from an electron distribution to a photon spectrum, comparison with Thomson scattering and inverse Compton emission, and complete Chinese and English solutions to the two assigned problems.

## Contents

1. [Logical Road Map and Physical Picture](#1-logical-road-map-and-physical-picture)
2. [Symbols, Unit System, and Approximations](#2-symbols-unit-system-and-approximations)
3. [Relativistic Electron Motion in a Magnetic Field](#3-relativistic-electron-motion-in-a-magnetic-field)
4. [Three Frequencies: $\omega_0$, $\omega_{\rm g}$, and $\omega_c$](#4-three-frequencies-omega_0-omega_rm-g-and-omega_c)
5. [RL §6.1: Total Synchrotron Power of One Electron](#5-rl-61-total-synchrotron-power-of-one-electron)
6. [RL §6.2: Relativistic Beaming, Pulses, and Arrival-Time Compression](#6-rl-62-relativistic-beaming-pulses-and-arrival-time-compression)
7. [What Is “Critical” About the Critical Frequency?](#7-what-is-critical-about-the-critical-frequency)
8. [Single-Electron Spectrum and Its Scaling](#8-single-electron-spectrum-and-its-scaling)
9. [RL §6.3: Power-Law Electron Distributions and Variable Transformations](#9-rl-63-power-law-electron-distributions-and-variable-transformations)
10. [Deriving a Synchrotron Power Law from a Power-Law Electron Distribution](#10-deriving-a-synchrotron-power-law-from-a-power-law-electron-distribution)
11. [Comparison with the Thomson Cross Section and Inverse Compton Emission](#11-comparison-with-the-thomson-cross-section-and-inverse-compton-emission)
12. [Problem 6.1: Synchrotron Cooling](#12-problem-61-synchrotron-cooling)
13. [Problem 6.2: Isotropic Adiabatic Compression](#13-problem-62-isotropic-adiabatic-compression)
14. [English assignment-ready solutions](#14-english-assignment-ready-solutions)
15. [Dimensions, Limits, and Common Confusions](#15-dimensions-limits-and-common-confusions)
16. [Review Checklist and Core Equations](#16-review-checklist-and-core-equations)
17. [Further Physical Connections](#17-further-physical-connections)
18. [References](#18-references)

---


## 1. Logical Road Map and Physical Picture

The most vivid picture of synchrotron radiation is

$$
\boxed{
\text{a relativistic electron on a curved path carrying an extremely narrow searchlight}
}.
$$

The magnetic field continually turns the electron. Any accelerated charge radiates, even when its speed is unchanged and only its direction varies. For a nonrelativistic electron the radiation pattern is broad and an observer sees an approximately smooth periodic signal. For $\gamma\gg1$, the radiation is confined to a narrow cone of half-angle $1/\gamma$ about the velocity. Each time that cone sweeps across the line of sight, the observer receives only a short pulse.

The physical chain in this chapter is

$$
\boxed{
\mathbf v\times\mathbf B
\longrightarrow
\text{helical motion and transverse acceleration}
\longrightarrow
\text{relativistic beaming}
\longrightarrow
\text{short arrival-time pulse}
\longrightarrow
\nu_c\propto B\gamma^2\sin\alpha
\longrightarrow
\text{broadband synchrotron radiation}
}.
$$

If the electron population has a power-law energy spectrum

$$
N(\gamma)\propto\gamma^{-p},
$$

then summing the single-particle spectra of all electrons gives

$$
\boxed{
j_\nu\propto\nu^{-(p-1)/2}
}.
$$

This makes synchrotron radiation a powerful astrophysical diagnostic: an observed spectral slope can be used to infer the otherwise unobservable energy distribution of relativistic electrons.

The four most important physical statements in this chapter are:

1. A magnetic field does no work, but it turns the electron, so the electron is still accelerated and radiates.
2. The synchrotron frequency is not the electron's orbital frequency; it is the Fourier frequency associated with a short radiation pulse.
3. A higher-energy electron actually orbits more slowly, yet produces higher-frequency radiation because of beaming and arrival-time compression.
4. The critical frequency is not a hard cutoff; it is the characteristic scale at which the single-electron spectrum enters exponential decline.

---


## 2. Symbols, Unit System, and Approximations

### 2.1 Basic Symbols

| Symbol | Meaning |
|---|---|
| $m_e$ | Electron rest mass |
| $e$ | Positive elementary charge; the electron charge is $-e$ |
| $\mathbf B$ | Applied magnetic field |
| $\mathbf v$ | Electron velocity |
| $\beta=v/c$ | Dimensionless speed |
| $\gamma=(1-\beta^2)^{-1/2}$ | Lorentz factor |
| $\alpha$ | Pitch angle between $\mathbf v$ and $\mathbf B$ |
| $v_\parallel,v_\perp$ | Velocity components parallel and perpendicular to the magnetic field |
| $B_\perp=B\sin\alpha$ | Effective perpendicular magnetic-field factor for a given electron trajectory |
| $\omega_0=eB/(m_ec)$ | Nonrelativistic cyclotron angular frequency |
| $\omega_{\rm g}=\omega_0/\gamma$ | Relativistic gyro angular frequency |
| $\omega_c$ | Synchrotron critical angular frequency |
| $\nu_c=\omega_c/(2\pi)$ | Synchrotron critical ordinary frequency |
| $U_B=B^2/(8\pi)$ | Magnetic energy density |
| $\sigma_T$ | Thomson scattering cross section |
| $P_\nu(\gamma)$ | Radiation power per unit frequency from one electron |
| $N(\gamma)d\gamma$ | Number of electrons per unit volume between $\gamma$ and $\gamma+d\gamma$ |
| $j_\nu$ | Spectral emissivity of the electron population; whether it includes $4\pi$ depends on the definition |

### 2.2 Gaussian-cgs Units

RL uses Gaussian-cgs, in which the Lorentz force is

$$
\frac{d\mathbf p}{dt}
=
q\left(
\mathbf E+
\frac{\mathbf v\times\mathbf B}{c}
\right).
$$

In SI the magnetic term is $q\mathbf v\times\mathbf B$, with no explicit $1/c$. Formulas therefore cannot be transferred between sources by matching symbols alone; the unit system must be checked first.

### 2.3 Main Approximations

- The single-particle synchrotron treatment mainly assumes $\gamma\gg1$.
- Radiation reaction is initially neglected when deriving the instantaneous trajectory, so $\gamma$ is approximately constant over one gyroperiod.
- The magnetic field is approximately uniform over one gyro-orbit.
- The pure power-law result in §6.3 requires a sufficiently broad electron-energy range and observing frequencies far from the endpoints set by $\gamma_{\min}$ and $\gamma_{\max}$.
- Simple relations between $\langle P\rangle$ and the power-law spectrum generally assume either a fixed or isotropic pitch-angle distribution.
- Problem 6.2 assumes isotropic compression, ideal flux freezing, and compression slow compared with the electron gyroperiod.

### 2.4 $\gamma$, Energy, and Momentum

The total energy, kinetic energy, and momentum satisfy

$$
\boxed{
E_{\rm tot}=\gamma m_ec^2
},
$$

$$
\boxed{
K=(\gamma-1)m_ec^2
},
$$

and

$$
\boxed{
E_{\rm tot}^2=p^2c^2+m_e^2c^4
}.
$$

For an ultrarelativistic electron, $\gamma\gg1$, so

$$
K\simeq E_{\rm tot}\simeq pc\simeq\gamma m_ec^2.
$$

The electron rest energy is

$$
m_ec^2=0.511\ {\rm MeV}.
$$

Thus $\gamma$ may be understood directly as the electron total energy in units of its rest energy:

$$
\gamma=\frac{E_{\rm tot}}{m_ec^2}.
$$

---


## 3. Relativistic Electron Motion in a Magnetic Field

### 3.1 Velocity Decomposition and the Helical Orbit

Decompose the electron velocity as

$$
\mathbf v=\mathbf v_\parallel+\mathbf v_\perp,
$$

where

$$
v_\parallel=v\cos\alpha,
\qquad
v_\perp=v\sin\alpha.
$$

The magnetic force

$$
\mathbf F_B=
-\frac{e}{c}\mathbf v\times\mathbf B
$$

acts only on the perpendicular velocity component. Consequently:

- $v_\parallel$ moves the electron uniformly along the magnetic-field line.
- $v_\perp$ drives circular motion around the field line.
- Their combination forms a helical trajectory.

### 3.2 Why Does the Magnetic Field Do No Work?

The relativistic energy-change rate satisfies

$$
\boxed{
\frac{dE}{dt}
=
\mathbf v\cdot\frac{d\mathbf p}{dt}
}.
$$

This follows from the energy–momentum relation. Starting from

$$
E^2=p^2c^2+m_e^2c^4
$$

and differentiating with respect to time gives

$$
2E\frac{dE}{dt}
=
2c^2\mathbf p\cdot\frac{d\mathbf p}{dt}.
$$

Because

$$
\frac{c^2\mathbf p}{E}
=
\frac{c^2\gamma m_e\mathbf v}{\gamma m_ec^2}
=\mathbf v,
$$

we have

$$
\frac{dE}{dt}
=
\mathbf v\cdot\frac{d\mathbf p}{dt}.
$$

With only a magnetic field,

$$
\frac{d\mathbf p}{dt}
=
-\frac{e}{c}\mathbf v\times\mathbf B.
$$

Therefore

$$
\frac{dE}{dt}
=
-\frac{e}{c}
\mathbf v\cdot(\mathbf v\times\mathbf B)
=0.
$$

Thus, temporarily neglecting radiation reaction,

$$
\boxed{
\frac{d}{dt}(\gamma m_ec^2)=0
},
$$

so $\gamma$ and the speed remain constant while only the velocity direction changes.

One must not write $(\gamma m_e\mathbf v)\cdot\mathbf v=c^2$; in fact

$$
(\gamma m_e\mathbf v)\cdot\mathbf v
=
\gamma m_ev^2,
$$

which has dimensions of energy and is not equal to $c^2$.

### 3.3 Why Is There Radiation If No Work Is Done?

“The magnetic force does no work” means only that the applied magnetic field does not directly change the electron energy. It does not mean that the electron has no acceleration. In circular motion the velocity direction changes continuously, producing transverse acceleration and radiation.

Writing the trajectory using only the applied Lorentz force neglects the reaction force from the electron's own radiation. The more complete equation is

$$
\frac{d\mathbf p}{dt}
=
-\frac{e}{c}\mathbf v\times\mathbf B
+\mathbf F_{\rm rad}.
$$

Then

$$
\frac{dE}{dt}
=
\mathbf v\cdot\mathbf F_{\rm rad}
=-P_{\rm syn}<0.
$$

Therefore “approximately constant $\gamma$ on one orbit” and “gradual electron cooling over many orbits” describe different timescales and are not contradictory.

---


## 4. Three Frequencies: $\omega_0$, $\omega_{\rm g}$, and $\omega_c$

### 4.1 Nonrelativistic Gyrofrequency $\omega_0$

In nonrelativistic circular motion, the magnetic force supplies the centripetal force:

$$
\frac{ev_\perp B}{c}
=
\frac{m_ev_\perp^2}{r_L}.
$$

Cancel one factor of $v_\perp$:

$$
\frac{v_\perp}{r_L}
=
\frac{eB}{m_ec}.
$$

Since the angular speed of circular motion is $\omega=v_\perp/r_L$,

$$
\boxed{
\omega_0=\frac{eB}{m_ec}
}.
$$

It is independent of speed: a faster nonrelativistic electron has a larger orbit, and the two effects cancel exactly.

### 4.2 Relativistic Gyrofrequency $\omega_{\rm g}$

Relativistic momentum is $p=\gamma m_ev$. The centripetal-force relation becomes

$$
\frac{ev_\perp B}{c}
=
\frac{\gamma m_ev_\perp^2}{r_L}.
$$

Therefore

$$
\boxed{
\omega_{\rm g}
=
\frac{v_\perp}{r_L}
=
\frac{eB}{\gamma m_ec}
=
\frac{\omega_0}{\gamma}
}.
$$

The relativistic Larmor radius is

$$
\boxed{
r_L
=
\frac{\gamma m_ecv_\perp}{eB}
=
\frac{p_\perp c}{eB}
}.
$$

A higher-energy electron therefore orbits more slowly on a larger trajectory.

### 4.3 Synchrotron Critical Frequency $\omega_c$

The critical frequency is not the orbital frequency. Ultrarelativistic radiation is confined to a narrow cone of half-angle $\sim1/\gamma$ about the velocity. During each orbit, an observer receives only a brief pulse when the radiation cone sweeps across the line of sight.

Scaling the pulse width gives

$$
\Delta t_{\rm obs}
\sim
\frac{1}{\gamma^3\omega_{\rm g}\sin\alpha}
=
\frac{1}{\gamma^2\omega_0\sin\alpha}.
$$

The characteristic angular-frequency scale is therefore

$$
\omega\sim\frac{1}{\Delta t_{\rm obs}}
\sim
\gamma^3\omega_{\rm g}\sin\alpha
=
\gamma^2\omega_0\sin\alpha.
$$

A full Fourier calculation gives the standard definition

$$
\boxed{
\omega_c
=
\frac32\gamma^3\omega_{\rm g}\sin\alpha
=
\frac32\gamma^2\omega_0\sin\alpha
}.
$$

The ordinary frequency is

$$
\boxed{
\nu_c
=
\frac{\omega_c}{2\pi}
=
\frac{3eB}{4\pi m_ec}
\gamma^2\sin\alpha
}.
$$

The roles of the three frequencies can be summarized as follows:

| Frequency | Physical Meaning | Dependence on $\gamma$ |
|---|---|---|
| $\omega_0$ | Cyclotron frequency under the nonrelativistic assumption | None |
| $\omega_{\rm g}$ | Actual orbital frequency of a relativistic electron around the magnetic field | $\gamma^{-1}$ |
| $\omega_c$ | Observed high-frequency scale of the single-electron synchrotron spectrum | $\gamma^2$ |

---


## 5. RL §6.1: Total Synchrotron Power of One Electron

### 5.1 Transverse Acceleration

The magnitude of the magnetic force on the electron is

$$
F_B=\frac{evB\sin\alpha}{c}.
$$

Since $F_B=\gamma m_ea_\perp$,

$$
a_\perp
=
\frac{eBv\sin\alpha}{\gamma m_ec}
=
\frac{eB}{\gamma m_e}\beta\sin\alpha.
$$

It may also be written as

$$
a_\perp=\omega_{\rm g}v\sin\alpha.
$$

### 5.2 Total Power of One Electron

For transverse acceleration, the relativistic Larmor formula gives

$$
P
=
\frac{2e^2}{3c^3}\gamma^4a_\perp^2.
$$

Substituting $a_\perp$ gives

$$
\boxed{
P
=
\frac{2e^4B^2}{3m_e^2c^3}
\gamma^2\beta^2\sin^2\alpha
}.
$$

Using

$$
U_B=\frac{B^2}{8\pi}
$$

and the Thomson cross section

$$
\boxed{
\sigma_T
=
\frac{8\pi}{3}r_e^2
=
\frac{8\pi e^4}{3m_e^2c^4}
},
$$

where the classical electron radius in cgs is

$$
r_e=\frac{e^2}{m_ec^2},
$$

the power can be rewritten as

$$
\boxed{
P
=
2\sigma_TcU_B
\gamma^2\beta^2\sin^2\alpha
}.
$$

The numerical value of the Thomson cross section is

$$
\boxed{
\sigma_T
=
6.652\times10^{-25}\ {\rm cm^2}
}.
$$

### 5.3 Isotropic Pitch-Angle Average

For isotropically distributed electron velocity directions, the angular average is

$$
\left\langle\sin^2\alpha\right\rangle
=
\frac{1}{4\pi}
\int\sin^2\alpha\,d\Omega
=\frac23.
$$

Therefore

$$
\boxed{
\langle P\rangle
=
\frac43\sigma_TcU_B
\gamma^2\beta^2
}.
$$

Several limiting checks are useful:

- As $B\to0$, $P\to0$.
- As $\alpha\to0$, the electron moves along the magnetic field and $P\to0$.
- In the ultrarelativistic limit $P\propto\gamma^2$, so higher-energy electrons cool faster.
- The power depends on $B_\perp^2=B^2\sin^2\alpha$.

---


## 6. RL §6.2: Relativistic Beaming, Pulses, and Arrival-Time Compression

### 6.1 Why Is the Radiation Cone Only $1/\gamma$ Wide?

In the instantaneous electron rest frame, the radiation has the broad angular distribution of ordinary dipole radiation. After transforming to the laboratory frame, aberration compresses most of the radiation around the electron velocity direction:

$$
\boxed{
\theta_{\rm beam}\sim\frac1\gamma
}.
$$

A stationary observer therefore does not see the electron continuously, but only a brief pulse when its radiation cone sweeps across the line of sight.

### 6.2 How Fast Does the Electron Velocity Direction Rotate?

The angular rate of change of the velocity direction is

$$
\frac{d\theta}{dt}=\frac{a_\perp}{v}.
$$

Using

$$
a_\perp=\omega_{\rm g}v\sin\alpha,
$$

gives

$$
\boxed{
\frac{d\theta}{dt}
=
\omega_{\rm g}\sin\alpha
}.
$$

The radiation cone sweeps from $-1/\gamma$ on one side of the line of sight to $+1/\gamma$ on the other, for a total angle of approximately

$$
\Delta\theta\sim\frac{2}{\gamma}.
$$

The emission window at the source is

$$
\boxed{
\Delta t_{\rm emit}
\sim
\frac{2}{\gamma\omega_{\rm g}\sin\alpha}
}.
$$

Substituting $\omega_{\rm g}=\omega_0/\gamma$ gives

$$
\Delta t_{\rm emit}
\sim
\frac{2}{\omega_0\sin\alpha}.
$$

The radiation cone narrows as $\gamma$ grows, but the electron also turns more slowly. These two effects approximately cancel in the emission window at the source.

### 6.3 Why Is the Reception Time Compressed by Another Factor of $1-\beta$?

Suppose the first ray is emitted at $t=0$, $x=0$, and the observer is at $x=D$. Its arrival time is

$$
T_1=\frac{D}{c}.
$$

After $\Delta t_{\rm emit}$, the electron has moved toward the observer by

$$
\Delta x=v\Delta t_{\rm emit}
=
\beta c\Delta t_{\rm emit}.
$$

The second ray travels only $D-\Delta x$, so

$$
\begin{aligned}
T_2
&=
\Delta t_{\rm emit}
+\frac{D-\beta c\Delta t_{\rm emit}}{c}\\
&=
\frac{D}{c}
+(1-\beta)\Delta t_{\rm emit}.
\end{aligned}
$$

The arrival-time interval is therefore

$$
\boxed{
\Delta t_{\rm obs}
=
(1-\beta)\Delta t_{\rm emit}
}.
$$

More generally, if the velocity makes an angle $\psi$ with the line of sight,

$$
\boxed{
dt_{\rm obs}
=
(1-\beta\cos\psi)dt
}.
$$

At the pulse center $\psi\simeq0$. Using

$$
1-\beta
=
\frac{1-\beta^2}{1+\beta}
=
\frac{1}{\gamma^2(1+\beta)}
\simeq
\frac{1}{2\gamma^2},
$$

gives

$$
\begin{aligned}
\Delta t_{\rm obs}
&\sim
\frac{1}{2\gamma^2}
\frac{2}{\gamma\omega_{\rm g}\sin\alpha}\\
&=
\frac{1}{\gamma^3\omega_{\rm g}\sin\alpha}\\
&=
\frac{1}{\gamma^2\omega_0\sin\alpha}.
\end{aligned}
$$

The high-frequency scale associated with the pulse is therefore

$$
\omega\sim\frac{1}{\Delta t_{\rm obs}}
\sim\gamma^2\omega_0\sin\alpha.
$$

The central causal effect is not an abstract “time dilation” but a path-length difference: the second ray is emitted later but starts closer to the observer, so it catches up with the first.

### 6.4 Why Does a Short Pulse Produce a Broad Spectrum?

A smooth sinusoid has one frequency; a sudden sharp pulse requires many Fourier frequencies. In synchrotron radiation, the electron produces one narrow pulse per orbit, so:

- The pulse repetition period determines the harmonic spacing, of order $\omega_{\rm g}$.
- The width of an individual pulse determines how far the harmonic envelope extends in frequency, on a scale set by $\omega_c$.

When $\gamma\gg1$, many closely spaced harmonics form an approximately continuous spectrum at realistic observing resolution.

---


## 7. What Is “Critical” About the Critical Frequency?

The critical frequency is neither an absolute forbidden upper limit nor the electron orbital frequency. It is the characteristic scale at which the single-electron spectrum changes from a slowly varying low-frequency form to exponential decline at high frequency.

Write the single-electron spectrum as

$$
P_\nu\propto F\left(\frac{\nu}{\nu_c}\right).
$$

When $\nu\ll\nu_c$,

$$
P_\nu\propto\nu^{1/3}.
$$

When $\nu\gg\nu_c$,

$$
P_\nu\propto
\nu^{1/2}e^{-\nu/\nu_c}.
$$

Therefore

$$
\boxed{
\nu_c
\text{ marks the high-frequency scale where the single-electron synchrotron spectrum becomes exponentially suppressed}
}.
$$

Physically, a finite-width pulse can efficiently support Fourier frequencies only up to $\sim1/\Delta t_{\rm obs}$. Still higher frequencies require the electric field to vary repeatedly on shorter timescales; in the exact Fourier integral, rapid phase oscillations at different times cancel, leaving an exponentially small result.

The critical and peak frequencies must be distinguished. The standard synchrotron function $F(x)$ reaches its maximum at

$$
x\equiv\frac{\nu}{\nu_c}\simeq0.29
$$

so

$$
\boxed{
\nu_{\rm peak}\simeq0.29\nu_c
}.
$$

Some sources also call $0.29\nu_c$ the characteristic frequency; this is only a difference in terminology.

---


## 8. Single-Electron Spectrum and Its Scaling

### 8.1 Exact Form

In Gaussian-cgs, the power per unit ordinary frequency from one electron is

$$
\boxed{
P_\nu(\gamma,\alpha)
=
\frac{\sqrt3e^3B\sin\alpha}{m_ec^2}
F\left(\frac{\nu}{\nu_c}\right)
}.
$$

The synchrotron function is

$$
\boxed{
F(x)
=
x\int_x^\infty K_{5/3}(\xi)d\xi
},
$$

where $K_{5/3}$ is a modified Bessel function of the second kind.

If $P_\omega$ denotes power per unit angular frequency, then

$$
P_\nu d\nu=P_\omega d\omega,
\qquad
d\omega=2\pi d\nu,
$$

so

$$
P_\nu=2\pi P_\omega.
$$

### 8.2 Why Does the Shape Depend Only on $\nu/\nu_c$?

Short pulses produced by different $B$, $\gamma$, and $\alpha$ have similar shapes but different time widths. Their Fourier spectra therefore have similar shapes with different horizontal frequency scales. Every single-electron spectrum can consequently be written using the dimensionless variable

$$
x=\frac{\nu}{\nu_c}
$$

in terms of the same universal function $F(x)$.

### 8.3 Why Does the Spectral Amplitude Explicitly Contain Only $B\sin\alpha$?

First write

$$
P_\nu=A\,F\left(\frac{\nu}{\nu_c}\right).
$$

The total power is

$$
P_{\rm tot}
=
\int_0^\infty P_\nu d\nu.
$$

Let $x=\nu/\nu_c$ and $d\nu=\nu_cdx$:

$$
P_{\rm tot}
=
A\nu_c\int_0^\infty F(x)dx.
$$

The remaining integral is a fixed number, so by scaling

$$
A\propto\frac{P_{\rm tot}}{\nu_c}.
$$

while

$$
P_{\rm tot}\propto B^2\gamma^2\sin^2\alpha,
$$

$$
\nu_c\propto B\gamma^2\sin\alpha.
$$

Dividing the two gives

$$
\boxed{
A\propto B\sin\alpha
}.
$$

Thus $\gamma^2$ has not disappeared; it enters mainly through the horizontal width $\nu_c$ of the spectrum. Increasing $\gamma$ by a factor of ten increases the total power by about $100$ and the spectral width by about $100$, so the characteristic spectral height no longer explicitly contains $\gamma^2$.

---


## 9. RL §6.3: Power-Law Electron Distributions and Variable Transformations

### 9.1 From $N(E)$ to $N(\gamma)$

Suppose the electron energy distribution is

$$
N_E(E)dE=C_EE^{-p}dE.
$$

The same electron population may instead be described by Lorentz factor:

$$
N_\gamma(\gamma)d\gamma.
$$

Conservation of particle number requires

$$
\boxed{
N_E(E)dE=N_\gamma(\gamma)d\gamma
}.
$$

Thus the variable transformation must include the Jacobian:

$$
N_\gamma(\gamma)
=
N_E(E(\gamma))
\left|\frac{dE}{d\gamma}\right|.
$$

If $E$ denotes total energy,

$$
E=\gamma m_ec^2,
\qquad
\frac{dE}{d\gamma}=m_ec^2.
$$

then

$$
\begin{aligned}
N_\gamma(\gamma)
&=
C_E(\gamma m_ec^2)^{-p}m_ec^2\\
&=
C_E(m_ec^2)^{1-p}\gamma^{-p}.
\end{aligned}
$$

Define

$$
C_\gamma=C_E(m_ec^2)^{1-p},
$$

to obtain

$$
\boxed{
N_\gamma(\gamma)d\gamma
=
C_\gamma\gamma^{-p}d\gamma
}.
$$

The index $p$ is unchanged because $E$ is linear in $\gamma$; the normalization constant and its units do change.

If $E$ denotes kinetic energy, the exact relation is

$$
E_{\rm kin}=(\gamma-1)m_ec^2,
$$

so

$$
N_\gamma(\gamma)\propto(\gamma-1)^{-p}.
$$

which is approximated by $\gamma^{-p}$ only when $\gamma\gg1$.

### 9.2 Why Do High Frequencies Mainly Come from High-Energy Electrons?

At fixed $B$ and $\alpha$,

$$
\nu_c=K\gamma^2,
\qquad
K\equiv\frac{3eB\sin\alpha}{4\pi m_ec}.
$$

The electrons contributing most strongly near frequency $\nu$ therefore approximately satisfy

$$
\nu\sim\nu_c(\gamma),
$$

or

$$
\boxed{
\gamma_\nu
\sim
\left(\frac{\nu}{K}\right)^{1/2}
}.
$$

Thus, for fixed magnetic field and pitch angle,

$$
\boxed{
\gamma\propto\nu^{1/2}
}.
$$

This is not a strict one-to-one relation because each electron has a broad spectrum; it identifies the energy scale making the dominant contribution.

---


## 10. Deriving a Synchrotron Power Law from a Power-Law Electron Distribution

### 10.1 From a Discrete Sum to a Continuous Integral

The number density of electrons with Lorentz factor between $\gamma$ and $\gamma+d\gamma$ is

$$
N(\gamma)d\gamma.
$$

Each electron has power $P_\nu(\gamma)$ at frequency $\nu$, so this small group contributes

$$
dj_\nu
=
N(\gamma)P_\nu(\gamma)d\gamma.
$$

Integrating over all electron energies gives

$$
\boxed{
j_\nu
=
\int_{\gamma_{\min}}^{\gamma_{\max}}
N(\gamma)P_\nu(\gamma)d\gamma
}.
$$

Substitute

$$
N(\gamma)=C_\gamma\gamma^{-p}
$$

and

$$
P_\nu
\propto
B\sin\alpha
F\left(\frac{\nu}{K\gamma^2}\right),
$$

If only the frequency dependence is needed, write

$$
\boxed{
j_\nu
\propto
\int
\gamma^{-p}
F\left(\frac{\nu}{K\gamma^2}\right)d\gamma
}.
$$

### 10.2 Detailed Change of Variables

Let

$$
x=\frac{\nu}{K\gamma^2}.
$$

Solving gives

$$
\gamma
=
\left(\frac{\nu}{K}\right)^{1/2}x^{-1/2}.
$$

Therefore

$$
d\gamma
=
-\frac12
\left(\frac{\nu}{K}\right)^{1/2}
x^{-3/2}dx,
$$

and

$$
\gamma^{-p}
=
\left(\frac{\nu}{K}\right)^{-p/2}x^{p/2}.
$$

Multiplying these two expressions gives

$$
\boxed{
\gamma^{-p}d\gamma
=
-\frac12
\left(\frac{\nu}{K}\right)^{(1-p)/2}
x^{(p-3)/2}dx
}.
$$

The original limits become

$$
x_{\max}=\frac{\nu}{K\gamma_{\min}^2},
\qquad
x_{\min}=\frac{\nu}{K\gamma_{\max}^2}.
$$

Reversing the limits removes the minus sign:

$$
j_\nu
\propto
\frac12
\left(\frac{\nu}{K}\right)^{(1-p)/2}
\int_{x_{\min}}^{x_{\max}}
x^{(p-3)/2}F(x)dx.
$$

### 10.3 Broad-Energy-Range Approximation

If the observing frequency satisfies

$$
K\gamma_{\min}^2
\ll
\nu
\ll
K\gamma_{\max}^2,
$$

then

$$
x_{\min}\ll1,
\qquad
x_{\max}\gg1.
$$

the integral may be extended approximately to

$$
\int_0^\infty x^{(p-3)/2}F(x)dx,
$$

which is a constant for fixed $p$. Therefore

$$
\boxed{
j_\nu
\propto
\nu^{(1-p)/2}
=
\nu^{-(p-1)/2}
}.
$$

If

$$
j_\nu\propto\nu^{-s},
$$

is defined, then

$$
\boxed{
s=\frac{p-1}{2}
},
$$

or

$$
\boxed{
p=2s+1
}.
$$

Under the alternative convention $F_\nu\propto\nu^\alpha$,

$$
\alpha=-\frac{p-1}{2}.
$$

### 10.4 Retaining the Magnetic-Field Scaling

Because the single-electron amplitude contains $B\sin\alpha$ and

$$
K\propto B\sin\alpha,
$$

the full scaling is

$$
\boxed{
j_\nu
\propto
(B\sin\alpha)^{(p+1)/2}
\nu^{-(p-1)/2}
}.
$$

For example, when $p=3$,

$$
j_\nu\propto(B\sin\alpha)^2\nu^{-1}.
$$

Near the frequencies associated with the lower and upper electron-energy limits, the integration limits cannot be approximated by $0$ and $\infty$, and the spectrum departs from a simple power law.

---


## 11. Comparison with the Thomson Cross Section and Inverse Compton Emission

Inverse Compton scattering transfers energy from high-energy electrons to low-energy photons. A low-energy photon is first Doppler blueshifted in the electron rest frame, scatters approximately elastically in the Thomson regime, and is then transformed back to the laboratory frame. Its typical energy gain is

$$
\langle\epsilon_{\rm out}\rangle
\simeq
\frac43\gamma^2\epsilon_{\rm in}
$$

assuming an isotropic low-energy photon field in the Thomson limit.

The inverse Compton loss power of an electron in an isotropic photon field of energy density $U_{\rm rad}$ is

$$
\boxed{
P_{\rm IC}
=
\frac43\sigma_TcU_{\rm rad}
\gamma^2\beta^2
}.
$$

The pitch-angle-averaged synchrotron power is

$$
\boxed{
P_{\rm syn}
=
\frac43\sigma_TcU_B
\gamma^2\beta^2
}.
$$

Therefore

$$
\boxed{
\frac{P_{\rm IC}}{P_{\rm syn}}
=
\frac{U_{\rm rad}}{U_B}
}.
$$

The two expressions have the same form because in each case a relativistic electron interacts with an electromagnetic energy density. Synchrotron radiation corresponds to the magnetic energy density $U_B$, while inverse Compton scattering corresponds to the photon energy density $U_{\rm rad}$.

The Thomson approximation requires the photon energy in the electron rest frame to be much smaller than the electron rest energy, approximately

$$
\gamma\epsilon_{\rm in}\ll m_ec^2.
$$

If this condition fails, the interaction enters the Klein–Nishina regime, the cross section decreases, and the simple $\gamma^2$ energy gain and $\sigma_T$ power formula no longer apply.

---

## 12. Problem 6.1: Synchrotron Cooling

### 12.1 Problem Translation

An ultrarelativistic electron emits synchrotron radiation. Show that its energy decreases with time according to

$$
\gamma(t)
=
\gamma_0(1+A\gamma_0t)^{-1},
$$

where

$$
A
=
\frac{2e^4B_\perp^2}{3m_e^3c^5},
\qquad
B_\perp=B\sin\alpha,
$$

$\gamma_0$ is the initial Lorentz factor. Show that the time required for the electron to lose half its energy is

$$
t_{1/2}
=
(A\gamma_0)^{-1}
=
\frac{5.1\times10^8}{\gamma_0B_\perp^2}\ {\rm s},
$$

where $B_\perp$ is measured in gauss. Finally explain how the decrease of $\gamma$ here is consistent with the constant $\gamma$ implied by Eqs. (6.1).

### 12.2 Write the Energy-Loss Equation

At fixed pitch angle, the ultrarelativistic synchrotron power is

$$
P_{\rm syn}
=
\frac{2e^4B_\perp^2}{3m_e^2c^3}\gamma^2.
$$

The electron total energy is

$$
E=\gamma m_ec^2.
$$

The radiated power is the rate at which the electron loses energy:

$$
\frac{dE}{dt}=-P_{\rm syn}.
$$

Therefore

$$
m_ec^2\frac{d\gamma}{dt}
=
-\frac{2e^4B_\perp^2}{3m_e^2c^3}\gamma^2.
$$

Dividing by $m_ec^2$ gives

$$
\boxed{
\frac{d\gamma}{dt}
=
-A\gamma^2
},
$$

where

$$
\boxed{
A
=
\frac{2e^4B_\perp^2}{3m_e^3c^5}
}.
$$

### 12.3 Integrating to Obtain $\gamma(t)$

Separate variables:

$$
\frac{d\gamma}{\gamma^2}=-A\,dt.
$$

Integrate from $t=0,\gamma=\gamma_0$ to $t,\gamma(t)$:

$$
\int_{\gamma_0}^{\gamma(t)}\gamma^{-2}d\gamma
=
-A\int_0^t dt.
$$

Therefore

$$
-\frac{1}{\gamma(t)}
+\frac{1}{\gamma_0}
=-At.
$$

Rearranging gives

$$
\frac{1}{\gamma(t)}
=
\frac{1}{\gamma_0}+At.
$$

so

$$
\boxed{
\gamma(t)
=
\frac{\gamma_0}{1+A\gamma_0t}
}.
$$

This is not exponential decay. The radiative power itself decreases as $\gamma^2$; as the electron cools, its subsequent cooling rate also slows.

### 12.4 Half-Energy Time

In the ultrarelativistic regime $E\propto\gamma$, so losing half the energy means

$$
\gamma(t_{1/2})=\frac{\gamma_0}{2}.
$$

Substitute the solution:

$$
\frac{\gamma_0}{2}
=
\frac{\gamma_0}{1+A\gamma_0t_{1/2}}.
$$

Therefore

$$
1+A\gamma_0t_{1/2}=2,
$$

or

$$
\boxed{
t_{1/2}
=
\frac{1}{A\gamma_0}
}.
$$

Substituting $A$ gives

$$
t_{1/2}
=
\frac{3m_e^3c^5}
{2e^4B_\perp^2\gamma_0}.
$$

From

$$
\sigma_T
=
\frac{8\pi e^4}{3m_e^2c^4}
$$

we obtain

$$
A
=
\frac{\sigma_TB_\perp^2}{4\pi m_ec},
$$

and therefore

$$
t_{1/2}
=
\frac{4\pi m_ec}{\sigma_TB_\perp^2\gamma_0}.
$$

Numerical substitution gives

$$
\boxed{
t_{1/2}
=
\frac{5.1\times10^8}
{B_\perp^2\gamma_0}\ {\rm s}
}.
$$

### 12.5 Consistency with $\gamma=\text{constant}$

Eqs. (6.1) include only the Lorentz force from the applied magnetic field. Because that force is perpendicular to the velocity, it does no work and gives constant $\gamma$ over one orbit. Problem 6.1 adds the long-term energy loss caused by radiation reaction:

$$
\frac{d\mathbf p}{dt}
=
-\frac{e}{c}\mathbf v\times\mathbf B
+\mathbf F_{\rm rad}.
$$

Then

$$
\frac{dE}{dt}
=
\mathbf v\cdot\mathbf F_{\rm rad}
=-P_{\rm syn}.
$$

The two results are therefore approximations at different levels of accuracy, not a contradiction.

---


## 13. Problem 6.2: Isotropic Adiabatic Compression

### 13.1 Problem Translation

A region of characteristic linear size $l$ contains relativistic electrons and a magnetic field. Suppose a shock or similar process compresses the region equally in all three directions. Determine how the compression changes the electron and magnetic-field properties.

1. Show that

   $$
   B\propto l^{-2}.
   $$

2. If the compression is slow, show that

   $$
   p\propto l^{-1},
   $$

   and show that the magnetic flux through an electron gyro-orbit is approximately conserved.

3. Show that

   $$
   P\propto l^{-6},
   \qquad
   \nu_c\propto l^{-4},
   \qquad
   t_{1/2}\propto l^5.
   $$

### 13.2 (a) Magnetic-Field Scaling $B\propto l^{-2}$

In ideal MHD the magnetic field is frozen into the fluid. The magnetic flux through a surface moving with the fluid is conserved:

$$
\Phi_B=BA_\perp=\text{constant}.
$$

Under isotropic compression, the area perpendicular to the magnetic field satisfies

$$
A_\perp\propto l^2.
$$

Therefore

$$
Bl^2=\text{constant},
$$

or

$$
\boxed{
B\propto l^{-2}
}.
$$

Mass conservation also gives

$$
\rho V=\text{constant},
\qquad
V\propto l^3,
$$

so

$$
\rho\propto l^{-3}.
$$

Eliminating $l$ gives

$$
l\propto\rho^{-1/3},
$$

and therefore

$$
\boxed{
B\propto\rho^{2/3}
}.
$$

The geometric origin of $2/3$ is that magnetic flux depends on a two-dimensional area, whereas density depends on a three-dimensional volume. This result applies only to isotropic compression; for one-dimensional compression, the magnetic-field scaling with density also depends on the compression direction relative to the field.

### 13.3 (b) First Adiabatic Invariant

Slow compression requires the magnetic-field variation time to be much longer than the gyroperiod and its spatial variation scale to be much larger than the Larmor radius:

$$
\frac{B}{|\dot B|}
\gg
\frac{2\pi}{\omega_{\rm g}},
\qquad
L_B\gg r_L.
$$

The action of the rapid periodic gyromotion is then approximately conserved. The first adiabatic invariant may be written as

$$
\boxed{
\mu
=
\frac{p_\perp^2}{2m_eB}
\simeq\text{constant}
}.
$$

Equivalently,

$$
\boxed{
\frac{p_\perp^2}{B}
\simeq\text{constant}
}.
$$

Therefore

$$
p_\perp\propto B^{1/2}.
$$

Using $B\propto l^{-2}$ gives

$$
\boxed{
p_\perp\propto l^{-1}
}.
$$

For isotropic compression, the characteristic momentum has the same scaling in all three directions, so

$$
\boxed{
p\propto l^{-1}
}.
$$

### 13.4 Why Is $p_\perp^2/B$ Conserved?

A slowly increasing magnetic field produces an azimuthal induced electric field through Faraday's law. For an instantaneous gyro-radius $r_L$,

$$
2\pi r_LE_\phi
=
-\frac{1}{c}\frac{d}{dt}(\pi r_L^2B).
$$

Approximating $r_L$ as fixed over one gyroperiod gives

$$
E_\phi
\simeq
-\frac{r_L}{2c}\frac{dB}{dt}.
$$

The induced electric field does work on the electron. Taking the magnitude of the energy gain gives

$$
\frac{dE}{dt}
=
\frac{ev_\perp r_L}{2c}\frac{dB}{dt}.
$$

Substituting

$$
r_L=\frac{p_\perp c}{eB}
$$

gives

$$
\frac{dE}{dt}
=
\frac{p_\perp v_\perp}{2B}\frac{dB}{dt}.
$$

The relativistic energy relation also gives

$$
\frac{dE}{dt}
=
v_\perp\frac{dp_\perp}{dt}.
$$

Comparing the two expressions yields

$$
\frac{1}{p_\perp}\frac{dp_\perp}{dt}
=
\frac{1}{2B}\frac{dB}{dt}.
$$

Integration gives

$$
p_\perp\propto B^{1/2},
$$

so $p_\perp^2/B$ is conserved. The magnetic Lorentz force itself still does no work; the electron energy increase comes from the induced electric field generated by the changing magnetic field.

### 13.5 Conservation of Magnetic Flux Through the Gyro-Orbit

The relativistic Larmor radius is

$$
r_L=\frac{p_\perp c}{eB}.
$$

The orbital magnetic flux is

$$
\begin{aligned}
\Phi_{\rm orbit}
&=\pi r_L^2B\\
&=
\frac{\pi c^2}{e^2}
\frac{p_\perp^2}{B}.
\end{aligned}
$$

Conservation of the first adiabatic invariant therefore implies

$$
\boxed{
\Phi_{\rm orbit}\simeq\text{constant}
}.
$$

This is not a direct application of macroscopic MHD flux freezing to the electron orbit; an electron orbit is not a material fluid surface. It follows from conservation of the adiabatic action of the rapid periodic motion.

### 13.6 Thermodynamic Cross-Check: $E\propto V^{-1/3}$

An isotropic ultrarelativistic particle population satisfies

$$
P=\frac{u}{3}=\frac{U}{3V}.
$$

because the kinetic pressure is

$$
P=\frac13n\langle pv\rangle
$$

and in the ultrarelativistic limit $v\simeq c$ and $E\simeq pc$, so $pv\simeq E$.

An adiabatic process satisfies

$$
dU=-P\,dV.
$$

Substituting $P=U/(3V)$ gives

$$
\frac{dU}{U}
=
-\frac13\frac{dV}{V}.
$$

Therefore

$$
U\propto V^{-1/3}.
$$

At fixed particle number, the mean energy per particle $E=U/N$ also satisfies

$$
E\propto V^{-1/3}.
$$

Since $V\propto l^3$,

$$
E\propto l^{-1}.
$$

In the ultrarelativistic limit $E\simeq pc$, again giving

$$
\boxed{
p\propto l^{-1}
}.
$$

### 13.7 (c) Radiation Power, Critical Frequency, and Cooling Time

The synchrotron-power scaling is

$$
P\propto B^2\gamma^2.
$$

In the ultrarelativistic limit $p\propto\gamma$, while $p\propto l^{-1}$, so

$$
\gamma\propto l^{-1}.
$$

Combining this with $B\propto l^{-2}$ gives

$$
P
\propto
l^{-4}l^{-2}.
$$

Therefore

$$
\boxed{
P\propto l^{-6}
}.
$$

The critical frequency satisfies

$$
\nu_c\propto B\gamma^2,
$$

so

$$
\boxed{
\nu_c\propto l^{-2}l^{-2}=l^{-4}
}.
$$

From Problem 6.1, the instantaneous half-energy time satisfies

$$
t_{1/2}
\propto
\frac{1}{B^2\gamma}.
$$

Therefore

$$
\boxed{
t_{1/2}
\propto
\frac{1}{l^{-4}l^{-1}}
=l^5
}.
$$

### 13.8 An Intuitive Example Using the Compression Factor

Define the compression factor

$$
\mathcal C=\frac{l_i}{l_f}>1.
$$

Then

$$
\frac{B_f}{B_i}=\mathcal C^2,
\qquad
\frac{p_f}{p_i}=\mathcal C,
$$

$$
\frac{P_f}{P_i}=\mathcal C^6,
\qquad
\frac{\nu_{c,f}}{\nu_{c,i}}=\mathcal C^4,
$$

$$
\frac{t_{1/2,f}}{t_{1/2,i}}=\mathcal C^{-5}.
$$

If the linear scale is reduced by half, $\mathcal C=2$, then

$$
B_f=4B_i,
\qquad
p_f=2p_i,
$$

$$
P_f=64P_i,
\qquad
\nu_{c,f}=16\nu_{c,i},
$$

$$
t_{1/2,f}=\frac{t_{1/2,i}}{32}.
$$

Thus even moderate compression can greatly enhance synchrotron radiation, shift the spectrum to higher frequencies, and substantially shorten the cooling time.

---


## 14. English Assignment-Ready Solutions

### 14.1 Problem 6.1

For an ultrarelativistic electron with pitch angle $\alpha$, the synchrotron power is

$$
P_{\rm syn}
=
\frac{2e^4B^2\gamma^2\sin^2\alpha}
{3m_e^2c^3}
=
\frac{2e^4B_\perp^2\gamma^2}
{3m_e^2c^3},
$$

where $B_\perp=B\sin\alpha$. Since the electron energy is $E=\gamma m_ec^2$, radiative energy loss gives

$$
m_ec^2\frac{d\gamma}{dt}
=
-P_{\rm syn}.
$$

Hence

$$
\frac{d\gamma}{dt}
=
-A\gamma^2,
\qquad
A
=
\frac{2e^4B_\perp^2}
{3m_e^3c^5}.
$$

Separating variables and imposing $\gamma(0)=\gamma_0$,

$$
\int_{\gamma_0}^{\gamma(t)}\gamma^{-2}d\gamma
=
-A\int_0^t dt,
$$

which gives

$$
\frac{1}{\gamma(t)}
=
\frac{1}{\gamma_0}+At.
$$

Therefore,

$$
\boxed{
\gamma(t)
=
\frac{\gamma_0}{1+A\gamma_0t}
}.
$$

For an ultrarelativistic electron, losing half of the energy corresponds to $\gamma=\gamma_0/2$. Thus

$$
\boxed{
t_{1/2}
=
\frac{1}{A\gamma_0}
}.
$$

Using

$$
\sigma_T
=
\frac{8\pi e^4}{3m_e^2c^4},
$$

this becomes

$$
t_{1/2}
=
\frac{4\pi m_ec}
{\sigma_TB_\perp^2\gamma_0}
=
\frac{5.1\times10^8}
{B_\perp^2\gamma_0}\ {\rm s},
$$

with $B_\perp$ measured in gauss.

Equations (6.1) include only the external magnetic Lorentz force, which is perpendicular to the velocity and therefore does no work. They neglect the radiation-reaction force. The decrease in $\gamma$ found here results from including the accumulated radiative energy loss, so the two results are consistent approximations on different time scales.

### 14.2 Problem 6.2

Let $l$ be the characteristic linear scale of the compressed region. Under isotropic compression, an area perpendicular to the magnetic field scales as $A_\perp\propto l^2$. Flux freezing implies

$$
BA_\perp=\text{constant},
$$

and therefore

$$
\boxed{B\propto l^{-2}}.
$$

If the compression is slow compared with the gyroperiod, the first adiabatic invariant is conserved:

$$
\frac{p_\perp^2}{B}
=
\text{constant}.
$$

Therefore,

$$
p_\perp\propto B^{1/2}\propto l^{-1}.
$$

For isotropic compression the characteristic momentum has the same scaling,

$$
\boxed{p\propto l^{-1}}.
$$

The relativistic Larmor radius is

$$
r_L=\frac{p_\perp c}{eB},
$$

so the magnetic flux through an electron orbit is

$$
\Phi_{\rm orbit}
=
\pi r_L^2B
=
\frac{\pi c^2}{e^2}
\frac{p_\perp^2}{B}.
$$

Thus $\Phi_{\rm orbit}$ is approximately conserved.

For ultrarelativistic electrons, $p\propto\gamma$, so $\gamma\propto l^{-1}$. The synchrotron power scales as

$$
P\propto B^2\gamma^2
\propto l^{-4}l^{-2},
$$

giving

$$
\boxed{P\propto l^{-6}}.
$$

The critical frequency scales as

$$
\nu_c\propto B\gamma^2
\propto l^{-2}l^{-2},
$$

so

$$
\boxed{\nu_c\propto l^{-4}}.
$$

Finally, Problem 6.1 gives

$$
t_{1/2}\propto(B^2\gamma)^{-1}.
$$

Therefore,

$$
\boxed{t_{1/2}\propto l^5}.
$$

Moderate compression can consequently produce a large increase in synchrotron power and characteristic frequency while greatly shortening the radiative lifetime.

---


## 15. Dimensions, Limits, and Common Confusions

### 15.1 $\omega$ and $\nu$

$$
\omega=2\pi\nu.
$$

Therefore

$$
\omega_c
=
\frac32\gamma^2\omega_0\sin\alpha
$$

corresponds to

$$
\nu_c
=
\frac{3eB}{4\pi m_ec}\gamma^2\sin\alpha.
$$

An angular-frequency formula cannot be used directly as a frequency in hertz.

### 15.2 Gyrofrequency and Critical Frequency

$$
\omega_{\rm g}=\frac{\omega_0}{\gamma}
$$

is the electron's actual orbital frequency, whereas

$$
\omega_c=\frac32\gamma^3\omega_{\rm g}\sin\alpha
$$

is the high-frequency scale of the short pulse. The electron can orbit slowly yet produce very high Fourier frequencies because the pulse is sharp.

### 15.3 Critical Frequency and Peak Frequency

$$
\nu_{\rm peak}\simeq0.29\nu_c.
$$

$\nu_c$ is the standard spectral scale, not the location of the maximum of $P_\nu$ and not an absolute cutoff.

### 15.4 Magnetic Fields Do No Work, Yet Radiation Removes Energy

The Lorentz force from an applied static magnetic field does no work; radiative energy loss comes from radiation reaction. Calculating instantaneous radiation using an orbit of constant $\gamma$, then calculating cooling on a longer timescale, is a consistent approximation scheme.

### 15.5 Single-Electron and Electron-Population Spectra

The low-frequency spectrum of one electron satisfies

$$
P_\nu\propto\nu^{1/3},
$$

whereas a power-law electron population satisfies

$$
j_\nu\propto\nu^{-(p-1)/2}.
$$

These results apply at different levels and must not be conflated.

### 15.6 Two Spectral-Index Conventions

RL uses

$$
P_\nu\propto\nu^{-s},
$$

so $s=(p-1)/2$. Another common convention is

$$
F_\nu\propto\nu^\alpha,
$$

for which $\alpha=-(p-1)/2$.

### 15.7 $N(E)$ and $N(\gamma)$ Have Different Constants

$$
N_E(E)dE=N_\gamma(\gamma)d\gamma
$$

requires the Jacobian. Although both distributions have index $-p$, their normalizations satisfy

$$
C_\gamma=C_E(m_ec^2)^{1-p},
$$

and their units also differ.

### 15.8 Validity Limits of Problem 6.2

- $B\propto\rho^{2/3}$ applies only to isotropic compression.
- Conservation of $p_\perp^2/B$ requires slow variation.
- If compression and synchrotron cooling are both significant, the time-dependent $B(t)$ and $\gamma(t)$ must be solved together.
- $t_{1/2}\propto l^5$ is the instantaneous cooling-time scaling at each compression state.

---


## 16. Review Checklist and Core Equations

### 16.1 Can You Explain the Following Concepts?

- [ ] Why does a charged particle radiate even though the magnetic field does no work?
- [ ] What do $\omega_0$, $\omega_{\rm g}$, and $\omega_c$ each represent?
- [ ] Why does a higher-energy electron actually orbit more slowly yet emit higher-frequency synchrotron radiation?
- [ ] Why is the radiation-cone angular width approximately $1/\gamma$?
- [ ] Why is $dt_{\rm obs}=(1-\beta\cos\psi)dt$?
- [ ] What is “critical” about the critical frequency?
- [ ] Why is the amplitude of $P_\nu$ explicitly proportional to $B\sin\alpha$ but does not explicitly contain $\gamma^2$?
- [ ] How is $N(E)$ correctly transformed into $N(\gamma)$?
- [ ] Why must $N(\gamma)P_\nu(\gamma)$ be integrated?
- [ ] Why does electron index $p$ correspond to radiation spectral index $(p-1)/2$?
- [ ] Why does isotropic flux freezing give $B\propto\rho^{2/3}$?
- [ ] Why is the first adiabatic invariant $p_\perp^2/B$?
- [ ] Why does an ultrarelativistic adiabatic gas satisfy $E\propto V^{-1/3}$?

### 16.2 Core Equations

Motion and energy:

$$
\gamma=\frac{1}{\sqrt{1-\beta^2}},
\qquad
E=\gamma m_ec^2,
\qquad
p=\gamma m_ev.
$$

Three frequencies:

$$
\omega_0=\frac{eB}{m_ec},
$$

$$
\omega_{\rm g}=\frac{\omega_0}{\gamma},
$$

$$
\omega_c
=
\frac32\gamma^3\omega_{\rm g}\sin\alpha
=
\frac32\gamma^2\omega_0\sin\alpha.
$$

Total power:

$$
P
=
2\sigma_TcU_B\gamma^2\beta^2\sin^2\alpha,
$$

$$
\langle P\rangle
=
\frac43\sigma_TcU_B\gamma^2\beta^2.
$$

Single-electron spectrum:

$$
P_\nu
=
\frac{\sqrt3e^3B\sin\alpha}{m_ec^2}
F\left(\frac{\nu}{\nu_c}\right).
$$

Power-law electron population:

$$
N(\gamma)\propto\gamma^{-p},
$$

$$
j_\nu
\propto
(B\sin\alpha)^{(p+1)/2}
\nu^{-(p-1)/2}.
$$

Synchrotron cooling:

$$
\frac{d\gamma}{dt}=-A\gamma^2,
\qquad
\gamma(t)=\frac{\gamma_0}{1+A\gamma_0t}.
$$

Adiabatic compression:

$$
B\propto l^{-2},
\qquad
p\propto l^{-1},
$$

$$
P\propto l^{-6},
\qquad
\nu_c\propto l^{-4},
\qquad
t_{1/2}\propto l^5.
$$

---


## 17. Further Physical Connections

### 17.1 Inferring the Electron Spectrum from an Observed Spectrum

If optically thin synchrotron radiation is observed with

$$
F_\nu\propto\nu^{-s},
$$

then the simple uncooled power-law model gives

$$
p=2s+1.
$$

A real source also requires checks for synchrotron cooling, absorption, electron-spectrum cutoffs, spatial inhomogeneity, and Doppler boosting.

### 17.2 The Synchrotron and Inverse Compton Humps

The same electron population can first produce synchrotron radiation and then inverse-Compton scatter those synchrotron photons to high energies, a process called synchrotron self-Compton (SSC). Many jet sources therefore show a low-energy synchrotron hump and a high-energy Compton hump.

### 17.3 Why Does Cooling Change the Electron Spectrum?

Because

$$
\dot\gamma\propto-\gamma^2,
$$

higher-energy electrons cool faster than lower-energy electrons. With continuous injection and cooling in steady state, the electron spectrum generally steepens above a cooling break, producing a corresponding break in the synchrotron spectrum. This effect lies beyond the simplest RL §§6.1–6.3 derivation but is essential when interpreting real astrophysical spectra.

---


## 18. References

1. Rybicki, G. B., & Lightman, A. P., *Radiative Processes in Astrophysics*, Chapter 6, §§6.1–6.3 and Problems 6.1–6.2.
2. Bradt, H., *Astrophysics Processes*, Chapter 8.
3. AstroBaki, [Introduction to Synchrotron Radiation and Relativistic Beaming](https://casper.astro.berkeley.edu/astrobaki/index.php/Introduction_to_Synchrotron_Radiation_and_Relativistic_Beaming).
4. AstroBaki, [Synchrotron Radiation](https://casper.astro.berkeley.edu/astrobaki/index.php/Synchrotron_Radiation).
5. AST1440 — Radiation (2026), course reading assignment for synchrotron radiation.
