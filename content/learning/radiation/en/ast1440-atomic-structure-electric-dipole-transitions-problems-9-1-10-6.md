---
title: "AST1440 | Atomic Structure, Electric Dipole Transitions, Selection Rules, and RL Problems 9.1 and 10.6"
description: "Explains atomic orbitals, parity, the Pauli principle, exchange correlation, electric dipole coupling, Einstein coefficients, and selection rules, with worked solutions to RL Problems 9.1 and 10.6."
date: "2026-11-23"
tags: ["AST1440","Atomic structure","Electric dipole transitions","Selection rules","Exercises"]
order: 20
draft: false
translation: "AI-assisted English translation"
sourceHash: "ebb32d0ce55380eaaa4516a4ccee965ba37fc17cfd8dfb79cbbb7717c7732f0d"
---

# AST1440 | Atomic Structure, Electric Dipole Transitions, Selection Rules, and RL Problems 9.1 and 10.6

> **Course** — AST1440 Radiation\
> **Prepared on November 23, 2026**, for the November 19 reading assignment on *Atoms and dipole transitions*.\
> **Textbook** — Rybicki & Lightman, *Radiative Processes in Astrophysics*, §§9.1–9.2, the first 1.2 pages or so of §9.3, and §§10.1–10.4.\
> **Assigned problems** — RL **9.1** and **10.6**. The latter is the numbered problem. Section 10.6 covers line broadening.\
> **How to study these notes** — Start with the physical picture, then follow the key steps in the derivations. You can work through these notes before mastering every quantum-mechanical technique. They include diagrams, follow-up questions, step-by-step outlines, and detailed worked solutions.\
> **Figures** — The original illustrations are embedded below.

---

## 0. From electron clouds to spectral lines

1. **Schrödinger equation → atomic orbitals.** Which electron states can an atom support?
2. **Antisymmetrization → exchange correlation.** Why does the Pauli principle matter in a multi-electron atom?
3. **Interaction with light → radiative transitions.** How do atoms couple to photons?
4. **Matrix elements and symmetry → selection rules.** Why do some spectral lines appear while some transitions vanish in the E1 approximation?
5. **Einstein coefficients → transition rates.** How often does an allowed transition occur?

Three quantities play distinct roles.

- The **energy difference** sets the photon frequency through $h\nu=E_i-E_f$. In emission, $E_i>E_f$.
- The **transition matrix element** determines whether the electric dipole coupling vanishes and how strong it is if nonzero.
- The **Einstein coefficients** describe the rates of spontaneous emission, absorption, and stimulated emission.

---

## 1. Where do atomic orbitals come from? RL §§9.1–9.2

### 1.1 An electron occupies a quantum state rather than following a definite path around the nucleus

The wave function $\psi(\mathbf r)$ describes the quantum state, and $|\psi(\mathbf r)|^2$ is its spatial probability density. Normalization requires

$$
\int |\psi(\mathbf r)|^2\,d^3r=1.
$$

A stationary state satisfies the time-independent Schrödinger equation.

$$
\boxed{\hat H\psi=E\psi},\qquad
\hat H=-\frac{\hbar^2}{2m_e}\nabla^2+V(r).
$$

We first consider a central potential $V(r)$, where the potential energy depends only on the distance $r$ from the nucleus. The **boundary conditions** restrict the bound states to discrete energies, much as a string supports only certain standing-wave modes.

For a hydrogen-like atom with one electron in a pure Coulomb potential, neglect fine structure and similar corrections to obtain

$$
\boxed{E_n=-\frac{13.6 Z^2}{n^2}\ \mathrm{eV}}.
$$

Here $Z$ is the nuclear charge number. In this ideal model, different $l,m$ states with the same $n$ are degenerate. Multi-electron interactions and finer corrections can lift some of this degeneracy.

### 1.2 Three spatial quantum numbers and one spin quantum number

In a central potential, the wave function separates as

$$
\boxed{\psi_{nlm}(r,\theta,\phi)=R_{nl}(r)Y_l^m(\theta,\phi)}.
$$

| Quantum number | Values | Role | Common notation |
|---|---|---|---|
| $n$ | $1,2,3,\ldots$ | Energy level and characteristic size | Number in 1s, 2p, or 3d |
| $l$ | $0,1,\ldots,n-1$ | Orbital angular momentum and angular structure | $0=s,\ 1=p,\ 2=d,\ 3=f$ |
| $m$ | $-l,\ldots,l$ | $L_z=m\hbar$ and phase structure around the $z$ axis | $2l+1$ possible values |
| $m_s$ | $\pm\tfrac12$ | Electron spin projection | $\uparrow,\downarrow$ |

The angular momentum satisfies $L^2=l(l+1)\hbar^2$. The spherical harmonics have the form

$$
\boxed{Y_l^m(\theta,\phi)=F_{lm}(\theta)e^{im\phi}}.
$$

**The factor $e^{im\phi}$ is the basis for the derivation of the $\Delta m$ selection rule below.**

### 1.3 What shapes do the s, p, and d orbitals have?

![Qualitative sketches of s, p, and d orbitals](/learning/radiation/atomic-structure/atomic_orbitals.svg)

**The colors show opposite signs of the wave function, independent of the electron’s charge.** An orbital is a one-electron quantum state. The lobes typically show surfaces of constant wave-function magnitude or qualitative sketches.

### 1.4 Why do we write $d_{x^2-y^2}$ but simply $d_{z^2}$?

