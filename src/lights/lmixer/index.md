# LMixer

**GitHub:** [https://github.com/Daedaluz/lmixer][1]

## Components

The LMixer software is made up of a couple of different components.

### Layers

A layer is the base for data storage and manipulation. A layer can be combined
with another layer using mathematical operations. An output can be bound to a
layer so that every render of the layer is sent to that output. Data is sent
using UDP data packages.

It is also possible to create layers from inputs. An input layer listens for UDP
packages and adds them to the selected
layer. Creating possibilities to add remote sources of color information.

### Fixtures

A fixture represent a single light or RGB-list. They can also be organized into
groups. This part of the LMixer defines the names for each fixture and where in
the layer they are located. Fixtures are not bound to a single layer.

### Scrips

Each script is a series of instructions that are added to a timeline each time
the run command is used. A script may
repeat by running itself again. Script is the main part of the LMixer and is
where most code is
written.

[1]: https://github.com/Daedaluz/lmixer