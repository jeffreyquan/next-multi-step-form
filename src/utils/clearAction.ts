export default function clearAction(state: any, payload: any) {
  return {
    ...state,
    ...payload,
  };
}
