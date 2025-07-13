import { fireEvent, render, screen } from "@testing-library/react";
import TodoList from "./TodoList";

describe("TEST APP", () => {
  beforeEach(() => {
    // Очищаем localStorage перед каждым тестом
    localStorage.clear();
  });

  test("click event", () => {
    render(<TodoList />);

    // Вводим текст заметки
    const input = screen.getByPlaceholderText("write or search note...");
    fireEvent.change(input, { target: { value: "Test note" } });

    // Кликаем по кнопке "ADD NOTE"
    const addBtn = screen.getByText("ADD NOTE");
    fireEvent.click(addBtn);

    // Теперь кнопка "Edit note" должна появиться
    const editBtn = screen.getByTestId("test-btn");

    // Элемент с test-open должен быть в DOM
    expect(screen.getByTestId("test-open")).toBeInTheDocument();

    // Клик по кнопке — переходим в режим редактирования (скрываем форму добавления)
    fireEvent.click(editBtn);
    expect(screen.queryByTestId("test-open")).toBeNull();

    // Клик по кнопке "Cancel edit", чтобы вернуться обратно
    const cancelBtn = screen.getByText("Cancel edit");
    fireEvent.click(cancelBtn);

    // После отмены редактирования элемент test-open снова в DOM
    expect(screen.getByTestId("test-open")).toBeInTheDocument();
  });
});
