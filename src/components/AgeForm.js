import React from 'react';

import './AgeForm.css';


class AgeForm extends React.Component {
  constructor(props){
    super(props);

    this.state = { day: '', month: '', year: '' };

  }


render() {  

  return (
    <div className="age-form">
      <div className="age-block">
        <div className="greetings">Bine Ai Venit</div>
        <form action="" noValidate>
          <div className="select-age">
                              {     /* Day */     }
            {this.state.day > 0 && this.state.day < 32 ? 
              <input onChange={(e) => this.setState({ day: e.target.value })} className="birth-check" type="number" placeholder='ZZ' maxLength='2' min='1' max='31' value={this.state.day} style={{backgroundColor: '#072e70'}} /> 
              : 
              <input onChange={(e) => this.setState({ day: e.target.value })} className="birth-check" type="number" placeholder='ZZ' maxLength='2' min='1' max='31' value={this.state.day} style={{backgroundColor: '#aa0024'}} />
            }
                                  {     /* Month */     }
            { this.state.month > 0 && this.state.month < 13 ?
               <input onChange={(e) => this.setState({ month: e.target.value })} className="birth-check" type="number" placeholder="LL" maxLength="2" min="1" max="12" value={this.state.month} style={{backgroundColor: '#072e70'}}/>
               :
               <input onChange={(e) => this.setState({ month: e.target.value })} className="birth-check" type="number" placeholder="LL" maxLength="2" min="1" max="12" value={this.state.month} style={{backgroundColor: '#aa0024'}}/>
            }
                                   {     /* Year */     }
            { this.state.year > 1939 && this.state.month < new Date().getFullYear() ? 
              <input onChange={(e) => this.setState({ year: e.target.value })} className="birth-check" type="number" placeholder="AAAA" maxLength="4" min="1940" max={new Date().getFullYear()} value={this.state.year} style={{backgroundColor: '#072e70'}} />
               :
             <input onChange={(e) => this.setState({ year: e.target.value })} className="birth-check" type="number" placeholder="AAAA" maxLength="4" min="1940" max={new Date().getFullYear()} value={this.state.year} style={{backgroundColor: '#aa0024'}} /> 
            }
            <div className="warning-message">
              Introduceți ziua, luna și anul nașterii
            </div>
            <div className="line">
              <hr />
            </div>
            {this.state.day && this.state.month && this.state.year.length>3 ?
              <div><button className='enter'>Intră</button></div> :
              null
              }
          </div>
        </form>
      </div>
    </div>
  );
  }
}
export default AgeForm;