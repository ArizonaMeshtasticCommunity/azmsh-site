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

-   :material-home-roof:{ .lg .middle } __2. Rooftop: WisMesh Repeater Mini 1W__

    ---

    A community build that drops the RAK 1W Booster Kit into the WisMesh Repeater Mini's solar enclosure: **1W (30 dBm) of TX power** (about 6x a typical node), solar self-sustaining, **no soldering**. Designed and field-tested by **prayingmedic**.

    **~$125-150 in parts**. Every step is documented for first-time builders.

    [:material-tools: Full Build Guide](/docs/wismesh-repeater-mini-1w.html){ .md-button .md-button--primary }

</div>

!!! warning "Rooftop runner-up: Station G2 (~$100-130). Currently sold out"
    The most powerful consumer Meshtastic radio (up to **36.5 dBm / 4.5W**) and our long-time rooftop pick. But it's **sold out and extremely hard to get right now**. Check [B&Q Consulting](https://shop.uniteng.com/product/meshtastic-mesh-device-station-edition/) for restocks; until then, the Repeater Mini 1W build above is the one to get.

!!! warning "Why you need a rooftop node"
    **This is the #1 mistake new users make.** A handheld alone will struggle indoors and at range. Put a node up high and the difference is night and day.

---

## :material-cellphone: Handheld Devices

These radios pair with your phone over Bluetooth so you can type messages on your phone screen. All use the nRF52840 chip (great battery life, Bluetooth only) unless noted.

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

    **Works with:** RAK WisMesh Pocket (SMA), LILYGO T-Echo (SMA), Heltec V3/V4 (needs U.FL to SMA pigtail), LILYGO T-Beam (SMA), LILYGO T-Deck Plus (SMA)<br>
    **Does NOT apply to:** Card-style trackers (WisMesh Tag, SenseCAP T-1000e). These have sealed internal antennas with no external port.<br>
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

