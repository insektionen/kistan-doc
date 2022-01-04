# LMixer examples

## Pub

Dim some lights in the bar to their on-color, run rainbow script and set DALI
lights to "pub" scene.

```lua
master:add(0, dim(kylar, 5000, 80))
master:add(0, dim(hyllor, 5000, 100))
master:add(0, run("rainbow"))
master:add(0, execute("dalicmd -g 255 -c 16"))
```

## Rainbow

Defines some variables locally in the script that can be used later in the code.
Then add cycle-effect to fade each lamp to "red" state. Append more effects
after some spacing to start fading the first lamp to "red+green". Continue this
for all combinations of colors and end with a run of the same script again
creating a looped script.

```lua
local speed = 500
local stretch = 5
local intensity = 255
local nextLamp = speed
local space = nextLamp * stretch
local dimrate = space

master:add(space*0, cycle(all, nextLamp, dim, dimrate, intensity, 0, 0, 0, 0, 0, 255))
master:add(space*1, cycle(all, nextLamp, dim, dimrate, intensity, intensity, 0))
master:add(space*2, cycle(all, nextLamp, dim, dimrate, 0, intensity, 0))
master:add(space*3, cycle(all, nextLamp, dim, dimrate, 0, intensity, intensity))
master:add(space*4, cycle(all, nextLamp, dim, dimrate, 0, 0, intensity))
master:add(space*5, cycle(all, nextLamp, dim, dimrate, intensity, 0, intensity))
master:add(space*6, run("rainbow"))
```

## Stars

Using the roof pixels in Kistan to create a sparkling star night. Stars are 
randomly faded in and out during the script execution. Using a loop to set 
up all effects for a single script run to fade all pixels to different 
intensities. End by running the same script again.

```lua
local dimTime = 2000;
local scriptTime = 25000;

for i=1, #pixels, 1 do
    local intensity = math.random(10, 255)
    local t = math.random(100, scriptTime)
    roof:add(t, dim(pixels[i], 400, intensity, intensity, intensity))
    roof:add(t + 1000, dim(pixels[i], dimTime + math.random(1, 400), 0, 0, 0))
end
    
roof:add(scriptTime, run("artemis_stars"))
```