A spherically symmetric atom has no preferred $z$ axis. **These orbitals are a convenient choice of basis.**

Ignoring constants and the common $1/r^2$ factor, the angular parts of five commonly used real $d$ orbitals are

$$
\begin{aligned}
d_{xy}&\propto xy,\\
d_{xz}&\propto xz,\\
d_{yz}&\propto yz,\\
d_{x^2-y^2}&\propto x^2-y^2,\\
d_{z^2}&\propto 3z^2-r^2=2z^2-x^2-y^2.
\end{aligned}
$$

The last orbital is commonly abbreviated as $d_{z^2}$. Its angular dependence contains more than the term $z^2$ alone.

The proposed $z^2-x^2$ is also a valid $d$-type angular wave function because

$$
\boxed{
 z^2-x^2=\tfrac12[(2z^2-x^2-y^2)-(x^2-y^2)].
}
$$

It is a linear combination of the standard basis, which already spans the $d$ orbitals. The $l=2$ subspace has dimension $2l+1=5$. Likewise, $2x^2-y^2-z^2$ and $2y^2-x^2-z^2$ are valid choices. The three rotated forms sum to zero and are therefore linearly dependent.

Choosing the $z$ axis to define $L_z$ eigenstates is **a coordinate convention**. For an isolated spherically symmetric atom, rotating the entire basis gives an equivalent description.

---

## 2. Parity and the sign of the wave function

### 2.1 Start with one dimension

Parity describes how **the function itself** changes when all spatial coordinates are reversed.

- Even parity satisfies $f(-x)=f(x)$, as in $x^2$.
- Odd parity satisfies $f(-x)=-f(x)$, as in $x$.
- The function $x+1$ has no definite parity.

![Examples of even and odd functions and a function with no definite parity](/learning/radiation/atomic-structure/parity.svg)

In three dimensions, spatial inversion is

$$
(x,y,z)\longmapsto(-x,-y,-z).
$$

For orbitals in a central potential, the spherical harmonics satisfy

$$
\boxed{\psi_{nlm}(-\mathbf r)=(-1)^l\psi_{nlm}(\mathbf r)}.
$$

The s and d orbitals therefore have **even** parity, while p and f orbitals have **odd** parity.

### 2.2 Why is the p-orbital probability cloud symmetric even though its wave function is odd?

Squaring the magnitude removes the sign.

$$
|\psi(-\mathbf r)|^2=|\psi(\mathbf r)|^2.
$$

The two lobes of a p orbital have opposite phases, but their **probability density** is symmetric about the origin. **Transition calculations require the phase-carrying wave function $\psi$ in addition to the information in $|\psi|^2$.**

### 2.3 Integrals of odd functions

An odd function integrates to zero over a symmetric interval.

$$
\boxed{\int_{-a}^{a}f_{\rm odd}(x)\,dx=0}.
$$

Contributions from opposite sides have opposite signs and **cancel coherently**. This is why an s→s transition vanishes in the E1 approximation.

---

## 3. The Pauli principle and multi-electron wave functions in RL §9.3

### 3.1 Electrons are identical fermions

Exchanging **all labels, including position and spin**, of two electrons reverses the sign of the total wave function.

$$
\boxed{\Psi(1,2)=-\Psi(2,1)}.
$$

Take two orthonormal one-electron spin orbitals $u_a,u_b$. Then

$$
\boxed{\Psi(1,2)=\frac1{\sqrt2}[u_a(1)u_b(2)-u_b(1)u_a(2)]}.
$$

This is the simplest Slater determinant. If $a=b$, the right-hand side vanishes. Two fermions thus cannot occupy the same single-particle spin orbital.

![The two assignments of electrons to orbitals and their antisymmetric combination](/learning/radiation/atomic-structure/exchange_assignments.svg)

**Notation.** The term $u_a(1)$ means that orbital $a$ is evaluated at the coordinates of electron 1, and $u_b(2)$ evaluates orbital $b$ at the coordinates of electron 2. The indices label coordinates in the wave function. They do not identify individually traceable electrons.

### 3.2 The exchange hole arises from antisymmetry

For two electrons with equal spins, the spatial part must be antisymmetric. It vanishes when their positions coincide.

$$
\Psi(\mathbf r,\mathbf r)=0
\qquad\text{(for equal spins)}.
$$

There is therefore a **deficit in joint probability** at small separations, called the exchange hole. This statistical correlation survives even when electron–electron Coulomb repulsion is omitted. It follows from the antisymmetry of the wave function.

Two distinct effects enter this discussion.

- **Coulomb repulsion** is the physical interaction between charges.
- **Exchange correlation** is a consequence of quantum statistics for identical fermions.

---

## 4. How do atoms interact with light? Electric dipole coupling in RL §§10.1–10.2

### 4.1 The energy-level difference sets the emitted photon energy

If the initial state $|i\rangle$ transitions to the final state $|f\rangle$ with $E_i>E_f$, the atom emits a photon with energy

$$
\boxed{h\nu=E_i-E_f}.
$$

**The energy gap sets the photon frequency.** The atom's interaction with the electromagnetic field determines whether the transition can occur and at what rate.

### 4.2 What is an electric dipole?

For a charge distribution, the dipole moment is defined as

$$
\mathbf d=\sum_i q_i\mathbf r_i.
$$

With the hydrogen nucleus at the origin, the electron contributes $\mathbf d=-e\mathbf r$. If the wavelength is much larger than the atom, the electric field is nearly uniform over the atom.

$$
ka_0\ll1,\qquad k=\frac{2\pi}{\lambda}.
$$

