const store = Redux.createStore(
    (state = 5) => state
  );
  
  // Change code below this line
  
  const currentState = store.getState()

//   Uzyskaj stan ze sklepu Redux
// Obiekt sklepu Redux udostępnia kilka metod, które umożliwiają interakcję z nim. Na przykład możesz pobrać bieżący stan przechowywany w obiekcie sklepu Redux za pomocą metody getState().

// Kod z poprzedniego wyzwania jest przepisany bardziej zwięźle w edytorze kodu. Użyj store.getState(), aby pobrać stan ze sklepu i przypisz go do nowej zmiennej currentState.