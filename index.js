fetch(
    "https://raw.githubusercontent.com/z4ng1ew/JSON.exampl/develop/exampl.JSON"
)
    //.then((res) => console.log(res));
    .then((res) => res.json()) // Преобразует тело ответа в объект JavaScript
    .then((data) => {
        // Вставляем заголовок
        document.body.insertAdjacentHTML(
            "afterbegin",
            "<h1>Fruits</h1>"
        );

        // Перебираем массив фруктов и вставляем информацию о каждом
        data.forEach((fruit) => {
            const {name, calories, vitamins} = fruit;
            const vitaminsString = Object.entries(vitamins).map(([vitamin, value]) => `${vitamin}: ${value}`).join(', ');

        //Вставляем информацию о фрукте
        document.body.insertAdjacentHTML(
            "beforeend",
            `
            <div>
                <h2>${name}</h2>
                <p class = "position">Calories: ${calories}, Vitamins: ${vitaminsString}</p>
            </div>
            `
            );
        
        });
    })    
    .catch((error) => console.error("Ошибка загрузки JSON:", error));

fetch("https://660d7e2f6ddfa2943b348f1b.mockapi.io/gggggg")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Ошибка загрузки данных:", error));




fetch("https://660d7e2f6ddfa2943b348f1b.mockapi.io/gggggg")
    .then((response) => response.json())
    .then((data) => console.log(data));



    



/*    
    
Конструкция Object.entries(vitamins) используется для преобразования объекта vitamins в массив, содержащий его ключи и значения в виде массивов.

Давайте разберем эту конструкцию по частям:

Object: Это встроенный в JavaScript объект, предоставляющий набор методов для работы с объектами.

.entries(): Это метод объекта Object, который возвращает массив, содержащий массивы [ключ, значение] для каждого свойства объекта.

vitamins: Это объект, который вы хотите преобразовать в массив его ключей и значений.

Таким образом, Object.entries(vitamins) преобразует объект vitamins в массив, где каждый элемент массива представляет собой массив с двумя элементами: ключом и значением из объекта vitamins.

Например, если vitamins выглядит как { A: 1, C: 8 }, то Object.entries(vitamins) вернет массив [['A', 1], ['C', 8]], где 'A' и 'C' - это ключи, а 1 и 8 - значения соответственно.

*/




/*
.join(): Это метод массива, который объединяет все элементы массива в одну строку. Если метод join() вызывается без аргументов, то элементы массива будут объединены через запятую.

', ': Это строка-разделитель, которая указывает, что каждый элемент массива должен быть разделен запятой и пробелом.

Таким образом, вызов .join(', ') преобразует массив строк, содержащих ключи и значения витаминов, в одну строку, где каждая пара ключ-значение разделена запятой с пробелом. Это позволяет создать читаемую строку, содержащую информацию о витаминах в формате "витамин: значение".

*/