The interaction Hamiltonian can then be approximated as

$$
\boxed{H_{\rm int}\simeq-\mathbf d\cdot\mathbf E(t)}.
$$

This is the **electric dipole approximation**, denoted **E1**. It gives the lowest-order and usually strongest multipole coupling between the atom and the radiation field.

**E1 identifies the coupling mechanism.** Spontaneous emission, stimulated emission, and absorption identify the physical processes in which that coupling can contribute.

### 4.3 The transition matrix element determines which states couple

In quantum mechanics, the interaction-induced transition amplitude for $i\to f$ is proportional to

$$
\boxed{
\mathbf d_{fi}=\langle f|\mathbf d|i\rangle
=-e\int\psi_f^*(\mathbf r)\,\mathbf r\,\psi_i(\mathbf r)\,d^3r.
}
$$

**Why integrate?** The wave function spans space. Each position contributes a **phase-carrying amplitude** to the transition. The integral **sums these amplitudes coherently** over space. Contributions from different positions can cancel exactly.

- If $\mathbf d_{fi}=0$, the E1 coupling vanishes and the transition is E1-forbidden.
- If $\mathbf d_{fi}\ne0$, symmetry can allow E1 coupling, and the rate depends on the squared magnitude of the matrix element.

**The static and transition dipoles are different matrix elements.** The static expectation values $\langle i|\mathbf d|i\rangle$ and $\langle f|\mathbf d|f\rangle$ can both vanish while the **transition dipole** $\langle f|\mathbf d|i\rangle$ remains nonzero.

### 4.4 Applying parity to 2s→1s and 2p→1s

The E1 matrix element contains $\psi_f^*\mathbf r\psi_i$, where $\mathbf r$ has odd parity.

- **2s→1s.** Even × odd × even is odd. The integral over all space vanishes, so the transition is **E1-forbidden**.
- **2p→1s.** Even × odd × odd is even. Parity permits the integral to be nonzero, and the transition is **E1-allowed** when the other conditions are met.

Other channels can produce decay when E1 is forbidden. Hydrogen 2s→1s, for example, can proceed through **two-photon decay**. Higher-order one-photon channels also exist, including M1 (magnetic dipole) and E2 (electric quadrupole). Whether they operate depends on their own selection rules.

---

## 5. Review of the Einstein A and B coefficients in RL §10.3

![Spontaneous emission, absorption, and stimulated emission](/learning/radiation/atomic-structure/einstein_processes.svg)

Let $E_2>E_1$, with line frequency given by $h\nu=E_2-E_1$. If $u_\nu$ is the **radiation energy density per unit frequency**, the narrow-line approximation gives these rates for an atom in the relevant level.

| Process | Rate per atom | Can it proceed through E1? |
|---|---|---|
| Spontaneous emission $2\to1$ | $A_{21}$ | Yes |
| Absorption $1\to2$ | $B_{12}u_\nu$ | Yes |
| Stimulated emission $2\to1$ | $B_{21}u_\nu$ | Yes |

A treatment that resolves the finite line profile uses a weighted frequency integral. The definition of $u_\nu$ here follows RL.

In thermal equilibrium, the upward and downward transition rates balance.

$$
n_1 B_{12}u_\nu=n_2(A_{21}+B_{21}u_\nu).
$$

The Boltzmann distribution also gives

$$
\frac{n_2}{n_1}=\frac{g_2}{g_1}e^{-h\nu/k_BT}.
$$

Comparing with the Planck blackbody energy density yields the Einstein relations.

$$
\boxed{g_1B_{12}=g_2B_{21}},\qquad
\boxed{\frac{A_{21}}{B_{21}}=\frac{8\pi h\nu^3}{c^3}}.
$$

For spontaneous electric dipole emission between an individual pair of initial and final states in vacuum,

$$
\boxed{A_{if}^{\rm(E1)}=\frac{\omega_{if}^3}{3\pi\epsilon_0\hbar c^3}|\mathbf d_{fi}|^2},\qquad \omega_{if}=\frac{E_i-E_f}{\hbar}>0.
$$

The selection rules therefore connect directly to the Einstein coefficients. **A zero matrix element implies zero E1 coupling through the corresponding A and B coefficients.** For an upper state with several decay channels, the total spontaneous decay rate is $\sum_f A_{if}$ and the mean lifetime is approximately $\tau=1/\sum_f A_{if}$.

In blackbody radiation, the ratio of stimulated to spontaneous emission rates for a single atom in the upper state is

$$
\boxed{\frac{B_{21}u_\nu}{A_{21}}=\frac{1}{e^{h\nu/k_BT}-1}}.
$$

This equals the mean photon occupation number of the corresponding mode. Stimulated emission is relatively more important at low frequencies or high photon occupation.

The **oscillator strength** $f_{if}$ is a dimensionless measure of line strength. For absorption between two states of a single electron at frequency $\omega_{fi}>0$, a common convention gives

$$
f_{if}=\frac{2m_e\omega_{fi}}{3\hbar e^2}|\mathbf d_{fi}|^2.
$$

Conventions differ when textbooks sum or average over degenerate states. The main point here is that **the energy gap sets the frequency and the transition matrix element sets the coupling strength**.

> **On the semiclassical treatment.** RL §10.1 quantizes the atom and treats the radiation field classically. This allows direct calculations of absorption and stimulated emission. A first-principles explanation of spontaneous emission in the absence of an incident field requires quantizing the radiation field. The Einstein relations connect the semiclassical results to the corresponding A coefficient.

