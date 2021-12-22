import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";

/*
React Router DOM — это модуль узла, который предназначен для маршрутизации в веб-приложениях.
 Он позволяет инженерам создавать маршруты для одностраничного приложения React.
*/

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    //Будет выполнен после встраиваниния  компонента в DOM
    //При новом отображении компонента повторно он выполняться уже не будет. Назовем этот хук “одноразовым”.
    //Выполнится после рендеринга, useMemo - до
    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
    );
});

export default App;
