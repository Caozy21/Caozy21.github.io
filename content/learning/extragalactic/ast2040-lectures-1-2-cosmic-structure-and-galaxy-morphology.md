---
title: "AST 2040 第一、二讲整合笔记：从宇宙结构形成到星系形态"
description: "AST2040 第一、二讲整合笔记：从宇宙结构形成、暗物质晕与星系形成，到星系形态、环境效应和多波段观测。"
date: "2026-09-21"
tags: ["AST2040", "Lectures 1–2", "Galaxy formation", "Galaxy morphology"]
order: 2
---

# AST 2040 第一、二讲整合笔记：从宇宙结构形成到星系形态

> **课程：** Extragalactic Astronomy  
> **覆盖范围：** Lecture 1 - Introduction to basics of cosmology and galaxy formation；Lecture 2 - Galaxy morphology  
> **目标：** 建立从原初扰动、暗物质晕和星系形成，到星系形态、环境效应和多波段观测的一条连续物理主线。

## 0. 阅读说明

本文整合两份课程讲义以及学习过程中补充讨论的内容。

- 标为“讲义主线”的内容直接对应课堂讲义。
- 标为“物理补充”的内容用于解释讲义中略去的推导或容易混淆的概念。
- 形态分类是对观测外观的压缩描述，不应被当作唯一的物理演化路径。
- Lecture 2 的 Sombrero Galaxy 标题把它写成了 M101；正确编号是 **M104**，M101 是 Pinwheel Galaxy。
- 这份 Lecture 2 没有正式讲 Sérsic profile、CAS 或 Gini-$M_{20}$；除非老师在其他材料中补充，否则暂不将其视为本讲核心。

---

## 1. 两讲合在一起的总主线

两节课实际上在回答一个连续问题：

$$
\boxed{
\begin{aligned}
&\text{原初宇宙与 inflation}\\
&\rightarrow \text{原初密度扰动}\\
&\rightarrow \text{暗物质扰动增长}\\
&\rightarrow \text{暗物质晕与 cosmic web}\\
&\rightarrow \text{气体落入、冷却并形成恒星}\\
&\rightarrow \text{星系形成和层级增长}\\
&\rightarrow \text{内部演化、并合与环境改造}\\
&\rightarrow \text{不同的星系形态、颜色和恒星形成状态}\\
&\rightarrow \text{通过光度、光谱和多波段图像反推物理历史}.
\end{aligned}}
$$

可以把它压缩成三层：

1. **宇宙学背景：** 宇宙怎样膨胀，最初的结构种子来自哪里。
2. **结构形成：** 扰动怎样在引力作用下形成暗物质晕和星系。
3. **观测反演：** 星系形态与辐射怎样记录其内部物理和环境历史。

---

# Part I：从早期宇宙到星系形成

## 2. 宇宙时间线

| 阶段 | 典型时间或红移 | 主要物理过程 |
|---|---:|---|
| Big Bang | 极早期 | 高温、高密度、膨胀的宇宙 |
| Inflation | 常放在 $10^{-36}$-$10^{-32}\,\mathrm{s}$ 量级 | 急剧加速膨胀；产生并拉伸原初扰动 |
| BBN | 约 $1\,\mathrm{s}$-$20\,\mathrm{min}$ | 形成 H、He、D 等轻元素原子核 |
| Matter-radiation equality | $z\sim3400$ | 物质开始主导背景密度，结构增长更有效 |
| Recombination / CMB | $z\sim1100$，约 38 万年 | 中性原子形成，光子解耦并留下 CMB |
| Cosmic Dark Ages | CMB 后至第一批恒星前 | 宇宙主要是中性气体和暗物质，尚无恒星光源 |
| Cosmic Dawn | 约一亿年后开始 | 第一批恒星、星系和黑洞种子出现 |
| Hydrogen reionization | 前几亿年至 $z\sim5$-$6$ | 早期光源逐渐电离星系际中性氢 |
| Cosmic noon | $z\sim2$ | 宇宙恒星形成率密度达到峰值 |
| 低红移宇宙 | $z\lesssim1$ | 恒星形成总体下降，暗能量主导晚期膨胀 |

### 2.1 Hot Big Bang 的三类经典证据

1. 星系退行速度显示宇宙整体膨胀。
2. CMB 具有近乎各向同性的黑体谱。
3. 原初轻元素丰度与 Big Bang nucleosynthesis 预测一致。

