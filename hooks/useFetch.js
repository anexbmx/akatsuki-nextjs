import { useEffect, useReducer } from "react";

const initialState = {
    data: [],
    status: "idle",
    error: null,
};

const fetchReducer = (state, action) => {
    switch (action.type) {
        case "FETCHING":
            return {
                ...state,
                status: "fetching",
            };
        case "FETCHED":
            return {
                ...state,
                data: action.payload,
                status: "fetched",
            };
        default:
            return {
                ...state,
                data: [],
                status: "error",
                error: action.payload,
            };
    }
};

export default function useFetch(url) {
    const [state, dispatch] = useReducer(fetchReducer, initialState);

    useEffect(() => {
        if (!url) return;

        const fetchData = async () => {
            try {
                dispatch({ type: "FETCHING" });

                const response = await fetch(url);
                if (!response.ok) throw Error(response.statusText);

                const data = await response.json();
                dispatch({ type: "FETCHED", payload: data });
            } catch ({ message }) {
                dispatch({ type: "ERROR", payload: message });
            }
        };
        fetchData();
    }, [url]);

    return state;
}
