---
title: "AST1440 Relativistic Field Transformations, Virtual Photons, and Relativistic Bremsstrahlung: RL §§4.5, 4.6, 5.4 and Problems 4.1, 4.7, 5.2"
description: "A systematic derivation of Lorentz field transformations, electromagnetic invariants, the pancake field of a fast charge, the Fourier virtual-photon method, and relativistic bremsstrahlung, with complete solutions to Problems 4.1, 4.7, and 5.2."
date: "2026-10-22"
tags: ["AST1440","Special relativity","Relativistic bremsstrahlung","Virtual photons","Lorentz transformation","Exercises"]
order: 14
draft: false
sourceHash: 9ec672ac7f12a570143293584c6563952ea9e5ac380a83615abccb9c0a30b765
translation: "AI-assisted English translation"
---

# AST1440 Relativistic Field Transformations, Virtual Photons, and Relativistic Bremsstrahlung: RL §§4.5, 4.6, 5.4 and Problems 4.1, 4.7, 5.2

> Course: AST1440 — Radiation.  
> Textbook: Rybicki & Lightman, *Radiative Processes in Astrophysics* (RL), §4.5 (print pp. 129–130), §4.6 (print pp. 130–135), §5.4 (print pp. 163–165); Problems 4.1 (print p. 148), 4.7 (print p. 151), and 5.2 (print pp. 165–166).  
> Connection to the literature: Bij et al. (2021), “Kinematics of Crab Giant Pulses,” *ApJ*, 920, 38.  
> Compiled: October 22, 2026.  
> This note fills in every intermediate step raised in the preview discussion: small-angle approximations, Lorentz boosts, electromagnetic-field invariants, the “pancake field” of a uniformly moving charge, Fourier decomposition of the field pulse and virtual photons, relativistic bremsstrahlung, and complete solution chains for the three assigned problems.

## Contents

