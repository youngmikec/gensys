export const getItem = (key: string) => {
    const data: any = localStorage.getItem(key);
    return data !== undefined ? JSON.parse(data) : null;
}
   
export const setItem = (key: string, value: any) => {
    const data: string = JSON.stringify(value);
    localStorage.setItem(key, data);
}

export const sortArray = (unsortedArray: any[], field: string): Array<any> => {
    const items = [...unsortedArray];
    let sortedArray: Array<any> = [];
    if(field === 'createdAt'){
        sortedArray = items.sort((a, b) => {
            const d1: any = new Date(a[field]);
            const d2: any = new Date(b[field]);
            return d1 - d2;
        });   
    }else {
        sortedArray = items.sort((a, b) => {
            return a[field] < b[field] ? -1 : 1;
        });
    }
    return sortedArray;
}