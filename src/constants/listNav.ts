import {ROUTER} from './enums';
export interface ILink {
  label: string;
  route: ROUTER;
}
export const listNavigation: ILink[] = [
  {
    label: 'Base Gallery',
    route: ROUTER.APP_GALLERY,
  },
  {
    label: 'Base Input Formik',
    route: ROUTER.INPUT_FORMIK,
  },
];
