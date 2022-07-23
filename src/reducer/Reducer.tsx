export default function reducer(_state: State, action: Action): State {
  switch (action.type) {
    case "request":
      return { isLoading: true };
    case "success":
      return { isLoading: false, data: action.results };
    case "failure":
      return { isLoading: false, error: "Something went wrong" };
    default: {
      throw new Error("Unhandled action type");
    }
  }
}
