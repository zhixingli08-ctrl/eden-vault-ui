// 由 schema.json 生成，便于 file:// 直接打开
window.EDEN_SCHEMA={
 "_source": "由 forge script script/DumpSchema.s.sol 在本地内存 EVM 中从 EdenBurnVault.vaultUISchema() / EdenBurnVaultFactory.vaultDataSchema() 导出，未连链（2026-11-12 Flap 复审跟进版（对照 v3；F19 / F20））",
 "vaultUISchema": {
  "vaultType": "EdenBurnMinuteVault",
  "description": "Burn tokens each minute to split that minute's BNB release by burn share. Release = min(minute pool × 2%, burned × min(floor price, market price) × 1, 2 BNB). Market price: the Flap curve price before graduation, the PancakeSwap spot price after, taking the lowest of the last two observations and the spot; if it cannot be read, nothing is released by burns that minute. The floor price used here is the live price of the current tier (tier BNB left ÷ tier quota left). The rest stays in the pool. Timing: seconds 0-44 of each minute always count for that minute; seconds 45-59 are a random cutoff window: the cutoff falls between second 45 and 60 from a later block hash, burns after it roll to the next minute, and the later you burn the more likely that is (second 45 counts with 15/16 odds, second 59 with 1/16). A minute under 100,000 tokens pays nothing and rolls into the next qualifying minute; rolled burns expire if no qualifying minute starts within 1 day after the minute they last rolled from. Plots: 2,000 in total. Genesis lasts 60 minutes with a quota accumulating 20 per minute (up to 1,200); 1 plot per 200,000 tokens burned, split by burn share (partial plots carry over); plots not issued in genesis keep issuing at the same rate until 2,000. Plot dividends: your burns count toward your own plots automatically, nobody can point burns at someone else's plot; each hour an address counts min(its burns while holding plots, (plots held − plots transferred in or bought this hour) × 1M), under 100,000 counts nothing; hourly plot release = plot pool × 2% × min(1, total counted ÷ (max(issued plots, 200) × 1M)), split by each address's counted share. Holding plots without burning earns no plot dividends. Plots transferred in or bought this hour start counting toward the cap from the next hour (newly minted plots count immediately). Burns from an address without plots only join the minute pool. Plot floor = max(smoothed hourly release per plot × 24, plot pool × 2% ÷ max(issued plots, 200) × 24, 0.001 BNB). Floor redemption is for plot owners only. The floor is tiered, 15M tokens of quota per tier; every floor-reserve tax inflow goes 80% to the current tier and 20% to the next tier. Current tier floor price = tier BNB left ÷ tier quota left, rising live with tax; redeeming x tokens pays tier BNB left × x ÷ tier quota left, the last unit pays exactly the rest, never more than the tier pool. When the current tier's 15M is fully redeemed, the next tier opens in the same tx with the accumulated next-tier pool, and a fresh next-tier pool starts at 0; there is no time limit, no opening threshold and no early switch; the next-tier pool is only released at a tier switch. A plot is the ticket: only plot holders may redeem, first come first served, naming their own plot IDs (up to 50 per tx); addresses without a plot cannot. Each plot may redeem at most the tier's per-plot cap per tier (max(200,000, 2 × 15M ÷ plots issued at tier open)); usage is tracked per plot and moves with the plot (a transfer or sale does not reset it), and is reset every tier; you may send more txs; there is no permanent accumulated quota. If over half of the plot capacity sits idle, a tier may not fill until plots change hands. Tier 1 opens after the 60-minute genesis once at least 1 plot is issued. Holders may redeem within the tier's quota at the live floor price; a new tier starts at next-tier pool ÷ 15M and may be much lower than the last; the floor is not a guarantee or a redemption promise. Redeemed EDEN is 100% burned. The floor price may be above the market price; plot owners may then redeem the whole tier (a known, accepted risk). Plots can be bought, sold and transferred; the ticket moves with the plot. Unclaimed rewards expire after 30 days. Burned tokens go to 0xdead and do not reduce totalSupply; Flap counts transfers to 0xdead in its burn stats. 0 fees. / 每分钟把代币交给金库烧掉，按燃烧比例分这一分钟放出的 BNB；放出 = min(分钟奖池 × 2%, 燃烧量 × min(托底价, 市价) × 1, 2 BNB)（市价：内盘取 Flap 曲线价，毕业后取 PancakeSwap 现价，用最近两次观测和现价中最低的；读不到市价时本分钟不按燃烧放出；托底价取当前档实时托底价 = 当前档剩余 BNB ÷ 当前档剩余额度），其余留在池里。时间规则：每分钟第 0–44 秒烧的一定算本分钟；第 45–59 秒是随机截止窗口，截止点由之后的区块哈希定在第 45–60 秒之间，截止点之后烧的顺延到下一分钟，越晚烧越可能顺延（第 45 秒有 15/16 算本分钟，第 59 秒只有 1/16）。一分钟合计不到 10 万枚不发奖，燃烧量并入下一个够线的分钟；最后一次顺延的那一分钟结束后 1 天内没有够线的分钟开始，就作废。地块：总量 2000 块。创世期 60 分钟，额度每分钟累计 20 块（最多 1200 块）；每烧 20 万枚发 1 块，按燃烧比例分（不足 1 块的零头留到下次）；创世期没发完的按同样门槛继续发，直到 2000 块。地块分成：燃烧自动计入燃烧者自己的地块，不能算到别人的地块上；每个地址每小时计入 = min(持有地块时的燃烧, (持有地块数 − 本小时转入/买入的地块数) × 100 万)，不到 10 万不计；地块池每小时放出 = 地块池 × 2% × min(1, 全部计入量 ÷ (max(已发地块, 200) × 100 万))，按各地址计入量分。只持有地块不燃烧，没有地块分成。本小时转入/买入的地块从下一小时起计入上限（新铸造的地块当场生效）。没有地块的地址燃烧只参与分钟奖池。地板价 = max(平滑后每块每小时分成 × 24, 地块池 × 2% ÷ max(已发地块, 200) × 24, 0.001 BNB)。金库托底只有地主能兑：托底分档，每档 1500 万枚额度；每笔托底税 80% 进当前档、20% 进下一档。当前档托底价 = 当前档剩余 BNB ÷ 当前档剩余额度，随托底税实时上涨；兑换 x 枚付「当前档剩余 BNB × x ÷ 当前档剩余额度」，最后一枚额度正好付完剩余，永远不超过当前档池子。当前档 1500 万兑满后同一笔里开下一档：起始池子 = 攒下的下一档池子，新的下一档从 0 开始攒；没有时间限制、没有开档门槛、不会提前换档；下一档池子只在换档时放出。地块就是门票：只有持有地块的地址能兑，不持有地块的地址不能兑；兑换时带上自己的地块编号（一次最多 50 块），先到先得；每块地每档最多兑 本档每块上限 = max(20 万, 2 × 1500 万 ÷ 开档时已发地块数)，用量按地块记、跟着地块走（转让或被买走不重置），换档重算，可以多次下单；没有永久累计的额度。一半以上的地块容量闲着不兑时，这一档可能兑不满，要等地块转手。第 1 档在创世 60 分钟结束后开出（至少已发 1 块地）。每档额度内可按实时托底价兑换；新一档起始价 = 下一档池子 ÷ 1500 万，可能明显低于上一档；托底不是保底或兑付承诺。换回的 EDEN 100% 销毁。托底价可能高于市价，这时地主可能把当前档额度全部换完（已知并接受的风险）。地块可以买卖、转让，门票跟着地块走。奖励 30 天不领过期。烧掉的币转入 0xdead，不减少 totalSupply；Flap 统计转入 0xdead 的销毁量。0 抽成。",
  "methods": [
   {
    "name": "minuteInfo",
    "description": "This minute: countdown and pool. Seconds 0-44 always count; seconds 45-59 have a random cutoff and later burns may roll to the next minute / 当前分钟：倒计时与奖池。第 0–44 秒烧的一定算本分钟；第 45–59 秒有随机截止点，越晚烧越可能顺延到下一分钟",
    "inputs": [],
    "outputs": [
     {
      "name": "minute",
      "fieldType": "uint256",
      "description": "Minute # / 当前分钟号",
      "decimals": 0
     },
     {
      "name": "endsAt",
      "fieldType": "time",
      "description": "Nominal end of this minute / 本分钟名义结束时间",
      "decimals": 0
     },
     {
      "name": "estPool",
      "fieldType": "uint256",
      "description": "Est. release this minute = min(pool × 2%, burned × min(floor, market price) × 1, 2 BNB) (BNB) / 本分钟预计放出 = min(池 × 2%, 已烧 × min(托底价, 市价) × 1, 2 BNB)（BNB）",
      "decimals": 18
     },
     {
      "name": "burnedThisMinute",
      "fieldType": "uint256",
      "description": "Burned this minute (tokens) / 本分钟已烧（枚）",
      "decimals": 18
     },
     {
      "name": "plotsLeft",
      "fieldType": "uint256",
      "description": "Plots left to mint, 2,000 total; genesis quota accumulates 20 per minute for 60 minutes; 1 plot per 200,000 burned / 剩余可发地块（总 2000 块，创世 60 分钟额度每分钟累计 20 块，每烧 20 万枚 1 块）",
      "decimals": 0
     },
     {
      "name": "fullPoolBurn",
      "fieldType": "uint256",
      "description": "Burn needed this minute to unlock the full release (tokens) / 本分钟放满所需燃烧量（枚）",
      "decimals": 18
     }
    ],
    "approvals": [],
    "isInputArray": false,
    "isOutputArray": false,
    "isWriteMethod": false
   },
   {
    "name": "minutePhase",
    "description": "Burn timing: seconds 0-44 certain, 45-59 random cutoff / 燃烧时机：第 0–44 秒确定计入，第 45–59 秒随机截止",
    "inputs": [],
    "outputs": [
     {
      "name": "minute",
      "fieldType": "uint256",
      "description": "Minute # / 当前分钟号",
      "decimals": 0
     },
     {
      "name": "second",
      "fieldType": "uint256",
      "description": "Second within the minute, 0-59 / 本分钟第几秒（0–59）",
      "decimals": 0
     },
     {
      "name": "certain",
      "fieldType": "bool",
      "description": "In seconds 0-44: a burn now surely counts for this minute / 处于第 0–44 秒：现在烧一定算本分钟",
      "decimals": 0
     },
     {
      "name": "certainSecondsLeft",
      "fieldType": "uint256",
      "description": "Certain seconds left; 0 = in the random cutoff window / 确定部分还剩几秒（0 = 已进入随机截止窗口）",
      "decimals": 0
     },
     {
      "name": "randomSecondsLeft",
      "fieldType": "uint256",
      "description": "Seconds left in the random window 45-59; the later you burn, the more likely it rolls to the next minute (second 45: 15/16 counts, second 59: 1/16) / 随机窗口（第 45–59 秒）还剩几秒；越晚烧越可能顺延到下一分钟（第 45 秒 15/16 算本分钟，第 59 秒只有 1/16）",
      "decimals": 0
     }
    ],
    "approvals": [],
    "isInputArray": false,
    "isOutputArray": false,
    "isWriteMethod": false
   },
   {
    "name": "myInfo",
    "description": "My rewards for the connected wallet / 我的奖励（当前连接的钱包）",
    "inputs": [],
    "outputs": [
     {
      "name": "pendingBnb",
      "fieldType": "uint256",
      "description": "Claimable BNB, settled part (BNB) / 可领 BNB（已结算部分）",
      "decimals": 18
     },
     {
      "name": "pendingPlots",
      "fieldType": "uint256",
      "description": "Claimable plots / 可领地块",
      "decimals": 0
     },
     {
      "name": "plotCount",
      "fieldType": "uint256",
      "description": "Plots held / 持有地块",
      "decimals": 0
     },
     {
      "name": "openRecords",
      "fieldType": "uint256",
      "description": "Unclaimed burn records / 未领完的燃烧记录数",
      "decimals": 0
     },
     {
      "name": "creditBnb",
      "fieldType": "uint256",
      "description": "Withdrawable balance, e.g. plot sales (BNB) / 待领余额（卖地款等，BNB）",
      "decimals": 18
     }
    ],
    "approvals": [],
    "isInputArray": false,
    "isOutputArray": false,
    "isWriteMethod": false
   },
   {
    "name": "myPlotDividends",
    "description": "My plot dividends: burns count toward my own plots only; more plots, higher cap. Holding plots without burning earns no plot dividends. Plots transferred in or bought this hour start counting toward the cap from the next hour / 我的地块分成：燃烧只计入自己的地块，地块越多上限越高。只持有地块不燃烧，没有地块分成。本小时转入/买入的地块从下一小时起计入上限",
    "inputs": [],
    "outputs": [
     {
      "name": "plots",
      "fieldType": "uint256",
      "description": "My plots; my burns count toward them automatically / 我的地块数（我的燃烧自动计入）",
      "decimals": 0
     },
     {
      "name": "hourCap",
      "fieldType": "uint256",
      "description": "My hourly cap = (plots − received this hour) × 1M (tokens) / 我每小时计入上限 = (地块数 − 本小时转入或买入) × 100 万（枚）",
      "decimals": 18
     },
     {
      "name": "burnedThisHour",
      "fieldType": "uint256",
      "description": "My burns this hour while holding plots (tokens) / 本小时我持有地块时的燃烧（枚）",
      "decimals": 18
     },
     {
      "name": "countedThisHour",
      "fieldType": "uint256",
      "description": "Counted this hour = min(burned, cap); under 100,000 counts nothing (tokens) / 本小时计入 = min(燃烧, 上限)，不到 10 万不计（枚）",
      "decimals": 18
     },
     {
      "name": "claimable",
      "fieldType": "uint256",
      "description": "Settled plot dividends to claim (BNB) / 已结算可领的地块分成（BNB）",
      "decimals": 18
     },
     {
      "name": "openHours",
      "fieldType": "uint256",
      "description": "Hours with dividends not yet claimed / 还没领的分成小时数",
      "decimals": 0
     },
     {
      "name": "receivedThisHour",
      "fieldType": "uint256",
      "description": "Plots received this hour by transfer or purchase; they count toward the cap from the next hour (newly minted plots count immediately) / 本小时转入或买入的地块数；这些地块从下一小时起计入上限（新铸造的地块当场生效）",
      "decimals": 0
     }
    ],
    "approvals": [],
    "isInputArray": false,
    "isOutputArray": false,
    "isWriteMethod": false
   },
   {
    "name": "roundInfo",
    "description": "Current floor tier, plot holders only, first come: within the tier's quota at the live price, each plot up to the tier's per-plot cap per tier; 80% of floor tax feeds this tier, 20% the next; not a guarantee / 当前托底档（只有地主能兑，先到先得）：当前档额度内按实时托底价兑，每块地每档最多 本档每块上限；托底税 80% 进当前档、20% 进下一档；托底不是保底或兑付承诺",
    "inputs": [],
    "outputs": [
     {
      "name": "roundId",
      "fieldType": "uint256",
      "description": "Tier # / 档号",
      "decimals": 0
     },
     {
      "name": "price",
      "fieldType": "uint256",
      "description": "Live floor price = tier BNB left ÷ tier quota left; rises with tax inflow; a new tier may start much lower (BNB per token) / 实时托底价 = 当前档剩余 BNB ÷ 当前档剩余额度，托底税进来就上涨，新一档起始价可能明显更低（BNB/枚）",
      "decimals": 18
     },
     {
      "name": "quotaLeft",
      "fieldType": "uint256",
      "description": "Tier quota left (tokens) / 当前档剩余额度（枚）",
      "decimals": 18
     },
     {
      "name": "poolLeft",
      "fieldType": "uint256",
      "description": "Tier pool left (BNB) / 当前档剩余池子（BNB）",
      "decimals": 18
     },
     {
      "name": "endsAt",
      "fieldType": "time",
      "description": "Always 0: tiers have no end time, they switch when filled / 恒为 0：分档没有结束时间，兑满才换档",
      "decimals": 0
     },
     {
      "name": "open",
      "fieldType": "bool",
      "description": "Open (from tier 1 on, always) / 是否已开档（第 1 档开出后一直开放）",
      "decimals": 0
     }
    ],
    "approvals": [],
    "isInputArray": false,
    "isOutputArray": false,
    "isWriteMethod": false
   },
   {
    "name": "redeemInfo",
    "description": "My floor redemption: plots are the ticket; each plot has a cap per tier that moves with the plot / 我的托底兑换：地块就是门票；每块地每档有上限，跟着地块走",
    "inputs": [],
    "outputs": [
     {
      "name": "myPlots",
      "fieldType": "uint256",
      "description": "My plots (the ticket) / 我的地块数（门票）",
      "decimals": 0
     },
     {
      "name": "myTierLeft",
      "fieldType": "uint256",
      "description": "Left this tier on all my plots = sum of (per-plot tier cap − redeemed this tier by that plot) (tokens) / 我的地块本档还能兑的合计 = Σ(本档每块上限 − 这块地本档已兑)（枚）",
      "decimals": 18
     },
     {
      "name": "capPerPlotThisTier",
      "fieldType": "uint256",
      "description": "Cap per plot this tier = max(200,000, 2 × 15M ÷ plots issued at tier open) (tokens) / 本档每块上限 = max(20 万, 2 × 1500 万 ÷ 开档时已发地块数)（枚）",
      "decimals": 18
     },
     {
      "name": "tierQuotaLeft",
      "fieldType": "uint256",
      "description": "Tier quota left (tokens) / 当前档剩余额度（枚）",
      "decimals": 18
     },
     {
      "name": "maxPlotsPerTx",
      "fieldType": "uint256",
      "description": "Max plot IDs per redemption / 一次兑换最多带几块地",
      "decimals": 0
     },
     {
      "name": "nextTierPool",
      "fieldType": "uint256",
      "description": "Next tier pool so far: 20% of each floor tax, released when this tier is filled (BNB) / 下一档已攒的池子：每笔托底税的 20%，当前档兑满时放出（BNB）",
      "decimals": 18
     }
    ],
    "approvals": [],
    "isInputArray": false,
    "isOutputArray": false,
    "isWriteMethod": false
   },
   {
    "name": "marketInfo",
    "description": "Market price for the minute reward cap; the floor price may be above it / 分钟奖励上限用的市价；托底价可能高于市价",
    "inputs": [],
    "outputs": [
     {
      "name": "spot",
      "fieldType": "uint256",
      "description": "Market price now: Flap curve before graduation, PancakeSwap after; 0 = unreadable (BNB per token) / 当前市价：内盘 Flap 曲线价，毕业后 PancakeSwap 现价；0 = 读不到（BNB/枚）",
      "decimals": 18
     },
     {
      "name": "obsPrev",
      "fieldType": "uint256",
      "description": "Earlier observation (BNB per token) / 上一次观测（BNB/枚）",
      "decimals": 18
     },
     {
      "name": "obsLast",
      "fieldType": "uint256",
      "description": "Latest observation (BNB per token) / 最近一次观测（BNB/枚）",
      "decimals": 18
     },
     {
      "name": "obsMinute",
      "fieldType": "uint256",
      "description": "Minute of the latest observation (unix seconds ÷ 60) / 最近观测所在分钟（unix 秒 ÷ 60）",
      "decimals": 0
     },
     {
      "name": "used",
      "fieldType": "uint256",
      "description": "Market price used = lowest of the two observations and spot (BNB per token) / 采用的市价 = 两次观测和现价中最低的（BNB/枚）",
      "decimals": 18
     },
     {
      "name": "floorPrice",
      "fieldType": "uint256",
      "description": "Reference floor price; the reward cap uses min(floor, market price) × 1 (BNB per token) / 参考托底价；奖励上限按 min(托底价, 市价) × 1 算（BNB/枚）",
      "decimals": 18
     }
    ],
    "approvals": [],
    "isInputArray": false,
    "isOutputArray": false,
    "isWriteMethod": false
   },
   {
    "name": "poolInfo",
    "description": "Pool balances / 三池余额",
    "inputs": [],
    "outputs": [
     {
      "name": "minutePoolTotal",
      "fieldType": "uint256",
      "description": "Minute pool incl. pending (BNB) / 分钟奖池（含待入池，BNB）",
      "decimals": 18
     },
     {
      "name": "plotPoolTotal",
      "fieldType": "uint256",
      "description": "Plot pool incl. pending (BNB) / 地块池（含待入池，BNB）",
      "decimals": 18
     },
     {
      "name": "floorReserveNow",
      "fieldType": "uint256",
      "description": "Floor money not yet in the current tier: pre-tier-1 reserve + next tier pool (BNB) / 还没进当前档的托底钱：第 1 档前的储备 + 下一档池子（BNB）",
      "decimals": 18
     },
     {
      "name": "roundPoolLeft",
      "fieldType": "uint256",
      "description": "Current floor tier pool left (BNB) / 当前托底档剩余池子（BNB）",
      "decimals": 18
     },
     {
      "name": "minuteUnclaimed",
      "fieldType": "uint256",
      "description": "Minute rewards assigned, unclaimed (BNB) / 分钟奖励已分配未领（BNB）",
      "decimals": 18
     },
     {
      "name": "plotUnclaimed",
      "fieldType": "uint256",
      "description": "Plot dividends assigned, unclaimed (BNB) / 地块分成已分配未领（BNB）",
      "decimals": 18
     },
     {
      "name": "sellerCredits",
      "fieldType": "uint256",
      "description": "Plot sale proceeds awaiting withdrawal (BNB) / 卖地款等待领余额（BNB）",
      "decimals": 18
     }
    ],
    "approvals": [],
    "isInputArray": false,
    "isOutputArray": false,
    "isWriteMethod": false
   },
   {
    "name": "userInfo",
    "description": "Rewards of any wallet / 查任意钱包的奖励",
    "inputs": [
     {
      "name": "u",
      "fieldType": "address",
      "description": "Wallet address / 钱包地址",
      "decimals": 0
     }
    ],
    "outputs": [
     {
      "name": "pendingBnb",
      "fieldType": "uint256",
      "description": "Claimable BNB, settled part (BNB) / 可领 BNB（已结算部分）",
      "decimals": 18
     },
     {
      "name": "pendingPlots",
      "fieldType": "uint256",
      "description": "Claimable plots / 可领地块",
      "decimals": 0
     },
     {
      "name": "plotCount",
      "fieldType": "uint256",
      "description": "Plots held / 持有地块",
      "decimals": 0
     },
     {
      "name": "openRecords",
      "fieldType": "uint256",
      "description": "Unclaimed burn records / 未领完的燃烧记录数",
      "decimals": 0
     },
     {
      "name": "creditBnb",
      "fieldType": "uint256",
      "description": "Withdrawable balance, e.g. plot sales (BNB) / 待领余额（卖地款等，BNB）",
      "decimals": 18
     }
    ],
    "approvals": [],
    "isInputArray": false,
    "isOutputArray": false,
    "isWriteMethod": false
   },
   {
    "name": "plotMarket",
    "description": "Plot market: price and floor / 地块行情：当前价与地板价",
    "inputs": [
     {
      "name": "plotId",
      "fieldType": "uint256",
      "description": "Plot ID / 地块编号",
      "decimals": 0
     }
    ],
    "outputs": [
     {
      "name": "owner",
      "fieldType": "address",
      "description": "Owner / 地主",
      "decimals": 0
     },
     {
      "name": "price",
      "fieldType": "uint256",
      "description": "Current price (BNB) / 当前价（BNB）",
      "decimals": 18
     },
     {
      "name": "floor",
      "fieldType": "uint256",
      "description": "Floor = max(smoothed hourly release per plot × 24, plot pool × 2% ÷ max(issued, 200) × 24, 0.001), an average over all issued plots (BNB) / 地板价 = max(平滑后每块每小时分成 × 24, 地块池 × 2% ÷ max(已发地块, 200) × 24, 0.001)，全部已发地块的平均（BNB）",
      "decimals": 18
     },
     {
      "name": "lastTradeAnchor",
      "fieldType": "uint256",
      "description": "Last trade price × 1.1 (BNB) / 上次成交价 × 1.1（BNB）",
      "decimals": 18
     },
     {
      "name": "lastTradeTime",
      "fieldType": "time",
      "description": "Last trade time / 上次成交时间",
      "decimals": 0
     }
    ],
    "approvals": [],
    "isInputArray": false,
    "isOutputArray": false,
    "isWriteMethod": false
   },
   {
    "name": "burn",
    "description": "Burn: hand tokens to the vault to burn and join this minute's pool. Seconds 0-44 always count for this minute; seconds 45-59 have a random cutoff, and a late burn may roll to the next minute, more likely the later it is (second 45: 15/16 counts, second 59: 1/16) / 燃烧：把代币交给金库烧掉，参与本分钟奖池。第 0–44 秒烧的一定算本分钟；第 45–59 秒有随机截止点，晚烧的可能顺延到下一分钟，越晚越可能顺延（第 45 秒 15/16 算本分钟，第 59 秒只有 1/16）",
    "inputs": [
     {
      "name": "amount",
      "fieldType": "uint256",
      "description": "Tokens to burn, min 10,000; automatically counted toward your own plots / 燃烧数量（枚，单笔至少 1 万；自动计入你自己的地块）",
      "decimals": 18
     }
    ],
    "outputs": [],
    "approvals": [
     {
      "tokenType": "taxToken",
      "amountFieldName": "amount"
     }
    ],
    "isInputArray": false,
    "isOutputArray": false,
    "isWriteMethod": true
   },
   {
    "name": "claimNext",
    "description": "Claim minute rewards (BNB and plots); expires after 30 days; partial plots carry over / 领取分钟奖励（BNB 和地块）；30 天不领过期；不足 1 块的零头留到下次",
    "inputs": [
     {
      "name": "maxRecords",
      "fieldType": "uint256",
      "description": "Max burn records to process, up to 50 / 最多处理几条燃烧记录（≤50，填 50 即可）",
      "decimals": 0
     }
    ],
    "outputs": [],
    "approvals": [],
    "isInputArray": false,
    "isOutputArray": false,
    "isWriteMethod": true
   },
   {
    "name": "buyPlot",
    "description": "Buy a plot at its current price, no owner consent needed: 98% to the seller, 2% to the minute pool, price +10% after each sale; dividends already counted stay with the seller, the buyer's later burns count toward the plot / 买地：按当前价直接买走，不需持有人同意；98% 给卖家，2% 进分钟奖池，成交后涨 10%；已计入的分成归卖家，之后买家的燃烧按新持有数计入",
    "inputs": [
     {
      "name": "value",
      "fieldType": "msg.value",
      "description": "BNB to pay, at least the current price; excess refunded / 随交易支付的 BNB（≥ 当前价，多付退回）",
      "decimals": 18
     },
     {
      "name": "id",
      "fieldType": "uint256",
      "description": "Plot ID / 地块编号",
      "decimals": 0
     },
     {
      "name": "maxPrice",
      "fieldType": "uint256",
      "description": "Max price you accept (BNB), front-run guard / 最高愿付价（BNB，防抢跑）",
      "decimals": 18
     }
    ],
    "outputs": [],
    "approvals": [],
    "isInputArray": false,
    "isOutputArray": false,
    "isWriteMethod": true
   },
   {
    "name": "sellToRound",
    "description": "Floor redemption, plot holders only, first come first served: redeem EDEN for BNB with your plot at the current tier's live floor price (tier BNB left ÷ tier quota left); each plot redeems at most the tier's per-plot cap per tier (max(200,000, 2 × 15M ÷ plots issued at tier open)), tracked per plot and moving with it; more txs allowed; sellToRoundPlots takes up to 50 plots at once; when the tier's 15M is filled the next tier opens at once; tokens are 100% burned; not a guarantee / 托底兑换（只有地主能兑，先到先得）：用自己的地块按当前档实时托底价（当前档剩余 BNB ÷ 当前档剩余额度）把 EDEN 兑换成 BNB；每块地每档最多兑 max(20 万, 2 × 1500 万 ÷ 开档时已发地块数)，用量按地块记、跟着地块走；可以多次下单；sellToRoundPlots 一次最多带 50 块地；当前档 1500 万兑满立刻开下一档；换回的币 100% 销毁；托底不是保底或兑付承诺",
    "inputs": [
     {
      "name": "plotId",
      "fieldType": "uint256",
      "description": "Your plot ID (the ticket) / 你的地块编号（门票）",
      "decimals": 0
     },
     {
      "name": "amount",
      "fieldType": "uint256",
      "description": "Tokens to redeem; above min(this plot's cap left this tier, tier quota left) is not taken / 兑换数量（枚，超出 min(这块地本档还能兑的, 当前档剩余额度) 的部分不收）",
      "decimals": 18
     },
     {
      "name": "minBnbOut",
      "fieldType": "uint256",
      "description": "Minimum BNB to receive / 至少收到多少 BNB",
      "decimals": 18
     }
    ],
    "outputs": [],
    "approvals": [
     {
      "tokenType": "taxToken",
      "amountFieldName": "amount"
     }
    ],
    "isInputArray": false,
    "isOutputArray": false,
    "isWriteMethod": true
   },
   {
    "name": "claimPlotDividends",
    "description": "Claim my plot dividends: each hour I count min(my burns, my plots × 1M), under 100,000 counts nothing; expires after 30 days / 领取我的地块分成：每小时计入 min(我的燃烧, 地块数 × 100 万)，不到 10 万不计；30 天不领过期",
    "inputs": [
     {
      "name": "maxHours",
      "fieldType": "uint256",
      "description": "Max hours to process, up to 100 / 最多处理几个小时（≤100）",
      "decimals": 0
     }
    ],
    "outputs": [],
    "approvals": [],
    "isInputArray": false,
    "isOutputArray": false,
    "isWriteMethod": true
   },
   {
    "name": "withdrawCredit",
    "description": "Withdraw balance, e.g. plot sale proceeds / 领取待领余额（卖地款等）",
    "inputs": [],
    "outputs": [],
    "approvals": [],
    "isInputArray": false,
    "isOutputArray": false,
    "isWriteMethod": true
   },
   {
    "name": "transferPlot",
    "description": "Transfer a plot; its redemption ticket and this tier's usage move with it / 转让地块（托底门票和本档已兑用量跟着走）",
    "inputs": [
     {
      "name": "id",
      "fieldType": "uint256",
      "description": "Plot ID / 地块编号",
      "decimals": 0
     },
     {
      "name": "to",
      "fieldType": "address",
      "description": "Recipient address / 接收地址",
      "decimals": 0
     }
    ],
    "outputs": [],
    "approvals": [],
    "isInputArray": false,
    "isOutputArray": false,
    "isWriteMethod": true
   },
   {
    "name": "settle",
    "description": "Advance settlement, anyone can call / 推进结算（任何人可调）",
    "inputs": [
     {
      "name": "maxSteps",
      "fieldType": "uint256",
      "description": "Max minutes to settle, up to 64 / 最多结算几个分钟（≤64）",
      "decimals": 0
     }
    ],
    "outputs": [],
    "approvals": [],
    "isInputArray": false,
    "isOutputArray": false,
    "isWriteMethod": true
   },
   {
    "name": "sync",
    "description": "Recognize revenue, anyone can call, bookkeeping only / 入账（任何人可调，只记账）",
    "inputs": [],
    "outputs": [],
    "approvals": [],
    "isInputArray": false,
    "isOutputArray": false,
    "isWriteMethod": true
   }
  ]
 },
 "vaultDataSchema": {
  "description": "EDEN 分钟燃烧金库：无需填写参数，vaultData 留空。分账 45/30/25（分钟奖池/地块池/托底储备），0 运营 0 项目方抽成；分钟放出 ≤ 燃烧量 × min(托底价, 市价) × 1（每分钟最多 2 BNB；市价内盘取 Flap 曲线价、毕业后取 PancakeSwap 现价，读不到不放）；每分钟第 0–44 秒烧的一定算本分钟，第 45–59 秒有随机截止点，截止点之后的顺延到下一分钟，越晚越可能顺延。地块总量 2000 块，每烧 20 万枚发 1 块，地块池按计入燃烧的饱和度放出，燃烧自动计入自己的地块（地块越多上限越高）。只持有地块不燃烧，没有地块分成。本小时转入/买入的地块从下一小时起计入上限。托底兑换只有地主能兑（地块是门票，先到先得，带上自己的地块编号；每块地每档最多 max(20 万, 2 × 1500 万 ÷ 开档时已发地块数)，跟着地块走，可多次下单；第 1 档在创世 60 分钟结束后、至少已发 1 块地时开出）：托底分档，每档 1500 万枚；每笔托底税 80% 进当前档、20% 进下一档；当前档托底价 = 当前档剩余 BNB ÷ 当前档剩余额度，实时上涨；兑满同一笔开下一档（起始池子 = 攒下的下一档池子），没有时间限制、没有开档门槛；每档额度内可按实时托底价兑换；新一档起始价可能明显低于上一档；托底不是保底或兑付承诺。换回的币 100% 销毁。托底价可能高于市价，这时地主可能把当前档额度全部换完（已知并接受的风险）。发币要求：TOKEN_TAXED_V3、BNB 计价、买卖税 3%/3%、vaultBps=10000。收税期限建议填 100 年（工厂无法链上校验）。",
  "fields": [],
  "isArray": false
 },
 "descriptionAtLaunch": "EDEN 分钟燃烧金库（Flap 税币金库）。税 3%/3% 全部进金库，分账：分钟奖池 45% / 地块池 30% / 托底储备 25%。工厂和项目方 0 抽成，没有任何收款地址，没有运营分成。分钟奖池 0.000000 BNB；地块池 0.000000 BNB；托底储备（第 1 档开出前积累）0.000000 BNB；下一档池子 0.000000 BNB。玩法尚未开始，第 0 分钟开始时间（Unix 秒）：601。每分钟放出 = min(分钟奖池 × 2%, 本分钟燃烧量 × min(托底价, 市价) × 1, 2 BNB)（市价：内盘取 Flap 曲线价，毕业后取 PancakeSwap 现价，用最近两次观测和现价中最低的；读不到市价时本分钟不按燃烧放出；托底价取当前档实时托底价 = 当前档剩余 BNB ÷ 当前档剩余额度），烧得少只放一小部分、其余留在池里。每分钟第 0–44 秒烧的一定算本分钟；第 45–59 秒是随机截止窗口：截止点在第 45–60 秒之间由揭晓区块哈希决定（取不到哈希就重抽），截止点之后烧的顺延到下一分钟，越晚烧越可能顺延（第 45 秒 15/16 算本分钟，第 59 秒只有 1/16）。托底兑换：创世 60 分钟结束后、至少已发 1 块地时开出第 1 档（之前积累的托底储备 80% 进第 1 档、20% 进第 2 档）；开出后一直开放，没有时间限制、没有开档门槛。金库托底只有地主能兑：托底分档，每档 1500 万枚额度；每笔托底税 80% 进当前档、20% 进下一档。当前档托底价 = 当前档剩余 BNB ÷ 当前档剩余额度，随托底税实时上涨；兑换 x 枚付「当前档剩余 BNB × x ÷ 当前档剩余额度」，最后一枚额度正好付完剩余，永远不超过当前档池子。当前档 1500 万兑满后同一笔里开下一档：起始池子 = 攒下的下一档池子，新的下一档从 0 开始攒；没有时间限制、没有开档门槛、不会提前换档；下一档池子只在换档时放出。地块就是门票：只有持有地块的地址能兑，不持有地块的地址不能兑；兑换时带上自己的地块编号（一次最多 50 块），先到先得；每块地每档最多兑 本档每块上限 = max(20 万, 2 × 1500 万 ÷ 开档时已发地块数)，用量按地块记、跟着地块走（转让或被买走不重置），换档重算，可以多次下单；没有永久累计的额度。一半以上的地块容量闲着不兑时，这一档可能兑不满，要等地块转手。第 1 档在创世 60 分钟结束后开出（至少已发 1 块地）。每档额度内可按实时托底价兑换；新一档起始价 = 下一档池子 ÷ 1500 万，可能明显低于上一档；托底不是保底或兑付承诺。换回的 EDEN 100% 销毁。托底价可能高于市价，这时地主可能把当前档额度全部换完（已知并接受的风险）。一分钟合计不到 10 万枚不发奖，燃烧量并入下一个够线的分钟；最后一次顺延的那一分钟结束后 1 天内没有够线的分钟开始，就作废（按分钟本身的时间算，和什么时候结算无关）。地块总量 2000 块：创世 60 分钟额度每分钟累计 20 块（最多 1200 块），每烧 20 万枚发 1 块，没发完的按同样门槛继续发；不足 1 块的零头留在本人账上。地块池每小时放出 = 地块池 × 2% × min(1, 全部计入量 ÷ (max(已发地块数, 200) × 100 万))，按各地址计入量分；每个地址每小时计入 = min(持有地块时的燃烧, (持有地块数 − 本小时转入/买入的地块数) × 100 万)，不到 10 万枚不计；只持有地块不燃烧，没有地块分成；本小时转入/买入的地块从下一小时起计入上限（新铸造的地块当场生效）；燃烧自动计入燃烧者自己的地块，不能算到别人的地块上，没有地块的地址燃烧只参加分钟奖励。分钟奖励和地块分成 30 天不领过期。地块可随时按当前价被买走（托底门票跟着地块走；已计入的分成归卖家）：地板价 = max(平滑后每块每小时分成 × 24, 地块池 × 2% ÷ max(已发地块数, 200) × 24, 0.001 BNB)（按全部已发地块平均，不是单块收益），成交后涨 10%，没人买每天回落 5%（不低于地板），成交款 98% 给卖家、2% 进分钟奖池；成交后买家的燃烧按新的持有数计入。地块 0 / 2000；累计销毁 0 枚（转入 0xdead，不减少 totalSupply；Flap 统计转入 0xdead 的销毁量）。分钟截止点由 Flap Trigger 服务自动揭晓（手续费从分钟奖池付给 Flap 的服务，不给项目方）。本金库是 beacon 代理，升级权只在 Flap Guardian。"
};
