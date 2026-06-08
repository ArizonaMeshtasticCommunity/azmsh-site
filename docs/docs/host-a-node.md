---
hide:
  - navigation
title: Host a Node
---

# :material-home-assistant: Property Owner FAQ. Hosting a Node

Thinking about letting us put a Meshtastic node on your property? Awesome! Here's everything you need to know, in plain English. No tech jargon required.

!!! info "What is Arizona Meshtastic Community?"
    We're a volunteer-run group building a **free, open-source mesh network** across the Phoenix metro and greater Arizona. Our network lets people send text messages without cell service, Wi-Fi, or monthly fees. Using small, low-power radios. Learn more at [azmsh.net](https://azmsh.net).

---

## :material-frequently-asked-questions: Frequently Asked Questions

??? question "What is Meshtastic and what does the node actually do?"
    Meshtastic is a free, open-source project that turns small radios into a **city-wide text messaging network**. Each node acts as a relay. It receives messages from nearby devices and passes them along to the next node, extending the network's reach.

    Think of it like a chain of walkie-talkies that automatically forward messages. The more nodes we have, the farther messages can travel.

    **Why does this matter?**

    - **Emergency preparedness**. When cell towers go down (monsoons, wildfires, grid failures), Meshtastic keeps working
    - **Outdoor recreation**. Hikers, off-roaders, and trail runners can communicate in areas with zero cell coverage
    - **Community resilience**. A communication network that nobody owns and everybody benefits from

??? question "What does the equipment look like?"
    A typical node is a **small weatherproof box**, roughly the size of a deck of cards or a small paperback book. It weighs under 2 pounds. Most setups include:

    - The node itself (a small microcontroller in a weatherproof case)
    - A small antenna (usually 6-12 inches tall)
    - A solar panel (about the size of a tablet) and/or a USB power cable

    From the street, it looks similar to a security camera, weather station, or small satellite antenna. Most people walk right past them without noticing.

    !!! tip "Mounting is non-invasive"
        We use **magnetic mounts, pole clamps, or zip ties**. No drilling into your roof, walls, or structure unless you specifically approve it. The equipment can be removed without leaving any trace.

??? question "Does it use my internet or Wi-Fi?"
    **No.** The node communicates entirely over radio frequencies (the 906.875 MHz unlicensed band). It does not connect to your Wi-Fi, use your internet bandwidth, or access any of your home network.

    There is an optional feature called MQTT that *can* connect to the internet for extended range, but that is never enabled without your knowledge and permission. The default setup is fully radio-only and self-contained.

??? question "Is it safe? What about radiation or EMF?"
    **Completely safe.** Here's the context:

    | Device | Transmit Power |
    |--------|---------------|
    | Cell phone | Up to 2,000 mW |
    | Wi-Fi router | Up to 1,000 mW |
    | **Meshtastic node** | **100-4,500 mW** |
    | Baby monitor | Up to 100 mW |

    Even at maximum power, the node transmits only in **short bursts** (a few seconds at a time), not continuously. It operates in the **902-928 MHz unlicensed band**, which is the same frequency range used by garage door openers and weather stations. All equipment is **FCC-compliant** and legal to operate without a license.

    The antenna is mounted outdoors, away from living spaces, so actual exposure is far less than holding a phone to your ear.

??? question "Will it damage my roof or property?"
    **No.** We design every installation to be completely non-invasive:

    - **Magnetic mounts**. Stick to metal surfaces, lift right off
    - **Pole clamps / J-mounts**. Attach to existing masts, railings, or fascia boards with clamps
    - **Zip ties / Velcro**. For lightweight setups on pipes or pergolas

    We never drill, screw, or permanently modify your property unless you explicitly ask us to. If the node is removed, there is no visible evidence it was ever there.

    !!! warning "Arizona-specific: heat and monsoon considerations"
        Arizona's extreme environment is harsh on outdoor equipment. We use **UV-resistant enclosures**, **heat-rated cables**, and **weatherproof connectors** designed to handle 115F+ summers, intense UV exposure, and monsoon-driven wind and rain. Our experienced installers know how to mount equipment that survives Arizona weather year after year.

??? question "Do I have to pay for anything?"
    **No.** The Arizona Meshtastic Community provides the equipment, installs it, and maintains it. All at no cost to you. The only thing the node uses is a tiny amount of electricity if it's plugged into a USB outlet instead of running on solar.

    **How tiny?** A Meshtastic node draws about **1-2 watts**, roughly the same as a phone charger with nothing plugged in. That's about **$1-2 per year** on your electric bill. Most of our nodes run on solar and cost you nothing at all.

