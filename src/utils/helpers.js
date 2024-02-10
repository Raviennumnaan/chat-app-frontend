import { format } from 'date-fns';

export const formatDate = function (date) {
  return format(new Date(date), 'MMM dd hh:mm');
};
