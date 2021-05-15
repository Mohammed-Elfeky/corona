const sortCountries = (arr) => {
    return arr.sort(function (a, b) {
        return b.cases - a.cases
    })
}

export default sortCountries;
