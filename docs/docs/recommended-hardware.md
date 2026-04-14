---
title: Recommended Hardware
---

# :material-radio-handheld: Recommended Hardware

Looking to join Arizona's Meshtastic mesh network? This guide covers the best hardware for **personal handheld devices** and **permanent rooftop/base station nodes** for our statewide mesh infrastructure.

!!! tip "New to Meshtastic? Start here"
    Meshtastic turns inexpensive LoRa radios into a long-range, off-grid text messaging network — no cell service, no internet, no monthly fees. Your phone connects to a small radio via Bluetooth, and messages hop across the mesh from node to node.

    1. **Buy a radio** from the options below
    2. **Download the app** — [Android](https://play.google.com/store/apps/details?id=com.geeksville.mesh) or [iOS](https://apps.apple.com/us/app/meshtastic/id1586432531)
    3. **Pair via Bluetooth** and start chatting
    4. **Join our [Discord](https://discord.gg/HrKtyuFEQk)** for help and to connect with the Arizona community

    Check the [official Meshtastic getting started guide](https://meshtastic.org/docs/getting-started/) for detailed setup instructions.

---

## :material-chip: Quick Reference: ESP32 vs nRF52840

Before picking a device, understand the two main chip platforms:

| | **nRF52840** | **ESP32 / ESP32-S3** |
|---|---|---|
| **Battery life** | :material-battery-high: Excellent (days to weeks) | :material-battery-medium: Moderate (1-2 days) |
| **WiFi** | :material-close: No | :material-check: Yes |
| **Bluetooth** | :material-check: BLE 5.0 | :material-check: BLE |
| **Best for** | Handhelds, solar nodes | Wall-powered base stations, WiFi gateways |
| **Power draw** | ~10-30 mA | ~80-180 mA |

!!! info "The trend in 2025-2026"
    The Meshtastic community is shifting toward **nRF52840-based devices** for most use cases. They use dramatically less power, making them ideal for both pocket carry and solar-powered rooftop nodes. Choose ESP32 only if you specifically need WiFi connectivity.

---

## :material-cellphone: Handheld Devices (Personal Carry)

These are the radios you carry on your person to send and receive messages on the mesh.

!!! warning "Indoor range is limited"
    Handheld devices with small antennas have significantly reduced range indoors. In Arizona's urban/suburban areas, you will likely need a **rooftop repeater node nearby** (within 1-3 miles line-of-sight) to reliably connect from inside a building. The handhelds shine outdoors and in vehicles — if you're mostly indoors, pair your handheld with a rooftop node at your home.

### Comparison Table

| Device | Chip | Radio | GPS | Screen | Battery | Est. Price | Best For |
|---|---|---|---|---|---|---|---|
| **Wio Tracker L1** | nRF52840 | SX1262 | :material-check: | 0.96" OLED | 800 mAh | ~$30 | :material-star: Budget pick |
| **Heltec T114 V2** | nRF52840 | SX1262 | :material-check: Optional | 1.14" TFT | External | ~$30-40 | Budget w/ color screen |
| **LILYGO T-Echo** | nRF52840 | SX1262 | :material-check: | 1.54" E-Ink | 850 mAh | ~$45-50 | Mid-range, great battery |
| **RAK WisMesh Pocket V2** | nRF52840 | SX1262 | :material-check: | 1.3" OLED | 2000 mAh | ~$95-99 | :material-trophy: Best overall |
| **Nano G2 Ultra** | nRF52840 | SX1262 | :material-check: | 0.96" OLED | 1100 mAh | ~$70-90 | Best RF performance (handheld) |
| **Heltec LoRa32 V4** | ESP32-S3 | SX1262 | :material-close: | 0.96" OLED | External | ~$25-30 | Cheapest entry point (no GPS) |

---

### :material-star-outline: Budget Pick: Seeed Wio Tracker L1 (~$30)

The Wio Tracker L1 is the best value in Meshtastic right now. For around $30 you get a complete nRF52840-based node with GPS, OLED screen, and LoRa — ready to go out of the box.

- **Chip:** nRF52840 (ultra low power)
- **Radio:** SX1262 (862-930 MHz)
- **GPS:** L76K multi-constellation
- **Screen:** 0.96" OLED
- **Battery:** 800 mAh (rechargeable, multi-day life)
- **Extras:** Buzzer, compact form factor

The **Wio Tracker L1 Pro** (~$43) adds a larger 1.3" OLED display with joystick navigation, solar charging input, and a 2000 mAh battery — a significant upgrade for just $13 more.

:material-cart: **Where to buy:**

- [Seeed Studio (L1 — $29.90)](https://www.seeedstudio.com/Wio-Tracker-L1-p-6453.html)
- [Seeed Studio (L1 Pro — $42.90)](https://www.seeedstudio.com/Wio-Tracker-L1-Pro-p-6454.html)
- [Amazon (L1 Pro)](https://www.amazon.com/seeed-studio-L1-Pro-Tracker/dp/B0FNCS5ST1)

---

### :material-star-half-full: Mid-Range Pick: LILYGO T-Echo (~$45-50)

A proven favorite in the Meshtastic community. The e-ink display is readable in direct Arizona sunlight and barely sips power.

- **Chip:** nRF52840
- **Radio:** SX1262
- **GPS:** :material-check: Built-in
- **Screen:** 1.54" E-Ink (sunlight readable, always-on)
- **Battery:** 850 mAh (multi-day battery life)
- **Extras:** NFC, compact BME280 sensor option

:material-cart: **Where to buy:**

- [LILYGO Official Store (~$45-49)](https://lilygo.cc/products/t-echo-meshtastic)
- [Rokland (~$50)](https://store.rokland.com/products/lilygo-ttgo-meshtastic-t-echo-white-lora-sx1262-wireless-module-915mhz-nrf52840-gps-for-arduino)
- [Amazon](https://www.amazon.com/LILYGO-Wireless-Meshtastic-Development-NRF52840/dp/B0B659536P)

---

### :material-trophy: Best Overall Pick: RAK WisMesh Pocket V2 (~$99)

The gold standard for a grab-and-go Meshtastic handheld. Comes pre-flashed, has excellent battery life, a quality enclosure, and just works.

- **Chip:** nRF52840
- **Radio:** SX1262
- **GPS:** :material-check: Built-in
- **Screen:** 1.3" OLED with button navigation
- **Battery:** 2000 mAh (multi-day battery life)
- **Extras:** Pre-flashed with Meshtastic, quality injection-molded case, available in multiple colors

:material-cart: **Where to buy:**

- [RAK Wireless Store (~$99)](https://store.rakwireless.com/products/wismesh-pocket)
- [Rokland (~$99)](https://store.rokland.com/products/wismesh-pocket)
- [Amazon](https://www.amazon.com/s?k=WisMesh+Pocket+V2)

---

### :material-signal-variant: Honorable Mention: B&Q Nano G2 Ultra (~$70-90)

If you care about raw RF performance in a portable package, the Nano G2 Ultra has a custom wideband internal antenna engineered to compensate for body-proximity effects, plus a high-precision TCXO for reliable narrow-bandwidth operation.

- **Chip:** nRF52840
- **Radio:** SX1262 with wideband antenna (815-940 MHz)
- **GPS:** :material-check: Built-in
- **Screen:** 0.96" OLED
- **Battery:** 1100 mAh (~5 days battery life)
- **Extras:** TCXO crystal, optimized antenna design

:material-cart: **Where to buy:**

- [B&Q Consulting Shop (~$85)](https://shop.uniteng.com/product/meshtastic-mesh-device-nano-g2-ultra/)
- [Rokland](https://store.rokland.com/products/meshtastic-mesh-device-nano-g2-ultra-low-power-wideband-lora-for-outdoor-adventures)
- [Tindie](https://www.tindie.com/products/neilhao/meshtastic-mesh-device-nano-g2-ultra/)

---

## :material-home-roof: Rooftop / Base Station Nodes

!!! warning "You NEED a rooftop or attic node"
    **If you're having trouble connecting or can't hear other nodes, this is why.** A handheld alone will struggle indoors and at range. The single best thing you can do for your mesh experience is put a powerful node on your roof or in your attic. Every rooftop node dramatically improves coverage for everyone nearby — including yourself.

These are permanent nodes mounted high on your roof, attic, fence, or mast. They are the backbone of Arizona's mesh network. We recommend **one of three devices** for this role:

!!! tip "Height is everything"
    In Meshtastic, **antenna height matters more than antenna gain**. A modest 3 dBi antenna mounted at 30 feet will almost always outperform a high-gain 9 dBi antenna at 6 feet. Get your node as high as possible — roof peaks, chimney mounts, or antenna masts.

!!! info "Arizona climate considerations"
    Our desert climate means extreme heat (115F+), intense UV, and monsoon storms. Choose **IP67-rated enclosures**, UV-resistant materials, and ensure adequate ventilation or shade for electronics. Solar panels perform exceptionally well here year-round.

### The Three Recommended Rooftop Devices

---

### :material-star: Budget Pick: Heltec LoRa32 V4 (~$25-30)

The cheapest way to get a rooftop node running. ESP32-S3 based with built-in OLED screen and WiFi for MQTT gateway functionality.

| Spec | Detail |
|---|---|
| **Chip** | ESP32-S3 + SX1262 |
| **TX Power** | Up to 22 dBm |
| **GPS** | No (not needed for a fixed rooftop node) |
| **Power** | USB-C (wall power recommended) |
| **WiFi** | Yes — can serve as MQTT gateway |
| **Price** | ~$25-30 |

Put it in a weatherproof junction box (IP65+, ~$10 from Home Depot), add a [3 dBi 915 MHz antenna](https://store.rokland.com/collections/all-helium-antennnas) (~$15), and run a USB cable from inside. Total build: **~$50-55**.

**Best for:** Getting a rooftop node up fast and cheap. Great starter infrastructure node.

:material-cart: [Buy on Heltec Store](https://heltec.org/project/wifi-lora-32-v4/)

---

### :material-star::material-star: Mid-Range Pick: Station G2 (~$109)

The community favorite for serious infrastructure. 35 dBm TX power (3.16W) and an ultra-low noise LNA that improves receive sensitivity by ~4 dB over typical devices. This is the node you deploy to anchor a large coverage area.

| Spec | Detail |
|---|---|
| **Chip** | ESP32-S3 + SX1262 + 35 dBm PA + LNA |
| **TX Power** | Up to 35 dBm (3.16W at P1dB) |
| **GPS** | Optional add-on |
| **Power** | USB-C (wall power — ESP32-S3 draws more power) |
| **WiFi** | Yes — can serve as MQTT gateway |
| **Price** | ~$109 |

Pair it with a [Rokland 5.8 dBi Fiberglass Omni](https://store.rokland.com/products/meshtastic-compatible-6-dbi-n-female-omni-outdoor-915-mhz-antenna-kit-with-6-10-or-15-cable-choice) (~$40-50) and a weatherproof enclosure. Total build: **~$200-250**.

**Best for:** The backbone of your local mesh. If everyone in a neighborhood has one of these on their roof, coverage problems disappear.

!!! warning "Station G2 is frequently out of stock"
    The Station G2 is extremely popular and often sells out. Check [B&Q Consulting's shop](https://shop.uniteng.com/shop-2/) regularly or join their notification list.

:material-cart: [Buy on B&Q Consulting](https://shop.uniteng.com/product/meshtastic-mesh-device-station-edition/)

---

### :material-star::material-star::material-star: Max Power: RAK 1W Booster Setup (~$150-200)

The most powerful option available. The RAK 1W (30 dBm) PA+LNA booster module paired with a WisBlock base gives you serious reach while keeping the efficient nRF52840 platform for excellent battery life with solar.

| Spec | Detail |
|---|---|
| **Chip** | nRF52840 (RAK4631) + RAK 1W PA+LNA booster |
| **TX Power** | Up to 30 dBm (1W) |
| **GPS** | Optional (RAK1910 module) |
| **Power** | USB or solar — nRF52840 is ultra low power |
| **WiFi** | No (nRF52840 platform) |
| **Price** | ~$150-200 for full kit |

This is the setup for a truly self-sustaining solar rooftop node. The nRF52840 draws so little power that a small solar panel keeps it running 24/7 even through cloudy days. Pair with the [RAK Unify Enclosure IP67](https://store.rakwireless.com/products/unify-enclosure-ip67-150-100-45mm) (~$40-50), a solar panel, and a quality antenna for a mount-and-forget deployment.

**Best for:** Remote or solar-only locations. Maximum power with minimum energy draw. Serious infrastructure operators.

:material-cart: [Buy RAK WisBlock Starter Kit](https://store.rakwireless.com/products/wisblock-meshtastic-starter-kit) + [1W Booster Module](https://store.rakwireless.com/products/wisblock-1w-booster-module)

---

### :material-check-all: Don't Want to Build? RAK WisMesh Repeater (~$99-299)

The [WisMesh Repeater](https://store.rakwireless.com/products/wismesh-meshtastic-solar-repeater) is a complete, pre-assembled solar repeater in an IP67 enclosure. Just mount it, point the solar panel south, and you're done.

- Variants with 3200 mAh or 5200 mAh battery
- Pre-flashed Meshtastic firmware
- IP67 rated enclosure with integrated solar
- Available with or without external antenna connector

---

## :material-antenna: Antenna Guide

Your antenna choice has the single biggest impact on range. Here are the key principles:

### Omnidirectional vs Directional

| Type | Best For | Coverage |
|---|---|---|
| **Omni (vertical)** | General rooftop nodes, serving all directions | 360-degree coverage |
| **Directional (Yagi)** | Point-to-point links between distant nodes | Narrow beam, maximum range |

For most Arizona rooftop nodes, an **omnidirectional fiberglass antenna** is the right choice. Use directional antennas only for specific long-distance links (e.g., bridging across a valley or connecting distant neighborhoods).

### Recommended Antennas

| Antenna | Gain | Type | Est. Price | Link |
|---|---|---|---|---|
| Rokland 5.8 dBi Fiberglass Omni | 5.8 dBi | Omni, N-Female | ~$40 | [Buy](https://store.rokland.com/products/meshtastic-compatible-6-dbi-n-female-omni-outdoor-915-mhz-antenna-kit-with-6-10-or-15-cable-choice) |
| Rokland 8 dBi Low Profile Omni | 8 dBi | Omni, N-Female | ~$50 | [Buy](https://store.rokland.com/products/8-dbi-omni-outdoor-915mhz-fiberglass-antenna-for-lora-halow-application) |
| RAK WisMesh Blade | 3-5 dBi | Omni, compact | ~$15-20 | [Buy](https://store.rakwireless.com/products/wismesh-antenna) |

!!! tip "Cable matters"
    Use **low-loss coaxial cable** (LMR-240 or better) between your radio and antenna. Every foot of cheap coax eats into your signal. Keep cable runs as short as possible — 10 feet or less is ideal. The Rokland antenna kits include quality cable in 6, 10, 15, or 25 foot lengths.

---

## :material-frequently-asked-questions: FAQ

**Q: What frequency do I need for Arizona?**
:material-arrow-right: **US 915 MHz.** All devices sold for the US market operate on 906-928 MHz (US915 band). Make sure you buy the 915 MHz variant, not the EU868 version.

**Q: Do I need a license to use Meshtastic?**
:material-arrow-right: **No.** Meshtastic operates on license-free ISM bands (915 MHz in the US). No ham radio license required.

**Q: Can I use my handheld indoors?**
:material-arrow-right: It depends on how close the nearest mesh node is. Walls, especially stucco with wire lath (common in Arizona construction), significantly reduce signal. A rooftop node at your home is the best way to ensure reliable indoor coverage.

**Q: How far can these devices reach?**
:material-arrow-right: Line-of-sight: 5-15+ miles with a good antenna. Urban/suburban: 1-5 miles typical. Arizona's flat terrain and open desert are actually great for LoRa propagation. The community has documented links exceeding 100 miles with high-mounted antennas.

**Q: Should I set my device as a Router?**
:material-arrow-right: For most users, **Client** role is recommended. See our [Recommended Configuration Settings](/docs/recommended_configuration_settings.html) page for details on roles, hop counts, and broadcast intervals.

---

## :material-link-variant: Additional Resources

- [Official Meshtastic Supported Hardware List](https://meshtastic.org/docs/hardware/devices/)
- [Meshtastic Getting Started Guide](https://meshtastic.org/docs/getting-started/)
- [Meshtastic Antenna Guide](https://meshtastic.org/docs/hardware/antennas/lora-antenna/)
- [Arizona Meshtastic Discord](https://discord.gg/HrKtyuFEQk) — Ask the community for help picking hardware
- [Rokland (US Retailer)](https://store.rokland.com/) — Ships from the US, no import fees
- [RAK Wireless Store](https://store.rakwireless.com/collections/meshtastic) — Official RAK hardware

---

*Prices are estimates as of early 2026 and may vary. Check retailer links for current pricing. Have a hardware recommendation or correction? Let us know in the [Discord](https://discord.gg/HrKtyuFEQk).*
