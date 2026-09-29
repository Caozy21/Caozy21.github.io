---
title: >-
  AST1440: Electromagnetic Waves, Cold-Plasma Dispersion, and Pulse Delays — RL
  §§2.1–2.3, §8.1, and Problems 2.2, 8.1, 8.2
description: >-
  A systematic derivation of cold-plasma dispersion, phase and group velocities,
  pulsar dispersion delays, complex refractive index, and absorption, beginning
  with Maxwell's equations and plane electromagnetic waves, with detailed
  solutions to RL Problems 2.2, 8.1, and 8.2.
date: '2026-09-28'
tags:
  - AST1440
  - Electromagnetic waves
  - Cold plasma
  - Dispersion
  - Exercises
order: 6
draft: false
sourceHash: bae6f801053c97207d4d8d41ad9029ede77d79810d9854f87639a85ad16065a7
translation: AI-assisted English translation
---

# AST1440: Electromagnetic Waves, Cold-Plasma Dispersion, and Pulse Delays — RL §§2.1–2.3, §8.1, and Problems 2.2, 8.1, 8.2

> Course: AST1440 — Radiation; this session covers Electromagnetic Waves and Dispersion in a Cold Plasma.
> Textbook: Rybicki & Lightman, *Radiative Processes in Astrophysics* (RL), §§2.1–2.3, printed pp. 51–61; §8.1, printed pp. 224–228; Problem 2.2, printed pp. 74–75; Problems 8.1–8.2, printed p. 236.
> Compiled: September 28, 2026.
> These notes integrate the assigned reading, pre-class problems, and every follow-up question from discussion in their physical order of dependency: the physical meaning of Maxwell's equations, how the vacuum wave equation is derived, why $\partial_t\rightarrow-i\omega$, why $v_{\rm ph}=\omega/k$, why a short pulse has a broad spectrum, the connection between classical Fourier waves and quantum mechanics, how the electron current is absorbed into the dielectric constant, why an ideal cold plasma is dispersive but nondissipative, the distinction between phase and group velocity, the origin of the pulsar-dispersion constant $4.15\,\mathrm{ms}$, how a complex refractive index produces spatial attenuation, and why $d\phi_1=d\phi_2$ at a refracting interface. Each assigned problem includes a step-by-step derivation and an assignment-ready English solution.

## Contents

