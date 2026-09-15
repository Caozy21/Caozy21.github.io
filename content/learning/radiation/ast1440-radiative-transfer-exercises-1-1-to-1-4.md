---
title: "AST1440 辐射转移基础与习题 1.1–1.4 总结"
description: "辐射转移基础、Rybicki & Lightman §1.1–§1.4 与习题 1.1–1.4 的概念、推导和总结。"
tags: ["AST1440","Radiative transfer","Exercises"]
order: 1
---

# AST1440 辐射转移基础与习题 1.1–1.4 总结

> **课程范围**：Rybicki & Lightman, *Radiative Processes in Astrophysics*, §1.1–§1.4 及 Problems 1.1–1.4；另含 M82 X-1 延伸题。  
> **课程网页**：<https://www.astro.utoronto.ca/~mhvk/AST1440/>  
> **教材参考**：Rybicki & Lightman, *Radiative Processes in Astrophysics*（2004）。

本文先用中文详细解释物理概念和推导，最后给出可用于作业的英文答案。

---

## 0. 本章的逻辑主线

这一章从“怎样描述光”开始，逐步建立辐射转移理论：

1. **§1.1**：用波长、频率、光子能量和对应温标描述电磁辐射。
2. **§1.2**：用通量描述单位面积、单位时间内的净能量输运，并推导平方反比定律。
3. **§1.3**：用比强度保留辐射的方向信息，再由它计算平均强度、能量密度、通量和辐射压力。
4. **§1.4**：研究物质怎样通过发射和吸收改变比强度；引入吸收系数、光学深度、源函数和平均自由程；最后研究辐射怎样对物质施加力。

贯穿全章的核心关系是

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

## 1. §1.1 电磁波谱与辐射的基本性质

### 1.1 波长与频率

真空中的电磁波满足

$$
\boxed{\lambda\nu=c},
$$

其中：

- $\lambda$：波长（wavelength）；
- $\nu$：频率（frequency），单位 Hz；
- $c$：真空光速，约 $3.00\times10^{10}\ \mathrm{cm\,s^{-1}}$。

因此波长越短，频率越高。电磁波谱从低频、长波长到高频、短波长依次为：

$$
\text{radio}\rightarrow\text{infrared}\rightarrow\text{visible}
\rightarrow\text{ultraviolet}\rightarrow\text{X-ray}\rightarrow\gamma\text{-ray}.
$$

### 1.2 光子能量

单个光子的能量为

$$
\boxed{E_\gamma=h\nu=\frac{hc}{\lambda}}.
$$

所以短波长光子的单光子能量更高。需要注意：这说的是**每个光子的能量**；一束光的总能量还取决于光子数。

教材还定义对应温标

$$
\boxed{T_{\rm equivalent}=\frac{E}{k}},
$$

方便把光子能量与热能尺度 $kT$ 比较。这个温标不等于发光物体一定具有该实际温度。

---

## 2. §1.2 辐射通量

### 2.1 通量的定义

若在时间 $dt$ 内有能量 $dE$ 穿过面积 $dA$，通量定义为

$$
\boxed{dE=F\,dA\,dt},
\qquad
\boxed{F=\frac{dE}{dA\,dt}}.
$$

其常用单位为

$$
[F]=\mathrm{erg\,cm^{-2}\,s^{-1}}.
$$

通量描述的是**单位面积、单位时间的净能量输运**。它依赖所选面积的朝向；斜着穿过表面的光，只贡献其传播方向在表面法线方向上的分量。

### 2.2 平方反比定律

设一个各向同性源的光度为 $L$。在距离 $r$ 处，能量铺在面积为 $4\pi r^2$ 的球面上，因此

$$
\boxed{F(r)=\frac{L}{4\pi r^2}}.
$$

于是

$$
F\propto r^{-2}.
$$

距离加倍，球面面积变为四倍，单位面积收到的能量变为四分之一。光并不是在自由空间中自动损失了能量，而是相同的总功率分布在更大的面积上。

---

## 3. §1.3 比强度及其矩

### 3.1 为什么只有通量还不够

两束同样强、方向相反的光可以有零净通量；完全没有光时，净通量也为零。因此，仅凭 $F_\nu$ 无法判断当地到底有没有辐射能量。

我们需要保留方向信息的量：

$$
\boxed{I_\nu(\boldsymbol r,\hat{\boldsymbol n})}.
$$

$I_\nu$ 是**随方向变化的标量**，不是矢量：

