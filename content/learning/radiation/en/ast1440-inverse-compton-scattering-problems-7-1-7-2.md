---
title: "AST1440 Inverse Compton Scattering: RL §§7.1–7.4 and Problems 7.1–7.2"
description: "A derivation of inverse Compton energy gains, cooling power, random walks, thermal Comptonization, and the Compton y parameter, followed by modeling strategies for Problems 7.1 and 7.2."
date: "2026-11-12"
tags: ["AST1440","Inverse Compton scattering","Comptonization","Radiative cooling","Random walk","Exercises"]
order: 18
draft: false
translation: "AI-assisted English translation"
sourceHash: "1ee15037460236730c6b358b1ce239218b5cd2c9c589b0eee417bcefb14b4933"
---

# AST1440 Inverse Compton Scattering: RL §§7.1–7.4 and Problems 7.1–7.2

> Course: AST1440 — Radiation.  
> Textbook: Rybicki & Lightman, *Radiative Processes in Astrophysics* (hereafter RL), §§7.1, 7.2, and 7.4, with emphasis on §§7.1 and 7.4 and a brief reading of §7.3; Problems 7.1 and 7.2.  
> Compiled on November 12, 2026.  
> This note collects the physical interpretations, derivations, and domains of validity that were examined repeatedly in the associated discussion.

## Table of Contents

