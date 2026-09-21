---
hide:
  - navigation
title: Recommended Hardware
---

# :material-radio-handheld: Recommended Hardware

New to Meshtastic? Here's what to buy. No monthly fees, no subscriptions. Just a one-time purchase and you're on the mesh.

!!! tip "Two things you need"
    **1. A handheld radio**. Carry it with you, pairs with your phone via Bluetooth<br>
    **2. A rooftop/attic node**. Put it up high at your home to keep you connected

    That's it. Buy these two things, follow our [How to Connect](/docs/how-to-connect.html) guide, and you're on the mesh.

---

## :material-star: Our Top Picks

<div class="grid cards" markdown>

-   :material-cellphone:{ .lg .middle } __1. Handheld: RAK WisMesh Pocket V2__

    ---

    The best all-around handheld for Arizona. GPS, huge 3200 mAh battery (3+ days), IP66 waterproof, solar charging connector. Pairs with your phone over Bluetooth. Open the Meshtastic app and start messaging.

    **~$89-99**. Upgrade the weak stock antenna to the Muziworks 17cm whip (see Antenna Guide below); it's the single biggest improvement you can make.

    [:material-cart: RAK Store (~$89)](https://store.rakwireless.com/products/wismesh-pocket) · [Rokland (~$99)](https://store.rokland.com/products/wismesh-pocket)

-   :material-home-roof:{ .lg .middle } __2. Rooftop: PeakMesh 1W__

    ---

    Fully assembled, solar powered, and built around a **1 watt (30 dBm)** radio, in four mounting styles. Nothing to build, nothing to solder, no power to run. Turn it on, get it up high, done.

    **~$115-120**. This is our default answer to "I'm new, what do I buy?"

    [:material-cart: PeakMesh 1W nodes on Etsy](https://www.etsy.com/shop/PeakMesh?search_query=1w)

</div>

!!! warning "Why you need a rooftop node"
    **This is the #1 mistake new users make.** A handheld alone will struggle indoors and at range. Put a node up high and the difference is night and day.

### Which rooftop node should I get?

Three options. Find the row that sounds like you.

| If you... | Get this | Why |
|---|---|---|
| **Are new to Meshtastic and not sure** | [**PeakMesh 1W**](#peakmesh-1w) (~$115-120) | Solar, fully assembled, lots of mounting options. Nothing to wire and nothing to build |
| **Want to build your own solar node** | [**WisMesh Repeater Mini 1W**](#repeater-mini-1w) (~$125-150 in parts) | Same 1W radio, full step-by-step build guide, no soldering |
| **Have hardwired power and want WiFi** | [**Station G3**](#station-g3) (~$109) | The most capable radio you can buy, plus WiFi/MQTT. Needs a real power feed |

!!! info "The Station G3 is not an ideal rooftop node by itself"
    It has no battery and no solar, so it only works up high if you **run power to the roof**, or put the G3 **in your attic and run antenna cable up to a roof-mounted antenna**. If neither of those sounds appealing, pick one of the two solar options.

---

## :material-cellphone: Handheld Devices

These radios pair with your phone over Bluetooth so you can type messages on your phone screen. All use the nRF52840 chip (great battery life, Bluetooth only) unless noted.

!!! info "Handhelds are the one place we don't insist on 1 watt"
    We hold every **rooftop and hard-powered** node to a [1 watt minimum](#why-1-watt). Handhelds get a pass, because there still aren't good pre-built 1W handhelds to buy. Everything below transmits at the usual ~22 dBm (0.16 W), and that's fine: your handheld's job is to reach a **rooftop node**, and the rooftop node's height, antenna, and receiver do the heavy lifting.

!!! tip "Range reality check for handhelds"
    Expect to need a rooftop node within reasonable range to get good results. This is especially true of the **card-style trackers**, which have sealed internal antennas and nothing you can upgrade. The handhelds with **external antennas** do noticeably better and are often heard well outdoors, but a handheld is still not a substitute for a node up high.

#### Comparison Table

| Device | Battery | Est. Battery Life | Screen | Price | Best For |
|---|---|---|---|---|---|
| **Wio Tracker L1** | 800 mAh | ~2-3 days | 0.96" OLED | ~$30 | :material-star: Budget pick |
| **Wio Tracker L1 Pro** | 2000 mAh | ~2.5 days | 1.3" OLED | ~$43 | Budget w/ joystick + solar |
| **Heltec T114** | 800-3000 mAh | Up to a week (18650) | 1.14" Color | ~$25-45 | Battery champion |
| **LILYGO T-Echo** | 850 mAh | ~5-7 days | 1.54" E-Ink | ~$60-68 | Mid-range, sunlight-readable |
| **RAK WisMesh Pocket V2** | 3200 mAh | ~3+ days (GPS on) | 1.3" OLED | ~$89-99 | :material-trophy: Best overall |
| **Nano G2 Ultra** | Internal | ~5 days | None | ~$85-90 | Best antenna engineering |
| **LILYGO T-Deck Plus** | 2000 mAh | ~1-2 days | 2.8" Color LCD | ~$77-87 | Full keyboard, standalone (ESP32) |

!!! info "Battery life varies"
    These estimates assume typical use. Mostly listening with occasional messages. Heavy messaging, constant screen-on, or active GPS tracking will reduce battery life. Power-saving mode can extend it significantly.

!!! success "Upgrade your antenna. The single best $12 you can spend"
    **Most handheld Meshtastic radios ship with terrible stock antennas.** The stubby antennas that come in the box are only ~69% efficient. Nearly a third of your signal is wasted as heat instead of reaching the mesh.

    **Our recommendation: [Muziworks 17cm Whip Antenna](https://muzi.works/products/whip-antenna-17cm) (~$12)**

    - **SMA Male connector**. Fits most handhelds directly
    - Community reports significantly better range compared to stock antennas (manufacturer-rated SWR of 1.3)
    - 17cm flexible whip, 915 MHz tuned
    - Available individually (~$12) or in a [4-pack (~$36)](https://muzi.works/products/4-pack-whip-antenna-17cm-915mhz)
    - Also available on [Amazon](https://www.amazon.com/muzi-%E1%B4%A1%E1%B4%8F%CA%80%E1%B4%8B%EA%9C%B1-915Mhz-Antenna-Meshtastic/dp/B0D7D6866W)

    **Works with:** RAK WisMesh Pocket (SMA), LILYGO T-Echo (SMA), Heltec V3 (needs U.FL to SMA pigtail), LILYGO T-Beam (SMA), LILYGO T-Deck Plus (SMA)<br>
    **Does NOT apply to:** Card-style trackers (WisMesh Tag, SenseCAP T-1000e, SenseCAP MeshTracker X1). These have sealed internal antennas with no external port.<br>
    **Nano G2 Ultra note:** The Nano G2 Ultra has a custom wideband internal antenna engineered for body-proximity use. It doesn't have an external port and doesn't need an upgrade.

---

#### :material-star-outline: Budget Pick: Seeed Wio Tracker L1 (~$30)

The best value in Meshtastic right now. For around $30 you get a radio, GPS, screen, and battery. Ready to go.

- **Battery:** 800 mAh (~2-3 days typical)
- **Screen:** 0.96" OLED
- **GPS:** Built-in

The **L1 Pro** (~$43) is worth the extra $13. Bigger 1.3" OLED screen, joystick navigation, solar charging, 2000 mAh battery, and an RP-SMA antenna connector for upgrades.

:material-cart: [Seeed Studio L1 ($29.90)](https://www.seeedstudio.com/Wio-Tracker-L1-p-6453.html) | [L1 Pro ($42.90)](https://www.seeedstudio.com/Wio-Tracker-L1-Pro-p-6454.html) | [Amazon (L1 Pro)](https://www.amazon.com/seeed-studio-L1-Pro-Tracker/dp/B0FNCS5ST1)

---

#### :material-battery-high: Battery Champion: Heltec T114 (~$25-45)

The best budget-to-mid-range option if battery life is your priority. The T114 supports a standard 18650 battery, giving it up to a week of runtime without charging. Significantly outperforming the T-Echo on battery life at a lower price. Color TFT display, solar input, and ultra-low sleep current round out an impressive feature set.

- **Battery:** 800 mAh built-in or 18650 cell (up to ~3000 mAh, up to a week runtime)
- **Screen:** 1.14" Color TFT
- **GPS:** Built-in
- **Extras:** Solar charging input, ultra-low sleep current

Available in several variants. The base model starts around $25, and versions with 18650 battery holder run ~$35-45.

:material-cart: [Heltec Store](https://heltec.org/project/mesh-node-t114/)

---

#### :material-star-half-full: Mid-Range Pick: LILYGO T-Echo (~$60-68)

A proven community favorite. The e-ink display (like a Kindle) is perfectly readable in direct Arizona sunlight and barely uses any battery. One of the longest-lasting handhelds available.

- **Battery:** 850 mAh (~5-7 days typical, 2+ weeks in power-saving mode)
- **Screen:** 1.54" E-Ink (always visible, even in bright sun)
- **GPS:** Built-in

!!! warning "Always connect the antenna before powering on"
    The T-Echo's SX1262 radio can be permanently damaged if powered on without an antenna connected.

:material-cart: [LILYGO Store (~$60)](https://lilygo.cc/products/t-echo-meshtastic) | [Rokland (~$68)](https://store.rokland.com/products/lilygo-ttgo-meshtastic-t-echo-white-lora-sx1262-wireless-module-915mhz-nrf52840-gps-for-arduino)

**Alternative: Elecrow ThinkNode M1 (~$40-58)**, a T-Echo alternative with a bigger 1200 mAh battery and E-Ink display at a lower price point. Worth considering if you like the T-Echo form factor but want more battery for less money.

---

#### :material-trophy: Best Overall: RAK WisMesh Pocket V2 (~$89-99)

The gold standard grab-and-go handheld. Comes ready to use out of the box, no flashing, no tinkering. Big battery, IP66 waterproof, solar connector, and modular expansion slots.

- **Battery:** 3200 mAh (~3+ days with GPS and screen active)
- **Screen:** 1.3" OLED with button navigation
- **GPS:** Built-in
- **Extras:** Solar connector, 2x WisBlock sensor slots, external SMA antenna connector

:material-cart: [RAK Store (~$89)](https://store.rakwireless.com/products/wismesh-pocket) | [Rokland (~$99)](https://store.rokland.com/products/wismesh-pocket) | [Atlavox](https://atlavox.com/products/rak-wismesh-pocket)

---

#### :material-signal-variant: Best Antenna: B&Q Nano G2 Ultra (~$85-90)

If you care about the best possible signal from a handheld, this is it. The Nano G2 Ultra has a custom wideband antenna (815-940 MHz) engineered specifically for body-proximity use. Most antennas lose performance near your body, this one doesn't. No screen. Use it with your phone app.

- **Battery Life:** ~5 days typical
- **GPS:** Built-in
- **Antenna:** Custom wideband internal, designed for on-body carry

:material-cart: [BQ Voyage (~$86)](https://store.bqvoy.com/product/meshtastic-mesh-device-nano-g2-ultra/) | [Rokland](https://store.rokland.com/products/meshtastic-mesh-device-nano-g2-ultra-low-power-wideband-lora-for-outdoor-adventures)

---

#### :material-keyboard: Standalone: LILYGO T-Deck Plus (~$77-87)

Want to leave your phone in your pocket? The T-Deck Plus has a full physical keyboard, trackball, 2.8" touchscreen, GPS, WiFi, and Bluetooth. Think of it as a tiny standalone messenger. Uses the ESP32-S3 chip (has WiFi but shorter battery life).

- **Battery:** 2000 mAh (~1-2 days)
- **Screen:** 2.8" Color LCD touchscreen
- **GPS:** Built-in
- **Chip:** ESP32-S3 (WiFi + Bluetooth)

:material-cart: [LILYGO Store (~$77)](https://lilygo.cc/products/t-deck-plus-meshtastic) | [Amazon](https://www.amazon.com/LILYGO-ESP32-S3-LORA-89-2-8-inch-Development/dp/B0FBGX1VP5)

---

#### :material-map-marker: Card-Style Trackers

Credit-card-sized GPS trackers with no screen or buttons. Toss one in a backpack, clip it to a pet collar, or leave it in a vehicle. They report location to the mesh automatically.

**Our pick: RAK WisMesh Tag (~$39)**

- **Battery:** 1000 mAh (**5-6 days** typical; 2-3 days with GPS always on)
- **TX Power:** 22 dBm (standard)
- **Waterproof:** IP66
- **Sensors:** 3-axis accelerometer

:material-cart: [RAK Store (~$39)](https://store.rakwireless.com/products/wismesh-tag-meshtastic-gps-lora-tracker-ip66) | [Rokland (~$50)](https://store.rokland.com/products/wismesh-tag-from-rakwireless-mokosmart-meshtastic-compatible-card-sized-node-us915-mhz)

**Also great: SenseCAP MeshTracker X1 (~$50)**

The same card idea, but **thicker and heavier** than a T-1000e (90 x 57 x **8 mm**, 45 g, versus 85.6 x 54 x 6.5 mm) and considerably better at almost everything else. Most importantly, it charges over **plain USB-C**. No proprietary magnetic puck to lose.

- **Battery:** 1100 mAh (vs 700 mAh on the T-1000e), rated up to ~5 days
- **TX Power:** 22 dBm. Same as the WisMesh Tag, and **8 dB more than the T-1000e's 13.9 dBm**
- **Radio:** Semtech LR2021 with **-141 dBm** receive sensitivity, nRF52840 MCU, BLE 5.0
- **GPS:** Dual-band **L1 + L5** GNSS, plus a barometer and a temperature sensor
- **Waterproof:** IP66. One button, buzzer, vibration motor, RGB LED

**Who it's for:** anyone who doesn't need the absolute lightest, thinnest thing in their pocket. It's the one to hand to **someone who just needs to remember to keep it charged and nothing else** (family members, kids, a hiking partner) because a normal USB-C cable is all the instruction they need.

:material-cart: [Seeed Studio ($49.90)](https://www.seeedstudio.com/sensecap-meshtracker-x1-meshtastic-gps-tracker-p-6935.html)

**Also fine: SenseCAP T-1000e (~$39)**

The original card tracker. Still works, still cheap, but it has the **smallest battery (700 mAh)** and by far the **lowest TX power (13.9 dBm, about 0.025 W)** of anything on this page. Buy it on price alone; otherwise the WisMesh Tag or the MeshTracker X1 is the better card.

!!! warning "Make sure you buy the T-1000**e**"
    The "e" is the Meshtastic-compatible version. Other T-1000 models won't work with Meshtastic.

:material-cart: [Seeed Studio](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html) | [Amazon](https://www.amazon.com/SenseCAP-Card-Tracker-T1000-Meshtastic/dp/B0DJ6KGXKB)

---

## :material-home-roof: Rooftop / Base Station Nodes

These are permanent nodes mounted high on your roof, attic, or mast. They're the backbone of Arizona's mesh network.

!!! tip "Height is everything"
    **How high your antenna is matters more than how fancy it is.** A basic antenna at 30 feet will almost always outperform an expensive antenna at 6 feet.

!!! info "Arizona climate note"
    Extreme heat (115F+), intense UV, and monsoon storms. Use **waterproof enclosures** (IP67+) and ensure ventilation. The good news: solar panels perform exceptionally well here year-round.

!!! info "Node role for Arizona rooftop nodes"
    Set your rooftop node to **CLIENT**. This is the recommended role for home installations. See the [Recommended Settings](/docs/recommended-settings.html) page for details on all roles.

!!! warning "Understand Router roles before switching"
    **Router** and **Router Late** are intended for high-elevation, permanent fixed locations with good line-of-sight. Not typical home or rooftop installs. Using these roles in the wrong context can increase congestion and cause routing issues across the shared mesh. If you're considering Router or Router Late, read up on Meshtastic's guidance and ask the community on Discord before switching.

    [:fontawesome-brands-discord: Ask the Community on Discord](https://discord.gg/HrKtyuFEQk){ .md-button .md-button--primary }

---

### :material-flash: Don't go below 1 watt { #why-1-watt }

**This is the biggest change to our hardware advice, so it gets its own section.** For any node that sits in one place, on a roof, in an attic, on a mast, or plugged into a wall, we now recommend **nothing under 1 watt (30 dBm)** of transmit power.

That rules out most of what we used to recommend. Nearly every popular solar node, including the stock WisMesh Repeater and Repeater Mini, the SenseCAP Solar P1 series, and most Etsy builds, transmits at **22 dBm**. That sounds close to 30. It isn't. dBm is a logarithmic scale, so here it is in watts:

| TX power | In watts | What runs at this level |
|---|---|---|
| 13.9 dBm | 0.025 W | SenseCAP T-1000e card tracker |
| 22 dBm | 0.16 W | Most handhelds, WisMesh Tag, MeshTracker X1, **stock WisMesh Repeater / Repeater Mini**, most solar nodes |
| 27 dBm | 0.5 W | Some higher-power boards |
| 28 dBm | 0.63 W | Heltec LoRa32 V4 |
| **30 dBm** | **1.0 W** | **PeakMesh 1W, WisMesh Repeater Mini 1W build, Station G3 (default setting)** |

Going from 22 dBm to 30 dBm is **+8 dB, roughly 6x the transmit power**. In open terrain that's worth something like **1.5-1.8x the usable distance**, and in cluttered suburban Arizona it's often the difference between a node that *sometimes* gets in and a node that's just always there.

**What we actually see:** almost every "nobody can hear me" and "I only see two nodes" post in **#i-need-help** traces back to a sub-1W node. Once someone gets a **1 watt radio on their roof**, those reports essentially stop. Not "improve" — stop. That pattern has been consistent enough for long enough that we've made 1W the floor for every fixed node on this page.

!!! warning "Power does not replace height or antenna"
    Put the node **high** and put a decent antenna on it first. A 1W radio at 6 feet behind a stucco wall still loses to a 0.16W radio at 30 feet in clear air. 1 watt is what you add **on top of** good placement, not instead of it.

!!! note "Be a good neighbor with 1 watt"
    1 watt is a lot of power. If your local mesh is already healthy and you're heard fine, running full power mostly adds noise and hop congestion for everybody else. Start at whatever your node ships with, confirm you're heard, and turn it up only if you actually need it.

!!! danger "FCC and EIRP, in plain terms"
    On US 915 MHz ISM you get up to **30 dBm conducted** with up to a **6 dBi antenna** (so 36 dBm EIRP). Above 6 dBi of antenna gain you have to reduce TX power dB for dB.

    - **30 dBm + the 5 to 5.8 dBi antennas we recommend is about 35-35.8 dBm EIRP.** Under the limit.
    - The **RAK 1W Booster Kit** (the radio inside both the PeakMesh 1W nodes and the Repeater Mini 1W build) is **FCC certified at ~24.5 dBm / 290 mW** and ships set to that level. The hardware goes to 30 dBm; raising it is your call and your responsibility.
    - The **Station G3** can push ~36.8 dBm conducted, well past the conducted limit. It **defaults to 30 dBm** for license-free use. Leave it there.

---

#### :material-trophy: 1. PeakMesh 1W. Best for most people (~$115-120) { #peakmesh-1w }

**Not sure what to get? Get this.** PeakMesh is a one-person shop in Merritt Island, FL, with a 5.0 rating across roughly 1,100 reviews and 4,000 sales and a long track record in the Meshtastic community: their nodes have survived midwest winters, monsoon-level rain, and highway speeds. In September 2026 they released **1 watt versions of their four best-selling enclosures**, which is what moved them to the top of this page.

Every 1W model includes:

- **RAK 1W Booster Kit** (RAK3401 nRF52840 + RAK13302 1W LoRa module with PA and SAW filter), on a custom sled sized for the larger 1W board
- **Two 1W+ ETFE solar panels** and **two Samsung 5000+ mAh 21700 cells**. PeakMesh rates it at a month or more with no sun at all
- **Genuine ALFA 5 dBi outdoor omni antenna**, bought direct from Rokland rather than a clone
- UV-resistant 3D-printed **ASA** housing in several colors, TPU-gasketed access panel, and an illuminated weatherproof power switch so you can see it's on from the ground
- Assembled, tested, flashed with current firmware, free USPS shipping. They'll flash MeshCore instead if you ask in the order notes

| Model | Mount style | Price | Link |
|---|---|---|---|
| **Ultimate** | Wall, pole, or gutter. The all-rounder, and the right pick for most houses | ~$115 | [Etsy](https://www.etsy.com/listing/4552505343/new-1-watt-peakmesh-ultimate-wall-pole) |
| **Altitude** | Hangs from a tree branch and disappears into the canopy | ~$120 | [Etsy](https://www.etsy.com/listing/4552515778/new-1-watt-peakmesh-altitude-tree) |
| **Magnet Climber** | Magnet mount for **vertical** steel surfaces | ~$120 | [Etsy](https://www.etsy.com/listing/4552520488/new-1-watt-peakmesh-magnet-climber) |
| **Magnet Mover** | Magnet mount for **horizontal** surfaces | ~$120 | [Etsy](https://www.etsy.com/listing/4552519074/new-1-watt-peakmesh-magnet-mover-magnet) |

If you're putting a node on a house, **buy the Ultimate.** The stainless gutter mount and the color-matched pole mount are sold separately in the shop's Accessories section; grab whichever matches where it's going.

!!! warning "Check the Radio Board Options dropdown before you order"
    Each 1W listing sells two ways: **"RAK 1W Booster Kit"** (a complete, ready-to-use node) or **"DIY No Radio Version"** (everything except the radio). RAK's 1W kits have been hard to source, and **as of 20 Sep 2026 the radio-included option was showing sold out on all four models.**

    If it's still sold out when you look, you have two good options: message PeakMesh (they typically reply within a few hours), or buy the **DIY No Radio** version and add a [RAK 1W Booster Kit direct from RAK (~$39)](https://store.rakwireless.com/products/meshtastic-1w-lora-booster-kit-rak3401). The enclosures are designed around that exact board and the photos on each listing show the install and cable routing.

:material-cart: **[Browse all PeakMesh 1W nodes](https://www.etsy.com/shop/PeakMesh?search_query=1w)**

---

#### :material-tools: 2. WisMesh Repeater Mini 1W. Build your own (~$125-150) { #repeater-mini-1w }

**Want to build it yourself?** This is the one. It's a community build that puts the same RAK 1W Booster Kit (RAK3401) inside the WisMesh Repeater Mini's solar enclosure. The 1W board fits the enclosure's standard mounting-plate holes with no modification and **no soldering**, giving you **30 dBm (1W) of TX power**, roughly 6x a typical 22 dBm node, with better receive too thanks to the RAK13302's RF/SAW filter. The low-power nRF52840 plus the Mini's solar panel keep it topped up; prayingmedic's field test held battery voltage in a narrow 3.80-3.84 V band across 5 days mounted vertically on a 10 ft mast.

- **Chip:** nRF52840 + RAK13302 1W LoRa module (with PA + RF/SAW filter)
- **TX Power:** 30 dBm (1W)
- **Power:** Solar (panel built into the donor enclosure) + Li-ion battery. No AC needed
- **WiFi:** No (Bluetooth only)
- **Soldering:** None

**Parts list:**

| Part | Approx. Price | Link |
|---|---|---|
| RAK Meshtastic 1W LoRa Booster Kit (RAK3401) | ~$39 | [RAK Store](https://store.rakwireless.com/products/meshtastic-1w-lora-booster-kit-rak3401) |
| WisMesh Repeater Mini (solar enclosure donor) | ~$50-70 | [Rokland](https://store.rokland.com/products/wismesh-repeater-mini-reliable-coverage-expansion-for-smart-networks) |
| Meshnology 5Ah battery | n/a | [Amazon](https://www.amazon.com/Meshnology-Rechargeable-955565-Protection-Development/dp/B0FFM9MDPR/?th=1) |
| Alfa 5.8 dBi RP-SMA whip antenna | ~$12 | [Rokland](https://store.rokland.com/collections/802-11ah-wi-fi-halow/products/alfa-network-ars-9096rp-5-dbi-indoor-antenna-for-helium-hotspots) |
| Mast-mount bracket (STL) | print | [Download](https://u.pcloud.link/publink/show?code=XZPqoI5ZKPgwakGbUJStyvrzPUQXVjBXdPM7) |
| Battery spacer (STL) | print | [Download](https://u.pcloud.link/publink/show?code=XZoqoI5ZKKELnYkIrap8TvU7T73gMkXI3ENV) |

Plus small hardware: lever nuts (e.g. Wago) for parallel battery wiring, 3M double-sided foam tape, M3 machine screws, and hose clamps for mast mounting. A 3D printer is optional. Only the mast bracket and battery spacer are printed.

!!! success "Community build by prayingmedic"
    This build was designed and field-tested by **prayingmedic**, a member of the Arizona Meshtastic Community. Huge thanks to him for documenting it and sharing the photos and STL files. The [full build guide](/docs/wismesh-repeater-mini-1w.html) walks through every step.

!!! info "EIRP stays compliant"
    30 dBm TX + the 5.8 dBi Alfa whip ≈ **35.8 dBm EIRP**. Just under the **36 dBm** US 915 MHz ISM limit. Don't pair this build with a higher-gain antenna at full power, or you'll go over.

!!! warning "Don't buy a stock Repeater Mini and stop there"
    On its own, a stock WisMesh Repeater or Repeater Mini transmits at 22 dBm, which is [below our 1W floor](#why-1-watt). Buy the Mini as the **donor enclosure** for this build, not as a finished node.

:material-cart: **[Full Build Guide → WisMesh Repeater Mini 1W](/docs/wismesh-repeater-mini-1w.html){ .md-button .md-button--primary }**

---

#### :material-transmission-tower: 3. Station G3. Hardwired power and WiFi (~$109) { #station-g3 }

**Have power where the node is going, and want WiFi/MQTT?** The Station G3 is the successor to the long-running Station G2 and the most capable consumer Meshtastic radio you can buy. Designed by Neil Hao of B&Q Consulting, now trading as **BQ Voyage**. It's **modular**: the motherboard, RF daughterboard, and MCU daughterboard are separate parts, so a future radio or MCU upgrade doesn't mean buying a whole new device.

- **Chip:** ESP32-S3 (16 MB flash, 8 MB PSRAM) + Semtech SX1262, 32 MHz TCXO (±1.5 ppm)
- **TX Power:** ~36.8 dBm ±2 dBm hardware maximum, with 4 selectable PA levels. **Ships at, and should stay at, 30 dBm (1W)** for license-free use
- **Receive:** adaptive LNA with 10-16 dB dynamic gain, 1.5 dB typical noise figure, dynamic impedance matching, and an LNA bypass. **This is the real upgrade over the G2**: it handles co-channel interference and strong nearby signals far better, so it can still pull in weak low-power nodes on a busy band
- **Power:** USB-C PD (15 VDC) **or** a DC5521 barrel jack at 9-19 VDC, **25 W minimum**. No battery, no solar
- **WiFi:** Yes, plus Bluetooth 5.0. MQTT gateway capable. No Ethernet
- **Screen:** 1.3" OLED. **GPS:** optional add-on. **Antenna:** SMA, 915 MHz antenna included

!!! warning "Rooftop only if you solve power first"
    No battery and no solar means the G3 is **not an ideal rooftop node on its own**. To put one up high you either **run power to the roof**, or mount the G3 **in the attic and run coax up to a roof-mounted antenna**. If you go the attic route, keep the run to **10 ft or less of LMR-240 or better**, otherwise you hand back the performance you paid for. If neither is practical, buy one of the solar 1W nodes above.

!!! info "Buying one: sold in batches"
    BQ Voyage sells the G3 in production batches and it moves fast. As of **20 Sep 2026 both US915 and EU868 showed out of stock at $109 (down from $159), with the next batch listed for 22 Sep 2026.** Check the shop directly rather than trusting this page's price.

Going outside? Pair it with a [Rokland 5.8 dBi Fiberglass Antenna](https://store.rokland.com/products/5-8-dbi-n-male-omni-outdoor-915-mhz-antenna-large-profile-32-height-for-helium-rak-miner-2-nebra-indoor-bobcat) (~$30-40) and a waterproof enclosure. **Total build: ~$180-220.**

:material-cart: [BQ Voyage Shop](https://store.bqvoy.com/product/mesh-device-station-edition/) | [Station G3 wiki](https://wiki.bqvoy.com/en/devkits/station-g3)

---

## :material-antenna: Antenna Guide

Your antenna has the single biggest impact on range. More than the radio itself.

#### Which Type?

| Type | What It Does | When to Use It |
|---|---|---|
| **Omnidirectional** | Sends/receives in all directions (360°) | Most rooftop nodes |
| **Directional (yagi)** | Focuses signal in one direction | Bridging two distant nodes |

For most Arizona rooftop nodes, an **omnidirectional fiberglass antenna** is the right choice. **A 5-6 dBi omni is the sweet spot** for residential/suburban deployments.

#### Recommended Antennas

| Antenna | Gain | Price | Best For | Link |
|---|---|---|---|---|
| **Rokland 5.8 dBi Fiberglass** | 5.8 dBi | ~$30-40 | All-around rooftop (32" tall) | [Buy](https://store.rokland.com/products/5-8-dbi-n-male-omni-outdoor-915-mhz-antenna-large-profile-32-height-for-helium-rak-miner-2-nebra-indoor-bobcat) |
| **Rokland 8 dBi Low Profile** | 8 dBi | ~$50 | Flat terrain, max range | [Buy](https://store.rokland.com/products/8-dbi-omni-outdoor-915mhz-fiberglass-antenna-for-lora-halow-application) |
| **ALFA AOA-915-5ACM** | 5 dBi | ~$25-35 | Compact outdoor (7" tall) | [Buy](https://store.rokland.com/products/alfa-aoa-915-5acm-5-dbi-omni-outdoor-915mhz-802-11ah-mini-antenna-for-lora-halow-application) |
| **RAK WisMesh Blade** | ~3 dBi | ~$15-20 | Budget outdoor | [Buy](https://store.rakwireless.com/products/wismesh-antenna) |
| **Muziworks 17cm Whip** | n/a | ~$12 | Handheld upgrade (SMA), best value | [Buy](https://muzi.works/products/whip-antenna-17cm) |
| **MESHTAC 4 dBi Gooseneck** | 4 dBi | ~$20-25 | Handheld upgrade (SMA) | [Buy](https://store.rokland.com/products/meshtac-gooseneck-tactical-antenna-4-dbi-gain-sma-male-915-mhz-flexible-for-meshtastic-lora) |

!!! tip "Keep the cable short"
    Every foot of cable loses a little signal. Use **LMR-240 or better** cable and keep runs to **10 feet or less**. The Rokland antenna kits include quality cable in 6, 10, 15, or 25 foot lengths.

!!! warning "Higher gain = narrower beam"
    An 8-10 dBi antenna focuses signal into a narrow horizontal band, great for flat terrain but bad for hilly areas. If you're in the mountains or have significant elevation changes, stick with 3-5 dBi.

---

!!! info "WiFi vs Bluetooth. Quick Reference"
    | | **nRF52840** | **ESP32 / ESP32-S3** |
    |---|---|---|
    | **Battery life** | :material-battery-high: Great (days to weeks) | :material-battery-medium: OK (1-2 days) |
    | **WiFi** | :material-close: No | :material-check: Yes |
    | **Bluetooth** | :material-check: Yes | :material-check: Yes |
    | **Best for** | Handhelds, solar nodes | Plugged-in rooftop nodes, WiFi/MQTT gateways |

    **Simple rule:** Carrying it? Get nRF52840 (Bluetooth). Plugging it in on your roof? ESP32 is fine and gives you WiFi.

---

## :material-link-variant: Trusted Retailers

| Retailer | Website | Notes |
|---|---|---|
| **PeakMesh** | [Etsy shop](https://www.etsy.com/shop/PeakMesh?search_query=1w) | Our #1 rooftop pick. Pre-built RAK-based 1W solar nodes, 5.0 rating, ships from FL |
| **Rokland** | [store.rokland.com](https://store.rokland.com/) | US-based, fast shipping, great antenna selection |
| **RAK Wireless** | [store.rakwireless.com](https://store.rakwireless.com/collections/meshtastic) | WisMesh Pocket, Repeater, Tag, 1W Booster Kit |
| **BQ Voyage** (B&Q Consulting) | [store.bqvoy.com](https://store.bqvoy.com/) | Station G3, Nano G2 Ultra. Pro RF engineering. Sells in batches |
| **Atlavox** | [atlavox.com](https://atlavox.com/) | Meshtastic hardware and accessories |
| **Muziworks** | [muzi.works](https://muzi.works/) | Cases, antennas, and the R1 Neo. Assembled in USA |
| **Seeed Studio** | [seeedstudio.com](https://www.seeedstudio.com/) | Wio Tracker, SenseCAP card trackers |

!!! danger "Watch out for fakes on Amazon"
    There are **a lot** of knockoff Meshtastic devices and antennas on Amazon. A poorly made antenna can actually make your signal *worse*. **Buy from the retailers above whenever possible.** If you buy on Amazon, verify the seller is the official brand store.

---

#### Next Steps

- [How to Connect](/docs/how-to-connect.html). Set up your new radio and join the Arizona mesh
- [Recommended Settings](/docs/recommended-settings.html). Configure your node for the Arizona network
- [Official Meshtastic Hardware List](https://meshtastic.org/docs/hardware/devices/)
- [Meshtastic Getting Started Guide](https://meshtastic.org/docs/getting-started/)

---

*Prices are estimates as of early 2026 and may vary. Check retailer links for current pricing.*