### 2.2 Inflation 为什么与星系形成有关？

Inflation 不只是解释平坦性和 CMB 大尺度均匀性。它还把微观量子涨落拉伸到宇宙尺度，为后来的结构形成提供原初种子。

因此：

$$
\text{inflation 产生种子}
\quad\Longrightarrow\quad
\text{引力在后续宇宙中放大种子}.
$$

---

## 3. 膨胀背景：$a$、$z$、$H$ 与临界密度

### 3.1 Scale factor 与 redshift

把今天的尺度因子归一化为 $a_0=1$：

$$
\boxed{a=\frac{1}{1+z}}.
$$

- 大 $z$ 通常表示更早的宇宙。
- $z$ 不是时间本身；把红移换算成宇宙年龄需要指定宇宙学参数。

### 3.2 Friedmann 方程

$$
H^2\equiv\left(\frac{\dot a}{a}\right)^2
=\frac{8\pi G}{3}\rho-\frac{k}{a^2}+\frac{\Lambda}{3}.
$$

它描述宇宙平均背景的膨胀，不直接描述单个星系内部的运动。

### 3.3 Critical density

临界密度定义为

$$
\boxed{\rho_{\rm crit}(z)=\frac{3H^2(z)}{8\pi G}}.
$$

定义密度参数

$$
\Omega_i(z)=\frac{\rho_i(z)}{\rho_{\rm crit}(z)}.
$$

要区分：

- $\rho_{\rm crit}$ 是由膨胀率定义的参考密度；
- $\rho_m$ 是真实物质密度；
- 局部区域能否塌缩不能简单写成“$\rho>\rho_{\rm crit}$ 就一定形成暗物质晕”，而要研究它相对背景的过密度及动力学演化。

### 3.4 课堂数值例子

在平坦、忽略 radiation 的近似中：

$$
H(z)=H_0\sqrt{\Omega_{m,0}(1+z)^3+\Omega_{\Lambda,0}}.
$$

取

$$
H_0=70\,\mathrm{km\,s^{-1}\,Mpc^{-1}},\qquad
\Omega_{m,0}=0.3,\qquad
\Omega_{\Lambda,0}=0.7,
$$

则

$$
\rho_{\rm crit,0}\approx9.2\times10^{-30}\,\mathrm{g\,cm^{-3}}.
$$

在 $z=10$：

$$
H(10)\approx20H_0,
$$

所以

$$
\rho_{\rm crit}(10)\approx400\rho_{\rm crit,0}
\approx3.7\times10^{-27}\,\mathrm{g\,cm^{-3}}.
$$

物理意义：早期宇宙密度更高、典型引力时间更短，结构演化可以很快。

---

## 4. Density contrast 与结构增长

定义密度对比度

$$
\boxed{
\delta(\mathbf x,t)=
\frac{\rho(\mathbf x,t)-\bar\rho(t)}{\bar\rho(t)}
}.
$$

- $|\delta|\ll1$：线性阶段，不同 Fourier 模式近似独立演化。
- $\delta\sim1$：进入非线性阶段。
- $\delta\gg1$：形成强烈过密、引力束缚的结构。

在物质主导时期，线性增长近似为

$$
\delta\propto a=\frac{1}{1+z}.
$$

晚期暗能量导致加速膨胀，会抑制结构继续增长。

### 4.1 为什么宇宙膨胀不等于所有东西都被拉散？

膨胀描述大尺度平均背景；局部过密区的自引力可以克服背景膨胀并脱离 Hubble flow，形成束缚结构。

---

## 5. 功率谱：必须区分的四种量

### 5.1 Fourier mode

将密度场写成

$$
\delta(\mathbf x)
=\int\frac{d^3k}{(2\pi)^3}\,
\delta_{\mathbf k}e^{i\mathbf k\cdot\mathbf x}.
$$

波数与尺度近似满足

$$
\boxed{k\sim\frac{2\pi}{R}}.
$$

- 小 $k$ 对应大尺度；
- 大 $k$ 对应小尺度。

### 5.2 普通密度功率谱 $P_\delta(k)$

统计定义为

