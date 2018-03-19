# Arcade

Welcome to the arcade section of the website. This is where I write down all of the things that I've been messing about with.

## Navigation

[TOC]

# Sega Naomi

## Summary

I have recently got my hands on a Sega Naomi and 512Mb NetDimm. I aim to get this setup and write a JVS interface for it with an Arduino. Although there are already projects around that do this, I wish to get the LightGun interface working and I cannot find anyone that does this yet.

I aim to use the GunCon guns from the PlayStation 1/2 and reverse engineer how these work for use with my system.

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

## Current Status

Currently I am waiting on my farther to reflow the BGA graphics chip, as I suspect that this may be the problem.

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