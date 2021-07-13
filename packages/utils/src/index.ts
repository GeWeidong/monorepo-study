import { variableTypeDetection } from './is';

export const init = (num: number) => {
    if (!variableTypeDetection.isNumber(num)) {
        console.log('必须传入number类型');
        alert(2345);
    }
    alert(num);
}
