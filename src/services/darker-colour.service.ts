export const darkerColour = (rgba: string, amount = 0.2) => {
  const [r, g, b, a] = rgba
    .replace(/[\srgb()]/g, "")
    .split(",")
    .map(Number);
  const [_r, _g, _b] = [r, g, b].map((x) => Math.round(x * (1 - amount)));
  return a ? `rgba(${_r}, ${_g}, ${_b}, ${a})` : `rgb(${_r}, ${_g}, ${_b})`;
};
