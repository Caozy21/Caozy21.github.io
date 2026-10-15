---
title: "AST1440: Nonrelativistic Dipole Radiation, Thomson Scattering, and Bremsstrahlung — RL §§3.3, 3.4, 5.1 and Problems 3.1, 3.4"
description: "A systematic derivation of nonrelativistic accelerated-charge and electric-dipole radiation, Thomson scattering and polarization, electron–ion bremsstrahlung and the Gaunt factor, with complete solutions to RL Problems 3.1 and 3.4."
date: "2026-10-15"
tags: ["AST1440","Dipole radiation","Thomson scattering","Bremsstrahlung","Polarization","Exercises"]
order: 11
draft: false
sourceHash: e0109cecca4082525c18f5f54f23554e2dc4d4a112b501891ab1ef842ea1044d
translation: "AI-assisted English translation"
---

# AST1440: Nonrelativistic Dipole Radiation, Thomson Scattering, and Bremsstrahlung — RL §§3.3, 3.4, 5.1 and Problems 3.1, 3.4

> Course: AST1440 — Radiation.  
> Textbook: Rybicki & Lightman, *Radiative Processes in Astrophysics* (RL), §3.3 (printed pp. 83–90; the general multipole expansion is omitted here), §3.4 (printed pp. 90–93), and §5.1 (printed pp. 156–159); Problems 3.1 (printed pp. 102–103) and 3.4 (printed p. 104).  
> Compiled: October 15, 2026.  
> These notes organize all key questions from the textbook and preparation discussion in order of physical dependency: why the velocity and radiation fields decay as $R^{-2}$ and $R^{-1}$, respectively; the geometry of the dipole pattern; why the dipole spectrum contains $\omega^4|\mathbf d(\omega)|^2$; how the Thomson differential and total cross sections are obtained; the distinction between polarized and unpolarized light; photon recoil and the Thomson limit; how a single Coulomb encounter produces a continuous bremsstrahlung spectrum; the impact-parameter integral and its coefficient; the classical and quantum choices of $b_{\min}$; the meaning of the Gaunt factor; and complete solutions to the two assigned problems.

## Contents

