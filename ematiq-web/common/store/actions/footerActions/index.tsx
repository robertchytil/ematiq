import {GET_FOOTER_DATA,GET_FOOTER_DATA_FAILED,GET_FOOTER_DATA_SUCCESS, FOOTER_LOADING_END,FOOTER_LOADING_START} from './constants'
import {FooterLoading,IFailedPayload,ISuccessPayload,TActionFailed,TActionSuccess} from './types'

export const footerStartLoading = ():FooterLoading => ({
    type: FOOTER_LOADING_START,
    payload: {isLoading:true}
})

export const footerEndLoading = ():FooterLoading => ({
    type: FOOTER_LOADING_END,
    payload: {isLoading:false}
})

export const getFooterDataAction = (payload: ISuccessPayload):IActionWithTypeAndPayload => ({
    type: GET_FOOTER_DATA,
    payload
})