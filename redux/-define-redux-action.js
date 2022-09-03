// Define an action here:

const action = {
    type: 'LOGIN'
  }

  /* Zdefiniuj akcję Redux
Ponieważ Redux jest strukturą zarządzania stanem, aktualizowanie stanu jest jednym z jego podstawowych zadań. W Redux wszystkie aktualizacje stanu są wyzwalane przez akcje rozsyłania. Akcja to po prostu obiekt JavaScript, który zawiera informacje o zdarzeniu akcji, które miało miejsce. Sklep Redux otrzymuje te obiekty akcji, a następnie odpowiednio aktualizuje swój stan. Czasami akcja Redux również przenosi pewne dane. Na przykład akcja przenosi nazwę użytkownika po zalogowaniu się użytkownika. Chociaż dane są opcjonalne, akcje muszą zawierać właściwość typu, która określa „typ” akcji, która wystąpiła.

Pomyśl o działaniach Redux jako komunikatorach, które dostarczają informacje o zdarzeniach zachodzących w Twojej aplikacji do sklepu Redux. Sklep prowadzi następnie działalność polegającą na aktualizowaniu stanu na podstawie zaistniałej akcji.

Pisanie akcji Redux jest tak proste, jak zadeklarowanie obiektu z właściwością type. Zadeklaruj akcję obiektu i nadaj jej typ właściwości ustawiony na ciąg „LOGIN”. */