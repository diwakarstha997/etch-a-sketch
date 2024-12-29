# Etch A Sketch
> Just a simple project to learn the javascript, that lets you create the grid box and playaround with the colors.

## Features:
 * Has default grid of 16
 * Lets user input valid number of grid starting from 2 to 100, limiting te grid number as browser may crash if number is too much high
 * user can fill the grid boxes with randomly generated colors by hovering over the grid boxes

## Live Demo: https://etch-a-sketch-lemon.vercel.app/

## Issue Faced:
 * prompt input was not converted to number type which took too much time just to figure out, as everything was running normal but grid was not rendering normally as grid number was being concadinated as string while performing + operation
 * removing grid, while using for..in selecting the element was not working instead used forEach to traverse and remove all array from the grid container; 