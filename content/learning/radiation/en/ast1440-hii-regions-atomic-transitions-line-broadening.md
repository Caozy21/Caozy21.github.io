---
title: "AST1440 H II Regions, Atomic Transitions, and Line Broadening: RL §§9.4, 10.3, and 10.5–10.6 with Worked Problems"
description: "Explains ionization, recombination, thermal balance, and diagnostics in H II regions, alongside atomic transition rates and line broadening, with worked solutions to RL Problems 10.3, 10.4, 10.5, and 10.7."
date: "2026-11-26"
tags: ["AST1440","H II regions","Atomic transitions","Line broadening","Exercises"]
order: 22
draft: false
translation: "AI-assisted English translation"
sourceHash: "c258ff6c9b95fb176e0e531bf95b2ee5051d8fd98f2ee89069e6c521944224ad"
---

# AST1440 H II Regions, Atomic Transitions, and Line Broadening: RL §§9.4, 10.3, and 10.5–10.6 with Worked Problems

> Course: University of Toronto, AST1440 — Radiation\
> Lecture: Thursday, November 26, 2026\
> Assigned reading: the rest of Rybicki & Lightman (RL) §9.4, §§10.5 and 10.6, and a review of §10.3.\
> Assigned problems: RL 10.3, 10.5, and 10.7, with 10.4 optional.\
> Compiled on November 26, 2026, based on the reading discussion, the updated lecture plan, and the supplied 398-page textbook scan.\
> The notes use the Gaussian cgs system adopted by RL unless otherwise indicated. The symbol $e$ denotes the positive elementary charge. For H II regions, temperature means electron temperature. For Doppler broadening, it means the kinetic temperature of the emitting or absorbing species.

## Lecture roadmap

The revised schedule starts with student discussion at noon. At 12:30 the instructor discusses Problems 10.5 and 10.7, emphasizing the physical picture and leaving Zeeman splitting and fine structure to the text and notes. The introduction to H II regions starts at 13:00 and mainly follows Osterbrock & Ferland. **The focus is on H II regions and line broadening, with the quantum details of atomic structure included for review.**

The sequence runs from atomic levels to transition strengths, ionization and recombination, the size and temperature of ionized regions, nebular emission lines, line widths, and astronomical diagnostics.

## Textbook cross-check

The printed page number is 16 less than the PDF page number. These notes were checked against the relevant sections, problems, and back-of-book solutions. The worked solutions are independent derivations. The H II material introduces standard ionized-nebula theory for this lecture. The instructor did not assign a specific chapter in Osterbrock & Ferland, and the coverage here is thematic. The figures are original schematics or numerical illustrations with specified parameters, prepared from the course discussion.

| Material | Printed RL pages | Items checked |
|---|---|---|
| Remainder of §9.4 | 256–259 | Eqs. 9.32–9.37, normal and anomalous Zeeman effects, nuclear spin, and the 21 cm line |
| §10.3 | 274–277 | Oscillator strengths and Eqs. 10.29–10.34 |
| §10.5 | 280–287 | Eqs. 10.42–10.45 and 10.52–10.55, absorption edges, and multiplets |
| §10.6 | 287–291 | Eqs. 10.66–10.79、Fig. 10.3 |
| Problems | 292 | Wording of 10.3, 10.4, 10.5, and 10.7 |
| Solutions | 363–369 | Derivations for the four problems. The discussion of Problem 10.5 explains a discrepancy in the final coefficient |

## Table of contents

