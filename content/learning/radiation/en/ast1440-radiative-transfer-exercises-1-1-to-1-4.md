---
title: 'AST1440: Radiative Transfer Fundamentals and Problems 1.1–1.4'
description: >-
  Concepts, derivations, and a review of radiative transfer, Rybicki & Lightman
  §§1.1–1.4, and Problems 1.1–1.4.
tags:
  - AST1440
  - Radiative transfer
  - Exercises
order: 1
sourceHash: d07a85c6ffc079cc1f19c624e8829b3d615cf9a4712990ce799d28978136d8bc
translation: AI-assisted English translation
---

# AST1440: Radiative Transfer Fundamentals and Problems 1.1–1.4

> **Scope**: Rybicki & Lightman, *Radiative Processes in Astrophysics*, §§1.1–1.4 and Problems 1.1–1.4, plus an extension on M82 X-1.  
> **Course website**: <https://www.astro.utoronto.ca/~mhvk/AST1440/>  
> **Textbook**: Rybicki & Lightman, *Radiative Processes in Astrophysics* (2004).

The original Chinese notes first explain the physical concepts and derivations in detail, then provide assignment-ready English answers. This edition translates the explanatory material into English as well.

---

## 0. The logical thread of this chapter

Starting with how to describe light, this chapter gradually builds the theory of radiative transfer:

1. **§1.1**: Describe electromagnetic radiation using wavelength, frequency, photon energy, and the corresponding temperature scale.
2. **§1.2**: Use flux to describe the net energy transported per unit area per unit time, and derive the inverse-square law.
3. **§1.3**: Retain directional information through specific intensity, then calculate mean intensity, energy density, flux, and radiation pressure.
4. **§1.4**: Study how emission and absorption by matter change specific intensity; introduce the absorption coefficient, optical depth, source function, and mean free path; finally examine how radiation exerts a force on matter.

The central relations throughout the chapter are

$$
\lambda\nu=c,
\qquad
E_\gamma=h\nu,
\qquad
F=\frac{L}{4\pi r^2},
$$

$$
F_\nu=\int I_\nu\cos\theta\,d\Omega,
\qquad
u_\nu=\frac{1}{c}\int I_\nu\,d\Omega
=\frac{4\pi J_\nu}{c},
$$

$$
\frac{dI_\nu}{ds}=-\alpha_\nu I_\nu+j_\nu.
$$

---

## 1. §1.1 The electromagnetic spectrum and basic properties of radiation

### 1.1 Wavelength and frequency

Electromagnetic waves in vacuum satisfy

$$
\boxed{\lambda\nu=c},
$$

where:

- $\lambda$: wavelength;
- $\nu$: frequency, in Hz;
- $c$: the speed of light in vacuum, approximately $3.00\times10^{10}\ \mathrm{cm\,s^{-1}}$.

Thus, a shorter wavelength means a higher frequency. From low frequency and long wavelength to high frequency and short wavelength, the electromagnetic spectrum runs as follows:

$$
\text{radio}\rightarrow\text{infrared}\rightarrow\text{visible}
\rightarrow\text{ultraviolet}\rightarrow\text{X-ray}\rightarrow\gamma\text{-ray}.
$$

### 1.2 Photon energy

The energy of a single photon is

$$
\boxed{E_\gamma=h\nu=\frac{hc}{\lambda}}.
$$

A shorter-wavelength photon therefore has more energy. Note that this refers to the **energy per photon**; the total energy of a beam also depends on the number of photons.

The textbook also defines a corresponding temperature scale

$$
\boxed{T_{\rm equivalent}=\frac{E}{k}},
$$

to compare photon energy with the thermal energy scale $kT$. This does not imply that the emitting object actually has that temperature.

---

## 2. §1.2 Radiative flux

### 2.1 Definition of flux

If energy $dE$ crosses area $dA$ during time $dt$, the flux is defined by

$$
\boxed{dE=F\,dA\,dt},
\qquad
\boxed{F=\frac{dE}{dA\,dt}}.
$$

Its commonly used units are

$$
[F]=\mathrm{erg\,cm^{-2}\,s^{-1}}.
$$

Flux describes **net energy transport per unit area per unit time**. It depends on the orientation of the chosen area: light crossing obliquely contributes only through the component of its propagation direction along the surface normal.

### 2.2 The inverse-square law

Consider an isotropic source of luminosity $L$. At distance $r$, its energy is spread over a sphere of area $4\pi r^2$, so

$$
\boxed{F(r)=\frac{L}{4\pi r^2}}.
$$

Hence

$$
F\propto r^{-2}.
$$

Doubling the distance quadruples the spherical area, reducing the energy received per unit area to one quarter. Light does not spontaneously lose energy in free space; the same total power is distributed over a larger area.

---

## 3. §1.3 Specific intensity and its moments

### 3.1 Why flux alone is insufficient

Two equally strong, oppositely directed beams can have zero net flux; the net flux is also zero when no light is present. Thus, $F_\nu$ alone cannot tell us whether there is any local radiation energy.

We need a quantity that retains directional information:

$$
\boxed{I_\nu(\boldsymbol r,\hat{\boldsymbol n})}.
$$

$I_\nu$ is a **direction-dependent scalar**, not a vector:

