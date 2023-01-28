const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return (state = [
        {
          title: action.payload.title,
          price: action.payload.price,
          category: action.payload.category,
          image: action.payload.image,
          id: action.payload.id,
        },
        ...state,
      ]);
    case "REMOVE_FROM_CART":
      return (state = state.filter(
        (value) => value.id != action.payload && value
      ));
    default:
      return state;
  }
};
