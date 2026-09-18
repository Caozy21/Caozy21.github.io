---
title: "AST1440 热辐射与观测：课堂笔记及习题 1.3、1.5、1.6 详解"
description: "热辐射、黑体谱、辐射热力学与观测温度，含习题 1.3、1.5、1.6 的中英文解答及射电观测扩展。"
date: "2026-09-17"
tags: ["AST1440","Thermal radiation","Observations","Exercises"]
order: 3
---

# AST1440 热辐射与观测：课堂笔记及习题 1.3、1.5、1.6 详解

> 课程：AST1440 — Radiation，2026 年 9 月 17 日 Thermal Emission。  
> 教材：Rybicki & Lightman，*Radiative Processes in Astrophysics*（简称 RL），§1.5，印刷页 15–27；习题 1.3、1.5、1.6，印刷页 46–47。  
> 整理日期：2026 年 9 月 18 日。  
> 本文按物理概念与计算的依赖关系整理讨论内容；关于定义、积分、符号、适用条件和观测含义的追问，均并入对应位置。教材题有中文推导和英文作答版本。

## 目录

1. [本节课讲了什么与补课顺序](#1-本节课讲了什么与补课顺序)
2. [统一符号与基本观测量](#2-统一符号与基本观测量)
3. [热平衡、LTE、热辐射与黑体](#3-热平衡lte热辐射与黑体)
4. [黑体能量密度与通量：为什么分别出现 4π 和 π](#4-黑体能量密度与通量为什么分别出现-4π-和-π)
5. [黑体热力学与习题 1.6：能量、熵和绝热膨胀](#5-黑体热力学与习题-16能量熵和绝热膨胀)
6. [从模式数推导普朗克谱](#6-从模式数推导普朗克谱)
7. [普朗克谱的性质、Rayleigh–Jeans 条件与波段速记](#7-普朗克谱的性质rayleighjeans-条件与波段速记)
8. [亮温、颜色温度与有效温度](#8-亮温颜色温度与有效温度)
9. [习题 1.3：光学薄球云与可分辨、不可分辨观测](#9-习题-13光学薄球云与可分辨不可分辨观测)
10. [1.3 的课堂扩展：背景、衍射极限、信噪比和积分时间](#10-13-的课堂扩展背景衍射极限信噪比和积分时间)
11. [习题 1.5：超新星遗迹的亮温](#11-习题-15超新星遗迹的亮温)
12. [1.5 的课堂扩展：天线温度、增益、系统温度与 SEFD](#12-15-的课堂扩展天线温度增益系统温度与-sefd)
13. [复习清单与下一节预习](#13-复习清单与下一节预习)
14. [资料与引用](#14-资料与引用)

---

## 1. 本节课讲了什么与补课顺序

2026 年 9 月 17 日这节课的主题是 **Thermal Emission（热辐射）**。课程网站最初的搜索缓存显示了 2025 年日程，随后直接核对的 2026 年网页明确列出以下内容；本笔记以 2026 年版为准。

| 项目 | 课程要求或实际课堂内容 | 补课优先级 |
|---|---|---|
| 阅读 | RL §1.5；其中详细推导可以略读 | 先掌握概念和主要公式 |
| 习题 1.3 | 从上一节继续；可分辨与不可分辨源 | 必须独立完成 |
| 1.3 扩展 | 背景光下的信噪比、孔径选择、望远镜口径作用 | 课堂重点 |
| 习题 1.5 | 由流量密度和角大小求亮温 | 必须独立完成 |
| 1.5 扩展 | 射电亮温、系统温度、增益、SEFD | 课堂重点 |
| 习题 1.6 | 黑体辐射熵；老师当堂没有展开讨论，网页附有补充说明 | 最后补上 |

课程采用先阅读、先尝试习题，再在课堂讨论习题和天文应用的方式。补课建议按以下顺序进行：

1. 阅读第 2–8 节，建立 §1.5 的概念和公式。
2. 独立尝试习题 1.3、1.5，再核对第 9、11 节的解答。
3. 阅读第 10、12 节，补上课堂中真正扩展的观测内容。
4. 完成第 5 节中的习题 1.6，以及气体和辐射绝热冷却的比较。

2026 年 9 月 21 日下一节才安排 **Absorption and emission lines**：阅读 RL §1.6，做 1.8、1.9，有时间再做 1.7；另思考冷的径向外流恒星风会产生什么线轮廓。这些是下一节的预习，不能误记为本次课堂已经讲过的内容。

课程安排依据：[AST1440：2026 年 9 月 17 日课程笔记](https://www.astro.utoronto.ca/~mhvk/AST1440/#orgeae1774)。

## 2. 统一符号与基本观测量

### 2.1 本文符号

聊天中有些符号在不同领域代表不同物理量。本文采用下表约定，以避免混淆。

| 符号 | 含义 | 典型单位或说明 |
|---|---|---|
| $\nu$ | 频率 frequency | Hz；是希腊字母 nu，不是速度 $v$ |
| $I_\nu$ | 比强度 specific intensity | $\mathrm{erg\,s^{-1}\,cm^{-2}\,Hz^{-1}\,sr^{-1}}$ |
| $J_\nu$ | 平均强度 mean intensity | $J_\nu=(4\pi)^{-1}\int I_\nu\,d\Omega$ |
| $f_\nu$ | 观测者处的源流量密度 flux density | $\mathrm{erg\,s^{-1}\,cm^{-2}\,Hz^{-1}}$ 或 Jy |
| $F_{\nu,\rm surface}$ | 源表面的单频通量 | 区别于地球处的 $f_\nu$ |
| $S_\nu$ | 源函数 source function | $j_\nu/\alpha_\nu$；不是本文的流量密度符号 |
| $B_\nu(T)$ | 普朗克函数 Planck function | 与 $I_\nu$ 同单位 |
| $j_\nu$ | 单位立体角的能量发射系数 emissivity | $\mathrm{erg\,s^{-1}\,cm^{-3}\,Hz^{-1}\,sr^{-1}}$ |
| $\alpha_\nu$ | 真实吸收系数 absorption coefficient | $\mathrm{cm^{-1}}$；LTE 公式中采用包括受激发射修正的净吸收约定 |
| $\sigma_\nu$ | 散射系数 scattering coefficient | $\mathrm{cm^{-1}}$，这里不是单粒子截面 |
| $\tau_\nu$ | 光学深度 optical depth | 无量纲，正方向需要说明 |
| $u_\nu,\ u$ | 谱能量密度、频率积分后的能量密度 | $u=\int u_\nu\,d\nu$ |
| $U$ | 总辐射能量 | $U=uV$ |
| $S_{\rm ent},\ s_{\rm ent}$ | 熵、熵密度 | $s_{\rm ent}=S_{\rm ent}/V$ |
| $a_{\rm rad}$ | 辐射常数 | $u=a_{\rm rad}T^4$ |
| $a_{\rm cos}$ | 宇宙尺度因子 | 与 $a_{\rm rad}$ 无关 |
| $\sigma_{\rm SB}$ | Stefan–Boltzmann 常数 | 与散射系数 $\sigma_\nu$ 无关 |
| $A_{\rm eff}$ | 望远镜有效收集面积 | 几何面积乘效率 |
| $T_A,\ T_{\rm sys}$ | 天线温度、系统温度 | 等效信号和噪声单位，不是天线实体温度 |

射电文献经常用 $S_\nu$ 表示流量密度，而 RL 用它表示源函数。本文所有源流量密度统一写为 $f_\nu$。

### 2.2 比强度、流量密度与光子计数

比强度的定义为

$$
dE=I_\nu\cos\theta\,dA\,dt\,d\nu\,d\Omega.
$$

$\theta$ 是传播方向与面积元法线的夹角。比强度保留方向信息，通量需要对方向积分：

$$
F_\nu=\int I_\nu\cos\theta\,d\Omega.
$$

对于天空上很小、位于仪器正前方的源，$\cos\theta\simeq1$，因此

$$
f_\nu\simeq\int_{\rm src}I_\nu\,d\Omega.
$$

若源在其角面积内近似均匀：

$$
\boxed{f_\nu\simeq I_\nu\Omega_{\rm src}}.
$$

比强度有 $\mathrm{sr^{-1}}$，流量密度没有。不能把二者直接混用。

由能量流量换算光子数时，窄频带内有

$$
\phi_\nu=\frac{f_\nu}{h\nu},\qquad
\mathcal I_\nu=\frac{I_\nu}{h\nu}.
$$

$\phi_\nu$ 是光子流量密度，$\mathcal I_\nu$ 是光子比强度。后文的泊松计数使用这些光子量。宽带时需要积分，例如

$$
\dot N_{\rm src}=
\int\frac{f_\nu A_{\rm eff}(\nu)}{h\nu}\,d\nu.
$$

### 2.3 Jy 是什么？

Jy 是 **jansky（央斯基）**，是流量密度单位，得名于射电天文学先驱 Karl Jansky：

$$
\boxed{
1\ \mathrm{Jy}
=10^{-26}\ \mathrm{W\,m^{-2}\,Hz^{-1}}
=10^{-23}\ \mathrm{erg\,s^{-1}\,cm^{-2}\,Hz^{-1}}
}.
$$

$\mathrm{Hz^{-1}}$ 表明它是每单位频率的流量，不是整个频带的总流量。若频带内 $f_\nu$ 近似恒定：

$$
f_{\rm band}\simeq f_\nu\Delta\nu.
$$

例如，$1\ \mathrm{Jy}$ 的源在 $100\ \mathrm{MHz}=10^8\ \mathrm{Hz}$ 宽的频带内，流量为

$$
10^{-26}\times10^8=10^{-18}\ \mathrm{W\,m^{-2}}.
$$

常用倍数为

$$
1\ \mathrm{mJy}=10^{-3}\ \mathrm{Jy},\quad
1\ \mathrm{\mu Jy}=10^{-6}\ \mathrm{Jy},\quad
1\ \mathrm{nJy}=10^{-9}\ \mathrm{Jy}.
$$

Jy 表示源的流量密度；Jy/sr 表示表面亮度。观测图中的 Jy/beam 还包含波束约定，不能直接当作 Jy/sr。

## 3. 热平衡、LTE、热辐射与黑体

### 3.1 物质与辐射的“平衡”指不同对象

| 中文 | 英文 | 关注的对象 |
|---|---|---|
| 热平衡 | thermal equilibrium | 温度、热交换和平衡分布；具体含义要看语境 |
| 热力学平衡 | thermodynamic equilibrium | 系统全部相关自由度的平衡 |
| 局域热力学平衡 | local thermodynamic equilibrium，LTE | 局部物质的平衡统计分布 |
| 非 LTE | non-LTE / non-local thermodynamic equilibrium，NLTE | 局部物质不能用 LTE 人口分布描述 |
| 辐射处于热平衡 | radiation in thermal equilibrium | 光子的平衡分布 |
| 辐射平衡 | radiative equilibrium | 辐射造成的净加热为零 |

“温度不随时间变化”不等于完整热力学平衡。一个受持续加热、又持续冷却的系统，也可以有稳定温度。

对于通常的非简并、非相对论物质，相应的平衡分布包括：

1. 粒子速度满足 Maxwell–Boltzmann distribution：

   $$
   f(\boldsymbol v)\propto\exp\left(-\frac{mv^2}{2kT}\right).
   $$

2. 同一电离阶段的不同能级人口满足 Boltzmann distribution：

   $$
   \frac{n_u}{n_l}
   =\frac{g_u}{g_l}
   \exp\left[-\frac{E_u-E_l}{kT}\right].
   $$

3. 相邻电离阶段满足 Saha ionization equation，电离比例由温度、电子密度等决定。

仅有电子速度近似 Maxwell 分布，不足以证明整个物质满足 LTE；激发和电离人口仍可能偏离平衡。

### 3.2 LTE 为什么有“local”？

LTE 是用该位置的 $T(\boldsymbol r)$、密度和组成，按平衡统计规律描述物质的近似。不同小区域可以有不同温度，系统也可以有能量流动。

碰撞足够快、局部弛豫时间短于宏观条件变化时间，是 LTE 常见的成立条件；具体能级人口还要比较碰撞与辐射跃迁过程。

LTE 不要求当地辐射已经满足

$$
I_\nu(\boldsymbol r,\boldsymbol n)=B_\nu[T(\boldsymbol r)].
$$

光子可能来自深处的热层、外部光源，也可能迅速逃逸，而物质的碰撞过程仍能维持近似平衡的人口。

non-LTE 指 LTE 近似不成立，不是“物质在另一个遥远位置达到平衡”。

### 3.3 黑体辐射与辐射平衡不能混同

同温封闭腔体中，辐射与腔壁充分达到平衡后：

$$
I_\nu=B_\nu(T),\qquad
\langle n_\nu\rangle=\frac{1}{e^{h\nu/kT}-1}.
$$

在其静止参考系中，辐射各向同性；腔体内部净通量为零，但光子仍在传播，吸收和发射仍不断发生。

黑体谱只取决于温度和频率。若两个同温平衡腔体在某频率上强度不同，用只允许该频率通过的窗口连接它们就会产生同温系统间的定向能量流，与平衡不符。因此平衡谱不能依赖腔体材料和形状。

辐射已经具有某个黑体分布，并不说明后来放入的物质瞬间达到平衡。例如向温度为 $T_{\rm rad}$ 的大腔体放入少量较冷物质，周围辐射可近似维持黑体，而物质仍在升温。只有说明“物质与辐射已共同达到完整平衡”，才保证它们具有相容的平衡状态和共同温度。

**Radiative equilibrium** 则只要求总的辐射净加热为零。在忽略非弹性散射能量交换的吸收、发射模型中：

$$
\boxed{
4\pi\int_0^\infty(\alpha_\nu J_\nu-j_\nu)\,d\nu=0
}.
$$

这并不要求每个频率都单独平衡，也不保证 LTE。物质可以吸收高频光，再以低频光放出同样多的能量。

若另行假设 LTE，上式成为

$$
\int_0^\infty\alpha_\nu[J_\nu-B_\nu(T)]\,d\nu=0.
$$

积分为零仍不能推出逐频率的 $J_\nu=B_\nu$；不同频率的净吸收和净发射可以抵消。

### 3.4 Kirchhoff 定律：为什么热辐射有 $S_\nu=B_\nu$？

在 §1.5 的热平衡物质模型中，把一小块物质放进同温黑体腔体，它不能改变已平衡的辐射。因此其发射与净吸收满足

$$
\boxed{j_\nu=\alpha_\nu B_\nu(T)}.
$$

这就是热发射的 Kirchhoff 定律。于是

$$
\boxed{S_\nu=\frac{j_\nu}{\alpha_\nu}=B_\nu(T)}.
$$

它约束的是物质的发射与吸收关系；实际光束强度还要解转移方程：

| 表述 | 数学关系 | 物理含义 |
|---|---|---|
| 热发射的源函数 | $S_\nu=B_\nu(T)$ | 介质对发射和吸收的平衡强度标度 |
| 黑体辐射强度 | $I_\nu=B_\nu(T)$ | 实际辐射已经具有该黑体强度 |

### 3.5 转移方程的符号与“为什么不是 $S_\nu=2I_\nu$”

本文默认沿光传播方向 $s$ 增大，定义

$$
d\tau_\nu=\alpha_\nu ds.
$$

则

$$
\frac{dI_\nu}{ds}=-\alpha_\nu I_\nu+j_\nu,
\qquad
\boxed{\frac{dI_\nu}{d\tau_\nu}=-I_\nu+S_\nu}.
$$

$dI_\nu/d\tau_\nu$ 是强度的变化率，不是 $I_\nu$，也不自动等于 $-I_\nu$。所以不能把导数直接替换成强度再得出 $S_\nu=2I_\nu$。

有些恒星大气推导把法向光学深度 $\tau_{\nu,z}$ 定义为向内增加，并取 $\mu$ 为光线与向外法线夹角的余弦，此时方程为

$$
\mu\frac{dI_\nu}{d\tau_{\nu,z}}=I_\nu-S_\nu.
$$

符号差异来自坐标正方向，不是两种物理规律。

对同温物质与辐射的完全平衡：

$$
I_\nu=S_\nu=B_\nu(T)
\quad\Longrightarrow\quad
\frac{dI_\nu}{d\tau_\nu}=0.
$$

右边为零表示强度不变，不表示没有光或没有发射。吸收与发射恰好补偿。例如 $I_\nu=S_\nu=10$，穿过 $d\tau=0.01$ 时，一阶吸收减少 $0.1$，发射增加 $0.1$，净变化为零。

对于给定 $S_\nu$，若 $I_\nu<S_\nu$，光束增强；若 $I_\nu>S_\nu$，光束减弱；相等时不变。

### 3.6 等温条件如何给出简单解析解？

一般形式为

$$
I_\nu(\tau_{\nu,0})
=I_{\nu,\rm in}e^{-\tau_{\nu,0}}
+\int_0^{\tau_{\nu,0}}
S_\nu(t)e^{-(\tau_{\nu,0}-t)}\,dt,
$$

此处 $t$ 从入口沿传播方向增加。

等温仅意味着 $T(s)=T_0$。进一步满足 LTE、忽略散射时，才有

$$
S_\nu(s)=B_\nu(T_0)=\text{沿光路的常数}.
$$

“常数”指固定频率下不随位置变化，不是说 $B_\nu$ 不随频率变化。

此时

$$
\frac{dI_\nu}{d\tau_\nu}+I_\nu=B_\nu.
$$

乘以积分因子 $e^{\tau_\nu}$：

$$
\frac{d}{d\tau_\nu}(I_\nu e^{\tau_\nu})
=B_\nu e^{\tau_\nu}.
$$

从入口积分到出口，得到

$$
\boxed{
I_{\nu,\rm out}
=I_{\nu,\rm in}e^{-\tau_{\nu,0}}
+B_\nu(T_0)(1-e^{-\tau_{\nu,0}})
}.
$$

数学上只要 $S_\nu$ 沿路为常数，就能得到同样结构的解，把 $B_\nu$ 换为该常源函数即可。等温、LTE、忽略散射是保证 $S_\nu=B_\nu(T_0)$ 的一组充分条件。

吸收系数不必处处相同，可以有

$$
\tau_{\nu,0}=\int_{\rm in}^{\rm out}\alpha_\nu(s)\,ds.
$$

等温不等于均匀：等温只固定温度，密度和吸收系数仍可变化；完全均匀时才可直接写 $\tau_{\nu,0}=\alpha_\nu L$。

### 3.7 为什么越厚，出射强度反而越接近 $B_\nu$？

不是传播损失减小。原有入射光的剩余比例为 $e^{-\tau}$：

| $\tau$ | 入射光剩余比例 | 无背景、等温 LTE 介质自身贡献 $I_\nu/B_\nu$ |
|---:|---:|---:|
| 0.1 | 0.905 | 0.095 |
| 1 | 0.368 | 0.632 |
| 3 | 0.0498 | 0.950 |
| 10 | $4.54\times10^{-5}$ | 0.99995 |

越厚，入射光损失越大；但介质同时产生新辐射。新增的辐射在途中也会被吸收，最后的强度是两种作用的结果。

若改用 $t$ 表示某层到出射表面的光学深度，该层的出射贡献为

$$
dI_{\nu,\rm out}=S_\nu(t)e^{-t}\,dt.
$$

因此无背景、常源函数时

$$
I_{\nu,\rm out}
=\int_0^{\tau_{\nu,0}}B_\nu e^{-t}\,dt
=B_\nu(1-e^{-\tau_{\nu,0}}).
$$

深处 $t\gg1$ 的光仍难以直接逃出；厚介质的可见发射主要来自靠近表面、沿视线光学深度为量级 1 的区域。继续加深处的物质贡献很小，因此强度饱和。

### 3.8 光学厚一定是黑体吗？

不一定。最简单的充分条件是：在所讨论频段内，近似等温、LTE、真实吸收和热发射占主导，并且 $\tau_\nu\gg1$。这时 $I_\nu\simeq B_\nu(T)$。

有三类重要例外。

**温度随深度变化。** 即使 LTE 成立，$S_\nu=B_\nu[T(\tau_{\nu,z})]$ 也可随深度变化。平面平行大气中，在源函数近似线性的条件下，Eddington–Barbier 关系给出

$$
I_\nu(0,\mu)\simeq S_\nu(\tau_{\nu,z}=\mu).
$$

不同频率的 $\tau_{\nu,z}\sim1$ 可以位于不同物理深度，看到不同温度。整体谱未必对应同一个 $T$。例如温度向外降低的大气中，谱线吸收系数较大，线心形成位置更高、更冷，可产生吸收线；斜视时形成位置也较高，可产生临边昏暗。这些是温度梯度的应用，不是本次课堂已完成全部谱线内容的意思。

**散射占主导。** 定义

$$
\chi_\nu=\alpha_\nu+\sigma_\nu,\qquad
\epsilon_\nu=\frac{\alpha_\nu}{\alpha_\nu+\sigma_\nu}.
$$

相干、各向同性散射加上 LTE 热发射时，总源函数为

$$
S_\nu=\epsilon_\nu B_\nu+(1-\epsilon_\nu)J_\nu.
$$

总消光光学深度很大，不代表每个光子都被真正吸收、重新产生。纯弹性散射主要改变传播方向，不能单独保证形成当地普朗克分布。均匀介质中常用数量级关系

$$
\tau_{\rm eff}\sim\sqrt{\tau_{\rm abs}\tau_{\rm ext}}
$$

估计热化；扩散近似中可能带 $\sqrt3$。$\tau_{\rm eff}\gg1$ 表示深处可充分热化，但这本身仍不保证边界出射谱是黑体：散射主导的表面层可有 $J_\nu\ne B_\nu$，使发出的谱偏离黑体。

**只有某些频率光学厚。** 对等温 LTE 介质：

$$
I_\nu=B_\nu(T)(1-e^{-\tau_\nu}).
$$

若 $\tau_\nu$ 强烈依赖频率，整体谱是带频率相关发射率的热谱，常用 modified blackbody 描述；greybody 一词的使用有约定差异，严格“灰”通常指发射率不随频率变化。

此外，不透光可能来自反射或散射。高度反射的物体透射率很低，也不是理想黑体；黑体要求吸收率接近 1。

## 4. 黑体能量密度与通量：为什么分别出现 4π 和 π

### 4.1 能量密度是所有方向能量的总和

一般辐射场有

$$
u_\nu=\frac1c\int_{4\pi}I_\nu(\boldsymbol n)\,d\Omega
=\frac{4\pi}{c}J_\nu.
$$

$1/c$ 把单位时间通过面积的能量，换成单位体积中存在的能量；光在 $dt$ 内经过长度 $c\,dt$。

若场各向同性，$J_\nu=I_\nu$。进一步是黑体平衡场，$I_\nu=B_\nu$，因此

$$
\boxed{
u=\frac{4\pi}{c}\int_0^\infty B_\nu(T)\,d\nu
}.
$$

所以此式确实使用了“比强度与能量密度的关系 + 各向同性 + $I_\nu=B_\nu$”。

### 4.2 表面向外通量需要投影因子

理想黑体表面向外半球的强度为 $B_\nu$。向外单频通量为

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

因此

$$
\boxed{
F_{\rm surface}=\pi\int_0^\infty B_\nu(T)\,d\nu
}.
$$

不是 $4\pi$，因为只算向外半球；也不是 $2\pi$，因为还有 $\cos\theta$。斜穿表面的光束，其法向贡献较小。

### 4.3 可以理解为“大圆面积”吗？

可以理解为**单位半球沿法线投影后的圆盘面积**。单位球面上 $dA=d\Omega$，投影面积为

$$
dA_{\rm proj}=\cos\theta\,d\Omega.
$$

整个半球投影到赤道平面，恰好得到半径为 1 的圆盘：

$$
\int_{\rm outward}\cos\theta\,d\Omega=\pi.
$$

严格说，大圆是一条圆周，这里指它围成的圆盘面积。这个单位球是描述传播方向的球，不是天体真实大小，也不是望远镜口径。

### 4.4 腔体内部与表面外侧不能混用

| 几何情形 | 能量密度 | 净单频通量 |
|---|---|---|
| 腔体内部，所有方向均为 $B_\nu$ | $u_\nu=4\pi B_\nu/c$ | $F_\nu=0$ |
| 理想平面黑体表面外侧，仅向外半球有辐射 | $u_\nu=2\pi B_\nu/c$ | $F_\nu=\pi B_\nu$ |

常用的 $F_{\rm surface}=cu_{\rm cavity}/4$ 联系的是表面向外通量与内部各向同性腔体能量密度；不要把两个 $u$ 的几何含义混淆。

球形天体的光度

$$
L=4\pi R^2F_{\rm surface}
$$

中的 $4\pi$ 来自天体表面积，和方向积分是另一回事。

## 5. 黑体热力学与习题 1.6：能量、熵和绝热膨胀

### 5.1 从热力学推导 $u\propto T^4$

各向同性辐射的压强为 $p=u/3$。对可逆平衡过程：

$$
T\,dS_{\rm ent}=dU+p\,dV.
$$

这里 $u$ 是能量密度，$U=uV$ 是总能量，不能把大小写混淆。黑体平衡辐射的 $u$ 只依赖温度，所以

$$
dU=d(uV)
=V\frac{du}{dT}\,dT+u\,dV.
$$

代入 $p=u/3$：

$$
T\,dS_{\rm ent}
=V\frac{du}{dT}\,dT
+\left(u+\frac{u}{3}\right)dV.
$$

因此

$$
\boxed{
dS_{\rm ent}
=\frac{V}{T}\frac{du}{dT}\,dT
+\frac{4u}{3T}\,dV
}.
$$

这里的 $4u/3$ 来自两个部分：

$$
\underbrace{u\,dV}_{dU\text{ 中体积变化带来的项}}
+
\underbrace{\frac{u}{3}dV}_{p\,dV\text{ 功项}}
=\frac{4u}{3}dV.
$$

例如在定温膨胀时，不仅要为新增体积提供辐射能量 $u\,dV$，还要补偿对外做功 $p\,dV$。热量需求由这两项共同决定。

### 5.2 “熵是状态函数，混合偏导相等”是什么意思？

熵只依赖当前状态 $S_{\rm ent}=S_{\rm ent}(T,V)$，不依赖到达该状态的路径，因此

$$
dS_{\rm ent}
=\left(\frac{\partial S_{\rm ent}}{\partial T}\right)_VdT
+\left(\frac{\partial S_{\rm ent}}{\partial V}\right)_TdV.
$$

记

$$
M(T,V)=\frac{V}{T}\frac{du}{dT},\qquad
N(T,V)=\frac{4u}{3T}.
$$

若 $S_{\rm ent}$ 足够平滑，则先对 $T$ 再对 $V$ 求导，与反过来求导相同：

$$
\boxed{
\left(\frac{\partial M}{\partial V}\right)_T
=
\left(\frac{\partial N}{\partial T}\right)_V
}.
$$

直观上，从 $(T,V)$ 到 $(T+dT,V+dV)$，先升温再膨胀，或先膨胀再升温，最终熵变相同。这是微分式必须满足的可积性条件。

左边为

$$
\left(\frac{\partial M}{\partial V}\right)_T
=\frac1T\frac{du}{dT},
$$

右边为

$$
\left(\frac{\partial N}{\partial T}\right)_V
=\frac43\left(\frac1T\frac{du}{dT}-\frac{u}{T^2}\right).
$$

令两边相等，乘以 $3T^2$：

$$
3T\frac{du}{dT}=4T\frac{du}{dT}-4u,
$$

因此

$$
T\frac{du}{dT}=4u,\qquad
\frac{du}{u}=4\frac{dT}{T}.
$$

积分后

$$
\ln u=4\ln T+\text{常数},
\qquad
\boxed{u=a_{\rm rad}T^4}.
$$

热力学给出温度的四次方关系，但不确定 $a_{\rm rad}$ 的数值；该常数需要微观统计物理。

### 5.3 Stefan–Boltzmann 定律

由第 4 节的两个角积分结果：

$$
u=\frac{4\pi}{c}\int B_\nu\,d\nu,\qquad
F_{\rm surface}=\pi\int B_\nu\,d\nu,
$$

可得

$$
\boxed{
F_{\rm surface}=\frac{c}{4}u
=\sigma_{\rm SB}T^4
},\qquad
\boxed{\sigma_{\rm SB}=\frac{a_{\rm rad}c}{4}}.
$$

常用 cgs 数值为

$$
a_{\rm rad}\simeq7.566\times10^{-15}\
\mathrm{erg\,cm^{-3}\,K^{-4}},
$$

$$
\sigma_{\rm SB}\simeq5.670\times10^{-5}\
\mathrm{erg\,cm^{-2}\,s^{-1}\,K^{-4}}.
$$

球形黑体有 $L=4\pi R^2\sigma_{\rm SB}T^4$。

### 5.4 习题 1.6：完整推导黑体辐射熵

题目要求证明

$$
S_{\rm ent}=\frac43a_{\rm rad}VT^3.
$$

现在已知 $u=a_{\rm rad}T^4$，所以

$$
U=a_{\rm rad}VT^4,\qquad
p=\frac13a_{\rm rad}T^4.
$$

对可逆过程：

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

除以 $T$：

$$
dS_{\rm ent}
=4a_{\rm rad}VT^2\,dT+\frac43a_{\rm rad}T^3\,dV.
$$

用乘积法则检查：

$$
\begin{aligned}
d\left(\frac43a_{\rm rad}VT^3\right)
&=\frac43a_{\rm rad}
\left(T^3\,dV+3VT^2\,dT\right)\\
&=\frac43a_{\rm rad}T^3\,dV
+4a_{\rm rad}VT^2\,dT.
\end{aligned}
$$

与 $dS_{\rm ent}$ 完全相同，所以

$$
S_{\rm ent}=\frac43a_{\rm rad}VT^3+C.
$$

取零温时辐射熵为零，$C=0$：

$$
\boxed{S_{\rm ent}=\frac43a_{\rm rad}VT^3}.
$$

如果不容易直接认出全微分，可以先固定 $V$ 积分：

$$
\left(\frac{\partial S_{\rm ent}}{\partial T}\right)_V
=4a_{\rm rad}VT^2
\quad\Longrightarrow\quad
S_{\rm ent}=\frac43a_{\rm rad}VT^3+f(V).
$$

再对 $V$ 求导，与已知的 $\partial S_{\rm ent}/\partial V$ 比较，得到 $f'(V)=0$，然后确定零温常数。

单位检查：$a_{\rm rad}VT^4$ 是能量，除以 $T$ 是能量/温度，正好是熵单位。

熵密度为

$$
s_{\rm ent}=\frac{S_{\rm ent}}{V}=\frac43a_{\rm rad}T^3.
$$

在平衡光子气体、化学势为零的情况下，也可写为

$$
S_{\rm ent}=\frac{U+pV}{T}.
$$

它是本体系的热力学 Euler 关系，不是任意物质都可以直接套用、忽略化学势项的公式。

### 5.5 辐射为什么绝热膨胀时 $T\propto R^{-1}$？

对保持平衡、可逆的绝热膨胀，熵不变：

$$
VT^3=\text{常数}
\quad\Longrightarrow\quad
\boxed{T\propto V^{-1/3}}.
$$

若整体线性尺度为 $R$，$V\propto R^3$：

$$
\boxed{T_{\rm rad}\propto R^{-1}}.
$$

同时

$$
U=a_{\rm rad}VT^4\propto R^3R^{-4}=R^{-1},
$$

辐射总能量也会下降，对应膨胀做功。

“绝热”本身只指没有热交换；有不可逆过程时熵仍可增加。这里使用的是没有熵产生的平衡绝热过程。

### 5.6 理想气体为什么是 $T\propto V^{-(\gamma-1)}$？

对粒子数 $N$ 固定、热容近似不随温度改变的理想气体，令 $C_V$ 为每粒子的定容热容：

$$
U=NC_VT,\qquad PV=NkT.
$$

在可逆绝热过程中：

$$
dU+P\,dV=0.
$$

代入：

$$
NC_V\,dT+\frac{NkT}{V}\,dV=0,
$$

即

$$
\frac{dT}{T}=-\frac{k}{C_V}\frac{dV}{V}.
$$

理想气体有 $C_P-C_V=k$，定义 $\gamma=C_P/C_V$，于是

$$
\frac{k}{C_V}=\gamma-1.
$$

积分可得

$$
\boxed{TV^{\gamma-1}=\text{常数}},\qquad
\boxed{T\propto V^{-(\gamma-1)}}.
$$

经典非相对论单原子理想气体只有三个平动自由度：

$$
C_V=\frac32k,\quad C_P=\frac52k,\quad\gamma=\frac53.
$$

因此

$$
\boxed{T_{\rm gas}\propto V^{-2/3}\propto R^{-2}}.
$$

这不是任意理想气体都必然遵循的 $R^{-2}$：分子自由度、温度相关热容或相对论效应都会改变结果。

| 系统 | 总内能 | 压强 | 平衡绝热温度标度 |
|---|---|---|---|
| 非相对论单原子理想气体 | $U=\frac32NkT$ | $p=2U/(3V)$ | $T\propto R^{-2}$ |
| 黑体辐射 | $U=a_{\rm rad}VT^4$ | $p=U/(3V)$ | $T\propto R^{-1}$ |

尺度增大到两倍时，前者温度降到 $1/4$，后者降到 $1/2$。根本区别在状态方程以及内能对温度、体积的依赖。

辐射也满足 $pV^{4/3}=\text{常数}$，所以可称其绝热指数为 $4/3$；但不应不加说明地把固定粒子数理想气体的热容推导直接套到平衡光子气体上。

平衡光子数没有必须固定的外加约束，但在保持黑体谱、守恒熵的绝热膨胀中，$n_\gamma\propto T^3$ 且 $VT^3$ 不变，因此总光子数也可保持不变。“光子数密度下降”不等于“该过程总光子数必然下降”。

### 5.7 课程中的应用

均匀宇宙膨胀时，线性尺度随 $a_{\rm cos}$ 增大，黑体辐射温度满足

$$
T_{\rm rad}\propto a_{\rm cos}^{-1},\qquad T(z)=T_0(1+z).
$$

超新星中，被困的辐射随抛射物膨胀而绝热冷却。如果没有放射性衰变或其他热源补充，等到光子能够较快逃出时，初始储存的辐射能量可能已大幅减少。不同超新星还可有激波或中心引擎等供能，不能理解为所有超新星都只靠放射性衰变。

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

## 6. 从模式数推导普朗克谱

### 6.1 状态密度 $g(\nu)$ 是什么？

定义

$$
\boxed{
g(\nu)\,d\nu=
\text{单位物理体积内，频率在 }\nu\text{ 到 }\nu+d\nu
\text{ 的电磁模式数}
}.
$$

英文为 density of photon states 或 density of electromagnetic modes，单位为 $\mathrm{m^{-3}\,Hz^{-1}}$。

它不是光子数密度：一个模式可以容纳 $0,1,2,\ldots$ 个光子。模式数相当于“可占据的独立电磁振荡方式有多少”，光子数则还要乘每模式的占据数。

### 6.2 在波矢空间数模式

考虑尺寸远大于波长的盒子，$V=L_xL_yL_z$。采用周期边界条件：

$$
k_i=\frac{2\pi n_i}{L_i},\qquad n_i\in\mathbb Z.
$$

相邻允许波矢间隔为 $\Delta k_i=2\pi/L_i$。每一个允许波矢占据的 $k$ 空间体积是

$$
\Delta^3k=\frac{(2\pi)^3}{V}.
$$

因此单位 $k$ 空间体积中有 $V/(2\pi)^3$ 个波矢。电磁波还有两个独立横向偏振：

$$
dN_{\rm modes}
=\frac{2V}{(2\pi)^3}\,d^3k.
$$

真空中

$$
k=\frac{2\pi\nu}{c}.
$$

频率只依赖 $k$ 的大小，因此 $k$ 到 $k+dk$ 的所有方向构成一个薄球壳：

$$
d^3k=4\pi k^2\,dk.
$$

于是

$$
dN_{\rm modes}
=\frac{2V}{(2\pi)^3}\,4\pi k^2\,dk
=\frac{V}{\pi^2}k^2\,dk.
$$

换成频率，$dk=(2\pi/c)d\nu$：

$$
\begin{aligned}
dN_{\rm modes}
&=\frac{V}{\pi^2}
\left(\frac{2\pi\nu}{c}\right)^2
\frac{2\pi}{c}\,d\nu\\
&=V\frac{8\pi\nu^2}{c^3}\,d\nu.
\end{aligned}
$$

所以

$$
\boxed{g(\nu)=\frac{8\pi\nu^2}{c^3}}.
$$

$\nu^2$ 来自球壳面积随 $k^2$ 增长；因子 2 来自偏振；$4\pi$ 来自所有方向。教材若先按单位立体角计数，会得到

$$
\frac{dN_{\rm modes}}{V\,d\nu\,d\Omega}
=\frac{2\nu^2}{c^3},
$$

再对方向积分即得 $g(\nu)$。周期边界的行波计数与大腔体的驻波计数给出相同的体积主导结果，不应混用两套边界下的正负波矢计数而重复乘 2。

### 6.3 每个模式的平均能量

一个频率为 $\nu$ 的模式含 $n$ 个光子时，辐射能量为 $E_n=nh\nu$。在温度 $T$ 下：

$$
P_n\propto e^{-nh\nu/kT}.
$$

令 $q=e^{-h\nu/kT}$。几何级数给出

$$
\sum_{n=0}^\infty q^n=\frac1{1-q},
\qquad
\sum_{n=0}^\infty nq^n=\frac{q}{(1-q)^2}.
$$

因此

$$
\langle n_\nu\rangle
=\frac{\sum nq^n}{\sum q^n}
=\frac{q}{1-q}
=\boxed{\frac1{e^{h\nu/kT}-1}}.
$$

这是光子化学势为零的 Bose–Einstein 占据数。平均每模式能量为

$$
\boxed{
\langle E_\nu\rangle
=h\nu\langle n_\nu\rangle
=\frac{h\nu}{e^{h\nu/kT}-1}
}.
$$

腔壁可以创造或吸收光子，因此平衡光子数不受固定粒子数约束。决定这里零化学势的是这种粒子数可变的平衡条件，不能仅用“粒子无质量”作为充分理由。

### 6.4 得到能量密度与普朗克函数

模式密度乘以每模式平均能量：

$$
u_\nu=g(\nu)\langle E_\nu\rangle
=\boxed{
\frac{8\pi h\nu^3}{c^3}
\frac1{e^{h\nu/kT}-1}
}.
$$

再用各向同性场的 $u_\nu=4\pi B_\nu/c$：

$$
\boxed{
B_\nu(T)=
\frac{2h\nu^3}{c^2}
\frac1{e^{h\nu/kT}-1}
}.
$$

频率的三次方来自“模式数的 $\nu^2$”乘“单光子能量的 $\nu$”；高频端的抑制则来自平均占据数。

令 $x=h\nu/kT$，利用

$$
\int_0^\infty\frac{x^3}{e^x-1}\,dx=\frac{\pi^4}{15},
$$

有

$$
\int_0^\infty B_\nu(T)\,d\nu
=\frac{2\pi^4k^4}{15h^3c^2}T^4.
$$

因此

$$
\boxed{\sigma_{\rm SB}=\frac{2\pi^5k^4}{15h^3c^2}},
\qquad
\boxed{a_{\rm rad}=\frac{8\pi^5k^4}{15h^3c^3}}.
$$

## 7. 普朗克谱的性质、Rayleigh–Jeans 条件与波段速记

### 7.1 Rayleigh–Jeans 条件

核心条件为

$$
\boxed{x=\frac{h\nu}{kT}\ll1},
\qquad
\boxed{\lambda\gg\frac{hc}{kT}}.
$$

它比较单个光子的能量 $h\nu$ 与热能尺度 $kT$。低频、长波长只是相对于所讨论温度而言；“射电波段”本身不是严格的数学条件。

由于 $e^x-1\simeq x$：

$$
B_\nu(T)\simeq
\frac{2h\nu^3}{c^2}\frac{kT}{h\nu}
=\boxed{\frac{2kT\nu^2}{c^2}}.
$$

这是 Rayleigh–Jeans law。固定频率时 $B_\nu\propto T$，固定温度时 $B_\nu\propto\nu^2$。

从占据数看：

$$
\langle n_\nu\rangle\simeq\frac{kT}{h\nu}\gg1,
\qquad
\langle E_\nu\rangle\simeq kT.
$$

这是电磁模式的经典高占据数极限。若错误地把 $B_\nu\propto\nu^2$ 外推到任意高频，总能量积分发散，即紫外灾难。

### 7.2 近似误差怎么判断？

准确值与 RJ 近似之比为

$$
\frac{B_\nu^{\rm Planck}}{B_\nu^{\rm RJ}}
=\frac{x}{e^x-1}.
$$

RJ 近似总是高估相同温度的普朗克强度。若以准确值为分母，相对误差为

$$
\delta_{\rm RJ}
=\frac{B_\nu^{\rm RJ}-B_\nu^{\rm Planck}}{B_\nu^{\rm Planck}}
=\frac{e^x-1}{x}-1
\simeq\frac{x}{2}.
$$

| $x=h\nu/kT$ | RJ 高估的相对误差 |
|---:|---:|
| 0.02 | 约 1.01% |
| 0.1 | 约 5.17% |
| 0.2 | 约 10.70% |
| 1 | 约 71.83%，不宜使用 RJ 近似 |

“远小于 1”需要多严格取决于所需精度。

### 7.3 Wien 高频极限与温度单调性

当 $h\nu\gg kT$，分母中的 1 可忽略：

$$
\boxed{
B_\nu(T)\simeq\frac{2h\nu^3}{c^2}e^{-h\nu/kT}
}.
$$

高能光子占据数受到指数抑制。另一方面，在任意固定频率：

$$
\frac{\partial B_\nu}{\partial T}
=\frac{2h^2\nu^4}{c^2kT^2}
\frac{e^{h\nu/kT}}{(e^{h\nu/kT}-1)^2}>0.
$$

更热的黑体在每个频率都更亮；未重新归一化的不同温度黑体曲线不相交。此单调性也保证亮温定义的唯一性。

### 7.4 峰值与 $B_\nu$、$B_\lambda$ 的区别

求 $B_\nu$ 峰值，令 $x=h\nu/kT$，由求导得到

$$
x=3(1-e^{-x}).
$$

取非零根 $x=2.821439\ldots$：

$$
\boxed{h\nu_{\max}=2.82144\,kT},
\qquad
\boxed{\frac{\nu_{\max}}T\simeq5.879\times10^{10}\ \mathrm{Hz\,K^{-1}}}.
$$

因此升温使峰值向高频移动。

每单位波长的强度要带变量变换的 Jacobian：

$$
B_\lambda\,d\lambda=B_\nu\,|d\nu|,
\qquad
B_\lambda=B_\nu\frac{c}{\lambda^2}.
$$

不能只在 $B_\nu$ 中把 $\nu$ 替换为 $c/\lambda$。正确结果为

$$
B_\lambda(T)=\frac{2hc^2}{\lambda^5}
\frac1{e^{hc/\lambda kT}-1}.
$$

$B_\lambda$ 峰值的非零根满足 $y=5(1-e^{-y})$，$y\simeq4.9651$，给出

$$
\boxed{\lambda_{\max}^{(B_\lambda)}T
\simeq2.898\times10^{-3}\ \mathrm{m\,K}}.
$$

所以

$$
\lambda_{\max}^{(B_\lambda)}
\ne\frac{c}{\nu_{\max}^{(B_\nu)}}.
$$

按等宽频率格子或等宽波长格子分配同一份能量，峰值可以不同。若画 $\nu B_\nu$ 等对数频带能量，也会有另一峰值位置；报告峰值必须说明谱的定义。

### 7.5 波长、能量与波段：简单记忆版

基本换算：

$$
\boxed{E=h\nu=\frac{hc}{\lambda}},
\qquad
\boxed{E(\mathrm{eV})\simeq\frac{1240}{\lambda(\mathrm{nm})}},
$$

$$
\boxed{E(\mathrm{keV})\simeq\frac{1.240}{\lambda(\mathrm{nm})}}.
$$

从长波、低能到短波、高能，记“射电 → 红外 → 可见 → 紫外 → X → 伽马”。微波通常视为广义射电的一部分，以下为了记忆单独列出。

| 波段 | 粗略波长范围 | 粗略光子能量范围 | 记忆锚点 |
|---|---|---|---|
| 长于米波的射电部分 | $>1\ \mathrm m$ | $<1.24\times10^{-6}\ \mathrm{eV}$ | 米及更长 |
| 微波、毫米波 | 约 $1\ \mathrm m$ 至 $1\ \mathrm{mm}$ | $1.24\times10^{-6}$ 至 $1.24\times10^{-3}\ \mathrm{eV}$ | cm、mm，CMB |
| 红外 | 约 $1\ \mathrm{mm}$ 至 $700\ \mathrm{nm}$ | 约 $10^{-3}$ 至 $1.8\ \mathrm{eV}$ | $\mathrm{\mu m}$ |
| 可见光 | 约 $700$ 至 $400\ \mathrm{nm}$ | 约 $1.8$ 至 $3.1\ \mathrm{eV}$ | 红长、紫短 |
| 紫外 | 约 $400$ 至 $10\ \mathrm{nm}$ | 约 $3$ 至 $124\ \mathrm{eV}$ | 某些高能紫外可电离原子 |
| X 射线 | 约 $10$ 至 $0.01\ \mathrm{nm}$ | 约 $0.1$ 至 $100\ \mathrm{keV}$ | nm、keV |
| 伽马射线 | 粗略 $<0.01\ \mathrm{nm}$ | 粗略 $>100\ \mathrm{keV}$ | 高能 |

这些是记忆范围，边界不唯一。尤其 X 与伽马也可按产生机制区分，能量范围会重叠。红外也不专属于热辐射；波段和发射机制是不同分类。

| 波长 | 频率 | 光子能量示例 |
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

还可记住

$$
kT=1\ \mathrm{eV}\ \Longleftrightarrow\
T\simeq1.1605\times10^4\ \mathrm K.
$$

这是热能尺度换算，不等于黑体谱峰的光子能量；$B_\nu$ 峰值是 $2.82144kT$。

## 8. 亮温、颜色温度与有效温度

### 8.1 亮温：某频率的强度等于哪个黑体？

定义

$$
\boxed{I_\nu=B_\nu[T_b(\nu)]}.
$$

亮温首先是辐射强度的表示方式，不自动等于物质实际温度；非热辐射也可以定义亮温。

反解完整普朗克函数：

$$
T_b(\nu)=
\frac{h\nu/k}
{\ln\left(1+\frac{2h\nu^3}{c^2I_\nu}\right)}.
$$

在 $h\nu\ll kT_b$ 的 RJ 极限下：

$$
\boxed{T_b=\frac{c^2I_\nu}{2k\nu^2}
=\frac{\lambda^2I_\nu}{2k}}.
$$

射电中也常把这个线性公式直接作为“RJ 亮温”的单位换算定义；离开 RJ 区域时，它与完整普朗克反解的亮温不同，需明确约定。

对已知角面积的均匀源：

$$
\boxed{T_b=\frac{\lambda^2f_\nu}{2k\Omega_{\rm src}}}.
$$

没有角大小，只有总流量密度，不能单独确定源自身亮温。

### 8.2 亮温与气体温度的关系

等温、LTE、忽略散射，且相关项均在 RJ 极限时，转移方程可以写为

$$
\frac{dT_b}{d\tau_\nu}=-T_b+T,
$$

其解为

$$
T_{b,\rm out}=T_{b,\rm in}e^{-\tau_\nu}
+T(1-e^{-\tau_\nu}).
$$

无背景时：

$$
\boxed{T_b=T(1-e^{-\tau_\nu})\le T}.
$$

| 条件 | 结果 |
|---|---|
| $\tau_\nu\ll1$ | $T_b\simeq T\tau_\nu$ |
| $\tau_\nu\gg1$ | $T_b\simeq T$ |

例如 $T=10^4\ \mathrm K$ 的气体，在 $\tau=0.01,1,\gg1$ 时，亮温分别约为 $100,\ 6321,\ 10^4\ \mathrm K$。气体很热但光学薄，仍可看起来很暗。

$T_b\le T$ 依赖上述热源和无入射背景条件，不能作为任意非热辐射或被明亮背景照射的系统的温度定理。

### 8.3 颜色温度：匹配谱形

若用

$$
f_\nu=C B_\nu(T_c)
$$

拟合谱形，并允许归一化 $C$ 自由变化，得到颜色温度 $T_c$。它主要关注频谱形状、颜色比或峰值位置。

例如相关频带内 $I_\nu=wB_\nu(T)$，且 $w<1$ 不随频率变化，谱形不变，故 $T_c=T$；但亮度降低，亮温小于 $T$。若 $w$ 或光学深度随频率变化，颜色温度未必等于实际温度。

仅在纯 RJ 区域中，$f_\nu\propto CT_c\nu^2$，温度与归一化退化，不能只靠 $\nu^2$ 的谱形确定温度。

### 8.4 有效温度：匹配总表面通量

定义

$$
\boxed{F_{\rm surface}=\sigma_{\rm SB}T_{\rm eff}^4}.
$$

即使谱不是黑体，也可以定义一个发出相同总表面通量的等效黑体温度。对球形源：

$$
T_{\rm eff}=\left(\frac{L}{4\pi R^2\sigma_{\rm SB}}\right)^{1/4}.
$$

地球处的流量经过几何稀释：

$$
f_{\rm bol}=\left(\frac Rd\right)^2\sigma_{\rm SB}T_{\rm eff}^4.
$$

不能把观测者处的 $f_{\rm bol}$ 直接当成表面通量。

| 温度 | 由什么信息确定 | 是否天然等于物质温度 |
|---|---|---|
| $T_b(\nu)$ | 单频绝对比强度 | 不一定 |
| $T_c$ | 谱形、颜色比、峰值 | 不一定 |
| $T_{\rm eff}$ | 总表面辐射通量 | 不一定 |

对同一个均匀、理想黑体，三者都等于 $T$；一般天体不必相等。

## 9. 习题 1.3：光学薄球云与可分辨、不可分辨观测

### 9.1 题意与假设

一个半径为 $R$、距离为 $d$ 的球云，以均匀速率 $\Gamma$ 产生 X 射线光子：

$$
[\Gamma]=\mathrm{photons\,cm^{-3}\,s^{-1}}.
$$

忽略吸收，视为光学薄。探测器的接收波束半张角为 $\Delta\theta$，有效面积为 $\Delta A$。求：

- 源完全可分辨时，朝球心方向的光子强度。
- 源完全不可分辨时，整个接收波束内的平均光子强度。

采用各向同性发射、$d\gg R$、小角度和理想均匀接收波束近似。$\Gamma$ 已是题目所指光子频段内的总产生率，因此本题解答不再额外乘带宽。

### 9.2 (a) 可分辨时，沿中心视线积分

每单位立体角的光子发射系数：

$$
j_N=\frac{\Gamma}{4\pi}.
$$

距离投影球心 $b$ 的视线穿过长度

$$
\ell(b)=2\sqrt{R^2-b^2},\qquad 0\le b\le R.
$$

光学薄意味着沿路发射直接相加：

$$
I_N(b)=\int j_N\,ds
=\frac{\Gamma}{4\pi}\,2\sqrt{R^2-b^2}.
$$

故

$$
\boxed{I_N(b)=\frac{\Gamma}{2\pi}\sqrt{R^2-b^2}},
\qquad
\boxed{I_{N,\rm center}=\frac{\Gamma R}{2\pi}}.
$$

单位是 $\mathrm{photons\,s^{-1}\,cm^{-2}\,sr^{-1}}$。

这里问的是中心方向，不能先把整个球云的光度除以源角面积；后者给的是源面平均强度，和中心值不同。

中心强度不含 $d$：在自由传播、忽略宇宙学效应时，已分辨源的表面亮度不随距离平方衰减。每个物理小区域的流量与角面积都按 $d^{-2}$ 变化，其比值不变。直观上，可分辨要求波束尺度远小于源角尺度 $R/d$。

### 9.3 (b) 不可分辨时，用总光子流量除以波束立体角

总光子光度为

$$
\dot N_\gamma
=\Gamma\frac{4\pi R^3}{3}.
$$

地球处光子流量：

$$
\Phi=\frac{\dot N_\gamma}{4\pi d^2}
=\frac{\Gamma R^3}{3d^2}.
$$

接收波束的立体角为

$$
\Omega_{\rm det}
=2\pi(1-\cos\Delta\theta)
\simeq\pi(\Delta\theta)^2.
$$

整个源位于波束内，且波束响应近似恒定时：

$$
\boxed{
\langle I_N\rangle_{\rm beam}
=\frac{\Phi}{\Omega_{\rm det}}
\simeq\frac{\Gamma R^3}{3\pi d^2(\Delta\theta)^2}
}.
$$

这是波束平均强度。源本身可能很亮，但被一个更大的接收波束稀释。

计数率为 $\dot N_{\rm det}=\Phi\Delta A$。反推强度时

$$
\langle I_N\rangle_{\rm beam}
=\frac{\dot N_{\rm det}}{\Delta A\,\Omega_{\rm det}},
$$

所以 $\Delta A$ 消掉。面积影响收到的计数与精度，不改变源固有的比强度。

### 9.4 中心强度、源平均强度、波束平均强度

源角面积

$$
\Omega_{\rm src}\simeq\pi(R/d)^2.
$$

因此源圆盘内平均强度为

$$
\langle I_N\rangle_{\rm src}
=\frac{\Phi}{\Omega_{\rm src}}
=\boxed{\frac{\Gamma R}{3\pi}}
=\frac23I_{N,\rm center}.
$$

| 量 | 结果 | 平均范围 |
|---|---|---|
| 中心强度 | $\Gamma R/(2\pi)$ | 球心方向 |
| 源平均强度 | $\Gamma R/(3\pi)$ | 真实源圆盘 |
| 不可分辨时波束平均强度 | $\Gamma R^3/[3\pi d^2(\Delta\theta)^2]$ | 探测器波束 |

也可从比强度积分检查总流量：

$$
\begin{aligned}
\Phi
&=\frac{2\pi}{d^2}\int_0^R I_N(b)b\,db\\
&=\frac{\Gamma}{d^2}
\int_0^R b\sqrt{R^2-b^2}\,db
=\frac{\Gamma R^3}{3d^2}.
\end{aligned}
$$

这与总光子光度法一致。

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

## 10. 1.3 的课堂扩展：背景、衍射极限、信噪比和积分时间

### 10.1 课堂采用的均匀圆盘不是原题的光学薄球

为讨论孔径，课程采用表面亮度为常数的圆盘模型：

$$
\mathcal I_{\nu,\rm src}(\theta)=
\begin{cases}
\mathcal I_{\nu,0}, & \theta\le R/d,\\
0, & \theta>R/d.
\end{cases}
$$

这里用 $\mathcal I_\nu$ 表示每单位频率的光子强度。原题的 $I_N(b)\propto\sqrt{R^2-b^2}$ 是中心亮、边缘暗的另一模型。

为避免把不同“角面积”混淆，使用：

| 符号 | 含义 |
|---|---|
| $\Omega_{\rm src}$ | 源本身在天空上的角面积 |
| $\Omega_{\rm ap}$ | 数据分析中选定的测光孔径角面积 |
| $\Omega_{\rm beam}$ | 望远镜角响应积分所定义的波束立体角 |
| $\Omega_{\rm eff}$ | 指定测量方法下，背景噪声对应的有效角面积 |

在课程的理想 top-hat 接收模型中，孔径和波束可用同一个 $\Omega_{\rm det}$ 处理。真实 PSF 下这些量的数值常数不同，但如果测量区域始终按相同比例随 PSF 缩放，它们都具有相同的 $\lambda^2/D^2$ 标度。

### 10.2 源与背景的计数

对居中、均匀圆盘以及均匀背景，假设面积和光谱在带宽内近似不变：

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

若使用已经在频带上积分的光子强度，则删去 $\Delta\nu$，避免重复积分。若使用能量强度，必须先除以 $h\nu$ 或在宽频带上显式积分。

### 10.3 为什么噪声是计数的平方根？

这里采用独立光子计数的 Poisson 模型：

$$
\operatorname{Var}(N)=N.
$$

若背景平均值已精确知道，观测总计数的涨落仍来自源和背景：

$$
\sigma_N=\sqrt{N_{\rm src}+N_{\rm bkg}}.
$$

即使减去背景的平均数，也不能减去它在这次观测中的随机涨落。因此

$$
\boxed{\mathrm{S/N}=
\frac{N_{\rm src}}{\sqrt{N_{\rm src}+N_{\rm bkg}}}}.
$$

若背景是用独立、同面积、同时间的空白场估计，背景估计还贡献一次方差：

$$
\mathrm{S/N}=
\frac{N_{\rm src}}{\sqrt{N_{\rm src}+2N_{\rm bkg}}}.
$$

更大的背景参考区可降低后一个估计误差，但源孔径内本身的背景光子涨落仍存在。

### 10.4 为什么最佳孔径大致包住源？

源占主导时：

$$
\mathrm{S/N}\simeq\sqrt{N_{\rm src}}.
$$

增大孔径到包含全部源时，信噪比达到饱和；背景完全可忽略时，再增大不会带来收益。

背景占主导时，$\mathrm{S/N}\simeq N_{\rm src}/\sqrt{N_{\rm bkg}}$：

| 孔径范围 | 源计数 | 背景计数 | 信噪比随孔径变化 |
|---|---|---|---|
| $\Omega_{\rm ap}<\Omega_{\rm src}$ | $\propto\Omega_{\rm ap}$ | $\propto\Omega_{\rm ap}$ | $\propto\sqrt{\Omega_{\rm ap}}$ |
| $\Omega_{\rm ap}>\Omega_{\rm src}$ | 已饱和 | $\propto\Omega_{\rm ap}$ | $\propto1/\sqrt{\Omega_{\rm ap}}$ |

均匀圆盘模型中，最佳孔径约为源的角面积。真实源和 PSF 有平滑边缘，最佳孔径需在漏掉部分源光与引入更多背景之间权衡，未必包含所有光子。

### 10.5 $\Omega_{\rm beam}$ 是什么？

理想点源经望远镜成像后也不是数学上的一个点，而是有限角宽的 point-spread function（PSF，点扩散函数）。对于峰值归一化为 1 的角响应 $P(\theta,\phi)$：

$$
\boxed{\Omega_{\rm beam}=\int P(\theta,\phi)\,d\Omega}.
$$

它是仪器角响应的有效面积，不是天体的真实角面积。若响应是半角为 $\Delta\theta$ 的 top-hat：

$$
\Omega_{\rm beam}\simeq\pi(\Delta\theta)^2.
$$

不可分辨源具有 $\Omega_{\rm src}\ll\Omega_{\rm beam}$。对于圆对称 Gaussian，若 $\theta_{\rm FWHM}$ 为半高全宽：

$$
\Omega_{\rm beam}=\frac{\pi}{4\ln2}\theta_{\rm FWHM}^2.
$$

真实背景噪声所用的角面积还依赖估计方法。例如归一化为单位积分的 PSF 为 $p(\Omega)$，在均匀白噪声下作最优 PSF 拟合，会出现 $\Omega_{\rm eff}=1/\int p^2d\Omega$。它一般不等于峰值归一化的 $\int P\,d\Omega$，但对自相似 PSF 有相同角尺度平方标度。

### 10.6 为什么衍射角尺度是 $\lambda/D$？

直径为 $D$ 的口径两端，对偏离光轴小角度 $\theta$ 的波有路径差

$$
\Delta\ell\simeq D\sin\theta\simeq D\theta.
$$

当路径差达到波长量级，不同口径位置的波开始明显相消：

$$
D\theta\sim\lambda
\quad\Longrightarrow\quad
\boxed{\theta_{\rm beam}\sim\frac{\lambda}{D}}.
$$

圆形、均匀照明口径的准确衍射图样是 Airy pattern：

$$
P(\theta)=
\left[\frac{2J_1(x)}{x}\right]^2,\qquad
x=\frac{\pi D\sin\theta}{\lambda}.
$$

其中 $J_1$ 是第一类一阶 Bessel 函数，与辐射平均强度 $J_\nu$ 无关。第一暗环半径约为

$$
\theta_{\rm null}=1.22\frac{\lambda}{D}.
$$

立体角是二维角面积，因此

$$
\boxed{\Omega_{\rm beam}\propto(\lambda/D)^2}.
$$

课程的 $\Omega\simeq(\pi/4)(\lambda/D)^2$ 是把 $\lambda/D$ 当作粗略角直径的圆盘估计；它不是 Airy 第一暗环所围面积的准确公式。不同波束定义的系数不同，但不改变 $D^{-2}$ 标度。

例如理想无损天线的有效面积与完整响应波束满足天线定理

$$
A_{\rm eff}\Omega_{\rm beam}=\lambda^2.
$$

这里须使用相容的有效面积和波束定义，不能把“第一暗环圆盘面积”“几何收集面积”和任意 top-hat 系数混在一起并要求精确等号。

### 10.7 点源的信号与背景怎样随口径变化？

考虑不可分辨点源，观测频带、效率、背景不变。记点源光子流量密度为 $\phi_\nu$，有效面积为

$$
A_{\rm eff}=\eta\frac{\pi D^2}{4}.
$$

测量区域保留一个固定的源光比例 $q$，其背景有效角面积为 $\Omega_{\rm eff}$。对简单孔径，$\Omega_{\rm eff}$ 就是孔径面积。则

$$
N_{\rm src}=q\phi_\nu A_{\rm eff}\Delta\nu\,t,
$$

$$
N_{\rm bkg}
=\mathcal I_{\nu,\rm bkg}\Omega_{\rm eff}
A_{\rm eff}\Delta\nu\,t.
$$

课程的简化情况取 $q\simeq1$。保留 $q$ 可提醒：真实 Airy 图样具有翼部，有限孔径不会严格收集全部光子。

衍射极限下，按固定 PSF 比例选孔径时，$q$ 近似不变：

$$
A_{\rm eff}\propto D^2,\qquad
\Omega_{\rm eff}\propto\lambda^2D^{-2}.
$$

固定波长和时间时：

$$
\boxed{N_{\rm src}\propto D^2},\qquad
\boxed{N_{\rm bkg}\propto A_{\rm eff}\Omega_{\rm eff}\propto D^0}.
$$

均匀背景每个衍射测量单元内的计数率近似不变：集光面积增加与天空接收角面积减少相互抵消。

### 10.8 信噪比的完整代入

采用背景均值已知的公式：

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

背景受限时，$\mathcal I_{\nu,\rm bkg}\Omega_{\rm eff}\gg q\phi_\nu$：

$$
\mathrm{S/N}\simeq
q\phi_\nu
\sqrt{\frac{A_{\rm eff}\Delta\nu\,t}
{\mathcal I_{\nu,\rm bkg}\Omega_{\rm eff}}}.
$$

故

$$
\mathrm{S/N}\propto
\sqrt{\frac{A_{\rm eff}}{\Omega_{\rm eff}}}
\sqrt{\Delta\nu\,t}.
$$

代入衍射尺度：

$$
\sqrt{\frac{A_{\rm eff}}{\Omega_{\rm eff}}}
\propto\sqrt{\frac{D^2}{\lambda^2/D^2}}
=\frac{D^2}{\lambda}.
$$

固定波长和带宽：

$$
\boxed{\mathrm{S/N}\propto D^2\sqrt t}.
$$

直径加倍，信号增加四倍；一个对应衍射单元的背景计数和噪声近似不变，故信噪比增加四倍。这个比较要求加倍前后都仍处于点源、背景受限情形。

显式的 $1/\lambda$ 因子仅是在保持其他量不变的数学标度；实际跨波段比较时，源谱、背景、效率和带宽也会变化，不能据此独立判断哪个波段更灵敏。

### 10.9 达到固定信噪比的时间如何求？

定义计数率

$$
r_{\rm src}=q\phi_\nu A_{\rm eff}\Delta\nu,\qquad
r_{\rm bkg}=\mathcal I_{\nu,\rm bkg}
\Omega_{\rm eff}A_{\rm eff}\Delta\nu.
$$

则

$$
\mathrm{S/N}
=\frac{r_{\rm src}t}{\sqrt{(r_{\rm src}+r_{\rm bkg})t}}
=\frac{r_{\rm src}\sqrt t}{\sqrt{r_{\rm src}+r_{\rm bkg}}}.
$$

设目标值为 $Q$，平方并解出 $t$：

$$
\boxed{
t=Q^2\frac{r_{\rm src}+r_{\rm bkg}}{r_{\rm src}^2}
}.
$$

代入物理量：

$$
\boxed{
t=Q^2
\frac{q\phi_\nu+\mathcal I_{\nu,\rm bkg}\Omega_{\rm eff}}
{q^2\phi_\nu^2A_{\rm eff}\Delta\nu}
}.
$$

在背景受限极限：

$$
t\simeq
Q^2\frac{\mathcal I_{\nu,\rm bkg}\Omega_{\rm eff}}
{q^2\phi_\nu^2A_{\rm eff}\Delta\nu}.
$$

所以固定其余条件，

$$
\boxed{
t\propto\frac{\Omega_{\rm eff}}{A_{\rm eff}}
\propto D^{-4}
}.
$$

直径加倍，所需时间为原来的 $1/16$。这是理想标度；口径继续变大后可能转为源噪声占主导，或者源被分辨开，届时不再保持 $D^{-4}$。

### 10.10 与源主导、视宁度主导情况比较

源主导时：

$$
\mathrm{S/N}\simeq\sqrt{N_{\rm src}}
\propto D\sqrt t,\qquad
t_{\rm fixed\ Q}\propto D^{-2}.
$$

如果角分辨率受大气视宁度限制，$\Omega_{\rm eff}\propto\theta_{\rm seeing}^2$，不会继续随 $D^{-2}$ 缩小。背景受限点源：

$$
\boxed{
\mathrm{S/N}\propto\frac{D}{\theta_{\rm seeing}}\sqrt t
},\qquad
\boxed{
t_{\rm fixed\ Q}\propto\frac{\theta_{\rm seeing}^2}{D^2}
}.
$$

| 情况 | 固定其他条件的信噪比 | 固定信噪比的时间 |
|---|---|---|
| 点源、源 Poisson 噪声主导 | $D\sqrt t$ | $D^{-2}$ |
| 点源、均匀背景主导、衍射极限 | $D^2\sqrt t$ | $D^{-4}$ |
| 点源、均匀背景主导、视宁度限制 | $(D/\theta_{\rm seeing})\sqrt t$ | $\theta_{\rm seeing}^2D^{-2}$ |

改善观测地点或自适应光学可缩小点源测量所需的角面积，减少背景。对已分辨的延展源，则要重新确定测量面积与信号范围，不能直接套点源结果。

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

## 11. 习题 1.5：超新星遗迹的亮温

### 11.1 题目数据

一个超新星遗迹的观测角直径为

$$
\theta=4.3\ \mathrm{arcmin},
$$

在 $100\ \mathrm{MHz}=10^8\ \mathrm{Hz}$ 处的流量密度为

$$
f_\nu=1.6\times10^{-19}\
\mathrm{erg\,cm^{-2}\,s^{-1}\,Hz^{-1}}
=1.6\times10^4\ \mathrm{Jy}.
$$

题目要求在热辐射假设下求亮温及所处谱区，判断更紧凑发射区域的影响，预测黑体假设下的峰值频率，并讨论物质温度。

### 11.2 (a) 从角面积到亮温

角直径转弧度：

$$
\theta=4.3\frac{\pi}{180\times60}
=1.25082\times10^{-3}\ \mathrm{rad}.
$$

按圆盘估计，注意题给的是直径：

$$
\Omega_{\rm src}=\pi\left(\frac{\theta}{2}\right)^2
=1.22879\times10^{-6}\ \mathrm{sr}.
$$

由流量得到圆盘平均强度；均匀亮度时它就是各处强度：

$$
\overline I_\nu=\frac{f_\nu}{\Omega_{\rm src}}
=1.30209\times10^{-13}\
\mathrm{erg\,cm^{-2}\,s^{-1}\,Hz^{-1}\,sr^{-1}}.
$$

先采用 RJ 近似，并在计算后检查条件：

$$
T_b=\frac{c^2\overline I_\nu}{2k\nu^2}.
$$

用

$$
c=2.99792458\times10^{10}\ \mathrm{cm\,s^{-1}},\qquad
k=1.380649\times10^{-16}\ \mathrm{erg\,K^{-1}},
$$

可得

$$
\boxed{T_b=4.23808\times10^7\ \mathrm K
\simeq4.2\times10^7\ \mathrm K}.
$$

检查 RJ 条件：

$$
\frac{h\nu}{k}=4.79924\times10^{-3}\ \mathrm K,
$$

$$
\boxed{\frac{h\nu}{kT_b}=1.1324\times10^{-10}\ll1}.
$$

所以 100 MHz 位于极深的 Rayleigh–Jeans 区。先用近似求值、再检验得到的值是否满足近似条件，是自洽检查；这里近似误差完全可以忽略。

若在上述无背景热源条件下 $T\ge T_b$，则用 $T_b$ 检查已经足以证明物质温度对应的 $h\nu/kT$ 更小。

### 11.3 (b) 发射区域更紧凑

相同 $f_\nu$ 下，

$$
T_b=\frac{\lambda^2f_\nu}{2k\Omega_{\rm src}}
\propto\Omega_{\rm src}^{-1}\propto\theta^{-2}.
$$

若真实发射面积是当前估计的比例 $f_{\rm fill}<1$：

$$
\boxed{T_{b,\rm actual}=\frac{T_{b,\rm estimated}}{f_{\rm fill}}}.
$$

例如真实角直径只有一半，面积是 $1/4$，亮温升高为四倍。因此 $4.2\times10^7\ \mathrm K$ 是用给定角范围得到的最低平均亮温估计，而非确认的真实局部温度。

### 11.4 (c) 若是黑体，峰值在哪个频率？

在额外的单温黑体假设下，$T=T_b$。对于 $B_\nu$ 的峰值：

$$
\nu_{\max}=\frac{2.821439\,kT_b}{h}.
$$

代入估计值：

$$
\boxed{\nu_{\max}\simeq2.4915\times10^{18}\ \mathrm{Hz}}.
$$

对应光子能量为

$$
\boxed{h\nu_{\max}\simeq10.30\ \mathrm{keV}},
$$

位于 X 射线波段。该频率对应的波长为 $c/\nu_{\max}\simeq0.1203\ \mathrm{nm}$，但它不是 $B_\lambda$ 曲线的峰值波长。

如果实际角面积更小、黑体温度更高，预测的峰值频率也更高。仅仅假设“热辐射”而非黑体，并不足以从一个射电测量点确定整个光谱峰值；一般还需要频率相关光学深度。

### 11.5 (d) 对物质温度的约束

对于等温、无入射背景、LTE、忽略散射的热发射：

$$
I_\nu=B_\nu(T)(1-e^{-\tau_\nu})\le B_\nu(T).
$$

由 $I_\nu=B_\nu(T_b)$ 和 $B_\nu(T)$ 的单调性：

$$
\boxed{T\ge T_b\gtrsim4.2\times10^7\ \mathrm K}.
$$

光学厚时 $T\simeq T_b$；光学薄且 RJ 条件下，$T_b\simeq T\tau_\nu$，实际温度可以更高。若温度不均匀，这个观测约束不能改写为“每一处气体都至少这么热”；至少需要有足够热的发射成分来提供观测亮度。

如此高的亮温使热辐射解释带来强烈的温度要求，提示应考虑非热解释。许多超新星遗迹的射电连续谱由同步辐射产生，但仅凭本题单频流量和角大小不能证明该源一定非热；还需要谱形等证据。

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

## 12. 1.5 的课堂扩展：天线温度、增益、系统温度与 SEFD

### 12.1 为什么射电观测用“温度”表示功率？

在 RJ 极限，强度与温度线性相关：

$$
I_\nu=\frac{2kT_b}{\lambda^2}.
$$

这使得信号、天空背景、接收机噪声可以用同一种等效温度单位表示，便于相加和比较。这种温度不是说天线实体被源加热了几 K，而是功率的另一种单位。

天线温度 $T_A$ 是接收天线响应的温度表示；源自身亮温 $T_b$ 是源单位角面积的辐射强度表示，二者不能混同。

### 12.2 单偏振与双偏振的因子 2

以下采用标准单接收偏振约定，并令 $f_\nu$ 为非偏振点源的总流量密度：

$$
P_{\nu,\rm src}^{(1)}
=\frac12A_{\rm eff}f_\nu
=k\Delta T_A.
$$

一半的源功率进入一个偏振通道。因此

$$
\boxed{\Delta T_A=\frac{A_{\rm eff}f_\nu}{2k}}.
$$

单偏振的系统噪声谱功率为

$$
P_{\nu,\rm noise}^{(1)}=kT_{\rm sys}.
$$

若把两个相同、正交偏振通道的功率相加：

$$
P_{\nu,\rm src}^{(2)}=A_{\rm eff}f_\nu
=2k\Delta T_A,\qquad
P_{\nu,\rm noise}^{(2)}=2kT_{\rm sys}.
$$

课程笔记中 $P_\nu/(2k)$ 可以按双偏振总谱功率理解；不要把它和单偏振 $P_\nu/k$ 混用。$P_\nu$ 是每单位频率的功率，窄带总功率才是 $P\simeq P_\nu\Delta\nu$。

### 12.3 未分辨源为什么有波束稀释？

理想无损天线，取归一化响应 $P(\Omega)$ 和相容的有效面积：

$$
A_{\rm eff}\Omega_{\rm beam}=\lambda^2.
$$

天线温度可表示成波束加权亮温：

$$
T_A=\frac{1}{\Omega_{\rm beam}}
\int P(\Omega)T_b(\Omega)\,d\Omega.
$$

若源远小于波束、位于波束中心，源内 $P\simeq1$，且源亮度近似均匀：

$$
\boxed{
T_A\simeq T_b\frac{\Omega_{\rm src}}{\Omega_{\rm beam}}
}.
$$

例如 $T_b=10^4\ \mathrm K$ 的源只占波束面积的 1%，则约产生 $100\ \mathrm K$ 的天线温度。

对足够大、均匀填满理想天线波束的源，$T_A\simeq T_b$。真实仪器还要考虑主波束效率、损耗和旁瓣，不能把这个理想等号无条件套用。

因此课程笔记对不可分辨源写出的“亮温”更精确地对应天线温度或波束平均温度。测得流量和仪器面积，可以求 $\Delta T_A$；求源的内禀 $T_b$ 仍需源角大小。

### 12.4 望远镜增益 $G$ 是什么，为什么定义？

定义

$$
\boxed{G=\frac{\Delta T_A}{f_\nu}}.
$$

这里指射电点源增益，常用 K/Jy，不是电子放大器倍数，也不是天线无量纲方向增益。

若 $f_\nu$ 用 SI 流量密度单位，公式为 $G_{\rm SI}=A_{\rm eff}/(2k)$。若改用 Jy，必须包含单位转换：

$$
\boxed{
G\ [\mathrm{K/Jy}]
=\frac{A_{\rm eff}\ [\mathrm{m^2}]}{2k\ [\mathrm{J/K}]}
\times10^{-26}
}.
$$

数值上

$$
\boxed{
G\simeq3.6215\times10^{-4}
\left(\frac{A_{\rm eff}}{\mathrm{m^2}}\right)
\mathrm{K/Jy}
}.
$$

例如 $G=2\ \mathrm{K/Jy}$ 意味着 $1\ \mathrm{Jy}$ 的居中点源产生 $\Delta T_A=2\ \mathrm K$ 的信号。

增益的用途是把天体与接收机使用的单位联系起来：

$$
\boxed{\Delta T_A=Gf_\nu},
\qquad
\boxed{f_\nu=\Delta T_A/G}.
$$

它用于校准观测流量、比较同一个点源在不同仪器中的响应，并与有效收集面积相联系。单独增大后端电子放大倍数通常同时放大信号与输入噪声，不能等同于提高这里的点源灵敏度。

### 12.5 系统温度 $T_{\rm sys}$ 是什么？

它是接收机输入端参考的总噪声功率的等效温度，常包含

$$
T_{\rm sys}\simeq
T_{\rm receiver}+T_{\rm sky}+T_{\rm atmosphere}
+T_{\rm spillover}+\cdots.
$$

严格组合各项时需要计入传输、效率和参考面的约定；这里展示的是其物理来源。系统温度越高，平均噪声功率越大。

但 $T_{\rm sys}$ 不是最终测量的 rms 误差。经过带宽和时间平均，温度测量误差可以远小于 $T_{\rm sys}$，这正是可以探测弱源的原因。

只看增益不够：

| 望远镜 | $G$ | $T_{\rm sys}$ | $1\ \mathrm{Jy}$ 的 $\Delta T_A/T_{\rm sys}$ |
|---|---:|---:|---:|
| A | $2\ \mathrm{K/Jy}$ | $100\ \mathrm K$ | $2/100=0.02$ |
| B | $1\ \mathrm{K/Jy}$ | $20\ \mathrm K$ | $1/20=0.05$ |

B 虽然增益小，源相对于系统噪声的比例却更大。重要的是 $G/T_{\rm sys}$。

### 12.6 SEFD 为什么定义？为什么越小越灵敏？

SEFD 是 **System Equivalent Flux Density（系统等效流量密度）**：

$$
\boxed{\mathrm{SEFD}=\frac{T_{\rm sys}}G}.
$$

用物理单位写：

$$
\mathrm{SEFD}_{\rm SI}=\frac{2kT_{\rm sys}}{A_{\rm eff}}.
$$

换成 Jy：

$$
\boxed{
\mathrm{SEFD}\ [\mathrm{Jy}]
=\frac{2kT_{\rm sys}}{A_{\rm eff}}\times10^{26}
}
$$

其中 $k$ 用 SI，$A_{\rm eff}$ 用 $\mathrm{m^2}$。

定义的物理意义是：一个流量密度恰好为 SEFD 的非偏振点源，其附加天线温度等于空白场系统温度：

$$
f_\nu=\mathrm{SEFD}
\quad\Longrightarrow\quad
\Delta T_A=G\,\mathrm{SEFD}=T_{\rm sys}.
$$

SEFD 把“面积大不大”和“系统噪声高不高”合并成一个以 Jy 表示的量，可以直接和天体流量比较。上表 A 的 SEFD 为 $50\ \mathrm{Jy}$，B 为 $20\ \mathrm{Jy}$，B 的点源灵敏度更好。

对相同源：

$$
\boxed{
\frac{\Delta T_A}{T_{\rm sys}}
=\frac{f_\nu}{\mathrm{SEFD}}
}.
$$

SEFD 越小，同样的源相对于系统背景越强。降低 SEFD 可以靠降低 $T_{\rm sys}$ 或增大 $A_{\rm eff}$。

这里的比值是信号平均功率与系统平均噪声功率之比，尚不是经过积分后的最终 S/N。“SEFD 等效源”也不是探测阈值；通过平均，可以探测远弱于 SEFD 的源。

### 12.7 辐射计方程与曝光时间

理想射电连续谱测量、弱源、稳定增益、有效带宽 $\Delta\nu$ 和积分时间 $t$ 下：

$$
\sigma_T\simeq
\frac{T_{\rm sys}}{\sqrt{n_{\rm pol}\Delta\nu\,t}},
$$

其中 $n_{\rm pol}=1$ 或 2 表示合并的独立偏振数。除以增益：

$$
\boxed{
\sigma_f\simeq\frac{\mathrm{SEFD}}
{\sqrt{n_{\rm pol}\Delta\nu\,t}}
}.
$$

于是

$$
\boxed{
\mathrm{S/N}\simeq
\frac{f_\nu}{\mathrm{SEFD}}
\sqrt{n_{\rm pol}\Delta\nu\,t}
}.
$$

相同观测条件下，SEFD 减半，S/N 加倍。设目标为 $Q$：

$$
\boxed{
t=
\frac1{n_{\rm pol}\Delta\nu}
\left(\frac{Q\,\mathrm{SEFD}}{f_\nu}\right)^2
}.
$$

所以 SEFD 减半，时间减少到 $1/4$；带宽加倍，在谱和噪声适用条件不变时，时间减半。

示例：$f_\nu=1\ \mathrm{mJy}$，$\mathrm{SEFD}=20\ \mathrm{Jy}$，$n_{\rm pol}=2$，$\Delta\nu=100\ \mathrm{MHz}$，目标 $Q=5$：

$$
t=
\frac{(5\times20/0.001)^2}{2\times10^8}
=50\ \mathrm s.
$$

这是理想 on-source 积分时间。若需要独立等时 on/off 背景测量，每次积分时间为 $t$，差值噪声增加 $\sqrt2$，总占用时间还包括 off-source 时间；仪器损失和校准误差也会改变实际需求。

强源的自身噪声、增益漂移、混淆噪声等可能破坏弱源的简单公式。第 10 节是光子 Poisson 计数模型，这里是射电接收功率的辐射计噪声模型；两者都可出现 $\sqrt{\Delta\nu t}$ 的平均收益，但不能不加区分地把同一噪声公式应用到所有探测方式。

### 12.8 on/off 测量如何消掉未知放大倍数？

用一个已知 $f_{\nu,\rm cal}$ 的校准源。沿用课程的双偏振总谱功率约定，设后端共同放大系数为 $C$：

$$
P'_{\nu,\rm off}=C\,2kT_{\rm sys},
$$

$$
P'_{\nu,\rm on}-P'_{\nu,\rm off}
=C\,A_{\rm eff}f_{\nu,\rm cal}.
$$

相同带宽的积分总功率也可用同样比值，因为共同带宽因子会抵消。假设 on/off 的背景和仪器响应稳定，取比值得

$$
\frac{P'_{\rm on}-P'_{\rm off}}{P'_{\rm off}}
=\frac{A_{\rm eff}f_{\nu,\rm cal}}{2kT_{\rm sys}}
=\frac{Gf_{\nu,\rm cal}}{T_{\rm sys}}.
$$

因此

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

不必知道后端绝对放大倍数，也能测出点源灵敏度指标。若校准源用 Jy，得到的 SEFD 自然是 Jy。

### 12.9 三个最实用的关系

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

$G$ 告诉你“一个 Jy 能产生多少 K 的源信号”；SEFD 告诉你“系统的平均噪声功率相当于多少 Jy 的点源”；$\sigma_f$ 才给出指定观测带宽和时间下的随机测量误差。

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

## 13. 复习清单与下一节预习

### 13.1 自己应能完成的推导

- [ ] 区分物质 LTE、黑体辐射场、radiative equilibrium。
- [ ] 从 $dI_\nu/ds=-\alpha_\nu I_\nu+j_\nu$ 得到光学深度形式，并说明符号约定。
- [ ] 解出常源函数转移方程，说明等温和 LTE 各提供什么条件。
- [ ] 用吸收与发射抵消解释 $I_\nu=S_\nu$ 时导数为零。
- [ ] 用指数衰减权重解释厚介质主要看表面层，而不是传播损失变小。
- [ ] 说明温度梯度、散射和频率相关光学深度为什么会使厚介质偏离黑体。
- [ ] 分别算出能量密度的 $4\pi$ 和向外通量的 $\pi$，解释投影圆盘。
- [ ] 从状态函数混合偏导推出 $u=a_{\rm rad}T^4$。
- [ ] 推出 $S_{\rm ent}=(4/3)a_{\rm rad}VT^3$，完成习题 1.6。
- [ ] 比较可逆绝热辐射 $T\propto R^{-1}$ 与单原子气体 $T\propto R^{-2}$。
- [ ] 从波矢状态计数得到 $g(\nu)=8\pi\nu^2/c^3$，再推出普朗克谱。
- [ ] 检查 RJ 条件 $h\nu/kT\ll1$ 并估计误差。
- [ ] 区分 $B_\nu$ 与 $B_\lambda$ 的峰值，使用 $E(\mathrm{eV})=1240/\lambda(\mathrm{nm})$ 判断波段。
- [ ] 区分亮温、颜色温度、有效温度与实际物质温度。
- [ ] 解习题 1.3，区分中心、源平均和波束平均强度。
- [ ] 推导点源背景受限衍射极限的 $\mathrm{S/N}\propto D^2\sqrt t$ 与 $t\propto D^{-4}$，说明假设。
- [ ] 解习题 1.5，得到 $T_b\simeq4.2\times10^7\ \mathrm K$ 和条件性的黑体峰值。
- [ ] 用 Jy 表示流量密度，并正确换算 K/Jy 增益中的单位。
- [ ] 区分源 $T_b$ 与仪器 $T_A$，解释波束稀释。
- [ ] 从 SEFD 算 $\sigma_f$ 和积分时间，并推导 on/off 校准公式。

### 13.2 最易混淆的结果

| 容易误用的说法 | 应采用的理解 |
|---|---|
| 有温度就是 LTE | 温度或 Maxwell 速度分布不足以保证激发、电离人口满足 LTE |
| 辐射平衡就是黑体 | 净辐射加热为零不要求逐频率黑体分布 |
| $S_\nu=B_\nu$ 就是 $I_\nu=B_\nu$ | 前者约束介质，后者约束实际辐射；还要解输运 |
| 转移方程右边为零就是没有辐射 | 它表示吸收与发射抵消，强度不变 |
| 光学厚意味着衰减小 | 入射光衰减更大，出射光由表面附近源函数决定 |
| 总散射深度很大就必然黑体 | 需要热化条件，边界层仍可能造成非黑体出射 |
| 等温就是吸收系数不变 | 等温仅固定 $T$；$\alpha_\nu(s)$ 仍可变化 |
| $u=4\pi B/c$ 和 $F=\pi B$ 使用同一角积分 | 前者全空间能量总和，后者向外半球加投影 |
| 只要无热交换就一定熵不变 | 还须没有不可逆熵产生 |
| $B_\lambda$ 是直接替换 $B_\nu$ 的自变量 | 还需 $\lvert d\nu/d\lambda\rvert=c/\lambda^2$ |
| 射电测到的天线温度就是源温度 | 有波束稀释，非热源也不能按气体温度解释 |
| $D^{-4}$ 适用于任何源 | 要求不可分辨、背景受限、衍射极限等条件 |
| 增益大就一定更灵敏 | 还要考虑 $T_{\rm sys}$；比较 SEFD |
| SEFD 是最小可探测流量 | 它是噪声等效流量；探测误差还取决于带宽、时间和测量方式 |

### 13.3 下一节准备

根据本次核对的 2026 年课程安排，9 月 21 日阅读 RL §1.6，完成 1.8、1.9，余力允许再做 1.7。概念准备重点是 Einstein 系数、吸收与发射线、恒星外层温度结构，以及径向风造成的 Doppler 谱线轮廓。

冷的向外风在恒星前方产生蓝移吸收，风的其他方向也能贡献发射，由此可形成 P Cygni 型轮廓；向内运动可产生红移吸收的反 P Cygni 型特征。这里作为后续阅读提示，不需要在完成本次三个习题之前先解完整风模型。

## 14. 资料与引用

1. [AST1440 课程主页](https://www.astro.utoronto.ca/~mhvk/AST1440/)；本文课程安排依据 2026 年 9 月 17 日更新版本。
2. [Thu 17 Sep — Thermal Emission](https://www.astro.utoronto.ca/~mhvk/AST1440/#orgeae1774)：指定阅读和课堂延伸。
3. Rybicki & Lightman，*Radiative Processes in Astrophysics*，§1.5，印刷页 15–27；Problems 1.3、1.5、1.6，印刷页 46–47。模式计数、黑体热力学和温度定义以此为基础。
4. [NRAO：Essential Radio Astronomy，第 3 章](https://www.cv.nrao.edu/~sransom/web/Ch3.html)：有效面积、波束、天线温度及辐射计方程；尤其 §3.1.6 区分源亮温与天线温度。

文中推导和数值计算对原有解释作了符号统一与条件澄清：采用 $f_\nu$ 表示流量密度，$S_\nu$ 专指源函数；明确半球/全空间积分、可逆绝热、散射热化与边界的区别，并区分单偏振和双偏振功率。
