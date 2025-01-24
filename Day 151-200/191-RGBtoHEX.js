// Description:
// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

function rgb(r, g, b) {
        const clamp = (value) => Math.max(0, Math.min(255, value));
    
        const toHex = (value) => {
            const hex = clamp(value).toString(16).toUpperCase();
            return hex.padStart(2, '0');
        };
    
        return toHex(r) + toHex(g) + toHex(b);
}

const rgb = (...arg) => arg
  .map(it => Math.max(Math.min(it, 255), 0)
    .toString(16)
    .padStart(2, '0')
    .toUpperCase()
   ).join('');

   function rgb(r, g, b) {
	r = Math.max(0, Math.min(255, r));
	g = Math.max(0, Math.min(255, g));
	b = Math.max(0, Math.min(255, b));

	let color = (r << 16) + (g << 8) + b;

	return ('00000' + color.toString(16).toUpperCase()).slice(-6);
}