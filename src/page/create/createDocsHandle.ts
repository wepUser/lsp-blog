import _ from 'lodash';

export type editFunc = ((v: string) => void) | null;
//editValue-change事件监听
export function editChange(f: editFunc, v: string, setF: editFunc) {
    _.throttle(f, 500);
    setF(v);
}