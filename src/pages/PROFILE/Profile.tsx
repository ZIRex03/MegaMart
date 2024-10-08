import React, { useEffect, useState } from 'react'

import s from './Profile.module.scss'
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutProfile, updateUser } from '../../features/user/userSlice';

import { IoMdClose } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";
import classNames from 'classnames';

type Props = {}

const Profile = (props: Props) => {

    const dispatch = useAppDispatch();

    const {currentUser} = useAppSelector(({users}) => users);
      

    const [toggleForm, setToggleForm] = useState(false);
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [error, setError] = useState(null);

    const logout = () => dispatch(logoutProfile());


    const [newValues, setNewValues] = useState({

        name: '',
        email: '',
        avatar: '',

    });

    const [newPassword, setNewPassword] = useState({
        password: '',
    })

    const [successBox, setSuccessBox] = useState({
        status: '',
        text: '',
    });

    const [oldValues, setOldValues] = useState({

        name: '',
        email: '',
        password: '',
        avatar: '',

    });

    useEffect(() => {
        if(!currentUser) return;
        else{
            setOldValues(currentUser);
            setNewValues(currentUser);
            setNewPassword(currentUser);
        }
    }, [currentUser])

    const formStyle = {
        display: toggleForm? 'flex' : 'none'
    }

    const passwordErrorStyle = {
        display: passwordError? 'initial' : 'none'
    }
    
    const handleSubmit = async(e:any) => {

        e.preventDefault();

        const isEmpty = Object.values(newValues).some((val) => !val);

        if(isEmpty) return;
    
        try{
            dispatch(updateUser(newValues));
        }
        catch(err:any){
            console.log(err)
            return;
        }


        setSuccessBox({...successBox, status:'active', text:'Данные обновлены'});
        setTimeout(() => setSuccessBox({...successBox, status:'', text:''}), 2000)
        
    }

    const handleSubmitPassword = async(e:any) => {

        e.preventDefault();
        setPasswordError(false);

        const isEmpty = Object.values(newPassword).some((val) => !val);
        if(isEmpty) return;

        const inputOldPassword = document.getElementById('old-password') as HTMLInputElement;
        const inputNewPassword = document.getElementById('new-password') as HTMLInputElement;

        if(inputOldPassword.value !== oldValues.password){
            setPasswordError(true)
            return;
        }
    
        try{
            await dispatch(updateUser(newPassword)).unwrap();
        }
        catch(err:any){
            console.log(err)
            return;
        }

        inputOldPassword.value = "";
        inputNewPassword.value = "";
        setToggleForm(false);
        setSuccessBox({...successBox, status:'active', text:'Пароль успешно изменен'});
        setTimeout(() => setSuccessBox({...successBox, status:'', text:''}), 2000)
           
    }

    const handleChange = ({target: {value, name}}:any) => {

        setNewValues({...newValues, [name]: value })
        
    }

    const handleChangePassword = ({target: {value, name}}:any) => {

        setNewPassword({...newPassword, [name]: value })
        
    }

  return (
    <div className={s['profile']}>

        <div className={classNames(s['sucess'], s[`${successBox.status}`])}>
            <p>{successBox.text}</p>
        </div>

        {!currentUser ? <h2>Вы должны войти в профиль</h2> : (

            <>
                <div className={s['profile__header']}>

                    <div className={s['profile__header-user']}>

                        <div className={s['profile__header-user-image']}>
                            <img src={oldValues.avatar} alt=''/>
                        </div>

                        <div className={s['profile__header-user-info']}>
                            <p className={s['name']}>{oldValues.name}</p>
                            <p className={s['email']}>{oldValues.email}</p>
                        </div>

                    </div>  

                </div>

                <form className={s['profile__inputs']}>

                    <div className={s['profile__inputs-names']}>

                        <input
                            type='name'
                            name='name'
                            autoComplete='off'
                            placeholder='Имя'
                            value={newValues.name}
                            required
                            onChange={handleChange}
                        />

                        <input
                            type='email'
                            name='email'
                            placeholder='Почта'
                            autoComplete='off'
                            value={newValues.email}
                            required
                            onChange={handleChange}
                        />  

                    </div>

                    <input
                        type='avatar'
                        name='avatar'
                        placeholder='Аватар'
                        required
                        value={newValues.avatar}
                        onChange={handleChange}
                    />

                    <button
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Сохранить изменения
                    </button>

                </form>

                <div className={s['profile__footer']}>

                    <button
                        className={s['button-password']}
                        onClick={() => setToggleForm(prev => !prev)}
                    >
                        Сменить пароль
                    </button>

                    <button
                        className={s['button-logout']}
                        onClick={logout}
                    >
                        Выйти
                    </button>

                </div>


                <div
                    className={s['overlay']}
                    style={formStyle}
                >

                    <div className={s['password__box']}>

                        <div className={s['password__box-title']}>
                            <p>Сменить пароль</p>
                            <IoMdClose
                                className={s['close-icon']}
                                onClick={() => setToggleForm(prev => !prev)}
                            />
                        </div>

                        <form className={s['password__box-form']}>

                            <div className={s['input-password-box']}>

                                <input
                                    id='old-password'
                                    type={showOldPassword? 'name' : 'password'}
                                    name='password'
                                    placeholder='Введите прежний пароль'
                                    autoComplete='off'
                                    required
                                />

                                <FaEyeSlash
                                    className={s['show-password']}
                                    onClick={() => setShowOldPassword(prev => !prev)}
                                />

                            </div>

                            <div className={s['input-password-box']}>

                                <input
                                    id='new-password'
                                    type={showNewPassword? 'name' : 'password'}
                                    name='password'
                                    placeholder='Введите новый пароль'
                                    autoComplete='off'
                                    required
                                    onChange={handleChangePassword}
                                />

                                <FaEyeSlash
                                    className={s['show-password']}
                                    onClick={() => setShowNewPassword(prev => !prev)}
                                />

                            </div>

                            <p
                                className={s['password-error']}
                                style={passwordErrorStyle}
                            >
                                Прежний пароль введен неверно
                            </p>

                            <button
                                type='submit'
                                onClick={handleSubmitPassword}
                            >
                                Сохранить
                            </button>

                        </form>

                    </div>
                    
                </div>

            </>
        )}

        
    </div>
  )
}

export default Profile