:material-cart: [B&Q Consulting (~$85)](https://shop.uniteng.com/product/meshtastic-mesh-device-nano-g2-ultra/) | [Rokland](https://store.rokland.com/products/meshtastic-mesh-device-nano-g2-ultra-low-power-wideband-lora-for-outdoor-adventures)

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

**Alternative: SenseCAP T-1000e (~$39)**

Similar card form factor but **smaller battery (700 mAh)** and **much lower TX power (13.9 dBm vs 22 dBm)**. The WisMesh Tag is the better choice, nearly double the battery life and significantly more transmit power for the same price.

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

---

#### :material-trophy: Best Overall: WisMesh Repeater Mini 1W (~$125-150)

Our #1 rooftop node. A community build that puts the RAK 1W Booster Kit (RAK3401) inside the WisMesh Repeater Mini's solar enclosure. The 1W board fits the enclosure's standard mounting-plate holes with no modification and **no soldering**, giving you **30 dBm (1W) of TX power**, roughly 6x a typical 22 dBm node, with better receive too thanks to the RAK13302's RF/SAW filter. The low-power nRF52840 plus the Mini's solar panel keep it topped up; prayingmedic's field test held battery voltage in a narrow 3.80-3.84 V band across 5 days mounted vertically on a 10 ft mast.

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

:material-cart: **[Full Build Guide → WisMesh Repeater Mini 1W](/docs/wismesh-repeater-mini-1w.html){ .md-button .md-button--primary }**

---

#### :material-trophy: Most Powerful (When You Can Get One): Station G2 (~$100-130)

The community favorite for serious coverage. Transmits at up to **36.5 dBm (4.5W)** with a dedicated low-noise amplifier for ~4 dB better receive sensitivity than standard radios. This is the node you put on your roof to anchor coverage for your whole neighborhood.

- **Chip:** ESP32-S3 (WiFi + Bluetooth)
- **TX Power:** Up to 36.5 dBm (4.5W)
- **Power:** USB-C (PD) or 9-19VDC external
- **WiFi:** Yes. MQTT gateway capable
- **Screen:** 1.3" OLED

Pair with a [Rokland 5.8 dBi Fiberglass Antenna](https://store.rokland.com/products/5-8-dbi-n-male-omni-outdoor-915-mhz-antenna-large-profile-32-height-for-helium-rak-miner-2-nebra-indoor-bobcat) (~$30-40) and a waterproof enclosure. **Total build: ~$180-220.**

!!! danger "EIRP compliance note"
    At full 36.5 dBm output with a high-gain antenna (5.8+ dBi), you may exceed US ISM 915 MHz EIRP limits. If using a high-gain antenna, reduce TX power in Meshtastic settings to stay compliant.

!!! warning "Sold out and extremely hard to get right now"
    The Station G2 is **sold out and extremely hard to get right now.** It's our #2 rooftop pick for this reason. If you can't track one down, build the WisMesh Repeater Mini 1W above. Check [B&Q Consulting's shop](https://shop.uniteng.com/shop-2/) regularly for restocks.

:material-cart: [B&Q Consulting](https://shop.uniteng.com/product/meshtastic-mesh-device-station-edition/)

---

#### :material-star: Budget: Heltec LoRa32 V4 (~$25-30)

The cheapest way to get a rooftop node running. Has WiFi for MQTT (internet bridge). Higher TX power than most budget boards at **28 dBm**.

- **Chip:** ESP32-S3 (WiFi + Bluetooth)
- **TX Power:** 28 dBm
- **Power:** USB-C (plug into a wall outlet)
- **GPS:** No (not needed. Set location manually)
- **Solar:** Has solar panel interface

Put it in a waterproof junction box (~$10), add a 915 MHz antenna (~$15-40), and run a USB cable from inside. **Total build: ~$50-80.**

!!! note "Firmware and power requirements"
    Requires Meshtastic firmware 2.7.20 or newer. TX current draw is high (960 mA). Use a quality USB power supply.

:material-cart: [Heltec Store](https://heltec.org/project/wifi-lora-32-v4/) | [Rokland](https://store.rokland.com/products/heltec-wifi-lora-32v4-esp32s3-sx1262-lora-node-meshtastic-lorawan)

---

#### :material-package-variant-closed: Pre-Built Solar Nodes (No Assembly Required)

Don't want to build anything? These come fully assembled. Mount them, configure Meshtastic settings, done.

!!! info "Node role for Arizona rooftop nodes"
    Set your rooftop node to **CLIENT**. This is the recommended role for home installations. See the [Recommended Settings](/docs/recommended-settings.html) page for details on all roles.

!!! warning "Understand Router roles before switching"
    **Router** and **Router Late** are intended for high-elevation, permanent fixed locations with good line-of-sight. Not typical home or rooftop installs. Using these roles in the wrong context can increase congestion and cause routing issues across the shared mesh. If you're considering Router or Router Late, read up on Meshtastic's guidance and ask the community on Discord before switching.

    [:fontawesome-brands-discord: Ask the Community on Discord](https://discord.gg/HrKtyuFEQk){ .md-button .md-button--primary }

| Device | Solar | Battery | GPS | Price | Buy |
|---|---|---|---|---|---|
| **WisMesh Repeater** | Built-in | Built-in | No | ~$70-90 | [RAK Store](https://store.rakwireless.com/products/wismesh-meshtastic-solar-repeater) |
| **SenseCAP Solar P1 Pro** | 5W panel | 4x 18650 included | Yes | ~$90 | [Seeed Studio](https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-Pro-for-Meshtastic-LoRa-p-6412.html) |
| **Atlavox Beacon** | Built-in | Built-in | Yes | ~$150-200 | [Atlavox](https://atlavox.com/products/atlavox-beacon-solar-meshtastic-node) |
| **Heltec V4 Solar Node** | 25W panel | 6x 18650 | No | ~$120-180 | [Etsy](https://www.etsy.com/listing/4310813646/outdoor-solar-2510w-meshtastic-or) |

- **Best value:** SenseCAP Solar P1 Pro. 5W solar panel, 4x 18650 batteries, GPS, ~$90
- **Easiest deploy:** WisMesh Repeater. IP67 weatherproof, mount and forget
- **Want the Repeater Mini?** Skip the stock version and build the **1W upgrade** instead. It's [our #1 rooftop pick](/docs/wismesh-repeater-mini-1w.html): same enclosure, 6x the TX power, no soldering.
- **Premium turnkey:** Atlavox Beacon. Professional mounting hardware, dual SMA connectors, rugged build
- **Need WiFi/MQTT?** Heltec V4 Solar Node. Heltec V4 board (+28 dBm), 25W solar panel, 6x 18650 battery bay, 5.5 dBi IP67 antenna, mast brackets included

!!! warning "Arizona heat and small solar panels"
    In Arizona's extreme heat (115F+), small solar panels (5W and under) may not sustain nodes long-term. For permanent Arizona deployments, consider nodes with 10W+ panels or supplement with a larger panel.

---

#### :material-store: More Pre-Built Nodes on Etsy

The Meshtastic community on Etsy has grown significantly. These are small-batch builders who assemble, test, and ship ready-to-deploy nodes, great if you don't want to source parts and build your own.

##### PeakMesh (Highly Recommended)

PeakMesh is a standout Etsy seller with consistently excellent reviews (4.8+ stars) and proven durability. Customers have reported nodes surviving midwest winters, monsoon-level rain, and highway speeds. All nodes use RAK Wireless modules (nRF52840) with ALFA antennas and come fully assembled with the latest firmware.

| Model | Solar | Battery | Price | Best For | Link |
|---|---|---|---|---|---|
| **MicroMag** | 1W panel | 3500 mAh 18650 | ~$85 | Stealth pole/sign mount, magnetic attach | [Etsy](https://www.etsy.com/listing/4346022155/peakmesh-micromag-smallest-outdoor) |
| **Ultimate** | 2x 1W panels | 2x 5000 mAh 21700 | ~$135 | Max battery life (month+ without sun) | [Etsy](https://www.etsy.com/listing/1776412240/peakmesh-ultimate-solar-meshtastic-radio) |
| **Altitude** | Solar | 2x 5000 mAh 21700 | ~$130 | Tree hanging deployments | [Etsy](https://www.etsy.com/listing/4331277320/peakmesh-altitude-tree-hanging-solar) |
| **Birdhouse** | Solar | 2x 5000 mAh 21700 | ~$135 | Disguised as a birdhouse | [Etsy](https://www.etsy.com/listing/1795323188/peakmesh-birdhouse-solar-meshtastic) |
| **Magnet Climber** | Solar | 2x 5000 mAh 21700 | ~$135 | Magnetic mount, ALFA 5 dBi antenna | [Etsy](https://www.etsy.com/listing/1795573484/peakmesh-magnet-climber-solar-meshtastic) |

:material-cart: [Browse all PeakMesh products](https://www.etsy.com/shop/PeakMesh)

##### Other Notable Etsy Finds

| Product | What You Get | Price | Link |
|---|---|---|---|
| **Heltec V4 Solar Outdoor Node** | Heltec V4 (+28 dBm), 25W solar, 6x 18650 bay, 5.5 dBi IP67 antenna, mast brackets | ~$120-180 | [Etsy](https://www.etsy.com/listing/4310813646/outdoor-solar-2510w-meshtastic-or) |
| **Heltec V4 Complete Node** | Heltec V4 board, battery, case, antenna. Portable ready-to-go | ~$60-80 | [Etsy](https://www.etsy.com/listing/4439512620/heltec-v4-complete-meshtastic-node-sma) |
| **RAK Wisblock Solar Repeater** | RAK module, 6W solar, waterproof box, 3450 mAh battery | ~$90-120 | [Etsy](https://www.etsy.com/listing/1662624760/meshtastic-node-ready-to-use-solar) |

!!! tip "Buying from Etsy sellers"
    These are small-batch community builders, not big retailers. Inventory and pricing can change. Check seller reviews, ask questions before buying, and expect slightly longer lead times than Amazon or Rokland.

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
| **Rokland** | [store.rokland.com](https://store.rokland.com/) | US-based, fast shipping, great antenna selection |
| **RAK Wireless** | [store.rakwireless.com](https://store.rakwireless.com/collections/meshtastic) | WisMesh Pocket, Repeater, Tag, 1W Booster |
| **B&Q Consulting** | [shop.uniteng.com](https://shop.uniteng.com/) | Station G2, Nano G2 Ultra. Pro RF engineering |
| **Atlavox** | [atlavox.com](https://atlavox.com/) | Pre-built solar nodes and accessories |
| **Muziworks** | [muzi.works](https://muzi.works/) | Cases, antennas, and the R1 Neo. Assembled in USA |
| **PeakMesh** | [Etsy shop](https://www.etsy.com/shop/PeakMesh) | Pre-built solar nodes (RAK-based), excellent reviews, ships from FL |
| **Seeed Studio** | [seeedstudio.com](https://www.seeedstudio.com/) | Wio Tracker, SenseCAP, Solar P1 |

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
