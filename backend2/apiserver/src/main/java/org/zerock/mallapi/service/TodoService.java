package org.zerock.mallapi.service;

import org.zerock.mallapi.domain.Todo;
import org.zerock.mallapi.dto.TodoDTO;

public interface TodoService {

    TodoDTO get(Long tno);

    default TodoDTO entityToDTO(Todo todo) {

        TodoDTO todoDTO = TodoDTO.builder().tno(todo.getTno()).title(todo.getTitle()).content(todo.getContent())
                .complete(todo.isComplete()).dueDate(todo.getDueDate()).build();

        return todoDTO;

    }

    default TodoDTO dtoToEntity(TodoDTO todoDTO) {

        TodoDTO todo = TodoDTO.builder().tno(todoDTO.getTno()).title(todoDTO.getTitle()).content(todoDTO.getContent())
                .complete(todoDTO.isComplete()).dueDate(todoDTO.getDueDate()).build();

        return todo;

    }

}
