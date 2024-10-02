import React, { useState } from 'react'
import { createUser } from '../../features/user/userSlice';
import { useAppDispatch} from '../../hooks';

import s from './UserSignUpForm.module.scss'
import { IoMdClose } from "react-icons/io";


type Props = {
    closeForm: any,
    toggleCurrentForm: any,
}

const UserSignUpForm = ({closeForm, toggleCurrentForm}: Props) => {

    const dispatch = useAppDispatch();

    const [values, setValues] = useState({

        name: '',
        email: '',
        password: '',
        avatar: '',

    });

    // const [styleP, setStyleP] = useState({
    //     display: 'none'
    // })

    // const [styleInput, setStyleInput] = useState({
    //     border: '0px'
    // })
    

    const handleChange = ({target: {value, name}}:any) => {
        setValues({...values, [name]: value })
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();

        const isEmpty = Object.values(values).some((val) => !val);

        if(isEmpty) return;

        // const availableEmails = await dispatch(checkEmail(values)).unwrap();
        // if(!availableEmails){
        //     setStyleP({...styleP, display:'initial'})
        //     setStyleInput({...styleInput, border: '4px solid #f60505'})
        //     return;
        // }
    
        dispatch(createUser(values));
        closeForm();
    }

    

  return (

    <div className={s['user__form']}>

        <IoMdClose
            className={s['close-icon']}
            title='Close Form'
            onClick={closeForm}
        /> 
        <h2 className={s['user__form-title']}>Регистрация</h2>

        <form className={s['user__form-group']} onSubmit={handleSubmit}>

            <input
                type="name"
                name="name"
                value={values.name}
                placeholder='Имя пользователя'
                autoComplete='off'
                required
                onChange={handleChange}
            />

            <input
                type="email"
                name="email"
                value={values.email}
                placeholder='Почта'
                autoComplete='off'
                required
                onChange={handleChange}
            />

            {/* <p
                style={styleP}
                className={s['email-error']}>
                Такая почта уже зарегистрирована
            </p> */}

            <input
                type="password"
                name="password"
                value={values.password}
                placeholder='Пароль'
                autoComplete='off'
                required
                onChange={handleChange}
            />

            <input
                type="avatar"
                name="avatar"
                value={values.avatar}
                placeholder='Фотография профиля (URL)'
                onChange={handleChange}
            />

            <p className={s['icon-warning']}>
                Функция фотографии профиля работает в тестовом режиме. Вставьте ссылку на желаемую фотографию
            </p>

            <button
                type='submit'
                className={s['signup-button']}>
                Зарегистрироваться
            </button>
        </form>

        <p
            className={s['login-button']}
            onClick={() => toggleCurrentForm('login')}
        >
            <span>Уже есть аккаунт?</span> Войти
        </p>
    </div>
  )
}

export default UserSignUpForm