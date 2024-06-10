const formatDate = date => {
  const day = date.split('-')[1];
  const month = date.split('-')[0];
  const year = date?.split('-')[2];

  return `${year}-${month.padStart(2, 0)}-${day.padStart(2, 0)}`;
};

export {formatDate};
