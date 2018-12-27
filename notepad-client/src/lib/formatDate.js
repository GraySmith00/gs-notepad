import moment from 'moment';

export const formatDate = timeStamp => {
  return moment(timeStamp).format('L');
};
