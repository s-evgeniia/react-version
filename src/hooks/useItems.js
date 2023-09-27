import {useMemo} from "react";

//Сортировка товаров по категориям
export const useSortedItems = (items, sort) => {
    const sortedItems = useMemo(() => {
        if(sort) {
            return [...items].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return items;
    }, [sort, items])

    return sortedItems;
}

//Сортировка и поиск товаров
export const useItems = (items, sort, query) => {
    const sortedItems = useSortedItems(items, sort);

    const sortedAndSearchedItems = useMemo(() => {
        return sortedItems.filter(item => item.title.toLowerCase().includes(query))
    }, [query, sortedItems])

    return sortedAndSearchedItems;
}