# DALI Lights

## DALI Protocol

The dali protocol is used for all normal roof lights in Kistan. It is also used
in all classrooms. The DALI protocol specification can be found [here][1].

### Usage

In a DALI network all the lights store their own information. The controller(s)
just broadcast instructions to all or some lamps. Instructions are always
referenced by the command-number found on page 115 in the PDF above.

Lamps can be sent commands either by their address (single light) or groups
(multiple lights). There is also a global group for 'everything' with the group
value `255`.

DALI commands are sent by the
cmd-tool `dalicmd`([https://github.com/Daedaluz/dalicmd][2]) on the IN-2 server
and usually by executing the command in the LMixer interface.

```lua
master:add(0, execute("dalicmd -g 255 -c 16"))
```

The `dalicmd` help is this:

```
dalicmd [-g] [-c] [-s] [-a] [-h] [-r]
--group          -g xx
--address        -a xx
--set            -s xx
--cmd            -c xx
--read           -r xx
--help           -h

```

#### Common commands

| Command-number | Name               |
|----------------|--------------------|
| 0              | Off                |
| 5              | Max                |
| 16 - 31        | Go to scene 0 - 15 |

## DALI Mappings in Kistan

### Addresses

Addresses in DALI are assigned at random and here is a map of all the DALI
lights and their addresses in Kistan.

![dali_map]

### Groups

| Group number | Name                      |
|--------------|---------------------------|
| 0            | Bar                       |
| 1            | Bar (shelves)             |
| 2            | Hanging (sofas)           |
| 3            | Hanging (dance floor)     |
| 4            | Florescence (dance floor) |
| 5            | Hanging (gasque)          |
| 6            | All hanging               |
| 7            | Shit lamps                |

### Scenes

| Scene number | CMD Go to | Name       |
|--------------|-----------|------------|
| 0            | 16        | Pub        |
| 1            | 17        | Cleaning   |
| 2            | 18        | Off        |
| 3            | 19        | Sofas high |
| 4            | 20        | Caps       |

## Examples

#### All off

`dalicmd -g 255 -c 18`

#### Max on dance floor

`dalicmd -g 3 -c 5 && dalicmd -g 4 -c 5`

[1]: /assets/DALI_IEC-60929.pdf

[2]: https://github.com/Daedaluz/dalicmd

[dali_map]: ./images/dali_lamps.svg