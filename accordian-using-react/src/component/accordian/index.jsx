//single selection
//multiple selection
import data from "./data"
import { useState } from "react"

export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enablemultiSelction, setenablemultiSelction] = useState(false);
    const [multiple, setmultiple] = useState([]);

    function handleSingleSelect(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);

    }
    function handleMultiselect(getCurrentId) {
        let cpymulltiple = [...multiple];
        const findIndexofCurrentId = cpymulltiple.indexOf(getCurrentId);
        console.log(findIndexofCurrentId);
        if(findIndexofCurrentId===-1){
            cpymulltiple.push(getCurrentId);
        }else cpymulltiple.splice(findIndexofCurrentId,1)
        setmultiple(cpymulltiple);

    }
    console.log(selected,multiple);
    
    return <div className="wrapper">
        <button onClick={() => setenablemultiSelction(!enablemultiSelction)}>{enablemultiSelction ? "Disable Multi Selection" : "Enable Multi Selection"}</button>
        <div className="accordian">
            {
                data && data.length > 0 ? data.map(dataItem => (
                    <div className="item" key={dataItem.id}>
                        <div className="title" 
                        onClick= { enablemultiSelction ? 
                            () => handleMultiselect(dataItem.id) : 
                            () => handleSingleSelect(dataItem.id) }>
                            <h3>{dataItem.question}</h3>
                            <button>+</button>
                        </div>
                        {
                            enablemultiSelction ?
                            multiple.indexOf(dataItem.id) !==-1 && 
                            <div className="content">{dataItem.answer}</div> :
                            selected === dataItem.id && <div className="content">{dataItem.answer}</div>
                        }
                        {
                            selected === dataItem.id || multiple.indexOf(dataItem.id) !==-1? (
                                <div className="content">{dataItem.answer}</div>
                            ) : null
                        }
                    </div>
                )) : <div>No data found </div>
            }
        </div>
    </div>

}