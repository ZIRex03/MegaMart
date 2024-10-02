import React, { useEffect, useState } from 'react'

import s from './Profile.module.scss'
import { useAppDispatch, useAppSelector } from '../../hooks';
import { updateUser } from '../../features/user/userSlice';

type Props = {}

const Profile = (props: Props) => {

    const dispatch = useAppDispatch();

    const {currentUser} = useAppSelector(({users}) => users);  

    const [toggleForm, setToggleForm] = useState(false);
    const [newValues, setNewValues] = useState({

        name: '',
        email: '',
        password: '',
        avatar: '',

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
        }
    }, [currentUser])

    const formStyle = {
        display: toggleForm? 'flex' : 'none'
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();

        const isEmpty = Object.values(newValues).some((val) => !val);

        if(isEmpty) return;
    
        dispatch(updateUser(newValues));

        setToggleForm(false)
    }

    const handleChange = ({target: {value, name}}:any) => {
        setNewValues({...newValues, [name]: value })
    }

  return (
    <div className={s['profile']}>

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

                    <button
                        className={s['button-edit']}
                        onClick={() => setToggleForm(prev => !prev)}
                    >
                        Редактирование
                    </button>
                </div>

                <form className={s['profile__inputs']} style={formStyle}>

                    <input
                        type='name'
                        name='name'
                        autoComplete='off'
                        value={newValues.name}
                        required
                        onChange={handleChange}
                    />

                    <input
                        type='email'
                        name='email'
                        autoComplete='off'
                        value={newValues.email}
                        required
                        onChange={handleChange}
                    />

                    <input
                        type='password'
                        name='password'
                        placeholder='Введите пароль'
                        autoComplete='off'
                        value={newValues.password}
                        required
                        onChange={handleChange}
                    />

                    <input
                        type='avatar'
                        name='avatar'
                        required
                        value={newValues.avatar}
                        onChange={handleChange}
                    />

                    <button
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Редактировать
                    </button>

                </form>

            </>
        )}

        
    </div>
  )
}

export default Profile