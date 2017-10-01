import { ActionCreator } from '../action-creator';

// Action Creators
export const ActionCreators = {
    ChangeTestPhase: new ActionCreator<'ChangeTestPhase', string>('ChangeTestPhase'),
     };

// Action Types
export type Action = typeof ActionCreators[keyof typeof ActionCreators];

// State
export type State = {
     testPhase: string;
  };

  export const initialState: State = {
    testPhase: "Suhail",
    
  };

  // Reducer
export default function reducer(state: State = initialState, action: Action): State {
  let partialState: Partial<State> | undefined;

  if (action.type === ActionCreators.ChangeTestPhase.type) {
    partialState = { testPhase: action.payload };
  }


  return partialState != null ? { ...state, ...partialState } : state;
}
  