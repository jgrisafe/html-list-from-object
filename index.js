module.exports.buildList = (obj, key) => {
  if (obj === null || obj === undefined) {
    return (`<li>${key}: ${obj}</li>`)
  } else if (key !== undefined && typeof obj !== 'object') {
    return (`<li>${key}: ${obj}</li>`)
  } else if (key !== undefined && typeof obj === 'object') {
    return (`<li><h4>${key}</h4>${buildList(obj)}</li>`)
  } else {
    return (
    `<ul>${Object.keys(obj).reduce((prev, current) => {
        return prev + buildList(obj[current], current)
      }, '')}</ul>`
  )}
}