// Description:
// When working with color values it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color. Implement a function that meets these requirements:

// Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
// Returns a Map<String, int> with the structure {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255
// Note: your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF")

// Example
// "#FF9933" --> {r: 255, g: 153, b: 51}

function hexStringToRGB(hexString) {
    // Validate the input
    if (!/^#([0-9A-Fa-f]{6})$/.test(hexString)) {
        throw new Error("Invalid hex color string");
    }

    // Extract the red, green, and blue components
    const r = parseInt(hexString.slice(1, 3), 16);
    const g = parseInt(hexString.slice(3, 5), 16);
    const b = parseInt(hexString.slice(5, 7), 16);

    // Create an object to store the RGB values
    const rgbObject = {
        r: r,
        g: g,
        b: b
    };

    return rgbObject;
}

function hexStringToRGB(h) {
    return {
      r: parseInt(h.slice(1,3), 16),
      g: parseInt(h.slice(3,5), 16),
      b: parseInt(h.slice(5,7), 16)
    };  
  }


  const hexStringToRGB = str => {
    const [r, g, b] = str.match(/\w{2}/g).map(x => parseInt(x, 16));
    return { r, g, b };
  }