1. [RL 9.4 — Zeeman, fine, and hyperfine structure](#1-rl-94--zeeman-fine-and-hyperfine-structure)
2. [RL 10.3 and 10.5 — Einstein coefficients, oscillator strengths, and transition rates](#2-rl-103-and-105--einstein-coefficients-oscillator-strengths-and-transition-rates)
3. [H II regions — Formation, recombination, size, and evolution](#3-h-ii-regions--formation-recombination-size-and-evolution)
4. [Heating and cooling](#4-heating-and-cooling)
5. [Emission lines and observational diagnostics](#5-emission-lines-and-observational-diagnostics)
6. [RL 10.6 — Line broadening](#6-rl-106--line-broadening)
7. [RL problems, problem summaries, and worked solutions](#7-rl-problems-problem-summaries-and-worked-solutions)
8. [Key concepts and formulas](#8-key-concepts-and-formulas)

---

## 1. RL 9.4 — Zeeman, fine, and hyperfine structure

Start with the total orbital angular momentum $\mathbf L$, the total spin $\mathbf S$, and $\mathbf J=\mathbf L+\mathbf S$. A magnetic moment specifies the strength and orientation of a particle's interaction with an external field. Its interaction energy is $U=-\boldsymbol\mu\cdot\mathbf B$. Because the electron has negative charge, its orbital moment points opposite to its angular momentum. In Gaussian cgs,

$$
\mu_B=\frac{e\hbar}{2m_ec},\quad \boldsymbol\mu_L=-\mu_B\frac{\mathbf L}{\hbar},\quad \boldsymbol\mu_S\simeq-2\mu_B\frac{\mathbf S}{\hbar}.
$$

The spin g factor is approximately 2 when QED corrections are neglected. The total magnetic moment is $\boldsymbol\mu=-\mu_B(\mathbf L+2\mathbf S)/\hbar$. For a field along z, the linear magnetic interaction Hamiltonian is

$$
H_B=\frac{\mu_B B}{\hbar}(L_z+2S_z).
$$

### Where does $\Delta E=g_J\mu_B BM_J$ come from, and what counts as weak compared with fine structure?

In first-order perturbation theory, internal spin–orbit coupling dominates and the field barely mixes different J levels. Take the expectation value of $H_B$ in $|LSJM_J\rangle$, choosing the z axis so that the magnetic term is diagonal within the degenerate M subspace. In the semiclassical picture, L and S precess around J and their transverse components average to zero. The quantum projection coefficients follow from scalar products.

$$
g_J=\frac{\langle(\mathbf L+2\mathbf S)\cdot\mathbf J\rangle}{\langle J^2\rangle}=1+\frac{\langle\mathbf S\cdot\mathbf J\rangle}{\langle J^2\rangle}.
$$

Squaring $\mathbf L=\mathbf J-\mathbf S$ gives $\mathbf S\cdot\mathbf J=(J^2+S^2-L^2)/2$. The squared angular momentum has eigenvalue $J(J+1)\hbar^2$, with analogous expressions for L and S, so

$$
g_J=1+\frac{J(J+1)+S(S+1)-L(L+1)}{2J(J+1)}.
$$

$$
\langle L_z+2S_z\rangle=g_J\langle J_z\rangle=g_JM_J\hbar,\qquad \Delta E=g_J\mu_B BM_J.
$$

The values $M_J=-J,\ldots,J$ give $2J+1$ states. For $J=0$, there is no first-order Zeeman splitting, and the Landé formula cannot be evaluated directly. The changed level energies shift the transition frequency through $h\nu=E_u-E_l$, allowing measurements of the magnetic field.

RL pp. 256–257 distinguishes the normal Zeeman effect, a simple three-component pattern, from the anomalous effect, where spin moments and differing Landé factors give more complex splitting. For a transition between two levels,

$$
\delta\nu=\frac{\mu_BB}{h}(g_uM_u-g_lM_l).
$$

The electric dipole selection rules permit $\Delta M=0,\pm1$ subject to the other rules. If both levels have $g=1$, adjacent frequency shifts are $\mu_BB/h$, giving a central component and two side components. Observed polarization depends on the viewing direction. In the anomalous case, the factors $g_u,g_l$ differ and more components can appear.

Fine structure comes from relativistic corrections such as spin–orbit coupling. For hydrogen 2p, the $J=1/2,3/2$ interval is $\Delta E_{\rm FS}=E_{2p_{3/2}}-E_{2p_{1/2}}$. The weak-field scale condition is $\mu_B B\ll\Delta E_{\rm FS}$ for angular factors of order unity. More precisely, compare the mixing matrix element with the level separation. In the Paschen–Back regime, $\mu_B B\gg\Delta E_{\rm FS}$ while the field leaves the orbital structure intact. L and S couple separately to the field, $M_L,M_S$ are approximately good quantum numbers, and $\Delta E\simeq\mu_BB(M_L+2M_S)$. In the intermediate regime, diagonalize the spin–orbit and magnetic terms together. This discussion omits the nuclear magnetic moment, hyperfine structure, and orbital changes in extremely strong fields. With hyperfine structure included, the field strength relative to that splitting also controls which quantum numbers are appropriate.

**Hyperfine structure** comes from coupling nuclear spin $\mathbf I$ to electronic angular momentum, giving $\mathbf F=\mathbf J+\mathbf I$ with $F=|J-I|,\ldots,J+I$. In the hydrogen 1s ground state, J=I=1/2. The F=1 triplet lies above the F=0 singlet and emits at 21 cm or 1420 MHz through a magnetic dipole transition. Neither the principal quantum number $n$ nor the orbital quantum number $l$ changes. The spontaneous timescale for a single atom is about $10^7$ years (RL p. 259). Large amounts of neutral hydrogen make the line observable. Isotope shifts due to nuclear mass and size are distinct from hyperfine splitting due to nuclear spin.

![Magnetic moment orientation, angular momentum projection, and weak-field splitting of the hydrogen 2p fine structure. Energy separations are schematic.](/learning/radiation/hii-regions/01_zeeman.svg)

*Figure 1. Magnetic moment orientation, angular momentum projection, and weak-field splitting of the hydrogen 2p fine structure. Energy separations are schematic.*

![Dominant LS coupling, the Paschen–Back limit, and ground-state hyperfine splitting in hydrogen. The vectors give a semiclassical picture.](/learning/radiation/hii-regions/02_hyperfine.svg)

*Figure 2. Dominant LS coupling, the Paschen–Back limit, and ground-state hyperfine splitting in hydrogen. The vectors give a semiclassical picture.*

## 2. RL 10.3 and 10.5 — Einstein coefficients, oscillator strengths, and transition rates

The absorption rate is $B_{lu}\bar J$, the spontaneous emission rate is $A_{ul}$, and the stimulated emission rate is $B_{ul}\bar J$. With B defined using mean intensity J, $\bar J=\int J_\nu\phi(\nu)d\nu$, $g_lB_{lu}=g_uB_{ul}$, and $A_{ul}=2h\nu_0^3B_{ul}/c^2$. The lifetime is $1/A$ for one decay channel or $1/\sum A$ for several. The statistical weight g counts degenerate substates. In the electric dipole approximation, the wavelength is much larger than the atom and $\mathbf d_{ul}=-e\langle u|\mathbf r|l\rangle$. For nondegenerate states, $A_{ul}=4\omega^3|\mathbf d_{ul}|^2/(3\hbar c^3)$. With degeneracy, average over initial states and sum over final states. The matrix element measures coupling by the radiation field. If it vanishes, E1 is forbidden but weaker mechanisms may still contribute.

![Absorption, spontaneous emission, and stimulated emission in a two-level atom.](/learning/radiation/hii-regions/03_einstein.svg)

*Figure 3. Absorption, spontaneous emission, and stimulated emission in a two-level atom.*

The dimensionless oscillator strength $f$ measures the integrated absorption cross section relative to that of a classical electron oscillator. A transition probability is a separate quantity.

$$
f_{lu}=\frac{2m_e(E_u-E_l)}{3\hbar^2g_l}\sum_{l,u}|\langle u|\mathbf r|l\rangle|^2.
$$

For Lyα, $f=0.4162$, $gf=0.8324$, and the ground state has g=2. The two fine-structure components have a 2:1 ratio in LS coupling. The gf value is convenient for combining substates.

### How do we obtain $\sigma_\nu=\pi e^2 f_{lu}\phi(\nu)/(m_ec)$?

The absorption cross section is an effective area that converts photon number flux to the absorption rate per atom. Define $S=\int\sigma_\nu d\nu$ and $\phi=\sigma_\nu/S$, so $\int\phi d\nu=1$ and $\sigma_\nu=S\phi$. The integrated cross section for a classical bound oscillator is $S_{\rm classical}=\pi e^2/(m_ec)$ (RL §3.6 and Eqs. 10.30–31). Defining $f=S/S_{\rm classical}$ gives the desired expression.

Alternatively, compare the Einstein rate $B_{lu}\int J_\nu\phi d\nu$ with the cross-section rate $\int 4\pi J_\nu\sigma_\nu/(h\nu)d\nu$. In the narrow-line limit, $\nu\simeq\nu_0$ gives $\sigma_\nu=h\nu_0 B_{lu}\phi/(4\pi)$. Substituting $B_{lu}=4\pi^2e^2f/(m_ec h\nu_0)$ gives the same result. This assumes a narrow line and conserved integrated strength under broadening, with no net stimulated-emission correction. The units of $\pi e^2/(m_ec)$, $\phi$, and $\sigma$ are cm² Hz, Hz⁻¹, and cm², respectively. A wider profile has a lower peak and the same integrated area.

**Bound–bound transitions.** Hydrogen has $E_n=-\mathrm{Ry}/n^2$, with Ry=13.6 eV and $h\nu=\mathrm{Ry}(n_l^{-2}-n_u^{-2})$. Examples are Lyα at 121.6 nm, Lyβ at 102.6 nm, Hα at 656.3 nm, and Hβ at 486.1 nm. **Bound–free photoionization.** With nuclear recoil neglected, $h\nu=\chi_n+m_ev^2/2$. The free states form a continuum, and the Lyman limit is at 91.2 nm. Near threshold the cross section scales approximately as $\nu^{-3}$ with a Gaunt-factor correction. RL Fig. 10.2 (p. 283) shows multiple absorption edges. The high-energy Born limit gives $\nu^{-7/2}$. The absorption coefficient is $n_n\sigma_\nu$, and net absorption also accounts for stimulated processes. Free–bound radiative recombination is the inverse process. The Milne relations connect the cross sections by detailed balance.

![Transitions involving bound and continuum states, the photoionization edge, and two frequency scalings. The high-energy asymptote cannot be extrapolated to the threshold.](/learning/radiation/hii-regions/04_transitions.svg)

*Figure 4. Transitions involving bound and continuum states, the photoionization edge, and two frequency scalings. The high-energy asymptote cannot be extrapolated to the threshold.*

## 3. H II regions — Formation, recombination, size, and evolution

H I is neutral hydrogen, H II is singly ionized hydrogen or protons, and H₂ is molecular hydrogen. He I, II, and III follow the same ionization notation. Hot O and early B stars supply ultraviolet photons, and the hydrogen ground-state ionization threshold is 13.6 eV. Approximate the star as a blackbody with $B_\nu=2h\nu^3/[c^2(e^{h\nu/kT_*}-1)]$. At the threshold, the exponent is about 27.2 for the 5800 K Sun and 3.95 for a 40,000 K O star, giving very different high-frequency tails. The actual ionizing photon production also depends on stellar radius and atmosphere.

![Peak-normalized blackbody spectra at different stellar temperatures and the effective collision volume swept out by one electron.](/learning/radiation/hii-regions/05_ionization.svg)

*Figure 5. Peak-normalized blackbody spectra at different stellar temperatures and the effective collision volume swept out by one electron.*

Photoionization is $H+h\nu\to p+e$, and radiative recombination is $p+e\to H+h\nu$. Define $n_H=n_{HI}+n_p$. Charge neutrality in pure hydrogen gives $n_e=n_p$, and nearly complete ionization gives $n_p\simeq n_H$. Over dt an electron sweeps an effective volume $\sigma vdt$, giving a single-electron recombination rate $n_p\sigma v$. Average over electron speeds and multiply by $n_e$.

$$
\alpha(T)=\langle\sigma_{rec}v\rangle,\qquad \dot n_{rec}=\alpha n_en_p.
$$

### Why does the recombination coefficient mainly depend on electron temperature for a Maxwell–Boltzmann distribution?

The classical, nonrelativistic three-dimensional Maxwell speed density is

$$
P(v;T_e)=4\pi\left(\frac{m_e}{2\pi k_BT_e}\right)^{3/2}v^2e^{-m_ev^2/(2k_BT_e)},\quad \alpha=\int_0^\infty\sigma_{rec}(v)vP(v;T_e)dv.
$$

The speed v is relative. If electrons and protons have comparable temperatures, the much heavier protons move slowly enough that we first neglect their velocities. For a given ion and recombination channel, the cross section is fixed. Integrating over v leaves a normalized speed distribution set by T, so at low density and without significant stimulated recombination, α mainly depends on T. The encounter density is already in $n_en_p$. The hydrogen radiative recombination cross section usually decreases with v, and its thermal average gives a decreasing α. The collision count alone does not predict this trend. For Case B near $10^4$ K, $\alpha_B\simeq2.6\times10^{-13}(T/10^4\,K)^{-0.7}$ cm³/s.

![Maxwell speed distributions at different electron temperatures and the approximate temperature dependence of the Case B coefficient.](/learning/radiation/hii-regions/06_recombination.svg)

*Figure 6. Maxwell speed distributions at different electron temperatures and the approximate temperature dependence of the Case B coefficient.*

### Case A / B

Recombination into level n emits a photon with $h\nu=\mathrm{Ry}/n^2+mv^2/2$. Capture directly to the ground state gives a photon of at least 13.6 eV. Capture to an excited state typically gives a photon below the threshold at Te=10⁴ K, where kT≈0.86 eV, followed by a cascade. In Case A, ionizing recombination photons escape an optically thin medium and $\alpha_A=\sum_{n\ge1}\alpha_n\simeq4.2\times10^{-13}$ cm³/s. In Case B, the medium is optically thick in the ionizing continuum. Ground-state recombination photons ionize another hydrogen atom nearby, leaving the net ionization count unchanged. Thus $\alpha_B=\alpha_A-\alpha_1=\sum_{n\ge2}\alpha_n\simeq2.6\times10^{-13}$ cm³/s. The on-the-spot approximation applies when the photon mean free path is much shorter than the region's size. Case B line calculations also typically assume that Lyman-series photons are trapped while Balmer photons can escape.

![Ionizing photons from recombination escape in Case A and are reabsorbed in Case B, with different consequences for the net ionization count.](/learning/radiation/hii-regions/07_case_ab.svg)

*Figure 7. Ionizing photons from recombination escape in Case A and are reabsorbed in Case B, with different consequences for the net ionization count.*

### Strömgren sphere

The star produces $Q_H=\int_{\nu_0}^{\infty}L_\nu/(h\nu)d\nu$ ionizing photons per second. Assume static uniform pure hydrogen, fixed temperature, a sharp ionization front, a nearly fully ionized interior, Case B, no dust, and no ionizing photon escape. With shell volume $dV=4\pi r^2dr$, the integrated net recombination rate balances the stellar ionizing photon rate.

$$
Q_H=\int_0^{R_S}4\pi r^2\alpha_Bn_en_pdr=\frac{4\pi}{3}R_S^3\alpha_Bn_en_p,
$$
$$
R_S=\left(\frac{3Q_H}{4\pi\alpha_Bn_H^2}\right)^{1/3}.
$$

For Q=10⁴⁹ s⁻¹, n=100 cm⁻³, and T=10⁴ K, the radius is about 3.15 pc. An eightfold increase in density reduces the radius to one quarter, and an eightfold increase in Q doubles it.

### Why does temperature affect the radius in the interactive model?

For fixed Q and n, $\alpha_B\propto T_e^{-0.7}$ gives $R_S\propto Q_H^{1/3}n_H^{-2/3}T_e^{0.7/3}$. At higher temperature, recombination is less efficient, so the same photon supply maintains a larger ionized volume. Doubling Q, n, or Te separately changes R by factors of 1.26, 0.63, or 1.18. The stellar surface temperature T* affects Q. The gas electron temperature Te affects α and is set by thermal balance.

![An ideal spherical ionized region and the dependence of its radius on gas density and electron temperature at fixed ionizing photon production rate.](/learning/radiation/hii-regions/08_stromgren.svg)

*Figure 8. An ideal spherical ionized region and the dependence of its radius on gas density and electron temperature at fixed ionizing photon production rate.*

### Why does $N_i(t)=4\pi R(t)^3n_H/3$ contain only nH?

The quantity $N_i$ counts ionized hydrogen, or protons. Its exact expression is $N_i=\int n_pdV=4\pi\int x(r,t)n_H(r,t)r^2dr$, where $x=n_p/n_H$. The simpler expression uses x≈1 inside the front, x≈0 outside, and uniform density. Each ionized hydrogen atom contributes one proton, so no additional factor of electron density enters the count. The left panel of Figure 9 compares a step with a schematic smooth front.

### Why does $dN_i/dt=Q_H-\alpha_Bn_eN_i$ multiply Ni by αB and ne?

$$
\dot N_{rec}=\alpha_Bn_en_pV=\alpha_Bn_eN_i.
$$

The effective recombination rate per proton is $\alpha_Bn_e$ in s⁻¹. Multiply by the total number of protons. Case B excludes ground-state captures that leave the net count unchanged. At fixed gas density with a growing ionized volume, $n_e=N_i/V\simeq n_H$ is constant, making the loss term linear. At fixed volume, recombination lowers the density, so $\dot N_{rec}=\alpha_BN_i^2/V$ is nonlinear.

$$
t_{rec}=1/(\alpha_Bn_e),\quad dN_i/dt+N_i/t_{rec}=Q_H.
$$

For an initially neutral gas with constant Q, n, and T, the solution is $N_i=Q_Ht_{rec}(1-e^{-t/t_{rec}})$,

$$
R(t)=R_S(1-e^{-t/t_{rec}})^{1/3}.
$$

At n=100 and T=10⁴ K, t_rec≈1220 yr, much less than an O star's Myr lifetime. This model omits finite light speed, gas dynamics, and pressure. In reality the region may expand later and the early front cannot travel faster than light. When the source turns off, fixed volume and temperature give $dx/dt=-\alpha_Bn_Hx^2$. Starting from x=1, $x=1/(1+t/t_{rec,0})$. Denser regions recombine faster and the decay follows a reciprocal law.

![A step function and a smooth ionization front. The static-density model shows growth with the source on and fixed-volume recombination after it turns off.](/learning/radiation/hii-regions/09_evolution.svg)

*Figure 9. A step function and a smooth ionization front. The static-density model shows growth with the source on and fixed-volume recombination after it turns off.*

## 4. Heating and cooling

Distinguish T*=40,000 K, Te≈10,000 K, and 13.6 eV/kB≈158,000 K. The gas is highly ionized even though kT≈0.86 eV because external ultraviolet radiation drives a non-LTE ionization state. The Saha equation requires thermodynamic equilibrium, so Te alone does not determine the ionization fraction here. A Maxwellian speed distribution indicates that particle kinetic energies have thermalized and does not establish LTE ionization populations. Under the on-the-spot approximation, local ionization balance is $n_{HI}\zeta_{ph}=\alpha_Bn_en_p$.

The photoelectron takes kinetic energy $h\nu-\chi_H$ above the binding energy. An 18 eV photon, for example, supplies 4.4 eV of heat after Coulomb collisions thermalize the electron. The mean radiation intensity is $J_\nu=(4\pi)^{-1}\int I_\nu d\Omega$, and $\sigma_\nu$ is the effective photoionization cross section. Set $\nu_0=\chi_H/h$.

$$
\zeta_{ph}=\int_{\nu_0}^\infty \frac{4\pi J_\nu}{h\nu}\sigma_\nu d\nu,
$$
$$
\mathcal H=n_{HI}\int_{\nu_0}^\infty \frac{4\pi J_\nu}{h\nu}\sigma_\nu(h\nu-\chi_H)d\nu.
$$

The heating rate, in erg cm⁻³ s⁻¹, is the ionization rate times the mean excess energy per ionization. Recombination cooling counts the kinetic energy lost by the electron. The binding energy released is not all thermal energy. In optically thin, nonrelativistic pure hydrogen, free–free cooling obeys $\mathcal C_{ff}\propto n_en_pT_e^{1/2}$ apart from the weak Gaunt-factor dependence. In collisional excitation, a free electron transfers kinetic energy to a bound electron in O²⁺. The ion then emits a photon that can escape, allowing the cycle to cool the gas repeatedly. The thermal rate coefficient behaves as $q_{lu}\propto\Upsilon(T)T^{-1/2}e^{-\Delta E/kT}$, where the effective collision strength Υ is a dimensionless quantity related to a thermal average of the cross section. The first excitation energy of H I is 10.2 eV, while a relevant [O III] excitation takes 2.51 eV, so its exponential suppression is much weaker. The total cooling also depends on ionic abundances and collision strengths. Metals are elements heavier than helium. At lower metallicity the cooling is usually weaker, and the equilibrium temperature is higher. In thermal balance, $\mathcal H=\mathcal C_{rec}+\mathcal C_{ff}+\mathcal C_{line}+\cdots$. The balance shows qualitative negative feedback, with temperatures typically ranging from several thousand to 20,000 K depending on conditions.

![Energy partition for an 18 eV photon and the qualitative balance of heating and cooling. The normalized panel on the right is schematic.](/learning/radiation/hii-regions/10_thermal.svg)

*Figure 10. Energy partition for an 18 eV photon and the qualitative balance of heating and cooling. The normalized panel on the right is schematic.*

![Cooling through collisional excitation followed by photon escape, and the threshold exponential factors for hydrogen and oxygen ions. The factors do not give the full rate ratio.](/learning/radiation/hii-regions/11_excitation.svg)

*Figure 11. Cooling through collisional excitation followed by photon escape, and the threshold exponential factors for hydrogen and oxygen ions. The factors do not give the full rate ratio.*

## 5. Emission lines and observational diagnostics

Recombination lines follow electron capture and a cascade. In collisionally excited lines, the incoming electron remains free after exciting the ion. Hα is the 3→2 transition at 656.3 nm and 1.89 eV. Define $\alpha_{H\alpha}^{eff}$ to count direct and cascade contributions, since only some recombinations produce Hα. The isotropic volume emissivity integrated over the line and over solid angle is

$$
\epsilon_{H\alpha}=h\nu\alpha_{H\alpha}^{eff}n_en_p,
$$

To express RL's emissivity j per steradian and per unit frequency, divide by 4π and multiply by the line profile. For Case B at low density and Te=10⁴ K, $\alpha_{H\alpha}^{eff}/\alpha_B\simeq0.45$, giving about 45 Hα photons per 100 net ionizations. For an ionization-bounded, dust-free region of uniform temperature,

$$
L_{H\alpha}=h\nu(\alpha_{H\alpha}^{eff}/\alpha_B)Q_H\simeq1.36\times10^{-12}Q_H\ \mathrm{erg\,s^{-1}}.
$$

At fixed Q and T, higher density gives a brighter unit volume and a smaller emitting volume, so the total luminosity is nearly unchanged. Hα traces recent star formation, with corrections for the initial mass function, dust, and photon escape. Comparing Hα/Hβ with the Case B prediction measures extinction. The intrinsic ratio is about 2.86 at low density and roughly 10⁴ K, with some dependence on temperature and density.

**Forbidden lines.** The E1 matrix element is zero, for example when a transition violates Δl=±1, but M1 or E2 radiation may still occur. A small A gives a metastable level a long lifetime. If A=10⁻² s⁻¹, the lifetime is 100 s. At low density with 10,000 s between collisions, radiative decay is likely. At high density with 1 s between collisions, collisional de-excitation dominates. Square brackets mark forbidden lines, as in [O III], where O III denotes O²⁺.

**Critical density.** Write $q_{ul}=\langle\sigma v\rangle$ in cm³/s. The spontaneous decay rate of the upper state is A, and the collisional de-excitation rate is $n_eq_{ul}$. Then $n_{crit}=A/q_{ul}$, using summed rates when multiple channels contribute. The timescales are $t_{rad}=1/A,t_{col}=1/(n_eq_{ul})$. For the two competing channels,

$$
P_{rad}=\frac{A}{A+n_eq_{ul}}=\frac1{1+n_e/n_{crit}}.
$$

At $n_e=n_{crit}$, the radiative probability is 50%. It remains nonzero above the critical density. For A=10⁻² and q=10⁻⁸, ncrit=10⁶ cm⁻³. At ne=10³ cm⁻³, the radiative probability is about 99.9%.

![Three processes in a two-level atom. Radiative and collisional de-excitation each have probability one half at the critical density.](/learning/radiation/hii-regions/12_critical_density.svg)

*Figure 12. Three processes in a two-level atom. Radiative and collisional de-excitation each have probability one half at the critical density.*

For an optically thin two-level atom, neglect photoexcitation and stimulated emission. Then $dn_u/dt=n_ln_eq_{lu}-n_u(A+n_eq_{ul})$. In statistical equilibrium $dn_u/dt=0$, so

$$
n_u/n_l=\frac{n_eq_{lu}}{A+n_eq_{ul}},\quad \epsilon_{ul}=n_uAh\nu=\frac{n_ln_eq_{lu}h\nu}{1+n_e/n_{crit}}.
$$

At low density A cancels because every collisional excitation eventually radiates in steady state. At high density, $n_u/n_l=q_{lu}/q_{ul}=(g_u/g_l)e^{-\Delta E/kT}$ by detailed balance for Maxwellian collisions. The level populations tend to Boltzmann equilibrium, while ionization need not follow Saha. At fixed elemental abundance, ion fraction, and temperature, the low-density emissivity scales as ε∝n² and the high-density emissivity as ε∝n. Collisional quenching suppresses the line relative to the quadratic extrapolation, while the absolute ε can still rise.

**Density diagnostic.** The [S II] 6716/6731 lines have similar excitation energies but different critical densities, around 10³ and several times 10³ cm⁻³. The ratio changes with density and saturates at the low- and high-density limits. Figure 13 is schematic. A precise inversion requires a multilevel calculation and appropriate atomic data.

**Temperature diagnostic.** For [O III] 4363/(4959+5007), the ¹S₀ and ¹D₂ levels lie about 5.35 eV and 2.51 eV above the ground term. Their difference is 2.84 eV. The 4363 line is ¹S₀→¹D₂. The 4959 and 5007 lines are ¹D₂→³P fine-structure components. At low density, neglecting the temperature dependence of Υ and cascade corrections gives $R\propto e^{-2.84\,eV/(k_BT_e)}$. The 4363 line grows stronger relative to the others at higher temperature. Metal lines compared with hydrogen recombination lines can constrain ionic abundances, with ionization corrections needed for the total elemental abundances. Free–free radio continuum traces ionized gas.

![The density-sensitive range and saturation limits of the [S II] ratio (schematic), and the approximate temperature sensitivity of the [O III] ratio relative to 10⁴ K.](/learning/radiation/hii-regions/13_diagnostics.svg)

*Figure 13. The density-sensitive range and saturation limits of the [S II] ratio (schematic), and the approximate temperature sensitivity of the [O III] ratio relative to 10⁴ K.*

![A hydrogen recombination cascade producing Hα and three [O III] forbidden lines used to diagnose temperature. The ground-term fine-structure levels are grouped together.](/learning/radiation/hii-regions/14_emission_lines.svg)

*Figure 14. A hydrogen recombination cascade producing Hα and three [O III] forbidden lines used to diagnose temperature. The ground-term fine-structure levels are grouped together.*

## 6. RL 10.6 — Line broadening

The fraction of the line in a frequency interval is $\phi(\nu)d\nu$. The integral over positive frequencies is 1, and the narrow-line approximation extends detuning over the real axis. In the absorption cross section derived above, $f$ sets the area and $\phi$ sets the shape.

### Doppler

In the nonrelativistic limit, $\nu-\nu_0=\nu_0v_z/c$, with positive velocity toward the observer. The one-dimensional Maxwell density is $P(v_z)=\sqrt{m_a/(2\pi kT)}e^{-m_av_z^2/(2kT)}$. This differs from the three-dimensional speed density used for recombination. Changing variables with $\phi_Dd\nu=Pdv_z$ and $dv_z=c\,d\nu/\nu_0$ gives

$$
\phi_D=\frac{1}{\sqrt\pi\Delta\nu_D}e^{-[(\nu-\nu_0)/\Delta\nu_D]^2},\quad \Delta\nu_D=\frac{\nu_0}{c}\sqrt{2kT/m_a}.
$$

The half-width at half maximum is $w_D=\sqrt{\ln2}\Delta\nu_D$, and FWHM=2w_D. The velocity width $\Delta v_D=\sqrt{2kT/m_a}$ uses the full atomic mass. At 10⁴ K it is about 12.8 km/s for H, 3.2 km/s for O, and 2.27 km/s for S. Microturbulence operates on scales smaller than the photon mean free path. With independent Gaussian velocities, RL Eq. 10.72 gives $\Delta\nu_D=(\nu_0/c)\sqrt{2kT/m_a+\xi^2}$, with ξ the width parameter used by RL. If the one-dimensional turbulent standard deviation is used instead, the term is $2\sigma_{turb}^2$. Mass dependence can distinguish thermal motion from a shared nonthermal velocity field if the ions sample comparable temperatures and large-scale distributions.

![Broad and narrow Gaussian lines of equal integrated area, and peak-normalized thermal Doppler profiles for hydrogen, oxygen, and sulfur at 10⁴ K.](/learning/radiation/hii-regions/15_line_strength_doppler.svg)

*Figure 15. Broad and narrow Gaussian lines of equal integrated area, and peak-normalized thermal Doppler profiles for hydrogen, oxygen, and sulfur at 10⁴ K.*

### Natural

A finite excited-state lifetime limits coherence and broadens the spectrum. The estimates $\Delta\omega\Delta t\sim1$ and $\Delta E\Delta t\sim\hbar$ give orders of magnitude rather than exact standard deviations. Let $\gamma_u=\sum_lA_{ul}$, so $dN_u/dt=-\gamma_uN_u$, the survival probability is $e^{-\gamma_ut}$, and the lifetime is $1/\gamma_u$. Probability is the squared magnitude of the amplitude, so the amplitude decays as $e^{-\gamma_ut/2}$. For a stable lower level, model the field as $E(t)=E_0e^{-\gamma t/2}e^{-i\omega_0t}$ for t≥0 and take its Fourier transform.

$$
\widetilde E\propto\int_0^\infty e^{-[\gamma/2-i(\omega-\omega_0)]t}dt=\frac1{\gamma/2-i(\omega-\omega_0)}.
$$

Square the magnitude and normalize the profile in ν=ω/(2π).

$$
\phi_L=\frac{\gamma/(4\pi^2)}{(\nu-\nu_0)^2+(\gamma/4\pi)^2},\quad w_L=\gamma/(4\pi),\quad \mathrm{FWHM}=\gamma/(2\pi).
$$

If both states have finite lifetimes then $\gamma=\gamma_u+\gamma_l$ in the independent-decay model (RL Eq. 10.74). Shorter coherence means a wider spectrum.

### Collisional

Collisions can scramble phase without de-exciting the atom. This differs from the collisional de-excitation discussed for H II regions. Assume Poisson collisions at rate νcol, each completely randomizing the phase. The probability of no collisions is $P_0=e^{-\nu_{col}t}$. The phase average is $\langle e^{i\theta}\rangle=\int_0^{2\pi}e^{i\theta}d\theta/(2\pi)=0$, so histories with a collision make no contribution to mean coherence even though their fields remain nonzero. This gives $C(t)\propto e^{-(\gamma/2+\nu_{col})|t|}e^{-i\omega_0t}$ and $\Gamma=\gamma+2\nu_{col}$ for the Lorentz formula. The coherence time is $2/\Gamma$. In this impact model with random phases, pressure broadening increases with collision rate. Other mechanisms need not produce a Lorentz profile.

![Finite-lifetime damping, random phase interruptions, the definition of the half-maximum width, and the effect of collision rate on area-normalized profiles.](/learning/radiation/hii-regions/16_coherence.svg)

*Figure 16. Finite-lifetime damping, random phase interruptions, the definition of the half-maximum width, and the effect of collision rate on area-normalized profiles.*

### Voigt profiles and the origins of Gaussian and Lorentz line shapes

| Profile | Mechanism | Mathematical origin | Far from line center |
|---|---|---|---|
| Gaussian | Thermal Doppler broadening, possibly with Gaussian microturbulence | One-dimensional Maxwell velocity distribution | Exponential decay |
| Lorentz | Natural broadening and independent phase-randomizing collisions | Fourier spectrum of exponentially decaying coherence | Inverse square |
| Voigt | Both mechanisms operate | Convolution of Gaussian and Lorentz profiles | Lorentz wings for weak damping |

A Gaussian profile arises from Maxwellian Doppler shifts as atoms move at different velocities. A Lorentz profile arises from the finite coherence time of each atom due to natural or collisional broadening. For profiles of the same peak and HWHM, Gaussian wings fall exponentially and Lorentz wings fall as $(\nu-\nu_0)^{-2}$. When both effects operate, convolve the profiles by weighting the shifted Lorentz line at each line-of-sight velocity by the velocity probability.

$$
\phi_V(\nu)=\int P(v_z)\phi_L(\nu-\nu_0v_z/c)dv_z,
$$
$$
a=\frac{\Gamma}{4\pi\Delta\nu_D},\quad u=\frac{\nu-\nu_0}{\Delta\nu_D},\quad H(a,u)=\frac a\pi\int_{-\infty}^{\infty}\frac{e^{-y^2}}{a^2+(u-y)^2}dy,
$$
$$
\phi_V=\frac{H(a,u)}{\sqrt\pi\Delta\nu_D}.
$$

For $a\ll1$, the core is Gaussian and the wings are Lorentzian.

![Peak-normalized Gaussian, Lorentz, and Voigt profiles for damping parameter a=0.1. The logarithmic plot shows the far wings.](/learning/radiation/hii-regions/17_voigt.svg)

*Figure 17. Peak-normalized Gaussian, Lorentz, and Voigt profiles for damping parameter a=0.1. The logarithmic plot shows the far wings.*

## 7. RL problems, problem summaries, and worked solutions

The English problem statements were checked against RL printed p. 292. The worked solutions were derived independently and compared with the back-of-book solutions on pp. 363–369. The instructor's order of priority is 10.5, 10.7, 10.3, then the optional 10.4.

### Problem 10.5 — Natural vs. Doppler broadening

**Original:** Line radiation is emitted from an optically thin, thermal source. Assuming that the only broadening mechanisms are Doppler and natural broadening, show that the observed half-width of the line is independent of the temperature $T$ for $T\ll T_c$ and increases as the square root of $T$ for $T\gg T_c$, where $T_c$ is some critical temperature. For the Lyman-$\alpha$ line of hydrogen estimate $T_c$ in terms of fundamental constants, and give its numerical value.

**What the problem asks.** An optically thin thermal source has only thermal Doppler and natural broadening. Show that the half-width is independent of T at low temperature and proportional to $\sqrt T$ at high temperature. Estimate the Lyα crossover temperature using fundamental constants. The comparison uses the two half-widths at half maximum. It does not require evaluating the full Voigt integral. Tc indicates a gradual crossover.

![The two half-widths at half maximum and the numerical Voigt half-width for hydrogen Lyα. The intersection defines the crossover temperature using the HWHM convention.](/learning/radiation/hii-regions/18_crossover.svg)

*Figure 18. The two half-widths at half maximum and the numerical Voigt half-width for hydrogen Lyα. The intersection defines the crossover temperature using the HWHM convention.*

**English solution.** For the Lorentz profile in Eq. (10.73), the half-width at half maximum is $w_L=\gamma/(4\pi)$, which is independent of temperature. For the Gaussian Doppler profile in Eqs. (10.68–69), the half-width at half maximum is

$$
w_D=\sqrt{\ln2}\Delta\nu_D=\frac{\nu_0}{c}\sqrt{\frac{2k_BT\ln2}{m_H}}.
$$

The observed line is a convolution of these two profiles, since the source is optically thin. When $w_D\ll w_L$, the Gaussian approaches a delta function relative to the Lorentz width, and the Voigt profile approaches the Lorentz profile. Thus $w\simeq w_L\propto T^0$. Conversely, when $w_D\gg w_L$, the Lorentz profile approaches a delta function relative to the Gaussian width near line center, and $w\simeq w_D\propto T^{1/2}$. Define the crossover by equality of the two half-widths:

$$
\frac{\gamma}{4\pi}=\frac{\nu_0}{c}\sqrt{\frac{2k_BT_c\ln2}{m_H}},\qquad T_c=\frac{m_Hc^2}{2k_B\ln2}\left(\frac{\gamma}{4\pi\nu_0}\right)^2.
$$

For hydrogen Lyman-α, the lower 1s state is stable and the upper 2p state decays predominantly by the allowed transition, so $\gamma=A_{21}$. From RL Eq. (10.34), in Gaussian cgs units,

$$
A_{21}=\frac{8\pi^2e^2\nu_0^2}{m_ec^3}\frac{g_1}{g_2}f_{12},\qquad g_1=2,\quad g_2=6,\quad f_{12}=\frac{2^{13}}{3^9}.
$$

Introduce the fine-structure constant $\alpha_{fs}=e^2/(\hbar c)$. Neglecting reduced-mass corrections, the hydrogen energy separation is $h\nu_0=3m_ec^2\alpha_{fs}^2/8$. Therefore,

$$
\frac{A_{21}}{4\pi\nu_0}=\alpha_{fs}\frac{h\nu_0}{m_ec^2}\frac{g_1}{g_2}f_{12}=\frac{2^{10}}{3^9}\alpha_{fs}^3,
$$
$$
\boxed{T_c=\frac{2^{19}}{3^{18}\ln2}\frac{m_Hc^2}{k_B}\alpha_{fs}^6\simeq3.2\times10^{-3}\,\mathrm K.}
$$

Equivalently use $A_{21}\simeq6.27\times10^8\,\mathrm{s^{-1}}$ and $\nu_0\simeq2.47\times10^{15}\,\mathrm{Hz}$. If the Doppler e-folding width $\Delta\nu_D$ is equated to the Lorentz HWHM instead of using the two HWHMs, the result is $T_c\simeq2.2\times10^{-3}$ K; both estimates have the same physical interpretation. At 10⁴ K, $w_L\simeq49.9$ MHz and $w_D\simeq88$ GHz. Doppler broadening dominates the core but Lorentz wings remain important. The exercise treats an isolated idealized Lyα component and ignores fine-structure splitting and optical-depth effects.

**Comparison with the textbook solution.** RL Solutions p. 367 explicitly sets $\Delta\nu_D(T_c)=\gamma/(4\pi)$, so it compares a Doppler width parameter with a natural HWHM rather than equating the two HWHMs. From its Eq. (1),

$$
k_BT_c=\frac18\left(\frac{\gamma}{\omega_0}\right)^2m_Hc^2.
$$

Combining $g_1f_{12}=2^{14}/3^9$, $g_2=6$, $\hbar\omega_0=3m_ec^2\alpha_{\rm fs}^2/8$, and $\gamma=2e^2\omega_0^2(g_1f_{12}/g_2)/(m_ec^3)$ gives

$$
\frac{\gamma}{\omega_0}=\frac{2^{11}}{3^9}\alpha_{\rm fs}^3,\qquad k_BT_c^{\rm RL\ convention}=\frac{2^{19}}{3^{18}}m_Hc^2\alpha_{\rm fs}^6.
$$

Direct substitution gives about $2.22\times10^{-3}$ K, while equating the HWHMs gives about $3.20\times10^{-3}$ K. The book's final expression has coefficient $2^{21}/3^{18}$ and gives $8.5\times10^{-3}$ K. That coefficient is four times the value obtained independently from the book's Eq. (1), suggesting an algebraic or printing error beyond the difference in width conventions. Cross-checking the equations against the actual $A_{21},\nu_0$ supports the independent result. If using the textbook value in class, identify it as such and state the discrepancy. The physical conclusion is unchanged.

### Problem 10.7 — Collisional broadening

**Original:** Derive the profile function, Eq. (10.75), when phase-destroying collisions occur with frequency $\nu_{col}$.

**What the problem asks.** Random collisions at mean rate νcol completely destroy phase memory. Derive the Lorentz profile of RL Eq. 10.75 and Γ=γ+2νcol. Probability decay and coherence decay are distinct, and a phase-randomizing collision need not de-excite the atom.

**English solution.** Assume independent phase-destroying collisions at constant rate $\nu_{col}$ (a homogeneous Poisson process). In an infinitesimal interval $dt$ the probability of no collision is $1-\nu_{col}dt+o(dt)$. Let $P_0(t)$ be the probability of no collision over time $t\ge0$. Then

$$
P_0(t+dt)=P_0(t)(1-\nu_{col}dt)+o(dt),
$$
$$
\frac{dP_0}{dt}=-\nu_{col}P_0,\quad P_0(0)=1,\quad P_0(t)=e^{-\nu_{col}t}.
$$

Each collision randomizes the phase independently and uniformly. Hence $\langle e^{i\theta}\rangle=(2\pi)^{-1}\int_0^{2\pi}e^{i\theta}d\theta=0$. Histories with at least one collision contribute zero to the ensemble-averaged phase correlation. This does not imply the field itself vanishes after a collision.

The normalized stationary electric-field autocorrelation is $C(t)=\langle E^*(0)E(t)\rangle/\langle|E(0)|^2\rangle$. Natural damping alone produces $e^{-\gamma|t|/2}e^{-i\omega_0t}$; for independent collision-induced dephasing, multiply by the no-collision probability:

$$
C(t)=e^{-\gamma|t|/2}e^{-\nu_{col}|t|}e^{-i\omega_0t}=e^{-\Gamma|t|/2}e^{-i\omega_0t},\qquad \boxed{\Gamma=\gamma+2\nu_{col}}.
$$

The Wiener–Khinchin theorem relates the power spectrum of a stationary process to the Fourier transform of the autocorrelation. Using ordinary frequency ν,

$$
\begin{aligned}\phi(\nu)&=\int_{-\infty}^{\infty}C(t)e^{2\pi i\nu t}dt\\&=2\operatorname{Re}\int_0^\infty e^{-[\Gamma/2-2\pi i(\nu-\nu_0)]t}dt\\&=2\operatorname{Re}\frac1{\Gamma/2-2\pi i(\nu-\nu_0)}\\&=\frac{\Gamma}{(\Gamma/2)^2+4\pi^2(\nu-\nu_0)^2}\\&=\boxed{\frac{\Gamma/(4\pi^2)}{(\nu-\nu_0)^2+(\Gamma/4\pi)^2}}.\end{aligned}
$$

This is Eq. (10.75a); the above definition of Γ is Eq. (10.75b). The profile is normalized over all detunings by $\int_{-\infty}^{\infty}(x^2+a^2)^{-1}dx=\pi/a$. The HWHM is $\Gamma/(4\pi)$ and FWHM is $\Gamma/(2\pi)$. When $\nu_{col}=0$, the natural profile is recovered. The factor two arises because γ is a population decay parameter, whereas $\gamma/2$ and $\nu_{col}$ are coherence decay rates. The result assumes independent Poisson collisions and complete phase randomization; a collision frequency alone would not specify the profile without these statistical assumptions.

**Alternative derivation following the textbook solution (pp. 368–369).** For one finite radiation pulse write $E(t)=E_0e^{-\gamma t/2}e^{-i\omega_0t+i\theta(t)}$ for $t\ge0$. Taking the ensemble average of its squared Fourier amplitude yields

$$
\langle|\widetilde E(\omega)|^2\rangle=|E_0|^2\int_0^\infty\!dt_1\int_0^\infty\!dt_2\,e^{-\gamma(t_1+t_2)/2}e^{i(\omega-\omega_0)(t_1-t_2)}e^{-\nu_{\rm col}|t_1-t_2|}.
$$

Split the domain into $t_1\ge t_2$ and its complex conjugate. For the first half set $s=t_2\ge0$ and $\tau=t_1-t_2\ge0$ (Jacobian 1). Thus

$$
\begin{aligned}\langle|\widetilde E(\omega)|^2\rangle&=2|E_0|^2\operatorname{Re}\int_0^\infty e^{-\gamma s}ds\int_0^\infty e^{-[\gamma/2+\nu_{\rm col}-i(\omega-\omega_0)]\tau}d\tau\\&=\frac{2|E_0|^2}{\gamma}\frac{\gamma/2+\nu_{\rm col}}{(\gamma/2+\nu_{\rm col})^2+(\omega-\omega_0)^2}.\end{aligned}
$$

Normalizing the spectrum in ordinary frequency gives exactly Eq. (10.75). Unlike the stationary-correlation argument above, this calculation explicitly treats a single finite pulse and averages its power spectrum; it is the same method as the book, with the remaining double integral evaluated.

### Problem 10.3 — Lyman-α oscillator strength

**Original:** Derive Eq. (10.45) for the Lyman-$\alpha$ oscillator strength.

**What the problem asks.** Derive $gf=2^{14}/3^9=0.8324$ (p. 280) by evaluating the electric dipole matrix element for 1s→2p. Follow the chain from wave functions through matrix elements to f, then to the A and B coefficients and the cross section.

![The shapes of 1s and 2p wave functions, with color indicating sign. The Born approximation describes the high-energy outgoing electron as a plane wave.](/learning/radiation/hii-regions/19_matrix_elements.svg)

*Figure 19. The shapes of 1s and 2p wave functions, with color indicating sign. The Born approximation describes the high-energy outgoing electron as a plane wave.*

**English solution.** Use normalized conventional radial wave functions (defined by $\psi=R_{nl}Y_{lm}$ and $\int|R_{nl}|^2r^2dr=1$), neglecting fine structure and reduced-mass corrections:

$$
R_{10}=2a_0^{-3/2}e^{-r/a_0},\qquad R_{21}=\frac{1}{2\sqrt6a_0^{3/2}}\frac{r}{a_0}e^{-r/(2a_0)}.
$$

Here $a_0=\hbar^2/(m_ee^2)$ in Gaussian units. RL uses a reduced radial function (Eqs. 9.14–9.15a, p. 241), $R_{nl}^{\rm RL}=rR_{nl}$, normalized with $dr$ rather than $r^2dr$. Consequently RL Eq. (10.44), $\int R_{21}^{\rm RL}R_{10}^{\rm RL}r\,dr$, is identical to the integral below (up to arbitrary state phases). The radial dipole integral is

$$
\begin{aligned}D&=\int_0^\infty R_{21}R_{10}r^3dr\\&=\frac1{\sqrt6a_0^4}\int_0^\infty r^4e^{-3r/(2a_0)}dr\\&=\frac{4!}{\sqrt6a_0^4}\left(\frac{2a_0}{3}\right)^5=\frac{256a_0}{81\sqrt6}.\end{aligned}
$$

We used $\int_0^\infty r^ne^{-br}dr=n!/b^{n+1}$. The factor $r^3$ arises from the dipole operator r and the volume element $r^2drd\Omega$. The z matrix element is

$$
\begin{aligned}\langle210|z|100\rangle&=D\int Y_{10}^*\cos\theta\,Y_{00}d\Omega\\&=\frac{D\sqrt3}{4\pi}\int_0^{2\pi}d\varphi\int_0^\pi\cos^2\theta\sin\theta d\theta\\&=D/\sqrt3,\end{aligned}
$$

using $Y_{00}=1/\sqrt{4\pi}$ and $Y_{10}=\sqrt{3/(4\pi)}\cos\theta$. By rotational symmetry, the squared matrix elements summed over x,y,z and all three final orbital magnetic substates give $D^2$; the spin is unchanged by the electric dipole operator, so the sum over the two initial spin states cancels the lower-state statistical weight $g_1=2$ in the oscillator-strength average. With $\Delta E=3\hbar^2/(8m_ea_0^2)$,

$$
f_{12}=\frac{2m_e\Delta E}{3\hbar^2}D^2=\frac{1}{4a_0^2}\left(\frac{256a_0}{81\sqrt6}\right)^2=\frac{2^{13}}{3^9}\simeq0.4162.
$$

Thus $\boxed{g_1f_{12}=2^{14}/3^9\simeq0.8324}$, reproducing Eq. (10.45).

### Problem 10.4 (optional) — Photoionization cross section

**Original:** Derive Eq. (10.53) for the bound-free cross section, using the nonrelativistic Born approximation.

**What the problem asks.** Use the nonrelativistic Born approximation to derive the high-frequency photoionization cross section. The initial state is the hydrogenic ground state. Approximate the energetic outgoing electron by a plane wave because its Coulomb distortion is small. In the regime $Z^2\mathrm{Ry}\ll\hbar\omega\ll m_ec^2$, the electron momentum is much larger than the photon momentum. The right panel of Figure 19 illustrates this approximation.

**English solution.** Starting from RL Eq. (10.52), in which αfs denotes the fine-structure constant,

$$
\frac{d\sigma_{bf}}{d\Omega}=\frac{\alpha_{fs}vV}{2\pi\omega}\left|\langle f|e^{i\mathbf k\cdot\mathbf r}\boldsymbol\epsilon\cdot\nabla|i\rangle\right|^2.
$$

Here V is a plane-wave normalization volume, k is the photon wave vector, ε the polarization unit vector, v the outgoing electron speed, and Ω its solid angle. Let $\beta=Z/a_0$ and $\mathbf q=\mathbf p/\hbar$. The hydrogenic ground-state wave function and Born final state are

$$
\psi_i=\sqrt{\beta^3/\pi}e^{-\beta r},\qquad \psi_f=V^{-1/2}e^{i\mathbf q\cdot\mathbf r}.
$$

In the nonrelativistic high-energy limit $q\gg\beta$ and $k\ll q$. Neglect k relative to q in the matrix element at leading order. By integration by parts, the surface term vanishes because the bound wave function decays at infinity:

$$
M\simeq\langle f|\boldsymbol\epsilon\cdot\nabla|i\rangle=\frac{i\boldsymbol\epsilon\cdot\mathbf q}{\sqrt V}\int e^{-i\mathbf q\cdot\mathbf r}\psi_i d^3r.
$$

Align the polar axis with q to perform the spherical Fourier integral:

$$
\int e^{-i\mathbf q\cdot\mathbf r}e^{-\beta r}d^3r=\frac{4\pi}{q}\int_0^\infty re^{-\beta r}\sin(qr)dr=\frac{8\pi\beta}{(q^2+\beta^2)^2}.
$$

The last integral follows by differentiating $\int_0^\infty e^{-\beta r}\sin(qr)dr=q/(\beta^2+q^2)$ with respect to β. For linear polarization, θ is the angle between q and ε, so

$$
|M|^2=\frac{64\pi\beta^5}{V}\frac{q^2\cos^2\theta}{(q^2+\beta^2)^4}.
$$

Substituting into Eq. (10.52) and integrating over all electron directions, with $\int\cos^2\theta d\Omega=4\pi/3$, yields

$$
\frac{d\sigma_{bf}}{d\Omega}=\frac{32\alpha_{fs}v\beta^5}{\omega}\frac{q^2\cos^2\theta}{(q^2+\beta^2)^4},
$$
$$
\sigma_{bf}=\frac{128\pi\alpha_{fs}v\beta^5}{3\omega}\frac{q^2}{(q^2+\beta^2)^4}\simeq\frac{128\pi\alpha_{fs}v\beta^5}{3\omega q^6}.
$$

At photon energies much greater than the binding energy, $q^2\simeq2m_e\omega/\hbar$ and $v=\hbar q/m_e$. Using $\hbar/m_e=\alpha_{fs}ca_0$ and $\beta=Z/a_0$ gives

$$
\begin{aligned}\sigma_{bf}&\simeq\frac{128\pi\alpha_{fs}}{3}\frac{\hbar}{m_e}\frac{(Z/a_0)^5}{\omega}\left(\frac{\hbar}{2m_e\omega}\right)^{5/2}\\&=\boxed{\frac{(2\alpha_{fs})^{9/2}\pi Z^5c^{7/2}}{3a_0^{3/2}\omega^{7/2}}},\end{aligned}
$$

which is RL Eq. (10.53). Thus $\sigma_{bf}\propto Z^5\omega^{-7/2}$ in the stated high-energy nonrelativistic regime, distinct from the approximately $\nu^{-3}$ near-threshold behavior. The normalization volume cancels, and the dimensions of the final expression are area.

## 8. Key concepts and formulas

- Weak-field splitting $\Delta E=g_J\mu_BBM_J$, the strong-field Paschen–Back regime and its conditions, and the 21 cm hyperfine transition.
- $\int\sigma d\nu=\pi e^2f/(m_ec)$；$\sigma_\nu=\pi e^2f\phi/(m_ec)$；$g_l B_{lu}=g_uB_{ul}$；$A_{ul}=8\pi^2e^2\nu_0^2(g_l/g_u)f/(m_ec^3)$。
- $\alpha=\langle\sigma v\rangle$；$\dot n_{rec}=\alpha_Bn_en_p$；Case A/B；$R_S=[3Q_H/(4\pi\alpha_B n_H^2)]^{1/3}$；$t_{rec}=1/(\alpha_Bn_e)$；$R(t)=R_S(1-e^{-t/t_{rec}})^{1/3}$。
- H II thermal balance, photoelectron heating by $h\nu-\chi_H$, cooling by collisional excitation of metals, and why non-LTE ionization differs from Saha equilibrium. Remember $L_{H\alpha}=h\nu\alpha_{H\alpha}^{eff}Q_H/\alpha_B$ and $n_{crit}=A/q$. In forbidden lines, A cancels at low density and levels approach Boltzmann populations at high density. [S II] diagnoses density and [O III] diagnoses temperature.
- Gaussian Doppler broadening has $\Delta\nu_D=(\nu_0/c)\sqrt{2k_BT/m_a}$. Natural and collisional Lorentz broadening have $w_L=\Gamma/(4\pi)$ and $\Gamma=\gamma+2\nu_{col}$. The Voigt convolution has a Gaussian core and Lorentz wings for weak damping. The coherence time is $\tau_{coh}=2/\Gamma$.
- For Lyα, $f=0.4162,gf=0.8324,T_c\simeq3.2$ mK in the HWHM convention. The high-frequency Born limit gives $\sigma\propto\nu^{-7/2}$.

### 8.1 Physical intuition checks from the lecture

| Question | Answer and reasoning |
|---|---|
| For the same O star, is the ionized region larger in gas at $n_H=10$ or $100\,\mathrm{cm^{-3}}$? | At lower density. Since $R_S\propto n_H^{-2/3}$, the radius is larger by a factor of $10^{2/3}=4.64$. |
| What happens after the central star stops supplying ionizing photons? | The ionized hydrogen gradually recombines. Denser regions have shorter initial recombination times. At fixed volume, the fraction declines as $1/(1+t/t_{\rm rec,0})$. |
| For the same star and density, is a metal-poor or metal-rich nebula hotter? | Usually the metal-poor nebula, because collisional excitation of metals provides less cooling. |
| If $A=10^{-2}\,\mathrm{s^{-1}}$, $q=10^{-8}\,\mathrm{cm^3s^{-1}}$, and $n_e=10^3\,\mathrm{cm^{-3}}$, which de-excitation channel dominates? | Since $n_{\rm crit}=10^6\,\mathrm{cm^{-3}}$, spontaneous emission has a probability of about 99.9%. |
| Can nearly equal hydrogen and iron line widths in velocity units be explained by thermal motion at a common temperature? | Thermal motion alone is unlikely because the width scales as $m^{-1/2}$. Consider shared macroscopic motions, turbulence, and instrumental broadening. Check that the ions sample the same region. |
| What shape results if atoms are stationary and collision-free but the excited state has a finite lifetime? | A Lorentz profile with finite width. |

## References and scope

- Rybicki, G. B. & Lightman, A. P., *Radiative Processes in Astrophysics*, §§9.4, 10.3, 10.5, 10.6. Problems on p. 292 and solutions on pp. 363–369. The printed page number is 16 less than the scan's PDF page number.
- Osterbrock, D. E. & Ferland, G. J., *Astrophysics of Gaseous Nebulae and Active Galactic Nuclei*, the instructor's recommended background for H II region theory. The extended discussion here draws on the reading discussion and standard ionized-nebula models.
- Numerical approximations and model assumptions are stated in the text. Most profiles apply to a single isolated narrow transition without macroscopic optically thick transfer. Peak normalization and integral normalization are distinct.
