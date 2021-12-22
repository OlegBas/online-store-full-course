import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    //Создаем контекст, чтобы объект user был доступен внутри данного компонента
    const {user} = useContext(Context)

    console.log(user)
    /*Route - отдельный маршрут
    path - путь до страницы 
    component - компонент страницы
    exact - отработает, если path будет полностью совпадать с запрошенным url
    key - нужен для эффективного рендеринга
    Redirect - отработает, если ни один url не выполнится, to - путь
    */
    return (
        <Switch>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={SHOP_ROUTE}/>
        </Switch>
    );
});

export default AppRouter;
