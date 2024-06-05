import moment from 'moment'

export const formatDate = (dateStr: string) => {
  if (dateStr) {
    const date = new Date(dateStr)
    return moment(date).format('HH:mm:ss DD/MM/YYYY')
  }
  return dateStr
}
