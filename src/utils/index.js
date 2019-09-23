export const flatString = text => text.toLowerCase().replace(/\s/g, "")

export const truncateString = (string, limit) =>
  string.length <= limit ? string : `${string.slice(0, limit)}...`
