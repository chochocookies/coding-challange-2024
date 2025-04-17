// Your task in this Kata is to emulate text justification in monospace font. You will be given a single-lined text and the expected justification width. The longest word will never be greater than this width.

// Here are the rules:

// Use spaces to fill in the gaps between words.
// Each line should contain as many words as possible.
// Use '\n' to separate lines.
// Last line should not terminate in '\n'
// '\n' is not included in the length of a line.
// Gaps between words can't differ by more than one space.
// Lines should end with a word not a space.
// Large gaps go first, then smaller ones ('Lorem--ipsum--dolor--sit-amet,' (2, 2, 2, 1 spaces)).
// Last line should not be justified, use only one space between words.
// Lines with one word do not need gaps ('somelongword\n').
// Example with width=30:

// Lorem  ipsum  dolor  sit amet,
// consectetur  adipiscing  elit.
// Vestibulum    sagittis   dolor
// mauris,  at  elementum  ligula
// tempor  eget.  In quis rhoncus
// nunc,  at  aliquet orci. Fusce
// at   dolor   sit   amet  felis
// suscipit   tristique.   Nam  a
// imperdiet   tellus.  Nulla  eu
// vestibulum    urna.    Vivamus
// tincidunt  suscipit  enim, nec
// ultrices   nisi  volutpat  ac.
// Maecenas   sit   amet  lacinia
// arcu,  non dictum justo. Donec
// sed  quam  vel  risus faucibus
// euismod.  Suspendisse  rhoncus
// rhoncus  felis  at  fermentum.
// Donec lorem magna, ultricies a
// nunc    sit    amet,   blandit
// fringilla  nunc. In vestibulum
// velit    ac    felis   rhoncus
// pellentesque. Mauris at tellus
// enim.  Aliquam eleifend tempus
// dapibus. Pellentesque commodo,
// nisi    sit   amet   hendrerit
// fringilla,   ante  odio  porta
// lacus,   ut   elementum  justo
// nulla et dolor.
// Also you can always take a look at how justification works in your text editor or directly in HTML (css: text-align: justify).

// Have fun :)

function justify(text, width) {
    const words = text.split(' ');
    const result = [];
    let currentLine = [];
    let currentLineLength = 0;

    for (const word of words) {
        // Check if adding the next word would exceed the width
        if (currentLineLength + currentLine.length + word.length > width) {
            // Justify the current line and add it to the result
            result.push(justifyLine(currentLine, currentLineLength, width));
            currentLine = [word]; // Start a new line with the current word
            currentLineLength = word.length;
        } else {
            currentLine.push(word);
            currentLineLength += word.length;
        }
    }

    // Handle the last line: it should not be justified
    if (currentLine.length > 0) {
        result.push(currentLine.join(' '));
    }

    return result.join('\n');
}

function justifyLine(line, lineLength, width) {
    if (line.length === 1) {
        return line[0]; // No justification needed for a single word
    }

    const totalSpaces = width - lineLength; // Total spaces to distribute
    const gaps = line.length - 1; // Number of gaps between words
    const spaceBetweenWords = Math.floor(totalSpaces / gaps); // Minimum spaces between words
    const extraSpaces = totalSpaces % gaps; // Extra spaces to distribute

    let justifiedLine = '';

    for (let i = 0; i < line.length; i++) {
        justifiedLine += line[i]; // Add the word
        if (i < gaps) {
            // Add the minimum spaces
            justifiedLine += ' '.repeat(spaceBetweenWords);
            // Distribute extra spaces one by one
            if (i < extraSpaces) {
                justifiedLine += ' ';
            }
        }
    }

    return justifiedLine.trimEnd(); // Remove any trailing spaces
}

const justify = (text, width) =>
    text.match(new RegExp(`\\S.{0,${width-2}}(?:\\S|$)(?=\\s|$)|^$`, 'g'))
        .map((line, idx, arr, w = width-line.length, l = line.split` `.length-1, i = 0) =>
           line.replace(/\s/g, () => ' ' + ' '.repeat( arr[idx+1] && ~~w/l+(i++<w%l) )))
        .join`\n`;