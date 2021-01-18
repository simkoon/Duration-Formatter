const formatDuration = (() => {
  const ONE_YEAR = 365 * 24 * 60 * 60;
  const ONE_DAY = 24 * 60 * 60;
  const ONE_HOUR = 60 * 60;
  const ONE_MINUTE = 60;
  return (timeSeconds) => {
    const timeArray = [
      { type: 'year', second: ONE_YEAR },
      { type: 'day', second: ONE_DAY },
      { type: 'hour', second: ONE_HOUR },
      { type: 'minute', second: ONE_MINUTE },
      { type: 'second', second: 1 },
    ];

    const result = timeArray
      .map(({ type, second }) => {
        const stamp = timeSeconds;
        timeSeconds = stamp % second;
        return { type, cnt: Math.floor(stamp / second) };
      })
      .filter(({ cnt }) => !!cnt)
      .map(({ type, cnt }) => (cnt > 1 ? `${cnt} ${type}s` : `${cnt} ${type}`));

    console.log(result);
    if (result.length <= 1) {
      return result.join(' and ');
    } else {
      return (
        result.slice(0, result.length - 1).join(', ') +
        ' and ' +
        result[result.length - 1]
      );
    }
  };
})();
console.log(formatDuration(365 * 24 * 60 * 60 * 2 + 60 * 3 + 60 * 60 * 24 * 1));
