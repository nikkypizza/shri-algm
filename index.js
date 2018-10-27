const buildMatrix = (inputNumber) => {
    let circularCounter = 1;
    let matrixSideLength = inputNumber;

    // Строим шаблон матрицы
    const matrixMap = [];
    for (let i = 0; i <= inputNumber - 1; i++) {
        matrixMap.push([]);
    };

    // Заполняем каждую сторону
    for (let i = 0; i < inputNumber; i++) {
        // Верх
        for (j = 0; j < matrixSideLength; j++) {
            matrixMap[i][i + j] = circularCounter++;
        }
        // Правая сторона
        for (j = 1; j < matrixSideLength; j++) {
            matrixMap[i + j][inputNumber - 1 - i] = circularCounter++;
        }
        // Нижняя сторона
        for (j = matrixSideLength - 2; j > -1; j--) {
            matrixMap[inputNumber - 1 - i][i + j] = circularCounter++;
        }
        // Левая сторона
        for (j = matrixSideLength - 2; j > 0; j--) {
            matrixMap[i + j][i] = circularCounter++;
        }

        matrixSideLength -= 2;
    };
    return matrixMap;
};

console.table(buildMatrix(2));

/*
1

1 2
4 3

1 2 3
8 9 4
7 6 5

1  2  3  4
12 13 14 5
11 16 15 6
10 9  8  7
*/