- $\hat{\boldsymbol n}$ is the input propagation direction, represented by a unit vector;
- $I_\nu(\hat{\boldsymbol n})$ is the radiation strength in that chosen direction, a nonnegative scalar.

This is analogous to a distance measured in different directions: the distance depends on direction, but is not itself a vector.

### 3.2 Definition of specific intensity

For a small area $dA$ perpendicular to a ray, the energy crossing during time $dt$, within frequency interval $d\nu$ and directional interval $d\Omega$, is

$$
\boxed{dE=I_\nu\,dA\,dt\,d\Omega\,d\nu}.
$$

If the angle between the surface normal and the ray is $\theta$, the effective projected area is $dA\cos\theta$, giving

$$
dE=I_\nu\cos\theta\,dA\,dt\,d\Omega\,d\nu.
$$

The units are

$$
[I_\nu]=\mathrm{erg\,cm^{-2}\,s^{-1}\,sr^{-1}\,Hz^{-1}}.
$$

### 3.3 Solid angle

An ordinary plane angle is an arc length divided by its radius:

$$
\theta=\frac{\ell}{r}.
$$

Solid angle is the three-dimensional generalization. Draw an imaginary sphere centered on the observer. If a bundle of directions covers area $A_{\rm sphere}$ on that sphere, then

$$
\boxed{\Omega=\frac{A_{\rm sphere}}{r^2}}.
$$

The solid angle of a full sphere is

$$
\boxed{4\pi\ \mathrm{sr}},
$$

A hemisphere subtends $2\pi\ \mathrm{sr}$. Solid angle describes a range of directions, not an object's physical area or the strength of the light.

In spherical coordinates,

$$
\boxed{d\Omega=\sin\theta\,d\theta\,d\phi}.
$$

because a small spherical surface element has area

$$
dA_{\rm sphere}=(r\,d\theta)(r\sin\theta\,d\phi)
=r^2\sin\theta\,d\theta\,d\phi.
$$

For a cone of directions with half-opening angle $\alpha$,

$$
\Omega=2\pi\int_0^\alpha\sin\theta\,d\theta
=\boxed{2\pi(1-\cos\alpha)}.
$$

In the small-angle limit, with $\alpha\ll1$ expressed in radians,

$$
\boxed{\Omega\simeq\pi\alpha^2}.
$$

For a physical small area $dA$ at distance $s$, whose normal makes angle $\beta$ with the line of sight, the solid angle is

$$
\boxed{d\Omega=\frac{dA|\cos\beta|}{s^2}}.
$$

The projection must be onto the plane perpendicular to the **actual line of sight**. Since the solid angle is centered on the observer, the denominator also uses the actual oblique distance $s^2$.

### 3.4 Mean specific intensity $J_\nu$

Mean specific intensity is defined as

$$
\boxed{J_\nu=\frac{1}{4\pi}\int_{4\pi}I_\nu(\hat{\boldsymbol n})\,d\Omega}.
$$

This does not assume that $I_\nu$ is the same in every direction. It is simply the sum over all directions divided by the total solid angle, just as a class average does not imply that every student earned the average score.

Only for isotropic radiation does

$$
I_\nu(\hat{\boldsymbol n})=J_\nu
\quad\text{hold in every direction}.
$$

### 3.5 Energy density and the factor $c$

Define the directional energy density per unit solid angle as $w_\nu(\hat{\boldsymbol n})$. Within volume $dV$, the energy in a given range of directions is

$$
dE=w_\nu\,dV\,d\Omega\,d\nu.
$$

Light travels distance $c\,dt$ in time $dt$, so a cylinder with cross-sectional area $dA$ perpendicular to the ray has volume

$$
dV=dA\,c\,dt.
$$

Comparing

$$
dE=w_\nu dA\,c\,dt\,d\Omega\,d\nu
=I_\nu dA\,dt\,d\Omega\,d\nu,
$$

gives

$$
\boxed{w_\nu=\frac{I_\nu}{c}}.
$$

Adding the energy densities from all directions:

$$
\boxed{u_\nu=\int w_\nu\,d\Omega
=\frac{1}{c}\int I_\nu\,d\Omega
=\frac{4\pi J_\nu}{c}}.
$$

In general, the correct expression is $u_\nu=4\pi J_\nu/c$. Only in the isotropic case, where $I_\nu=J_\nu$, can we write

$$
u_\nu=\frac{4\pi I_\nu}{c}.
$$

The solid-angle integral adds all directions; division by $c$ converts energy flow per unit area per unit time into energy per unit volume.

### 3.6 The relation between flux and specific intensity

The flux vector is

$$
\boxed{\boldsymbol F_\nu=\int I_\nu(\hat{\boldsymbol n})
\hat{\boldsymbol n}\,d\Omega}.
$$

For its component along a chosen surface normal $\hat{\boldsymbol m}$,

$$
\boxed{F_\nu=\int I_\nu\cos\theta\,d\Omega},
\qquad
\cos\theta=\hat{\boldsymbol n}\cdot\hat{\boldsymbol m}.
$$

All directions enter the integral, but their contributions through the chosen surface are weighted by $\cos\theta$:

- $\theta=0^\circ$: full positive contribution;
- $\theta=60^\circ$: half the contribution;
- $\theta=90^\circ$: parallel to the surface, with no crossing;
- $\theta>90^\circ$: crossing in the reverse direction, giving a negative contribution.

