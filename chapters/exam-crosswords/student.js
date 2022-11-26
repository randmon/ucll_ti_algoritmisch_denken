/*  zwart = *
    leeg = .
    letter = letter
 */

function clear(grid) {
    let listexp = grid.map(x => [...x]);
    for (let r of listexp) {
        for (let i = 0; i < r.length; ++i) {
            if (r[i] !== "*") r[i] = ".";
        }
    }
    return toStringArr(listexp);
}

function createGrid(width, height, blockPositions) {
    let result = new Array(height);
    for (let c = 0; c < height; ++c) {
        result[c] = [];
        for (let r = 0; r < width; ++r) result[c].push(".");
    }
    for (let b of blockPositions) result[b.y][b.x] = "*";
    return toStringArr(result);
}

function toStringArr(arr) {
    return arr.map(x => x.join(''));
}

function acceptsLetter(grid, position) {
    if (checkCoords(position.x, position.y, grid[0].length - 1, grid.length - 1)) {
        if (grid[position.y][position.x] !== "*") return true;
    }
    return false;
}

function checkCoords(x, y, maxX, maxY) {
    return (x >= 0 && y >= 0 && x <= maxX && y <= maxY);
}

function needsIndex(grid, position) {
    if (acceptsLetter(grid, position)) {
        if ((!acceptsLetter(grid, { x: position.x - 1, y: position.y }) &&
                acceptsLetter(grid, { x: position.x + 1, y: position.y })) ||
            (!acceptsLetter(grid, { x: position.x, y: position.y - 1 }) &&
                acceptsLetter(grid, { x: position.x, y: position.y + 1 }))) return true;
    }
    return false;
}

function indexPosition(grid, index) {
    let i = 0;
    const height = grid.length;
    const width = grid[0].length;
    for (let r = 0; r < height; ++r) {
        for (let c = 0; c < width; ++c) {
            if (needsIndex(grid, { x: c, y: r })) {
                i++;
                if (i === index) return { x: c, y: r };
            }
        }
    }
    return "invalid";
}

function countHSpace(row, position) {
    const arr = [...row];
    let count = 0;
    for (let i = position; i < arr.length; ++i) {
        if (arr[i] !== "*") count++;
        else { break; }
    }
    return count;
}

function fits1(grid, position, word) {
    if (acceptsLetter(grid, position)) {
        return countHSpace(grid[position.y], position.x) === word.length;
    }
    return false;
}

function fits2(grid, position, horizontal, word) {
    if (horizontal) {
        if (!acceptsLetter(grid, { x: position.x - 1, y: position.y })) { //kijken of links geen wit vakje is
            return fits1(grid, position, word)
        }
        return false;
    } else {
        return fits2(getKolomAlsRij(grid, position.x), { x: position.y, y: 0 }, true, word);
    }
}

function getKolomAlsRij(bss, x) {
    let result = [];
    bss = bss.map(x => [...x]);
    for (let i = 0; i < bss.length; ++i) {
        result.push(bss[i][x]);
    }
    return [result.join('')];
}

function fits3(grid, position, horizontal, word) {
    if (horizontal) {
        if (!acceptsLetter(grid, { x: position.x - 1, y: position.y })) { //kijken of links geen wit vakje is
            if (acceptsLetter(grid, position)) {
                return compareHSpace(grid[position.y], position.x, word);
            }
            return false;
        }
        return false;
    } else {
        return fits3(getKolomAlsRij(grid, position.x), { x: position.y, y: 0 }, true, word);
    }
}

function compareHSpace(row, position, word) {
    let count = 0;
    for (let i = position; i < row.length; ++i) {
        if (row[i] !== "*") count++;
        else { break; }
        if (row[i] !== word[i - position] && row[i] !== ".") return false;
    }
    return count === word.length;
}

function fits4(grid, position, horizontal, word) {
    if (horizontal) {
        if (!acceptsLetter(grid, { x: position.x - 1, y: position.y })) { //kijken of links geen wit vakje is
            if (acceptsLetter(grid, position)) {
                return compareHSNoCases(grid[position.y], position.x, word);
            }
            return false;
        }
        return false;
    } else {
        return fits4(getKolomAlsRij(grid, position.x), { x: position.y, y: 0 }, true, word);
    }
}

function compareHSNoCases(row, position, word) {
    let count = 0;
    for (let i = position; i < row.length; ++i) {
        if (row[i] !== "*") count++;
        else break;
        let rl = row[i];
        let wl = word[i - position];
        if (wl === undefined) break;
        if (rl.toUpperCase() !== wl.toUpperCase() && rl !== ".") return false;
    }
    return count === word.length;
}

function eraseAt(string, indices) {
    if (indices.length === 0) return string;
    let current = indices[0];
    let left = string.substring(0, current);
    let replacement = ".";
    let right = string.substring(current + 1);
    return eraseAt(`${left}${replacement}${right}`, indices.slice(1));
}