---

## 6. Where do the E1 selection rules come from? RL §10.4

For a one-electron orbital in a central potential, the necessary angular selection rules for E1 transitions are

$$
\boxed{\Delta l=\pm1,\qquad \Delta m=0,\pm1}.
$$

These two rules follow from **different symmetry constraints** and are easiest to understand separately.

### 6.1 The $\Delta m$ rule and the $\phi$ integral

Start from the position matrix element.

$$
\langle f|z|i\rangle
=\int\psi_f^*(r,\theta,\phi)\,(r\cos\theta)\,\psi_i(r,\theta,\phi)\,r^2dr\sin\theta\,d\theta\,d\phi.
$$

Since $Y_l^m\propto e^{im\phi}$, the final state's complex conjugate contributes $e^{-im_f\phi}$. The factor $z=r\cos\theta$ is independent of $\phi$, so the integral over $\phi$ separates as

$$
\boxed{I_\phi=\int_0^{2\pi}e^{i(m_i-m_f)\phi}\,d\phi}.
$$

**Why integrate over the entire angle when we can evaluate the integrand at a single $\phi$?**

- The matrix element sums contributions over all three spatial dimensions, with $\phi$ as one of the angular coordinates.
- Different azimuths contribute different **complex phases**.
- Summing over a full turn from $\phi=0\to2\pi$ determines whether the phases cancel completely.

![Addition and cancellation of the azimuthal phase](/learning/radiation/atomic-structure/phi_phase_cancellation.svg)

Let $k=m_i-m_f$, an integer. Consider the two cases.

If $k=0$,

$$
\int_0^{2\pi}1\,d\phi=2\pi.
$$

If $k\ne0$,

$$
\int_0^{2\pi}e^{ik\phi}\,d\phi
=\left[\frac{e^{ik\phi}}{ik}\right]_0^{2\pi}
=\frac{e^{i2\pi k}-1}{ik}=0.
$$

Therefore,

$$
\boxed{I_\phi=2\pi\,\delta_{m_i,m_f}}.
$$

**The $z$ component requires $\Delta m=0$.**

Where do the $\pm1$ cases come from? Use

$$
x\pm iy=r\sin\theta e^{\pm i\phi}.
$$

The angular integral for $x\pm iy$ then contains the phase factor

$$
e^{-im_f\phi}e^{\pm i\phi}e^{im_i\phi}
=e^{i(m_i-m_f\pm1)\phi}.
$$

Avoiding cancellation requires $m_f=m_i\pm1$. Putting the three components of the dipole operator together gives

$$
\boxed{\Delta m=0,\pm1}.
$$

A nonzero $\phi$ integral is only a necessary condition. The remaining integrals over $r$ and $\theta$ can still vanish.

### 6.2 The $\Delta l$ rule from parity and angular momentum

An orbital with definite $l$ has parity $(-1)^l$, while $\mathbf r$ is odd. For parity to permit a nonzero matrix element, we require

$$
(-1)^{l_f}\cdot(-1)\cdot(-1)^{l_i}=+1,
$$

Thus $l_f+l_i$ must be odd. This rules out $\Delta l=0,\pm2,\ldots$, while parity alone still permits $\Delta l=\pm3,\pm5,\ldots$.

The second restriction comes from the angular structure of $\mathbf r$. It is a **rank-1 spherical tensor**, with angular dependence related to an angular-momentum-$1$ spherical harmonic $Y_1^q$. Angular momentum coupling imposes the triangle condition

$$
|l_i-1|\le l_f\le l_i+1.
$$

This leaves $l_f=l_i-1,l_i,l_i+1$. **Parity must change**, so we can discard $l_f=l_i$ and obtain

$$
\boxed{\Delta l=\pm1}.
$$

The following spherical-harmonic identity gives a more concrete way to see this if angular momentum coupling is unfamiliar.

$$
\cos\theta\,Y_l^m
=a_{l+1,m}Y_{l+1}^m+a_{l-1,m}Y_{l-1}^m,
$$

The coefficients $a$ depend on $l,m$, and one term can vanish in limiting cases. **Multiplication by $z/r=\cos\theta$ couples the original angular mode only to $l\pm1$.** This is the same selection rule written explicitly.

### 6.3 Examples

| Transition | $\Delta l$ | E1 allowed? | Reason |
|---|---:|---|---|
| $2s\to1s$ | $0$ | No | Parity is unchanged, so the E1 matrix element vanishes |
| $2p\to1s$ | $-1$ | Yes | Some magnetic substates satisfy the $\Delta m$ condition |
| $3d\to2p$ | $-1$ | Yes | Some magnetic substates satisfy the $\Delta m$ condition |
| $3d\to1s$ | $-2$ | No | Fails the $\Delta l=\pm1$ condition |
| $3p\to1s$ | $-1$ | Yes | $\Delta n=-2$ is possible because E1 has no $\Delta n=\pm1$ requirement |

Allowed here means **at least one pair of magnetic substates satisfies the conditions**. For a specified pair $m_i,m_f$, check the rules individually. Even when the angular rules are satisfied, the radial matrix element can vanish.

---

## 7. RL Problem 9.1 — Mean squared separation of two electrons and the exchange term

### 7.1 What is the problem asking?

Two electrons occupy orthogonal one-electron spin orbitals $a,b$. Neglect electrostatic repulsion between them and calculate the mean **squared** separation.

