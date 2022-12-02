# Roof LED

Kistan has a grid of pixels in the roof controlled by a single controller. The
pixels are connected together using wires, and divided to three different power
supply groups. All the power supplies have their common connected to eliminate
some interference.

## Addressing

Each pixel is represented as a fixture in the LMixer and have 3 channels.
Addressing is linear and can be followed like a snake back and forth in the
roof. See the picture below for exact fixture IDs.

![roof_indexing]

## Connection to LMixer

All roof LEDs are controlled by a single controller. It is connected to the same
network as the servers and LMixer is streaming the layer data over the network
using UDP.

[roof_indexing]: ./images/roof_indexing.png "The addressing for roof LEDs"