//single selection
//multiple selection
import data from "./data"
import { useState } from "react"

export default function Accordian(){
    const [selected,setSelected]=useState(null);

    function handleSingleSelect(getCurrentId){
        setSelected(getCurrentId);
        
    }
    
    
    return <div className="wrapper">
        <div className="accordian">
            {
                data && data.length > 0 ? data.map(dataItem => (
                <div className="item" key={dataItem.id}>
                    <div className="title" onClick={()=>handleSingleSelect(dataItem.id)}>
                        <h3>{dataItem.question}</h3>
                        <button>+</button>
                    </div>
                    {
                        selected === dataItem.id ? (
                            <div className="content">{dataItem.answer}</div>
                        ) : null
                    }
                </div>
                )) : <div>No data found </div>
            }
        </div>
    </div>
    
}