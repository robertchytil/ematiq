export type ItemType = {item:string,link:string};
type ItemTypeArr  = ItemType[];
export interface IFooterData {
    mode: 'light' | 'dark';
    subtitle: string;
    email:string;
    whatWeDoTitle:string;
    whoWeAreTitle:string;
    whatWeDoMenu:ItemTypeArr;
    whoWeAreMenu:ItemTypeArr;
    footerMenu:ItemTypeArr;
}

export type IFailedMessage = {message:string,error:number};