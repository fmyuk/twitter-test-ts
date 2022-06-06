export const actionTypes = {
  CHANGE_MESSAGE: "CHANGE_MESSAGE"
} as const;

export const actionCreators = {
  changeMessage: (message: string) => ({
    type: actionTypes.CHANGE_MESSAGE,
    message
  })
};