---
title: "AST1440: RL Eq. 8.18 - Refractive-Index Gradients, Wavefront Tilt, and Ray Bending"
description: "A complete derivation of RL Eq. 8.18, starting from the cold-plasma refractive index, phase velocity, and constant-phase surfaces, then connecting wavefront tilt to ray bending, Fermat's principle, plasma lensing, and the thin-screen deflection angle."
date: "2026-10-05"
tags: ["AST1440","Ray bending","Refractive index","Cold plasma","Geometrical optics"]
order: 8
draft: false
sourceHash: 2dca4f5fe964d0230b13b47094fed52f18a602fb4f0beff0aef7cc8028ded9f1
translation: AI-assisted English translation
---

# AST1440: RL Eq. 8.18 - Refractive-Index Gradients, Wavefront Tilt, and Ray Bending

> Course: AST1440 - Radiation
> Textbook: Rybicki & Lightman, *Radiative Processes in Astrophysics* (RL), Section 8.1, printed pp. 224-228; Eq. 8.18 appears on printed p. 227.
> Compiled: October 5, 2026.
> These notes focus on deriving RL Eq. 8.18 and expand the steps that are easy to skip: why the cold-plasma refractive index contains a square root, how phase velocity describes wavefront propagation, why $dl/dt=v_{\rm ph}$, what $\nabla F$ and $\nabla_\perp$ mean, how a phase-velocity gradient changes the wavefront normal, and how the full geometrical-optics ray equation follows.

## Contents

