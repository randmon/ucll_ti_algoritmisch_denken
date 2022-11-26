/* Boek voorbeeld: {title: "The␣Fellowship␣of␣the␣Ring", author: "J.R.R.␣Tolkien", publicationYear: 1954} */
function titles(books) {
    let result = [];
    books.forEach(x => result.push(x.title));
    return result;
}

function titlesBetween(books, startYear, endYear) {
    let result = [];
    for (const book of books) {
        if (book.publicationYear >= startYear && book.publicationYear <= endYear) result.push(book);
    }
    return titles(result);
}

function bookCountBetween(books, startYear, endYear) {
    return titlesBetween(books, startYear, endYear).length;
}

function yearsActive(books) {
    let years = getYears(books);
    let min = Math.min(...years);
    let max = Math.max(...years);
    return max - min + 1;
}

function getYears(books) {
    let result = [];
    books.forEach(x => result.push(x.publicationYear));
    return result;
}

function bookCountByAuthor(books) {
    //{auteur: aantal, auteur2: aantal2}
    let result = {};
    for (const book of books) {
        if (!(book.author in result)) result[book.author] = 0;
        result[book.author]++;
    }
    return result;
}

function capitalizeTitle(title) {
    let result = [...title];
    let nextWord = true;
    for (let i = 0; i < result.length; ++i) {
        if (nextWord) {
            result[i] = result[i].toUpperCase();
            nextWord = false;
        } else {
            if (result[i] === ' ') {
                nextWord = true;
            } else {
                result[i] = result[i].toLowerCase();
            }
        }
    }
    return result.join('');
}

function makeEmpty2dArray(n) {
    let result = [];
    for (let i = 0; i < n; ++i) {
        result.push([]);
    }
    return result
}

function distribute(xs, n) {
    let result = makeEmpty2dArray(n);
    let current = 0;
    for (let i = 0; i < xs.length; ++i) {
        result[current].push(xs[i]);
        current < n - 1 ? current++ : current = 0;
    }
    return result;
}

function center(pageWidth, lines) {
    //centreren: Math.floor((pageWidth - lines[i].length) / 2)
    let pageHeight = lines.length;
    let result = makeEmpty2dArray(pageHeight);
    for (let i = 0; i < pageHeight; ++i) {
        let letters = lines[i].length;
        let spatiesLeft = Math.floor((pageWidth - letters) / 2)
        let spatiesRight = pageWidth - letters - spatiesLeft;
        while (spatiesLeft > 0) {
            result[i].push(' ');
            --spatiesLeft;
        }
        for (const l of lines[i]) {
            result[i].push(l);
        }
        while (spatiesRight > 0) {
            result[i].push(' ');
            --spatiesRight;
        }
    }
    return result;
}

function mask(string) {
    if (string.length === 0) return '';
    let left = string[0];
    if (left !== ' ') left = '*';
    return left + mask(string.substring(1));
}