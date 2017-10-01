import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import { ActionCreators } from '../../store/test-componentReducer/reducer';
import { returntypeof } from 'react-redux-typescript';
import {SectionPage} from '../../components/section-page';

import { TestButton } from './components/test-button';

const mapStateToProps = (state : RootState) => ({
    testComponent: state.testComponent
});
const dispatchToProps = {
    changeTestPhase: ActionCreators.ChangeTestPhase.create,

};
const stateProps = returntypeof(mapStateToProps);
type Props = typeof stateProps & typeof dispatchToProps;
type State = {};
class TestContainer extends React.Component<Props, State> {
    componentWillMount() {
        this.props.changeTestPhase("pakistan");
     }
  
    render() {

        
        const {
            testPhase
          } = this.props.testComponent;

          const {
            changeTestPhase
          } = this.props;

        return (
               <SectionPage className ="u-centered">
               <p> Hello {testPhase}</p> 
               <TestButton value = {testPhase} funct = {changeTestPhase}> </TestButton>   
               </SectionPage>

        );
    }
}

export default connect(mapStateToProps,dispatchToProps)(TestContainer);