For isotropic radiation, opposite directions cancel, so $F_\nu=0$, even though $u_\nu>0$.

### 3.7 Radiation pressure and the two cosines

Pressure is defined by

$$
\boxed{P=\frac{\text{normal momentum delivered to the surface per unit time}}{\text{area}}}.
$$

For particles arriving from direction $\theta$:

1. The number crossing the surface per second contains $\cos\theta$;
2. Each particle's normal momentum $p_\perp=p\cos\theta$ contains another factor $\cos\theta$.

Thus

$$
\boxed{P_\nu=\frac{1}{c}\int I_\nu\cos^2\theta\,d\Omega}.
$$

The two cosines are not double counting: one determines how many particles arrive per second, the other how much normal momentum each collision delivers. The factor $1/c$ follows from the photon momentum–energy relation

$$
p=\frac{E}{c}.
$$

Pressure is not energy multiplied by momentum. The actual calculation is

$$
\text{energy flux}\times\frac{\text{normal momentum}}{\text{energy}}
=\text{momentum flux}.
$$

For isotropic radiation, choosing $z$ as the normal gives $\cos\theta=n_z$. The unit vector satisfies

$$
n_x^2+n_y^2+n_z^2=1.
$$

Isotropy makes the mean squares of all three components equal, so

$$
\langle n_x^2\rangle=\langle n_y^2\rangle
=\langle n_z^2\rangle=\frac13.
$$

Therefore

$$
\boxed{P_\nu=\frac{u_\nu}{3}},
\qquad
\boxed{P=\frac{u}{3}}.
$$

Similarly, a gas with no net flow still has pressure: energy fluxes in opposite directions cancel, but particles continue to strike different container walls.

### 3.8 Specific intensity is conserved in free space

Choose two small areas $dA_1,dA_2$ perpendicular to the same ray, separated by $R$. Track only the same bundle of light passing through both.

Seen from the first area, the second subtends solid angle

$$
d\Omega_1=\frac{dA_2}{R^2};
$$

Looking backward from the second, the first subtends the directional range

$$
d\Omega_2=\frac{dA_1}{R^2}.
$$

Thus

$$
dA_1d\Omega_1=dA_2d\Omega_2
=\frac{dA_1dA_2}{R^2}.
$$

The energies of this same beam at the two locations are

$$
dE_1=I_{\nu,1}dA_1dt\,d\Omega_1d\nu,
$$

$$
dE_2=I_{\nu,2}dA_2dt\,d\Omega_2d\nu.
$$

With no emission, absorption, or scattering in vacuum, energy conservation gives $dE_1=dE_2$. Canceling the common geometric factors yields

$$
\boxed{I_{\nu,1}=I_{\nu,2}},
\qquad
\boxed{\frac{dI_\nu}{ds}=0}.
$$

For time-dependent radiation, compare the times at which the same light reaches the two locations:

$$
I_\nu(P_2,t+R/c)=I_\nu(P_1,t).
$$

### 3.9 Angular radius and a uniformly bright sphere

A sphere has physical radius $R$, and the observer is at distance $r$ from its center. The line of sight to the limb is tangent to the sphere. The angle between the center and limb directions is the angular radius $\theta_c$:

$$
\boxed{\sin\theta_c=\frac{R}{r}}.
$$

In the distant, small-angle limit, $\theta_c\simeq R/r$. The angular diameter is $2\theta_c$.

If the projected disk has uniform specific intensity $B_\nu$, with zero intensity outside, then

$$
F_\nu
=2\pi B_\nu\int_0^{\theta_c}\cos\theta\sin\theta\,d\theta
=\pi B_\nu\sin^2\theta_c.
$$

Substituting $\sin\theta_c=R/r$:

$$
\boxed{F_\nu=\pi B_\nu\left(\frac{R}{r}\right)^2}.
$$

This example shows that although specific intensity $B_\nu$ stays constant along a ray, the source's solid angle shrinks as $r^{-2}$, so the total flux still falls as $r^{-2}$.

---

## 4. §1.4 Radiative transfer

### 4.1 Emission coefficient

The emission coefficient $j_\nu$ is defined by

$$
dE=j_\nu\,dV\,d\Omega\,dt\,d\nu.
$$

A beam traveling distance $ds$ passes through volume $dV=dA\,ds$, so emission increases its specific intensity by

$$
\boxed{dI_\nu=j_\nu ds}.
$$

For isotropic emission, the total emitted power per unit volume per unit frequency, $P_\nu$, is related to $j_\nu$ by

$$
j_\nu=\frac{P_\nu}{4\pi}.
$$

### 4.2 Why define an absorption coefficient?

The absorption coefficient $\alpha_\nu$ describes the local fraction of light lost per unit path length:

$$
\boxed{dI_\nu=-\alpha_\nu I_\nu ds},
\qquad
\boxed{-\frac{dI_\nu}{I_\nu}=\alpha_\nu ds}.
$$

Its units are $\mathrm{cm^{-1}}$. It multiplies $I_\nu$ because the absolute number of absorbed photons is normally proportional to the incident photon number.

Microscopically, if absorbers have number density $n$ and individual effective cross section $\sigma_\nu$, the absorbed fraction in a thin layer is $n\sigma_\nu ds$, so

