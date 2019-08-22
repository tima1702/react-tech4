// ТУТ НИЧЕГО НЕТ НЕ СМОТРИТЕ СЮДА
//  const defaultState = {
//   error: null,
//   info: null
// };
//
// class ErrorBoundary extends Component {
//   constructor(props) {
//     super(props);
//     this.state = defaultState;
//     this.resetError = this.resetError.bind(this);
//   }
//
//   static getDerivedStateFromError(error, info) {
//     console.log("getDerivedStateFromError", error, info);
//     return { error };
//   }
//
//   componentDidCatch(error, info) {
//     console.log("это так же можно отправить в какой то логер", error, info);
//     this.setState({
//       info
//     });
//   }
//
//   resetError() {
//     this.setState(defaultState);
//   }
//
//   render() {
//     const { error, info } = this.state;
//
//     if (error) {
//       return (
//         <>
//           <h2>ERROR: {error.toString()}</h2>
//           <br />
//           {info && (
//             <details style={{ whiteSpace: "pre-wrap" }}>
//               {info.componentStack}
//             </details>
//           )}
//           <br />
//           <button onClick={this.resetError}>Давай по новой</button>
//         </>
//       );
//     }
//
//     return this.props.children;
//   }
// }
//
// export default ErrorBoundary;
