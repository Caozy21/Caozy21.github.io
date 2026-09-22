---
title: >-
  AST 2040 Integrated Notes for Lectures 1–2: From Cosmic Structure Formation to
  Galaxy Morphology
description: >-
  Integrated AST2040 notes connecting cosmic structure formation, dark-matter
  halos, and galaxy formation with galaxy morphology, environmental effects, and
  multiwavelength observations.
date: '2026-09-21'
tags:
  - AST2040
  - Lectures 1–2
  - Galaxy formation
  - Galaxy morphology
order: 2
sourceHash: 8c7a493c9473260ec47e625ef5edee7f54469b1e3ae7c74314b76ff6cadc9584
translation: AI-assisted English translation
---

# AST 2040 Integrated Notes for Lectures 1–2: From Cosmic Structure Formation to Galaxy Morphology

> **Course:** Extragalactic Astronomy  
> **Coverage:** Lecture 1 - Introduction to basics of cosmology and galaxy formation; Lecture 2 - Galaxy morphology  
> **Goal:** Build a continuous physical narrative from primordial perturbations, dark-matter halos, and galaxy formation to galaxy morphology, environmental effects, and multiwavelength observations.

## 0. Reading Guide

These notes integrate the two lecture handouts with supplementary discussions from the learning process.

- Material labeled “lecture thread” corresponds directly to the lecture notes.
- Material labeled “physical supplement” explains derivations omitted from the notes or concepts that are easily confused.
- Morphological classification compresses observed appearance; it should not be treated as a unique physical evolutionary path.
- The Sombrero Galaxy heading in Lecture 2 labels it M101; the correct designation is **M104**, whereas M101 is the Pinwheel Galaxy.
- Lecture 2 does not formally cover the Sérsic profile, CAS, or Gini-$M_{20}$. Unless the instructor adds them elsewhere, they are not treated as core topics here.

---

## 1. The Unifying Thread of the Two Lectures

The two lectures are really answering one continuous question:

$$
\boxed{
\begin{aligned}
&\text{primordial universe and inflation}\\
&\rightarrow \text{primordial density perturbations}\\
&\rightarrow \text{growth of dark-matter perturbations}\\
&\rightarrow \text{dark-matter halos and the cosmic web}\\
&\rightarrow \text{gas infall, cooling, and star formation}\\
&\rightarrow \text{galaxy formation and hierarchical growth}\\
&\rightarrow \text{internal evolution, mergers, and environmental transformation}\\
&\rightarrow \text{different morphologies, colors, and star-formation states}\\
&\rightarrow \text{inferring physical history from photometry, spectra, and multiwavelength images}.
\end{aligned}}
$$

This can be compressed into three levels:

1. **Cosmological background:** How the universe expands and where the first seeds of structure came from.
2. **Structure formation:** How gravity turns perturbations into dark-matter halos and galaxies.
3. **Observational inference:** How galaxy morphology and radiation record internal physics and environmental history.

---

# Part I: From the Early Universe to Galaxy Formation

## 2. Cosmic Timeline

| Stage | Typical time or redshift | Main physical process |
|---|---:|---|
| Big Bang | Extremely early universe | Hot, dense, expanding universe |
| Inflation | Commonly placed around $10^{-36}$-$10^{-32}\,\mathrm{s}$ | Rapid accelerated expansion; generation and stretching of primordial perturbations |
| BBN | Approximately $1\,\mathrm{s}$-$20\,\mathrm{min}$ | Formation of light-element nuclei such as H, He, and D |
| Matter-radiation equality | $z\sim3400$ | Matter begins to dominate the background density, making structure growth more effective |
| Recombination / CMB | $z\sim1100$, about 380,000 years | Neutral atoms form; photons decouple and leave the CMB |
| Cosmic Dark Ages | After the CMB and before the first stars | The universe consists mainly of neutral gas and dark matter, with no stellar light sources yet |
| Cosmic Dawn | Beginning after roughly 100 million years | The first stars, galaxies, and black-hole seeds appear |
| Hydrogen reionization | From the first few hundred million years to $z\sim5$-$6$ | Early light sources gradually ionize neutral intergalactic hydrogen |
| Cosmic noon | $z\sim2$ | The cosmic star-formation-rate density reaches its peak |
| Low-redshift universe | $z\lesssim1$ | Star formation declines overall, while dark energy dominates late-time expansion |

### 2.1 Three Classic Lines of Evidence for the Hot Big Bang

1. Galaxy recession velocities show that the universe is expanding globally.
2. The CMB has an almost isotropic blackbody spectrum.
3. Primordial light-element abundances agree with the predictions of Big Bang nucleosynthesis.

### 2.2 Why Is Inflation Relevant to Galaxy Formation?

