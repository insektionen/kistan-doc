# LMixer scripting

## Layer keywords

### Create layer

A layer hold information for outputting data to a UDP listener. The layer have a
length and can be combined with another layer using different mathematical
operations.

| Name          | Optional | Description                                               |
|---------------|----------|-----------------------------------------------------------|
| Base layer    | No       | Layer to do operation on, `nil` if this is the base layer |
| Operation     | No       | See operations below                                      |
| Size          | No       | How many bytes is this layer                              |
| Default value | Yes      | Default value for all bytes in a layer                    |

Operations:

| Operation | Description                    |
|-----------|--------------------------------|
| `mul`     | Multiply layers together       |
| `add`     | Add this to the other layer    |
| `sub`     | Subtract this from other layer |
| `div`     | Divide the other layer by this |

**Example:** Create a new layer that multiplies master with this. Default value
is 1.

```lua
dimmer = layer(master, mul, 512, 1)
```

### `output`

Output controls what data is sent to each controller. An output can only send
one layer.

| Name     | Optional | Description                      |
|----------|----------|----------------------------------|
| Hostname | No       | Hostname for output of the layer |
| Port     | No       | UDP Port to send data on         |
| Layer    | No       | Layer to send                    |

**Example:** Send the master layer to specified host on port 1234.

```lua
output("192.168.1.10", 1234, master)
```

### `input`

Open a UDP port and bind data messages on that port to an existing layer.

| Name  | Optional | Description           |
|-------|----------|-----------------------|
| Port  | No       | UDP Port to listen on |
| Layer | No       | Where to put the data |

**Example:** Listen on port 1234 and put the data into an existing layer.

```lua
additional_data = layer(nil, add, 512)
input(1234, additional_data)
```

## Fixture keywords

### `fix`

Create a new fixture with specified parameters. Fixtures can also be added
into "groups" by adding them to a table in Lua.

| Name    | Optional | Description                                |
|---------|----------|--------------------------------------------|
| Channel | No       | Start channel for a fixture                |
| Length  | No       | How many channels does the fixture consume |

**Example:** Add a new fixture with address 128 and 4 channels.

```lua
lamp1 = fix(128, 4)
```

Add two fixtures and append them to a group called *lamps*.

```lua
lamp1 = fix(128, 4)
lamp2 = fix(132, 4)
lamps = { lamp1, lamp2 }
```

### `range`

Create several fixtures in a series and add them to a group.

| Name   | Optional | Description                           |
|--------|----------|---------------------------------------|
| Count  | No       | How many fixtures to create           |
| Offset | No       | Spacing between each fixture          |
| Size   | No       | How many bytes does each fixture have |

**Example:** Create 10 fixtures with 3 channels, with an offset of 1.

```lua
pixels = range(10, 1, 3)
```

## Effect keywords

### `<layer>:add`

Add an effect to a layer.

| Name   | Optional | Description                             |
|--------|----------|-----------------------------------------|
| Time   | No       | Time after script start in milliseconds |
| Effect | No       | Function call to execute at time        |

**Example:** Add a new effect on 1 second to set *lamp1* to values.

```lua
master:add(1000, set(lamp1, 255, 255, 0, 0))
```

### `dim`

Fade a fixture from previous values to new values over a period of time.

| Name          | Optional | Description                                              |
|---------------|----------|----------------------------------------------------------|
| Time          | No       | How long the dimming effect is executing in milliseconds |
| Fixture/Group | No       | What to set the values on                                |
| ... Values    | No       | Values to dim to                                         |

**Example:** Dim *lamp1* to specified values for 100ms.

```lua
dim(100, lamp1, 255, 0, 0, 0)
```

### `set`

Set a fixture to the specified values.

| Name          | Optional | Description               |
|---------------|----------|---------------------------|
| Fixture/Group | No       | What to set the values on |
| ... Values    | No       | Values to set             |

**Example:** Set *lamp1* to specified values.

```lua
set(lamp1, 255, 0, 0, 0)
```

### `cycle`

Add an effect for each fixture in a group with a delay between each.

| Name          | Optional | Description                          |
|---------------|----------|--------------------------------------|
| Group         | No       | Group to iterate over                |
| Time          | No       | Time to wait between each fixture    |
| Function name | No       | Function to execute for each fixture |
| ... Values    | No       | Arguments to the function            |

**Example:** Set each fixture in *lamps* to values with a delay of 100ms between
each fixture.

```lua
cycle(lamps, 100, set, 255, 0, 0, 0)
```

### `rev`

Reverse a group of fixtures to use them in backwards order. Is usually used
inline with cycle command to do effects in reverse order.

| Name  | Optional | Description      |
|-------|----------|------------------|
| Group | No       | Group to reverse |

**Example:** Reverse a group of fixtures called *lamps*.

```lua
rev(lamps)
```

### `even`

Get a subset of fixtures in a group based on their index value. Usually used
inline when specifying groups for an effect.

| Name  | Optional | Description                |
|-------|----------|----------------------------|
| Group | No       | Group to get fixtures from |

**Example:** Set all even index lights in *lamps* to values.

```lua
set(even(lamps), 255, 0, 0, 0)
```

### `odd`

Get a subset of fixtures in a group based on their index value. Usually used
inline when specifying groups for an effect.

| Name  | Optional | Description                |
|-------|----------|----------------------------|
| Group | No       | Group to get fixtures from |

**Example:** Set all odd index lights in *lamps* to values.

```lua
set(odd(lamps), 255, 0, 0, 0)
```

### `execute`

| Name    | Optional | Description                                            |
|---------|----------|--------------------------------------------------------|
| Command | No       | Command to execute on the server, must be quoted (`"`) |

**Example:** Run the `dalicmd` command on the server.

```lua
execute("dalicmd -g 255 -c 16")
```

### `run`

Start a script by name. Normally this is used to repeat the current script by
starting it again after some time. Can also be used to split common effects into
separate script and then combining them.

:::note
When running a script from another script and it has been previously stopped,
add the flag `script_name*._stop = false`. Otherwise, it will not be placed on
the timeline.
:::

| Name | Optional | Description                                     |
|------|----------|-------------------------------------------------|
| Name | No       | Name of the script to run, must be quoted (`"`) |

**Example:** Execute the script called "rainbow".

```lua
run("rainbow")
```

:::danger
If not careful one might cause stacking of script if the run command is issued
before the last effect of the previous run. This causes an infinite loop of
scripts starting on top of each other until something crashes.
:::

### `play`

| Name     | Optional | Description                                       |
|----------|----------|---------------------------------------------------|
| Filepath | No       | Play an existing sound file, must be quoted (`"`) |

**Example:** Play a sound file with the path `blotet/dans_mitt.mp3`.

```lua
play("blotet/dans_mitt.mp3")
```

### `stop_play`

Stop playback of all sound files. No parameters.

**Example:** Stop all playback.

```lua
stop_play()
```

