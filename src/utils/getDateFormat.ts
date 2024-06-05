const getDateFormat = (date, addedDay?: number = 0) => {
  const formatedDate = new Date(date).toLocaleString();

  const day = Number(formatedDate?.split(',')[0].split('/')[1]) + addedDay;
  const month = formatedDate?.split(',')[0].split('/')[0];
  const year = formatedDate?.split(',')[0].split('/')[2];

  return `${year}-${month?.padStart(2, 0)}-${day
    ?.toString()
    ?.padStart(2, 0)}T${formatedDate?.split(',')[1].slice(1)}`;
};

export {getDateFormat};
