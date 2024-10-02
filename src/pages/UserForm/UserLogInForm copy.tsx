import React, { useState } from 'react'
import { loginUser } from '../../features/user/userSlice';
import { useAppDispatch } from '../../hooks';

import s from './UserSignUpForm.module.scss'
import { IoMdClose } from "react-icons/io";


type Props = {
    closeForm: any,
    toggleCurrentForm: any,
}

const UserLogInForm = ({closeForm, toggleCurrentForm}: Props) => {

    const dispatch = useAppDispatch();

    const [values, setValues] = useState({
        email: '',
        password: '',

    });

    const handleChange = ({target: {value, name}}:any) => {
        setValues({...values, [name]: value })
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();

        const isEmpty = Object.values(values).some((val) => !val);

        if(isEmpty) return;

        dispatch(loginUser(values));
        closeForm();
    }

  return (

    <div className={s['user__form']}>

        <IoMdClose
            className={s['close-icon']}
            title='Close Form'
            onClick={closeForm}
        /> 
        <h2 className={s['user__form-title']}>Вход</h2>

        <form className={s['user__form-group']} onSubmit={handleSubmit}>

            <input
                type="email"
                name="email"
                value={values.email}
                placeholder='Почта'
                autoComplete='off'
                required
                onChange={handleChange}
            />

            <input
                type="password"
                name="password"
                value={values.password}
                placeholder='Пароль'
                autoComplete='off'
                required
                onChange={handleChange}
            />

            <button
                type='submit'
                className={s['signup-button']}>
                Войти
            </button>
        </form>

        <p
        className={s['login-button']}
        onClick={() => toggleCurrentForm('signup')}
        >
            Зарегистрироваться
        </p>
    </div>
  )
}

export default UserLogInForm