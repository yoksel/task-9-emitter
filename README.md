Запуск локально:

```npm start```

 ---

Поиск реализован в ```src/Emitter.js```.

Сложность:

* `on()` содержит `push` — O(1)
* `off()` содержит `filter` — O(N)
* `emit()` содержит `forEach` — O(N)
