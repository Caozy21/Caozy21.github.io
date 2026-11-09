---
title: "AST1440 Synchrotron Polarization, Self-Absorption, and Spectral Turnovers: RL §§6.5–6.8 and Problems 6.3, 6.4"
description: "A systematic treatment of synchrotron linear polarization, the transition from cyclotron lines to a continuum, emission and arrival times, Einstein coefficients, synchrotron self-absorption, and complete solutions to Problems 6.3 and 6.4."
date: "2026-11-09"
tags: ["AST1440","Synchrotron polarization","Self-absorption","Spectral turnover","Einstein coefficients","Exercises"]
order: 16
draft: false
translation: "AI-assisted English translation"
sourceHash: "d1622f41849053725a176c139c0e3f0e48b2c9efa4419cbe66355819aae084d1"
---

# AST1440 Synchrotron Polarization, Self-Absorption, and Spectral Turnovers: RL §§6.5–6.8 and Problems 6.3, 6.4

> Course: AST1440 — Radiation.  
> Textbook: Rybicki & Lightman, *Radiative Processes in Astrophysics* (hereafter RL). Section 6.4 provides background, and the main focus is §§6.5–6.8 and Problems 6.3–6.4.  
> Supplementary material: the Synchrotron Self-Absorption section of AstroBaki, *Synchrotron Self-Interactions*.  
> Compiled on November 9, 2026.  
> Website note: To keep the file compact, this version does not embed scanned textbook figures. The text identifies the relevant RL figure and describes its content. Readers may consult RL Figs. 6.7–6.14 alongside the note.

## Table of Contents

