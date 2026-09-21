---
title: 'AST1440: Electron Scattering, Eddington Luminosity, and Strong Magnetic Fields'
description: >-
  Derivations of electron scattering and the Thomson cross section, radiation
  force and Eddington luminosity, and corrections from strong magnetic fields,
  beaming, and accretion columns.
date: '2026-09-14'
tags:
  - AST1440
  - Electron scattering
  - Eddington luminosity
order: 2
sourceHash: a962d9511b0ec4623ecc8c6e157dc9e1a0677157ac1f63f740eb723232602fab
translation: AI-assisted English translation
---

# AST1440: Electron Scattering, Eddington Luminosity, and Strong Magnetic Fields

> Lecture: Monday, September 14, 2026.  
> Organization: Following the lecture topics, conceptual questions, derivations, intuitive explanations, and common calculation pitfalls are integrated into the relevant sections.  
> Course website: [AST1440 — Radiation](https://www.astro.utoronto.ca/~mhvk/AST1440/). The website changes over time; these notes use the previously checked 2026 schedule. The 2025 thermal-radiation schedule, initially read in error, is not included in this lecture's scope.

## 1. Main thread and reading scope

The central questions are: **Why does light push matter? Why does this limit astronomical luminosities? How do strong magnetic fields change that limit?**

The physical sequence is:

$$
\text{Light accelerates electrons}
\longrightarrow\text{Electrons scatter light and exchange momentum}
\longrightarrow\text{Radiation force competes with gravity}
\longrightarrow L_{\rm Edd}
\longrightarrow\text{Corrections from strong magnetic fields and nonspherical geometry}.
$$

The assigned reading is Rybicki & Lightman (RL), §§1.1–1.4; class discussion emphasizes Problem 1.4 and its ULX extension. Supplementary electron-scattering references are Padmanabhan (Pad), §§1.4.4 and 6.4, or RL §§3.4 and 3.6. Material on thermal radiation from September 17, 2026 is not mixed into these notes.

The detailed derivations fill gaps in understanding; their inclusion does not mean that the course website records every derivation step.

## 2. Notation and unit systems: distinguish easily confused quantities

| Symbol | Meaning |
|---|---|
| $e>0$ | Magnitude of the electron charge; the electron's charge is $-e$ |
| $m_e,m_p$ | Electron and proton masses |
| $E_0$ | Peak electric-field amplitude of the wave, not its rms value |
| $\mathbf B_0$ | Applied or background magnetic field, distinguished from the wave's own field |
| $P_{\rm sc}$ | Total power scattered by one particle into all directions |
| $F$ | Local energy flux, in ${\rm erg\,cm^{-2}\,s^{-1}}$ |
| $f_{\rm obs}$ | Energy flux measured by the observer |
| $L$ | Total luminosity, in ${\rm erg\,s^{-1}}$ |
| $\sigma$ | Single-particle scattering cross section, in ${\rm cm^2}$ |
| $\kappa$ | Opacity per unit mass, in ${\rm cm^2\,g^{-1}}$ |
| $\rho$ | Mass density of matter |
| $g_{\rm rad}$ | Radiative acceleration: radiation force per unit mass |
| $\omega,\omega_B$ | Wave angular frequency and electron cyclotron angular frequency |

Unless explicitly labeled SI, all equations below use **Gaussian-cgs units**.

### 2.1 Why is the magnetic Lorentz-force term divided by $c$?

The two unit systems use different expressions:

$$
\begin{aligned}
\text{Gaussian-cgs：}\quad
\mathbf F&=q\left(\mathbf E+\frac{\mathbf v\times\mathbf B}{c}\right),\\
\text{SI：}\quad
\mathbf F&=q(\mathbf E+\mathbf v\times\mathbf B).
\end{aligned}
$$

This reflects different unit definitions, not different physical laws. In Gaussian-cgs, $E$ and $B$ have the same dimensions, so the dimensionless factor $v/c$ is needed to add the two terms. In SI, $vB$ already has the same dimensions as $E$:

$$
[vB]=\frac{\rm m}{\rm s}\frac{{\rm V\,s}}{{\rm m^2}}={\rm V/m}=[E].
$$

A plane wave in vacuum satisfies:

$$
E=B\quad\text{（cgs）},\qquad E=cB\quad\text{（SI）}.
$$

Thus, comparing the wave's own electric and magnetic forces gives the same order-of-magnitude ratio in both systems:

$$
\frac{F_B}{F_E}\sim\frac vc.
$$

For a nonrelativistic electron, the **wave's own magnetic force** is a higher-order effect that may be neglected. This does not justify neglecting an independently present strong background field $\mathbf B_0$.

### 2.2 Common formulas in the two unit systems

| Physical quantity | Gaussian-cgs | SI |
|---|---|---|
| Poynting vector | $\mathbf S=c\mathbf E\times\mathbf B/(4\pi)$ | $\mathbf S=\mathbf E\times\mathbf B/\mu_0$ |
| Magnetic energy density | $u_B=B^2/(8\pi)$ | $u_B=B^2/(2\mu_0)$ |
| Electron cyclotron angular frequency | $\omega_B=eB/(m_ec)$ | $\omega_B=eB/m_e$ |
| Larmor power | $P=2q^2a^2/(3c^3)$ | $P=q^2a^2/(6\pi\varepsilon_0c^3)$ |
| Classical electron radius | $r_e=e^2/(m_ec^2)$ | $r_e=e^2/(4\pi\varepsilon_0m_ec^2)$ |

Using values consistently within either unit system gives the same physical result. Do not insert $B$ measured in gauss directly into an SI formula.

## 3. How is the average incident energy flux calculated?

### 3.1 Starting from the Poynting vector

Consider a vacuum plane wave propagating along $+z$:

$$
\mathbf E=E_0\cos(kz-\omega t)\,\hat{\mathbf x},\qquad
\mathbf B=E_0\cos(kz-\omega t)\,\hat{\mathbf y}.
$$

The electric and magnetic fields are perpendicular and in phase, with equal magnitudes in cgs. The Poynting vector represents electromagnetic energy passing per unit area per unit time:

$$
\mathbf S=\frac{c}{4\pi}\mathbf E\times\mathbf B
=\frac{cE_0^2}{4\pi}\cos^2(kz-\omega t)\,\hat{\mathbf z}.
$$

For an area perpendicular to propagation, the instantaneous flux is

$$
F(t)=\frac{cE_0^2}{4\pi}\cos^2(kz-\omega t).
$$

Since

$$
\cos^2x=\frac{1+\cos2x}{2},\qquad
\langle\cos^2\omega t\rangle=\frac12,
$$

the cycle-averaged flux is

$$
\boxed{\langle F\rangle=\frac{cE_0^2}{8\pi}}.
$$

**The factor $1/2$ comes from time averaging.** If $E_{\rm rms}=E_0/\sqrt2$ is used instead, write

$$
\langle F\rangle=\frac{cE_{\rm rms}^2}{4\pi}.
$$

The corresponding SI result is $\langle F\rangle=\varepsilon_0cE_0^2/2$.

### 3.2 Energy density times propagation speed

The electromagnetic energy density is

$$
u=\frac{E^2+B^2}{8\pi}=\frac{E^2}{4\pi},
\qquad \langle u\rangle=\frac{E_0^2}{8\pi}.
$$

During $dt$, the wave in a length $c\,dt$ in front of area $A$ crosses that area, corresponding to volume $Ac\,dt$. Therefore

$$
\langle F\rangle
=\frac{\langle u\rangle Ac\,dt}{A\,dt}
=c\langle u\rangle
=\frac{cE_0^2}{8\pi}.
$$

## 4. Why do accelerated charges radiate? Deriving the Larmor formula

### 4.1 Starting with the far-zone radiation field

The far-zone radiation electric field of a nonrelativistically accelerated charge is

$$
\mathbf E_{\rm rad}
=\frac{q}{c^2r}
\left[\hat{\mathbf n}\times(\hat{\mathbf n}\times\mathbf a)\right]_{\rm ret}.
$$

This follows from Maxwell's equations or retarded potentials and serves as the electrodynamic starting point. Here $\hat{\mathbf n}$ points toward the observer; the subscript 'ret' means that the acceleration is evaluated at the retarded time.

If the angle between the observation direction and acceleration is $\theta$, then

$$
E_{\rm rad}=\frac{|q|a\sin\theta}{c^2r}.
$$

The radiation field falls as $1/r$, unlike the Coulomb field, which falls as $1/r^2$. It can thus carry finite total outward power to large distances.

### 4.2 Power in each direction from the radiation field

The far-zone radiation field satisfies $\mathbf B_{\rm rad}=\hat{\mathbf n}\times\mathbf E_{\rm rad}$, so

$$
S=\frac{c}{4\pi}E_{\rm rad}^2
=\frac{q^2a^2\sin^2\theta}{4\pi c^3r^2}.
$$

A spherical surface element has area $dA=r^2d\Omega$, and the power through it is

$$
dP=S\,dA,
\qquad
\frac{dP}{d\Omega}=\frac{q^2a^2}{4\pi c^3}\sin^2\theta.
$$

There is therefore no radiation along the acceleration direction; radiation is strongest perpendicular to it.

### 4.3 Integrating over the whole sphere

$$
\begin{aligned}
P&=\frac{q^2a^2}{4\pi c^3}\int\sin^2\theta\,d\Omega,\\
\int\sin^2\theta\,d\Omega
&=\int_0^{2\pi}d\phi\int_0^\pi\sin^3\theta\,d\theta
=2\pi\times\frac43=\frac{8\pi}{3}.
\end{aligned}
$$

This yields

$$
\boxed{P=\frac{2q^2a^2}{3c^3}}.
$$

**The coefficient $2/3$ comes from integrating the angular radiation pattern over the sphere.** The formula gives instantaneous total power at the corresponding emission time, not an automatically cycle-averaged result.

Only if $a(t)=a_0\cos\omega t$ do we further obtain

$$
\boxed{\langle P\rangle=\frac{2q^2}{3c^3}\langle a^2\rangle
=\frac{q^2a_0^2}{3c^3}}.
$$

This form applies to nonrelativistic motion and cannot be used directly near the speed of light.

## 5. Scattering cross sections, the Thomson derivation, and the classical electron radius

### 5.1 What is a scattering cross section? The rain-collection analogy

Imagine incident light as rain and the target's interaction with light as collecting water:

$$
\text{water collected per second}
=\text{rainfall intensity}\times\text{bucket opening area}.
$$

For scattering, the analogous relation is

$$
\text{total scattered power}
=\text{incident energy flux}\times\text{scattering cross section}.
$$

Thus define

$$
\boxed{\sigma=\frac{\langle P_{\rm sc}\rangle}{\langle F_{\rm inc}\rangle}}.
$$

For example, with incident flux $100\ {\rm W\,m^{-2}}$, a target scattering total power $2\ {\rm W}$ has cross section $0.02\ {\rm m^2}$. Its scattered power equals the incident power passing through an area of that size.

**This is an effective area defined by the interaction's effect, not necessarily the target's geometric area.** It is not a sharply bounded circle inside which all light scatters and outside which nothing happens.

For an electron, the light's electric field drives oscillations and the electron reradiates. At fixed incident light, stronger reradiation means a larger cross section. If a magnetic field weakens certain responses, the cross section decreases, but the electron itself has not shrunk.

Dimensional check:

$$
[\sigma]=\frac{{\rm erg\,s^{-1}}}{{\rm erg\,cm^{-2}\,s^{-1}}}={\rm cm^2}.
$$

### 5.2 Conditions for the Thomson limit

- **Free electrons:** no restoring force from binding.
- **Nonrelativistic response:** electron speeds are much smaller than $c$; the wave must not be strong enough to drive relativistic motion.
- **Low photon energy:** in the electron's initial rest frame, $h\nu\ll m_ec^2\simeq511\ {\rm keV}$, so recoil energy changes are negligible.
- **Ordinary, unmagnetized response:** no strong background magnetic-field effect needs to be retained.

Under these conditions, the electron can be treated as a classical charge driven by the incident wave.

### 5.3 Step 1: The electric field drives the electron

Write the incident electric field at the electron as

$$
\mathbf E(t)=E_0\cos\omega t\,\hat{\mathbf x}.
$$

Neglect the relatively small magnetic force of the wave:

$$
m_e\ddot x=-eE_0\cos\omega t,
\qquad
a(t)=-\frac{eE_0}{m_e}\cos\omega t.
$$

Defining acceleration amplitude $a_0=eE_0/m_e$ gives

$$
\langle a^2\rangle=\frac{a_0^2}{2}
=\frac{e^2E_0^2}{2m_e^2}.
$$

### 5.4 Step 2: The electron radiates

Substitute into the Larmor formula:

$$
\begin{aligned}
\langle P_{\rm sc}\rangle
&=\frac{2e^2}{3c^3}\langle a^2\rangle\\
&=\frac{2e^2}{3c^3}\frac{e^2E_0^2}{2m_e^2}
=\boxed{\frac{e^4E_0^2}{3m_e^2c^3}}.
\end{aligned}
$$

### 5.5 Step 3: Divide by the mean incident flux

$$
\begin{aligned}
\sigma_{\rm T}
&=\frac{\langle P_{\rm sc}\rangle}{\langle F_{\rm inc}\rangle}\\
&=\frac{e^4E_0^2}{3m_e^2c^3}\frac{8\pi}{cE_0^2}\\
&=\boxed{\frac{8\pi e^4}{3m_e^2c^4}}
\simeq6.65\times10^{-25}\ {\rm cm^2}.
\end{aligned}
$$

The field strength $E_0$ cancels because both scattered power and incident flux are proportional to $E_0^2$. Frequency does not appear because the free-electron acceleration amplitude $eE_0/m_e$ is frequency-independent in this approximation.

### 5.6 Common mistake: Why might one obtain $16\pi$?

The most common cause is using peak radiated power in the numerator but average incident flux in the denominator.

This inconsistent combination gives

$$
\frac{\overbrace{2e^4E_0^2/(3m_e^2c^3)}^{\text{peak power}}}
{\underbrace{cE_0^2/(8\pi)}_{\text{mean flux}}}
=\frac{16\pi e^4}{3m_e^2c^4}.
$$

Use consistent quantities in numerator and denominator:

| Quantities used | Scattered power | Incident flux |
|---|---|---|
| Peak values | $2e^4E_0^2/(3m_e^2c^3)$ | $cE_0^2/(4\pi)$ |
| Cycle averages | $e^4E_0^2/(3m_e^2c^3)$ | $cE_0^2/(8\pi)$ |

In this sinusoidally driven model, taking the ratio consistently within either row yields $8\pi e^4/(3m_e^2c^4)$. **The factor $2$ in the Larmor formula is canceled by $\langle\cos^2\rangle=1/2$ in the average power.**

### 5.7 Why define the classical electron radius?

Define

$$
\boxed{r_e\equiv\frac{e^2}{m_ec^2}}
\simeq2.818\times10^{-13}\ {\rm cm}=2.818\ {\rm fm}.
$$

This comes from a natural comparison of energy scales. Two charges of magnitude $e$ separated by $r$ have electrostatic potential-energy magnitude $e^2/r$. Set this scale equal to the electron rest energy:

$$
\frac{e^2}{r_e}=m_ec^2,
$$

This gives the definition above. It does not imply that an electron contains two charges.

Nor should $r_e$ be interpreted directly as the electron's physical radius. In classical charged-sphere models, electrostatic self-energy depends on the charge distribution:

| Model | Electrostatic self-energy | Radius obtained by setting self-energy equal to $m_ec^2$ |
|---|---|---|
| Uniformly charged spherical shell | $e^2/(2R)$ | $R=r_e/2$ |
| Uniformly charged solid sphere | $3e^2/(5R)$ | $R=3r_e/5$ |

Thus, $r_e$ is a well-defined conventional classical electromagnetic length scale, not a unique physical size inferred from these models. The Thomson cross section can be written as

$$
\boxed{\sigma_{\rm T}=\frac{8\pi}{3}r_e^2}.
$$

It measures the driven electron's ability to reradiate, not the geometric area of a solid little sphere struck by light.

## 6. Deriving radiative acceleration from photon momentum transfer

### 6.1 From a single-particle cross section to opacity per unit mass

For scatterer number density $n$ and single-particle cross section $\sigma$, the interaction coefficient per unit length is $n\sigma$. Dividing by mass density gives

$$
\boxed{\kappa=\frac{n\sigma}{\rho}},
\qquad
d\tau=n\sigma\,ds=\kappa\rho\,ds.
$$

This first considers one interaction. Multiple species, absorption, and scattering processes require the corresponding sum; radiation-force calculations must use coefficients describing momentum transfer.

### 6.2 Intercepted energy in a small piece of matter

A thin layer has illuminated area $A$, thickness $ds$, and density $\rho$. Its mass is

$$
dm=\rho A\,ds.
$$

Choose $ds$ small enough that $d\tau=\kappa\rho\,ds\ll1$. The fraction of light interacting is approximately $d\tau$.

During time $dt$, the incident energy is $FA\,dt$; the energy participating in interactions is

$$
dE_{\rm int}=FA\,dt\,d\tau
=FA\,dt\,\kappa\rho\,ds.
$$

### 6.3 Convert energy to momentum, then divide force by mass

First consider absorption. Since photons satisfy $p=E/c$, matter gains

$$
dp=\frac{dE_{\rm int}}{c}
=\frac{FA\,dt\,\kappa\rho\,ds}{c}.
$$

Force is momentum gained per unit time:

$$
d\mathcal F_{\rm rad}=\frac{dp}{dt}
=\frac{FA\kappa\rho\,ds}{c}.
$$

Dividing by the mass of the material:

$$
\begin{aligned}
g_{\rm rad}
&=\frac{d\mathcal F_{\rm rad}}{dm}\\
&=\frac{FA\kappa\rho\,ds}{c\rho A\,ds}
=\boxed{\frac{\kappa F}{c}}.
\end{aligned}
$$

Area, thickness, and density cancel because intercepting capacity increases in proportion to material mass. Distinguish:

$$
\underbrace{\frac{\kappa F}{c}}_{\text{force per unit mass, or acceleration}}
\qquad\text{from}\qquad
\underbrace{\frac{\rho\kappa F}{c}}_{\text{force per unit volume}}.
$$

Dimensional check:

$$
\left[\frac{\kappa F}{c}\right]
=\frac{({\rm cm^2\,g^{-1}})({\rm erg\,cm^{-2}\,s^{-1}})}{{\rm cm\,s^{-1}}}
={\rm cm\,s^{-2}}.
$$

### 6.4 How can scattering exert force without absorbing the light?

Scattering changes photon propagation direction and therefore momentum. Even with approximately unchanged photon energy, momentum can still be transferred to an electron.

For example, a photon scattered through angle $\theta$ transfers momentum along the incident direction of

$$
\Delta p_\parallel=\frac{E_\gamma}{c}(1-\cos\theta).
$$

Strictly, radiation force therefore requires the **momentum-transfer cross section**. Ordinary Thomson scattering has a fore–aft symmetric angular pattern, with angle-averaged $\cos\theta$ equal to zero. The momentum-transfer cross section equals the total Thomson cross section, so $g_{\rm rad}=\kappa_{\rm es}F/c$ still holds.

Strongly forward-peaked scattering or complicated magnetic anisotropy prevents blindly using an arbitrary total scattering cross section for radiation force.

For a frequency distribution describable with scalar opacity, write

$$
g_{\rm rad}=\frac1c\int\kappa_\nu F_\nu\,d\nu
=\frac{\kappa_FF}{c},
\qquad
\kappa_F\equiv\frac{\int\kappa_\nu F_\nu\,d\nu}{\int F_\nu\,d\nu}.
$$

Here $\kappa_F$ is the flux-mean opacity.

**An optically thin local layer does not require the entire object to be optically thin.** An optically thick medium can be divided into thin layers, with the radiation force calculated from the local net flux.

## 7. Eddington luminosity: derivation, assumptions, and meaning

### 7.1 From local flux to total luminosity

Assume spherically symmetric outward radiation. At radius $r$, the luminosity is distributed over spherical area $4\pi r^2$:

$$
F(r)=\frac{L}{4\pi r^2}.
$$

The outward radiative and inward gravitational accelerations are

$$
g_{\rm rad}(r)=\frac{\kappa L}{4\pi r^2c},
\qquad
g_{\rm grav}(r)=\frac{GM}{r^2}.
$$

Setting them equal:

$$
\frac{\kappa L_{\rm Edd}}{4\pi r^2c}
=\frac{GM}{r^2}
\quad\Rightarrow\quad
\boxed{L_{\rm Edd}=\frac{4\pi GMc}{\kappa}}.
$$

Radius cancels because both accelerations fall as $1/r^2$. Treating this as one position-independent critical luminosity also requires $M$ and $\kappa$ not to vary appreciably with position; stellar interiors generally require the local enclosed mass and local opacity.

The acceleration ratio is

$$
\boxed{\frac{g_{\rm rad}}{g_{\rm grav}}
=\frac{\kappa L}{4\pi GMc}
=\frac{L}{L_{\rm Edd}}}.
$$

- $L<L_{\rm Edd}$: radiation force is weaker than gravity.
- $L=L_{\rm Edd}$: the two balance exactly.
- $L>L_{\rm Edd}$: considering only these two forces, the net acceleration is outward.

This does not mean that every object above the limit is impossible, or that gas below it must be stationary. It is a comparison of forces under specified conditions.

### 7.2 Which opacity is used?

In the general formula, $\kappa$ must describe radiation momentum-transfer efficiency. The familiar numerical expression assumes ordinary Thomson electron scattering in fully ionized gas.

In pure hydrogen, each proton has one associated electron and protons provide most of the mass:

$$
\rho\simeq n_em_p,
\qquad
\kappa_{\rm es}=\frac{n_e\sigma_{\rm T}}{\rho}
\simeq\frac{\sigma_{\rm T}}{m_p}
\simeq0.40\ {\rm cm^2\,g^{-1}}.
$$

Hence

$$
\boxed{L_{\rm Edd}
=\frac{4\pi GMm_pc}{\sigma_{\rm T}}
\simeq1.26\times10^{38}\left(\frac{M}{M_\odot}\right)
{\rm erg\,s^{-1}}}.
$$

For fully ionized gas dominated by hydrogen and helium, with hydrogen mass fraction $X$, the number of electrons per unit mass is approximately $(1+X)/(2m_p)$, giving

$$
\kappa_{\rm es}\simeq0.20(1+X)\ {\rm cm^2\,g^{-1}}.
$$

For example, $X\simeq0.7$ gives $\kappa_{\rm es}\simeq0.34\ {\rm cm^2\,g^{-1}}$. Composition changes the numerical coefficient in the critical luminosity.

### 7.3 Which geometry is assumed?

The relation $F=L/(4\pi r^2)$ assumes a locally spherically symmetric, radially outward radiation field. Gravity points radially inward, allowing a direct comparison.

A separate geometric assumption enters on the observational side:

$$
L_{\rm iso}=4\pi d^2f_{\rm obs}.
$$

This extrapolates the flux in our viewing direction to every direction. It defines isotropic-equivalent luminosity, which equals the true total luminosity only for genuinely isotropic emission.

These two appearances of $4\pi$ concern different physical questions:

1. Does the distant flux measured in our direction represent other directions?
2. How is the object's total luminosity distributed into the radial flux actually experienced by matter at a given location?

### 7.4 Why is observed luminosity not a mass measurement?

The Eddington formula gives a critical luminosity; an object need not radiate exactly at that value. Define the Eddington ratio

$$
\lambda\equiv\frac{L_{\rm bol}}{L_{\rm Edd}},
$$

where $L_{\rm bol}$ is the true luminosity summed over all bands. Then

$$
\boxed{M=\frac{\kappa L_{\rm bol}}{4\pi Gc\lambda}}.
$$

Even with known geometry and opacity, luminosity alone cannot uniquely determine mass without $\lambda$. The same luminosity could come from a lower-mass object near its Eddington limit or a higher-mass object radiating at one tenth of its own limit.

Adding only the assumption $\lambda\leq1$ gives

$$
\boxed{M\geq\frac{\kappa L_{\rm bol}}{4\pi Gc}},
$$

This is a **conditional lower mass limit**. Absorption, limited band coverage, distance, and directionality must also be addressed: the observed $L_X$ does not automatically equal bolometric luminosity $L_{\rm bol}$.

### 7.5 Numerical exercise: M82 X-1

Given

$$
f_X=4\times10^{-12}\ {\rm erg\,cm^{-2}\,s^{-1}},
\qquad d\simeq3.6\ {\rm Mpc}.
$$

using $1\ {\rm pc}\simeq3.086\times10^{18}\ {\rm cm}$:

$$
d\simeq1.11\times10^{25}\ {\rm cm},
\qquad
L_{X,\rm iso}=4\pi d^2f_X\simeq6.2\times10^{39}\ {\rm erg\,s^{-1}}.
$$

Assuming isotropy, pure-hydrogen electron scattering, and $L_{\rm bol}\leq L_{\rm Edd}$, the fact that $L_{\rm bol}\geq L_X$ means the X-ray luminosity alone gives a conservative conditional lower bound:

$$
\frac{M}{M_\odot}\gtrsim
\frac{6.2\times10^{39}}{1.26\times10^{38}}
\simeq49.
$$

Radiation outside the X-ray band raises the bound under these assumptions. Beaming, super-Eddington emission, or altered effective opacity invalidates a direct application of it. **$49M_\odot$ is a model inference, not a measured mass.**

Distinguish two sources: the exercise concerns **M82 X-1**, whereas the ULX pulsations reported by Bachetti et al. in 2014 came from **M82 X-2**. The latter establishes that at least some ULX accretors are neutron stars; standard Eddington reasoning cannot make every ULX a massive black hole. [Bachetti et al., 2014](https://www.nature.com/articles/nature13791)

## 8. Why can strong magnetic fields reduce scattering for some photons?

### 8.1 Where does the cyclotron frequency come from?

For a nonrelativistic electron moving perpendicular to a background field, the Lorentz force supplies centripetal acceleration:

$$
\frac{m_ev_\perp^2}{r_L}=\frac{ev_\perp B_0}{c}.
$$

Therefore

$$
\boxed{\omega_B=\frac{v_\perp}{r_L}=\frac{eB_0}{m_ec}}.
$$

This is angular frequency; the ordinary frequency is $\nu_B=\omega_B/(2\pi)$. In SI, $\omega_B=eB_0/m_e$.

The background field introduces a new timescale $1/\omega_B$. Electron response therefore depends on the incident angular frequency $\omega$ relative to $\omega_B$.

### 8.2 Choose a geometry and write the driven equations of motion

Take

$$
\mathbf B_0=B_0\hat{\mathbf z},
\qquad
\mathbf E_{\rm wave}=E_0\cos\omega t\,\hat{\mathbf x}.
$$

The wave electric field is perpendicular to the background magnetic field. Retain the background magnetic force but neglect the smaller wave magnetic force:

$$
m_e\dot{\mathbf v}
=-e\left(\mathbf E_{\rm wave}+\frac{\mathbf v\times\mathbf B_0}{c}\right).
$$

Writing $a_0=eE_0/m_e$, the component equations are

$$
\begin{aligned}
\dot v_x&=-a_0\cos\omega t-\omega_Bv_y,\\
\dot v_y&=\omega_Bv_x.
\end{aligned}
$$

The magnetic field couples motion in the two directions. We focus on the periodic response driven by the incident wave, not any preexisting free cyclotron motion.

### 8.3 Low-frequency picture: a transverse drift that follows the electric field

For $\omega\ll\omega_B$, the electric field varies much more slowly than electron gyration. Electric and magnetic forces in the $x$ direction cancel to leading order:

$$
-a_0\cos\omega t-\omega_Bv_y\simeq0.
$$

giving

$$
v_y\simeq-\frac{a_0}{\omega_B}\cos\omega t
=-\frac{cE_0}{B_0}\cos\omega t.
$$

This is the $\mathbf E\times\mathbf B$ drift in this geometry. As it follows the incident electric field, it produces acceleration:

$$
a_y=\dot v_y\simeq a_0\frac{\omega}{\omega_B}\sin\omega t.
$$

Using $\dot v_y=\omega_Bv_x$ further verifies

$$
a_x\simeq a_0\left(\frac{\omega}{\omega_B}\right)^2\cos\omega t.
$$

Thus, in the low-frequency limit, the dominant driven acceleration amplitude is

$$
\boxed{a_{\rm mag}\simeq a_0\frac{\omega}{\omega_B}}.
$$

The key is that the magnetic field changes the electron's response and reduces its net acceleration, not that the electron stops moving entirely.

### 8.4 Why does the cross section decrease as the square of the acceleration?

Without a magnetic field,

$$
\langle a^2\rangle_0=\frac{a_0^2}{2}.
$$

For the low-frequency transverse response in a strong field,

$$
\langle a^2\rangle_{\rm mag}
\simeq\frac{a_0^2}{2}\left(\frac{\omega}{\omega_B}\right)^2.
$$

Since $P\propto a^2$ and the incident flux is unchanged in this comparison,

$$
\frac{\sigma_{\rm eff}}{\sigma_{\rm T}}
=\frac{\langle P_{\rm mag}\rangle}{\langle P_0\rangle}
=\frac{\langle a^2\rangle_{\rm mag}}{\langle a^2\rangle_0}
\simeq\left(\frac{\omega}{\omega_B}\right)^2.
$$

we obtain

$$
\boxed{\sigma_{\rm eff}\simeq\sigma_{\rm T}
\left(\frac{\omega}{\omega_B}\right)^2}.
$$

For example, if $\omega/\omega_B=0.1$, the cross section in this simplified case is about $1\%$ of the Thomson cross section.

### 8.5 Essential applicability conditions

- This is a low-frequency, nonrelativistic classical-response derivation, far from cyclotron resonance.
- If the wave electric field is parallel to the background magnetic field, electron motion along it is not magnetically constrained and does not exhibit this transverse suppression.
- Real radiation in magnetized media includes different propagation directions and polarization modes; not all photons experience the same reduction in cross section.
- Near $\omega\sim\omega_B$, cyclotron resonance occurs, the low-frequency approximation fails, and scattering can be enhanced.
- Quantitative magnetar calculations additionally require quantum effects, spectra, mode conversion, and more complete cross sections. This derivation explains the basic scaling.

In the literature, the extraordinary mode (X-mode, also called E-mode) has this suppressed scattering below the cyclotron frequency. Its wave electric field is perpendicular to the plane containing the propagation direction and background magnetic field. [Mode dependence of magnetized scattering](https://academic.oup.com/mnras/article/461/1/877/2595263)

## 9. Why can standard Eddington reasoning fail? Three distinct steps

The complete inference chain is

$$
f_{\rm obs}
\xrightarrow{\text{isotropy}}
L=4\pi d^2f_{\rm obs}
\xrightarrow{\text{locally spherical propagation}}
F(r)=\frac{L}{4\pi r^2}
\xrightarrow{\text{specified opacity}}
g_{\rm rad}=\frac{\kappa F(r)}{c}.
$$

The three mechanisms modify the observational conversion, local flow geometry, and momentum-coupling efficiency, respectively.

### 9.1 Directional emission: bright toward us does not mean bright everywhere

A telescope measures only light directed toward us. The true total luminosity is

$$
L_{\rm true}=\int\frac{dL}{d\Omega}\,d\Omega,
$$

whereas $L_{\rm iso}=4\pi d^2f_{\rm obs}$ assumes that every direction is as bright as ours.

In a simple model, light is uniformly concentrated within total solid angle $\Omega$, and we lie inside it. Then

$$
f_{\rm obs}=\frac{L_{\rm true}}{\Omega d^2}.
$$

Defining beaming factor $b=\Omega/(4\pi)$ gives

$$
\boxed{L_{\rm iso}=\frac{L_{\rm true}}b},
\qquad L_{\rm true}=bL_{\rm iso}.
$$

For example, if $b=0.1$, the isotropic-equivalent luminosity is ten times the true luminosity. With other assumptions unchanged, using $L_{\rm iso}$ as the true luminosity overestimates the associated mass estimate or conditional lower limit by tenfold.

In some ULX models, thick accretion flows and outflows form a funnel, and scattered light preferentially escapes along it. Such geometric beaming does not require a relativistic jet. [King, 2009](https://academic.oup.com/mnrasl/article/393/1/L41/1056229)

This mechanism changes the conversion from observed flux to true luminosity. Directionality alone does not establish a numerical amplification factor; a broad pulse alone cannot rigorously exclude substantial beaming either.

### 9.2 Sideways leakage from an accretion column: matter goes down, energy escapes sideways

A strong magnetic field can channel accretion near a neutron star onto small areas near its magnetic poles. At higher accretion rates, a magnetically confined accretion column forms.

```text
             Accreting matter
                    ↓
                    ↓
             ┌─────────────┐
    Light ←  │   Hot gas   │  → Light
    Light ←  │   Column    │  → Light
             └──────┬──────┘
                    ↓
             Neutron-star surface
```

An accretion column is not a pipe with solid walls, but a magnetically confined gas stream. Falling matter decelerates, releasing energy, heating the gas, and producing radiation.

Photons may scatter repeatedly and diffuse outward as a random walk. In a tall, narrow column with relatively small transverse optical depth, escaping sideways is easier than traveling upward through the entire stream.

Sideways escape means that **most net energy leaves through the column's sides**, not that every newly created photon immediately flies straight sideways.

In spherical geometry, outward light directly opposes inward matter, so radiation force resists infall. For a column, the relevant force is the component along the column opposing the inflow; not all luminosity can be assigned to that direction.

Schematically,

$$
g_{{\rm rad},\parallel}\simeq\frac{\kappa_\parallel F_\parallel}{c},
$$

where $F_\parallel$ is the outward flux along the column, opposing infall. Total luminosity instead includes energy leaving every column surface:

$$
L_{\rm true}=\int_{\text{column surface}}\mathbf F\cdot d\mathbf A.
$$

Thus, large $L_{\rm true}$ does not require $F_\parallel=L_{\rm true}/(4\pi r^2)$.

Also remember:

- Transverse radiation still exerts pressure and tends to expand the column, requiring confinement by magnetic stresses.
- Radiation force remains along the column and can form a radiation-dominated shock, decelerating gas that subsequently settles.
- Sideways leakage does not permit unlimited luminosity. Field strength, column geometry, optical depth, and energy transport constrain the actual structure.

This mechanism supplies another route for energy to escape, helping accretion continue at high true luminosity. [Accretion columns and high-luminosity models](https://academic.oup.com/mnras/article/454/3/2539/1196875)

### 9.3 Reduced effective opacity: the same light pushes less strongly

The preceding mechanisms change where light travels; this one changes how efficiently it transfers momentum to matter.

If a strong magnetic field suppresses scattering in the relevant modes, the effective opacity for radiation force can also decrease. In a simplified model that retains spherical symmetry,

$$
g_{\rm rad}=\frac{\kappa_{\rm eff}F}{c},
\qquad
L_{\rm crit}=\frac{4\pi GMc}{\kappa_{\rm eff}}.
$$

As a hypothetical example, if the average effective opacity becomes $1/100$ of its original value, the critical luminosity in that same model increases by a factor $100$.

But a single mode's $\sigma_{\rm eff}/\sigma_{\rm T}$ cannot be used as the entire star's $\kappa_{\rm eff}/\kappa_{\rm es}$ without averaging over spectrum, direction, and polarization.

Two distinct meanings of direction must also be separated:

- Sideways leakage compares **light propagation direction with matter-flow direction**.
- Polarization suppression compares **wave electric-field direction with background magnetic-field direction**.

### 9.4 Comparing the three mechanisms

| Mechanism | Assumption modified | Result |
|---|---|---|
| Directionality / beaming | Equal brightness in all directions | $L_{\rm iso}$ can exceed the true total luminosity |
| Sideways leakage from an accretion column | All light travels radially against the accretion flow | Total luminosity is large, but the opposing radiation force does not grow according to the spherical formula |
| Reduced effective opacity | Ordinary Thomson momentum-coupling efficiency | The same local flux produces a smaller radiation force |

All three effects can coexist. A super-Eddington equivalent luminosity alone cannot uniquely determine mass, field strength, or beaming.

## 10. Magnetars: magnetic fields change radiation transport and store burst energy

The magnetic field has two distinct roles:

1. **Changing photon escape:** reduced opacity in some modes raises the critical luminosity under the corresponding conditions.
2. **Providing an energy reservoir:** magnetic energy released through field rearrangement or decay can power bursts.

Paczyński (1992), cited in the course, connects strong fields, low scattering opacity, super-Eddington emission, and magnetic-energy budgets. This is a physical explanation of magnetar phenomena, not a unique magnetic-field measurement from luminosity alone. [Paczyński, 1992](https://acta.astrouw.edu.pl/Vol42/n3/a_42_3_1.html)

### 10.1 Stored energy from magnetic energy density

In Gaussian-cgs, magnetic energy density is

$$
u_B=\frac{B^2}{8\pi}.
$$

When $B$ is in G, $u_B$ has units ${\rm erg\,cm^{-3}}$. Internal magnetic energy is generally

$$
E_B=\int_V\frac{B(\mathbf r)^2}{8\pi}\,dV.
$$

For an order-of-magnitude estimate with approximately uniform internal field strength:

$$
E_B\simeq\frac{B^2}{8\pi}\frac{4\pi R^3}{3}
=\boxed{\frac{B^2R^3}{6}}.
$$

The coefficient $1/6$ is the product of $1/(8\pi)$ from energy density and $4\pi/3$ from spherical volume.

### 10.2 Typical magnetar scales

Take $B=10^{15}\ {\rm G}$ and $R=10\ {\rm km}=10^6\ {\rm cm}$:

$$
E_B\simeq\frac{(10^{15})^2(10^6)^3}{6}
=\frac{10^{48}}6
\simeq1.7\times10^{47}\ {\rm erg}.
$$

Therefore

$$
\boxed{E_B\simeq1.7\times10^{47}
\left(\frac{B}{10^{15}\ {\rm G}}\right)^2
\left(\frac{R}{10\ {\rm km}}\right)^3
{\rm erg}}.
$$

A tenfold increase in field strength increases stored energy a hundredfold; doubling the radius increases it eightfold.

### 10.3 Required field strength from burst energy

If only a fraction $\eta$ of the internal magnetic energy becomes radiation in the burst, we require

$$
\eta E_B\gtrsim E_{\rm burst}.
$$

Therefore

$$
\boxed{B\gtrsim\sqrt{\frac{6E_{\rm burst}}{\eta R^3}}}.
$$

For example, with $E_{\rm burst}=10^{45}\ {\rm erg}$ and $R=10\ {\rm km}$:

$$
B\gtrsim7.7\times10^{13}\eta^{-1/2}\ {\rm G}.
$$

If $\eta=0.01$, the required field is approximately $7.7\times10^{14}\ {\rm G}$.

### 10.4 What does $B$ represent in this estimate?

More precisely, define the internal volume-rms field strength

$$
B_{\rm rms}=\sqrt{\frac1V\int_V B^2\,dV}.
$$

For a spherical integration volume, replacing $B$ by $B_{\rm rms}$ gives internal magnetic energy $B_{\rm rms}^2R^3/6$ without requiring an everywhere uniform field.

However, $B_{\rm rms}$ need not equal the surface dipole field inferred from spin-down or other observations. Total magnetic energy is not all releasable in a single event: the release fraction depends on field structure and evolution. This estimate concerns internal energy only; the external magnetosphere may store additional energy.

## 11. Review priorities: what to remember and what to derive

These priorities support understanding this lecture and solving problems independently. They are not an additional instructor-issued exam syllabus.

### 11.1 Basic formulas: know the symbols, dimensions, and assumptions

| Formula | Physical meaning and conditions |
|---|---|
| $p_\gamma=E_\gamma/c$ | Light carries momentum and can exert force on matter |
| $\mathbf F=q(\mathbf E+\mathbf v\times\mathbf B/c)$ | Electromagnetic force on a charge; cgs here |
| $\mathbf S=c\mathbf E\times\mathbf B/(4\pi)$ | Magnitude and direction of electromagnetic energy flow |
| $u_{\rm EM}=(E^2+B^2)/(8\pi)$ | Field energy density |
| $P=2q^2a^2/(3c^3)$ | Larmor power of a nonrelativistically accelerated charge |
| $g=GM/r^2$ | Newtonian gravitational acceleration |
| $E=B$ | Vacuum plane wave in cgs; not valid for arbitrary electromagnetic fields |
| $\langle\cos^2\omega t\rangle=1/2$ | Cycle average of a sinusoidal oscillation |

These can serve as starting points in problems without rederiving Maxwell's equations each time. Although the Larmor formula may be used directly, its derivation by integrating the far field is worth mastering.

### 11.2 Definitions: know exactly what is being defined

| Definition | Common confusion |
|---|---|
| $\sigma=\langle P_{\rm sc}\rangle/\langle F_{\rm inc}\rangle$ | Effective, not necessarily geometric area; do not mix mean and peak values |
| $\kappa=n\sigma/\rho$ | Converts a single-particle cross section into interaction capacity per unit mass; combine processes appropriately |
| $d\tau=\kappa\rho\,ds$ | Dimensionless optical depth |
| $r_e=e^2/(m_ec^2)$ | Classical electromagnetic length scale, not the electron's physical radius |
| $L_{\rm iso}=4\pi d^2f_{\rm obs}$ | Isotropic-equivalent luminosity, not automatically the true luminosity |
| $\lambda=L_{\rm bol}/L_{\rm Edd}$ | Eddington ratio, not necessarily unity |

A definition is not a theorem requiring proof. Understand why it is useful and when it can be identified with a physical quantity.

### 11.3 Core results: reconstruct the derivations without the notes

**Mean incident flux**

$$
\mathbf S=\frac c{4\pi}\mathbf E\times\mathbf B
\longrightarrow F(t)=\frac{cE_0^2}{4\pi}\cos^2\omega t
\longrightarrow\langle F\rangle=\frac{cE_0^2}{8\pi}.
$$

Focus on the origin of $1/2$ and the distinction between $E_0$ and $E_{\rm rms}$.

**Thomson cross section**

$$
a_0=\frac{eE_0}{m_e}
\longrightarrow\langle P\rangle=\frac{2e^2}{3c^3}\langle a^2\rangle
\longrightarrow\sigma_{\rm T}=\frac{\langle P\rangle}{\langle F\rangle}
=\frac{8\pi}{3}r_e^2.
$$

Focus on consistent averaging and why field strength and frequency cancel. The commonly used $\sigma_{\rm T}\simeq6.65\times10^{-25}\ {\rm cm^2}$ is worth memorizing; the exact numerical value of $r_e$ has slightly lower priority.

**Radiative acceleration and Eddington luminosity**

$$
\text{Intercepted light energy}
\longrightarrow\text{Transferred momentum}
\longrightarrow g_{\rm rad}=\frac{\kappa F}{c}
\longrightarrow F=\frac{L}{4\pi r^2}
\longrightarrow g_{\rm rad}=\frac{GM}{r^2}.
$$

Focus on each step's geometric, opacity, and force-balance assumptions. The result is a critical luminosity; inferring mass additionally requires the Eddington ratio, true bolometric luminosity, and observational conversion.

**Scattering suppression in a strong magnetic field**

$$
\omega_B=\frac{eB_0}{m_ec},
\qquad
a_{\rm mag}\sim a_0\frac{\omega}{\omega_B}
\longrightarrow P\propto a^2
\longrightarrow\sigma_{\rm eff}\sim\sigma_{\rm T}
\left(\frac{\omega}{\omega_B}\right)^2.
$$

Do not merely memorize the squared scaling: understand that it follows from acceleration suppression and applies only to the appropriate frequency, polarization, and approximations. Reconstruct the two coupled velocity equations rather than memorizing a complicated general solution.

**Magnetic-energy estimates**

$$
E_B=\int\frac{B^2}{8\pi}\,dV
\longrightarrow E_B\sim\frac{B^2R^3}{6}
\longrightarrow B\gtrsim\sqrt{\frac{6E_{\rm burst}}{\eta R^3}}.
$$

Reconstruct the coefficient as density times volume, explain that the field is an internal rms value, and note that release efficiency need not be unity.

### 11.4 Deeper electrodynamics: understand the starting point and subsequent steps

Obtaining $E_{\rm rad}=|q|a\sin\theta/(c^2r)$ from Maxwell's equations or retarded potentials requires fuller electrodynamics. For now it can be taken as input, but you should then be able to complete

$$
E_{\rm rad}\longrightarrow S\propto E_{\rm rad}^2
\longrightarrow P=\int Sr^2\,d\Omega.
$$

This explains the Larmor angular pattern and coefficient $2/3$ instead of merely memorizing them.

### 11.5 Self-test questions

1. Can you derive $\sigma_{\rm T}$ from the incident electric field without forgetting time averaging?
2. Why does obtaining $16\pi/3$ often signal mixed peak and mean quantities?
3. Why does $g_{\rm rad}=\kappa F/c$ have dimensions of acceleration rather than force?
4. Why does $r^2$ cancel in the Eddington derivation? How should $M$ and $\kappa$ be interpreted inside a star?
5. What distinguishes $L_{\rm iso}$, $L_{\rm true}$, $L_X$, and $L_{\rm bol}$?
6. Why does assuming only $L_{\rm bol}\leq L_{\rm Edd}$ give a lower mass bound?
7. Which inference step is changed by beaming, sideways leakage, and reduced opacity, respectively?
8. Why is the transverse scattering-suppression formula inapplicable when the wave electric field is parallel to the background field?
9. Does sideways-escaping light still exert force on gas? Why does an accretion column require magnetic confinement?
10. Which energy-budget assumptions are needed to infer a magnetic field from a burst energy?

## 12. Formula reference and sources

### 12.1 Formula reference (Gaussian-cgs)

| Topic | Formula | Conditions or explanation |
|---|---|---|
| Mean wave flux | $\langle F\rangle=cE_0^2/(8\pi)$ | Sinusoidal vacuum plane wave; $E_0$ is the peak amplitude |
| Radiated power | $P=2q^2a^2/(3c^3)$ | Instantaneous nonrelativistic Larmor power |
| Thomson cross section | $\sigma_{\rm T}=8\pi r_e^2/3$ | Free, nonrelativistic electrons with negligible recoil |
| Classical electron radius | $r_e=e^2/(m_ec^2)$ | Defined electromagnetic length scale |
| Radiative acceleration | $g_{\rm rad}=\kappa_FF/c$ | Use a mean opacity appropriate to radiation force |
| Eddington luminosity | $L_{\rm Edd}=4\pi GMc/\kappa$ | Comparison of spherical radial radiation and gravity |
| Electron-scattering opacity | $\kappa_{\rm es}\simeq0.20(1+X)\ {\rm cm^2\,g^{-1}}$ | Fully ionized gas dominated by hydrogen and helium |
| Cyclotron angular frequency | $\omega_B=eB_0/(m_ec)$ | Nonrelativistic electrons |
| Low-frequency cross-section suppression | $\sigma_{\rm eff}\sim\sigma_{\rm T}(\omega/\omega_B)^2$ | Appropriate transverse mode, $\omega\ll\omega_B$ |
| Simple beaming model | $L_{\rm iso}=L_{\rm true}/b$ | Light uniformly confined to solid angle $4\pi b$, with the observer inside it |
| Internal magnetic energy | $E_B=B_{\rm rms}^2R^3/6$ | Spherical integration volume of radius $R$ |

### 12.2 References

- [AST1440 course website](https://www.astro.utoronto.ca/~mhvk/AST1440/): September 14, 2026 topics, reading, and the M82 X-1 exercise.
- Rybicki & Lightman, *Radiative Processes in Astrophysics*: §§1.1–1.4; electron scattering in §§3.4 and 3.6.
- Padmanabhan，*Theoretical Astrophysics, Vol. I*：§1.4.4、§6.4。
- [Essential Radio Astronomy, Chapter 2: Radiation Fundamentals](https://www.cv.nrao.edu/~sransom/web/Ch2.html): background on radiation, electromagnetic fields, and basic quantities.
- [Bachetti et al. (2014), An ultraluminous X-ray source powered by an accreting neutron star](https://www.nature.com/articles/nature13791): M82 X-2 pulsations and their neutron-star interpretation.
- [King (2009), Masses, beaming and Eddington ratios in ultraluminous X-ray sources](https://academic.oup.com/mnrasl/article/393/1/L41/1056229): geometric beaming and equivalent luminosity.
- [Mushtukov et al. (2015), On the maximum accretion luminosity of magnetized neutron stars](https://academic.oup.com/mnras/article/454/3/2539/1196875): accretion-column geometry, magnetic fields, and high luminosity.
- [van Putten et al. (2016), Radiative transfer simulations of magnetar flare beaming](https://academic.oup.com/mnras/article/461/1/877/2595263): magnetized scattering, polarization, and low-frequency suppression.
- [Paczyński (1992), GB 790305 as a Very Strongly Magnetized Neutron Star](https://acta.astrouw.edu.pl/Vol42/n3/a_42_3_1.html): magnetic opacity reduction and magnetic-energy budgets.
