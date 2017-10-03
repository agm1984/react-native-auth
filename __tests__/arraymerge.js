const one = 'a,b,c'
const two = '1,2,3,4,5'

// split strings by ',' to create arrays
const oneArray = one.split(',')
const twoArray = two.split(',')

// use reduce to accumulate while iterating
const final = oneArray.reduce((all, item, i) => {
    console.log(`CURRENT ${i}:`, '[one: ' + item + ']', '[two: ' + twoArray[i] + ']')

    // take the first element of the two array and put it right after
    // the first element of the one array
    if (item && twoArray[i]) all.push(item, twoArray[i])

    // if there is no elements left in the two array,
    // add the rest of the one array
    if (item && !twoArray[i]) all.push(item)

    // if we are at the last element in the one array,
    // add the rest of the two array to the end 
    if ((i === oneArray.length - 1) && (twoArray.length > oneArray.length)) {
        // this merges in the end of the two array
        return all.concat(twoArray.slice(i + 1))
    }
    return all
}, [])

// return final result
console.log(final)