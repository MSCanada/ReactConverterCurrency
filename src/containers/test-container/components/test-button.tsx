import * as React from 'react';

interface Props {
   value : any;
   funct : any;
  }
  
  interface State {
  }


  export class TestButton extends React.Component<Props, State> {

    render(): JSX.Element {
        const {
            value,
            funct
          } = this.props;

          return (
           <div>
            <p> {value} </p>
             <button onClick ={() => funct("Michael Jackson") }> Click </button>
           </div>
          


          );
    }
  }