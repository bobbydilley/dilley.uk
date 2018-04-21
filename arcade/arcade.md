# Arcade

Welcome to the arcade section of the website. This is where I write down all of the things that I've been messing about with.

## Navigation

[TOC]

# Machines I want

There is a long list of machines I want, however I've attempted to note down the ones I __really__ want here.

- Sega Chihiro (So I can play HOTD3 etc.)
- Sega Lindbergh Multiboot (So I can play Lets go Jungle)
- Konami Viper Working! (So I can play Jurassic Park)
- Super System 23 (So I can play Time Crisis 1)
- Namco System 246/256 (As it supports JVS)

# Sega Naomi

## Summary

I have recently got my hands on a Sega Naomi and 512Mb NetDimm. I aim to get this setup and write a JVS interface for it with an Arduino. Although there are already projects around that do this, I wish to get the LightGun interface working and I cannot find anyone that does this yet.

I aim to use the GunCon guns from the PlayStation 1/2 and reverse engineer how these work for use with my system.

## Sega Naomi JVS Python

> 21st April 2017

I have successfully written a JVS I/O emulator in python and have managed to play lots of games on the Naomi with my current setup.

The JVS emulator allows me to pretend to have any I/O plugged in that I like, this allows me to play driving games, shooting games and joystick games with my computer with any controller device I like.

A link to me playing the game Maze Of Kings with a wii remote is here: [Youtube Video Link](https://www.youtube.com/watch?v=T5MW_Vc_1I0&t=18s)

## Future

I have plans of creating a PCB with an ATMEGA16 chip which can emulate any type of JVS I/O device.

On the side of the PCB I'll include screw block type connectors so that controls can be easily wired to the JVS device. I'll also have either some dip switches, or a connection to the computer so you can setup the capabilities of the device, and set things like digital joystick to analogue conversion.

Things that I can do with a custom I/O Board include:

- Simulate analogue controls, so you can use your joystick to play driving games
- Allow you to change which I/O the device is emulating, so that you can play whatever game regardless of what I/O it wants.



# Konami Viper

## Summary

I have currently got a Konami Viper PCB running Thrill Drive 2. Unforunately the PCB doesn't work and so I am going through the process of testing different parts of the system to get it working.

## CF Card

The games for this device are stored on a CF card. Some have reported that the CF card can become corrupt and this may stop the game functioning. To check if the CF is courrupt you can take it out of the card slot 2, by pressing the ejection button, and then remove the CF card from the CF to PCMCIA adapter. You are then able to insert it into a computer for reading and writing.

To test the card I downloaded the data from it by running this command on my linux computer.

```
bobbydilley@linux: $ sudo dd if=/dev/sda1 of=cf_backup.bin
```

I then downloaded the rom online and compared it to by file that I had just dumped from the card.

```
bobbydilley@linux: $ diff cf_backup.bin gamerom.bin
```

In my case the diff command said there where no differences in the file, which allowed me to conclude that the CF card was working fine! To test even further I could dump the CF card, and then insert it into MAME to see if it runs properly.

## Reflow

I managed to get someone to reflow the graphics chip, however unforunately it looks like it has shorted something out in the board. This sometimes happens when you reflow as the solder manages to stick together, or the BGA chip actually moves a few ball grids out.

When powered up the machine simply lights up all the LEDS. I've read online that this means 'hardware fault', however I beleive that the LEDs simply light by default and it means that the processor hasn't actually started or written any of the code to the FPGA chips which probably control the LEDS.

I would also like to note that I haven't actually managed to get the power to 5 volts, and it has been at about 4.84 at most - I'm thinking that this is probably enough to start the board, and I don't have any power supply that can supply more.

## Current Status

Unforunately the board doesn't look like I'll be able to recover it myself, and so I will be selling the package on ebay to get some more money to buy other boards.

Was good fun and learnt alot; still want to be able to play Jurassic Park 3 so might have to snap up and working Konami Viper soon.

# Namco System 245/256

## Introduction

Currently I am working on modifying the PCSX2 emulator to run Namco System 256 games. In this document I will explain the current progress, and note down what I have done for others to continue on.

## Summary of Tasks

- Get the BIOS from the System 245/256 to run on PCSX2 [DONE]
- Attempt to get the memory card drivers working [WORKING ON]
	- Change the emulator so that when files are requested, they are taken from the host for easy modification of files [DONE]
	- Extract all the files from the memory card dump [TODO]
- Get the CD working
- Find out and get past the protection