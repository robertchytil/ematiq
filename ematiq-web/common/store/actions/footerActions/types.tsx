import {GET_FOOTER_DATA,GET_FOOTER_DATA_FAILED,GET_FOOTER_DATA_SUCCESS,FOOTER_LOADING_END,FOOTER_LOADING_START} from './constants'
import {IActionWithTypeAndPayload,IActionLoading, IActionWithType} from '../../types'
import {IFooterData,IFailedMessage} from '../../../data/FooterData'

export type ISuccessPayload = IFooterData[];
export type IFailedPayload = IFailedMessage;
export type TActionWithType = IActionWithType<typeof GET_FOOTER_DATA>
export type TActionWithTypeAndPayload = IActionWithType<typeof GET_FOOTER_DATA>
export type TActionSuccess = IActionWithTypeAndPayload<typeof GET_FOOTER_DATA_SUCCESS,ISuccessPayload>;
export type TActionFailed = IActionWithTypeAndPayload<typeof GET_FOOTER_DATA_FAILED,IFailedPayload>;
export type FooterLoading = IActionLoading<typeof FOOTER_LOADING_START | typeof FOOTER_LOADING_END>;
  