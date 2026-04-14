---
hide:
  - navigation
title: How to Connect
---

# How to Connect

Welcome to the Arizona Meshtastic Community! This guide will walk you through getting your first device set up and connected to our local mesh network.

!!! info "Before you start"
    **You will need a Meshtastic radio.** If you don't have one yet, check our [Recommended Hardware](/docs/recommended-hardware.html) page — you can get started for as little as $30. No monthly fees, no subscriptions, no cell service required. Meshtastic runs on unlicensed 915 MHz radio frequencies, so it is completely free and legal to use in the United States.

---

## Step 1: Update Your Firmware

Before anything else, make sure your device is running the latest Meshtastic firmware.

1. Open [**Meshtastic Web Flasher**](https://flasher.meshtastic.org) in **Google Chrome** (other browsers may not work).
2. Select your device from the list.
3. Click **Flash** and follow the on-screen instructions.

!!! tip "DFU Mode"
    Some devices need to be put into DFU (Device Firmware Update) mode before flashing. Check your device's documentation for how to enter DFU mode -- it usually involves holding a button while powering on.

!!! warning "Back Up Your Settings First"
    Firmware updates can wipe your device settings, including your **private key**. Before updating, go to your Meshtastic app and export/back up your configuration. Your private key is what identifies your node on the network -- if you lose it, you will appear as a new node.

---

## Step 2: Download the App

Install the official Meshtastic app on your phone:

| Platform | Link |
|:---------|:-----|
| **Android** | [Google Play Store](https://play.google.com/store/apps/details?id=com.geeksville.mesh) |
| **iOS** | [Apple App Store](https://apps.apple.com/us/app/meshtastic/id1586432531) |

---

## Step 3: Pair via Bluetooth

1. Turn on your Meshtastic device.
2. Open the Meshtastic app on your phone.
3. Tap the **+** button to add a new device.
4. Your device should appear in the list -- tap it to pair.
5. If prompted for a pairing code, the default is usually printed on your device or in its documentation.

That is it -- you should now see your node in the app!

---

## Step 4: Join the Discord for Arizona Settings

To connect to our local Arizona mesh network, you will need the community-specific **preset** and **frequency settings**. We share these in our Discord server to keep the network coordinated.

[:fontawesome-brands-discord: Join the Arizona Meshtastic Discord](https://discord.gg/HrKtyuFEQk){ .md-button .md-button--primary }

Once you are in the server, head to the setup channel and you will find everything you need to get on the Arizona mesh.

---

## Step 5: Start Chatting

Once your settings are configured:

1. Open the Meshtastic app.
2. Go to the **Messages** tab.
3. Send a message on the primary channel -- say hello!

!!! info "Be Patient"
    Meshtastic is a long-range, low-bandwidth radio network. Messages can take a few seconds (or longer) to propagate across the mesh. This is normal.

---

## Quick Tips

- **Keep your firmware updated** -- new versions improve performance and compatibility.
- **Export your node configuration** before any firmware update so you do not lose your identity on the mesh.
- **Start with the Client Mute role** if you are not sure what to pick -- it is the safest default for mobile devices.
- **Check the [Recommended Settings](/docs/recommended-settings.html) page** for detailed configuration guidance (broadcast intervals, MQTT, and more).
- **Upgrade your antenna** -- the single biggest improvement you can make. See the [Recommended Hardware](/docs/recommended-hardware.html) page for our antenna picks.
- **Ask questions in Discord** -- the community is friendly and happy to help new members get started.

!!! tip "How far does Meshtastic reach?"
    Range depends on terrain and antenna height. In flat desert terrain, handheld-to-handheld range is typically 1-3 miles. With a rooftop node and a good antenna, you can reach 10-30+ miles. The mesh network extends range further by relaying messages through other nodes.
