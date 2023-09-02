# LMixer

**GitHub:** [https://github.com/Daedaluz/lmixer][1]

## Components

The LMixer software is made up of a couple of different components.

### Output

An output is used to send layer data using raw UDP socket to other programs.

### Input

An input can be created to bind an incoming UDP stream to layer data.

### Layers

A layer is the base for data storage and manipulation. A layer can be combined
with another layer using mathematical operations. An output can be bound to a
layer so that every render of the layer is sent to that output.

It is also possible to create layers from inputs. This can be used to add remote
sources of color information from other programs.

### Fixtures

A fixture represent a single light or RGB-list. They can also be organized into
groups. This part of the LMixer defines the names for each fixture and where in
the layer they are located. Fixtures are not bound to a single layer.

### Scrips

Each script is a series of instructions that are added to a timeline each time
the run command is used. A script may repeat by running itself again. Make sure
that the repeat time is longer than the script time to not create overlapping.
Scripts are the main part of the LMixer and is where most code is written.

Scripts does not have a "running" state since each script only manipulates the
timeline ahead. However, it is possible to "stop" a script. This tells lmixer to
not apply any "run" commands to it again.

[1]: https://github.com/Daedaluz/lmixer