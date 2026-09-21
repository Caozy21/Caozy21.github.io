---
title: >-
  AST2040 Lecture 1: Cosmic Evolution from the Early Universe to Galaxy
  Formation
description: >-
  A connected introduction to cosmic expansion, primordial structure,
  dark-matter halos, gas cooling, the first galaxies, and reionization.
tags:
  - AST2040
  - Lecture 1
  - Galaxy formation
order: 1
sourceHash: 7b56192070589b1ef77cc5e316bc65719317fc0d70208e7229ccb2ba6e952d3e
translation: AI-assisted English translation
---

# AST2040 Lecture 1: Cosmic Evolution from the Early Universe to Galaxy Formation

> **Course:** AST 2040 Extragalactic Astronomy  
> **Lecture 1 focus:** *Practicalities & introduction to galaxy formation*  
> **Purpose:** Integrate the questions raised while studying Lecture 1 and complete its overview of how an initially almost uniform universe evolves into dark-matter halos, stars, and galaxies.

## Scope

The syllabus identifies Lecture 1 as an introduction to galaxy formation. Its cosmic-history timeline previews density perturbations, dark-matter halos, gas, the first galaxies, the IGM, and reionization, which receive fuller treatment later. These notes explain concepts already raised in the Lecture 1 discussion, without replacing those later specialist lectures.

---

## 1. The central thread of Lecture 1

The aim is not a list of isolated terms, but a causally connected evolutionary sequence:

$$
\boxed{
\begin{aligned}
&\text{Big Bang}
\rightarrow \text{inflation}
\rightarrow \text{hot expanding universe}
\rightarrow \text{BBN}\\
&\rightarrow \text{ionized plasma}
\rightarrow \text{matter-radiation equality}
\rightarrow \text{recombination / CMB}\\
&\rightarrow \text{Dark Ages}
\rightarrow \text{dark-matter halos}
\rightarrow \text{Cosmic Dawn / Pop III}\\
&\rightarrow \text{feedback and enrichment}
\rightarrow \text{reionization}
\rightarrow \text{galaxy evolution today}.
\end{aligned}}
$$

The most important physical connections are:

1. **Expansion causes cooling.** Photon wavelengths grow with the scale factor, and temperature falls.
2. **Cooling allows successive physical processes.** Light nuclei form first, neutral atoms later, and eventually gas in dark-matter potential wells forms stars.
3. **Inflation generates and stretches primordial perturbations.** The roughly $10^{-5}$ fluctuations in the CMB are the seeds of later structure.
4. **Gravity amplifies density perturbations.** Dark matter first forms the cosmic web and halos; ordinary gas falls into those potential wells.
5. **Cooling gas forms stars, which then change the gas.** Radiation, stellar winds, supernovae, and metal enrichment together constitute feedback.

### 1.1 Approximate timeline

The times and redshifts below are approximate guides to scale. Cosmic Dawn, the first halos, and reionization are extended processes rather than instantaneous events, so their boundaries are model-dependent.

| Stage | Typical time / redshift | Main event |
|---|---:|---|
| inflation | Very early universe, often discussed around $10^{-36}$–$10^{-32}\,\mathrm{s}$ | Accelerated expansion; shrinking comoving Hubble radius; stretched quantum fluctuations |
| BBN | $t\sim1\,\mathrm{s}$ to $20\,\mathrm{min}$ | Formation of H, He, D, $^3$He, and trace Li nuclei |
| ionized plasma | After BBN and before recombination | Free electrons make the universe opaque to light |
| matter-radiation equality | $z_{\rm eq}\sim3400$ | Matter density exceeds radiation density, making structure growth more efficient |
| recombination / photon decoupling | $z\sim1100$，$t\sim3.8\times10^5\,\mathrm{yr}$，$T\sim3000\,\mathrm K$ | Neutral atoms form; photons begin free streaming, leaving the CMB |
| Dark Ages | After recombination and before the first luminous objects | Mostly neutral gas, with no stellar light sources yet |
| Cosmic Dawn | Often summarized as $z\sim30$ to $6$, without sharp boundaries | First stars, earliest galaxies, and possible black-hole seeds appear |
| hydrogen reionization | Broadly begins during Cosmic Dawn and is largely complete by $z\sim5$–$6$ | Ionizing photons reionize neutral hydrogen in the IGM |
| cosmic star-formation peak | Around $z\sim2$ | Mean star-formation-rate density per comoving volume peaks |
| helium reionization | Roughly by $z\sim3$ | Energetic radiation further ionizes He II into He III |
| dark-energy domination | Low redshift, approximately $z\lesssim1$ | Late-time cosmic expansion accelerates |

---

## 2. Basic language for an expanding universe

### 2.1 Scale factor and redshift

The scale factor $a(t)$ describes the changing overall scale of the universe. It is conventionally normalized today to

$$
a_0=1.
$$

Cosmological redshift is defined by

$$
\boxed{1+z=\frac{a_0}{a(t)}},
$$

Thus, with the convention $a_0=1$,

$$
\boxed{a=\frac{1}{1+z}}.
$$

Therefore:

| redshift | Scale factor at that epoch |
|---:|---:|
| $z=0$ | $a=1$ |
| $z=1$ | $a=1/2$ |
| $z=5$ | $a=1/6$ |
| $z=10$ | $a=1/11$ |
| $z=1100$ | $a\simeq1/1101$ |

**Note:** Redshift is not time itself. Converting $z$ precisely to cosmic age requires parameters such as $H_0$, $\Omega_m$, and $\Omega_\Lambda$ and integration of the expansion history. In standard cosmology, however, larger $z$ generally means an earlier epoch.

### 2.2 Photon redshift, energy, and cosmic temperature

Freely propagating photon wavelengths grow with expansion:

$$
\lambda\propto a.
$$

Since

$$
E_\gamma=h\nu=\frac{hc}{\lambda},
$$

it follows that

$$
\boxed{E_\gamma\propto a^{-1}\propto1+z}.
$$

This is cosmological redshift: expansion lengthens wavelengths and lowers frequencies and individual photon energies. Blackbody radiation temperature also satisfies

$$
\boxed{T_\gamma(z)=T_{\rm CMB,0}(1+z)},
$$

where today's CMB temperature is

$$
T_{\rm CMB,0}\simeq2.725\,\mathrm K.
$$

For example, at $z\sim1100$,

$$
T_\gamma\sim2.725\times1101\simeq3000\,\mathrm K.
$$

### 2.3 Why does individual photon energy scale as $a^{-1}$, but radiation energy density as $a^{-4}$?

This is a key distinction raised in the discussion.

Individual photon energy contains only the redshift factor:

$$
E_\gamma\propto a^{-1}.
$$

Energy density must also account for the declining number of photons per unit volume. Physical volume expands as

$$
V_{\rm phys}\propto a^3,
$$

so photon number density is

$$
n_\gamma\propto a^{-3}.
$$

Therefore

