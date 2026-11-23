---
title: "AST1440 Boltzmann Distribution and Saha Ionization Equilibrium: RL §9.5 and Problems 9.4–9.5"
description: "Derives the Boltzmann distribution and Saha equation from thermal equilibrium and state counting, examines hydrogen ionization, transition widths, and Balmer lines, and works through RL Problems 9.4 and 9.5."
date: "2026-11-23"
tags: ["AST1440","Boltzmann distribution","Saha equation","Ionization equilibrium","Exercises"]
order: 19
draft: false
translation: "AI-assisted English translation"
sourceHash: "f9471cd9cb6ee7c962470e6978767317e11b68e8e19260df92770a860215e5b0"
---

# AST1440 Boltzmann Distribution and Saha Ionization Equilibrium: RL §9.5 and Problems 9.4–9.5

> Course: University of Toronto AST1440 — Radiation (November 16, 2026)  
> Textbook: Rybicki & Lightman, *Radiative Processes in Astrophysics* (RL), §9.5. Assigned problems: RL 9.4 and 9.5.  
> Compiled on November 23, 2026.  
> Start with the physical picture, then follow the derivations. Each section addresses the questions that came up on its topic. Sections 9 and 10 contain the worked solutions.  
> **Figures.** The original SVG illustrations are embedded below.

## Table of Contents

