import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import UserSignUpForm from './UserSignUpForm';

import s from './UserSignUpForm.module.scss'
import { toggleForm, toggleFormType } from '../../features/user/userSlice';
import UserLogInForm from './UserLogInForm';

type Props = {}

const UserForm = (props: Props) => {

    const {showForm, formType} = useAppSelector(({users}) => users);
    const dispatch = useAppDispatch();

    const closeForm = () => dispatch(toggleForm(false));
    const toggleCurrentForm = (type:string) => dispatch(toggleFormType(type))

    return (

        showForm? 
            <>
                <div className={s['overlay']} onClick={closeForm}></div>
                {formType === 'signup'? 
                    (
                        <UserSignUpForm toggleCurrentForm = {toggleCurrentForm} closeForm = {closeForm}/>)
                    :(
                        <UserLogInForm toggleCurrentForm = {toggleCurrentForm} closeForm={closeForm}/>
                    )
                }
            </> 
        : <></>
    )
}

export default UserForm