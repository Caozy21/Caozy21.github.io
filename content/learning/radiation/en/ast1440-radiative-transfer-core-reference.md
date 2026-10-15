---
title: "AST1440 Core Radiative Transfer Reference"
description: "A compact AST1440 radiative-transfer reference covering specific intensity, flux, source function, optical depth, formal solutions, LTE, Planck spectra, brightness temperature, observational conversions, geometric templates, and spectral-line diagnostics."
date: "2026-10-15"
tags: ["AST1440","Radiative transfer","Reference","LTE","Planck spectrum","Optical depth"]
order: 12
draft: false
sourceHash: bd8f60406e9a9548924df8ff775f8b80be799bfdcb96c6a0fb69646c52fde479
translation: "AI-assisted English translation"
---

# AST1440 Core Radiative Transfer Reference

> Compiled: October 15, 2026, from the completed RL §§1.1–1.6 course notes.  
> Scope: specific intensity, flux, source function, blackbody spectra, absorption and emission, optical depth, thermal equilibrium, and observational conversions. Particle scattering, electromagnetic fields, and later radiation mechanisms are outside the scope.  
> How to use this reference: begin with Section 0, then use the contents to find the relevant conditions or geometry template. Unless stated otherwise, assume a static medium, geometrical optics, a single reference frame, no scattering, and no propagation redshift. Units are cgs by default, and intensities include both polarizations.

## Contents