1. [Logical Road Map and Core Results](#1-logical-road-map-and-core-results)
2. [Notation, Unit System, and Approximations](#2-notation-unit-system-and-approximations)
3. [A Nonrelativistic Moving Charge: Velocity Field, Radiation Field, and the Larmor Formula](#3-a-nonrelativistic-moving-charge-velocity-field-radiation-field-and-the-larmor-formula)
4. [Electric-Dipole Radiation, the Dipole Pattern, and the Spectrum](#4-electric-dipole-radiation-the-dipole-pattern-and-the-spectrum)
5. [Thomson Scattering: From a Driven Electron to the Scattering Cross Section](#5-thomson-scattering-from-a-driven-electron-to-the-scattering-cross-section)
6. [Polarization, Unpolarized Light, and Scattering Polarization](#6-polarization-unpolarized-light-and-scattering-polarization)
7. [Photon Recoil, the Thomson Limit, and Compton Corrections](#7-photon-recoil-the-thomson-limit-and-compton-corrections)
8. [The Bremsstrahlung Spectrum of a Single Electron–Ion Encounter](#8-the-bremsstrahlung-spectrum-of-a-single-electronion-encounter)
9. [From One Encounter to Plasma Emissivity: The Impact-Parameter Integral](#9-from-one-encounter-to-plasma-emissivity-the-impact-parameter-integral)
10. [$b_{\min}$, $b_{\max}$, and the Free–Free Gaunt Factor](#10-b_min-b_max-and-the-freefree-gaunt-factor)
11. [Problem 3.1: Magnetic-Dipole Radiation from a Rotating Neutron Star](#11-problem-31-magnetic-dipole-radiation-from-a-rotating-neutron-star)
12. [Problem 3.4: An Electron-Scattering Cloud Around a Central Source](#12-problem-34-an-electron-scattering-cloud-around-a-central-source)
13. [Dimensional Checks, Limiting Cases, and Common Confusions](#13-dimensional-checks-limiting-cases-and-common-confusions)
14. [English assignment-ready solutions](#14-english-assignment-ready-solutions)
15. [Review Checklist and Core Formulas](#15-review-checklist-and-core-formulas)
16. [References](#16-references)

---

## 1. Logical Road Map and Core Results

These three sections are not separate topics; they form a single microscopic radiation chain:

$$
\boxed{
\text{radiation from an accelerated charge}
\longrightarrow
\text{incident electromagnetic wave drives electron oscillation: Thomson scattering}
\longrightarrow
\text{ionic Coulomb field deflects an electron: bremsstrahlung}
}.
$$

The first basic result is the Larmor formula for a nonrelativistic accelerated charge:

$$
\boxed{
\frac{dP}{d\Omega}
=\frac{q^2a^2}{4\pi c^3}\sin^2\theta,
\qquad
P=\frac{2q^2a^2}{3c^3}
}.
$$

For a charge distribution whose size is much smaller than the wavelength, the radiation is controlled by the total electric dipole moment

$$
\mathbf d=\sum_i q_i\mathbf r_i
$$

through its second time derivative:

$$
\boxed{
P=\frac{2|\ddot{\mathbf d}|^2}{3c^3},
\qquad
\frac{dW}{d\omega}
=\frac{8\pi\omega^4}{3c^3}|\mathbf d(\omega)|^2
}.
$$

An incident electric field accelerates a free electron. The electron then reradiates as an oscillating dipole, producing Thomson scattering:

$$
\boxed{
\left(\frac{d\sigma}{d\Omega}\right)_{\rm pol}
=r_e^2\sin^2\Theta
},
$$

$$
\boxed{
\left(\frac{d\sigma}{d\Omega}\right)_{\rm unpol}
=\frac{r_e^2}{2}(1+\cos^2\theta),
\qquad
\sigma_T=\frac{8\pi}{3}r_e^2
}.
$$

Here

$$
r_e=\frac{e^2}{m_ec^2}
$$

is the classical electron radius. The ordinary Thomson limit requires

$$
\boxed{h\nu\ll m_ec^2=511\ {\rm keV}}.
$$

Finally, an electron passing an ion experiences a short Coulomb acceleration. At low frequency, one encounter with impact parameter $b$ gives

$$
\boxed{
\frac{dW(b)}{d\omega}
=\frac{8Z^2e^6}{3\pi c^3m_e^2v^2b^2},
\qquad
\omega\lesssim\frac{v}{b}
}.
$$

Integrating over all electron–ion encounters and impact parameters gives

$$
\boxed{
\frac{dW}{d\omega\,dV\,dt}
=\frac{16e^6}{3c^3m_e^2v}
n_en_iZ^2
\ln\!\left(\frac{b_{\max}}{b_{\min}}\right)
}.
$$

The more complete result is expressed using the free–free Gaunt factor $g_{\rm ff}$.

---

## 2. Notation, Unit System, and Approximations

### 2.1 Symbol table

| Symbol | Meaning | Notes |
|---|---|---|
| $q$ | Charge of a general charged particle | May be positive or negative; power depends only on $q^2$ |
| $e$ | Positive elementary-charge magnitude | Electron charge is $-e$ |
| $m_e$ | Electron mass | The $m$ appearing in Thomson and free–free formulas |
| $\mathbf n$ | Unit vector from source to observer | Also the far-zone propagation direction |
| $R$ | Source-observer distance | Retarded distance in far-zone fields |
| $\mathbf u,\mathbf a$ | Particle velocity and acceleration | $\mathbf a=\dot{\mathbf u}$ |
| $\mathbf d$ | Electric dipole moment | $\mathbf d=\sum_iq_i\mathbf r_i$ |
| $\mathbf m$ | Magnetic dipole moment | Do not confuse with particle mass $m_e$ |
| $\boldsymbol\epsilon$ | Incident polarization unit vector | $\boldsymbol\epsilon\perp\mathbf k$ |
| $\Theta$ | Angle between incident polarization and scattering direction | $\cos\Theta=\boldsymbol\epsilon\cdot\mathbf n$ |
| $\theta$ | Angle between incident propagation and scattering directions | Usually called the scattering angle |
| $r_e$ | Classical electron radius | $e^2/(m_ec^2)$ in Gaussian-cgs |
| $\sigma_T$ | Total Thomson cross section | $8\pi r_e^2/3$ |
| $b$ | Impact parameter | Closest distance from the ion to the unperturbed straight trajectory |
| $n_e,n_i$ | Electron and ion number densities | Usually in ${\rm cm^{-3}}$ |
| $Z$ | Ionic charge number | Ion charge is $Ze$ |
| $g_{\rm ff}$ | Free–free Gaunt factor | Dimensionless correction factor |

### 2.2 Gaussian-cgs Units

RL uses Gaussian-cgs in these sections. A vacuum plane wave satisfies

$$
\mathbf B=\hat{\mathbf k}\times\mathbf E,
\qquad
|\mathbf B|=|\mathbf E|,
$$

The Poynting vector is

$$
\boxed{
\mathbf S=\frac{c}{4\pi}\mathbf E\times\mathbf B
}.
$$

If $E(t)=E_0\sin\omega t$, where $E_0$ is the peak amplitude, then

$$
\boxed{
\langle S\rangle=\frac{cE_0^2}{8\pi}
}.
$$

In SI, $e$ and the field formulas contain $\epsilon_0$; SI and Gaussian-cgs formulas or numerical values must not be mixed directly.

### 2.3 Main approximations

- Section 3.3: the particle is nonrelativistic, $u/c\ll1$; the observer is in the far zone; and all source quantities are, in principle, evaluated at retarded time.
- Electric-dipole approximation: the source size satisfies $L\ll\lambda$, so retardation phase differences across the source can be neglected.
- As required for this course, we omit the general multipole expansion beginning at RL Eq. (3.27); Problem 3.1 uses the magnetic-dipole radiation result directly.
- Thomson scattering: the electron is approximately free, initially at rest, and nonrelativistic; $h\nu\ll m_ec^2$; and the incident field does not drive relativistic oscillations.
- RL §5.1: the ion is treated as fixed; the electron moves at a single speed $v$; and for small-angle scattering its path is initially approximated as straight.
- Problem 3.4: the cloud is optically thin, scattering is single-electron, and the central source is unpolarized; uniformity and spherical symmetry are invoked only where each subproblem requires them.

---

## 3. A Nonrelativistic Moving Charge: Velocity Field, Radiation Field, and the Larmor Formula

### 3.1 Why do the two fields scale as $R^{-2}$ and $R^{-1}$?

The Liénard–Wiechert electric field separates into two terms:

$$
\mathbf E_{\rm vel}\propto R^{-2},
\qquad
\mathbf E_{\rm rad}\propto R^{-1}.
$$

In the nonrelativistic limit, the first term is approximately the Coulomb-like field carried with the charge:

$$
\mathbf E_{\rm vel}\simeq\frac{q}{R^2}\mathbf n.
$$

It spreads over a spherical area $4\pi R^2$, so its strength decays as $R^{-2}$.

The second term comes from acceleration:

$$
\boxed{
\mathbf E_{\rm rad}
=\frac{q}{Rc^2}
\mathbf n\times(\mathbf n\times\mathbf a)
}.
$$

It must transport the same total power through spheres of arbitrarily large radius. Because

$$
S\propto E_{\rm rad}^2,
\qquad
P\sim4\pi R^2S,
$$

finite, $R$-independent power $P$ requires

$$
E_{\rm rad}^2\propto R^{-2},
\qquad
E_{\rm rad}\propto R^{-1}.
$$

By contrast, $E_{\rm vel}^2R^2\propto R^{-2}\to0$, so the velocity field cannot transport finite power to infinity.

### 3.2 Comparing near- and far-field magnitudes

The ratio of the two terms is

$$
\frac{E_{\rm rad}}{E_{\rm vel}}
\sim\frac{aR}{c^2}.
$$

If the source varies with characteristic speed $u$ and frequency $\nu$, then

$$
a\sim u\nu,
\qquad
\lambda=\frac{c}{\nu},
$$

so

$$
\boxed{
\frac{E_{\rm rad}}{E_{\rm vel}}
\sim\frac{u}{c}\frac{R}{\lambda}
}.
$$

For a nonrelativistic source, the radiation field usually becomes clearly dominant only when

$$
R\gg\frac{c}{u}\lambda.
$$

### 3.3 The radiation field sees only transverse acceleration

Using the vector identity

$$
\mathbf n\times(\mathbf n\times\mathbf a)
=\mathbf n(\mathbf n\cdot\mathbf a)-\mathbf a
=-\mathbf a_\perp,
$$

gives

$$
|\mathbf E_{\rm rad}|
=\frac{qa}{Rc^2}\sin\theta,
$$

Here $\theta$ is the angle between $\mathbf a$ and $\mathbf n$. Along the acceleration direction there is no transverse acceleration and the radiation vanishes; perpendicular to the acceleration it is strongest.

The magnetic field satisfies

$$
\mathbf B_{\rm rad}=\mathbf n\times\mathbf E_{\rm rad},
$$

Thus $\mathbf E_{\rm rad}$, $\mathbf B_{\rm rad}$, and $\mathbf n$ are mutually perpendicular.

### 3.4 Larmor formula

In Gaussian-cgs,

$$
S=\frac{c}{4\pi}E_{\rm rad}^2
=\frac{q^2a^2}{4\pi R^2c^3}\sin^2\theta.
$$

At distance $R$, the solid angle $d\Omega$ corresponds to area $dA=R^2d\Omega$, so

$$
\boxed{
\frac{dP}{d\Omega}
=\frac{q^2a^2}{4\pi c^3}\sin^2\theta
}.
$$

Integrating

$$
\int\sin^2\theta\,d\Omega
=2\pi\int_0^\pi\sin^3\theta\,d\theta
=\frac{8\pi}{3}
$$

gives

$$
\boxed{
P=\frac{2q^2a^2}{3c^3}
}.
$$

This result shows that a uniformly moving charge may possess a velocity field, but only an accelerated charge has the $R^{-1}$ radiation field discussed here.

---

## 4. Electric-Dipole Radiation, the Dipole Pattern, and the Spectrum

### 4.1 Electric-dipole approximation

For a multiparticle system of size $L$, if

$$
L\ll\lambda,
$$

the light-crossing time of the entire source is much shorter than one oscillation period, so retardation phases within the source may be neglected. Define

$$
\mathbf d=\sum_iq_i\mathbf r_i,
$$

The far-zone radiation field is

$$
\boxed{
\mathbf E_{\rm rad}
=\frac{\mathbf n\times(\mathbf n\times\ddot{\mathbf d})}
{c^2R}
}.
$$

and therefore

$$
\boxed{
\frac{dP}{d\Omega}
=\frac{|\ddot{\mathbf d}|^2}{4\pi c^3}\sin^2\theta,
\qquad
P=\frac{2|\ddot{\mathbf d}|^2}{3c^3}
}.
$$

### 4.2 What is the dipole pattern?

If the dipole oscillates along the $z$ axis and $\theta$ is the angle between the viewing direction and the $z$ axis, then

$$
E_{\rm rad}\propto\sin\theta,
\qquad
\frac{dP}{d\Omega}\propto\sin^2\theta.
$$

- Along the dipole axis, $\theta=0,\pi$, the radiation vanishes.
- Perpendicular to the dipole axis, $\theta=\pi/2$, the radiation is strongest.
- A two-dimensional cross-section resembles a figure eight; the three-dimensional pattern is toroidal around the dipole axis.

The “eight” represents two intensity lobes, not negative power in one lobe. The radiation electric field lies in the plane of the sky and is transversely linearly polarized.

### 4.3 Why does the spectrum contain $\omega^4|\mathbf d(\omega)|^2$?

Adopt the Fourier convention used by RL:

$$
\mathbf d(t)
=\int_{-\infty}^{\infty}
\mathbf d(\omega)e^{-i\omega t}\,d\omega.
$$

A time derivative corresponds in Fourier space to

$$
\frac{d}{dt}\longleftrightarrow-i\omega,
$$

so

$$
\ddot{\mathbf d}(\omega)
=-\omega^2\mathbf d(\omega).
$$

Radiated energy is proportional to $|\ddot{\mathbf d}|^2$. Parseval’s relation therefore gives

$$
\boxed{
\frac{dW}{d\omega\,d\Omega}
=\frac{\omega^4}{c^3}|\mathbf d(\omega)|^2\sin^2\theta
},
$$

$$
\boxed{
\frac{dW}{d\omega}
=\frac{8\pi\omega^4}{3c^3}|\mathbf d(\omega)|^2
}.
$$

For a monochromatic dipole $\mathbf d(t)=\mathbf d_0\cos\omega_0t$,

$$
\ddot{\mathbf d}=-\omega_0^2\mathbf d_0\cos\omega_0t,
$$

so at fixed $d_0$

$$
\langle P\rangle\propto\omega_0^4d_0^2.
$$

This does not mean that the high-frequency radiation of a real system diverges, because the physical $|\mathbf d(\omega)|$ usually decreases with frequency.

---

## 5. Thomson Scattering: From a Driven Electron to the Scattering Cross Section

### 5.1 The incident field drives the electron

Let the linearly polarized incident wave be

$$
\mathbf E(t)=E_0\boldsymbol\epsilon\sin\omega_0t.
$$

The electron equation of motion is

$$
m_e\ddot{\mathbf r}=-e\mathbf E.
$$

The electron dipole moment is $\mathbf d=-e\mathbf r$, so

$$
\boxed{
\ddot{\mathbf d}
=\frac{e^2}{m_e}\mathbf E
=\frac{e^2E_0}{m_e}\boldsymbol\epsilon\sin\omega_0t
}.
$$

One factor of $e$ comes from the force on the electron and the other $e$ from the dipole moment. The electron oscillates along the incident electric-field polarization and reradiates as a dipole antenna.

### 5.2 Time-averaged scattered power

Let $\Theta$ be the angle between $\boldsymbol\epsilon$ and the scattering direction $\mathbf n$:

$$
\cos\Theta=\boldsymbol\epsilon\cdot\mathbf n.
$$

The instantaneous dipole angular distribution is

$$
\frac{dP}{d\Omega}(t)
=\frac{|\ddot{\mathbf d}(t)|^2}{4\pi c^3}\sin^2\Theta.
$$

Substituting $\ddot{\mathbf d}$ gives

$$
\frac{dP}{d\Omega}(t)
=\frac{e^4E_0^2}{4\pi m_e^2c^3}
\sin^2\omega_0t\sin^2\Theta.
$$

Because $\langle\sin^2\omega_0t\rangle=1/2$,

$$
\boxed{
\left\langle\frac{dP}{d\Omega}\right\rangle
=\frac{e^4E_0^2}{8\pi m_e^2c^3}\sin^2\Theta
}.
$$

### 5.3 Incident energy flux and differential cross section

A vacuum plane wave has $B=E$, so

$$
\mathbf S=\frac{c}{4\pi}\mathbf E\times\mathbf B
$$

which gives

$$
\langle S\rangle
=\frac{cE_0^2}{4\pi}\langle\sin^2\omega_0t\rangle
=\boxed{\frac{cE_0^2}{8\pi}}.
$$

The differential cross section is defined by

$$
\frac{dP}{d\Omega}
=\langle S\rangle\frac{d\sigma}{d\Omega}.
$$

Therefore

$$
\boxed{
\left(\frac{d\sigma}{d\Omega}\right)_{\rm pol}
=\frac{e^4}{m_e^2c^4}\sin^2\Theta
=r_e^2\sin^2\Theta
}.
$$

The subscript ${\rm pol}$ means that the incident light has a known linear-polarization direction; the expression has already summed over the two possible outgoing polarizations.

### 5.4 Total Thomson cross section

Integrating over all directions,

$$
\sigma_T
=\int\frac{d\sigma}{d\Omega}\,d\Omega
=r_e^2\int\sin^2\Theta\,d\Omega,
$$

so

$$
\boxed{
\sigma_T=\frac{8\pi}{3}r_e^2
=6.652\times10^{-25}\ {\rm cm^2}
}.
$$

$\sigma_T$ is the angularly integrated cross section, not an average obtained by dividing by $4\pi$. A photon chooses only one direction in a single event; the cross section is a statistical probability measure over repeated identical experiments. The differential cross section determines “where the photon scatters,” whereas the total cross section determines “how readily scattering occurs at all.”

---

## 6. Polarization, Unpolarized Light, and Scattering Polarization

### 6.1 Polarization and wave behavior are not the same concept

Wave behavior describes a physical quantity oscillating and propagating in space and time; polarization describes how a vector wave oscillates in the transverse plane. A vacuum electromagnetic wave satisfies

$$
\mathbf E\perp\mathbf k,
\qquad
\mathbf B\perp\mathbf E,
\qquad
\mathbf B\perp\mathbf k.
$$

- Linear polarization: $\mathbf E$ oscillates along a fixed transverse direction.
- Circular polarization: the direction of $\mathbf E$ rotates and its tip traces a circle.
- Elliptical polarization: the tip traces an ellipse.
- Unpolarized light: transverse directions and phase relations are random, with no persistent directional preference.

Unpolarized does not mean “not oscillating.” It is still an electromagnetic wave, but the random polarization states of many independent emitters are statistically mixed.

### 6.2 From polarized to unpolarized differential cross section

Let the incident direction be

$$
\hat{\mathbf k}=\hat{\mathbf z},
$$

and place the scattering direction in the $x$–$z$ plane:

$$
\mathbf n=(\sin\theta,0,\cos\theta).
$$

Unpolarized light can be regarded as two equally intense, incoherent, orthogonal linear-polarization components.

The component perpendicular to the scattering plane is

$$
\boldsymbol\epsilon_\perp=\hat{\mathbf y}.
$$

It satisfies $\boldsymbol\epsilon_\perp\cdot\mathbf n=0$, so $\Theta_\perp=90^\circ$:

$$
\left(\frac{d\sigma}{d\Omega}\right)_\perp=r_e^2.
$$

The transverse component parallel to the scattering plane is

$$
\boldsymbol\epsilon_\parallel=\hat{\mathbf x}.
$$

Because

$$
\cos\Theta_\parallel
=\boldsymbol\epsilon_\parallel\cdot\mathbf n
=\sin\theta,
$$

we have

$$
\sin^2\Theta_\parallel=\cos^2\theta,
$$

and

$$
\left(\frac{d\sigma}{d\Omega}\right)_\parallel
=r_e^2\cos^2\theta.
$$

The incoherent average is taken over intensities, not amplitudes:

$$
\boxed{
\left(\frac{d\sigma}{d\Omega}\right)_{\rm unpol}
=\frac12
\left[
\left(\frac{d\sigma}{d\Omega}\right)_\perp
+
\left(\frac{d\sigma}{d\Omega}\right)_\parallel
\right]
=\frac{r_e^2}{2}(1+\cos^2\theta)
}.
$$

### 6.3 Degree of linear polarization of the scattered light

Define

$$
I=I_\perp+I_\parallel,
\qquad
Q=I_\perp-I_\parallel.
$$

The general degree of linear polarization is

$$
\Pi_L=\frac{\sqrt{Q^2+U^2}}{I}.
$$

Taking the scattering plane as the reference gives $U=0$, while Thomson scattering gives

$$
I_\perp\propto1,
\qquad
I_\parallel\propto\cos^2\theta.
$$

Therefore

$$
\boxed{
\Pi
=\frac{I_\perp-I_\parallel}{I_\perp+I_\parallel}
=\frac{\sin^2\theta}{1+\cos^2\theta}
}.
$$

- $\theta=0$ or $\pi$: the two components are equal and $\Pi=0$.
- $\theta=90^\circ$: the parallel component vanishes and $\Pi=1$.

The polarization degree measures the imbalance between two orthogonal polarization components, not simply $I_\perp/I$. Unpolarized light may have half its intensity in each component of any chosen basis, but because they are equal its net polarization remains zero.

---

## 7. Photon Recoil, the Thomson Limit, and Compton Corrections

### 7.1 What is photon recoil?

A photon has

$$
E_\gamma=h\nu,
\qquad
p_\gamma=\frac{h\nu}{c}.
$$

When a photon is scattered by an electron and changes direction, momentum conservation requires the electron to acquire

$$
\mathbf p_e
=\mathbf p_{\gamma,{\rm in}}
-\mathbf p_{\gamma,{\rm out}}.
$$

The electron therefore gains recoil kinetic energy, while the outgoing photon loses energy and decreases in frequency. This is photon recoil.

### 7.2 What does the Thomson condition approximate?

The condition

$$
\boxed{h\nu\ll m_ec^2}
$$

is the condition for the Thomson approximation to hold, not for it to fail. The characteristic recoil energy is

$$
K_e\sim\frac{p_e^2}{2m_e}
\sim\frac{(h\nu)^2}{2m_ec^2},
$$

so

$$
\frac{K_e}{h\nu}
\sim\frac{h\nu}{2m_ec^2}\ll1.
$$

The electron still receives momentum, but its acquired energy is small compared with the photon energy, so one may approximate

$$
\nu'\simeq\nu.
$$

The physical picture is an incident electric field driving a heavy, nonrelativistic electron to oscillate, after which the electron reradiates at nearly the same frequency.

### 7.3 Limit of the Compton formula

Exact kinematics gives

$$
\boxed{
\frac{\nu'}{\nu}
=\frac{1}{1+\dfrac{h\nu}{m_ec^2}(1-\cos\theta)}
}.
$$

If $x=h\nu/(m_ec^2)\ll1$, then

$$
\frac{\nu'}{\nu}
\simeq1-x(1-\cos\theta).
$$

When $h\nu\sim511\ {\rm keV}$, recoil is significant and the Compton/Klein–Nishina cross section must be used. The cross section is no longer frequency independent and becomes more strongly forward peaked.

---

## 8. The Bremsstrahlung Spectrum of a Single Electron–Ion Encounter

### 8.1 Bremsstrahlung and free–free emission

Bremsstrahlung literally means “braking radiation,” but the speed need not decrease: any change of the velocity vector is an acceleration and produces radiation.

$$
e^-+Z^+
\longrightarrow
e^-+Z^++\gamma.
$$

Because the electron is unbound both before and after the radiation event, the process is also called free–free emission.

### 8.2 Encounter geometry and transverse acceleration

Place the ion at the origin. In the small-angle straight-line approximation, the electron position is

$$
\mathbf R(t)=vt\,\hat{\mathbf x}+b\,\hat{\mathbf y},
$$

so

$$
R(t)=\sqrt{b^2+v^2t^2}.
$$

The Coulomb force is

$$
\mathbf F(t)
=-\frac{Ze^2}{R^3(t)}\mathbf R(t).
$$

The component perpendicular to the original direction of motion is

$$
F_\perp(t)
=-\frac{Ze^2b}{(b^2+v^2t^2)^{3/2}}.
$$

Therefore the acceleration magnitude is

$$
\boxed{
a_\perp(t)
=\frac{Ze^2}{m_e}
\frac{b}{(b^2+v^2t^2)^{3/2}}
}.
$$

The acceleration is greatest at $t=0$ and decays as $|t|^{-3}$ when $|t|\to\infty$.

### 8.3 Total velocity change

Integration gives

$$
\Delta v_\perp
=\int_{-\infty}^{\infty}a_\perp(t)\,dt.
$$

Let $u=vt/b$; then

$$
\int_{-\infty}^{\infty}
\frac{b\,dt}{(b^2+v^2t^2)^{3/2}}
=\frac{1}{bv}
\int_{-\infty}^{\infty}\frac{du}{(1+u^2)^{3/2}}
=\frac{2}{bv}.
$$

Therefore

$$
\boxed{
|\Delta v_\perp|
=\frac{2Ze^2}{m_ebv}
}.
$$

### 8.4 Encounter duration and frequency scale

The time over which the ion significantly affects the electron is approximately

$$
\boxed{\tau\sim\frac{b}{v}}.
$$

If $\omega\tau\ll1$, the Fourier phase changes little during the encounter, so frequency $\omega$ sees the full velocity change. If $\omega\tau\gg1$, rapid phase oscillations cause contributions from different times to cancel.

The characteristic maximum frequency of a single encounter is therefore

$$
\boxed{\omega_{\max}\sim\frac{v}{b}}.
$$

Small-$b$ encounters are shorter and more violent and can produce higher frequencies; large-$b$ encounters are slower and contribute mainly at low frequencies.

### 8.5 From $\Delta v$ to the spectrum of one encounter

The electron dipole moment is $\mathbf d=-e\mathbf R$, so

$$
\ddot{\mathbf d}=-e\dot{\mathbf v}.
$$

The Fourier convention used by RL gives

$$
-\omega^2\mathbf d(\omega)
=-\frac{e}{2\pi}
\int_{-\infty}^{\infty}
\dot{\mathbf v}(t)e^{i\omega t}\,dt.
$$

When $\omega\tau\ll1$, $e^{i\omega t}\simeq1$, so

$$
\omega^2|\mathbf d(\omega)|
\simeq\frac{e}{2\pi}|\Delta\mathbf v|.
$$

Substitution into

$$
\frac{dW}{d\omega}
=\frac{8\pi\omega^4}{3c^3}|\mathbf d(\omega)|^2
$$

gives

$$
\boxed{
\frac{dW}{d\omega}
=\frac{2e^2}{3\pi c^3}|\Delta\mathbf v|^2
}.
$$

Substituting $|\Delta v|=2Ze^2/(m_ebv)$ then yields

$$
\boxed{
\frac{dW(b)}{d\omega}
=\frac{8Z^2e^6}{3\pi c^3m_e^2v^2b^2},
\qquad
b\lesssim\frac{v}{\omega}
}.
$$

Here $dW(b)/d\omega$ is the energy radiated per unit angular-frequency interval by one electron–ion encounter with specified $b$; it is not a monochromatic line. A finite-duration acceleration pulse contains many Fourier frequencies and therefore produces a continuous spectrum.

RL approximates the smooth high-frequency decline by a sharp cutoff:

$$
\frac{dW(b)}{d\omega}\simeq0,
\qquad
b\gtrsim\frac{v}{\omega}.
$$

---

## 9. From One Encounter to Plasma Emissivity: The Impact-Parameter Integral

### 9.1 Number of encounters per unit volume and time

In a time $dt$, one electron travels a distance $vdt$. Encounters with impact parameter between $b$ and $b+db$ correspond to annular area

$$
dA=2\pi b\,db.
$$

The electron sweeps out an annular cylindrical volume

$$
dV_{\rm sweep}=vdt\,2\pi b\,db.
$$

The number of ions inside it is

$$
dN_i=n_i vdt\,2\pi b\,db.
$$

There are $n_e$ electrons per unit volume, so

$$
\boxed{
\frac{dN_{\rm coll}}{dV\,dt}
=n_en_i v\,2\pi b\,db
}.
$$

Electrons and ions are distinct particles, so there is no factor of one half.

### 9.2 Multiplying by the spectrum of one encounter

$$
\frac{dW}{d\omega\,dV\,dt}
=\int_{b_{\min}}^{b_{\max}}
\frac{dW(b)}{d\omega}
\frac{dN_{\rm coll}}{dV\,dt}.
$$

Substitution gives

$$
\begin{aligned}
\frac{dW}{d\omega\,dV\,dt}
&=\int_{b_{\min}}^{b_{\max}}
\frac{8Z^2e^6}{3\pi c^3m_e^2v^2b^2}
\left(n_en_i v\,2\pi b\,db\right)\\
&=\frac{16Z^2e^6}{3c^3m_e^2v}
n_en_i
\int_{b_{\min}}^{b_{\max}}\frac{db}{b}.
\end{aligned}
$$

After integration,

$$
\boxed{
\frac{dW}{d\omega\,dV\,dt}
=\frac{16e^6}{3c^3m_e^2v}
n_en_iZ^2
\ln\!\left(\frac{b_{\max}}{b_{\min}}\right)
}.
$$

The coefficient can be summarized as

$$
\frac{8}{3\pi}\times2\pi=\frac{16}{3}.
$$

### 9.3 Why does a logarithm arise naturally?

The radiation from one encounter obeys

$$
\frac{dW(b)}{d\omega}\propto b^{-2},
$$

while the number of encounters from $b$ to $b+db$ obeys

$$
dN_{\rm coll}\propto b\,db.
$$

Their product is

$$
b^{-2}\times b\,db=\frac{db}{b}=d\ln b.
$$

Thus every equal-width interval in $\ln b$ contributes approximately equally. This is the physical origin of the Coulomb logarithm.

---

## 10. $b_{\min}$, $b_{\max}$, and the Free–Free Gaunt Factor

### 10.1 Maximum impact parameter

At fixed observing frequency $\omega$, only encounters satisfying $\omega b/v\lesssim1$ contribute effectively, so

$$
\boxed{b_{\max}\sim\frac{v}{\omega}}.
$$

Encounters with $b>b_{\max}$ are too slow, and their Fourier phases cancel at that frequency.

### 10.2 Classical minimum impact parameter

The small-angle approximation gives an electron deflection angle

$$
\chi\simeq\frac{\Delta v_\perp}{v}
=\frac{2Ze^2}{m_ebv^2}.
$$

Extrapolating this to $\chi\sim\pi/2$ gives the RL estimate

$$
\boxed{
b_{\min}^{\rm cl}
\sim\frac{4Ze^2}{\pi m_ev^2}
}.
$$

It is the scale for “roughly $90^\circ$ strong scattering,” not the exact Rutherford result. The exact relation

$$
\tan\frac{\chi}{2}
=\frac{Ze^2}{m_ev^2b}
$$

gives the exact $90^\circ$ impact parameter

$$
b_{90}=\frac{Ze^2}{m_ev^2}.
$$

The two differ only by an order-unity coefficient. Since $b_{\min}$ appears only inside a logarithm, the simple derivation does not seek that coefficient precisely.

### 10.3 Quantum minimum scale

The electron de Broglie wavelength gives

$$
\boxed{
b_{\min}^{\rm qm}\sim\frac{\hbar}{m_ev}
}.
$$

A simple estimate takes

$$
b_{\min}\sim
\max\!\left(b_{\min}^{\rm cl},b_{\min}^{\rm qm}\right).
$$

### 10.4 Definition and physical meaning of the Gaunt factor

The more complete result is usually written as

$$
\boxed{
\frac{dW}{d\omega\,dV\,dt}
=\frac{16\pi e^6}{3\sqrt3\,c^3m_e^2v}
n_en_iZ^2g_{\rm ff}(v,\omega)
}.
$$

$g_{\rm ff}$ is a dimensionless correction factor:

$$
g_{\rm ff}
\equiv
\frac{\text{more complete free--free emissivity}}
{\text{chosen classical reference emissivity}}.
$$

Comparing the simple cutoff result with the standard form gives

$$
\boxed{
g_{\rm ff}
\approx\frac{\sqrt3}{\pi}
\ln\!\left(\frac{b_{\max}}{b_{\min}}\right)
}.
$$

The Coulomb logarithm is therefore a rough classical representation; $g_{\rm ff}$ is the standardized representation that includes the effects of true trajectories, smooth high-frequency suppression, electron wave behavior, and the quantum photon-emission matrix element.

A quantum calculation in principle solves for the initial and final continuum states of an electron in a Coulomb potential and computes

$$
M_{fi}=\langle\psi_f;\gamma|H_{\rm int}|\psi_i\rangle,
$$

Fermi’s golden rule then gives the emission rate. Modern tabulations of $g_{\rm ff}$ generally come from quantum or semiclassical numerical calculations; relativistic, strongly magnetized, or strongly screened regimes require further corrections.

---

## 11. Problem 3.1: Magnetic-Dipole Radiation from a Rotating Neutron Star

### 11.1 What does the problem ask?

Model the pulsar as a rotating neutron star whose magnetic axis makes angle $\alpha$ with the rotation axis. The tasks are:

1. express the magnetic-dipole radiation power in terms of $\omega,R,B_0,\alpha$;
2. assume the radiation is powered by rotational energy and find the spin-down timescale;
3. evaluate the power and timescale for the given $M,R,B_0,\alpha$, and three values of $\omega$.

### 11.2 Magnetic dipole moment and surface field

In Gaussian-cgs, the magnetic dipole field is

$$
\mathbf B(\mathbf r)
=\frac{3(\mathbf m\cdot\hat{\mathbf r})\hat{\mathbf r}-\mathbf m}{r^3}.
$$

Thus, to order of magnitude,

$$
B_0\sim\frac{m_0}{R^3},
\qquad
m_0\sim B_0R^3.
$$

If $B_0$ is the equatorial field, $m_0=B_0R^3$; if $B_0$ is explicitly the polar field, then

$$
m_0=\frac12B_0R^3,
$$

because $B_{\rm pole}=2m_0/R^3$. Below we adopt the equatorial-field convention commonly used in this RL order-of-magnitude problem:

$$
\boxed{m_0=B_0R^3}.
$$

### 11.3 Radiated power

The component of the magnetic dipole moment parallel to the rotation axis is constant and does not radiate; the transverse component

$$
m_\perp=m_0\sin\alpha
$$

rotates with angular speed $\omega$. Therefore

$$
|\ddot{\mathbf m}|
=m_0\omega^2\sin\alpha.
$$

The magnetic-dipole radiation power is

$$
P=\frac{2|\ddot{\mathbf m}|^2}{3c^3},
$$

so

$$
\boxed{
P
=\frac{2m_0^2\omega^4\sin^2\alpha}{3c^3}
=\frac{2B_0^2R^6\omega^4\sin^2\alpha}{3c^3}
}.
$$

Limiting check: if $\alpha=0$, the magnetic and rotation axes coincide and the external dipole pattern is time independent, so $P=0$; if $\alpha=90^\circ$, the power is maximal.

### 11.4 Spin-down timescale

The rotational energy is

$$
E_{\rm rot}=\frac12I\omega^2.
$$

Energy conservation gives

$$
I\omega\dot\omega=-P.
$$

If the instantaneous spin-down timescale is defined as

$$
\tau_{\rm sd}\equiv\frac{\omega}{|\dot\omega|},
$$

then

$$
\boxed{
\tau_{\rm sd}=\frac{I\omega^2}{P}
}.
$$

Approximate the neutron star as a uniform sphere:

$$
I=\frac25MR^2.
$$

Substituting the power gives

$$
\boxed{
\tau_{\rm sd}
=\frac{3Mc^3}{5B_0^2R^4\omega^2\sin^2\alpha}
}.
$$

If the course instead defines the timescale as the energy-loss time

$$
\tau_E\equiv\frac{E_{\rm rot}}{P},
$$

then

$$
\boxed{\tau_E=\frac12\tau_{\rm sd}}.
$$

The two conventions differ by a factor of two; the chosen definition should be stated explicitly.

### 11.5 Numerical results

Use

$$
M=2\times10^{33}\ {\rm g},
\quad
R=10^6\ {\rm cm},
\quad
B_0=10^{12}\ {\rm G},
\quad
\alpha=90^\circ,
$$

along with $m_0=B_0R^3$ and $I=2MR^2/5$:

| $\omega$ (${\rm s^{-1}}$) | $P$ (${\rm erg\,s^{-1}}$) | $\tau_{\rm sd}=\omega/|\dot\omega|$ | $\tau_E=E/P$ |
|---:|---:|---:|---:|
| $10^4$ | $2.47\times10^{44}$ | $10.2\ {\rm yr}$ | $5.12\ {\rm yr}$ |
| $10^3$ | $2.47\times10^{40}$ | $1.02\times10^3\ {\rm yr}$ | $5.12\times10^2\ {\rm yr}$ |
| $10^2$ | $2.47\times10^{36}$ | $1.02\times10^5\ {\rm yr}$ | $5.12\times10^4\ {\rm yr}$ |

The most important scalings are

$$
P\propto B_0^2R^6\omega^4\sin^2\alpha,
\qquad
\tau_{\rm sd}\propto B_0^{-2}R^{-4}\omega^{-2}\sin^{-2}\alpha.
$$

---

## 12. Problem 3.4: An Electron-Scattering Cloud Around a Central Source

### 12.1 Setup

An optically thin ionized cloud of radius approximately $R=1\ {\rm pc}$ surrounds an unpolarized central source. Electron scattering is the only important extinction mechanism. The problem asks:

1. the net polarization when the cloud is spatially unresolved;
2. the polarization direction at different sky positions when the cloud is resolved;
3. the upper limit on electron density for a uniform cloud if the central source remains clearly visible.

### 12.2 (a) Net polarization of an unresolved cloud

Thomson-scattered light from an individual location is generally polarized, but the sky projection of a spherical cloud produces a tangential polarization pattern. If the whole cloud falls within one pixel, the detector measures

$$
I_{\rm tot}=\sum_iI_i,
\qquad
Q_{\rm tot}=\sum_iQ_i,
\qquad
U_{\rm tot}=\sum_iU_i.
$$

For a tangential pattern, the polarization angle is $\psi=\phi+\pi/2$. Spherical symmetry gives equal weight to all azimuths, so

$$
Q_{\rm tot}\propto\int_0^{2\pi}\cos2\psi\,d\phi=0,
$$

$$
U_{\rm tot}\propto\int_0^{2\pi}\sin2\psi\,d\phi=0.
$$

Therefore

$$
\boxed{\Pi_{\rm net}=0}.
$$

This is not destructive interference and does not mean that each location is unpolarized. Intensities from incoherent regions add; equal horizontal and vertical polarized intensities cancel in the Stokes parameters while the total intensity remains positive.

### 12.3 (b) Tangential polarization pattern of a resolved cloud

Place the central source at the origin and the observer far away along $+z$. The electron position is

$$
\mathbf r=(x,y,z_e),
$$

The scattering direction is approximately

$$
\mathbf n=\hat{\mathbf z}.
$$

The scattering plane is spanned by $\mathbf r$ and $\mathbf n$. The polarization direction is perpendicular to that plane:

$$
\mathbf p\propto\mathbf n\times\mathbf r.
$$

Therefore

$$
\boxed{
\mathbf p\propto(-y,x,0)
}.
$$

The projected radial vector of the electron on the sky is

$$
\mathbf b=(x,y,0).
$$

The two satisfy

$$
\mathbf p\cdot\mathbf b=(-y,x,0)\cdot(x,y,0)=0.
$$

Therefore

$$
\boxed{
\text{the polarization direction in every pixel is perpendicular to the projected radius,
that is, tangent to a circle centered on the central source.}
}
$$

Here “tangential” does not mean any direction in the tangent plane of the three-dimensional sphere; it is the unique tangent to the circle in the two-dimensional sky projection. Linear polarization has no arrow, so $\mathbf p$ and $-\mathbf p$ represent the same direction.

Electrons with different $z_e$ in the same pixel all have $\mathbf p\propto(-y,x,0)$, so their polarization directions agree even though their scattering angles and polarization degrees can differ.

Near the projected center, scattering is mainly forward or backward with $\theta\simeq0$ or $\pi$, so $\Pi\simeq0$. Near the plane of the sky, where $\theta\simeq90^\circ$, the local polarization is strongest. Line-of-sight integration generally makes the actual pixel polarization degree smaller than the single-electron value of $100\%$.

### 12.4 (c) Upper limit on the electron density

From the central source to the edge of the cloud, the path length is approximately one radius $R$. The Thomson optical depth is

$$
\tau_T=n_e\sigma_TR.
$$

For the central source to remain clearly visible, at minimum one requires

$$
\tau_T\lesssim1.
$$

Therefore

$$
\boxed{
n_e\lesssim\frac{1}{\sigma_TR}
}.
$$

Using

$$
R=1\ {\rm pc}=3.086\times10^{18}\ {\rm cm},
$$

$$
\sigma_T=6.652\times10^{-25}\ {\rm cm^2},
$$

gives

$$
\boxed{
n_e\lesssim4.9\times10^5\ {\rm cm^{-3}}
}.
$$

This is the absolute upper limit corresponding to $\tau_T=1$. If “clearly seen” means very little attenuation, $\tau_T\ll1$, the actual density must be well below this value.

---

## 13. Dimensional Checks, Limiting Cases, and Common Confusions

### 13.1 Dimensions of Larmor power

In Gaussian-cgs, $e^2$ has dimensions of energy times length:

$$
[e^2]=ML^3T^{-2}.
$$

Therefore

$$
\left[\frac{e^2a^2}{c^3}\right]
=\frac{ML^3T^{-2}\,L^2T^{-4}}{L^3T^{-3}}
=ML^2T^{-3},
$$

which are precisely the dimensions of power.

### 13.2 Dimensions of the cross section

$$
r_e=\frac{e^2}{m_ec^2}
$$

has dimensions of length, so

$$
[\sigma_T]=[r_e^2]=L^2.
$$

### 13.3 Dimensions of optical depth

$$
[n_e\sigma_TR]=L^{-3}L^2L=1.
$$

Thus $\tau_T$ is a dimensionless probability scale.

### 13.4 Most important limits

1. $a\to0$: $E_{\rm rad}\to0$; a uniformly moving charge has no far-zone radiation of this kind.
2. $\theta\to0$: dipole radiation vanishes along the oscillation axis.
3. $\theta=90^\circ$: Thomson-scattered unpolarized light reaches $100\%$ linear polarization.
4. $h\nu/(m_ec^2)\to0$: $\nu'\to\nu$, recovering the Thomson limit.
5. $b\to\infty$: the Coulomb acceleration, $\Delta v$, and single-encounter free–free radiation all vanish.
6. $\omega\to\infty$: for fixed $b$, $\omega b/v\gg1$, so high-frequency Fourier contributions cancel.
7. $\alpha\to0$: the rotating magnetic-dipole pattern becomes time independent and the pulsar dipole power vanishes.

### 13.5 Most common confusions

1. **$\Theta$ versus $\theta$:** $\Theta$ is the angle between the incident polarization and scattering direction; $\theta$ is the angle between the incident propagation and scattering directions.
2. **Field amplitude versus power pattern:** $E_{\rm rad}\propto\sin\theta$, but $dP/d\Omega\propto\sin^2\theta$.
3. **The ${\rm pol}$ subscript:** it means the incident polarization is known, not that only one outgoing polarization is calculated.
4. **Total versus average cross section:** $\sigma_T=\int(d\sigma/d\Omega)d\Omega$ is integrated over direction, not averaged by dividing by $4\pi$.
5. **Unpolarized does not mean no electric-field oscillation:** it is a statistical mixture of random polarization states.
6. **Local versus net polarization:** every resolved pixel of a spherical cloud can be polarized, while unresolved angular integration gives $Q=U=0$.
7. **Bremsstrahlung does not necessarily mean slowing down:** changing direction is also acceleration and radiates.
8. **A single-encounter spectrum is not monochromatic:** an acceleration pulse has a continuous Fourier spectrum.
9. **$b_{\min}^{\rm cl}$ is not the exact $90^\circ$ result:** it comes from extrapolating the small-angle formula to strong deflection.
10. **The Gaunt factor is not an arbitrary fit parameter:** it is a calculable dimensionless correction relative to a standard reference formula.
11. **The $B_0$ convention:** polar and equatorial fields differ by a factor of two, causing a factor-of-four difference in radiation power if the same symbol is used.
12. **The timescale convention:** $\omega/|\dot\omega|=2E/P$; if $E/P$ is called the characteristic energy-loss time, the factor-of-two difference must be stated.

---

## 14. English assignment-ready solutions

### 14.1 Problem 3.1: magnetic-dipole radiation from a pulsar

Let the magnetic dipole moment have fixed magnitude $m_0$ and make an angle $\alpha$ with the rotation axis. The component parallel to the rotation axis is constant, whereas the perpendicular component rotates with angular frequency $\omega$. Therefore,

$$
|\ddot{\mathbf m}|=m_0\omega^2\sin\alpha.
$$

The magnetic-dipole radiation power in Gaussian-cgs units is

$$
P=\frac{2|\ddot{\mathbf m}|^2}{3c^3},
$$

so that

$$
\boxed{
P=\frac{2m_0^2\omega^4\sin^2\alpha}{3c^3}
}.
$$

Adopting the convention that $B_0$ is the equatorial surface dipole field, $m_0=B_0R^3$, and hence

$$
\boxed{
P=\frac{2B_0^2R^6\omega^4\sin^2\alpha}{3c^3}
}.
$$

If $B_0$ denotes the polar field instead, one should use $m_0=B_0R^3/2$.

The rotational energy is

$$
E_{\rm rot}=\frac12I\omega^2,
$$

and energy conservation gives

$$
I\omega\dot\omega=-P.
$$

Defining the instantaneous spin-down time by $\tau_{\rm sd}=\omega/|\dot\omega|$ gives

$$
\boxed{
\tau_{\rm sd}=\frac{I\omega^2}{P}
}.
$$

For a uniform sphere, $I=2MR^2/5$, so

$$
\boxed{
\tau_{\rm sd}
=\frac{3Mc^3}{5B_0^2R^4\omega^2\sin^2\alpha}
}.
$$

The energy-loss time $E_{\rm rot}/P$ is one half of this value.

For $M=2\times10^{33}\ {\rm g}$, $R=10^6\ {\rm cm}$, $B_0=10^{12}\ {\rm G}$, and $\alpha=90^\circ$:

$$
\begin{array}{c|c|c}
\omega\ ({\rm s^{-1}}) & P\ ({\rm erg\,s^{-1}}) & \tau_{\rm sd}\\ \hline
10^4 & 2.47\times10^{44} & 10.2\ {\rm yr}\\
10^3 & 2.47\times10^{40} & 1.02\times10^3\ {\rm yr}\\
10^2 & 2.47\times10^{36} & 1.02\times10^5\ {\rm yr}
\end{array}
$$

### 14.2 Problem 3.4(a): unresolved cloud

Each point in the optically thin cloud produces polarized Thomson-scattered light. However, for a spherically symmetric cloud illuminated by an unpolarized central source, the polarization pattern is centrosymmetric. If the cloud is unresolved, all azimuths are added in one resolution element. The Stokes parameters cancel by symmetry:

$$
Q_{\rm tot}=U_{\rm tot}=0.
$$

Therefore,

$$
\boxed{\Pi_{\rm net}=0}.
$$

This is cancellation of incoherent Stokes contributions, not destructive interference of the electric fields.

### 14.3 Problem 3.4(b): resolved polarization pattern

Let the observer lie along $+z$ and let an electron be at $\mathbf r=(x,y,z_e)$. The scattering plane is spanned by $\mathbf r$ and $\hat{\mathbf z}$. The polarization direction is normal to this plane:

$$
\mathbf p\propto\hat{\mathbf z}\times\mathbf r=(-y,x,0).
$$

The projected radial vector from the central source is $\mathbf b=(x,y,0)$, and

$$
\mathbf p\cdot\mathbf b=0.
$$

Thus the observed polarization is tangential to circles centered on the luminous source:

$$
\boxed{\text{the resolved polarization pattern is centrosymmetric and tangential}.}
$$

The polarization is weak near the projected center, where the scattering is nearly forward or backward, and strongest for scattering angles near $90^\circ$.

### 14.4 Problem 3.4(c): density upper bound

The optical depth from the central source to the edge of a homogeneous cloud of radius $R$ is

$$
\tau_T=n_e\sigma_TR.
$$

Since the central source is clearly visible, require at least $\tau_T\lesssim1$. Hence

$$
\boxed{
n_e\lesssim\frac{1}{\sigma_TR}
}.
$$

Using $R=1\ {\rm pc}=3.086\times10^{18}\ {\rm cm}$ and $\sigma_T=6.652\times10^{-25}\ {\rm cm^2}$,

$$
\boxed{
n_e\lesssim4.9\times10^5\ {\rm cm^{-3}}
}.
$$

If “clearly visible” is intended to mean negligible attenuation, then the stronger condition $\tau_T\ll1$ should be imposed.

---

## 15. Review Checklist and Core Formulas

### 15.1 You should be able to explain independently

- Why an $R^{-1}$ field can carry finite power to infinity whereas an $R^{-2}$ field cannot.
- Why dipole radiation vanishes along the oscillation axis and is strongest perpendicular to it.
- Why a time derivative contributes $-i\omega$ in Fourier space and ultimately produces $\omega^4|d(\omega)|^2$.
- Why Thomson scattering is “dipole radiation from a driven electron.”
- Which two directions define $\Theta$ and which define $\theta$.
- Why unpolarized light can be decomposed into two equally intense, incoherent, orthogonal polarization components.
- Why $90^\circ$ Thomson scattering produces complete linear polarization.
- Why $h\nu\ll m_ec^2$ is the condition for the Thomson approximation to hold.
- How to obtain $a_\perp(t)$ and $\Delta v_\perp$ from the Coulomb force.
- Why the encounter time $b/v$ sets the highest frequency $v/b$.
- Why the impact-parameter integral produces $\ln(b_{\max}/b_{\min})$.
- The relation between the Gaunt factor and the classical Coulomb logarithm.
- Why a resolved electron cloud produces a tangential polarization pattern while an unresolved spherical cloud has zero net polarization.

### 15.2 Core formulas worth memorizing

$$
\boxed{
\mathbf E_{\rm rad}
=\frac{q}{Rc^2}\mathbf n\times(\mathbf n\times\mathbf a)
}
$$

$$
\boxed{
\frac{dP}{d\Omega}
=\frac{q^2a^2}{4\pi c^3}\sin^2\theta,
\qquad
P=\frac{2q^2a^2}{3c^3}
}
$$

$$
\boxed{
P_{\rm dip}=\frac{2|\ddot{\mathbf d}|^2}{3c^3},
\qquad
\frac{dW}{d\omega}
=\frac{8\pi\omega^4}{3c^3}|\mathbf d(\omega)|^2
}
$$

$$
\boxed{
\left(\frac{d\sigma}{d\Omega}\right)_{\rm pol}
=r_e^2\sin^2\Theta
}
$$

$$
\boxed{
\left(\frac{d\sigma}{d\Omega}\right)_{\rm unpol}
=\frac{r_e^2}{2}(1+\cos^2\theta),
\qquad
\sigma_T=\frac{8\pi}{3}r_e^2
}
$$

$$
\boxed{
\Pi=\frac{\sin^2\theta}{1+\cos^2\theta}
}
$$

$$
\boxed{
a_\perp(t)
=\frac{Ze^2}{m_e}
\frac{b}{(b^2+v^2t^2)^{3/2}},
\qquad
\Delta v_\perp=\frac{2Ze^2}{m_ebv}
}
$$

$$
\boxed{
\frac{dW(b)}{d\omega}
=\frac{8Z^2e^6}{3\pi c^3m_e^2v^2b^2},
\qquad
b\lesssim\frac{v}{\omega}
}
$$

$$
\boxed{
\frac{dW}{d\omega\,dV\,dt}
=\frac{16\pi e^6}{3\sqrt3\,c^3m_e^2v}
n_en_iZ^2g_{\rm ff}(v,\omega)
}
$$

### 15.3 Shortest physical summary

$$
\boxed{
\text{acceleration determines radiation;
the viewing direction sees only transverse acceleration;
encounter duration determines frequency;
symmetry determines net polarization.}
}
$$

---

## 16. References

1. Rybicki, G. B., & Lightman, A. P., *Radiative Processes in Astrophysics*, §§3.3, 3.4, and 5.1, Problems 3.1 and 3.4. Full course textbook file: [Radiative Processes in Astrophysics](<./Radiative Processes in Astrophysics (George B. Rybicki, Alan P. Lightman) (z-library.sk, 1lib.sk, z-lib.sk).pdf>).
2. Reading boundary for §3.3: retain the Larmor formula, electric-dipole approximation, and Eq. (3.26); as instructed for the course, temporarily omit the general expansion beginning with “The general multipole expansion.”
3. All basic electrodynamics and cross-section formulas here use Gaussian-cgs; in SI the corresponding factors of $\epsilon_0$ and unit conversions must be restored.
4. Numerical results for Problem 3.1 use $m_0=B_0R^3$ ($B_0$ is the equatorial surface field) and the uniform-sphere moment of inertia $I=2MR^2/5$. If the course uses the polar-field convention, the magnetic moment and power must be adjusted accordingly.