1. [Overview and central results](#1-overview-and-central-results)
2. [Ordinary Compton scattering and electron recoil](#2-ordinary-compton-scattering-and-electron-recoil)
3. [Inverse Compton scattering in the Thomson limit](#3-inverse-compton-scattering-in-the-thomson-limit)
4. [Maximum and angle-averaged energy gains: $4\gamma^2$ and $\frac43\gamma^2$](#4-maximum-and-angle-averaged-energy-gains-4gamma2-and-frac43gamma2)
5. [Derivation of the inverse Compton cooling power](#5-derivation-of-the-inverse-compton-cooling-power)
6. [Random walks and the number of scatterings: $\tau$ and $\tau^2$](#6-random-walks-and-the-number-of-scatterings-tau-and-tau2)
7. [Thermal Comptonization, the $y$ parameter, and $e^y$](#7-thermal-comptonization-the-y-parameter-and-ey)
8. [Review of thermal bremsstrahlung](#8-review-of-thermal-bremsstrahlung)
9. [Hydrostatic equilibrium](#9-hydrostatic-equilibrium)
10. [Approaches to Problems 7.1 and 7.2](#10-approaches-to-problems-71-and-72)
11. [Common points of confusion](#11-common-points-of-confusion)
12. [Review questions](#12-review-questions)

---

## 1. Overview and central results

**The central progression is single-scattering Compton recoil → Lorentz boosts and inverse Compton scattering → angular averages and power → random walks through repeated scatterings → the Compton $y$ parameter and saturation → bremsstrahlung X-rays and a hydrostatic-equilibrium model.**

- **Ordinary Compton scattering:** An initially stationary electron acquires recoil energy from a photon, so the photon loses energy.
- **Inverse Compton scattering (IC):** A moving electron transfers kinetic energy to a photon. In the laboratory frame, a low-energy photon can be upscattered to X-ray or γ-ray energies.
- **Thomson limit:** In the instantaneous electron rest frame, the incident photon energy must satisfy $\epsilon'\ll m_ec^2=511\,\mathrm{keV}$, so recoil is small.
- **Maximum single-scattering gain for favorable geometry and $\gamma\gg1$:** $\epsilon_1\lesssim 4\gamma^2\epsilon$.
- **Mean post-scattering energy in an isotropic soft-photon field:** $\langle\epsilon_1\rangle=\gamma^2\epsilon(1+\beta^2/3)\simeq\frac43\gamma^2\epsilon$, where the final approximation requires $\beta\simeq1$.
- **IC energy-loss power of one electron:** $P_{\rm IC}=\frac43\sigma_Tc\gamma^2\beta^2U_{\rm rad}$.
- **Thermal Comptonization:** $y\sim\frac{4kT_e}{m_ec^2}\max(\tau,\tau^2)$ provides an order-of-magnitude estimate for nonrelativistic thermal electrons, soft photons, and simple geometries.

---

## 2. Ordinary Compton scattering and electron recoil

### 2.1 Exact Compton formula

Consider an initially stationary electron, an incident photon of energy $\epsilon=h\nu$, a scattered photon of energy $\epsilon_1$, and a photon deflection angle $\theta$:

$$
\boxed{\epsilon_1=\frac{\epsilon}{1+\frac{\epsilon}{m_ec^2}(1-\cos\theta)}}.
$$

The same result can be written as a wavelength shift:

$$
\boxed{\Delta\lambda=\frac{h}{m_ec}(1-\cos\theta)}.
$$

In forward scattering, $\theta=0$, the photon loses no energy. In backscattering, $\theta=\pi$, the energy loss is largest.

### 2.2 Derivation from the four-momentum invariant

Define the four-momentum as $p^\mu=(E/c,\mathbf p)$. We adopt the **$(+---)$** metric convention:

$$
a\cdot b=a^0b^0-\mathbf a\cdot\mathbf b,
\qquad p^\mu p_\mu=m^2c^2.
$$

An electron therefore satisfies $p^2=m_e^2c^2$, whereas a photon satisfies $k^2=0$. For compactness, set $c=1$ temporarily.

Let the initial and final electron four-momenta be $p,p_1$, and let the corresponding photon four-momenta be $k,k_1$. Four-momentum conservation gives

$$
p+k=p_1+k_1.
$$

Rearranging and squaring both sides gives

$$
p_1^2=(p+k-k_1)^2
=p^2+2p\cdot(k-k_1)-2k\cdot k_1.
$$

Using $p_1^2=p^2=m_e^2$ yields

$$
p\cdot(k-k_1)=k\cdot k_1.
$$

The electron is initially at rest, so $p=(m_e,\mathbf0)$. The angle between the two photon directions is $\theta$, and hence

$$
m_e(\epsilon-\epsilon_1)=\epsilon\epsilon_1(1-\cos\theta).
$$

Rearranging this expression and restoring $c$ recovers the Compton formula in Section 2.1.

**What is four-momentum conservation?** It is not an additional conservation law. It combines energy conservation and three-dimensional momentum conservation in a single four-vector equation.  
**What is the Minkowski inner product?** It is the inner product of relativistic spacetime and differs from the Euclidean product. The time components are multiplied, and the three-dimensional spatial product is subtracted. The result is invariant under Lorentz transformations.

### 2.3 Low-energy approximation using a momentum triangle and the law of cosines

![Photon momentum difference and electron recoil in Compton scattering](/learning/radiation/inverse-compton/compton-momentum-triangle.svg)

*Figure 1. The two photon momentum vectors share a common origin. Their difference is the electron recoil momentum, and the law of cosines gives the factor $1-\cos\theta$. The diagram assumes that the photon momentum changes little in magnitude during scattering.*

Let $\mathbf p_i,\mathbf p_f$ denote the initial and final photon **three-momenta**, and let $\mathbf q$ be the electron recoil momentum. Three-dimensional momentum conservation gives

$$
\mathbf q=\mathbf p_i-\mathbf p_f.
$$

The law of cosines gives

$$
q^2=p_i^2+p_f^2-2p_ip_f\cos\theta.
$$

If $\epsilon\ll m_ec^2$, the fractional change in photon energy is small. We can therefore take $p_i\simeq p_f\simeq\epsilon/c$ and obtain

$$
\boxed{q^2\simeq2\frac{\epsilon^2}{c^2}(1-\cos\theta)}.
$$

The slowly recoiling electron gains $\Delta E_e\simeq q^2/(2m_e)$, so the photon loses

$$
\epsilon-\epsilon_1\simeq\frac{\epsilon^2}{m_ec^2}(1-\cos\theta).
$$

This is exactly the first-order expansion of the full Compton formula when $\epsilon/(m_ec^2)\ll1$. **The physical sequence is a change in photon direction $\to$ an electron recoil momentum required by momentum conservation $\to$ electron kinetic energy $\to$ a loss of photon energy.**

---

## 3. Inverse Compton scattering in the Thomson limit

![Two Doppler boosts with an intermediate Thomson scattering step](/learning/radiation/inverse-compton/two-doppler-boosts.svg)

*Figure 2. Scattering is nearly elastic in the electron rest frame, but the photon can be strongly blueshifted in the laboratory frame. The diagram shows the maximum energy gain for head-on incidence and a favorable outgoing direction.*

Suppose that the electron moves at speed $\beta c$ in the laboratory frame, with Lorentz factor $\gamma=(1-\beta^2)^{-1/2}$. Let $\theta_i$ be the angle between the incident photon and the electron velocity.

The first Lorentz transformation, into the electron rest frame, gives

$$
\boxed{\epsilon'=\gamma\epsilon(1-\beta\cos\theta_i)}.
$$

For a head-on photon, $\cos\theta_i=-1$. If $\gamma\gg1$, then $\epsilon'\simeq2\gamma\epsilon$.

**The interaction is in the Thomson regime only if $\epsilon'\ll m_ec^2$.** An electron rest frame does not automatically imply Thomson scattering. If the photon is too energetic in this frame, recoil is important and Compton or Klein–Nishina effects must be included.

In the Thomson limit, the photon energy is approximately unchanged by scattering in the electron rest frame:

$$
\epsilon_1'\simeq\epsilon'.
$$

If the scattered photon travels in the direction of the electron's original motion in the electron frame, the transformation back to the laboratory frame gives

$$
\epsilon_1=\gamma\epsilon_1'(1+\beta)\simeq2\gamma\epsilon_1'.
$$

The characteristic maximum gain is therefore

$$
\boxed{\epsilon_1\simeq4\gamma^2\epsilon\qquad(\gamma\gg1,\ \text{head-on incidence and a favorable outgoing direction})}.
$$

**Thomson identifies the low-photon-energy scattering limit in the electron frame, whereas inverse Compton describes a net transfer of electron kinetic energy to the photon in the laboratory frame. Both descriptions can apply simultaneously.**

---

## 4. Maximum and angle-averaged energy gains: $4\gamma^2$ and $\frac43\gamma^2$

Consider a monochromatic soft-photon field that is **isotropic in the laboratory frame**. Let $\mu=\cos\theta_i$ be the cosine of the incident angle, and let $\mu_1'$ be the cosine of the scattered photon's angle relative to the electron's original direction of motion in the electron frame. In the Thomson limit,

$$
\epsilon_1=\gamma^2\epsilon(1-\beta\mu)(1+\beta\mu_1').
$$

The Thomson angular distribution is symmetric between the forward and backward directions relative to the incident photon. For a fixed incident direction, $\langle\mu_1'\rangle=0$. However, the incident directions of photons that actually collide with the electron are **not equally probable**. Head-on photons have a larger relative flux, giving a collision weight $\propto 1-\beta\mu$.

The scattering-event average is therefore

$$
\begin{aligned}
\langle\epsilon_1\rangle
&=\gamma^2\epsilon\frac{\int_{-1}^1(1-\beta\mu)^2\,d\mu}{\int_{-1}^1(1-\beta\mu)\,d\mu}\\
&=\gamma^2\epsilon\left(1+\frac{\beta^2}{3}\right).
\end{aligned}
$$

The factor $1/3$ follows from the isotropic angular average

$$
\langle\mu\rangle=0,\qquad \langle\mu^2\rangle=\frac12\int_{-1}^1\mu^2\,d\mu=\frac13.
$$

For $\beta\simeq1$,

$$
\boxed{\langle\epsilon_1\rangle\simeq\frac43\gamma^2\epsilon}.
$$

**The factor $4\gamma^2$ gives the scale of the upper limit for especially favorable geometry. The factor $\frac43\gamma^2$ is an angular average over actual scattering events and is not simply the maximum divided by three.**

---

## 5. Derivation of the inverse Compton cooling power

The central relation is

$$
\boxed{P_{\rm IC}=(\text{number of photons scattered per second})\times(\text{net energy gain per photon})}.
$$

In an isotropic photon field, the total scattering rate in the Thomson regime is

$$
\Gamma=n_\gamma\sigma_Tc,
$$

where $\sigma_T=6.65\times10^{-25}\,\mathrm{cm^2}$. The directional average gives the rate above because $\langle1-\beta\mu\rangle=1$.

The previous section established $\langle\epsilon_1\rangle=\gamma^2\epsilon(1+\beta^2/3)$. Using $\gamma^2-1=\gamma^2\beta^2$ gives

$$
\begin{aligned}
\langle\Delta\epsilon\rangle
&=\langle\epsilon_1\rangle-\epsilon\\
&=\epsilon\left[\gamma^2\left(1+\frac{\beta^2}{3}\right)-1\right]\\
&=\boxed{\frac43\gamma^2\beta^2\epsilon}.
\end{aligned}
$$

Multiplying by the scattering rate and substituting $U_{\rm rad}=n_\gamma\epsilon$ yields

$$
\boxed{P_{\rm IC}=\frac43\sigma_Tc\gamma^2\beta^2U_{\rm rad}}.
$$

This is the rate at which the **electron loses kinetic energy through IC scattering**. It cannot be replaced by $\Gamma\langle\epsilon_1\rangle$ because that expression includes the energy already carried by the incident photons.

For an ultrarelativistic electron, $\beta\simeq1$ and $P_{\rm IC}\propto\gamma^2$. The cooling time is approximately

$$
t_{\rm IC}\simeq\frac{\gamma m_ec^2}{P_{\rm IC}}=\frac{3m_ec}{4\sigma_T\gamma U_{\rm rad}}.
$$

The synchrotron power averaged over an isotropic distribution of pitch angles is

$$
P_{\rm syn}=\frac43\sigma_Tc\gamma^2\beta^2U_B,
\qquad U_B=\frac{B^2}{8\pi}\quad(\mathrm{CGS}),
$$

and hence

$$
\boxed{\frac{P_{\rm IC}}{P_{\rm syn}}=\frac{U_{\rm rad}}{U_B}}.
$$

**Supplement to RL §7.3 on spectra and SSC.** A population of relativistic electrons can produce synchrotron photons and then scatter those photons to higher energies through inverse Compton scattering. When the seed photons come from synchrotron emission by the same electrons, the process is called synchrotron self-Compton (SSC). The schematic illustrates these two emission components.

![Schematic synchrotron and inverse Compton peaks](/learning/radiation/inverse-compton/ssc-two-peak-spectrum.svg)

*Figure 3. The schematic shows two peaks in $\nu F_\nu$. Their relative heights and positions depend on the electron spectrum, the magnetic field, the seed photons, and Klein–Nishina corrections.*

---

## 6. Random walks and the number of scatterings: $\tau$ and $\tau^2$

![Direct escape at low optical depth and a random walk at high optical depth](/learning/radiation/inverse-compton/optical-depth-random-walk.svg)

*Figure 4. Most photons escape directly in the optically thin limit. In the optically thick limit, repeated scattering randomizes their directions, and about $\tau^2$ scatterings are needed for a net displacement across a region of size $R$. The trajectories are schematic.*

Define the mean free path and scattering optical depth as

$$
\ell=\frac1{n_e\sigma_T},\qquad \tau=n_e\sigma_TR=\frac R\ell.
$$

### 6.1 Optically thin limit ($\tau\ll1$)

The mean free path satisfies $\ell\gg R$, so most photons do not scatter. The probability of zero scatterings along a straight path is $P_0=e^{-\tau}$. The probability of at least one scattering is therefore $\simeq\tau$, and the average number of scatterings over the full photon population is

$$
\boxed{\langle N_{\rm sc}\rangle\sim\tau\quad(\tau\ll1)}.
$$

An average of $N=0.01$ does not mean that one photon scatters 0.01 times. It means that most photons undergo no scattering and a small fraction scatter once.

### 6.2 Optically thick limit ($\tau\gg1$)

After each scattering, a photon changes direction approximately at random. Let the displacement in step $i$ be $\Delta\mathbf r_i$, with magnitude of order $\ell$ and an uncorrelated direction. Then

$$
\begin{aligned}
\mathbf R&=\sum_{i=1}^N\Delta\mathbf r_i,\\
\langle R^2\rangle&=\sum_i\langle|\Delta\mathbf r_i|^2\rangle
+2\sum_{i<j}\langle\Delta\mathbf r_i\cdot\Delta\mathbf r_j\rangle\\
&\sim N\ell^2.
\end{aligned}
$$

The cross terms vanish on average, and therefore

$$
\boxed{R_{\rm rms}\sim\sqrt N\,\ell}.
$$

The number of steps required to reach a boundary at distance $R$ is

$$
\boxed{N_{\rm sc}\sim(R/\ell)^2=\tau^2\quad(\tau\gg1)}.
$$

**In the optically thin limit, the single-scattering probability is $\propto\tau$. In the optically thick limit, the net random-walk displacement is $\propto\sqrt N$, so the number of scatterings before escape is $\propto\tau^2$.** The numerical coefficient depends on geometry and the initial position.

---

## 7. Thermal Comptonization, the $y$ parameter, and $e^y$

![Compton y parameter as a function of electron-scattering optical depth](/learning/radiation/inverse-compton/compton-y-optical-depth.svg)

*Figure 5. At fixed electron temperature, $y$ scales with $\tau$ in the optically thin regime and with $\tau^2$ in the optically thick regime. The example curve uses $4kT_e/(m_ec^2)=0.12$.*

For nonrelativistic thermal electrons with $kT_e\ll m_ec^2$, low photon occupation numbers, and scattering in the Thomson regime, the mean fractional energy change per scattering is

$$
\boxed{\frac{\langle\Delta\epsilon\rangle}{\epsilon}\simeq\frac{4kT_e-\epsilon}{m_ec^2}}.
$$

- The $4kT_e$ term represents the mean photon energy gain from electron thermal motion.
- The $-\epsilon$ term represents energy loss through photon recoil.
- If $\epsilon\ll kT_e$, the mean **fractional** gain per scattering is approximately the constant $a=4kT_e/(m_ec^2)\ll1$.

### 7.1 Exponential growth of photon energy

![Energy gain and recoil-driven saturation in thermal Comptonization](/learning/radiation/inverse-compton/compton-energy-gain-saturation.svg)

*Figure 6. The dashed curve assumes a fixed fractional energy gain per scattering and therefore grows exponentially. The solid curve uses a simplified recoil term to show how the energy gain saturates. A full treatment would require solving the Kompaneets equation.*

Each scattering increases the photon energy by an approximately fixed fraction:

$$
\epsilon_{n+1}\simeq\epsilon_n(1+a)
\ \Rightarrow\ 
\epsilon_N\simeq\epsilon_i(1+a)^N.
$$

Taking the logarithm and using $\ln(1+a)\simeq a$ gives

$$
\ln\frac{\epsilon_N}{\epsilon_i}\simeq Na
\ \Rightarrow\ 
\boxed{\epsilon_N\simeq\epsilon_i e^{Na}}.
$$

### 7.2 Optical depth $\tau$ and the number of scatterings

$\tau$ determines the mean number of scatterings through $N_{\rm sc}\sim\max(\tau,\tau^2)$. Define

$$
\boxed{y\sim \frac{4kT_e}{m_ec^2}\max(\tau,\tau^2)}.
$$

A characteristic estimate for repeated scattering is therefore

$$
\boxed{\epsilon_f\sim\epsilon_i e^y}.
$$

**Important limitations:**

1. This is a **heuristic estimate** based on a fixed mean fractional gain per scattering, not an exact expression for the average spectrum of every photon. In particular, when $\tau\ll1$, most photons do not scatter, and a noninteger mean number of scatterings should not be interpreted as the history of an individual photon.
2. As the photon energy approaches $\epsilon\sim kT_e$, recoil can no longer be neglected and the exponential gain begins to saturate. The value $4kT_e$ is where the mean single-scattering energy drift above vanishes. It does not mean that every photon in the final steady-state spectrum has energy $4kT_e$.
3. A more general treatment is required if the electrons or photons enter the relativistic or Klein–Nishina regime.

Conceptually, $y\ll1$ produces only weak spectral changes, $y\gtrsim1$ produces substantial Comptonization, and $y\gg1$ can approach saturation depending on the physical conditions.

---

## 8. Review of thermal bremsstrahlung

![Electron deflection in bremsstrahlung and the forces in hydrostatic equilibrium](/learning/radiation/inverse-compton/bremsstrahlung-hydrostatic-equilibrium.svg)

*Figure 7. The left panel shows an electron radiating as the Coulomb field of a positive ion deflects it. The right panel illustrates an idealized spherical gas in which an outward pressure-gradient force balances inward gravity.*

A free electron is **accelerated, including a change in direction**, by the Coulomb force as it passes an ion and therefore emits radiation. It does not need to decelerate along its velocity vector. This process is also called *free–free emission*.

For an optically thin, nonrelativistic thermal plasma,

$$
j_\nu^{\rm ff}\propto Z^2n_en_iT^{-1/2}e^{-h\nu/kT}g_{\rm ff}(\nu,T),
$$

where $g_{\rm ff}$ is the Gaunt factor. The exponential cutoff at high frequency, $h\nu\gtrsim kT$, can be used to estimate the gas temperature. The frequency-integrated radiated power per unit volume is approximately

$$
\boxed{\varepsilon_{\rm ff}\propto Z^2n_en_iT^{1/2}}.
$$

For a fully ionized pure hydrogen plasma, $n_i=n_e$ and $\varepsilon_{\rm ff}\propto n_e^2T^{1/2}$.

The distinction is that **bremsstrahlung creates photons, whereas inverse Compton scattering exchanges energy between existing photons and electrons.**

---

## 9. Hydrostatic equilibrium

The outward pressure-gradient force balances inward gravity, leaving no net macroscopic acceleration:

$$
-\nabla P+\rho\mathbf g=0.
$$

In spherical symmetry, where $M(r)$ is the gravitating mass inside radius $r$,

$$
\boxed{\frac{dP}{dr}=-\frac{GM(r)\rho}{r^2}}.
$$

For the ideal-gas equation of state $P=\rho kT/(\mu m_p)$, suppose the central mass $M$ dominates the gravitational field and the gas has characteristic scale $R$. The order-of-magnitude estimate $dP/dr\sim-P/R$ gives

$$
\frac PR\sim\frac{GM\rho}{R^2}
\quad\Rightarrow\quad
\boxed{kT\sim\frac{GM\mu m_p}{R}}.
$$

This is an order-of-magnitude relation close to the virial temperature. **It is not an exact equality**, and its coefficient depends on the gas structure and boundary conditions.

---

## 10. Approaches to Problems 7.1 and 7.2

> The following discussion summarizes the problem interpretation and modeling strategy examined in the associated conversation. Any formal submission should use the problem statements and parameters given in the textbook.

### 10.1 Problem 7.1: repeated Compton scattering

The key questions concern repeated scatterings of soft photons in a thermal electron cloud, the photon energy upon escape, the onset of saturation, and a dimensionless measure of the resulting spectral change:

$$
\tau\gg1\Rightarrow N\sim\tau^2,
\qquad y\sim\frac{4kT_e}{m_ec^2}\tau^2.
$$

The characteristic unsaturated gain is $\epsilon_f\sim\epsilon_i e^y$. An estimate of the critical optical depth at which $\epsilon_f\sim kT_e$ is

$$
\tau_{\rm crit}\sim
\left[\frac{m_ec^2}{4kT_e}\ln\left(\frac{kT_e}{\epsilon_i}\right)\right]^{1/2},
$$

which extrapolates an order-of-magnitude unsaturated formula and must be used cautiously near saturation.

### 10.2 Problem 7.2: bremsstrahlung and inverse Compton scattering in a thermal X-ray source

The modeling relations considered here are

$$
\underbrace{kT\sim GM\mu m_p/R}_{\text{hydrostatic-equilibrium estimate}},
\qquad
\underbrace{L_{\rm ff}\propto n_e^2T^{1/2}R^3}_{\text{free-free emission}},
$$

$$
\underbrace{\tau_{\rm es}\sim n_e\sigma_TR}_{\text{scattering depth}}
\quad\Rightarrow\quad
\underbrace{y\sim\frac{4kT}{m_ec^2}\max(\tau_{\rm es},\tau_{\rm es}^2)}_{\text{strength of Comptonization}}.
$$

For **fixed $L_{\rm ff}$ and $T$, assuming that point-mass gravity and an order-of-magnitude uniform-cloud model apply**, $R\propto M$, $n_e\propto R^{-3/2}$, and therefore $\tau_{\rm es}\propto R^{-1/2}\propto M^{-1/2}$. A more massive central object then corresponds to a smaller scattering depth, making it easier to preserve the original bremsstrahlung spectrum. A quantitative constraint usually follows from requiring $y\ll1$.

---

## 11. Common points of confusion

1. **Thomson is not synonymous with a stationary electron.** The relevant condition is $\epsilon'\ll m_ec^2$ in the electron rest frame.
2. **$4\gamma^2$ and $\frac43\gamma^2$ describe different quantities.** The former is the scale of the maximum gain for special angles, whereas the latter is the collision-event average in an isotropic field.
3. **The IC power uses the photon's *net* energy gain**, not its complete post-scattering energy.
4. **$\tau$ is the optical depth along a straight path.** The factor $\tau^2$ arises from the number of random-walk scatterings required for escape in the optically thick limit.
5. **The factor $e^y$ is an approximation for repeated, unsaturated scattering of soft photons.** It is not an exact population average in the optically thin limit.
6. **Hydrostatic equilibrium constrains the gas structure, bremsstrahlung produces photons, and IC modifies the photon spectrum.**

---

## 12. Review questions

1. Why does applying the law of cosines to $\mathbf q=\mathbf p_i-\mathbf p_f$ give $q^2\simeq2(\epsilon/c)^2(1-\cos\theta)$?
2. How is four-momentum conservation related to ordinary energy and three-dimensional momentum conservation, and why is $k^2=0$?
3. Why must the photon first be transformed into the electron rest frame before deciding whether the Thomson or Klein–Nishina regime applies?
4. How do $\langle\cos^2\theta\rangle=1/3$ and the incident collision weight enter the factor $\frac43$?
5. Why must $P_{\rm IC}$ vanish as $\beta\to0$ in the Thomson approximation?
6. Why is $N\sim\tau$ for $\tau\ll1$, but $N\sim\tau^2$ for $\tau\gg1$?
7. How does $\epsilon_{n+1}=\epsilon_n(1+a)$ lead to $\epsilon_f\sim\epsilon_i e^y$, and when does this approximation fail?