- $\hat{\boldsymbol n}$ 是输入的传播方向，是单位矢量；
- $I_\nu(\hat{\boldsymbol n})$ 是选定方向后得到的辐射强弱，是一个非负标量。

这类似于“沿不同方向测得的距离”：距离依赖方向，但距离本身不是矢量。

### 3.2 比强度的定义

对于垂直于光线的小面积 $dA$，在时间 $dt$、频率范围 $d\nu$、方向范围 $d\Omega$ 内通过的能量为

$$
\boxed{dE=I_\nu\,dA\,dt\,d\Omega\,d\nu}.
$$

如果面积法线与光线夹角为 $\theta$，有效投影面积为 $dA\cos\theta$，因此

$$
dE=I_\nu\cos\theta\,dA\,dt\,d\Omega\,d\nu.
$$

单位为

$$
[I_\nu]=\mathrm{erg\,cm^{-2}\,s^{-1}\,sr^{-1}\,Hz^{-1}}.
$$

### 3.3 立体角

普通平面角用圆弧长度除以半径：

$$
\theta=\frac{\ell}{r}.
$$

立体角是其三维推广。以观察点为球心画一个虚构球面；一束方向在球面上圈出面积 $A_{\rm sphere}$，则

$$
\boxed{\Omega=\frac{A_{\rm sphere}}{r^2}}.
$$

完整球面的立体角是

$$
\boxed{4\pi\ \mathrm{sr}},
$$

半球是 $2\pi\ \mathrm{sr}$。立体角表示一片方向范围，不是物体的实际面积，也不表示光的强弱。

球坐标中

$$
\boxed{d\Omega=\sin\theta\,d\theta\,d\phi}.
$$

因为球面小面积为

$$
dA_{\rm sphere}=(r\,d\theta)(r\sin\theta\,d\phi)
=r^2\sin\theta\,d\theta\,d\phi.
$$

圆锥形方向范围的半张角若为 $\alpha$，则

$$
\Omega=2\pi\int_0^\alpha\sin\theta\,d\theta
=\boxed{2\pi(1-\cos\alpha)}.
$$

小角度下，$\alpha\ll1$ 且用弧度表示时，

$$
\boxed{\Omega\simeq\pi\alpha^2}.
$$

对于距离为 $s$ 的真实小面积 $dA$，如果它的法线与视线夹角为 $\beta$，其立体角是

$$
\boxed{d\Omega=\frac{dA|\cos\beta|}{s^2}}.
$$

这里必须投影到垂直于**实际视线**的平面；立体角以观察点为中心，所以分母也是实际斜向距离 $s^2$。

### 3.4 平均比强度 $J_\nu$

平均比强度定义为

$$
\boxed{J_\nu=\frac{1}{4\pi}\int_{4\pi}I_\nu(\hat{\boldsymbol n})\,d\Omega}.
$$

这没有假设每个方向的 $I_\nu$ 一样。它只是“所有方向的总和除以总立体角”。就像班级平均分不意味着每个学生都取得平均分。

只有各向同性时，才有

$$
I_\nu(\hat{\boldsymbol n})=J_\nu
\quad\text{对所有方向成立}.
$$

### 3.5 能量密度与其中的 $c$

定义每单位立体角的方向能量密度为 $w_\nu(\hat{\boldsymbol n})$。在体积 $dV$ 内，某方向范围的能量为

$$
dE=w_\nu\,dV\,d\Omega\,d\nu.
$$

光在时间 $dt$ 内走过 $c\,dt$，所以垂直于光线、截面积为 $dA$ 的柱体体积为

$$
dV=dA\,c\,dt.
$$

比较

$$
dE=w_\nu dA\,c\,dt\,d\Omega\,d\nu
=I_\nu dA\,dt\,d\Omega\,d\nu,
$$

得到

$$
\boxed{w_\nu=\frac{I_\nu}{c}}.
$$

将所有方向的能量密度相加：

$$
\boxed{u_\nu=\int w_\nu\,d\Omega
=\frac{1}{c}\int I_\nu\,d\Omega
=\frac{4\pi J_\nu}{c}}.
$$

一般情况下正确的是 $u_\nu=4\pi J_\nu/c$。只有各向同性时，因为 $I_\nu=J_\nu$，才可写成

$$
u_\nu=\frac{4\pi I_\nu}{c}.
$$

立体角积分负责把各方向相加；除以 $c$ 负责把“每面积、每时间的能量流”转换成“每体积的能量”。

### 3.6 通量与比强度的关系

通量矢量为