1. [Task and Logical Road Map](#1-task-and-logical-road-map)
2. [Notation, Assumptions, and Quantities to Keep Distinct](#2-notation-assumptions-and-quantities-to-keep-distinct)
3. [Obtaining the Refractive Index from the Cold-Plasma Dispersion Relation](#3-obtaining-the-refractive-index-from-the-cold-plasma-dispersion-relation)
4. [Phase Velocity, Constant-Phase Surfaces, and $dl/dt=v_{\rm ph}$](#4-phase-velocity-constant-phase-surfaces-and-dldtv_rm-ph)
5. [Describing a Wavefront with a Scalar Function: $F=0$ and $\nabla F$](#5-describing-a-wavefront-with-a-scalar-function-f0-and-nabla-f)
6. [Why a Transverse Phase-Velocity Gradient Bends a Ray](#6-why-a-transverse-phase-velocity-gradient-bends-a-ray)
7. [Obtaining the Direction Equation from the Phase-Velocity Gradient](#7-obtaining-the-direction-equation-from-the-phase-velocity-gradient)
8. [Complete Derivation of RL Eq. 8.18](#8-complete-derivation-of-rl-eq-818)
9. [Physical Meaning of Eq. 8.18 and Plasma Applications](#9-physical-meaning-of-eq-818-and-plasma-applications)
10. [Dimensional Checks, Limiting Checks, and Common Confusions](#10-dimensional-checks-limiting-checks-and-common-confusions)
11. [English assignment-ready derivation](#11-english-assignment-ready-derivation)
12. [Review Checklist and References](#12-review-checklist-and-references)

---

## 1. Task and Logical Road Map

RL Eq. 8.18 is

$$
\boxed{
\frac{d}{dl}\left(n_r\hat{\mathbf k}\right)
=\nabla n_r
}.
\tag{8.18}
$$

This equation describes how the ray direction changes continuously when the refractive index varies in space. The whole derivation can be compressed into

$$
\boxed{
n_e(\mathbf r)
\longrightarrow
\omega_p(\mathbf r)
\longrightarrow
n_r(\mathbf r)
\longrightarrow
v_{\rm ph}(\mathbf r)
\longrightarrow
\text{wavefront tilt}
\longrightarrow
\text{ray bending}
}.
$$

The two most important geometrical facts are:

1. The ray direction $\hat{\mathbf k}$ is the normal direction to the constant-phase surface.
2. If different transverse positions on a wavefront have different phase velocities, then after the same time interval they advance by different distances. The wavefront tilts, and its normal direction changes as well.

---

## 2. Notation, Assumptions, and Quantities to Keep Distinct

### 2.1 Notation Table

| Symbol | Meaning | Comment |
|---|---|---|
| $n_e$ | free-electron number density | do not confuse it with the refractive index |
| $n_r$ | refractive index | RL Eq. 8.18 writes this as $n$ |
| $\omega_p$ | plasma angular frequency | in cgs, $\omega_p^2=4\pi n_e e^2/m_e$ |
| $\omega$ | electromagnetic-wave angular frequency | constant along a ray in a stationary medium |
| $\mathbf k$ | local wave vector | perpendicular to a constant-phase surface |
| $k$ | wavenumber $|\mathbf k|$ | $k=2\pi/\lambda_{\rm medium}$ |
| $\hat{\mathbf k}$ | unit direction of the wave vector | $\hat{\mathbf k}=\mathbf k/k=d\mathbf r/dl$ |
| $l$ | arclength measured along the ray | $|d\mathbf r/dl|=1$ |
| $v_{\rm ph}$ | phase velocity | $v_{\rm ph}=\omega/k=c/n_r$ |
| $v_g$ | group velocity | $v_g=d\omega/dk$ |
| $\nabla$ | three-dimensional spatial gradient | includes changes along the ray and parallel to the wavefront |
| $\nabla_\perp$ | gradient perpendicular to the ray direction | only this part changes the ray direction |

### 2.2 Approximations Used Here

- The medium is isotropic, so the refractive index $n_r$ is a scalar.
- The medium is stationary, with no explicit time dependence, so the wave frequency $\omega$ is constant along the ray.
- The refractive index varies only weakly across one wavelength, so geometrical optics or the WKB approximation can be used.
- The wavefront is locally approximated as a plane; all changes in direction are computed to first order.
- Strong absorption, strong reflection, and discontinuous interfaces are ignored; Eq. 8.18 describes continuous refraction in a smooth medium.

In general, for any scalar $f$, the transverse gradient is defined by

$$
\boxed{
\nabla_\perp f
=
\nabla f
-
\hat{\mathbf k}
\left(\hat{\mathbf k}\cdot\nabla f\right)
}.
$$

It subtracts the component of the full gradient that lies along the ray.

---

## 3. Obtaining the Refractive Index from the Cold-Plasma Dispersion Relation

### 3.1 Dispersion Relation

Electromagnetic waves in a cold, unmagnetized, collisionless plasma satisfy

$$
\boxed{
\omega^2=\omega_p^2+c^2k^2
},
$$

where

$$
\omega_p^2=\frac{4\pi n_e e^2}{m_e}
\qquad\text{(Gaussian-cgs)}.
$$

The refractive index is defined as

$$
\boxed{
n_r\equiv\frac{ck}{\omega}
}.
$$

Rearranging the dispersion relation gives

$$
c^2k^2=\omega^2-\omega_p^2.
$$

Dividing both sides by $\omega^2$ gives

$$
\frac{c^2k^2}{\omega^2}
=1-\frac{\omega_p^2}{\omega^2}.
$$

The left-hand side is exactly $n_r^2$, so

$$
\boxed{
n_r^2=1-\frac{\omega_p^2}{\omega^2}
},
$$

and therefore

$$
\boxed{
n_r
=\sqrt{1-\frac{\omega_p^2}{\omega^2}}
}.
$$

For the ordinary mode with positive frequency, positive wavenumber, and propagation along the chosen direction, we take the positive root.

### 3.2 Why It Looks Like the Pythagorean Theorem

The expression has a "sum of squares" appearance because the dispersion relation can be written as

$$
\omega^2=\omega_p^2+(ck)^2.
$$

All three quantities have units of angular frequency:

- $\omega_p$ is the natural collective-oscillation frequency scale of the electrons;
- $ck$ is the frequency scale associated with spatial propagation;
- $\omega$ is the final temporal oscillation frequency of the electromagnetic wave.

Formally, one can draw a "frequency triangle," but this is only an algebraic analogy. It does not mean that three real spatial vectors are mutually perpendicular.

### 3.3 Phase Velocity and Group Velocity

The phase velocity is

$$
\boxed{
v_{\rm ph}=\frac{\omega}{k}=\frac{c}{n_r}>c
}.
$$

The group velocity is

$$
\boxed{
v_g=\frac{d\omega}{dk}
=c\sqrt{1-\frac{\omega_p^2}{\omega^2}}
=cn_r<c
}.
$$

Therefore

$$
v_{\rm ph}v_g=c^2.
$$

$v_{\rm ph}>c$ does not mean that information travels faster than light. The phase of the wavefront moves at $v_{\rm ph}$, while a finite wave packet, energy, and information propagate at $v_g$.

---

## 4. Phase Velocity, Constant-Phase Surfaces, and $dl/dt=v_{\rm ph}$

### 4.1 Definition of Phase Velocity

Consider a local one-dimensional plane wave

$$
E(l,t)=E_0\cos(kl-\omega t).
$$

Its phase is

$$
\Phi(l,t)=kl-\omega t.
$$

If we follow one fixed phase, for example a particular crest, then $\Phi$ remains constant:

$$
d\Phi=0.
$$

Thus

$$
k\,dl-\omega\,dt=0.
$$

Solving gives

$$
\boxed{
\frac{dl}{dt}=\frac{\omega}{k}=v_{\rm ph}
}.
$$

So

$$
\boxed{
dl=v_{\rm ph}\,dt
}
$$

is simply the differential statement "wavefront advance distance = phase velocity times time."

### 4.2 Why This Is Not the Group Velocity

This derivation tracks how constant-phase surfaces move and tilt, so it uses the phase velocity. If one instead tracks the position of a pulse envelope, energy, or information, then the group velocity should be used.

In an isotropic medium, the group-velocity direction is parallel to $\mathbf k$, so phase and energy propagate along the same spatial ray direction, but they move along that path at different speeds.

---

## 5. Describing a Wavefront with a Scalar Function: $F=0$ and $\nabla F$

### 5.1 The Wavefront After a Short Time

Let the initial wavefront be

$$
z=0,
$$

and let it propagate in the $+z$ direction. The initial ray direction is

$$
\hat{\mathbf k}=\hat{\mathbf z}.
$$

Allow the phase velocity to vary slowly across the wavefront:

$$
v_{\rm ph}=v_{\rm ph}(x,y).
$$

After a short time $dt$, the part of the wavefront located at $(x,y)$ advances by

$$
dz=v_{\rm ph}(x,y)\,dt.
$$

Therefore the new wavefront satisfies

$$
z=v_{\rm ph}(x,y)\,dt.
$$

Move all terms to one side and define the scalar function

$$
\boxed{
F(x,y,z)=z-v_{\rm ph}(x,y)\,dt
}.
$$

The new wavefront is the level surface

$$
F(x,y,z)=0.
$$

### 5.2 Meaning of $\nabla$ and $\nabla_\perp$

The three-dimensional gradient operator is

$$
\boxed{
\nabla
=
\hat{\mathbf x}\frac{\partial}{\partial x}
+
\hat{\mathbf y}\frac{\partial}{\partial y}
+
\hat{\mathbf z}\frac{\partial}{\partial z}
}.
$$

Acting on the scalar $F$, it gives

$$
\nabla F
=
\hat{\mathbf x}\frac{\partial F}{\partial x}
+
\hat{\mathbf y}\frac{\partial F}{\partial y}
+
\hat{\mathbf z}\frac{\partial F}{\partial z}.
$$

For

$$
F=z-v_{\rm ph}(x,y)\,dt,
$$

the three partial derivatives are

$$
\frac{\partial F}{\partial x}
=-dt\frac{\partial v_{\rm ph}}{\partial x},
$$

$$
\frac{\partial F}{\partial y}
=-dt\frac{\partial v_{\rm ph}}{\partial y},
$$

$$
\frac{\partial F}{\partial z}=1.
$$

Therefore

$$
\begin{aligned}
\nabla F
&=
-dt\frac{\partial v_{\rm ph}}{\partial x}\hat{\mathbf x}
-dt\frac{\partial v_{\rm ph}}{\partial y}\hat{\mathbf y}
+\hat{\mathbf z}\\
&=
\hat{\mathbf z}
-dt\left(
\hat{\mathbf x}\frac{\partial v_{\rm ph}}{\partial x}
+
\hat{\mathbf y}\frac{\partial v_{\rm ph}}{\partial y}
\right).
\end{aligned}
$$

Because the current propagation direction is $z$, the transverse gradient is

$$
\boxed{
\nabla_\perp
=
\hat{\mathbf x}\frac{\partial}{\partial x}
+
\hat{\mathbf y}\frac{\partial}{\partial y}
}.
$$

Thus

$$
\boxed{
\nabla F
=
\hat{\mathbf z}
-dt\,\nabla_\perp v_{\rm ph}
}.
$$

This only compresses the component expression into vector notation.

### 5.3 Why $\nabla F$ Is Perpendicular to the Wavefront

Take any infinitesimal tangential displacement $d\mathbf r$ on the wavefront $F=0$. Since the displacement remains on the same level surface,

$$
dF=0.
$$

Multivariable calculus gives

$$
dF=\nabla F\cdot d\mathbf r.
$$

Therefore

$$
\nabla F\cdot d\mathbf r=0.
$$

This means that $\nabla F$ is perpendicular to every tangential displacement on the wavefront, so $\nabla F$ is the normal direction to the wavefront. The local wave vector is also perpendicular to a constant-phase surface, so

$$
\boxed{
\mathbf k\parallel\nabla F
}.
$$

---

## 6. Why a Transverse Phase-Velocity Gradient Bends a Ray

### 6.1 The Unit Normal to the New Wavefront

One unnormalized normal to the new wavefront is

$$
\nabla F
=
\hat{\mathbf z}-dt\,\nabla_\perp v_{\rm ph}.
$$

Therefore the new unit normal is

$$
\hat{\mathbf k}_{\rm new}
=
\frac{
\hat{\mathbf z}-dt\,\nabla_\perp v_{\rm ph}
}{
\sqrt{1+dt^2|\nabla_\perp v_{\rm ph}|^2}
}.
$$

When $dt$ is small, the denominator differs from $1$ only at second order:

$$
\sqrt{1+dt^2|\nabla_\perp v_{\rm ph}|^2}
\simeq1.
$$

Keeping only first-order terms,

$$
\hat{\mathbf k}_{\rm new}
\simeq
\hat{\mathbf z}-dt\,\nabla_\perp v_{\rm ph}.
$$

Since

$$
\hat{\mathbf k}_{\rm new}
=\hat{\mathbf k}+d\hat{\mathbf k},
\qquad
\hat{\mathbf k}=\hat{\mathbf z},
$$

we have

$$
d\hat{\mathbf k}
=-dt\,\nabla_\perp v_{\rm ph}.
$$

Dividing both sides by $dt$ gives

$$
\boxed{
\frac{d\hat{\mathbf k}}{dt}
=-\nabla_\perp v_{\rm ph}
}.
\tag{6.1}
$$

### 6.2 Geometrical Meaning of the Minus Sign

If the phase velocity increases in the $+x$ direction, the right side of the wavefront advances farther in the same amount of time. The new wavefront tilts upward to the right, but its normal turns to the left. The ray therefore bends toward the side with smaller phase velocity.

Because

$$
v_{\rm ph}=\frac{c}{n_r},
$$

the side with smaller phase velocity is the side with larger refractive index. Therefore

$$
\boxed{
\text{rays bend toward larger refractive index}
}.
$$

### 6.3 Why Only the Transverse Gradient Appears

If the phase velocity changes only along the ray direction, while every transverse position on the same wavefront has the same speed, then the whole wavefront advances together and does not tilt. In that case the local wavelength may change, but the ray direction does not.

Therefore only

$$
\nabla_\perp v_{\rm ph}
$$

can change $\hat{\mathbf k}$.

---

## 7. Obtaining the Direction Equation from the Phase-Velocity Gradient

### 7.1 Converting a Time Derivative to a Path Derivative

From Section 4, the wavefront advances along the ray during time $dt$ by

$$
dl=v_{\rm ph}\,dt,
$$

that is,

$$
\frac{dl}{dt}=v_{\rm ph}.
$$

The chain rule gives

$$
\frac{d\hat{\mathbf k}}{dt}
=
\frac{d\hat{\mathbf k}}{dl}
\frac{dl}{dt}
=
v_{\rm ph}
\frac{d\hat{\mathbf k}}{dl}.
$$

Combining this with Eq. (6.1),

$$
\boxed{
\frac{d\hat{\mathbf k}}{dl}
=
-\frac{1}{v_{\rm ph}}
\nabla_\perp v_{\rm ph}
}.
\tag{7.1}
$$

### 7.2 Rewriting the Result in Terms of Refractive Index

Since

$$
v_{\rm ph}=\frac{c}{n_r},
$$

we have

$$
\begin{aligned}
\nabla_\perp v_{\rm ph}
&=
\nabla_\perp\left(cn_r^{-1}\right)\\
&=-\frac{c}{n_r^2}\nabla_\perp n_r\\
&=-\frac{v_{\rm ph}}{n_r}\nabla_\perp n_r.
\end{aligned}
$$

Substituting this into Eq. (7.1),

$$
\begin{aligned}
\frac{d\hat{\mathbf k}}{dl}
&=-\frac{1}{v_{\rm ph}}
\left(
-\frac{v_{\rm ph}}{n_r}\nabla_\perp n_r
\right)\\
&=\frac{\nabla_\perp n_r}{n_r}.
\end{aligned}
$$

Therefore

$$
\boxed{
\frac{d\hat{\mathbf k}}{dl}
=\frac{\nabla_\perp n_r}{n_r}
=\nabla_\perp\ln n_r
}.
\tag{7.2}
$$

The left-hand side is the curvature vector of the ray: it tells us how much the direction changes per unit distance traveled.

---

## 8. Complete Derivation of RL Eq. 8.18

### 8.1 Decomposing the Full Gradient into Parallel and Perpendicular Parts

The full refractive-index gradient can be decomposed as

$$
\boxed{
\nabla n_r
=
\nabla_\perp n_r
+
\hat{\mathbf k}
\left(\hat{\mathbf k}\cdot\nabla n_r\right)
}.
\tag{8.1}
$$

The rate of change of refractive index along the ray is

$$
\boxed{
\frac{dn_r}{dl}
=
\frac{d\mathbf r}{dl}\cdot\nabla n_r
=
\hat{\mathbf k}\cdot\nabla n_r
}.
\tag{8.2}
$$

### 8.2 Expanding the Product Derivative

Differentiate $n_r\hat{\mathbf k}$ along the path:

$$
\frac{d}{dl}\left(n_r\hat{\mathbf k}\right)
=
n_r\frac{d\hat{\mathbf k}}{dl}
+
\hat{\mathbf k}\frac{dn_r}{dl}.
$$

Using Eq. (7.2),

$$
n_r\frac{d\hat{\mathbf k}}{dl}
=\nabla_\perp n_r.
$$

Using Eq. (8.2),

$$
\hat{\mathbf k}\frac{dn_r}{dl}
=
\hat{\mathbf k}
\left(\hat{\mathbf k}\cdot\nabla n_r\right).
$$

Therefore

$$
\begin{aligned}
\frac{d}{dl}\left(n_r\hat{\mathbf k}\right)
&=
\nabla_\perp n_r
+
\hat{\mathbf k}
\left(\hat{\mathbf k}\cdot\nabla n_r\right)\\
&=\nabla n_r.
\end{aligned}
$$

The final result is

$$
\boxed{
\frac{d}{dl}\left(n_r\hat{\mathbf k}\right)
=\nabla n_r
}.
\tag{8.18}
$$

### 8.3 Cross-Check from Fermat's Principle

The optical path is

$$
\mathcal S=\int n_r(\mathbf r)\,dl.
$$

If an arbitrary parameter $u$ describes the path, with $dl=|d\mathbf r/du|du$, then

$$
\mathcal S
=
\int n_r(\mathbf r)
\left|\frac{d\mathbf r}{du}\right|du.
$$

Treating the integrand as a Lagrangian, the Euler-Lagrange equation gives

$$
\frac{d}{du}
\left(
n_r
\frac{d\mathbf r/du}{|d\mathbf r/du|}
\right)
=
\left|\frac{d\mathbf r}{du}\right|
\nabla n_r.
$$

Choosing the arclength itself as the parameter, $u=l$, gives

$$
\left|\frac{d\mathbf r}{dl}\right|=1,
\qquad
\frac{d\mathbf r}{dl}=\hat{\mathbf k}.
$$

Thus we again obtain

$$
\frac{d}{dl}\left(n_r\hat{\mathbf k}\right)
=\nabla n_r.
$$

The wavefront derivation gives the intuitive picture, while Fermat's principle provides an independent variational derivation. The two are completely consistent.

---

## 9. Physical Meaning of Eq. 8.18 and Plasma Applications

### 9.1 Ray Curvature

The direction equation

$$
\frac{d\hat{\mathbf k}}{dl}
=\frac{\nabla_\perp n_r}{n_r}
$$

shows that the magnitude of the ray curvature is

$$
\boxed{
\frac{1}{R}
=
\left|\frac{d\hat{\mathbf k}}{dl}\right|
=
\frac{|\nabla_\perp n_r|}{n_r}
}.
$$

Therefore:

- $\nabla_\perp n_r=0$: the ray does not bend;
- the larger the transverse refractive-index gradient, the stronger the bending;
- the ray bends toward the side with larger $n_r$ and smaller $v_{\rm ph}$;
- a purely longitudinal gradient changes the local wavelength but not the ray direction.

### 9.2 Gradient Direction in a Cold Plasma

The cold-plasma refractive index is

$$
n_r
=
\sqrt{1-\frac{\omega_p^2}{\omega^2}}.
$$

At fixed frequency $\omega$,

$$
\nabla n_r
=
-\frac{1}{2n_r\omega^2}
\nabla\omega_p^2.
$$

In Gaussian-cgs units,

$$
\omega_p^2=\frac{4\pi e^2}{m_e}n_e,
$$

so

$$
\boxed{
\nabla n_r
=
-\frac{2\pi e^2}{m_e\omega^2n_r}
\nabla n_e
}.
$$

Therefore

$$
\boxed{
\nabla n_r\ \text{and}\ \nabla n_e\ \text{point in opposite directions}
}.
$$

Electron overdense regions have smaller refractive index and larger phase velocity. Since rays bend toward larger refractive index, they usually bend away from electron overdensities:

$$
\boxed{
\text{electron overdensities usually act as diverging plasma lenses}
}.
$$

### 9.3 High-Frequency Limit and Thin Phase Screens

When $\omega\gg\omega_p$,

$$
n_r
\simeq
1-\frac{\omega_p^2}{2\omega^2}
=
1-\frac{r_e\lambda^2}{2\pi}n_e.
$$

The small-angle form of the direction equation is

$$
\frac{d\hat{\mathbf k}}{dl}
\simeq
-\frac{r_e\lambda^2}{2\pi}
\nabla_\perp n_e.
$$

Integrating along a thin plasma screen and defining the electron column density

$$
N_e=\int n_e\,dl,
$$

gives the deflection angle

$$
\boxed{
\boldsymbol\alpha
\simeq
-\frac{r_e\lambda^2}{2\pi}
\nabla_\perp N_e
}.
$$

Thus plasma refraction approximately satisfies

$$
|\boldsymbol\alpha|\propto\lambda^2.
$$

Refraction, scattering, and scintillation are therefore more pronounced for low-frequency, long-wavelength radio waves.

---

## 10. Dimensional Checks, Limiting Checks, and Common Confusions

### 10.1 Dimensional Checks

The left-hand side of Eq. 8.18 is

$$
\left[
\frac{d}{dl}
\left(n_r\hat{\mathbf k}\right)
\right]
=L^{-1},
$$

because both $n_r$ and $\hat{\mathbf k}$ are dimensionless.

The right-hand side is

$$
[\nabla n_r]=L^{-1}.
$$

The two sides agree.

In the wavefront-rotation equation,

$$
[dt\,\nabla v_{\rm ph}]
=T\frac{L/T}{L}=1,
$$

which matches the dimensionless direction change $d\hat{\mathbf k}$.

### 10.2 Limiting Checks

1. Uniform medium:

   $$
   \nabla n_r=0
   \quad\Rightarrow\quad
   \frac{d\hat{\mathbf k}}{dl}=0,
   $$

   so the ray is a straight line.

2. Gradient exactly parallel to the ray:

   $$
   \nabla_\perp n_r=0,
   $$

   so the direction is unchanged, though the local wavenumber and wavelength may change.

3. Vacuum limit:

   $$
   n_e\to0
   \Rightarrow
   \omega_p\to0
   \Rightarrow
   n_r\to1,
   $$

   recovering straight-line propagation in vacuum.

4. High-frequency limit:

   $$
   \omega\to\infty
   \Rightarrow
   n_r\to1,
   $$

   so plasma deflection tends to zero.

5. Approaching the cutoff frequency:

   $$
   \omega\to\omega_p^+,
   $$

   $n_r\to0$, and the geometrical-optics approximation may fail, so the high-frequency expansion cannot be continued without qualification.

### 10.3 Common Confusions

1. $n_e$ is electron number density, while $n_r$ is refractive index.
2. $\nabla F$ is the gradient of the scalar field $F$ and also the normal direction to the level surface $F=0$.
3. $\nabla_\perp$ is not an additional physical force; it is the part of the full gradient perpendicular to the ray.
4. $d\hat{\mathbf k}/dl$ changes the direction; $dn_r/dl$ changes the magnitude of the refractive index along the path.
5. Phase velocity describes wavefronts; group velocity describes wave packets, energy, and information.
6. $v_{\rm ph}>c$ does not violate relativity, because an isolated phase point does not carry independent information.
7. Eq. 8.18 requires the medium to vary smoothly on wavelength scales. At a sharp interface, one usually uses Snell's law directly and accounts for reflection.
8. Rays bend toward larger refractive index; in a cold plasma, larger electron density instead corresponds to smaller refractive index.

---

## 11. English assignment-ready derivation

Let $n_r(\mathbf r)$ be the refractive index and let $\hat{\mathbf k}$ denote the local ray direction, normal to the wavefront. Consider an initially plane wavefront propagating in the $+z$ direction. If the phase velocity varies across the wavefront, then after a short time $dt$ the new wavefront is

$$
F(x,y,z)
=z-v_{\rm ph}(x,y)dt=0.
$$

Its normal is

$$
\nabla F
=\hat{\mathbf z}-dt\,\nabla_\perp v_{\rm ph}.
$$

To first order in $dt$, the corresponding change in ray direction is therefore

$$
\frac{d\hat{\mathbf k}}{dt}
=-\nabla_\perp v_{\rm ph}.
$$

Because a surface of constant phase propagates with the phase velocity,

$$
\frac{dl}{dt}=v_{\rm ph}.
$$

Using the chain rule gives

$$
\frac{d\hat{\mathbf k}}{dl}
=-\frac{1}{v_{\rm ph}}
\nabla_\perp v_{\rm ph}.
$$

Since $v_{\rm ph}=c/n_r$,

$$
\nabla_\perp v_{\rm ph}
=-\frac{v_{\rm ph}}{n_r}
\nabla_\perp n_r,
$$

and hence

$$
\boxed{
\frac{d\hat{\mathbf k}}{dl}
=\frac{\nabla_\perp n_r}{n_r}
}.
$$

The full refractive-index gradient can be decomposed as

$$
\nabla n_r
=
\nabla_\perp n_r
+
\hat{\mathbf k}
\left(\hat{\mathbf k}\cdot\nabla n_r\right),
$$

while

$$
\frac{dn_r}{dl}
=\hat{\mathbf k}\cdot\nabla n_r.
$$

Therefore,

$$
\begin{aligned}
\frac{d}{dl}\left(n_r\hat{\mathbf k}\right)
&=
n_r\frac{d\hat{\mathbf k}}{dl}
+
\hat{\mathbf k}\frac{dn_r}{dl}\\
&=
\nabla_\perp n_r
+
\hat{\mathbf k}
\left(\hat{\mathbf k}\cdot\nabla n_r\right)\\
&=\nabla n_r.
\end{aligned}
$$

Thus,

$$
\boxed{
\frac{d}{dl}\left(n_r\hat{\mathbf k}\right)
=\nabla n_r
}.
$$

Only the component of the refractive-index gradient perpendicular to the ray changes its direction. The parallel component changes the local wavelength but does not bend the ray.

---

## 12. Review Checklist and References

### 12.1 What You Should Be Able to Derive Independently

- Derive $n_r=\sqrt{1-\omega_p^2/\omega^2}$ from $\omega^2=\omega_p^2+c^2k^2$.
- Derive $dl/dt=v_{\rm ph}$ from the fixed-phase condition $d(kl-\omega t)=0$.
- Compute $\nabla F$ from $F=z-v_{\rm ph}(x,y)dt=0$.
- Explain why $\nabla F$ is perpendicular to the wavefront.
- Derive $d\hat{\mathbf k}/dt=-\nabla_\perp v_{\rm ph}$ from the change in the wavefront normal.
- Use the chain rule and $v_{\rm ph}=c/n_r$ to derive $d\hat{\mathbf k}/dl=\nabla_\perp n_r/n_r$.
- Expand the product derivative and recover RL Eq. 8.18.
- Explain why a cold-plasma overdensity usually acts as a diverging lens.

### 12.2 Core Results Worth Memorizing

$$
\boxed{
\omega^2=\omega_p^2+c^2k^2,
\qquad
n_r=\frac{ck}{\omega}
=\sqrt{1-\frac{\omega_p^2}{\omega^2}}
}
$$

$$
\boxed{
v_{\rm ph}=\frac{c}{n_r},
\qquad
\frac{dl}{dt}=v_{\rm ph}
}
$$

$$
\boxed{
\frac{d\hat{\mathbf k}}{dl}
=\frac{\nabla_\perp n_r}{n_r}
}
$$

$$
\boxed{
\frac{d}{dl}\left(n_r\hat{\mathbf k}\right)
=\nabla n_r
}
$$

$$
\boxed{
\boldsymbol\alpha
\simeq
-\frac{r_e\lambda^2}{2\pi}
\nabla_\perp N_e
}
$$

### 12.3 References

1. G. B. Rybicki & A. P. Lightman, *Radiative Processes in Astrophysics*, Section 8.1, especially Eq. 8.15-8.18 on printed p. 227.
2. The AST1440 notes on electromagnetic waves, cold-plasma dispersion, and Problems 2.2, 8.1, and 8.2 in the same course directory: cold-plasma dispersion, phase velocity, and group velocity.
3. The AST1440 notes on polarization, Faraday rotation, plasma refraction, scintillation, and Problem 8.3 in the same course directory: plasma phase screens, deflection angles, scattering, and scintillation.