1. [Physical overview](#1-physical-overview)
2. [Boltzmann distribution and level populations within one ionization stage](#2-boltzmann-distribution-and-level-populations-within-one-ionization-stage)
3. [Maxwell–Boltzmann distribution and the thermal de Broglie wavelength](#3-maxwellboltzmann-distribution-and-the-thermal-de-broglie-wavelength)
4. [Why the Saha equation depends on more than temperature](#4-why-the-saha-equation-depends-on-more-than-temperature)
5. [What does $n_e\lambda_{\rm th}^3$ mean?](#5-what-does-n_elambda_rm-th3-mean)
6. [Hydrogen ionization fraction and numerical examples](#6-hydrogen-ionization-fraction-and-numerical-examples)
7. [Why is the ionization transition steep? RL 9.4](#7-why-is-the-ionization-transition-steep-rl-94)
8. [Applications to astronomical spectra, assumptions, and common pitfalls](#8-applications-to-astronomical-spectra-assumptions-and-common-pitfalls)
9. [RL 9.4 overview and detailed solution](#9-rl-94-overview-and-detailed-solution)
10. [RL 9.5 overview and detailed solution](#10-rl-95-overview-and-detailed-solution)
11. [Key concepts and formulas](#11-key-concepts-and-formulas)
12. [Sources and references](#12-sources-and-references)

---

## 1. Physical overview

The previous section on inverse Compton scattering examined **energy exchange** between photons and electrons. Here we assume that the gas has reached thermal equilibrium and ask **how many particles occupy each energy level and each ionization stage**.

These are two distinct statistical questions.

| Question | Tool | What is compared |
|---|---|---|
| For a hydrogen atom that remains neutral, is the electron in $n=1$ or $n=2$? | **Boltzmann** | Different internal energy levels within one ionization stage |
| In a pure hydrogen gas, how much is $\mathrm{H^0}$ and how much is $\mathrm{H^+}$? | **Saha** | Adjacent ionization stages of the same element |

The physical progression is **thermal equilibrium → Boltzmann weights → internal partition functions → the free-electron translational partition function → Saha ionization ratios → spectral line strengths**.

Here $T$ is the gas temperature, $k_B$ is the Boltzmann constant, and $h$ is the Planck constant. The symbol $n_e$ denotes the free-electron **number density**. The internal partition function of ionization stage $j$ is $U_j$. The energy needed to remove one more electron from stage $j$ is $\chi_j$.

---

## 2. Boltzmann distribution and level populations within one ionization stage

### 2.1 Why are lower energy levels more populated?

In thermal equilibrium, the statistical weight of a **single microstate** of energy $E$ is proportional to $e^{-E/k_BT}$. The weight decreases as energy increases. If several distinct microstates share an energy level, their combined weight also includes the degeneracy $g$.

The number-density ratio of levels $i,j$ within one ionization stage is therefore

$$
\boxed{\frac{n_j}{n_i}=\frac{g_j}{g_i}\exp\left[-\frac{E_j-E_i}{k_BT}\right].}
$$

- $e^{-(E_j-E_i)/k_BT}$ accounts for the **energy cost** of populating the higher level.
- $g_j/g_i$ accounts for the **relative number of quantum states** at the two energies.

**The thermal energy scale is $k_BT$.** Particles in the high-energy tail can still drive transitions with energy gaps much larger than $k_BT$.

![Hydrogen energy levels and the 10.2 eV transition from the ground state to the first excited level](/learning/radiation/saha-equilibrium/hydrogen-energy-levels.svg)

*Figure 1. Hydrogen energy levels with fine structure neglected. The gap from $n=1$ to $n=2$ is 10.2 eV, and the gap from $n=1$ to the continuum is 13.6 eV. Solid lines mark bound states, and the dashed line marks the ionization limit.*

### 2.2 Hydrogen example

The bound energy levels of hydrogen are

$$
E_n=-\frac{13.6\,\mathrm{eV}}{n^2},\qquad g_n=2n^2.
$$

Here $g_n=2n^2$ counts all orbital and spin states with principal quantum number $n$, neglecting fine structure. Thus $g_1=2$, $g_2=8$, and $\Delta E=10.2\,\mathrm{eV}$.

$$
\boxed{\frac{n_2}{n_1}=4\exp\left(-\frac{10.2\,\mathrm{eV}}{k_BT}\right).}
$$

At $T=10^4\,\mathrm K$, we have $k_BT=0.8617\,\mathrm{eV}$, so

$$
\frac{n_2}{n_1}\simeq2.89\times10^{-5}.
$$

**This ratio compares the populations of $n=2$ and $n=1$ among hydrogen atoms that remain neutral.**

### 2.3 What is the partition function $U(T)$?

With multiple internal energy levels, we add their relative weights. Taking the ground state of that ionization stage as the zero of energy, define

$$
\boxed{U(T)=\sum_i g_i e^{-\epsilon_i/k_BT}},\qquad \epsilon_i=E_i-E_0\ge0.
$$

After normalization, the conditional probability that an atom occupies level $i$ is

$$
\boxed{\frac{n_i}{n_{\mathrm{stage}}}=\frac{g_i e^{-\epsilon_i/k_BT}}{U(T)}.}
$$

Here $n_{\mathrm{stage}}$ is the **total number density summed over the internal levels of that ionization stage**. At relatively low temperatures and in the absence of low-lying excited levels, $U(T)\approx g_0$.

For an isolated hydrogen atom, summing over the infinitely many high-$n$ bound states causes the internal partition sum to diverge. In a real plasma, screening and pressure ionization impose a physical cutoff. The ground-state approximation used here avoids that complication.

---

## 3. Maxwell–Boltzmann distribution and the thermal de Broglie wavelength

### 3.1 What does it mean to follow a Maxwell–Boltzmann distribution?

Imagine a box of nonrelativistic, nondegenerate electrons in thermal equilibrium. Collisions continually redistribute their velocities. Some electrons move slowly and some move quickly, while the **shape** of the distribution stays the same.

For the momentum component $p_x$, the corresponding kinetic energy is $E_x=p_x^2/(2m_e)$. The Boltzmann weight gives

$$
\boxed{f(p_x)=\frac{1}{\sqrt{2\pi m_ek_BT}}\exp\left(-\frac{p_x^2}{2m_ek_BT}\right)}.
$$

This is a **Gaussian distribution** centered on $p_x=0$ with standard deviation $\sigma_{p_x}=\sqrt{m_ek_BT}$. As Figure 2 shows, hotter electrons have a broader distribution, making large positive or negative momenta more common.

![One-dimensional Maxwell momentum density broadens as temperature rises](/learning/radiation/saha-equilibrium/maxwell-momentum-distribution.svg)

*Figure 2. The horizontal axis gives the single momentum component $p_x$, which can be negative. The area under each curve is 1. The Maxwell speed distribution instead describes $v=|\mathbf v|\ge0$ and includes the spherical-shell factor $4\pi v^2$.*

### 3.2 Where do $\sqrt{3m_ek_BT}$ and $\sqrt{2\pi m_ek_BT}$ come from?

Equipartition assigns $k_BT/2$ to each of the three translational degrees of freedom. This gives

$$
\left\langle\frac{p^2}{2m_e}\right\rangle=\frac32k_BT
\quad\Rightarrow\quad
\boxed{p_{\rm rms}=\sqrt{3m_ek_BT}}.
$$

In one direction, the root-mean-square momentum is $\sqrt{m_ek_BT}$. These expressions give the three- and one-dimensional RMS momenta.

**The factor $\sqrt{2\pi m_ek_BT}$ comes from the Gaussian integral in the partition function.** Calling it a typical electron momentum can work for an order-of-magnitude estimate. Its origin matters when deriving the exact numerical coefficient.

### 3.3 Why does the thermal de Broglie wavelength contain $2\pi$?

To count the classical translational states available to a **free electron** in volume $V$, omit spin for now and write

$$
Z_{\rm trans}=\frac{V}{h^3}\int e^{-p^2/(2m_ek_BT)}\,d^3p.
$$

The three momentum integrals factorize. The standard Gaussian integral is

$$
\int_{-\infty}^{+\infty}e^{-p_x^2/(2m_ek_BT)}\,dp_x
=\sqrt{2\pi m_ek_BT},
$$

This gives

$$
Z_{\rm trans}=\frac{V}{h^3}(2\pi m_ek_BT)^{3/2}
=\frac{V}{\lambda_{\rm th,e}^3},
$$

and defines

$$
\boxed{\lambda_{\rm th,e}=\frac{h}{\sqrt{2\pi m_ek_BT}}.}
$$

**The $2\pi$ comes from the Gaussian integral.** The momentum scale $\sqrt{2\pi m_ek_BT}$ arises from this integral. The two possible spin orientations multiply the free-electron single-particle partition function by 2.

---

## 4. Why the Saha equation depends on more than temperature

### 4.1 Two competing statistical effects

$$
\mathrm{H^0}\rightleftharpoons\mathrm{H^+}+e^-.
$$

Removing an electron from neutral hydrogen costs $\chi=13.6\,\mathrm{eV}$. The factor $e^{-\chi/k_BT}$ suppresses ionization because of this **energy cost**.

Once released, the electron can move freely throughout the container and access **many translational momentum states**. This gives ionization an **entropic advantage**.

![Comparison of available states for a bound electron and a free electron](/learning/radiation/saha-equilibrium/ionization-and-electron-states.svg)

*Figure 3. This schematic is drawn out of scale. Thermal equilibrium reflects the competition between the energy $\chi$ needed to remove a bound electron and the increase in available translational states for a free electron.*

### 4.2 The Saha equation

For adjacent ionization stages $j\to j+1$ of the same element, the equation is

$$
\boxed{
\frac{n_{j+1}}{n_j}
=\frac{2U_{j+1}(T)}{U_j(T)}\,
\frac{1}{n_e\lambda_{\rm th,e}^3}\,
\exp\!\left(-\frac{\chi_j}{k_BT}\right)
}.
$$

An equivalent form is

$$
\boxed{
\frac{n_{j+1}n_e}{n_j}
=\frac{2U_{j+1}}{U_j}
\left(\frac{2\pi m_ek_BT}{h^2}\right)^{3/2}
\exp\!\left(-\frac{\chi_j}{k_BT}\right)
}.
$$

The equation contains three factors.

1. $2U_{j+1}/U_j$ accounts for the two free-electron spin states and the ratio of the ions' internal partition functions.
2. $1/(n_e\lambda_{\rm th,e}^3)$ gives the **statistical advantage** of free-electron translation.
3. $e^{-\chi_j/k_BT}$ is the exponential **suppression** due to the ionization energy.

The first two factors can be large, so **substantial ionization is possible even when $k_BT$ is much smaller than $\chi$**.

### 4.3 Why does releasing an electron introduce $1/n_e$?

The chemical potential of classical, nondegenerate free electrons is

$$
\boxed{\mu_e=k_BT\ln\!\left(\frac{n_e\lambda_{\rm th,e}^3}{2}\right)},
$$

This expression omits the rest-energy reference terms that cancel. Ionization equilibrium requires

$$
\mu_{\rm H^0}=\mu_p+\mu_e.
$$

Treat each species as an ideal gas and sum its internal levels in a partition function. Including the neutral hydrogen binding energy $-\chi$ in its chemical potential gives the Saha equation above. Because $m_p\simeq m_{\rm H^0}$, the translational partition factors of the proton and neutral hydrogen nearly cancel. **The extra translational factor is $1/\lambda_{\rm th,e}^3$ for the free electron.** Together with the electron density it gives $1/(n_e\lambda_{\rm th,e}^3)$.

At fixed $T,V$, the more free electrons are already present, the smaller the gain in mixing entropy from adding another. The ionization-stage **ratio** therefore contains $1/n_e$. This is a statistical effect. The characteristic volume $\lambda^3$ does not describe the size of an electron.

---

## 5. What does $n_e\lambda_{\rm th}^3$ mean?

### 5.1 An interpretation in terms of states

At an electron number density $n_e$, the mean volume per electron is $n_e^{-1}$. Meanwhile, the **effective number of single-particle translational states** in a volume $V$, excluding spin, is proportional to $V/\lambda_{\rm th}^3$.

Combining these gives

$$
\boxed{\frac{1}{n_e\lambda_{\rm th}^3}=
\frac{\text{mean volume per electron}}{\text{characteristic thermal de Broglie volume}}.}
$$

The ratio counts **how many thermal translational states are available in the mean volume per electron**. It counts states in phase space. The volume $\lambda_{\rm th}^3$ sets the counting scale.

- Lower density favors ionization since $n_e\downarrow\Rightarrow1/(n_e\lambda^3)\uparrow$.
- Higher temperature also favors ionization because $\lambda\propto T^{-1/2}$, which increases the number of thermally accessible translational states for free electrons.
- The nondegenerate limit requires $n_e\lambda^3\ll1$.

### 5.2 Numerical example

At $T=10^4\,\mathrm K$, we have

$$
\lambda_{\rm th,e}\simeq 7.45\times10^{-10}\,\mathrm m.
$$

Take a **free-electron number density** $n_e=10^{14}\,\mathrm{cm^{-3}}=10^{20}\,\mathrm{m^{-3}}$. Then

$$
n_e\lambda^3\simeq4.14\times10^{-8},
\quad\frac{1}{n_e\lambda^3}\simeq2.4\times10^7.
$$

The suppression from the ionization energy is

$$
\exp(-13.6/0.8617)\simeq1.4\times10^{-7},
$$

The product of these two factors is already of order unity. **A gas can be appreciably ionized well below the temperature $13.6\,\mathrm{eV}/k_B\simeq1.58\times10^5\,\mathrm K$.**

**Distinguish the two densities.** Here the specified density is $n_e=10^{14}\,\mathrm{cm^{-3}}$. The pure hydrogen example in the next section fixes the **total hydrogen-nucleus number density** $n_{\rm H,tot}=10^{14}\,\mathrm{cm^{-3}}$. In a partially ionized gas these densities differ.

---

## 6. Hydrogen ionization fraction and numerical examples

### 6.1 Distinguishing $x$ from $\delta$

For a pure hydrogen gas, define the total hydrogen-nucleus number density

$$
n_{\rm H,tot}=n_{\rm H^0}+n_p.
$$

Define the ionized **fraction**

$$
\boxed{x\equiv\frac{n_p}{n_{\rm H,tot}}},\qquad 0\le x\le1,
$$

and the ionized-to-neutral **number ratio**

$$
\boxed{\delta\equiv\frac{n_p}{n_{\rm H^0}}=\frac{x}{1-x}},\qquad \delta\ge0.
$$

**RL 9.5 asks for $\delta$, while the interactive illustration used $x$.** They are related by $x=\delta/(1+\delta)$.

Charge neutrality gives $n_e=n_p=xn_{\rm H,tot}$. Assume that hydrogen is either neutral or singly ionized, with ground-state partition functions $U_{\rm H^0}\approx2$ for neutral hydrogen and $U_p\approx1$ for protons. The Saha prefactor is then $2U_p/U_{\rm H^0}\approx1$.

Define the function with units of number density

$$
\boxed{K(T)\equiv\left(\frac{2\pi m_ek_BT}{h^2}\right)^{3/2}
\exp\left(-\frac{13.6\,\mathrm{eV}}{k_BT}\right)}.
$$

The Saha relation for pure hydrogen is

$$
\frac{n_p n_e}{n_{\rm H^0}}=K(T)
\quad\Longrightarrow\quad
\boxed{\frac{x^2}{1-x}=\frac{K(T)}{n_{\rm H,tot}}}.
$$

Let $y\equiv K(T)/n_{\rm H,tot}$. Then

$$
x^2+yx-y=0.
$$

Taking the positive physical solution gives the numerically stable expression

$$
\boxed{x=\frac{2}{1+\sqrt{1+4/y}}},
\quad\delta=\frac{x}{1-x}.
$$

### 6.2 Why do temperature and density both affect ionization?

![Ionization fraction of pure hydrogen as a function of temperature at several densities](/learning/radiation/saha-equilibrium/saha-ionization-fraction.svg)

*Figure 4. Equilibrium ionization fraction $x$ for pure hydrogen in the ground-state partition-function approximation. The horizontal axis is $T$ in K, and the curves show different **total hydrogen-nucleus number densities** in cm$^{-3}$. At lower density, the same ionization fraction is reached at lower temperature. These curves apply to classical thermal ionization equilibrium.*

For example, take $T=10^4\,\mathrm K$ and $n_{\rm H,tot}=10^{14}\,\mathrm{cm^{-3}}$. Substitution gives

$$
K(10^4\,\mathrm K)\simeq3.38\times10^{14}\,\mathrm{cm^{-3}},
$$

and therefore $y\simeq3.38$, with

$$
\boxed{x\simeq0.807,\quad 1-x\simeq0.193,\quad\delta\simeq4.18.}
$$

Among the remaining neutral atoms, $n_2/n_1\simeq2.89\times10^{-5}$. The fraction of all hydrogen nuclei that are in neutral hydrogen at $n=2$ is therefore approximately

$$
(1-x)\frac{n_2}{n_1}\simeq5.58\times10^{-6}
=0.000558\%.
$$

At fixed $T=10^4\,\mathrm K$, raising $n_{\rm H,tot}$ from $10^{14}$ to $10^{17}\,\mathrm{cm^{-3}}$ lowers $x$ from about $80.7\%$ to $5.65\%$. The change comes from **Saha equilibrium between ionization stages**. The relative Boltzmann populations within a stage remain fixed at this temperature.

---

## 7. Why is the ionization transition steep? RL 9.4

### 7.1 Defining $\gamma$ and the transition temperature

Define the classical degeneracy parameter

$$
\xi\equiv n_e\lambda_{\rm th,e}^3,
\qquad\boxed{\gamma_{\rm th}\equiv\ln(\xi^{-1})=\ln\frac{1}{n_e\lambda_{\rm th,e}^3}}.
$$

RL 9.4 denotes the logarithmic parameter by $\gamma$. Here we use $\gamma_{\rm th}$ to distinguish it from the electron Lorentz factor $\gamma$ in inverse Compton scattering. In many astrophysical applications, $\gamma_{\rm th}$ is roughly $10$–$30$.

For two neighboring ionization stages, take the partition-function ratio to be of order unity. Then

$$
R\equiv\frac{n_{j+1}}{n_j}\sim
\exp\left(\gamma_{\rm th}-\frac{\chi_j}{k_BT}\right).
$$

The transition occurs when $R\sim1$, or $\ln R\sim0$, so

$$
\gamma_{\rm th}-\frac{\chi_j}{k_BT}\sim0
\quad\Longrightarrow\quad
\boxed{k_BT_{\rm ion}\sim\frac{\chi_j}{\gamma_{\rm th}}\ll\chi_j.}
$$

**Consider the whole distribution.** Significant ionization can occur at a thermal energy below the ionization energy. Both the high-energy tail and the availability of free-electron states affect the equilibrium.

### 7.2 Why does $\Delta T/T\sim1/\gamma_{\rm th}$?

Start with $R\propto T^{3/2}e^{-\chi_j/k_BT}$, treating $n_e$ as fixed and neglecting the temperature dependence of the partition functions. Then

$$
\ln R=\mathrm{const}+\frac32\ln T-\frac{\chi_j}{k_BT}.
$$

To differentiate with respect to $\ln T$, use $d/d\ln T=T\,d/dT$. This gives

$$
\boxed{\frac{d\ln R}{d\ln T}=\frac32+\frac{\chi_j}{k_BT}}.
$$

Near the ionization transition, $\chi_j/(k_BT)\sim\gamma_{\rm th}\gg1$, so

$$
\Delta\ln R\simeq\gamma_{\rm th}\,\frac{\Delta T}{T}.
$$

To increase the **population ratio $R$ by a factor of $e\simeq2.718$**, set $\Delta\ln R=\ln e=1$. This gives

$$
\boxed{\frac{\Delta T}{T}\sim\frac{1}{\gamma_{\rm th}}}.
$$

For $\gamma_{\rm th}=20$, changing the temperature by only about $5\%$ changes the ratio of adjacent ionization stages by roughly a factor of $e$. More precisely, if $T'=1.05T$ and the initial value is $\chi/(k_BT)=20$, then

$$
\frac{R(T')}{R(T)}
=(1.05)^{3/2}\exp\left[20\left(1-\frac{1}{1.05}\right)\right]
\simeq2.78.
$$

The exponential term alone gives about $2.59$. Including the temperature prefactor accounts for the difference.

![Sensitivity of the ratio of adjacent ionization stages to temperature at fixed electron density](/learning/radiation/saha-equilibrium/ionization-transition-width.svg)

*Figure 5. With $n_e$ and the partition functions fixed, $R(T)/R(T_0)$ shows the population ratio relative to its value at reference temperature $T_0$. A larger $\chi/(k_BT_0)$ gives a greater change in the ratio for the same small temperature increase.*

**Domain of validity.** This estimates a local temperature scale. For the self-consistent ionization fraction of pure hydrogen, $n_e=xn_{\rm H,tot}$ also varies with temperature. The derivative at fixed $n_e$ therefore cannot give the exact slope of $x(T)$. The textbook asks for the **order of magnitude of the temperature interval over which the population ratio changes**. A factor of $e$ in that ratio is distinct from the temperature span required to go from nearly neutral to nearly fully ionized.

### 7.3 Are excited states already abundant before appreciable ionization?

The excited and ground-state populations still follow the Boltzmann distribution.

$$
\frac{n_{i,j}}{n_{0,j}}=\frac{g_{i,j}}{g_{0,j}}
\exp\left(-\frac{\epsilon_{i,j}}{k_BT}\right).
$$

Near the ionization transition, $k_BT\sim\chi_j/\gamma_{\rm th}$, so

$$
\boxed{\frac{n_{i,j}}{n_{0,j}}\sim\frac{g_{i,j}}{g_{0,j}}
\exp\left(-\gamma_{\rm th}\frac{\epsilon_{i,j}}{\chi_j}\right)}.
$$

If $\epsilon_{i,j}$ is comparable to $\chi_j$ and $\gamma_{\rm th}\gg1$, excited states are exponentially suppressed. **In many cases, most atoms therefore remain in their ground state until substantial ionization occurs.** Low-lying excited levels, large statistical weights, and complex level structures can change this conclusion and require separate consideration.

---

## 8. Applications to astronomical spectra, assumptions, and common pitfalls

### 8.1 Why do Balmer lines stop strengthening as temperature rises?

Balmer absorption requires neutral hydrogen initially in $n=2$. This sets two conditions.

- At low temperatures, the Boltzmann population at $n=2$ is very small.
- At high temperatures, Saha equilibrium leaves too little neutral hydrogen, $n_{\rm H^0}$.

Balmer lines are therefore especially prominent around A-type stars. In real stellar atmospheres, line strength also depends on continuum opacity, radiative transfer, pressure, and atmospheric structure. Predicting the full line profile requires those ingredients as well.

### 8.2 When do these equations apply?

1. **Thermodynamic equilibrium or suitable LTE conditions** allow a single temperature to describe the statistical weights of local level populations and ionization stages. Non-LTE gas and kinetic equilibria set by photoionization and recombination can depart from Saha equilibrium.
2. **Nonrelativistic electrons and a classical, nondegenerate gas.** This generally requires $n_e\lambda^3\ll1$. A degenerate electron gas instead requires Fermi–Dirac statistics.
3. **An ideal gas or weak interactions.** High density, strong coupling, and pressure ionization can modify the result.
4. **The ground-state partition-function approximation for hydrogen** applies where the relevant excited states have negligible populations. In practice, the gas may also contain species such as $\mathrm{H^-}$ and molecules.
5. The Saha equation gives **equilibrium ratios**. Ionization and recombination must have enough time to establish that equilibrium, and the equation itself gives no timescale.

### 8.3 Common pitfalls

- Confusing the factor $\sqrt{2\pi m_ek_BT}$ with the electron RMS momentum, whose three-dimensional value is $\sqrt{3m_ek_BT}$.
- Treating $\lambda_{\rm th}^3$ as a hard-sphere electron volume. It is a characteristic volume for thermal quantum-state counting in **phase space**.
- Confusing free-electron number density $n_e$ with total hydrogen-nucleus number density $n_{\rm H,tot}$.
- Confusing the ionization fraction $x$ with the ionized-to-neutral number ratio $\delta$.
- Using only $e^{-\chi/k_BT}$ and overlooking the free-electron state-counting factor.
- Applying Saha equilibrium directly to a nonthermal H II region or to photoionized interstellar gas. These situations generally require solving for the balance between photoionization and recombination.

---

## 9. RL 9.4 overview and detailed solution

> **Problem overview.** The problem uses $\xi=n_e\lambda_{\rm th}^3$ and $\gamma=\ln\xi^{-1}$. It assumes that $\gamma$ is large and varies slowly. Part (a) asks for the temperature at which adjacent ionization stages are comparably populated. Part (b) asks for the relative temperature interval over which their ratio changes appreciably. Part (c) uses the Boltzmann distribution to explain why the ground state usually dominates before ionization. The problem is paraphrased and the derivation is independent.

### 9.1 Outline of the solution

(a) Set the Saha ratio to 1 and take logarithms to obtain $\chi_j/(k_BT)\sim\gamma$, hence $k_BT\sim\chi_j/\gamma$.

(b) Differentiate $\ln(n_{j+1}/n_j)$ with respect to $\ln T$. The derivative is approximately $\gamma$ near the transition, so an $e$-fold change in the population ratio requires $\Delta T/T\sim1/\gamma$. If $n_e$ is fixed, the derivative explicitly includes a $3/2$ term.

(c) The Boltzmann population ratio is $\propto e^{-\epsilon/(k_BT)}$. Substituting $k_BT$ from part (a) gives $e^{-\gamma\epsilon/\chi_j}$, which is usually very small.

### 9.2 English Worked Solution — RL Problem 9.4 (a)–(c)

**Problem (paraphrased).** Consider a nondegenerate electron gas, with thermal wavelength $\lambda_{\rm th}=h/(2\pi m_ek_BT)^{1/2}$ and degeneracy parameter $\xi=n_e\lambda_{\rm th}^3$. Assuming $\gamma\equiv\ln(1/\xi)\gg1$ and that internal partition functions are approximately independent of temperature and of order unity, (a) estimate the temperature at which adjacent ionization stages have comparable populations, (b) estimate the relative temperature interval over which the population ratio changes appreciably, and (c) explain why most ions remain in their ground state until ionization.

**Given and assumptions.** The ionization energy from stage $j$ to stage $j+1$ is $\chi_j>0$; the populations are in thermal ionization equilibrium. The partition-function ratio is treated as an order-unity constant. The nondegenerate classical approximation is assumed, $\xi\ll1$. For the simple explicit temperature derivative in part (b), we first regard $n_e$ as fixed; the conclusion remains an order-of-magnitude estimate when other dependencies are slowly varying.

**(a) Transition temperature.** From the Saha equation,

$$
R\equiv\frac{n_{j+1}}{n_j}
=\frac{2U_{j+1}}{U_j}\frac{1}{n_e\lambda_{\rm th}^3}
\exp\!\left(-\frac{\chi_j}{k_BT}\right).
$$

Taking the natural logarithm,

$$
\ln R=\ln\!\left(\frac{2U_{j+1}}{U_j}\right)
+\gamma-\frac{\chi_j}{k_BT}.
$$

At the transition $R\sim1$, so $\ln R\sim0$. Because the first term is of order unity and $\gamma\gg1$,

$$
\boxed{k_BT_{\rm tr}\sim\frac{\chi_j}{\gamma}}.
$$

Hence $k_BT_{\rm tr}\ll\chi_j$: appreciable ionization is possible even when the thermal energy is much smaller than the ionization potential.

**(b) Width of the transition.** For fixed $n_e$, $\lambda_{\rm th}^{-3}\propto T^{3/2}$ and constant internal partition functions. Thus

$$
\ln R=\mathrm{const}+\frac32\ln T-\frac{\chi_j}{k_BT}.
$$

Differentiating with respect to $\ln T$,

$$
\frac{d\ln R}{d\ln T}
=\frac32+\frac{\chi_j}{k_BT}.
$$

At the transition, $\chi_j/(k_BT)\sim\gamma\gg3/2$, whence

$$
\frac{d\ln R}{d\ln T}\sim\gamma.
$$

A substantial multiplicative change of $R$, e.g. $R\to eR$, corresponds to $\Delta\ln R\sim1$. Linearizing around the transition,

$$
1\sim\Delta\ln R\simeq\frac{d\ln R}{d\ln T}\frac{\Delta T}{T}
\sim\gamma\frac{\Delta T}{T},
$$

so the characteristic relative width is

$$
\boxed{\frac{\Delta T}{T}\sim\gamma^{-1}\ll1.}
$$

If the free-electron density is not held fixed, $d\ln R/d\ln T=\chi_j/(k_BT)+d\gamma/d\ln T+d\ln(2U_{j+1}/U_j)/d\ln T$; the problem assumes the corrections do not change the leading order $\sim\gamma$ estimate.

**(c) Ground-state dominance prior to ionization.** Let $\epsilon_{i,j}>0$ be the excitation energy from the ground state of ionization stage $j$ to an excited level $i$. Boltzmann statistics gives

$$
\frac{n_{i,j}}{n_{0,j}}=\frac{g_{i,j}}{g_{0,j}}\exp\!\left(-\frac{\epsilon_{i,j}}{k_BT}\right).
$$

Just below the transition, $k_BT\lesssim\chi_j/\gamma$, implying

$$
\frac{n_{i,j}}{n_{0,j}}\lesssim
\frac{g_{i,j}}{g_{0,j}}\exp\!\left(-\gamma\frac{\epsilon_{i,j}}{\chi_j}\right).
$$

For excitation energies that are a significant fraction of $\chi_j$ and moderate statistical-weight ratios, the exponent is large and negative when $\gamma\gg1$. Therefore the ground state dominates before substantial ionization. Very low-lying levels and unusually large degeneracies require separate consideration.

**Checks and limitations.** The two energies $k_BT$ and $\chi_j$ have identical dimensions; $\gamma$ is dimensionless. The narrow-width statement concerns the *population ratio*, not necessarily a change from 0% to 100% ionization. The analysis presumes near-equilibrium, nondegenerate particles, and slowly varying partition functions.

---

## 10. RL 9.5 overview and detailed solution

> **Problem overview.** A metal container holds initially cold, neutral hydrogen gas with mass density $\rho$. The walls are heated until the gas reaches thermal equilibrium at temperature $T$. Part (a) asks for the single dimensionless parameter $\Delta(\rho,T)$ that determines the ionized-to-neutral ratio $\delta$. Part (b) asks for an explicit algebraic expression for $\delta(\Delta)$. The partition functions may be set equal to the ground-state statistical weights.

### 10.1 Outline of the solution

**The required ratio is $\delta=n_p/n_{\rm H^0}$, which differs from the fraction $x=n_p/n_{\rm H,tot}$.** Let the total hydrogen-nucleus number density be $n_{\rm H,tot}=\rho/m_{\rm H}$. Using $K(T)$ as defined in Section 6, set

$$
\boxed{\Delta(\rho,T)=\frac{K(T)}{n_{\rm H,tot}}=\frac{m_{\rm H}}{\rho}\,K(T)}.
$$

This is a **single dimensionless control parameter** formed from temperature and density. Charge neutrality, $n_p=n_e$, and conservation of hydrogen nuclei give

$$
n_{\rm H^0}=\frac{n_{\rm H,tot}}{1+\delta},\qquad
n_p=n_e=\frac{\delta}{1+\delta}n_{\rm H,tot}.
$$

Substituting into the Saha equation gives

$$
\frac{n_p n_e}{n_{\rm H^0}}
=\frac{\delta^2}{1+\delta}n_{\rm H,tot}
=K(T),
$$

Hence

$$
\boxed{\frac{\delta^2}{1+\delta}=\Delta}.
$$

Solve the quadratic equation $\delta^2-\Delta\delta-\Delta=0$ and take the nonnegative root.

$$
\boxed{\delta(\Delta)=\frac{\Delta+\sqrt{\Delta^2+4\Delta}}{2}.}
$$

The limiting cases are $\Delta\ll1\Rightarrow\delta\simeq\sqrt\Delta$ and $\Delta\gg1\Rightarrow\delta\simeq\Delta+1$. The corresponding ionization fraction is $x=\delta/(1+\delta)$.

### 10.2 English Worked Solution — RL Problem 9.5 (a)–(b)

**Problem (paraphrased).** A closed metal container initially holds cold, neutral hydrogen gas of mass density $\rho$. The container is heated until the gas and its contents reach equilibrium at temperature $T$. Determine the equilibrium ratio $\delta$ of ionized to neutral hydrogen. (a) Identify a single dimensionless combination $\Delta(\rho,T)$ controlling this ratio. (b) Obtain an explicit algebraic formula for $\delta(\Delta)$, taking internal partition functions equal to the ground-state statistical weights.

**Given / Find.** The species are $\mathrm{H^0}$, $p$, and $e^-$. The hydrogen ionization energy is $\chi_H=13.6\,\mathrm{eV}$. Given $\rho$ and $T$, find $\Delta(\rho,T)$ and $\delta=n_p/n_{\rm H^0}$.

**Assumptions.** The gas has reached thermal and ionization equilibrium at $T$; it is nondegenerate and sufficiently dilute for the ideal-gas Saha equation to apply. Only neutral and singly ionized hydrogen are included, with no hydrogen molecules or negative hydrogen ions. Charge neutrality holds, and the total number of hydrogen nuclei is conserved. The fixed nuclear number density is $n_{\rm H,tot}=\rho/m_H$; mass changes due to binding and thermal energy are negligible for this conversion. At the relevant approximation $U_{\rm H^0}\simeq g_{\rm H^0,ground}=2$ and $U_p\simeq1$, so the prefactor $2U_p/U_{\rm H^0}=1$.

**Step 1: Write the hydrogen Saha equation.**

$$
\frac{n_p n_e}{n_{\rm H^0}}
=\underbrace{\left(\frac{2\pi m_ek_BT}{h^2}\right)^{3/2}
 e^{-\chi_H/(k_BT)}}_{\displaystyle K(T)}.
$$

The function $K(T)$ has dimensions of number density.

**Step 2: Express all densities using $\delta$.**

Define $\delta\equiv n_p/n_{\rm H^0}$. Charge neutrality gives $n_e=n_p$. Conservation of hydrogen nuclei gives

$$
n_{\rm H,tot}=n_{\rm H^0}+n_p=n_{\rm H^0}(1+\delta)
\quad\Rightarrow\quad
n_{\rm H^0}=\frac{n_{\rm H,tot}}{1+\delta},
\quad n_p=n_e=\frac{\delta n_{\rm H,tot}}{1+\delta}.
$$

Substituting into the left-hand side of Saha,

$$
\frac{n_p n_e}{n_{\rm H^0}}
=\frac{\left[\delta n_{\rm H,tot}/(1+\delta)\right]^2}
{n_{\rm H,tot}/(1+\delta)}
=\frac{\delta^2}{1+\delta}\,n_{\rm H,tot}.
$$

**(a) Dimensionless parameter.** It follows that

$$
\frac{\delta^2}{1+\delta}=\frac{K(T)}{n_{\rm H,tot}}.
$$

Thus define

$$
\boxed{\Delta(\rho,T)
\equiv\frac{m_H}{\rho}\left(\frac{2\pi m_ek_BT}{h^2}\right)^{3/2}
\exp\!\left(-\frac{\chi_H}{k_BT}\right).}
$$

This quantity is dimensionless, because $m_H/\rho$ is a volume per hydrogen nucleus and the remaining factor has units of inverse volume. Once $\Delta$ is specified, the equilibrium ionization-to-neutral ratio is determined.

**(b) Solve explicitly for $\delta$.** Rewrite the equation as

$$
\delta^2=\Delta(1+\delta)
\quad\Longrightarrow\quad\delta^2-\Delta\delta-\Delta=0.
$$

Applying the quadratic formula,

$$
\delta=\frac{\Delta\pm\sqrt{\Delta^2+4\Delta}}{2}.
$$

For $\Delta>0$, the negative-sign root is nonpositive and is unphysical, since $\delta=n_p/n_{\rm H^0}\ge0$. Hence the physical solution is

$$
\boxed{\delta(\Delta)=\frac{\Delta+\sqrt{\Delta^2+4\Delta}}{2}.}
$$

The corresponding fraction of hydrogen nuclei in ions is

$$
\boxed{x=\frac{n_p}{n_{\rm H,tot}}=\frac{\delta}{1+\delta}
=\frac{2}{1+\sqrt{1+4/\Delta}}.}
$$

**Sanity checks and limiting cases.** If $\Delta\ll1$, then $\delta^2/(1+\delta)\approx\delta^2$, giving $\delta\approx\sqrt\Delta\ll1$: the gas is mostly neutral. If $\Delta\gg1$, then $\delta\gg1$ and $\delta^2/(1+\delta)\approx\delta$, giving $\delta\sim\Delta$ (more precisely, $\delta=\Delta+1+O(\Delta^{-1})$): the gas is nearly completely ionized. At fixed $T$, $\Delta\propto\rho^{-1}$, so a lower-density gas is more ionized in Saha equilibrium. At fixed $\rho$, raising $T$ increases $\Delta$ rapidly.

**Optional numerical example (not additional data from the textbook).** For $T=10^4\,\mathrm K$ and $n_{\rm H,tot}=10^{14}\,\mathrm{cm^{-3}}$ (equivalently $\rho\approx1.67\times10^{-10}\,\mathrm{g\,cm^{-3}}$), $K\simeq3.38\times10^{14}\,\mathrm{cm^{-3}}$ and $\Delta\simeq3.38$. Therefore $\delta\simeq4.18$, corresponding to $x=\delta/(1+\delta)\simeq0.807$.

**Physical limitations.** This is an equilibrium calculation, not a prediction of the equilibration time. A metal enclosure is an idealized thermalizing environment. In a non-LTE radiation field, at very high density, or when molecular and other ionization states become relevant, the simple ideal-gas result must be modified.

---

## 11. Key concepts and formulas

### 11.1 Five points to remember

1. The **Boltzmann distribution** compares internal energy levels **within a single ionization stage**. Their populations depend on both statistical weight and energy cost.
2. The **Maxwell–Boltzmann distribution** describes a range of momenta for thermal electrons. The energy scale $k_BT$ characterizes that distribution.
3. The **$2\pi$ in the thermal de Broglie wavelength comes from a Gaussian momentum integral**. The RMS momentum follows from equipartition.
4. The **Saha equation** compares **adjacent ionization stages**. The ionization energy suppresses ionization, while the many translational states available to free electrons favor it. Density therefore matters.
5. **$x$ is the ionization fraction, and $\delta$ is the ionized-to-neutral number ratio.** Use the requested quantity in RL 9.5.

### 11.2 Formula reference

| Formula | Physical meaning | Conditions or notes |
|---|---|---|
| $n_j/n_i=(g_j/g_i)e^{-(E_j-E_i)/k_BT}$ | Boltzmann population ratio | The **same ionization stage** in thermal equilibrium |
| $U=\sum_i g_i e^{-\epsilon_i/k_BT}$ | Internal partition function | $\epsilon_i$ is measured from the ground state of the ionization stage |
| $f(p_x)\propto e^{-p_x^2/(2m_ek_BT)}$ | One-dimensional Maxwell momentum distribution | Classical, nonrelativistic, and nondegenerate |
| $p_{\rm rms}=\sqrt{3m_ek_BT}$ | Three-dimensional RMS thermal momentum | Distinct from the Gaussian-integral factor $\sqrt{2\pi m_ek_BT}$ |
| $\lambda_{\rm th}=h/\sqrt{2\pi m_ek_BT}$ | Thermal de Broglie wavelength | The factor $2\pi$ comes from a Gaussian integral |
| $Z_{\rm trans}=V/\lambda_{\rm th}^3$ | Single-particle translational partition function | Spin omitted here |
| $\frac{n_{j+1}}{n_j}=\frac{2U_{j+1}}{U_j}\frac{e^{-\chi_j/k_BT}}{n_e\lambda_{\rm th,e}^3}$ | Saha ratio of ionization stages | Thermal equilibrium and a classical ideal gas |
| $\gamma_{\rm th}=\ln[1/(n_e\lambda_{\rm th}^3)]$ | Logarithmic parameter for the nondegenerate gas | Written $\gamma$ in RL 9.4 |
| $k_BT_{\rm tr}\sim\chi_j/\gamma_{\rm th}$ | Transition temperature between adjacent ionization stages | $\gamma_{\rm th}\gg1$ and slowly varying partition functions |
| $\Delta T/T\sim\gamma_{\rm th}^{-1}$ | Relative temperature interval for an appreciable change in the population ratio | **Order-of-magnitude estimate**. The full $x(T)$ requires a self-consistent calculation |
| $x=n_p/n_{\rm H,tot}$, $\delta=n_p/n_{\rm H^0}=x/(1-x)$ | Two measures of ionization | Check which quantity is requested |
| $x^2/(1-x)=K(T)/n_{\rm H,tot}$ | Self-consistent Saha equation for pure hydrogen | $n_e=n_p$ and the ground-state approximation |
| $\Delta=(m_H/\rho)K(T)$ | Dimensionless control parameter in RL 9.5 | $\rho$ is the mass density |
| $\delta=[\Delta+\sqrt{\Delta^2+4\Delta}]/2$ | Explicit solution for RL 9.5 | Use the nonnegative root |

**Final concept check.** Gases at the same temperature but different densities can have the same relative Boltzmann populations **within one ionization stage**, while their Saha ionization fractions generally differ. This distinction is the central idea of the lesson.

---

## 12. Sources and references

- Rybicki, G. B. & Lightman, A. P., *Radiative Processes in Astrophysics*, §9.5 and textbook Problems 9.4–9.5 (course content and problem structure. The problem statements are independently paraphrased here).
- University of Toronto, [AST1440 — Radiation (2026)](https://www.astro.utoronto.ca/~mhvk/AST1440/), course material and post-lecture notes for November 16, 2026 (discussion of $\gamma$ and $\Delta T/T$).
- Y. Takahashi & E. Chiang, [Astro 201 — Radiative Processes, Solution Set 6](https://w.astro.berkeley.edu/~echiang/rad/ps6ans.pdf) (used to cross-check the approximation and its domain of validity in RL 9.4. The presentation and derivations here are independent).

**File format.** Equations use LaTeX in Markdown, and figures are SVGs included with this note.