$$
\boxed{\alpha_\nu=n\sigma_\nu}.
$$

Alternatively, use the mass density $\rho$ and opacity per unit mass $\kappa_\nu$:

$$
\boxed{\alpha_\nu=\rho\kappa_\nu}.
$$

- $\alpha_\nu$: absorption coefficient, with units $\mathrm{cm^{-1}}$;
- $\kappa_\nu$: opacity or mass absorption coefficient, with units $\mathrm{cm^2\,g^{-1}}$.

### 4.3 The radiative transfer equation

Combining absorption and emission:

$$
\boxed{\frac{dI_\nu}{ds}=-\alpha_\nu I_\nu+j_\nu}.
$$

With emission only:

$$
I_{\nu,\rm out}=I_{\nu,\rm in}+\int j_\nu ds.
$$

With absorption only:

$$
I_{\nu,\rm out}=I_{\nu,\rm in}
\exp\left(-\int\alpha_\nu ds\right).
$$

The attenuation is exponential because each layer absorbs a fixed fraction of the **remaining light** reaching it.

### 4.4 Optical depth

Define

$$
\boxed{d\tau_\nu=\alpha_\nu ds},
\qquad
\boxed{\tau_\nu=\int\alpha_\nu ds}.
$$

Optical depth is dimensionless and measures cumulative attenuation along a path. For pure absorption,

$$
\boxed{\frac{I_{\nu,\rm out}}{I_{\nu,\rm in}}=e^{-\tau_\nu}}.
$$

- $\tau_\nu\ll1$: optically thin;
- $\tau_\nu\gg1$: optically thick.

Optical thickness is not geometric thickness: a geometrically thin but strongly absorbing layer can have large $\tau_\nu$. The same material can also have different optical depths at different frequencies.

### 4.5 The source function and solutions of the transfer equation

Define the source function

$$
\boxed{S_\nu=\frac{j_\nu}{\alpha_\nu}}.
$$

The transfer equation becomes

$$
\boxed{\frac{dI_\nu}{d\tau_\nu}+I_\nu=S_\nu}.
$$

For constant $S_\nu$, multiply both sides by the integrating factor $e^{\tau_\nu}$:

$$
\frac{d}{d\tau_\nu}\left(I_\nu e^{\tau_\nu}\right)
=S_\nu e^{\tau_\nu}.
$$

Integrating from the entrance at $0$ to the exit at $\tau_\nu$ gives

$$
\boxed{
I_{\nu,\rm out}
=I_{\nu,\rm in}e^{-\tau_\nu}
+S_\nu(1-e^{-\tau_\nu})
}.
$$

Physically:

- The first term is the incident background light remaining after absorption;
- The second is light emitted along the path that survives subsequent absorption.

If $S_\nu$ varies with position, the formal solution is

$$
\boxed{
I_\nu(\tau)
=I_\nu(0)e^{-\tau}
+\int_0^\tau S_\nu(t)e^{-(\tau-t)}\,dt
}.
$$

When $\tau\gg1$, the incident light disappears and $I_\nu\rightarrow S_\nu$. The source function can be understood as the local equilibrium value toward which the medium drives the specific intensity.

### 4.6 Mean free path

In a uniform medium, the photon mean free path is

$$
\boxed{\ell_{\rm mfp}=\frac{1}{\alpha_\nu}}.
$$

Therefore

$$
\tau_\nu=\frac{\ell}{\ell_{\rm mfp}}.
$$

The mean free path is a statistical average; at $\tau=1$, a fraction $e^{-1}\simeq37\%$ of the light is still directly transmitted.

### 4.7 Radiation force and the factor $c$

The photon momentum–energy relation is

$$
p=\frac{E}{c}.
$$

Dividing the energy absorbed per unit time by $c$ therefore gives momentum transferred per unit time, i.e. force. The radiation force per unit volume is

$$
\boxed{\boldsymbol f_{\rm vol}
=\frac{1}{c}\int\alpha_\nu\boldsymbol F_\nu\,d\nu}.
$$

Dividing by mass density and using $\alpha_\nu=\rho\kappa_\nu$:

$$
\boxed{\boldsymbol a_{\rm rad}
=\frac{1}{c}\int\kappa_\nu\boldsymbol F_\nu\,d\nu}.
$$

If $\kappa$ is frequency-independent,

$$
\boxed{\boldsymbol a_{\rm rad}=\frac{\kappa\boldsymbol F}{c}}.
$$

No further angular integration is needed here: $\boldsymbol F$ is already the net flux vector after integration over directions.

---

## 5. Problems 1.1–1.4: detailed derivations

### Problem 1.1: Pinhole camera

The pinhole diameter is $d$, the perpendicular separation between pinhole and film planes is $L$, and the focal ratio is $f=L/d$. The ray reaching a film point makes angle $\theta$ with the camera axis.

The actual oblique distance $s$ from the pinhole center to the film point satisfies

$$
s=\frac{L}{\cos\theta}.
$$

The pinhole area is

$$
A_h=\frac{\pi d^2}{4}.
$$

Seen from the film point, the pinhole is tilted relative to the actual line of sight. Its projected area is $A_h\cos\theta$, so its solid angle is

