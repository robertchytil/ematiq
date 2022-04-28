import  {AnyAction} from 'redux';

export interface IActionWithTypeAndPayload<T,P> extends AnyAction {
    type:T;
    payload:P;
}

export interface IActionWithType<T> extends AnyAction {
    type:T;
}

export interface IActionLoading<T> extends IActionWithTypeAndPayload<T, { isLoading: boolean }> {}