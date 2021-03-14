// You should implement your task here.

module.exports = function towelSort(matrix) {
    return matrix === undefined ? [] : matrix.map((x, i) => i % 2 ? x.reverse() : x).flat(Infinity)
}
