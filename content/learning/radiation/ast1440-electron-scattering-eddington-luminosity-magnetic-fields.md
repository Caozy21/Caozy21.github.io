---
title: "AST1440：电子散射、爱丁顿光度与强磁场"
description: "电子散射与 Thomson 截面的推导、辐射力与爱丁顿光度，以及强磁场、几何束射和吸积柱的修正。"
date: "2026-09-14"
tags: ["AST1440","Electron scattering","Eddington luminosity"]
order: 2
---

# AST1440：电子散射、爱丁顿光度与强磁场

> 对应课程：2026 年 9 月 14 日，周一。  
> 整理方式：以课程主题为主线，将概念追问、公式推导、直观解释与计算易错点融入相应位置。  
> 课程网站：[AST1440 — Radiation](https://www.astro.utoronto.ca/~mhvk/AST1440/)。网页会更新；本笔记采用此前已核对的 2026 年安排。最初误读的 2025 年热辐射课程安排不作为本节内容。

## 1. 本节课的主线与阅读范围

本节的核心问题是：**为什么光会推物质？为什么这会限制天体光度？强磁场又怎样改变这个限制？**

物理逻辑是：

$$
\text{光驱动电子加速}
\longrightarrow\text{电子散射光并交换动量}
\longrightarrow\text{辐射力与引力竞争}
\longrightarrow L_{\rm Edd}
\longrightarrow\text{强磁场、非球对称几何带来的修正}.
$$

课程阅读为 Rybicki & Lightman（简称 RL）§1.1–1.4，课堂讨论重点是习题 1.4 及其 ULX 延伸。电子散射的补充参考为 Padmanabhan（简称 Pad）§1.4.4、§6.4，或 RL §3.4、§3.6。与热辐射相关的 2026 年 9 月 17 日内容不混入本笔记。

本笔记中的详细推导用于补足理解，不表示网站逐项记录了全部推导过程。

## 2. 符号与单位制：先把容易混淆的量分开

| 符号 | 含义 |
|---|---|
| $e>0$ | 电子电荷量的绝对值；电子的电荷为 $-e$ |
| $m_e,m_p$ | 电子质量、质子质量 |
| $E_0$ | 波电场的峰值振幅，不是均方根值 |
| $\mathbf B_0$ | 外加或背景磁场，与光波自身的磁场区分 |
| $P_{\rm sc}$ | 单个粒子向所有方向散射的总功率 |
| $F$ | 当地能量通量，单位为 ${\rm erg\,cm^{-2}\,s^{-1}}$ |
| $f_{\rm obs}$ | 观测者测得的能量通量 |
| $L$ | 总光度，单位为 ${\rm erg\,s^{-1}}$ |
| $\sigma$ | 单个粒子的散射截面，单位为 ${\rm cm^2}$ |
| $\kappa$ | 单位质量的不透明度，单位为 ${\rm cm^2\,g^{-1}}$ |
| $\rho$ | 物质质量密度 |
| $g_{\rm rad}$ | 辐射加速度，即单位质量受到的辐射力 |
| $\omega,\omega_B$ | 光波角频率、电子回旋角频率 |

除明确标注 SI 的地方外，以下统一使用 **Gaussian-cgs 单位制**。

### 2.1 为什么洛伦兹力的磁场项要除以 $c$？

两种单位制写法不同：

$$
\begin{aligned}
\text{Gaussian-cgs：}\quad
\mathbf F&=q\left(\mathbf E+\frac{\mathbf v\times\mathbf B}{c}\right),\\
\text{SI：}\quad
\mathbf F&=q(\mathbf E+\mathbf v\times\mathbf B).
\end{aligned}
$$

这是单位定义不同，不是物理定律不同。在 Gaussian-cgs 中，$E$ 与 $B$ 量纲相同，因此需要无量纲的 $v/c$，使括号内两项可以相加。在 SI 中，$vB$ 本来就与 $E$ 量纲相同：

$$
[vB]=\frac{\rm m}{\rm s}\frac{{\rm V\,s}}{{\rm m^2}}={\rm V/m}=[E].
$$

真空平面波满足：

$$
E=B\quad\text{（cgs）},\qquad E=cB\quad\text{（SI）}.
$$

因此，对波自身的电场力、磁场力作数量级比较，两种单位制均得到

$$
\frac{F_B}{F_E}\sim\frac vc.
$$

非相对论电子受到的**波自身磁场力**可以作为高阶项忽略，但不能据此忽略独立存在的强背景磁场 $\mathbf B_0$。

### 2.2 常用公式的单位制对照

| 物理量 | Gaussian-cgs | SI |
|---|---|---|
| Poynting 向量 | $\mathbf S=c\mathbf E\times\mathbf B/(4\pi)$ | $\mathbf S=\mathbf E\times\mathbf B/\mu_0$ |
| 磁能密度 | $u_B=B^2/(8\pi)$ | $u_B=B^2/(2\mu_0)$ |
| 电子回旋角频率 | $\omega_B=eB/(m_ec)$ | $\omega_B=eB/m_e$ |
| Larmor 功率 | $P=2q^2a^2/(3c^3)$ | $P=q^2a^2/(6\pi\varepsilon_0c^3)$ |
| 经典电子半径 | $r_e=e^2/(m_ec^2)$ | $r_e=e^2/(4\pi\varepsilon_0m_ec^2)$ |

同一个物理量使用各自单位制中的数值计算，结果一致。不要把以高斯为单位的 $B$ 直接代入 SI 公式。

## 3. 入射光的平均能量通量怎么计算？

### 3.1 从 Poynting 向量出发

考虑沿 $+z$ 方向传播的真空平面波：

$$
\mathbf E=E_0\cos(kz-\omega t)\,\hat{\mathbf x},\qquad
\mathbf B=E_0\cos(kz-\omega t)\,\hat{\mathbf y}.
$$

电场和磁场相互垂直、同相，在 cgs 中大小相等。Poynting 向量表示单位面积、单位时间通过的电磁能量：

$$
\mathbf S=\frac{c}{4\pi}\mathbf E\times\mathbf B
=\frac{cE_0^2}{4\pi}\cos^2(kz-\omega t)\,\hat{\mathbf z}.
$$

对垂直于传播方向的面积，瞬时通量为

$$
F(t)=\frac{cE_0^2}{4\pi}\cos^2(kz-\omega t).
$$

因为

$$
\cos^2x=\frac{1+\cos2x}{2},\qquad
\langle\cos^2\omega t\rangle=\frac12,
$$

周期平均通量为

$$
\boxed{\langle F\rangle=\frac{cE_0^2}{8\pi}}.
$$

**这里的 $1/2$ 来自时间平均。**若使用 $E_{\rm rms}=E_0/\sqrt2$，则应写成

$$
\langle F\rangle=\frac{cE_{\rm rms}^2}{4\pi}.
$$

SI 中对应结果是 $\langle F\rangle=\varepsilon_0cE_0^2/2$。

### 3.2 从“能量密度乘传播速度”理解

电磁能量密度为

$$
u=\frac{E^2+B^2}{8\pi}=\frac{E^2}{4\pi},
\qquad \langle u\rangle=\frac{E_0^2}{8\pi}.
$$

在 $dt$ 内，面积 $A$ 前方长度为 $c\,dt$ 的波通过该面积，对应体积 $Ac\,dt$。因此

$$
\langle F\rangle
=\frac{\langle u\rangle Ac\,dt}{A\,dt}
=c\langle u\rangle
=\frac{cE_0^2}{8\pi}.
$$

## 4. 加速电荷为什么辐射？Larmor 公式怎样得到？

### 4.1 从远处辐射场开始

非相对论加速电荷的远处辐射电场为

$$
\mathbf E_{\rm rad}
=\frac{q}{c^2r}
\left[\hat{\mathbf n}\times(\hat{\mathbf n}\times\mathbf a)\right]_{\rm ret}.
$$

这是麦克斯韦方程或延迟势给出的结果，可作为本节推导的电动力学起点。$\hat{\mathbf n}$ 是指向观测点的方向，下标“ret”表示采用延迟时刻的加速度。

若观察方向与加速度之间的夹角为 $\theta$，则

$$
E_{\rm rad}=\frac{|q|a\sin\theta}{c^2r}.
$$

辐射场按 $1/r$ 衰减，与按 $1/r^2$ 衰减的库仑场不同。它能在很远处维持有限的总向外功率。

### 4.2 从辐射场算每个方向的功率

远处辐射场满足 $\mathbf B_{\rm rad}=\hat{\mathbf n}\times\mathbf E_{\rm rad}$，所以

$$
S=\frac{c}{4\pi}E_{\rm rad}^2
=\frac{q^2a^2\sin^2\theta}{4\pi c^3r^2}.
$$

球面面积元为 $dA=r^2d\Omega$，穿过它的功率为

$$
dP=S\,dA,
\qquad
\frac{dP}{d\Omega}=\frac{q^2a^2}{4\pi c^3}\sin^2\theta.
$$

因此，沿加速度方向没有辐射，垂直于加速度的方向最强。

### 4.3 对整个球面积分

$$
\begin{aligned}
P&=\frac{q^2a^2}{4\pi c^3}\int\sin^2\theta\,d\Omega,\\
\int\sin^2\theta\,d\Omega
&=\int_0^{2\pi}d\phi\int_0^\pi\sin^3\theta\,d\theta
=2\pi\times\frac43=\frac{8\pi}{3}.
\end{aligned}
$$

于是得到

$$
\boxed{P=\frac{2q^2a^2}{3c^3}}.
$$

**系数 $2/3$ 来自辐射方向分布的球面积分。**公式表示电荷在相应发射时刻的瞬时总功率，并不是自动做过周期平均的结果。

若 $a(t)=a_0\cos\omega t$，才进一步有

$$
\boxed{\langle P\rangle=\frac{2q^2}{3c^3}\langle a^2\rangle
=\frac{q^2a_0^2}{3c^3}}.
$$

适用范围是非相对论运动；接近光速时不能直接使用这一形式。

## 5. 散射截面的定义、Thomson 推导与经典电子半径

### 5.1 散射截面是什么？用“雨中接水”理解

把入射光想成雨，把目标对光的作用想成接水：

$$
\text{每秒接到的水量}
=\text{降雨强度}\times\text{桶口面积}.
$$

对应到散射：

$$
\text{总散射功率}
=\text{入射能量通量}\times\text{散射截面}.
$$

因此定义

$$
\boxed{\sigma=\frac{\langle P_{\rm sc}\rangle}{\langle F_{\rm inc}\rangle}}.
$$

例如，入射通量是 $100\ {\rm W\,m^{-2}}$，某目标总共散射 $2\ {\rm W}$，它的散射截面就是 $0.02\ {\rm m^2}$。意思是：该目标散射的功率，相当于入射光穿过这么大面积时携带的功率。

**这是根据相互作用效果定义的有效面积，不一定是目标真实的几何面积。**不能把它理解为一个边界清晰的圆，光进入圆内就散射、圆外就完全无影响。

对于电子，光的电场驱动它振动，它再向外辐射。在相同入射光下，再辐射越强，截面越大。磁场使某些响应变弱时，截面会变小，但电子本身没有缩小。

量纲检查：

$$
[\sigma]=\frac{{\rm erg\,s^{-1}}}{{\rm erg\,cm^{-2}\,s^{-1}}}={\rm cm^2}.
$$

### 5.2 Thomson 极限的条件

- **自由电子：**没有束缚带来的回复力。
- **非相对论响应：**电子速度远小于 $c$；波场不能强到使受迫运动相对论化。
- **低光子能量：**在电子初始静止系中，$h\nu\ll m_ec^2\simeq511\ {\rm keV}$，反冲引起的能量变化可以忽略。
- **普通、未磁化的响应：**没有需要保留的强背景磁场影响。

在这些条件下，可以把电子看作被入射波驱动的经典电荷。

### 5.3 第一步：电场驱动电子

在电子处写入射电场为

$$
\mathbf E(t)=E_0\cos\omega t\,\hat{\mathbf x}.
$$

忽略相对小的波磁场力：

$$
m_e\ddot x=-eE_0\cos\omega t,
\qquad
a(t)=-\frac{eE_0}{m_e}\cos\omega t.
$$

定义加速度振幅 $a_0=eE_0/m_e$，则

$$
\langle a^2\rangle=\frac{a_0^2}{2}
=\frac{e^2E_0^2}{2m_e^2}.
$$

### 5.4 第二步：电子向外辐射

代入 Larmor 公式：

$$
\begin{aligned}
\langle P_{\rm sc}\rangle
&=\frac{2e^2}{3c^3}\langle a^2\rangle\\
&=\frac{2e^2}{3c^3}\frac{e^2E_0^2}{2m_e^2}
=\boxed{\frac{e^4E_0^2}{3m_e^2c^3}}.
\end{aligned}
$$

### 5.5 第三步：除以平均入射通量

$$
\begin{aligned}
\sigma_{\rm T}
&=\frac{\langle P_{\rm sc}\rangle}{\langle F_{\rm inc}\rangle}\\
&=\frac{e^4E_0^2}{3m_e^2c^3}\frac{8\pi}{cE_0^2}\\
&=\boxed{\frac{8\pi e^4}{3m_e^2c^4}}
\simeq6.65\times10^{-25}\ {\rm cm^2}.
\end{aligned}
$$

场强 $E_0$ 消掉，因为散射功率和入射通量都正比于 $E_0^2$。频率没有出现，是因为这一近似下自由电子的加速度振幅 $eE_0/m_e$ 与频率无关。

### 5.6 易错点：为什么会算出 $16\pi$？

最常见的原因是：分子用峰值辐射功率，分母却用平均入射通量。

错误混用会得到

$$
\frac{\overbrace{2e^4E_0^2/(3m_e^2c^3)}^{\text{峰值功率}}}
{\underbrace{cE_0^2/(8\pi)}_{\text{平均通量}}}
=\frac{16\pi e^4}{3m_e^2c^4}.
$$

正确做法是分子、分母保持一致：

| 使用的量 | 散射功率 | 入射通量 |
|---|---|---|
| 峰值 | $2e^4E_0^2/(3m_e^2c^3)$ | $cE_0^2/(4\pi)$ |
| 周期平均 | $e^4E_0^2/(3m_e^2c^3)$ | $cE_0^2/(8\pi)$ |

在这个正弦驱动模型中，两行各自相除都会得到 $8\pi e^4/(3m_e^2c^4)$。**Larmor 公式中的 $2$，在平均功率里被 $\langle\cos^2\rangle=1/2$ 抵消。**

### 5.7 为什么定义经典电子半径？

定义

$$
\boxed{r_e\equiv\frac{e^2}{m_ec^2}}
\simeq2.818\times10^{-13}\ {\rm cm}=2.818\ {\rm fm}.
$$

它来自一个自然的能量尺度比较。两个大小为 $e$ 的电荷相距 $r$ 时，静电势能的大小是 $e^2/r$。令这一能量尺度与电子静止能量相当：

$$
\frac{e^2}{r_e}=m_ec^2,
$$

就得到上述定义。这个构造并不是说电子内部有两个电荷。

也不能把 $r_e$ 直接视为电子真实半径。若尝试用经典带电球模型，其静电自能依赖电荷分布：

| 模型 | 静电自能 | 令自能等于 $m_ec^2$ 得到的半径 |
|---|---|---|
| 均匀带电球壳 | $e^2/(2R)$ | $R=r_e/2$ |
| 均匀带电实心球 | $3e^2/(5R)$ | $R=3r_e/5$ |

所以 $r_e$ 是约定明确的经典电磁长度尺度，不能由这些模型唯一解释成实体尺寸。Thomson 截面恰好可写为

$$
\boxed{\sigma_{\rm T}=\frac{8\pi}{3}r_e^2}.
$$

它描述受迫电子再辐射的能力，而不是光撞到一个实体小球的几何面积。

## 6. 从光的动量传递推导辐射加速度

### 6.1 从单个粒子的截面到单位质量的不透明度

若散射粒子数密度为 $n$，每个粒子的截面为 $\sigma$，则单位长度的相互作用系数为 $n\sigma$。除以质量密度，得到

$$
\boxed{\kappa=\frac{n\sigma}{\rho}},
\qquad
d\tau=n\sigma\,ds=\kappa\rho\,ds.
$$

这里先考虑单一相互作用；若有多个粒子种类、吸收与散射过程，需要作相应求和，并在计算辐射力时使用描述动量传递的系数。

### 6.2 取一小块物质，计算截获的能量

设一薄层物质迎光面积为 $A$、厚度为 $ds$、密度为 $\rho$，其质量为

$$
dm=\rho A\,ds.
$$

选择足够小的 $ds$，使 $d\tau=\kappa\rho\,ds\ll1$。发生相互作用的光占比约为 $d\tau$。

在时间 $dt$ 内，照到这层物质上的能量为 $FA\,dt$；参与相互作用的能量为

$$
dE_{\rm int}=FA\,dt\,d\tau
=FA\,dt\,\kappa\rho\,ds.
$$

### 6.3 能量换成动量，力再除以质量

先以吸收为例。光子满足 $p=E/c$，所以物质获得

$$
dp=\frac{dE_{\rm int}}{c}
=\frac{FA\,dt\,\kappa\rho\,ds}{c}.
$$

力是每单位时间获得的动量：

$$
d\mathcal F_{\rm rad}=\frac{dp}{dt}
=\frac{FA\kappa\rho\,ds}{c}.
$$

再除以这块物质的质量：

$$
\begin{aligned}
g_{\rm rad}
&=\frac{d\mathcal F_{\rm rad}}{dm}\\
&=\frac{FA\kappa\rho\,ds}{c\rho A\,ds}
=\boxed{\frac{\kappa F}{c}}.
\end{aligned}
$$

面积、厚度和密度消掉，是因为增加物质质量时，截获光的能力也按相同比例增加。需要区分：

$$
\underbrace{\frac{\kappa F}{c}}_{\text{单位质量的力，即加速度}}
\qquad\text{与}\qquad
\underbrace{\frac{\rho\kappa F}{c}}_{\text{单位体积受到的力}}.
$$

量纲检查：

$$
\left[\frac{\kappa F}{c}\right]
=\frac{({\rm cm^2\,g^{-1}})({\rm erg\,cm^{-2}\,s^{-1}})}{{\rm cm\,s^{-1}}}
={\rm cm\,s^{-2}}.
$$

### 6.4 光没有被吸收，散射为什么也能施力？

散射改变了光子的传播方向，因此改变了它的动量。即使光子能量近似不变，它仍可向电子传递动量。

例如，若光子被散射到与入射方向成 $\theta$ 的方向，沿入射方向传递的动量为

$$
\Delta p_\parallel=\frac{E_\gamma}{c}(1-\cos\theta).
$$

因此，严格说，辐射力需要的是**动量传递截面**。对普通 Thomson 散射，总角分布前后对称，角度平均后的 $\cos\theta$ 为零，动量传递截面等于总 Thomson 截面，所以仍有 $g_{\rm rad}=\kappa_{\rm es}F/c$。

若相互作用强烈偏向前向散射，或磁场造成复杂的各向异性，就不能不加检查地把任意总散射截面用于辐射力。

对有频率分布、可用标量不透明度描述的情形，可写

$$
g_{\rm rad}=\frac1c\int\kappa_\nu F_\nu\,d\nu
=\frac{\kappa_FF}{c},
\qquad
\kappa_F\equiv\frac{\int\kappa_\nu F_\nu\,d\nu}{\int F_\nu\,d\nu}.
$$

这里 $\kappa_F$ 是通量平均的不透明度。

**局部薄层光学薄，不意味着整个天体必须光学薄。**光学厚介质也可以划分成很薄的小层，用当地净通量计算辐射力。

## 7. 爱丁顿光度：推导、条件与物理意义

### 7.1 从当地通量到总光度

假设光球对称地向外传播，在半径 $r$ 处，光度分布到球面面积 $4\pi r^2$ 上：

$$
F(r)=\frac{L}{4\pi r^2}.
$$

向外辐射加速度与向内引力加速度分别是

$$
g_{\rm rad}(r)=\frac{\kappa L}{4\pi r^2c},
\qquad
g_{\rm grav}(r)=\frac{GM}{r^2}.
$$

令二者相等：

$$
\frac{\kappa L_{\rm Edd}}{4\pi r^2c}
=\frac{GM}{r^2}
\quad\Rightarrow\quad
\boxed{L_{\rm Edd}=\frac{4\pi GMc}{\kappa}}.
$$

半径消掉，是因为两种加速度均按 $1/r^2$ 衰减。把它视为与位置无关的单个临界光度，还要求这里使用的 $M$ 和 $\kappa$ 不随位置明显改变；恒星内部通常需要用当地包围质量和当地不透明度。

两种加速度的比值为

$$
\boxed{\frac{g_{\rm rad}}{g_{\rm grav}}
=\frac{\kappa L}{4\pi GMc}
=\frac{L}{L_{\rm Edd}}}.
$$

- $L<L_{\rm Edd}$：辐射力小于引力。
- $L=L_{\rm Edd}$：两者恰好平衡。
- $L>L_{\rm Edd}$：若只考虑这两种作用，净加速度向外。

这不意味着所有超过该值的天体都“不可能存在”，也不意味着所有低于该值的气体一定静止；它是指定条件下的力比较。

### 7.2 采用什么不透明度？

一般公式中的 $\kappa$ 应描述辐射动量传递效率。常用的数值形式采用完全电离气体的普通 Thomson 电子散射。

纯氢中，每个质子对应一个电子，质量主要由质子贡献：

$$
\rho\simeq n_em_p,
\qquad
\kappa_{\rm es}=\frac{n_e\sigma_{\rm T}}{\rho}
\simeq\frac{\sigma_{\rm T}}{m_p}
\simeq0.40\ {\rm cm^2\,g^{-1}}.
$$

于是

$$
\boxed{L_{\rm Edd}
=\frac{4\pi GMm_pc}{\sigma_{\rm T}}
\simeq1.26\times10^{38}\left(\frac{M}{M_\odot}\right)
{\rm erg\,s^{-1}}}.
$$

对完全电离、以氢和氦为主的气体，若氢质量分数为 $X$，则每单位质量的电子数约为 $(1+X)/(2m_p)$，所以

$$
\kappa_{\rm es}\simeq0.20(1+X)\ {\rm cm^2\,g^{-1}}.
$$

例如 $X\simeq0.7$ 时，$\kappa_{\rm es}\simeq0.34\ {\rm cm^2\,g^{-1}}$。不同成分会改变临界光度的数值系数。

### 7.3 采用什么几何？

推导中的 $F=L/(4\pi r^2)$ 假设当地辐射球对称、沿径向向外；引力沿径向向内，二者可直接比较。

另一个独立的几何假设出现在观测端：

$$
L_{\rm iso}=4\pi d^2f_{\rm obs}.
$$

这是把我们所在方向的通量推广到所有方向。它定义的是各向同性等效光度，只有辐射确实各向同性时才等于真实总光度。

这两个 $4\pi$ 对应不同物理问题：

1. 远处测到的通量能否代表其他方向？
2. 整个天体的光度如何分配成某处物质实际承受的径向通量？

### 7.4 为什么观测光度不是质量测量？

爱丁顿公式给的是临界光度，而天体未必恰好在临界值上辐射。定义爱丁顿比

$$
\lambda\equiv\frac{L_{\rm bol}}{L_{\rm Edd}},
$$

其中 $L_{\rm bol}$ 是所有波段相加的真实光度，便有

$$
\boxed{M=\frac{\kappa L_{\rm bol}}{4\pi Gc\lambda}}.
$$

即使几何与不透明度都已知，只测到光度而不知道 $\lambda$，也无法唯一确定质量。同样的光度，既可能来自较小质量、接近爱丁顿极限的天体，也可能来自较大质量、只达到自身极限十分之一的天体。

若只额外假设 $\lambda\leq1$，得到的是

$$
\boxed{M\geq\frac{\kappa L_{\rm bol}}{4\pi Gc}},
$$

这是**有条件的质量下限**。此外还需要处理观测吸收、有限波段、距离与方向性：观测到的 $L_X$ 不自动等于总辐射光度 $L_{\rm bol}$。

### 7.5 M82 X-1 的练习数值

给定

$$
f_X=4\times10^{-12}\ {\rm erg\,cm^{-2}\,s^{-1}},
\qquad d\simeq3.6\ {\rm Mpc}.
$$

用 $1\ {\rm pc}\simeq3.086\times10^{18}\ {\rm cm}$：

$$
d\simeq1.11\times10^{25}\ {\rm cm},
\qquad
L_{X,\rm iso}=4\pi d^2f_X\simeq6.2\times10^{39}\ {\rm erg\,s^{-1}}.
$$

若假设各向同性、纯氢电子散射且 $L_{\rm bol}\leq L_{\rm Edd}$，由于 $L_{\rm bol}\geq L_X$，仅用 X 射线光度就能给出保守的条件性下限：

$$
\frac{M}{M_\odot}\gtrsim
\frac{6.2\times10^{39}}{1.26\times10^{38}}
\simeq49.
$$

若有波段外辐射，这套假设下的下限会更高；若存在束射、超爱丁顿辐射或有效不透明度改变，就不能照搬该下限。**$49M_\odot$ 是模型推论，不是观测测得的质量。**

这里要区分两个源：练习给的是 **M82 X-1**；Bachetti 等人在 2014 年报告的 ULX 脉冲来自 **M82 X-2**。后者证明至少部分 ULX 的吸积天体是中子星，不能把全部 ULX 都按标准爱丁顿推断解释成大质量黑洞。[Bachetti 等，2014](https://www.nature.com/articles/nature13791)

## 8. 强磁场为什么能降低某些光子的散射截面？

### 8.1 回旋频率从哪里来？

对垂直于背景磁场运动的非相对论电子，洛伦兹力提供向心力：

$$
\frac{m_ev_\perp^2}{r_L}=\frac{ev_\perp B_0}{c}.
$$

因此

$$
\boxed{\omega_B=\frac{v_\perp}{r_L}=\frac{eB_0}{m_ec}}.
$$

这是角频率；普通频率是 $\nu_B=\omega_B/(2\pi)$。SI 中则为 $\omega_B=eB_0/m_e$。

背景磁场提供了新的时间尺度 $1/\omega_B$，所以电子对光的响应会依赖入射角频率 $\omega$ 与 $\omega_B$ 的比较。

### 8.2 选定几何，写出受迫运动方程

取

$$
\mathbf B_0=B_0\hat{\mathbf z},
\qquad
\mathbf E_{\rm wave}=E_0\cos\omega t\,\hat{\mathbf x}.
$$

波电场垂直于背景磁场。保留背景磁场力，忽略较小的波磁场力：

$$
m_e\dot{\mathbf v}
=-e\left(\mathbf E_{\rm wave}+\frac{\mathbf v\times\mathbf B_0}{c}\right).
$$

令 $a_0=eE_0/m_e$，分量形式为

$$
\begin{aligned}
\dot v_x&=-a_0\cos\omega t-\omega_Bv_y,\\
\dot v_y&=\omega_Bv_x.
\end{aligned}
$$

磁场将两个方向的运动耦合起来。我们关注由入射波产生的周期受迫响应，而不是电子可能原本就有的自由回旋运动。

### 8.3 低频时的直观图像：随电场变化的横向漂移

当 $\omega\ll\omega_B$，电场变化比电子回旋慢得多。$x$ 方向的电场力与磁场力在最低阶近似抵消：

$$
-a_0\cos\omega t-\omega_Bv_y\simeq0.
$$

得到

$$
v_y\simeq-\frac{a_0}{\omega_B}\cos\omega t
=-\frac{cE_0}{B_0}\cos\omega t.
$$

这是该几何下的 $\mathbf E\times\mathbf B$ 漂移。它随入射电场变化，因此产生加速度：

$$
a_y=\dot v_y\simeq a_0\frac{\omega}{\omega_B}\sin\omega t.
$$

再用 $\dot v_y=\omega_Bv_x$，可以验证

$$
a_x\simeq a_0\left(\frac{\omega}{\omega_B}\right)^2\cos\omega t.
$$

所以在低频极限，主要受迫加速度的振幅为

$$
\boxed{a_{\rm mag}\simeq a_0\frac{\omega}{\omega_B}}.
$$

要点是：磁场改变了电子对电场的响应，使净加速度减小；不是说电子完全停止运动。

### 8.4 加速度减小，为什么截面按平方减小？

无磁场时

$$
\langle a^2\rangle_0=\frac{a_0^2}{2}.
$$

强磁场、低频横向响应下

$$
\langle a^2\rangle_{\rm mag}
\simeq\frac{a_0^2}{2}\left(\frac{\omega}{\omega_B}\right)^2.
$$

由于 $P\propto a^2$，且比较时入射通量不变：

$$
\frac{\sigma_{\rm eff}}{\sigma_{\rm T}}
=\frac{\langle P_{\rm mag}\rangle}{\langle P_0\rangle}
=\frac{\langle a^2\rangle_{\rm mag}}{\langle a^2\rangle_0}
\simeq\left(\frac{\omega}{\omega_B}\right)^2.
$$

于是

$$
\boxed{\sigma_{\rm eff}\simeq\sigma_{\rm T}
\left(\frac{\omega}{\omega_B}\right)^2}.
$$

例如 $\omega/\omega_B=0.1$，该简化情形下的截面约为 Thomson 截面的 $1\%$。

### 8.5 必须保留的适用条件

- 这是低频、非相对论经典响应的推导，远离回旋共振。
- 波电场若沿背景磁场，电子在该方向不受磁场力限制，不会出现上述形式的横向抑制。
- 实际磁化辐射包含不同传播方向与偏振模式，不能说“所有光子的截面都统一减小”。
- 当 $\omega\sim\omega_B$ 时会有回旋共振，低频近似失效，散射可以增强。
- 真实磁星的定量计算还涉及量子效应、频谱、模式转换和更完整的散射截面；上述推导用于理解基本尺度。

文献中，低于回旋频率的非寻常模式（X-mode，也常称 E-mode）具有这种散射抑制，其波电场垂直于传播方向与背景磁场构成的平面。[磁化散射的模式依赖](https://academic.oup.com/mnras/article/461/1/877/2595263)

## 9. 标准爱丁顿推断为什么可能失效？三个不同环节

完整推理链是

$$
f_{\rm obs}
\xrightarrow{\text{各向同性}}
L=4\pi d^2f_{\rm obs}
\xrightarrow{\text{当地球对称传播}}
F(r)=\frac{L}{4\pi r^2}
\xrightarrow{\text{指定不透明度}}
g_{\rm rad}=\frac{\kappa F(r)}{c}.
$$

三个机制分别改变观测换算、局部流动几何和动量耦合效率。

### 9.1 辐射有方向性：看起来亮，不等于所有方向都亮

望远镜只测到朝向我们的光。真正的总光度是

$$
L_{\rm true}=\int\frac{dL}{d\Omega}\,d\Omega,
$$

而 $L_{\rm iso}=4\pi d^2f_{\rm obs}$ 是假设所有方向与我们方向一样亮后得到的数。

用一个简单模型：光均匀集中在总立体角 $\Omega$ 内，而我们位于其中，则

$$
f_{\rm obs}=\frac{L_{\rm true}}{\Omega d^2}.
$$

定义束射因子 $b=\Omega/(4\pi)$，有

$$
\boxed{L_{\rm iso}=\frac{L_{\rm true}}b},
\qquad L_{\rm true}=bL_{\rm iso}.
$$

例如 $b=0.1$，各向同性等效光度是真实光度的十倍；若其他假设不变，直接把 $L_{\rm iso}$ 当成真实光度去推质量，会把对应的质量估计或条件性下限放大十倍。

部分 ULX 模型中的厚吸积流和外流构成漏斗，光经过散射后优先沿漏斗方向逃逸。这种几何束射不要求存在相对论喷流。[King，2009](https://academic.oup.com/mnrasl/article/393/1/L41/1056229)

此机制修改的是“观测通量如何换成真实光度”。仅凭光有方向性，并不能知道具体放大倍数；脉冲比较宽，也不能单独严格排除明显束射。

### 9.2 吸积柱侧向漏光：物质向下，能量向旁边离开

强磁场可以把靠近中子星的吸积流引向磁极附近的小区域。在较高吸积率下，形成由磁场约束的吸积柱。

```text
              吸积物质
                 ↓
                 ↓
           ┌─────────┐
      光 ← │ 热的气体 │ → 光
      光 ← │  吸积柱  │ → 光
           └────┬────┘
                ↓
           中子星表面
```

吸积柱不是有实体管壁的管子，而是受磁场约束的一股气流。物质下落并被减速，释放能量、加热气体并产生辐射。

柱内光子可能多次散射，像随机走动一样向外扩散。如果柱子细长，且横向的光学厚度相对较小，光从侧面离开比向上穿过整段气流更容易。

“侧向逃逸”说的是**整体能量主要从柱侧面流出**，不是每个光子一产生就沿直线横向飞走。

在球对称图像中，光向外、物质向内，两者迎面相遇；向外的辐射力直接阻碍下落。在吸积柱图像中，要看的是沿柱方向、反抗下落的力，而不能把所有光度都算到这一方向。

示意地写

$$
g_{{\rm rad},\parallel}\simeq\frac{\kappa_\parallel F_\parallel}{c},
$$

其中 $F_\parallel$ 是沿柱向外、迎着下落物质的通量。总光度却包含柱各个表面流出的能量：

$$
L_{\rm true}=\int_{\text{柱表面}}\mathbf F\cdot d\mathbf A.
$$

所以 $L_{\rm true}$ 很大，并不要求 $F_\parallel=L_{\rm true}/(4\pi r^2)$。

需要同时记住：

- 横向辐射仍会产生压力、向外撑开吸积柱，需要磁场应力约束。
- 沿柱方向仍有辐射力，可以形成辐射主导的激波，使气体减速后继续沉降。
- 侧向漏光不是无限提高光度的保证，实际结构受磁场强度、柱几何、光学厚度和能量输运限制。

这一机制使能量有了其他出口，帮助系统在真实光度很大时仍然保持吸积。[吸积柱与高光度模型](https://academic.oup.com/mnras/article/454/3/2539/1196875)

### 9.3 有效不透明度降低：同样的光推得更弱

前两种机制改变光往哪里走；这一种改变光向物质传递动量的效率。

若相关模式的散射被强磁场抑制，适用于辐射力的有效不透明度也可能降低。在仍采用球对称的简化模型时，

$$
g_{\rm rad}=\frac{\kappa_{\rm eff}F}{c},
\qquad
L_{\rm crit}=\frac{4\pi GMc}{\kappa_{\rm eff}}.
$$

若作为假设例子，平均有效不透明度降低到原来的 $1/100$，同一简化模型中的临界光度提高到原来的 $100$ 倍。

但不能把某一模式的 $\sigma_{\rm eff}/\sigma_{\rm T}$，未经频谱、方向和偏振平均就直接当成整颗星的 $\kappa_{\rm eff}/\kappa_{\rm es}$。

这里还要区分两个“方向”：

- 侧向漏光比较的是**光的传播方向和物质流动方向**。
- 偏振抑制比较的是**波电场方向和背景磁场方向**。

### 9.4 三种机制对照

| 机制 | 被修改的假设 | 结果 |
|---|---|---|
| 方向性、束射 | 各方向同样亮 | $L_{\rm iso}$ 可以大于真实总光度 |
| 吸积柱侧向漏光 | 全部光都径向迎着吸积流 | 总光度很大，但逆流辐射力不按球对称公式增长 |
| 有效不透明度降低 | 普通 Thomson 动量耦合效率 | 同样局部通量产生的辐射力更小 |

三种效应可以同时存在。仅凭超爱丁顿的等效光度，不能唯一决定质量、磁场强度或束射程度。

## 10. 磁星：磁场改变辐射传输，也储存爆发能量

磁场在这里有两种不同作用：

1. **改变光如何逃逸：**降低某些模式的不透明度，提高相应条件下的临界光度。
2. **提供能量储备：**磁场储存能量，其重构或衰减可为爆发供能。

课程引用的 Paczyński（1992）把强磁场、低散射不透明度、超爱丁顿辐射和磁能预算联系起来。这提供的是解释磁星现象的物理链条，不能把高光度单独当成唯一的磁场测量。[Paczyński，1992](https://acta.astrouw.edu.pl/Vol42/n3/a_42_3_1.html)

### 10.1 从磁能密度推导储能

在 Gaussian-cgs 中，磁场能量密度为

$$
u_B=\frac{B^2}{8\pi}.
$$

当 $B$ 用 G 表示时，$u_B$ 的单位是 ${\rm erg\,cm^{-3}}$。内部磁能一般为

$$
E_B=\int_V\frac{B(\mathbf r)^2}{8\pi}\,dV.
$$

用近似均匀的内部磁场强度作数量级估计：

$$
E_B\simeq\frac{B^2}{8\pi}\frac{4\pi R^3}{3}
=\boxed{\frac{B^2R^3}{6}}.
$$

系数 $1/6$ 来自磁能密度的 $1/(8\pi)$ 与球体体积的 $4\pi/3$ 相乘。

### 10.2 代入磁星的典型数量级

取 $B=10^{15}\ {\rm G}$、$R=10\ {\rm km}=10^6\ {\rm cm}$：

$$
E_B\simeq\frac{(10^{15})^2(10^6)^3}{6}
=\frac{10^{48}}6
\simeq1.7\times10^{47}\ {\rm erg}.
$$

因此

$$
\boxed{E_B\simeq1.7\times10^{47}
\left(\frac{B}{10^{15}\ {\rm G}}\right)^2
\left(\frac{R}{10\ {\rm km}}\right)^3
{\rm erg}}.
$$

磁场强度增加十倍，储能增加一百倍；半径增加两倍，储能增加八倍。

### 10.3 从爆发能量反推所需磁场

若只有比例 $\eta$ 的内部磁能转化为此次爆发的辐射，需要

$$
\eta E_B\gtrsim E_{\rm burst}.
$$

因此

$$
\boxed{B\gtrsim\sqrt{\frac{6E_{\rm burst}}{\eta R^3}}}.
$$

例如 $E_{\rm burst}=10^{45}\ {\rm erg}$、$R=10\ {\rm km}$：

$$
B\gtrsim7.7\times10^{13}\eta^{-1/2}\ {\rm G}.
$$

若 $\eta=0.01$，所需场强约为 $7.7\times10^{14}\ {\rm G}$。

### 10.4 这个估计中的 $B$ 是什么？

更准确地说，可以定义内部体积均方根场强

$$
B_{\rm rms}=\sqrt{\frac1V\int_V B^2\,dV}.
$$

对球形积分体积，用 $B_{\rm rms}$ 替代 $B$ 后，内部磁能就是 $B_{\rm rms}^2R^3/6$，不需要真的处处均匀。

但 $B_{\rm rms}$ 未必等于从自转减慢等观测推断出的表面偶极场。总磁能也不等于一次事件中全部可释放的能量；释放比例依赖磁场结构与演化。这里仅估计内部能量，外部磁层还可以有额外储能。

## 11. 复习安排：哪些记住，哪些必须会推？

以下按理解本节课和独立做题的需要安排优先级，不把它视为老师另行公布的考试范围。

### 11.1 基础公式：记牢，并能解释符号、量纲和条件

| 公式 | 物理意义与条件 |
|---|---|
| $p_\gamma=E_\gamma/c$ | 光携带动量，能对物质施力 |
| $\mathbf F=q(\mathbf E+\mathbf v\times\mathbf B/c)$ | 电磁场对电荷的力；这里为 cgs |
| $\mathbf S=c\mathbf E\times\mathbf B/(4\pi)$ | 电磁能量流动的大小与方向 |
| $u_{\rm EM}=(E^2+B^2)/(8\pi)$ | 场的能量密度 |
| $P=2q^2a^2/(3c^3)$ | 非相对论加速电荷的 Larmor 功率 |
| $g=GM/r^2$ | 牛顿引力加速度 |
| $E=B$ | 真空平面波、cgs；不是任意电磁场都满足 |
| $\langle\cos^2\omega t\rangle=1/2$ | 正弦振荡的周期平均 |

做题时可以把它们作为起点，不必每次从麦克斯韦方程重证。Larmor 公式虽然可直接使用，但从远场出发的积分推导值得掌握。

### 11.2 定义：记清楚它定义了什么

| 定义 | 最容易混淆的地方 |
|---|---|
| $\sigma=\langle P_{\rm sc}\rangle/\langle F_{\rm inc}\rangle$ | 有效面积，不必等于几何面积；平均和峰值不能混用 |
| $\kappa=n\sigma/\rho$ | 单粒子截面转为单位质量相互作用能力；不同过程需适当合并 |
| $d\tau=\kappa\rho\,ds$ | 无量纲光学深度 |
| $r_e=e^2/(m_ec^2)$ | 经典电磁长度尺度，不是电子实体半径 |
| $L_{\rm iso}=4\pi d^2f_{\rm obs}$ | 各向同性等效光度，不自动等于真实光度 |
| $\lambda=L_{\rm bol}/L_{\rm Edd}$ | 爱丁顿比，不必等于 1 |

定义不是需要证明的定理。重点是理解为什么这样定义有用，何时能把它与真实物理量对应起来。

### 11.3 核心结论：应能不看笔记重建推导

**平均入射通量**

$$
\mathbf S=\frac c{4\pi}\mathbf E\times\mathbf B
\longrightarrow F(t)=\frac{cE_0^2}{4\pi}\cos^2\omega t
\longrightarrow\langle F\rangle=\frac{cE_0^2}{8\pi}.
$$

重点：$1/2$ 从哪里来，以及 $E_0$ 与 $E_{\rm rms}$ 的区别。

**Thomson 截面**

$$
a_0=\frac{eE_0}{m_e}
\longrightarrow\langle P\rangle=\frac{2e^2}{3c^3}\langle a^2\rangle
\longrightarrow\sigma_{\rm T}=\frac{\langle P\rangle}{\langle F\rangle}
=\frac{8\pi}{3}r_e^2.
$$

重点：分子分母的平均要一致，为什么场强和频率消掉。$\sigma_{\rm T}\simeq6.65\times10^{-25}\ {\rm cm^2}$ 很常用，值得记；$r_e$ 的精确数值优先级稍低。

**辐射加速度与爱丁顿光度**

$$
\text{截获光能}
\longrightarrow\text{传递动量}
\longrightarrow g_{\rm rad}=\frac{\kappa F}{c}
\longrightarrow F=\frac{L}{4\pi r^2}
\longrightarrow g_{\rm rad}=\frac{GM}{r^2}.
$$

重点：每一步的几何、不透明度与力平衡假设。最后得到的是临界光度；要推质量，必须再说明爱丁顿比、真实总光度与观测换算。

**强磁场下的散射抑制**

$$
\omega_B=\frac{eB_0}{m_ec},
\qquad
a_{\rm mag}\sim a_0\frac{\omega}{\omega_B}
\longrightarrow P\propto a^2
\longrightarrow\sigma_{\rm eff}\sim\sigma_{\rm T}
\left(\frac{\omega}{\omega_B}\right)^2.
$$

重点：不能只背平方指数；要知道它来自加速度的抑制，而且只适用于相应频率、偏振与近似。最好能重建两个耦合的速度方程，不必死背复杂通解。

**磁能估计**

$$
E_B=\int\frac{B^2}{8\pi}\,dV
\longrightarrow E_B\sim\frac{B^2R^3}{6}
\longrightarrow B\gtrsim\sqrt{\frac{6E_{\rm burst}}{\eta R^3}}.
$$

重点：从密度乘体积重建系数，并说明场强代表内部均方根、释放效率未必为 1。

### 11.4 更底层的电动力学：先理解起点，再掌握后续步骤

从麦克斯韦方程或延迟势得到 $E_{\rm rad}=|q|a\sin\theta/(c^2r)$，涉及更完整的电动力学。当前可以先把它作为已知输入；但应能继续完成

$$
E_{\rm rad}\longrightarrow S\propto E_{\rm rad}^2
\longrightarrow P=\int Sr^2\,d\Omega.
$$

这样才能解释 Larmor 功率的方向分布与 $2/3$ 系数，而不是仅记结论。

### 11.5 自测题

1. 从入射电场开始，能否独立推到 $\sigma_{\rm T}$，且不漏掉时间平均？
2. 为什么算出 $16\pi/3$ 往往是峰值与平均值混用？
3. 为什么 $g_{\rm rad}=\kappa F/c$ 的单位是加速度，而不是力？
4. 为什么爱丁顿推导中的 $r^2$ 消掉？在恒星内部应如何理解 $M$ 和 $\kappa$？
5. $L_{\rm iso}$、$L_{\rm true}$、$L_X$、$L_{\rm bol}$ 有什么区别？
6. 为什么仅假设 $L_{\rm bol}\leq L_{\rm Edd}$ 只能得到质量下限？
7. 束射、侧向漏光、降低不透明度分别改变推理链的哪一步？
8. 为什么波电场沿背景磁场时，不能照搬横向散射抑制公式？
9. 侧向漏出的光是否还对气体施力？吸积柱为什么需要磁场约束？
10. 从一次爆发能量推磁场强度，需要补充哪些能量预算假设？

## 12. 关键公式速查与参考资料

### 12.1 关键公式速查（Gaussian-cgs）

| 主题 | 公式 | 条件或解释 |
|---|---|---|
| 平均波通量 | $\langle F\rangle=cE_0^2/(8\pi)$ | 真空正弦平面波；$E_0$ 为峰值 |
| 辐射功率 | $P=2q^2a^2/(3c^3)$ | 非相对论瞬时 Larmor 功率 |
| Thomson 截面 | $\sigma_{\rm T}=8\pi r_e^2/3$ | 自由、非相对论、低反冲电子 |
| 经典电子半径 | $r_e=e^2/(m_ec^2)$ | 定义的电磁长度尺度 |
| 辐射加速度 | $g_{\rm rad}=\kappa_FF/c$ | 使用适合辐射力的平均不透明度 |
| 爱丁顿光度 | $L_{\rm Edd}=4\pi GMc/\kappa$ | 球对称径向辐射与引力比较 |
| 电子散射不透明度 | $\kappa_{\rm es}\simeq0.20(1+X)\ {\rm cm^2\,g^{-1}}$ | 完全电离、以氢氦为主的气体 |
| 回旋角频率 | $\omega_B=eB_0/(m_ec)$ | 非相对论电子 |
| 低频截面抑制 | $\sigma_{\rm eff}\sim\sigma_{\rm T}(\omega/\omega_B)^2$ | 相应横向模式、$\omega\ll\omega_B$ |
| 简单束射模型 | $L_{\rm iso}=L_{\rm true}/b$ | 光均匀集中在立体角 $4\pi b$ 内，观测者位于其中 |
| 内部磁能 | $E_B=B_{\rm rms}^2R^3/6$ | 半径 $R$ 的球形积分体积 |

### 12.2 参考资料

- [AST1440 课程网站](https://www.astro.utoronto.ca/~mhvk/AST1440/)：2026 年 9 月 14 日课程主题、阅读与 M82 X-1 练习。
- Rybicki & Lightman，*Radiative Processes in Astrophysics*：§1.1–1.4；电子散射相关 §3.4、§3.6。
- Padmanabhan，*Theoretical Astrophysics, Vol. I*：§1.4.4、§6.4。
- [Essential Radio Astronomy，Chapter 2: Radiation Fundamentals](https://www.cv.nrao.edu/~sransom/web/Ch2.html)：辐射、电磁场与基本物理量的背景参考。
- [Bachetti et al. (2014), An ultraluminous X-ray source powered by an accreting neutron star](https://www.nature.com/articles/nature13791)：M82 X-2 的脉冲与中子星解释。
- [King (2009), Masses, beaming and Eddington ratios in ultraluminous X-ray sources](https://academic.oup.com/mnrasl/article/393/1/L41/1056229)：几何束射与等效光度。
- [Mushtukov et al. (2015), On the maximum accretion luminosity of magnetized neutron stars](https://academic.oup.com/mnras/article/454/3/2539/1196875)：吸积柱几何、磁场与高光度。
- [van Putten et al. (2016), Radiative transfer simulations of magnetar flare beaming](https://academic.oup.com/mnras/article/461/1/877/2595263)：磁化散射、偏振与低频截面抑制。
- [Paczyński (1992), GB 790305 as a Very Strongly Magnetized Neutron Star](https://acta.astrouw.edu.pl/Vol42/n3/a_42_3_1.html)：磁场降低不透明度与磁能预算。