$$
\rho_r\sim n_\gamma E_\gamma
\propto a^{-3}a^{-1},
$$

that is,

$$
\boxed{\rho_r\propto a^{-4}\propto(1+z)^4}.
$$

For nonrelativistic matter, rest-mass energy per particle is approximately unaffected by expansion, leaving mainly volume dilution:

$$
\boxed{\rho_m\propto a^{-3}\propto(1+z)^3}.
$$

Dark energy in the form of a cosmological constant instead satisfies approximately

$$
\boxed{\rho_\Lambda=\text{constant}}.
$$

| Component | Physical energy-density dependence on $a$ | Reason |
|---|---:|---|
| radiation | $\rho_r\propto a^{-4}$ | Volume dilution $a^{-3}$ plus per-photon redshift $a^{-1}$ |
| non-relativistic matter | $\rho_m\propto a^{-3}$ | Mainly volume dilution |
| cosmological constant | $\rho_\Lambda\propto a^0$ | Constant vacuum energy density |

This directly explains the succession of radiation domination, matter domination, and late-time dark-energy domination.

### 2.4 Physical and comoving scales

A structure following the Hubble flow without additional peculiar motion has constant comoving coordinate $\chi$, while its physical distance is

$$
\boxed{D_{\rm phys}(t)=a(t)\chi}.
$$

With today's normalization $a_0=1$, a comoving length $R_{\rm com}$ corresponds at redshift $z$ to physical length

$$
\boxed{R_{\rm phys}(z)=\frac{R_{\rm com}}{1+z}}.
$$

For example, a comoving scale $11\,\mathrm{cMpc}$ at $z=10$ has physical size

$$
R_{\rm phys}=\frac{11}{11}\,\mathrm{Mpc}=1\,\mathrm{Mpc}.
$$

Common unit conventions are:

- **cMpc / ckpc：** comoving Mpc / kpc
- **pMpc / pkpc：** physical Mpc / kpc

Consult the paper or figure caption to determine which convention is used. Mpc or kpc without qualification does not justify assuming one.

Similarly, **star-formation-rate density per comoving volume** removes volume changes due to expansion to compare star formation in the same comoving region across epochs. It is not an unconverted comparison of an expanding physical volume.

---

## 3. Hubble parameter, critical density, and expansion history

### 3.1 Hubble parameter

The Hubble parameter is defined as

$$
\boxed{H(t)=\frac{\dot a}{a}}.
$$

It describes the fractional rate of growth of the scale factor. Its present value is $H_0$. The exercise specifies

$$
H_0=100h\,\mathrm{km\,s^{-1}\,Mpc^{-1}},\qquad h=0.7,
$$

so

$$
\boxed{H_0=70\,\mathrm{km\,s^{-1}\,Mpc^{-1}}}.
$$

### 3.2 General form of $H(z)$

The Friedmann equation can be written as

$$
\boxed{
H(z)=H_0E(z)
}
$$

where

$$
\boxed{
E(z)=\sqrt{
\Omega_{r,0}(1+z)^4+
\Omega_{m,0}(1+z)^3+
\Omega_{k,0}(1+z)^2+
\Omega_{\Lambda,0}}
}.
$$

The terms represent radiation, matter, curvature, and a cosmological constant. For this exercise's flat $\Lambda$CDM approximation, neglecting radiation in the classroom calculation at $z\le10$,

$$
\Omega_{k,0}=0,
\qquad
\Omega_{\Lambda,0}=1-\Omega_{m,0}=0.7,
$$

hence

$$
\boxed{
H(z)=70\sqrt{0.3(1+z)^3+0.7}
\ \mathrm{km\,s^{-1}\,Mpc^{-1}}.
}
$$

**Separate measurements from assumptions:** The problem explicitly provides $G$, $h=0.7$, and $\Omega_m=0.3$. The value $\Omega_\Lambda=0.7$ follows from the additional assumptions of flatness and negligible radiation.

### 3.3 Meaning of critical density

Critical density is defined by

$$
\boxed{\rho_c(z)=\frac{3H(z)^2}{8\pi G}}.
$$

It is a reference density separating the spatial-curvature term in the Friedmann equation. Define

$$
\Omega(z)=\frac{\rho_{\rm total}(z)}{\rho_c(z)}.
$$

In simple FLRW geometry:

- $\Omega=1$: spatial flatness;
- $\Omega>1$: positive curvature;
- $\Omega<1$: negative curvature.

Critical density is not the actual matter density of the universe. The actual matter density is

$$
\boxed{\rho_m(z)=\Omega_{m,0}\rho_{c,0}(1+z)^3}.
$$

whereas $\rho_c(z)$ is set by the total expansion rate $H(z)$ at that epoch. They may be very close during high-redshift matter domination, but remain conceptually distinct.

### 3.4 Classroom exercise: $H(z)$ and $\rho_c(z)$ at $z=0$ and $z=10$

Given:

$$
G=6.68\times10^{-8}\,\mathrm{cm^3\,g^{-1}\,s^{-2}},
$$

$$
H_0=70\,\mathrm{km\,s^{-1}\,Mpc^{-1}},
\qquad
\Omega_{m,0}=0.3.
$$

Assume flat $\Lambda$CDM, $\Omega_{\Lambda,0}=0.7$, and negligible radiation.

#### Step 1: Convert $H_0$ to cgs

Using

$$
1\,\mathrm{km}=10^5\,\mathrm{cm},
\qquad
1\,\mathrm{Mpc}=3.086\times10^{24}\,\mathrm{cm},
$$

gives

$$
H_0=
\frac{70\times10^5}{3.086\times10^{24}}\,\mathrm{s^{-1}}
\simeq2.27\times10^{-18}\,\mathrm{s^{-1}}.
$$

#### Step 2：$z=0$

$$
H(0)=H_0\sqrt{0.3+0.7}=H_0,
$$

Thus

$$
\boxed{H(0)=70\,\mathrm{km\,s^{-1}\,Mpc^{-1}}}.
$$

Today's critical density is

$$
\rho_{c,0}
=\frac{3(2.27\times10^{-18}\,\mathrm{s^{-1}})^2}
{8\pi(6.68\times10^{-8}\,\mathrm{cm^3\,g^{-1}\,s^{-2}})},
$$

Therefore

$$
\boxed{\rho_{c,0}\simeq9.2\times10^{-30}\,\mathrm{g\,cm^{-3}}}.
$$

#### Step 3：$z=10$

Here $1+z=11$, so

$$
\begin{aligned}
H(10)
&=H_0\sqrt{0.3(11)^3+0.7}\\
&=H_0\sqrt{0.3\times1331+0.7}\\
&=H_0\sqrt{400}\\
&=20H_0.
\end{aligned}
$$

therefore

$$
\boxed{H(10)=1400\,\mathrm{km\,s^{-1}\,Mpc^{-1}}}
$$

and

$$
\boxed{H(10)\simeq4.54\times10^{-17}\,\mathrm{s^{-1}}}.
$$

Since $\rho_c\propto H^2$,

