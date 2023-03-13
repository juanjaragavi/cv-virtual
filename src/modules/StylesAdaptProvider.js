import React, { useContext } from "react";

const styleAdaptContext = React.createContext();

export function useStyleAdaptContext() {
    return useContext(styleAdaptContext);
}

function StylesAdaptProvider(props) {
    const langbtnTriggerStyle = () => {
    console.log("A click has been made");
    };

    return (
    <styleAdaptContext.Provider value={langbtnTriggerStyle}>
        {props.children}
    </styleAdaptContext.Provider>
    );
}

export default StylesAdaptProvider;