- [0. Most-Used Formulas](#0-most-used-formulas)
- [1. Symbols, Units, and Four Core Quantities](#1-symbols-units-and-four-core-quantities)
- [2. Angular Integrals: When Do π, 2π, and 4π Appear?](#2-angular-integrals-when-do-π-2π-and-4π-appear)
- [3. From Emission and Absorption to the Transfer Equation](#3-from-emission-and-absorption-to-the-transfer-equation)
- [4. Ready-to-Use Solutions of the Transfer Equation](#4-ready-to-use-solutions-of-the-transfer-equation)
- [5. LTE, Blackbodies, and Radiative Equilibrium](#5-lte-blackbodies-and-radiative-equilibrium)
- [6. The Planck Spectrum and Its Approximations](#6-the-planck-spectrum-and-its-approximations)
- [7. From Intensity to Observed Flux and Luminosity](#7-from-intensity-to-observed-flux-and-luminosity)
- [8. Brightness, Effective, and Color Temperatures](#8-brightness-effective-and-color-temperatures)
- [9. Templates for Slabs, Spherical Clouds, and Multilayer Media](#9-templates-for-slabs-spherical-clouds-and-multilayer-media)
- [10. Absorption and Emission Lines](#10-absorption-and-emission-lines)
- [11. Substitution Order and Error Checks](#11-substitution-order-and-error-checks)
- [Appendix A. Einstein Coefficients and the Line Source Function](#appendix-a-einstein-coefficients-and-the-line-source-function)
- [Appendix B. Constants and Related Notes](#appendix-b-constants-and-related-notes)

## 0. Most-Used Formulas

The full calculation chain is: **the medium determines $j_\nu,\alpha_\nu$ → the path determines $\tau_\nu$ → boundary conditions and the transfer equation determine $I_\nu$ → integration over angle or projected area determines $F_\nu$ or $f_\nu$.**

| Quantity needed | Formula to use directly | Conditions to check |
|---|---|---|
| Net spectral flux normal to a surface | $F_\nu=\int_{4\pi}I_\nu\mu\,d\Omega$ | $\mu=\cos\theta$ retains its sign |
| Mean intensity and energy density | $J_\nu=(4\pi)^{-1}\int I_\nu d\Omega$; $u_\nu=4\pi J_\nu/c$ | Valid for any angular distribution |
| Source function | $S_\nu=j_\nu/\alpha_\nu$ | $j_\nu$ is per unit solid angle; $\alpha_\nu\ne0$ |
| Optical depth | $\tau_\nu=\int\alpha_\nu ds=\int\rho\kappa_\nu ds$ | Integrate along the actual ray; thin/thick depends on frequency and direction |
| Transfer equation | $dI_\nu/ds=j_\nu-\alpha_\nu I_\nu$ | $s$ increases along propagation |
| One layer with constant source function | $I_{\nu,\rm out}=I_{\nu,\rm in}e^{-\tau_\nu}+S_\nu(1-e^{-\tau_\nu})$ | $S_\nu$ is constant along that ray |
| Optically thin, no background | $I_\nu\simeq\int j_\nu ds$ | $\tau_\nu\ll1$ along the entire relevant ray |
| LTE thermal source function | $S_\nu=B_\nu(T)$ | Absorption and emission satisfy LTE; net absorption includes stimulated-emission correction |
| Blackbody specific intensity | $B_\nu=\dfrac{2h\nu^3}{c^2}[e^{h\nu/(kT)}-1]^{-1}$ | Same units as $I_\nu$ |
| Outward flux from a blackbody surface | $F_\nu^+=\pi B_\nu$; $F^+=\sigma_{\rm SB}T^4$ | $I_\nu=B_\nu$ over the outward hemisphere; calculate net flux separately if illumination is incident |
| Observed flux density of a small-angle source | $f_\nu\simeq\int_{\rm src}I_\nu d\Omega=\bar I_\nu\Omega_{\rm src}$ | $\bar I_\nu$ is averaged over the source’s angular area |
| Uniform blackbody star | $f_\nu=\pi B_\nu(T)(R/d)^2$ | $d\gg R$, no extinction, uniform disk brightness |
| Rayleigh–Jeans brightness temperature | $T_{b,\rm RJ}=c^2I_\nu/(2k\nu^2)$ | May be defined directly as an intensity unit; identifying it with physical temperature requires additional conditions |

## 1. Symbols, Units, and Four Core Quantities

### 1.1 Unit table

| Symbol | Name / meaning | cgs units |
|---|---|---|
| $I_\nu$ | Specific intensity: spectral brightness at a position in one propagation direction | $\mathrm{erg\,s^{-1}\,cm^{-2}\,Hz^{-1}\,sr^{-1}}$ |
| $J_\nu$ | Mean intensity: all-sky angular average of $I_\nu$ | Same as $I_\nu$ |
| $S_\nu$ | Source function: emission divided by net absorption | Same as $I_\nu$ |
| $B_\nu(T)$ | Planck function: blackbody specific intensity at temperature $T$ | Same as $I_\nu$ |
| $F_\nu$ | Spectral flux: net energy flow through a specified surface | $\mathrm{erg\,s^{-1}\,cm^{-2}\,Hz^{-1}}$ |
| $f_\nu$ | Flux density received from a source by an observer | Same as $F_\nu$; Jy is also common |
| $L_\nu$ | Spectral luminosity: total energy output per unit time and frequency | $\mathrm{erg\,s^{-1}\,Hz^{-1}}$ |
| $u_\nu$ | Spectral energy density | $\mathrm{erg\,cm^{-3}\,Hz^{-1}}$ |
| $j_\nu$ | Emission coefficient: spectral emitted power per volume and solid angle | $\mathrm{erg\,s^{-1}\,cm^{-3}\,Hz^{-1}\,sr^{-1}}$ |
| $\alpha_\nu$ | Net absorption coefficient: attenuation rate per unit length | $\mathrm{cm^{-1}}$ |
| $\kappa_\nu$ | Mass absorption coefficient: $\alpha_\nu/\rho$ | $\mathrm{cm^2\,g^{-1}}$ |
| $\tau_\nu$ | Optical depth | Dimensionless |

Here $S_\nu$ **always means source function**. Some radio references use $S_\nu$ for observed flux density, corresponding here to $f_\nu$. The quantities $F_\nu$ and $f_\nu$ are fundamentally the same kind of flux; lowercase is used only to mark the observer’s location and avoid confusion with stellar-surface flux.

### 1.2 What question does each of the four quantities answer?

- **$I_\nu$: how strong is this ray?** It is determined jointly by the medium, propagation history, and boundary conditions, and varies with direction.
- **$F_\nu$: how much net energy crosses this surface?** It is obtained by a projected angular integral of $I_\nu$ over all directions.
- **$S_\nu$: what intensity would exactly balance the medium’s emission and absorption?** For $\alpha_\nu>0$, a ray weaker than the local $S_\nu$ is amplified, while a stronger ray is attenuated.
- **$B_\nu(T)$: how bright is a blackbody of temperature $T$ at this frequency?** It is the standard spectral function at a specified temperature.

### 1.3 Definition of $I_\nu$

The energy crossing an area element in a chosen direction is

$$
dE=I_\nu\,|\cos\theta|\,dA\,dt\,d\nu\,d\Omega.
$$

$\theta$ is the angle between the propagation direction and the surface normal. For one-way positive crossing, use $\cos\theta>0$. When computing **net flux**, retain the sign of the cosine. If $dA_\perp$ is already the area projected perpendicular to the ray, use $dA_\perp$ and do not multiply by another cosine.

The subscript $\nu$ means “per unit frequency.” Only integration over frequency produces the total quantity:

$$
I=\int_0^\infty I_\nu d\nu,\qquad
F=\int_0^\infty F_\nu d\nu,\qquad
L=\int_0^\infty L_\nu d\nu.
$$

## 2. Angular Integrals: When Do π, 2π, and 4π Appear?

Take the outward surface normal as the polar axis. With $\mu=\cos\theta$ and axial symmetry, $d\Omega=2\pi\,d\mu$.

$$
J_\nu=\frac12\int_{-1}^{1}I_\nu(\mu)d\mu,
\qquad
F_\nu=2\pi\int_{-1}^{1}I_\nu(\mu)\mu\,d\mu,
\qquad
u_\nu=\frac{4\pi}{c}J_\nu.
$$

Define outward flux $F_\nu^+$ and the positive magnitude of inward flux $F_\nu^-$:

$$
F_\nu^+=2\pi\int_0^1 I_\nu(\mu)\mu\,d\mu,
\qquad
F_\nu^-=-2\pi\int_{-1}^0 I_\nu(\mu)\mu\,d\mu,
\qquad F_\nu=F_\nu^+-F_\nu^-.
$$

| Angular distribution | $J_\nu$ | Net $F_\nu$ | $u_\nu$ |
|---|---|---|---|
| Isotropic over all space, $I_\nu=I_0$ | $I_0$ | $0$ | $4\pi I_0/c$ |
| Light only in the outward hemisphere with $I_\nu=I_0$, none inward | $I_0/2$ | $\pi I_0$ | $2\pi I_0/c$ |

The key angular integrals are

$$
\int_{4\pi}d\Omega=4\pi,\qquad
\int_{\rm hemisphere}d\Omega=2\pi,\qquad
\int_{\rm outward}\mu\,d\Omega=\pi.
$$

Therefore **$F_\nu=\pi I_\nu$ is not a general identity**. It requires direction-independent intensity over the outward hemisphere, and a net-flux interpretation also requires no incoming radiation. A fully isotropic blackbody field instead has $F_\nu=0$.

The normal component of the radiation-pressure tensor can be calculated from the same angular distribution:

$$
P_{\nu,zz}=\frac1c\int_{4\pi}I_\nu\mu^2d\Omega.
$$

For a fully isotropic field, $P_{\nu,zz}=u_\nu/3$. This is a momentum-flux moment of the radiation field and should not be interpreted without conditions as the pressure on an arbitrary illuminated surface.

## 3. From Emission and Absorption to the Transfer Equation

### 3.1 Local change

$$
dI_\nu\big|_{\rm emission}=j_\nu ds,
\qquad
dI_\nu\big|_{\rm absorption}=-\alpha_\nu I_\nu ds.
$$

Adding the two contributions gives

$$
\boxed{\frac{dI_\nu}{ds}=j_\nu-\alpha_\nu I_\nu
=\alpha_\nu(S_\nu-I_\nu)},\qquad
\boxed{S_\nu=\frac{j_\nu}{\alpha_\nu}}.
$$

Dimensional check: both $j_\nu ds$ and $\alpha_\nu I_\nu ds$ must have intensity units. If the problem gives the volume emissivity $\epsilon_\nu$ integrated over all directions, convert first to $j_\nu=\epsilon_\nu/(4\pi)$ for isotropic emission.

### 3.2 Optical depth, column density, and thin versus thick

$$
\boxed{\tau_\nu(s_1,s_2)=\int_{s_1}^{s_2}\alpha_\nu(s)ds
=\int_{s_1}^{s_2}\rho(s)\kappa_\nu(s)ds}.
$$

Uniform medium: $\tau_\nu=\alpha_\nu\ell=\rho\kappa_\nu\ell$. If $\kappa_\nu$ is constant along the path, then $\tau_\nu=\kappa_\nu\Sigma$, where $\Sigma=\int\rho ds$ is the mass column density. If the coefficient can be written as absorber number density times an effective cross section, $\alpha_\nu=n\sigma_{\nu,\rm abs}$, then $\tau_\nu=N\sigma_{\nu,\rm abs}$.

- $\tau_\nu\ll1$: optically thin, with transmission $e^{-\tau_\nu}\simeq1-\tau_\nu$.
- $\tau_\nu\gg1$: optically thick; radiation from the far side is strongly suppressed.
- $\tau_\nu=1$: background transmission is about $e^{-1}=0.368$, neither fully transparent nor fully opaque.

The same object may be thick at one frequency and thin at another, or thick along central rays and thin near the limb. Positive $1/\alpha_\nu$ is the characteristic attenuation length of intensity. It can be called an absorption mean free path directly only when $\alpha_\nu$ represents the actual absorption-event rate and stimulated corrections are negligible.

### 3.3 Two sign conventions for optical depth

| Coordinate definition | Equation |
|---|---|
| $\tau_\nu$ increasing along propagation, $d\tau_\nu=\alpha_\nu ds$ | $dI_\nu/d\tau_\nu=S_\nu-I_\nu$ |
| Normal depth $t_\nu$ increasing inward from the surface in a plane atmosphere, with $\mu$ measured from the outward normal | $\mu\,dI_\nu/dt_\nu=I_\nu-S_\nu$ |

Before using a textbook formula, first check the positive direction of depth; do not change signs uniformly from memory.

## 4. Ready-to-Use Solutions of the Transfer Equation

### 4.1 A medium varying with position

Let $s=0$ be the entrance and $s=\ell$ the exit. The least ambiguous form is

$$
\boxed{
I_{\nu,\rm out}=I_{\nu,\rm in}
\exp\!\left[-\int_0^\ell\alpha_\nu ds\right]
+\int_0^\ell j_\nu(s)
\exp\!\left[-\int_s^\ell\alpha_\nu(s')ds'\right]ds
}.
$$

Meaning: **transmitted background plus newly emitted light from every location multiplied by its transmission to the exit.**

If optical depth accumulates from the entrance to the exit value $\tau_0$, the equivalent form is

$$
I_{\nu,\rm out}=I_{\nu,\rm in}e^{-\tau_0}
+\int_0^{\tau_0}S_\nu(t)e^{-(\tau_0-t)}dt.
$$

### 4.2 Constant source function: the most-used solution

$$
\boxed{I_{\nu,\rm out}=I_{\nu,\rm in}e^{-\tau_\nu}
+S_\nu(1-e^{-\tau_\nu})}.
$$

This requires $S_\nu$ to be constant along the ray; it **does not require $\alpha_\nu$ itself to be constant**. Isothermal LTE is one common way to make $S_\nu$ constant, but isothermality alone is insufficient.

| Case | Result | Interpretation |
|---|---|---|
| No self-emission, $j_\nu=0$ | $I_{\nu,\rm out}=I_{\nu,\rm in}e^{-\tau_\nu}$ | Pure attenuation |
| No absorption, $\alpha_\nu=0$ | $I_{\nu,\rm out}=I_{\nu,\rm in}+\int j_\nu ds$ | Use the original equation and avoid defining $S_\nu$ by division by zero |
| No background | $I_{\nu,\rm out}=S_\nu(1-e^{-\tau_\nu})$ | Emission from the medium alone |
| Constant $S_\nu$, $\tau_\nu\ll1$ | $I_{\nu,\rm out}\simeq I_{\nu,\rm in}+(S_\nu-I_{\nu,\rm in})\tau_\nu$ | With a background, do not omit the absorption term |
| Constant $S_\nu$, $\tau_\nu\gg1$ | $I_{\nu,\rm out}\simeq S_\nu$ | Background information is suppressed |

For $\alpha_\nu>0$ and constant $S_\nu$, the output is a weighted average of $I_{\nu,\rm in}$ and $S_\nu$ and must lie between them. This is one of the easiest checks on a calculation.

### 4.3 What does “seeing $\tau\sim1$” mean?

Use the **remaining line-of-sight optical depth** $q$ measured inward from the observer-side exit. A semi-infinite medium gives

$$
I_{\nu,\rm out}=\int_0^\infty S_\nu(q)e^{-q}dq.
$$

The normalized mean depth under $e^{-q}$ is one, so if the source function varies smoothly with depth, the emerging intensity can be represented approximately by the region near $q\sim1$. This is not a sharply defined emitting shell: for constant source function, $0<q<1$ contributes about 63% and $0<q<3$ about 95%.

For a plane-parallel semi-infinite atmosphere and $\mu>0$:

$$
I_\nu(0,\mu)=\int_0^\infty S_\nu(t)e^{-t/\mu}\frac{dt}{\mu}
\simeq S_\nu(t=\mu).
$$

The final step is the **Eddington–Barbier approximation**. It is exact if $S_\nu(t)$ is strictly linear in normal optical depth. In LTE, $I_\nu(0,\mu)\simeq B_\nu[T(t=\mu)]$. Toward the limb, small $\mu$ usually samples shallower layers; if outer layers are cooler, limb darkening results.

## 5. LTE, Blackbodies, and Radiative Equilibrium

### 5.1 Under what conditions may one write $S_\nu=B_\nu$?

Local thermodynamic equilibrium (LTE) describes matter using equilibrium distributions at the local temperature, density, and composition. For the thermal absorption and emission model used here, Kirchhoff’s law gives

$$
\boxed{j_\nu=\alpha_\nu B_\nu(T)}
\quad\Longrightarrow\quad
\boxed{S_\nu=B_\nu(T)}.
$$

The net absorption coefficient here includes the stimulated-emission correction. LTE constrains the local matter; it does not require the actual radiation in every direction to be a local blackbody.

| Condition or statement | What follows | What does not follow automatically |
|---|---|---|
| Matter in LTE, with the absorption/emission model used here | $S_\nu=B_\nu[T(s)]$ | $I_\nu=B_\nu$ |
| Isothermal | $T$ is position independent | Isothermality alone does not imply $S_\nu=B_\nu$ |
| Isothermal + LTE | $S_\nu=B_\nu(T)$ is constant along the path | At finite optical depth, $I_\nu\ne B_\nu$ may still hold |
| Isothermal + LTE + optically thick line of sight | Emerging $I_\nu\simeq B_\nu(T)$ | All frequencies are thick, or the full spectrum is a single-temperature blackbody |
| Matter and radiation in complete thermodynamic equilibrium | $I_\nu=J_\nu=S_\nu=B_\nu(T)$ | Radiation energy vanishes; only the net flux is zero |

**Thermal emission need not have a blackbody spectrum.** For isothermal LTE with no background,

$$
I_\nu=B_\nu(T)(1-e^{-\tau_\nu});
\qquad \tau_\nu\ll1\Rightarrow I_\nu\simeq B_\nu(T)\tau_\nu.
$$

The optically thin spectrum retains the frequency dependence of $\tau_\nu$. In an optically thick source with a temperature gradient, different frequencies may probe different temperature layers.

### 5.2 Radiative equilibrium constrains only net energy exchange

For isotropic $j_\nu,\alpha_\nu$, the net radiative heating rate of matter per unit volume is

$$
Q_{\rm rad}=4\pi\int_0^\infty(\alpha_\nu J_\nu-j_\nu)d\nu.
$$

A positive value heats the matter. Radiative equilibrium requires $Q_{\rm rad}=0$. If LTE also holds,

$$
\int_0^\infty\alpha_\nu[J_\nu-B_\nu(T)]d\nu=0.
$$

This is a frequency-integrated net balance and **does not imply $J_\nu=B_\nu$ at every frequency**. In steady state, $\nabla\cdot\boldsymbol F=-Q_{\rm rad}$. In plane-parallel radiative equilibrium, the total net flux is depth independent, while frequency-dependent fluxes may vary.

## 6. The Planck Spectrum and Its Approximations

### 6.1 Exact expression and two limits

Define $x=h\nu/(kT)=hc/(\lambda kT)$:

$$
\boxed{B_\nu(T)=\frac{2h\nu^3}{c^2}\frac1{e^x-1}},
\qquad
\boxed{B_\lambda(T)=\frac{2hc^2}{\lambda^5}
\frac1{e^{hc/(\lambda kT)}-1}}.
$$

| Limit | Condition | Approximation |
|---|---|---|
| Rayleigh–Jeans（RJ） | $x\ll1$ | $B_\nu\simeq2kT\nu^2/c^2$；$B_\lambda\simeq2ckT/\lambda^4$ |
| Wien | $x\gg1$ | $B_\nu\simeq(2h\nu^3/c^2)e^{-x}$ |

Whether the Rayleigh–Jeans approximation applies depends on **both frequency and temperature**, not simply on whether the observation is “radio.” A quick check is

$$
\frac{h\nu}{k}=0.0479924\,\mathrm K\left(\frac{\nu}{\mathrm{GHz}}\right),
\qquad
\frac{hc}{\lambda k}=\frac{1.43878\times10^4\,\mathrm{\mu m\,K}}{\lambda}.
$$

The Rayleigh–Jeans value exceeds the exact Planck value by the relative amount

$$
\frac{B_\nu^{\rm RJ}-B_\nu}{B_\nu}=\frac{e^x-1}{x}-1
\simeq\frac x2.
$$

For example, at $x=0.1$ the error is about 5.2%; for roughly 1% accuracy, require $x\lesssim0.02$.

### 6.2 Converting frequency and wavelength spectra

For any spectral density such as $I,F,f,B$, retain the Jacobian:

$$
X_\lambda=X_\nu\left|\frac{d\nu}{d\lambda}\right|
=\frac{c}{\lambda^2}X_\nu,
\qquad
\lambda X_\lambda=\nu X_\nu.
$$

The $X_\nu$ on the right is evaluated at $\nu=c/\lambda$; one cannot merely replace $\nu$ by $c/\lambda$. In cgs this formula gives a wavelength spectrum per centimeter. Multiply by $10^{-8}$ for per Å and by $10^{-4}$ for per μm.

### 6.3 Spectral peaks and frequency-integrated quantities

| Peak requested | Location |
|---|---|
| Peak of $B_\nu$ | $h\nu_{\max}/(kT)=2.82144$; $\nu_{\max}=5.87893\times10^{10}(T/\mathrm K)\,\mathrm{Hz}$ |
| Peak of $B_\lambda$ | $\lambda_{\max}T=2.89777\times10^{-3}\,\mathrm{m\,K}$ |
| Peak of $\nu B_\nu=\lambda B_\lambda$ | $h\nu/(kT)=3.92069$ |

Therefore the peak wavelength of $B_\lambda$ is not $c/\nu_{\max}^{(B_\nu)}$. When reporting a “spectral peak,” state which spectral density is plotted.

$$
\int_0^\infty B_\nu(T)d\nu=\frac{\sigma_{\rm SB}}\pi T^4,
\qquad F_{\rm BB}^+=\sigma_{\rm SB}T^4.
$$

The energy density of a complete isotropic blackbody field is

$$
u=aT^4,\qquad a=\frac{4\sigma_{\rm SB}}c.
$$

If only the blackbody outward hemisphere is present and the other hemisphere is empty, the local value is $u=aT^4/2$. Do not confuse this with the energy density inside a closed blackbody cavity.

## 7. From Intensity to Observed Flux and Luminosity

### 7.1 Why does $I_\nu$ not follow inverse square while $f_\nu$ does?

Under the vacuum-propagation assumptions used here—no redshift and no medium interaction—along a fixed ray

$$
\frac{dI_\nu}{ds}=0.
$$

The angular area of a fixed source decreases as $\Omega_{\rm src}\propto d^{-2}$, so

$$
\boxed{f_\nu\simeq\int_{\rm src}I_\nu d\Omega
=\bar I_\nu\Omega_{\rm src}\propto d^{-2}}.
$$

This assumes a small angular source and a detector surface approximately perpendicular to the central ray. It explains why surface brightness is unchanged while the total received light from the whole source decreases. The **beam-averaged** brightness of an unresolved source also depends on the filling factor within the beam; this does not mean the intrinsic source $I_\nu$ decreases with distance. See also [NRAO, *Essential Radio Astronomy*, §2.1](https://www.cv.nrao.edu/~sransom/web/Ch2.html) for intensity conservation and the small-angle source flux relation.

### 7.2 Projected-area formula

For a distant source, $d\Omega\simeq dA_{\rm proj}/d^2$, so

$$
\boxed{f_\nu=\frac1{d^2}\int_{\rm projected\ source}I_\nu\,dA_{\rm proj}}.
$$

For a circularly symmetric source with projected radius $b$:

$$
\boxed{f_\nu=\frac{2\pi}{d^2}\int_0^R I_\nu(b)b\,db}.
$$

For a uniformly bright disk, $f_\nu=I_\nu\pi R^2/d^2$. This uses the **projected circular area $\pi R^2$**, not the spherical surface area $4\pi R^2$.

### 7.3 Stellar surface, total luminosity, and observer location

For a spherical source with uniform surface net flux,

$$
L_\nu=4\pi R^2F_{\nu,\rm surf},
\qquad
f_\nu=\frac{L_\nu}{4\pi d^2}
=F_{\nu,\rm surf}\left(\frac Rd\right)^2.
$$

For a uniform blackbody star with no external illumination,

$$
F_{\nu,\rm surf}=\pi B_\nu(T),\qquad
L_\nu=4\pi^2R^2B_\nu(T),\qquad
f_\nu=\pi B_\nu(T)\left(\frac Rd\right)^2,
$$

$$
L=4\pi R^2\sigma_{\rm SB}T^4,\qquad
f_{\rm bol}=\sigma_{\rm SB}T^4\left(\frac Rd\right)^2.
$$

Without a basis for isotropic emission, $4\pi d^2f$ is only the isotropic-equivalent luminosity $L_{\rm iso}$. A band flux $f_{\rm band}=\int_{\rm band}f_\nu d\nu$ also cannot be treated directly as the bolometric flux $f_{\rm bol}$.

### 7.4 Common observational conversions

$$
1\,\mathrm{Jy}=10^{-23}\,\mathrm{erg\,s^{-1}\,cm^{-2}\,Hz^{-1}}
=10^{-26}\,\mathrm{W\,m^{-2}\,Hz^{-1}}.
$$

If the spectrum is approximately constant across the band, $f_{\rm band}\simeq f_\nu\Delta\nu$. The photon flux density is $f_\nu/(h\nu)$, and the photon count rate is

$$
\dot N=\int\frac{f_\nu A_{\rm eff}(\nu)}{h\nu}d\nu,
$$

where $A_{\rm eff}$ must include the adopted detection efficiency.

For a disk of angular radius $\theta_R\ll1$ rad, $\Omega_{\rm src}\simeq\pi\theta_R^2$. If an angular diameter is given, divide it by two first. $1''=4.84814\times10^{-6}\,\mathrm{rad}$.

## 8. Brightness, Effective, and Color Temperatures

### 8.1 Planck brightness temperature: invert a single-frequency intensity

Define the Planck brightness temperature $T_{b,\rm P}$ by

$$
I_\nu=B_\nu(T_{b,\rm P})
\quad\Longrightarrow\quad
\boxed{T_{b,\rm P}=\frac{h\nu}{k}
\left[\ln\left(1+\frac{2h\nu^3}{c^2I_\nu}\right)\right]^{-1}}.
$$

This asks only “which blackbody is equally bright at this frequency”; it does not prove that the source is a blackbody. Radio astronomy commonly uses another convention:

$$
\boxed{T_{b,\rm RJ}\equiv\frac{c^2I_\nu}{2k\nu^2}}
\simeq\frac{c^2f_\nu}{2k\nu^2\Omega_{\rm src}}
\quad\text{(uniform small-angle source)}.
$$

The two brightness temperatures agree in the Rayleigh–Jeans limit but must be distinguished outside it. For a true blackbody of temperature $T$, its Rayleigh–Jeans brightness temperature is

$$
T_{b,\rm RJ}=\frac{h\nu/k}{e^{h\nu/(kT)}-1},
$$

This is generally smaller than $T$. **Do not automatically identify the temperature obtained by inverting the Rayleigh–Jeans approximation with the Planck brightness temperature.**

### 8.2 Brightness temperature of an isothermal LTE medium

With no background, $I_\nu=B_\nu(T)(1-e^{-\tau_\nu})$, so the exact Planck brightness temperature satisfies $T_{b,\rm P}\le T$. If the gas is also in the Rayleigh–Jeans limit,

$$
T_{b,\rm RJ}\simeq T(1-e^{-\tau_\nu})
\simeq
\begin{cases}
T\tau_\nu,&\tau_\nu\ll1,\\
T,&\tau_\nu\gg1.
\end{cases}
$$

With a background, provided the gas source function can be treated in the Rayleigh–Jeans approximation,

$$
T_{b,\rm out}\simeq T_{b,\rm bg}e^{-\tau_\nu}
+T(1-e^{-\tau_\nu}),
$$

Here every $T_b$ is a Rayleigh–Jeans brightness temperature. If the background is brighter, $T_{b,\rm out}$ may exceed the gas temperature, so the inequality $T_b\le T$ above cannot be generalized freely.

If only $f_\nu$ is known for an unresolved source, intrinsic brightness temperature cannot be determined uniquely without $\Omega_{\rm src}$. If only $\Omega_{\rm src}\le\Omega_{\max}$ is known, one obtains the lower bound on average Rayleigh–Jeans brightness temperature

$$
\bar T_{b,\rm RJ}\ge\frac{c^2f_\nu}{2k\nu^2\Omega_{\max}}.
$$

### 8.3 Do not mix the three temperatures

| Temperature | Definition / measurement | Main dependencies |
|---|---|---|
| Brightness temperature $T_b(\nu)$ | Match the intensity at one frequency | Frequency, angular area, optical depth, and background |
| Effective temperature $T_{\rm eff}$ | Total outward surface flux $F_{\rm bol}^+=\sigma_{\rm SB}T_{\rm eff}^4$ | Total radiated power and adopted emitting area |
| Color temperature $T_{\rm col}$ | Fit a temperature to a blackbody spectral shape or color ratio | Bandpass, extinction, and frequency dependence of emissivity |

An isolated star usually has negligible incident radiation, so $F^+=F$ and $L=4\pi R^2\sigma_{\rm SB}T_{\rm eff}^4$. Under external illumination, specify whether outward, net, or internal flux is meant.

For a single-temperature blackbody, Planck brightness temperature, effective temperature, and measurable color temperature all correspond to the same $T$. If only the Rayleigh–Jeans band is available, $f_\nu\propto C T\nu^2$, so the spectral shape alone cannot separate the unknown normalization $C$ from temperature; a color ratio generally cannot measure the temperature.

## 9. Templates for Slabs, Spherical Clouds, and Multilayer Media

### 9.1 Isothermal LTE slab

Given total normal optical depth $\tau_{\nu,\perp}$ and a ray with direction cosine $\mu>0$ relative to the normal, for a laterally extended plane-parallel slab:

$$
\tau_{\nu,\rm ray}=\frac{\tau_{\nu,\perp}}\mu,
\qquad
\boxed{I_{\nu,\rm out}(\mu)=I_{\nu,\rm bg}(\mu)e^{-\tau_{\nu,\perp}/\mu}
+B_\nu(T)(1-e^{-\tau_{\nu,\perp}/\mu})}.
$$

With no background, the one-sided outward flux is

$$
F_\nu^+=2\pi B_\nu(T)\int_0^1
\left(1-e^{-\tau_{\nu,\perp}/\mu}\right)\mu\,d\mu.
$$

For large normal depth this approaches $\pi B_\nu$. As the normal depth tends to zero, the leading term is $F_\nu^+\sim2\pi B_\nu\tau_{\nu,\perp}$. Even a thin slab has very oblique rays that can be optically thick, so $1-e^{-\tau/\mu}\simeq\tau/\mu$ is not uniformly valid for all $\mu$.

### 9.2 Uniform spherical cloud: chord length, then intensity, then area integral

Let the sphere have radius $R$, with constant $j_\nu,\alpha_\nu$ inside; let $b$ be the projected distance of a ray from the center:

$$
\ell(b)=2\sqrt{R^2-b^2},\qquad
\tau_\nu(b)=2\alpha_\nu\sqrt{R^2-b^2}.
$$

With no background,

$$
\boxed{I_\nu(b)=S_\nu
\left[1-e^{-2\alpha_\nu\sqrt{R^2-b^2}}\right]}.
$$

For isothermal LTE, substitute $S_\nu=B_\nu(T)$. The optically thin limit gives

$$
I_\nu(b)\simeq2j_\nu\sqrt{R^2-b^2},\qquad
I_{\nu,\rm center}=2j_\nu R,
$$

$$
f_\nu=\frac{2\pi}{d^2}\int_0^R I_\nu(b)b\,db
\simeq\frac{4\pi j_\nu R^3}{3d^2}.
$$

The disk-averaged source intensity is

$$
\bar I_\nu=\frac{f_\nu}{\pi R^2/d^2}
=\frac43j_\nu R=\frac23I_{\nu,\rm center}.
$$

An **optically thin uniform sphere is not a uniformly bright disk**: it is brighter at the center. When very optically thick, most of the disk approaches $I_\nu\simeq S_\nu$, but at finite opacity the chord length still tends to zero arbitrarily close to the limb.

More generally, if emission is isotropic everywhere and all relevant rays are optically thin,

$$
L_\nu=4\pi\int_Vj_\nu dV,
\qquad f_\nu=\frac1{d^2}\int_Vj_\nu dV.
$$

The exact full-optical-depth formula for a sphere is also useful. Define the total central depth $\tau_c=2\alpha_\nu R$. For constant source function and no background,

$$
f_\nu=\frac{\pi R^2S_\nu}{d^2}
\left[1-\frac{2}{\tau_c^2}
\left(1-(1+\tau_c)e^{-\tau_c}\right)\right].
$$

The bracket is $2\tau_c/3+O(\tau_c^2)$ in the thin limit and approaches one in the thick limit. For very small $\tau_c$ in numerical work, use the thin-limit expression or the integral form to avoid loss of precision from subtracting nearly equal numbers.

### 9.3 Multilayer medium: calculate from back to front

If layer 1 is farthest from the observer and layer $N$ is nearest, with a constant source function in each layer,

$$
\boxed{I_\nu^{(i)}=I_\nu^{(i-1)}e^{-\tau_{\nu,i}}
+S_{\nu,i}(1-e^{-\tau_{\nu,i}})},
\qquad I_\nu^{(0)}=I_{\nu,\rm bg}.
$$

Use the output of one layer as the input to the next. Optical depths of layers can be added, but layers with different source functions generally cannot be combined using an arithmetic-average $S_\nu$. The ordering of the layers affects the result.

## 10. Absorption and Emission Lines

### 10.1 The most direct diagnostic

For one layer with constant source function and positive optical depth,

$$
\boxed{\Delta I_\nu\equiv I_{\nu,\rm out}-I_{\nu,\rm bg}
=(S_\nu-I_{\nu,\rm bg})(1-e^{-\tau_\nu})}.
$$

| Comparison | What is observed along this ray |
|---|---|
| $S_\nu<I_{\nu,\rm bg}$ | Weaker than the background |
| $S_\nu>I_{\nu,\rm bg}$ | Stronger than the background |
| $S_\nu=I_{\nu,\rm bg}$ | No intensity contrast, even if the medium is opaque |

If this layer has significant opacity only near the spectral line and the neighboring continuum approximates the unaffected background, the table gives the absorption/emission-line criterion directly. If both line and continuum are modified by the medium, compare with the **actual emerging continuum**.

“Cold gas produces an absorption line” assumes a background brighter than the gas source function. The same gas projected against a dark sky may appear in emission. For an unresolved source, integrate over all rays: some may absorb and others emit, so the net line depends on area and intensity weights.

### 10.2 Combining line and continuum

If $\alpha_{\nu,c},\alpha_{\nu,l}$ are the continuum and line net absorption coefficients, respectively, then

$$
j_{\nu,\rm tot}=j_{\nu,c}+j_{\nu,l},\qquad
\alpha_{\nu,\rm tot}=\alpha_{\nu,c}+\alpha_{\nu,l},
$$

$$
S_{\nu,\rm tot}=
\frac{\alpha_{\nu,c}S_{\nu,c}+\alpha_{\nu,l}S_{\nu,l}}
{\alpha_{\nu,c}+\alpha_{\nu,l}}.
$$

Source functions are weighted by absorption coefficients and cannot simply be added. In same-temperature LTE, both source functions are $B_\nu(T)$, so the total source function remains $B_\nu(T)$.

A nonisothermal LTE atmosphere can also form spectral lines. The line-center opacity is usually larger, so $\tau_\nu\sim1$ corresponds to a shallower location. If temperature decreases outward, line center samples a smaller $B_\nu$ and may therefore appear in absorption.

## 11. Substitution Order and Error Checks

### 11.1 Process a problem in this order

1. **Identify the requested quantity.** Is it $I_\nu$ along one ray, source flux density $f_\nu$, surface flux $F_\nu$, or total luminosity $L$?
2. **Check definitions and units.** Is the emission coefficient per steradian? Is the spectrum per frequency or wavelength? Is the angular size a radius or diameter?
3. **Write the geometric path.** Use $\ell/|\mu|$ for a slab and $2\sqrt{R^2-b^2}$ for a sphere; determine the line-of-sight $\tau_\nu$ first.
4. **Determine the source function.** In general use $j_\nu/\alpha_\nu$; replace it by $B_\nu(T)$ only when the conditions are satisfied.
5. **Specify the background and boundary condition.** Choose the general solution, constant-source-function solution, or multilayer recursion; retain the background when present.
6. **Perform observational integration last.** Integrate $I_\nu$ over source angular area to get $f_\nu$; integrate over outward directions to get surface $F_\nu^+$; then integrate frequency if a total is needed.
7. **Check limits.** As $\tau\to0$, recover the background; for constant $S$ and $\tau\to\infty$, approach $S$; if $j=\alpha=0$, $I_\nu$ must be conserved along the ray.

### 11.2 Equalities most easily misused

| Tempting equality | Correct condition or correction |
|---|---|
| $I_\nu=S_\nu$ | Approximate optically thick output for constant source function; in general solve the transfer equation |
| $S_\nu=B_\nu$ | Guaranteed by LTE for the no-scattering thermal absorption/emission model used here |
| $I_\nu=B_\nu$ | The actual radiation is blackbody; LTE alone is insufficient |
| $F_\nu=\pi I_\nu$ | Uniform angular distribution over a hemisphere; if net flux is meant, also no incident radiation |
| $u_\nu=4\pi I_\nu/c$ | Isotropic over all space; in general use $4\pi J_\nu/c$ |
| $f_\nu=I_\nu\Omega$ | $I_\nu$ is uniform or source averaged; do not arbitrarily use the central value |
| $I_\nu\propto d^{-2}$ | Along-ray $I_\nu$ is conserved in vacuum without redshift; $f_\nu$ for a fixed source scales as $d^{-2}$ |
| $T_b=\tau_\nu T$ | No background, isothermal LTE, optically thin, and in the Rayleigh–Jeans limit |
| $\tau_\nu=\alpha_\nu R$ | Check the path: a central ray through an entire sphere has length $2R$, not $R$ |
| $\int B_\nu d\nu=\sigma T^4$ | Correct expression is $\sigma_{\rm SB}T^4/\pi$ |
| $B_\lambda=B_\nu(c/\lambda)$ | Multiply additionally by $c/\lambda^2$ and use consistent wavelength units |
| $j_\nu$ is total power per volume | Here it is also per steradian; isotropic total emissivity is $4\pi j_\nu$ |

## Appendix A. Einstein Coefficients and the Line Source Function

This appendix retains only the connection between previously studied absorption/emission lines and $j_\nu,\alpha_\nu,S_\nu$. Skip it if these coefficients are already supplied by the problem.

Let levels 1 and 2 be the lower and upper levels, with number densities $n_1,n_2$, degeneracies $g_1,g_2$, and energy separation $h\nu_0$. Assume isotropic spontaneous emission and the same narrow profile $\phi(\nu)$ for absorption, stimulated emission, and spontaneous emission:

$$
\int\phi(\nu)d\nu=1,\qquad
\bar J=\int J_\nu\phi(\nu)d\nu.
$$

Using the RL mean-intensity convention, the transition rate per atom in the relevant level is

$$
R_{12}=B_{12}\bar J,\qquad
R_{21}^{\rm sp}=A_{21},\qquad
R_{21}^{\rm stim}=B_{21}\bar J.
$$

The coefficients satisfy

$$
g_1B_{12}=g_2B_{21},\qquad
\frac{A_{21}}{B_{21}}=\frac{2h\nu_0^3}{c^2}.
$$

**$B_{12},B_{21}$ are transition coefficients; $B_\nu(T)$ is the Planck function. They are not the same quantity.** If a reference uses the energy-density convention $R=B^{(u)}\bar u$, then $B^{(J)}=(4\pi/c)B^{(u)}$ and correspondingly $A_{21}/B_{21}^{(u)}=8\pi h\nu_0^3/c^3$.

The emission and net absorption coefficients are

$$
\boxed{j_\nu=\frac{h\nu_0}{4\pi}n_2A_{21}\phi(\nu)},
$$

$$
\boxed{\alpha_\nu=\frac{h\nu_0}{4\pi}
(n_1B_{12}-n_2B_{21})\phi(\nu)}.
$$

Stimulated emission is proportional to the existing beam and is already included as negative absorption in $\alpha_\nu$. Do not add it again to $j_\nu$ above.

The line source function is

$$
\boxed{S_\nu=\frac{2h\nu_0^3}{c^2}
\left(\frac{n_1g_2}{n_2g_1}-1\right)^{-1}}.
$$

In LTE, $n_2/n_1=(g_2/g_1)e^{-h\nu_0/(kT)}$, so

$$
S_\nu=B_{\nu_0}(T)\simeq B_\nu(T),
\qquad
\alpha_\nu=\frac{h\nu_0}{4\pi}n_1B_{12}
\left(1-e^{-h\nu_0/(kT)}\right)\phi(\nu).
$$

Writing $B_{\nu_0}\simeq B_\nu$ here uses the narrow-line approximation; it does not mean that the Planck function is generally frequency independent.

If $n_2/g_2>n_1/g_1$, then $\alpha_\nu<0$ and stimulated amplification occurs. The earlier results that rely on positive optical depth—attenuation, weighted averaging, and “optically thick tends to $S$”—do not apply.

## Appendix B. Constants and Related Notes

### Constants

| Constant | cgs value |
|---|---|
| $c$ | $2.99792458\times10^{10}\,\mathrm{cm\,s^{-1}}$ |
| $h$ | $6.62607015\times10^{-27}\,\mathrm{erg\,s}$ |
| $k$ | $1.380649\times10^{-16}\,\mathrm{erg\,K^{-1}}$ |
| $\sigma_{\rm SB}$ | $5.670374419\times10^{-5}\,\mathrm{erg\,cm^{-2}\,s^{-1}\,K^{-4}}$ |
| $a=4\sigma_{\rm SB}/c$ | $7.56573\times10^{-15}\,\mathrm{erg\,cm^{-3}\,K^{-4}}$ |

### Related existing learning notes

This reference extracts material from the following notes and unifies their notation. The emergent integral for a plane atmosphere and the exact sphere formula are included here as ready-to-use geometric additions.

- [Radiative Transfer Foundations and Problems 1.1–1.4](/learning/en/radiation/ast1440-radiative-transfer-exercises-1-1-to-1-4): intensity, angular moments, the transfer equation, and basic geometry.
- [Thermal Radiation and Observational Applications](/learning/en/radiation/ast1440-thermal-radiation-observations-exercises-1-3-1-5-1-6): LTE, the Planck spectrum, temperature definitions, and observational conversions.
- [Einstein Coefficients and Absorption/Emission Lines](/learning/en/radiation/ast1440-einstein-coefficients-absorption-emission-lines-exercises-1-7-to-1-9): stimulated-emission corrections, the line source function, and spherical-cloud models.

This reference does not replace the full derivations in those notes. When looking up formulas, retain the boundary conditions, optical-depth direction, and geometric assumptions listed here.
