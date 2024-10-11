function getOffsetIndex(index: number, rowLength: number) {
    const row = Math.floor(index / rowLength);
    const col = index % rowLength;
    return ((col + row) % rowLength) + (row * rowLength);
}
export {
    getOffsetIndex
}