$$
\boxed{\boldsymbol F_\nu=\int I_\nu(\hat{\boldsymbol n})
\hat{\boldsymbol n}\,d\Omega}.
$$

若只求在某个表面法线 $\hat{\boldsymbol m}$ 上的分量，则

$$
\boxed{F_\nu=\int I_\nu\cos\theta\,d\Omega},
\qquad
\cos\theta=\hat{\boldsymbol n}\cdot\hat{\boldsymbol m}.
$$

所有方向都参加积分，但其穿过所选表面的贡献按 $\cos\theta$ 加权：

- $\theta=0^\circ$：完全正向贡献；
- $\theta=60^\circ$：贡献一半；
- $\theta=90^\circ$：平行于表面，不穿过；
- $\theta>90^\circ$：反向穿过，贡献为负。

如果各向同性，相反方向的贡献抵消，所以 $F_\nu=0$，但 $u_\nu>0$。

### 3.7 辐射压力及两个余弦

压力定义为

$$
\boxed{P=\frac{\text{单位时间传给表面的法线动量}}{\text{面积}}}.
$$

对从方向 $\theta$ 到来的粒子：

1. 每秒穿过表面的粒子数率含 $\cos\theta$；
2. 每个粒子的法线动量 $p_\perp=p\cos\theta$ 又含一个 $\cos\theta$。

所以

$$
\boxed{P_\nu=\frac{1}{c}\int I_\nu\cos^2\theta\,d\Omega}.
$$

两个余弦并非重复计算：一个决定“每秒撞上多少粒子”，另一个决定“每次碰撞传递多少法线动量”。$1/c$ 来自光子的动量—能量关系

$$
p=\frac{E}{c}.
$$

压力不是能量与动量相乘；实际计算是

$$
\text{能量流}\times\frac{\text{法线动量}}{\text{能量}}
=\text{动量流}.
$$

各向同性时，若选 $z$ 方向为法线，$\cos\theta=n_z$。单位矢量满足

$$
n_x^2+n_y^2+n_z^2=1.
$$

各向同性使三个分量平方的平均值相等，所以

$$
\langle n_x^2\rangle=\langle n_y^2\rangle
=\langle n_z^2\rangle=\frac13.
$$

因此

$$
\boxed{P_\nu=\frac{u_\nu}{3}},
\qquad
\boxed{P=\frac{u}{3}}.
$$

这类似于没有净流动的气体仍然具有压力：相反方向的能量通量抵消，但粒子仍撞击不同的容器壁。

### 3.8 自由空间中的比强度保持不变

沿同一条光线选两个垂直于光线的小面积 $dA_1,dA_2$，距离为 $R$。只追踪同时穿过两者的同一束光。

从第一处看，第二个面积张开的立体角是

$$
d\Omega_1=\frac{dA_2}{R^2};
$$

从第二处向后看，第一面积张开的方向范围是

$$
d\Omega_2=\frac{dA_1}{R^2}.
$$

因此

$$
dA_1d\Omega_1=dA_2d\Omega_2
=\frac{dA_1dA_2}{R^2}.
$$

同一束光在两处的能量分别为

$$
dE_1=I_{\nu,1}dA_1dt\,d\Omega_1d\nu,
$$

$$
dE_2=I_{\nu,2}dA_2dt\,d\Omega_2d\nu.
$$

真空中没有发射、吸收或散射，能量守恒给出 $dE_1=dE_2$。消去共同的几何因子，得到

$$
\boxed{I_{\nu,1}=I_{\nu,2}},
\qquad
\boxed{\frac{dI_\nu}{ds}=0}.
$$

若辐射随时间变化，应比较同一批光到达两点的时刻：

$$
I_\nu(P_2,t+R/c)=I_\nu(P_1,t).
$$

### 3.9 角半径与均匀明亮球体

球体实际半径为 $R$，观察者距球心为 $r$。从观察者看向球体边缘的视线与球体相切。球心方向和边缘方向之间的夹角称为角半径 $\theta_c$：

$$
\boxed{\sin\theta_c=\frac{R}{r}}.
$$

远距离小角度下，$\theta_c\simeq R/r$。角直径为 $2\theta_c$。

若球体在投影圆盘内具有均匀比强度 $B_\nu$，圆盘外为零，则

$$
F_\nu
=2\pi B_\nu\int_0^{\theta_c}\cos\theta\sin\theta\,d\theta
=\pi B_\nu\sin^2\theta_c.
$$

代入 $\sin\theta_c=R/r$：

$$
\boxed{F_\nu=\pi B_\nu\left(\frac{R}{r}\right)^2}.
$$

