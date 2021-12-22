import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";

export const Context = createContext(null)

//Начальная точка входа в приложение
ReactDOM.render(
    //Создаем контекст -глобальное хранилище данных и прокидываем его в компонент App
    <Context.Provider value={{
        user: new UserStore(),
        device: new DeviceStore(),
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

