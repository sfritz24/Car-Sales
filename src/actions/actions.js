export const ADD_FEATURES = 'ADD_FEATURES';

export const addFeatures = (feature) =>{
    return ({ type: ADD_FEATURES, payload: feature })
}