// import { applyMiddleware, createStore } from  '@reduxjs/toolkit';
// import { composeWithDevTools } from '/';
import createSagaMiddleware from 'redux-saga';
// import { IReconcilationState, reconciliationToolRootReducer } from './reducers';
// import { reconciliationToolSagas } from './sagas';

// export type { IReconcilationState };

const sagaMiddleware = createSagaMiddleware();

// const getMiddleware = () => {
//   if (process.env.NODE_ENV === 'production') {
//     return applyMiddleware(sagaMiddleware);
//   }
//   return composeWithDevTools(applyMiddleware(sagaMiddleware));
// };

// export const store = createStore(reconciliationToolRootReducer, getMiddleware());

// sagaMiddleware.run(reconciliationToolSagas);
