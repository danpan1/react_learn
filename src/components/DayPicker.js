/**
 * Created by Danpan on 14.10.16.
 */
import React from 'react';
import moment from 'moment';
import DayPicker, {DateUtils} from 'react-day-picker';

import 'react-day-picker/lib/style.css';

export default class Range extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  state = {
    from: null,
    to: null,
  };

  handleDayClick(e, day) {
    // console.log(this.state);
    const range = DateUtils.addDayToRange(day, this.state);
    // console.log(range);
    this.setState(range);
  }

  handleResetClick(e) {
    e.preventDefault();
    this.setState({
      from: null,
      to: null,
    });
  }

  render() {
    const {from, to} = this.state;
    return (
      <div className="RangeExample">
        { !from && !to && <p>Please select the <strong>first day</strong>.</p> }
        { from && !to && <p>Please select the <strong>last day</strong>.</p> }
        { from && to &&
        <p>
          You chose from { moment(from).format('L') } to { moment(to).format('L') }.
          { ' ' }<a href="#" onClick={ this.handleResetClick }>Reset</a>
        </p>
        }
        <DayPicker
          ref="daypicker"
          numberOfMonths={ 1 }
          selectedDays={ day => DateUtils.isDayInRange(day, {from, to}) }
          onDayClick={ this.handleDayClick }
        />
      </div>
    );
  }

}