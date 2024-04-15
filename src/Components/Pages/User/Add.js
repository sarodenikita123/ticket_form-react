import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Add() {
    const {register, handleSubmit} = useForm();
    const navi = useNavigate();

    function saveData(data){
        axios.post('http://localhost:5000/users', data);
        //alert('record added.....')
        navi('/user/show')

    }
  return (
    <>
        <div className='container'>
            <center><h1>TICKET FORM:</h1></center>
            <form onSubmit={handleSubmit(saveData)}>
                <label htmlFor='t'>Ticket No:</label>
                <input type='number' id='t' className='form-control'
                {...register('tno')}/>
                <br/><br/>
                <label htmlFor='n'>NAME:</label>
                <input type='text' id='n' className='form-control'
                {...register('name')}/>
                <br/><br/>
                <label htmlFor='p'>PLACE:</label>
                <input type='text' id='p' className='form-control'
                {...register('place')}/>
                <br/><br/>
                <input type='submit' value='Add' className='btn btn-outline-success col-6 btn-lg'/>
                <input type='reset' value='Cancel' className='btn btn-outline-warning col-6 btn-lg'/>
            </form>
        </div>
    </>
  )
}

export default Add