$$
\rho_c(10)=\left(\frac{H(10)}{H_0}\right)^2\rho_{c,0}
=20^2\rho_{c,0},
$$

it follows that

$$
\boxed{\rho_c(10)=400\rho_{c,0}
\simeq3.68\times10^{-27}\,\mathrm{g\,cm^{-3}}}.
$$

Final comparison:

| Quantity | $z=0$ | $z=10$ |
|---|---:|---:|
| $H(z)$ | $70\,\mathrm{km\,s^{-1}\,Mpc^{-1}}$ | $1400\,\mathrm{km\,s^{-1}\,Mpc^{-1}}$ |
| $H(z)/H_0$ | $1$ | $20$ |
| $\rho_c(z)$ | $9.2\times10^{-30}\,\mathrm{g\,cm^{-3}}$ | $3.68\times10^{-27}\,\mathrm{g\,cm^{-3}}$ |
| $\rho_c(z)/\rho_{c,0}$ | $1$ | $400$ |

#### Step 4: Why is matter density nearly critical at $z=10$?

$$
\rho_m(10)
=0.3\rho_{c,0}(11)^3
=399.3\rho_{c,0}.
$$

In this exercise's approximation,

$$
\rho_c(10)=400\rho_{c,0}.
$$

They are close because the matter term greatly exceeds the cosmological-constant term at $z=10$:

$$
0.3(11)^3=399.3\gg0.7.
$$

The definitions have not become identical; the universe is simply almost entirely matter-dominated at that time.

---

## 4. Inflation: why is it needed?

Inflation is an era of accelerated expansion in the very early universe, characterized by

$$
\boxed{\ddot a>0}.
$$

In the approximately de Sitter case,

$$
a(t)\propto e^{Ht},
\qquad H\approx\text{constant}.
$$

It has two major roles:

1. Alleviating the horizon, flatness, and monopole problems of the standard hot Big Bang model;
2. Stretching microscopic quantum fluctuations into cosmic-scale primordial perturbations, seeding CMB anisotropies and subsequent structure.

### 4.1 The horizon problem

The mean CMB temperature is approximately $2.725\,\mathrm K$, with relative fluctuations across directions of only

$$
\frac{\Delta T}{T}\sim10^{-5}.
$$

Yet without inflation, widely separated regions of the recombination sky lacked time to exchange photons and energy during a standard decelerating expansion history. Ordinary causal processes could not bring them into thermal equilibrium. The question is:

$$
\boxed{\text{Why are regions without sufficient causal contact at almost the same temperature?}}
$$

Inflation does not let currently distant regions communicate again. Instead,

$$
\boxed{
\text{They first shared a common state in a small causal patch, then inflation pulled them apart.}
}
$$

### 4.2 The flatness problem

The Friedmann equation gives

$$
\Omega-1=\frac{kc^2}{a^2H^2}.
$$

In an ordinary decelerating radiation- or matter-dominated universe, $|\Omega-1|$ grows with time. If $\Omega$ is still extremely close to unity today, it must have been extraordinarily finely tuned toward unity early on.

During inflation, $a$ grows exponentially while $H$ is approximately constant, so

$$
|\Omega-1|\propto\frac{1}{a^2H^2}\rightarrow0.
$$

that is,

$$
\boxed{\Omega\rightarrow1}.
$$

Intuitively, magnifying a tiny patch of a curved surface to an enormous size makes the patch look increasingly flat.

### 4.3 The monopole problem

Some grand unified theories predict that early phase transitions produce many stable, massive topological defects such as magnetic monopoles. At their expected abundance these relics could strongly affect cosmic density, but such numbers are not observed.

Inflation exponentially increases volume, greatly diluting monopoles produced beforehand:

$$
n_{\rm monopole}\propto a^{-3}.
$$

They can therefore become extremely rare within our observable universe. Whether inflation fully eliminates a particular relic problem also depends on whether post-inflation reheating regenerates those relics.

### 4.4 Comoving Hubble radius: the key to understanding inflation

The physical Hubble radius is

$$
R_H=\frac{c}{H},
$$

and its comoving counterpart is

$$
\boxed{r_H=\frac{c}{aH}}.
$$

Often $c=1$ is adopted, giving $(aH)^{-1}$.

#### Ordinary decelerating expansion

Radiation domination：

$$
a\propto t^{1/2},\qquad H=\frac{1}{2t},
$$

Thus

$$
(aH)^{-1}\propto t^{1/2}\quad\text{increases}.
$$

Matter domination：

$$
a\propto t^{2/3},\qquad H=\frac{2}{3t},
$$

Thus

$$
(aH)^{-1}\propto t^{1/3}\quad\text{increases}.
$$

#### Inflation

$$
a\propto e^{Ht},\qquad H\approx\text{constant},
$$

Therefore

$$
\boxed{(aH)^{-1}\propto e^{-Ht}\quad\text{decreases}}.
$$

Since $aH=\dot a$,

$$
\frac{1}{aH}=\frac{1}{\dot a}.
$$

if $\ddot a>0$, then $\dot a$ increases and $(aH)^{-1}$ decreases. Accelerated expansion and a shrinking comoving Hubble radius are two expressions of the same physical condition.

### 4.5 Horizon exit and re-entry

For fixed comoving wavelength $\lambda_{\rm com}$, the physical wavelength is

$$
\lambda_{\rm phys}=a\lambda_{\rm com}.
$$

During inflation, $\lambda_{\rm phys}$ grows exponentially while $H^{-1}$ stays approximately constant. A mode initially satisfying

$$
\lambda_{\rm phys}<\frac{c}{H}
$$

eventually satisfies

$$
\lambda_{\rm phys}>\frac{c}{H}.
$$

This is called horizon exit, more precisely **Hubble-radius crossing**. After inflation, the comoving Hubble radius grows again during radiation and matter domination, allowing the mode to re-enter:

$$
\boxed{
\text{inside Hubble radius}
\rightarrow\text{exit during inflation}
\rightarrow\text{re-enter later}.
}
$$

Primordial quantum fluctuations are stretched to large scales and approximately freeze on super-Hubble scales; later they re-enter as CMB and matter-density perturbations. The resulting causal chain is

$$
\boxed{
\text{quantum fluctuations}
\rightarrow\text{primordial perturbations}
\rightarrow\text{CMB anisotropies}
\rightarrow\text{halos}
\rightarrow\text{galaxies}.
}
$$

#### A terminology caution

The Hubble radius $c/H$ is not strictly the particle horizon, which is

$$
d_{\rm particle}(t)
=a(t)\int_{t_i}^{t}\frac{c\,dt'}{a(t')}.
$$

Lectures and papers often abbreviate Hubble-radius crossing as horizon crossing, but this distinction matters conceptually.

#### Why does inflation not violate relativity?

Special relativity forbids objects moving through space faster than $c$ in a local inertial frame. Cosmic expansion, including inflation, changes the spacetime metric and increases proper distance between distant points; it is not a local object passing an observer faster than light. A recession rate $HD>c$ therefore does not mean local superluminal motion.