1. [Preparation Requirements and Logical Road Map](#1-preparation-requirements-and-logical-road-map)
2. [Notation, Units, Complex-Exponential Convention, and Assumptions](#2-notation-units-complex-exponential-convention-and-assumptions)
3. [Physical Meaning of Maxwell's Equations and the Vacuum Wave Equation](#3-physical-meaning-of-maxwells-equations-and-the-vacuum-wave-equation)
4. [Plane Electromagnetic Waves, Transverse Structure, and Phase Velocity](#4-plane-electromagnetic-waves-transverse-structure-and-phase-velocity)
5. [Finite Pulses, Fourier Spectra, and Their Connection to Quantum Mechanics](#5-finite-pulses-fourier-spectra-and-their-connection-to-quantum-mechanics)
6. [Free-Electron Response, Current, and the Effective Dielectric Constant](#6-free-electron-response-current-and-the-effective-dielectric-constant)
7. [Cold-Plasma Dispersion Relation, Cutoff, and Nondissipative Response](#7-cold-plasma-dispersion-relation-cutoff-and-nondissipative-response)
8. [Phase Velocity, Group Velocity, and Signal Propagation](#8-phase-velocity-group-velocity-and-signal-propagation)
9. [Pulsar Dispersion, DM, and the Numerical Coefficient 4.15 ms](#9-pulsar-dispersion-dm-and-the-numerical-coefficient-415-ms)
10. [Problem 2.2: Conducting Media, Complex Refractive Index, and Absorption](#10-problem-22-conducting-media-complex-refractive-index-and-absorption)
11. [Problem 8.1: Why $I_\nu/n_r^2$ Is Conserved Along a Ray](#11-problem-81-why-i_nun_r2-is-conserved-along-a-ray)
12. [Problem 8.2: Why the Wave-Packet Centroid Moves at the Group Velocity](#12-problem-82-why-the-wave-packet-centroid-moves-at-the-group-velocity)
13. [English assignment-ready solutions](#13-english-assignment-ready-solutions)
14. [Review Checklist, Dimensional Checks, and Common Confusions](#14-review-checklist-dimensional-checks-and-common-confusions)
15. [References and Citations](#15-references-and-citations)

---

<a id="sec-1"></a>

## 1. Preparation Requirements and Logical Road Map

### 1.1 Reading and Problem Scope

This class shifts from radiative transfer to the propagation of electromagnetic waves through a plasma. The preparation has three layers:

1. The essential reading is RL §8.1, on dispersion in a cold, isotropic plasma.
2. RL §§2.1–2.3 provide the electromagnetic background: Maxwell's equations, plane electromagnetic waves, and radiation spectra. If your undergraduate electromagnetism is rusty, review these sections carefully rather than merely scanning the results.
3. The assigned textbook problems are RL 8.1 and 2.2; RL 8.2 is an optional extension if time permits.

These textbook exercises are distinct from the formal Problem Set 1. This article treats only the three textbook problems listed above, not the formal problem set.

### 1.2 The Physical Chain of Cause and Effect

This material is not about memorizing the plasma frequency in isolation. It answers a physical question: why do free electrons change the propagation of an electromagnetic wave?

The complete logic is

$$
\boxed{
\text{Maxwell's equations}
\longrightarrow
\text{vacuum plane wave}
\longrightarrow
\text{electric field drives free electrons}
\longrightarrow
\text{electron current feeds back into Maxwell's equations}
}
$$

$$
\boxed{
\longrightarrow
\epsilon(\omega)
\longrightarrow
\omega^2=\omega_p^2+c^2k^2
\longrightarrow
\text{cutoff, group velocity, and pulse delay}
}.
$$

The five most important results of this lesson are

$$
\boxed{
\omega_p^2=\frac{4\pi n_e e^2}{m_e}
}
\qquad\text{(Gaussian-cgs)},
$$

$$
\boxed{
\epsilon(\omega)=1-\frac{\omega_p^2}{\omega^2}
},
$$

$$
\boxed{
\omega^2=\omega_p^2+c^2k^2
},
$$

$$
\boxed{
v_{\rm ph}=\frac{\omega}{k},
\qquad
v_g=\frac{d\omega}{dk}
},
$$

and

$$
\boxed{
\Delta t\propto\frac{\mathrm{DM}}{\nu^2},
\qquad
\mathrm{DM}=\int n_e\,ds
}.
$$

---

<a id="sec-2"></a>

## 2. Notation, Units, Complex-Exponential Convention, and Assumptions

### 2.1 Table of Symbols

| Symbol | Meaning | Notes |
|---|---|---|
| $\mathbf E,\mathbf B$ | Electric and magnetic fields | RL uses Gaussian-cgs units |
| $\mathbf D,\mathbf H$ | Electric displacement and magnetic-field strength | $\mathbf D=\epsilon\mathbf E$, $\mathbf B=\mu\mathbf H$ |
| $\rho,\mathbf j$ | Charge density and current density | In a source-free vacuum propagation region, $\rho=0,\mathbf j=0$ |
| $\mathbf k,k$ | Wave vector and its magnitude | $k=2\pi/\lambda$; its direction is the direction of phase propagation |
| $\omega,\nu$ | Angular frequency and ordinary frequency | $\omega=2\pi\nu$ |
| $n_e$ | Free-electron number density | Do not confuse it with refractive index |
| $n_r$ | Real refractive index | In §8.1, $n_r=ck/\omega=\sqrt\epsilon$ |
| $m_e$ | Electron mass | $9.1094\times10^{-28}\,\mathrm{g}$ |
| $m$ | Complex refractive index in Problem 2.2 | Not the electron mass; sometimes written here as $m=m_R+i m_I$ |
| $\omega_p$ | Electron plasma frequency | $\omega_p^2=4\pi n_e e^2/m_e$ |
| $v_{\rm ph}$ | Phase velocity | Velocity of a fixed phase or wave crest, $\omega/k$ |
| $v_g$ | Group velocity | Envelope velocity of a narrow wave packet, $d\omega/dk$ |
| $I_\nu$ | Specific intensity | Energy flux per unit area, time, frequency, and solid angle |
| $\mathrm{DM}$ | dispersion measure | Free-electron column density, $\int n_e ds$ |
| $\sigma$ | Conductivity in Problem 2.2 | Do not confuse it with a scattering cross section |
| $\alpha_\nu$ | Intensity absorption coefficient | $I_\nu(s)=I_\nu(0)e^{-\alpha_\nu s}$ |

### 2.2 Unit Convention

The main text of RL uses Gaussian-cgs units. Consequently, Maxwell's equations contain $4\pi$ and $1/c$ rather than the SI quantities $\epsilon_0$ and $\mu_0$.

In Gaussian-cgs units,

$$
\omega_p^2=\frac{4\pi n_e e^2}{m_e}.
$$

In SI units, the same physical quantity is written

$$
\omega_p^2=\frac{n_e e^2}{m_e\epsilon_0}.
$$

The two equations describe the same physics; the $4\pi$ from one system must not be mixed with the $\epsilon_0$ from the other.

### 2.3 Complex-Exponential Convention

Throughout, we use the textbook convention

$$
\boxed{
e^{i(\mathbf k\cdot\mathbf r-\omega t)}
}.
$$

Therefore,

$$
\boxed{
\nabla\rightarrow i\mathbf k,
\qquad
\frac{\partial}{\partial t}\rightarrow-i\omega
}.
$$

This is not a quantum-mechanical assumption; it follows from differentiating a complex exponential:

$$
\frac{\partial}{\partial t}
e^{i(\mathbf k\cdot\mathbf r-\omega t)}
=-i\omega e^{i(\mathbf k\cdot\mathbf r-\omega t)}.
$$

If one instead uses $e^{i(\omega t-\mathbf k\cdot\mathbf r)}$, the signs of several imaginary parts change together. As long as a single convention is used consistently, the physical attenuation rate is unchanged.

### 2.4 Assumptions of §8.1

- The plasma consists of electrons and ions that maintain overall charge neutrality.
- Because the ions are massive and move slowly over the frequency range of interest, their contribution to the high-frequency current is neglected.
- There is no imposed magnetic field, so the medium is isotropic; Faraday rotation belongs to the later §8.2.
- “Cold” means that corrections to the dispersion relation from thermal motions and pressure gradients are neglected.
- The electrons are nonrelativistic, and the magnetic Lorentz force is lower than the electric force by one order in $v/c$, so it is neglected in the basic derivation.
- Collisions and radiation damping are neglected, so the idealized model has no net dissipation.
- The medium is locally uniform; the geometric-optics approximation is used when the medium varies slowly.

---

<a id="sec-3"></a>

## 3. Physical Meaning of Maxwell's Equations and the Vacuum Wave Equation

### 3.1 The Lorentz Force and How Fields Do Work on Matter

A charged particle experiences

$$
\boxed{
\mathbf F=q\left(\mathbf E+\frac{\mathbf v}{c}\times\mathbf B\right)
}.
$$

Taking the dot product with the velocity gives

$$
\mathbf v\cdot\mathbf F
=q\mathbf v\cdot\mathbf E
+\frac{q}{c}\mathbf v\cdot(\mathbf v\times\mathbf B).
$$

because

$$
\mathbf v\cdot(\mathbf v\times\mathbf B)=0,
$$

Thus the magnetic force changes the direction of a particle's motion but does not directly change its kinetic energy; work done by the field comes from the electric field:

$$
\boxed{
\mathbf v\cdot\mathbf F=q\mathbf v\cdot\mathbf E
}.
$$

In a continuous medium, the rate of change of mechanical energy per unit volume is $\mathbf j\cdot\mathbf E$. This fact will be decisive when distinguishing dispersion from dissipation.

### 3.2 Physical Meaning of the Four Maxwell Equations

In Gaussian-cgs units, Maxwell's equations in a general medium are

$$
\nabla\cdot\mathbf D=4\pi\rho,
\qquad
\nabla\cdot\mathbf B=0,
$$

$$
\nabla\times\mathbf E
=-\frac{1}{c}\frac{\partial\mathbf B}{\partial t},
$$

$$
\nabla\times\mathbf H
=\frac{4\pi}{c}\mathbf j
+\frac{1}{c}\frac{\partial\mathbf D}{\partial t}.
$$

They state, respectively:

1. Electric charge is a source or sink of electric flux.
2. There are no isolated magnetic monopoles; magnetic-field lines form closed loops.
3. A time-varying magnetic field produces a rotational electric field: Faraday induction.
4. Both a real current and a time-varying electric field produce a rotational magnetic field.

The displacement-current term in the fourth equation,

$$
\frac{1}{c}\frac{\partial\mathbf D}{\partial t}
$$

allows a changing electric field to generate a magnetic field even where no real conduction current exists. It both guarantees charge conservation and makes electromagnetic waves in vacuum possible.

### 3.3 Charge Conservation

Take the divergence of the Ampère–Maxwell equation and use the fact that the divergence of any curl vanishes:

$$
\nabla\cdot(\nabla\times\mathbf H)=0.
$$

Hence

$$
0=\frac{4\pi}{c}\nabla\cdot\mathbf j
+\frac{1}{c}\frac{\partial}{\partial t}(\nabla\cdot\mathbf D).
$$

Then use $\nabla\cdot\mathbf D=4\pi\rho$:

$$
\boxed{
\nabla\cdot\mathbf j+\frac{\partial\rho}{\partial t}=0
}.
$$

This is local charge conservation.

### 3.4 The Poynting Theorem and Energy Flux

The electromagnetic energy density and energy flux are

$$
u_{\rm field}
=\frac{1}{8\pi}
\left(
\epsilon E^2+\frac{B^2}{\mu}
\right),
$$

The simple expression for energy density here assumes that $\epsilon$ and $\mu$ do not depend on frequency or time. For the dispersive plasma considered later, where $\epsilon(\omega)$, the stored energy of the medium must be calculated together with the electron kinetic energy; one cannot mechanically substitute $\epsilon(\omega)$ into this static-medium formula.

$$
\boxed{
\mathbf S=\frac{c}{4\pi}\mathbf E\times\mathbf H
}.
$$

The Poynting theorem can be written

$$
\frac{\partial u_{\rm field}}{\partial t}
+\nabla\cdot\mathbf S
=-\mathbf j\cdot\mathbf E.
$$

The right-hand side shows that the field energy lost enters the mechanical or thermal energy of matter, while $\mathbf S$ describes the rate at which electromagnetic energy flows through unit area.

### 3.5 A Source-Free Vacuum Region Does Not Mean the Fields Vanish

In a vacuum propagation region, take

$$
\rho=0,
\qquad
\mathbf j=0,
\qquad
\epsilon=\mu=1.
$$

This means only that there are no local charge or current sources; it does not mean $\mathbf E=\mathbf B=0$. Light may be produced by a distant astronomical object or antenna and then pass through a locally source-free region.

Maxwell's equations reduce to

$$
\nabla\cdot\mathbf E=0,
\qquad
\nabla\cdot\mathbf B=0,
$$

$$
\nabla\times\mathbf E
=-\frac{1}{c}\frac{\partial\mathbf B}{\partial t},
\qquad
\nabla\times\mathbf B
=\frac{1}{c}\frac{\partial\mathbf E}{\partial t}.
$$

Zero divergence only means that the fields have no local sources; a transverse wave can satisfy this condition perfectly well.

### 3.6 Deriving the Electric-Field Wave Equation

Begin with Faraday's law:

$$
\nabla\times\mathbf E
=-\frac{1}{c}\frac{\partial\mathbf B}{\partial t}.
$$

Take the curl of both sides:

$$
\nabla\times(\nabla\times\mathbf E)
=-\frac{1}{c}
\frac{\partial}{\partial t}
(\nabla\times\mathbf B).
$$

Substitute the vacuum Ampère–Maxwell law:

$$
\nabla\times(\nabla\times\mathbf E)
=-\frac{1}{c^2}
\frac{\partial^2\mathbf E}{\partial t^2}.
$$

Use the vector identity

$$
\nabla\times(\nabla\times\mathbf E)
=\nabla(\nabla\cdot\mathbf E)-\nabla^2\mathbf E.
$$

In a source-free vacuum region, $\nabla\cdot\mathbf E=0$, so

$$
-\nabla^2\mathbf E
=-\frac{1}{c^2}
\frac{\partial^2\mathbf E}{\partial t^2}.
$$

The result is

$$
\boxed{
\nabla^2\mathbf E
-\frac{1}{c^2}
\frac{\partial^2\mathbf E}{\partial t^2}=0
}.
$$

Starting in the same way from the Ampère–Maxwell law gives

$$
\boxed{
\nabla^2\mathbf B
-\frac{1}{c^2}
\frac{\partial^2\mathbf B}{\partial t^2}=0
}.
$$

These two equations show that changing electric and magnetic fields are mutually coupled and propagate at speed $c$. Their energy comes from the source that originally generated the wave and is carried outward by the Poynting flux; it is not created from nothing as the fields propagate.

---

<a id="sec-4"></a>

## 4. Plane Electromagnetic Waves, Transverse Structure, and Phase Velocity

### 4.1 Plane Waves and Differential Operators

Take

$$
\mathbf E
=\hat{\mathbf e}_1 E_0
e^{i(\mathbf k\cdot\mathbf r-\omega t)},
$$

$$
\mathbf B
=\hat{\mathbf e}_2 B_0
e^{i(\mathbf k\cdot\mathbf r-\omega t)}.
$$

Only the real part of the complex exponential is the physical field. The advantage of complex notation is that differentiation becomes multiplication by a constant:

$$
\nabla\mathbf E=i\mathbf k\mathbf E,
\qquad
\frac{\partial\mathbf E}{\partial t}=-i\omega\mathbf E.
$$

Differentiation rotates the phase of a sinusoidal oscillation by $90^\circ$; multiplication by the complex factor $i$ records exactly this phase difference.

### 4.2 Why Electromagnetic Waves Are Transverse

The vacuum Gauss laws give

$$
i\mathbf k\cdot\mathbf E=0,
\qquad
i\mathbf k\cdot\mathbf B=0.
$$

Therefore,

$$
\boxed{
\mathbf k\cdot\mathbf E=0,
\qquad
\mathbf k\cdot\mathbf B=0
}.
$$

Faraday's law further gives

$$
\mathbf k\times\mathbf E
=\frac{\omega}{c}\mathbf B.
$$

Thus $\mathbf E$, $\mathbf B$, and $\mathbf k$ are mutually perpendicular and form a right-handed triad:

$$
\boxed{
\mathbf E\perp\mathbf B\perp\mathbf k
}.
$$

### 4.3 The Vacuum Dispersion Relation

Substitute the plane wave into the wave equation:

$$
\nabla^2\mathbf E=-k^2\mathbf E,
\qquad
\frac{\partial^2\mathbf E}{\partial t^2}
=-\omega^2\mathbf E.
$$

Therefore,

$$
-k^2\mathbf E
+\frac{\omega^2}{c^2}\mathbf E=0.
$$

A nonzero solution requires

$$
\boxed{
\omega^2=c^2k^2
},
$$

Taking positive frequency and positive wavenumber gives

$$
\boxed{
\omega=ck
}.
$$

In Gaussian units, one also obtains

$$
\boxed{E_0=B_0}.
$$

In SI units this becomes $E_0=cB_0$; the difference is purely one of unit definitions.

### 4.4 Why the Phase Velocity Is $\omega/k$

The phase of a one-dimensional wave is

$$
\Phi(x,t)=kx-\omega t.
$$

Following a wave crest means holding the phase fixed:

$$
kx-\omega t=\mathrm{constant}.
$$

Differentiate with respect to time:

$$
k\frac{dx}{dt}-\omega=0.
$$

Thus the speed of a fixed phase is

$$
\boxed{
v_{\rm ph}=\frac{dx}{dt}=\frac{\omega}{k}
}.
$$

The same result follows from $k=2\pi/\lambda$ and $\omega=2\pi/T$:

$$
\frac{\omega}{k}=\frac{\lambda}{T}=\lambda\nu.
$$

In vacuum, $\omega=ck$, so

$$
\boxed{v_{\rm ph}=c}.
$$

### 4.5 Time-Averaged Energy Flux and Energy Density

For a monochromatic plane wave, the textbook uses complex amplitudes to calculate the time average:

$$
\langle\mathbf S\rangle
=\frac{c}{8\pi}
\operatorname{Re}(\mathbf E_0\times\mathbf B_0^*).
$$

In vacuum, $E_0=B_0$, so

$$
\langle S\rangle
=\frac{c}{8\pi}|E_0|^2
=\frac{c}{8\pi}|B_0|^2.
$$

The mean energy density is

$$
\langle u\rangle
=\frac{1}{8\pi}|E_0|^2,
$$

Therefore,

$$
\frac{\langle S\rangle}{\langle u\rangle}=c.
$$

In vacuum, the energy-transport speed, phase velocity, and the group velocity defined below all equal $c$.

---

<a id="sec-5"></a>

## 5. Finite Pulses, Fourier Spectra, and Their Connection to Quantum Mechanics

### 5.1 A Finite Pulse Must Contain Multiple Frequencies

A strictly monochromatic wave

$$
E(t)=E_0\cos\omega_0t
$$

oscillates from $t=-\infty$ to $t=+\infty$. It has an exact frequency but no finite duration.

A finite pulse must be written as a superposition of many Fourier modes:

$$
\boxed{
E(t)=\int_{-\infty}^{\infty}
\widetilde E(\omega)e^{-i\omega t}\,d\omega
}.
$$

where $\widetilde E(\omega)$ gives the complex amplitude of each frequency component.

### 5.2 Why a Short Pulse Has a Broad Spectrum

Consider a single-frequency oscillation that exists only over $-T/2<t<T/2$:

$$
E(t)=
\begin{cases}
e^{-i\omega_0t}, & |t|<T/2,\\
0, & |t|>T/2.
\end{cases}
$$

Its Fourier transform is

$$
\widetilde E(\omega)
\propto
\int_{-T/2}^{T/2}
e^{i(\omega-\omega_0)t}\,dt
=
\frac{2\sin[(\omega-\omega_0)T/2]}
{\omega-\omega_0}.
$$

The first zero satisfies

$$
|\omega-\omega_0|=\frac{2\pi}{T}.
$$

so the order of magnitude of the spectral width is

$$
\boxed{
\Delta\omega\sim\frac{1}{T}
},
$$

that is,

$$
\boxed{
\Delta\omega\,\Delta t\gtrsim1
}.
$$

Physically, two nearby frequencies accumulate a phase difference over a time $T$ equal to

$$
\Delta\Phi=\Delta\omega\,T.
$$

If $\Delta\omega T\ll1$, the two cannot be resolved within the finite observing time. A shorter observation gives poorer frequency resolution; likewise, localizing a wave into a short pulse requires a broader range of frequencies to interfere.

### 5.3 How This Is Related to Quantum Mechanics

$\partial_t\rightarrow-i\omega$ and $\nabla\rightarrow i\mathbf k$ are first of all results of classical Fourier analysis, not quantum assumptions. Quantum mechanics additionally uses

$$
\boxed{E=\hbar\omega},
\qquad
\boxed{\mathbf p=\hbar\mathbf k}.
$$

Therefore, for a quantum plane wave

$$
\psi\propto e^{i(\mathbf k\cdot\mathbf r-\omega t)},
$$

we have

$$
i\hbar\frac{\partial\psi}{\partial t}=E\psi,
\qquad
-i\hbar\nabla\psi=\mathbf p\psi.
$$

which gives the quantum energy and momentum operators

$$
\hat E=i\hbar\partial_t,
\qquad
\hat{\mathbf p}=-i\hbar\nabla.
$$

The classical Fourier relation

$$
\Delta x\,\Delta k\geq\frac12
$$

combined with $p=\hbar k$ becomes

$$
\Delta x\,\Delta p\geq\frac{\hbar}{2}.
$$

But the physical interpretations differ: for a classical electromagnetic field, $|E|^2$ is related to energy density or intensity, whereas for a quantum wavefunction, $|\psi|^2$ is a probability density. The plasma derivation in RL §8.1 remains classical electromagnetism; it merely shares the mathematical basis of Fourier modes with quantum mechanics.

### 5.4 Why This Material Is Necessary for Plasma Propagation

A short pulsar or FRB pulse naturally contains a range of frequencies. If the medium makes $v_g$ frequency-dependent, different Fourier components arrive at different times and the original pulse is stretched. Dispersion delay is therefore the direct consequence of a finite pulse plus a frequency-dependent group velocity.

---

<a id="sec-6"></a>

## 6. Free-Electron Response, Current, and the Effective Dielectric Constant

### 6.1 How Electrons Respond to an Electric Field

An electron has charge $-e$. Neglecting the magnetic force, collisions, and thermal pressure, its equation of motion is

$$
\boxed{
m_e\dot{\mathbf v}=-e\mathbf E
}.
$$

Using $e^{i(\mathbf k\cdot\mathbf r-\omega t)}$ gives $\dot{\mathbf v}=-i\omega\mathbf v$, so

$$
-i\omega m_e\mathbf v=-e\mathbf E.
$$

Solving gives

$$
\boxed{
\mathbf v=\frac{e}{i\omega m_e}\mathbf E
=-\frac{i e}{\omega m_e}\mathbf E
}.
$$

The electron current density is

$$
\mathbf j=-n_e e\mathbf v,
$$

Therefore,

$$
\boxed{
\mathbf j
=\frac{i n_e e^2}{\omega m_e}\mathbf E
}.
$$

If we write $\mathbf j=\sigma\mathbf E$, the effective conductivity is

$$
\boxed{
\sigma=\frac{i n_e e^2}{\omega m_e}
}.
$$

It is purely imaginary, showing that the current and electric field differ in phase by $90^\circ$.

### 6.2 Substituting the Electron Current Back into Maxwell's Equations

The Ampère–Maxwell equation including the electron current is

$$
\nabla\times\mathbf B
=\frac{4\pi}{c}\mathbf j
+\frac{1}{c}\frac{\partial\mathbf E}{\partial t}.
$$

For a plane wave,

$$
i\mathbf k\times\mathbf B
=\frac{4\pi}{c}\mathbf j
-\frac{i\omega}{c}\mathbf E.
$$

Substitute $\mathbf j=\sigma\mathbf E$:

$$
i\mathbf k\times\mathbf B
=\frac{1}{c}(4\pi\sigma-i\omega)\mathbf E.
$$

We want to write this in the ordinary-medium form

$$
i\mathbf k\times\mathbf B
=-\frac{i\omega}{c}\epsilon(\omega)\mathbf E.
$$

Comparing coefficients gives

$$
-i\omega\epsilon=4\pi\sigma-i\omega,
$$

so

$$
\epsilon
=1-\frac{4\pi\sigma}{i\omega}.
$$

Substituting $\sigma=i n_e e^2/(\omega m_e)$ then gives

$$
\boxed{
\epsilon(\omega)
=1-\frac{4\pi n_e e^2}{m_e\omega^2}
}.
$$

Define

$$
\boxed{
\omega_p^2\equiv\frac{4\pi n_e e^2}{m_e}
},
$$

and obtain

$$
\boxed{
\epsilon(\omega)=1-\frac{\omega_p^2}{\omega^2}
}.
$$

This step is only a bookkeeping change: instead of writing the electron current explicitly, we absorb the linear electron response into a frequency-dependent dielectric constant.

### 6.3 Obtaining the Same Result from Polarization

Let the electron displacement be $\mathbf x$. The equation of motion

$$
m_e\ddot{\mathbf x}=-e\mathbf E
$$

gives, for harmonic motion,

$$
-m_e\omega^2\mathbf x=-e\mathbf E,
$$

so

$$
\mathbf x=\frac{e}{m_e\omega^2}\mathbf E.
$$

The dipole moment of each electron is

$$
\mathbf p=-e\mathbf x
=-\frac{e^2}{m_e\omega^2}\mathbf E.
$$

Therefore the polarization is

$$
\mathbf P=n_e\mathbf p
=-\frac{n_e e^2}{m_e\omega^2}\mathbf E.
$$

In Gaussian-cgs units,

$$
\mathbf D=\mathbf E+4\pi\mathbf P,
$$

Thus,

$$
\mathbf D
=\left(
1-\frac{4\pi n_e e^2}{m_e\omega^2}
\right)\mathbf E
=\epsilon(\omega)\mathbf E.
$$

The polarization current is

$$
\frac{\partial\mathbf P}{\partial t}
=-i\omega\mathbf P
=\frac{i n_e e^2}{m_e\omega}\mathbf E
$$

which is exactly the $\mathbf j$ obtained above. The two derivations are completely equivalent.

### 6.4 Physical Meaning of the Minus Sign

Because electrons are negatively charged, the induced polarization opposes the applied electric field:

$$
\mathbf P\parallel-\mathbf E.
$$

The electron response partially screens the external field, making $\epsilon<1$. Moreover, because

$$
|\mathbf x|\propto\frac{1}{\omega^2},
$$

at high frequency the electrons cannot move appreciably, so $\epsilon\rightarrow1$; at low frequency the response is stronger, and $\epsilon$ differs substantially from unity.

---

<a id="sec-7"></a>

## 7. Cold-Plasma Dispersion Relation, Cutoff, and Nondissipative Response

### 7.1 dispersion relation

Write Maxwell's equations as

$$
i\mathbf k\times\mathbf E
=i\frac{\omega}{c}\mathbf B,
$$

$$
i\mathbf k\times\mathbf B
=-i\frac{\omega}{c}\epsilon\mathbf E.
$$

Take $\mathbf k\times$ of the first equation and use the transverse-wave condition $\mathbf k\cdot\mathbf E=0$:

$$
\mathbf k\times(\mathbf k\times\mathbf E)
=-k^2\mathbf E.
$$

Eliminating $\mathbf B$ gives

$$
c^2k^2=\epsilon\omega^2.
$$

Substitute $\epsilon=1-\omega_p^2/\omega^2$:

$$
c^2k^2
=\omega^2-\omega_p^2.
$$

Therefore,

$$
\boxed{
\omega^2=\omega_p^2+c^2k^2
}.
$$

This nonlinear relation between $\omega(k)$ is the origin of dispersion and of the difference between phase and group velocity.

### 7.2 Numerical Value of the Plasma Frequency

If $n_e$ is measured in $\mathrm{cm^{-3}}$, then

$$
\boxed{
\omega_p
=5.63\times10^4
\sqrt{\frac{n_e}{\mathrm{cm^{-3}}}}
\ \mathrm{s^{-1}}
}.
$$

The ordinary frequency is

$$
\boxed{
\nu_p=\frac{\omega_p}{2\pi}
=8.98\,\mathrm{kHz}
\sqrt{\frac{n_e}{\mathrm{cm^{-3}}}}
}.
$$

### 7.3 Why a Cutoff Appears

From

$$
k^2=\frac{\omega^2-\omega_p^2}{c^2}
$$

we see that:

- if $\omega>\omega_p$, then $k$ is real and a propagating wave exists;
- if $\omega<\omega_p$, then $k$ is purely imaginary and there is no normally propagating transverse electromagnetic wave.

Let

$$
k=i\kappa,
\qquad
\kappa=\frac{1}{c}\sqrt{\omega_p^2-\omega^2}.
$$

The spatial factor becomes

$$
e^{ikr}=e^{-\kappa r},
$$

an evanescent field. In the ideal collisionless model, this usually corresponds to reflection and a finite penetration depth rather than conversion of energy into heat.

### 7.4 Why the Medium Is Dispersive but Has No Ordinary Resistive Dissipation

Write the real electric field as

$$
\mathbf E(t)=\mathbf E_0\cos\omega t.
$$

The electron motion gives

$$
\mathbf v(t)
=-\frac{e\mathbf E_0}{m_e\omega}\sin\omega t,
$$

Therefore,

$$
\mathbf j(t)
=\frac{n_e e^2\mathbf E_0}{m_e\omega}\sin\omega t.
$$

$\mathbf j$ and $\mathbf E$ differ in phase by $90^\circ$. The instantaneous power per unit volume is

$$
\mathbf j\cdot\mathbf E
\propto\sin\omega t\cos\omega t
=\frac12\sin2\omega t.
$$

Averaging over one period gives

$$
\boxed{
\langle\mathbf j\cdot\mathbf E\rangle=0
}.
$$

During part of each cycle, the electrons take energy from the field; during another part they return their kinetic energy to it. The complex conductivity

$$
\sigma=\frac{i n_e e^2}{\omega m_e}
$$

has only an imaginary part, while the average Joule power

$$
\langle P\rangle
=\frac12\operatorname{Re}(\sigma)|E_0|^2
$$

vanishes. The response is therefore like an ideal inductor or capacitor: it is reactive, changing phase and propagation speed without producing net thermal dissipation.

If a collision frequency $\nu_{\rm coll}$ is included, the equation of motion becomes

$$
m_e(\dot{\mathbf v}+\nu_{\rm coll}\mathbf v)
=-e\mathbf E.
$$

Then $\operatorname{Re}(\sigma)>0$, and coherent electron oscillation is converted into random thermal motion, so the medium genuinely absorbs electromagnetic energy.

---

<a id="sec-8"></a>

## 8. Phase Velocity, Group Velocity, and Signal Propagation

### 8.1 The Two Definitions Track Different Objects

The phase velocity

$$
\boxed{
v_{\rm ph}=\frac{\omega}{k}
}
$$

tracks a single wave crest or surface of constant phase.

The group velocity

$$
\boxed{
v_g=\frac{d\omega}{dk}
}
$$

tracks the envelope of a narrow packet made from nearby wavenumbers. In a transparent, weakly absorbing medium with normal dispersion, it is also the propagation speed of the pulse centroid, energy, and modulation.

### 8.2 Seeing Group Velocity from Two Nearby Waves

Take

$$
E_1=\cos(k_1x-\omega_1t),
\qquad
E_2=\cos(k_2x-\omega_2t).
$$

Add them and use a trigonometric identity:

$$
E_1+E_2
=2\cos\left(
\frac{\Delta k}{2}x
-\frac{\Delta\omega}{2}t
\right)
\cos(\bar kx-\bar\omega t).
$$

The fast carrier has phase velocity approximately $\bar\omega/\bar k$; the slow envelope moves at

$$
\frac{\Delta\omega}{\Delta k}.
$$

When $\Delta k\rightarrow0$,

$$
\boxed{
v_g=\frac{d\omega}{dk}
}.
$$

### 8.3 Phase Velocity in a Cold Plasma

From

$$
k=\frac{\omega}{c}
\sqrt{1-\frac{\omega_p^2}{\omega^2}},
$$

the refractive index is

$$
\boxed{
n_r\equiv\frac{ck}{\omega}
=\sqrt{1-\frac{\omega_p^2}{\omega^2}}
}.
$$

Therefore,

$$
\boxed{
v_{\rm ph}
=\frac{\omega}{k}
=\frac{c}{n_r}
=\frac{c}{\sqrt{1-\omega_p^2/\omega^2}}
>c
}.
$$

### 8.4 Group Velocity in a Cold Plasma

For

$$
\omega^2=\omega_p^2+c^2k^2
$$

differentiate with respect to $k$:

$$
2\omega\frac{d\omega}{dk}=2c^2k.
$$

Thus,

$$
\boxed{
v_g
=\frac{d\omega}{dk}
=\frac{c^2k}{\omega}
=c\sqrt{1-\frac{\omega_p^2}{\omega^2}}
=cn_r<c
}.
$$

The two velocities satisfy

$$
\boxed{
v_{\rm ph}v_g=c^2
}.
$$

### 8.5 Why $v_{\rm ph}>c$ Does Not Violate Relativity

A wave crest is an interference pattern, not an independent object carrying energy and information. As the wave propagates, one crest can disappear at the back of the envelope while another forms at the front. A superluminal phase pattern does not imply superluminal transmission of new information.

Strictly speaking, the causal speed is the wave-front velocity. In the ideal collisionless cold plasma of this lesson, energy and a finite pulse propagate at $v_g<c$.

When $\omega\rightarrow\omega_p^+$, $k\rightarrow0$, so

$$
v_{\rm ph}\rightarrow\infty,
\qquad
v_g\rightarrow0.
$$

This does not mean that energy propagates infinitely fast. It means that the phase has an extremely large spatial scale while the wave packet can transport almost no energy forward.

---

<a id="sec-9"></a>

## 9. Pulsar Dispersion, DM, and the Numerical Coefficient 4.15 ms

### 9.1 High-Frequency Expansion

The group velocity in a cold plasma is

$$
v_g=c\sqrt{1-\frac{\omega_p^2}{\omega^2}}.
$$

An interstellar plasma usually satisfies $\omega\gg\omega_p$. Let $x=\omega_p^2/\omega^2\ll1$ and use

$$
(1-x)^{-1/2}\simeq1+\frac{x}{2},
$$

to obtain

$$
\frac{1}{v_g}
\simeq
\frac{1}{c}
\left(
1+\frac12\frac{\omega_p^2}{\omega^2}
\right).
$$

The propagation time is

$$
t_p(\omega)=\int_0^d\frac{ds}{v_g}.
$$

Therefore,

$$
t_p(\omega)
\simeq
\frac{d}{c}
+\frac{1}{2c\omega^2}
\int_0^d\omega_p^2(s)\,ds.
$$

The first term is the vacuum propagation time and the second is the additional plasma delay.

### 9.2 dispersion measure

Substituting

$$
\omega_p^2=\frac{4\pi n_e e^2}{m_e},
\qquad
\omega=2\pi\nu,
$$

gives

$$
\Delta t_{\rm plasma}(\nu)
=\frac{e^2}{2\pi m_ec}
\frac{1}{\nu^2}
\int_0^d n_e(s)\,ds.
$$

Define

$$
\boxed{
\mathrm{DM}\equiv\int_0^d n_e(s)\,ds
},
$$

Then,

$$
\boxed{
\Delta t_{\rm plasma}(\nu)
=\frac{e^2}{2\pi m_ec}
\frac{\mathrm{DM}}{\nu^2}
}.
$$

DM is an electron column density, not a distance. A Galactic electron-density model must additionally be adopted before DM can be used to estimate distance.

### 9.3 Delay Between Two Frequencies

The difference in arrival time between a low and a high frequency is

$$
\Delta t
=\frac{e^2}{2\pi m_ec}
\mathrm{DM}
\left(
\frac{1}{\nu_{\rm low}^2}
-\frac{1}{\nu_{\rm high}^2}
\right).
$$

Because $\nu_{\rm low}^{-2}>\nu_{\rm high}^{-2}$, the lower-frequency component arrives later.

### 9.4 Why the Numerical Coefficient Is 4.15

In Gaussian-cgs units,

$$
e=4.8032\times10^{-10}\,\mathrm{statC},
$$

$$
m_e=9.1094\times10^{-28}\,\mathrm{g},
\qquad
c=2.9979\times10^{10}\,\mathrm{cm\,s^{-1}}.
$$

Therefore,

$$
\frac{e^2}{2\pi m_ec}
=1.3445\times10^{-3}\,\mathrm{cm^2\,s^{-1}}.
$$

Also,

$$
1\,\mathrm{pc}=3.0857\times10^{18}\,\mathrm{cm},
$$

$$
1\,\mathrm{pc\,cm^{-3}}
=3.0857\times10^{18}\,\mathrm{cm^{-2}},
$$

and

$$
(1\,\mathrm{GHz})^{-2}=10^{-18}\,\mathrm{s^2}.
$$

so

$$
\left(1.3445\times10^{-3}\right)
\left(3.0857\times10^{18}\right)
\left(10^{-18}\right)
=4.1488\times10^{-3}\,\mathrm{s}.
$$

that is,

$$
\boxed{4.1488\,\mathrm{ms}\simeq4.15\,\mathrm{ms}}.
$$

The commonly used final expression is

$$
\boxed{
\Delta t
\simeq
4.15\,\mathrm{ms}
\left(
\frac{\mathrm{DM}}{\mathrm{pc\,cm^{-3}}}
\right)
\left[
\left(
\frac{\nu_{\rm low}}{\mathrm{GHz}}
\right)^{-2}
-
\left(
\frac{\nu_{\rm high}}{\mathrm{GHz}}
\right)^{-2}
\right]
}.
$$

$4.15$ is not a new fundamental constant; it is the result of combining $e$, $m_e$, and $c$ with the unit conversions for pc, GHz, and ms.

### 9.5 An Order-of-Magnitude Example

Suppose

$$
\mathrm{DM}=30\,\mathrm{pc\,cm^{-3}},
$$

Comparing $0.4\,\mathrm{GHz}$ with $0.8\,\mathrm{GHz}$ gives

$$
\Delta t
=4.15\,\mathrm{ms}\times30
\left(0.4^{-2}-0.8^{-2}\right)
\simeq0.58\,\mathrm{s}.
$$

The low-frequency delay can be very pronounced at radio wavelengths, making pulsars and FRBs useful probes of electron column density.

---

<a id="sec-10"></a>

## 10. Problem 2.2: Conducting Media, Complex Refractive Index, and Absorption

### 10.1 Objective

A conducting medium obeys

$$
\mathbf j=\sigma\mathbf E.
$$

The problem asks us to prove

$$
\boxed{
k^2=\frac{\omega^2m^2}{c^2}
},
$$

where the textbook uses $m$ for the complex refractive index:

$$
\boxed{
m^2
=\mu\epsilon
\left(
1+\frac{4\pi i\sigma}{\omega\epsilon}
\right)
}.
$$

It then asks us to prove that the intensity absorption coefficient is

$$
\boxed{
\alpha_\nu
=\frac{2\omega}{c}\operatorname{Im}(m)
}.
$$

### 10.2 Maxwell's Equations in Fourier Form

Use $\mathbf D=\epsilon\mathbf E$ and $\mathbf B=\mu\mathbf H$:

$$
\nabla\times\mathbf E
=-\frac{1}{c}\frac{\partial\mathbf B}{\partial t},
$$

$$
\nabla\times\mathbf H
=\frac{4\pi}{c}\mathbf j
+\frac{1}{c}\frac{\partial\mathbf D}{\partial t}.
$$

Substitute the plane wave and $\mathbf j=\sigma\mathbf E$:

$$
\mathbf k\times\mathbf E
=\frac{\omega\mu}{c}\mathbf H,
\tag{10.1}
$$

$$
\mathbf k\times\mathbf H
=-\frac{1}{c}
(\omega\epsilon+i4\pi\sigma)
\mathbf E.
\tag{10.2}
$$

Take $\mathbf k\times$ of equation (10.1):

$$
\mathbf k\times(\mathbf k\times\mathbf E)
=\frac{\omega\mu}{c}
\mathbf k\times\mathbf H.
$$

For the transverse branch, $\mathbf k\cdot\mathbf E=0$, so the left-hand side is $-k^2\mathbf E$. Substituting equation (10.2) gives

$$
-k^2\mathbf E
=-\frac{\omega\mu}{c^2}
(\omega\epsilon+i4\pi\sigma)
\mathbf E.
$$

Therefore,

$$
k^2
=\frac{\omega^2\mu\epsilon}{c^2}
\left(
1+\frac{4\pi i\sigma}{\omega\epsilon}
\right).
$$

Define

$$
m^2
=\mu\epsilon
\left(
1+\frac{4\pi i\sigma}{\omega\epsilon}
\right),
$$

and obtain

$$
\boxed{k=\frac{\omega}{c}m}.
$$

### 10.3 What “the Spatial Part of the Wave” Means

The full plane wave can be separated as

$$
E(r,t)=E_0
\underbrace{e^{ikr}}_{\text{spatial dependence}}
\underbrace{e^{-i\omega t}}_{\text{temporal dependence}}.
$$

At a fixed time, $e^{ikr}$ determines the spatial oscillation; at a fixed position, $e^{-i\omega t}$ determines the temporal oscillation. Only together do they constitute a propagating wave.

### 10.4 Why a Complex Refractive Index Produces Spatial Attenuation

Let

$$
m=m_R+i m_I,
\qquad
k=\frac{\omega}{c}(m_R+i m_I).
$$

The spatial factor is

$$
e^{ikr}
=\exp\left[
i\frac{\omega}{c}(m_R+i m_I)r
\right].
$$

Because $i^2=-1$,

$$
e^{ikr}
=e^{-\omega m_Ir/c}
e^{i\omega m_Rr/c}.
$$

we have

$$
\boxed{
|E(r)|=|E_0|e^{-\omega m_Ir/c}
}.
$$

$m_R$ controls phase and wavelength, whereas $m_I>0$ controls the attenuation of amplitude with distance. Under the $e^{i(kr-\omega t)}$ convention used here, the physical solution has $m_I>0$, preventing exponential growth in a passive medium.

Intensity is proportional to the square of the amplitude:

$$
I_\nu(r)
=I_\nu(0)e^{-2\omega m_Ir/c}.
$$

Comparing this with

$$
I_\nu(r)=I_\nu(0)e^{-\alpha_\nu r}
$$

gives

$$
\boxed{
\alpha_\nu
=\frac{2\omega}{c}m_I
=\frac{2\omega}{c}\operatorname{Im}(m)
}.
$$

The factor of two appears because intensity is the square of the field amplitude.

### 10.5 Physical Meaning and the SI Version

If a conducting medium has $\operatorname{Re}(\sigma)>0$, then

$$
\langle\mathbf j\cdot\mathbf E\rangle>0.
$$

electromagnetic energy is irreversibly converted into Joule heat, appearing as a positive imaginary part of the complex refractive index and as attenuation of the intensity.

In SI units, the safest intermediate equation, avoiding the cgs factor $4\pi$, is

$$
\boxed{
k^2=\omega^2\mu\epsilon+i\omega\mu\sigma
}.
$$

where $\epsilon$ and $\mu$ are the SI absolute permittivity and permeability.

---

<a id="sec-11"></a>

## 11. Problem 8.1: Why $I_\nu/n_r^2$ Is Conserved Along a Ray

### 11.1 Problem and Assumptions

The problem asks us to prove, in a refracting medium, that

$$
\boxed{
\frac{I_\nu}{n_r^2}
=\mathrm{constant\ along\ a\ ray}
}.
$$

Here $n_r$ is the refractive index. Assume a stationary, locally planar interface, isotropic media on both sides, and no absorption, emission, or reflection loss.

### 11.2 Conservation of Energy Flux Across the Interface

For a small interface area $dA$, the normal energy flux carried by a beam in the frequency interval $d\nu$ and solid angle $d\Omega$ is

$$
dP
=I_\nu\cos\theta\,dA\,d\Omega\,d\nu.
$$

Therefore, on the two sides of the interface,

$$
I_{\nu,1}\cos\theta_1\,d\Omega_1
=I_{\nu,2}\cos\theta_2\,d\Omega_2.
\tag{11.1}
$$

### 11.3 Why $d\phi_1=d\phi_2$

Take the interface normal as the $z$ axis and write the ray direction as

$$
\hat{\mathbf k}
=(\sin\theta\cos\phi,
\sin\theta\sin\phi,
\cos\theta).
$$

A planar interface requires conservation of the component of the wave vector parallel to the interface:

$$
\mathbf k_{1,\parallel}=\mathbf k_{2,\parallel}.
$$

that is,

$$
k_1\sin\theta_1
(\cos\phi_1,\sin\phi_1)
=k_2\sin\theta_2
(\cos\phi_2,\sin\phi_2).
$$

Equality of the magnitudes gives Snell's law, while equality of the directions requires

$$
\boxed{\phi_2=\phi_1}.
$$

The azimuthal separation between two neighboring rays is therefore also unchanged:

$$
\boxed{d\phi_2=d\phi_1}.
$$

Geometrically, refraction changes the inclination angle $\theta$ toward or away from the normal, but it does not make a ray rotate around the normal without cause; the incident ray, refracted ray, and normal remain in the same plane of incidence.

### 11.4 How the Solid Angle Changes

In spherical coordinates, the solid-angle element is

$$
d\Omega=\sin\theta\,d\theta\,d\phi.
$$

Snell's law is

$$
n_1\sin\theta_1=n_2\sin\theta_2.
\tag{11.2}
$$

Differentiating it gives

$$
n_1\cos\theta_1\,d\theta_1
=n_2\cos\theta_2\,d\theta_2.
\tag{11.3}
$$

Using $d\phi_2=d\phi_1$,

$$
\frac{d\Omega_2}{d\Omega_1}
=\frac{\sin\theta_2\,d\theta_2}
{\sin\theta_1\,d\theta_1}.
$$

Equations (11.2) and (11.3), respectively, give

$$
\frac{\sin\theta_2}{\sin\theta_1}
=\frac{n_1}{n_2},
$$

$$
\frac{d\theta_2}{d\theta_1}
=\frac{n_1\cos\theta_1}
{n_2\cos\theta_2}.
$$

Therefore,

$$
\boxed{
\frac{d\Omega_2}{d\Omega_1}
=\frac{n_1^2}{n_2^2}
\frac{\cos\theta_1}{\cos\theta_2}
}.
$$

### 11.5 Obtaining the Invariant

Substitute into the flux-conservation equation (11.1):

$$
I_{\nu,1}\cos\theta_1d\Omega_1
=I_{\nu,2}\cos\theta_2
\left(
\frac{n_1^2}{n_2^2}
\frac{\cos\theta_1}{\cos\theta_2}
d\Omega_1
\right).
$$

Cancel the common factors:

$$
I_{\nu,1}
=I_{\nu,2}\frac{n_1^2}{n_2^2}.
$$

Thus,

$$
\boxed{
\frac{I_{\nu,1}}{n_1^2}
=\frac{I_{\nu,2}}{n_2^2}
}.
$$

Treating a continuously varying medium as a sequence of infinitesimally thin interfaces shows that $I_\nu/n_r^2$ is conserved along a ray.

### 11.6 Physical Interpretation

Refraction compresses or expands the solid angle occupied by a beam in direction space. A change in $I_\nu$ need not mean that energy has been created or destroyed; the same energy may simply have been redistributed over a different-sized $d\Omega$.

This is also a manifestation of conservation of optical étendue and of Liouville's theorem in a refracting medium. In vacuum, where $n_r=1$, it reduces to the familiar conservation of $I_\nu$ along a source-free ray.

---

<a id="sec-12"></a>

## 12. Problem 8.2: Why the Wave-Packet Centroid Moves at the Group Velocity

### 12.1 Problem

A one-dimensional wave packet is

$$
\psi(r,t)
=\int_{-\infty}^{\infty}
A(k)e^{i[kr-\omega(k)t]}\,dk.
$$

Define its centroid by

$$
\langle r(t)\rangle
=\frac{\int r|\psi(r,t)|^2dr}
{\int|\psi(r,t)|^2dr}.
$$

We must prove

$$
\boxed{
\frac{d}{dt}\langle r(t)\rangle
=
\frac{
\int (d\omega/dk)|A(k)|^2dk
}{
\int |A(k)|^2dk
}
}.
$$

### 12.2 Putting the Time Evolution into the Fourier Amplitude

Define

$$
\phi(k,t)=A(k)e^{-i\omega(k)t}.
$$

Then,

$$
\psi(r,t)=\int\phi(k,t)e^{ikr}\,dk.
$$

By Parseval's relation,

$$
\int|\psi|^2dr
=2\pi\int|\phi|^2dk
=2\pi\int|A(k)|^2dk.
$$

Because $\omega(k)$ is real, $|e^{-i\omega t}|=1$, so the denominator is independent of time.

### 12.3 The Role of Position in $k$ Space

From

$$
r e^{ikr}
=\frac{1}{i}\frac{\partial}{\partial k}e^{ikr}
=-i\frac{\partial}{\partial k}e^{ikr},
$$

and assuming that $A(k)$ tends to zero sufficiently rapidly at the integration boundaries, integration by parts gives

$$
\langle r(t)\rangle
=\frac{
\int\phi^*(k,t)
i\partial_k\phi(k,t)\,dk
}{
\int|\phi(k,t)|^2dk
}.
$$

Evaluate the derivative:

$$
i\partial_k\phi
=iA'(k)e^{-i\omega t}
+t\frac{d\omega}{dk}A(k)e^{-i\omega t}.
$$

Therefore,

$$
\langle r(t)\rangle
=r_0
+t
\frac{
\int (d\omega/dk)|A(k)|^2dk
}{
\int |A(k)|^2dk
},
$$

where $r_0$ is the time-independent initial centroid. Differentiating with respect to time gives

$$
\boxed{
\frac{d}{dt}\langle r(t)\rangle
=\left\langle\frac{d\omega}{dk}\right\rangle
}.
$$

### 12.4 The Narrow-Packet Limit

If $|A(k)|^2$ is significant only near $k_0$, then $d\omega/dk$ is approximately constant across the packet:

$$
\boxed{
\frac{d\langle r\rangle}{dt}
\simeq
\left.\frac{d\omega}{dk}\right|_{k_0}
=v_g
}.
$$

Thus group velocity is not an arbitrary definition: it is indeed the propagation velocity of the centroid of a narrow wave packet. If the packet is broad and $d^2\omega/dk^2\neq0$, different $k$ components also propagate at different speeds, causing the packet to broaden as it moves.

---

<a id="sec-13"></a>

## 13. English assignment-ready solutions

### 13.1 Problem 2.2

Assume fields proportional to $\exp[i(\mathbf k\cdot\mathbf r-\omega t)]$ in a homogeneous conducting medium, with

$$
\mathbf D=\epsilon\mathbf E,
\qquad
\mathbf B=\mu\mathbf H,
\qquad
\mathbf j=\sigma\mathbf E.
$$

Faraday's and Ampère-Maxwell's equations give

$$
\mathbf k\times\mathbf E
=\frac{\omega\mu}{c}\mathbf H,
$$

and

$$
\mathbf k\times\mathbf H
=-\frac{1}{c}
(\omega\epsilon+i4\pi\sigma)\mathbf E.
$$

For the transverse electromagnetic mode, $\mathbf k\cdot\mathbf E=0$, so

$$
\mathbf k\times(\mathbf k\times\mathbf E)
=-k^2\mathbf E.
$$

Eliminating $\mathbf H$ therefore yields

$$
k^2
=\frac{\omega^2\mu\epsilon}{c^2}
\left(
1+\frac{4\pi i\sigma}{\omega\epsilon}
\right).
$$

Defining the complex refractive index $m$ by

$$
\boxed{
m^2
=\mu\epsilon
\left(
1+\frac{4\pi i\sigma}{\omega\epsilon}
\right)
},
$$

we obtain

$$
\boxed{
k^2=\frac{\omega^2m^2}{c^2}
}.
$$

Write $m=m_R+i m_I$ and choose the physical branch with $m_I>0$. The spatial factor becomes

$$
e^{ikr}
=e^{-\omega m_Ir/c}
e^{i\omega m_Rr/c}.
$$

Thus the field amplitude decreases as $e^{-\omega m_Ir/c}$, whereas the intensity decreases as

$$
I_\nu(r)
=I_\nu(0)e^{-2\omega m_Ir/c}.
$$

Comparison with $I_\nu(r)=I_\nu(0)e^{-\alpha_\nu r}$ gives

$$
\boxed{
\alpha_\nu
=\frac{2\omega}{c}\operatorname{Im}(m)
}.
$$

The factor of two appears because intensity is proportional to the squared field amplitude. With the opposite Fourier convention, the sign assigned to $\operatorname{Im}(m)$ changes, but the physical attenuation remains positive.

### 13.2 Problem 8.1

Consider a narrow ray bundle crossing a plane interface between two stationary, isotropic, lossless media. Conservation of the monochromatic power normal to the interface requires

$$
I_{\nu,1}\cos\theta_1\,d\Omega_1
=I_{\nu,2}\cos\theta_2\,d\Omega_2.
\tag{1}
$$

Snell's law is

$$
n_1\sin\theta_1=n_2\sin\theta_2.
\tag{2}
$$

Differentiating gives

$$
n_1\cos\theta_1\,d\theta_1
=n_2\cos\theta_2\,d\theta_2.
\tag{3}
$$

The tangential wave-vector direction is unchanged at an isotropic plane interface, so the incident and refracted rays remain in the same plane of incidence and $d\phi_2=d\phi_1$. Since

$$
d\Omega=\sin\theta\,d\theta\,d\phi,
$$

Eqs. (2) and (3) imply

$$
\frac{d\Omega_2}{d\Omega_1}
=\frac{n_1^2}{n_2^2}
\frac{\cos\theta_1}{\cos\theta_2}.
$$

Substitution into Eq. (1) gives

$$
I_{\nu,1}
=I_{\nu,2}\frac{n_1^2}{n_2^2},
$$

and hence

$$
\boxed{
\frac{I_{\nu,1}}{n_1^2}
=\frac{I_{\nu,2}}{n_2^2}
}.
$$

Treating a smoothly varying medium as a sequence of infinitesimal interfaces shows that $I_\nu/n_r^2$ is constant along a ray, provided there is no emission, absorption, or reflective loss.

### 13.3 Problem 8.2

Define

$$
\phi(k,t)=A(k)e^{-i\omega(k)t},
$$

so that

$$
\psi(r,t)=\int_{-\infty}^{\infty}\phi(k,t)e^{ikr}\,dk.
$$

Parseval's theorem gives

$$
\int|\psi|^2dr
=2\pi\int|A(k)|^2dk,
$$

which is independent of time because $\omega(k)$ is real. Using the Fourier-space representation of position and assuming that $A(k)$ vanishes sufficiently rapidly at the integration boundaries,

$$
\langle r(t)\rangle
=\frac{
\int\phi^* i\partial_k\phi\,dk
}{
\int|\phi|^2dk
}.
$$

Since

$$
i\partial_k\phi
=iA'(k)e^{-i\omega t}
+t\frac{d\omega}{dk}A(k)e^{-i\omega t},
$$

the centroid is

$$
\langle r(t)\rangle
=r_0
+t
\frac{
\int(d\omega/dk)|A(k)|^2dk
}{
\int|A(k)|^2dk
}.
$$

Therefore

$$
\boxed{
\frac{d}{dt}\langle r(t)\rangle
=
\frac{
\int(d\omega/dk)|A(k)|^2dk
}{
\int|A(k)|^2dk
}
}.
$$

For a narrow packet centered on $k_0$, this weighted average becomes

$$
\boxed{
\frac{d\langle r\rangle}{dt}
\simeq
\left.\frac{d\omega}{dk}\right|_{k_0}
=v_g
}.
$$

Thus the group velocity is the propagation velocity of the centroid of a narrow wave packet.

---

<a id="sec-14"></a>

## 14. Review Checklist, Dimensional Checks, and Common Confusions

### 14.1 You Should Be Able to Derive Independently

- Derive the wave equations for $\mathbf E$ and $\mathbf B$ from the vacuum Maxwell equations.
- Substitute a plane wave into the wave equation to obtain $\omega=ck$ and $v_{\rm ph}=c$.
- Derive $\mathbf j=i n_e e^2\mathbf E/(\omega m_e)$ from $m_e\dot{\mathbf v}=-e\mathbf E$.
- Absorb the electron current into the Ampère–Maxwell equation to obtain $\epsilon=1-\omega_p^2/\omega^2$.
- Derive $\omega^2=\omega_p^2+c^2k^2$ from Maxwell's equations.
- Use the dispersion relation to derive $v_{\rm ph}$, $v_g$, and $v_{\rm ph}v_g=c^2$.
- Use the high-frequency expansion of $v_g$ to obtain $\Delta t\propto\mathrm{DM}\,\nu^{-2}$.
- Complete the derivation from complex refractive index to absorption coefficient in Problem 2.2.
- Use Snell's law and energy-flux conservation to prove that $I_\nu/n_r^2$ is conserved along a ray.
- Use the Fourier-space position operator to prove that the wave-packet centroid velocity is the spectral weighted average of $d\omega/dk$.

### 14.2 Core Results Worth Memorizing

$$
\omega_p^2=\frac{4\pi n_e e^2}{m_e},
\qquad
\epsilon=1-\frac{\omega_p^2}{\omega^2},
$$

$$
\omega^2=\omega_p^2+c^2k^2,
$$

$$
v_{\rm ph}=\frac{c}{\sqrt{1-\omega_p^2/\omega^2}},
\qquad
v_g=c\sqrt{1-\frac{\omega_p^2}{\omega^2}},
$$

$$
\mathrm{DM}=\int n_e\,ds,
\qquad
\Delta t\propto\mathrm{DM}\,\nu^{-2},
$$

$$
\frac{I_\nu}{n_r^2}=\mathrm{constant\ along\ a\ ray}.
$$

### 14.3 Dimensional Checks

In Gaussian-cgs units, $e^2$ has dimensions $\mathrm{erg\,cm}=\mathrm{g\,cm^3\,s^{-2}}$, so

$$
\left[
\frac{n_e e^2}{m_e}
\right]
=\mathrm{s^{-2}},
$$

in agreement with $\omega_p^2$.

The unit of DM is

$$
[n_e ds]=\mathrm{cm^{-3}}\times\mathrm{pc},
$$

which is fundamentally a column density. Converting pc to cm gives $\mathrm{cm^{-2}}$.

The absorption coefficient

$$
\alpha_\nu=\frac{2\omega}{c}\operatorname{Im}(m)
$$

has dimensions

$$
[\omega/c]=\mathrm{cm^{-1}},
$$

as required by $I_\nu=I_{\nu,0}e^{-\alpha_\nu r}$.

### 14.4 The Most Common Points of Confusion

1. $\rho=\mathbf j=0$ means only that the region is locally source-free; it does not mean the electromagnetic field vanishes.
2. $\partial_t\rightarrow-i\omega$ follows from the chosen complex-exponential convention and is not a rule unique to quantum mechanics.
3. $\Delta\omega\Delta t\gtrsim1$ is first a classical Fourier property; quantum mechanics assigns energy and momentum interpretations through $E=\hbar\omega$ and $p=\hbar k$.
4. Dispersion means that propagation speed depends on frequency; dissipation means irreversible conversion of electromagnetic energy into heat or internal energy.
5. Evanescence when $\omega<\omega_p$ is not the same as absorption in a collisionless model.
6. $v_{\rm ph}>c$ does not mean that energy or information travels faster than light; a finite pulse propagates at $v_g<c$.
7. In Problem 2.2, $m$ is the complex refractive index, while $m_e$ is the electron mass.
8. The real part of a complex wavenumber controls phase, while the imaginary part controls spatial attenuation; the intensity exponent is twice the amplitude exponent.
9. $n_e$ is the electron number density and $n_r$ is the refractive index; they must not be confused.
10. $I_\nu$ is conserved along an ordinary vacuum ray; in a refracting medium, the correct invariant is $I_\nu/n_r^2$.
11. A planar isotropic interface changes only the polar angle $\theta$, not the azimuthal angle $\phi$ around the normal, so $d\phi_1=d\phi_2$.
12. DM is an electron column density, not a directly measured geometric distance; scattering or finite bandwidth can also affect practical arrival-time fitting.

### 14.5 Limiting Checks

- $n_e\rightarrow0$: $\omega_p\rightarrow0$, recovering the vacuum results $\epsilon=1$, $\omega=ck$, and $v_{\rm ph}=v_g=c$.
- $\omega\rightarrow\infty$: the electrons cannot respond quickly enough, $\epsilon\rightarrow1$, and the plasma effect disappears.
- $\omega\rightarrow\omega_p^+$: $k\rightarrow0$, $v_g\rightarrow0$, $v_{\rm ph}\rightarrow\infty$.
- $\omega<\omega_p$: $k$ is imaginary, leaving only an exponentially decaying field.
- $\operatorname{Im}(m)\rightarrow0$: in Problem 2.2, $\alpha_\nu\rightarrow0$, so the medium does not absorb.
- $n_1=n_2$: Problem 8.1 gives $I_{\nu,1}=I_{\nu,2}$, recovering the result for an interface without refraction.
- Narrow packet, $A(k)\rightarrow\delta(k-k_0)$: the centroid velocity in Problem 8.2 approaches $d\omega/dk|_{k_0}$.

---

<a id="sec-15"></a>

## 15. References and Citations

1. Rybicki, G. B., & Lightman, A. P., *Radiative Processes in Astrophysics*, §§2.1–2.3 and §8.1, and Problems 2.2, 8.1, and 8.2.
2. AST1440 course page: <https://www.astro.utoronto.ca/~mhvk/AST1440/>
3. AstroBaki, *Electromagnetic Plane Waves*: <https://casper.astro.berkeley.edu/astrobaki/index.php/Electromagnetic_Plane_Waves>
4. AstroBaki, *Plasma Frequency*: <https://casper.astro.berkeley.edu/astrobaki/index.php/Plasma_Frequency>

The $4.15\,\mathrm{ms}$ used here is calculated from modern physical constants; practical pulsar-timing work also often uses the historically defined dispersion constant to preserve comparability of DM values across different eras.