$$
\boxed{R^2=|\mathbf r_1-\mathbf r_2|^2=r_1^2+r_2^2-2\mathbf r_1\cdot\mathbf r_2}.
$$

Parts (a)–(d) ask you to derive the exchange term, use parity to eliminate the mean positions of the individual orbitals, examine opposite spins, and compare the mean squared separations. The comparison concerns $\langle R^2\rangle$. A statement about $\langle R\rangle$ would require a separate argument.

### 7.2 Interpreting $u_a(1)u_b(2)$ and expectation values

The notation is $u_a(1)=u_a(\mathbf r_1,s_1)$ and $u_b(2)=u_b(\mathbf r_2,s_2)$. Suppressing $s$ for the moment, the product represents a joint amplitude. With the two-electron state normalized, $|\Psi(\mathbf r_1,\mathbf r_2)|^2$ gives the joint spatial probability density.

For one particle, the ordinary position expectation value is

$$
\langle x\rangle=\int\psi^*(x)x\psi(x)\,dx
=\int x|\psi(x)|^2dx.
$$

For two particles, evaluating $\langle x_1x_2\rangle$ requires integrating over **both** $x_1,x_2$. We use $d\tau$ to denote integration over the position coordinates and summation over the discrete spin variables.

### 7.3 (a) Where do the direct and exchange terms come from?

Define amplitudes for the two ways of assigning electrons to orbitals.

$$
A=u_a(1)u_b(2),\qquad B=u_b(1)u_a(2),
$$

Take the antisymmetric wave function

$$
\Psi=\frac{A-B}{\sqrt2}.
$$

The main quantity to calculate is the cross-position expectation value $\langle\mathbf r_1\cdot\mathbf r_2\rangle$. For brevity, write the operator as $O=\mathbf r_1\cdot\mathbf r_2$. Then

$$
\begin{aligned}
\langle O\rangle
&=\int\Psi^*O\Psi\,d\tau_1d\tau_2\\
&=\tfrac12\int(A^*-B^*)O(A-B)\,d\tau_1d\tau_2\\
&=\tfrac12\big(I_{AA}-I_{AB}-I_{BA}+I_{BB}\big).
\end{aligned}
$$

**Why are there four terms?** This follows directly from $(a-b)(c-d)=ac-ad-bc+bd$. Our notation includes $I_{AB}=\int A^*OB$ and analogous terms.

#### Direct terms $A^*OA$ and $B^*OB$

Start with $I_{AA}$.

$$
\begin{aligned}
I_{AA}
&=\int u_a^*(1)u_b^*(2)(\mathbf r_1\cdot\mathbf r_2)u_a(1)u_b(2)\,d\tau_1d\tau_2\\
&=\Big(\int u_a^*(1)\mathbf r_1u_a(1)\,d\tau_1\Big)
 \cdot\Big(\int u_b^*(2)\mathbf r_2u_b(2)\,d\tau_2\Big)\\
&=\mathbf r_a\cdot\mathbf r_b.
\end{aligned}
$$

Here $\mathbf r_a\equiv\langle a|\mathbf r|a\rangle$ and $\mathbf r_b\equiv\langle b|\mathbf r|b\rangle$. **Why does the integral factorize?** One factor depends only on particle 1's variables and the other only on particle 2's variables. This is analogous to factoring the expectation of a product of independent random variables.

The corresponding term is $I_{BB}=\mathbf r_a\cdot\mathbf r_b$.

#### Exchange terms $A^*OB$ and $B^*OA$

Here one factor uses $A$ and the other uses $B$, **with the labels exchanged**.

$$
\begin{aligned}
I_{AB}
&=\int u_a^*(1)u_b^*(2)(\mathbf r_1\cdot\mathbf r_2)u_b(1)u_a(2)\,d\tau_1d\tau_2\\
&=\left(\int u_a^*\mathbf r u_b\,d\tau\right)
\cdot\left(\int u_b^*\mathbf r u_a\,d\tau\right).
\end{aligned}
$$

Define the **off-diagonal** position matrix element

$$
\mathbf r_{ab}=\langle a|\mathbf r|b\rangle,
\qquad
\mathbf r_{ba}=\langle b|\mathbf r|a\rangle.
$$

The operator $\mathbf r$ is Hermitian, so $\mathbf r_{ba}=\mathbf r_{ab}^*$ and

$$
I_{AB}=\mathbf r_{ab}\cdot\mathbf r_{ab}^*=|\mathbf r_{ab}|^2,
\qquad I_{BA}=|\mathbf r_{ab}|^2.
$$

**Keep track of the minus sign.** The integral $I_{AB}$ is itself a squared magnitude. It enters the expansion of $(A^*-B^*)O(A-B)$ with a minus sign. Therefore,

$$
\begin{aligned}
\langle\mathbf r_1\cdot\mathbf r_2\rangle
&=\tfrac12\left[2\mathbf r_a\cdot\mathbf r_b-2|\mathbf r_{ab}|^2\right]\\
&=\boxed{\mathbf r_a\cdot\mathbf r_b-|\mathbf r_{ab}|^2}.
\end{aligned}
$$

The single-particle squared-position terms give

$$
\langle r_1^2+r_2^2\rangle=\langle r^2\rangle_a+\langle r^2\rangle_b.
$$

The result for part (a) is

$$
\boxed{
\langle R^2\rangle=\langle r^2\rangle_a+\langle r^2\rangle_b
-2\mathbf r_a\cdot\mathbf r_b+2|\mathbf r_{ab}|^2.
}
$$

