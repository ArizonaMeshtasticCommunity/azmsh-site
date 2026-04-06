# Recommended Settings

To help maintain a healthy and reliable mesh network across Arizona, we suggest the following configuration settings for your Meshtastic devices.

These recommendations are based on real-world use and shared experiences within the Arizona Meshtastic community. They’re designed to promote mesh stability and will likely evolve as our network grows.

---

## 🔧 Radio Settings

### 📱 Device Settings

| Setting | Recommended Value | Details |
|--------:|:------------------|:--------|
| **Role** | `CLIENT` or `CLIENT_MUTE` | For most nodes. See [Deployment Scenarios](https://www.youtube.com/watch?v=htjwtnjQkkE) on YouTube. |
| **NodeInfo broadcast interval** | `43200` seconds (12 hours) | Keeps the mesh updated with node info while cutting down on unnecessary traffic. |

### 📍 Position Settings

| Setting | Recommended Value | Notes |
|--------:|:------------------|:------|
| **Smart position enabled** | `True` | Helps devices determine when they’ve moved. |
| **Position broadcast interval** | `43200` seconds (12 hours) | Recommended baseline for most mobile nodes and allows smart position to make the decision to report. |
| **GPS update interval** | `360` seconds |
| **Position flags** | Disable unused flags | Fixed nodes should turn off most position-related flags. |

### 📶 LoRa Settings

| Setting | Recommended Value | Notes |
|--------:|:------------------|:------|
| **Hop limit** | `5` | This can be modified as you see fit depending on use-case. (i.e needing to reach a further node) |
| **Ignore MQTT** | `True` | Ensures nodes don’t rely on cloud-based data relays. |
| **OK to MQTT** | `True` | (Firmware v2.5.0+) Allows your node to appear on [view.azmsh.net](https://view.azmsh.net). |

---

## ⚙️ Module Settings

### 📊 Telemetry

| Setting | Recommended Value | Notes |
|--------:|:------------------|:------|
| **Device metrics update interval** | `43200` seconds (12 hours) | Good default for most nodes. Consider `86400` seconds (24 hours) for very quiet fixed installations. |
| **Environment metrics update interval** | `43200` to `86400` seconds (12–24 hours) | Recommended for most nodes using environmental sensors. |
| **Environment metrics update interval (solar nodes)** | `7200` to `14400` seconds (2–4 hours) | Solar nodes may benefit from more frequent environmental reporting for monitoring conditions. |
| **Power metrics module** | `False` | Usually not needed unless you are specifically monitoring power or solar-related performance. |

> ℹ️ If you don’t use temperature, air quality, or similar sensors, it’s best to turn off the corresponding modules to reduce bandwidth usage.
>
> ☀️ For solar nodes, environmental telemetry can reasonably be reported more often. A good starting point is every `7200` to `14400` seconds (2–4 hours).

### 🤝 Neighbor Info

| Setting | Recommended Value | Notes |
|--------:|:------------------|:------|
| **Neighbor Info enabled** | `True` | Enables your node to keep track of nearby devices. (Please refrain from setting this to enabled on frequently moving nodes.) |
| **Update interval** | `43200` seconds (12 hours) | Enough for general awareness without creating extra chatter. |
| **Transmit over LoRa** | `True` | Share info with nearby nodes via radio. |

---

## 🛠️ Apply Settings Using Meshtastic CLI

If you haven’t installed the CLI yet, follow the official instructions here:  
🔗 [Meshtastic CLI Installation Guide](https://meshtastic.org/docs/software/python/cli/installation/)

### Device Settings

```
meshtastic \
  --set device.role CLIENT \
  --set device.node_info_broadcast_secs 43200
```

### Position Settings

```
meshtastic \
  --set position.position_broadcast_smart_enabled true \
  --set position.position_broadcast_secs 43200 \
  --set position.gps_update_interval 43200 \
  --pos-fields ALTITUDE ALTITUDE_MSL HEADING SPEED
```

### LoRa Settings

```
meshtastic \
  --set lora.hop_limit 5 \
  --set lora.ignore_mqtt true \
  --set lora.config_ok_to_mqtt true
```

### Telemetry Module

```
meshtastic \
  --set telemetry.device_update_interval 43200 \
  --set telemetry.environment_update_interval 43200 \
  --set telemetry.power_measurement_enabled false \
  --set telemetry.environment_measurement_enabled true \
  --set telemetry.air_quality_enabled false
```

### Neighbor Info Module

```
meshtastic \
  --set neighbor_info.enabled true \
  --set neighbor_info.update_interval 43200 \
  --set neighbor_info.transmit_over_lora true
```

### Example for Solar Nodes

```
meshtastic \
  --set telemetry.environment_measurement_enabled true \
  --set telemetry.environment_update_interval 7200
```