import { SwitchContext } from "./switch-context";

export const Switch = ({
    children
}) => {
    const switchContext = {};
    return <SwitchContext.Provider value={switchContext}>
        {children}
    </SwitchContext.Provider>;
};