$$
\Delta\Omega_h\simeq\frac{A_h\cos\theta}{s^2}
=\frac{A_h}{L^2}\cos^3\theta.
$$

The flux on the film requires one additional projection factor for the receiving surface:

$$
F_\nu\simeq I_\nu(\theta,\phi)\cos\theta\,\Delta\Omega_h.
$$

Therefore

$$
\boxed{F_\nu
=\frac{\pi\cos^4\theta}{4f^2}I_\nu(\theta,\phi)}.
$$

The four cosines come from one film projection, one pinhole projection, and two factors from the squared oblique distance $s=L/\cos\theta$. All are geometric; none involves momentum or pressure.

### Problem 1.2: Photoionization

The number density of ionizable atoms is $n_a$, the photoionization cross section is $\sigma_\nu$, and the threshold photon energy is $h\nu_0$. The photoionization absorption coefficient is

$$
\boxed{\alpha_\nu=n_a\sigma_\nu}.
$$

The absorbed energy rate within a frequency and directional interval is $\alpha_\nu I_\nu\,d\Omega\,d\nu$. Dividing by the single-photon energy $h\nu$ gives the ionization rate:

$$
d\dot n_{\rm ion}
=\frac{\alpha_\nu I_\nu}{h\nu}\,d\Omega\,d\nu.
$$

Integrating over directions and above-threshold frequencies:

$$
\dot n_{\rm ion}
=\int_{\nu_0}^{\infty}\int_{4\pi}
\frac{n_a\sigma_\nu I_\nu}{h\nu}\,d\Omega\,d\nu.
$$

Using $\int I_\nu d\Omega=4\pi J_\nu=cu_\nu$:

$$
\boxed{
\dot n_{\rm ion}
=4\pi n_a\int_{\nu_0}^{\infty}
\frac{\sigma_\nu J_\nu}{h\nu}\,d\nu
=cn_a\int_{\nu_0}^{\infty}
\frac{\sigma_\nu u_\nu}{h\nu}\,d\nu
}.
$$

The second form also follows from microscopic collisions: the photon number density in interval $d\nu$ is $u_\nu d\nu/(h\nu)$. One atom presents effective target area $\sigma_\nu$; during time $dt$, photons traveling at light speed that can hit it come from a cylinder of volume $\sigma_\nu cdt$. The per-atom ionization rate is therefore $c\sigma_\nu u_\nu d\nu/(h\nu)$. Multiplying by atomic number density $n_a$ and integrating gives the expression above. The factor $c$ is the photon speed.

Net flux cannot replace $4\pi J_\nu$ here: photons moving in opposite directions both ionize atoms, so the ionization rate can be nonzero even at zero net flux. The factor $4\pi$ follows from the definition of $J_\nu$ and does not require the actual radiation to be isotropic.

### Problem 1.3: Resolved and unresolved X-ray clouds

A cloud of radius $R$ at distance $d$ uniformly produces $\Gamma$ photons per unit volume per unit time. Assume isotropic emission and negligible absorption. The photon-number emission coefficient per unit solid angle is

$$
j_N=\frac{\Gamma}{4\pi}.
$$

#### (a) Resolved central intensity

The central line of sight crosses length $2R$, so

$$
\boxed{\mathcal I_{\rm center}
=\int j_N ds
=\frac{\Gamma R}{2\pi}}.
$$

There is no distance dependence because specific intensity is conserved along rays in free space. For impact parameter $b$, the general brightness profile is

$$
\mathcal I(b)=\frac{\Gamma}{2\pi}\sqrt{R^2-b^2}.
$$

Uniform volume emissivity therefore produces a projected image that is bright at the center and faint at the edge.

A volume-based calculation also works, but it must use the narrow column corresponding to the central line of sight, not the entire cloud. If a pixel subtends $\delta\Omega$, the column volume is approximately $2R d^2\delta\Omega$. Counting the isotropically emitted photons from that volume that reach the detector gives the same result.

#### (b) Unresolved field-averaged intensity

The cloud's total photon-number luminosity is

$$
\dot N_\gamma=\Gamma\frac{4\pi R^3}{3}.
$$

The photon-number flux at Earth is

$$
\Phi_N=\frac{\dot N_\gamma}{4\pi d^2}
=\frac{\Gamma R^3}{3d^2}.
$$

For detector acceptance half-angle $\Delta\theta$, the small-angle approximation gives

$$
\Delta\Omega_{\rm det}\simeq\pi(\Delta\theta)^2.
$$

The field-averaged intensity is therefore

$$
\boxed{
\overline{\mathcal I}_{\rm beam}
=\frac{\Phi_N}{\Delta\Omega_{\rm det}}
=\frac{\Gamma R^3}{3d^2\Delta\Omega_{\rm det}}
\simeq\frac{\Gamma R^3}{3\pi d^2(\Delta\theta)^2}
}.
$$

The effective area $\Delta A$ cancels when count rate is converted back into intensity per unit area. This average is over the detector field of view, not the all-sky $4\pi$ average defining $J_\nu$.

Using the whole cloud volume and dividing by the source's own solid angle $\Omega_{\rm src}\simeq\pi R^2/d^2$ instead gives the disk-averaged intensity

$$
\overline{\mathcal I}_{\rm src}=\frac{\Gamma R}{3\pi},
$$