这个例子证明：比强度 $B_\nu$ 沿光线不变，但源在天空中占据的立体角按 $r^{-2}$ 缩小，所以总通量仍按 $r^{-2}$ 衰减。

---

## 4. §1.4 辐射转移

### 4.1 发射系数

发射系数 $j_\nu$ 定义为

$$
dE=j_\nu\,dV\,d\Omega\,dt\,d\nu.
$$

光束走过 $ds$，经过体积 $dV=dA\,ds$，因此发射增加的比强度为

$$
\boxed{dI_\nu=j_\nu ds}.
$$

若发射各向同性，单位体积、单位频率的总发射功率 $P_\nu$ 与 $j_\nu$ 的关系是

$$
j_\nu=\frac{P_\nu}{4\pi}.
$$

### 4.2 吸收系数为何需要定义

吸收系数 $\alpha_\nu$ 用来描述当地“每单位路径长度损失多少比例的光”：

$$
\boxed{dI_\nu=-\alpha_\nu I_\nu ds},
\qquad
\boxed{-\frac{dI_\nu}{I_\nu}=\alpha_\nu ds}.
$$

单位为 $\mathrm{cm^{-1}}$。它乘以 $I_\nu$，因为通常被吸收的绝对光子数与入射光子数成正比。

微观上，若吸收粒子数密度为 $n$，单个粒子的有效截面为 $\sigma_\nu$，薄层内吸收比例为 $n\sigma_\nu ds$，所以

$$
\boxed{\alpha_\nu=n\sigma_\nu}.
$$

也可用质量密度 $\rho$ 和单位质量不透明度 $\kappa_\nu$ 表示：

$$
\boxed{\alpha_\nu=\rho\kappa_\nu}.
$$

- $\alpha_\nu$：absorption coefficient，单位 $\mathrm{cm^{-1}}$；
- $\kappa_\nu$：opacity 或 mass absorption coefficient，单位 $\mathrm{cm^2\,g^{-1}}$。

### 4.3 辐射转移方程

将吸收和发射相加：

$$
\boxed{\frac{dI_\nu}{ds}=-\alpha_\nu I_\nu+j_\nu}.
$$

只有发射时：

$$
I_{\nu,\rm out}=I_{\nu,\rm in}+\int j_\nu ds.
$$

只有吸收时：

$$
I_{\nu,\rm out}=I_{\nu,\rm in}
\exp\left(-\int\alpha_\nu ds\right).
$$

指数衰减的原因是每一层吸收的是到达该层的**剩余光的一定比例**。

### 4.4 光学深度

定义

$$
\boxed{d\tau_\nu=\alpha_\nu ds},
\qquad
\boxed{\tau_\nu=\int\alpha_\nu ds}.
$$

光学深度没有单位，衡量沿路径累计的衰减作用。纯吸收时

$$
\boxed{\frac{I_{\nu,\rm out}}{I_{\nu,\rm in}}=e^{-\tau_\nu}}.
$$

- $\tau_\nu\ll1$：optically thin，光学薄；
- $\tau_\nu\gg1$：optically thick，光学厚。

光学厚不等于几何厚：很薄但吸收能力强的物质也可以具有很大的 $\tau_\nu$。同一物质对不同频率也可有不同的光学深度。

### 4.5 源函数及转移方程的解

定义源函数

$$
\boxed{S_\nu=\frac{j_\nu}{\alpha_\nu}}.
$$

转移方程变为

$$
\boxed{\frac{dI_\nu}{d\tau_\nu}+I_\nu=S_\nu}.
$$

若 $S_\nu$ 恒定，两边乘以积分因子 $e^{\tau_\nu}$：

$$
\frac{d}{d\tau_\nu}\left(I_\nu e^{\tau_\nu}\right)
=S_\nu e^{\tau_\nu}.
$$

从入口 $0$ 积分到出口 $\tau_\nu$，得到

$$
\boxed{
I_{\nu,\rm out}
=I_{\nu,\rm in}e^{-\tau_\nu}
+S_\nu(1-e^{-\tau_\nu})
}.
$$

物理上：

- 第一项是入口背景光被吸收后剩下的部分；
- 第二项是物质沿途发射、又经过后续吸收后留下的部分。

如果 $S_\nu$ 随位置变化，正式解为

$$
\boxed{
I_\nu(\tau)
=I_\nu(0)e^{-\tau}
+\int_0^\tau S_\nu(t)e^{-(\tau-t)}\,dt
}.
$$

