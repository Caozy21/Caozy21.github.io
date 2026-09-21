---
title: 'AST1440: Thermal Radiation and Observations — Lecture Notes and Problems 1.3, 1.5, and 1.6'
description: >-
  AST1440 notes on thermal equilibrium, the Planck spectrum, radiation
  thermodynamics, brightness temperature, and observational sensitivity, with
  detailed worked problems.
date: '2026-09-17'
tags:
  - AST1440
  - Thermal radiation
  - Observations
  - Exercises
order: 3
sourceHash: 285e6163dfdd88956badeff5c279fccc2750b816fa98943795ef0ec46107b203
translation: AI-assisted English translation
---

# AST1440: Thermal Radiation and Observations — Lecture Notes and Problems 1.3, 1.5, and 1.6

> Course: AST1440 — Radiation, September 17, 2026: Thermal Emission.  
> Textbook: Rybicki & Lightman, *Radiative Processes in Astrophysics* (RL), §1.5, printed pp. 15–27; Problems 1.3, 1.5, and 1.6, printed pp. 46–47.  
> Compiled: September 18, 2026.  
> These notes organize the discussion according to the logical dependencies of the physical concepts and calculations. Follow-up questions about definitions, integrals, notation, assumptions, and observational interpretation are integrated into the relevant sections. The original Chinese derivations are translated here alongside the original English solutions.

## Contents

