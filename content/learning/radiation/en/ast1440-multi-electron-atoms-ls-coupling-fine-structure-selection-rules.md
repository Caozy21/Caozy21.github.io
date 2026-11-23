---
title: "AST1440 Multi-Electron Atoms, LS Coupling, Fine Structure, and Selection Rules: RL §§9.3–9.4, §10.4, and Problems 9.2, 9.3, 10.1, and 10.2"
description: "Covers LS and jj coupling, spectroscopic terms and degeneracies, fine structure, the Zeeman effect, and E1 selection rules, with complete solutions to RL Problems 9.2, 9.3, 10.1, and 10.2."
date: "2026-11-23"
tags: ["AST1440","Multi-electron atoms","LS coupling","Fine structure","Selection rules"]
order: 21
draft: false
translation: "AI-assisted English translation"
sourceHash: "7e7e34dbdea041d173ef7c972e480e83d7c839487df4ce258b74efc1a8f6eb07"
---

# AST1440 Multi-Electron Atoms, LS Coupling, Fine Structure, and Selection Rules: RL §§9.3–9.4, §10.4, and Problems 9.2, 9.3, 10.1, and 10.2

> Course: University of Toronto, AST1440 — Radiation\
> Lecture: *Multi-electron systems and their selection rules*, November 23, 2026\
> Assigned reading: Rybicki & Lightman (RL), §§9.3–9.4 through the Zeeman effect, and §10.4. Supplementary reading covers electron configuration and term symbols.\
> Assigned problems: RL 9.2, 9.3, 10.1, and 10.2.\
> Compiled on November 23, 2026.\
> **Reading conventions.** New terms, theorems, approximations, and assumptions are introduced with definitions, physical interpretations, and conditions of validity. Lowercase $l,s,j$ usually denote single-electron angular momenta, and uppercase $L,S,J$ denote totals for the multi-electron atom. The symbol $S$ can also denote a spectroscopic letter, depending on context.

## Table of Contents