若 $\tau\gg1$，入口光消失，$I_\nu\rightarrow S_\nu$。源函数可以理解为介质让比强度趋向的当地平衡值。

### 4.6 平均自由程

均匀介质中，光子的平均自由程为

$$
\boxed{\ell_{\rm mfp}=\frac{1}{\alpha_\nu}}.
$$

因此

$$
\tau_\nu=\frac{\ell}{\ell_{\rm mfp}}.
$$

平均自由程是统计平均；$\tau=1$ 时仍有 $e^{-1}\simeq37\%$ 的直接透射光。

### 4.7 辐射力及其中的 $c$

光子的动量与能量关系是

$$
p=\frac{E}{c}.
$$

所以，把单位时间吸收的能量除以 $c$，就得到单位时间传递的动量，即力。单位体积受到的辐射力为

$$
\boxed{\boldsymbol f_{\rm vol}
=\frac{1}{c}\int\alpha_\nu\boldsymbol F_\nu\,d\nu}.
$$

除以质量密度并使用 $\alpha_\nu=\rho\kappa_\nu$：

$$
\boxed{\boldsymbol a_{\rm rad}
=\frac{1}{c}\int\kappa_\nu\boldsymbol F_\nu\,d\nu}.
$$

若 $\kappa$ 与频率无关，

$$
\boxed{\boldsymbol a_{\rm rad}=\frac{\kappa\boldsymbol F}{c}}.
$$

这里无需再对传播角度积分，因为 $\boldsymbol F$ 已经是完成方向积分后的净通量矢量。

---

## 5. Problems 1.1–1.4：中文推导

### Problem 1.1：小孔相机

小孔直径为 $d$，小孔平面到胶片平面的垂直距离为 $L$，焦比为 $f=L/d$。胶片点对应的光线与相机轴夹角为 $\theta$。

小孔中心到胶片点的实际斜向距离 $s$ 满足

$$
s=\frac{L}{\cos\theta}.
$$

小孔面积为

$$
A_h=\frac{\pi d^2}{4}.
$$

从胶片点看，小孔相对于实际视线倾斜，所以其投影面积为 $A_h\cos\theta$，所占立体角为

$$
\Delta\Omega_h\simeq\frac{A_h\cos\theta}{s^2}
=\frac{A_h}{L^2}\cos^3\theta.
$$

胶片面上的通量还需要一个接收面投影因子：

$$
F_\nu\simeq I_\nu(\theta,\phi)\cos\theta\,\Delta\Omega_h.
$$

因此

$$
\boxed{F_\nu
=\frac{\pi\cos^4\theta}{4f^2}I_\nu(\theta,\phi)}.
$$

四个余弦的来源是：胶片面投影一个、小孔面投影一个、斜向距离 $s=L/\cos\theta$ 的平方贡献两个。它们全部来自几何，不涉及动量或压力。

### Problem 1.2：光致电离

可电离原子数密度为 $n_a$，光致电离截面为 $\sigma_\nu$，阈值光子能量为 $h\nu_0$。光致电离吸收系数为

$$
\boxed{\alpha_\nu=n_a\sigma_\nu}.
$$

频率和方向范围内吸收的能量率为 $\alpha_\nu I_\nu\,d\Omega\,d\nu$。除以单个光子能量 $h\nu$，得到电离次数率：

$$
d\dot n_{\rm ion}
=\frac{\alpha_\nu I_\nu}{h\nu}\,d\Omega\,d\nu.
$$

对方向和高于阈值的频率积分：

$$
\dot n_{\rm ion}
=\int_{\nu_0}^{\infty}\int_{4\pi}
\frac{n_a\sigma_\nu I_\nu}{h\nu}\,d\Omega\,d\nu.
$$

利用 $\int I_\nu d\Omega=4\pi J_\nu=cu_\nu$：

$$
\boxed{
\dot n_{\rm ion}
=4\pi n_a\int_{\nu_0}^{\infty}
\frac{\sigma_\nu J_\nu}{h\nu}\,d\nu
=cn_a\int_{\nu_0}^{\infty}
\frac{\sigma_\nu u_\nu}{h\nu}\,d\nu
}.
$$

也可以从微观碰撞图像理解第二种形式：频率范围 $d\nu$ 内的光子数密度是 $u_\nu d\nu/(h\nu)$。一个原子的有效靶面积是 $\sigma_\nu$；在时间 $dt$ 内，以光速运动并能击中它的光子来自体积为 $\sigma_\nu cdt$ 的柱体。因此单原子电离率为 $c\sigma_\nu u_\nu d\nu/(h\nu)$，再乘原子数密度 $n_a$ 并积分，就得到上式。其中的 $c$ 来自光子的运动速度。