not the central intensity $\Gamma R/(2\pi)$.

### Problem 1.4: Radiation driving and the Eddington limit

A central source has mass $M$ and luminosity $L$. An optically thin cloud of mass $m$ lies at distance $r$ and has opacity per unit mass $\kappa$.

#### (a) Condition for outward acceleration

The local flux is

$$
F(r)=\frac{L}{4\pi r^2}.
$$

If the cloud's illuminated cross-sectional area is $A$, its mass per unit area is $m/A$ and its optical depth is

$$
\tau=\kappa\frac{m}{A}\ll1.
$$

The incident energy per second is $FA$. In the optically thin limit, the fraction absorbed or effectively transferring momentum is approximately $\tau$, so

$$
\dot E_{\rm int}\simeq FA\tau=\kappa mF.
$$

Using $p=E/c$ to convert energy transfer rate into momentum transfer rate:

$$
\mathcal F_{\rm rad}=\frac{\kappa mF}{c},
\qquad
a_{\rm rad}=\frac{\mathcal F_{\rm rad}}{m}=\frac{\kappa F}{c}.
$$

The radiative and gravitational accelerations are, respectively,

$$
a_{\rm rad}=\frac{\kappa F}{c}
=\frac{\kappa L}{4\pi r^2c},
\qquad
a_{\rm grav}=\frac{GM}{r^2}.
$$

Requiring $a_{\rm rad}>a_{\rm grav}$ gives

$$
\boxed{\frac{M}{L}<\frac{\kappa}{4\pi Gc}}.
$$

Both accelerations scale as $r^{-2}$, so their ratio is independent of distance.

#### (b) Terminal speed when starting from rest at $R$

The net outward acceleration is

$$
a(r)=\frac1{r^2}
\left(\frac{\kappa L}{4\pi c}-GM\right).
$$

Using the work–energy relation per unit mass and integrating from $R$ to infinity:

$$
\frac12v_\infty^2
=\int_R^\infty a(r)dr
=\frac1R\left(\frac{\kappa L}{4\pi c}-GM\right).
$$

Hence

$$
\boxed{
v_\infty^2
=\frac{2GM}{R}
\left(\frac{\kappa L}{4\pi GMc}-1\right)
}.
$$

The bracket is positive precisely when the outward-driving condition in (a) holds. Here, terminal velocity means the asymptotic speed as $r\rightarrow\infty$.

#### (c) Eddington luminosity for fully ionized pure hydrogen

There is one free electron per hydrogen mass $m_H$, so the Thomson scattering opacity is

$$
\kappa_{\rm es}=\frac{\sigma_T}{m_H}
\simeq0.40\ \mathrm{cm^2\,g^{-1}}.
$$

Setting radiative acceleration equal to gravitational acceleration:

$$
\boxed{
L_{\rm Edd}
=\frac{4\pi GMc}{\kappa_{\rm es}}
=\frac{4\pi GMcm_H}{\sigma_T}
\simeq1.25\times10^{38}
\left(\frac{M}{M_\odot}\right)
\mathrm{erg\,s^{-1}}
}.
$$

More generally, $L_{\rm Edd}=4\pi GMc/\kappa$. The Eddington limit is not a single fixed number: it depends on the effective opacity of the material being driven. Larger $\kappa$ gives stronger radiation driving and a lower critical luminosity.

---

## 6. Extension: M82 X-1

### 6.1 The problem statement

Original statement:

> The ULX (Ultra-Luminous X-ray source) M82 X-1 was observed to have an X-ray flux $f_X=4\times10^{-12}\ \mathrm{erg\,cm^{-2}\,s^{-1}}$. Estimate its luminosity, given that M82 is at $d\approx3.6\ \mathrm{Mpc}$. What could you say about its mass?

Restatement (translated from the Chinese version):

The observed X-ray flux of the ultraluminous X-ray source M82 X-1 is

$$
f_X=4\times10^{-12}\ \mathrm{erg\,cm^{-2}\,s^{-1}}.
$$

Given that M82 is approximately $d=3.6\ \mathrm{Mpc}$ away, estimate the source luminosity and discuss what can be inferred about its mass.

### 6.2 X-ray luminosity

$$
d=3.6\times10^6\times3.086\times10^{18}
\simeq1.11\times10^{25}\ \mathrm{cm}.
$$

Assuming isotropic emission:

$$
\boxed{
L_{X,\rm iso}=4\pi d^2f_X
\simeq6.2\times10^{39}\ \mathrm{erg\,s^{-1}}
}.
$$

Strictly speaking, this is the isotropic-equivalent X-ray luminosity.

### 6.3 $L_X$, $L_{\rm bol}$, and the mass constraint

Bolometric luminosity is the total electromagnetic luminosity summed over all bands:

$$
L_{\rm bol}=\int_0^\infty L_\nu d\nu.
$$

X-rays occupy only one band, so

$$
L_X\le L_{\rm bol}.
$$

If we further assume isotropic emission and a total luminosity no greater than the classical Eddington limit for fully ionized pure hydrogen,

$$
L_{\rm bol}\le L_{\rm Edd},
$$

then

$$
L_X\le1.25\times10^{38}\left(\frac{M}{M_\odot}\right).
$$

therefore

