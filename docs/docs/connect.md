---
title: How to Connect
---

### Join the Community

Beyond the meshtastic network, we're most active in our [Discord server](https://discord.gg/HrKtyuFEQk).

### How to Connect

#### Get a Meshtastic Radio
- **DIY**: Build your own for around $35. Check the [official supported hardware](https://meshtastic.org/docs/hardware/) page for guidance.
- **Ready-to-go**: Consider the [Seeed Studio SenseCAP Card Tracker](https://meshtastic.org/docs/hardware/devices/seeed-studio/sensecap/card-tracker/), an excellent option for quickly starting with Meshtastic, needing minimal setup.
- **Pre-built**: Battery-powered radios with 3D-printed cases are available for $50-$100 on Etsy or eBay.
- **Outdoor Setup**: A pre-built solar-powered node ($100-$200) is ideal if you can mount it high outdoors, or you can construct your own. ( Constructing one yourself could cost as little as $50.)

#### Set Up the Meshtastic App
- Download the official Meshtastic app for [Android](https://play.google.com/store/apps/details?id=com.geeksville.mesh) or [iOS](https://apps.apple.com/us/app/meshtastic/id1586432531).
- Pair your radio to your smartphone via Bluetooth.
- Open the Meshtastic app and start chatting!

### Best Practices

**Recommended Settings**

- **MQTT**: Disabled or limited use; follow etiquette below

- **Role**: Client (avoid Router) (Router & Client is actually Client in recent versions.)

- **Hop Count**: 3 hops recommended 

- **Broadcast Interval**:
    - Node Info & Device Metrics: Every 4-6 hours
    - Position & Sensor Metrics: Every 1 hour (for mobile nodes; enable Smart Positioning with a minimum interval of 1 minute, minimum distance 100m). For stationary nodes, consider extending this interval to every 12-24 hours.


#### MQTT
MQTT is a useful tool for supplementing mesh connectivity but shouldn't be relied upon as a primary mesh component. Our recommended MQTT etiquette is:

- **Downlinking** from the primary Meshtastic MQTT server is strongly discouraged, especially in the primary channel.
- **Uplinking** to the primary Meshtastic MQTT server is acceptable but not strongly encouraged.
- **Uplinking** to a local MQTT server is helpful for tracking deployed nodes not connected directly to your mesh segment.
- **Downlinking** from a local MQTT server should be avoided in the primary channel; however, it's acceptable for secondary channels.

#### Device Roles
Previously, Meshtastic did not have intelligent routing, causing nodes in 'client/router' mode to potentially create routing inefficiencies. **With Meshtastic 2.6, intelligent routing for direct messages (DMs) has been introduced**, significantly improving targeted message delivery and network efficiency. However, we still recommend primarily using the 'client' role to simplify network traffic and maintain redundancy.

- **Client Mode**: Ideal for most stationary nodes, minimizing unnecessary rebroadcasts. (Maybe your roof node.)
- **Client Mute**: Use for on the move nodes that do not contribute directly to message forwarding, reducing network congestion. (Maybe your mobile node.)

#### Hop Count
Start with a hop count of 3, using only the minimum necessary hops to reach your intended destinations.

- If consistently routing through a dedicated relay node, a hop count of 4 is reasonable.

- At network edges or challenging locations, up to 5-7 hops might be necessary, but ensure optimal node placement before increasing hops.

#### Broadcast Intervals
To minimize channel use and maintain high reliability:

- **Node Information**: Every 4-6 hours

- **Position Information**: Every 1 hour if mobile; 12-24 hours if stationary

- **Telemetry/Sensors**: Device metrics every 4-6 hours; sensor data hourly if mobile, longer intervals if stationary