**The physical interpretation.** Direct terms involve the mean position of each orbital on its own. Exchange terms describe **quantum interference** between the two assignments of particles to orbitals. Adding classical probabilities gives no cross term. Subtracting the **amplitudes** $A-B$ before forming the squared magnitude or expectation value produces it.

### 7.4 (b) Using parity to show $\mathbf r_a=\mathbf r_b=0$

If orbital $a$ has definite parity, $|u_a(\mathbf r)|^2$ is invariant under spatial inversion while $\mathbf r$ changes sign. Therefore,

$$
\mathbf r_a=\int u_a^*\mathbf r u_a\,d\tau=0.
$$

The same reasoning applies to $b$, giving

$$
\boxed{\langle R^2\rangle=\langle r^2\rangle_a+\langle r^2\rangle_b+2|\mathbf r_{ab}|^2}.
$$

### 7.5 (c) Why do opposite spins give $\mathbf r_{ab}=0$?

Let $u_a=\phi_a(\mathbf r)|\uparrow\rangle$ and $u_b=\phi_b(\mathbf r)|\downarrow\rangle$. The position operator leaves the spin unchanged, so

$$
\begin{aligned}
\mathbf r_{ab}
&=\langle\phi_a|\mathbf r|\phi_b\rangle\langle\uparrow|\downarrow\rangle\\
&=0.
\end{aligned}
$$

Spin orthogonality gives $\langle\uparrow|\downarrow\rangle=0$. Therefore,

$$
\boxed{\langle R^2\rangle_{\rm opposite}=\langle r^2\rangle_a+\langle r^2\rangle_b}.
$$

The **total wave function remains antisymmetric** for opposite spins. Spin orthogonality eliminates the cross term for this operator.

### 7.6 (d) Comparing equal and opposite spins

Compare the same spatial orbitals with all other conditions held fixed.

$$
\boxed{
\langle R^2\rangle_{\rm same}-\langle R^2\rangle_{\rm opposite}
=2|\mathbf r_{ab}|^2\ge0.
}
$$

This is a concrete example of exchange correlation making the **mean squared separation** for equal spins at least as large as for opposite spins. For some symmetries $\mathbf r_{ab}$ also vanishes, so the difference is $\ge0$ and equality is possible.

**Connection to the next problem.** The quantity $\mathbf r_{ab}=\langle a|\mathbf r|b\rangle$ and the E1 matrix element $\langle f|\mathbf r|i\rangle$ have the same mathematical form. They play different physical roles in the two problems.

---

## 8. RL Problem 10.6 — Deriving the E1 selection rules

Derive the rules in RL Eq. (10.40).

$$
\Delta l=\pm1,\qquad \Delta m=0,\pm1.
$$

**Step 1. Write the position matrix element and separate the radial and angular integrals.**

$$
\begin{aligned}
\langle f|\mathbf r|i\rangle
&=\int_0^\infty R_f^*(r)R_i(r)r^3\,dr\\
&\quad\times\int Y_{l_f}^{m_f*}(\theta,\phi)\,\hat{\mathbf r}\,Y_{l_i}^{m_i}(\theta,\phi)\,d\Omega.
\end{aligned}
$$

The $r^3$ in the radial part comes from the volume element $r^2drd\Omega$ and one additional $r$ from the position operator. **The angular integral controls the selection rules.**

**Step 2. Consider the $z$ component.** Since $z/r=\cos\theta$ has no $\phi$ dependence,

$$
\int_0^{2\pi}e^{i(m_i-m_f)\phi}\,d\phi=2\pi\delta_{m_f,m_i}.
$$

Thus $\Delta m=0$.

**Step 3. Consider the $x\pm iy$ components.** Since $(x\pm iy)/r=\sin\theta e^{\pm i\phi}$, the integral can be nonzero only if $m_f=m_i\pm1$. Thus

$$
\boxed{\Delta m=0,\pm1}.
$$

**Step 4. Use parity.** The operator $\mathbf r$ is odd, and the parity of $\psi_{lm}$ is $(-1)^l$. A nonzero matrix element requires odd $l_f+l_i$, so $\Delta l$ must be odd.

**Step 5. Apply the angular momentum triangle condition for a rank-1 spherical tensor.** The angular dependence of the dipole operator is equivalent to $Y_1^q$, so

$$
|l_i-1|\le l_f\le l_i+1.
$$

This gives $\Delta l=0,\pm1$. Combining it with the parity requirement yields

$$
\boxed{\Delta l=\pm1}.
$$

**Final result.**

$$
\boxed{\Delta l=\pm1,\qquad\Delta m=0,\pm1}.
$$

**Optional formulation.** The Gaunt integral of spherical harmonics gives the following expression for the angular integral, up to a proportionality factor.

$$
\begin{pmatrix}l_f&1&l_i\\0&0&0\end{pmatrix}
\begin{pmatrix}l_f&1&l_i\\-m_f&q&m_i\end{pmatrix},\quad q=0,\pm1.
$$

The first $3j$ symbol imposes the triangle condition and requires even $l_f+1+l_i$. The second requires $-m_f+q+m_i=0$. Together they recover the same two rules.

---

## 9. Detailed worked solutions in English

> The following are independently written worked explanations of the assigned problem goals, **not verbatim reproductions of the textbook questions**. The mathematical conventions assume normalized, orthogonal spin-orbitals and ordinary electric-dipole coupling between central-potential one-electron states.

### RL Problem 9.1 — Exchange correlation and mean squared separation

**(a) Derive the two-electron mean squared separation.**