---

## 5. BBN: Big Bang nucleosynthesis

**Big Bang nucleosynthesis (BBN)** is the formation of the lightest nuclei from protons and neutrons in the first few minutes after the Big Bang.

The main products include:

- Abundant $^1\mathrm H$;
- Abundant $^4\mathrm{He}$;
- Small amounts of deuterium ($^2\mathrm H$);
- Small amounts of $^3\mathrm{He}$;
- Trace amounts of $^7\mathrm{Li}$.

Typical primordial mass fractions are

$$
\boxed{X_{\rm H}\simeq0.75,\qquad Y_{\rm He}\simeq0.25.}
$$

The 75% and 25% are **mass fractions**, not atomic-number fractions. Helium nuclei are far fewer than hydrogen nuclei because one $^4$He nucleus has approximately four nucleons' worth of mass.

BBN produces essentially no substantial C, O, Fe, or other heavy elements; these mainly arise from later stellar nucleosynthesis.

### 5.1 BBN is not recombination

$$
\boxed{\text{BBN: formation of atomic nuclei}}
$$

$$
\boxed{\text{Recombination: electrons join nuclei to form neutral atoms}}
$$

After BBN the universe remains too hot for electrons to bind stably to nuclei, so matter is still an ionized plasma.

### 5.2 Why approximately 75% H and 25% He?

Two points are crucial:

1. When BBN efficiently synthesizes helium, the neutron-to-proton number ratio is approximately

   $$
   \frac{n_n}{n_p}\sim\frac17;
   $$

2. Almost all surviving neutrons end up in the most stable light nucleus, $^4\mathrm{He}$.

Scale $n:p=1:7$ up to

$$
2n+14p.
$$

One $^4\mathrm{He}$ requires

$$
2n+2p\rightarrow{}^4\mathrm{He},
$$

Thus, two neutrons and two protons form one helium nucleus, leaving 12 protons as hydrogen nuclei. Of the total mass of 16 nucleons:

- Four nucleons are in helium;
- Twelve are in hydrogen.

Therefore

$$
Y_{\rm He}=\frac{4}{16}=25\%,
$$

$$
X_{\rm H}=\frac{12}{16}=75\%.
$$

More generally, let

$$
r\equiv\frac{n_n}{n_p},
$$

and assume all neutrons enter $^4$He. The approximate helium mass fraction is

$$
\boxed{Y_p\simeq\frac{2r}{1+r}}.
$$

Substituting $r=1/7$ gives

$$
Y_p=\frac{2/7}{1+1/7}=\frac14.
$$

### 5.3 Why is $n/p$ close to $1/7$?

Early weak interactions continuously interconvert neutrons and protons, for example

$$
n+\nu_e\leftrightarrow p+e^-,
$$

$$
n+e^+\leftrightarrow p+\bar\nu_e.
$$

Thermal equilibrium gives approximately

$$
\frac{n_n}{n_p}\simeq
\exp\left(-\frac{\Delta mc^2}{kT}\right),
$$

where

$$
\Delta mc^2=(m_n-m_p)c^2\simeq1.293\,\mathrm{MeV}.
$$

Because neutrons are heavier, their fraction falls as temperature decreases. Near $T\sim0.7$–$0.8\,\mathrm{MeV}$, weak reaction rates drop below the expansion rate and $n/p$ freezes out at roughly $1/6$. Before efficient helium production begins, some free neutrons beta-decay, lowering the ratio further to about $1/7$.

### 5.4 Deuterium bottleneck

Although the reaction

$$
p+n\rightarrow D+\gamma
$$

can form deuterium, the early photon-to-baryon ratio is so high that the high-energy photon tail promptly photodissociates it. Only after further cooling does deuterium survive, allowing the reaction network to process most neutrons rapidly into $^4$He. This delay is the **deuterium bottleneck**.

Thus, 25% is not a coincidence, but is mainly set by the combined physics of:

$$
\boxed{
\text{weak freeze-out}
+\text{neutron decay}
+\text{deuterium bottleneck}
+\text{efficient }^4\mathrm{He}\text{ formation}.
}
$$

---

## 6. Matter–radiation equality, recombination, and the CMB

### 6.1 Matter-radiation equality

Since

$$
\rho_r\propto(1+z)^4,
\qquad
\rho_m\propto(1+z)^3,
$$

radiation increases faster toward higher redshift, the very early universe is radiation-dominated. As expansion proceeds, radiation density falls faster, eventually reaching

$$
\rho_m=\rho_r.
$$

This is matter–radiation equality, at a typical redshift

$$
\boxed{z_{\rm eq}\sim3400}.
$$

Equality is not recombination: the former changes which component dominates total cosmic energy density; the latter changes atomic ionization and photon mean free paths. Equality occurs earlier.

During radiation domination, dark-matter perturbation growth on subhorizon scales is suppressed. In matter domination, under linear and otherwise simple conditions, the growing mode approximately satisfies

$$
\boxed{\delta\propto a}.
$$

Equality is therefore a major turning point for structure formation.

### 6.2 Why was the universe opaque before recombination?

BBN produced nuclei, but the universe still consisted of

$$
p^++e^-+\mathrm{He}^{++}/\mathrm{He}^{+}+\gamma
$$

Free electrons continually interacted with photons through Thomson scattering:

$$
\gamma+e^-\rightarrow\gamma+e^-.
$$

Photon mean free paths were short, making the universe resemble an opaque fog.

### 6.3 Recombination and photon decoupling

When the universe cooled to about

$$
T\sim3000\,\mathrm K,
\qquad z\sim1100,
$$

electrons began binding stably to nuclei, for example

$$
p+e^-\rightarrow\mathrm H+\gamma.
$$

Free-electron abundance and Thomson scattering rates fell sharply, allowing photons to stream freely. Recombination and photon decoupling occur close together, but emphasize different concepts:

- **Recombination:** matter changes from highly ionized to mostly neutral;
- **Photon decoupling:** photons stop scattering frequently and begin approximately free propagation.

### 6.4 Why does hydrogen recombine only at $3000\,\mathrm K$ despite its $13.6\,\mathrm{eV}$ ionization energy?

The temperature corresponding to $13.6\,\mathrm{eV}$ is much higher than $3000\,\mathrm K$, but the cosmic photon-to-baryon ratio is roughly

$$
\frac{n_\gamma}{n_b}\sim10^9.
$$

Even with low average photon energy, the blackbody high-energy tail contains enough photons to reionize newly formed hydrogen. Substantial neutral hydrogen survives only after cooling far below the naive $13.6\,\mathrm{eV}/k_B$ temperature. This follows from statistical equilibrium and the enormous photon abundance.

### 6.5 What is the CMB?

Photons that streamed freely after decoupling have continuously redshifted with expansion and are now observed as the **Cosmic Microwave Background**:

$$
T_{\rm then}\sim3000\,\mathrm K
\quad\longrightarrow\quad
T_{\rm now}=2.725\,\mathrm K.
$$

The CMB is the earliest electromagnetic snapshot directly visible to us, with small anisotropies satisfying

$$
\frac{\Delta T}{T}\sim10^{-5}.
$$

Temperature fluctuations relate to matter-density perturbations, but the pointwise relation $\Delta T/T=\delta$ does not hold simply at all scales. Acoustic oscillations, gravitational potentials, and radiative transfer all affect the mapping.

### 6.6 Dark Ages

After recombination:

- Most cosmic hydrogen is neutral;
- CMB photons are freely propagating;
- The first stars have not yet formed.

This era without newly formed stellar light sources is the **Cosmic Dark Ages**. Dark-matter structure continues growing gravitationally, and ordinary gas gradually falls into potential wells, preparing for Cosmic Dawn.

---

## 7. Density contrast and structure formation

### 7.1 Density contrast $\delta$

Density contrast is defined by

$$
\boxed{\delta(\mathbf{x},t)
\equiv\frac{\rho(\mathbf{x},t)-\bar\rho(t)}{\bar\rho(t)}}.
$$

where:

- $\rho(\mathbf{x},t)$: local density at a given position;
- $\bar\rho(t)$: cosmic mean density at the same time.

Its interpretation is:

- $\delta=0$: local density equals the mean;
- $\delta>0$：overdense；
- $\delta<0$：underdense；
- Physical density cannot be negative, so $\delta\ge-1$.

For example, if

$$
\rho=1.1\bar\rho,
$$

then

$$
\delta=0.1,
$$

meaning density is 10% above the mean. If $\delta=1$, then

$$
\rho=2\bar\rho,
$$

not $\rho=\bar\rho$.

### 7.2 Linear and nonlinear evolution

Early perturbations are small:

$$
|\delta|\ll1.
$$

Different Fourier modes can then evolve independently in linear perturbation theory. Overdense regions gravitationally attract more matter, increasing $\delta$.

When

$$
\boxed{\delta\sim1}
$$

the density departure is comparable to the mean itself, the small-perturbation approximation fails and nonlinear structure formation begins. Collapse, shell crossing, virialization, and complex mergers and accretion follow.

A memorable summary, to be used with physical caution, is:

$$
\begin{aligned}
|\delta|\ll1 &: \text{linear perturbations},\\
\delta\sim1 &: \text{nonlinear evolution begins},\\
\delta\gg1 &: \text{strongly collapsed overdense structures}.
\end{aligned}
$$

Overdensity varies substantially within filaments; do not assign every filament the same mandatory $\delta$ threshold.

### 7.3 Why does dark matter build the structural framework first?

Before recombination, baryons couple tightly to photons, and radiation pressure inhibits free small-scale baryonic collapse. Cold dark matter is unaffected by this photon pressure and can establish gravitational potential wells earlier.

After recombination, baryons decouple from radiation and gas falls more readily into existing dark-matter wells:

$$
\boxed{
\text{dark matter builds the gravitational skeleton first;}
\quad
\text{baryons later form the luminous galaxy.}
}
$$

### 7.4 The cosmic web and filaments

Large-scale matter is not a uniform scattering of isolated galaxies but a three-dimensional cosmic web. Four common geometric environments are:

$$
\text{voids}\rightarrow\text{sheets}\rightarrow\text{filaments}\rightarrow\text{nodes}.
$$

- **Void:** an underdense cavity;
- **Sheet:** a sheet-like overdensity;
- **Filament:** an elongated, thread-like matter overdensity;
- **Node:** an intersection of filaments, often containing a massive halo, group, or cluster.

A filament is more than galaxies lined up. It contains:

- Dark matter supplying most of the mass;
- diffuse gas；
- Galaxies and galaxy groups;
- Matter flowing along the filament toward nodes.

A more accurate description is

$$
\boxed{\text{filament is an elongated matter overdensity in the cosmic web}.}
$$

### 7.5 Why do sheets, filaments, and nodes form?

Initial perturbations are not perfectly spherical. Gravitational collapse proceeds at different rates along different principal axes. The intuitive sequence is:

$$
\boxed{
\text{3D overdense region}
\rightarrow\text{collapse along one axis: sheet}
\rightarrow\text{second axis: filament}
\rightarrow\text{third axis: node / halo}.
}
$$

This explains why nonlinear gravity naturally produces a web instead of immediately turning all matter into isolated spheres.

Structure formation in $\Lambda$CDM is broadly hierarchical: smaller halos form first and grow through mergers and smooth accretion. Rare high-density peaks can collapse at very high redshift, so there is no unique exact redshift for the first halos.

---

## 8. Dark-matter halos: the invisible gravitational wells hosting galaxies

A dark-matter halo is not a solid shell enclosing a galaxy. It is an extended, gravitationally bound distribution, usually denser at the center and declining outward, without a sharp physical edge.

The most useful intuition is

$$
\boxed{\text{dark matter halo = the invisible gravitational potential well that hosts a galaxy}.}
$$

Gas falling into the well may undergo:

$$
\text{infall}
\rightarrow\text{compression / shocks}
\rightarrow\text{radiative cooling}
\rightarrow\text{further collapse}
\rightarrow\text{star formation}.
$$

A large halo can contain a central galaxy, satellites, subhalos, and substantial CGM. One halo does not universally mean one galaxy.

### 8.1 Virialization

A collapsed bound system does not require stationary particles; it approaches statistical dynamical equilibrium. The virial theorem is approximately

$$
\boxed{2K+U\simeq0},
$$

where $K$ is total kinetic energy and $U$ gravitational potential energy. Dark-matter particles generally follow random three-dimensional orbits. Halos are mainly supported by velocity dispersion, not ordered rotation as in a thin disk.

### 8.2 Why is halo radius convention-dependent?

Since halo density profiles extend smoothly without a definite edge, astronomers define an operational radius by a spherical-overdensity convention:

$$
\boxed{
\bar\rho(<R_\Delta)=\Delta\rho_{\rm ref}(z).
}
$$

The corresponding mass is

$$
\boxed{
M_\Delta=\frac{4\pi}{3}R_\Delta^3\Delta\rho_{\rm ref}(z).
}
$$

where $\Delta$ is the overdensity threshold and $\rho_{\rm ref}$ can be critical density or mean matter density. Both must be specified when defining halo mass.

### 8.3 $M_{\rm vir}$, $R_{\rm vir}$, and $V_{\rm vir}$

#### Virial radius $R_{\rm vir}$

This is usually the radius within which mean density reaches a specified virial overdensity:

$$
\bar\rho(<R_{\rm vir})
=\Delta_{\rm vir}(z)\rho_{\rm ref}(z).
$$

$R_{\rm vir}$ is a conventional effective scale, not where dark matter abruptly ends.

#### Virial mass $M_{\rm vir}$