1. [Logical Road Map for This Week](#1-logical-road-map-for-this-week)
2. [Symbols, Angles, and Unit System](#2-symbols-angles-and-unit-system)
3. [Relativistic-Kinematics Preparation: Small-Angle Approximation and Doppler Factor](#3-relativistic-kinematics-preparation-small-angle-approximation-and-doppler-factor)
4. [RL §4.5: Lorentz Transformation of Electromagnetic Fields](#4-rl-45-lorentz-transformation-of-electromagnetic-fields)
5. [Why Two Electromagnetic-Field Combinations Are Frame Invariant](#5-why-two-electromagnetic-field-combinations-are-frame-invariant)
6. [RL §4.6: Electromagnetic Field of a Uniformly Moving Point Charge](#6-rl-46-electromagnetic-field-of-a-uniformly-moving-point-charge)
7. [Why the Field of a Fast Charge Is “Pancake-Shaped”](#7-why-the-field-of-a-fast-charge-is-pancake-shaped)
8. [The Field Pulse Seen by a Stationary Observer](#8-the-field-pulse-seen-by-a-stationary-observer)
9. [Fourier Decomposition, $K_1(x)$, and Equivalent Virtual Photons](#9-fourier-decomposition-k_1x-and-equivalent-virtual-photons)
10. [RL §5.4: Relativistic Bremsstrahlung](#10-rl-54-relativistic-bremsstrahlung)
11. [Total Free–Free Emissivity of a Thermal Plasma](#11-total-freefree-emissivity-of-a-thermal-plasma)
12. [Problem 4.1: Arrival-Time Spread from a Relativistic Spherical Shell](#12-problem-41-arrival-time-spread-from-a-relativistic-spherical-shell)
13. [Problem 4.7: Apparent Superluminal Motion](#13-problem-47-apparent-superluminal-motion)
14. [What Does Bij et al. (2021) Calculate?](#14-what-does-bij-et-al-2021-calculate)
15. [Problem 5.2: Lower Mass Limit for a High-Energy X-Ray Source](#15-problem-52-lower-mass-limit-for-a-high-energy-x-ray-source)
16. [English assignment-ready solutions](#16-english-assignment-ready-solutions)
17. [Dimensions, Limits, and Common Confusions](#17-dimensions-limits-and-common-confusions)
18. [Review Checklist and Core Equations](#18-review-checklist-and-core-equations)
19. [References](#19-references)

---


## 1. Logical Road Map for This Week

These sections appear to belong separately to special relativity, electromagnetic fields, and bremsstrahlung, but they actually form one continuous physical chain:

$$
\boxed{
\text{Lorentz transformation}
\longrightarrow
\text{compressed field of a fast charge}
\longrightarrow
\text{brief electromagnetic pulse}
\longrightarrow
\text{Fourier spectrum}
\longrightarrow
\text{equivalent virtual photons}
\longrightarrow
\text{relativistic bremsstrahlung}
}.
$$

The central intuition is that when a high-speed charged particle passes near an observer, the observer does not see a slowly varying Coulomb field but a sharp field pulse lasting approximately

$$
\Delta t\sim \frac{b}{\gamma v}
$$

A shorter pulse contains higher Fourier frequencies. The spectrum can be formally rewritten as a spectrum of “equivalent photons,” and photon-scattering language can then be used to calculate the energy acquired and reradiated by another charge. This is the **method of virtual quanta**, also called the **equivalent photon method**.

This week's three problems apply the same relativistic combination

$$
\boxed{1-\beta\cos\theta}
$$

in three different settings:

- Problem 4.1: the arrival-time difference between photons emitted at different locations on a spherical shell.
- Problem 4.7: the apparent transverse velocity of a moving source.
- Bij et al. (2021): Doppler frequency drift in Crab giant pulses.

---


## 2. Symbols, Angles, and Unit System

### 2.1 Basic Symbols

$$
\beta\equiv\frac{v}{c},
\qquad
\gamma\equiv\frac{1}{\sqrt{1-\beta^2}}.
$$

| Symbol | Meaning |
|---|---|
| $K$ | Laboratory frame |
| $K'$ | Frame moving with $+\mathbf v$ relative to $K$ |
| $\boldsymbol\beta$ | $\mathbf v/c$ |
| $b$ | Impact parameter: closest distance from the target to the unperturbed trajectory |
| $\theta$ | Must be defined from the geometry in each context; this note does not assume every $\theta$ denotes the same angle |
| $\alpha$ | In §7, the angular offset from the transverse plane, $\alpha=\pi/2-\theta$ |
| $\omega$ | Angular frequency, $\omega=2\pi\nu$ |
| $K_1(x)$ | Modified Bessel function of the second kind of order one |
| $D$ | Doppler factor，$D=[\gamma(1-\beta\cos\theta)]^{-1}$ |

### 2.2 Four Different Angles in This Note

This is the easiest point to confuse:

1. For the field of a uniformly moving charge, $\theta$ is the angle between the instantaneous displacement $\mathbf R$ and the velocity $\mathbf v$.
2. For the “pancake” width, $\alpha=\pi/2-\theta$ is the angular offset from the transverse plane.
3. For apparent motion and Doppler beaming, $\theta$ is the angle between the velocity direction and the observer's line of sight.
4. In Bij et al., $\delta$ is the small deflection angle by which scattering changes the ray direction.

All of them may be small, but they are not the same angle.

### 2.3 Gaussian-cgs Units

RL uses Gaussian-cgs. In this system $\mathbf E$ and $\mathbf B$ have the same dimensions, and a plane electromagnetic wave satisfies $B=E$. When this note writes the field transformation as

$$
\mathbf B=\boldsymbol\beta\times\mathbf E
$$

cgs units are assumed. In SI the corresponding relation is

$$
\mathbf B=\frac{\mathbf v\times\mathbf E}{c^2}.
$$

---


## 3. Relativistic-Kinematics Preparation: Small-Angle Approximation and Doppler Factor

### 3.1 Where Does $1-\beta\cos\theta$ Come From?

When $\gamma\gg1$, $\beta$ is very close to unity. From

$$
\gamma^{-2}=1-\beta^2=(1-\beta)(1+\beta)
$$

and $1+\beta\simeq2$, we obtain

$$
\boxed{1-\beta\simeq\frac{1}{2\gamma^2}},
\qquad
\beta\simeq1-\frac{1}{2\gamma^2}.
$$

For a small angle $\theta\ll1$, the Taylor expansion is

$$
\boxed{\cos\theta\simeq1-\frac{\theta^2}{2}},
$$

not $\cos\theta=\theta^2/2$. Therefore

$$
\begin{aligned}
1-\beta\cos\theta
&\simeq
1-\left(1-\frac{1}{2\gamma^2}\right)
\left(1-\frac{\theta^2}{2}\right)\\
&\simeq
\frac{1}{2\gamma^2}+\frac{\theta^2}{2},
\end{aligned}
$$

where the still smaller product $\theta^2/(4\gamma^2)$ has been neglected. Thus

$$
\boxed{
1-\beta\cos\theta
\simeq
\frac{1+\gamma^2\theta^2}{2\gamma^2}
}.
$$

### 3.2 Doppler Factor and the $1/\gamma$ Angular Scale

The relativistic Doppler factor is

$$
D=\frac{1}{\gamma(1-\beta\cos\theta)}.
$$

Substitution gives

$$
\boxed{
D\simeq\frac{2\gamma}{1+\gamma^2\theta^2}
}.
$$

When $\gamma^2\theta^2\ll1$, $D\simeq2\gamma$; when $\gamma^2\theta^2\gg1$, $D$ decreases rapidly. The change therefore occurs near

$$
\boxed{\theta\sim\frac1\gamma}.
$$

This is the angular scale of the relativistic beaming cone. Here the radiation is centered on the direction of motion, $\theta=0$, whereas the velocity field of a charge in §7 is concentrated near the transverse plane, $\theta=\pi/2$. Both widths are of order $1/\gamma$, but their central directions differ.

---


## 4. RL §4.5: Lorentz Transformation of Electromagnetic Fields

### 4.1 What Does “Boost” Mean?

In relativity, a **Lorentz boost** is a Lorentz transformation between two inertial frames with only uniform relative motion and no additional spatial rotation. In practice, remembering the phrase “boost along a given direction” is the least ambiguous convention.

### 4.2 Field-Transformation Formulas

Let $K'$ move at velocity $+\mathbf v$ relative to $K$, and decompose the fields into components parallel and perpendicular to $\mathbf v$. Transforming from $K$ to $K'$ gives

$$
\boxed{
\mathbf E'_\parallel=\mathbf E_\parallel,
\qquad
\mathbf B'_\parallel=\mathbf B_\parallel
}
$$

and

$$
\boxed{
\mathbf E'_\perp
=\gamma\left(\mathbf E_\perp+\boldsymbol\beta\times\mathbf B\right)
}
$$

$$
\boxed{
\mathbf B'_\perp
=\gamma\left(\mathbf B_\perp-\boldsymbol\beta\times\mathbf E\right)
}.
$$

These are the special-relativistic electromagnetic-field transformations. One may memorize the result, but at least three points must be remembered with it:

- First state which frame moves with $+\mathbf v$ relative to which; otherwise the signs of the cross-product terms become ambiguous.
- Parallel components are unchanged, while perpendicular components mix.
- $\mathbf E$ and $\mathbf B$ are not two unrelated fields; they are components of the same electromagnetic field tensor in different frames.

To transform back from $K'$ to $K$, simply make the replacement $\boldsymbol\beta\to-\boldsymbol\beta$.

### 4.3 Why Does a Moving Electric Field Produce a Magnetic Field?

In the charge rest frame there is only a Coulomb electric field, with $\mathbf B'=0$. In a frame where the charge moves, the field transformation mixes part of $\mathbf E'$ into $\mathbf B$, producing a magnetic field.

RL §4.5 also illustrates this with a parallel-plate capacitor. In the capacitor rest frame, the surface charge is stationary and there is only an electric field between the plates. From a frame moving transversely, the surface charge constitutes a surface current and must produce a magnetic field. Saying that “part of the electric field becomes a magnetic field” means that the same electromagnetic field is decomposed differently in different inertial frames.

---


## 5. Why Two Electromagnetic-Field Combinations Are Frame Invariant

### 5.1 Two Lorentz Invariants

In Gaussian-cgs, the electromagnetic field has two commonly used invariants:

$$
\boxed{B^2-E^2=\text{invariant}},
\qquad
\boxed{\mathbf E\cdot\mathbf B=\text{invariant}}.
$$

More precisely, the first expression may acquire the appropriate factor of $c$ in another unit system; for example, SI commonly uses $E^2-c^2B^2$.

### 5.2 The Fundamental Reason: They Are Tensor Contractions

The electric and magnetic fields together form the antisymmetric field tensor $F^{\mu\nu}$. A Lorentz transformation changes the tensor components but not scalars formed by complete contraction:

$$
F_{\mu\nu}F^{\mu\nu}=2(B^2-E^2),
$$

$$
\tilde F_{\mu\nu}F^{\mu\nu}\propto\mathbf E\cdot\mathbf B.
$$

This is the same logic by which the components of a four-vector $x^\mu$ change while $x_\mu x^\mu$ remains invariant.

### 5.3 Direct Check with a Simple Boost

Suppose the boost is along $x$, with $\mathbf E=E_y\hat{\mathbf y}$ and $\mathbf B=B_z\hat{\mathbf z}$. Then

$$
E_y'=\gamma(E_y-\beta B_z),
\qquad
B_z'=\gamma(B_z-\beta E_y),
$$

The precise signs depend on the boost convention, but the difference of squares is

$$
\begin{aligned}
B_z'^2-E_y'^2
&=\gamma^2\left[(B_z-\beta E_y)^2-(E_y-\beta B_z)^2\right]\\
&=\gamma^2(1-\beta^2)(B_z^2-E_y^2)\\
&=B_z^2-E_y^2.
\end{aligned}
$$

### 5.4 What Can These Invariants Tell Us?

- If $\mathbf E\cdot\mathbf B\neq0$, neither field can be eliminated entirely in any reference frame.
- If $\mathbf E\cdot\mathbf B=0$ and $E^2>B^2$, a purely electric frame exists.
- If $\mathbf E\cdot\mathbf B=0$ and $B^2>E^2$, a purely magnetic frame exists.
- A plane electromagnetic wave satisfies $E^2=B^2$ and $\mathbf E\cdot\mathbf B=0$. Both invariants vanish even though the field itself does not; this is called a null field.

---


## 6. RL §4.6: Electromagnetic Field of a Uniformly Moving Point Charge

### 6.1 Geometric Setup

Let a point charge $q$ move uniformly along the $+x$ direction in the laboratory frame $K$. At some time its position is $\mathbf r_q(t)$ and the field point is $\mathbf r$. Define the instantaneous displacement

$$
\mathbf R\equiv\mathbf r-\mathbf r_q(t).
$$

$\theta$ is the angle between $\mathbf R$ and $\mathbf v$:

$$
R_\parallel=R\cos\theta,
\qquad
R_\perp=R\sin\theta.
$$

### 6.2 Transforming the Rest-Frame Coulomb Field

In the charge rest frame $K'$,

$$
\mathbf E'=q\frac{\mathbf r'}{r'^3},
\qquad
\mathbf B'=0.
$$

Comparing spatial separations corresponding to the same laboratory time, the Lorentz transformation gives

$$
R_\parallel'=\gamma R_\parallel,
\qquad
R_\perp'=R_\perp.
$$

Therefore

$$
\begin{aligned}
r'^2
&=\gamma^2R_\parallel^2+R_\perp^2\\
&=R^2(\gamma^2\cos^2\theta+\sin^2\theta)\\
&=\gamma^2R^2(1-\beta^2\sin^2\theta).
\end{aligned}
$$

Transforming back from $K'$ to $K$, and using $\mathbf B'=0$, gives

$$
E_\parallel=E_\parallel',
\qquad
E_\perp=\gamma E_\perp'.
$$

Substituting the Coulomb-field components and the expression for $r'$ above, then recombining them into a vector along $\hat{\mathbf R}$, gives

$$
\boxed{
\mathbf E(\mathbf r,t)
=
\frac{q(1-\beta^2)}
{\left(1-\beta^2\sin^2\theta\right)^{3/2}}
\frac{\hat{\mathbf R}}{R^2}
}.
$$

This result cannot be obtained by simply applying length contraction to $R$. The angular dependence in the denominator arises jointly from the transformation of spatial separation and of the field components.

### 6.3 Why Is the Magnetic Field $\mathbf B=\boldsymbol\beta\times\mathbf E$?

In the charge rest frame, $\mathbf B'=0$. From

$$
\mathbf B'_\perp
=\gamma(\mathbf B_\perp-\boldsymbol\beta\times\mathbf E)=0
$$

we obtain

$$
\mathbf B_\perp=\boldsymbol\beta\times\mathbf E.
$$

The parallel component also satisfies

$$
B_\parallel=B_\parallel'=0.
$$

Thus the total magnetic field is entirely perpendicular, and the subscript may be dropped:

$$
\boxed{\mathbf B=\boldsymbol\beta\times\mathbf E}.
$$

Writing $\mathbf B_\perp$ as $\mathbf B$ here is not a sleight of hand: $B_\parallel=0$ has already proved that the total field has no parallel component. Its magnitude is

$$
B=\beta E\sin\theta=\beta E_\perp.
$$

In the transverse plane, $\theta=\pi/2$ and $B=\beta E$; in the ultrarelativistic limit $\beta\simeq1$, $B\simeq E$.

---


## 7. Why the Field of a Fast Charge Is “Pancake-Shaped”

Use the field-strength expression in §6 to examine two special directions.

Along the direction of motion, $\theta=0$ or $\pi$:

$$
E_\parallel^{\rm direction}
=\frac{q(1-\beta^2)}{R^2}
=\frac{q}{\gamma^2R^2}.
$$

In the transverse plane, $\theta=\pi/2$:

$$
E_{\rm transverse\ plane}
=\frac{q(1-\beta^2)}{(1-\beta^2)^{3/2}R^2}
=\frac{\gamma q}{R^2}.
$$

The ratio of the transverse field to the forward/backward field is therefore

$$
\boxed{
\frac{E(\pi/2)}{E(0)}=\gamma^3
}.
$$

Thus the “pancake shape” arises not only because the field at $\theta=0$ is suppressed but also because the field near $\theta=\pi/2$ is enhanced.

To find the angular width of the pancake, let

$$
\alpha\equiv\frac{\pi}{2}-\theta,
\qquad |\alpha|\ll1.
$$

Then $\sin\theta=\cos\alpha\simeq1-\alpha^2/2$, so

$$
1-\beta^2\sin^2\theta
\simeq
\gamma^{-2}+\alpha^2.
$$

The field strength becomes

$$
\boxed{
E(\alpha)
\simeq
\frac{\gamma q}{R^2}
\left(1+\gamma^2\alpha^2\right)^{-3/2}
}.
$$

The field begins to decline substantially when $\gamma^2\alpha^2\sim1$, so

$$
\boxed{|\alpha|\sim\frac1\gamma}.
$$

The scale “$\sim1/\gamma$” is the half-width about the transverse plane $\theta=\pi/2$; it does not mean that $\theta$ itself equals $1/\gamma$.

---


## 8. The Field Pulse Seen by a Stationary Observer

### 8.1 Geometry

Let the charge move along the $x$ axis:

$$
\mathbf r_q(t)=(vt,0,0),
$$

Place the observer at

$$
\mathbf r_{\rm obs}=(0,b,0).
$$

If $t=0$ is the moment of closest approach, then

$$
\mathbf R=(-vt,b,0),
\qquad
R^2=v^2t^2+b^2.
$$

and

$$
\sin\theta=\frac{b}{R}.
$$

### 8.2 Step-by-Step Substitution into the Field Formula

The $y$ component of the field, which is transverse to the direction of motion, is

$$
E_\perp=E\frac{b}{R}.
$$

First simplify the angular factor:

$$
1-\beta^2\sin^2\theta
=1-\beta^2\frac{b^2}{R^2}
=\frac{v^2t^2+b^2/\gamma^2}{R^2}.
$$

Substitute into the field strength from §6:

$$
\begin{aligned}
E_\perp(t)
&=
\frac{q\gamma^{-2}}{R^2}
\left[
\frac{R^2}{v^2t^2+b^2/\gamma^2}
\right]^{3/2}
\frac{b}{R}\\
&=
\frac{qb/\gamma^2}
{\left(v^2t^2+b^2/\gamma^2\right)^{3/2}}.
\end{aligned}
$$

Factoring $\gamma^{-3}$ out of the denominator gives the most commonly used form:

$$
\boxed{
E_\perp(t)
=
\frac{q\gamma b}
{\left(\gamma^2v^2t^2+b^2\right)^{3/2}}
}.
$$

At $t=0$,

$$
E_{\perp,\max}=\frac{q\gamma}{b^2}.
$$

The pulse falls substantially when the terms $\gamma^2v^2t^2$ and $b^2$ become comparable, so its characteristic duration is

$$
\boxed{\Delta t\sim\frac{b}{\gamma v}}.
$$

This also shows that increasing $\gamma$ makes the pulse taller and shorter.

### 8.3 Is This Radiation?

A uniformly moving charge has no acceleration, and this field still falls as $1/R^2$ in the far zone. It is a velocity field, not a freely propagating $1/R$ radiation field. Local equality $E\simeq B$ therefore does not by itself make it a real free electromagnetic wave.

When a fast charge passes another particle, however, this brief external field accelerates the target. Radiation emitted by the accelerated target is bremsstrahlung. The equivalent-photon method uses photon-like language to describe precisely this incident field pulse.

---


## 9. Fourier Decomposition, $K_1(x)$, and Equivalent Virtual Photons

### 9.1 Why Does a Short Pulse Contain High-Frequency Components?

Any localized time signal can be decomposed into Fourier components. If the pulse width is $\Delta t$, requiring little phase change across the pulse gives

$$
\omega\Delta t\lesssim1.
$$

The important frequencies therefore extend to

$$
\boxed{
\omega_{\rm cut}'\sim\frac1{\Delta t}
\sim\frac{\gamma v}{b}
}.
$$

Here the prime initially denotes the incident ion field as viewed in the electron rest frame. A high-frequency Fourier component corresponds to a higher equivalent-photon energy $\hbar\omega'$, not a higher photon speed; every real photon in vacuum propagates at $c$.

### 9.2 What Is $K_1(x)$, and How Does It Appear?

Adopt the Fourier convention

$$
\widetilde E_\perp(\omega)
=\frac{1}{2\pi}
\int_{-\infty}^{\infty}E_\perp(t)e^{i\omega t}\,dt.
$$

Substitute the field pulse from §8 and let

$$
u=\frac{\gamma vt}{b},
\qquad
x=\frac{b\omega}{\gamma v},
$$

This gives

$$
\widetilde E_\perp(\omega)
=\frac{q}{2\pi bv}
\int_{-\infty}^{\infty}
\frac{e^{ixu}}{(1+u^2)^{3/2}}\,du.
$$

The standard integral identity is

$$
\int_{-\infty}^{\infty}
\frac{e^{ixu}}{(1+u^2)^{3/2}}\,du
=2xK_1(x),
$$

Therefore

$$
\boxed{
\widetilde E_\perp(\omega)
=\frac{q}{\pi bv}xK_1(x)
},
\qquad
x=\frac{b\omega}{\gamma v}.
$$

$K_1(x)$ is the **modified Bessel function of the second kind of order 1**. Its appearance is not an additional physical assumption; it is the result of Fourier transforming this particular pulse shape.

Its two important asymptotic forms are

$$
K_1(x)\simeq\frac1x,
\qquad x\ll1,
$$

$$
K_1(x)\simeq
\sqrt{\frac{\pi}{2x}}e^{-x},
\qquad x\gg1.
$$

Thus $xK_1(x)$ is approximately constant at low frequency and decreases exponentially once $x\gtrsim1$. This again gives the cutoff condition $x\sim1$.

### 9.3 Why Can It Be Treated as a Beam of Virtual Photons?

When $\gamma\gg1$, the pulse is dominated by transverse fields, with

$$
\mathbf E\perp\mathbf B,
\qquad
B\simeq E.
$$

These local relations resemble those of a plane electromagnetic wave. We may:

1. Decompose the pulse into Fourier components at each $\omega$.
2. Divide the field energy in each frequency interval by $\hbar\omega$.
3. Define the result as an equivalent photon-number spectrum.
4. Use a known photon-scattering cross section to calculate the response of the target particle.

This is a computational rewriting, not a claim that the source truly emitted a beam of real photons that a distant detector could intercept freely. They are called **virtual photons** because these field modes remain attached to the moving charge and are generally not on-shell states satisfying the free-photon energy–momentum relation.

The accurate statement is therefore that the Fourier spectrum of the entire field pulse can be treated as an “equivalent virtual-photon beam,” with high-frequency components corresponding to high-energy virtual-photon components. It is not true that “only high frequencies can be treated as photons,” nor that “high-frequency photons move faster.”

---


## 10. RL §5.4: Relativistic Bremsstrahlung

### 10.1 Calculation Strategy

In the laboratory frame, an electron with $\gamma\gg1$ passes an approximately stationary ion. Directly calculating the relativistic curved trajectory and its radiation is cumbersome, so transform to the instantaneous electron rest frame:

- The electron is momentarily at rest.
- The ion passes at relativistic speed.
- The ion's compressed Coulomb field is a brief electromagnetic pulse.
- Treat the pulse as a beam of equivalent virtual photons.
- The electron Thomson-scatters those photons.
- Finally transform back to the laboratory frame.

If the photon energy in the electron rest frame no longer satisfies $\hbar\omega'\ll m_ec^2$, the Thomson approximation fails. One must then use the Klein–Nishina cross section and include recoil.

### 10.2 Energy Spectrum of the Incident Pulse

The Fourier field amplitude gives the incident energy spectrum per unit area and angular frequency. Multiplying by the Thomson cross section

$$
\sigma_T=\frac{8\pi e^4}{3m_e^2c^4}
$$

gives the radiation spectrum from one encounter with impact parameter $b$. The RL result may be written as

$$
\boxed{
\frac{dW}{d\omega}
=
\frac{8Z^2e^6}
{3\pi b^2c^5m_e^2}
x^2K_1^2(x)
},
\qquad
\boxed{x=\frac{b\omega}{\gamma^2c}}.
$$

The denominator here is $c^5$. With $c^3$, the dimensions would not be energy times time and the expression could not represent $dW/d\omega$.

Why does $x$ contain $\gamma^2$?

- The first factor of $\gamma$ comes from time compression of the field pulse in the electron rest frame, $\omega'_{\rm cut}\sim\gamma c/b$.
- Transforming back to the laboratory frame gives forward radiation another Doppler boost of order $\gamma$.
- The laboratory-frame cutoff therefore reaches $\omega_{\rm cut}\sim\gamma^2c/b$.

More formally, the transverse impact parameter satisfies $b=b'$. For the corresponding photon beam, energy and frequency acquire the same Doppler factor, so the form of $dW/d\omega$ can be directly related between frames, while the characteristic frequency transformation gives $\omega\sim\gamma\omega'$.

### 10.3 Why Is the Cutoff $\omega_{\max}\sim\gamma^2c/b$?

From the asymptotic behavior of $K_1$:

- For $x\ll1$, $x^2K_1^2(x)\to1$, and the low-frequency spectrum is approximately flat.
- For $x\gg1$, $K_1(x)\propto e^{-x}$, and the spectrum is exponentially suppressed.

The turnover occurs at $x\sim1$, so

$$
\boxed{
\omega_{\max}\sim\frac{\gamma^2c}{b}
}.
$$

This “maximum frequency” is not a strict hard cutoff but the characteristic frequency at which exponential suppression begins.

### 10.4 Integration over Impact Parameter

Integrating over all electron–ion encounters per unit volume and time gives, in the low-frequency approximation,

$$
\frac{dW}{dt\,dV\,d\omega}
\simeq
\frac{16Z^2e^6n_en_i}{3c^3m_e^2}
\ln\left(
\frac{0.68\gamma^2c}{\omega b_{\min}}
\right).
$$

The logarithm comes from the geometric encounter factor $2\pi b\,db$ multiplied by the $b^{-2}$ spectrum of one encounter:

$$
2\pi b\,db\times b^{-2}\propto\frac{db}{b}.
$$

$b_{\min}$ is set by whichever restriction is strongest among classical close scattering, the quantum de Broglie scale, and recoil; the upper limit is set by the adiabatic cutoff at the chosen frequency.

---


## 11. Total Free–Free Emissivity of a Thermal Plasma

### 11.1 How Is the Nonrelativistic Result Integrated?

The thermal free–free volume emissivity per unit frequency is approximately

$$
\epsilon_\nu^{\rm ff}
=6.8\times10^{-38}
Z^2n_en_iT^{-1/2}
e^{-h\nu/kT}\bar g_{\rm ff},
$$

in ${\rm erg\,s^{-1}\,cm^{-3}\,Hz^{-1}}$. Absorb the frequency dependence of the Gaunt factor into the mean $\bar g_B$ and let

$$
u=\frac{h\nu}{kT},
\qquad
d\nu=\frac{kT}{h}\,du,
$$

Then

$$
\int_0^\infty e^{-h\nu/kT}\,d\nu
=\frac{kT}{h}\int_0^\infty e^{-u}\,du
=\frac{kT}{h}.
$$

Thus $T^{-1/2}$ becomes $T^{1/2}$, giving

$$
\epsilon_{\rm ff,NR}
\simeq
1.4\times10^{-27}
T^{1/2}Z^2n_en_i\bar g_B.
$$

### 11.2 First-Order Relativistic Correction

The approximate total emissivity given by RL is

$$
\boxed{
\epsilon_{\rm ff}
\simeq
1.4\times10^{-27}
T^{1/2}Z^2n_en_i\bar g_B
\left(1+4.4\times10^{-10}T\right)
}
$$

in ${\rm erg\,s^{-1}\,cm^{-3}}$.

Define the dimensionless electron temperature

$$
\Theta_e\equiv\frac{kT}{m_ec^2},
$$

Then

$$
4.4\times10^{-10}T\simeq2.6\Theta_e.
$$

The factor in parentheses is therefore the leading enhancement as electrons begin to become relativistic. It is not an arbitrary empirical multiplier and should not be extrapolated to the extreme relativistic regime $\Theta_e\gg1$, where the full relativistic thermal-bremsstrahlung formula is required.

---


## 12. Problem 4.1: Arrival-Time Spread from a Relativistic Spherical Shell

### 12.1 Physical Picture

Consider a spherical shell of radius $R$ and Lorentz factor $\gamma$ that emits an instantaneous flash. Because of relativistic beaming, the observer mainly sees the region within

$$
\theta\lesssim\frac1\gamma
$$

of the line of sight.

The path-length difference between the point directly facing the observer and a point offset from the line of sight by $\theta$ is

$$
\Delta \ell=R-R\cos\theta=R(1-\cos\theta).
$$

The arrival-time difference is therefore

$$
\Delta t_{\rm ang}
=\frac{R(1-\cos\theta)}{c}
\simeq\frac{R\theta^2}{2c}.
$$

Setting $\theta\sim1/\gamma$ gives

$$
\boxed{
\Delta t_{\rm ang}\sim\frac{R}{2\gamma^2c}
}.
$$

### 12.2 Why Is the Final Result an Inequality?

The observed duration may also contain positive contributions from the shell's intrinsic emission time, radial thickness, and the instrument response. Thus, in general,

$$
\Delta t_{\rm obs}\gtrsim\Delta t_{\rm ang}
=\frac{R}{2\gamma^2c}.
$$

Rearranging gives

$$
\boxed{
R\lesssim2\gamma^2c\Delta t_{\rm obs}
}.
$$

The scaling relation itself is an order-of-magnitude equality. It becomes an upper limit on $R$ when the total observed width is used as a constraint, because the curvature delay cannot exceed that width. Equality is appropriate only when the angular time is the sole dominant timescale.

The constraint also changes if the emission comes from a patch much smaller than $1/\gamma$; it therefore depends on the assumption that the visible region is comparable to the beaming cone.

---


## 13. Problem 4.7: Apparent Superluminal Motion

### 13.1 What Velocity Are We Calculating?

Here we calculate the difference between two observed positions on the sky divided by the corresponding signal **arrival-time difference**:

$$
v_{\rm app}
\equiv
\frac{\text{projected displacement on sky}}
{\text{arrival-time interval}}.
$$

It is called the apparent transverse velocity; it is not the object's physical speed in any local inertial frame.

### 13.2 Derivation

A moving source emits two light signals separated by laboratory-frame time $\Delta t$. The source's actual displacement is $v\Delta t$, whose projection on the plane of the sky is

$$
\Delta x_\perp=v\Delta t\sin\theta.
$$

At the time of the second emission, the source has also moved closer to the observer by

$$
v\Delta t\cos\theta.
$$

The second photon therefore travels this much less distance, so the arrival-time interval is not $\Delta t$ but

$$
\Delta t_{\rm obs}
=\Delta t-\frac{v\Delta t\cos\theta}{c}
=\Delta t(1-\beta\cos\theta).
$$

Hence

$$
\boxed{
v_{\rm app}
=
\frac{v\sin\theta}
{1-\beta\cos\theta}
}.
$$

The numerator uses projected distance on the sky and the denominator uses the signal arrival interval because a telescope measures precisely “sky position as a function of observing time.”

### 13.3 Maximum Apparent Speed

Let

$$
f(\theta)=\frac{\beta\sin\theta}{1-\beta\cos\theta}.
$$

Differentiate and set the numerator to zero:

$$
\frac{df}{d\theta}
\propto\cos\theta-\beta=0.
$$

Therefore

$$
\cos\theta_{\max}=\beta,
\qquad
\sin\theta_{\max}=\frac1\gamma.
$$

Substitution gives

$$
\boxed{
v_{\rm app,max}=\gamma v
}.
$$

The result can exceed $c$, but no matter, energy, or information travels transversely faster than light. It is a geometric apparent effect caused by light-travel-time compression.

---


## 14. What Does Bij et al. (2021) Calculate?

### 14.1 Goal of the Paper

Bij et al. study frequency drifts between adjacent nanoshots in Crab pulsar giant pulses. They propose one possible interpretation: the radiation originates in relativistically moving plasma; after passing through a scattering screen in the Crab Nebula, rays enter the line of sight from slightly different directions and therefore sample different Doppler factors.

They are not measuring the $v_{\rm app}$ of Problem 4.7. The two calculations are similar because both contain the key denominator

$$
1-\beta\cos\theta.
$$

### 14.2 How Does Scattering Delay Determine the Deflection Angle?

Let the effective distance from the scattering screen to the pulsar be $d$, and let the ray be deflected by a small angle $\delta$. The bent path has length approximately $d/\cos\delta$, whereas the direct path is $d$, so

$$
c\tau
=\frac{d}{\cos\delta}-d.
$$

Using

$$
\cos\delta\simeq1-\frac{\delta^2}{2},
\qquad
\frac1{\cos\delta}\simeq1+\frac{\delta^2}{2},
$$

gives

$$
\boxed{
c\tau\simeq\frac{d\delta^2}{2}
},
\qquad
\boxed{
\delta\simeq\sqrt{\frac{2c\tau}{d}}
}.
$$

This is simply the small-angle geometry of “how much farther the bent path is than the direct path.”

Taking $d\sim1\,{\rm pc}$ and $\tau\sim0.5\,{\rm ms}$ gives

$$
\delta\sim3\times10^{-6}\ \mathrm{rad}
\sim0.6\ \mathrm{arcsec}.
$$

### 14.3 How Does the Frequency Drift Constrain $\gamma$?

The observed frequency satisfies

$$
\nu=D\nu',
\qquad
D\simeq\frac{2\gamma}{1+\gamma^2\theta^2}.
$$

When the angle changes by $\delta$,

$$
\frac{d\ln D}{d\theta}
=-\frac{2\gamma^2\theta}{1+\gamma^2\theta^2}.
$$

If the line of sight lies near the edge of the beaming cone, $\theta_r\sim1/\gamma$, then

$$
\left|\frac{d\ln D}{d\theta}\right|
\simeq\gamma.
$$

Therefore

$$
\boxed{
\left|\frac{\Delta\nu}{\nu}\right|
\simeq\gamma\delta
}.
$$

If the typical fractional drift is about $0.05$, then

$$
\gamma\sim\frac{0.05}{3\times10^{-6}}
\sim10^4.
$$

This is a conditional inference. It depends on the assumptions that the drift arises from Doppler sampling after scattering and that the line of sight lies near the beam edge. The paper also discusses alternatives such as nanoshot interference, so $\gamma\sim10^4$ is not a model-independent direct measurement.

---


## 15. Problem 5.2: Lower Mass Limit for a High-Energy X-Ray Source

### 15.1 Observables and Assumptions Given in the Problem

The spectrum in Figure 5.5 cuts off near

$$
E_{\rm cut}\sim100\ \mathrm{keV}
$$

If this is interpreted as thermal bremsstrahlung, then

$$
kT\sim E_{\rm cut},
\qquad
T\simeq1.16\times10^9\ \mathrm{K}.
$$

Use the order-of-magnitude values from the problem:

$$
F\sim10^{-8}\ \mathrm{erg\,s^{-1}\,cm^{-2}},
\qquad
d\sim10\ \mathrm{kpc}.
$$

To avoid confusion with luminosity, this note uses $d$ for distance. The isotropic luminosity is

$$
\boxed{
L_X=4\pi d^2F
\simeq1.20\times10^{38}\ \mathrm{erg\,s^{-1}}
}.
$$

### 15.2 What Is Hydrostatic Equilibrium?

Hydrostatic equilibrium is the balance between the outward force from the local pressure gradient and the inward gravitational force:

$$
\boxed{
\frac{dP}{dr}=-\rho\frac{GM(r)}{r^2}
}.
$$

For hot gas surrounding a compact object of mass $M$, use the scale estimates

$$
\frac{dP}{dr}\sim\frac{P}{R},
\qquad
M(r)\sim M,
$$

Then

$$
\frac{P}{R}\sim\rho\frac{GM}{R^2}.
$$

The ideal-gas relation is

$$
P=\frac{\rho kT}{\mu m_p},
$$

Therefore

$$
\boxed{
\frac{kT}{\mu m_p}\sim\frac{GM}{R}
}.
$$

The left side is the thermal-energy scale per unit mass; the right side is the gravitational potential-energy scale per unit mass.

$\mu$ is the **mean molecular weight**, defined as the mass per free particle in units of $m_p$:

$$
n_{\rm tot}=\frac{\rho}{\mu m_p}.
$$

In fully ionized pure hydrogen, each proton corresponds to one proton and one electron, for two free particles, so $\mu\simeq0.5$. A fully ionized gas of cosmic composition commonly uses $\mu\simeq0.6$.

The emission-region scale is therefore estimated as

$$
\boxed{
R\sim\frac{GM\mu m_p}{kT}
}.
$$

Let $m=M/M_\odot$ and take pure hydrogen with $\mu=0.5$:

$$
\boxed{
R\simeq6.9\times10^8
m
\left(\frac{E_{\rm cut}}{100\,{\rm keV}}\right)^{-1}
{\rm cm}
}.
$$

Geometry and boundary conditions may change the order-unity coefficient but not the principal scaling.

### 15.3 Determining the Density from the Luminosity

Assume the emitting region is a hot plasma shell of thickness $\Delta R\sim R$, with volume

$$
V\sim4\pi R^3.
$$

For fully ionized hydrogen, $n_e=n_i=n$. Write the total free–free emissivity as

$$
\epsilon_{\rm ff}=\Lambda_{\rm ff}(T)n^2,
$$

where

$$
\Lambda_{\rm ff}(T)
=1.4\times10^{-27}T^{1/2}\bar g_B
\left(1+4.4\times10^{-10}T\right).
$$

Taking $\bar g_B=1.2$ at $T=1.16\times10^9\,{\rm K}$ gives

$$
1+4.4\times10^{-10}T\simeq1.51,
$$

$$
\Lambda_{\rm ff}\simeq8.65\times10^{-23}
\ \mathrm{erg\,s^{-1}\,cm^3}.
$$

From $L_X\sim\epsilon_{\rm ff}V$:

$$
n=\left(
\frac{L_X}{4\pi R^3\Lambda_{\rm ff}}
\right)^{1/2}.
$$

Numerical substitution gives

$$
\boxed{
n\simeq1.82\times10^{16}m^{-3/2}\ \mathrm{cm^{-3}}
}.
$$

The mass density is

$$
\boxed{
\rho\simeq m_pn
\simeq3.04\times10^{-8}m^{-3/2}\ \mathrm{g\,cm^{-3}}
}.
$$

### 15.4 Is Free–Free Absorption Important?

At $h\nu\sim kT$, use

$$
\alpha_\nu^{\rm ff}
=3.7\times10^8T^{-1/2}n^2\nu^{-3}
\left(1-e^{-h\nu/kT}\right)\bar g_{\rm ff},
$$

Taking $\bar g_{\rm ff}\simeq1.2$ gives

$$
\boxed{
\tau_{\rm ff}=\alpha_\nu^{\rm ff}R
\simeq1.3\times10^{-13}m^{-2}
}.
$$

True free–free absorption is therefore extremely small near the X-ray peak.

### 15.5 Is Electron Scattering Important?

The Thomson optical depth is

$$
\tau_T=n\sigma_TR.
$$

Substituting the values of $n$ and $R$ above gives

$$
\boxed{
\tau_T\simeq8.4m^{-1/2}
}.
$$

If photons are required to escape essentially without scattering, so that

$$
\tau_T\lesssim1,
$$

then

$$
m\gtrsim(8.4)^2\simeq70.
$$

Allowing for uncertainties in geometry, $\mu$, the Gaunt factor, and the relativistic correction, the result should be reported as

$$
\boxed{M\gtrsim10^2M_\odot\quad\text{(order of magnitude)}}.
$$

This does not mean that Thomson scattering destroys photons as absorption does. If the question is instead whether true thermalization is reached, the more appropriate quantity is the effective optical depth

$$
\tau_{\rm eff}
\sim\sqrt{3\tau_{\rm abs}(\tau_{\rm abs}+\tau_T)}.
$$

Because $\tau_{\rm ff}$ is extremely small, even $\tau_T>1$ need not produce absorption–emission LTE thermalization. At $kT\sim100\,{\rm keV}$, however, the energy exchanged in each Compton scattering cannot be neglected. If $\tau_T\gtrsim1$, the spectrum diffuses and becomes Comptonized rather than escaping as “unprocessed optically thin thermal bremsstrahlung.” Electron scattering therefore provides the key self-consistency constraint in this problem.

---


## 16. English Assignment-Ready Solutions

### Problem 4.1

For an instantaneously emitting relativistic spherical shell of radius $R$, relativistic beaming restricts the visible region to angles $\theta\lesssim\gamma^{-1}$ about the line of sight. A photon emitted at angle $\theta$ travels an extra distance

$$
\Delta\ell=R(1-\cos\theta)simeq\frac{R\theta^2}{2}.
$$

The corresponding angular arrival-time spread is therefore

$$
\Delta t_{\rm ang}simeq\frac{R\theta^2}{2c}
\sim\frac{R}{2\gamma^2c}.
$$

Since any intrinsic emission duration or radial thickness can only broaden the observed pulse,

$$
\Delta t_{\rm obs}\gtrsim\Delta t_{\rm ang},
$$

and hence

$$
\boxed{R\lesssim2\gamma^2c\Delta t_{\rm obs}}.
$$

Equality holds to order unity only when the angular light-travel time dominates the observed duration.

### Problem 4.7

Consider two photons emitted by a source separated by a laboratory-frame time $\Delta t$. During that interval the source moves a projected distance

$$
\Delta x_\perp=v\Delta t\sin\theta.
$$

The second photon is emitted closer to the observer by $v\Delta t\cos\theta$, so the observed arrival-time interval is

$$
\Delta t_{\rm obs}
=\Delta t-\frac{v\Delta t\cos\theta}{c}
=\Delta t(1-\beta\cos\theta).
$$

Therefore the apparent transverse velocity is

$$
\boxed{
v_{\rm app}
=\frac{v\sin\theta}{1-\beta\cos\theta}
}.
$$

Maximizing this expression with respect to $\theta$ gives $\cos\theta=\beta$ and $\sin\theta=\gamma^{-1}$. Thus

$$
\boxed{v_{\rm app,max}=\gamma v}.
$$

This apparent superluminal motion is caused by light-travel-time compression and does not represent superluminal transport of matter or information.

### Problem 5.2

The cutoff near $100\,{\rm keV}$ implies

$$
kT\sim100\,{\rm keV},
\qquad
T\simeq1.16\times10^9\,{\rm K}.
$$

For $F\simeq10^{-8}\,{\rm erg\,s^{-1}\,cm^{-2}}$ and $d\simeq10\,{\rm kpc}$, the luminosity is

$$
L_X=4\pi d^2F\simeq1.20\times10^{38}\,{\rm erg\,s^{-1}}.
$$

Hydrostatic balance gives, to order unity,

$$
\frac{kT}{\mu m_p}\sim\frac{GM}{R}.
$$

For fully ionized hydrogen, $\mu=0.5$, so with $m=M/M_\odot$,

$$
R\simeq6.9\times10^8m\ \mathrm{cm}.
$$

Assuming a shell with $\Delta R\sim R$, its volume is $V\sim4\pi R^3$. The relativistically corrected frequency-integrated free-free emissivity is

$$
\epsilon_{\rm ff}
=1.4\times10^{-27}T^{1/2}n^2\bar g_B
\left(1+4.4\times10^{-10}T\right).
$$

Taking $\bar g_B=1.2$ and using $L_X\simeq\epsilon_{\rm ff}V$ gives

$$
n\simeq1.82\times10^{16}m^{-3/2}\ \mathrm{cm^{-3}},
$$

$$
\rho\simeq m_pn
\simeq3.04\times10^{-8}m^{-3/2}\ \mathrm{g\,cm^{-3}}.
$$

At $h\nu\sim kT$, the free-free absorption depth is only

$$
\tau_{\rm ff}\sim1.3\times10^{-13}m^{-2},
$$

whereas the electron-scattering depth is

$$
\tau_T=n\sigma_TR\simeq8.4m^{-1/2}.
$$

Requiring $\tau_T\lesssim1$ so that the observed spectrum can escape without strong diffusion and Comptonization yields

$$
M\gtrsim70M_\odot.
$$

Given the order-unity geometric and plasma-composition uncertainties, the appropriate conclusion is a characteristic lower limit of order

$$
\boxed{M\gtrsim10^2M_\odot}.
$$

Free-free absorption is negligible, but electron scattering is an important consistency constraint.

---


## 17. Dimensions, Limits, and Common Confusions

### 17.1 Dimensional Checks

1. Field-pulse duration:

$$
\frac{b}{\gamma v}\rightarrow\frac{{\rm length}}{{\rm length/time}}={\rm time}.
$$

2. cutoff：

$$
\frac{\gamma^2c}{b}\rightarrow {\rm time}^{-1}.
$$

3. Problem 4.1：

$$
2\gamma^2c\Delta t\rightarrow{\rm length}.
$$

4. Hydrostatic-equilibrium radius:

$$
\frac{GM\mu m_p}{kT}\longrightarrow\mathrm{length}.
$$

5. The $c^5$ in the single-encounter spectrum of RL §5.4: $dW/d\omega$ has dimensions of energy $\times$ time. The factor $c^5$ gives exactly those dimensions; $c^3$ does not.

### 17.2 Limiting Checks

- $\beta\to0$: the field of the moving charge returns to the Coulomb field and $\mathbf B\to0$.
- $\theta=0$: $E=q/\gamma^2R^2$; the forward and backward fields are suppressed.
- $\theta=\pi/2$: $E=\gamma q/R^2$; the transverse field is enhanced.
- $x\ll1$: $xK_1(x)\to1$; the Fourier field amplitude and low-frequency energy spectrum are approximately flat.
- $x\gg1$: $K_1(x)$ decreases exponentially, producing a soft cutoff.
- In Problem 4.7, $\beta\ll1$: the denominator approaches unity and $v_{\rm app}\to v\sin\theta$, recovering the ordinary projected velocity.

### 17.3 Common Confusions

| Easily Confused Statement | Accurate Statement |
|---|---|
| $\cos\theta=\theta^2/2$ | For a small angle, $\cos\theta\simeq1-\theta^2/2$ |
| The pancake width means $\theta\sim1/\gamma$ | For the velocity field, it is $|\pi/2-\theta|\sim1/\gamma$ |
| Every $1/\gamma$ refers to the same angle | The velocity-field pancake and radiation beaming cone have different central directions |
| Higher-frequency photons move faster | Every real photon in vacuum moves at $c$; higher frequency means higher energy |
| A Fourier component is a real photon | Equivalent virtual photons are a computational representation and are generally not free on-shell photons |
| The pancake field of a uniformly moving charge is radiation | It remains a $1/R^2$ velocity field; radiation appears when the target is accelerated and reradiates |
| $B_\perp$ may always be written as $B$ | Here this is allowed because $B_\parallel=B_\parallel'=0$ |
| $R\sim2\gamma^2c\Delta t$ automatically becomes an upper limit | One must additionally use $\Delta t_{\rm obs}\ge\Delta t_{\rm ang}$ |
| $v_{\rm app}$ is the object's physical speed | It is projected displacement on the sky divided by the photon arrival-time difference |
| $\tau_T>1$ necessarily means LTE thermalization | Scattering neither creates nor destroys photons; thermalization depends on effective absorption, though scattering causes diffusion and Comptonization |
| The cgs relation $\mathbf B=\boldsymbol\beta\times\mathbf E$ can be copied directly into SI | In SI, $\mathbf B=\mathbf v\times\mathbf E/c^2$ |

---


## 18. Review Checklist and Core Equations

### 18.1 Can You Answer These Without Looking at the Notes?

- [ ] Derive $1-\beta\cos\theta$ from $\beta\simeq1-1/(2\gamma^2)$ and $\cos\theta\simeq1-\theta^2/2$.
- [ ] Explain what a Lorentz boost is and write the transformations of the parallel and perpendicular electromagnetic-field components.
- [ ] Explain why $B^2-E^2$ and $\mathbf E\cdot\mathbf B$ are invariants.
- [ ] Derive the angular dependence of the uniformly moving charge's field from the rest-frame Coulomb field.
- [ ] Distinguish the transverse pancake $|\pi/2-\theta|\sim1/\gamma$ from the forward radiation beam $\theta\sim1/\gamma$.
- [ ] Derive $E_\perp(t)$ geometrically and identify its peak and pulse width.
- [ ] Explain that $K_1(x)$ results from the Fourier integral and recall its small- and large-$x$ limits.
- [ ] Clearly distinguish a Fourier mode, an equivalent virtual photon, and a real photon.
- [ ] Explain the origins of both factors of $\gamma$ in the relativistic-bremsstrahlung cutoff.
- [ ] Derive all three assigned problems independently rather than merely memorizing the final formulas.
- [ ] Explain that Bij et al. use the scattering angle and Doppler drift to constrain $\gamma$, not $v_{\rm app}$.
- [ ] Distinguish free–free absorption, Thomson scattering, and effective thermalization in Problem 5.2.

### 18.2 One-Page Core Equations

$$
1-\beta\cos\theta
\simeq\frac{1+\gamma^2\theta^2}{2\gamma^2},
\qquad
D\simeq\frac{2\gamma}{1+\gamma^2\theta^2}.
$$

$$
\mathbf E'_\perp
=\gamma(\mathbf E_\perp+\boldsymbol\beta\times\mathbf B),
\qquad
\mathbf B'_\perp
=\gamma(\mathbf B_\perp-\boldsymbol\beta\times\mathbf E).
$$

$$
B^2-E^2=\text{invariant},
\qquad
\mathbf E\cdot\mathbf B=\text{invariant}.
$$

$$
\mathbf E
=\frac{q(1-\beta^2)}{(1-\beta^2\sin^2\theta)^{3/2}}
\frac{\hat{\mathbf R}}{R^2},
\qquad
\mathbf B=\boldsymbol\beta\times\mathbf E.
$$

$$
E_\perp(t)
=\frac{q\gamma b}{(\gamma^2v^2t^2+b^2)^{3/2}},
\qquad
\Delta t\sim\frac{b}{\gamma v}.
$$

$$
\widetilde E_\perp(\omega)
=\frac{q}{\pi bv}xK_1(x),
\qquad
x=\frac{b\omega}{\gamma v}.
$$

$$
\frac{dW}{d\omega}
=\frac{8Z^2e^6}{3\pi b^2c^5m_e^2}
x^2K_1^2(x),
\qquad
x=\frac{b\omega}{\gamma^2c}.
$$

$$
\omega_{\rm cut}\sim\frac{\gamma^2c}{b}.
$$

$$
R\lesssim2\gamma^2c\Delta t_{\rm obs},
\qquad
v_{\rm app}=\frac{v\sin\theta}{1-\beta\cos\theta}.
$$

$$
\epsilon_{\rm ff}
=1.4\times10^{-27}T^{1/2}Z^2n_en_i\bar g_B
\left(1+4.4\times10^{-10}T\right).
$$

---


## 19. References

1. Rybicki, G. B., & Lightman, A. P., *Radiative Processes in Astrophysics*, §§4.5, 4.6, 5.4 and Problems 4.1, 4.7, 5.2.
2. Bij, A., Lin, H.-H., Li, D., et al. 2021, “Kinematics of Crab Giant Pulses,” *The Astrophysical Journal*, **920**, 38. [arXiv:2105.08851](https://arxiv.org/abs/2105.08851), [DOI: 10.3847/1538-4357/ac1589](https://doi.org/10.3847/1538-4357/ac1589).
