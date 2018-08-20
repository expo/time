let _START_TIMES = {};

function start() {
  let key = Symbol('time');
  _START_TIMES[key] = Date.now();
  return key;
}

function end(key, label, opts) {
  let endTime = Date.now();
  label = label || 'time';
  opts = opts || {};
  let startTime = _START_TIMES[key];
  if (!startTime) {
    throw new Error('No recorded start time for key');
  }
  let t = endTime - startTime;
  let threshold = opts.threshold || -1;
  let message = opts.message || '';
  if (t > threshold) {
    console.log(label + ': ' + t + 'ms ' + message);
  }
  delete _START_TIMES[key];
  return t;
}

module.exports = {
  start,
  end,
};