$$
\boxed{
M_{\rm vir}
=\frac{4\pi}{3}R_{\rm vir}^3
\Delta_{\rm vir}(z)\rho_{\rm ref}(z).
}
$$

This is total mass within $R_{\rm vir}$, generally dominated by dark matter but potentially including baryonic mass.

#### Virial velocity $V_{\rm vir}$

$$
\boxed{
V_{\rm vir}=\sqrt{\frac{GM_{\rm vir}}{R_{\rm vir}}}.
}
$$

This is the characteristic circular or gravitational velocity scale corresponding to the halo's potential depth. It defines an approximate virial temperature:

$$
\boxed{
T_{\rm vir}\sim\frac{\mu m_pV_{\rm vir}^2}{2k_B},
}
$$

Here $\mu$ is mean molecular weight. Larger $V_{\rm vir}$ generally means a deeper potential well and hotter gas.

### 8.4 $M_{200}$ and $R_{200}$

The threshold 200 is common but not unique; the reference density must also be specified.

#### $200c$ convention

$$
\boxed{
\bar\rho(<R_{200c})=200\rho_c(z)
}
$$

$$
\boxed{
M_{200c}
=\frac{4\pi}{3}R_{200c}^3\,200\rho_c(z).
}
$$

#### $200m$ convention

$$
\boxed{
\bar\rho(<R_{200m})=200\bar\rho_m(z)
}
$$

$$
\boxed{
M_{200m}
=\frac{4\pi}{3}R_{200m}^3\,200\bar\rho_m(z).
}
$$

Since

$$
\bar\rho_m(z)=\Omega_m(z)\rho_c(z),
$$

unless $\Omega_m(z)=1$, $R_{200c}$ differs from $R_{200m}$ and $M_{200c}$ from $M_{200m}$. If a paper writes only $M_{200}$ without $c$ or $m$, check its definitions section.

In the Einstein–de Sitter spherical-collapse model, the classical virial overdensity is

$$
\Delta_{\rm vir}=18\pi^2\simeq178.
$$

Thus 200 is convenient and close to that scale, but $M_{\rm vir}$ is not exactly $M_{200c}$ or $M_{200m}$ in every cosmology and at every redshift.

The $200c$ definition gives another useful relation. From $\rho_c=3H^2/(8\pi G)$,

$$
M_{200c}=\frac{100H(z)^2}{G}R_{200c}^3,
$$

so

$$
V_{200c}=\sqrt{\frac{GM_{200c}}{R_{200c}}}
=10H(z)R_{200c}.
$$

Again, halo boundaries and their associated masses depend on reference density and redshift.

### 8.5 How do halos grow and affect galaxies?

Halo growth includes:

$$
\boxed{\text{mergers}+\text{smooth accretion}.}
$$

Matter flows along cosmic filaments toward nodes and halos. Halo mass affects:

- gas accretion；
- virial temperature；
- cooling efficiency；
- Whether feedback-accelerated gas can be retained;
- star formation efficiency；
- satellite abundance。

Small halos have shallow wells, so stellar feedback and reionization more easily remove or heat their gas. Very massive halos can heat gas so strongly that rapid cooling becomes difficult. The visible galaxy is only a small central part of the total halo mass distribution.

---

## 9. IGM, CGM, and ISM: where is the gas?

These abbreviations describe different environments and scales of baryonic gas, not three fundamentally different substances.

| Name | Full term | Typical location | Main role |
|---|---|---|---|
| ISM | interstellar medium | Within galaxies, between stars | Molecular clouds, atomic and ionized gas, and dust; directly forms stars and receives stellar feedback |
| CGM | circumgalactic medium | Outside the galaxy but within its halo, extending roughly to the virial radius | Connects galaxy and cosmic web; stores, heats, cools, and recycles inflowing and outflowing gas |
| IGM | intergalactic medium | Large-scale space between galaxies and halos | A major reservoir of ordinary matter, tracing the cosmic web and affected by reionization and galactic outflows |

The conceptual diagram is

$$
\boxed{
\text{cosmic web / IGM}
\leftrightarrow
\text{halo / CGM}
\leftrightarrow
\text{galaxy / ISM}
\leftrightarrow
\text{stars}.
}
$$

Boundaries are not perfectly sharp. In particular, operational CGM–IGM distinctions depend on halo definitions and observing methods.

The gas cycle includes:

1. IGM gas accreting along filaments into halos;
2. Shock heating, mixing, or cooling after entering the CGM;
3. Some gas reaching the ISM and forming stars;
4. Stellar and AGN feedback returning energy, momentum, and metals to the ISM, CGM, and even IGM;
5. Some outflowing gas subsequently recycling into the galaxy.

Galaxy formation is thus an open baryon cycle, not a one-off process of locking gas inside a galaxy.

---

## 10. Cosmic Dawn and Population III

### 10.1 What is Cosmic Dawn?

**Cosmic Dawn** is the appearance of the first luminous objects after the Dark Ages. The clearest sequence is

$$
\boxed{
\text{CMB}
\rightarrow\text{Dark Ages}
\rightarrow\text{Cosmic Dawn}
\rightarrow\text{reionization}.
}
$$

Cosmic Dawn emphasizes

$$
\boxed{\text{first luminous objects appear},}
$$

whereas reionization emphasizes

$$
\boxed{\text{the neutral IGM becomes ionized}.}
$$

The two overlap but are not synonymous. During Cosmic Dawn:

- The first stars form;
- The earliest galaxies begin assembling;
- The first black-hole seeds may form;
- UV and X-ray radiation fields emerge;
- Local ionized bubbles appear;
- Stars and supernovae produce and disperse the first heavy elements.

### 10.2 What are Population III stars?

Population III denotes the first generation of stars formed from nearly primordial, almost metal-free gas:

$$
\boxed{\text{Pop III stars = first, nearly metal-free stellar populations}.}
$$

In astronomy, metals are all elements heavier than helium. BBN supplies H, He, and trace Li, so Pop III parent gas lacks the C, O, CO, and dust cooling available in modern molecular clouds.

One key primordial-gas coolant is $\mathrm H_2$. Gas must radiate heat generated by gravitational collapse; otherwise rising pressure prevents further contraction.

The Jeans-mass scaling is

$$
M_J\propto T^{3/2}\rho^{-1/2}.
$$

At fixed density, higher temperature means a larger characteristic collapsing mass. Primordial gas generally cools less efficiently than metal-rich gas, so Pop III stars are often expected to have higher characteristic masses. However, modern simulations produce fragmentation and multiple systems: it is not established that all Pop III stars share one extremely large mass.

---

## 11. Feedback: how does star formation regulate galaxies?

Feedback is the injection of energy, momentum, radiation, or newly synthesized elements into surrounding gas by existing stars or accreting black holes, altering subsequent cooling, collapse, and star formation.

### 11.1 Mechanical feedback

Sources include:

- stellar winds；
- supernova explosions；
- radiation-driven winds；
- AGN winds and jets.

They inject energy and momentum, potentially causing:

