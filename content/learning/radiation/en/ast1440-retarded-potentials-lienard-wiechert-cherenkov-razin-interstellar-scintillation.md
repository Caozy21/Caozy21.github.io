---
title: "AST1440: Retarded Potentials, Liénard–Wiechert Fields, Cherenkov and Razin Effects, and Interstellar Scintillation"
description: "A detailed derivation of retarded potentials and the Liénard–Wiechert fields from Maxwell’s equations and the Lorenz gauge, followed by Cherenkov and Razin effects in media, plasma phase screens, and a complete binary-pulsar scintillation resolution calculation."
date: "2026-10-08"
tags: ["AST1440","Retarded potentials","Lienard-Wiechert","Cherenkov radiation","Razin effect","Scintillation"]
order: 9
draft: false
sourceHash: 21e02249faff8352656896c2e2c76f78bd2eb289cb946982f0029ed6bc07a82e
translation: "AI-assisted English translation"
---

# AST1440: Retarded Potentials, Liénard–Wiechert Fields, Cherenkov and Razin Effects, and Interstellar Scintillation

> Course: AST1440 — Radiation  
> Textbook: Rybicki & Lightman, *Radiative Processes in Astrophysics* (RL), §2.5 (printed pp. 69–71), §§3.1–3.2 (printed pp. 77–82), and §8.3 (printed pp. 232–235); see §8.1 for background on plasma refraction.  
> Compiled: October 8, 2026.  
> These notes organize every follow-up question from the assigned reading and discussion in physical order: Faraday's law, electromagnetic potentials, gauge freedom, the Lorenz gauge, wave equations for the potentials, the physical meaning of retarded potentials, how a moving point charge produces the Liénard–Wiechert potentials, the Jacobian origin of $1/\kappa$, the distinction between the velocity and radiation fields, the medium modification of $\kappa$, the geometry and coherence condition of the Cherenkov cone, the Lorentz factor and beaming angle, the Razin effect, and the resolution obtained by treating an interstellar plasma screen as an interferometer.

## Contents