$$
\boxed{M\gtrsim50M_\odot}.
$$

This is a conditional lower mass limit, not a direct mass measurement. The classical inference relies on:

- An isotropic conversion of the observed flux to luminosity;
- An approximately spherically symmetric local flux near the central source;
- Optically thin irradiated gas;
- Standard effective scattering cross sections and opacity;
- A total luminosity that does not exceed the classical Eddington limit.

Strong magnetic fields can modify effective scattering cross sections; radiation can also be anisotropic, or accretion can be super-Eddington. The actual mass therefore cannot be determined from this one number alone.

### 6.4 Eddington limits for different compositions

For fully ionized material with hydrogen mass fraction $X_H$, the electron-scattering opacity is approximately

$$
\kappa_{\rm es}\simeq0.20(1+X_H)\ \mathrm{cm^2\,g^{-1}}.
$$

| Composition | $\kappa_{\rm es}$ | $L_{\rm Edd}/(M/M_\odot)$ |
|---|---:|---:|
| Pure hydrogen, $X_H=1$ | $0.40\ \mathrm{cm^2\,g^{-1}}$ | $1.25\times10^{38}\ \mathrm{erg\,s^{-1}}$ |
| Approximately solar mixture, $X_H\simeq0.7$ | $0.34\ \mathrm{cm^2\,g^{-1}}$ | $1.47\times10^{38}\ \mathrm{erg\,s^{-1}}$ |
| Pure helium, $X_H=0$ | $0.20\ \mathrm{cm^2\,g^{-1}}$ | $2.50\times10^{38}\ \mathrm{erg\,s^{-1}}$ |

These are not different fundamental laws, but results of the same formula $L_{\rm Edd}=4\pi GMc/\kappa$ with different opacities.

---

## 7. English assignment answers

### Problem 1.1

Let the pinhole area be $A_h=\pi d^2/4$. For a film point corresponding to an incident angle $\theta$, the distance from the pinhole is

$$
s=\frac{L}{\cos\theta}.
$$

Viewed from the film point, the projected pinhole area is $A_h\cos\theta$. In the small-pinhole approximation, the solid angle of the hole is

$$
\Delta\Omega_h\simeq\frac{A_h\cos\theta}{s^2}
=\frac{\pi d^2}{4L^2}\cos^3\theta.
$$

Specific intensity is conserved along rays in free space. Hence,

$$
F_\nu\simeq I_\nu(\theta,\phi)\cos\theta\,\Delta\Omega_h
=\frac{\pi d^2}{4L^2}I_\nu(\theta,\phi)\cos^4\theta.
$$

Since $f=L/d$,

$$
\boxed{F_\nu=\frac{\pi\cos^4\theta}{4f^2}I_\nu(\theta,\phi)}.
$$

### Problem 1.2

In the interval $[\nu,\nu+d\nu]$, the photon number density is

$$
dn_\gamma=\frac{u_\nu}{h\nu}\,d\nu.
$$

An atom with photoionization cross section $\sigma_\nu$ has an interaction rate $c\sigma_\nu dn_\gamma$. Integrating above the ionization threshold and multiplying by the atomic number density gives

$$
\boxed{
\dot n_{\rm ion}
=cn_a\int_{\nu_0}^{\infty}\frac{\sigma_\nu u_\nu}{h\nu}\,d\nu
}.
$$

Using $u_\nu=4\pi J_\nu/c$,

$$
\boxed{
\dot n_{\rm ion}
=4\pi n_a\int_{\nu_0}^{\infty}
\frac{\sigma_\nu J_\nu}{h\nu}\,d\nu
}.
$$

The units are $\mathrm{cm^{-3}\,s^{-1}}$. No assumption of an isotropic radiation field is required.

### Problem 1.3

For isotropic emission, the photon number emission coefficient is $j_N=\Gamma/(4\pi)$.

For a resolved central line of sight, the path length is $2R$, so

$$
\boxed{\mathcal I_{\rm center}=\frac{\Gamma R}{2\pi}}.
$$

For an unresolved source, the total photon production rate and the photon flux at Earth are

$$
\dot N_\gamma=\Gamma\frac{4\pi R^3}{3},
\qquad
\Phi_N=\frac{\Gamma R^3}{3d^2}.
$$

With $\Delta\Omega_{\rm det}\simeq\pi(\Delta\theta)^2$, the average beam intensity is

$$
\boxed{
\overline{\mathcal I}_{\rm beam}
=\frac{\Gamma R^3}{3d^2\Delta\Omega_{\rm det}}
\simeq\frac{\Gamma R^3}{3\pi d^2(\Delta\theta)^2}
}.
$$

The detector effective area cancels when the count rate is converted into intensity.

### Problem 1.4

At distance $r$,

$$
F=\frac{L}{4\pi r^2},
\qquad
a_{\rm rad}=\frac{\kappa L}{4\pi r^2c},
\qquad
a_{\rm grav}=\frac{GM}{r^2}.
$$

The cloud accelerates outward if

$$
\boxed{\frac{M}{L}<\frac{\kappa}{4\pi Gc}}.
$$

Using the work–energy theorem for a cloud starting from rest at $R$,

$$
\boxed{
v_\infty^2
=\frac{2GM}{R}
\left(\frac{\kappa L}{4\pi GMc}-1\right)
}.
$$