- turbulent stirring；
- gas heating；
- Superbubbles and galactic winds;
- Temporary suppression of star formation;
- Transport of gas and metals into the CGM and IGM.

### 11.2 Chemical feedback

Stellar nucleosynthesis and supernovae produce C, O, Fe, and other heavy elements, returning them to the surroundings and changing metallicity from nearly zero to

$$
Z>0.
$$

Metal lines and dust generally enhance low-temperature cooling, affecting fragmentation and subsequent stellar masses. The first stars therefore drive

$$
\boxed{\text{Pop III}\rightarrow\text{metal-enriched Pop II}.}
$$

### 11.3 Radiative feedback

Stars and black holes produce UV, ionizing photons, Lyman–Werner photons, and X-rays, which can:

- photoionize H / He；
- photoheat gas；
- Change gas cooling and collapse;
- Dissociate $\mathrm H_2$ and suppress cooling in some primordial clouds;
- Create and expand H II regions;
- Drive cosmic reionization.

Feedback is not always suppressive. Gas compression, extra free electrons aiding molecular reactions, or enhanced later cooling may indirectly promote local star formation. The net effect depends on halo mass, gas density, metallicity, radiation spectrum, and timescale.

---

## 12. Reionization: why was the universe ionized again?

After recombination, the IGM is mainly neutral hydrogen. The first stars, galaxies, and accreting black holes emit photons above the hydrogen ionization threshold $13.6\,\mathrm{eV}$:

$$
\mathrm{H\,I}+\gamma\rightarrow\mathrm{H\,II}+e^-.
$$

An ionized bubble first forms around each source. As sources and cumulative photon numbers increase, bubbles grow and overlap, eventually reionizing most intergalactic hydrogen:

$$
\boxed{
\text{first sources}
\rightarrow\text{ionized bubbles}
\rightarrow\text{bubble growth and overlap}
\rightarrow\text{ionized IGM}.
}
$$

It is re-ionization because the pre-recombination universe was already an ionized plasma: it became neutral, then the first light sources ionized it again.

Hydrogen reionization is generally considered largely complete near $z\sim5$–$6$, but it is extended and spatially inhomogeneous. Helium follows a different history: He I ionization can partly overlap hydrogen reionization, while turning He II into He III requires harder photons, is commonly associated with quasars, and finishes later, near $z\sim3$.

Reionization also affects galaxy formation. Photoheating raises IGM temperature and the Jeans or filtering scale, making it harder for small shallow-well halos to accrete and retain gas. This is large-scale radiative feedback from luminous sources to later galaxy formation.

---

## 13. Cosmic star formation history

Cosmic star formation history is often expressed through cosmic star-formation-rate density (SFRD):

$$
\rho_{\rm SFR}
\equiv
\frac{\text{new stellar mass formed per unit time}}
{\text{unit comoving volume}}.
$$

Its typical evolution is:

1. At Cosmic Dawn, the first stars and galaxies appear and SFRD rises from a very low level;
2. Increasing halo abundance, gas accretion, and galaxy assembly sustain the rise;
3. A peak occurs around $z\sim2$, often called **cosmic noon**;
4. SFRD broadly declines from $z\sim2$ to the present.

The late decline is not due to a single mechanism; contributing factors may include:

- A declining cosmic mean gas-accretion rate;
- gas consumption；
- Stellar and AGN feedback;
- virial shock heating；
- Slower cooling in massive systems;
- environmental effects。

An SFRD peak at $z\sim2$ is a cosmic average, not a statement that every galaxy peaks in star formation simultaneously.

### 13.1 Why is comoving volume important?

Using physical volume would make the number density of a fixed population change with $a^{-3}$ purely through expansion. Comoving volume removes Hubble-flow dilution, allowing a more direct comparison of population formation and evolution across redshifts.

---

## 14. Connecting the concepts into one causal chain

### 14.1 From inflation to the seeds of structure

$$
\text{quantum fluctuations}
\xrightarrow{\rm inflation}
\text{large-scale primordial perturbations}
\rightarrow
\frac{\Delta T}{T}\sim10^{-5}\text{ in the CMB}.
$$

### 14.2 From background expansion to structure growth

$$
\rho_r\propto a^{-4},\qquad
\rho_m\propto a^{-3}
$$

$$
\Downarrow
$$

$$
\text{radiation domination}
\rightarrow z_{\rm eq}\sim3400
\rightarrow\text{matter domination}
\rightarrow\delta\text{ grows}.
$$

### 14.3 From linear perturbations to the cosmic web

$$
|\delta|\ll1
\rightarrow\delta\sim1
\rightarrow\text{nonlinear collapse}
\rightarrow\text{sheets + filaments + halos}.
$$

### 14.4 From halos to luminous galaxies

$$
\text{DM halo}
\rightarrow\text{gas infall}
\rightarrow\text{cooling}
\rightarrow\text{stars}
\rightarrow\text{feedback}
\rightarrow\text{regulated galaxy growth}.
$$

### 14.5 From the first stars to reionization

$$
\text{Pop III / first galaxies}
\rightarrow\text{UV photons + metals + supernovae}
\rightarrow\text{ionized bubbles and enrichment}
\rightarrow\text{reionized IGM}.
$$

This chain captures Lecture 1's central message:

$$
\boxed{
\text{Cosmic background evolution sets when structure can grow;}
\quad
\text{dark matter provides the gravitational framework;}
\quad
\text{baryonic physics determines how luminous galaxies form.}
}
$$

---

## 15. Frequently confused concepts

### 15.1 BBN vs recombination

- BBN: forms light-element **nuclei** in the first few minutes;
- Recombination: electrons and nuclei form neutral **atoms** roughly 380,000 years later.

### 15.2 Recombination vs reionization

- Recombination: the early plasma becomes mostly neutral;
- Reionization: the first light sources ionize the neutral IGM again.

### 15.3 Matter-radiation equality vs recombination

- Equality: $\rho_m=\rho_r$, around $z\sim3400$;
- Recombination: neutral atoms form, around $z\sim1100$.

### 15.4 Photon energy vs radiation energy density

- Individual photon: $E_\gamma\propto a^{-1}$;
- photon number density：$n_\gamma\propto a^{-3}$；
- radiation energy density：$\rho_r\propto a^{-4}$。

### 15.5 Critical density vs matter density

- $\rho_c(z)=3H(z)^2/(8\pi G)$: reference density defined by the expansion rate;
- $\rho_m(z)=\Omega_{m,0}\rho_{c,0}(1+z)^3$: actual matter density.

### 15.6 Comoving vs physical scale

- Comoving: removes overall cosmic expansion;
- Physical: the actual proper scale at that epoch;
- $R_{\rm phys}=R_{\rm com}/(1+z)$。

### 15.7 Hubble radius vs particle horizon

- Hubble radius：$c/H$；
- comoving Hubble radius：$c/(aH)$；
- Particle horizon: the maximum accumulated distance light could have traveled since the initial time;
- These three concepts are related but not identical.