这里不能用净通量代替 $4\pi J_\nu$：相反方向的光子都会电离原子，即使净通量为零，电离率仍可非零。$4\pi$ 来自 $J_\nu$ 的定义，不要求实际辐射各向同性。

### Problem 1.3：已分辨和未分辨的 X 射线云

云半径为 $R$，距离为 $d$，单位体积、单位时间均匀产生 $\Gamma$ 个光子。假设各向同性发射并忽略吸收。每单位立体角的光子数发射系数为

$$
j_N=\frac{\Gamma}{4\pi}.
$$

#### (a) 已分辨的中心强度

中心视线穿过长度 $2R$，所以

$$
\boxed{\mathcal I_{\rm center}
=\int j_N ds
=\frac{\Gamma R}{2\pi}}.
$$

它不含距离，因为自由空间中比强度沿光线保持不变。若冲击参数为 $b$，一般的亮度分布是

$$
\mathcal I(b)=\frac{\Gamma}{2\pi}\sqrt{R^2-b^2}.
$$

所以均匀的体积发射率产生中心亮、边缘暗的投影图像。

也可以用体积方法，但必须使用中心视线对应的细柱体，而不是整个云。若一个像素占据 $\delta\Omega$，柱体体积近似为 $2R d^2\delta\Omega$，再计算其中有多少各向同性发射的光子击中探测器，会得到同一结果。

#### (b) 未分辨的视场平均强度

云的总光子数光度为

$$
\dot N_\gamma=\Gamma\frac{4\pi R^3}{3}.
$$

地球处的光子数通量为

$$
\Phi_N=\frac{\dot N_\gamma}{4\pi d^2}
=\frac{\Gamma R^3}{3d^2}.
$$

探测器接受半张角为 $\Delta\theta$，小角度下

$$
\Delta\Omega_{\rm det}\simeq\pi(\Delta\theta)^2.
$$

因此视场平均强度为

$$
\boxed{
\overline{\mathcal I}_{\rm beam}
=\frac{\Phi_N}{\Delta\Omega_{\rm det}}
=\frac{\Gamma R^3}{3d^2\Delta\Omega_{\rm det}}
\simeq\frac{\Gamma R^3}{3\pi d^2(\Delta\theta)^2}
}.
$$

有效面积 $\Delta A$ 在把计数率转换回“每单位面积的强度”时消掉。这里的平均只针对探测器视场，不是对全空间 $4\pi$ 取平均的 $J_\nu$。

若用整个云的总体积再除以源自身立体角 $\Omega_{\rm src}\simeq\pi R^2/d^2$，得到的是圆盘平均强度

$$
\overline{\mathcal I}_{\rm src}=\frac{\Gamma R}{3\pi},
$$

不是中心强度 $\Gamma R/(2\pi)$。

### Problem 1.4：辐射推动与 Eddington 极限

设中心源质量为 $M$、光度为 $L$，一团质量为 $m$ 的光学薄云位于距离 $r$ 处，单位质量不透明度为 $\kappa$。

#### (a) 向外加速条件

当地通量为

$$
F(r)=\frac{L}{4\pi r^2}.
$$

若云迎光横截面积为 $A$，其单位面积质量为 $m/A$，光学深度是

$$
\tau=\kappa\frac{m}{A}\ll1.
$$

每秒照到云上的能量为 $FA$，光学薄时吸收或有效传递动量的比例近似为 $\tau$，所以

$$
\dot E_{\rm int}\simeq FA\tau=\kappa mF.
$$

用 $p=E/c$ 把能量传递率换成动量传递率：

$$
\mathcal F_{\rm rad}=\frac{\kappa mF}{c},
\qquad
a_{\rm rad}=\frac{\mathcal F_{\rm rad}}{m}=\frac{\kappa F}{c}.
$$

辐射加速度和引力加速度分别为

$$
a_{\rm rad}=\frac{\kappa F}{c}
=\frac{\kappa L}{4\pi r^2c},
\qquad
a_{\rm grav}=\frac{GM}{r^2}.
$$

要求 $a_{\rm rad}>a_{\rm grav}$，得到

$$
\boxed{\frac{M}{L}<\frac{\kappa}{4\pi Gc}}.
$$

两种加速度都随 $r^{-2}$ 变化，所以二者比值与距离无关。

#### (b) 从初始距离 $R$ 静止出发的终端速度

净向外加速度为