1. [Logical Road Map for This Reading](#1-logical-road-map-for-this-reading)
2. [Notation, Unit System, Phase Convention, and Assumptions](#2-notation-unit-system-phase-convention-and-assumptions)
3. [From Maxwell’s Equations to Electromagnetic Potentials](#3-from-maxwells-equations-to-electromagnetic-potentials)
4. [Gauge Freedom and the Lorenz Gauge](#4-gauge-freedom-and-the-lorenz-gauge)
5. [Deriving the Wave Equations for the Potentials](#5-deriving-the-wave-equations-for-the-potentials)
6. [Retarded Potentials: Why the Field Depends on the Past](#6-retarded-potentials-why-the-field-depends-on-the-past)
7. [A Moving Point Charge and the Liénard–Wiechert Potentials](#7-a-moving-point-charge-and-the-liénardwiechert-potentials)
8. [The Velocity Field and the Radiation Field](#8-the-velocity-field-and-the-radiation-field)
9. [Why a Medium Changes $\kappa$ to $1-\beta n_r\cos\theta$](#9-why-a-medium-changes-kappa-to-1-beta-n_rcostheta)
10. [Wavefront Geometry and the Coherence Condition of the Cherenkov Cone](#10-wavefront-geometry-and-the-coherence-condition-of-the-cherenkov-cone)
11. [The Lorentz Factor, Relativistic Beaming, and $\theta_b$](#11-the-lorentz-factor-relativistic-beaming-and-theta_b)
12. [The Razin Effect in a Cold Plasma](#12-the-razin-effect-in-a-cold-plasma)
13. [Plasma Phase Screens, Phase Accumulation, and Deflection](#13-plasma-phase-screens-phase-accumulation-and-deflection)
14. [Binary-Pulsar Scintillation Problem: Complete Numerical Derivation](#14-binary-pulsar-scintillation-problem-complete-numerical-derivation)
15. [Dimensional Checks, Limiting Cases, and Common Confusions](#15-dimensional-checks-limiting-cases-and-common-confusions)
16. [English assignment-ready solution](#16-english-assignment-ready-solution)
17. [Review Checklist and References](#17-review-checklist-and-references)

---

## 1. Logical Road Map for This Reading

### 1.1 Textbook material

The assigned sections may look disconnected, but they form one continuous chain:

$$
\boxed{
\text{Maxwell's equations}
\longrightarrow
(\phi,\mathbf A)
\longrightarrow
\text{retarded potentials}
\longrightarrow
\text{Liénard--Wiechert fields}
\longrightarrow
\text{radiation from a moving charge in a medium}
}.
$$

Specifically:

1. RL §2.5 expresses $\mathbf E,\mathbf B$ in terms of the scalar potential $\phi$ and vector potential $\mathbf A$, and introduces retarded potentials.
2. RL §3.1 substitutes the charge and current densities $\rho,\mathbf j$ of a moving point charge into the retarded potentials to obtain the Liénard–Wiechert potentials.
3. RL §3.2 differentiates the potentials and separates the electric field into an $R^{-2}$ velocity field and an $R^{-1}$ radiation field.
4. RL §8.3 modifies the propagation time and phase condition by the refractive index $n_r$, leading to Cherenkov radiation and the Razin effect.

### 1.2 The scintillation branch

Interstellar scintillation is another branch of the same physics:

$$
\boxed{
n_e(\mathbf r)
\longrightarrow
n_r(\mathbf r)
\longrightarrow
\Delta\Phi(\mathbf r_\perp)
\longrightarrow
\boldsymbol\alpha
\longrightarrow
\text{multipath interference}
\longrightarrow
\text{scintillation}
}.
$$

The problem then treats the plasma lenslets that can contribute to propagation as an interstellar interferometer and estimates its spatial resolution at the pulsar’s emission region.

### 1.3 Most important results

$$
\boxed{
\phi
=\left[\frac{q}{\kappa R}\right]_{\rm ret},
\qquad
\mathbf A
=\left[\frac{q\mathbf u}{c\kappa R}\right]_{\rm ret},
\qquad
\kappa=1-\mathbf n\cdot\boldsymbol\beta
}
$$

$$
\boxed{
\mathbf E_{\rm vel}\propto R^{-2},
\qquad
\mathbf E_{\rm rad}\propto R^{-1}
}
$$

$$
\boxed{
\kappa_{\rm med}=1-\beta n_r\cos\theta
}
$$

$$
\boxed{
\cos\theta_{\rm C}=\frac{1}{\beta n_r}
}
$$

$$
\boxed{
\theta_b
\sim
\sqrt{\frac{1}{\gamma^2}+\frac{\omega_p^2}{\omega^2}}
}
$$

$$
\boxed{
\Delta\Phi=-r_e\lambda N_e,
\qquad
\boldsymbol\alpha
=-\frac{r_e\lambda^2}{2\pi}\nabla_\perp N_e
}.
$$

---

## 2. Notation, Unit System, Phase Convention, and Assumptions

### 2.1 Symbol table

| Symbol | Meaning | Notes |
|---|---|---|
| $\mathbf r,t$ | Observation event | Position and time at which the field is evaluated |
| $\mathbf r',t'$ | Source event | Source position and time inside the integral |
| $\mathbf r_0(t)$ | Point-charge trajectory | $\mathbf u=d\mathbf r_0/dt$ |
| $\mathbf R$ | Vector from source to observer | $\mathbf R=\mathbf r-\mathbf r_0(t_{\rm ret})$ |
| $R$ | Source-observer distance | $R=|\mathbf R|$ |
| $\mathbf n$ | Unit vector from source to observer | $\mathbf n=\mathbf R/R$ |
| $\mathbf u,\boldsymbol\beta$ | Particle velocity and its dimensionless form | $\boldsymbol\beta=\mathbf u/c$ |
| $\gamma$ | Lorentz factor | $\gamma=(1-\beta^2)^{-1/2}$ |
| $\kappa$ | Retarded-time Jacobian | $1-\mathbf n\cdot\boldsymbol\beta$ |
| $\phi,\mathbf A$ | Scalar and vector potentials | Potential formulas use Gaussian-cgs |
| $\Phi$ | Electromagnetic-wave phase | Distinct from the scalar potential $\phi$ |
| $n_e$ | Electron number density | Usually measured in $\mathrm{cm^{-3}}$ |
| $N_e$ | Electron column density | $N_e=\int n_e\,dl$ |
| $n_r$ | Refractive index | Do not confuse with $n_e$ |
| $\omega_p$ | Plasma angular frequency | In cgs, $\omega_p^2=4\pi e^2n_e/m_e$ |
| $r_e$ | Classical electron radius | $e^2/(m_ec^2)$ in cgs |
| $\boldsymbol\alpha$ | Plasma deflection angle | Thin-screen, small-angle approximation |

### 2.2 Unit system

These sections of RL use Gaussian-cgs units:

$$
\nabla\cdot\mathbf E=4\pi\rho,
$$

$$
\nabla\times\mathbf B
=\frac{4\pi}{c}\mathbf j
+\frac{1}{c}\frac{\partial\mathbf E}{\partial t}.
$$

The corresponding SI equations contain $\epsilon_0,\mu_0$; numerical values of $e,B,\rho,\mathbf j$ must not be mixed between the two unit systems.

### 2.3 Wave-phase convention

We adopt

$$
e^{i(\mathbf k\cdot\mathbf r-\omega t)}.
$$

At fixed time, propagation through a small distance $dl$ gives

$$
d\Phi=k\,dl.
$$

The extra phase relative to vacuum is defined as

$$
\Delta\Phi=\Phi_{\rm medium}-\Phi_{\rm vacuum}.
$$

### 2.4 Medium approximation

The simple substitution used in RL §8.3 assumes:

- a homogeneous, isotropic medium;
- magnetic permeability approximately equal to unity;
- near the frequency of interest, $n_r$ can be treated as a prescribed phase refractive index;
- the Cherenkov condition is derived by matching phases at a fixed frequency.

A real plasma is dispersive, so strict time-domain information propagation cannot be described entirely by the speed $c/n_r$; nevertheless, the fixed-frequency phase condition still uses $n_r(\omega)$.

---

## 3. From Maxwell’s Equations to Electromagnetic Potentials

### 3.1 Faraday’s law

In Gaussian-cgs units, Faraday’s law is

$$
\boxed{
\nabla\times\mathbf E
=-\frac{1}{c}\frac{\partial\mathbf B}{\partial t}
}.
$$

Its integral form is

$$
\boxed{
\oint_C\mathbf E\cdot d\boldsymbol\ell
=-\frac{1}{c}\frac{d\Phi_B}{dt}
},
$$

where

$$
\Phi_B=\int_S\mathbf B\cdot d\mathbf S.
$$

It says that a time-varying magnetic flux produces a circulating electric field. The minus sign expresses Lenz’s law: the induced effect opposes the change in the original magnetic flux.

### 3.2 Defining the vector potential from $\nabla\cdot\mathbf B=0$

Because

$$
\nabla\cdot\mathbf B=0,
$$

and the divergence of any curl vanishes identically, we may write

$$
\boxed{
\mathbf B=\nabla\times\mathbf A
}.
$$

Substituting this into Faraday’s law gives

$$
\nabla\times\mathbf E
=-\frac{1}{c}
\frac{\partial}{\partial t}
(\nabla\times\mathbf A).
$$

The spatial curl and time derivative commute:

$$
\nabla\times
\left(
\mathbf E+\frac{1}{c}\frac{\partial\mathbf A}{\partial t}
\right)=0.
$$

A curl-free vector can be written as the gradient of a scalar, so we define the scalar potential $\phi$ by

$$
\boxed{
\mathbf E
=-\nabla\phi
-\frac{1}{c}\frac{\partial\mathbf A}{\partial t}
}.
$$

In the static limit, $\partial\mathbf A/\partial t=0$, recovering

$$
\mathbf E=-\nabla\phi.
$$

---

## 4. Gauge Freedom and the Lorenz Gauge

### 4.1 The potentials are not unique

For any function $\psi(\mathbf r,t)$, make the transformation

$$
\boxed{
\mathbf A'
=\mathbf A+\nabla\psi
}
$$

and

$$
\boxed{
\phi'
=\phi-\frac{1}{c}\frac{\partial\psi}{\partial t}
}.
$$

The magnetic field is unchanged because

$$
\nabla\times(\nabla\psi)=0.
$$

The two new terms in the electric field also cancel, so

$$
\mathbf E'=\mathbf E,
\qquad
\mathbf B'=\mathbf B.
$$

This is gauge freedom: different choices of $\phi,\mathbf A$ can describe the same observable $\mathbf E,\mathbf B$.

### 4.2 Lorenz gauge

The Lorenz gauge chooses

$$
\boxed{
\nabla\cdot\mathbf A
+\frac{1}{c}\frac{\partial\phi}{\partial t}
=0
}
\qquad\text{(Gaussian-cgs)}.
$$

It is not a new physical law. It exploits the non-uniqueness of the potentials to select a representation that makes the equations simplest, decoupling the equations for $\phi$ and $\mathbf A$ into standard wave equations.

The name is Lorenz gauge, after Ludvig Lorenz; he is not Hendrik Lorentz of the Lorentz transformation.

---

## 5. Deriving the Wave Equations for the Potentials

### 5.1 Equation for the scalar potential

Start from Gauss’s law,

$$
\nabla\cdot\mathbf E=4\pi\rho
$$

and substitute

$$
\mathbf E=-\nabla\phi-\frac{1}{c}\frac{\partial\mathbf A}{\partial t}.
$$

This gives

$$
-\nabla^2\phi
-\frac{1}{c}
\frac{\partial}{\partial t}
(\nabla\cdot\mathbf A)
=4\pi\rho.
$$

The Lorenz gauge gives

$$
\nabla\cdot\mathbf A
=-\frac{1}{c}\frac{\partial\phi}{\partial t}.
$$

Therefore

$$
-\nabla^2\phi
+\frac{1}{c^2}\frac{\partial^2\phi}{\partial t^2}
=4\pi\rho.
$$

Multiplying the entire equation by $-1$ gives

$$
\boxed{
\nabla^2\phi
-\frac{1}{c^2}\frac{\partial^2\phi}{\partial t^2}
=-4\pi\rho
}.
$$

### 5.2 Equation for the vector potential

Start from the Ampère–Maxwell law,

$$
\nabla\times\mathbf B
=\frac{4\pi}{c}\mathbf j
+\frac{1}{c}\frac{\partial\mathbf E}{\partial t}
$$

Substitute $\mathbf B=\nabla\times\mathbf A$ and use

$$
\nabla\times(\nabla\times\mathbf A)
=\nabla(\nabla\cdot\mathbf A)-\nabla^2\mathbf A.
$$

The time-derivative term on the right is

$$
\frac{1}{c}\frac{\partial\mathbf E}{\partial t}
=-\frac{1}{c}
\nabla\frac{\partial\phi}{\partial t}
-\frac{1}{c^2}
\frac{\partial^2\mathbf A}{\partial t^2}.
$$

Thus

$$
\nabla(\nabla\cdot\mathbf A)-\nabla^2\mathbf A
=
\frac{4\pi}{c}\mathbf j
-\frac{1}{c}\nabla\frac{\partial\phi}{\partial t}
-\frac{1}{c^2}\frac{\partial^2\mathbf A}{\partial t^2}.
$$

By the Lorenz gauge,

$$
\nabla(\nabla\cdot\mathbf A)
=-\frac{1}{c}\nabla\frac{\partial\phi}{\partial t}.
$$

The identical cross terms on both sides cancel, leaving

$$
\boxed{
\nabla^2\mathbf A
-\frac{1}{c^2}\frac{\partial^2\mathbf A}{\partial t^2}
=-\frac{4\pi}{c}\mathbf j
}.
$$

### 5.3 Physical meaning

Both left-hand sides contain the wave operator

$$
\Box
\equiv
\nabla^2-\frac{1}{c^2}\frac{\partial^2}{\partial t^2}.
$$

Therefore

$$
\Box\phi=-4\pi\rho,
\qquad
\Box\mathbf A=-\frac{4\pi}{c}\mathbf j.
$$

Changes in the sources do not propagate instantaneously through space; they propagate outward through the potentials at speed $c$.

---

## 6. Retarded Potentials: Why the Field Depends on the Past

### 6.1 Field point, source point, and retarded time

Let

- $\mathbf r$: observation position;
- $\mathbf r'$: source position;
- $R=|\mathbf r-\mathbf r'|$: their separation.

Traversing the distance $R$ takes a time $R/c$, so the information received at observation time $t$ comes from

$$
\boxed{
t_{\rm ret}
=t-\frac{R}{c}
}.
$$

### 6.2 Retarded potentials

The causal solutions of the wave equations are

$$
\boxed{
\phi(\mathbf r,t)
=
\int
\frac{
\rho(\mathbf r',t_{\rm ret})
}{|\mathbf r-\mathbf r'|}
\,d^3r'
}
$$

and

$$
\boxed{
\mathbf A(\mathbf r,t)
=
\frac{1}{c}
\int
\frac{
\mathbf j(\mathbf r',t_{\rm ret})
}{|\mathbf r-\mathbf r'|}
\,d^3r'
}.
$$

Each source point has its own retarded time:

$$
t_{\rm ret}(\mathbf r')
=t-\frac{|\mathbf r-\mathbf r'|}{c}.
$$

The integral therefore sums the states of the source at different past times.

### 6.3 Why $1/R$ appears

In three dimensions a disturbance spreads over a spherical surface. Its area grows as $R^2$, so the field or potential amplitude decays as $1/R$, while the corresponding energy flux usually decays as $1/R^2$.

### 6.4 The retarded time of a moving point source is implicit

If the source itself moves,

$$
\mathbf r_0=\mathbf r_0(t_{\rm ret}),
$$

then

$$
\boxed{
t-t_{\rm ret}
=
\frac{
|\mathbf r-\mathbf r_0(t_{\rm ret})|
}{c}
}.
$$

The right-hand side also contains $t_{\rm ret}$. Geometrically, the retarded event is the intersection of the particle worldline with the past light cone of the observation event.

---

## 7. A Moving Point Charge and the Liénard–Wiechert Potentials

### 7.1 Sources of a point charge

A point charge at $\mathbf r_0(t')$ has

$$
\boxed{
\rho(\mathbf r',t')
=q\,\delta^3[\mathbf r'-\mathbf r_0(t')]
}
$$

and

$$
\boxed{
\mathbf j(\mathbf r',t')
=q\mathbf u(t')\,
\delta^3[\mathbf r'-\mathbf r_0(t')]
}.
$$

### 7.2 Writing the retardation condition as a time delta function

The scalar potential can be written as

$$
\phi(\mathbf r,t)
=
\int d^3r'\int dt'\,
\frac{\rho(\mathbf r',t')}{R}
\delta\left(
t'-t+\frac{R}{c}
\right).
$$

After substituting the point-charge density $\rho$, the spatial delta function sets

$$
\mathbf r'=\mathbf r_0(t'),
$$

so

$$
\phi(\mathbf r,t)
=q\int dt'\,
\frac{1}{R(t')}
\delta[f(t')],
$$

where

$$
f(t')
=t'-t+\frac{R(t')}{c}.
$$

### 7.3 The $1/\kappa$ Jacobian

The retarded time is the root of $f(t_{\rm ret})=0$. Using

$$
\delta[f(t')]
=
\frac{
\delta(t'-t_{\rm ret})
}{
|f'(t_{\rm ret})|
},
$$

calculate

$$
f'(t')
=1+\frac{1}{c}\frac{dR}{dt'}.
$$

Because

$$
\mathbf R(t')=\mathbf r-\mathbf r_0(t'),
$$

we have

$$
\frac{dR}{dt'}
=-\mathbf n\cdot\mathbf u.
$$

Therefore

$$
\boxed{
f'(t')
=1-\mathbf n\cdot\frac{\mathbf u}{c}
=1-\mathbf n\cdot\boldsymbol\beta
\equiv\kappa
}.
$$

Thus

$$
\boxed{
\phi(\mathbf r,t)
=\left[\frac{q}{\kappa R}\right]_{\rm ret}
}
$$

and

$$
\boxed{
\mathbf A(\mathbf r,t)
=
\left[
\frac{q\mathbf u}{c\kappa R}
\right]_{\rm ret}
}.
$$

The brackets mean that $R,\mathbf n,\mathbf u,\boldsymbol\beta,\kappa$ are all evaluated at $t_{\rm ret}$.

### 7.4 The arrival-time meaning of $\kappa$

Suppose the source advances along the observer’s direction during $dt_{\rm emit}$ by

$$
u\cos\theta\,dt_{\rm emit},
$$

The later signal travels that much less distance, so

$$
dt_{\rm arr}
=
(1-\beta\cos\theta)dt_{\rm emit}.
$$

Hence

$$
\boxed{
\kappa
=
\frac{dt_{\rm arr}}{dt_{\rm emit}}
}.
$$

When the particle moves rapidly toward the observer, $\kappa$ becomes small and electromagnetic information emitted successively is compressed in arrival time.

---

## 8. The Velocity Field and the Radiation Field

Differentiating the Liénard–Wiechert potentials gives

$$
\boxed{
\begin{aligned}
\mathbf E(\mathbf r,t)
={}&
q\left[
\frac{
(\mathbf n-\boldsymbol\beta)(1-\beta^2)
}{
\kappa^3R^2
}
\right]_{\rm ret}
\\
&+
\frac{q}{c}
\left[
\frac{
\mathbf n\times
[(\mathbf n-\boldsymbol\beta)\times\dot{\boldsymbol\beta}]
}{
\kappa^3R
}
\right]_{\rm ret}.
\end{aligned}
}
$$

and

$$
\boxed{
\mathbf B=[\mathbf n\times\mathbf E]_{\rm ret}.
}
$$

### 8.1 First term: velocity field

Define

$$
\mathbf E_{\rm vel}
=
q\left[
\frac{
(\mathbf n-\boldsymbol\beta)(1-\beta^2)
}{
\kappa^3R^2
}
\right]_{\rm ret}.
$$

It:

- depends on position and velocity, but not on $\dot{\boldsymbol\beta}$;
- remains present for uniform motion;
- decays with distance as $R^{-2}$;
- reduces to the Coulomb field $q\mathbf n/R^2$ when $\boldsymbol\beta=0$.

It is therefore the moving Coulomb field, also called the velocity field or near field.

### 8.2 Second term: acceleration/radiation field

Define

$$
\mathbf E_{\rm rad}
=
\frac{q}{c}
\left[
\frac{
\mathbf n\times
[(\mathbf n-\boldsymbol\beta)\times\dot{\boldsymbol\beta}]
}{
\kappa^3R
}
\right]_{\rm ret}.
$$

It:

- is proportional to $\dot{\boldsymbol\beta}=\mathbf a/c$;
- vanishes for uniform motion;
- decays with distance as $R^{-1}$;
- satisfies $\mathbf n\cdot\mathbf E_{\rm rad}=0$ because of the outer cross product, so it is transverse.

### 8.3 Why only the second term carries finite power to infinity

The radiation field obeys

$$
E_{\rm rad}\propto R^{-1},
\qquad
S_{\rm rad}\propto E_{\rm rad}^2\propto R^{-2}.
$$

The power through a sphere of radius $R$ is

$$
P_{\rm rad}\sim4\pi R^2S_{\rm rad}\sim\text{constant}.
$$

The velocity field, in contrast, obeys

$$
E_{\rm vel}\propto R^{-2},
\qquad
S_{\rm vel}\propto R^{-4},
$$

so

$$
P_{\rm vel}\propto R^{-2}\longrightarrow0.
$$

A uniformly moving charge can therefore have electric and magnetic fields, but it does not continuously radiate energy to infinity.

### 8.4 Differential origin of the two terms

Differentiating the explicit $1/R$ in the potentials,

$$
\nabla(1/R)\sim R^{-2},
$$

produces the velocity field.

Differentiating the velocity evaluated at the retarded time,

$$
\nabla\boldsymbol\beta(t_{\rm ret})
=
\dot{\boldsymbol\beta}\,
\nabla t_{\rm ret},
$$

while retaining the external $1/R$, produces the radiation field.

---

## 9. Why a Medium Changes $\kappa$ to $1-\beta n_r\cos\theta$

### 9.1 Modified propagation time

The vacuum propagation time is

$$
\frac{R}{c}.
$$

In a homogeneous medium with refractive index $n_r$, the phase velocity is

$$
v_{\rm ph}=\frac{c}{n_r},
$$

so the fixed-frequency phase propagation time is

$$
\frac{R}{v_{\rm ph}}
=\frac{n_rR}{c}.
$$

The retardation condition accordingly becomes

$$
f_{\rm med}(t')
=t'-t+\frac{n_rR(t')}{c}.
$$

Differentiating gives

$$
\frac{df_{\rm med}}{dt'}
=
1+\frac{n_r}{c}\frac{dR}{dt'}.
$$

Because

$$
\frac{dR}{dt'}=-u\cos\theta,
$$

we obtain

$$
\boxed{
\kappa_{\rm med}
=1-\beta n_r\cos\theta
}.
$$

### 9.2 Arrival-time compression

Equivalently, one can write directly

$$
\boxed{
dt_{\rm arr}
=
(1-\beta n_r\cos\theta)
dt_{\rm emit}
}.
$$

In a medium, $\kappa_{\rm med}$ still measures the compression between emission-time and arrival-time intervals.

---

## 10. Wavefront Geometry and the Coherence Condition of the Cherenkov Cone

### 10.1 Wavefront envelope

Consider a particle moving uniformly at speed $v$ in a medium whose phase velocity is

$$
u=\frac{c}{n_r}.
$$

The particle perturbs the medium at every past position. At time $T$, a spherical wave emitted from the position occupied at time $t'$ has radius

$$
r_{\rm wave}=u(T-t').
$$

If $v<u$, earlier wavefronts always stay ahead of the particle and the different spheres do not form a trailing conical envelope.

If

$$
v>u,
$$

the particle moves outside the wavefronts it created earlier. All spherical wavefronts share a common tangent in a two-dimensional cross-section and form a cone in three dimensions. This cone is the envelope of many spherical wavefronts, not a single wavefront.

### 10.2 Cherenkov angle

During a time $T$:

$$
\text{particle displacement}=vT,
\qquad
\text{wavefront radius}=uT.
$$

The radiation direction is perpendicular to the conical wavefront, so the Cherenkov angle $\theta_{\rm C}$ satisfies

$$
\cos\theta_{\rm C}
=\frac{uT}{vT}
=\frac{u}{v}.
$$

Substituting $u=c/n_r$ and $v=\beta c$ gives

$$
\boxed{
\cos\theta_{\rm C}
=\frac{1}{\beta n_r}
}.
$$

A real angle exists only if

$$
\boxed{
\beta n_r\ge1
\quad\Longleftrightarrow\quad
v\ge\frac{c}{n_r}
}.
$$

The particle may still have $v<c$; it need only exceed the phase velocity in the medium, not the vacuum speed of light.

### 10.3 Distinction from the Mach-cone angle

If $\mu$ is the angle between the cone surface itself and the particle trajectory, then

$$
\sin\mu=\frac{u}{v}.
$$

The Cherenkov angle is instead the angle between the radiation-propagation direction and the velocity. Because the radiation direction is perpendicular to the cone surface,

$$
\theta_{\rm C}=90^\circ-\mu.
$$

Therefore

$$
\cos\theta_{\rm C}=\sin\mu=\frac{u}{v}.
$$

### 10.4 Phase-coherence condition

For two source positions separated by $dt'$, the phase difference along direction $\mathbf n$ is

$$
d\Phi
=\omega\,dt'
-kv\cos\theta\,dt'.
$$

In the medium,

$$
k=\frac{n_r\omega}{c},
$$

so

$$
\boxed{
d\Phi
=
\omega
(1-\beta n_r\cos\theta)
dt'
}.
$$

At the Cherenkov angle,

$$
1-\beta n_r\cos\theta_{\rm C}=0,
$$

and therefore

$$
d\Phi=0.
$$

Waves excited by the particle at different times and positions arrive in phase along this direction and add coherently. This is the fundamental reason for enhanced radiation on the cone.

---

## 11. The Lorentz Factor, Relativistic Beaming, and $\theta_b$

### 11.1 Lorentz factor

$$
\boxed{
\gamma
=\frac{1}{\sqrt{1-\beta^2}},
\qquad
\beta=\frac{v}{c}
}.
$$

It measures how relativistic the motion is:

$$
E=\gamma mc^2,
\qquad
\mathbf p=\gamma m\mathbf v.
$$

When $\gamma\gg1$, the particle speed is extremely close to $c$. From

$$
\beta=\sqrt{1-\frac{1}{\gamma^2}}
$$

we obtain

$$
\boxed{
\beta\simeq1-\frac{1}{2\gamma^2}
}.
$$

### 11.2 Beaming angle in vacuum

At small angles,

$$
\cos\theta\simeq1-\frac{\theta^2}{2}.
$$

Therefore

$$
\kappa
=1-\beta\cos\theta
\simeq
\frac{1}{2\gamma^2}
+\frac{\theta^2}{2}.
$$

When

$$
\theta^2\sim\frac{1}{\gamma^2}
$$

the angular term begins to change the radiation intensity appreciably. This motivates the characteristic beaming half-angle

$$
\boxed{
\theta_b\sim\frac{1}{\gamma}
}.
$$

$\theta_b$ is not a hard boundary where radiation suddenly ends, but the characteristic width of the angular distribution.

### 11.3 Do not confuse $\theta_b$ with $\theta_{\rm C}$

- $\theta_b$: the angular width over which ordinary relativistic radiation is concentrated around the velocity direction.
- $\theta_{\rm C}$: the particular angle at which Cherenkov radiation is coherently enhanced.

---

## 12. The Razin Effect in a Cold Plasma

### 12.1 Refractive index of a cold plasma

A cold, unmagnetized plasma satisfies

$$
\omega^2=\omega_p^2+c^2k^2,
$$

so

$$
\boxed{
n_r^2
=1-\frac{\omega_p^2}{\omega^2}
}.
$$

When $\omega>\omega_p$,

$$
n_r<1.
$$

Therefore

$$
\frac{c}{n_r}>c,
$$

An ordinary particle cannot satisfy $v>c/n_r$, so ordinary Cherenkov radiation does not occur in this cold plasma.

### 12.2 Beaming angle in a medium

The characteristic angle in a medium can be written as

$$
\boxed{
\theta_b
\sim
\sqrt{1-n_r^2\beta^2}
}.
$$

Substituting

$$
n_r^2=1-\frac{\omega_p^2}{\omega^2}
$$

gives

$$
1-n_r^2\beta^2
=
1-\beta^2
+\beta^2\frac{\omega_p^2}{\omega^2}.
$$

For $\beta\simeq1$,

$$
\boxed{
\theta_b
\sim
\sqrt{
\frac{1}{\gamma^2}
+\frac{\omega_p^2}{\omega^2}
}
}.
$$

At high frequencies,

$$
\frac{\omega_p}{\omega}\ll\frac{1}{\gamma},
$$

the medium has little effect and $\theta_b\sim1/\gamma$.

At low frequencies,

$$
\frac{\omega_p}{\omega}\gg\frac{1}{\gamma},
$$

the medium term dominates and $\theta_b\sim\omega_p/\omega$. The originally narrow, intense relativistic beaming is disrupted, suppressing low-frequency synchrotron radiation.

The transition frequency satisfies

$$
\boxed{
\omega\sim\gamma\omega_p
}.
$$

This is the central scale of the Razin effect.

---

## 13. Plasma Phase Screens, Phase Accumulation, and Deflection

### 13.1 From refractive index to phase

In the medium,

$$
k=\frac{n_r\omega}{c}.
$$

The extra phase relative to vacuum is

$$
\boxed{
\Delta\Phi
=
\frac{\omega}{c}
\int(n_r-1)\,dl
}.
$$

For $\omega\gg\omega_p$,

$$
n_r
=
\sqrt{1-\frac{\omega_p^2}{\omega^2}}
\simeq
1-\frac{\omega_p^2}{2\omega^2}.
$$

Therefore

$$
\Delta\Phi
=
-\frac{1}{2c\omega}
\int\omega_p^2\,dl.
$$

In Gaussian-cgs units,

$$
\omega_p^2=\frac{4\pi e^2n_e}{m_e}.
$$

Define

$$
N_e=\int n_e\,dl,
$$

Then

$$
\Delta\Phi
=-\frac{2\pi e^2}{m_ec\omega}N_e.
$$

Using

$$
r_e=\frac{e^2}{m_ec^2},
\qquad
\lambda=\frac{2\pi c}{\omega},
$$

we obtain

$$
\boxed{
\Delta\Phi=-r_e\lambda N_e
}.
$$

The minus sign reflects $n_r<1$ in a cold plasma: over a fixed geometric path, the accumulated spatial phase is smaller than in vacuum. Phase advance and pulse group delay are not contradictory—the phase velocity exceeds $c$, whereas the group velocity is below $c$.

### 13.2 From phase gradient to deflection angle

A thin phase screen produces a transverse wave vector

$$
\mathbf k_\perp=\nabla_\perp\Phi.
$$

At small angles,

$$
\boldsymbol\alpha
\simeq
\frac{\mathbf k_\perp}{k}
=
\frac{\lambda}{2\pi}
\nabla_\perp\Phi.
$$

Substituting $\Delta\Phi=-r_e\lambda N_e$ gives

$$
\boxed{
\boldsymbol\alpha
=
-\frac{r_e\lambda^2}{2\pi}
\nabla_\perp N_e
}.
$$

Thus

$$
\alpha\propto\lambda^2.
$$

A location with larger electron column density has a smaller refractive index, so an overdense plasma structure usually acts as a diverging lens.

---

## 14. Binary-Pulsar Scintillation Problem: Complete Numerical Derivation

### 14.1 Given quantities

$$
\lambda=12\,\mathrm{cm},
$$

$$
\left|\nabla_\perp N_e\right|
=10^3\,\mathrm{cm^{-2}\,cm^{-1}}
=10^3\,\mathrm{cm^{-3}},
$$

$$
d_{\rm psr}=700\,\mathrm{pc},
$$

The screen lies halfway to the pulsar, so

$$
D_l=D_{ls}=350\,\mathrm{pc}.
$$

The classical electron radius is

$$
r_e=2.818\times10^{-13}\,\mathrm{cm}.
$$

### 14.2 Maximum deflection angle

$$
\alpha_{\max}
=
\frac{r_e\lambda^2}{2\pi}
\left|\nabla_\perp N_e\right|.
$$

Substitution gives

$$
\alpha_{\max}
=
\frac{
(2.818\times10^{-13})
(12)^2
(10^3)
}{2\pi}.
$$

Therefore

$$
\boxed{
\alpha_{\max}
\simeq
6.46\times10^{-9}\,\mathrm{rad}
}.
$$

Using $1\,\mathrm{rad}=206265\,\mathrm{arcsec}$ gives

$$
\boxed{
\alpha_{\max}
\simeq
1.33\,\mathrm{mas}
}.
$$

### 14.3 Range of lenslets that can contribute to imaging

The classroom order-of-magnitude estimate treats the incident wave as locally plane-parallel:

$$
b_{\max}\simeq D_l\alpha_{\max}.
$$

Using

$$
1\,\mathrm{pc}=206265\,\mathrm{AU},
$$

gives

$$
\boxed{
b_{\max}
\simeq
0.47\,\mathrm{AU}
}.
$$

Lenslets can lie on either side of the line of sight, so the effective maximum baseline is approximately

$$
B\simeq2b_{\max},
$$

that is,

$$
\boxed{
B\simeq0.93\,\mathrm{AU}
}.
$$

### 14.4 More exact finite-distance geometry

If both the source-to-screen and screen-to-observer slopes are included, the required deflection is

$$
\alpha_{\rm req}
\simeq
\frac{b}{D_l}
+\frac{b}{D_{ls}}.
$$

Therefore

$$
b_{\max}
=
\alpha
\frac{D_lD_{ls}}{D_l+D_{ls}}.
$$

A midpoint screen gives

$$
b_{\max}\simeq0.23\,\mathrm{AU}.
$$

This is half the classroom result $D_l\alpha$. However, if the source-to-screen distance $D_{ls}$ is also used to convert the strict baseline into a source-plane scale, the final physical resolution agrees with the classroom result. The expected answer is usually the classroom estimate $b_{\max}\simeq0.47\,\mathrm{AU}$ and $B\simeq0.93\,\mathrm{AU}$.

### 14.5 Interferometric angular resolution

Ignoring an order-unity aperture factor,

$$
\theta_{\rm res}
\sim
\frac{\lambda}{B}.
$$

Converting $B=0.93\,\mathrm{AU}$ to centimeters gives

$$
B\simeq1.40\times10^{13}\,\mathrm{cm}.
$$

so

$$
\theta_{\rm res}
\simeq
8.6\times10^{-13}\,\mathrm{rad}.
$$

Using

$$
1\,\mathrm{rad}
=2.06265\times10^{11}\,\mu\mathrm{as},
$$

gives

$$
\boxed{
\theta_{\rm res}
\simeq
0.18\,\mu\mathrm{as}
}.
$$

### 14.6 Spatial resolution at the pulsar

$$
\ell_{\rm res}
=D_{\rm psr}\theta_{\rm res}.
$$

Using

$$
1\,\mu\mathrm{as}
\text{ at }1\,\mathrm{pc}
\text{ corresponds to }10^{-6}\,\mathrm{AU},
$$

gives

$$
\ell_{\rm res}
\simeq
0.18\times700\times10^{-6}\,\mathrm{AU}.
$$

Therefore

$$
\boxed{
\ell_{\rm res}
\simeq
1.24\times10^{-4}\,\mathrm{AU}
}
$$

$$
\boxed{
\ell_{\rm res}
\simeq
1.86\times10^4\,\mathrm{km}
}
$$

$$
\boxed{
\ell_{\rm res}
\simeq
0.062\,\mathrm{lt\!-\!s}
\simeq
0.027R_\odot
}.
$$

A transverse pulsar displacement of about $1.9\times10^4\,\mathrm{km}$ therefore changes the interference pattern observed at Earth substantially.

### 14.7 Comparison with the orbital scale

Given

$$
x=1.415\,\mathrm{lt\!-\!s}.
$$

the corresponding length is

$$
cx
\simeq
4.24\times10^5\,\mathrm{km}
\simeq
0.61R_\odot.
$$

Therefore

$$
\boxed{
\frac{x}{\ell_{\rm res}}
\simeq
23
}.
$$

The orbital scale spans more than twenty scintillation resolution elements, so orbital motion appreciably changes both the phase relation illuminating the screen and the scintillation pattern at Earth.

Strictly, the timing parameter $x=a_p\sin i/c$ is the projected semimajor axis, whereas scintillation responds directly to transverse motion in the plane of the sky. An exact mapping also depends on orbital inclination and the longitude of the ascending node. Here we compare characteristic scales.

### 14.8 Replacing the pulsar with a radio-emitting Sun-like star

The solar radius is

$$
R_\odot\simeq6.96\times10^5\,\mathrm{km}.
$$

Therefore

$$
\frac{R_\odot}{\ell_{\rm res}}
\simeq37.
$$

The stellar radius spans about 37 resolution elements and the diameter about 75. Different emitting regions generate displaced scintillation patterns, whose superposition averages down the intensity fluctuations.

An ordinary extended radio-emitting Sun-like star therefore generally does not show strong diffractive scintillation. If its radio emission instead comes from a compact coherent burst region much smaller than the star, that compact component may still scintillate.

### 14.9 Wavelength scaling

Because

$$
\alpha\propto\lambda^2,
$$

we have

$$
b_{\max}\propto\lambda^2,
\qquad
B\propto\lambda^2.
$$

The interferometric resolution is

$$
\theta_{\rm res}\sim\frac{\lambda}{B},
$$

Therefore

$$
\boxed{
\theta_{\rm res}\propto\lambda^{-1}
}
$$

and

$$
\boxed{
\ell_{\rm res}\propto\lambda^{-1}
}.
$$

In this simple model, longer wavelength strengthens plasma deflection faster than it enlarges the diffraction scale, increasing the effective baseline and improving source-plane resolution. At very long wavelengths, strong scattering, multiple imaging, absorption, and breakdown of the thin-screen approximation may alter this simple scaling.

---

## 15. Dimensional Checks, Limiting Cases, and Common Confusions

### 15.1 Dimensions of the phase

$$
r_e:[\mathrm{cm}],
\qquad
\lambda:[\mathrm{cm}],
\qquad
N_e:[\mathrm{cm^{-2}}],
$$

Therefore

$$
r_e\lambda N_e
$$

is dimensionless, as a phase must be.

### 15.2 Dimensions of the deflection angle

$$
\nabla_\perp N_e:
[\mathrm{cm^{-2}\,cm^{-1}}]
=[\mathrm{cm^{-3}}],
$$

Therefore

$$
r_e\lambda^2\nabla_\perp N_e
:
[\mathrm{cm}]
[\mathrm{cm^2}]
[\mathrm{cm^{-3}}]
=1.
$$

Radians are dimensionless, so the dimensions are correct.

### 15.3 Static and uniform-motion limits

- $\boldsymbol\beta=0$: the Liénard–Wiechert velocity field reduces to the Coulomb field.
- $\dot{\boldsymbol\beta}=0$: the radiation field vanishes.
- $R\rightarrow\infty$: the $R^{-1}$ radiation field dominates the $R^{-2}$ velocity field.

### 15.4 Medium limits

- $n_r\rightarrow1$: $\kappa_{\rm med}\rightarrow1-\beta\cos\theta$, recovering the vacuum result.
- $n_r>1$ and $\beta n_r>1$: Cherenkov radiation is allowed.
- In a cold plasma, $n_r<1$: ordinary Cherenkov radiation is absent, but low-frequency Razin suppression may occur.

### 15.5 Common confusions

1. The wave phase $\Phi$ is not the electromagnetic scalar potential $\phi$.
2. The Lorenz gauge is a choice of representation for the potentials, not an additional physical constraint.
3. Retarded time is not an arbitrary delay; it is determined by the intersection of the past light cone with the source trajectory.
4. The $1/\kappa$ in the Liénard–Wiechert potentials is the Jacobian from changing variables in the delta function.
5. A uniformly moving charge has $\mathbf E,\mathbf B$, but no $R^{-1}$ radiation field.
6. $\theta_b$ is an angular width; $\theta_{\rm C}$ is the direction of Cherenkov coherence.
7. The Cherenkov condition requires exceeding the medium phase velocity $c/n_r$, not the vacuum speed of light.
8. In a cold plasma, the phase velocity can exceed $c$, but the group velocity and information velocity do not exceed $c$.
9. The problem writes $\nabla n_e$ with the dimensions of a column-density gradient; physically it should be interpreted as $\nabla_\perp N_e$.
10. For a midpoint screen, the simple geometry and exact thin-screen geometry can differ by a factor of two in $b_{\max}$; the baseline and source-distance definitions must be kept mutually consistent.

---

## 16. English assignment-ready solution

### 16.1 Maximum bending angle

For a thin plasma phase screen, the phase perturbation and deflection angle are

$$
\Delta\Phi=-r_e\lambda N_e,
\qquad
\boldsymbol\alpha
=-\frac{r_e\lambda^2}{2\pi}
\nabla_\perp N_e.
$$

Using

$$
r_e=2.818\times10^{-13}\,\mathrm{cm},
\qquad
\lambda=12\,\mathrm{cm},
\qquad
|\nabla_\perp N_e|
=10^3\,\mathrm{cm^{-3}},
$$

the maximum bending angle is

$$
\alpha_{\max}
=
\frac{
(2.818\times10^{-13})(12)^2(10^3)
}{2\pi}
=6.46\times10^{-9}\,\mathrm{rad}.
$$

Thus,

$$
\boxed{
\alpha_{\max}\simeq1.33\,\mathrm{mas}
}.
$$

### 16.2 Effective lenslet array

For a screen halfway to a pulsar at $700\,\mathrm{pc}$, the observer-to-screen distance is

$$
D_l=350\,\mathrm{pc}.
$$

Using the classroom small-angle estimate,

$$
b_{\max}\simeq D_l\alpha_{\max},
$$

which gives

$$
\boxed{
b_{\max}\simeq0.47\,\mathrm{AU}
}.
$$

Lenslets can contribute on both sides of the line of sight, so the effective maximum baseline is

$$
\boxed{
B\simeq2b_{\max}\simeq0.93\,\mathrm{AU}
}.
$$

### 16.3 Angular and spatial resolution

Treating the screen as an interferometer,

$$
\theta_{\rm res}\sim\frac{\lambda}{B},
$$

and therefore

$$
\boxed{
\theta_{\rm res}
\simeq
8.6\times10^{-13}\,\mathrm{rad}
\simeq
0.18\,\mu\mathrm{as}
}.
$$

At the pulsar distance this corresponds to

$$
\boxed{
\ell_{\rm res}
\simeq
1.24\times10^{-4}\,\mathrm{AU}
\simeq
1.86\times10^4\,\mathrm{km}
\simeq
0.062\,\mathrm{lt\!-\!s}
\simeq
0.027R_\odot
}.
$$

The projected semi-major axis is

$$
x=1.415\,\mathrm{lt\!-\!s},
$$

so

$$
\boxed{
\frac{x}{\ell_{\rm res}}\simeq23
}.
$$

Thus, the characteristic orbital scale spans many scintillation resolution elements, and orbital motion should substantially change the interference pattern.

### 16.4 Extended source and wavelength scaling

A Sun-like radio source has a characteristic radius of order $R_\odot$, much larger than the source-plane resolution $0.027R_\odot$. Different parts of the source therefore generate decorrelated scintillation patterns that average together, strongly suppressing the observed modulation. A compact radio-emitting subregion could still scintillate.

Since

$$
\alpha\propto\lambda^2,
\qquad
B\propto\lambda^2,
$$

the angular and physical source-plane resolutions scale as

$$
\boxed{
\theta_{\rm res}\propto\lambda^{-1},
\qquad
\ell_{\rm res}\propto\lambda^{-1}
}.
$$

Thus, within this simple thin-screen model, longer observing wavelengths provide finer source-plane resolution.

---

## 17. Review Checklist and References

### 17.1 You should be able to explain independently

- Why Faraday’s law permits the definition of $\phi,\mathbf A$.
- Why gauge freedom does not change $\mathbf E,\mathbf B$.
- How the Lorenz gauge eliminates the cross terms in the potential equations.
- Why retarded time equals the propagation time and why it is an implicit equation for a moving point source.
- How the spatial and temporal delta functions turn a point-charge source into the Liénard–Wiechert potentials.
- Why $1/\kappa$ is the Jacobian of the time-variable transformation.
- Why the velocity field scales as $R^{-2}$ and the radiation field as $R^{-1}$.
- Why an $R^{-1}$ field can carry finite power to infinity.
- Why a medium changes $\kappa$ to $1-\beta n_r\cos\theta$.
- Why the Cherenkov cone is the envelope of spherical wavefronts.
- Why $\theta_{\rm C}$ and the Mach-cone surface angle are complementary.
- The relation among $\gamma$, $\theta_b$, and relativistic beaming.
- Why the Razin effect matters when $\omega\lesssim\gamma\omega_p$.
- How $n_r-1$ leads to $\Delta\Phi=-r_e\lambda N_e$.
- How a transverse phase gradient produces the plasma deflection angle.
- How to recompute independently $\alpha_{\max}$, the baseline, the angular resolution, and the source-plane resolution.

### 17.2 Core formulas

$$
\boxed{
\mathbf B=\nabla\times\mathbf A,
\qquad
\mathbf E=-\nabla\phi-\frac{1}{c}\frac{\partial\mathbf A}{\partial t}
}
$$

$$
\boxed{
\nabla\cdot\mathbf A
+\frac{1}{c}\frac{\partial\phi}{\partial t}=0
}
$$

$$
\boxed{
\phi=\left[\frac{q}{\kappa R}\right]_{\rm ret},
\qquad
\mathbf A=\left[\frac{q\mathbf u}{c\kappa R}\right]_{\rm ret}
}
$$

$$
\boxed{
\kappa=1-\mathbf n\cdot\boldsymbol\beta,
\qquad
\kappa_{\rm med}=1-\beta n_r\cos\theta
}
$$

$$
\boxed{
\cos\theta_{\rm C}=\frac{1}{\beta n_r},
\qquad
\theta_b\sim\frac{1}{\gamma}
}
$$

$$
\boxed{
\Delta\Phi=-r_e\lambda N_e,
\qquad
\boldsymbol\alpha
=-\frac{r_e\lambda^2}{2\pi}
\nabla_\perp N_e
}
$$

### 17.3 References

1. G. B. Rybicki & A. P. Lightman, *Radiative Processes in Astrophysics*, §2.5、§3.1–3.2、§8.3。
2. The AST1440 note in this course directory deriving refractive-index gradients and ray bending from RL Eq. 8.18.
3. The AST1440 note in this course directory on polarization, Faraday rotation, plasma refraction, scintillation, and Problem 8.3.
4. AST1440 course-page notes on retarded potentials, Cherenkov/Razin effects, and pulsar scintillation.
