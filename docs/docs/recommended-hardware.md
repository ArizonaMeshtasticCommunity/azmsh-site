---
title: Recommended Hardware
---

# :material-radio-handheld: Recommended Hardware

New to Meshtastic? Here's what to buy. It's simpler than you think.

!!! tip "Two things you need"
    **1. A handheld radio** — carry it with you, pairs with your phone via Bluetooth<br>
    **2. A rooftop/attic node** — put it up high at your home to keep you connected

    That's it. Buy these two things, download the [Meshtastic app](https://meshtastic.org/docs/getting-started/), and you're on the mesh.

---

## :material-star: Our Top Picks

### Handheld: RAK WisMesh Pocket V2 (~$99)

The best all-around handheld for Arizona. GPS, great battery life (up to 5+ days), compact, durable. Pairs with your phone over Bluetooth — open the Meshtastic app and start messaging.

:material-cart: **[Buy on RAK Store](https://store.rakwireless.com/products/wismesh-pocket)**

### Rooftop Node: Station G2 (~$109)

Put this on your roof or in your attic. It's the most powerful consumer Meshtastic radio available — it can transmit at much higher power than a handheld (35 dBm / 3.16W) and has a special amplifier that helps it hear weaker signals from far away. One of these on your roof and you'll hear nodes for miles.

:material-cart: **[Buy on B&Q Consulting](https://shop.uniteng.com/product/meshtastic-mesh-device-station-edition/)**

!!! warning "Why you need a rooftop node"
    **This is the #1 mistake new users make.** A handheld alone will struggle indoors and at range. If you can't hear anyone on the mesh, it's almost always because you don't have a node up high. Put a Station G2 in your attic or on your roof and the difference is night and day.

---

**Want more options or details?** Keep reading below for budget picks, build guides, and antenna recommendations.

---

## :material-wifi: WiFi vs Bluetooth — What's the Difference?

Meshtastic devices can connect to your phone (or other devices) using either **WiFi** or **Bluetooth**. Here's when to use each:

### Bluetooth (for handhelds you carry around)

Most handheld Meshtastic radios connect to your phone using **Bluetooth**. It works just like connecting wireless earbuds — open the Meshtastic app on your phone, pair with your radio, and you're set. Bluetooth uses very little battery, which is why portable radios use it.

Some of the best battery-life chips (called nRF52840) only support Bluetooth — no WiFi at all. That's actually a good thing for a handheld because it means the battery lasts much longer.

### WiFi (for rooftop/stationary nodes)

If you have a node that stays in one place (like on your roof or in your attic), **WiFi** is the better choice. WiFi lets your node:

- **Share data faster** with the internet using something called MQTT (think of it as a bridge between your mesh network and the wider world)
- **Let multiple devices connect** to it at once — not just one phone
- **Stay always-connected** to your home network for remote monitoring

Rooftop nodes that support WiFi use a different chip (ESP32) which uses more power, but since they're plugged into wall power anyway, that doesn't matter.

!!! tip "Simple rule of thumb"
    **Carrying it with you?** Get a Bluetooth device (nRF52840 chip).<br>
    **Mounting it on your roof?** Get a WiFi device (ESP32 chip) and plug it in.

---

## :material-chip: Quick Reference: The Two Chip Types

Meshtastic devices are built on one of two chips. You don't need to memorize this — just know that it affects battery life and whether the device has WiFi.

| | **nRF52840** | **ESP32 / ESP32-S3** |
|---|---|---|
| **Battery life** | :material-battery-high: Great (days to weeks) | :material-battery-medium: OK (1-2 days) |
| **WiFi** | :material-close: No | :material-check: Yes |
| **Bluetooth** | :material-check: Yes | :material-check: Yes |
| **Best for** | Handhelds, solar-powered nodes | Plugged-in rooftop nodes, WiFi gateways |

!!! info "The trend in 2025-2026"
    The Meshtastic community is shifting toward **nRF52840-based devices** for most use cases. They use dramatically less power, making them ideal for both pocket carry and solar-powered rooftop nodes. Choose ESP32 only if you specifically need WiFi connectivity (like an MQTT gateway on your roof).

---

## :material-cellphone: Handheld Devices (Personal Carry)

These are the radios you carry with you to send and receive messages on the mesh. They pair with your phone over Bluetooth so you can type messages on your phone screen instead of using tiny buttons.

!!! warning "Indoor range is limited"
    Handheld radios have small antennas and won't reach as far indoors — walls block the signal, especially the stucco-and-wire construction common in Arizona. If you're mostly indoors, pair your handheld with a rooftop node at your home. That rooftop node will relay your messages much farther than the handheld can on its own.

### Comparison Table

| Device | Battery | Est. Battery Life | Screen | Est. Price | Best For |
|---|---|---|---|---|---|
| **Wio Tracker L1** | 800 mAh | ~2-3 days | 0.96" OLED | ~$30 | :material-star: Budget pick |
| **Heltec T114 V2** | 800 mAh (external) | ~3-5 days | 1.14" Color | ~$30-40 | Budget w/ color screen |
| **LILYGO T-Echo** | 850 mAh | ~5-7 days | 1.54" E-Ink | ~$45-50 | Mid-range, best battery |
| **RAK WisMesh Pocket V2** | 3200 mAh | ~5-7 days | 1.3" OLED | ~$95-99 | :material-trophy: Best overall |
| **Nano G2 Ultra** | 1100 mAh | ~3-5 days | 0.96" OLED | ~$70-90 | Best signal quality (handheld) |
| **RAK WisMesh Tag** | 1000 mAh | ~2-3 days (GPS on) | None | ~$40-50 | Tiny GPS tracker |
| **Heltec LoRa32 V4** | External | Depends on battery | 0.96" OLED | ~$25-30 | Cheapest entry (no GPS) |

!!! info "Battery life varies"
    These battery estimates assume typical use — the radio is mostly listening with occasional messages. Heavy messaging, keeping the screen on constantly, or active GPS tracking will reduce battery life. Power-saving mode can extend it significantly.

---

### :material-star-outline: Budget Pick: Seeed Wio Tracker L1 (~$30)

The best value in Meshtastic right now. For around $30 you get everything you need — a radio, GPS, screen, and battery — ready to go out of the box. Great way to try Meshtastic without spending a lot.

- **Battery:** 800 mAh (~2-3 days typical)
- **Screen:** 0.96" OLED
- **GPS:** Built-in
- **Connects to phone via:** Bluetooth

The **Wio Tracker L1 Pro** (~$43) is worth the extra $13 — it has a bigger screen (1.3" OLED), a joystick for easier navigation, solar charging, and a much bigger 2000 mAh battery (~3-5 days).

:material-cart: **Where to buy:**

- [Seeed Studio (L1 — $29.90)](https://www.seeedstudio.com/Wio-Tracker-L1-p-6453.html)
- [Seeed Studio (L1 Pro — $42.90)](https://www.seeedstudio.com/Wio-Tracker-L1-Pro-p-6454.html)
- [Amazon (L1 Pro)](https://www.amazon.com/seeed-studio-L1-Pro-Tracker/dp/B0FNCS5ST1)

---

### :material-star-half-full: Mid-Range Pick: LILYGO T-Echo (~$45-50)

A proven favorite in the Meshtastic community. The e-ink display (like a Kindle screen) is perfectly readable in direct Arizona sunlight and barely uses any battery — this thing sips power. One of the longest-lasting handhelds you can buy.

- **Battery:** 850 mAh (~5-7 days typical, up to 2+ weeks in power-saving mode)
- **Screen:** 1.54" E-Ink (always visible, even in bright sun)
- **GPS:** Built-in
- **Connects to phone via:** Bluetooth

:material-cart: **Where to buy:**

- [LILYGO Official Store (~$45-49)](https://lilygo.cc/products/t-echo-meshtastic)
- [Rokland (~$50)](https://store.rokland.com/products/lilygo-ttgo-meshtastic-t-echo-white-lora-sx1262-wireless-module-915mhz-nrf52840-gps-for-arduino)

---

### :material-trophy: Best Overall Pick: RAK WisMesh Pocket V2 (~$99)

The gold standard for a grab-and-go Meshtastic handheld. Comes ready to use right out of the box — no setup, no flashing, no tinkering. Big battery, quality build, and just works.

- **Battery:** 3200 mAh (~5-7 days typical)
- **Screen:** 1.3" OLED with button navigation
- **GPS:** Built-in
- **Connects to phone via:** Bluetooth
- **Extras:** Pre-loaded with Meshtastic software, quality case, available in multiple colors

:material-cart: **Where to buy:**

- [RAK Wireless Store (~$99)](https://store.rakwireless.com/products/wismesh-pocket)
- [Rokland (~$99)](https://store.rokland.com/products/wismesh-pocket)
- [Atlavox](https://atlavox.com/products/rak-wismesh-pocket)

---

### :material-signal-variant: Honorable Mention: B&Q Nano G2 Ultra (~$70-90)

If you care about getting the best possible signal from a handheld, this is it. The Nano G2 Ultra has a specially designed antenna that works well even when you're holding it or it's in your pocket (most antennas lose performance near your body). Great for hikers and outdoor use.

- **Battery:** 1100 mAh (~3-5 days typical)
- **Screen:** 0.96" OLED
- **GPS:** Built-in
- **Connects to phone via:** Bluetooth

:material-cart: **Where to buy:**

- [B&Q Consulting Shop (~$85)](https://shop.uniteng.com/product/meshtastic-mesh-device-nano-g2-ultra/)
- [Rokland](https://store.rokland.com/products/meshtastic-mesh-device-nano-g2-ultra-low-power-wideband-lora-for-outdoor-adventures)

---

### :material-map-marker: Tiny Tracker: RAK WisMesh Tag (~$40-50)

A credit-card-sized GPS tracker. No screen, no buttons — just put it in a backpack, attach it to a pet collar, or toss it in a vehicle. It reports its location to the mesh automatically.

- **Battery:** 1000 mAh (~2-3 days with GPS tracking on)
- **Screen:** None
- **GPS:** Built-in
- **Connects to phone via:** Bluetooth
- **Waterproof:** IP66 rated

:material-cart: **Where to buy:**

- [RAK Wireless Store](https://store.rakwireless.com/products/wismesh-tag-meshtastic-gps-lora-tracker-ip66)
- [Rokland](https://store.rokland.com/products/wismesh-tag-from-rakwireless-mokosmart-meshtastic-compatible-card-sized-node-us915-mhz)

---

## :material-home-roof: Rooftop / Base Station Nodes

!!! warning "You NEED a rooftop or attic node"
    **If you're having trouble connecting or can't hear other nodes, this is why.** A handheld alone will struggle indoors and at range. The single best thing you can do for your mesh experience is put a powerful node on your roof or in your attic. Every rooftop node dramatically improves coverage for everyone nearby — including yourself.

These are permanent nodes mounted high on your roof, attic, fence, or mast. They're the backbone of Arizona's mesh network — like cell towers, but tiny and powered by you. We recommend **one of three devices** for this role:

!!! tip "Height is everything"
    In Meshtastic, **how high your antenna is matters more than how fancy it is**. A basic antenna mounted at 30 feet will almost always outperform an expensive antenna at 6 feet. Get your node as high as possible — roof peaks, chimney mounts, or antenna masts.

!!! info "Arizona climate note"
    Our desert climate means extreme heat (115F+), intense UV, and monsoon storms. Choose **waterproof enclosures** (IP67-rated), UV-resistant materials, and ensure some shade or ventilation for the electronics. The good news: solar panels perform exceptionally well here year-round.

### The Three Recommended Rooftop Devices

---

### :material-star: Budget Pick: Heltec LoRa32 V4 (~$25-30)

The cheapest way to get a rooftop node running. This one has WiFi, so it can connect to your home network and share data with the wider Meshtastic world through the internet (called MQTT — think of it as a bridge between your local mesh and the global network).

| Spec | Detail |
|---|---|
| **Chip** | ESP32-S3 (has WiFi) |
| **Transmit Power** | Up to 22 dBm |
| **GPS** | No (not needed — this node doesn't move) |
| **Power** | USB-C (plug it into a wall outlet) |
| **WiFi** | Yes — can share data with the internet |
| **Price** | ~$25-30 |

Put it in a waterproof junction box (~$10 from Home Depot), add a [915 MHz antenna](https://store.rokland.com/collections/all-helium-antennnas) (~$15), and run a USB cable from inside. Total build: **~$50-55**.

**Best for:** Getting a rooftop node up fast and cheap. Great starter node.

:material-cart: [Buy on Heltec Store](https://heltec.org/project/wifi-lora-32-v4/)

---

### :material-star::material-star: Mid-Range Pick: Station G2 (~$109)

The community favorite for serious coverage. This radio transmits at 35 dBm (about 3 watts — much more powerful than a handheld's fraction of a watt) and has a special low-noise amplifier that helps it hear faint signals from far away. This is the node you put on your roof to anchor coverage for your whole neighborhood.

| Spec | Detail |
|---|---|
| **Chip** | ESP32-S3 (has WiFi) |
| **Transmit Power** | Up to 35 dBm (3.16W — very powerful) |
| **GPS** | Optional add-on |
| **Power** | USB-C (plug it into a wall outlet) |
| **WiFi** | Yes — can share data with the internet |
| **Price** | ~$109 |

Pair it with a [Rokland 5.8 dBi Fiberglass Antenna](https://store.rokland.com/products/meshtastic-compatible-6-dbi-n-female-omni-outdoor-915-mhz-antenna-kit-with-6-10-or-15-cable-choice) (~$40-50) and a waterproof enclosure. Total build: **~$200-250**.

**Best for:** The backbone of your local mesh. If everyone in a neighborhood has one of these on their roof, coverage problems disappear.

!!! warning "Station G2 is frequently out of stock"
    The Station G2 is extremely popular and often sells out. Check [B&Q Consulting's shop](https://shop.uniteng.com/shop-2/) regularly or join their notification list.

:material-cart: [Buy on B&Q Consulting](https://shop.uniteng.com/product/meshtastic-mesh-device-station-edition/)

---

### :material-star::material-star::material-star: Max Power: RAK 1W Booster Setup (~$150-200)

The most powerful option available. This setup pairs the ultra-efficient nRF52840 chip with a 1-watt power booster. The low power draw means a small solar panel can keep it running 24/7, even through cloudy days — no outlet needed.

| Spec | Detail |
|---|---|
| **Chip** | nRF52840 + 1W power booster |
| **Transmit Power** | Up to 30 dBm (1 watt) |
| **GPS** | Optional add-on |
| **Power** | USB or solar — very low power draw |
| **WiFi** | No (nRF52840 chip) |
| **Price** | ~$150-200 for full kit |

Pair with the [RAK Unify Enclosure (waterproof)](https://store.rakwireless.com/products/unify-enclosure-ip67-150-100-45mm) (~$40-50), a solar panel, and a quality antenna for a mount-and-forget deployment.

**Best for:** Remote or solar-only locations. Maximum power with minimum energy draw. Set it up and forget about it.

:material-cart: [Buy RAK WisBlock Starter Kit](https://store.rakwireless.com/products/wisblock-meshtastic-starter-kit) + [1W Booster Module](https://store.rakwireless.com/products/wisblock-1w-booster-module)

---

### :material-check-all: Don't Want to Build? RAK WisMesh Repeater (~$99-299)

If you don't want to assemble anything, the [WisMesh Repeater](https://store.rakwireless.com/products/wismesh-meshtastic-solar-repeater) is a complete, pre-assembled solar repeater in a waterproof enclosure. Just mount it, point the solar panel south, and you're done. No wiring, no enclosure shopping, no setup.

- Comes with 3200 mAh or 5200 mAh battery options
- Pre-loaded with Meshtastic software
- Waterproof (IP67 rated) with built-in solar panel
- Available with or without external antenna connector

---

## :material-antenna: Antenna Guide

Your antenna has the single biggest impact on range — more than the radio itself. Here are the basics.

### Two Types of Antennas

| Type | What It Does | When to Use It |
|---|---|---|
| **Omnidirectional (omni)** | Sends/receives signal in all directions (360 degrees) | Most rooftop nodes — you want to reach everyone around you |
| **Directional (yagi)** | Focuses signal in one direction like a flashlight | Only for connecting two specific distant nodes (like bridging across a valley) |

For most Arizona rooftop nodes, an **omnidirectional fiberglass antenna** is the right choice.

### Recommended Antennas

| Antenna | Type | Est. Price | Link |
|---|---|---|---|
| Rokland 5.8 dBi Fiberglass Omni | All-around rooftop antenna | ~$40 | [Buy](https://store.rokland.com/products/meshtastic-compatible-6-dbi-n-female-omni-outdoor-915-mhz-antenna-kit-with-6-10-or-15-cable-choice) |
| Rokland 8 dBi Low Profile Omni | Longer range rooftop antenna | ~$50 | [Buy](https://store.rokland.com/products/8-dbi-omni-outdoor-915mhz-fiberglass-antenna-for-lora-halow-application) |
| RAK WisMesh Blade | Compact, budget-friendly | ~$15-20 | [Buy](https://store.rakwireless.com/products/wismesh-antenna) |

!!! tip "Keep the cable short"
    The cable between your radio and antenna loses a little bit of signal for every foot of length. Use **quality cable** (LMR-240 or better) and keep the run as short as possible — 10 feet or less is ideal. The Rokland antenna kits include quality cable in 6, 10, 15, or 25 foot lengths.

---

## :material-link-variant: Additional Resources

### Meshtastic Guides

- [Official Meshtastic Supported Hardware List](https://meshtastic.org/docs/hardware/devices/)
- [Meshtastic Getting Started Guide](https://meshtastic.org/docs/getting-started/)
- [Meshtastic Antenna Guide](https://meshtastic.org/docs/hardware/antennas/lora-antenna/)

### Trusted Retailers

When buying Meshtastic hardware, stick to these trusted retailers. They sell genuine products, ship reliably, and stand behind what they sell.

| Retailer | Website | Notes |
|---|---|---|
| **Rokland** | [store.rokland.com](https://store.rokland.com/) | US-based, ships fast, great selection of antennas and radios |
| **RAK Wireless (WisMesh)** | [store.rakwireless.com](https://store.rakwireless.com/collections/meshtastic) | Official RAK hardware — WisMesh Pocket, Repeater, Tag, etc. |
| **B&Q Consulting Group** | [shop.uniteng.com](https://shop.uniteng.com/) | Makes the Station G2 and Nano G2 Ultra — high-quality RF engineering |
| **Atlavox** | [atlavox.com](https://atlavox.com/) | Meshtastic radios, solar repeaters, and accessories |
| **Muziworks** | [muzi.works](https://muzi.works/) | Cases and accessories for Meshtastic hardware, assembled in the USA |

!!! danger "Watch out for fakes on Amazon"
    Counterfeit and knockoff Meshtastic devices are increasingly common on Amazon and other large marketplaces. These fakes may look identical but often have inferior radio components, poor antennas, or missing features that will give you terrible range and reliability. **Buy from the trusted retailers listed above whenever possible.** If you do buy on Amazon, make sure the seller is the official brand (e.g., "LILYGO Official Store" or "RAKwireless") and not a random third-party seller.

---

*Prices are estimates as of early 2026 and may vary. Check retailer links for current pricing.*