Inflation does more than explain spatial flatness and the large-scale uniformity of the CMB. It also stretches microscopic quantum fluctuations to cosmic scales, providing the primordial seeds for later structure formation.

Therefore:

$$
\text{inflation generates seeds}
\quad\Longrightarrow\quad
\text{gravity amplifies them during subsequent cosmic evolution}.
$$

---

## 3. The Expanding Background: $a$, $z$, $H$, and the Critical Density

### 3.1 Scale Factor and Redshift

Normalize today's scale factor to $a_0=1$:

$$
\boxed{a=\frac{1}{1+z}}.
$$

- A large $z$ usually indicates an earlier universe.
- $z$ is not itself time; converting redshift to cosmic age requires a specified cosmological model.

### 3.2 The Friedmann Equation

$$
H^2\equiv\left(\frac{\dot a}{a}\right)^2
=\frac{8\pi G}{3}\rho-\frac{k}{a^2}+\frac{\Lambda}{3}.
$$

It describes expansion of the mean cosmological background, not motion within an individual galaxy.

### 3.3 Critical density

The critical density is defined as

$$
\boxed{\rho_{\rm crit}(z)=\frac{3H^2(z)}{8\pi G}}.
$$

Define the density parameter

$$
\Omega_i(z)=\frac{\rho_i(z)}{\rho_{\rm crit}(z)}.
$$

It is important to distinguish:

- $\rho_{\rm crit}$ is a reference density defined by the expansion rate;
- $\rho_m$ is the actual matter density;
- Whether a local region collapses cannot be reduced to “$\rho>\rho_{\rm crit}$ guarantees a dark-matter halo.” One must study its overdensity relative to the background and its dynamical evolution.

### 3.4 Numerical Example from Class

For a flat universe with radiation neglected:

$$
H(z)=H_0\sqrt{\Omega_{m,0}(1+z)^3+\Omega_{\Lambda,0}}.
$$

Take

$$
H_0=70\,\mathrm{km\,s^{-1}\,Mpc^{-1}},\qquad
\Omega_{m,0}=0.3,\qquad
\Omega_{\Lambda,0}=0.7,
$$

Then

$$
\rho_{\rm crit,0}\approx9.2\times10^{-30}\,\mathrm{g\,cm^{-3}}.
$$

At $z=10$:

$$
H(10)\approx20H_0,
$$

Therefore

$$
\rho_{\rm crit}(10)\approx400\rho_{\rm crit,0}
\approx3.7\times10^{-27}\,\mathrm{g\,cm^{-3}}.
$$

Physical meaning: the early universe was denser and had shorter characteristic gravitational timescales, so structure could evolve rapidly.

---

## 4. Density Contrast and Structure Growth

Define the density contrast

$$
\boxed{
\delta(\mathbf x,t)=
\frac{\rho(\mathbf x,t)-\bar\rho(t)}{\bar\rho(t)}
}.
$$

- $|\delta|\ll1$: the linear regime, in which different Fourier modes evolve approximately independently.
- $\delta\sim1$: entry into the nonlinear regime.
- $\delta\gg1$: a strongly overdense, gravitationally bound structure has formed.

During matter domination, linear growth is approximately

$$
\delta\propto a=\frac{1}{1+z}.
$$

Late-time accelerated expansion driven by dark energy suppresses further structure growth.

### 4.1 Why Does Cosmic Expansion Not Pull Everything Apart?

Expansion describes the large-scale mean background. The self-gravity of a local overdensity can overcome background expansion, leave the Hubble flow, and form a bound structure.

---

## 5. Power Spectra: Four Quantities That Must Be Distinguished

### 5.1 Fourier mode

Write the density field as

$$
\delta(\mathbf x)
=\int\frac{d^3k}{(2\pi)^3}\,
\delta_{\mathbf k}e^{i\mathbf k\cdot\mathbf x}.
$$

Wavenumber and scale are approximately related by

$$
\boxed{k\sim\frac{2\pi}{R}}.
$$

- Small $k$ corresponds to large scales;
- large $k$ corresponds to small scales.

### 5.2 The Ordinary Density Power Spectrum $P_\delta(k)$

Its statistical definition is

