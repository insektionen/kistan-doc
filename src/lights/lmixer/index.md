# LMixer

**GitHub:** [https://github.com/Daedaluz/lmixer][1]

## Components

The LMixer software is made up of a couple of different components.

### Layers

A layer is the base for data storage and manipulation. A layer can be combined
with another layer using mathematical operations. An output can be bound to a
layer so that every render of the layer is sent to that output.

### Fixtures

A fixture represent a single light or RGB-list. They can also be organized into
groups. This part of the LMixer defines the names for each fixture and where in
the layer they are located. Fixtures are not bound to a single layer.

### Scrips

Each script is executed when the run command is sent. Script may loop by running
itself again. Script is the main part of the LMixer and is where most code is
written.

[1]: https://github.com/Daedaluz/lmixer