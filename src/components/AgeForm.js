import React from 'react';

import './AgeForm.css';


class AgeForm extends React.Component {
  constructor(props){
    super(props);

    this.state = { day: '', month: '', year: '' };

  }

dayHandler = (e) => {
  this.setState({ day: e.target.value})
}

monthHandler = (e) => {
  this.setState({ month: e.target.value })
}

yearHandler = (e) => {
  this.setState({ year: e.target.value })
}

render() {
  return (
    <div className="age-form">
      <div className="age-block">
        <div className="greetings">Bine Ai Venit</div>
        <form action="" noValidate>
          <div className="select-age">
            <input onChange={this.dayHandler} className="birth-check" type="number" placeholder='ZZ' maxLength='2' min='1' max='31' />
            <input onChange={this.monthHandler} className="birth-check" type="number" placeholder='LL' maxLength='2'/>
            <input onChange={this.yearHandler} className="birth-check" type="number" placeholder='AAAA' maxLength='4'/>
            <div className="warning-message">
              Introduceți ziua, luna și anul nașterii
            </div>
            <div className='line'><hr/></div>
          </div>
        </form>
      </div>
    </div>
  );
  }
}
export default AgeForm;