$$
\left\langle
\delta_{\mathbf k}\delta_{\mathbf k'}^*
\right\rangle
=(2\pi)^3\delta_D(\mathbf k-\mathbf k')P_\delta(k).
$$

$P_\delta(k)$ is the mean squared amplitude of a given Fourier mode; it is not the total power across an entire interval of $k$.

### 5.3 Number of Modes per Logarithmic Interval

In three-dimensional $k$-space, modes from $k$ to $k+dk$ occupy a spherical shell:

$$
dN\propto4\pi k^2dk.
$$

Because $dk=k\,d\ln k$:

$$
\boxed{
\frac{dN}{d\ln k}\propto k^3
}.
$$

This only says that logarithmic intervals at large $k$ contain more Fourier modes; it does not directly imply that “there must be more small galaxies.”

### 5.4 Dimensionless Density Power $\Delta_\delta^2(k)$

The density variance satisfies

$$
\langle\delta^2\rangle
=\int\frac{k^3P_\delta(k)}{2\pi^2}\,d\ln k.
$$

This motivates the definition

$$
\boxed{
\Delta_\delta^2(k)
=\frac{k^3P_\delta(k)}{2\pi^2}
}.
$$

It gives the contribution of each $d\ln k$ interval to the density variance.

| Quantity | Expression | Meaning |
|---|---|---|
| Fourier amplitude | $\delta_{\mathbf k}$ | Perturbation amplitude for one wavevector |
| Ordinary power spectrum | $P_\delta(k)$ | Mean power per mode |
| Number of modes | $dN/d\ln k\propto k^3$ | Number of modes in each logarithmic interval |
| Dimensionless power | $\Delta_\delta^2=k^3P_\delta/(2\pi^2)$ | Total variance contributed by each logarithmic interval |

### 5.5 Why Can “Power Independent of $k$” Be Ambiguous?

If the ordinary power spectrum is constant:

$$
P_\delta(k)=\mathrm{constant},
$$

then

$$
\Delta_\delta^2(k)\propto k^3.
$$

If each logarithmic interval contributes the same variance:

$$
\Delta_\delta^2(k)=\mathrm{constant},
$$

then one must have

$$
P_\delta(k)\propto k^{-3}.
$$

The first question must therefore be whether “power” means $P(k)$ or the dimensionless quantity $\Delta^2(k)$.

### 5.6 Harrison-Zel'dovich and $n=1$

The lecture notes write

$$
P_\delta(k)\propto k^n,\qquad n=1.
$$

Modern treatments usually begin with the primordial curvature perturbation:

$$
\Delta_{\mathcal R}^2(k)
=A_s\left(\frac{k}{k_*}\right)^{n_s-1}.
$$

When $n_s=1$:

$$
\Delta_{\mathcal R}^2(k)=\mathrm{constant},
$$

This is the most direct meaning of a scale-invariant primordial curvature spectrum.

On large scales, one roughly has

$$
\delta_{\mathbf k}\propto k^2\mathcal R_{\mathbf k},
$$

and therefore

$$
P_\delta(k)
\propto k^4P_{\mathcal R}(k)
\propto k^4k^{-3}
\propto k.
$$

Thus the following two statements are not contradictory:

$$
\Delta_{\mathcal R}^2(k)=\mathrm{constant}
$$

describes the primordial curvature power, whereas

$$
P_\delta(k)\propto k
$$

describes the corresponding large-scale density power spectrum.

### 5.7 Are Low-Mass Structures Actually More Numerous?

The abundance of real structures depends on the variance at smoothing scale $R$:

$$
\sigma_R^2
=\int\Delta_m^2(k)|W(kR)|^2\,d\ln k,
$$

and on whether perturbations cross the threshold for nonlinear collapse. It also depends on the transfer function, dark-matter free streaming, Jeans pressure, available growth time, and mergers.

In Cold Dark Matter, small halos generally form first and later merge into larger halos. This does not follow merely from the claim that “more small regions fit into the same volume.”

---

## 6. Jeans Instability: Can Pressure Prevent Collapse?

The Jeans length answers the question:

> Will a gaseous overdensity be crushed by gravity, or will internal pressure restore it?

### 6.1 The Timescale Picture

The time for a sound wave to cross scale $R$ is

$$
t_{\rm sound}\sim\frac{R}{c_s}.
$$

The gravitational collapse time is

$$
t_{\rm grav}\sim\frac{1}{\sqrt{G\rho}}.
$$

- $t_{\rm sound}<t_{\rm grav}$: pressure has time to respond and tends to support the gas.
- $t_{\rm sound}>t_{\rm grav}$: pressure cannot respond in time, so gravity drives collapse.

A timescale estimate gives only

$$
R\sim\frac{c_s}{\sqrt{G\rho}},
$$

and cannot determine the exact factor of $\sqrt\pi$.

### 6.2 Linear-Perturbation Derivation

Linearizing the continuity, Euler, and Poisson equations gives

$$
\ddot\delta-c_s^2\nabla^2\delta-4\pi G\rho_0\delta=0.
$$

Let

$$
\delta\propto e^{i(\mathbf k\cdot\mathbf x-\omega t)},
$$

The resulting dispersion relation is

$$
\boxed{
\omega^2=c_s^2k^2-4\pi G\rho_0
}.
$$

- $\omega^2>0$: pressure dominates and the perturbation oscillates.
- $\omega^2<0$: gravity dominates and the perturbation grows exponentially.

The marginal state $\omega^2=0$ gives

$$
k_J=\frac{\sqrt{4\pi G\rho_0}}{c_s}.
$$

Using $\lambda=2\pi/k$:

$$
\boxed{
\lambda_J
=\frac{2\pi}{k_J}
=c_s\sqrt{\frac{\pi}{G\rho_0}}
}.
$$

The factor $\pi$ here comes from two places:

1. the $4\pi$ in Poisson's equation;
2. the $2\pi$ in the relation between wavenumber and wavelength.

Finally

$$
\frac{2\pi}{\sqrt{4\pi}}=\sqrt\pi.
$$

### 6.3 Physical Dependence of the Jeans Length

$$
\lambda_J\propto\frac{c_s}{\sqrt\rho}.
$$

Therefore:

$$
T\uparrow\Rightarrow c_s\uparrow\Rightarrow\lambda_J\uparrow
$$

means that hot gas has greater difficulty forming small-scale structure, whereas

$$
\rho\uparrow\Rightarrow\lambda_J\downarrow
$$

means that denser gas can fragment more readily.

The Jeans mass is approximately

$$
M_J\sim\rho\lambda_J^3
\propto\frac{c_s^3}{G^{3/2}\rho^{1/2}}.
$$

Gas cooling lowers $c_s$, $\lambda_J$, and $M_J$. Cooling is therefore essential for forming dense gas clouds and stars.

---

## 7. Why Is Dark Matter Needed?

### 7.1 Before Recombination, Baryons Feel Photon Pressure

Before recombination, electrons, protons, and photons form a tightly coupled photon-baryon fluid. Photon pressure prevents baryons from collapsing freely on small scales.

Nonbaryonic cold dark matter is not strongly coupled to photons in this way, so it can grow earlier and establish gravitational potential wells. After photon decoupling, ordinary gas falls into those wells.

The correct sequence is:

$$
\boxed{
\text{dark matter first builds the gravitational skeleton}
\rightarrow
\text{gas falls in}
\rightarrow
\text{cooling, fragmentation, and star formation}
}.
$$

### 7.2 Hot DM and Cold DM

- **Hot Dark Matter:** It remains relativistic at early times, and free streaming erases small-scale perturbations, favoring top-down formation.
- **Cold Dark Matter:** It is already nonrelativistic at early times, preserving small-scale perturbations and producing bottom-up, or hierarchical, formation.

### 7.3 Main Observational Evidence for Dark Matter

#### Galaxy Rotation Curves

$$
v^2(r)=\frac{GM(<r)}{r}.
$$

If the enclosed mass stopped increasing at large radius, one would expect $v\propto r^{-1/2}$. Observed rotation curves are usually approximately flat, however, so

$$
M(<r)\propto r,
$$

showing that substantial unseen mass exists beyond the visible disk.

#### Galaxy-Cluster Dynamics

The velocities of galaxies in the Coma Cluster require far more gravitating mass than is present in luminous matter.

#### Bullet Cluster

The X-ray-emitting hot gas is spatially separated from the main mass distribution reconstructed by gravitational lensing, showing that most of the gravitating mass does not follow the collisional gas.

---

## 8. From Dark-Matter Halos to Luminous Galaxies

The basic chain of hierarchical galaxy formation is:

1. Small-scale dark-matter perturbations first collapse into small halos.
2. Dark-matter halos grow through continuous accretion and mergers.
3. Baryonic gas falls into gravitational wells and is compressed and shock heated.
4. The gas cools radiatively.
5. Once the gas satisfies the criterion for gravitational instability, it continues to collapse and fragment.
6. Stars, stellar systems, and visible galaxies form.
7. Feedback from stars and black holes then heats or removes gas, regulating subsequent star formation.

One must distinguish:

- **halo assembly:** how dark-matter structure grows;
- **galaxy formation:** how gas cools and is converted into stars;
- **galaxy evolution:** how mergers, feedback, metal enrichment, and environment continue to change a galaxy.

---

## 9. How Do We Infer Galaxy Properties from Light?

Dark matter determines the main potential well of a galaxy, but the light we directly receive comes primarily from stars, gas, and dust.

### 9.1 Color

- Many young, massive stars produce strong UV and blue light.
- When old stars dominate, the integrated color is redder.
- Dust preferentially absorbs short-wavelength light and can also redden a galaxy.
- High metallicity changes stellar temperatures and spectra and can also make the integrated color redder.

Thus “red” does not uniquely mean “old.”

### 9.2 Spectra and SED Fitting

Spectra and multi-band photometry can constrain:

- redshift;
- stellar age;
- metallicity;
- dust extinction;
- star-formation rate;
- gas ionization;
- stellar/gas kinematics.

Different physical models can nevertheless produce similar SEDs. For example, strong nebular emission lines can boost broadband flux and mimic a Balmer break, reducing an inferred age from hundreds of Myr to tens of Myr.

### 9.3 Lyman-break selection

$$
\lambda_{\rm obs}=(1+z)\lambda_{\rm rest}.
$$

Neutral hydrogen strongly suppresses flux blueward of the Lyman limit or Ly$\alpha$. At increasing redshift, the absorption feature moves successively into redder filters, producing dropout selection.

---

# Part II: Galaxy Morphology and Physical Evolution

## 10. From the Great Debate to the Hubble Sequence

In the 1920 Great Debate:

- Shapley argued that spiral nebulae lay within the Milky Way;
- Curtis argued that they were independent stellar systems.

Hubble later used the Cepheid period-luminosity relation to measure the distance to Andromeda, confirming that it lies outside the Milky Way.

The importance of this history is that, once astronomers recognized a large population of independent galaxies, they first needed a reproducible classification language before studying the physics behind the classes.

---

## 11. Hubble sequence

### 11.1 Elliptical: E0-E7

Typical properties:

- A smooth surface-brightness distribution, without spiral arms or prominent dust lanes;
- usually dominated by old, red stars;
- little cold gas and weak star formation;
- supported mainly by random motion, or velocity dispersion;
- giant elliptical galaxies are common at the centers of galaxy clusters.

The traditional projected classification is approximately

$$
n=10\left(1-\frac ba\right),
$$

where $a$ and $b$ are the projected major and minor axes. E0 is nearly circular, while E7 is highly flattened.

This describes only the two-dimensional projection and does not uniquely determine the true three-dimensional shape.

### 11.2 Spiral: Sa-Sc

Shared structures include a thin rotating disk, cold gas, dust, spiral arms, and a central bulge.

| Property | Sa | Sb | Sc |
|---|---|---|---|
| Bulge | Large | Intermediate | Small |
| Spiral arms | Tightly wound | Intermediate | Open |
| Star-forming clumps | Few; relatively smooth | Intermediate | Prominent |
| Gas and star formation | Relatively little | Intermediate | Relatively abundant |

Spiral arms are dynamical patterns, not permanently fixed groups of stars.

### 11.3 Barred spiral: SBa-SBc

A bar is a rotating pattern formed by stellar orbits, not a rigid rod. It can redistribute angular momentum and transport gas toward the center, promoting central star formation or black-hole accretion.

### 11.4 Lenticular: S0

- It has both a bulge and a disk;
- it lacks prominent spiral arms;
- it has little cold gas and star formation;
- its stellar colors and ages resemble those of an elliptical galaxy.

In short:

> the structure of a spiral, combined with the star-formation state of an elliptical.

### 11.5 Irregular

“Irregular” can include:

1. low-mass, gas-rich dwarf galaxies with disordered star formation;
2. systems undergoing collisions or mergers that temporarily lack a stable morphology.

Thus irregular can sometimes be a type and sometimes an evolutionary phase.

### 11.6 Early Type and Late Type

- early type: elliptical, S0;
- late type: spiral, irregular.

These are historical labels; they do not mean that elliptical galaxies formed first and spiral galaxies later. Many morphological transformations actually proceed in the direction spiral $\rightarrow$ S0/elliptical.

---

## 12. Viewing Angle and Three-Dimensional Shape

### 12.1 Inclination

For an ideal, infinitely thin circular disk:

$$
\boxed{\frac ba\approx\cos i}.
$$

- $i=0^\circ$: face-on, making spiral arms, bars, and rings easy to see.
- $i=90^\circ$: edge-on, making dust lanes, disk thickness, and boxy/peanut bulges easy to see.

An edge-on view hides spiral arms and bars, making Sa and S0 difficult to distinguish.

Rotation velocity requires an inclination correction:

$$
v_{\rm los}=v_{\rm rot}\sin i,
$$

so

$$
\boxed{v_{\rm rot}=\frac{v_{\rm los}}{\sin i}}.
$$

### 12.2 Oblate and Prolate Shapes

Oblate spheroid:

$$
a=b>c.
$$

This resembles a flattened sphere; rotation naturally tends to produce this shape.

Prolate spheroid:

$$
a>b=c.
$$

This resembles an elongated football and usually requires support from anisotropic velocity dispersion.

Either can look nearly E0 from particular directions, so a single two-dimensional image cannot uniquely recover the three-dimensional structure.

### 12.3 Depth, Resolution, and Misfits

- Insufficient depth: outer disks, tidal tails, and stellar halos disappear.
- Insufficient resolution: distant galaxies appear only as blurred light distributions.
- Unusual systems such as polar rings and mergers may not fit into the standard Hubble sequence.

---

## 13. Why Can Morphology Predict Other Properties?

| Property | Elliptical / S0 | Spiral / irregular |
|---|---|---|
| Color | Usually red | Usually blue |
| Stellar age | Usually old | Young and old stars coexist |
| Cold gas | Little | Abundant |
| Star formation | Weak or quenched | Ongoing |
| Dynamical support | Random motion / velocity dispersion | Ordered rotation |
| Common environment | High density | Low density |

These trends correspond to the following regions of the color-mass diagram:

- **red sequence:** usually massive, weakly star-forming, early-type galaxies;
- **blue cloud:** usually actively star-forming, late-type galaxies;
- **green valley:** the region between them, often associated with quenching.

These are statistical trends only. Counterexamples such as red spirals and blue ellipticals show that morphology, color, and star-formation state are not the same physical quantity.

---

## 14. Why Is Morphology Correlated with Environmental Density?

Observations reveal a morphology-density relation:

- spirals and irregulars make up a larger fraction in the field;
- S0 and elliptical galaxies make up a larger fraction in cluster cores.

The explanation includes both **nature** and **nurture**.

### 14.1 Nature: High-Density Regions Form Earlier

Initially higher density peaks:

- collapse earlier;
- form dark-matter halos and stars earlier;
- consume their gas earlier;
- experience more mergers;
- and are more likely to become today's groups and clusters.

### 14.2 Nurture: Transformation after Entering a Dense Environment

#### Starvation

A galaxy retains its existing cold gas, but its external gas supply is cut off:

$$
\text{gas supply stops}
\rightarrow
\text{existing gas is gradually consumed}
\rightarrow
\text{star formation slowly declines}
\rightarrow
\text{the galaxy gradually reddens}.
$$

This process can operate in both groups and clusters.

#### Ram-pressure stripping

A galaxy moving rapidly through the hot intracluster medium experiences

$$
\boxed{P_{\rm ram}\sim\rho_{\rm ICM}v^2}.
$$

Cold gas is pushed out of the disk, whereas stars are almost unaffected by hydrodynamic drag. The stellar disk survives but loses the fuel for new stars, potentially producing an S0-like system.

This mechanism requires a dense, hot medium and high velocity, so it is primarily a cluster process.

#### Harassment

Repeated high-speed close encounters within a cluster cumulatively:

- heat and thicken the disk;
- increase random stellar motions;
- strip stars from the outskirts;
- and produce disturbances and tidal structures.

#### Major merger

A merger between two galaxies of comparable mass can destroy disks, randomize stellar orbits, and create a spheroidal remnant.

Major mergers are more likely in groups than in present-day cluster cores because the lower relative velocities in groups make bound systems easier to form. Velocities in cluster cores are often too high, so galaxies merely undergo rapid flybys.

Many cluster ellipticals may first form or be transformed in a group and then fall into the cluster together with that group. This is called preprocessing.

### 14.3 Why Do Spiral Arms Fade after the Gas Supply Ends?

The high contrast of optical spiral arms comes largely from short-lived young stars. If the gas is removed:

1. new massive stars stop forming;
2. existing massive stars die quickly;
3. blue star-forming regions disappear;
4. and the disk becomes dominated by a smoother distribution of old stars.

The disk therefore need not be destroyed immediately; disc fading alone can gradually make it resemble an S0.

### 14.4 This Is Not an Absolute Rule

A more accurate statement is

$$
P(\text{early type}\mid\text{high density})
>
P(\text{early type}\mid\text{low density}),
$$

rather than “every galaxy in a high-density environment must be elliptical.”

---

## 15. Evolution of Morphology with Redshift

### 15.1 Cosmic noon

The cosmic mean star-formation-rate density peaks at $z\sim2$ and is now about one tenth of its peak value. Most stars that exist today formed at approximately

$$
1\lesssim z\lesssim3.
$$

High-redshift galaxies generally look smaller, denser, and clumpier, while mergers and intense star formation are more common. Observational biases must first be ruled out, however.

### 15.2 Tolman surface-brightness dimming

$$
\boxed{
I_{\rm obs}=\frac{I_{\rm emitted}}{(1+z)^4}
}.
$$

At $z=2$:

$$
(1+z)^4=3^4=81.
$$

Faint outer disks can therefore sink into the noise, leaving only a few bright star-forming regions and making one complete galaxy look like several fragments.

### 15.3 Band shifting / morphological $K$-correction

$$
\lambda_{\rm obs}=(1+z)\lambda_{\rm rest}.
$$

An optical filter observing a high-redshift galaxy may actually sample rest-frame UV. UV primarily traces young stars and localized star formation, so even a normal disk can appear very clumpy.

### 15.4 Resolution

Distant structure may not be absent; it may be blended by the telescope PSF. Comparisons across redshift should therefore match, as closely as possible:

- rest-frame wavelength;
- physical resolution;
- surface-brightness limit.

### 15.5 The Role of JWST

JWST infrared observations can sample rest-frame optical light at high redshift. The results show that:

- ordered disks appeared earlier than previously thought;
- bar structures already existed in the early universe;
- the early universe truly was more disordered, but earlier optical observations exaggerated that disorder.

---

## 16. Low-Surface-Brightness Structures: The Fossil Record of Galaxies

Surface brightness is commonly expressed in

$$
\mathrm{mag\,arcsec^{-2}}
$$

A larger magnitude number means lower surface brightness.

Typical scales quoted in the lecture notes are:

- bright inner disks of spiral galaxies: about $21\,\mathrm{mag\,arcsec^{-2}}$;
- a good dark night sky: about $22\,\mathrm{mag\,arcsec^{-2}}$;
- stellar halos and tidal streams: about $28$-$30\,\mathrm{mag\,arcsec^{-2}}$.

The main structures are:

- **Streams:** disrupted dwarf galaxies that have not yet fully phase-mixed.
- **Shells:** often associated with relatively radial or nearly head-on mergers.
- **Stellar halos:** remnants that have become more thoroughly mixed after multiple accretion events.

Orbital periods are long and mixing is slow in outer halos, so they preserve merger history longer than inner regions.

Observational challenges include:

- scattered light;
- flat-fielding error;
- sky subtraction;
- a pipeline may mistake a real galactic halo for background and remove it.

---

## 17. Multiwavelength Morphology

The same galaxy can have completely different morphologies at different wavelengths.

| Band | Primary tracer or process |
|---|---|
| Ultraviolet | Young massive stars and recent star formation |
| Optical | Ordinary starlight and dust obscuration |
| Near-infrared | Older stars and the stellar-mass skeleton, with greater penetration through dust |
| Far-infrared | Dust heated by starlight and reradiating the absorbed energy |
| Radio 21 cm | Neutral hydrogen, the raw material for star formation |
| Radio continuum | Jets and radio lobes produced by supermassive black holes |
| X-ray | Million-degree gas and black-hole accretion |

Therefore

$$
\boxed{
\text{observed morphology}
=f(\text{wavelength, depth, resolution, viewing angle})
}.
$$

Cygnus A looks like a smooth elliptical galaxy in optical light, but displays enormous jets and radio lobes at radio wavelengths. Optical morphology therefore reveals only part of a galaxy's physics.

---

## 18. Frequently Confused Points

### 18.1 $P(k)$ and $\Delta^2(k)$

- $P(k)$: the mean power per Fourier mode.
- $\Delta^2(k)$: the variance contributed by each logarithmic interval in $k$.
- They differ by a factor of $k^3/(2\pi^2)$.

### 18.2 More Modes versus More Structures

$dN/d\ln k\propto k^3$ says only that intervals at high $k$ contain more Fourier modes. The real halo abundance also depends on perturbation amplitudes, the transfer function, and the collapse threshold.

### 18.3 Critical Density versus Local Collapse

$\rho_{\rm crit}$ is a reference density for the geometry of the cosmological background, not a direct collapse criterion for every local gas cloud. Gas collapse also depends on the competition among self-gravity, pressure, cooling, rotation, and turbulence.

### 18.4 Jeans Length versus Halo Scale

The Jeans length describes the scale of gravitational instability in a medium with pressure. Cold dark matter has essentially none of the thermal pressure of ordinary gas, so its small-scale cutoff is determined more by microscopic properties such as free streaming.

### 18.5 Early Type versus Early Formation

Early and late are morphological classification terms, not a strict temporal ordering.

### 18.6 Red Color versus Old Age

A red color can result from old stars, dust, or metallicity; spectra and multiwavelength data are needed to break the degeneracy.

### 18.7 Elliptical versus S0

Both can be red and lack star formation, but an S0 retains a disk. They are especially difficult to distinguish edge-on.

### 18.8 Starvation versus Ram-Pressure Stripping

- Starvation cuts off future gas supply and acts slowly.
- Ram pressure directly removes existing cold gas, acts rapidly, and occurs mainly in clusters.

### 18.9 Harassment versus Merger

- Harassment is the cumulative effect of repeated high-speed flybys.
- In a merger, two galaxies become gravitationally bound and ultimately combine; this is more likely in a group.

### 18.10 Genuine Evolution versus Observational Bias

High-redshift galaxies really are more active overall, but surface-brightness dimming, band shifting, and limited resolution further exaggerate how irregular they appear.

---

## 19. Formula Reference

### Cosmic Expansion

$$
a=\frac{1}{1+z}
$$

$$
H^2=\frac{8\pi G}{3}\rho-\frac{k}{a^2}+\frac{\Lambda}{3}
$$

$$
\rho_{\rm crit}=\frac{3H^2}{8\pi G}
$$

### Density Perturbations and Power Spectra

$$
\delta=\frac{\rho-\bar\rho}{\bar\rho}
$$

$$
P_\delta(k)\sim\langle|\delta_{\mathbf k}|^2\rangle
$$

$$
\Delta_\delta^2(k)=\frac{k^3P_\delta(k)}{2\pi^2}
$$

$$
\sigma_R^2=\int\Delta_m^2(k)|W(kR)|^2\,d\ln k
$$

### Jeans instability

$$
\omega^2=c_s^2k^2-4\pi G\rho_0
$$

$$
k_J=\frac{\sqrt{4\pi G\rho_0}}{c_s}
$$

$$
\lambda_J=c_s\sqrt{\frac{\pi}{G\rho_0}}
$$

$$
M_J\propto\frac{c_s^3}{G^{3/2}\rho^{1/2}}
$$

### Galaxy Dynamics and Morphology

$$
v^2(r)=\frac{GM(<r)}{r}
$$

$$
\frac ba\approx\cos i
$$

$$
v_{\rm rot}=\frac{v_{\rm los}}{\sin i}
$$

$$
P_{\rm ram}\sim\rho_{\rm ICM}v^2
$$

### High-Redshift Observations

$$
\lambda_{\rm obs}=(1+z)\lambda_{\rm rest}
$$

$$
I_{\rm obs}=\frac{I_{\rm emitted}}{(1+z)^4}
$$

---

## 20. Learning Objectives

### You Should Be Able to Explain

1. The causal connection among inflation, the CMB, dark-matter perturbations, and galaxy formation.
2. What $\delta$, $P(k)$, $\Delta^2(k)$, and $\sigma_R$ each represent.
3. What physical competition produces the Jeans length and where its factor of $\pi$ comes from.
4. Why cold dark matter can establish gravitational potential wells before baryons.
5. Why flat rotation curves imply dark-matter halos.
6. The criteria for classifying E, S0, Sa-Sc, SBa-SBc, and irregular galaxies.
7. Why early and late cannot be interpreted literally as formation times.
8. How inclination, depth, resolution, and observing band change morphological classification.
9. The nature and nurture components of the morphology-density relation.
10. The conditions and outcomes of starvation, ram-pressure stripping, harassment, and mergers.
11. Why mergers are more likely in groups, whereas ram pressure acts mainly in clusters.
12. Why high-redshift galaxies look more irregular and how to distinguish genuine evolution from observational bias.
13. How streams, shells, and stellar halos record merger history.
14. What matter or physical process each wavelength band traces.

### You Should Be Able to Use

$$
a=\frac{1}{1+z},
\qquad
\rho_{\rm crit}=\frac{3H^2}{8\pi G},
$$

$$
\Delta^2(k)=\frac{k^3P(k)}{2\pi^2},
\qquad
\lambda_J=c_s\sqrt{\frac{\pi}{G\rho}},
$$

$$
v_{\rm rot}=\frac{v_{\rm los}}{\sin i},
\qquad
I_{\rm obs}=\frac{I_{\rm emitted}}{(1+z)^4}.
$$

### You Do Not Need to Prioritize Memorizing

- the catalog number of every example image;
- the exact date of every historical event;
- every extended symbol in the Hubble sequence;
- the authors and years of every illustrated paper.

---

## 21. One-Page Summary

### Lecture 1

Inflation leaves an almost scale-invariant primordial curvature perturbation. Perturbations grow gravitationally in the expanding background. Unimpeded by photon pressure, cold dark matter first forms the cosmic web and dark-matter halos. After recombination, baryonic gas falls into these potential wells and forms stars and galaxies through heating, cooling, Jeans instability, and fragmentation. Power spectra describe the statistics of perturbations on different scales, while the Jeans length determines which scales of a pressured gas can collapse.

### Lecture 2

Once galaxies have formed, their morphology is jointly determined by ordered rotation, random motion, gas content, star formation, internal secular evolution, mergers, and environment. The Hubble sequence provides a descriptive language, but two-dimensional morphology depends on inclination, depth, resolution, and wavelength. Low-density environments generally allow galaxies to maintain a gas supply and rotating disk. High-density environments form earlier and quench star formation or alter structure through starvation, ram-pressure stripping, harassment, and preprocessing. High-redshift morphology is also affected by $(1+z)^{-4}$ surface-brightness dimming, band shifting, and finite resolution. Low-surface-brightness structures and multiwavelength images can reveal formation histories hidden by ordinary optical morphology.

### Final Causal Chain

$$
\boxed{
\text{initial conditions}
\rightarrow
\text{gravitational growth}
\rightarrow
\text{dark-matter halos}
\rightarrow
\text{gas cooling and star formation}
\rightarrow
\text{galaxy structure}
\rightarrow
\text{internal and environmental evolution}
\rightarrow
\text{observable multiwavelength morphology}
\rightarrow
\text{inference of galaxy history}
}
$$
