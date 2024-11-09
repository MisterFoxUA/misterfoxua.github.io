export async function fetchSimpleDataArray(URL: string) {
    const apiUrl = URL;

    try {
        const response = await fetch(apiUrl, {
            headers: {
                'Accept-Encoding': 'gzip, deflate, br', // Запитуємо стиснення, якщо підтримується
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Перетворюємо об'єкт в масив і фільтруємо null значення
        const itemsArray = Object.values(data).filter(item => item !== null);

        // Повертаємо отримані дані
        return itemsArray;
    } catch (error) {
        console.error("Помилка при отриманні даних:", error);
        return null; // Повертаємо null в разі помилки
    }
}
