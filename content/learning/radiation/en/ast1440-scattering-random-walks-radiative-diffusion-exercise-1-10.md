---
title: >-
  AST1440: Scattering, Random Walks, and Radiative Diffusion — RL §§1.7–1.8 and
  Problem 1.10
description: >-
  A detailed guide to scattering source functions, mean free paths and random
  walks, the thermalization length and effective optical depth, Rosseland
  diffusion, the Eddington and two-stream approximations, and the complete
  solution to Problem 1.10.
date: '2026-09-24'
tags:
  - AST1440
  - Scattering
  - Random walk
  - Radiative diffusion
  - Exercises
order: 5
draft: false
sourceHash: 70c50c7f2cdc34d6105dd7d0403ce71678ec3bfbd031b5678be787955631ca90
translation: AI-assisted English translation
---

# AST1440: Scattering, Random Walks, and Radiative Diffusion — RL §§1.7–1.8 and Problem 1.10

> Course: AST1440 — Radiation; this session covers Scattering, Random Walks, and Radiative Diffusion.  
> Textbook: Rybicki & Lightman, *Radiative Processes in Astrophysics* (RL), §§1.7–1.8, printed pp. 33–45; Problem 1.10, printed pp. 49–50.  
> Compiled: September 24, 2026.  
> These notes merge the textbook material with every follow-up question raised in discussion, ordered by physical dependency: why a probability equals the differential optical depth, why the mean free path is the inverse of the extinction coefficient, how a microscopic cross section differs from a macroscopic scattering coefficient, what thermalization means, why only thermal emission within about one thermalization length of the surface dominates the directly emergent radiation, why a scattering line can produce an absorption feature in an isothermal medium, what Rosseland diffusion actually describes, how the Eddington moments and the two-stream approximation are obtained, and the complete solution to Problem 1.10. The Chinese text emphasizes the physical picture and step-by-step derivations, followed by an assignment-ready English version.

## Contents

