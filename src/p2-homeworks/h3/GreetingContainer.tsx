import React, {ChangeEvent, useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>//типизированный  users , см. from "./HW3"
    addUserCallback: (name: string) => void // !!!!!
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>(""); // см.type GreetingPropsType в Greeting.tsx
    const [error, setError] = useState<boolean>(false); // -//-

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // e-объект
        setName(e.currentTarget.value); // e.currentTarget.value-элемент, кот.вызывает обработчик в процессе всплытия
    };
    const addUser = () => {
        if (name === '') {
            setError(true)
        } else {
            setError(false)
            setTimeout(() => alert(`Hello ${name} !`), 10);
            addUserCallback(name)
        }
    };

    const totalUsers = users.length; // Возвращает строковое представление массива.

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    );
}

export default GreetingContainer;