### 15.8 Cosmic Dawn vs reionization

- Cosmic Dawn: the first luminous sources appear;
- Reionization: those sources change the neutral IGM's ionization state;
- They overlap but are not identical.

### 15.9 Halo boundaries are not hard physical edges

$R_{\rm vir}$, $R_{200c}$, and $R_{200m}$ are operational scales defined by mean interior overdensity. Compare definitions before comparing halo masses.

### 15.10 Meaning of $\delta\sim1$

$\delta=1$ means $\rho=2\bar\rho$. It marks entry into the nonlinear regime, not attainment of the 200-fold density used in some halo definitions.

---

## 16. Formula reference

### Expansion, redshift, and temperature

$$
1+z=\frac{a_0}{a},
\qquad a_0=1,
\qquad a=\frac{1}{1+z}
$$

$$
\lambda\propto a,
\qquad
E_\gamma\propto a^{-1},
\qquad
T_\gamma(z)=T_{\rm CMB,0}(1+z)
$$

$$
\rho_r\propto a^{-4},
\qquad
\rho_m\propto a^{-3},
\qquad
\rho_\Lambda=\mathrm{constant}
$$

### Comoving and physical quantities

$$
D_{\rm phys}=a\chi,
\qquad
R_{\rm phys}(z)=\frac{R_{\rm com}}{1+z}
$$

### Hubble expansion and critical density

$$
H=\frac{\dot a}{a}
$$

$$
H(z)=H_0\sqrt{
\Omega_{r,0}(1+z)^4+
\Omega_{m,0}(1+z)^3+
\Omega_{k,0}(1+z)^2+
\Omega_{\Lambda,0}}
$$

$$
\rho_c(z)=\frac{3H(z)^2}{8\pi G}
$$

$$
\rho_m(z)=\Omega_{m,0}\rho_{c,0}(1+z)^3
$$

### Inflation and the Hubble radius

$$
R_H=\frac{c}{H},
\qquad
r_H=\frac{c}{aH}
$$

$$
\ddot a>0
\quad\Longleftrightarrow\quad
\frac{d}{dt}(aH)^{-1}<0
$$

$$
\Omega-1=\frac{kc^2}{a^2H^2}
$$

### BBN helium fraction

$$
r=\frac{n_n}{n_p},
\qquad
Y_p\simeq\frac{2r}{1+r}
$$

### Density perturbations

$$
\delta=\frac{\rho-\bar\rho}{\bar\rho}
$$

### Halo definitions

$$
\bar\rho(<R_\Delta)=\Delta\rho_{\rm ref}(z)
$$

$$
M_\Delta=\frac{4\pi}{3}R_\Delta^3\Delta\rho_{\rm ref}(z)
$$

$$
V_{\rm vir}=\sqrt{\frac{GM_{\rm vir}}{R_{\rm vir}}}
$$

$$
T_{\rm vir}\sim\frac{\mu m_pV_{\rm vir}^2}{2k_B}
$$

---

## 17. Terminology glossary

| English | Explanation (translated from Chinese) |
|---|---|
| scale factor | Scale factor describing the overall cosmic scale |
| redshift | Redshift: expansion lengthens light's wavelength |
| comoving scale | Scale fixed in the coordinate grid expanding with the universe |
| physical / proper scale | Actual physical scale at a given epoch |
| critical density | Critical density: a reference density defined by $H(z)$ at that epoch |
| inflation | Inflation: very early accelerated expansion |
| horizon problem | Horizon problem |
| flatness problem | Flatness problem |
| monopole problem | Monopole problem |
| Hubble radius | Hubble radius $c/H$ |
| Big Bang Nucleosynthesis | Big Bang nucleosynthesis |
| deuterium bottleneck | Deuterium bottleneck |
| matter-radiation equality | Epoch of equal matter and radiation densities |
| recombination | Electrons bind to nuclei and neutral atoms become abundant |
| photon decoupling | Photon decoupling: light begins free propagation |
| Cosmic Microwave Background | Cosmic Microwave Background |
| density contrast | Density contrast $\delta$ |
| nonlinear structure formation | Nonlinear structure formation |
| cosmic web | Cosmic web |
| filament | Thread-like overdensity in the cosmic web |
| dark matter halo | Dark-matter halo: the potential well hosting a galaxy |
| virialization | Virialization: approaching statistical dynamical equilibrium |
| IGM | Intergalactic medium |
| CGM | Circumgalactic medium |
| ISM | Interstellar medium within galaxies |
| Dark Ages | Cosmic Dark Ages |
| Cosmic Dawn | Cosmic Dawn: the first luminous objects appear |
| Population III | Nearly metal-free first-generation stars |
| feedback | Energy, momentum, radiation, and chemical feedback into surrounding gas |
| reionization | Reionization |
| cosmic star-formation-rate density | Cosmic star-formation-rate density, usually per comoving volume |

---

## 18. One-page summary

1. Redshift and scale factor satisfy $1+z=a_0/a$; earlier epochs have larger $z$ and smaller $a$.
2. Individual photon energy scales as $E_\gamma\propto a^{-1}$, radiation density as $\rho_r\propto a^{-4}$, and matter density as $\rho_m\propto a^{-3}$.
3. Inflation is characterized by $\ddot a>0$ and a shrinking $(aH)^{-1}$. It alleviates the horizon, flatness, and monopole problems and supplies structure seeds.
4. BBN forms light nuclei in the first few minutes. With $n/p\sim1/7$ and nearly all neutrons entering $^4$He, it gives approximately 75% H and 25% He by mass.
5. Matter overtakes radiation at $z_{\rm eq}\sim3400$; recombination and decoupling at $z\sim1100$ produce the CMB seen today.
6. Density contrast is $\delta=(\rho-\bar\rho)/\bar\rho$; $\delta\sim1$ marks the onset of nonlinear evolution.
7. Anisotropic collapse creates sheets, filaments, and nodes; dark-matter halos provide the gravitational framework for galaxy formation.
8. Halos have no hard edges. The meanings of $M_{\rm vir}$, $M_{200c}$, and $M_{200m}$ depend on overdensity and reference-density conventions.
9. IGM, CGM, and ISM are connected through inflow, cooling, star formation, outflow, and recycling in the baryon cycle.
10. Cosmic Dawn is when the first stars and galaxies light up the universe. Pop III radiation, supernovae, and metal enrichment initiate feedback and help drive reionization.
11. Cosmic SFRD peaks globally near $z\sim2$. Comoving volume removes geometric dilution from cosmic expansion.
12. The exercise's flat $\Lambda$CDM approximation gives $H(10)=20H_0$ and $\rho_c(10)=400\rho_{c,0}$.

The overall picture to retain is:

$$
\boxed{
\text{expanding background}
\rightarrow
\text{primordial perturbations}
\rightarrow
\text{dark-matter cosmic web and halos}
\rightarrow
\text{gas cooling and stars}
\rightarrow
\text{feedback, reionization, and galaxy evolution}.
}
$$
