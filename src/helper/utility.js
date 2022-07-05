/**
 * 返回当前时间
 * @returns yyyy-mm-dd hh:mm:ss
 */
export function getTime() {
  const time = new Date()
  return time.toLocaleString().replace(/\//g, '-')
}

/**
 * 返回与当前时间的距离
 * @returns **m when time < 1h
 *          **h when time < 1d
 *          **d, month when time >= 1d
 */
export function getTimeFromPresent(time) {
  const present = new Date()
  const past = new Date(time)
  const res = present - past
  const m = 60000,
    h = 3600000,
    d = 86000000
  const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  if (res < h) {
    return Math.floor(res / m) + 'm'
  } else if (res < d) {
    return Math.floor(res / h) + 'h'
  } else {
    const month = Months[past.getMonth()]
    return past.getDate() + ' ' + month
  }
}

/**
 * 返回 Joined 时间格式
 * @returns January yyyy
 */
export function getJoinedTimeFormat(time) {
  const joined = new Date(time)
  const Months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'Octobor',
    'November',
    'December'
  ]
  const month = Months[joined.getMonth()]
  return month + ' ' + joined.getFullYear()
}