$$
a(r)=\frac1{r^2}
\left(\frac{\kappa L}{4\pi c}-GM\right).
$$

使用单位质量的功—能关系，从 $R$ 积分到无穷远：

$$
\frac12v_\infty^2
=\int_R^\infty a(r)dr
=\frac1R\left(\frac{\kappa L}{4\pi c}-GM\right).
$$

所以

$$
\boxed{
v_\infty^2
=\frac{2GM}{R}
\left(\frac{\kappa L}{4\pi GMc}-1\right)
}.
$$

括号内为正的条件正是 (a) 的向外驱动条件。本题的 terminal velocity 指 $r\rightarrow\infty$ 时的渐近速度。

#### (c) 完全电离纯氢的 Eddington 光度

每个氢质量 $m_H$ 对应一个自由电子，所以 Thomson 散射不透明度为

$$
\kappa_{\rm es}=\frac{\sigma_T}{m_H}
\simeq0.40\ \mathrm{cm^2\,g^{-1}}.
$$

令辐射加速度与引力加速度相等：

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

更一般地，$L_{\rm Edd}=4\pi GMc/\kappa$。Eddington 极限不是唯一固定数值，而取决于被辐射推动物质的有效不透明度：$\kappa$ 越大，辐射推动越强，临界光度越低。

---

## 6. M82 X-1 延伸题

### 6.1 题目翻译

原文：

> The ULX (Ultra-Luminous X-ray source) M82 X-1 was observed to have an X-ray flux $f_X=4\times10^{-12}\ \mathrm{erg\,cm^{-2}\,s^{-1}}$. Estimate its luminosity, given that M82 is at $d\approx3.6\ \mathrm{Mpc}$. What could you say about its mass?

中文：

超亮 X 射线源 M82 X-1 的观测 X 射线通量为

$$
f_X=4\times10^{-12}\ \mathrm{erg\,cm^{-2}\,s^{-1}}.
$$

已知 M82 距离约为 $d=3.6\ \mathrm{Mpc}$，估算该源的光度，并讨论可以对其质量作出什么判断。

### 6.2 X 射线光度

$$
d=3.6\times10^6\times3.086\times10^{18}
\simeq1.11\times10^{25}\ \mathrm{cm}.
$$

假设各向同性发射：

$$
\boxed{
L_{X,\rm iso}=4\pi d^2f_X
\simeq6.2\times10^{39}\ \mathrm{erg\,s^{-1}}
}.
$$

这个量严格说是各向同性等效 X 射线光度。

### 6.3 $L_X$、$L_{\rm bol}$ 与质量限制

Bolometric luminosity 是所有波段加起来的总电磁辐射光度：

$$
L_{\rm bol}=\int_0^\infty L_\nu d\nu.
$$

X 射线只是其中一个波段，因此

$$
L_X\le L_{\rm bol}.
$$

如果进一步假设发射各向同性，而且总光度不超过完全电离纯氢的经典 Eddington 极限：

$$
L_{\rm bol}\le L_{\rm Edd},
$$

就有

$$
L_X\le1.25\times10^{38}\left(\frac{M}{M_\odot}\right).
$$

因此

$$
\boxed{M\gtrsim50M_\odot}.
$$

这是有条件的质量下限，不是直接质量测量。经典推断依赖：

- 观测光度的各向同性换算；
- 中心源附近局部通量也近似球对称；
- 被照射气体光学薄；
- 使用标准的有效散射截面和不透明度；
- 总光度不超过经典 Eddington 极限。

强磁场可改变有效散射截面，辐射也可能具有方向性或处于超 Eddington 吸积状态，因此实际质量不能只由这一个数字确定。

### 6.4 不同气体成分的 Eddington 极限

对于完全电离、氢质量分数为 $X_H$ 的物质，电子散射不透明度近似为

$$
\kappa_{\rm es}\simeq0.20(1+X_H)\ \mathrm{cm^2\,g^{-1}}.
$$

| 成分 | $\kappa_{\rm es}$ | $L_{\rm Edd}/(M/M_\odot)$ |
|---|---:|---:|
| 纯氢，$X_H=1$ | $0.40\ \mathrm{cm^2\,g^{-1}}$ | $1.25\times10^{38}\ \mathrm{erg\,s^{-1}}$ |
| 近似太阳混合物，$X_H\simeq0.7$ | $0.34\ \mathrm{cm^2\,g^{-1}}$ | $1.47\times10^{38}\ \mathrm{erg\,s^{-1}}$ |
| 纯氦，$X_H=0$ | $0.20\ \mathrm{cm^2\,g^{-1}}$ | $2.50\times10^{38}\ \mathrm{erg\,s^{-1}}$ |