??? question "What about my HOA?"
    Great question. We know HOAs are a big deal in the Phoenix metro. Here's why a Meshtastic node typically flies under the radar:

    - **Size**. Smaller than most security cameras or weather stations
    - **Appearance**. Clean, unobtrusive, and professionally mounted
    - **FCC protection**. Federal law ([OTARD rule](https://www.fcc.gov/media/over-air-reception-devices-rule)) limits HOA restrictions on small antennas, especially those under 1 meter (39 inches)
    - **Precedent**. If your HOA allows Ring cameras, weather stations, or satellite dishes, a Meshtastic node is in the same category

    !!! tip "We can help with HOA conversations"
        If your HOA has questions, we're happy to provide documentation, spec sheets, or even attend a board meeting to explain the setup. We've navigated Arizona HOAs before and can help you find an installation approach that keeps everyone happy.

    That said, we always recommend checking your CC&Rs first. If your HOA has strict antenna rules, we can often find a discreet mounting location (inside an attic, on a back-facing eave, etc.) that avoids any issues.

??? question "What if I want it removed?"
    **No problem at all.** There is no long-term obligation. If you want the node removed for any reason (selling the house, changing your mind, remodeling), just let us know and we'll come pick it up.

    - Removal takes about 15-30 minutes
    - No damage, no holes, no residue
    - The community handles everything

??? question "How far does the signal reach?"
    In Arizona's flat, open terrain, a well-placed rooftop node can reach **5-30+ miles** depending on elevation and antenna height. Even in suburban neighborhoods, 2-10 miles is typical.

    The magic of a mesh network is that each node extends the range. Your node doesn't need to reach the whole city. It just needs to reach the *next* node, and the message hops along from there.

??? question "Will it interfere with my Wi-Fi, TV, or garage door?"
    **No.** Meshtastic operates on **906.875 MHz**, which is a completely different frequency from:

    - Wi-Fi (2.4 GHz / 5 GHz / 6 GHz)
    - Cell phones (700 MHz-2.5 GHz, different bands)
    - TV (VHF/UHF, different bands)
    - Bluetooth (2.4 GHz)

    Interference with home electronics is **extremely unlikely**. The equipment is FCC-compliant and designed to coexist with other devices.

??? question "What about lightning and monsoon storms?"
    Arizona monsoons are no joke, and we take them seriously:

    - **Solar-powered nodes** are electrically isolated from your home's wiring, so a strike to the node won't travel into your house
    - **Proper grounding** is part of every installation where a mast or pole is used
    - A small antenna does **not meaningfully increase** the probability of a lightning strike. It's far shorter than your roof peak, chimney, or any nearby trees

    Our equipment is weatherproof and rated for heavy rain, dust storms, and high winds. We've been through multiple monsoon seasons with our installations.

??? question "How do I sign up to host a node?"
    We'd love to hear from you! The best way to get started:

    1. **Join our Discord**. [Discord.gg/HrKtyuFEQk](https://discord.gg/HrKtyuFEQk)
    2. Introduce yourself in the **#general** channel and mention you're interested in hosting
    3. A volunteer will reach out to discuss your location, line-of-sight, and the best mounting options

    You can also visit [azmsh.net](https://azmsh.net) to learn more about the network and see where existing nodes are located.

---

## :material-map-marker-radius: Why Node Placement Matters in Arizona

Arizona's geography gives us a huge advantage for mesh networking. Wide-open desert, minimal tree cover, and lots of flat rooftops with clear line-of-sight. But it also means **elevation is everything**. A node on a single-story roof in a subdivision can reach dramatically farther than the same node at ground level.

The best host locations are:

- **Two-story homes** with clear sightlines in multiple directions
- **Properties on hills or ridgelines** (even a slight elevation gain helps)
- **Commercial buildings** or churches with tall rooflines
- **Homes near the edges of neighborhoods** where signals can reach across open desert

Even if your location isn't "perfect," every node helps fill gaps in coverage. We can assess your property and let you know what kind of impact a node there would have.

---

!!! success "Ready to host?"
    Join the Arizona Meshtastic Community on **[Discord](https://discord.gg/HrKtyuFEQk)** and let us know you're interested. We'll take it from there!

<small>Adapted from [Austin Mesh's Property Owner FAQ](https://www.austinmesh.org/join/property-owner-faq-hosting-a-node/), licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Modified for Arizona Meshtastic Community.</small>
