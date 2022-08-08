class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      return (
        <div>
          { /* Change code below this line */ }
            <h1>{this.state.name}</h1>
          { /* Change code above this line */ }
        </div>
      );
    }
  };

  /* lub przez przypisnie do zmiennej */
//   class MyComponent extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         name: 'freeCodeCamp'
//       }
//     }
//     render() {
//       // Change code below this line
//       const name = this.state.name
//       // Change code above this line
//       return (
//         <div>
//           { /* Change code below this line */ }
//             <h1>{name}</h1>
//           { /* Change code above this line */ }
//         </div>
//       );
//      }
//   };