For fully ionized pure hydrogen, $\kappa_{\rm es}=\sigma_T/m_H$, so

$$
\boxed{
L_{\rm Edd}
=\frac{4\pi GMcm_H}{\sigma_T}
\simeq1.25\times10^{38}
\left(\frac{M}{M_\odot}\right)\mathrm{erg\,s^{-1}}
}.
$$

### M82 X-1 extension

With $d=3.6\ \mathrm{Mpc}=1.11\times10^{25}\ \mathrm{cm}$,

$$
\boxed{L_{X,\rm iso}=4\pi d^2f_X
\simeq6.2\times10^{39}\ \mathrm{erg\,s^{-1}}}.
$$

If the emission is isotropic and the bolometric luminosity does not exceed the pure-hydrogen Eddington limit, then

$$
L_X\le L_{\rm bol}\le L_{\rm Edd},
$$

which implies

$$
\boxed{M\gtrsim50M_\odot}.
$$

This is a conditional lower bound rather than a direct mass measurement. Anisotropic emission, super-Eddington accretion, or a different effective opacity could alter the inference.

---

## 8. Key English terminology

| English | Term (translated from Chinese) | Symbol or reminder |
|---|---|---|
| electromagnetic spectrum | Electromagnetic spectrum | Radio to gamma rays |
| wavelength | Wavelength | $\lambda$ |
| frequency | Frequency | $\nu$ |
| luminosity | Luminosity | $L$, total radiated energy per second |
| bolometric luminosity | Bolometric luminosity | $L_{\rm bol}$, all bands |
| radiative flux | Radiative flux | $F_\nu,F$ |
| specific intensity / brightness | Specific intensity / brightness | $I_\nu$ |
| mean intensity | Mean specific intensity | $J_\nu$ |
| radiation energy density | Radiation energy density | $u_\nu,u$ |
| radiation pressure | Radiation pressure | $P_\nu,P$ |
| solid angle | Solid angle | $\Omega$, in sr |
| steradian | Steradian | sr |
| surface normal | Surface normal | Reference direction for projections |
| projected area | Projected area | $A\cos\theta$ |
| isotropic / anisotropic | Isotropic / anisotropic | Whether a preferred direction exists |
| line of sight | Line of sight | Path along the observing direction |
| radiative transfer | Radiative transfer | Propagation of light interacting with matter |
| emission coefficient | Emission coefficient | $j_\nu$ |
| absorption coefficient | Absorption coefficient | $\alpha_\nu$, in $\mathrm{cm^{-1}}$ |
| cross section | Cross section | $\sigma_\nu$ |
| opacity / mass absorption coefficient | Opacity / mass absorption coefficient | $\kappa_\nu$, in $\mathrm{cm^2\,g^{-1}}$ |
| optical depth | Optical depth | $\tau_\nu$ |
| optically thin / thick | Optically thin / optically thick | $\tau\ll1$ / $\tau\gg1$ |
| source function | Source function | $S_\nu=j_\nu/\alpha_\nu$ |
| mean free path | Mean free path | $\ell_{\rm mfp}=1/\alpha_\nu$ |
| attenuation | Attenuation | Often exponential |
| photoionization | Photoionization | Problem 1.2 |
| resolved / unresolved | Resolved / unresolved | Problem 1.3 |
| beam dilution | Beam dilution | Source flux averaged over a larger field |
| terminal velocity | Terminal velocity | Here, the asymptotic speed at infinity |
| Thomson scattering | Thomson scattering | $\sigma_T$ |
| electron-scattering opacity | Electron-scattering opacity | $\kappa_{\rm es}$ |
| Eddington luminosity / limit | Eddington luminosity / limit | Radiation driving balances gravity |
| ultra-luminous X-ray source | Ultraluminous X-ray source | ULX |
| isotropic-equivalent luminosity | Isotropic-equivalent luminosity | $4\pi d^2f$ |
| lower bound | Lower limit | For example, $M\gtrsim50M_\odot$ |

Common instruction words in problems:

- **show that**: establish the stated result;
- **derive**: obtain a result from underlying relations;
- **estimate**: calculate an approximate value;
- **assume**: adopt a stated premise;
- **neglect**: omit an effect;
- **infer**: draw a conclusion from the results;
- **starting from rest**: with zero initial velocity.

---

## 9. Final checklist

After studying this material, you should be able to answer:

1. Why does $I_\nu$ depend on direction without being a vector?
2. Why is $J_\nu$ a directional average without requiring isotropy?
3. Why is $u_\nu=4\pi J_\nu/c$ correct, rather than generally writing $4\pi I_\nu/c$?
4. Where do the single $\cos\theta$ in flux and the two factors $\cos\theta$ in pressure come from?
5. Why is specific intensity conserved in free space while total flux can decrease as $r^{-2}$?
6. What do $\alpha_\nu$, $\kappa_\nu$, $\tau_\nu$, and $S_\nu$ describe?
7. Why does the transfer-equation solution contain both transmitted background and medium-emission terms?
8. Why is the central intensity in Problem 1.3 independent of distance, while the unresolved field-averaged intensity contains $d^{-2}$?
9. Which physical assumptions underlie the Eddington limit, and why is the M82 X-1 mass conclusion only a conditional lower bound?
