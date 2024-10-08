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

    const [errorLogin, setErrorLogin] = useState(false);

    const handleChange = ({target: {value, name}}:any) => {
        setValues({...values, [name]: value })
    }

    const errorLoginStyle = {
        display: errorLogin? 'initial': 'none'
    }

    const handleSubmit = async(e:any) => {

        e.preventDefault();
        setErrorLogin(false);

        const isEmpty = Object.values(values).some((val) => !val);

        if(isEmpty) return;

        try{
           await dispatch(loginUser(values)).unwrap();
        }
        catch(err:any){
            setErrorLogin(true);
            return;
        }
        
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

        <form className={s['user__form-group']} >

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

            <p
                className={s['error-login']}
                style={errorLoginStyle}
            >
                Неверный логин или пароль
            </p>

            <button
                type='submit'
                className={s['signup-button']}
                onClick={handleSubmit}
                >
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