import React from "react";

interface ForEachProps<T> {
    items: T[],
    children: ((item: T) => any) | any,
}

export function ForEach<T>({
    items,
    children,
}: ForEachProps<T>) {
    const renderItem = typeof children === "function" ? children : () => children;

    return <>
        {items.map(renderItem)}
    </>;
};