这些不是不同的基本定律，而是同一个公式 $L_{\rm Edd}=4\pi GMc/\kappa$ 在不同不透明度下的结果。

---

## 7. 英文作业答案

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

## 8. 核心英文术语

| English | 中文 | 符号或提示 |
|---|---|---|
| electromagnetic spectrum | 电磁波谱 | radio 到 gamma ray |
| wavelength | 波长 | $\lambda$ |
| frequency | 频率 | $\nu$ |
| luminosity | 光度 | $L$，每秒总辐射能量 |
| bolometric luminosity | 总辐射光度 | $L_{\rm bol}$，所有波段 |
| radiative flux | 辐射通量 | $F_\nu,F$ |
| specific intensity / brightness | 比强度／亮度 | $I_\nu$ |
| mean intensity | 平均比强度 | $J_\nu$ |
| radiation energy density | 辐射能量密度 | $u_\nu,u$ |
| radiation pressure | 辐射压力 | $P_\nu,P$ |
| solid angle | 立体角 | $\Omega$，单位 sr |
| steradian | 球面度 | sr |
| surface normal | 表面法线 | 计算投影的参考方向 |
| projected area | 投影面积 | $A\cos\theta$ |
| isotropic / anisotropic | 各向同性／各向异性 | 是否有偏好方向 |
| line of sight | 视线 | 沿观察方向的路径 |
| radiative transfer | 辐射转移 | 光与物质作用后的传播 |
| emission coefficient | 发射系数 | $j_\nu$ |
| absorption coefficient | 吸收系数 | $\alpha_\nu$，单位 $\mathrm{cm^{-1}}$ |
| cross section | 截面 | $\sigma_\nu$ |
| opacity / mass absorption coefficient | 不透明度／质量吸收系数 | $\kappa_\nu$，单位 $\mathrm{cm^2\,g^{-1}}$ |
| optical depth | 光学深度 | $\tau_\nu$ |
| optically thin / thick | 光学薄／光学厚 | $\tau\ll1$ / $\tau\gg1$ |
| source function | 源函数 | $S_\nu=j_\nu/\alpha_\nu$ |
| mean free path | 平均自由程 | $\ell_{\rm mfp}=1/\alpha_\nu$ |
| attenuation | 衰减 | 常为指数衰减 |
| photoionization | 光致电离 | Problem 1.2 |
| resolved / unresolved | 已分辨／未分辨 | Problem 1.3 |
| beam dilution | 波束稀释 | 源通量被平均到更大视场 |
| terminal velocity | 终端速度 | 本题中为无穷远渐近速度 |
| Thomson scattering | Thomson 散射 | $\sigma_T$ |
| electron-scattering opacity | 电子散射不透明度 | $\kappa_{\rm es}$ |
| Eddington luminosity / limit | Eddington 光度／极限 | 辐射推动与引力平衡 |
| ultra-luminous X-ray source | 超亮 X 射线源 | ULX |
| isotropic-equivalent luminosity | 各向同性等效光度 | $4\pi d^2f$ |
| lower bound | 下限 | 如 $M\gtrsim50M_\odot$ |

常见题目动作词：

- **show that**：证明；
- **derive**：推导；
- **estimate**：估算；
- **assume**：假设；
- **neglect**：忽略；
- **infer**：根据结果作出推断；
- **starting from rest**：从静止开始。

---

## 9. 最后检查清单

完成这部分学习后，应当能够回答：

1. 为什么 $I_\nu$ 依赖方向但不是矢量？
2. 为什么 $J_\nu$ 是方向平均，却不要求各向同性？
3. 为什么 $u_\nu=4\pi J_\nu/c$，而不是一般地写成 $4\pi I_\nu/c$？
4. 通量中的一个 $\cos\theta$ 和压力中的两个 $\cos\theta$ 分别从哪里来？
5. 为什么自由空间中的比强度不变，而总通量可以按 $r^{-2}$ 衰减？
6. $\alpha_\nu$、$\kappa_\nu$、$\tau_\nu$ 和 $S_\nu$ 分别描述什么？
7. 为什么转移方程的解包含背景透射项和介质发射项？
8. 为什么 Problem 1.3 的中心强度不含距离，而未分辨视场平均强度含 $d^{-2}$？
9. Eddington 极限依赖哪些物理假设，为什么 M82 X-1 的质量结论只是有条件下限？