1. [The Central Question and Conclusions of This Lesson](#1-the-central-question-and-conclusions-of-this-lesson)
2. [Notation, Dimensions, and Assumptions](#2-notation-dimensions-and-assumptions)
3. [Source Functions for Pure Scattering and for Absorption Plus Scattering](#3-source-functions-for-pure-scattering-and-for-absorption-plus-scattering)
4. [From Cross Sections to Optical Depth, Probability, and Mean Free Path](#4-from-cross-sections-to-optical-depth-probability-and-mean-free-path)
5. [Random Walks, Thermalization Length, and Effective Optical Depth](#5-random-walks-thermalization-length-and-effective-optical-depth)
6. [The Effective Emitting Layer, Equation (1.103), and Spectral-Line Features](#6-the-effective-emitting-layer-equation-1103-and-spectral-line-features)
7. [Rosseland Radiative Diffusion](#7-rosseland-radiative-diffusion)
8. [Angular Moments and the Eddington Approximation](#8-angular-moments-and-the-eddington-approximation)
9. [The Frequency-Dependent Transfer Equation and Its Moment Equations](#9-the-frequency-dependent-transfer-equation-and-its-moment-equations)
10. [The Two-Stream Approximation and the Surface Boundary Condition](#10-the-two-stream-approximation-and-the-surface-boundary-condition)
11. [Problem 1.10: A Semi-Infinite Isothermal Scattering Medium](#11-problem-110-a-semi-infinite-isothermal-scattering-medium)
12. [English assignment-ready solution](#12-english-assignment-ready-solution)
13. [Review Checklist, Limiting Checks, and Common Confusions](#13-review-checklist-limiting-checks-and-common-confusions)
14. [References and Citations](#14-references-and-citations)

---

## 1. The Central Question and Conclusions of This Lesson

This lesson answers a question that looks simple but is in fact crucial: if an object is optically thick, must its emergent spectrum be a blackbody?

The answer is no. A large ordinary optical depth only means that a photon undergoes many interactions; if almost all of those interactions are coherent scatterings, the photon is trapped but never exchanges enough energy with the matter. What actually drives the radiation field toward the Planck function is true absorption of photons together with thermal emission controlled by the local heat bath.

The whole lesson can be compressed into the following chain of reasoning:

1. Pure scattering only redistributes existing radiation among directions; it cannot create photons out of nothing when there is no illumination.
2. Photons escape an optically thick medium by random walk; when the total optical depth is $\tau\gg1$, the required number of interactions is about $N\sim\tau^2$.
3. If the probability that an interaction truly absorbs the photon is $\epsilon$, the photon undergoes on average about $1/\epsilon$ interactions before it is destroyed.
4. Comparing the two gives the thermalization depth $\tau_{\rm therm}\sim1/\sqrt{\epsilon}$ and the thermalization length $\ell_*\sim\ell/\sqrt{\epsilon}$.
5. The directly emergent radiation of an effectively thick medium comes mostly from a layer about one thermalization length deep, so RL equation (1.103) gives the order-of-magnitude scaling $L_\nu\propto\sqrt{\epsilon_\nu}B_\nu$.
6. If a strong atomic transition behaves mainly as scattering, then $\epsilon_\nu\ll1$ at line center, the surface source function falls below the neighboring thermal continuum, and an absorption feature appears even in an isothermal medium.
7. Deep inside the medium the radiation is nearly isotropic and in local thermal equilibrium; a very small directional asymmetry diffuses energy from hotter to cooler regions, and this is Rosseland radiative diffusion.
8. Problem 1.10 uses the Eddington approximation and the two-stream boundary condition to obtain $J_\nu(\tau_\nu)$, the surface flux, and the effective optical depth in a semi-infinite isothermal medium.

The three most important results of this lesson are

$$
\boxed{
S_\nu=(1-\epsilon_\nu)J_\nu+\epsilon_\nu B_\nu
},
$$

$$
\boxed{
\tau_{\nu,*}\sim\sqrt{\epsilon_\nu}\,\tau_\nu
},
$$

together with the square-root-epsilon law of the two-stream/Eddington approximation

$$
\boxed{
S_\nu(0)=\sqrt{\epsilon_\nu}\,B_\nu
}.
$$

## 2. Notation, Dimensions, and Assumptions

### 2.1 Table of Symbols

| Symbol | Meaning | Dimension or comment |
|---|---|---|
| $I_\nu(\tau,\mu)$ | Specific intensity at frequency $\nu$ in the direction with cosine $\mu$ | Directional radiative intensity per unit frequency |
| $J_\nu$ | Mean intensity | $J_\nu=(1/2)\int_{-1}^{1}I_\nu d\mu$ |
| $H_\nu$ | First angular moment | $F_\nu=4\pi H_\nu$ |
| $K_\nu$ | Second angular moment | Related to radiation pressure |
| $B_\nu(T)$ | Planck function | Specific intensity in LTE thermal equilibrium |
| $\alpha_\nu$ | RL macroscopic true-absorption coefficient | $L^{-1}$ |
| $\sigma_\nu$ | RL macroscopic scattering coefficient | $L^{-1}$; not a single-particle cross section |
| $\chi_\nu$ | Total extinction coefficient | $\chi_\nu=\alpha_\nu+\sigma_\nu$ |
| $\sigma_{\nu,\rm cross}$ | Microscopic scattering cross section of one particle | $L^2$ |
| $\kappa_{\nu}$ | Opacity per unit mass | $L^2M^{-1}$ |
| $\epsilon_\nu$ | Probability of true absorption in a single interaction | $\epsilon_\nu=\alpha_\nu/\chi_\nu$ |
| $1-\epsilon_\nu$ | Single-scattering albedo | $\sigma_\nu/\chi_\nu$ |
| $\ell_\nu$ | Mean free path to the next interaction of any kind | $\ell_\nu=1/\chi_\nu$ |
| $\ell_{\nu,*}$ | Thermalization length or effective mean path | $\ell_{\nu,*}=\ell_\nu/\sqrt{\epsilon_\nu}$ |
| $\tau_\nu$ | Total optical depth | Defined through $\chi_\nu$ |
| $\tau_{\nu,a},\tau_{\nu,s}$ | True-absorption and scattering optical depths | $\alpha_\nu L,\sigma_\nu L$ |
| $\tau_{\nu,*}$ | Effective optical depth | Random-walk scaling $\sqrt{\epsilon_\nu}\tau_\nu$ |
| $\mu$ | Direction cosine | $\mu=\cos\theta$ |

### 2.2 A Correction to the Denominator of $\epsilon_\nu$

If the preparatory reading shows

$$
\epsilon_\nu=\frac{\alpha_\nu}{\alpha_\nu-\sigma_\nu},
$$

then the minus sign should be regarded as a typesetting or transcription error. The RL definition is

$$
\boxed{
\epsilon_\nu
=
\frac{\alpha_\nu}{\alpha_\nu+\sigma_\nu}
}.
$$

The denominator must be the total extinction coefficient. Only then is $\epsilon_\nu$ a probability between $0$ and $1$, and only then do the two mutually exclusive outcomes, true absorption and scattering, satisfy

$$
\epsilon_\nu+(1-\epsilon_\nu)=1.
$$

### 2.3 Microscopic Cross Sections, Macroscopic Coefficients, and Opacity per Unit Mass

In many textbooks the lowercase $\sigma$ denotes a microscopic cross section, whose dimension is area. RL §1.7, however, uses $\sigma_\nu$ for the macroscopic scattering coefficient, whose dimension is inverse length. The two are related by

$$
\boxed{
\sigma_\nu^{\rm RL}
=n_s\sigma_{\nu,\rm cross}
=\rho\kappa_{\nu,\rm sc}
}.
$$

The dimensional check is

$$
[n_s\sigma_{\nu,\rm cross}]
=L^{-3}L^2=L^{-1}.
$$

In the same way, the macroscopic true-absorption coefficient can be written as

$$
\alpha_\nu
=n_a\sigma_{\nu,\rm abs,cross}
=\rho\kappa_{\nu,\rm abs}.
$$

Only macroscopic coefficients with the same dimensions may be added:

$$
\chi_\nu=\alpha_\nu+\sigma_\nu.
$$

### 2.4 Main Assumptions Adopted Here

- The basic scattering model of §1.7 assumes coherent, isotropic scattering; scattering does not change the total photon energy within the frequency interval.
- True absorption and thermal emission obey the LTE Kirchhoff relation $j_{\nu,\rm th}=\alpha_\nu B_\nu(T)$.
- The order-of-magnitude random-walk estimates ignore geometric constants; the Eddington derivation supplies an extra $\sqrt{3}$.
- The Rosseland approximation requires the medium to be optically thick, the radiation to be close to local thermal equilibrium, and the physical quantities to vary slowly over one mean free path.
- The Eddington approximation only requires the angular distribution to be nearly isotropic, and closes the moment equations with $K_\nu=J_\nu/3$.
- The medium in Problem 1.10 is semi-infinite, homogeneous, and isothermal; $\alpha_\nu$, $\sigma_\nu$, and $\epsilon_\nu$ do not vary with depth, and no external radiation is incident on the surface.

## 3. Source Functions for Pure Scattering and for Absorption Plus Scattering

### 3.1 The Essential Difference Between Thermal Emission and Scattering

The thermal emission coefficient associated with LTE true absorption is

$$
\boxed{
j_{\nu,\rm th}=\alpha_\nu B_\nu(T)
}.
$$

It is fixed by the temperature of the matter; even with no incident radiation, matter at temperature $T$ still emits thermally.

For coherent, isotropic scattering, the energy scattered out of a unit volume at frequency $\nu$ must equal the energy scattered into it from all directions, so

$$
\boxed{
j_{\nu,\rm sc}=\sigma_\nu J_\nu
}
\qquad\text{[RL (1.84)]}.
$$

The source function for pure scattering is therefore

$$
\boxed{
S_{\nu,\rm sc}
=\frac{j_{\nu,\rm sc}}{\sigma_\nu}
=J_\nu
}
\qquad\text{[RL (1.85)]}.
$$

Scattering thus only redistributes radiation that already exists. If $J_\nu=0$, a purely scattering medium produces no photons at all.

### 3.2 Why Can a Pure-Scattering Problem Not Use the Formal Solution with a Known Source Function?

The transfer equation for pure scattering is

$$
\frac{dI_\nu}{ds}
=-\sigma_\nu(I_\nu-J_\nu).
$$

Here

$$
J_\nu=\frac{1}{4\pi}\int I_\nu d\Omega
$$

depends in turn on the unknown intensity in all directions. Hence $S_\nu=J_\nu$ is not a locally prescribed function but the angular average of the solution itself. The equation becomes an integro-differential equation, which is precisely why methods such as the Eddington approximation are needed.

### 3.3 The Source Function with Absorption Plus Scattering

The total emission coefficient is

$$
j_\nu
=\alpha_\nu B_\nu+\sigma_\nu J_\nu,
$$

and the total extinction coefficient is

$$
\chi_\nu=\alpha_\nu+\sigma_\nu.
$$

so

$$
S_\nu
=\frac{\alpha_\nu B_\nu+\sigma_\nu J_\nu}
{\alpha_\nu+\sigma_\nu}.
$$

Introducing

$$
\epsilon_\nu
=\frac{\alpha_\nu}{\alpha_\nu+\sigma_\nu},
\qquad
1-\epsilon_\nu
=\frac{\sigma_\nu}{\alpha_\nu+\sigma_\nu},
$$

we obtain

$$
\boxed{
S_\nu
=(1-\epsilon_\nu)J_\nu
+\epsilon_\nu B_\nu
}
\qquad\text{[RL (1.95)]}.
$$

It is the probability-weighted average of the scattering source function $J_\nu$ and the thermal source function $B_\nu$:

- $\epsilon_\nu\to1$: true absorption dominates and $S_\nu\to B_\nu$;
- $\epsilon_\nu\to0$: scattering dominates and $S_\nu\to J_\nu$;
- deep inside, if $J_\nu\to B_\nu$, then $S_\nu\to B_\nu$ no matter how small $\epsilon_\nu$ is;
- near the surface photon escape makes $J_\nu<B_\nu$, and a small $\epsilon_\nu$ then pushes $S_\nu$ well below $B_\nu$.

### 3.4 When Should "Absorption Followed by Immediate Emission" Count as Scattering?

An atom that absorbs a line photon may quickly return to its original level and emit a photon of nearly the same frequency. If the energy is not handed over to the thermal bath of the matter in between, for example through collisions, the emergent photon remains tightly linked to the incident radiation, and in radiative transfer this should be counted as resonance scattering.

True absorption instead means that the original photon disappears and its energy goes into the internal energy and thermal motion of atoms, electrons, or ions. The matter later re-emits according to the local temperature, and the new photon retains nothing of the original direction, phase, or propagation history. Only the latter drives the radiation field effectively toward $B_\nu(T)$.

## 4. From Cross Sections to Optical Depth, Probability, and Mean Free Path

### 4.1 Why Is the Interaction Probability over a Short Path $d\tau$?

Let the number density of scattering particles be $n$ and the microscopic cross section of a single particle be $\sigma_{\rm cross}$. As the photon advances a short distance $ds$, it sweeps out a volume

$$
dV=\sigma_{\rm cross}ds.
$$

The mean number of target particles contained in that volume is

$$
dN=n\sigma_{\rm cross}ds.
$$

When $dN\ll1$, the probability of meeting two or more targets at once is $O(ds^2)$, so the conditional probability of a single interaction is

$$
dP_{\rm int}
=n\sigma_{\rm cross}ds.
$$

Defining the macroscopic coefficient

$$
\chi=n\sigma_{\rm cross}
$$

and the differential optical depth

$$
d\tau=\chi ds,
$$

we obtain

$$
\boxed{
dP_{\rm int}=d\tau+O(d\tau^2)
}.
$$

This is a conditional probability: it assumes that the photon has already reached the start of the short segment unscathed. To obtain the probability that the photon interacts here for the first time since it set out, one must also multiply by the survival probability accumulated beforehand.

### 4.2 Why Is the Survival Probability $e^{-\tau}$?

Let $P_0$ be the probability that no interaction has occurred yet. After the next short segment,

$$
P_0(\tau+d\tau)=P_0(\tau)(1-d\tau).
$$

Hence

$$
dP_0=-P_0d\tau,
$$

that is,

$$
\frac{dP_0}{P_0}=-d\tau.
$$

Integrating with $P_0(0)=1$ gives

$$
\boxed{
P_0(\tau)=e^{-\tau}
}.
$$

The probability of at least one interaction is therefore

$$
\boxed{
P_{\geq1}=1-e^{-\tau}
}.
$$

When $\tau\ll1$, a Taylor expansion gives

$$
e^{-\tau}
=1-\tau+\frac{\tau^2}{2}-\cdots,
$$

so

$$
\boxed{
1-e^{-\tau}\simeq\tau
\qquad(\tau\ll1)
}.
$$

In the optically thin limit the probability of two or more interactions is $O(\tau^2)$, so the optical depth itself is approximately the probability of at least one interaction. In general $\tau$ may exceed $1$ and is not a probability; the exact probability is always $1-e^{-\tau}\leq1$.

### 4.3 Why Is the Mean Free Path the Inverse of the Total Extinction Coefficient?

Both true absorption and scattering can end the current free flight. Over $ds$,

$$
dP_{\rm abs}=\alpha_\nu ds,
\qquad
dP_{\rm sc}=\sigma_\nu ds.
$$

Neglecting the $O(ds^2)$ probability of simultaneous events,

$$
dP_{\rm int}
=(\alpha_\nu+\sigma_\nu)ds
=\chi_\nu ds.
$$

The probability of still not having interacted after travelling a distance $s$ is

$$
P_0(s)=e^{-\chi_\nu s}.
$$

The probability density for the first interaction to occur between $s$ and $s+ds$ is

$$
p(s)=\chi_\nu e^{-\chi_\nu s}.
$$

The mean free path is therefore

$$
\begin{aligned}
\ell_\nu
&=\int_0^\infty sp(s)ds\\
&=\int_0^\infty s\chi_\nu e^{-\chi_\nu s}ds\\
&=\frac{1}{\chi_\nu}.
\end{aligned}
$$

so

$$
\boxed{
\ell_\nu
=\frac{1}{\alpha_\nu+\sigma_\nu}
}.
$$

The dimensions are also correct: $[\alpha_\nu]=[\sigma_\nu]=L^{-1}$, so $[\ell_\nu]=L$.

## 5. Random Walks, Thermalization Length, and Effective Optical Depth

### 5.1 Why Does Escape from an Optically Thick Medium Require $N\sim\tau^2$ Interactions?

Between successive interactions the photon moves by a displacement $\mathbf r_i$. After $N$ interactions the net displacement is

$$
\mathbf R=\sum_{i=1}^{N}\mathbf r_i.
$$

An isotropic random walk satisfies $\langle\mathbf R\rangle=0$, but the mean square displacement is

$$
\langle R^2\rangle
=\sum_i\langle r_i^2\rangle
+2\sum_{i<j}\langle\mathbf r_i\cdot\mathbf r_j\rangle.
$$

Directions at different steps are uncorrelated, so the cross terms average to zero and

$$
\langle R^2\rangle\simeq N\ell^2.
$$

The typical net displacement is

$$
R_{\rm rms}\simeq\sqrt{N}\,\ell.
$$

If the size of the medium is $L$, setting $R_{\rm rms}\sim L$ gives

$$
N\sim\left(\frac{L}{\ell}\right)^2=\tau^2,
$$

so

$$
\boxed{
N\sim\tau^2
\qquad(\tau\gg1)
}.
$$

In the optically thin case only about $1-e^{-\tau}\simeq\tau$ of the photons interact at all, so $N\sim\tau$. To order of magnitude one may write $N\sim\max(\tau,\tau^2)$.

### 5.2 What Does Thermalization Mean?

Thermalization is not simply "the directions becoming scrambled"; it means that through true absorption and thermal emission the radiation reaches energy balance with the local matter and gradually forgets the origin, direction, and spectral history of the original photons, so that

$$
\boxed{
J_\nu\longrightarrow B_\nu(T),
\qquad
S_\nu\longrightarrow B_\nu(T)
}.
$$

Coherent scattering can make the radiation nearly isotropic very quickly, but by itself it does not adjust the intensity and spectrum to $B_\nu(T)$. A radiation field that is very weak yet identical in all directions is isotropic but not thermalized.

In thermal equilibrium,

$$
\alpha_\nu J_\nu=\alpha_\nu B_\nu,
$$

that is, the true-absorption power equals the thermal-emission power, and there is no net matter-radiation energy exchange.

### 5.3 How Far Can a Photon Travel Before It Is Truly Absorbed?

Each interaction ends in true absorption with probability $\epsilon_\nu$, so the mean number of interactions a photon undergoes before it is destroyed is about

$$
N_{\rm dest}\sim\frac{1}{\epsilon_\nu}.
$$

The net displacement of the random walk is

$$
\ell_{\nu,*}
\sim\sqrt{N_{\rm dest}}\,\ell_\nu
=\frac{\ell_\nu}{\sqrt{\epsilon_\nu}}.
$$

Substituting

$$
\ell_\nu=(\alpha_\nu+\sigma_\nu)^{-1},
\qquad
\epsilon_\nu=\frac{\alpha_\nu}{\alpha_\nu+\sigma_\nu},
$$

gives

$$
\boxed{
\ell_{\nu,*}
=\frac{1}{\sqrt{\alpha_\nu(\alpha_\nu+\sigma_\nu)}}
}.
$$

This is called the thermalization length, the diffusion length, or the effective mean path. It is not the length of a single free flight but the typical net displacement achieved through many scatterings between the thermal emission that creates a photon and the true absorption that destroys it.

### 5.4 Why Does the Effective Optical Depth Control Thermalization?

For a medium of size $L$, define

$$
\tau_{\nu,*}=\frac{L}{\ell_{\nu,*}}.
$$

Using

$$
\tau_{\nu,a}=\alpha_\nu L,
\qquad
\tau_{\nu,s}=\sigma_\nu L,
$$

we obtain the random-walk order of magnitude

$$
\boxed{
\tau_{\nu,*}
\simeq
\sqrt{\tau_{\nu,a}
(\tau_{\nu,a}+\tau_{\nu,s})}
}.
$$

Equivalently, since $\tau_\nu=\tau_{\nu,a}+\tau_{\nu,s}$,

$$
\boxed{
\tau_{\nu,*}\simeq\sqrt{\epsilon_\nu}\,\tau_\nu
}.
$$

Another way to see it: escaping from an ordinary optical depth $\tau_\nu$ requires about $\tau_\nu^2$ interactions, each with probability $\epsilon_\nu$ of true absorption, so the expected number of true absorptions before escape is

$$
\langle N_{\rm abs}\rangle
\sim\epsilon_\nu\tau_\nu^2
=\tau_{\nu,*}^2.
$$

Hence

$$
\tau_{\nu,*}\ll1
\quad\Rightarrow\quad
\text{the photon usually escapes first, without thermalizing},
$$

$$
\tau_{\nu,*}\gg1
\quad\Rightarrow\quad
\text{the photon is usually truly absorbed before escaping, and the radiation thermalizes}.
$$

The critical thermalization depth is

$$
\boxed{
\tau_{\nu,\rm therm}\sim\frac{1}{\sqrt{\epsilon_\nu}}
}.
$$

The Eddington equations give $\tau_{\nu,*}=\sqrt{3\epsilon_\nu}\tau_\nu$; the $\sqrt{3}$ there is a geometric factor from the moment closure and does not change the essential $\sqrt{\epsilon_\nu}$ scaling.

### 5.5 Why Does Ordinary Optical Thickness Not Guarantee a Blackbody?

If $\tau_\nu\gg1$ but $\epsilon_\nu\ll1$, a photon may scatter enormously many times yet rarely undergo true absorption. For $\epsilon_\nu=10^{-4}$, for instance, the total optical depth needed for thermalization is about

$$
\tau_{\nu,\rm therm}\sim100.
$$

At $\tau_\nu=10$ the medium is already optically thick in the ordinary sense, but

$$
\epsilon_\nu\tau_\nu^2
=10^{-4}\times10^2
=10^{-2}\ll1,
$$

so it is still far from thermalized. Optical thickness measures "being trapped"; effective optical thickness measures "whether enough energy is exchanged with the matter while trapped".

## 6. The Effective Emitting Layer, Equation (1.103), and Spectral-Line Features

### 6.1 Why Does Only Thermal Emission Within One Thermalization Length of the Surface Dominate the Directly Emergent Radiation?

Suppose a photon is created at a distance $x$ from the surface. Random-walking from there to the surface requires

$$
N_{\rm esc}\sim\left(\frac{x}{\ell_\nu}\right)^2
$$

interactions, while on average it can undergo only

$$
N_{\rm dest}\sim\frac{1}{\epsilon_\nu}
$$

interactions before being truly absorbed. For a reasonable chance of escaping before losing its identity, one needs

$$
N_{\rm esc}\lesssim N_{\rm dest}.
$$

Therefore

$$
\left(\frac{x}{\ell_\nu}\right)^2
\lesssim\frac{1}{\epsilon_\nu},
$$

that is,

$$
\boxed{
x\lesssim\frac{\ell_\nu}{\sqrt{\epsilon_\nu}}
=\ell_{\nu,*}
}.
$$

This does not mean that $x=\ell_{\nu,*}$ is an abrupt hard boundary; rather, the contribution from greater depths decays smoothly. Diffusion solutions commonly show behavior like $e^{-x/\ell_{\nu,*}}$. Energy from deeper layers can still be transported outward step by step through repeated cycles of thermal emission, scattering, true absorption, and renewed thermal emission, but for photons that reach the surface directly, the last thermal emission usually occurs within about one thermalization length of the surface.

The effective emitting volume is therefore of order

$$
\boxed{
V_{\rm eff}\sim A\ell_{\nu,*}
}.
$$

### 6.2 RL Equation (1.103)

The total thermal emission power per unit volume per unit frequency is

$$
4\pi\alpha_\nu B_\nu.
$$

Estimating the monochromatic luminosity with the effective emitting volume:

$$
L_\nu
\sim4\pi\alpha_\nu B_\nu A\ell_{\nu,*}.
$$

Substituting

$$
\ell_{\nu,*}
=\frac{1}{\sqrt{\alpha_\nu(\alpha_\nu+\sigma_\nu)}},
$$

gives

$$
\boxed{
L_\nu
\sim4\pi B_\nu A\sqrt{\epsilon_\nu}
}
\qquad\text{[RL (1.103), order of magnitude]}.
$$

This expression reliably gives the $\sqrt{\epsilon_\nu}$ scaling but not an accurate numerical coefficient. In the scattering-free limit $\epsilon_\nu=1$ it gives $4\pi B_\nu A$, whereas the exact result for a plane blackbody surface is $\pi B_\nu A$. RL therefore states explicitly that equation (1.103) is only an order-of-magnitude estimate; Problem 1.10 obtains the coefficient with a more systematic approximation.

### 6.3 Why Can an Isothermal Object Still Show a Scattering Absorption Line?

Consider a narrow line centered at frequency $\nu_0$. In the neighboring continuum outside the line, true absorption may dominate, so that

$$
\epsilon_{\nu,\rm cont}\sim1,
$$

and the surface source function is close to

$$
S_{\nu,\rm cont}\sim B_\nu.
$$

At the center of a strong resonance line, most "absorption followed by re-emission" is really scattering, so

$$
\epsilon_{\nu,\rm line}\ll1.
$$

Photons keep escaping at the surface, making $J_\nu<B_\nu$; and because $\epsilon_\nu$ is small, the source function mainly follows $J_\nu$, so

$$
S_{\nu,\rm line}(0)\sim\sqrt{\epsilon_{\nu,\rm line}}B_\nu
<B_\nu.
$$

Hence, even with no temperature variation with depth, the line center is darker than the adjacent thermal continuum and forms an absorption feature. This is not caused by "the line forming in a higher, cooler layer" but is a non-LTE surface source-function effect.

### 6.4 What Exactly Does "Two Orders of Magnitude Lower" Mean?

If one uses only the order-of-magnitude scaling of equation (1.103) and assumes that $B_\nu$ and the emitting area are nearly constant across the narrow line, then

$$
\frac{L_{\nu,\rm line}}{L_{\nu,\rm cont}}
\sim
\sqrt{
\frac{\epsilon_{\nu,\rm line}}
{\epsilon_{\nu,\rm cont}}
}.
$$

If $\epsilon_{\nu,\rm cont}\sim1$ and $\epsilon_{\nu,\rm line}=10^{-4}$, then

$$
\frac{L_{\nu,\rm line}}{L_{\nu,\rm cont}}
\sim10^{-2}.
$$

"Two orders of magnitude lower" means that within the narrow frequency interval at line center, the luminosity per unit frequency may be of order one percent of the neighboring continuum. It does not mean that the total luminosity of the object drops by a factor of one hundred, nor is it an exact prediction that the line depth is $99\%$.

A more internally consistent ratio within the same two-stream approximation is

$$
\frac{F_{\nu,\rm line}}{F_{\nu,\rm cont}}
=
\frac{2\sqrt{\epsilon_{\rm line}}}
{1+\sqrt{\epsilon_{\rm line}}}
$$

(taking $\epsilon_{\rm cont}=1$). For $\epsilon_{\rm line}=10^{-4}$ this is about $0.0198$, that is, lower by roughly a factor of fifty. The difference again shows that the core result is the $\sqrt{\epsilon}$ scaling, not the numerical coefficient of equation (1.103).

### 6.5 A Darker Line Does Not Mean Energy Has Vanished

A scattered photon may be sent back into the deep interior, escape in another direction, escape through the line wings after frequency redistribution, or be truly absorbed and re-emitted at another frequency. An absorption line only means that the radiation received along the line of sight near that frequency is below the continuum baseline; it does not mean that the total energy disappears in the same proportion.

Real line profiles are also affected by external illumination, geometry, velocity fields, partial or complete frequency redistribution, collisional de-excitation, fluorescent branching, and temperature gradients. "A small $\epsilon$ produces an absorption feature" is therefore a conclusion within the idealized model of this problem, not an unconditional statement about all astrophysical lines.

## 7. Rosseland Radiative Diffusion

### 7.1 What Exactly Does It Describe?

Rosseland radiative diffusion describes how, inside an optically thick medium close to LTE, radiation carries energy from hotter to cooler regions by random walk. It ultimately casts the complicated transfer problem into a relation resembling heat conduction:

$$
\boxed{
\mathbf F
=-\frac{16\sigma_{\rm SB}T^3}{3\chi_R}\nabla T
}.
$$

If the Rosseland mean opacity per unit mass $\kappa_R$ is used, with $\chi_R=\rho\kappa_R$, then

$$
\boxed{
\mathbf F
=-\frac{16\sigma_{\rm SB}T^3}
{3\rho\kappa_R}\nabla T
}.
$$

It answers the question: given the internal temperature gradient and the opacity, how much energy can the radiation transport per unit time per unit area?

### 7.2 Why Is There a Net Flux When the Field Is Almost Isotropic?

Taking $z$ outward, a stellar interior usually satisfies

$$
\frac{dT}{dz}<0.
$$

At a given point, outward-travelling photons come on average from deeper, hotter regions, while inward-travelling photons come on average from shallower, cooler regions. So even though the radiation field is almost isotropic, we still have

$$
I_{\nu,\rm outward}>I_{\nu,\rm inward}.
$$

This tiny first-order directional asymmetry produces the net outward flux. The perfectly isotropic part contains a large energy density but cancels exactly between opposite directions.

### 7.3 Obtaining the First-Order Intensity from the Transfer Equation

In a plane-parallel medium, $dz=\mu ds$. The transfer equation is

$$
\mu\frac{\partial I_\nu}{\partial z}
=-\chi_\nu(I_\nu-S_\nu).
$$

Rearranged,

$$
I_\nu
=S_\nu
-\frac{\mu}{\chi_\nu}
\frac{\partial I_\nu}{\partial z}.
$$

Deep inside, the radiation is close to LTE, and the zeroth-order approximation is

$$
I_\nu^{(0)}\simeq S_\nu^{(0)}\simeq B_\nu(T).
$$

The derivative term is already first-order small, so the zeroth-order result may be used inside it:

$$
\boxed{
I_\nu^{(1)}(z,\mu)
\simeq
B_\nu(T)
-\frac{\mu}{\chi_\nu}
\frac{\partial B_\nu}{\partial z}
}
\qquad\text{[RL (1.106)]}.
$$

If $dB_\nu/dz<0$, the correction is positive in the outward direction $\mu>0$ and negative in the inward direction $\mu<0$, exactly matching "outward photons come from hotter material".

### 7.4 The Monochromatic Diffusion Flux

For a plane-parallel, azimuthally symmetric field,

$$
F_\nu
=2\pi\int_{-1}^{1}I_\nu\mu d\mu.
$$

Substituting the first-order intensity:

$$
F_\nu
=2\pi\int_{-1}^{1}
\left[
B_\nu
-\frac{\mu}{\chi_\nu}
\frac{\partial B_\nu}{\partial z}
\right]\mu d\mu.
$$

The isotropic term contains $\int_{-1}^{1}\mu d\mu=0$ and does not contribute to the flux; the gradient term uses

$$
\int_{-1}^{1}\mu^2d\mu=\frac{2}{3},
$$

giving

$$
\boxed{
F_\nu
=-\frac{4\pi}{3\chi_\nu}
\frac{\partial B_\nu}{\partial z}
}
\qquad\text{[RL (1.108)]}.
$$

So when there is no temperature gradient the net flux vanishes even if intense blackbody radiation is present inside; and the larger the opacity, the shorter the mean free path and the less efficiently that frequency transports energy.

### 7.5 Why Is the Rosseland Mean Controlled by Transparent Windows?

Using

$$
\frac{\partial B_\nu}{\partial z}
=\frac{\partial B_\nu}{\partial T}
\frac{\partial T}{\partial z},
$$

the total flux is

$$
F
=-\frac{4\pi}{3}\frac{\partial T}{\partial z}
\int_0^\infty
\frac{1}{\chi_\nu}
\frac{\partial B_\nu}{\partial T}d\nu.
$$

Define

$$
\boxed{
\frac{1}{\chi_R}
=
\frac{
\displaystyle\int_0^\infty
\chi_\nu^{-1}
\frac{\partial B_\nu}{\partial T}d\nu
}{
\displaystyle\int_0^\infty
\frac{\partial B_\nu}{\partial T}d\nu
}
}
\qquad\text{[RL (1.110)]}.
$$

What is averaged here is $1/\chi_\nu$, so frequencies with low opacity carry the greater weight. The radiative energy is transported as if through many parallel channels, and most of the flow passes through the most transparent frequency windows rather than the most blocked spectral regions.

Using

$$
\int_0^\infty B_\nu d\nu
=\frac{\sigma_{\rm SB}}{\pi}T^4
$$

one finds

$$
\int_0^\infty
\frac{\partial B_\nu}{\partial T}d\nu
=\frac{4\sigma_{\rm SB}}{\pi}T^3,
$$

which yields the final diffusion flux.

### 7.6 The Energy-Density Form and the Conditions of Validity

The blackbody radiation energy density is

$$
u=aT^4,
\qquad
a=\frac{4\sigma_{\rm SB}}{c}.
$$

and the diffusion flux can be written as

$$
\boxed{
\mathbf F
=-\frac{c}{3\chi_R}\nabla u
}.
$$

so the radiative diffusion coefficient is

$$
D_{\rm rad}=\frac{c}{3\chi_R}=\frac{c\ell_R}{3}.
$$

The Rosseland approximation suits regions close to LTE, such as stellar interiors and the interiors of optically thick accretion disks. It is generally not valid in the $\tau\sim1$ region near a photosphere, in optically thin clouds, in purely scattering and unthermalized media, in strongly non-LTE line-forming regions, or wherever physical quantities change sharply within one mean free path.

## 8. Angular Moments and the Eddington Approximation

### 8.1 The Three Angular Moments

For a plane-parallel, azimuthally symmetric field, define

$$
J_\nu
\equiv
\frac12\int_{-1}^{1}I_\nu d\mu,
$$

$$
H_\nu
\equiv
\frac12\int_{-1}^{1}\mu I_\nu d\mu,
$$

$$
K_\nu
\equiv
\frac12\int_{-1}^{1}\mu^2I_\nu d\mu.
$$

where

$$
F_\nu=4\pi H_\nu,
$$

and $K_\nu$ is related to the radiation pressure along the normal direction.

### 8.2 How Is the Eddington Closure Obtained?

The Eddington approximation truncates the nearly isotropic angular distribution at first order in $\mu$:

$$
I_\nu(\tau,\mu)
\simeq a_\nu(\tau)+b_\nu(\tau)\mu.
$$

Computing the zeroth moment:

$$
J_\nu
=\frac12\int_{-1}^{1}(a_\nu+b_\nu\mu)d\mu
=a_\nu.
$$

Computing the second moment:

$$
\begin{aligned}
K_\nu
&=\frac12\int_{-1}^{1}
\mu^2(a_\nu+b_\nu\mu)d\mu\\
&=\frac{a_\nu}{2}\int_{-1}^{1}\mu^2d\mu
+\frac{b_\nu}{2}\int_{-1}^{1}\mu^3d\mu\\
&=\frac{a_\nu}{2}\frac{2}{3}+0\\
&=\frac{a_\nu}{3}.
\end{aligned}
$$

Since $J_\nu=a_\nu$, we have

$$
\boxed{
K_\nu=\frac13J_\nu
}
\qquad\text{[RL (1.114)]}.
$$

Geometrically, this is just the isotropic-distribution result

$$
\langle\mu^2\rangle
=\frac12\int_{-1}^{1}\mu^2d\mu
=\frac13.
$$

Equivalently, a three-dimensional unit direction vector satisfies $n_x^2+n_y^2+n_z^2=1$, and isotropy makes the three directional averages equal, so each is $1/3$.

### 8.3 Its Relation to $P=u/3$

Because

$$
u_\nu=\frac{4\pi}{c}J_\nu,
\qquad
P_{\nu,zz}=\frac{4\pi}{c}K_\nu,
$$

we have

$$
K_\nu=\frac13J_\nu
\quad\Longleftrightarrow\quad
P_{\nu,zz}=\frac13u_\nu.
$$

For perfectly isotropic radiation this is exact; for a real radiation field with higher-order angular structure one defines the Eddington factor $f_\nu=K_\nu/J_\nu$, and taking $f_\nu=1/3$ is an approximation. In the free-streaming limit the photons travel almost along one direction and instead $f_\nu\to1$.

## 9. The Frequency-Dependent Transfer Equation and Its Moment Equations

### 9.1 Where Does the Subscript $\nu$ Come From?

$I_\nu$ is the specific intensity per unit frequency:

$$
I_\nu
=\frac{dE}
{dt\,dA_\perp\,d\Omega\,d\nu}.
$$

Different frequencies have different $\alpha_\nu$, $\sigma_\nu$, $S_\nu$, and optical depths, so the transfer equation is first solved separately at each fixed frequency. Under the coherent-scattering assumption of this lesson, scattering does not couple different frequencies; if frequency redistribution occurs, $S_\nu$ becomes coupled to other frequencies through an integral kernel, but the $\nu$ subscript is still retained.

### 9.2 From Path Coordinate to Normal Optical Depth

The basic equation along a ray is

$$
\frac{dI_\nu}{ds}
=-\chi_\nu(I_\nu-S_\nu).
$$

Taking $z$ outward, $dz=\mu ds$, so

$$
\mu\frac{\partial I_\nu}{\partial z}
=-\chi_\nu(I_\nu-S_\nu).
$$

Define the optical depth increasing inward from the surface,

$$
d\tau_\nu=-\chi_\nu dz.
$$

Then

$$
\frac{\partial}{\partial z}
=-\chi_\nu\frac{\partial}{\partial\tau_\nu}.
$$

Cancelling $-\chi_\nu$ gives

$$
\boxed{
\mu\frac{\partial I_\nu}{\partial\tau_\nu}
=I_\nu-S_\nu
}
\qquad\text{[RL (1.116)]}.
$$

The signs depend on the coordinate convention; here $z$ increases outward while $\tau_\nu$ increases inward.

### 9.3 The Zeroth Moment Equation

The zeroth moment means that, without an extra factor of $\mu$, the transfer equation is multiplied by $1/2$ and integrated from $-1$ to $1$:

$$
\frac12\int_{-1}^{1}
\mu\frac{\partial I_\nu}{\partial\tau_\nu}d\mu
=
\frac12\int_{-1}^{1}(I_\nu-S_\nu)d\mu.
$$

The left-hand side is

$$
\frac{d}{d\tau_\nu}
\left[
\frac12\int_{-1}^{1}\mu I_\nu d\mu
\right]
=\frac{dH_\nu}{d\tau_\nu}.
$$

The first term on the right is $J_\nu$. The source function is isotropic and independent of $\mu$, so

$$
\frac12\int_{-1}^{1}S_\nu d\mu=S_\nu.
$$

Therefore

$$
\boxed{
\frac{dH_\nu}{d\tau_\nu}
=J_\nu-S_\nu
}
\qquad\text{[RL (1.117)]}.
$$

Although it is called the zeroth moment, $H_\nu$ appears on the left because the original transfer equation already carries one factor of $\mu$.

### 9.4 The First Moment Equation

First multiply the transfer equation by an extra $\mu$:

$$
\mu^2\frac{\partial I_\nu}{\partial\tau_\nu}
=\mu I_\nu-\mu S_\nu.
$$

then integrate:

$$
\frac12\int_{-1}^{1}
\mu^2\frac{\partial I_\nu}{\partial\tau_\nu}d\mu
=
\frac12\int_{-1}^{1}\mu I_\nu d\mu
-\frac{S_\nu}{2}\int_{-1}^{1}\mu d\mu.
$$

The left-hand side is $dK_\nu/d\tau_\nu$, the first term on the right is $H_\nu$, and the last term vanishes because it is the integral of an odd function, so

$$
\boxed{
\frac{dK_\nu}{d\tau_\nu}=H_\nu
}
\qquad\text{[RL (1.118)]}.
$$

### 9.5 Closing the System with the Eddington Closure

Using $K_\nu=J_\nu/3$:

$$
H_\nu
=\frac{dK_\nu}{d\tau_\nu}
=\frac13\frac{dJ_\nu}{d\tau_\nu}.
$$

Differentiating once more with respect to optical depth and using the zeroth moment equation:

$$
\boxed{
\frac13\frac{d^2J_\nu}{d\tau_\nu^2}
=J_\nu-S_\nu
}
\qquad\text{[RL (1.119a)]}.
$$

Substituting

$$
S_\nu=(1-\epsilon_\nu)J_\nu+\epsilon_\nu B_\nu
$$

gives

$$
J_\nu-S_\nu
=\epsilon_\nu(J_\nu-B_\nu),
$$

so

$$
\boxed{
\frac13\frac{d^2J_\nu}{d\tau_\nu^2}
=\epsilon_\nu(J_\nu-B_\nu)
}
\qquad\text{[RL (1.119b)]}.
$$

$B_\nu$ does not appear out of nowhere: it comes from the thermal emission coefficient $j_{\nu,\rm th}=\alpha_\nu B_\nu$ associated with true absorption, which enters the source function first and then appears explicitly in the diffusion equation once that source function is substituted.

## 10. The Two-Stream Approximation and the Surface Boundary Condition

### 10.1 Why Choose $\mu=\pm1/\sqrt{3}$?

The two-stream approximation compresses all outward and all inward directions into two representative intensities $I^+$ and $I^-$. Let the representative directions be $\mu=\pm\mu_0$ for the moment, each with weight $1/2$:

$$
J=\frac12(I^++I^-),
$$

$$
K
=\frac12\left(\mu_0^2I^++\mu_0^2I^-\right)
=\mu_0^2J.
$$

To preserve the Eddington closure $K=J/3$, we must have

$$
\mu_0^2=\frac13.
$$

Hence

$$
\boxed{
\mu=\pm\frac{1}{\sqrt{3}}
}.
$$

This corresponds to representative directions about $54.7^\circ$ from the outward normal. Real photons do not travel only along these two directions; this is a discrete approximation that preserves the low-order angular moments.

### 10.2 How Are $I^\pm$ Obtained?

The two-stream moments are

$$
J=\frac12(I^++I^-),
$$

$$
H=\frac{1}{2\sqrt{3}}(I^+-I^-).
$$

so

$$
I^++I^-=2J,
\qquad
I^+-I^-=2\sqrt{3}H.
$$

Solving the pair gives

$$
I^+=J+\sqrt{3}H,
\qquad
I^-=J-\sqrt{3}H.
$$

and because

$$
H=\frac13\frac{dJ}{d\tau},
$$

we finally obtain

$$
\boxed{
I^+
=J+\frac{1}{\sqrt{3}}\frac{dJ}{d\tau}
},
$$

$$
\boxed{
I^-
=J-\frac{1}{\sqrt{3}}\frac{dJ}{d\tau}
}.
$$

The same result follows directly from $I=a+b\mu$, $a=J$, and $b=3H$ evaluated at $\mu=\pm1/\sqrt{3}$.

### 10.3 The Boundary Condition at a Semi-Infinite Surface

At the surface $\tau=0$ no radiation enters the medium from outside, so the inward intensity vanishes:

$$
I^-(0)=0.
$$

Substituting the two-stream expression:

$$
J(0)
-\frac{1}{\sqrt{3}}
\left.\frac{dJ}{d\tau}\right|_0
=0.
$$

Therefore

$$
\boxed{
\frac{1}{\sqrt{3}}
\left.\frac{dJ}{d\tau}\right|_0
=J(0)
}.
$$

This converts the directional statement "no radiation is incident at the surface" into a boundary condition on $J$ and its derivative.

## 11. Problem 1.10: A Semi-Infinite Isothermal Scattering Medium

### 11.1 Setting Up the Problem

The medium occupies

$$
0\leq\tau_\nu<\infty.
$$

It is homogeneous and isothermal, so at a fixed frequency

$$
B_\nu=\text{constant},
\qquad
\epsilon_\nu=\text{constant}.
$$

The radiation thermalizes deep inside:

$$
J_\nu(\tau_\nu\to\infty)\to B_\nu.
$$

No radiation is incident at the surface:

$$
I_\nu^-(0)=0.
$$

### 11.2 Solving for the Mean Intensity

Start from the diffusion equation:

$$
\frac13
\frac{d^2J_\nu}{d\tau_\nu^2}
=\epsilon_\nu(J_\nu-B_\nu).
$$

Define the departure from thermal equilibrium,

$$
y_\nu(\tau_\nu)
\equiv J_\nu(\tau_\nu)-B_\nu.
$$

Because the isothermal assumption makes $B_\nu$ independent of depth,

$$
\frac{d^2y_\nu}{d\tau_\nu^2}
=3\epsilon_\nu y_\nu.
$$

Setting

$$
q_\nu=\sqrt{3\epsilon_\nu},
$$

the general solution is

$$
y_\nu
=A_\nu e^{-q_\nu\tau_\nu}
+C_\nu e^{q_\nu\tau_\nu}.
$$

The solution cannot diverge at infinite depth and must approach $B_\nu$, so $C_\nu=0$:

$$
J_\nu
=B_\nu+A_\nu e^{-q_\nu\tau_\nu}.
$$

The surface boundary condition is

$$
J_\nu(0)
=\frac{1}{\sqrt{3}}
\left.\frac{dJ_\nu}{d\tau_\nu}\right|_0.
$$

with

$$
J_\nu(0)=B_\nu+A_\nu,
$$

$$
\left.\frac{dJ_\nu}{d\tau_\nu}\right|_0
=-q_\nu A_\nu.
$$

so

$$
B_\nu+A_\nu
=-\frac{q_\nu}{\sqrt{3}}A_\nu
=-\sqrt{\epsilon_\nu}A_\nu.
$$

which gives

$$
A_\nu
=-\frac{B_\nu}{1+\sqrt{\epsilon_\nu}}.
$$

Therefore

$$
\boxed{
J_\nu(\tau_\nu)
=B_\nu
\left[
1-
\frac{
e^{-\sqrt{3\epsilon_\nu}\tau_\nu}
}{
1+\sqrt{\epsilon_\nu}
}
\right]
}.
$$

The structure of this solution is

$$
\text{local thermal equilibrium value}
-
\text{exponential deficit caused by photon escape at the surface}.
$$

$B_\nu$ is the constant particular solution of the differential equation; the exponential term describes how the surface perturbs the thermal-equilibrium radiation field of the deep interior.

### 11.3 Surface Mean Intensity and Source Function

Setting $\tau_\nu=0$:

$$
\boxed{
J_\nu(0)
=B_\nu
\frac{\sqrt{\epsilon_\nu}}
{1+\sqrt{\epsilon_\nu}}
}.
$$

The source function is

$$
S_\nu
=(1-\epsilon_\nu)J_\nu+\epsilon_\nu B_\nu.
$$

Substituting $J_\nu(\tau_\nu)$ and using

$$
\frac{1-\epsilon_\nu}{1+\sqrt{\epsilon_\nu}}
=1-\sqrt{\epsilon_\nu},
$$

we obtain

$$
\boxed{
S_\nu(\tau_\nu)
=B_\nu
\left[
1-
(1-\sqrt{\epsilon_\nu})
e^{-\sqrt{3\epsilon_\nu}\tau_\nu}
\right]
}.
$$

At the surface,

$$
\boxed{
S_\nu(0)=\sqrt{\epsilon_\nu}B_\nu
}.
$$

This is the square-root-epsilon law. For small $\epsilon_\nu$, the surface source function can lie far below the local Planck function.

### 11.4 The Emergent Flux

From

$$
H_\nu
=\frac13\frac{dJ_\nu}{d\tau_\nu},
\qquad
F_\nu=4\pi H_\nu,
$$

we have

$$
\left.
\frac{dJ_\nu}{d\tau_\nu}
\right|_0
=B_\nu
\frac{\sqrt{3\epsilon_\nu}}
{1+\sqrt{\epsilon_\nu}}.
$$

Therefore

$$
\boxed{
F_\nu(0)
=
\frac{4\pi B_\nu}{\sqrt{3}}
\frac{\sqrt{\epsilon_\nu}}
{1+\sqrt{\epsilon_\nu}}
}.
$$

The small-$\epsilon_\nu$ limit is

$$
\boxed{
F_\nu(0)
\simeq
\frac{4\pi}{\sqrt{3}}B_\nu\sqrt{\epsilon_\nu}
\qquad(\epsilon_\nu\ll1)
}.
$$

This has the same $\sqrt{\epsilon_\nu}$ scaling as RL (1.103).

In the scattering-free limit $\epsilon_\nu=1$, the two-stream approximation gives

$$
F_\nu(0)=\frac{2\pi}{\sqrt{3}}B_\nu,
$$

about $15\%$ higher than the exact blackbody surface flux $\pi B_\nu$. This is the error of the two-stream angular discretization, not an algebraic mistake.

### 11.5 The Effective Optical Depth

The solution shows that

$$
B_\nu-J_\nu
=\frac{B_\nu}{1+\sqrt{\epsilon_\nu}}
e^{-\sqrt{3\epsilon_\nu}\tau_\nu}.
$$

It is therefore natural to define

$$
\boxed{
\tau_{\nu,*}
=\sqrt{3\epsilon_\nu}\,\tau_\nu
}.
$$

so that the departure from thermal equilibrium decays as $e^{-\tau_{\nu,*}}$. Once $\tau_{\nu,*}\gtrsim1$, $J_\nu$ begins to approach $B_\nu$ exponentially.

Moreover, since

$$
\epsilon_\nu
=\frac{\tau_{\nu,a}}
{\tau_{\nu,a}+\tau_{\nu,s}},
\qquad
\tau_\nu=\tau_{\nu,a}+\tau_{\nu,s},
$$

we have

$$
\boxed{
\tau_{\nu,*}
=
\sqrt{
3\tau_{\nu,a}
(\tau_{\nu,a}+\tau_{\nu,s})
}
}.
$$

This proves part (b) of Problem 1.10.

### 11.6 A Caution About the Pure-Scattering Limit

As $\epsilon_\nu\to0$, the solution tends to $J_\nu\to0$ at any fixed finite depth, consistent with "a purely scattering medium with no external illumination cannot produce photons". But once $\epsilon_\nu=0$ is taken exactly, the thermalization depth becomes infinite and the deep boundary condition $J_\nu\to B_\nu$ can no longer be established by matter-radiation coupling. Hence $\epsilon\to0$ is a non-uniform limit: one cannot simultaneously assume purely coherent scattering and still force a finite depth to act as an LTE heat bath.

## 12. English assignment-ready solution

### 12.1 Problem 1.10(a): mean intensity and emergent flux

Let

$$
\chi_\nu=\alpha_\nu+\sigma_\nu,
\qquad
\epsilon_\nu=\frac{\alpha_\nu}{\chi_\nu},
$$

and let $\tau_\nu$ denote the total optical depth measured inward from the surface. For coherent isotropic scattering, the source function is

$$
S_\nu=(1-\epsilon_\nu)J_\nu+\epsilon_\nu B_\nu.
$$

The Eddington moment equations give

$$
\frac{1}{3}\frac{d^2J_\nu}{d\tau_\nu^2}
=J_\nu-S_\nu
=\epsilon_\nu(J_\nu-B_\nu).
$$

The atmosphere is isothermal, so $B_\nu$ and $\epsilon_\nu$ are independent of depth. The general solution is

$$
J_\nu-B_\nu
=A_\nu e^{-\sqrt{3\epsilon_\nu}\tau_\nu}
+C_\nu e^{+\sqrt{3\epsilon_\nu}\tau_\nu}.
$$

The requirement that the radiation field remain finite and approach thermal equilibrium as $\tau_\nu\to\infty$ gives $C_\nu=0$. In the two-stream approximation,

$$
I_\nu^-
=J_\nu-\frac{1}{\sqrt{3}}
\frac{dJ_\nu}{d\tau_\nu}.
$$

There is no incident radiation at the surface, so $I_\nu^-(0)=0$, or

$$
J_\nu(0)
=\frac{1}{\sqrt{3}}
\left.\frac{dJ_\nu}{d\tau_\nu}\right|_0.
$$

Applying this boundary condition gives

$$
A_\nu=-\frac{B_\nu}{1+\sqrt{\epsilon_\nu}}.
$$

Hence

$$
\boxed{
J_\nu(\tau_\nu)
=B_\nu
\left[
1-
\frac{e^{-\sqrt{3\epsilon_\nu}\tau_\nu}}
{1+\sqrt{\epsilon_\nu}}
\right]
}.
$$

Using

$$
H_\nu=\frac{1}{3}\frac{dJ_\nu}{d\tau_\nu},
\qquad
F_\nu=4\pi H_\nu,
$$

the emergent flux is

$$
\boxed{
F_\nu(0)
=\frac{4\pi B_\nu}{\sqrt{3}}
\frac{\sqrt{\epsilon_\nu}}
{1+\sqrt{\epsilon_\nu}}
}.
$$

For $\epsilon_\nu\ll1$,

$$
F_\nu(0)
\simeq
\frac{4\pi}{\sqrt{3}}
B_\nu\sqrt{\epsilon_\nu}.
$$

The two-stream result differs from the exact blackbody normalization by a factor of order unity, but it correctly reproduces the $\sqrt{\epsilon_\nu}$ scaling.

### 12.2 Problem 1.10(b): effective optical depth

The departure from the Planck function is

$$
B_\nu-J_\nu
=
\frac{B_\nu}{1+\sqrt{\epsilon_\nu}}
e^{-\sqrt{3\epsilon_\nu}\tau_\nu}.
$$

It is therefore natural to define

$$
\tau_{\nu,*}
\equiv
\sqrt{3\epsilon_\nu}\,\tau_\nu.
$$

Since

$$
\epsilon_\nu
=\frac{\tau_{\nu,a}}
{\tau_{\nu,a}+\tau_{\nu,s}},
\qquad
\tau_\nu=\tau_{\nu,a}+\tau_{\nu,s},
$$

we obtain

$$
\boxed{
\tau_{\nu,*}
=
\sqrt{
3\tau_{\nu,a}
(\tau_{\nu,a}+\tau_{\nu,s})
}
}.
$$

Thus $J_\nu$ approaches $B_\nu$ exponentially when $\tau_{\nu,*}$ becomes of order unity or larger. This confirms that thermalization is controlled by the effective optical depth rather than by the total extinction optical depth alone.

### 12.3 Conceptual answer: should a scattering-dominated line be visible?

Yes, under the assumptions of the problem, a strong scattering-dominated transition is expected to produce a spectral feature even though the atmosphere is isothermal. At the line frequency, most extinction events are scatterings, so

$$
\epsilon_{\nu,\rm line}\ll1.
$$

Photon escape lowers the surface mean intensity below the Planck function. Since the line source function is dominated by the scattering term,

$$
S_\nu=(1-\epsilon_\nu)J_\nu+\epsilon_\nu B_\nu,
$$

the two-stream solution gives

$$
S_\nu(0)=\sqrt{\epsilon_\nu}B_\nu.
$$

If the neighboring continuum is more strongly thermalized, its source function remains close to $B_\nu$. The line center is therefore fainter than the adjacent continuum and appears in absorption. Physically, scattering can trap and redirect photons, but it cannot by itself replace the photons lost through the surface or establish a Planck spectrum. True absorption and thermal re-emission are required for thermalization.

A random-walk argument gives the same result without solving the transfer equation. A photon at total optical depth $\tau_\nu$ requires approximately $\tau_\nu^2$ interactions to escape. Since the probability of true absorption in each interaction is $\epsilon_\nu$, the expected number of destructive absorptions before escape is approximately $\epsilon_\nu\tau_\nu^2$. Thermalization therefore requires

$$
\epsilon_\nu\tau_\nu^2\gtrsim1,
$$

or

$$
\tau_\nu\gtrsim\epsilon_\nu^{-1/2}.
$$

Thus a large total optical depth does not by itself guarantee blackbody emission when the opacity is dominated by scattering.

## 13. Review Checklist, Limiting Checks, and Common Confusions

### 13.1 Derivations You Should Be Able to Reproduce

1. From the microscopic cross section to the macroscopic coefficient:

   $$
   \chi=n\sigma_{\rm cross}=\rho\kappa.
   $$

2. From $dP=d\tau$ to the survival probability:

   $$
   P_0=e^{-\tau}.
   $$

3. From the exponential free-path distribution,

   $$
   \ell=1/\chi.
   $$

4. From the random walk,

   $$
   R_{\rm rms}\sim\sqrt{N}\ell,
   \qquad
   N_{\rm esc}\sim\tau^2.
   $$

5. From $N_{\rm dest}\sim1/\epsilon$,

   $$
   \ell_*=\ell/\sqrt{\epsilon},
   \qquad
   \tau_*\sim\sqrt{\epsilon}\tau.
   $$

6. From the angular integrals of $I=a+b\mu$,

   $$
   K=J/3.
   $$

7. From the zeroth and first moments of the transfer equation,

   $$
   \frac{dH}{d\tau}=J-S,
   \qquad
   \frac{dK}{d\tau}=H.
   $$

8. From the two-stream moment relations,

   $$
   \mu=\pm1/\sqrt{3},
   \qquad
   I^\pm=J\pm\frac{1}{\sqrt{3}}\frac{dJ}{d\tau}.
   $$

9. A complete derivation of $J_\nu(\tau_\nu)$ and $F_\nu(0)$ for Problem 1.10.

### 13.2 Core Results Worth Memorizing

$$
\boxed{
S_\nu=(1-\epsilon_\nu)J_\nu+\epsilon_\nu B_\nu
}
$$

$$
\boxed{
\epsilon_\nu
=\frac{\alpha_\nu}{\alpha_\nu+\sigma_\nu}
}
$$

$$
\boxed{
\ell_{\nu,*}
=\frac{1}{\sqrt{\alpha_\nu(\alpha_\nu+\sigma_\nu)}}
}
$$

$$
\boxed{
F_\nu
=-\frac{4\pi}{3\chi_\nu}
\frac{\partial B_\nu}{\partial z}
}
$$

$$
\boxed{
K_\nu=J_\nu/3
}
$$

$$
\boxed{
S_\nu(0)=\sqrt{\epsilon_\nu}B_\nu
}.
$$

### 13.3 Limiting Checks

- $\epsilon_\nu\to1$: true absorption dominates, the thermalization depth is about one ordinary optical depth, and the surface source function approaches $B_\nu$.
- $\epsilon_\nu\to0$: a purely scattering medium without external illumination has no internal source of thermal photons, the emergent surface radiation tends to zero, and the thermalization depth tends to infinity.
- $\tau\ll1$: $1-e^{-\tau}\simeq\tau$, and the interaction probability is small.
- $\tau\gg1$: escaping by random walk requires $N\sim\tau^2$ interactions.
- $dT/dz=0$: the net Rosseland diffusion flux deep inside vanishes, even when the internal radiation energy density is large.
- small $\chi_\nu$: the mean free path at that frequency is longer and energy is transported more efficiently, which is why transparent windows dominate the Rosseland mean.

### 13.4 The Easiest Points to Confuse

1. **Microscopic $\sigma_{\rm cross}$ versus the macroscopic $\sigma_\nu$ of RL:** the former has the dimension of area, the latter of inverse length.
2. **Optically thick versus thermalized:** $\tau\gg1$ only means many interactions; only $\tau_*\gg1$ means enough true absorptions.
3. **Isotropy versus thermalization:** repeated scattering can make the angular distribution nearly isotropic without making $J_\nu=B_\nu$.
4. **A scattering absorption line versus a temperature-gradient absorption line:** this problem is isothermal, and the line feature comes from a surface source function below $B_\nu$, not from cooler material higher up.
5. **$L_\nu$ versus total luminosity:** a reduced luminosity per unit frequency at line center does not mean that the frequency-integrated total luminosity drops in the same proportion.
6. **The status of equation (1.103):** it gives the order of magnitude and the $\sqrt{\epsilon}$ scaling, not an exact coefficient.
7. **Where $B_\nu$ comes from:** it comes from the thermal emission term $j_{\nu,\rm th}=\alpha_\nu B_\nu$, not from a boundary constant added abruptly when solving the equation.
8. **Why the zeroth moment yields $dH/d\tau$:** the left-hand side of the original transfer equation already contains one factor of $\mu$.
9. **Where $1/\sqrt{3}$ comes from:** the two-stream directions are chosen so that $K/J=\langle\mu^2\rangle=1/3$.
10. **Rosseland versus Eddington:** Rosseland requires near-LTE conditions deep inside and gives the energy flux driven by a temperature gradient; Eddington uses only the moment closure and can handle surface layers where $J_\nu\neq B_\nu$.

### 13.5 The Shortest Physical Summary

Scattering can lengthen a photon's path and randomize its direction, but it cannot by itself establish a blackbody radiation field. True absorption and thermal emission are what let the radiation exchange energy with the local matter and thermalize. A small $\epsilon_\nu$ increases the thermalization depth and lowers the surface source function; a strongly scattering line therefore appears in absorption relative to the thermal continuum even in an isothermal, semi-infinite medium.

## 14. References and Citations

1. Rybicki, G. B., & Lightman, A. P. (2004 reprint), *Radiative Processes in Astrophysics*, §§1.7–1.8 and Problem 1.10. Project textbook file: `Rybicki and Lightman - 2004 - Radiative processes in astrophysics.pdf`.
2. The random walk, the Rosseland approximation, the Eddington approximation, and the two-stream boundary condition in these notes all follow the notation of RL Chapter 1; to avoid confusion with the microscopic cross section, the text explicitly distinguishes $\sigma_{\rm cross}$ from the macroscopic $\sigma_\nu$ of RL.
3. Equation (1.103) is only an order-of-magnitude estimate; the numerical coefficients in Problem 1.10 belong to the Eddington plus two-stream approximation and should likewise not be mistaken for an exact angular solution of the transfer equation.
