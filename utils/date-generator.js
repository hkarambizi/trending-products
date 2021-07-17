// To-Do: publish as npm package. See: https://replit.com/@hkarambizi/DateGenerator
// Utility to create date strings by passing in parameters
class DateGenerator {
  constructor({ past = null, random = null, years = 0, days = 0, hours = 0, mins = 0, start = new Date() }) {
    this.past = past;
    this.random = random;
    this.years = years;
    this.days = days;
    this.hours = hours;
    this.mins = mins;
    this.now = start;
  }
  _minsMS(n) {
    return 1000 * 60 * n;
  }
  _hoursMS(n) {
    return this._minsMS(60) * n;
  }
  _daysMS(n) {
    return this._hoursMS(24) * n;
  }
  _yearsMS(n) {
    return this._daysMS(365) * n;
  }
  _timeOffsetMilliseconds() {
    return this._minsMS(this.mins) + this._hoursMS(this.hours) + this._daysMS(this.days) + this._yearsMS(this.years);
  }

  _dateLimit() {
    return this.past ? this.now.getTime() - this._timeOffsetMilliseconds() : this.now.getTime() + this._timeOffsetMilliseconds();
  }

  _randomDateMilliseconds(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  _generateRandom() {
    return this.past ? new Date(this._randomDateMilliseconds(this._dateLimit(), this.now)) : new Date(this._randomDateMilliseconds(this.now, this._dateLimit()));
  }

  generate() {
    return this.random ? this._generateRandom() : new Date(this._dateLimit());
  }

}

module.exports = DateGenerator;