Let $u_a$ and $u_b$ be two orthonormal spin-orbitals. The normalized antisymmetric two-electron wavefunction is

$$
\Psi(1,2)=\frac{u_a(1)u_b(2)-u_b(1)u_a(2)}{\sqrt2}.
$$

Define

$$
\mathbf r_a=\langle a|\mathbf r|a\rangle,\quad
\mathbf r_b=\langle b|\mathbf r|b\rangle,\quad
\mathbf r_{ab}=\langle a|\mathbf r|b\rangle.
$$

The squared electron separation is $R^2=r_1^2+r_2^2-2\mathbf r_1\cdot\mathbf r_2$. The expectation value of the one-electron terms is

$$
\langle r_1^2+r_2^2\rangle=\langle r^2\rangle_a+\langle r^2\rangle_b.
$$

For the two-electron cross term, expand the antisymmetric wavefunction:

$$
\begin{aligned}
\langle\mathbf r_1\cdot\mathbf r_2\rangle
&=\frac12\big[\langle ab|O|ab\rangle-\langle ab|O|ba\rangle\\
&\quad-\langle ba|O|ab\rangle+\langle ba|O|ba\rangle\big],
\quad O=\mathbf r_1\cdot\mathbf r_2.
\end{aligned}
$$

The two direct terms factorize:

$$
\langle ab|O|ab\rangle=\langle ba|O|ba\rangle
=\mathbf r_a\cdot\mathbf r_b.
$$

The two exchange terms also factorize:

$$
\begin{aligned}
\langle ab|O|ba\rangle
&=\langle a|\mathbf r|b\rangle\cdot\langle b|\mathbf r|a\rangle\\
&=\mathbf r_{ab}\cdot\mathbf r_{ab}^*=|\mathbf r_{ab}|^2.
\end{aligned}
$$

The other exchange term is identical. Thus,

$$
\langle\mathbf r_1\cdot\mathbf r_2\rangle
=\mathbf r_a\cdot\mathbf r_b-|\mathbf r_{ab}|^2.
$$

Combining the contributions yields

$$
\boxed{\langle R^2\rangle=\langle r^2\rangle_a+\langle r^2\rangle_b
-2\mathbf r_a\cdot\mathbf r_b+2|\mathbf r_{ab}|^2.}
$$

The last term originates from interference between the exchanged assignments in the antisymmetric fermion wavefunction.

**(b) Apply definite parity.**

For a central-field orbital with quantum numbers $n,l,m,m_s$, the spatial wavefunction has parity $(-1)^l$. Since the position operator $\mathbf r$ is odd under inversion,

$$
\mathbf r_a=\sum_s\int u_a^*(\mathbf r,s)\,\mathbf r\,u_a(\mathbf r,s)\,d^3r=0,
$$

and similarly $\mathbf r_b=0$. Hence

$$
\boxed{\langle R^2\rangle=\langle r^2\rangle_a+\langle r^2\rangle_b+2|\mathbf r_{ab}|^2.}
$$

**(c) Consider opposite electron spins.**

Suppose $u_a=\phi_a|\uparrow\rangle$ and $u_b=\phi_b|\downarrow\rangle$. The position operator acts on the spatial part but not on spin. Therefore

$$
\begin{aligned}
\mathbf r_{ab}
&=\langle\phi_a|\mathbf r|\phi_b\rangle
\langle\uparrow|\downarrow\rangle=0,
\end{aligned}
$$

because the opposite spin states are orthogonal. It follows that

$$
\boxed{\langle R^2\rangle_{\rm opposite}
=\langle r^2\rangle_a+\langle r^2\rangle_b.}
$$

This is the result for the corresponding uncorrelated spatial distributions.

**(d) Interpret the exchange correction.**

When the same spatial orbitals are compared, the parallel-spin case has an exchange contribution that is absent from the opposite-spin calculation:

$$
\boxed{\langle R^2\rangle_{\rm parallel}
-\langle R^2\rangle_{\rm opposite}=2|\mathbf r_{ab}|^2\ge0.}
$$

The conclusion concerns the **mean squared separation**. The nonnegative correction illustrates an exchange correlation produced by fermionic antisymmetry, even when electrostatic repulsion is neglected. The correction can vanish for orbital pairs whose position matrix element is zero by symmetry.

### RL Problem 10.6 — Electric dipole selection rules

The one-electron dipole operator is $\mathbf d=-e\mathbf r$. A transition can be electric-dipole allowed only if at least one component of

$$
\langle f|\mathbf r|i\rangle
=\int\psi_{n_fl_fm_f}^*(\mathbf r)\,\mathbf r\,\psi_{n_il_im_i}(\mathbf r)\,d^3r
$$

is nonzero. For a central potential, separate the radial and angular parts using $\psi_{nlm}=R_{nl}Y_l^m$.

**Magnetic quantum number.** The spherical harmonics have $\phi$ dependence $Y_l^m\propto e^{im\phi}$. For $z=r\cos\theta$, the azimuthal integral becomes

$$
\int_0^{2\pi}e^{i(m_i-m_f)\phi}d\phi
=2\pi\delta_{m_i,m_f},
$$

so the $z$ component requires $\Delta m=0$. For the spherical combinations $x\pm iy=r\sin\theta e^{\pm i\phi}$, the corresponding phase integral vanishes unless $m_f=m_i\pm1$. Hence

$$
\boxed{\Delta m=0,\pm1.}
$$