1. [Overview of this study](#1-overview-of-this-study)
2. [Notation, definitions, and domain of validity](#2-notation-definitions-and-domain-of-validity)
3. [§6.5 Linear polarization of synchrotron radiation](#3-65-linear-polarization-of-synchrotron-radiation)
4. [Polarization fraction of a power-law electron population](#4-polarization-fraction-of-a-power-law-electron-population)
5. [§6.6 From the cyclotron line to the synchrotron continuum](#5-66-from-the-cyclotron-line-to-the-synchrotron-continuum)
6. [Time pulses, harmonics, and a continuous spectrum](#6-time-pulses-harmonics-and-a-continuous-spectrum)
7. [§6.7 Emitted and received power](#7-67-emitted-and-received-power)
8. [Complete solution to Problem 6.3](#8-complete-solution-to-problem-63)
9. [Review of Einstein coefficients](#9-review-of-einstein-coefficients)
10. [§6.8 Synchrotron Self-Absorption](#10-68-synchrotron-self-absorption)
11. [Complete derivation of the synchrotron self-absorption coefficient](#11-complete-derivation-of-the-synchrotron-self-absorption-coefficient)
12. [$j_\nu$, $\alpha_\nu$, and $S_\nu$ for a power-law electron distribution](#12-j_nu-alpha_nu-and-s_nu-for-a-power-law-electron-distribution)
13. [Why the source is optically thick at low frequency and thin at high frequency](#13-why-the-source-is-optically-thick-at-low-frequency-and-thin-at-high-frequency)
14. [Why the optically thick spectrum scales as $\nu^{5/2}$ rather than $\nu^2$](#14-why-the-optically-thick-spectrum-scales-as-nu52-rather-than-nu2)
15. [Conditions for the power-law assumption $N(E)=CE^{-p}$](#15-conditions-for-the-power-law-assumption-nece-p)
16. [Problem 6.4 statement and interpretation of the spectrum](#16-problem-64-statement-and-interpretation-of-the-spectrum)
17. [Complete solution to Problem 6.4](#17-complete-solution-to-problem-64)
18. [English assignment-ready solutions](#18-english-assignment-ready-solutions)
19. [Common points of confusion, dimensional analysis, and limiting checks](#19-common-points-of-confusion-dimensional-analysis-and-limiting-checks)
20. [Core formulas and review checklist](#20-core-formulas-and-review-checklist)
21. [References](#21-references)

---

## 1. Overview of this study

The preceding note derived the critical frequency from single-electron motion and relativistic beaming, then obtained the optically thin synchrotron spectrum for a power-law electron distribution. This note addresses four further questions.

1. Why does synchrotron radiation have a high linear polarization?
2. How does a nonrelativistic cyclotron line become a synchrotron continuum?
3. Why does the interval between emitted pulses differ from the interval between received pulses?
4. Why can the same electron population both emit and absorb synchrotron radiation?

The entire logical chain can be written as
$$
\boxed{
\text{two polarization components of a single electron}
\longrightarrow
\text{linear polarization of an electron population}
\longrightarrow
\text{periodic narrow pulses and many harmonics}
\longrightarrow
\text{arrival-time compression}
\longrightarrow
\text{synchrotron self-absorption and the spectral turnover}
}.
$$
The central observational result is
$$
F_\nu\propto
\begin{cases}
\nu^{5/2}, & \tau_\nu^{\rm syn}\gg1,\\[2mm]
\nu^{-(p-1)/2}, & \tau_\nu^{\rm syn}\ll1,
\end{cases}
$$
and the turnover frequency $\nu_{\rm sa}$ is defined by
$$
\tau_{\nu_{\rm sa}}^{\rm syn}\sim1
$$

---

## 2. Notation, definitions, and domain of validity

### 2.1 Main symbols

| Symbol | Meaning |
|---|---|
| $\gamma$ | electron Lorentz factor |
| $\alpha$ | pitch angle; in §6.7 and Problem 6.3 it is also the angle between the line of sight and $\mathbf B$ |
| $B_\perp=B\sin\alpha$ | magnetic-field component perpendicular to the electron velocity |
| $\omega_0=eB/(m_ec)$ | nonrelativistic cyclotron angular frequency |
| $\omega_{\rm g}=\omega_0/\gamma$ | relativistic gyrofrequency |
| $\nu_c\propto B_\perp\gamma^2$ | single-electron synchrotron critical frequency |
| $P(\nu,E)$ | spontaneous emission power per unit frequency from an electron of energy $E$ |
| $N(E)dE$ | number of electrons per unit volume with energies in $[E,E+dE]$ |
| $j_\nu$ | emission coefficient |
| $\alpha_\nu$ | absorption coefficient, including the negative contribution from stimulated emission |
| $S_\nu=j_\nu/\alpha_\nu$ | source function |
| $\tau_\nu=\alpha_\nu L$ | optical depth |

### 2.2 Two limits of radiative transfer

For a homogeneous medium with no incident background radiation,
$$
I_\nu=S_\nu\left(1-e^{-\tau_\nu}\right).
$$
Therefore,
$$
\tau_\nu\ll1
\quad\Longrightarrow\quad
I_\nu\simeq S_\nu\tau_\nu=j_\nu L,
$$
whereas
$$
\tau_\nu\gg1
\quad\Longrightarrow\quad
I_\nu\simeq S_\nu.
$$
### 2.3 Main assumptions

- The electrons are ultrarelativistic, $\gamma\gg1$, so $E\simeq pc\simeq\gamma m_ec^2$.
- The electron momentum distribution is approximately isotropic.
- When scalar $j_\nu$ and $\alpha_\nu$ are used, the magnetic-field direction has either been averaged or is sufficiently tangled.
- The calculation assumes the classical synchrotron limit, $h\nu\ll E$.
- The power-law electron distribution applies only over the finite interval $E_{\min}<E<E_{\max}$.
- The electron energy associated with the observing frequency lies well away from $E_{\min}$, $E_{\max}$, and any cooling break.

---

## 3. §6.5 Linear polarization of synchrotron radiation

RL Fig. 6.7 decomposes the linear polarization into components perpendicular and parallel to the projected magnetic field on the plane of the sky, denoted $\perp$ and $\parallel$.

Radiation from a single electron is generally elliptically polarized. A line of sight on one side of the radiation cone gives one handedness, while the opposite side gives the other. For a smooth, nearly isotropic pitch-angle distribution, the two circular-polarization contributions largely cancel and a strong linear-polarization component remains.

Define
$$
x\equiv\frac{\nu}{\nu_c}.
$$
The two linear-polarization power components of a single electron can be written as
$$
P_\perp\propto F(x)+G(x),
$$

$$
P_\parallel\propto F(x)-G(x),
$$
where
$$
F(x)=x\int_x^\infty K_{5/3}(\xi)d\xi,
$$

$$
G(x)=xK_{2/3}(x).
$$
The corresponding Stokes parameters $I$ and $Q$ satisfy
$$
I_\gamma=P_\perp+P_\parallel\propto2F(x),
$$

$$
Q_\gamma=P_\perp-P_\parallel\propto2G(x).
$$
The linear polarization of a single electron at a given frequency is
$$
\Pi_\gamma(\nu)=\frac{Q_\gamma}{I_\gamma}=\frac{G(x)}{F(x)}.
$$
The polarization of the electron population cannot be obtained by directly averaging $G/F$. One must first sum the $I$ and $Q$ contributions from all electrons and then evaluate $Q/I$.

---

## 4. Polarization fraction of a power-law electron population

Let
$$
N(\gamma)d\gamma=C\gamma^{-p}d\gamma.
$$
The Stokes parameters of the electron population are
$$
I_\nu\propto\int_0^\infty\gamma^{-p}F(x)d\gamma,
$$

$$
Q_\nu\propto\int_0^\infty\gamma^{-p}G(x)d\gamma.
$$
Since
$$
x=\frac{\nu}{\nu_c}\propto\frac{\nu}{B_\perp\gamma^2},
$$
At fixed $\nu$ and $B_\perp$,
$$
\gamma\propto x^{-1/2},
\qquad
d\gamma\propto-x^{-3/2}dx.
$$
Therefore,

$$
\gamma^{-p}d\gamma\propto x^{(p-3)/2}dx.
$$
Define
$$
\mu\equiv\frac{p-3}{2},
$$
Then
$$
\Pi=\frac{Q_\nu}{I_\nu}
=
\frac{\displaystyle\int_0^\infty x^\mu G(x)dx}
{\displaystyle\int_0^\infty x^\mu F(x)dx}.
$$
Standard modified-Bessel-function integrals give
$$
\int_0^\infty x^\mu G(x)dx
=
2^\mu
\Gamma\left(\frac{\mu}{2}+\frac43\right)
\Gamma\left(\frac{\mu}{2}+\frac23\right),
$$
and
$$
\int_0^\infty x^\mu F(x)dx
=
\frac{2^{\mu+1}}{\mu+2}
\Gamma\left(\frac{\mu}{2}+\frac73\right)
\Gamma\left(\frac{\mu}{2}+\frac23\right).
$$
Taking the ratio and using
$$
\Gamma(z+1)=z\Gamma(z),
$$
This gives
$$
\Pi=\frac{\mu+2}{\mu+8/3}.
$$
Substituting $\mu=(p-3)/2$ gives
$$
\boxed{
\Pi=\frac{p+1}{p+7/3}
}.
$$
For example,
$$
p=2
\quad\Longrightarrow\quad
\Pi=\frac9{13}\simeq69.2\%,
$$

$$
p=3
\quad\Longrightarrow\quad
\Pi=\frac34=75\%.
$$
Two distinct $75\%$ results must not be conflated. For $p=3$, the power-law electron population has a polarization fraction of $75\%$ at a fixed frequency. RL also finds a frequency-integrated polarization fraction of $75\%$ for electrons with the same $\gamma$. These values arise from different integrations.

---

## 5. §6.6 From the cyclotron line to the synchrotron continuum

### 5.1 Nonrelativistic limit

When $\beta\ll1$, the observer sees an approximately sinusoidal electric field.
$$
E(t)\simeq E_0\cos\omega_0t.
$$
Its Fourier transform is concentrated near a single frequency.
$$
\widetilde E(\omega)
\propto
\delta(\omega-\omega_0)+\delta(\omega+\omega_0).
$$
A long-lived sinusoidal oscillation in the time domain therefore corresponds to a narrow cyclotron line in the frequency domain, as shown in RL Fig. 6.8.

### 5.2 Mildly relativistic regime

As the speed increases, arrival-time compression and relativistic beaming strengthen the electric-field pulse when the electron moves toward the observer. The signal is weaker and varies more slowly when the electron moves away. Consequently, $E(t)$ is no longer a perfect sinusoid.

A general periodic function requires a Fourier series.
$$
E(t)=
E_1\sin\omega_{\rm g}t
+E_2\sin2\omega_{\rm g}t
+E_3\sin3\omega_{\rm g}t+\cdots.
$$
Here

$$
\omega_n=n\omega_{\rm g},
\qquad n=1,2,3,\ldots
$$
These frequencies are the harmonics. RL Fig. 6.9 shows the transition in which the waveform sharpens and the second and higher harmonics appear.

### 5.3 Ultrarelativistic limit

When $\gamma\gg1$, the radiation is concentrated in a narrow cone with a half angle of about $1/\gamma$. Whenever the radiation cone sweeps past the line of sight, the observer receives only a very narrow pulse. A shorter pulse width $\Delta t$ produces a broader Fourier envelope.
$$
\Delta\omega\sim\frac1{\Delta t}.
$$
The synchrotron critical frequency can be written as
$$
\omega_c=\frac32\gamma^3\omega_{\rm g}\sin\alpha
=
\frac32\gamma^2\frac{eB}{m_ec}\sin\alpha.
$$
The effective harmonic number is therefore approximately
$$
n_c\sim\frac{\omega_c}{\omega_{\rm g}}\sim\gamma^3\sin\alpha.
$$
RL Fig. 6.10 shows the narrow pulse train in the time domain and the wide envelope covering a large number of harmonics in the frequency domain.

---

## 6. Time pulses, harmonics, and a continuous spectrum

A broad spectrum and a continuous spectrum are not the same concept.

Let a pulse with shape $g(t)$ repeat with period $T$.
$$
E(t)=\sum_{m=-\infty}^{\infty}g(t-mT).
$$
Its Fourier transform is
$$
\widetilde E(\omega)
\propto
\widetilde g(\omega)
\sum_{n=-\infty}^{\infty}
\delta(\omega-n\omega_{\rm g}),
$$
where $\omega_{\rm g}=2\pi/T$.

This result contains two distinct pieces of information.

1. $\widetilde g(\omega)$ is a wide envelope because a single time pulse is narrow.
2. Perfect periodicity still restricts the frequencies to the discrete values $n\omega_{\rm g}$.

Strictly speaking, a single electron in perfectly periodic motion produces
$$
\boxed{
\text{many discrete harmonic lines beneath a broad envelope}
}.
$$
In real astrophysical sources, several effects make the spectrum appear as a smooth continuum.

- electrons have a range of different $\gamma$;
- electrons have different pitch angles;
- the magnitude and direction of $B$ vary with position;
- finite lifetimes and other processes broaden each harmonic;
- instruments have finite frequency resolution.

The discrete lines become unresolved when their spacing is smaller than the intrinsic broadening or instrumental resolution.
$$
\Delta\nu_{\rm harmonic}
\ll
\max\left(
\Delta\nu_{\rm broadening},
\Delta\nu_{\rm instrument}
\right).
$$
The correct causal chain is therefore
$$
\boxed{
\text{narrower time-domain pulses}
\Rightarrow
\text{a broader spectral envelope and more required harmonics}
},
$$
Dense harmonic spacing, line broadening, and the superposition of many electrons then produce the observed synchrotron continuum.

---

## 7. §6.7 Emitted and received power

Assume that the helical orbital period of the electron is
$$
T=\frac{2\pi}{\omega_{\rm g}}.
$$
The angle between the line of sight and the direction of the magnetic field is $\alpha$. The electron velocity along the magnetic field is
$$
v_\parallel=v\cos\alpha.
$$
When the radiation cone sweeps through the observer, the projection of $v_\parallel$ in the line-of-sight direction is
$$
v_{\rm los}=v_\parallel\cos\alpha=v\cos^2\alpha.
$$
Successive emission events are separated by $T$, but the electron advances toward the observer by $vT\cos^2\alpha$ during this interval. The pulse arrival interval is therefore
$$
T_{\rm arr}
=T-\frac{vT\cos^2\alpha}{c}
=T\left(1-\beta\cos^2\alpha\right).
$$
In the ultrarelativistic limit, $\beta\simeq1$, so
$$
\boxed{
T_{\rm arr}\simeq T\sin^2\alpha
}.
$$
The same radiated energy is therefore compressed into a shorter observer-frame interval. The instantaneous received power exceeds the power inferred from the emission period by approximately
$$
P_{\rm rec}\simeq\frac{P_{\rm emit}}{\sin^2\alpha}.
$$
For a spatially localized steady source without a large bulk line-of-sight velocity, however, an electron later moves away from the observer and electrons at other phases and orientations compensate for this effect. The usual emitted-power expression therefore describes the long-term average observed power.

---

## 8. Complete solution to Problem 6.3

### 8.1 Problem statement

Ultrarelativistic electrons radiate in an approximately uniform magnetic field. The angle between the observer's line of sight and the field is $\alpha$. Magnetic constrictions at both ends reflect an electron between positions 1 and 2 while preserving its pitch angle. We must show that, although the electron radiates continuously along its trajectory, a given observer sees it for only the following fraction of the total time.
$$
\frac12\sin^2\alpha
$$

RL Fig. 6.13 shows a roughly upward magnetic field and an electron bouncing between two magnetic mirrors. The observer lies along a direction that makes an angle $\alpha$ with $\mathbf B$.

### 8.2 Why $1/2$ first?

The electron follows two propagation directions during a bounce cycle.

- It moves from position 1 to position 2 along $+\mathbf B$.
- It returns from position 2 to position 1 along $-\mathbf B$.

The observer lies on the $+\mathbf B$ side. Only while the electron moves along $+\mathbf B$ can its beaming cone periodically sweep across the observer. During the return leg, the radiation is beamed primarily in the opposite direction.

The visible emission leg therefore occupies only half of the bounce cycle.
$$
f_{\rm direction}=\frac12.
$$
### 8.3 Why does $\sin^2\alpha$ appear?

During the half-cycle directed toward the observer, the arrival time is compressed relative to the emission time.
$$
dt_{\rm arr}
=dt_{\rm em}\left(1-\beta\cos^2\alpha\right)
\simeq dt_{\rm em}\sin^2\alpha.
$$
If the one-way bounce time is $T_b$, the observer receives the pulse train over a duration
$$
\Delta t_{\rm visible}=T_b\sin^2\alpha.
$$
The full round-trip period is approximately $2T_b$. Because the net displacement over a round trip is zero, the interval between successive visible pulse trains still corresponds to $2T_b$. The visible fraction is therefore
$$
f_{\rm visible}
=\frac{T_b\sin^2\alpha}{2T_b}.
$$
This gives
$$
\boxed{
f_{\rm visible}=\frac12\sin^2\alpha
}.
$$
The short visible duration and the enhanced instantaneous received power are two aspects of the same arrival-time compression. They must be treated consistently.

---

## 9. Review of Einstein coefficients

Consider two energy levels
$$
E_2-E_1=h\nu_0.
$$
Einstein divides the interaction of radiation with matter into three processes.

### 9.1 Spontaneous emission

$$
2\longrightarrow1+\text{photon}.
$$
Define
$$
A_{21}
=
\text{probability per unit time for spontaneous emission by each particle in the upper state}.
$$
This process does not require a pre-existing radiation field. The coefficient has units of ${\rm s^{-1}}$, and the mean lifetime is approximately $A_{21}^{-1}$.

### 9.2 Absorption

$$
1+\text{photon}\longrightarrow2.
$$
The transition rate is proportional to the line-profile-weighted mean intensity $\overline J$.
$$
R_{\rm abs}=n_1B_{12}\overline J.
$$

### 9.3 Stimulated emission

$$
2+\text{photon}\longrightarrow1+2\,\text{photons}.
$$
Its transition rate is
$$
R_{\rm stim}=n_2B_{21}\overline J.
$$
The stimulated photon enters the same photon state as the inducing photon, with the same frequency, propagation direction, polarization, and phase coherence.

### 9.4 Einstein relations

Detailed balance with the Planck spectrum gives
$$
g_1B_{12}=g_2B_{21},
$$
and under the convention that RL defines $B$ coefficients using $J_\nu$
$$
A_{21}=\frac{2h\nu_0^3}{c^2}B_{21}.
$$
If other textbooks define the $B$ coefficient with energy density $u_\nu$, the corresponding relationship is written as
$$
\frac{A_{21}}{B_{21}}=\frac{8\pi h\nu_0^3}{c^3}.
$$
The two expressions differ only because they adopt different definitions of the $B$ coefficients.

### 9.5 How the coefficients enter $j_\nu$ and $\alpha_\nu$

Spontaneous emission produces photons even when $I_\nu=0$, so it enters the additive term that is independent of $I_\nu$.
$$
j_\nu
=
\frac{h\nu_0}{4\pi}
n_2A_{21}\phi(\nu).
$$
True absorption and stimulated emission are both proportional to the incident intensity, so their net effect is
$$
\alpha_\nu
=
\frac{h\nu_0}{4\pi}
\left(n_1B_{12}-n_2B_{21}\right)
\phi(\nu).
$$
Stimulated emission therefore appears as negative absorption. Stating that spontaneous emission is already included in $j_\nu$ emphasizes that these photons have been counted in the emissivity and must not be added again when deriving $\alpha_\nu$.

---

## 10. §6.8 Synchrotron Self-Absorption

Self-absorption means that the same electron population both emits and absorbs the synchrotron photons. Continuous free-electron states retain the same three processes as a two-level system.

1. An electron radiates in the magnetic field, corresponding to spontaneous emission.
2. An electron absorbs a synchrotron photon, corresponding to true absorption.
3. An existing photon induces additional emission, corresponding to stimulated emission.

The single-electron power $P(\nu,E)$ obtained by classical electrodynamics describes the power generated by electrons without an external radiation field, so it corresponds to spontaneous-emission power and is used to construct $j_\nu$.

The synchrotron self-absorption coefficient is the difference
$$
\boxed{
\text{true absorption}-\text{stimulated emission}
}.
$$

---

## 11. Complete derivation of the synchrotron self-absorption coefficient

### 11.1 Continuous-state Einstein coefficients

Set the upper state to $E_2$, and the lower state to
$$
E_1=E_2-h\nu.
$$
The net absorption coefficient is
$$
\alpha_\nu
=
\frac{h\nu}{4\pi}
\sum_{E_1}\sum_{E_2}
\left[
n(E_1)B_{12}-n(E_2)B_{21}
\right]
\phi_{21}(\nu).
$$
Here $n(E_i)$ is the occupation-number density of each microscopic quantum state.

### 11.2 Replacing $B_{21}$ with the single-electron power

For an electron with initial energy $E_2$, the spontaneous emission power is
$$
P(\nu,E_2)
=
h\nu\sum_{E_1}A_{21}\phi_{21}(\nu).
$$
For a single microscopic state, the statistical weight is unity. Using
$$
A_{21}=\frac{2h\nu^3}{c^2}B_{21},
$$
gives
$$
\sum_{E_1}B_{21}\phi_{21}(\nu)
=
\frac{c^2}{2h^2\nu^4}P(\nu,E_2).
$$
Therefore,
$$
\alpha_\nu
=
\frac{c^2}{8\pi h\nu^3}
\sum_{E_2}
\left[
n(E_2-h\nu)-n(E_2)
\right]
P(\nu,E_2).
$$
The first term in parentheses comes from true absorption of low-energy electrons, and the second term comes from stimulated emission of high-energy electrons.

### 11.3 From quantum-state occupation to the momentum distribution

Define
$$
f(\mathbf p)d^3p
=
\text{number of electrons per unit volume with momentum in }d^3p\text{ of phase space}.
$$
Each continuous quantum state occupies a phase-space volume $h^3$. When the sum over quantum states is converted to a momentum integral, the density-of-states factor cancels the inverse factor in the occupation number of each state.
$$
\alpha_\nu
=
\frac{c^2}{8\pi h\nu^3}
\int d^3p_2
\left[f(\mathbf p_1)-f(\mathbf p_2)\right]
P(\nu,E_2).
$$
### 11.4 From $f(p)$ to $N(E)$

For an isotropic distribution,
$$
N(E)dE=4\pi p^2f(p)dp.
$$
In the ultrarelativistic limit
$$
E=pc,
\qquad
dp=\frac{dE}{c},
$$
Therefore,

$$
f(p)=\frac{c^3}{4\pi}\frac{N(E)}{E^2}.
$$
while
$$
d^3p=4\pi p^2dp=\frac{4\pi E^2}{c^3}dE.
$$
Substitution gives RL Eq. (6.49).
$$
\alpha_\nu
=
\frac{c^2}{8\pi h\nu^3}
\int dE\,P(\nu,E)E^2
\left[
\frac{N(E-h\nu)}{(E-h\nu)^2}
-
\frac{N(E)}{E^2}
\right].
$$
Here $N(E)/E^2$ is the state density $4\pi p^2dp\propto E^2dE$ from the three-dimensional momentum shell.

### 11.5 Expand with $h\nu\ll E$

Define
$$
g(E)=\frac{N(E)}{E^2}.
$$
When $h\nu\ll E$,
$$
g(E-h\nu)-g(E)
\simeq
-h\nu\frac{dg}{dE}.
$$
Substituting this expansion and canceling $h\nu$ gives RL Eq. (6.50).
$$
\boxed{
\alpha_\nu
=
-\frac{c^2}{8\pi\nu^2}
\int dE\,
P(\nu,E)E^2
\frac{\partial}{\partial E}
\left[
\frac{N(E)}{E^2}
\right]
}.
$$
The leading minus sign appears when the finite difference between true absorption and stimulated emission becomes a negative derivative. The factors $E^2$ and $N(E)/E^2$ originate from the three-dimensional momentum-state density.

---

## 12. $j_\nu$, $\alpha_\nu$, and $S_\nu$ for a power-law electron distribution

Let
$$
N(E)=CE^{-p}.
$$
Then
$$
\frac{N(E)}{E^2}=CE^{-(p+2)},
$$
and
$$
-E^2\frac{d}{dE}
\left[
\frac{N(E)}{E^2}
\right]
=(p+2)\frac{N(E)}{E}.
$$
Therefore,

$$
\alpha_\nu
=
\frac{(p+2)c^2}{8\pi\nu^2}
\int dE\,
P(\nu,E)\frac{N(E)}{E}.
$$
After the energy integration, the frequency and magnetic-field scalings are
$$
\boxed{
\alpha_\nu
\propto
C B_\perp^{(p+2)/2}
\nu^{-(p+4)/2}
}.
$$
and the optically thin emission coefficient is
$$
\boxed{
j_\nu
\propto
C B_\perp^{(p+1)/2}
\nu^{-(p-1)/2}
}.
$$
Their ratio gives the source function.
$$
S_\nu=\frac{j_\nu}{\alpha_\nu}.
$$
Dividing the scalings term by term gives
$$
C\text{ cancels},
$$

$$
B_\perp^{(p+1)/2-(p+2)/2}=B_\perp^{-1/2},
$$

$$
\nu^{-(p-1)/2+(p+4)/2}=\nu^{5/2}.
$$
Therefore,
$$
\boxed{
S_\nu
\propto
B_\perp^{-1/2}\nu^{5/2}
}.
$$
The $\nu^{5/2}$ scaling is independent of the electron spectral index $p$.

---

## 13. Why the source is optically thick at low frequency and thin at high frequency

The optical depth is
$$
\tau_\nu=\alpha_\nu L.
$$
If the source scale $L$ is independent of frequency, then
$$
\boxed{
\tau_\nu
\propto
\nu^{-(p+4)/2}
}.
$$
Define the self-absorption frequency $\nu_{\rm sa}$ by
$$
\tau_{\nu_{\rm sa}}=1.
$$
Therefore,
$$
\tau_\nu
=
\left(
\frac{\nu}{\nu_{\rm sa}}
\right)^{-(p+4)/2}.
$$
Therefore,

$$
\nu\ll\nu_{\rm sa}
\quad\Longrightarrow\quad
\tau_\nu\gg1,
$$
whereas
$$
\nu\gg\nu_{\rm sa}
\quad\Longrightarrow\quad
\tau_\nu\ll1.
$$
For example, when $p=2$,
$$
\alpha_\nu\propto\nu^{-3}.
$$
Decreasing the frequency by a factor of ten increases the opacity by a factor of one thousand.

Physically, emission at a given frequency $\nu$ is dominated by electrons with
$$
\gamma_\nu\sim\left(\frac{\nu}{B_\perp}\right)^{1/2}.
$$
Lower frequencies correspond to lower-energy, more abundant electrons; higher frequencies correspond to higher-energy, less abundant electrons. Therefore, low-frequency photons are more easily reabsorbed by the same electron population. This behavior is specific to the frequency dependence of synchrotron self-absorption. It is not a general statement that higher-energy photons are always more difficult to absorb.

The final spectrum is
$$
I_\nu\propto
\begin{cases}
S_\nu\propto\nu^{5/2}, & \nu\ll\nu_{\rm sa},\\[2mm]
j_\nu L\propto\nu^{-(p-1)/2}, & \nu\gg\nu_{\rm sa}.
\end{cases}
$$
RL Fig. 6.12 schematically connects the rising low-frequency branch $\nu^{5/2}$ to the declining high-frequency branch $\nu^{-(p-1)/2}$ near $\tau_\nu\sim1$.

---

## 14. Why the optically thick spectrum scales as $\nu^{5/2}$ rather than $\nu^2$

The Rayleigh-Jeans limit of thermal radiation is
$$
I_\nu=\frac{2kT}{c^2}\nu^2,
$$
where the same temperature $T$ applies to all frequencies.

Nonthermal synchrotron radiation behaves differently because different frequencies are produced primarily by electrons of different energies.
$$
\nu\sim B\gamma^2
\quad\Longrightarrow\quad
\gamma_\nu\propto\left(\frac{\nu}{B}\right)^{1/2}.
$$
An effective brightness temperature can be defined at each frequency.
$$
kT_b(\nu)\sim\gamma_\nu m_ec^2.
$$
Therefore,

$$
T_b(\nu)\propto\nu^{1/2}B^{-1/2}.
$$
Substitution into the Rayleigh–Jeans form gives
$$
I_\nu
\sim
\frac{2kT_b(\nu)}{c^2}\nu^2
\propto
B^{-1/2}\nu^{5/2}.
$$
This is the intuitive explanation used by AstroBaki. It does not imply that the electrons reach thermal equilibrium. The brightness temperature merely rewrites the nonthermal intensity in temperature units. The rigorous RL result follows from
$$
S_\nu=\frac{j_\nu}{\alpha_\nu}.
$$

---

## 15. Conditions for the power-law assumption $N(E)=CE^{-p}$

### 15.1 A nonthermal approximation rather than a universal law

Power laws commonly arise from approximately scale-free acceleration processes, including diffusive shock acceleration, stochastic acceleration, and magnetic reconnection. Electrons in thermal equilibrium instead follow a distribution closer to the Maxwell–Jüttner form.

A physical model must include finite endpoints.
$$
N(E)=
\begin{cases}
CE^{-p}, & E_{\min}<E<E_{\max},\\
\text{another form or approximately zero}, & \text{outside this interval}.
\end{cases}
$$
### 15.2 Number and energy convergence

If one formally takes $E_{\max}\to\infty$, convergence of the total particle number at high energy requires
$$
p>1,
$$
while convergence of the total energy requires
$$
p>2.
$$
Real systems have finite cutoffs, so these conditions need not hold literally. They nevertheless show why a pure power law cannot be extended indefinitely.

### 15.3 Frequency range of the standard synchrotron spectrum

The standard result requires
$$
E_{\min}\ll E_\nu\ll E_{\max},
$$
or equivalently
$$
\nu_c(E_{\min})\ll\nu\ll\nu_c(E_{\max}).
$$
Near the high-energy cutoff, the spectrum develops an exponential high-frequency decline. Across a cooling break, $p$ changes. If the frequency is low enough that $\gamma_\nu<\gamma_{\min}$, the lowest-energy electrons control the spectrum and the optically thick slope can approach $\nu^2$ rather than the standard $\nu^{5/2}$.

### 15.4 Cooling may change $p$

If the injection spectrum is
$$
Q(E)\propto E^{-q},
$$
Without significant cooling, one usually finds $p\simeq q$. At the steady-state high-energy end, synchrotron cooling with $\dot E\propto-E^2$ typically gives
$$
p=q+1.
$$
The value of $p$ inferred from observations therefore need not equal the original acceleration index.

---

## 16. Problem 6.4 statement and interpretation of the spectrum

### 16.1 Translation of the problem statement

The spectrum shown in RL Fig. 6.14 was observed from an unresolved point source of unknown distance, denoted $d$. The source is modeled as a spherical synchrotron-emitting region of radius $R$ and magnetic-field strength $B$.

The space between the observer and the source is uniformly filled with hot hydrogen. The hydrogen emits and absorbs primarily through bound-free transitions. Its contribution is negligible relative to that of the synchrotron source once the hydrogen becomes optically thin.

The synchrotron source function is
$$
S_\nu
=
A
\left(\frac{B}{B_0}\right)^{-1/2}
\left(\frac{\nu}{\nu_0}\right)^{5/2}.
$$
The synchrotron self-absorption coefficient is
$$
\alpha_\nu^s
=
C
\left(\frac{B}{B_0}\right)^{(p+2)/2}
\left(\frac{\nu}{\nu_0}\right)^{-(p+4)/2}.
$$
The bound-free absorption coefficient of the foreground hydrogen is
$$
\alpha_\nu^{bf}
=
D
\left(\frac{\nu}{\nu_0}\right)^{-3}.
$$
The figure provides the peak flux $F_0$, two turnover frequencies $\nu_1$ and $\nu_2$, and three spectral slopes.
$$
F_\nu\propto
\begin{cases}
\nu^2, & \nu<\nu_1,\\[2mm]
\nu^{5/2}, & \nu_1<\nu<\nu_2,\\[2mm]
\nu^{-1/2}, & \nu>\nu_2.
\end{cases}
$$
Part (a). Suppose the source subtends a known solid angle
$$
\Omega=\pi\frac{R^2}{d^2}
$$
Determine $R$ and $B$.

Part (b). Use $D$ and $\nu_1$ to determine $\Omega$ and the distance $d$.

### 16.2 Physical origin of the three spectral segments

| Frequency Range | Slope | Dominant Physics |
|---|---:|---|
| $\nu<\nu_1$ | $\nu^2$ | the foreground thermal hydrogen is optically thick; Rayleigh–Jeans regime |
| $\nu_1<\nu<\nu_2$ | $\nu^{5/2}$ | the foreground is transparent, but the synchrotron source is self-absorbed |
| $\nu>\nu_2$ | $\nu^{-1/2}$ | the synchrotron source is also optically thin |

The high-frequency synchrotron spectrum satisfies
$$
F_\nu\propto\nu^{-(p-1)/2}.
$$
Therefore,

$$
-\frac{p-1}{2}=-\frac12
\quad\Longrightarrow\quad
\boxed{p=2}.
$$
The two turnovers satisfy
$$
\tau_{\nu_1}^{bf}\sim1,
$$

$$
\tau_{\nu_2}^{s}\sim1.
$$

---

## 17. Complete solution to Problem 6.4

Define
$$
x_1\equiv\frac{\nu_1}{\nu_0},
\qquad
x_2\equiv\frac{\nu_2}{\nu_0},
\qquad
b\equiv\frac{B}{B_0}.
$$
### 17.1 Part (a): determining $B$ from $F_0$

On the optically thick side of $\nu_2$,
$$
I_{\nu_2}\simeq S_{\nu_2}.
$$
The flux density of the unresolved source is
$$
F_{\nu_2}=\Omega I_{\nu_2}.
$$
The figure gives $F_{\nu_2}=F_0$, so
$$
F_0
=
\Omega A b^{-1/2}x_2^{5/2}.
$$
Rearranging gives
$$
b
=
\left(\frac{\Omega A}{F_0}\right)^2x_2^5.
$$
Therefore,

$$
\boxed{
B
=
B_0
\left(\frac{\Omega A}{F_0}\right)^2
\left(\frac{\nu_2}{\nu_0}\right)^5
}.
$$
### 17.2 Part (a): determining $R$ from $\tau_{\nu_2}^s=1$

Because $p=2$,
$$
\alpha_\nu^s
=
C b^2
\left(\frac{\nu}{\nu_0}\right)^{-3}.
$$
Adopting the characteristic path length $R$ implicit in the problem statement gives
$$
1=\tau_{\nu_2}^s
=
\alpha_{\nu_2}^sR
=Cb^2x_2^{-3}R.
$$
Therefore,
$$
R=\frac1C b^{-2}x_2^3.
$$
Substituting $b$ gives
$$
b^{-2}
=
\left(\frac{F_0}{\Omega A}\right)^4x_2^{-10}.
$$
Finally,
$$
\boxed{
R
=
\frac1C
\left(\frac{F_0}{\Omega A}\right)^4
\left(\frac{\nu_2}{\nu_0}\right)^{-7}
}.
$$
### 17.3 Part (b): determining the distance from the foreground turnover

The foreground hydrogen uniformly fills the distance between the observer and the source, so its path length is $d$. At $\nu_1$,
$$
1=\tau_{\nu_1}^{bf}
=
\alpha_{\nu_1}^{bf}d
=Dx_1^{-3}d.
$$
Therefore,
$$
\boxed{
d
=
\frac1D
\left(\frac{\nu_1}{\nu_0}\right)^3
}.
$$
### 17.4 Part (b): determining $\Omega$ from the geometry

Using
$$
\Omega=\pi\frac{R^2}{d^2}
$$
and
$$
R
=
\frac1C
\left(\frac{F_0}{\Omega A}\right)^4x_2^{-7},
$$
gives
$$
\Omega
=
\frac{\pi}{C^2d^2}
\left(\frac{F_0}{\Omega A}\right)^8x_2^{-14}.
$$
Move $\Omega^{-8}$ to the left:
$$
\Omega^9
=
\frac{\pi F_0^8}{C^2A^8d^2}x_2^{-14}.
$$
Using
$$
d^{-2}=D^2x_1^{-6},
$$
we obtain
$$
\boxed{
\Omega
=
\left[
\frac{\pi D^2F_0^8}{C^2A^8}
\left(\frac{\nu_1}{\nu_0}\right)^{-6}
\left(\frac{\nu_2}{\nu_0}\right)^{-14}
\right]^{1/9}
}.
$$
Once $\Omega$ is known, substituting it into the Part (a) expressions gives unique values of $B$ and $R$.

### 17.5 Order-unity corrections

The derivation adopts the sharp-turnover approximation implicit in the RL figure.
$$
\tau_{\nu_2}^s\sim1,
\qquad
F_0\simeq\Omega S_{\nu_2}.
$$
If the transfer solution is evaluated exactly at $\tau=1$,
$$
I_\nu=S_\nu(1-e^{-1}),
$$
the peak relation acquires the order-unity factor $1-e^{-1}$. An exact line-of-sight integration through a uniform sphere also introduces a geometric factor, but none of the parameter scalings change.

---

## 18. English assignment-ready solutions

### 18.1 Problem 6.3

During the leg on which the electron moves along the magnetic field toward the observer, its beaming cone can sweep across the line of sight. During the return leg the parallel velocity reverses, so the radiation is beamed in the opposite direction. This supplies a factor of $1/2$.

During one gyroperiod $T$, the guiding center advances a distance $vT\cos\alpha$ along the magnetic field. Its displacement projected onto the line of sight is therefore $vT\cos^2\alpha$. The interval between the arrival of successive pulses is

$$
T_{\rm arr}
=T\left(1-\beta\cos^2\alpha\right)
\simeq T\sin^2\alpha,
$$

where the final approximation uses $\beta\simeq1$. Hence the radiation emitted during the forward half of the bounce cycle is received during a fraction $\sin^2\alpha$ of that interval. Combining this arrival-time compression with the fact that only one of the two propagation directions is visible gives

$$
\boxed{
f_{\rm visible}=\frac12\sin^2\alpha
}.
$$

### 18.2 Problem 6.4

The optically thin high-frequency spectrum has slope

$$
F_\nu\propto\nu^{-(p-1)/2}=\nu^{-1/2},
$$

so $p=2$. Define $x_1=\nu_1/\nu_0$ and $x_2=\nu_2/\nu_0$.

At the synchrotron turnover,

$$
F_0=\Omega S_{\nu_2}
=\Omega A
\left(\frac{B}{B_0}\right)^{-1/2}x_2^{5/2},
$$

which gives

$$
\boxed{
B
=B_0
\left(\frac{\Omega A}{F_0}\right)^2x_2^5
}.
$$

Since $\tau_{\nu_2}^{s}=\alpha_{\nu_2}^{s}R\simeq1$ and $p=2$,

$$
1=C
\left(\frac{B}{B_0}\right)^2x_2^{-3}R.
$$

Therefore

$$
\boxed{
R
=\frac1C
\left(\frac{F_0}{\Omega A}\right)^4x_2^{-7}
}.
$$

The low-frequency turnover is produced by bound-free absorption in the foreground hydrogen. Since the path length is $d$,

$$
1=\alpha_{\nu_1}^{bf}d=Dx_1^{-3}d,
$$

and hence

$$
\boxed{
d=D^{-1}x_1^3
}.
$$

Finally, using $\Omega=\pi R^2/d^2$ gives

$$
\boxed{
\Omega
=
\left[
\frac{\pi D^2F_0^8}{C^2A^8}
x_1^{-6}x_2^{-14}
\right]^{1/9}
}.
$$

---

## 19. Common points of confusion, dimensional analysis, and limiting checks

### 19.1 Cyclotron line and synchrotron continuum both belong to the frequency domain

The corresponding time-domain signals are a smooth sinusoid and a narrow pulse train, respectively. A cyclotron line is not a time-domain feature.

### 19.2 A broad spectrum is not necessarily continuous

An ideal periodic pulse train still produces a discrete harmonic comb. A smooth continuum appears only when many densely spaced harmonics are broadened and further smoothed by the electron distribution and finite instrumental resolution.

### 19.3 $\omega_0$ vs. $\omega_{\rm g}$

The nonrelativistic cyclotron frequency is
$$
\omega_0=\frac{eB}{m_ec},
$$
while the relativistic gyrofrequency is
$$
\omega_{\rm g}=\frac{eB}{\gamma m_ec}.
$$
Harmonics should be written more precisely as $n\omega_{\rm g}$.

### 19.4 $N(E)$ differs from the occupation number $n(E)$

$N(E)dE$ is the number of electrons in the entire energy shell, whereas $n(E)$ is the occupation number of each microscopic quantum state. The factor $E^2$ in $N(E)/E^2$ comes from the momentum-shell density of states.

### 19.5 $j_\nu$ and stimulated emission

$j_\nu$ only contains spontaneous emission that does not depend on the intensity of the existing beam. Stimulated emission is proportional to $I_\nu$, so it is placed in $\alpha_\nu$ as a negative absorption.

### 19.6 Low-frequency thickness and high-frequency thinness are not universal

This is the result of synchrotron self-absorption:
$$
\alpha_\nu^{\rm syn}\propto\nu^{-(p+4)/2}.
$$
Other opacity sources, including photoelectric absorption, pair production, and $\gamma\gamma$ absorption, can produce different trends over other frequency ranges.

### 19.7 Problem 6.4 $D$

$D$ describes the foreground bound-free absorption, so it only enters when using $\nu_1$ to calculate the distance. The $B$ and $R$ of Part (a) are determined by $F_0$, $\nu_2$ and the assumed $\Omega$.

### 19.8 Dimensional check

- The units of $C$ and $D$ are both ${\rm cm^{-1}}$, so $C^{-1}$, $D^{-1}$ provide length scales.
- $F_0/(\Omega A)$ is dimensionless.
- $\nu_1/\nu_0$ and $\nu_2/\nu_0$ are dimensionless.
- Therefore, $R$ and $d$ have dimensions of length, while $\Omega$ is dimensionless.

---

## 20. Core formulas and review checklist

### 20.1 Essential formulas

Optically thin spectrum of a power-law electron population.
$$
j_\nu\propto
C B_\perp^{(p+1)/2}\nu^{-(p-1)/2}.
$$
Synchrotron self-absorption coefficient.
$$
\alpha_\nu\propto
C B_\perp^{(p+2)/2}\nu^{-(p+4)/2}.
$$
Synchrotron self-absorbed source function.
$$
S_\nu=\frac{j_\nu}{\alpha_\nu}
\propto B_\perp^{-1/2}\nu^{5/2}.
$$
Optically thick and optically thin spectra.
$$
I_\nu\propto
\begin{cases}
\nu^{5/2}, & \tau_\nu\gg1,\\
\nu^{-(p-1)/2}, & \tau_\nu\ll1.
\end{cases}
$$
Linear polarization fraction of a power-law electron population.
$$
\Pi=\frac{p+1}{p+7/3}.
$$
Arrival-time compression.
$$
T_{\rm arr}=T(1-\beta\cos^2\alpha)
\simeq T\sin^2\alpha.
$$

Problem 6.3.

$$
f_{\rm visible}=\frac12\sin^2\alpha.
$$
### 20.2 Self-test questions

1. Why can the polarization of an electron population not be obtained by directly averaging the single-electron ratio $G/F$?
2. Why does the ideal periodic narrow pulse still correspond to a discrete harmonic comb?
3. From which two projections does $\cos^2\alpha$ in $T_{\rm arr}$ come?
4. Why is spontaneous emission in $j_\nu$ and stimulated emission in $\alpha_\nu$?
5. Where does $E^2$ in $N(E)/E^2$ come from?
6. Why is the standard self-absorbed slope independent of $p$?
7. Which opacity of $\tau\sim1$ corresponds to $\nu_1$ and $\nu_2$ respectively in Problem 6.4?

---

## 21. References

- Rybicki, G. B. & Lightman, A. P., *Radiative Processes in Astrophysics*, Chapter 6, especially §§6.5–6.8 and Problems 6.3–6.4.
- AstroBaki, [“Synchrotron Self-Interactions”](https://casper.astro.berkeley.edu/astrobaki/index.php/Synchrotron_Self-Interactions), especially the opening section on Synchrotron Self-Absorption.
- Abramowitz, M. & Stegun, I. A., *Handbook of Mathematical Functions*, for the modified Bessel-function integrals used in the polarization calculation.