$$
\left\langle
\delta_{\mathbf k}\delta_{\mathbf k'}^*
\right\rangle
=(2\pi)^3\delta_D(\mathbf k-\mathbf k')P_\delta(k).
$$

$P_\delta(k)$ 表示一个给定 Fourier mode 的平均振幅平方；它不是某一整段 $k$ 区间的总功率。

### 5.3 每个对数区间的模式数量

三维 $k$-space 中，$k$ 到 $k+dk$ 的模式位于球壳内：

$$
dN\propto4\pi k^2dk.
$$

因为 $dk=k\,d\ln k$：

$$
\boxed{
\frac{dN}{d\ln k}\propto k^3
}.
$$

这只表示大 $k$ 的对数区间具有更多 Fourier modes，不能直接等同于“实际小星系一定更多”。

### 5.4 无量纲密度功率 $\Delta_\delta^2(k)$

密度方差满足

$$
\langle\delta^2\rangle
=\int\frac{k^3P_\delta(k)}{2\pi^2}\,d\ln k.
$$

因此定义

$$
\boxed{
\Delta_\delta^2(k)
=\frac{k^3P_\delta(k)}{2\pi^2}
}.
$$

它表示每一个 $d\ln k$ 区间对密度方差的贡献。

| 名称 | 表达式 | 含义 |
|---|---|---|
| Fourier amplitude | $\delta_{\mathbf k}$ | 单个波矢的扰动振幅 |
| 普通功率谱 | $P_\delta(k)$ | 每个模式的平均功率 |
| 模式数量 | $dN/d\ln k\propto k^3$ | 每个对数区间包含多少模式 |
| 无量纲功率 | $\Delta_\delta^2=k^3P_\delta/(2\pi^2)$ | 每个对数区间贡献的总方差 |

### 5.5 “功率不随 $k$ 改变”为什么可能有歧义？

如果普通功率谱为常数：

$$
P_\delta(k)=\mathrm{constant},
$$

则

$$
\Delta_\delta^2(k)\propto k^3.
$$

如果每个对数区间贡献相同方差：

$$
\Delta_\delta^2(k)=\mathrm{constant},
$$

则必须有

$$
P_\delta(k)\propto k^{-3}.
$$

所以必须先问：所谓“功率”指 $P(k)$，还是无量纲的 $\Delta^2(k)$？

### 5.6 Harrison-Zel'dovich 与 $n=1$

讲义写成

$$
P_\delta(k)\propto k^n,\qquad n=1.
$$

现代语言通常先描述原初曲率扰动：

$$
\Delta_{\mathcal R}^2(k)
=A_s\left(\frac{k}{k_*}\right)^{n_s-1}.
$$

当 $n_s=1$：

$$
\Delta_{\mathcal R}^2(k)=\mathrm{constant},
$$

这才是最直接的 scale-invariant primordial curvature spectrum。

因为大尺度上粗略有

$$
\delta_{\mathbf k}\propto k^2\mathcal R_{\mathbf k},
$$

所以

$$
P_\delta(k)
\propto k^4P_{\mathcal R}(k)
\propto k^4k^{-3}
\propto k.
$$

因此下面两句话不矛盾：

$$
\Delta_{\mathcal R}^2(k)=\mathrm{constant}
$$

描述原初曲率功率，而

$$
P_\delta(k)\propto k
$$

描述相应的大尺度密度功率谱。

### 5.7 实际小质量结构是否更多？

实际结构数量取决于平滑尺度 $R$ 上的方差：

$$
\sigma_R^2
=\int\Delta_m^2(k)|W(kR)|^2\,d\ln k,
$$

以及扰动是否超过非线性塌缩阈值。它还受到 transfer function、暗物质自由传播、Jeans pressure、增长时间和并合的影响。

Cold Dark Matter 中通常是小晕先形成、再逐渐合并成大晕；但这不是简单由“同一体积能塞入更多小区域”推出的。

---

## 6. Jeans instability：压力能否阻止塌缩？

Jeans length 回答：

> 一个气体过密区会被引力压垮，还是被内部压力重新撑开？

### 6.1 时间尺度图像

声波穿过尺度 $R$ 的时间：

$$
t_{\rm sound}\sim\frac{R}{c_s}.
$$

引力塌缩时间：

$$
t_{\rm grav}\sim\frac{1}{\sqrt{G\rho}}.
$$

- $t_{\rm sound}<t_{\rm grav}$：压力来得及响应，倾向于支撑气体。
- $t_{\rm sound}>t_{\rm grav}$：压力来不及响应，引力塌缩。

时间尺度估算只能给出

$$
R\sim\frac{c_s}{\sqrt{G\rho}},
$$

不能确定精确的 $\sqrt\pi$ 因子。

### 6.2 线性扰动推导

线性化 continuity、Euler 和 Poisson 方程后可得

$$
\ddot\delta-c_s^2\nabla^2\delta-4\pi G\rho_0\delta=0.
$$

令

$$
\delta\propto e^{i(\mathbf k\cdot\mathbf x-\omega t)},
$$

得到 dispersion relation：

$$
\boxed{
\omega^2=c_s^2k^2-4\pi G\rho_0
}.
$$

- $\omega^2>0$：压力主导，扰动振荡。
- $\omega^2<0$：引力主导，扰动指数增长。

临界状态 $\omega^2=0$ 给出

$$
k_J=\frac{\sqrt{4\pi G\rho_0}}{c_s}.
$$

利用 $\lambda=2\pi/k$：

$$
\boxed{
\lambda_J
=\frac{2\pi}{k_J}
=c_s\sqrt{\frac{\pi}{G\rho_0}}
}.
$$

这里的 $\pi$ 来自两处：

1. Poisson 方程中的 $4\pi$；
2. 波数与波长关系中的 $2\pi$。

最终

$$
\frac{2\pi}{\sqrt{4\pi}}=\sqrt\pi.
$$

### 6.3 Jeans length 的物理依赖

$$
\lambda_J\propto\frac{c_s}{\sqrt\rho}.
$$

因此：

$$
T\uparrow\Rightarrow c_s\uparrow\Rightarrow\lambda_J\uparrow
$$

表示热气体更难形成小尺度结构；而

$$
\rho\uparrow\Rightarrow\lambda_J\downarrow
$$

表示高密度气体更容易继续碎裂。

Jeans mass 近似为

$$
M_J\sim\rho\lambda_J^3
\propto\frac{c_s^3}{G^{3/2}\rho^{1/2}}.
$$

气体冷却会降低 $c_s$、$\lambda_J$ 和 $M_J$，因此 cooling 是形成致密气体云和恒星的关键。

---

## 7. 为什么需要暗物质？

### 7.1 Recombination 前重子受到光子压力

在 recombination 以前，电子、质子和光子构成紧密耦合的 photon-baryon fluid。光子压力阻碍重子在小尺度上自由塌缩。

非重子冷暗物质不与光子发生这种强耦合，可以更早增长并形成引力势阱。光子解耦后，普通气体再落入暗物质势阱。

正确顺序是：

$$
\boxed{
\text{暗物质先建立引力骨架}
\rightarrow
\text{气体落入}
\rightarrow
\text{冷却、碎裂和形成恒星}
}.
$$

### 7.2 Hot DM 与 Cold DM

- **Hot Dark Matter：** 早期仍相对论性，自由传播会抹掉小尺度扰动，倾向 top-down。
- **Cold Dark Matter：** 早期已非相对论性，保留小尺度扰动，产生 bottom-up／hierarchical formation。

### 7.3 暗物质的主要观测证据

#### 星系旋转曲线

$$
v^2(r)=\frac{GM(<r)}{r}.
$$

若外部质量不再增加，应有 $v\propto r^{-1/2}$；但观测旋转曲线通常近似平坦，因此

$$
M(<r)\propto r,
$$

说明可见星盘之外仍存在大量不可见质量。

#### 星系团动力学

Coma Cluster 中星系的运动速度要求的引力质量远大于发光物质质量。

#### Bullet Cluster

X-ray 热气体与引力透镜重建的主要质量分布发生空间分离，说明主要引力质量不跟随碰撞气体。

---

## 8. 从暗物质晕到发光星系

层级式星系形成的基本链条：

1. 小尺度暗物质扰动先塌缩成小晕。
2. 暗物质晕通过连续吸积和并合增长。
3. 重子气体落入引力势阱并受到压缩、激波加热。
4. 气体通过辐射冷却。
5. 当气体满足引力不稳定条件后继续塌缩和碎裂。
6. 形成恒星、恒星系统和可见星系。
7. 恒星与黑洞 feedback 又会加热或移除气体，调节后续恒星形成。

必须区分：

- **halo assembly：** 暗物质结构怎样增长；
- **galaxy formation：** 气体如何冷却并转化为恒星；
- **galaxy evolution：** 并合、反馈、金属增丰和环境怎样继续改变星系。

---

## 9. 我们如何从光推断星系性质？

星系中的暗物质决定主要势阱，但我们直接收到的光主要来自恒星、气体和尘埃。

### 9.1 颜色

- 年轻大质量恒星多：UV 和蓝光强。
- 老年恒星主导：整体偏红。
- 尘埃优先吸收短波光，也会使星系变红。
- 高金属丰度会改变恒星温度和光谱，也可能使整体颜色变红。

所以“红”不一定唯一意味着“老”。

### 9.2 光谱与 SED fitting

光谱和多波段光度可以约束：

- redshift；
- stellar age；
- metallicity；
- dust extinction；
- star-formation rate；
- gas ionization；
- stellar／gas kinematics。

但不同物理模型可能产生相似 SED。例如强 nebular emission lines 可以增强宽波段通量、模拟 Balmer break，使推断年龄从数百 Myr 降到几十 Myr。

### 9.3 Lyman-break selection

$$
\lambda_{\rm obs}=(1+z)\lambda_{\rm rest}.
$$

中性氢使 Lyman limit 或 Ly$\alpha$ 蓝侧的通量显著降低。随红移升高，吸收特征依次移动到更红滤光片，形成 dropout selection。

---

# Part II：星系形态与物理演化

## 10. 从 Great Debate 到 Hubble sequence

1920 年 Great Debate 中：

- Shapley 认为旋涡星云位于银河系内；
- Curtis 认为它们是独立的恒星系统。

Hubble 后来利用 Cepheid period-luminosity relation 测得 Andromeda 距离，确认它位于银河系之外。

这段历史的意义是：有了大量独立星系以后，天文学家首先需要建立可重复的分类语言，再研究分类背后的物理。

---

## 11. Hubble sequence

### 11.1 Elliptical：E0-E7

典型性质：

- 表面光滑，无旋臂和明显尘埃带；
- 通常以老、红恒星为主；
- 冷气体少，恒星形成弱；
- 主要由随机运动或 velocity dispersion 支撑；
- 巨型椭圆星系常见于星系团中心。

传统投影分类近似为

$$
n=10\left(1-\frac ba\right),
$$

其中 $a$、$b$ 是投影长轴和短轴。E0 近似圆形，E7 非常扁平。

这只描述二维投影，不唯一决定真实三维形状。

### 11.2 Spiral：Sa-Sc

共同结构：薄旋转盘、冷气体、尘埃、旋臂、中央核球。

| 性质 | Sa | Sb | Sc |
|---|---|---|---|
| 核球 | 大 | 中 | 小 |
| 旋臂 | 紧 | 中等 | 开放 |
| 恒星形成结块 | 少、较平滑 | 中等 | 明显 |
| 气体与恒星形成 | 较少 | 中等 | 较多 |

旋臂是动力学图样，不是一组永远固定在一起的恒星。

### 11.3 Barred spiral：SBa-SBc

棒是恒星轨道形成的旋转图样，不是刚性杆。它可以重新分配角动量，并把气体输运到中央，促进中央恒星形成或黑洞吸积。

### 11.4 Lenticular：S0

- 有核球和星盘；
- 缺少明显旋臂；
- 冷气体和恒星形成很少；
- 恒星颜色和年龄更像椭圆星系。

可以概括为：

> spiral 的结构，加上 elliptical 的恒星形成状态。

### 11.5 Irregular

“不规则”可能包含：

1. 质量小、气体丰富、恒星形成混乱的矮星系；
2. 正在碰撞或并合、暂时没有稳定形态的系统。

因此 irregular 有时是类型，有时只是演化阶段。

### 11.6 Early type 与 late type

- early type：elliptical、S0；
- late type：spiral、irregular。

这是历史遗留名称，不表示椭圆星系先形成、螺旋星系后形成。很多形态转化实际上沿着 spiral $\rightarrow$ S0／elliptical 的方向发生。

---

## 12. 观测角度与三维形状

### 12.1 Inclination

对理想无限薄圆盘：

$$
\boxed{\frac ba\approx\cos i}.
$$

- $i=0^\circ$：face-on，容易看见旋臂、棒和环。
- $i=90^\circ$：edge-on，容易看见尘埃带、盘厚度和 boxy/peanut bulge。

Edge-on 会隐藏旋臂和棒，使 Sa 与 S0 难以区分。

旋转速度需要倾角修正：

$$
v_{\rm los}=v_{\rm rot}\sin i,
$$

所以

$$
\boxed{v_{\rm rot}=\frac{v_{\rm los}}{\sin i}}.
$$

### 12.2 Oblate 与 prolate

Oblate spheroid：

$$
a=b>c.
$$

像被压扁的球，旋转自然倾向形成这种形状。

Prolate spheroid：

$$
a>b=c.
$$

像被拉长的橄榄球，通常需要各向异性的速度弥散支撑。

二者从特定方向看都可能近似 E0，因此单张二维图像不能唯一恢复三维结构。

### 12.3 Depth、resolution 与 misfits

- 图像不够深：外盘、潮汐尾和恒星晕会消失。
- 分辨率不够：远处星系看起来只是模糊光团。
- Polar ring、merger 等特殊系统可能无法放入标准 Hubble sequence。

---

## 13. 形态为什么能预测其他性质？

| 性质 | Elliptical / S0 | Spiral / irregular |
|---|---|---|
| 颜色 | 通常红 | 通常蓝 |
| 恒星年龄 | 通常老 | 年轻与老恒星并存 |
| 冷气体 | 少 | 多 |
| 恒星形成 | 弱或停止 | 持续 |
| 动力学支撑 | 随机运动／速度弥散 | 有序旋转 |
| 常见环境 | 高密度 | 低密度 |

这对应 color-mass diagram 中的：

- **red sequence：** 通常质量大、恒星形成弱、early type；
- **blue cloud：** 通常持续恒星形成、late type；
- **green valley：** 两者之间，常与 quenching 过程有关。

这些只是统计趋势。Red spirals、blue ellipticals 等反例说明形态、颜色和恒星形成状态并不是同一个物理量。

---

## 14. 为什么形态与环境密度相关？

观测到 morphology-density relation：

- field 中 spiral 和 irregular 比例较高；
- cluster core 中 S0 和 elliptical 比例较高。

原因同时包含 **nature** 与 **nurture**。

### 14.1 Nature：高密度区域形成得更早

早期较高的密度峰：

- 更早塌缩；
- 更早形成暗物质晕和恒星；
- 更早消耗气体；
- 经历更多并合；
- 最终更容易成为今天的 groups 和 clusters。

### 14.2 Nurture：进入高密度环境后被改造

#### Starvation

星系保留已有冷气体，但外围气体补给被切断：

$$
\text{停止补给}
\rightarrow
\text{逐渐耗尽现有气体}
\rightarrow
\text{恒星形成缓慢下降}
\rightarrow
\text{逐渐变红}.
$$

它可以在 group 和 cluster 中工作。

#### Ram-pressure stripping

星系高速穿过星系团热气体，承受

$$
\boxed{P_{\rm ram}\sim\rho_{\rm ICM}v^2}.
$$

冷气体被推出星盘，恒星则近似不受气体阻力影响。结果是保留恒星盘却失去形成新恒星的燃料，可能形成 S0-like system。

它需要致密热介质和高速度，因此主要是 cluster 过程。

#### Harassment

星系团内多次高速近距离掠过会累积地：

- 加热并增厚星盘；
- 增加恒星随机运动；
- 剥离外围恒星；
- 产生扰动和潮汐结构。

#### Major merger

两个质量相近的星系合并可以破坏星盘、随机化恒星轨道并形成 spheroidal remnant。

Major mergers 更容易发生在 group，而非今天的 cluster core，因为 group 中相对速度较低，更容易形成束缚系统。Cluster core 中星系速度过高，往往只会高速掠过。

很多 cluster ellipticals 可能先在 group 中形成或被改造，随后随 group 一起落入 cluster；这称为 preprocessing。

### 14.3 为什么气体停止后旋臂会变弱？

光学旋臂的高对比度很大程度上来自短寿命年轻恒星。如果气体被移除：

1. 新的大质量恒星不再形成；
2. 已有大质量恒星快速死亡；
3. 蓝色恒星形成区消失；
4. 星盘由更平滑的老年恒星主导。

因此星盘不必立刻被摧毁，也可以因 disc fading 而逐渐看起来像 S0。

### 14.4 这不是绝对规律

更准确的陈述是

$$
P(\text{early type}\mid\text{high density})
>
P(\text{early type}\mid\text{low density}),
$$

而不是“高密度环境中的每个星系都必然是 elliptical”。

---

## 15. 形态随红移演化

### 15.1 Cosmic noon

宇宙平均恒星形成率密度在 $z\sim2$ 达到峰值，今天约为峰值的十分之一。大部分现存恒星形成于约

$$
1\lesssim z\lesssim3.
$$

高红移星系通常显得更小、更致密、更结块，并合和强恒星形成也更常见。但必须先排除观测偏差。

### 15.2 Tolman surface-brightness dimming

$$
\boxed{
I_{\rm obs}=\frac{I_{\rm emitted}}{(1+z)^4}
}.
$$

在 $z=2$：

$$
(1+z)^4=3^4=81.
$$

因此暗弱外盘可能沉入噪声，只剩几个明亮恒星形成区，使一个完整星系看起来像多个碎块。

### 15.3 Band shifting / morphological $K$-correction

$$
\lambda_{\rm obs}=(1+z)\lambda_{\rm rest}.
$$

用 optical filter 观察高红移星系，实际可能看到 rest-frame UV。UV 主要追踪年轻恒星和局部恒星形成，因此正常星盘也可能显得很结块。

### 15.4 Resolution

远处结构可能不是不存在，而是被望远镜 PSF 混合。比较不同红移样本时，应尽量匹配：

- rest-frame wavelength；
- physical resolution；
- surface-brightness limit。

### 15.5 JWST 的作用

JWST 的 infrared observations 能在高红移观测 rest-frame optical。结果显示：

- 有序星盘比过去认为的出现得更早；
- 棒结构在早期宇宙已经存在；
- 早期宇宙确实更混乱，但过去 optical observations 夸大了混乱程度。

---

## 16. 低表面亮度结构：星系的化石记录

表面亮度常用

$$
\mathrm{mag\,arcsec^{-2}}
$$

表示。Magnitude 数字越大，表面亮度越低。

讲义给出的典型量级：

- 螺旋星系明亮内盘：约 $21\,\mathrm{mag\,arcsec^{-2}}$；
- 良好暗夜天空：约 $22\,\mathrm{mag\,arcsec^{-2}}$；
- 恒星晕和潮汐流：约 $28$-$30\,\mathrm{mag\,arcsec^{-2}}$。

主要结构：

- **Streams：** 尚未完全混合的被撕裂矮星系。
- **Shells：** 常与较径向或接近正面并合有关。
- **Stellar halos：** 多次吸积后已经较充分混合的残骸。

外晕轨道周期长、混合慢，因此比内区更久地保留并合历史。

观测难点：

- scattered light；
- flat-fielding error；
- sky subtraction；
- pipeline 可能把真实星系晕误认为背景并删除。

---

## 17. 多波段形态

同一个星系在不同波段可能呈现完全不同的形态。

| 波段 | 主要追踪对象或过程 |
|---|---|
| Ultraviolet | 年轻大质量恒星、近期恒星形成 |
| Optical | 普通星光以及尘埃遮挡 |
| Near-infrared | 较老恒星、恒星质量骨架，并较能穿透尘埃 |
| Far-infrared | 被星光加热后重新辐射的尘埃 |
| Radio 21 cm | 中性氢，恒星形成的原料 |
| Radio continuum | 超大质量黑洞产生的喷流和射电叶 |
| X-ray | 百万度热气体、黑洞吸积 |

因此

$$
\boxed{
\text{观测形态}
=f(\text{波段、深度、分辨率、角度})
}.
$$

Cygnus A 在 optical 中像平滑椭圆星系，在 radio 中却显示巨大的喷流和射电叶。这说明 optical morphology 只是星系物理的一部分。

---

## 18. 高频易混点

### 18.1 $P(k)$ 与 $\Delta^2(k)$

- $P(k)$：每个 Fourier mode 的平均功率。
- $\Delta^2(k)$：每个对数 $k$ 区间贡献的方差。
- 二者相差 $k^3/(2\pi^2)$。

### 18.2 模式更多与结构更多

$dN/d\ln k\propto k^3$ 只说明高 $k$ 区间包含更多 Fourier modes；真实 halo abundance 还取决于扰动振幅、transfer function 和塌缩阈值。

### 18.3 Critical density 与局部塌缩

$\rho_{\rm crit}$ 是宇宙背景几何的参考密度，不是所有局部气体云的直接塌缩判据。气体塌缩还要比较自引力、压力、冷却、旋转和湍流。

### 18.4 Jeans length 与 halo scale

Jeans length 描述有压力介质中的引力不稳定尺度；冷暗物质几乎没有普通气体的热压力，其小尺度截止更多由自由传播等微观性质决定。

### 18.5 Early type 与早形成

Early/late 是形态分类术语，不是严格时间顺序。

### 18.6 红色与年老

红色可能来自老恒星、尘埃或金属丰度；需要光谱与多波段数据打破退化。

### 18.7 Elliptical 与 S0

二者都可能红且缺少恒星形成，但 S0 保留星盘。Edge-on 时区分尤其困难。

### 18.8 Starvation 与 ram-pressure stripping

- Starvation：切断未来补给，慢。
- Ram pressure：直接移除现有冷气体，快，主要发生在 cluster。

### 18.9 Harassment 与 merger

- Harassment：多次高速掠过的累积作用。
- Merger：两个星系成为束缚系统并最终合并，更容易发生在 group。

### 18.10 真正演化与观测偏差

高红移星系确实总体更活跃，但 surface-brightness dimming、band shifting 和 resolution 会进一步夸大其不规则程度。

---

## 19. 公式速查

### 宇宙膨胀

$$
a=\frac{1}{1+z}
$$

$$
H^2=\frac{8\pi G}{3}\rho-\frac{k}{a^2}+\frac{\Lambda}{3}
$$

$$
\rho_{\rm crit}=\frac{3H^2}{8\pi G}
$$

### 密度扰动与功率谱

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

### 星系动力学与形态

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

### 高红移观测

$$
\lambda_{\rm obs}=(1+z)\lambda_{\rm rest}
$$

$$
I_{\rm obs}=\frac{I_{\rm emitted}}{(1+z)^4}
$$

---

## 20. 掌握要求

### 必须能够解释

1. Inflation、CMB、暗物质扰动和星系形成之间的因果关系。
2. $\delta$、$P(k)$、$\Delta^2(k)$ 和 $\sigma_R$ 分别是什么。
3. Jeans length 来自什么物理竞争，其中的 $\pi$ 从哪里出现。
4. 为什么冷暗物质能够在重子之前建立引力势阱。
5. 平坦旋转曲线为什么暗示暗物质晕。
6. E、S0、Sa-Sc、SBa-SBc 和 irregular 的分类依据。
7. 为什么 early/late 不能按字面理解成形成时间。
8. Inclination、depth、resolution 和 band 怎样改变形态分类。
9. Morphology-density relation 的 nature 与 nurture 两部分。
10. Starvation、ram-pressure stripping、harassment 和 merger 的条件与结果。
11. 为什么 merger 更容易发生在 group，而 ram pressure 主要发生在 cluster。
12. 为什么高红移星系看起来更不规则，以及怎样区分真实演化与观测偏差。
13. Streams、shells 和 stellar halo 如何记录并合历史。
14. 不同波段分别追踪什么物质或过程。

### 必须能够使用

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

### 不需要优先死背

- 每张示例图的 catalog 编号；
- 历史事件的每个精确日期；
- Hubble sequence 的所有扩展符号；
- 每篇图示文献的作者和年份。

---

## 21. 一页式总结

### Lecture 1

Inflation 留下近乎 scale-invariant 的原初曲率扰动。扰动在膨胀背景中通过引力增长；冷暗物质不受 photon pressure 阻碍，先形成 cosmic web 和暗物质晕。重子气体在 recombination 后落入势阱，经过加热、冷却、Jeans instability 和碎裂形成恒星与星系。功率谱描述不同尺度的扰动统计，而 Jeans length 决定有压力气体在哪些尺度上能够塌缩。

### Lecture 2

星系形成后，其形态由有序旋转、随机运动、气体含量、恒星形成、内部 secular evolution、并合和环境共同决定。Hubble sequence 提供描述语言，但二维形态受倾角、深度、分辨率和波段影响。低密度环境通常让星系保持气体供应和旋转盘；高密度环境形成较早，并通过 starvation、ram-pressure stripping、harassment 和 preprocessing 关闭恒星形成或改变结构。高红移形态还受到 $(1+z)^{-4}$ 表面亮度变暗、band shifting 和有限分辨率影响。低表面亮度结构与多波段图像能够揭示普通 optical morphology 隐藏的形成历史。

### 最终因果链

$$
\boxed{
\text{初始条件}
\rightarrow
\text{引力增长}
\rightarrow
\text{暗物质晕}
\rightarrow
\text{气体冷却与恒星形成}
\rightarrow
\text{星系结构}
\rightarrow
\text{内部和环境演化}
\rightarrow
\text{多波段可观测形态}
\rightarrow
\text{反推星系历史}
}
$$