**Orbital angular momentum.** The initial and final spherical harmonics have parities $(-1)^{l_i}$ and $(-1)^{l_f}$. Since the dipole operator has odd parity, a nonvanishing angular integral requires

$$
(-1)^{l_f+l_i+1}=+1,
$$

which implies $l_f+l_i$ is odd. Moreover, each spherical component of the position operator transforms as a rank-one spherical tensor (equivalently, its angular part is proportional to $Y_1^q$). Angular-momentum coupling imposes

$$
|l_i-1|\le l_f\le l_i+1.
$$

This permits $l_f=l_i-1,l_i,l_i+1$, but the parity condition eliminates $l_f=l_i$. Therefore,

$$
\boxed{\Delta l=\pm1.}
$$

Combining the two independent restrictions gives the standard central-field E1 selection rules:

$$
\boxed{\Delta l=\pm1,\qquad\Delta m=0,\pm1.}
$$

These are angular selection rules: satisfying them means the angular factor is not forbidden by these symmetries. The radial integral and other physical constraints must still be considered when evaluating an actual transition strength.

---

## 10. Common questions in brief

**Q1. Why is $d_{z^2}$ written differently from $d_{x^2-y^2}$?**\
The actual angular form of $d_{z^2}$ is $3z^2-r^2$. This is one choice of basis for the five independent $d$ orbitals. The form $z^2-x^2$ is also valid and is a linear combination of the standard basis functions.

**Q2. How does E1 relate to spontaneous emission?**\
E1 specifies the multipole character of the interaction. Spontaneous emission, absorption, and stimulated emission are three distinct processes, each of which can proceed through E1 coupling.

**Q3. What is parity?**\
Under spatial inversion $\mathbf r\to-\mathbf r$, an even wave function stays unchanged and an odd wave function reverses sign. In a central potential, the orbital parity is $(-1)^l$.

**Q4. Why do selection rules involve an integral?**\
A transition amplitude sums contributions from the wave functions coherently across space. If the phases cancel over a full turn in $\phi$, the angular integral and hence the matrix element vanish.

**Q5. Why are equal-spin electrons farther apart on average in this example?**\
The cross term in the antisymmetric wave function suppresses joint probability at small separations, creating an exchange hole. The effect follows from quantum statistics without any additional electrostatic force.

**Q6. Why is $3d\to1s$ forbidden while $3d\to2p$ is allowed?**\
The first has $\Delta l=-2$, and the second has $\Delta l=-1$. The E1 angular rule requires $\Delta l=\pm1$.

---

## 11. Key concepts and equations

### Physical summary

- **Stationary states and atomic orbitals.** The Schrödinger equation gives orbitals labeled by $n,l,m,m_s$. An orbital is a wave function describing a spatial distribution.
- **Parity.** The s and d orbitals are even, the p and f orbitals are odd, and $\mathbf r$ is odd.
- **Pauli principle.** The total two-electron wave function must be antisymmetric. Exchange terms arise from cross terms between quantum amplitudes.
- **E1 coupling.** The electric dipole couples the atom to the radiation field and can contribute to several radiative processes.
- **Selection rules.** The symmetry and angular integrals of the matrix element determine whether E1 can couple the two states.
- **Einstein A and B coefficients.** These give the rates for different radiative processes.

### Formula reference

$$
\begin{aligned}
&\boxed{\hat H\psi=E\psi},\qquad
\boxed{\psi_{nlm}=R_{nl}Y_l^m},\\[4pt]
&\boxed{\psi_{nlm}(-\mathbf r)=(-1)^l\psi_{nlm}(\mathbf r)},\\[4pt]
&\boxed{\Psi(1,2)=\frac{u_a(1)u_b(2)-u_b(1)u_a(2)}{\sqrt2}},\\[4pt]
&\boxed{h\nu=E_i-E_f},\qquad
\boxed{H_{\rm int}\simeq-\mathbf d\cdot\mathbf E},\\[4pt]
&\boxed{\mathbf d_{fi}=\langle f|\mathbf d|i\rangle},\\[4pt]
&\boxed{\Delta l=\pm1,\quad\Delta m=0,\pm1},\\[4pt]
&\boxed{g_1B_{12}=g_2B_{21}},\qquad
\boxed{A_{21}/B_{21}=8\pi h\nu^3/c^3},\\[4pt]
&\boxed{\langle R^2\rangle=\langle r^2\rangle_a+\langle r^2\rangle_b-2\mathbf r_a\cdot\mathbf r_b+2|\mathbf r_{ab}|^2}.
\end{aligned}
$$

**In one sentence.** **The energy gap sets the photon's color, the matrix element sets whether and how strongly the states couple, and symmetry often tells us why the matrix element vanishes.**

---

## References and scope of these notes

- [University of Toronto AST1440 course page (November 19, 2026 reading assignment and two problems)](https://www.astro.utoronto.ca/~mhvk/AST1440/)
- Rybicki & Lightman, *Radiative Processes in Astrophysics*, §§9.1–9.3 and §§10.1–10.4, Problems 9.1 and 10.6. These notes present independently organized explanations and derivations.
- [Wikipedia — Atomic orbital](https://en.wikipedia.org/wiki/Atomic_orbital), for an intuitive view of orbitals and real spherical harmonics.

**Review suggestion.** Start with Sections 1–6 and their diagrams, then reproduce the calculations in Sections 7 and 8. For RL 9.1, focus on the origin of the four terms and the sign of the exchange term. For RL 10.6, distinguish the separate roles of $\phi$ orthogonality, parity, and the angular momentum triangle condition.