1. [What This Lecture Covered and How to Catch Up](#1-what-this-lecture-covered-and-how-to-catch-up)
2. [Consistent Notation and Basic Observables](#2-consistent-notation-and-basic-observables)
3. [Thermal Equilibrium, LTE, Thermal Radiation, and Blackbodies](#3-thermal-equilibrium-lte-thermal-radiation-and-blackbodies)
4. [Blackbody Energy Density and Flux: Why 4π and π Appear](#4-blackbody-energy-density-and-flux-why-4π-and-π-appear)
5. [Blackbody Thermodynamics and Problem 1.6: Energy, Entropy, and Adiabatic Expansion](#5-blackbody-thermodynamics-and-problem-16-energy-entropy-and-adiabatic-expansion)
6. [Deriving the Planck Spectrum from Mode Counting](#6-deriving-the-planck-spectrum-from-mode-counting)
7. [Properties of the Planck Spectrum, the Rayleigh–Jeans Criterion, and a Wavelength Guide](#7-properties-of-the-planck-spectrum-the-rayleighjeans-criterion-and-a-wavelength-guide)
8. [Brightness, Color, and Effective Temperatures](#8-brightness-color-and-effective-temperatures)
9. [Problem 1.3: An Optically Thin Spherical Cloud, Resolved and Unresolved](#9-problem-13-an-optically-thin-spherical-cloud-resolved-and-unresolved)
10. [Classroom Extensions of 1.3: Background, Diffraction, Signal-to-Noise, and Integration Time](#10-classroom-extensions-of-13-background-diffraction-signal-to-noise-and-integration-time)
11. [Problem 1.5: Brightness Temperature of a Supernova Remnant](#11-problem-15-brightness-temperature-of-a-supernova-remnant)
12. [Classroom Extensions of 1.5: Antenna Temperature, Gain, System Temperature, and SEFD](#12-classroom-extensions-of-15-antenna-temperature-gain-system-temperature-and-sefd)
13. [Review Checklist and Preparation for the Next Lecture](#13-review-checklist-and-preparation-for-the-next-lecture)
14. [Resources and References](#14-resources-and-references)

---

## 1. What This Lecture Covered and How to Catch Up

The topic of the September 17, 2026 lecture was **Thermal Emission**. The initial search cache of the course website displayed the 2025 schedule; the subsequently checked 2026 webpage explicitly listed the material below. These notes follow the 2026 version.

| Item | Assigned or actual lecture material | Catch-up priority |
|---|---|---|
| Reading | RL §1.5; detailed derivations may be skimmed | Learn the concepts and main equations first |
| Problem 1.3 | Continued from the previous lecture; resolved and unresolved sources | Must attempt independently |
| Extensions of 1.3 | Signal-to-noise ratio with background light, aperture selection, and the role of telescope diameter | Lecture emphasis |
| Problem 1.5 | Deriving brightness temperature from flux density and angular size | Must attempt independently |
| Extensions of 1.5 | Radio brightness temperature, system temperature, gain, and SEFD | Lecture emphasis |
| Problem 1.6 | Blackbody radiation entropy; not discussed in detail in class, with supplementary notes on the webpage | Complete last |

The course asks students to read and attempt the exercises before discussing the problems and astronomical applications in class. A suggested catch-up sequence is:

1. Read Sections 2–8 to establish the concepts and equations of §1.5.
2. Attempt Problems 1.3 and 1.5 independently, then compare with Sections 9 and 11.
3. Read Sections 10 and 12 for the observational extensions actually emphasized in class.
4. Complete Problem 1.6 in Section 5 and compare adiabatic cooling in a gas and in radiation.

**Absorption and emission lines** are scheduled for the next lecture, September 21, 2026: read RL §1.6, attempt Problems 1.8 and 1.9, and do 1.7 if time permits. Also consider the line profile produced by a cold, radially outflowing stellar wind. This is preparation for the next lecture, not material already covered in this one.

Course schedule source: [AST1440: September 17, 2026 lecture notes](https://www.astro.utoronto.ca/~mhvk/AST1440/#orgeae1774).

## 2. Consistent Notation and Basic Observables

### 2.1 Notation Used Here

Some symbols in the discussion denote different physical quantities in different fields. The conventions below avoid this ambiguity.

| Symbol | Meaning | Typical units or comments |
|---|---|---|
| $\nu$ | Frequency | Hz; the Greek letter nu, not velocity $v$ |
| $I_\nu$ | Specific intensity | $\mathrm{erg\,s^{-1}\,cm^{-2}\,Hz^{-1}\,sr^{-1}}$ |
| $J_\nu$ | Mean intensity | $J_\nu=(4\pi)^{-1}\int I_\nu\,d\Omega$ |
| $f_\nu$ | Source flux density at the observer | $\mathrm{erg\,s^{-1}\,cm^{-2}\,Hz^{-1}}$ or Jy |
| $F_{\nu,\rm surface}$ | Monochromatic flux at the source surface | Distinct from $f_\nu$ at Earth |
| $S_\nu$ | Source function | $j_\nu/\alpha_\nu$; not the flux-density symbol in these notes |
| $B_\nu(T)$ | Planck function | Same units as $I_\nu$ |
| $j_\nu$ | Energy emission coefficient per unit solid angle (emissivity) | $\mathrm{erg\,s^{-1}\,cm^{-3}\,Hz^{-1}\,sr^{-1}}$ |
| $\alpha_\nu$ | True absorption coefficient | $\mathrm{cm^{-1}}$; LTE expressions use net absorption including the stimulated-emission correction |
| $\sigma_\nu$ | Scattering coefficient | $\mathrm{cm^{-1}}$; not a single-particle cross section here |
| $\tau_\nu$ | Optical depth | Dimensionless; its positive direction must be specified |
| $u_\nu,\ u$ | Spectral energy density and frequency-integrated energy density | $u=\int u_\nu\,d\nu$ |
| $U$ | Total radiation energy | $U=uV$ |
| $S_{\rm ent},\ s_{\rm ent}$ | Entropy and entropy density | $s_{\rm ent}=S_{\rm ent}/V$ |
| $a_{\rm rad}$ | Radiation constant | $u=a_{\rm rad}T^4$ |
| $a_{\rm cos}$ | Cosmological scale factor | Unrelated to $a_{\rm rad}$ |
| $\sigma_{\rm SB}$ | Stefan–Boltzmann constant | Unrelated to the scattering coefficient $\sigma_\nu$ |
| $A_{\rm eff}$ | Effective collecting area of the telescope | Geometric area multiplied by efficiency |
| $T_A,\ T_{\rm sys}$ | Antenna temperature and system temperature | Equivalent signal and noise units, not the physical temperature of the antenna |

Radio astronomy often uses $S_\nu$ for flux density, whereas RL uses it for the source function. All source flux densities in these notes are denoted by $f_\nu$.

### 2.2 Specific Intensity, Flux Density, and Photon Counts

Specific intensity is defined by

$$
dE=I_\nu\cos\theta\,dA\,dt\,d\nu\,d\Omega.
$$

Here $\theta$ is the angle between the propagation direction and the normal to the area element. Specific intensity retains directional information, whereas flux integrates over directions:

$$
F_\nu=\int I_\nu\cos\theta\,d\Omega.
$$

For a small source on the sky directly in front of the instrument, $\cos\theta\simeq1$, so

$$
f_\nu\simeq\int_{\rm src}I_\nu\,d\Omega.
$$

If the source is approximately uniform over its angular area:

$$
\boxed{f_\nu\simeq I_\nu\Omega_{\rm src}}.
$$

Specific intensity carries $\mathrm{sr^{-1}}$, whereas flux density does not. They cannot be used interchangeably.

Converting energy flux to photon counts within a narrow frequency band gives

$$
\phi_\nu=\frac{f_\nu}{h\nu},\qquad
\mathcal I_\nu=\frac{I_\nu}{h\nu}.
$$

Here $\phi_\nu$ is the photon flux density and $\mathcal I_\nu$ is the photon specific intensity. The Poisson counting analysis below uses these photon quantities. A broad band requires integration, for example

$$
\dot N_{\rm src}=
\int\frac{f_\nu A_{\rm eff}(\nu)}{h\nu}\,d\nu.
$$

### 2.3 What Is a Jy?

Jy stands for **jansky**, a unit of flux density named after radio astronomy pioneer Karl Jansky:

$$
\boxed{
1\ \mathrm{Jy}
=10^{-26}\ \mathrm{W\,m^{-2}\,Hz^{-1}}
=10^{-23}\ \mathrm{erg\,s^{-1}\,cm^{-2}\,Hz^{-1}}
}.
$$

The factor $\mathrm{Hz^{-1}}$ indicates flux per unit frequency, not the total flux over a band. If $f_\nu$ is approximately constant across the band:

$$
f_{\rm band}\simeq f_\nu\Delta\nu.
$$

For example, a source of $1\ \mathrm{Jy}$ observed over a bandwidth of $100\ \mathrm{MHz}=10^8\ \mathrm{Hz}$ has flux

$$
10^{-26}\times10^8=10^{-18}\ \mathrm{W\,m^{-2}}.
$$

Common multiples are

$$
1\ \mathrm{mJy}=10^{-3}\ \mathrm{Jy},\quad
1\ \mathrm{\mu Jy}=10^{-6}\ \mathrm{Jy},\quad
1\ \mathrm{nJy}=10^{-9}\ \mathrm{Jy}.
$$

Jy measures source flux density; Jy/sr measures surface brightness. Jy/beam in an observational image also includes a beam convention and cannot be treated directly as Jy/sr.

## 3. Thermal Equilibrium, LTE, Thermal Radiation, and Blackbodies

### 3.1 Equilibrium of Matter and Equilibrium of Radiation Refer to Different Things

| Term | English terminology | What is being described |
|---|---|---|
| Thermal equilibrium | thermal equilibrium | Temperature, heat exchange, and equilibrium distributions; the precise meaning depends on context |
| Thermodynamic equilibrium | thermodynamic equilibrium | Equilibrium of all relevant degrees of freedom of a system |
| Local thermodynamic equilibrium | local thermodynamic equilibrium，LTE | Equilibrium statistical distributions of local matter |
| Non-LTE | non-LTE / non-local thermodynamic equilibrium，NLTE | Local matter cannot be described by LTE populations |
| Radiation in thermal equilibrium | radiation in thermal equilibrium | The equilibrium photon distribution |
| Radiative equilibrium | radiative equilibrium | Zero net radiative heating |

A temperature that does not change with time does not imply full thermodynamic equilibrium. A system that is continually heated and continually cooled can also maintain a steady temperature.

For ordinary nondegenerate, nonrelativistic matter, the relevant equilibrium distributions include:

1. Particle velocities follow the Maxwell–Boltzmann distribution:

   $$
   f(\boldsymbol v)\propto\exp\left(-\frac{mv^2}{2kT}\right).
   $$

2. Populations of different energy levels within the same ionization stage follow the Boltzmann distribution:

   $$
   \frac{n_u}{n_l}
   =\frac{g_u}{g_l}
   \exp\left[-\frac{E_u-E_l}{kT}\right].
   $$

3. Adjacent ionization stages satisfy the Saha ionization equation, with ionization fractions determined by temperature, electron density, and related quantities.

An approximately Maxwellian electron velocity distribution alone does not establish LTE for all of the matter; excitation and ionization populations may still depart from equilibrium.

### 3.2 Why Is LTE Local?

LTE approximates matter using equilibrium statistical laws evaluated at the local $T(\boldsymbol r)$, density, and composition. Different small regions can have different temperatures, and energy can flow through the system.

Sufficiently rapid collisions and a local relaxation time shorter than the timescale on which macroscopic conditions change are common conditions for LTE. For specific level populations, collisional and radiative transition rates must also be compared.

LTE does not require the local radiation already to satisfy

$$
I_\nu(\boldsymbol r,\boldsymbol n)=B_\nu[T(\boldsymbol r)].
$$

Photons may arrive from hotter layers below or from an external source, or escape rapidly, while collisions in the matter still maintain approximately equilibrium populations.

Non-LTE means that the LTE approximation fails, not that the matter reaches equilibrium at some other distant location.

### 3.3 Blackbody Radiation Is Not the Same as Radiative Equilibrium

In an isothermal closed cavity, after the radiation and walls have fully equilibrated:

$$
I_\nu=B_\nu(T),\qquad
\langle n_\nu\rangle=\frac{1}{e^{h\nu/kT}-1}.
$$

Radiation is isotropic in the cavity rest frame. The net flux inside is zero, but photons still propagate, and absorption and emission continue.

The blackbody spectrum depends only on temperature and frequency. If two equilibrium cavities at the same temperature had different intensities at a given frequency, connecting them through a window that transmits only that frequency would produce a directed energy flow between equal-temperature systems, contradicting equilibrium. The equilibrium spectrum therefore cannot depend on the cavity material or shape.

A blackbody radiation distribution does not imply that matter subsequently introduced into it reaches equilibrium instantly. For example, a small amount of colder matter placed inside a large cavity at temperature $T_{\rm rad}$ can warm up while the surrounding radiation remains approximately blackbody. Only a statement that matter and radiation have jointly reached full equilibrium guarantees compatible equilibrium states and a common temperature.

**Radiative equilibrium**, by contrast, requires only that the total net radiative heating vanish. In an absorption–emission model neglecting energy exchange through inelastic scattering:

$$
\boxed{
4\pi\int_0^\infty(\alpha_\nu J_\nu-j_\nu)\,d\nu=0
}.
$$

This does not require equilibrium at each frequency separately and does not guarantee LTE. Matter can absorb high-frequency photons and release the same energy in lower-frequency photons.

If LTE is additionally assumed, this becomes

$$
\int_0^\infty\alpha_\nu[J_\nu-B_\nu(T)]\,d\nu=0.
$$

A vanishing integral still does not imply $J_\nu=B_\nu$ at every frequency; net absorption and net emission at different frequencies can cancel.

### 3.4 Kirchhoff's Law: Why Does Thermal Emission Have $S_\nu=B_\nu$?

In the thermal-equilibrium matter model of §1.5, a small parcel placed in a blackbody cavity at the same temperature cannot alter the equilibrium radiation. Its emission and net absorption therefore satisfy

$$
\boxed{j_\nu=\alpha_\nu B_\nu(T)}.
$$

This is Kirchhoff's law for thermal emission. Thus

$$
\boxed{S_\nu=\frac{j_\nu}{\alpha_\nu}=B_\nu(T)}.
$$

It constrains the relation between emission and absorption by the matter. The actual beam intensity still requires solving the transfer equation:

| Statement | Mathematical relation | Physical meaning |
|---|---|---|
| Thermal-emission source function | $S_\nu=B_\nu(T)$ | The equilibrium intensity scale set by emission and absorption in the medium |
| Blackbody radiation intensity | $I_\nu=B_\nu(T)$ | The actual radiation already has this blackbody intensity |

### 3.5 Signs in the Transfer Equation and Why It Is Not $S_\nu=2I_\nu$

By default, $s$ increases along the direction of photon propagation, and we define

$$
d\tau_\nu=\alpha_\nu ds.
$$

Then

$$
\frac{dI_\nu}{ds}=-\alpha_\nu I_\nu+j_\nu,
\qquad
\boxed{\frac{dI_\nu}{d\tau_\nu}=-I_\nu+S_\nu}.
$$

The quantity $dI_\nu/d\tau_\nu$ is the rate of change of intensity, not $I_\nu$, and does not automatically equal $-I_\nu$. One therefore cannot replace the derivative by the intensity and conclude that $S_\nu=2I_\nu$.

Some stellar-atmosphere derivations define the normal optical depth $\tau_{\nu,z}$ to increase inward and take $\mu$ as the cosine of the angle between the ray and the outward normal. The equation then reads

$$
\mu\frac{dI_\nu}{d\tau_{\nu,z}}=I_\nu-S_\nu.
$$

The sign difference reflects the positive coordinate direction, not different physical laws.

For full equilibrium of matter and radiation at the same temperature:

$$
I_\nu=S_\nu=B_\nu(T)
\quad\Longrightarrow\quad
\frac{dI_\nu}{d\tau_\nu}=0.
$$

A zero right-hand side means that the intensity is unchanged, not that light or emission is absent. Absorption and emission exactly compensate. For example, if $I_\nu=S_\nu=10$, passage through $d\tau=0.01$ reduces the intensity by $0.1$ through absorption to first order and adds $0.1$ through emission, giving zero net change.

For a given $S_\nu$, the beam grows if $I_\nu<S_\nu$, weakens if $I_\nu>S_\nu$, and remains unchanged when the two are equal.

### 3.6 How Does Isothermality Give a Simple Analytic Solution?

The general form is

$$
I_\nu(\tau_{\nu,0})
=I_{\nu,\rm in}e^{-\tau_{\nu,0}}
+\int_0^{\tau_{\nu,0}}
S_\nu(t)e^{-(\tau_{\nu,0}-t)}\,dt,
$$

Here $t$ increases from the entrance along the propagation direction.

Isothermality means only that $T(s)=T_0$. With the additional assumptions of LTE and negligible scattering, we have

$$
S_\nu(s)=B_\nu(T_0)=\text{constant along the ray}.
$$

Here constant means independent of position at a fixed frequency, not that $B_\nu$ is independent of frequency.

In this case

$$
\frac{dI_\nu}{d\tau_\nu}+I_\nu=B_\nu.
$$

Multiplying by the integrating factor $e^{\tau_\nu}$:

$$
\frac{d}{d\tau_\nu}(I_\nu e^{\tau_\nu})
=B_\nu e^{\tau_\nu}.
$$

Integrating from the entrance to the exit gives

$$
\boxed{
I_{\nu,\rm out}
=I_{\nu,\rm in}e^{-\tau_{\nu,0}}
+B_\nu(T_0)(1-e^{-\tau_{\nu,0}})
}.
$$

Mathematically, any $S_\nu$ that is constant along the ray yields the same solution structure, with $B_\nu$ replaced by that constant source function. Isothermality, LTE, and negligible scattering are one sufficient set of conditions for $S_\nu=B_\nu(T_0)$.

The absorption coefficient need not be spatially constant; one may have

$$
\tau_{\nu,0}=\int_{\rm in}^{\rm out}\alpha_\nu(s)\,ds.
$$

Isothermal does not mean homogeneous: only the temperature is fixed, while density and absorption coefficient may vary. One can write $\tau_{\nu,0}=\alpha_\nu L$ directly only for a fully homogeneous medium.

### 3.7 Why Does the Emergent Intensity Approach $B_\nu$ as the Medium Gets Thicker?

It is not because propagation losses become smaller. The surviving fraction of the incident light is $e^{-\tau}$:

| $\tau$ | Surviving fraction of incident light | The isothermal LTE medium's own contribution without background, $I_\nu/B_\nu$ |
|---:|---:|---:|
| 0.1 | 0.905 | 0.095 |
| 1 | 0.368 | 0.632 |
| 3 | 0.0498 | 0.950 |
| 10 | $4.54\times10^{-5}$ | 0.99995 |

A thicker medium removes more of the incident light but also produces new radiation. That new radiation can itself be absorbed along the path; the final intensity reflects both processes.

If $t$ instead denotes the optical depth from a layer to the emergent surface, that layer contributes

$$
dI_{\nu,\rm out}=S_\nu(t)e^{-t}\,dt.
$$

Thus, without a background and with a constant source function,

$$
I_{\nu,\rm out}
=\int_0^{\tau_{\nu,0}}B_\nu e^{-t}\,dt
=B_\nu(1-e^{-\tau_{\nu,0}}).
$$

Photons from depths $t\gg1$ still have difficulty escaping directly. The visible emission of an optically thick medium mainly comes from near the surface, at line-of-sight optical depths of order unity. Adding more material deep inside contributes little, so the intensity saturates.

### 3.8 Does Optically Thick Always Mean Blackbody?

No. A simple sufficient set of conditions is approximate isothermality, LTE, dominance of true absorption and thermal emission, and $\tau_\nu\gg1$ throughout the frequency range under consideration. Then $I_\nu\simeq B_\nu(T)$.

There are three important classes of exceptions.

**Temperature varies with depth.** Even in LTE, $S_\nu=B_\nu[T(\tau_{\nu,z})]$ can vary with depth. In a plane-parallel atmosphere with an approximately linear source function, the Eddington–Barbier relation gives

$$
I_\nu(0,\mu)\simeq S_\nu(\tau_{\nu,z}=\mu).
$$

The surface $\tau_{\nu,z}\sim1$ can lie at different physical depths for different frequencies, sampling different temperatures. The full spectrum need not correspond to a single $T$. For example, in an atmosphere that cools outward, a spectral line's greater absorption coefficient moves the line-center formation region to higher, cooler layers, producing an absorption line. An oblique viewing angle likewise samples higher layers and can produce limb darkening. These illustrate temperature-gradient effects; they do not imply that all of the spectral-line material was covered in this lecture.

**Scattering dominates.** Define

$$
\chi_\nu=\alpha_\nu+\sigma_\nu,\qquad
\epsilon_\nu=\frac{\alpha_\nu}{\alpha_\nu+\sigma_\nu}.
$$

With coherent, isotropic scattering and LTE thermal emission, the total source function is

$$
S_\nu=\epsilon_\nu B_\nu+(1-\epsilon_\nu)J_\nu.
$$

A large total extinction optical depth does not mean that each photon has been truly absorbed and recreated. Purely elastic scattering mainly changes propagation direction and cannot by itself guarantee a local Planck distribution. In a homogeneous medium, the order-of-magnitude relation

$$
\tau_{\rm eff}\sim\sqrt{\tau_{\rm abs}\tau_{\rm ext}}
$$

is often used to estimate thermalization; a factor of $\sqrt3$ may appear in the diffusion approximation. The condition $\tau_{\rm eff}\gg1$ permits effective thermalization deep inside, but does not by itself guarantee a blackbody emergent spectrum at the boundary: scattering-dominated surface layers can have $J_\nu\ne B_\nu$, causing departures from a blackbody.

**Only some frequencies are optically thick.** For an isothermal LTE medium:

$$
I_\nu=B_\nu(T)(1-e^{-\tau_\nu}).
$$

If $\tau_\nu$ depends strongly on frequency, the resulting spectrum is thermal with a frequency-dependent emissivity, often described as a modified blackbody. Usage of greybody varies; strictly, grey usually means frequency-independent emissivity.

Moreover, opacity can result from reflection or scattering. A highly reflective object may transmit very little without being an ideal blackbody; a blackbody requires absorptivity close to unity.

## 4. Blackbody Energy Density and Flux: Why 4π and π Appear

### 4.1 Energy Density Sums the Energy in All Directions

For a general radiation field,

$$
u_\nu=\frac1c\int_{4\pi}I_\nu(\boldsymbol n)\,d\Omega
=\frac{4\pi}{c}J_\nu.
$$

The factor $1/c$ converts energy crossing an area per unit time to energy present per unit volume: light traverses a length $c\,dt$ in a time $dt$.

For an isotropic field, $J_\nu=I_\nu$. For a blackbody equilibrium field in addition, $I_\nu=B_\nu$, so

$$
\boxed{
u=\frac{4\pi}{c}\int_0^\infty B_\nu(T)\,d\nu
}.
$$

This relation therefore uses the intensity–energy-density relation, isotropy, and $I_\nu=B_\nu$.

### 4.2 Outward Surface Flux Requires a Projection Factor

The intensity of an ideal blackbody surface over the outward hemisphere is $B_\nu$. The outward monochromatic flux is

$$
\begin{aligned}
F_{\nu,\rm surface}
&=\int_{\rm outward}B_\nu\cos\theta\,d\Omega\\
&=B_\nu\int_0^{2\pi}d\phi
\int_0^{\pi/2}\cos\theta\sin\theta\,d\theta\\
&=B_\nu(2\pi)\left(\frac12\right)
=\pi B_\nu.
\end{aligned}
$$

Therefore

$$
\boxed{
F_{\rm surface}=\pi\int_0^\infty B_\nu(T)\,d\nu
}.
$$

It is not $4\pi$ because only the outward hemisphere is included, nor $2\pi$ because of the additional $\cos\theta$ factor. A beam crossing the surface obliquely contributes less in the normal direction.

### 4.3 Can This Be Interpreted as the Area of a Great Circle?

It can be understood as **the area of the disk obtained by projecting a unit hemisphere along its normal**. On the unit sphere, $dA=d\Omega$, and the projected area is

$$
dA_{\rm proj}=\cos\theta\,d\Omega.
$$

Projecting the entire hemisphere onto the equatorial plane gives exactly a disk of radius one:

$$
\int_{\rm outward}\cos\theta\,d\Omega=\pi.
$$

Strictly, a great circle is a circumference; here we mean the disk it encloses. This unit sphere describes propagation directions, not the physical size of the object or the telescope aperture.

### 4.4 Do Not Confuse the Cavity Interior with the Region Outside a Surface

| Geometry | Energy density | Net monochromatic flux |
|---|---|---|
| Inside the cavity, with $B_\nu$ in every direction | $u_\nu=4\pi B_\nu/c$ | $F_\nu=0$ |
| Just outside an ideal planar blackbody surface, with radiation only in the outward hemisphere | $u_\nu=2\pi B_\nu/c$ | $F_\nu=\pi B_\nu$ |

The usual relation $F_{\rm surface}=cu_{\rm cavity}/4$ connects the outward surface flux to the isotropic energy density inside the cavity; do not confuse the two geometrical meanings of $u$.

For a spherical object's luminosity,

$$
L=4\pi R^2F_{\rm surface}
$$

the factor $4\pi$ comes from its surface area, which is separate from the directional integral.

## 5. Blackbody Thermodynamics and Problem 1.6: Energy, Entropy, and Adiabatic Expansion

### 5.1 Deriving $u\propto T^4$ from Thermodynamics

Isotropic radiation has pressure $p=u/3$. For a reversible equilibrium process:

$$
T\,dS_{\rm ent}=dU+p\,dV.
$$

Here $u$ is energy density and $U=uV$ is total energy; their letter cases must not be confused. For equilibrium blackbody radiation, $u$ depends only on temperature, so

$$
dU=d(uV)
=V\frac{du}{dT}\,dT+u\,dV.
$$

Substituting $p=u/3$:

$$
T\,dS_{\rm ent}
=V\frac{du}{dT}\,dT
+\left(u+\frac{u}{3}\right)dV.
$$

Therefore

$$
\boxed{
dS_{\rm ent}
=\frac{V}{T}\frac{du}{dT}\,dT
+\frac{4u}{3T}\,dV
}.
$$

The factor $4u/3$ here has two contributions:

$$
\underbrace{u\,dV}_{dU\text{ term from changing volume}}
+
\underbrace{\frac{u}{3}dV}_{p\,dV\text{ work term}}
=\frac{4u}{3}dV.
$$

For example, expansion at fixed temperature requires supplying radiation energy $u\,dV$ to fill the added volume and replacing the energy $p\,dV$ lost through work. Both terms contribute to the required heat input.

### 5.2 What Does It Mean That Entropy Is a State Function with Equal Mixed Partial Derivatives?

Entropy depends only on the current state $S_{\rm ent}=S_{\rm ent}(T,V)$, not on the path taken to reach it, so

$$
dS_{\rm ent}
=\left(\frac{\partial S_{\rm ent}}{\partial T}\right)_VdT
+\left(\frac{\partial S_{\rm ent}}{\partial V}\right)_TdV.
$$

Write

$$
M(T,V)=\frac{V}{T}\frac{du}{dT},\qquad
N(T,V)=\frac{4u}{3T}.
$$

If $S_{\rm ent}$ is sufficiently smooth, differentiating first with respect to $T$ and then $V$ gives the same result as reversing the order:

$$
\boxed{
\left(\frac{\partial M}{\partial V}\right)_T
=
\left(\frac{\partial N}{\partial T}\right)_V
}.
$$

Intuitively, going from $(T,V)$ to $(T+dT,V+dV)$ by heating first and then expanding, or expanding first and then heating, gives the same final entropy change. This is the integrability condition that the differential must satisfy.

The left-hand side is

$$
\left(\frac{\partial M}{\partial V}\right)_T
=\frac1T\frac{du}{dT},
$$

The right-hand side is

$$
\left(\frac{\partial N}{\partial T}\right)_V
=\frac43\left(\frac1T\frac{du}{dT}-\frac{u}{T^2}\right).
$$

Equating both sides and multiplying by $3T^2$:

$$
3T\frac{du}{dT}=4T\frac{du}{dT}-4u,
$$

Therefore

$$
T\frac{du}{dT}=4u,\qquad
\frac{du}{u}=4\frac{dT}{T}.
$$

Integration gives

$$
\ln u=4\ln T+\text{constant},
\qquad
\boxed{u=a_{\rm rad}T^4}.
$$

Thermodynamics establishes the fourth-power dependence on temperature but does not determine the numerical value of $a_{\rm rad}$; that requires microscopic statistical physics.

### 5.3 The Stefan–Boltzmann Law

The two angular-integral results from Section 4,

$$
u=\frac{4\pi}{c}\int B_\nu\,d\nu,\qquad
F_{\rm surface}=\pi\int B_\nu\,d\nu,
$$

give

$$
\boxed{
F_{\rm surface}=\frac{c}{4}u
=\sigma_{\rm SB}T^4
},\qquad
\boxed{\sigma_{\rm SB}=\frac{a_{\rm rad}c}{4}}.
$$

Common cgs values are

$$
a_{\rm rad}\simeq7.566\times10^{-15}\
\mathrm{erg\,cm^{-3}\,K^{-4}},
$$

$$
\sigma_{\rm SB}\simeq5.670\times10^{-5}\
\mathrm{erg\,cm^{-2}\,s^{-1}\,K^{-4}}.
$$

For a spherical blackbody, $L=4\pi R^2\sigma_{\rm SB}T^4$.

### 5.4 Problem 1.6: A Full Derivation of Blackbody Radiation Entropy

The problem asks us to show that

$$
S_{\rm ent}=\frac43a_{\rm rad}VT^3.
$$

We now know that $u=a_{\rm rad}T^4$, so

$$
U=a_{\rm rad}VT^4,\qquad
p=\frac13a_{\rm rad}T^4.
$$

For a reversible process:

$$
\begin{aligned}
T\,dS_{\rm ent}
&=dU+p\,dV\\
&=4a_{\rm rad}VT^3\,dT
+a_{\rm rad}T^4\,dV
+\frac13a_{\rm rad}T^4\,dV\\
&=4a_{\rm rad}VT^3\,dT
+\frac43a_{\rm rad}T^4\,dV.
\end{aligned}
$$

Dividing by $T$:

$$
dS_{\rm ent}
=4a_{\rm rad}VT^2\,dT+\frac43a_{\rm rad}T^3\,dV.
$$

Checking with the product rule:

$$
\begin{aligned}
d\left(\frac43a_{\rm rad}VT^3\right)
&=\frac43a_{\rm rad}
\left(T^3\,dV+3VT^2\,dT\right)\\
&=\frac43a_{\rm rad}T^3\,dV
+4a_{\rm rad}VT^2\,dT.
\end{aligned}
$$

This is identical to $dS_{\rm ent}$, so

$$
S_{\rm ent}=\frac43a_{\rm rad}VT^3+C.
$$

Setting the radiation entropy to zero at zero temperature gives $C=0$:

$$
\boxed{S_{\rm ent}=\frac43a_{\rm rad}VT^3}.
$$

If the exact differential is not immediately recognizable, first integrate at fixed $V$:

$$
\left(\frac{\partial S_{\rm ent}}{\partial T}\right)_V
=4a_{\rm rad}VT^2
\quad\Longrightarrow\quad
S_{\rm ent}=\frac43a_{\rm rad}VT^3+f(V).
$$

Then differentiate with respect to $V$ and compare with the known $\partial S_{\rm ent}/\partial V$, obtaining $f'(V)=0$, before fixing the zero-temperature constant.

Dimensional check: $a_{\rm rad}VT^4$ is energy; dividing by $T$ gives energy per temperature, the units of entropy.

The entropy density is

$$
s_{\rm ent}=\frac{S_{\rm ent}}{V}=\frac43a_{\rm rad}T^3.
$$

For an equilibrium photon gas with zero chemical potential, this can also be written

$$
S_{\rm ent}=\frac{U+pV}{T}.
$$

This is the thermodynamic Euler relation for this system, not a formula in which the chemical-potential term can simply be omitted for arbitrary matter.

### 5.5 Why Does Radiation Have $T\propto R^{-1}$ during Adiabatic Expansion?

For reversible adiabatic expansion that preserves equilibrium, entropy is constant:

$$
VT^3=\text{constant}
\quad\Longrightarrow\quad
\boxed{T\propto V^{-1/3}}.
$$

If the overall linear scale is $R$, with $V\propto R^3$:

$$
\boxed{T_{\rm rad}\propto R^{-1}}.
$$

At the same time

$$
U=a_{\rm rad}VT^4\propto R^3R^{-4}=R^{-1},
$$

The total radiation energy also decreases, corresponding to the work done during expansion.

Adiabatic means only that no heat is exchanged; entropy may still increase if irreversible processes occur. Here we use equilibrium adiabatic evolution with no entropy production.

### 5.6 Why Does an Ideal Gas Have $T\propto V^{-(\gamma-1)}$?

For an ideal gas with a fixed particle number $N$ and approximately temperature-independent heat capacity, let $C_V$ be the constant-volume heat capacity per particle:

$$
U=NC_VT,\qquad PV=NkT.
$$

For a reversible adiabatic process:

$$
dU+P\,dV=0.
$$

Substitution gives:

$$
NC_V\,dT+\frac{NkT}{V}\,dV=0,
$$

That is,

$$
\frac{dT}{T}=-\frac{k}{C_V}\frac{dV}{V}.
$$

An ideal gas satisfies $C_P-C_V=k$. Defining $\gamma=C_P/C_V$ gives

$$
\frac{k}{C_V}=\gamma-1.
$$

Integration yields

$$
\boxed{TV^{\gamma-1}=\text{constant}},\qquad
\boxed{T\propto V^{-(\gamma-1)}}.
$$

A classical nonrelativistic monatomic ideal gas has only three translational degrees of freedom:

$$
C_V=\frac32k,\quad C_P=\frac52k,\quad\gamma=\frac53.
$$

Therefore

$$
\boxed{T_{\rm gas}\propto V^{-2/3}\propto R^{-2}}.
$$

The value $R^{-2}$ does not apply to every ideal gas: molecular degrees of freedom, temperature-dependent heat capacities, or relativistic effects change the result.

| System | Total internal energy | Pressure | Equilibrium adiabatic temperature scaling |
|---|---|---|---|
| Nonrelativistic monatomic ideal gas | $U=\frac32NkT$ | $p=2U/(3V)$ | $T\propto R^{-2}$ |
| Blackbody radiation | $U=a_{\rm rad}VT^4$ | $p=U/(3V)$ | $T\propto R^{-1}$ |

If the linear size doubles, the first temperature falls to $1/4$ and the second to $1/2$. The fundamental difference lies in the equations of state and in how internal energy depends on temperature and volume.

Radiation also satisfies $pV^{4/3}=\text{constant}$, so its adiabatic index can be called $4/3$. However, the heat-capacity derivation for an ideal gas with fixed particle number should not be applied to an equilibrium photon gas without qualification.

Equilibrium photons have no externally imposed fixed-number constraint. Nevertheless, in an entropy-conserving adiabatic expansion that preserves the blackbody spectrum, $n_\gamma\propto T^3$ and $VT^3$ is constant, so the total photon number can also remain constant. A decreasing photon number density does not imply that the total photon number must decrease in this process.

### 5.7 Applications in the Course

During homogeneous cosmic expansion, the linear scale grows with $a_{\rm cos}$, and the blackbody radiation temperature follows

$$
T_{\rm rad}\propto a_{\rm cos}^{-1},\qquad T(z)=T_0(1+z).
$$

In a supernova, trapped radiation cools adiabatically as the ejecta expand. Without replenishment from radioactive decay or another heat source, much of the initially stored radiation energy may be lost before photons can escape rapidly. Different supernovae can also be powered by shocks or central engines; this does not mean that all supernovae rely solely on radioactive decay.

### 5.8 Problem 1.6 — English solution

For blackbody radiation,

$$
u=aT^4,\qquad p=\frac{u}{3},\qquad U=aVT^4.
$$

For a reversible change, the first and second laws give

$$
\begin{aligned}
T\,dS
&=dU+p\,dV\\
&=4aVT^3\,dT+\frac43aT^4\,dV.
\end{aligned}
$$

Hence

$$
dS=4aVT^2\,dT+\frac43aT^3\,dV
=d\left(\frac43aVT^3\right).
$$

Taking the radiation entropy to vanish as $T\to0$ fixes the additive constant, giving

$$
\boxed{S=\frac43aVT^3}.
$$

For reversible adiabatic expansion, $S$ is constant, so $VT^3$ is constant. Therefore $T\propto V^{-1/3}\propto R^{-1}$ for homologous expansion.

## 6. Deriving the Planck Spectrum from Mode Counting

### 6.1 What Is the Density of States $g(\nu)$?

Define

$$
\boxed{
g(\nu)\,d\nu=
\text{number of electromagnetic modes per unit physical volume between }\nu\text{ and }\nu+d\nu
\text{ in frequency}
}.
$$

This is the density of photon states, or density of electromagnetic modes, with units $\mathrm{m^{-3}\,Hz^{-1}}$.

It is not the photon number density: a mode can contain $0,1,2,\ldots$ photons. The mode count specifies how many independent electromagnetic oscillations can be occupied; the photon count additionally includes the occupation number of each mode.

### 6.2 Counting Modes in Wavevector Space

Consider a box much larger than the wavelength, with $V=L_xL_yL_z$. Impose periodic boundary conditions:

$$
k_i=\frac{2\pi n_i}{L_i},\qquad n_i\in\mathbb Z.
$$

Adjacent allowed wavevectors are separated by $\Delta k_i=2\pi/L_i$. Each allowed wavevector occupies a volume in $k$ space of

$$
\Delta^3k=\frac{(2\pi)^3}{V}.
$$

Thus a unit volume in $k$ space contains $V/(2\pi)^3$ wavevectors. Electromagnetic waves also have two independent transverse polarizations:

$$
dN_{\rm modes}
=\frac{2V}{(2\pi)^3}\,d^3k.
$$

In vacuum,

$$
k=\frac{2\pi\nu}{c}.
$$

Frequency depends only on the magnitude of $k$, so all directions between $k$ and $k+dk$ form a thin spherical shell:

$$
d^3k=4\pi k^2\,dk.
$$

Hence

$$
dN_{\rm modes}
=\frac{2V}{(2\pi)^3}\,4\pi k^2\,dk
=\frac{V}{\pi^2}k^2\,dk.
$$

Converting to frequency using $dk=(2\pi/c)d\nu$:

$$
\begin{aligned}
dN_{\rm modes}
&=\frac{V}{\pi^2}
\left(\frac{2\pi\nu}{c}\right)^2
\frac{2\pi}{c}\,d\nu\\
&=V\frac{8\pi\nu^2}{c^3}\,d\nu.
\end{aligned}
$$

Therefore

$$
\boxed{g(\nu)=\frac{8\pi\nu^2}{c^3}}.
$$

The factor $\nu^2$ comes from the shell area growing as $k^2$; the factor of two comes from polarization, and $4\pi$ from integrating over all directions. Counting per unit solid angle first, as in the textbook, gives

$$
\frac{dN_{\rm modes}}{V\,d\nu\,d\Omega}
=\frac{2\nu^2}{c^3},
$$

Integrating over directions then yields $g(\nu)$. Traveling-wave counting with periodic boundaries and standing-wave counting in a large cavity give the same volume-dominated result. Do not mix their positive/negative wavevector conventions and introduce an extra factor of two.

### 6.3 Mean Energy per Mode

A mode of frequency $\nu$ containing $n$ photons has radiation energy $E_n=nh\nu$. At temperature $T$:

$$
P_n\propto e^{-nh\nu/kT}.
$$

Let $q=e^{-h\nu/kT}$. The geometric series gives

$$
\sum_{n=0}^\infty q^n=\frac1{1-q},
\qquad
\sum_{n=0}^\infty nq^n=\frac{q}{(1-q)^2}.
$$

Therefore

$$
\langle n_\nu\rangle
=\frac{\sum nq^n}{\sum q^n}
=\frac{q}{1-q}
=\boxed{\frac1{e^{h\nu/kT}-1}}.
$$

This is the Bose–Einstein occupation number for photons with zero chemical potential. The mean energy per mode is

$$
\boxed{
\langle E_\nu\rangle
=h\nu\langle n_\nu\rangle
=\frac{h\nu}{e^{h\nu/kT}-1}
}.
$$

The cavity walls can create or absorb photons, so equilibrium photon number is not constrained to be fixed. This variable-particle-number equilibrium condition establishes the zero chemical potential; masslessness alone is not a sufficient explanation.

### 6.4 Obtaining the Energy Density and the Planck Function

Multiplying mode density by mean energy per mode:

$$
u_\nu=g(\nu)\langle E_\nu\rangle
=\boxed{
\frac{8\pi h\nu^3}{c^3}
\frac1{e^{h\nu/kT}-1}
}.
$$

Then using $u_\nu=4\pi B_\nu/c$ for an isotropic field:

$$
\boxed{
B_\nu(T)=
\frac{2h\nu^3}{c^2}
\frac1{e^{h\nu/kT}-1}
}.
$$

The cubic frequency dependence combines the $\nu^2$ from mode counting with the $\nu$ of a single photon's energy; suppression at high frequency comes from the mean occupation number.

Letting $x=h\nu/kT$ and using

$$
\int_0^\infty\frac{x^3}{e^x-1}\,dx=\frac{\pi^4}{15},
$$

we obtain

$$
\int_0^\infty B_\nu(T)\,d\nu
=\frac{2\pi^4k^4}{15h^3c^2}T^4.
$$

Therefore

$$
\boxed{\sigma_{\rm SB}=\frac{2\pi^5k^4}{15h^3c^2}},
\qquad
\boxed{a_{\rm rad}=\frac{8\pi^5k^4}{15h^3c^3}}.
$$

## 7. Properties of the Planck Spectrum, the Rayleigh–Jeans Criterion, and a Wavelength Guide

### 7.1 The Rayleigh–Jeans Criterion

The essential condition is

$$
\boxed{x=\frac{h\nu}{kT}\ll1},
\qquad
\boxed{\lambda\gg\frac{hc}{kT}}.
$$

It compares the energy of one photon, $h\nu$, with the thermal energy scale $kT$. Low frequency or long wavelength is relative to the temperature in question; being in the radio band is not itself a precise mathematical criterion.

Since $e^x-1\simeq x$:

$$
B_\nu(T)\simeq
\frac{2h\nu^3}{c^2}\frac{kT}{h\nu}
=\boxed{\frac{2kT\nu^2}{c^2}}.
$$

This is the Rayleigh–Jeans law. At fixed frequency, $B_\nu\propto T$; at fixed temperature, $B_\nu\propto\nu^2$.

In terms of occupation numbers:

$$
\langle n_\nu\rangle\simeq\frac{kT}{h\nu}\gg1,
\qquad
\langle E_\nu\rangle\simeq kT.
$$

This is the classical high-occupation limit of electromagnetic modes. Incorrectly extrapolating $B_\nu\propto\nu^2$ to arbitrarily high frequencies makes the total energy integral diverge: the ultraviolet catastrophe.

### 7.2 How Can the Approximation Error Be Estimated?

The ratio of the exact value to the RJ approximation is

$$
\frac{B_\nu^{\rm Planck}}{B_\nu^{\rm RJ}}
=\frac{x}{e^x-1}.
$$

The RJ approximation always overestimates the Planck intensity at the same temperature. Relative to the exact value, the error is

$$
\delta_{\rm RJ}
=\frac{B_\nu^{\rm RJ}-B_\nu^{\rm Planck}}{B_\nu^{\rm Planck}}
=\frac{e^x-1}{x}-1
\simeq\frac{x}{2}.
$$

| $x=h\nu/kT$ | Relative overestimate by RJ |
|---:|---:|
| 0.02 | About 1.01% |
| 0.1 | About 5.17% |
| 0.2 | About 10.70% |
| 1 | About 71.83%; the RJ approximation is inappropriate |

How small much smaller than one must be depends on the required accuracy.

### 7.3 The High-Frequency Wien Limit and Monotonicity with Temperature

When $h\nu\gg kT$, the one in the denominator is negligible:

$$
\boxed{
B_\nu(T)\simeq\frac{2h\nu^3}{c^2}e^{-h\nu/kT}
}.
$$

High-energy photon occupation is exponentially suppressed. At any fixed frequency, on the other hand:

$$
\frac{\partial B_\nu}{\partial T}
=\frac{2h^2\nu^4}{c^2kT^2}
\frac{e^{h\nu/kT}}{(e^{h\nu/kT}-1)^2}>0.
$$

A hotter blackbody is brighter at every frequency; blackbody curves at different temperatures do not cross unless renormalized. This monotonicity also makes the definition of brightness temperature unique.

### 7.4 Spectral Peaks and the Distinction between $B_\nu$ and $B_\lambda$

To find the peak of $B_\nu$, set $x=h\nu/kT$ and differentiate to obtain

$$
x=3(1-e^{-x}).
$$

Taking the nonzero root $x=2.821439\ldots$:

$$
\boxed{h\nu_{\max}=2.82144\,kT},
\qquad
\boxed{\frac{\nu_{\max}}T\simeq5.879\times10^{10}\ \mathrm{Hz\,K^{-1}}}.
$$

Increasing temperature therefore shifts the peak to higher frequency.

Intensity per unit wavelength requires the Jacobian of the variable transformation:

$$
B_\lambda\,d\lambda=B_\nu\,|d\nu|,
\qquad
B_\lambda=B_\nu\frac{c}{\lambda^2}.
$$

One cannot simply replace $\nu$ by $c/\lambda$ in $B_\nu$. The correct result is

$$
B_\lambda(T)=\frac{2hc^2}{\lambda^5}
\frac1{e^{hc/\lambda kT}-1}.
$$

The nonzero root for the peak of $B_\lambda$ satisfies $y=5(1-e^{-y})$, with $y\simeq4.9651$, giving

$$
\boxed{\lambda_{\max}^{(B_\lambda)}T
\simeq2.898\times10^{-3}\ \mathrm{m\,K}}.
$$

Thus

$$
\lambda_{\max}^{(B_\lambda)}
\ne\frac{c}{\nu_{\max}^{(B_\nu)}}.
$$

Distributing the same energy into equal-width frequency bins or equal-width wavelength bins can place the peak differently. Plotting energy per logarithmic frequency interval, such as $\nu B_\nu$, gives yet another peak. Always specify the spectral definition when quoting a peak.

### 7.5 Wavelength, Energy, and Spectral Bands: A Short Memory Guide

Basic conversions:

$$
\boxed{E=h\nu=\frac{hc}{\lambda}},
\qquad
\boxed{E(\mathrm{eV})\simeq\frac{1240}{\lambda(\mathrm{nm})}},
$$

$$
\boxed{E(\mathrm{keV})\simeq\frac{1.240}{\lambda(\mathrm{nm})}}.
$$

From long wavelengths and low energies to short wavelengths and high energies, remember radio → infrared → visible → ultraviolet → X-rays → gamma rays. Microwaves are usually part of radio in the broad sense but are listed separately here as a memory aid.

| Band | Approximate wavelength range | Approximate photon energy range | Memory anchor |
|---|---|---|---|
| Radio wavelengths of a meter and longer | $>1\ \mathrm m$ | $<1.24\times10^{-6}\ \mathrm{eV}$ | Meters and longer |
| Microwave and millimeter | About $1\ \mathrm m$ to $1\ \mathrm{mm}$ | $1.24\times10^{-6}$ to $1.24\times10^{-3}\ \mathrm{eV}$ | cm、mm，CMB |
| Infrared | About $1\ \mathrm{mm}$ to $700\ \mathrm{nm}$ | About $10^{-3}$ to $1.8\ \mathrm{eV}$ | $\mathrm{\mu m}$ |
| Visible | About $700$ to $400\ \mathrm{nm}$ | About $1.8$ to $3.1\ \mathrm{eV}$ | Red is longer; violet is shorter |
| Ultraviolet | About $400$ to $10\ \mathrm{nm}$ | About $3$ to $124\ \mathrm{eV}$ | Some energetic UV photons can ionize atoms |
| X-rays | About $10$ to $0.01\ \mathrm{nm}$ | About $0.1$ to $100\ \mathrm{keV}$ | nm、keV |
| Gamma rays | Roughly $<0.01\ \mathrm{nm}$ | Roughly $>100\ \mathrm{keV}$ | High energy |

These are approximate ranges for memorization, not unique boundaries. In particular, X-rays and gamma rays can also be distinguished by production mechanism, and their energies overlap. Infrared is not exclusive to thermal radiation either; wavelength bands and emission mechanisms are different classifications.

| Wavelength | Frequency | Example photon energy |
|---|---|---|
| $1\ \mathrm m$ | $300\ \mathrm{MHz}$ | $1.24\times10^{-6}\ \mathrm{eV}$ |
| $10\ \mathrm{cm}$ | $3\ \mathrm{GHz}$ | — |
| $1\ \mathrm{cm}$ | $30\ \mathrm{GHz}$ | — |
| $1\ \mathrm{mm}$ | $300\ \mathrm{GHz}$ | $1.24\times10^{-3}\ \mathrm{eV}$ |
| $1\ \mathrm{\mu m}$ | $3\times10^{14}\ \mathrm{Hz}$ | $1.24\ \mathrm{eV}$ |
| $500\ \mathrm{nm}$ | $6\times10^{14}\ \mathrm{Hz}$ | $2.48\ \mathrm{eV}$ |
| $100\ \mathrm{nm}$ | $3\times10^{15}\ \mathrm{Hz}$ | $12.4\ \mathrm{eV}$ |
| $1\ \mathrm{nm}$ | $3\times10^{17}\ \mathrm{Hz}$ | $1.24\ \mathrm{keV}$ |
| $0.01\ \mathrm{nm}$ | $3\times10^{19}\ \mathrm{Hz}$ | $124\ \mathrm{keV}$ |

Another useful relation is

$$
kT=1\ \mathrm{eV}\ \Longleftrightarrow\
T\simeq1.1605\times10^4\ \mathrm K.
$$

This converts a thermal energy scale; it is not the photon energy at the blackbody spectral peak. The peak of $B_\nu$ occurs at $2.82144kT$.

## 8. Brightness, Color, and Effective Temperatures

### 8.1 Brightness Temperature: Which Blackbody Matches the Intensity at a Given Frequency?

Define

$$
\boxed{I_\nu=B_\nu[T_b(\nu)]}.
$$

Brightness temperature is first of all a way to express radiation intensity. It does not automatically equal the physical temperature of matter, and it can also be defined for nonthermal radiation.

Inverting the full Planck function:

$$
T_b(\nu)=
\frac{h\nu/k}
{\ln\left(1+\frac{2h\nu^3}{c^2I_\nu}\right)}.
$$

In the RJ limit $h\nu\ll kT_b$:

$$
\boxed{T_b=\frac{c^2I_\nu}{2k\nu^2}
=\frac{\lambda^2I_\nu}{2k}}.
$$

In radio astronomy, this linear expression is also often used directly as a unit-conversion definition of RJ brightness temperature. Outside the RJ regime, it differs from the brightness temperature obtained by inverting the full Planck function, so the convention must be specified.

For a uniform source of known angular area:

$$
\boxed{T_b=\frac{\lambda^2f_\nu}{2k\Omega_{\rm src}}}.
$$

Total flux density alone, without an angular size, cannot determine the intrinsic source brightness temperature.

### 8.2 The Relation between Brightness Temperature and Gas Temperature

For isothermal LTE matter with negligible scattering, when all relevant terms are in the RJ limit, the transfer equation can be written

$$
\frac{dT_b}{d\tau_\nu}=-T_b+T,
$$

Its solution is

$$
T_{b,\rm out}=T_{b,\rm in}e^{-\tau_\nu}
+T(1-e^{-\tau_\nu}).
$$

Without a background:

$$
\boxed{T_b=T(1-e^{-\tau_\nu})\le T}.
$$

| Condition | Result |
|---|---|
| $\tau_\nu\ll1$ | $T_b\simeq T\tau_\nu$ |
| $\tau_\nu\gg1$ | $T_b\simeq T$ |

For example, gas at $T=10^4\ \mathrm K$ has brightness temperatures of approximately $100,\ 6321,\ 10^4\ \mathrm K$ at $\tau=0.01,1,\gg1$, respectively. Hot but optically thin gas can still appear faint.

The inequality $T_b\le T$ depends on the assumed thermal source and absence of incident background. It is not a temperature theorem for arbitrary nonthermal radiation or for systems illuminated by a bright background.

### 8.3 Color Temperature: Matching the Spectral Shape

Fitting the spectral shape with

$$
f_\nu=C B_\nu(T_c)
$$

while allowing the normalization $C$ to vary freely gives the color temperature $T_c$. It primarily characterizes the spectral shape, color ratios, or peak location.

For example, if $I_\nu=wB_\nu(T)$ over the relevant bands and $w<1$ is frequency-independent, the shape is unchanged, so $T_c=T$. The brightness is lower, however, and the brightness temperature is below $T$. If $w$ or the optical depth varies with frequency, the color temperature need not equal the physical temperature.

In a purely RJ range, $f_\nu\propto CT_c\nu^2$, making temperature degenerate with normalization. The $\nu^2$ spectral shape alone cannot determine the temperature.

### 8.4 Effective Temperature: Matching the Total Surface Flux

Define

$$
\boxed{F_{\rm surface}=\sigma_{\rm SB}T_{\rm eff}^4}.
$$

Even a nonblackbody spectrum can be assigned the temperature of an equivalent blackbody emitting the same total surface flux. For a spherical source:

$$
T_{\rm eff}=\left(\frac{L}{4\pi R^2\sigma_{\rm SB}}\right)^{1/4}.
$$

The flux at Earth is geometrically diluted:

$$
f_{\rm bol}=\left(\frac Rd\right)^2\sigma_{\rm SB}T_{\rm eff}^4.
$$

The observer's $f_{\rm bol}$ must not be used directly as the surface flux.

| Temperature | Information used to determine it | Necessarily the matter temperature? |
|---|---|---|
| $T_b(\nu)$ | Absolute monochromatic specific intensity | Not necessarily |
| $T_c$ | Spectral shape, color ratios, and peak | Not necessarily |
| $T_{\rm eff}$ | Total radiative surface flux | Not necessarily |

For a single uniform ideal blackbody, all three equal $T$. In a general astronomical object, they need not agree.

## 9. Problem 1.3: An Optically Thin Spherical Cloud, Resolved and Unresolved

### 9.1 Problem Setup and Assumptions

A spherical cloud of radius $R$ at distance $d$ produces X-ray photons at a uniform rate $\Gamma$:

$$
[\Gamma]=\mathrm{photons\,cm^{-3}\,s^{-1}}.
$$

Neglect absorption, treating the cloud as optically thin. The detector has an acceptance beam of half-angle $\Delta\theta$ and effective area $\Delta A$. Find:

- The photon intensity toward the cloud center when the source is fully resolved.
- The mean photon intensity over the entire acceptance beam when the source is completely unresolved.

Assume isotropic emission, $d\gg R$, small angles, and an ideal uniform acceptance beam. The quantity $\Gamma$ is already the total production rate over the photon band specified in the problem, so no additional bandwidth factor is needed.

### 9.2 (a) Resolved Source: Integrate along the Central Line of Sight

The photon emission coefficient per unit solid angle is

$$
j_N=\frac{\Gamma}{4\pi}.
$$

A line of sight at projected distance $b$ from the center traverses a length

$$
\ell(b)=2\sqrt{R^2-b^2},\qquad 0\le b\le R.
$$

In the optically thin limit, emission adds directly along the path:

$$
I_N(b)=\int j_N\,ds
=\frac{\Gamma}{4\pi}\,2\sqrt{R^2-b^2}.
$$

Thus

$$
\boxed{I_N(b)=\frac{\Gamma}{2\pi}\sqrt{R^2-b^2}},
\qquad
\boxed{I_{N,\rm center}=\frac{\Gamma R}{2\pi}}.
$$

The units are $\mathrm{photons\,s^{-1}\,cm^{-2}\,sr^{-1}}$.

The question asks for the central direction. Dividing the entire cloud luminosity by the source angular area instead gives a disk-averaged intensity, not the central value.

The central intensity contains no $d$: in free propagation, neglecting cosmological effects, a resolved source's surface brightness does not fall as distance squared. The flux and angular area of each small physical patch both scale as $d^{-2}$, leaving their ratio unchanged. Intuitively, resolving the source requires a beam much smaller than the source angular scale $R/d$.

### 9.3 (b) Unresolved Source: Divide the Total Photon Flux by the Beam Solid Angle

The total photon luminosity is

$$
\dot N_\gamma
=\Gamma\frac{4\pi R^3}{3}.
$$

The photon flux at Earth is:

$$
\Phi=\frac{\dot N_\gamma}{4\pi d^2}
=\frac{\Gamma R^3}{3d^2}.
$$

The acceptance beam solid angle is

$$
\Omega_{\rm det}
=2\pi(1-\cos\Delta\theta)
\simeq\pi(\Delta\theta)^2.
$$

If the entire source lies within the beam and the beam response is approximately constant:

$$
\boxed{
\langle I_N\rangle_{\rm beam}
=\frac{\Phi}{\Omega_{\rm det}}
\simeq\frac{\Gamma R^3}{3\pi d^2(\Delta\theta)^2}
}.
$$

This is the beam-averaged intensity. An intrinsically bright source can be diluted by a larger acceptance beam.

The count rate is $\dot N_{\rm det}=\Phi\Delta A$. Inferring the intensity gives

$$
\langle I_N\rangle_{\rm beam}
=\frac{\dot N_{\rm det}}{\Delta A\,\Omega_{\rm det}},
$$

Thus $\Delta A$ cancels. Collecting area affects the counts and precision, not the intrinsic specific intensity of the source.

### 9.4 Central, Source-Averaged, and Beam-Averaged Intensities

The source angular area is

$$
\Omega_{\rm src}\simeq\pi(R/d)^2.
$$

The mean intensity within the source disk is therefore

$$
\langle I_N\rangle_{\rm src}
=\frac{\Phi}{\Omega_{\rm src}}
=\boxed{\frac{\Gamma R}{3\pi}}
=\frac23I_{N,\rm center}.
$$

| Quantity | Result | Averaging region |
|---|---|---|
| Central intensity | $\Gamma R/(2\pi)$ | Direction toward the center |
| Source-averaged intensity | $\Gamma R/(3\pi)$ | Actual source disk |
| Beam-averaged intensity when unresolved | $\Gamma R^3/[3\pi d^2(\Delta\theta)^2]$ | Detector beam |

The total flux can also be checked by integrating the specific intensity:

$$
\begin{aligned}
\Phi
&=\frac{2\pi}{d^2}\int_0^R I_N(b)b\,db\\
&=\frac{\Gamma}{d^2}
\int_0^R b\sqrt{R^2-b^2}\,db
=\frac{\Gamma R^3}{3d^2}.
\end{aligned}
$$

This agrees with the total photon luminosity method.

### 9.5 Problem 1.3 — English solution

Assume isotropic emission and a distant source, $d\gg R$. The photon emissivity per unit solid angle is $j_N=\Gamma/(4\pi)$. In the optically thin limit, a ray at impact parameter $b$ has intensity

$$
I_N(b)=\int j_N\,ds
=\frac{\Gamma}{2\pi}\sqrt{R^2-b^2}.
$$

Thus the resolved intensity toward the centre is

$$
\boxed{I_N(0)=\frac{\Gamma R}{2\pi}}.
$$

For the unresolved source, the total photon luminosity is

$$
\dot N_\gamma=\Gamma\frac{4\pi R^3}{3},
$$

giving a photon flux at Earth of

$$
\Phi=\frac{\dot N_\gamma}{4\pi d^2}
=\frac{\Gamma R^3}{3d^2}.
$$

For a small, uniform-response detector beam,

$$
\Omega_{\rm det}\simeq\pi(\Delta\theta)^2.
$$

The average intensity over the beam is therefore

$$
\boxed{
\langle I_N\rangle_{\rm beam}
=\frac{\Phi}{\Omega_{\rm det}}
=\frac{\Gamma R^3}{3\pi d^2(\Delta\theta)^2}
}.
$$

The detector area cancels when the count rate is divided by the collecting area and beam solid angle.

## 10. Classroom Extensions of 1.3: Background, Diffraction, Signal-to-Noise, and Integration Time

### 10.1 The Uniform Disk Used in Class Is Not the Original Optically Thin Sphere

To discuss apertures, the course uses a disk with constant surface brightness:

$$
\mathcal I_{\nu,\rm src}(\theta)=
\begin{cases}
\mathcal I_{\nu,0}, & \theta\le R/d,\\
0, & \theta>R/d.
\end{cases}
$$

Here $\mathcal I_\nu$ denotes photon intensity per unit frequency. The original problem's $I_N(b)\propto\sqrt{R^2-b^2}$ describes a different model, bright at the center and faint at the edge.

To distinguish the different angular areas, use:

| Symbol | Meaning |
|---|---|
| $\Omega_{\rm src}$ | The source's own angular area on the sky |
| $\Omega_{\rm ap}$ | The angular area of the photometric aperture chosen in data analysis |
| $\Omega_{\rm beam}$ | Beam solid angle defined by integrating the telescope's angular response |
| $\Omega_{\rm eff}$ | Effective angular area for background noise under a specified measurement method |

In the course's ideal top-hat acceptance model, the aperture and beam can be represented by the same $\Omega_{\rm det}$. For a real PSF, these quantities have different numerical factors. However, if the measurement region scales in a fixed proportion to the PSF, they share the same $\lambda^2/D^2$ scaling.

### 10.2 Source and Background Counts

For a centered uniform disk and a uniform background, assuming approximately constant area and spectra across the bandwidth:

$$
N_{\rm src}
=\mathcal I_{\nu,0}
\min(\Omega_{\rm ap},\Omega_{\rm src})
A_{\rm eff}\Delta\nu\,t,
$$

$$
N_{\rm bkg}
=\mathcal I_{\nu,\rm bkg}\Omega_{\rm ap}
A_{\rm eff}\Delta\nu\,t.
$$

If the photon intensity is already integrated over the band, omit $\Delta\nu$ to avoid integrating twice. If energy intensity is used, first divide by $h\nu$ or explicitly integrate over the broad band.

### 10.3 Why Is the Noise the Square Root of the Counts?

Here we adopt a Poisson model of independent photon counting:

$$
\operatorname{Var}(N)=N.
$$

Even if the mean background is known exactly, fluctuations in the observed total counts still arise from both source and background:

$$
\sigma_N=\sqrt{N_{\rm src}+N_{\rm bkg}}.
$$

Subtracting the mean background cannot remove its random fluctuation in this observation. Thus

$$
\boxed{\mathrm{S/N}=
\frac{N_{\rm src}}{\sqrt{N_{\rm src}+N_{\rm bkg}}}}.
$$

If the background is estimated from an independent blank field with equal area and exposure time, the background estimate contributes another variance term:

$$
\mathrm{S/N}=
\frac{N_{\rm src}}{\sqrt{N_{\rm src}+2N_{\rm bkg}}}.
$$

A larger background reference region reduces that additional estimation error, but background photon fluctuations within the source aperture remain.

### 10.4 Why Does the Optimal Aperture Roughly Enclose the Source?

When the source dominates:

$$
\mathrm{S/N}\simeq\sqrt{N_{\rm src}}.
$$

The signal-to-noise ratio saturates once the aperture contains the entire source. If the background is entirely negligible, enlarging the aperture further provides no gain.

When the background dominates, $\mathrm{S/N}\simeq N_{\rm src}/\sqrt{N_{\rm bkg}}$:

| Aperture range | Source counts | Background counts | Signal-to-noise dependence on aperture |
|---|---|---|---|
| $\Omega_{\rm ap}<\Omega_{\rm src}$ | $\propto\Omega_{\rm ap}$ | $\propto\Omega_{\rm ap}$ | $\propto\sqrt{\Omega_{\rm ap}}$ |
| $\Omega_{\rm ap}>\Omega_{\rm src}$ | Already saturated | $\propto\Omega_{\rm ap}$ | $\propto1/\sqrt{\Omega_{\rm ap}}$ |

For a uniform disk, the optimal aperture is approximately the source angular area. Real sources and PSFs have smooth edges; the optimum balances lost source light against added background and need not include every photon.

### 10.5 What Is $\Omega_{\rm beam}$?

Even an ideal point source is imaged by a telescope as a point-spread function (PSF) of finite angular width, not as a mathematical point. For an angular response $P(\theta,\phi)$ normalized to a peak of one:

$$
\boxed{\Omega_{\rm beam}=\int P(\theta,\phi)\,d\Omega}.
$$

This is the effective area of the instrument's angular response, not the object's true angular area. For a top-hat response of half-angle $\Delta\theta$:

$$
\Omega_{\rm beam}\simeq\pi(\Delta\theta)^2.
$$

An unresolved source has $\Omega_{\rm src}\ll\Omega_{\rm beam}$. For a circular Gaussian with full width at half maximum $\theta_{\rm FWHM}$:

$$
\Omega_{\rm beam}=\frac{\pi}{4\ln2}\theta_{\rm FWHM}^2.
$$

The angular area relevant to actual background noise also depends on the estimator. For example, an optimal PSF fit in uniform white noise, with a unit-integral PSF $p(\Omega)$, involves $\Omega_{\rm eff}=1/\int p^2d\Omega$. This generally differs from the peak-normalized $\int P\,d\Omega$, but shares the same angular-scale-squared dependence for a self-similar PSF.

### 10.6 Why Is the Diffraction Angular Scale $\lambda/D$?

Across an aperture of diameter $D$, waves offset from the optical axis by a small angle $\theta$ have a path difference

$$
\Delta\ell\simeq D\sin\theta\simeq D\theta.
$$

When the path difference becomes comparable to a wavelength, contributions from different aperture positions begin to interfere destructively:

$$
D\theta\sim\lambda
\quad\Longrightarrow\quad
\boxed{\theta_{\rm beam}\sim\frac{\lambda}{D}}.
$$

The exact diffraction pattern of a uniformly illuminated circular aperture is the Airy pattern:

$$
P(\theta)=
\left[\frac{2J_1(x)}{x}\right]^2,\qquad
x=\frac{\pi D\sin\theta}{\lambda}.
$$

Here $J_1$ is the Bessel function of the first kind of order one, unrelated to the mean radiation intensity $J_\nu$. The radius of the first dark ring is approximately

$$
\theta_{\rm null}=1.22\frac{\lambda}{D}.
$$

Solid angle is a two-dimensional angular area, so

$$
\boxed{\Omega_{\rm beam}\propto(\lambda/D)^2}.
$$

The course expression $\Omega\simeq(\pi/4)(\lambda/D)^2$ estimates a disk by treating $\lambda/D$ as a rough angular diameter. It is not the exact area enclosed by the first Airy minimum. Different beam definitions give different coefficients without changing the $D^{-2}$ scaling.

For example, the effective area and full response beam of an ideal lossless antenna satisfy the antenna theorem

$$
A_{\rm eff}\Omega_{\rm beam}=\lambda^2.
$$

Compatible definitions of effective area and beam must be used. One cannot mix the disk area inside the first dark ring, geometric collecting area, and an arbitrary top-hat coefficient and expect exact equality.

### 10.7 How Do Point-Source Signal and Background Scale with Aperture?

Consider an unresolved point source with fixed observing band, efficiency, and background. Denote its photon flux density by $\phi_\nu$ and the effective area by

$$
A_{\rm eff}=\eta\frac{\pi D^2}{4}.
$$

The measurement region retains a fixed fraction $q$ of source light and has an effective background angular area $\Omega_{\rm eff}$. For a simple aperture, $\Omega_{\rm eff}$ is just the aperture area. Then

$$
N_{\rm src}=q\phi_\nu A_{\rm eff}\Delta\nu\,t,
$$

$$
N_{\rm bkg}
=\mathcal I_{\nu,\rm bkg}\Omega_{\rm eff}
A_{\rm eff}\Delta\nu\,t.
$$

The course simplification takes $q\simeq1$. Retaining $q$ reminds us that a real Airy pattern has wings, so a finite aperture does not strictly collect every photon.

In the diffraction limit, choosing an aperture that encloses a fixed fraction of the PSF keeps $q$ approximately constant:

$$
A_{\rm eff}\propto D^2,\qquad
\Omega_{\rm eff}\propto\lambda^2D^{-2}.
$$

At fixed wavelength and exposure time:

$$
\boxed{N_{\rm src}\propto D^2},\qquad
\boxed{N_{\rm bkg}\propto A_{\rm eff}\Omega_{\rm eff}\propto D^0}.
$$

The count rate from uniform background within one diffraction-scaled measurement element is approximately constant: increased collecting area cancels decreased acceptance solid angle on the sky.

### 10.8 Full Substitution into the Signal-to-Noise Ratio

Using the expression for a known mean background:

$$
\begin{aligned}
\mathrm{S/N}
&=\frac{q\phi_\nu A_{\rm eff}\Delta\nu\,t}
{\sqrt{(q\phi_\nu+
\mathcal I_{\nu,\rm bkg}\Omega_{\rm eff})
A_{\rm eff}\Delta\nu\,t}}\\
&=\boxed{
\frac{q\phi_\nu\sqrt{A_{\rm eff}\Delta\nu\,t}}
{\sqrt{q\phi_\nu+
\mathcal I_{\nu,\rm bkg}\Omega_{\rm eff}}}
}.
\end{aligned}
$$

In the background-limited regime, $\mathcal I_{\nu,\rm bkg}\Omega_{\rm eff}\gg q\phi_\nu$:

$$
\mathrm{S/N}\simeq
q\phi_\nu
\sqrt{\frac{A_{\rm eff}\Delta\nu\,t}
{\mathcal I_{\nu,\rm bkg}\Omega_{\rm eff}}}.
$$

Thus

$$
\mathrm{S/N}\propto
\sqrt{\frac{A_{\rm eff}}{\Omega_{\rm eff}}}
\sqrt{\Delta\nu\,t}.
$$

Substituting the diffraction scale:

$$
\sqrt{\frac{A_{\rm eff}}{\Omega_{\rm eff}}}
\propto\sqrt{\frac{D^2}{\lambda^2/D^2}}
=\frac{D^2}{\lambda}.
$$

At fixed wavelength and bandwidth:

$$
\boxed{\mathrm{S/N}\propto D^2\sqrt t}.
$$

Doubling the diameter quadruples the signal. The background counts and noise in the corresponding diffraction element remain approximately constant, so the signal-to-noise ratio quadruples. Both cases must remain unresolved and background-limited for this comparison to apply.

The explicit $1/\lambda$ factor is only a mathematical scaling with other quantities held fixed. In a real comparison across bands, the source spectrum, background, efficiency, and bandwidth also vary, so this factor alone cannot identify the more sensitive band.

### 10.9 How Is the Time Needed for a Fixed Signal-to-Noise Ratio Found?

Define the count rates

$$
r_{\rm src}=q\phi_\nu A_{\rm eff}\Delta\nu,\qquad
r_{\rm bkg}=\mathcal I_{\nu,\rm bkg}
\Omega_{\rm eff}A_{\rm eff}\Delta\nu.
$$

Then

$$
\mathrm{S/N}
=\frac{r_{\rm src}t}{\sqrt{(r_{\rm src}+r_{\rm bkg})t}}
=\frac{r_{\rm src}\sqrt t}{\sqrt{r_{\rm src}+r_{\rm bkg}}}.
$$

For a target value $Q$, square the equation and solve for $t$:

$$
\boxed{
t=Q^2\frac{r_{\rm src}+r_{\rm bkg}}{r_{\rm src}^2}
}.
$$

Substituting the physical quantities:

$$
\boxed{
t=Q^2
\frac{q\phi_\nu+\mathcal I_{\nu,\rm bkg}\Omega_{\rm eff}}
{q^2\phi_\nu^2A_{\rm eff}\Delta\nu}
}.
$$

In the background-limited regime:

$$
t\simeq
Q^2\frac{\mathcal I_{\nu,\rm bkg}\Omega_{\rm eff}}
{q^2\phi_\nu^2A_{\rm eff}\Delta\nu}.
$$

Thus, with all other conditions fixed,

$$
\boxed{
t\propto\frac{\Omega_{\rm eff}}{A_{\rm eff}}
\propto D^{-4}
}.
$$

Doubling the diameter reduces the required time to $1/16$ of its original value. This is an ideal scaling: further increases in aperture may make source noise dominant or resolve the source, in which case $D^{-4}$ no longer applies.

### 10.10 Comparison with Source-Dominated and Seeing-Limited Cases

When the source dominates:

$$
\mathrm{S/N}\simeq\sqrt{N_{\rm src}}
\propto D\sqrt t,\qquad
t_{\rm fixed\ Q}\propto D^{-2}.
$$

If atmospheric seeing limits the angular resolution, $\Omega_{\rm eff}\propto\theta_{\rm seeing}^2$ and does not continue shrinking with $D^{-2}$. For a background-limited point source:

$$
\boxed{
\mathrm{S/N}\propto\frac{D}{\theta_{\rm seeing}}\sqrt t
},\qquad
\boxed{
t_{\rm fixed\ Q}\propto\frac{\theta_{\rm seeing}^2}{D^2}
}.
$$

| Regime | Signal-to-noise with other conditions fixed | Time for fixed signal-to-noise |
|---|---|---|
| Point source, dominated by source Poisson noise | $D\sqrt t$ | $D^{-2}$ |
| Point source, uniform-background dominated, diffraction limited | $D^2\sqrt t$ | $D^{-4}$ |
| Point source, uniform-background dominated, seeing limited | $(D/\theta_{\rm seeing})\sqrt t$ | $\theta_{\rm seeing}^2D^{-2}$ |

A better observing site or adaptive optics can reduce the angular area needed to measure a point source and thus reduce background. For a resolved extended source, the measurement area and signal region must be reconsidered; point-source results cannot simply be reused.

### 10.11 Classroom extension — English summary

For an unresolved source of photon flux density $\phi_\nu$, a fixed PSF-matched aperture retaining a fraction $q$ of the source photons gives

$$
N_{\rm src}=q\phi_\nu A_{\rm eff}\Delta\nu\,t,\qquad
N_{\rm bkg}=\mathcal I_{\nu,\rm bkg}
\Omega_{\rm eff}A_{\rm eff}\Delta\nu\,t.
$$

In the background-limited Poisson regime,

$$
\mathrm{S/N}\simeq q\phi_\nu
\sqrt{\frac{A_{\rm eff}\Delta\nu\,t}
{\mathcal I_{\nu,\rm bkg}\Omega_{\rm eff}}}.
$$

For a diffraction-limited telescope, $A_{\rm eff}\propto D^2$ and $\Omega_{\rm eff}\propto(\lambda/D)^2$. At fixed wavelength and bandwidth, with the other assumptions unchanged,

$$
\boxed{\mathrm{S/N}\propto D^2\sqrt t,\qquad
t_{\rm fixed\ S/N}\propto D^{-4}}.
$$

These scalings apply while the source remains unresolved and the observations remain background limited.

## 11. Problem 1.5: Brightness Temperature of a Supernova Remnant

### 11.1 Given Data

A supernova remnant has observed angular diameter

$$
\theta=4.3\ \mathrm{arcmin},
$$

Its flux density at $100\ \mathrm{MHz}=10^8\ \mathrm{Hz}$ is

$$
f_\nu=1.6\times10^{-19}\
\mathrm{erg\,cm^{-2}\,s^{-1}\,Hz^{-1}}
=1.6\times10^4\ \mathrm{Jy}.
$$

Assuming thermal radiation, the problem asks for the brightness temperature and spectral regime, the effect of a more compact emitting region, the peak frequency predicted under a blackbody assumption, and implications for the matter temperature.

### 11.2 (a) From Angular Area to Brightness Temperature

Convert the angular diameter to radians:

$$
\theta=4.3\frac{\pi}{180\times60}
=1.25082\times10^{-3}\ \mathrm{rad}.
$$

Estimate a disk area, noting that the given angular size is a diameter:

$$
\Omega_{\rm src}=\pi\left(\frac{\theta}{2}\right)^2
=1.22879\times10^{-6}\ \mathrm{sr}.
$$

The flux gives the disk-averaged intensity, equal to the local intensity everywhere if the brightness is uniform:

$$
\overline I_\nu=\frac{f_\nu}{\Omega_{\rm src}}
=1.30209\times10^{-13}\
\mathrm{erg\,cm^{-2}\,s^{-1}\,Hz^{-1}\,sr^{-1}}.
$$

Use the RJ approximation first and check its validity after the calculation:

$$
T_b=\frac{c^2\overline I_\nu}{2k\nu^2}.
$$

Using

$$
c=2.99792458\times10^{10}\ \mathrm{cm\,s^{-1}},\qquad
k=1.380649\times10^{-16}\ \mathrm{erg\,K^{-1}},
$$

we obtain

$$
\boxed{T_b=4.23808\times10^7\ \mathrm K
\simeq4.2\times10^7\ \mathrm K}.
$$

Checking the RJ condition:

$$
\frac{h\nu}{k}=4.79924\times10^{-3}\ \mathrm K,
$$

$$
\boxed{\frac{h\nu}{kT_b}=1.1324\times10^{-10}\ll1}.
$$

Thus 100 MHz lies extremely deep in the Rayleigh–Jeans regime. Computing with an approximation and then verifying that the result satisfies its assumptions is a self-consistency check. The approximation error here is entirely negligible.

If $T\ge T_b$ under the thermal-source, no-background assumptions above, checking with $T_b$ already establishes that $h\nu/kT$ evaluated at the matter temperature is even smaller.

### 11.3 (b) A More Compact Emitting Region

At the same $f_\nu$,

$$
T_b=\frac{\lambda^2f_\nu}{2k\Omega_{\rm src}}
\propto\Omega_{\rm src}^{-1}\propto\theta^{-2}.
$$

If the true emitting area is a fraction $f_{\rm fill}<1$ of the current estimate:

$$
\boxed{T_{b,\rm actual}=\frac{T_{b,\rm estimated}}{f_{\rm fill}}}.
$$

For example, halving the true angular diameter reduces the area to $1/4$ and raises the brightness temperature fourfold. Thus $4.2\times10^7\ \mathrm K$ is a minimum mean brightness-temperature estimate based on the given angular extent, not a confirmed local physical temperature.

### 11.4 (c) Where Would a Blackbody Spectrum Peak?

With the additional assumption of a single-temperature blackbody, $T=T_b$. For the peak of $B_\nu$:

$$
\nu_{\max}=\frac{2.821439\,kT_b}{h}.
$$

Substituting the estimated value:

$$
\boxed{\nu_{\max}\simeq2.4915\times10^{18}\ \mathrm{Hz}}.
$$

The corresponding photon energy is

$$
\boxed{h\nu_{\max}\simeq10.30\ \mathrm{keV}},
$$

This lies in the X-ray band. The wavelength corresponding to this frequency is $c/\nu_{\max}\simeq0.1203\ \mathrm{nm}$, but it is not the peak wavelength of the $B_\lambda$ curve.

A smaller true angular area and higher blackbody temperature would imply a higher peak frequency. Assuming thermal radiation alone, rather than a blackbody, is insufficient to determine the full spectral peak from a single radio measurement; the frequency-dependent optical depth is generally also needed.

### 11.5 (d) Constraints on the Matter Temperature

For isothermal LTE thermal emission with no incident background and negligible scattering:

$$
I_\nu=B_\nu(T)(1-e^{-\tau_\nu})\le B_\nu(T).
$$

Using $I_\nu=B_\nu(T_b)$ and the monotonicity of $B_\nu(T)$:

$$
\boxed{T\ge T_b\gtrsim4.2\times10^7\ \mathrm K}.
$$

In the optically thick limit, $T\simeq T_b$. In the optically thin RJ limit, $T_b\simeq T\tau_\nu$, so the physical temperature can be higher. For nonuniform temperature, the observation does not imply that every parcel of gas is at least this hot; a sufficiently hot emitting component is needed to supply the observed brightness.

Such a high brightness temperature imposes a demanding temperature requirement on a thermal interpretation and motivates considering nonthermal emission. Synchrotron radiation produces the radio continuum of many supernova remnants, but this problem's single-frequency flux and angular size alone do not prove that the source is nonthermal; additional evidence such as the spectral shape is needed.

### 11.6 Problem 1.5 — English solution

**(a)** Approximating the observed remnant by a uniform circular disk,

$$
\theta=4.3\frac{\pi}{180\times60}
=1.2508\times10^{-3}\ \mathrm{rad},
$$

$$
\Omega=\pi(\theta/2)^2=1.2288\times10^{-6}\ \mathrm{sr}.
$$

The mean specific intensity is

$$
I_\nu=\frac{f_\nu}{\Omega}
=1.3021\times10^{-13}\
\mathrm{erg\,s^{-1}\,cm^{-2}\,Hz^{-1}\,sr^{-1}}.
$$

Using the Rayleigh–Jeans relation gives

$$
\boxed{T_b=\frac{c^2I_\nu}{2k\nu^2}
=4.24\times10^7\ \mathrm K}.
$$

Since $h\nu/(kT_b)=1.13\times10^{-10}\ll1$, this approximation is self-consistent: the observation lies deep in the Rayleigh–Jeans regime.

**(b)** At fixed flux density, $T_b\propto\Omega^{-1}\propto\theta^{-2}$. A smaller emitting region therefore has a higher brightness temperature, so the value above is a lower estimate.

**(c)** If the radiation is blackbody radiation, the peak of the spectrum per unit frequency occurs at

$$
\boxed{
\nu_{\max}=2.82144\frac{kT_b}{h}
\simeq2.49\times10^{18}\ \mathrm{Hz}
},
$$

corresponding to $h\nu_{\max}\simeq10.3\ \mathrm{keV}$. A smaller true emitting area would imply a higher blackbody temperature and hence a higher peak frequency.

**(d)** For an isothermal thermal source with negligible incident background and scattering,

$$
I_\nu=B_\nu(T)(1-e^{-\tau_\nu})\le B_\nu(T).
$$

Since $B_\nu$ increases monotonically with temperature, $T\ge T_b$. Thus

$$
\boxed{T\gtrsim4.2\times10^7\ \mathrm K}
$$

under the thermal-emission assumptions. Equality is approached for an optically thick source; optically thin thermal emission requires a higher material temperature.

## 12. Classroom Extensions of 1.5: Antenna Temperature, Gain, System Temperature, and SEFD

### 12.1 Why Express Radio Power as a Temperature?

In the RJ limit, intensity depends linearly on temperature:

$$
I_\nu=\frac{2kT_b}{\lambda^2}.
$$

Signals, sky background, and receiver noise can therefore be expressed in the same equivalent-temperature units, making them easy to add and compare. This does not mean that the source physically warms the antenna by a few kelvin; temperature is another unit for power here.

Antenna temperature $T_A$ expresses the receiving antenna's response, whereas intrinsic source brightness temperature $T_b$ expresses radiation intensity per unit angular area of the source. They are not interchangeable.

### 12.2 The Factor of Two for Single and Dual Polarization

Adopt the standard single-receiver-polarization convention, with $f_\nu$ the total flux density of an unpolarized point source:

$$
P_{\nu,\rm src}^{(1)}
=\frac12A_{\rm eff}f_\nu
=k\Delta T_A.
$$

Half the source power enters one polarization channel. Hence

$$
\boxed{\Delta T_A=\frac{A_{\rm eff}f_\nu}{2k}}.
$$

The single-polarization system noise power per unit frequency is

$$
P_{\nu,\rm noise}^{(1)}=kT_{\rm sys}.
$$

Adding the powers of two identical orthogonal polarization channels gives:

$$
P_{\nu,\rm src}^{(2)}=A_{\rm eff}f_\nu
=2k\Delta T_A,\qquad
P_{\nu,\rm noise}^{(2)}=2kT_{\rm sys}.
$$

The course expression $P_\nu/(2k)$ can be interpreted as total dual-polarization spectral power. Do not mix it with the single-polarization expression $P_\nu/k$. The quantity $P_\nu$ is power per unit frequency; narrowband total power is $P\simeq P_\nu\Delta\nu$.

### 12.3 Why Does an Unresolved Source Suffer Beam Dilution?

For an ideal lossless antenna, take the normalized response $P(\Omega)$ and a compatible effective area:

$$
A_{\rm eff}\Omega_{\rm beam}=\lambda^2.
$$

Antenna temperature can be expressed as a beam-weighted brightness temperature:

$$
T_A=\frac{1}{\Omega_{\rm beam}}
\int P(\Omega)T_b(\Omega)\,d\Omega.
$$

If the source is much smaller than the beam, centered on it, and approximately uniform, with $P\simeq1$ across the source:

$$
\boxed{
T_A\simeq T_b\frac{\Omega_{\rm src}}{\Omega_{\rm beam}}
}.
$$

For example, a source at $T_b=10^4\ \mathrm K$ covering only 1% of the beam area produces an antenna temperature of approximately $100\ \mathrm K$.

For a sufficiently large uniform source filling the ideal antenna beam, $T_A\simeq T_b$. Real instruments require corrections for main-beam efficiency, losses, and sidelobes; this ideal equality cannot be applied unconditionally.

Thus the brightness temperature quoted in the course notes for an unresolved source corresponds more precisely to antenna temperature or beam-averaged temperature. Measured flux and instrument area determine $\Delta T_A$; intrinsic source $T_b$ still requires the source angular size.

### 12.4 What Is Telescope Gain $G$, and Why Define It?

Define

$$
\boxed{G=\frac{\Delta T_A}{f_\nu}}.
$$

This is radio point-source gain, commonly in K/Jy, not an electronic amplification factor or dimensionless antenna directional gain.

If $f_\nu$ is expressed in SI flux-density units, the formula is $G_{\rm SI}=A_{\rm eff}/(2k)$. Using Jy requires a unit conversion:

$$
\boxed{
G\ [\mathrm{K/Jy}]
=\frac{A_{\rm eff}\ [\mathrm{m^2}]}{2k\ [\mathrm{J/K}]}
\times10^{-26}
}.
$$

Numerically,

$$
\boxed{
G\simeq3.6215\times10^{-4}
\left(\frac{A_{\rm eff}}{\mathrm{m^2}}\right)
\mathrm{K/Jy}
}.
$$

For example, $G=2\ \mathrm{K/Jy}$ means that a centered point source of $1\ \mathrm{Jy}$ produces a signal of $\Delta T_A=2\ \mathrm K$.

Gain connects the units used for astronomical sources and receivers:

$$
\boxed{\Delta T_A=Gf_\nu},
\qquad
\boxed{f_\nu=\Delta T_A/G}.
$$

It is used to calibrate observed flux, compare the response to the same point source in different instruments, and relate that response to effective collecting area. Increasing downstream electronic amplification generally amplifies both signal and input noise; it is not equivalent to improving point-source sensitivity as defined here.

### 12.5 What Is System Temperature $T_{\rm sys}$?

It is the equivalent temperature of the total noise power referred to the receiver input, commonly including

$$
T_{\rm sys}\simeq
T_{\rm receiver}+T_{\rm sky}+T_{\rm atmosphere}
+T_{\rm spillover}+\cdots.
$$

A rigorous combination of these terms accounts for transmission, efficiencies, and the reference-plane convention. Here the expression illustrates their physical origins. Higher system temperature means greater mean noise power.

However, $T_{\rm sys}$ is not the final measurement rms error. Averaging over bandwidth and time can reduce the temperature measurement error far below $T_{\rm sys}$, which is why weak sources can be detected.

Gain alone is insufficient:

| Telescope | $G$ | $T_{\rm sys}$ | $\Delta T_A/T_{\rm sys}$ for $1\ \mathrm{Jy}$ |
|---|---:|---:|---:|
| A | $2\ \mathrm{K/Jy}$ | $100\ \mathrm K$ | $2/100=0.02$ |
| B | $1\ \mathrm{K/Jy}$ | $20\ \mathrm K$ | $1/20=0.05$ |

Although B has lower gain, its source-to-system-noise ratio is larger. The relevant quantity is $G/T_{\rm sys}$.

### 12.6 Why Define SEFD, and Why Does a Lower Value Mean Better Sensitivity?

SEFD is the **System Equivalent Flux Density**:

$$
\boxed{\mathrm{SEFD}=\frac{T_{\rm sys}}G}.
$$

In physical units:

$$
\mathrm{SEFD}_{\rm SI}=\frac{2kT_{\rm sys}}{A_{\rm eff}}.
$$

Converting to Jy:

$$
\boxed{
\mathrm{SEFD}\ [\mathrm{Jy}]
=\frac{2kT_{\rm sys}}{A_{\rm eff}}\times10^{26}
}
$$

Here $k$ is in SI units and $A_{\rm eff}$ in $\mathrm{m^2}$.

Its physical meaning is that an unpolarized point source whose flux density equals the SEFD adds an antenna temperature equal to the blank-field system temperature:

$$
f_\nu=\mathrm{SEFD}
\quad\Longrightarrow\quad
\Delta T_A=G\,\mathrm{SEFD}=T_{\rm sys}.
$$

SEFD combines collecting area and system noise into one quantity in Jy, directly comparable with a source flux. In the table above, A has SEFD $50\ \mathrm{Jy}$ and B has $20\ \mathrm{Jy}$, so B has better point-source sensitivity.

For the same source:

$$
\boxed{
\frac{\Delta T_A}{T_{\rm sys}}
=\frac{f_\nu}{\mathrm{SEFD}}
}.
$$

A lower SEFD makes a given source stronger relative to the system background. SEFD can be reduced by lowering $T_{\rm sys}$ or increasing $A_{\rm eff}$.

This ratio compares mean signal power with mean system noise power, not the final integrated S/N. An SEFD-equivalent source is not a detection threshold; averaging allows sources far fainter than the SEFD to be detected.

### 12.7 The Radiometer Equation and Exposure Time

For an ideal radio continuum measurement of a weak source, with stable gain, effective bandwidth $\Delta\nu$, and integration time $t$:

$$
\sigma_T\simeq
\frac{T_{\rm sys}}{\sqrt{n_{\rm pol}\Delta\nu\,t}},
$$

Here $n_{\rm pol}=1$ or 2 counts the independent polarizations combined. Dividing by the gain:

$$
\boxed{
\sigma_f\simeq\frac{\mathrm{SEFD}}
{\sqrt{n_{\rm pol}\Delta\nu\,t}}
}.
$$

Thus

$$
\boxed{
\mathrm{S/N}\simeq
\frac{f_\nu}{\mathrm{SEFD}}
\sqrt{n_{\rm pol}\Delta\nu\,t}
}.
$$

Under identical observing conditions, halving the SEFD doubles S/N. For a target $Q$:

$$
\boxed{
t=
\frac1{n_{\rm pol}\Delta\nu}
\left(\frac{Q\,\mathrm{SEFD}}{f_\nu}\right)^2
}.
$$

Thus halving the SEFD reduces the time to $1/4$. Doubling the bandwidth halves the time, provided the relevant spectral and noise assumptions remain valid.

Example: $f_\nu=1\ \mathrm{mJy}$, $\mathrm{SEFD}=20\ \mathrm{Jy}$, $n_{\rm pol}=2$, $\Delta\nu=100\ \mathrm{MHz}$, and target $Q=5$:

$$
t=
\frac{(5\times20/0.001)^2}{2\times10^8}
=50\ \mathrm s.
$$

This is the ideal on-source integration time. If an independent equal-time on/off background measurement is needed, each integration lasts $t$, the differenced noise increases by $\sqrt2$, and total observing time also includes the off-source exposure. Instrumental losses and calibration errors alter the actual requirement.

Strong-source self-noise, gain drifts, confusion noise, and other effects can invalidate the simple weak-source formula. Section 10 uses a Poisson photon-counting model; this section uses the radiometer noise model for received radio power. Both can yield an averaging gain proportional to $\sqrt{\Delta\nu t}$, but the same noise formula cannot be applied indiscriminately to every detection method.

### 12.8 How Does an On/Off Measurement Eliminate Unknown Amplification?

Use a calibrator with known $f_{\nu,\rm cal}$. Following the course convention for total dual-polarization spectral power, let the common downstream amplification factor be $C$:

$$
P'_{\nu,\rm off}=C\,2kT_{\rm sys},
$$

$$
P'_{\nu,\rm on}-P'_{\nu,\rm off}
=C\,A_{\rm eff}f_{\nu,\rm cal}.
$$

The same ratio can be used for powers integrated over equal bandwidths because the common bandwidth factor cancels. Assuming stable backgrounds and instrumental responses between on and off measurements, the ratio gives

$$
\frac{P'_{\rm on}-P'_{\rm off}}{P'_{\rm off}}
=\frac{A_{\rm eff}f_{\nu,\rm cal}}{2kT_{\rm sys}}
=\frac{Gf_{\nu,\rm cal}}{T_{\rm sys}}.
$$

Therefore

$$
\boxed{
\frac{G}{T_{\rm sys}}=
\frac{P'_{\rm on}-P'_{\rm off}}
{P'_{\rm off}f_{\nu,\rm cal}}
},
$$

$$
\boxed{
\mathrm{SEFD}
=f_{\nu,\rm cal}
\frac{P'_{\rm off}}{P'_{\rm on}-P'_{\rm off}}
}.
$$

The point-source sensitivity metric can be measured without knowing the absolute downstream amplification. A calibrator flux in Jy naturally yields an SEFD in Jy.

### 12.9 The Three Most Useful Relations

$$
\boxed{\Delta T_A=Gf_\nu},
\qquad
\boxed{\mathrm{SEFD}=\frac{T_{\rm sys}}G},
$$

$$
\boxed{
\sigma_f=\frac{\mathrm{SEFD}}{\sqrt{n_{\rm pol}\Delta\nu t}}
}.
$$

The gain $G$ tells us how many kelvin of source signal one jansky produces; SEFD tells us how many janskys of point-source flux correspond to the mean system noise power; only $\sigma_f$ gives the random measurement error for a specified observing bandwidth and duration.

### 12.10 Radio extension — English summary

For an unpolarized point source of total flux density $f_\nu$, a single polarization receives

$$
P_{\nu,\rm src}^{(1)}=\frac12A_{\rm eff}f_\nu=k\Delta T_A.
$$

The point-source gain is $G=\Delta T_A/f_\nu$, conventionally expressed in K/Jy. The system equivalent flux density is

$$
\mathrm{SEFD}=\frac{T_{\rm sys}}G.
$$

It is the source flux density that would produce an antenna-temperature increment equal to the off-source system temperature. In the ideal weak-source radiometer limit,

$$
\sigma_f=\frac{\mathrm{SEFD}}{\sqrt{n_{\rm pol}\Delta\nu t}}.
$$

Thus a smaller SEFD gives a lower flux-density uncertainty for the same bandwidth and integration time. On/off measurements of a known calibrator provide

$$
\mathrm{SEFD}
=f_{\nu,\rm cal}
\frac{P'_{\rm off}}{P'_{\rm on}-P'_{\rm off}},
$$

with the common instrumental scale factor cancelling in the ratio.

## 13. Review Checklist and Preparation for the Next Lecture

### 13.1 Derivations to Be Able to Complete Independently

- [ ] Distinguish LTE matter, a blackbody radiation field, and radiative equilibrium.
- [ ] Derive the optical-depth form from $dI_\nu/ds=-\alpha_\nu I_\nu+j_\nu$ and explain the sign convention.
- [ ] Solve the constant-source-function transfer equation and explain what isothermality and LTE each provide.
- [ ] Explain the zero derivative at $I_\nu=S_\nu$ as cancellation between absorption and emission.
- [ ] Use exponential attenuation weights to explain why a thick medium reveals its surface layers, not why propagation losses become smaller.
- [ ] Explain how temperature gradients, scattering, and frequency-dependent optical depth cause optically thick media to depart from blackbody emission.
- [ ] Calculate the $4\pi$ factor for energy density and the $\pi$ factor for outward flux separately, and explain the projected disk.
- [ ] Derive $u=a_{\rm rad}T^4$ from equal mixed partial derivatives of a state function.
- [ ] Derive $S_{\rm ent}=(4/3)a_{\rm rad}VT^3$ to complete Problem 1.6.
- [ ] Compare reversible adiabatic radiation, $T\propto R^{-1}$, with a monatomic gas, $T\propto R^{-2}$.
- [ ] Obtain $g(\nu)=8\pi\nu^2/c^3$ by counting wavevector states, then derive the Planck spectrum.
- [ ] Check the RJ condition $h\nu/kT\ll1$ and estimate the approximation error.
- [ ] Distinguish the peaks of $B_\nu$ and $B_\lambda$, and use $E(\mathrm{eV})=1240/\lambda(\mathrm{nm})$ to identify the spectral band.
- [ ] Distinguish brightness, color, and effective temperatures from the physical matter temperature.
- [ ] Solve Problem 1.3, distinguishing central, source-averaged, and beam-averaged intensity.
- [ ] Derive $\mathrm{S/N}\propto D^2\sqrt t$ and $t\propto D^{-4}$ for a background-limited, diffraction-limited point source and state the assumptions.
- [ ] Solve Problem 1.5 to obtain $T_b\simeq4.2\times10^7\ \mathrm K$ and the conditional blackbody peak.
- [ ] Express flux density in Jy and correctly convert units in K/Jy gain.
- [ ] Distinguish source $T_b$ from instrumental $T_A$ and explain beam dilution.
- [ ] Calculate $\sigma_f$ and integration time from SEFD, and derive the on/off calibration formula.

### 13.2 Common Sources of Confusion

| Misleading statement | Correct interpretation |
|---|---|
| Having a temperature implies LTE | A temperature or Maxwellian velocity distribution alone does not guarantee LTE excitation and ionization populations |
| Radiative equilibrium means blackbody radiation | Zero net radiative heating does not require a blackbody distribution at every frequency |
| $S_\nu=B_\nu$ means $I_\nu=B_\nu$ | The former constrains the medium, the latter the actual radiation; transfer must still be solved |
| A zero right-hand side of the transfer equation means no radiation | Absorption and emission cancel, leaving intensity unchanged |
| Optically thick means less attenuation | Incident light is attenuated more strongly; emergent radiation is set by the near-surface source function |
| A large total scattering depth necessarily gives a blackbody | Thermalization conditions are needed, and boundary layers can still cause nonblackbody emission |
| Isothermal means constant absorption coefficient | Isothermality fixes only $T$; $\alpha_\nu(s)$ may still vary |
| $u=4\pi B/c$ and $F=\pi B$ use the same angular integral | The former sums energy over all directions; the latter integrates the outward hemisphere with a projection factor |
| No heat exchange always means constant entropy | Irreversible entropy production must also be absent |
| $B_\lambda$ is obtained by simply changing the variable in $B_\nu$ | The factor $\lvert d\nu/d\lambda\rvert=c/\lambda^2$ is also required |
| Measured radio antenna temperature equals source temperature | Beam dilution matters, and nonthermal sources cannot be interpreted directly in terms of gas temperature |
| $D^{-4}$ applies to any source | It requires an unresolved source, background-limited observation, diffraction-limited resolution, and related assumptions |
| Higher gain always means better sensitivity | $T_{\rm sys}$ also matters; compare SEFD |
| SEFD is the minimum detectable flux | It is a noise-equivalent flux density; detection uncertainty also depends on bandwidth, time, and measurement method |

### 13.3 Preparing for the Next Lecture

According to the 2026 schedule checked for these notes, the September 21 assignment is RL §1.6 and Problems 1.8 and 1.9, with 1.7 if time permits. Key concepts include Einstein coefficients, absorption and emission lines, the temperature structure of outer stellar layers, and Doppler line profiles from radial winds.

A cold outward wind in front of a star produces blueshifted absorption, while other parts of the wind contribute emission, allowing a P Cygni profile. Inward motion can produce an inverse P Cygni feature with redshifted absorption. This is a guide for subsequent reading; a full wind model need not be solved before completing the three current exercises.

## 14. Resources and References

1. [AST1440 course homepage](https://www.astro.utoronto.ca/~mhvk/AST1440/); the schedule in these notes follows the September 17, 2026 version.
2. [Thu 17 Sep — Thermal Emission](https://www.astro.utoronto.ca/~mhvk/AST1440/#orgeae1774): assigned reading and classroom extensions.
3. Rybicki & Lightman, *Radiative Processes in Astrophysics*, §1.5, printed pp. 15–27; Problems 1.3, 1.5, and 1.6, printed pp. 46–47. This is the basis for mode counting, blackbody thermodynamics, and temperature definitions.
4. [NRAO: Essential Radio Astronomy, Chapter 3](https://www.cv.nrao.edu/~sransom/web/Ch3.html): effective area, beams, antenna temperature, and the radiometer equation; especially §3.1.6 on the distinction between source brightness temperature and antenna temperature.

The derivations and numerical calculations standardize notation and clarify conditions in the original discussion: $f_\nu$ denotes flux density and $S_\nu$ exclusively the source function. They distinguish hemispheric from full-space integrals, reversible adiabatic evolution, scattering thermalization from boundary effects, and single- from dual-polarization power.
