import React , {useEffect} from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';


function Update() {
    const {userId} = useParams();
    const {register, handleSubmit} = useForm({defaultValues: async()=>(await axios.get(`http://localhost:5000/users/${userId}`)).data});
    const navi = useNavigate();

    function saveData(data){
        axios.put(`http://localhost:5000/users/${userId}`, data);
        //alert('record added.....')
        navi('/user/show')

    }
  return (
    <>
        <div className='container'>
            <center><h1>UPDATE FORM:</h1></center>
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
                <input type='submit' value='Update' className='btn btn-outline-success col-6 btn-lg'/>
                <input type='reset' value='Cancel' className='btn btn-outline-warning col-6 btn-lg'/>
            </form>
        </div>
    </>
  )
}
export default Update