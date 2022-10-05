
import React from 'react';
import './style.css'


function Form ({title, content, onChange, onCreate})  {
    return (<div className='add-form'>
                
                    <div >
                        <label className="form-label">제목</label>
                        <input className="add-input" type="text" name="title" onChange={onChange} value={title}/>
                        <label className="form-label">내용</label>
                        <input className="add-input" type="text" name="content" onChange={onChange} value={content}/>   
                        <button className="button1" onClick={onCreate}>추가하기</button>                              
                   
                    
                    
                    </div>
                
            </div>)
}

export default Form;