import React from "react";
import style from './List.module.scss'

function List() {
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'Javascript',
        tempo: '01:00:00'
    }, {
        tarefa: 'Typescrit',
        tempo: '03:00:00'
    }]
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudo do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
            <li key={index} className={style.item}>
                <h3>{item.tarefa}</h3>
                <span>{item.tempo}</span>
            </li>
        ))}
      </ul>
    </aside>
  );
}

export default List;
