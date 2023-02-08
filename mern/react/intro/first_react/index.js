// // ExampleButton component
// class ExampleButton extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { isCLicked: false };
//     }
//     render() {
//         if (this.state.isCLicked) {
//             return 'You clicked this';
//         }
//         return React.createElement(
//             'button',
//             { onClick: () => this.setState({ isCLicked: true }) },
//             'Click me!'
//         );
//     }
// }

// // select root div
// const domContainer = document.querySelector('#root');
// // create the root of react dom
// const root = ReactDOM.createRoot(domContainer);
// // render what we see
// root.render(React.createElement(ExampleButton));

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement("h1", {}, "Our First React page has rendered"));    