1. [Physical roadmap, assumptions, and notation](#1-physical-roadmap-assumptions-and-notation)
2. [From single-electron states to the Pauli principle](#2-from-single-electron-states-to-the-pauli-principle)
3. [Singlets, triplets, and angular momentum addition](#3-singlets-triplets-and-angular-momentum-addition)
4. [LS coupling, jj coupling, and term symbols](#4-ls-coupling-jj-coupling-and-term-symbols)
5. [Configurations, terms, levels, states, and counting](#5-configurations-terms-levels-states-and-counting)
6. [The Hamiltonian, angular momentum eigenvalues, and fine structure](#6-the-hamiltonian-angular-momentum-eigenvalues-and-fine-structure)
7. [Hund's rules and electron–hole symmetry in p² and p⁴](#7-hunds-rules-and-electronhole-symmetry-in-p-and-p)
8. [The Zeeman effect and the Landé g factor](#8-the-zeeman-effect-and-the-landé-g-factor)
9. [Where the electric dipole selection rules come from](#9-where-the-electric-dipole-selection-rules-come-from)
10. [Astronomical applications: forbidden lines, [O III], and the 21 cm line](#10-astronomical-applications-forbidden-lines-o-iii-and-the-21-cm-line)
11. [RL 9.2 — All allowed terms](#11-rl-92--all-allowed-terms)
12. [RL 9.3 — Checking degeneracies](#12-rl-93--checking-degeneracies)
13. [RL 10.1 — Fine-structure lines](#13-rl-101--fine-structure-lines)
14. [RL 10.2 — Ten allowed or forbidden E1 transitions](#14-rl-102--ten-allowed-or-forbidden-e1-transitions)
15. [Detailed worked solutions in English](#15-detailed-worked-solutions-in-english)
16. [Key results, common confusions, and self-check](#16-key-results-common-confusions-and-self-check)
17. [References](#17-references)

---

## 1. Physical roadmap, assumptions, and notation

The practical questions for an astronomer are which levels a multi-electron atom can have, which pairs can be connected by emitting one photon, and how many lines should appear in the spectrum.

$$
\underbrace{\text{single-electron state}}_{n,l,m_l,m_s}
\;\longrightarrow\;
\underbrace{\text{electron configuration}}_{2p3s,\;2p^4\dots}
\;\longrightarrow\;
\underbrace{\text{term}}_{{}^{2S+1}L}
\;\longrightarrow\;
\underbrace{\text{level}}_{{}^{2S+1}L_J}
\;\longrightarrow\;
\underbrace{\text{spectral line}}_{h\nu=E_u-E_l}.
$$

**Main assumptions and definitions**

- **Nonrelativistic central-field approximation.** Each electron moves in a spherically symmetric mean potential $V(r)$, which lets us label its orbital by $n,l,m_l$. The residual noncentral electrostatic interaction between electrons is treated separately. Strong correlations require a more accurate description.
- **Pauli exclusion principle.** Electrons are fermions, so exchanging two electrons changes the sign of their complete wave function. Two electrons cannot occupy the same *spin-orbital*, with identical $n,l,m_l,m_s$.
- **LS coupling, or Russell–Saunders coupling.** The electrostatic splitting between terms with different $L,S$ is much larger than the spin–orbit coupling. We first form $\mathbf L=\sum_i\mathbf l_i$ and $\mathbf S=\sum_i\mathbf s_i$, then $\mathbf J=\mathbf L+\mathbf S$. This often works for states of light atoms, with accuracy depending on the atom and state.
- **Electric dipole approximation (E1).** When the wavelength is much larger than the atom, $ka\ll1$, we retain the leading electric dipole coupling. A vanishing E1 matrix element rules out that channel. Other multipole channels may remain available.

**Notation**

| Symbol | Definition | Notes |
|---|---|---|
| $n$ | Principal quantum number | $1,2,\ldots$ |
| $l,m_l$ | Single-electron orbital angular momentum and its z projection | $l=0,1,2,\dots$ and $m_l=-l,\ldots,l$ |
| $s,m_s$ | Single-electron spin and its z projection | For electrons, $s=\tfrac12$ and $m_s=\pm\tfrac12$ |
| $L,S,J$ | Total orbital, total spin, and total angular momentum of the atom | $\mathbf J=\mathbf L+\mathbf S$ |
| $M_L,M_S,M_J$ | Corresponding projections along the quantization axis z | $-L,\ldots,L$, and similarly for the others |
| $I,F$ | Nuclear spin and total angular momentum including the nucleus | $\mathbf F=\mathbf I+\mathbf J$, used for hyperfine structure |
| $g$ | Statistical weight or degeneracy, the number of distinct quantum states | Specify the configuration, term, or level being counted |
| $A$ | Effective spin–orbit coupling constant within a given LS term | **In energy units**, with either sign. Distinct from the Einstein coefficient $A_{ul}$ |
| $\mu_B$ | Bohr magneton, $e\hbar/(2m_e)$ | $e>0$ denotes the magnitude of the elementary charge |

---

## 2. From single-electron states to the Pauli principle

**Electron orbital.** In the central-field approximation, the stationary spatial wave function is $\psi_{nlm}(r,\theta,\phi)=R_{nl}(r)Y_l^{m_l}(\theta,\phi)$. This is a probability amplitude. The electron has no fixed elliptical trajectory around the nucleus.

**Spin-orbital.** A spatial orbital times a spin state, specified by four quantum numbers $n,l,m_l,m_s$. An s subshell has $m_l=0$, so it has two spin-orbitals, $\uparrow,\downarrow$. A p subshell has $m_l=-1,0,1$, giving $3\times2=6$ spin-orbitals.

An **electron configuration** specifies the electron occupancy of each subshell. For example, $2s^2$ places both electrons in 2s, while $2p3s$ places one electron in 2p and one in 3s.

The Pauli principle allows at most one electron per spin-orbital. The configuration $2s^2$ therefore requires $\uparrow\downarrow$. Two electrons with $\uparrow\uparrow$ would occupy the same spin-orbital.

---

## 3. Singlets, triplets, and angular momentum addition

**Total spin quantum number $S$.** This labels the vector sum of the electron spin operators, $\mathbf S=\sum_i\mathbf s_i$. Two electrons each with $s=1/2$ can have total spin $S=0$ or $S=1$. The arrows alone do not uniquely determine $S$.

**Singlet.** The state with $S=0$ and spin multiplicity $2S+1=1$ has the two-electron spin wave function

$$
\chi_{00}=\frac{|\uparrow\downarrow\rangle-|\downarrow\uparrow\rangle}{\sqrt2}.
$$

**Triplet.** For $S=1$, there are three states with $M_S=1,0,-1$.

$$
\chi_{11}=|\uparrow\uparrow\rangle,\qquad
\chi_{10}=\frac{|\uparrow\downarrow\rangle+|\downarrow\uparrow\rangle}{\sqrt2},\qquad
\chi_{1,-1}=|\downarrow\downarrow\rangle.
$$

Under exchange, the singlet spin wave function is antisymmetric and the triplet is symmetric. To make the **full two-electron state** antisymmetric, the corresponding spatial wave functions must be symmetric and antisymmetric, respectively. This is the origin of the restrictions on terms for equivalent electrons.

**Angular momentum addition.** Combining angular momenta with quantum numbers $a,b$ gives a total quantum number $c$ that takes the following values in integer steps.

$$
\boxed{c=|a-b|,|a-b|+1,\ldots,a+b.}
$$

For example, two p electrons with $l_1=l_2=1$ can combine to give $L=0,1,2$, labeled S, P, and D. Two spins $1/2$ give $S=0,1$.

**Application.** Addition gives the mathematically possible combinations. For two equivalent electrons, the Pauli principle excludes some of them.

---

## 4. LS coupling, jj coupling, and term symbols

![The different orders of angular momentum addition in LS and jj coupling](/learning/radiation/multi-electron-atoms/02_LS_vs_jj.png)

**Physical meaning of LS coupling.** The residual electrostatic interaction separates terms with different $L,S$. The weaker spin–orbit interaction then produces the $J$ fine structure within each term. The order is

$$
\mathbf L=\sum_i\mathbf l_i,\qquad
\mathbf S=\sum_i\mathbf s_i,\qquad
\mathbf J=\mathbf L+\mathbf S.
$$

**jj coupling.** When the spin–orbit interaction acting on each electron is relatively strong, first form $\mathbf j_i=\mathbf l_i+\mathbf s_i$, then combine all $\mathbf j_i$ to get $\mathbf J$. This is more common for some states of heavy elements.

**Intermediate coupling.** When electrostatic term splittings and spin–orbit coupling are comparable, a single LS or jj label cannot fully specify the state. Basis states can mix. LS and jj are two representations of the same total-angular-momentum space.

**Spectroscopic term symbol**

$$
\boxed{{}^{2S+1}L_J},\quad
L=0\to\mathrm S,\quad1\to\mathrm P,\quad2\to\mathrm D,\quad3\to\mathrm F.
$$

Historically, S, P, D, and F come from the sharp, principal, diffuse, and fundamental spectral series. Capital P means $L=1$ for the whole atom, while lowercase p in a configuration means $l=1$ for one electron. For example, ${}^3P_2$ specifies $S=1,L=1,J=2$ for the atom as a whole.

**Parity.** Under spatial inversion $\mathbf r\to-\mathbf r$, a state of definite parity acquires an eigenvalue of $+1$ for even parity or $-1$ for odd parity. A single-electron orbital of angular momentum $l$ has parity $(-1)^l$. For a definite multi-electron configuration,

$$
\boxed{P=(-1)^{\sum_i l_i}.}
$$

Odd parity can be marked with a superscript $\mathrm{o}$, as in ${}^3P_2^{\rm o}$ for $2p3s$. Even parity is usually unmarked. **Parity is independent of whether an electron has spin up or down.**

---

## 5. Configurations, terms, levels, states, and counting

![From the 2p3s configuration to LS terms and J levels](/learning/radiation/multi-electron-atoms/01_configuration_term_level.png)

The four labels carry different information.

1. A **configuration** lists the occupied $nl$ subshells, for example $2p3s$.
2. A **term** specifies $L,S$ in LS coupling, as in ${}^3P$. A term includes different $M_L,M_S$ states.
3. A **fine-structure level** also specifies $J$, as in ${}^3P_2$. Without an external magnetic field, a level usually contains $2J+1$ degenerate $M_J$ states.
4. A **state** in this model also specifies $M_J$ and any other labels needed. Different states can share one energy level.

**Degeneracy or statistical weight** counts distinct quantum states belonging to a configuration, term, or level at the chosen resolution and symmetry.

For a given $L$, the projection $M_L$ has $2L+1$ possible values. For a given $S$, the projection $M_S$ has $2S+1$. These choices are independent, so **multiply** them.

$$
\boxed{g_{\rm term}=(2L+1)(2S+1).}
$$

A term can instead be split into mutually exclusive sets indexed by $J$. In this representation, **add** the state counts of the levels.

$$
\boxed{g_J=2J+1,\qquad
 g_{\rm term}=\sum_{J=|L-S|}^{L+S}(2J+1).}
$$

For ${}^3P$, $L=S=1$ gives $3\times3=9$ states. The $J=0,1,2$ levels contain $1,3,5$ states, so $1+3+5=9$. These are **two ways of classifying the same nine states**.

**Multiply independent occupancies of different subshells.** In $2p3s$, p has 6 one-electron possibilities and s has 2, giving $6\times2=12$.

**Use combinations for equivalent electrons in the same subshell.** If there are $g_{nl}=2(2l+1)$ spin-orbitals and $q$ indistinguishable fermions, there are $\binom{g_{nl}}q$ legal occupancies. Thus $2p^4$ has $\binom64=15$ choices. Counting each electron independently as $6^4$ ignores indistinguishability and exclusion.

**Counting rule.** Multiply independent choices, add disjoint groups, and use combinations for equivalent electrons in one subshell.

---

## 6. The Hamiltonian, angular momentum eigenvalues, and fine structure

### 6.1 The Hamiltonian and energy

The **Hamiltonian $\hat H$** is the self-adjoint operator that generates time evolution and represents the energy observable. Stationary energy eigenvalues satisfy

$$
\boxed{\hat H|\psi_n\rangle=E_n|\psi_n\rangle.}
$$

Here $|\psi_n\rangle$ is a state of definite energy. For a normalized superposition, the mean energy is $\langle H\rangle=\langle\psi|\hat H|\psi\rangle$, which need not equal a single eigenvalue.

**Perturbation theory.** Add a relatively small term $\hat H'$ to a known $\hat H_0$ and expand the energies and states in a small parameter. For a nondegenerate unperturbed state, the first-order energy correction is $\Delta E^{(1)}=\langle n|\hat H'|n\rangle$. For a degenerate level, first diagonalize $\hat H'$ in the degenerate subspace. Taking an expectation value in an arbitrary basis state is insufficient.

### 6.2 Why does squared angular momentum give $j(j+1)\hbar^2$?

The **commutator** is $[A,B]\equiv AB-BA$. Angular momentum obeys $[J_x,J_y]=i\hbar J_z$ and its cyclic permutations. The components cannot all be definite at once, but $\hat{\mathbf J}^2$ and $\hat J_z$ can be diagonalized together.

$$
\hat{\mathbf J}^2|j,m\rangle=j(j+1)\hbar^2|j,m\rangle,
\qquad \hat J_z|j,m\rangle=m\hbar|j,m\rangle.
$$

The **ladder operators** are $J_\pm=J_x\pm iJ_y$. They change $m$ by $\pm1$ while keeping $j$ fixed. Use the identity

$$
\hat{\mathbf J}^2=J_-J_+ +J_z^2+\hbar J_z
$$

For the highest state $|j,j\rangle$, the condition $J_+|j,j\rangle=0$ gives

$$
\hat{\mathbf J}^2|j,j\rangle=(j^2+j)\hbar^2|j,j\rangle.
$$

All $m$ states for a given $j$ have the same squared-angular-momentum eigenvalue, $j(j+1)\hbar^2$. Using $j^2\hbar^2$ would omit the angular momentum algebra. The same result applies to $L,S,J$, giving $L(L+1),S(S+1),J(J+1)$, respectively.

### 6.3 Spin–orbit coupling and fine structure

**Spin–orbit coupling** is the interaction between an electron's spin magnetic moment and the effective magnetic field associated with its motion. Within a given term for which LS coupling is a good approximation, the effective Hamiltonian is

$$
\boxed{\hat H_{\rm SO}=\frac{A}{\hbar^2}\mathbf L\cdot\mathbf S.}
$$

The constant $A$ describes this term specifically. The expression includes only part of the atom's relativistic corrections. **Fine structure** is the relatively small splitting within an electron configuration and LS term due to relativistic effects such as spin–orbit coupling.

Because $\mathbf J=\mathbf L+\mathbf S$,

$$
\mathbf L\cdot\mathbf S=\frac12(\mathbf J^2-\mathbf L^2-\mathbf S^2).
$$

Taking the expectation value in a state with definite $L,S,J$ gives

$$
\boxed{\Delta E_J=\frac A2\big[J(J+1)-L(L+1)-S(S+1)\big].}
$$

**Landé interval rule.** When a single constant $A$ describes LS spin–orbit coupling within a term, the difference between neighboring $J$ levels is

$$
\boxed{E_J-E_{J-1}=AJ.}
$$

For ${}^3P$, $J=0,1,2$. Write the unsplit term energy as $E_{\rm term}$.

$$
E_{J=0}=E_{\rm term}-2A,\qquad E_{J=1}=E_{\rm term}-A,\qquad E_{J=2}=E_{\rm term}+A.
$$

The two intervals are $A$ and $2A$. When $A>0$, the ordering is normal and higher $J$ means higher energy. When $A<0$, the ordering is inverted and higher $J$ means lower energy. **This ordering follows within the effective model. Configuration mixing can modify real atoms.**

![Normal and inverted fine-structure splitting of the triplet P term](/learning/radiation/multi-electron-atoms/03_fine_structure.png)

---

## 7. Hund's rules and electron–hole symmetry in p² and p⁴

**Hund's rules** are empirical rules for identifying the lower-energy terms and fine-structure levels among the states already allowed for a given configuration. Their validity depends on the configuration and coupling regime. The Pauli principle is still needed to enumerate the allowed terms.

1. **First rule.** Within a configuration, the term with the largest $S$ usually has the lowest energy.
2. **Second rule.** Among terms with the same $S$, the largest $L$ usually lies lowest.
3. **Third rule.** For a given open subshell that is less than half full, the smallest $J$ lies lowest. For a subshell that is more than half full, the largest $J$ lies lowest. Check the configuration and coupling regime before applying this rule.

**Equivalent electrons** occupy the same $nl$ subshell, as do the two 2p electrons in $2p^2$. Exchange antisymmetry restricts their allowed combinations. Two equivalent p electrons with $l=1$ can formally have $L=0,1,2$ and $S=0,1$, but only the following combinations survive.

- The spin singlet $S=0$ is antisymmetric, so the spatial part is symmetric. It has even $L=0,2$, giving ${}^1S,{}^1D$.
- The spin triplet $S=1$ is symmetric, so the spatial part is antisymmetric. It has odd $L=1$, giving ${}^3P$.

Therefore,

$$
\boxed{p^2:\quad{}^1S,{}^1D,{}^3P.}
$$

A **hole** is an unoccupied spin-orbital that could otherwise hold an electron. A p subshell has six spin-orbitals, so $p^4$ leaves two holes. Since the closed p subshell $p^6$ has total $L=S=0$, coupling the angular momenta of two holes gives the same allowed terms as coupling two electrons.

$$
\boxed{p^4:\quad{}^1S,{}^1D,{}^3P,\qquad\binom64=\binom62=15.}
$$

**The same terms can occur in $p^2$ and $p^4$ with different energy orderings.** For neutral oxygen O I in $2p^4$, Hund's rules place ${}^3P$ lowest. Because the subshell is more than half full, ${}^3P_2$ is the lowest fine-structure level. The levels ${}^1D_2,{}^1S_0$ remain allowed excited levels. RL 9.2 asks for **all** terms, including those above the Hund ground term.

---

## 8. The Zeeman effect and the Landé g factor

The **Zeeman effect** occurs when an external magnetic field lifts the degeneracy between different magnetic quantum numbers $M_J$, producing a field-dependent splitting.

The **Landé $g_J$ factor** relates the expectation value of the magnetic moment along the quantization axis to the total angular momentum projection of an $LSJ$ level.

$$
\boxed{\langle\mu_z\rangle=-g_J\mu_B M_J.}
$$

With the spin factor $g_s\simeq2$, effective LS coupling, and $J\ne0$, this gives

$$
\boxed{g_J=1+\frac{J(J+1)+S(S+1)-L(L+1)}{2J(J+1)}.}
$$

For ${}^3P_2$, $L=S=1,J=2$, so $g_J=3/2$.

**Weak-field Zeeman approximation.** The magnetic interaction must be too weak to substantially disrupt the given $LSJ$ coupling. For a field along z,

$$
\boxed{\Delta E=\mu_B g_J M_J B,\quad M_J=-J,-J+1,\ldots,J.}
$$

For $J=0$, there is no linear Zeeman splitting in $M_J$, and the expression for $g_J$ cannot be evaluated directly at $J=0$. A sufficiently strong field can put the atom in the Paschen–Back regime, where the field changes the appropriate quantum numbers for spin–orbit coupling and the simple weak-field formula ceases to apply.

---

## 9. Where the electric dipole selection rules come from

A **transition matrix element** is the quantum amplitude $\langle f|\hat O|i\rangle$ of the operator $\hat O$ between the initial and final states. For E1, the electric dipole operator is

$$
\boxed{\mathbf d=-e\sum_i\mathbf r_i,\qquad
\mathcal M_{fi}^{\rm E1}=\langle f|\mathbf d|i\rangle.}
$$

Under this approximation, the E1 transition strength is proportional to $|\mathcal M_{fi}^{\rm E1}|^2$. A zero integral makes the transition E1-forbidden. The integral therefore **determines whether the electric dipole interaction couples the initial and final states**.

**Parity rule.** The position operator $\mathbf r$ changes sign under spatial inversion and has odd parity. If the initial and final states have the same parity, the integrand $\psi_f^*\mathbf r\psi_i$ is odd, so its integral over all space vanishes. E1 requires **opposite parity** for the two states.

**One-electron jump rule.** The dipole $\mathbf d$ is a sum of one-electron operators. In a single-configuration, independent-orbital (Slater determinant) approximation, a nonzero E1 matrix element can connect configurations that differ by at most one spin-orbital occupation change. A direct E1 matrix element involving two orbital changes vanishes. Configuration mixing in a real atom can make such transitions weakly allowed.

**E1 selection rules in LS coupling**

| Rule | Necessary condition | Origin or physical meaning |
|---|---|---|
| Total parity | $P_iP_f=-1$ | $\mathbf d$ is odd under parity |
| Single-electron orbital change | $\Delta l=\pm1$ | Angular selection rule for the one-electron dipole integral |
| Number of electrons that change orbitals | One electron in the single-configuration model | The dipole is a sum of one-electron operators |
| Total spin | $\Delta S=0$ | The dipole does not act directly on spin. This rule assumes pure LS coupling |
| Total orbital angular momentum | $\Delta L=0,\pm1$, with $L=0\leftrightarrow0$ forbidden | The electric dipole is a rank-1 spherical tensor |
| Total angular momentum | $\Delta J=0,\pm1$, with $J=0\leftrightarrow0$ forbidden | The photon carries one unit of angular momentum |
| Magnetic quantum number for the specified polarization | $\Delta M_J=0,\pm1$ | Spherical tensor components $q=0,\pm1$ |

**Distinguish $\Delta l=0$ from $\Delta L=0$.** The latter can be allowed, whereas the former is forbidden for one-electron E1 transitions. These are **necessary conditions** for E1. The matrix element may still vanish because of other symmetries.

**Multipole transitions.** The light–atom interaction is expanded in multipoles of the charge and current distributions. E1 is the lowest order. When E1 is forbidden, magnetic dipole (M1) or electric quadrupole (E2) radiation may still occur. Forbidden lines here are lines with a suppressed E1 channel.

---

## 10. Astronomical applications: forbidden lines, [O III], and the 21 cm line

### 10.1 What are forbidden lines?

A **forbidden line** has a vanishing matrix element in the dominant E1 approximation but can arise through weaker multipole transitions, state mixing, or related effects. Its appearance is similar to other emission peaks. Square brackets around the species identify these lines, for example `[O III]`, `[N II]`, and `[S II]`.

**Ionization-stage notation.** A Roman numeral I after the element denotes a neutral atom, II denotes the loss of one electron, and III the loss of two. Thus `[O III]` is doubly ionized oxygen, O$^{2+}$.

A **metastable level** is an excited level whose radiative lifetime is long because selection rules suppress the dominant decay channel. In a diffuse nebula, collisions are infrequent enough for slow M1 or E2 emission to occur. In denser gas, collisional de-excitation can take precedence.

Let $A_{ul}$ be the Einstein A coefficient for spontaneous decay from the upper to the lower level, per particle per second (s$^{-1}$). Let $q_{ul}$ be the collisional de-excitation rate coefficient (cm$^3$ s$^{-1}$), and $n_e$ the electron number density. The competing rates are

$$
\underbrace{A_{ul}}_{\text{radiative de-excitation}}
\quad\text{vs.}\quad
\underbrace{n_eq_{ul}}_{\text{collisional de-excitation}}.
$$

The **critical density** is the electron density at which the total rate of downward collisions from the upper level matches its total spontaneous radiative rate. In a two-level approximation, $n_{\rm crit}=A_{ul}/q_{ul}$. This competition makes forbidden-line intensity ratios useful as density diagnostics, such as [S II] $I(6716)/I(6731)$.

### 10.2 Why are there two [O III] lines?

![O III levels and the 4959 and 5007 emission lines](/learning/radiation/multi-electron-atoms/04_oiii_spectrum.png)

In O$^{2+}$, the same upper level ${}^1D_2$ can decay to two different $J$ levels within the lower ${}^3P$ term.

$$
\begin{aligned}
[\mathrm{O\ III}]\ 5007\ \mathring{\mathrm A}:&\quad{}^1D_2\to{}^3P_2,\\
[\mathrm{O\ III}]\ 4959\ \mathring{\mathrm A}:&\quad{}^1D_2\to{}^3P_1.
\end{aligned}
$$

The final energies differ, so the photon energies $h\nu=E_u-E_l$ differ as well. The typical intensity ratio of 5007 to 4959 is about $2.98:1$, set by the branching ratio of transition probabilities and a frequency correction. Both are E1-forbidden and emit mainly through weak channels such as magnetic dipole radiation. In pure LS coupling, $\Delta S\ne0$ for these transitions. Relativistic state mixing permits their weak emission. Another prominent [O III] line, at 4363 Å, comes from ${}^1S_0\to{}^1D_2$ and is often used with 5007 and 4959 to diagnose electron temperature.

### 10.3 The 21 cm line comes from hyperfine splitting

**Hyperfine structure** is the finer splitting caused by the interaction of the total electronic angular momentum $\mathbf J$ with the nuclear spin $\mathbf I$. The total angular momentum is $\mathbf F=\mathbf J+\mathbf I$.

In the hydrogen ground state $1s$, $L=0,S=1/2,J=1/2$ and the proton has spin $I=1/2$, giving two levels with $F=0,1$. The magnetic dipole transition $F=1\to F=0$ emits at

$$
\boxed{\nu_{21}=1420.40575\ \mathrm{MHz},\qquad \lambda\simeq21.1\ \mathrm{cm}.}
$$

Its spontaneous rate $A_{10}\simeq2.85\times10^{-15}\ \mathrm{s}^{-1}$ corresponds to a mean waiting time of about $1.1\times10^7$ years for an isolated atom. Large amounts of interstellar H I can still produce detectable 21 cm emission.

---

## 11. RL 9.2 — All allowed terms

**Problem, paraphrased.** Use LS coupling to find all the allowed terms for each configuration, including parity and $J$, and explain how they follow. Include the full set of allowed states as well as the ground state picked by Hund's rules.

### (a) $2s^2$

Both electrons are in 2s, so $l_1=l_2=0$ and $L=0$. Their shared spatial orbital is symmetric. The full wave function must be antisymmetric, so the spin state is a singlet with $S=0$. Thus $J=0$ and parity is $(-1)^{0+0}=+1$.

$$\boxed{2s^2\longrightarrow{}^1S_0\quad\text{(even)}.}$$

**Why is there no triplet?** A symmetric spin state requires an antisymmetric spatial part, which vanishes when both electrons occupy the same spatial s orbital.

### (b) $2p3s$

The electrons occupy different subshells with $l_1=1,l_2=0$, so $L=1$ (P). Their total spin can be $S=0$ (singlet) or $S=1$ (triplet).

- ${}^1P$：$J=1$；
- ${}^3P$：$J=0,1,2$；
- parity $=(-1)^{1+0}=-1$。

$$\boxed{2p3s\longrightarrow{}^1P_1^{\rm o},\ {}^3P_0^{\rm o},\ {}^3P_1^{\rm o},\ {}^3P_2^{\rm o}.}$$

### (c) $3p4p$

The two p electrons have different principal quantum numbers and are **nonequivalent**. The extra restrictions for equivalent electrons in the same $nl$ subshell do not apply. Combining $L=0,1,2$ with $S=0,1$ gives six LS terms.

| Term | $L$ | $S$ | $J$ |
|---|---:|---:|---|
| ${}^1S$ | 0 | 0 | 0 |
| ${}^1P$ | 1 | 0 | 1 |
| ${}^1D$ | 2 | 0 | 2 |
| ${}^3S$ | 0 | 1 | 1 |
| ${}^3P$ | 1 | 1 | 0,1,2 |
| ${}^3D$ | 2 | 1 | 1,2,3 |

The parity $=(-1)^{1+1}=+1$ is even for every term.

$$\boxed{ {}^1S_0,\ {}^1P_1,\ {}^1D_2,\ {}^3S_1,\ {}^3P_{0,1,2},\ {}^3D_{1,2,3}.}$$

### (d) $2p^43p$

A **parent term** describes equivalent electrons in a subshell first coupled to definite $L_p,S_p$. Their angular momenta are then combined with those of the remaining electron or electrons. The $2p^4$ subshell has parents ${}^1S,{}^1D,{}^3P$. The 3p electron has $l=1,s=1/2$.

| $2p^4$ parent term | LS terms after coupling to 3p | Reason |
|---|---|---|
| ${}^1S$（$L_p=0,S_p=0$） | ${}^2P$ | $L=1,S=1/2$ |
| ${}^1D$（$L_p=2,S_p=0$） | ${}^2P,{}^2D,{}^2F$ | $L=1,2,3$，$S=1/2$ |
| ${}^3P$（$L_p=1,S_p=1$） | ${}^2S,{}^2P,{}^2D,{}^4S,{}^4P,{}^4D$ | $L=0,1,2$，$S=1/2,3/2$ |

Importantly, ${}^2P$ occurs **three times** from three parent terms, and ${}^2D$ occurs **twice**. Terms with the same $L,S$ can represent independent states. Interactions can mix states of the same symmetry, but every occurrence counts.

| LS term | $J$ | Number of occurrences |
|---|---|---:|
| ${}^2S$ | $1/2$ | 1 |
| ${}^2P$ | $1/2,3/2$ | 3 |
| ${}^2D$ | $3/2,5/2$ | 2 |
| ${}^2F$ | $5/2,7/2$ | 1 |
| ${}^4S$ | $3/2$ | 1 |
| ${}^4P$ | $1/2,3/2,5/2$ | 1 |
| ${}^4D$ | $1/2,3/2,5/2,7/2$ | 1 |

The total parity $=(-1)^{4\cdot1+1}=-1$, so every term carries a superscript $\rm o$. There are **10 LS terms when the parent labels are retained**, or seven distinct multiplicity-and-letter labels. The next problem checks the total of $90$ states.

---

## 12. RL 9.3 — Checking degeneracies

**Problem, paraphrased.** Count the degeneracy using the orbital quantum numbers $l$ of the configuration, then the term quantum numbers $L,S$, and finally the levels labeled by $J$. Verify that all three counts agree. The textbook allows omission of 9.2(d), which is checked here as well.

### Counting method and assumptions

- An $nl$ subshell contains $2(2l+1)$ spin-orbitals.
- The number of ways to place $q$ equivalent electrons in one subshell is $\binom{2(2l+1)}q$.
- Multiply independent occupancy counts in different subshells.
- An LS term contains $(2L+1)(2S+1)$ states.
- A fine-structure level contains $2J+1$ states.
- **Add** the counts of distinct terms and of the different $J$ levels within a term.

### (a) $2s^2$

$$
\underbrace{\binom22}_{\rm configuration}=1,\qquad
\underbrace{(2\cdot0+1)(2\cdot0+1)}_{{}^1S\ \rm term}=1,\qquad
\underbrace{2\cdot0+1}_{{}^1S_0\ \rm level}=1.
$$

### (b) $2p3s$

$$
\underbrace{6\cdot2}_{\rm configuration}=12,\quad
\underbrace{(3\cdot1)+(3\cdot3)}_{{}^1P+{}^3P}=12,\quad
\underbrace{3+(1+3+5)}_{J\rm\ levels}=12.
$$

### (c) $3p4p$

$$
\underbrace{6\cdot6}_{\rm configuration}=36.
$$

| LS term | $(2L+1)(2S+1)$ | Sum over J |
|---|---:|---:|
| ${}^1S$ | 1 | $1$ |
| ${}^1P$ | 3 | $3$ |
| ${}^1D$ | 5 | $5$ |
| ${}^3S$ | 3 | $3$ |
| ${}^3P$ | 9 | $1+3+5=9$ |
| ${}^3D$ | 15 | $3+5+7=15$ |
| **Total** | **36** | **36** |

### Additional check for (d) $2p^43p$

$$
\underbrace{\binom64\cdot6}_{\rm configuration}=90.
$$

Using the list in Section 11, the term degeneracy is as follows, with repeated terms counted separately.

$$
\underbrace{2}_{{}^2S}+
\underbrace{3\cdot6}_{3\times{}^2P}+
\underbrace{2\cdot10}_{2\times{}^2D}+
\underbrace{14}_{{}^2F}+
\underbrace{4}_{{}^4S}+
\underbrace{12}_{{}^4P}+
\underbrace{20}_{{}^4D}=90.
$$

### A general identity

For any fixed $L,S$, the angular momentum tensor product has dimension $(2L+1)(2S+1)$. It decomposes into disjoint representations labeled by total angular momentum $J$, with $J=|L-S|,\ldots,L+S$, so

$$
\boxed{(2L+1)(2S+1)=\sum_{J=|L-S|}^{L+S}(2J+1).}
$$

This decomposition is the central result of RL 9.3.

---

## 13. RL 10.1 — Fine-structure lines

**Problem, paraphrased.** Determine how many fine-structure transitions between ${}^3P$ and ${}^3S$ are allowed by the angular momentum rules for E1 transitions in LS coupling. Sketch them and compare their line spacings with the Landé interval rule. Consider both normal and inverted ordering of ${}^3P$, with P as either the upper or the lower term.

### 13.1 Finding the J values

${}^3P$：$L=1,S=1\Rightarrow J=0,1,2$；${}^3S$：$L=0,S=1\Rightarrow J=1$。

The three branches allowed by angular momentum are

$$
{}^3P_0\leftrightarrow{}^3S_1,\quad
{}^3P_1\leftrightarrow{}^3S_1,\quad
{}^3P_2\leftrightarrow{}^3S_1.
$$

**Assumptions.** The problem specifies the terms without giving the full configurations. The labels determine the three branches allowed by angular momentum. For all three to be E1-allowed, the two configurations must also have **opposite parity** and satisfy the one-electron jump rule.

### 13.2 Landé intervals and photon energies

Define $C=|A|>0$ as the strength of the spin–orbit coupling for ${}^3P$. The $J=0,1$ pair is separated by $C$, and the $J=1,2$ pair by $2C$. The highest and lowest levels are separated by $3C$. The ${}^3S_1$ term has only one $J$, so it has no internal J splitting.

Let $E_{\gamma,\min}$ be the lowest of the three photon energies. Whether ${}^3P$ is the upper or lower term, the frequency sequence follows one of two patterns.

$$
\boxed{\text{Pattern I:}\quad h\nu=E_{\gamma,\min},\ E_{\gamma,\min}+C,\ E_{\gamma,\min}+3C}
$$

The adjacent spacings are $C/h,\ 2C/h$. The other pattern is

$$
\boxed{\text{Pattern II:}\quad h\nu=E_{\gamma,\min},\ E_{\gamma,\min}+2C,\ E_{\gamma,\min}+3C}
$$

Its adjacent spacings are $2C/h,\ C/h$.

| ${}^3P$ case | P level in order of increasing frequency | Adjacent frequency spacings |
|---|---|---|
| Normal, P upper | $J=0,1,2$ | $C/h,\ 2C/h$ |
| Normal, P lower | $J=2,1,0$ | $2C/h,\ C/h$ |
| Inverted, P upper | $J=2,1,0$ | $2C/h,\ C/h$ |
| Inverted, P lower | $J=0,1,2$ | $C/h,\ 2C/h$ |

**Frequency and wavelength spacing ratios generally differ** because $\lambda=c/\nu$ is nonlinear. If all three lines lie within a narrow interval, the wavelength spacings are proportional to the frequency spacings to first order, with the order reversed.

---

## 14. RL 10.2 — Ten allowed or forbidden E1 transitions

**Problem, paraphrased.** Check all necessary electric dipole selection rules in LS coupling for each of the ten pairs and identify any violated rule. The printed label in part (j) is also inconsistent with the allowed angular momentum addition for $L,S,J$ and should be flagged separately.

| Part | Transition, with the original quantum numbers | Verdict | Relevant rules |
|---|---|---|---|
| a | $3s\ {}^2S_{1/2}\leftrightarrow4s\ {}^2S_{1/2}$ | **Forbidden** | $s\to s$ gives $\Delta l=0$. Both states are even, and $L=0\leftrightarrow0$ is forbidden |
| b | $2p\ {}^2P_{1/2}\leftrightarrow3d\ {}^2D_{5/2}$ | **Forbidden** | $\Delta J=2$, although $p\to d$ and the change of parity satisfy the rules |
| c | $3s3p\ {}^3P_1\leftrightarrow3p^2\ {}^1D_2$ | **Forbidden** | $S:1\to0$ violates $\Delta S=0$. The other principal E1 conditions can be satisfied |
| d | $2p3p\ {}^3D_1\leftrightarrow3p4d\ {}^3F_2$ | **Allowed** | One electron changes from $2p\to4d$, with $\Delta l=1$, a parity change, and $\Delta S=0,\Delta L=1,\Delta J=1$ |
| e | $2p^2\ {}^3P_0\leftrightarrow2p3s\ {}^3P_0$ | **Forbidden** | $J=0\leftrightarrow0$, even though the one-electron change and parity are allowed |
| f | $3s2p\ {}^1P_1\leftrightarrow2p3p\ {}^1P_1$ | **Allowed** | $3s\to3p$ changes parity, and $\Delta S=0,\Delta L=0,\Delta J=0$ are all permissible here |
| g | $2s3p\ {}^3P_0\leftrightarrow3p4d\ {}^3P_1$ | **Forbidden** | $2s\to4d$ gives $\Delta l=2$. Parity is unchanged |
| h | $1s^2\ {}^1S_0\leftrightarrow2s2p\ {}^1P_1$ | **Forbidden** | Both electrons must change orbitals, violating the single-configuration E1 rule |
| i | $2p3p\ {}^3S_1\leftrightarrow2p4d\ {}^3D_2$ | **Forbidden** | $L:0\to2$ gives $\Delta L=2$. The other principal rules are satisfied |
| j | $2p^3\ {}^2D_{3/2}\leftrightarrow2p^3\ {}^2D_{1/2}$ | **Forbidden** | Parity is unchanged within the configuration, and the right-hand ${}^2D_{1/2}$ label is itself **invalid as an LSJ level** |

**The printed label in part (j).** The searchable RL text prints $2p^3\ {}^2D_{1/2}$. Angular momentum addition with $L=2,S=1/2$ gives only $J=3/2,5/2$, so $J=1/2$ is invalid. Flag this in the answer. Even with the valid $J=5/2$ label, unchanged parity would still forbid E1. The printed label is retained here.

**Suggested order of checks.** Start with parity, then look for a single-electron change with $\Delta l=\pm1$, check $S,L,J$, and verify that the term itself is valid. An allowed classification requires **all** conditions. A forbidden classification needs at least one explicit violation, and listing additional violations can clarify the result.

---

## 15. Detailed worked solutions in English

> These are independently written, assignment-style explanations, not quotations from the textbook. Assumptions and exceptions are stated explicitly.

### Problem 9.2 — Spectroscopic terms

**(a) $2s^2$.** Both electrons occupy the same $2s$ spatial orbital, for which $l_1=l_2=0$. Consequently, $L=0$. Because the spatial wavefunction is symmetric, the Pauli principle requires an antisymmetric spin function. The two-electron spin state must therefore be the singlet, $S=0$. Coupling $L=0$ and $S=0$ gives $J=0$. The parity is $(-1)^{0+0}=+1$. Thus the only term and level are $\boxed{{}^1S_0}$, with even parity.

**(b) $2p3s$.** The two electrons are nonequivalent. Coupling their orbital angular momenta $l_1=1$ and $l_2=0$ yields $L=1$ only. Coupling two spin-$1/2$ electrons yields $S=0$ and $S=1$. Thus both ${}^1P$ and ${}^3P$ terms occur. The singlet has $J=1$, whereas the triplet has $J=0,1,2$. The parity is $(-1)^{1+0}=-1$. The levels are $\boxed{{}^1P_1^{\mathrm o},{}^3P_0^{\mathrm o},{}^3P_1^{\mathrm o},{}^3P_2^{\mathrm o}}$.

**(c) $3p4p$.** Although the electrons have the same orbital angular momentum $l=1$, they differ in principal quantum number and are therefore nonequivalent. The orbital angular momenta give $L=0,1,2$, and the spins give $S=0,1$. All six LS terms are present: ${}^1S,{}^1P,{}^1D,{}^3S,{}^3P,{}^3D$. Coupling $L$ and $S$ gives the respective J values $0;1;2;1;0,1,2;1,2,3$. Because $l_1+l_2=2$, every term has even parity. The full set of levels is $\boxed{{}^1S_0,{}^1P_1,{}^1D_2,{}^3S_1,{}^3P_{0,1,2},{}^3D_{1,2,3}}$.

**(d) $2p^43p$.** First construct the allowed parent terms of the $2p^4$ equivalent-electron subshell. The $p^4$ subshell is related to $p^2$ by particle–hole symmetry; its terms are ${}^1S$, ${}^1D$, and ${}^3P$. Coupling the $3p$ electron, with $l=1$ and $s=1/2$, to the ${}^1S$ parent produces ${}^2P$; coupling it to ${}^1D$ produces ${}^2P,{}^2D,{}^2F$; and coupling it to ${}^3P$ produces ${}^2S,{}^2P,{}^2D,{}^4S,{}^4P,{}^4D$. Repeated ${}^2P$ and ${}^2D$ terms must be counted separately because they originate from distinct parents. Their J values are $1/2$ for ${}^2S$; $1/2,3/2$ for ${}^2P$; $3/2,5/2$ for ${}^2D$; $5/2,7/2$ for ${}^2F$; $3/2$ for ${}^4S$; $1/2,3/2,5/2$ for ${}^4P$; and $1/2,3/2,5/2,7/2$ for ${}^4D$. The parity is $(-1)^5=-1$, so all these levels are odd. The complete state count is $90$, consistent with $\binom64\times6$.

### Problem 9.3 — Degeneracy consistency

A one-electron $nl$ subshell has $2(2l+1)$ spin-orbitals. For $q$ equivalent electrons, the number of allowed configurations of occupied spin-orbitals is $\binom{2(2l+1)}q$; for electrons in distinct subshells the corresponding numbers multiply. A term of given $L,S$ contains $(2L+1)(2S+1)$ states, while each level of total $J$ contains $2J+1$ states.

For **$2s^2$**, direct configuration counting gives $\binom22=1$. Its single ${}^1S$ term has degeneracy $1$, and its ${}^1S_0$ level has degeneracy $1$.

For **$2p3s$**, direct counting gives $6\times2=12$. The ${}^1P$ and ${}^3P$ terms have degeneracies $3$ and $9$, totaling $12$. Their levels contain $3$ and $1+3+5=9$ states, respectively. Thus the level sum also equals $12$.

For **$3p4p$**, direct counting gives $6\times6=36$. The ${}^1S,{}^1P,{}^1D,{}^3S,{}^3P,{}^3D$ terms contribute $1,3,5,3,9,15$ states, respectively, for a total of $36$. Decomposing these terms by J gives $1+3+5+3+(1+3+5)+(3+5+7)=36$.

As an optional extension, the **$2p^43p$** configuration contains $\binom64\times6=90$ states. The terms found in Problem 9.2(d) contribute $2+3(6)+2(10)+14+4+12+20=90$, including all repeated terms. Thus the configuration, term, and level counting schemes are mutually consistent.

### Problem 10.1 — Fine-structure components and line separations

For a ${}^3P$ term, $L=1$ and $S=1$, so $J=0,1,2$. For a ${}^3S$ term, $L=0$ and $S=1$, so $J=1$ only. The E1 angular-momentum rules allow ${}^3P_0\leftrightarrow{}^3S_1$, ${}^3P_1\leftrightarrow{}^3S_1$, and ${}^3P_2\leftrightarrow{}^3S_1$. **Assuming opposite parity and a permitted single-electron configuration change**, these give three lines.

Let $C=|A|>0$ denote the magnitude of the spin–orbit constant for ${}^3P$. From the Landé interval rule, $|E_{P,1}-E_{P,0}|=C$ and $|E_{P,2}-E_{P,1}|=2C$. If ${}^3P$ is normal and lies above ${}^3S$, the frequencies increase in the order $J=0,1,2$, and the consecutive separations are $C/h$ and $2C/h$. If ${}^3P$ is normal and lies below ${}^3S$, the frequencies increase in the order $J=2,1,0$, and the separations are $2C/h$ and $C/h$. An inverted upper ${}^3P$ term also produces $2C/h,C/h$, while an inverted lower term produces $C/h,2C/h$. These intervals are **frequency**, not exact wavelength, separations.

### Problem 10.2 — Selection rules (all ten parts)

**(a)** $3s\ {}^2S_{1/2}\leftrightarrow4s\ {}^2S_{1/2}$ is **forbidden**. The active electron undergoes $s\to s$ with $\Delta l=0$ and no change in parity. The term-level $L=0\leftrightarrow0$ prohibition also applies.

**(b)** $2p\ {}^2P_{1/2}\leftrightarrow3d\ {}^2D_{5/2}$ is **forbidden**. The single-electron change $p\to d$ and parity reversal are permitted, but the total angular momentum changes by $\Delta J=2$, outside the E1 range.

**(c)** $3s3p\ {}^3P_1\leftrightarrow3p^2\ {}^1D_2$ is **forbidden** in pure LS coupling. The total spin changes from $S=1$ to $S=0$, violating $\Delta S=0$, although an orbital change $3s\to3p$, opposite parity, and acceptable L and J changes are possible.

**(d)** $2p3p\ {}^3D_1\leftrightarrow3p4d\ {}^3F_2$ is **allowed** by the stated rules. One electron changes $2p\to4d$, satisfying $\Delta l=+1$ and reversing parity. Moreover, $\Delta S=0$, $\Delta L=+1$, and $\Delta J=+1$.

**(e)** $2p^2\ {}^3P_0\leftrightarrow2p3s\ {}^3P_0$ is **forbidden** because an E1 transition between $J=0$ and $J=0$ is excluded. The permissible single-electron change $2p\to3s$ does not remove this restriction.

**(f)** $3s2p\ {}^1P_1\leftrightarrow2p3p\ {}^1P_1$ is **allowed**. The changing electron undergoes $3s\to3p$ and parity reverses. Both states have $S=0,L=1,J=1$, so the total quantum-number selection rules are met.

**(g)** $2s3p\ {}^3P_0\leftrightarrow3p4d\ {}^3P_1$ is **forbidden**. The only spectator choice leaves $3p$ unchanged and requires $2s\to4d$ with $\Delta l=2$; both configurations also have odd parity.

**(h)** $1s^2\ {}^1S_0\leftrightarrow2s2p\ {}^1P_1$ is **forbidden** in the single-configuration electric-dipole approximation. Both occupied electrons would have to change orbitals; the one-electron dipole operator does not connect these two determinants directly.

**(i)** $2p3p\ {}^3S_1\leftrightarrow2p4d\ {}^3D_2$ is **forbidden** in LS coupling because $L=0\to2$ gives $\Delta L=2$, despite the allowed $3p\to4d$ single-electron change and opposite parity.

**(j)** $2p^3\ {}^2D_{3/2}\leftrightarrow2p^3\ {}^2D_{1/2}$ is **forbidden** under E1 rules because both states have the same configuration and parity. **The printed label ${}^2D_{1/2}$ is also formally inconsistent**: for $L=2,S=1/2$, only $J=3/2$ and $J=5/2$ exist. The selection-rule conclusion is independent of how this apparent typographical error is resolved.

Therefore **only (d) and (f)** are allowed by all the E1 selection rules in the stated single-configuration LS approximation.

---

## 16. Key results, common confusions, and self-check

### 16.1 Essential formulas

$$
\boxed{\mathbf L=\sum_i\mathbf l_i,\qquad\mathbf S=\sum_i\mathbf s_i,\qquad\mathbf J=\mathbf L+\mathbf S}
$$

$$
\boxed{{}^{2S+1}L_J,\qquad J=|L-S|,|L-S|+1,\ldots,L+S}
$$

$$
\boxed{\hat{\mathbf J}^2\to J(J+1)\hbar^2,\qquad J_z\to M_J\hbar}
$$

$$
\boxed{P=(-1)^{\sum_i l_i}}
$$

$$
\boxed{g_{\rm term}=(2L+1)(2S+1),\qquad g_J=2J+1}
$$

$$
\boxed{g_{\rm term}=\sum_{J=|L-S|}^{L+S}(2J+1)}
$$

$$
\boxed{\Delta E_J=\tfrac A2[J(J+1)-L(L+1)-S(S+1)],\qquad E_J-E_{J-1}=AJ}
$$

$$
\boxed{\Delta E_{\rm Zeeman}=\mu_Bg_J M_JB\quad\text{(weak field, good LSJ)}}
$$

$$
\boxed{\text{E1: parity reverses},\quad\Delta S=0,\quad\Delta L=0,\pm1,\quad\Delta J=0,\pm1}
$$

The E1 summary also requires excluding $L=0\leftrightarrow0$ and $J=0\leftrightarrow0$. A single electron must satisfy $\Delta l=\pm1$, and only one electron directly changes orbitals in the single-configuration approximation.

### 16.2 Eight distinctions to remember

| Concepts | Distinction |
|---|---|
| Single-electron p and whole-atom P | p corresponds to $l=1$, and P corresponds to $L=1$ |
| Pauli and Hund | Pauli restricts the **allowed states**. Hund orders their **relative energies** |
| Singlet and the product $\uparrow\downarrow$ | The singlet is an **antisymmetric linear combination**. The triplet with $M_S=0$ also involves both arrows |
| LS term and J level | The term fixes $L,S$, and the level additionally fixes $J$ |
| Multiplying for $g_{\rm term}$ and adding across levels | Multiply the independent choices of $M_L,M_S$. Add the counts for disjoint $J$ levels |
| $\Delta l$ and $\Delta L$ | A one-electron E1 change in $l$ must be $\pm1$. The whole atom can have $\Delta L=0$ |
| Fine and hyperfine structure | Fine structure includes electronic $\mathbf L$ and $\mathbf S$ coupling. Hyperfine structure couples nuclear $\mathbf I$ to electronic $\mathbf J$ |
| E1-forbidden transitions and other channels | An E1-forbidden line can still arise through M1, E2, or another weaker channel |

### 16.3 Self-check questions

1. Can $2p3s$ have a ${}^3P_2$ level? What is its parity?
2. Why does a ${}^3P$ term have degeneracy 9, and why do its three J levels also contain 9 states in total?
3. Why do $2p^4$ and $2p^2$ have the same LS terms but potentially different lowest J levels under Hund's rules?
4. Which conditions does the one-electron E1 transition $3s\to4s$ violate?
5. Why are both [O III] 5007 and 4959 present? Does the 21 cm line come from fine or hyperfine structure?

**Answer key**

1. Yes, ${}^3P_2^{\rm o}$, since $L=S=1\Rightarrow J=0,1,2$ and parity $=(-1)^{1+0}=-1$.
2. There are three $M_L$ and three $M_S$ choices, so $3\times3=9$. Regrouping into $J=0,1,2$ gives $1+3+5=9$.
3. The two holes in $p^4$ have the same term classification as two p electrons. Since the subshell is more than half full, Hund's third rule places the largest J lowest.
4. $\Delta l=0$, parity is unchanged, and $L=0\leftrightarrow0$.
5. The same ${}^1D_2$ level can decay to ${}^3P_2$ or ${}^3P_1$, whose energies differ. The 21 cm line comes from the proton–electron spin hyperfine splitting.

### 16.4 Suggested review

- First explain where $L,S,J$ and ${}^{2S+1}L_J$ come from in your own words.
- Then compute the 12 states of $2p3s$ and the 36 states of $3p4p$ by hand.
- Understand the two-hole picture for $2p^4$ and how Hund's rules identify the lowest member among the already allowed terms.
- Finally, check E1 rules in the order parity → single-electron change → $S,L,J$. Explain at least one rule by showing why its matrix element vanishes.

---

## 17. References

1. Marten van Kerkwijk, **AST1440 – Radiation (2026)**, November 23, 2026 reading and problem assignment. <https://www.astro.utoronto.ca/~mhvk/AST1440/>
2. G. B. Rybicki & A. P. Lightman, *Radiative Processes in Astrophysics*, Chs. 9–10. See §9.3, §9.4 through the Zeeman effect, §10.4, and Problems 9.2, 9.3, 10.1, and 10.2. Publisher information is at <https://www.wiley.com/en-us/radiative-processes-in-astrophysics-p-9783527414499>. The searchable copy used to check the problem statements is at <https://www.bartol.udel.edu/~owocki/phys633/RadProc-RybLightman.pdf>.
3. Electron configuration：<https://en.wikipedia.org/wiki/Electron_configuration>；Term symbol：<https://en.wikipedia.org/wiki/Term_symbol>。
4. Storey & Zeippen, 2000, *MNRAS*, on the [O III] 5007/4959 branching ratio. <https://academic.oup.com/mnras/article/312/4/813/1017382>. For emission mechanisms and numerical examples, see <https://www.mdpi.com/2073-8994/14/2/266>.
5. NRAO, *Essential Radio Astronomy*，H I 21-cm hyperfine transition：<https://www.cv.nrao.edu/~sransom/web/Ch7.html>。

> **Figures.** The illustrations were drawn for these notes. Level spacings and line heights are schematic and generally are not drawn to the scale of actual observations.
